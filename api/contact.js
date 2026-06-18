// Vercel serverless function: forwards contact-form submissions to Telegram.
//
// Secrets live in Vercel env vars (never in client code):
//   TELEGRAM_BOT_TOKEN  — from @BotFather
//   TELEGRAM_CHAT_ID    — your chat/group id (where the ping is sent)
//
// The frontend (src/pages/Home.jsx) POSTs JSON: { email, message, botField }.

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    const { email, message, botField } = req.body || {};

    // Honeypot: real users never fill this hidden field — silently accept & drop bots.
    if (botField) return res.status(200).json({ success: true });

    if (!email || !message) {
        return res.status(400).json({ success: false, error: 'Missing email or message' });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!token || !chatId) {
        console.error('Telegram env vars missing (TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID)');
        return res.status(500).json({ success: false, error: 'Server not configured' });
    }

    // Plain text (no parse_mode) so special characters in user input never break formatting.
    const text =
        `📬 New contact form submission — suneelp.com\n\n` +
        `Email: ${email}\n\n` +
        `Message:\n${message}`;

    try {
        const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text,
                disable_web_page_preview: true,
            }),
        });
        const data = await tgRes.json();
        if (!data.ok) {
            console.error('Telegram API error:', data);
            return res.status(502).json({ success: false, error: 'Telegram delivery failed' });
        }
        return res.status(200).json({ success: true });
    } catch (err) {
        console.error('Telegram request failed:', err);
        return res.status(502).json({ success: false, error: 'Telegram request failed' });
    }
}
