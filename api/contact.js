// Vercel serverless function: receives contact-form submissions, forwards the
// lead to an n8n webhook (server-side → no browser CORS), and pings Telegram.
//
// Env vars (set in Vercel → Settings → Environment Variables):
//   TELEGRAM_BOT_TOKEN  — from @BotFather
//   TELEGRAM_CHAT_ID    — chat/group id for the ping
//   N8N_WEBHOOK_URL     — (optional) overrides the default below; swap the
//                         "/webhook-test/" URL for the live "/webhook/" one in prod
//
// Frontend (src/pages/Home.jsx) POSTs JSON:
//   { name, email, company, employee_count, message, botField }

const DEFAULT_N8N_WEBHOOK = 'https://dgtlbase.app.n8n.cloud/webhook-test/lead-capture';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    const { name, email, company, employee_count, message, botField } = req.body || {};

    // Honeypot: real users never fill this hidden field — silently accept & drop bots.
    if (botField) return res.status(200).json({ success: true });

    if (!email || !message) {
        return res.status(400).json({ success: false, error: 'Missing email or message' });
    }

    const lead = {
        name: name || '',
        email,
        company: company || '',
        employee_count: employee_count || '',
        message,
    };

    // 1) Forward the full lead to n8n (server-side, so no CORS). Best-effort.
    const n8nUrl = process.env.N8N_WEBHOOK_URL || DEFAULT_N8N_WEBHOOK;
    const n8nForward = fetch(n8nUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
    })
        .then((r) => {
            if (!r.ok) console.error('n8n webhook returned non-2xx:', r.status);
            return r.ok;
        })
        .catch((err) => {
            console.error('n8n webhook request failed:', err);
            return false;
        });

    // 2) Telegram ping with the full lead. Plain text avoids parse_mode escaping issues.
    let telegramOk = false;
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (token && chatId) {
        const text =
            `📬 New lead — suneelp.com\n\n` +
            `👤 Name: ${lead.name || '—'}\n` +
            `📧 Email: ${lead.email}\n` +
            `🏢 Company: ${lead.company || '—'}\n` +
            `👥 Employees: ${lead.employee_count || '—'}\n` +
            `💬 Message:\n${lead.message}`;
        try {
            const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
            });
            const data = await tgRes.json();
            telegramOk = !!data.ok;
            if (!data.ok) console.error('Telegram API error:', data);
        } catch (err) {
            console.error('Telegram request failed:', err);
        }
    } else {
        console.error('Telegram env vars missing (TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID)');
    }

    const n8nOk = await n8nForward;

    // Succeed if the lead reached at least one destination.
    if (telegramOk || n8nOk) {
        return res.status(200).json({ success: true });
    }
    return res.status(502).json({ success: false, error: 'Delivery failed' });
}
