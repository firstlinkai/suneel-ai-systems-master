// Project configuration database with Suneel's 12 marketing agency projects
// organized by Funnel Stage: Top of Funnel, Mid-Funnel, Operations & Loyalty.

export const projects = [
  {
    id: "social-media-marketing-intelligence",
    title: "Social Media Marketing Intelligence Suite",
    category: "Top of Funnel",
    description: "Automated scraper and analysis suite indexing Facebook, Instagram, and TikTok ads/posts. Converts raw engagement and comments into actionable campaign strategy briefings using advanced AI analysis.",
    tags: ["Python", "Facebook API", "TikTok API", "OpenAI", "Puppeteer"],
    github: "https://github.com/firstlinkai/Social-Media-Marketing-Intelligence-Suite",
    demo: "#",
    image: "/projects images/Social Media Marketing Intelligence Suite.jpeg",
    icon: "Target"
  },
  {
    id: "carousel-factory",
    title: "Carousel Factory",
    category: "Top of Funnel",
    description: "Transforms any brand URL into agency-grade Instagram carousels in under 2 minutes. Extracts branding styles, writes copy using the PAS copywriting framework, and renders slides deterministically using Pillow.",
    tags: ["Python", "Gemini AI", "Pillow", "Google Fonts API"],
    github: "https://github.com/firstlinkai/carousel-factory",
    demo: "#",
    image: "/projects images/Carousel Factory.jpeg",
    icon: "Layout"
  },
  {
    id: "viralpulse",
    title: "ViralPulse",
    category: "Top of Funnel",
    description: "SaaS competitive research platform tracking viral TikTok content in your niche. Automatically scrapes videos, ranks them by engagement velocity, and delivers AI-driven hook and comment analyses.",
    tags: ["Lovable", "TypeScript", "TanStack Start", "Supabase", "Apify API"],
    github: "https://github.com/firstlinkai/viralpulse",
    demo: "#",
    image: "/projects images/AI-powered TikTok competitive research .jpeg",
    icon: "Zap"
  },
  {
    id: "n8n-lead-scraper-email-personalizer",
    title: "n8n Lead Scraper & Cold Email Personalizer",
    category: "Top of Funnel",
    description: "Automated outreach pipeline extracting high-intent leads from Apollo, scraping target websites, and running custom GPT-4.1 prompts to write highly personalized cold email icebreakers.",
    tags: ["n8n", "Apollo API", "GPT-4.1", "Google Sheets", "Slack API"],
    github: "https://github.com/firstlinkai/lead-scraper-and-email-personalizer",
    demo: "#",
    image: "/projects images/n8n Automated Lead Scraper & Cold Email Personalizer.jpeg",
    icon: "Mail"
  },
  {
    id: "seo-blog-writing-system",
    title: "Fully Automated SEO Blog Writing System",
    category: "Mid-Funnel",
    description: "A no-code, autonomous SEO content engine extracting search intent via SerpAPI, developing structured outlines, generating 2,000+ word deep-dives, and outputting WordPress-ready formatted HTML.",
    tags: ["n8n", "OpenAI API", "SerpAPI", "Google Sheets", "WordPress API"],
    github: "https://github.com/firstlinkai/SEO-Blog",
    demo: "#",
    image: "/projects images/Fully Automated SEO Blog Writing System.jpeg",
    icon: "PenTool"
  },
  {
    id: "hookly",
    title: "Hookly",
    category: "Mid-Funnel",
    description: "Social media intelligence and creative brief suite. Scrapes competitor video libraries across Meta and TikTok, evaluates hook performance, and structures visual brief outlines for creators.",
    tags: ["React", "Python", "Anthropic Claude", "TikTok API", "Meta Ads API"],
    github: "https://github.com/firstlinkai/Hookly",
    demo: "#",
    image: "/projects images/Hookly.jpeg",
    icon: "Activity"
  },
  {
    id: "lumina-studio",
    title: "Lumina Studio",
    category: "Mid-Funnel",
    description: "AI-driven product photography and visual asset design portal. Transforms raw product frames with transparent backgrounds into professional studio-grade marketing poster assets with text overlays.",
    tags: ["Next.js", "Stable Diffusion", "AWS Lambda", "TailwindCSS"],
    github: "https://github.com/firstlinkai/Lumina-Studio",
    demo: "#",
    image: "/projects images/Lumina Studio.jpeg",
    icon: "Smartphone"
  },
  {
    id: "multi-channel-content-distributor",
    title: "Multi-Channel Content Distributor",
    category: "Mid-Funnel",
    description: "Intelligent asset syndication engine mapping Google Drive source folders to social networks. Analyzes scene media via GPT-4o Vision and generates platform-tailored descriptions for Facebook, IG, and TikTok.",
    tags: ["n8n", "GPT-4o Vision", "Facebook API", "Instagram API", "TikTok API"],
    github: "https://github.com/firstlinkai/Multi-Channel-Content-Distributor",
    demo: "#",
    image: "/projects images/Multi-Channel Content Distributor.jpeg",
    icon: "Globe"
  },
  {
    id: "ai-cfo-financial-intelligence",
    title: "AI-CFO: Automated Financial Intelligence",
    category: "Operations & Loyalty",
    description: "Financial dashboard syncing Moneybird invoices and Productive.io resource management data. Feeds real-time Looker Studio reporting pipelines for instant agency profitability & cash flow insight.",
    tags: ["Python", "Moneybird API", "Productive.io API", "Looker Studio", "SQL"],
    github: "https://github.com/firstlinkai/AI-CFO",
    demo: "#",
    image: "/projects images/AI-CFO Automated Financial Intelligence.jpeg",
    icon: "BarChart3"
  },
  {
    id: "client-journey-automation",
    title: "Complete Client Journey Automation",
    category: "Operations & Loyalty",
    description: "End-to-end 11-stage automation handling leads, CRM setup in ClickUp, scheduling, Stripe deposit triggers, Google Drive client onboarding setups, and customer review sequences.",
    tags: ["n8n", "ClickUp API", "Stripe API", "Typeform", "Slack API"],
    github: "https://github.com/firstlinkai/photography-sales-funnel",
    demo: "#",
    image: "/projects images/Complete Client Journey Automation.jpeg",
    icon: "FileText"
  },
  {
    id: "sare-reporting-engine",
    title: "SARE: Suneel's Automated Reporting Engine",
    category: "Operations & Loyalty",
    description: "Industrial reporting pipeline aggregating client-facing performance data from sheets and marketing channels. Synthesizes data into customized agency-branded PDF strategic reports.",
    tags: ["Python", "Google Sheets API", "ReportLab", "OpenAI API"],
    github: "https://github.com/firstlinkai/SARE",
    demo: "#",
    image: "/projects images/SARE Suneel's Automated Reporting Engine.jpeg",
    icon: "ShieldCheck"
  },
  {
    id: "invoice-automation-engine",
    title: "AI-Powered Invoice Automation Engine",
    category: "Operations & Loyalty",
    description: "Complex billing engine transforming Google Sheets records to multi-line Moneybird invoices. Automates dynamic client rates, smart accounting period annotations, and EU tax/VAT rules.",
    tags: ["n8n", "Moneybird API", "Google Sheets", "Node.js"],
    github: "https://github.com/firstlinkai/AI-Powered-Invoice-Automation-Engine",
    demo: "#",
    image: "/projects images/AI-Powered Invoice Automation Engine .jpeg",
    icon: "FileText"
  }
];

export const categories = [
  "All", 
  "Top of Funnel", 
  "Mid-Funnel", 
  "Operations & Loyalty"
];
