// Dev Lab: Suneel's personal & experimental projects.
// Distinct from the client agency systems on /work — these are self-driven
// builds, prototypes, automations, and AI experiments from the firstlinkai
// GitHub. Sourced from public repos not already featured on /work.
//
// To add a project: copy a block. `image` is optional (drop a file in /public
// and reference it); if omitted, a stylized VisualMockup is rendered using
// `visualPreset` + `icon`. `demo` is optional (only shown when set & not "#").

export const devLabProjects = [
  {
    id: "uyayi-resort-booking-engine",
    title: "End-to-end Resort Booking Engine",
    category: "Web Apps",
    description: "A full booking experience for a resort — room availability, date selection, and a polished reservation flow in a responsive web app.",
    tags: ["TypeScript", "React", "Vercel"],
    github: "https://github.com/firstlinkai/Uyayi-Resort-Booking-Engine",
    demo: "https://uyayi-resort-booking-engine.vercel.app",
    visualPreset: "purpleGradient",
    icon: "Layout"
  },
  {
    id: "resuforge",
    title: "ResuForge",
    category: "Web Apps",
    description: "An AI-powered web app that tailors your resume to any job description for maximum ATS compatibility, wrapped in a sleek dark-mode UI and powered by Gemini.",
    tags: ["TypeScript", "React", "Gemini AI"],
    github: "https://github.com/firstlinkai/ResuForge",
    demo: "",
    visualPreset: "blueGradient",
    icon: "FileText"
  },
  {
    id: "email-management-v2",
    title: "AI Email Management V2",
    category: "Web Apps",
    description: "A second-gen AI inbox manager that triages, drafts, and organizes email automatically — the polished follow-up to the original build.",
    tags: ["AI", "Automation", "Vercel"],
    github: "https://github.com/firstlinkai/Email-Management-V2",
    demo: "https://email-management-v2-psi.vercel.app",
    visualPreset: "emeraldGradient",
    icon: "Mail"
  },
  {
    id: "uyayi-resort",
    title: "Premium Resort Website",
    category: "Web Apps",
    description: "The marketing site for Uyayi Resort — an immersive, image-led landing experience built to showcase the property and drive bookings.",
    tags: ["Python", "Web", "Vercel"],
    github: "https://github.com/firstlinkai/Uyayi-Resort",
    demo: "https://uyayi-resort.vercel.app",
    visualPreset: "roseGradient",
    icon: "Globe"
  },
  {
    id: "guest-sentiment-dashboard",
    title: "Guest Sentiment Dashboard",
    category: "Web Apps",
    description: "A dashboard that aggregates guest reviews and feedback, scoring sentiment to surface what's delighting (or frustrating) customers at a glance.",
    tags: ["Dashboard", "AI", "Analytics"],
    github: "https://github.com/firstlinkai/Guest-Sentiment-Dashboard",
    demo: "",
    visualPreset: "orangeGradient",
    icon: "BarChart3"
  },
  {
    id: "rag-agent",
    title: "RAG Chatbot Agent",
    category: "AI & Agents",
    description: "A fully automated retrieval-augmented chatbot built on n8n, Google Drive, Gemini, and Qdrant — answers grounded in your own documents.",
    tags: ["n8n", "Gemini AI", "Qdrant", "RAG"],
    github: "https://github.com/firstlinkai/RAG-Agent",
    demo: "",
    visualPreset: "indigoGradient",
    icon: "Zap"
  },
  {
    id: "smart-restaurant-order-assistant",
    title: "Smart Restaurant Order Assistant",
    category: "AI & Agents",
    description: "A conversational assistant that takes restaurant orders, handles menu questions, and structures tickets for the kitchen.",
    tags: ["AI", "Chatbot", "Voice"],
    github: "https://github.com/firstlinkai/Smart-Restaurant-Order-taking-Assistant",
    demo: "",
    visualPreset: "violetGradient",
    icon: "Activity"
  },
  {
    id: "whatsapp-chatbot",
    title: "Railway Operations WhatsApp Bot",
    category: "AI & Agents",
    description: "Practical WhatsApp chatbots built for railway operations — surfacing schedules, statuses, and procedures on demand.",
    tags: ["AI", "WhatsApp API", "Chatbot"],
    github: "https://github.com/firstlinkai/whatsapp-chatbot",
    demo: "",
    visualPreset: "amberGradient",
    icon: "Activity"
  },
  {
    id: "daily-whatsapp-group-summary",
    title: "Daily WhatsApp Group Summary",
    category: "AI & Agents",
    description: "An AI bot that reads busy WhatsApp groups and delivers a concise daily digest, so you catch the signal without scrolling the noise.",
    tags: ["AI", "WhatsApp API", "Summarization"],
    github: "https://github.com/firstlinkai/Daily-WhatsApp-Group-Summary",
    demo: "",
    visualPreset: "skyGradient",
    icon: "Mail"
  },
  {
    id: "ms-teams-weekly-summary",
    title: "MS Teams Weekly Summary",
    category: "AI & Agents",
    description: "An n8n + OpenAI automation that summarizes a week of Microsoft Teams activity into a clean recap for busy teams.",
    tags: ["n8n", "OpenAI", "MS Teams"],
    github: "https://github.com/firstlinkai/MS-Teams-Weekly-Summary-Automation",
    demo: "",
    visualPreset: "purpleGradient",
    icon: "Mail"
  },
  {
    id: "automated-cv-ranking",
    title: "Automated CV Ranking",
    category: "AI & Agents",
    description: "An n8n system that scores and ranks inbound CVs against role criteria, giving recruitment agencies an instant shortlist.",
    tags: ["n8n", "AI", "Recruitment"],
    github: "https://github.com/firstlinkai/Automated-CV-Ranking",
    demo: "",
    visualPreset: "blueGradient",
    icon: "BarChart3"
  },
  {
    id: "n8n-email-management",
    title: "AI Email Management (n8n)",
    category: "AI & Agents",
    description: "The original AI inbox automation — built with n8n, ChatGPT, and Google Workspace to triage and respond to email hands-free.",
    tags: ["n8n", "ChatGPT", "Google Workspace"],
    github: "https://github.com/firstlinkai/N8N_Email_Management",
    demo: "",
    visualPreset: "emeraldGradient",
    icon: "Mail"
  },
  {
    id: "youtube-to-blog",
    title: "YouTube → Blog",
    category: "Content & Media",
    description: "An AI system that turns any YouTube video into a structured, publish-ready blog post — automatically.",
    tags: ["AI", "Transcription", "Content"],
    github: "https://github.com/firstlinkai/youtube-to-blog",
    demo: "",
    visualPreset: "roseGradient",
    icon: "PenTool"
  },
  {
    id: "podcast-to-shorts",
    title: "Podcast → Shorts",
    category: "Content & Media",
    description: "An AI pipeline that mines long podcasts for the best moments and cuts them into ready-to-post short-form clips.",
    tags: ["AI", "Video", "Automation"],
    github: "https://github.com/firstlinkai/Podcast-to-Shorts",
    demo: "",
    visualPreset: "orangeGradient",
    icon: "Smartphone"
  },
  {
    id: "viral-pov-videos",
    title: "Viral POV Video Generator",
    category: "Content & Media",
    description: "A fully automated AI workflow that produces viral-style POV videos end to end, from concept to finished clip.",
    tags: ["AI", "Video", "Automation"],
    github: "https://github.com/firstlinkai/Viral-POV-Videos",
    demo: "",
    visualPreset: "indigoGradient",
    icon: "Smartphone"
  },
  {
    id: "ugc-clothing-fashion-ai",
    title: "UGC Clothing (Fashion AI)",
    category: "Content & Media",
    description: "An AI pipeline that generates UGC-style fashion imagery — models, outfits, and scenes — for clothing brands.",
    tags: ["AI", "Image Gen", "Fashion"],
    github: "https://github.com/firstlinkai/UGC-Clothing-Fashion-AI-",
    demo: "",
    visualPreset: "cyanGradient",
    icon: "Smartphone"
  },
  {
    id: "ugc-workflow",
    title: "UGC Workflow",
    category: "Content & Media",
    description: "An end-to-end workflow for producing authentic-looking UGC ad creatives at scale, from script to rendered clip.",
    tags: ["AI", "Automation", "Video"],
    github: "https://github.com/firstlinkai/UGC-Workflow",
    demo: "",
    visualPreset: "violetGradient",
    icon: "PenTool"
  },
  {
    id: "atmospheric-photos",
    title: "Atmospheric Photos Workflow",
    category: "Content & Media",
    description: "A generative workflow that turns plain product or scene shots into moody, atmospheric photography with cinematic lighting.",
    tags: ["AI", "Image Gen"],
    github: "https://github.com/firstlinkai/Atmospheric-Photos",
    demo: "",
    visualPreset: "amberGradient",
    icon: "Smartphone"
  },
  {
    id: "3d-render-using-ai",
    title: "3D Render Using AI",
    category: "Content & Media",
    description: "An experiment in generating photorealistic 3D-style product renders directly from prompts and reference images.",
    tags: ["AI", "3D", "Image Gen"],
    github: "https://github.com/firstlinkai/3D-render-using-AI",
    demo: "",
    visualPreset: "skyGradient",
    icon: "Layout"
  },
  {
    id: "automated-facebook-ad-creation",
    title: "Automated Facebook Ad Creation",
    category: "Content & Media",
    description: "A system that generates ready-to-launch Facebook ad creatives and copy from a product input, automating the busywork of ad production.",
    tags: ["AI", "Facebook API", "Automation"],
    github: "https://github.com/firstlinkai/Automated-Facebook-Ad-Creation-System",
    demo: "",
    visualPreset: "blueGradient",
    icon: "PenTool"
  },
  {
    id: "social-media-automation",
    title: "One-Click Social Media Automation",
    category: "Content & Media",
    description: "Publish across every major social platform in one click — a unified automation for scheduling and distributing content everywhere at once.",
    tags: ["n8n", "Social APIs", "Automation"],
    github: "https://github.com/firstlinkai/Social-Media-Automation",
    demo: "",
    visualPreset: "emeraldGradient",
    icon: "Globe"
  },
  {
    id: "facebook-ad-research-system",
    title: "Facebook Ad Research System",
    category: "Automation",
    description: "A no-code n8n system that scrapes top-performing Facebook ads via Apify, then analyzes and rewrites them with OpenAI and Gemini.",
    tags: ["n8n", "Apify", "OpenAI", "Gemini"],
    github: "https://github.com/firstlinkai/Facebook-Ad-Research-System",
    demo: "",
    visualPreset: "roseGradient",
    icon: "Target"
  },
  {
    id: "recruitment-automation-state-machine",
    title: "Recruitment Automation State Machine",
    category: "Automation",
    description: "A fully automated recruitment funnel for driver positions — AI screening, WhatsApp engagement, and intelligent appointment booking, modeled as a state machine.",
    tags: ["n8n", "AI", "WhatsApp API"],
    github: "https://github.com/firstlinkai/Recruitment-Automation-State-Machine",
    demo: "",
    visualPreset: "orangeGradient",
    icon: "FileText"
  },
  {
    id: "railway-permit-automation",
    title: "Railway Permit Automation",
    category: "Automation",
    description: "A complete blueprint and automation system for digital railway permit-to-work workflows, replacing paper approvals with auditable digital flows.",
    tags: ["Automation", "Workflow", "Compliance"],
    github: "https://github.com/firstlinkai/railway-permit-automation",
    demo: "",
    visualPreset: "indigoGradient",
    icon: "ShieldCheck"
  },
  {
    id: "real-estate-investment-analyzer",
    title: "Real Estate Investment Analyzer",
    category: "Automation",
    description: "An n8n system that automates real-estate investment analysis — pulling listings, running the numbers, and flagging deals worth a closer look.",
    tags: ["n8n", "Real Estate", "Analysis"],
    github: "https://github.com/firstlinkai/Automating-Real-Estate-Investment-Analysis",
    demo: "",
    visualPreset: "cyanGradient",
    icon: "BarChart3"
  },
  {
    id: "parent-teacher-comms-automation",
    title: "Parent-Teacher Comms Automation",
    category: "Automation",
    description: "An automation for an education academy that keeps parents informed automatically, batching updates and progress notes into timely messages.",
    tags: ["n8n", "Education", "Messaging"],
    github: "https://github.com/firstlinkai/Automating-Parent-Teacher-Communication",
    demo: "",
    visualPreset: "violetGradient",
    icon: "Mail"
  },
  {
    id: "hvac-lead-management-system",
    title: "HVAC Lead Management System",
    category: "Automation",
    description: "A complete lead-management system for an HVAC service business — capturing, qualifying, and routing leads from first contact to booked job.",
    tags: ["n8n", "CRM", "Automation"],
    github: "https://github.com/firstlinkai/Lead-Management-System-for-HVAC-business",
    demo: "",
    visualPreset: "amberGradient",
    icon: "Target"
  },
  {
    id: "community-solar-lead-automation",
    title: "Community Solar Lead Automation",
    category: "Automation",
    description: "An automated lead pipeline for community solar programs — capturing interest, qualifying eligibility, and nurturing sign-ups.",
    tags: ["n8n", "Lead Gen", "Automation"],
    github: "https://github.com/firstlinkai/Community-Solar-Lead-Automation",
    demo: "",
    visualPreset: "skyGradient",
    icon: "Zap"
  },
  {
    id: "linkedin-job-application",
    title: "LinkedIn Job Application Automation",
    category: "Automation",
    description: "End-to-end job-application automation powered by AI and no-code — finds roles, tailors materials, and applies on your behalf.",
    tags: ["AI", "No-Code", "LinkedIn"],
    github: "https://github.com/firstlinkai/LinkedIn-Job-Application",
    demo: "",
    visualPreset: "purpleGradient",
    icon: "FileText"
  },
  {
    id: "amazon-product-search",
    title: "Amazon Product Search Scraper",
    category: "Automation",
    description: "A scraper that pulls Amazon product data via BrightData, enriches it with GPT-5, and lands structured results in Google Sheets.",
    tags: ["BrightData", "GPT-5", "Google Sheets"],
    github: "https://github.com/firstlinkai/Amazon-Product-Search",
    demo: "",
    visualPreset: "blueGradient",
    icon: "Globe"
  },
  {
    id: "fmcsa-carrier-data-scraper",
    title: "FMCSA Carrier Data Scraper",
    category: "Automation",
    description: "A Python web-scraping tool that pulls motor-carrier data from the FMCSA registry into clean, structured datasets.",
    tags: ["Python", "Web Scraping", "Data"],
    github: "https://github.com/firstlinkai/FMCSA-Carrier-Data-Scrapper",
    demo: "",
    visualPreset: "emeraldGradient",
    icon: "Globe"
  },
  {
    id: "the-waitlist-sniper",
    title: "The Waitlist Sniper",
    category: "Automation",
    description: "An automation that monitors waitlists and fires instant alerts the moment a slot opens, so you never miss a booking window.",
    tags: ["Automation", "Notifications"],
    github: "https://github.com/firstlinkai/The-Waitlist-Sniper",
    demo: "",
    visualPreset: "roseGradient",
    icon: "Zap"
  },
  {
    id: "the-review-sniper",
    title: "The Review Sniper",
    category: "Automation",
    description: "A reputation engine that catches new customer reviews across platforms and routes them for fast, on-brand responses.",
    tags: ["n8n", "Reputation", "Automation"],
    github: "https://github.com/firstlinkai/The-Review-Sniper",
    demo: "",
    visualPreset: "orangeGradient",
    icon: "ShieldCheck"
  },
  {
    id: "smart-inventory-alert",
    title: "Smart Inventory Alert",
    category: "Automation",
    description: "A lightweight monitor that watches stock levels and triggers smart, threshold-based restock alerts before items run out.",
    tags: ["Automation", "Google Sheets", "Notifications"],
    github: "https://github.com/firstlinkai/Smart-Inventory-Alert",
    demo: "",
    visualPreset: "indigoGradient",
    icon: "Activity"
  }
];

export const devLabCategories = [
  "All",
  "AI & Agents",
  "Automation",
  "Content & Media",
  "Web Apps"
];
