import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { usePreferences } from '../context/PreferencesContext';
import {
    ChevronRight,
    Search,
    BarChart3,
    Globe,
    Zap,
    Layout,
    PenTool,
    Code,
    ArrowUpRight,
    User,
    Briefcase,
    Facebook,
    Linkedin,
    Instagram,
    Copy,
    Check,
    X,
    ArrowRight,
    Gift,
    Sparkles,
    Github,
    TrendingUp
} from 'lucide-react';

// Smoothly scroll to the contact form — used by the lead-magnet CTAs.
const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
};

// Smoothly scroll to the Results / portfolio showcase.
const scrollToResults = () => {
    document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth' });
};


const SavingsCalculator = () => {
    const { t } = usePreferences();
    const [systems, setSystems] = useState(1);
    const savingsPerSystem = 3500; // avg. monthly labor saved per deployed system
    const hoursPerSystem = 120; // agency hours reclaimed per system per month

    const costSaved = systems * savingsPerSystem;
    const savedHours = systems * hoursPerSystem;

    return (
        <div className="max-w-2xl mx-auto space-y-12 font-['Inter']">
            <div className="space-y-6">
                <div className="flex justify-between items-center text-[14px] font-bold">
                    <span className="text-black/60 uppercase tracking-wider">{t('calc.scaleLabel')}</span>
                    <span className="bg-black text-white px-4 py-1 rounded-lg">
                        {systems}{systems >= 30 ? '+' : ''} {t('calc.assets')}
                    </span>
                </div>
                <input
                    type="range"
                    min="1"
                    max="30"
                    value={systems}
                    onChange={(e) => setSystems(parseInt(e.target.value))}
                    className="w-full h-1 bg-black/10 rounded-lg appearance-none cursor-pointer accent-black"
                />
                <div className="flex justify-between text-[11px] font-bold text-black/30 uppercase">
                    <span>{t('calc.starter')}</span>
                    <span>{t('calc.scalable')}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-black/5">
                <div className="space-y-1">
                    <p className="text-[12px] font-black uppercase tracking-[0.2em] text-black/30">{t('calc.costTitle')}</p>
                    <p className="text-3xl md:text-4xl font-bold text-black">${costSaved.toLocaleString()}</p>
                    <p className="text-[13px] text-black/40">{t('calc.costSub')}</p>
                </div>
                <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-black/5 pt-8 sm:pt-0 sm:pl-8 text-left">
                    <p className="text-[12px] font-black uppercase tracking-[0.2em] text-black/30">{t('calc.timeTitle')}</p>
                    <p className="text-3xl md:text-4xl font-bold text-black">{savedHours.toLocaleString()}</p>
                    <p className="text-[13px] text-black/40">{t('calc.timeSub')}</p>
                </div>
            </div>

            <p className="text-[13px] font-medium text-black italic opacity-30 pt-4">
                {t('calc.quote')}
            </p>
        </div>
    );
};

const PricingSection = () => {
    const { t } = usePreferences();

    const cardBase =
        'flex flex-col h-full bg-white rounded-[2rem] border text-left transition-all overflow-hidden';

    // Renders a tier's capability list — included items get a green check, excluded a muted ✕.
    const featureList = (included, excluded = []) => (
        <ul className="space-y-3 mb-8 text-[14px] font-['Inter']">
            {included.map((k) => (
                <li key={k} className="flex items-start gap-2.5 text-black/70">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{t(k)}</span>
                </li>
            ))}
            {excluded.map((k) => (
                <li key={k} className="flex items-start gap-2.5 text-black/35">
                    <X className="w-4 h-4 text-black/25 mt-0.5 shrink-0" />
                    <span>{t(k)}</span>
                </li>
            ))}
        </ul>
    );

    const priceBlock = (priceKey, periodKey) => (
        <div className="flex items-end justify-center gap-1.5 mt-4">
            <span className="text-5xl font-bold text-black leading-none">{t(priceKey)}</span>
            {periodKey && <span className="text-sm font-bold text-black/40 pb-1">{t(periodKey)}</span>}
        </div>
    );

    const outlineBtn =
        'mt-auto w-full bg-white text-black border border-black/15 py-3 rounded-full font-bold hover:bg-black/5 active:scale-[0.98] transition-all';

    return (
        <section className="max-w-7xl mx-auto py-20 px-6">
            <div className="text-center mb-14">
                <span className="inline-block bg-white px-4 py-1 rounded-full border border-black/5 shadow-sm text-[12px] font-bold mb-6">
                    {t('pricing.label')}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-3">{t('pricing.heading')}</h2>
                <p className="text-black/50 font-medium font-['Inter']">{t('pricing.subheading')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
                {/* Tier 1 — Free Automation Audit (lead magnet) */}
                <div className={`${cardBase} border-black/10 shadow-sm`}>
                    <div className="flex flex-col flex-1 p-8">
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold text-black mb-2">{t('pricing.t1.name')}</h3>
                            <p className="text-[13px] text-black/50 leading-relaxed font-['Inter'] min-h-[40px]">{t('pricing.t1.tagline')}</p>
                            {priceBlock('pricing.t1.price')}
                        </div>
                        {featureList(['pricing.t1.f1', 'pricing.t1.f2', 'pricing.t1.f3'], ['pricing.t1.x1', 'pricing.t1.x2'])}
                        <button onClick={scrollToContact} className={outlineBtn}>{t('pricing.t1.cta')}</button>
                    </div>
                </div>

                {/* Tier 2 — Agency Growth Stack ($1,497/mo, highlighted core offer) */}
                <div className={`${cardBase} border-blue-600 ring-1 ring-blue-600 shadow-xl shadow-blue-600/10 xl:-my-3`}>
                    <div className="bg-blue-600 text-white text-center text-[10px] font-black uppercase tracking-[0.2em] py-2">
                        {t('pricing.popular')}
                    </div>
                    <div className="flex flex-col flex-1 p-8">
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold text-black mb-2">{t('pricing.t2.name')}</h3>
                            <p className="text-[13px] text-black/50 leading-relaxed font-['Inter'] min-h-[40px]">{t('pricing.t2.tagline')}</p>
                            {priceBlock('pricing.t2.price', 'pricing.t2.period')}
                            <p className="text-[12px] font-bold text-blue-600 mt-2">{t('pricing.t2.value')}</p>
                        </div>
                        {featureList(
                            ['pricing.t2.f1', 'pricing.t2.f2', 'pricing.t2.f3', 'pricing.t2.f4', 'pricing.t2.f5'],
                            ['pricing.t2.x1', 'pricing.t2.x2']
                        )}
                        <div className="mt-auto">
                            <button
                                onClick={scrollToContact}
                                className="w-full bg-blue-600 text-white py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-blue-600/30"
                            >
                                {t('pricing.t2.cta')}
                                <ArrowUpRight className="w-4 h-4" />
                            </button>
                            <p className="text-center text-[11px] font-bold uppercase tracking-widest text-blue-600 mt-3">{t('pricing.t2.note')}</p>
                        </div>
                    </div>
                </div>

                {/* Tier 3 — Full Agency OS ($3,997 one-time + optional retainer) */}
                <div className={`${cardBase} border-black/10 shadow-sm`}>
                    <div className="flex flex-col flex-1 p-8">
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold text-black mb-2">{t('pricing.t3.name')}</h3>
                            <p className="text-[13px] text-black/50 leading-relaxed font-['Inter'] min-h-[40px]">{t('pricing.t3.tagline')}</p>
                            {priceBlock('pricing.t3.price', 'pricing.t3.period')}
                            <p className="text-[12px] font-bold text-emerald-600 mt-2">{t('pricing.t3.note')}</p>
                            <p className="text-[11px] text-black/45 leading-relaxed font-['Inter'] italic mt-1">{t('pricing.t3.sub')}</p>
                        </div>
                        {featureList(['pricing.t3.f1', 'pricing.t3.f2', 'pricing.t3.f3', 'pricing.t3.f4'], ['pricing.t3.x1'])}
                        <button
                            onClick={scrollToContact}
                            className="mt-auto w-full bg-black text-white py-3 rounded-full font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-black/10"
                        >
                            {t('pricing.t3.cta')}
                        </button>
                    </div>
                </div>

                {/* Tier 4 — Done-For-You Growth Partnership ($2,500/mo retainer) */}
                <div className={`${cardBase} border-black/10 shadow-sm`}>
                    <div className="flex flex-col flex-1 p-8">
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold text-black mb-2">{t('pricing.t4.name')}</h3>
                            <p className="text-[13px] text-black/50 leading-relaxed font-['Inter'] min-h-[40px]">{t('pricing.t4.tagline')}</p>
                            {priceBlock('pricing.t4.price', 'pricing.t4.period')}
                        </div>
                        {featureList(['pricing.t4.f1', 'pricing.t4.f2', 'pricing.t4.f3', 'pricing.t4.f4'], ['pricing.t4.x1'])}
                        <button onClick={scrollToContact} className={outlineBtn}>{t('pricing.t4.cta')}</button>
                    </div>
                </div>
            </div>

            {/* Single-system note */}
            <p className="text-center text-[13px] text-black/50 font-['Inter'] mt-8 max-w-2xl mx-auto">{t('pricing.single')}</p>

            {/* Talk to Sales — custom solution banner */}
            <div className="mt-8 rounded-[2rem] border border-blue-600/20 bg-blue-600/[0.03] p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <span className="inline-flex items-center gap-1.5 bg-blue-600/10 text-blue-700 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-[0.15em] mb-5">
                            <Sparkles className="w-3.5 h-3.5" />
                            {t('enterprise.badge')}
                        </span>
                        <h3 className="text-3xl font-bold text-black tracking-tight mb-3">{t('enterprise.title')}</h3>
                        <p className="text-[15px] text-black/55 leading-relaxed font-['Inter'] mb-6 max-w-md">{t('enterprise.desc')}</p>
                        <button
                            onClick={scrollToContact}
                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-blue-600/30"
                        >
                            <ArrowRight className="w-4 h-4" />
                            {t('enterprise.cta')}
                        </button>
                    </div>
                    <div>
                        <p className="text-[11px] font-black uppercase tracking-[0.15em] text-black/40 mb-4">{t('enterprise.label')}</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-[14px] text-black/70 font-['Inter']">
                            {['enterprise.f1', 'enterprise.f2', 'enterprise.f3', 'enterprise.f4', 'enterprise.f5', 'enterprise.f6'].map((k) => (
                                <li key={k} className="flex items-start gap-2.5">
                                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                                    <span>{t(k)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

// ── Social proof bar ───────────────────────────────────────────────
const SocialProofBar = () => {
    const { t } = usePreferences();
    const stats = ['proof.stat1', 'proof.stat2', 'proof.stat3'];
    return (
        <section className="max-w-4xl mx-auto px-6 -mt-6 mb-6">
            <div className="bg-white rounded-3xl border border-black/5 shadow-sm px-6 py-5 text-center">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-black/35 mb-3">{t('proof.label')}</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-[13px] font-bold text-black/70 font-['Inter']">
                    {stats.map((k, i) => (
                        <React.Fragment key={k}>
                            {i > 0 && <span className="hidden sm:inline text-black/15">·</span>}
                            <span>{t(k)}</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ── Stats strip ────────────────────────────────────────────────────
const StatsStrip = () => {
    const { t } = usePreferences();
    const stats = [
        ['stats.s1num', 'stats.s1label'],
        ['stats.s2num', 'stats.s2label'],
        ['stats.s3num', 'stats.s3label'],
        ['stats.s4num', 'stats.s4label'],
    ];
    return (
        <section className="max-w-5xl mx-auto px-6 py-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map(([num, label]) => (
                    <div key={num} className="bg-white rounded-3xl border border-black/5 shadow-sm py-8 px-4 text-center">
                        <div className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-2">{t(num)}</div>
                        <div className="text-[12px] font-bold uppercase tracking-wider text-black/40 font-['Inter']">{t(label)}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

// ── Services — "Old Way vs My Way" cards ───────────────────────────
const ServicesSection = () => {
    const { t } = usePreferences();
    const cards = [
        { id: 'service1', Icon: PenTool },
        { id: 'service2', Icon: BarChart3 },
        { id: 'service3', Icon: Globe },
        { id: 'service4', Icon: Search },
    ];
    return (
        <section className="max-w-6xl mx-auto py-20 px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black/80 max-w-2xl mx-auto leading-snug text-center">
                {t('services.heading')}
            </h2>
            <div className="flex justify-center mb-14">
                <span className="bg-white px-4 py-1 rounded-full border border-black/5 shadow-sm text-[12px] font-bold">{t('services.label')}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cards.map(({ id, Icon }) => (
                    <div key={id} className="flex flex-col bg-white rounded-[2rem] border border-black/5 shadow-sm p-8 text-left hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center">
                                <Icon className="w-5 h-5 text-blue-600" />
                            </div>
                            <h3 className="font-bold text-[15px] uppercase tracking-wide text-black">{t(`${id}.title`)}</h3>
                        </div>
                        <p className="text-[14px] text-black/50 leading-relaxed font-['Inter'] mb-5">{t(`${id}.tag`)}</p>
                        <ul className="space-y-2.5 mb-6 text-[14px] text-black/70 font-['Inter']">
                            {['f1', 'f2', 'f3'].map((f) => (
                                <li key={f} className="flex items-start gap-2.5">
                                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                                    <span>{t(`${id}.${f}`)}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-3 pt-5 border-t border-black/5">
                            <div className="rounded-2xl bg-black/[0.03] px-4 py-3">
                                <div className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-1">{t('svc.old')}</div>
                                <div className="text-[12px] font-medium text-black/45 leading-snug font-['Inter']">{t(`${id}.old`)}</div>
                            </div>
                            <div className="rounded-2xl bg-blue-600/[0.06] px-4 py-3">
                                <div className="text-[10px] font-black uppercase tracking-widest text-blue-600/70 mb-1">{t('svc.new')}</div>
                                <div className="text-[12px] font-bold text-black/80 leading-snug font-['Inter']">{t(`${id}.new`)}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

// ── How it works — 3 steps ─────────────────────────────────────────
const HowItWorks = () => {
    const { t } = usePreferences();
    const steps = [
        { Icon: Search, n: 1, key: 's1' },
        { Icon: Code, n: 2, key: 's2' },
        { Icon: TrendingUp, n: 3, key: 's3' },
    ];
    return (
        <section className="max-w-5xl mx-auto py-20 px-6">
            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-3">{t('how.heading')}</h2>
                <p className="text-black/50 font-medium font-['Inter']">{t('how.sub')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {steps.map(({ Icon, n, key }) => (
                    <div key={key} className="relative bg-white rounded-[2rem] border border-black/5 shadow-sm p-8">
                        <span className="absolute top-6 right-7 text-5xl font-bold text-black/[0.06] leading-none">{n}</span>
                        <div className="w-11 h-11 rounded-xl bg-blue-600/10 flex items-center justify-center mb-5">
                            <Icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <h3 className="font-bold text-lg text-black mb-2">{t(`how.${key}title`)}</h3>
                        <p className="text-[14px] text-black/55 leading-relaxed font-['Inter'] mb-4">{t(`how.${key}desc`)}</p>
                        <div className="pt-4 border-t border-black/5">
                            <span className="text-[10px] font-black uppercase tracking-widest text-blue-600/70">{t('how.deliverLabel')}</span>
                            <p className="text-[13px] text-black/70 leading-relaxed font-['Inter'] mt-1">{t(`how.${key}deliver`)}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-10">
                <button
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-full font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-blue-600/30"
                >
                    {t('how.cta')}
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </section>
    );
};

// ── Results / portfolio showcase ───────────────────────────────────
const ResultsShowcase = () => {
    const { t } = usePreferences();
    const systems = [
        { title: 'AI-CFO — Automated Financial Intelligence', blurb: 'Financial dashboard syncing Moneybird invoices and Productive.io resourcing data into real-time Looker Studio pipelines — instant agency profitability & cash-flow insight.', tags: ['Moneybird', 'Productive.io', 'Looker Studio'], github: 'https://github.com/firstlinkai/AI-CFO', Icon: BarChart3, gradient: 'from-rose-500 to-orange-400' },
        { title: 'Social Media Marketing Intelligence Suite', blurb: 'Scrapes and indexes Facebook, Instagram & TikTok ads and posts, converting raw engagement and comments into actionable campaign strategy briefings with AI.', tags: ['Apify', 'OpenAI', 'TikTok'], github: 'https://github.com/firstlinkai/Social-Media-Marketing-Intelligence-Suite', Icon: PenTool, gradient: 'from-blue-600 to-indigo-500' },
        { title: 'ViralPulse', blurb: 'SaaS competitive research platform tracking viral TikTok content in your niche — scraping videos, ranking them by engagement velocity, and delivering AI hook & comment analysis.', tags: ['TypeScript', 'TikTok', 'AI'], github: 'https://github.com/firstlinkai/viralpulse', Icon: Zap, gradient: 'from-violet-600 to-fuchsia-500' },
        { title: 'Carousel Factory', blurb: 'Turns any brand URL into agency-grade Instagram carousels in under 2 minutes — extracting brand styles, writing PAS-framework copy, and rendering slides deterministically with Pillow.', tags: ['Python', 'Pillow', 'AI'], github: 'https://github.com/firstlinkai/carousel-factory', Icon: Globe, gradient: 'from-emerald-500 to-teal-400' },
        { title: 'AI-Powered Invoice Automation Engine', blurb: 'Billing engine transforming Google Sheets records into multi-line Moneybird invoices — automating dynamic client rates, accounting-period annotations, and EU tax/VAT rules.', tags: ['n8n', 'Moneybird', 'Google Sheets'], github: 'https://github.com/firstlinkai/AI-Powered-Invoice-Automation-Engine', Icon: Layout, gradient: 'from-sky-500 to-blue-500' },
        { title: 'Complete Client Journey Automation', blurb: 'End-to-end 11-stage automation: lead capture, ClickUp CRM setup, scheduling, Stripe deposit triggers, Google Drive onboarding, and customer review sequences.', tags: ['n8n', 'ClickUp', 'Stripe'], github: 'https://github.com/firstlinkai', Icon: Search, gradient: 'from-amber-500 to-orange-500' },
    ];
    return (
        <section id="results-section" className="max-w-6xl mx-auto py-20 px-6 scroll-mt-24">
            <div className="text-center mb-14">
                <span className="inline-block bg-white px-4 py-1 rounded-full border border-black/5 shadow-sm text-[12px] font-bold mb-6">{t('results.label')}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-3">{t('results.heading')}</h2>
                <p className="text-black/50 font-medium font-['Inter'] max-w-xl mx-auto">{t('results.sub')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {systems.map(({ title, blurb, tags, github, Icon, gradient }) => (
                    <div key={title} className="flex flex-col bg-white rounded-[2rem] border border-black/5 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                        <div className={`h-28 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                            <Icon className="w-10 h-10 text-white/90" />
                        </div>
                        <div className="flex flex-col flex-1 p-6">
                            <h3 className="font-bold text-[15px] text-black mb-2">{title}</h3>
                            <p className="text-[13px] text-black/55 leading-relaxed font-['Inter'] mb-4">{blurb}</p>
                            <div className="flex flex-wrap gap-2 mb-5">
                                {tags.map((tag) => (
                                    <span key={tag} className="text-[11px] font-bold text-black/50 bg-black/[0.04] px-2.5 py-1 rounded-full">{tag}</span>
                                ))}
                            </div>
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto inline-flex items-center gap-2 text-[13px] font-bold text-black hover:text-blue-600 transition-colors"
                            >
                                <Github className="w-4 h-4" />
                                GitHub
                                <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-10">
                <Link to="/dev-lab" className="inline-flex items-center gap-2 text-[14px] font-bold text-black/50 hover:text-black transition-colors">
                    {t('results.viewAll')}
                    <ChevronRight className="w-4 h-4" />
                </Link>
            </div>
        </section>
    );
};

// ── Platforms & integrations ───────────────────────────────────────
const PlatformsBar = () => {
    const { t } = usePreferences();
    const tools = ['n8n', 'OpenAI', 'Gemini', 'Shopify', 'WordPress', 'Meta Ads', 'TikTok', 'Google Ads', 'ClickUp', 'Stripe', 'GitHub', 'Supabase', 'Slack', 'Apify', 'Google Sheets', 'Looker Studio', 'Qdrant'];
    return (
        <section className="max-w-5xl mx-auto py-16 px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-black/80 mb-3">{t('platforms.heading')}</h2>
            <p className="text-black/50 font-medium font-['Inter'] mb-10 max-w-xl mx-auto">{t('platforms.sub')}</p>
            <div className="flex flex-wrap justify-center gap-3">
                {tools.map((tool) => (
                    <span key={tool} className="bg-white border border-black/5 shadow-sm rounded-full px-5 py-2 text-[13px] font-bold text-black/70">{tool}</span>
                ))}
            </div>
        </section>
    );
};

// ── FAQ accordion ──────────────────────────────────────────────────
const FAQSection = () => {
    const { t } = usePreferences();
    const [open, setOpen] = useState(0);
    const items = [1, 2, 3, 4, 5, 6, 7];
    return (
        <section className="max-w-3xl mx-auto py-20 px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-12 text-center">{t('faq.heading')}</h2>
            <div className="space-y-3">
                {items.map((n, i) => {
                    const isOpen = open === i;
                    return (
                        <div key={n} className="bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden">
                            <button
                                onClick={() => setOpen(isOpen ? -1 : i)}
                                className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 font-bold text-black hover:bg-black/[0.02] transition-colors"
                            >
                                <span className="text-[15px]">{t(`faq.q${n}`)}</span>
                                <ChevronRight className={`w-5 h-5 text-black/40 shrink-0 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
                            </button>
                            {isOpen && (
                                <p className="px-6 pb-5 -mt-1 text-[14px] text-black/55 leading-relaxed font-['Inter']">{t(`faq.a${n}`)}</p>
                            )}
                        </div>
                    );
                })}
            </div>
            <div className="text-center mt-10">
                <button onClick={scrollToContact} className="inline-flex items-center gap-2 text-[14px] font-bold text-black/60 hover:text-black transition-colors">
                    {t('faq.cta')}
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </section>
    );
};

// ── Final CTA ──────────────────────────────────────────────────────
const FinalCTA = () => {
    const { t } = usePreferences();
    return (
        <section className="max-w-5xl mx-auto py-16 px-6">
            <div className="relative overflow-hidden bg-blue-600 rounded-[2.5rem] px-8 py-16 md:py-20 text-center shadow-xl shadow-blue-600/20">
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4 max-w-2xl mx-auto leading-tight">{t('final.heading')}</h2>
                <p className="text-white/80 font-medium font-['Inter'] mb-8 max-w-xl mx-auto">{t('final.desc')}</p>
                <button
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-[1.03] active:scale-95 transition-all shadow-lg"
                >
                    <Gift className="w-5 h-5" />
                    {t('final.cta')}
                </button>
                <p className="text-white/60 text-[12px] font-bold uppercase tracking-widest mt-5">{t('final.note')}</p>
            </div>
        </section>
    );
};

const Home = () => {
    const { t } = usePreferences();
    const [copied, setCopied] = useState(false);
    const email = "info@suneelp.com";
    const [formStatus, setFormStatus] = useState(null); // 'success' | 'error' | null
    const [isSubmitting, setIsSubmitting] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const target = location.state?.scrollToContact
            ? 'contact-section'
            : location.state?.scrollToResults
            ? 'results-section'
            : null;
        if (target) {
            setTimeout(() => {
                document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
            window.history.replaceState({}, document.title);
        }
    }, [location]);

    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus(null);

        const formData = new FormData(e.target);
        const payload = {
            email: formData.get("email"),
            message: formData.get("message"),
            botField: formData.get("botField"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(payload),
            });
            const result = await response.json();
            if (result.success) {
                setFormStatus("success");
                e.target.reset();
            } else {
                setFormStatus("error");
            }
        } catch (error) {
            setFormStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f3f3f3] text-[#2d3436] font-['Outfit'] selection:bg-black/10 overflow-x-hidden pb-20">
            {/* Top Nav/Header Info */}
            <Navbar />

            {/* Hero Section */}
            <section className="max-w-4xl mx-auto pt-20 pb-24 px-6 flex flex-col items-center text-center">
                <div className="relative mb-8">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white group hover:scale-105 transition-transform duration-300">
                        <img
                            src="/profile.jpg"
                            alt="Suneel"
                            className="w-full h-full object-cover object-[center_20%]"
                        />
                    </div>
                    <div className="absolute top-2 -right-4 bg-white px-4 py-1.5 rounded-full border border-black/5 shadow-md flex items-center gap-2 animate-bounce cursor-default">
                        <span className="text-[14px] font-bold">{t('hero.badge')}</span>
                    </div>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-black">
                    {t('hero.title1')} <br className="hidden md:block" />
                    <span className="text-black/40">{t('hero.title2')}</span>
                </h1>

                <div className="flex flex-col items-center gap-4">
                    {/* Lead magnet — primary, most prominent CTA above the fold */}
                    <button
                        onClick={scrollToContact}
                        className="relative bg-blue-600 text-white px-9 py-4 rounded-full font-bold text-base sm:text-lg flex items-center gap-2.5 group hover:scale-[1.03] active:scale-95 transition-all shadow-xl shadow-blue-600/30 ring-4 ring-blue-600/10"
                    >
                        <span className="absolute -top-2 -right-2 flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500 items-center justify-center">
                                <Sparkles className="w-2.5 h-2.5 text-white" />
                            </span>
                        </span>
                        <Gift className="w-5 h-5" />
                        {t('hero.audit')}
                    </button>
                    <p className="text-[12px] font-bold uppercase tracking-widest text-black/30">{t('hero.auditNote')}</p>

                    <Link
                        to="/work"
                        className="mt-3 bg-white text-black border border-black/10 px-8 py-3 rounded-full font-bold flex items-center gap-2 group hover:bg-black/5 active:scale-95 transition-all shadow-sm"
                    >
                        {t('hero.cta1')}
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>

                    <button
                        onClick={scrollToResults}
                        className="text-[13px] font-bold text-black/40 hover:text-black transition-colors flex items-center gap-1 group"
                    >
                        {t('hero.cta2')}
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                </div>

            </section>

            {/* Social proof + hard stats */}
            <SocialProofBar />
            <StatsStrip />

            {/* Services — Old Way vs My Way */}
            <ServicesSection />

            {/* How it works */}
            <HowItWorks />

            {/* Savings & Efficiency Calculator */}
            <section className="max-w-4xl mx-auto py-20 px-6">
                <div className="bg-white p-6 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-black/5 shadow-sm text-center">
                    <h2 className="text-2xl font-bold mb-12 text-black/80">{t('calc.sectionTitle')}</h2>
                    <SavingsCalculator />
                </div>
            </section>

            {/* Comparison Chart */}
            <section className="max-w-4xl mx-auto py-20 px-6">
                <div className="overflow-x-auto rounded-3xl border border-black/5 bg-white">
                    <table className="w-full min-w-[600px] md:min-w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-black/5 text-[12px] uppercase tracking-wider font-bold">
                                <th className="p-6 text-black/30">{t('table.feature')}</th>
                                <th className="p-6 text-black/30">{t('table.traditional')}</th>
                                <th className="p-6 text-black">{t('table.mine')}</th>
                            </tr>
                        </thead>
                        <tbody className="text-[14px]">
                            <tr className="border-b border-black/5">
                                <td className="p-6 font-bold">{t('table.row1.feature')}</td>
                                <td className="p-6 text-black/40">{t('table.row1.trad')}</td>
                                <td className="p-6 text-black">{t('table.row1.mine')}</td>
                            </tr>
                            <tr className="border-b border-black/5">
                                <td className="p-6 font-bold">{t('table.row2.feature')}</td>
                                <td className="p-6 text-black/40">{t('table.row2.trad')}</td>
                                <td className="p-6 text-black">{t('table.row2.mine')}</td>
                            </tr>
                            <tr className="border-b border-black/5">
                                <td className="p-6 font-bold">{t('table.row3.feature')}</td>
                                <td className="p-6 text-black/40">{t('table.row3.trad')}</td>
                                <td className="p-6 text-black">{t('table.row3.mine')}</td>
                            </tr>
                            <tr className="border-b border-black/5">
                                <td className="p-6 font-bold">{t('table.row4.feature')}</td>
                                <td className="p-6 text-black/40">{t('table.row4.trad')}</td>
                                <td className="p-6 text-black">{t('table.row4.mine')}</td>
                            </tr>
                            <tr>
                                <td className="p-6 font-bold">{t('table.row5.feature')}</td>
                                <td className="p-6 text-black/40">{t('table.row5.trad')}</td>
                                <td className="p-6 text-black font-bold">{t('table.row5.mine')}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Results / portfolio showcase */}
            <ResultsShowcase />

            {/* Platforms & integrations */}
            <PlatformsBar />

            {/* Pricing */}
            <PricingSection />

            {/* FAQ */}
            <FAQSection />

            {/* Final CTA */}
            <FinalCTA />

            {/* Contact Form Section */}
            <section id="contact-section" className="max-w-4xl mx-auto py-12 px-6 flex flex-col items-center">
                <div className="form-container">
                    <form onSubmit={handleFormSubmit} className="form">
                        {/* Honeypot — hidden from users; bots that fill it are silently dropped */}
                        <input
                            type="text"
                            name="botField"
                            tabIndex={-1}
                            autoComplete="off"
                            aria-hidden="true"
                            style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
                        />
                        <div className="form-group">
                            <label htmlFor="email">{t('contact.emailLabel')}</label>
                            <input type="email" id="email" name="email" required placeholder={t('contact.emailPlaceholder')} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="textarea">{t('contact.msgLabel')}</label>
                            <textarea id="textarea" name="message" required placeholder={t('contact.msgPlaceholder')}></textarea>
                        </div>
                        <button type="submit" disabled={isSubmitting} className="form-submit-btn">
                            {isSubmitting ? t('contact.sending') : t('contact.submit')}
                        </button>
                        {formStatus === "success" && (
                            <p className="text-green-400 text-[13px] mt-2 font-medium">{t('contact.success')}</p>
                        )}
                        {formStatus === "error" && (
                            <p className="text-red-400 text-[13px] mt-2 font-medium">{t('contact.error')}</p>
                        )}
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="max-w-4xl mx-auto pt-12 pb-8 px-6">
                <div className="pt-10 border-t border-black/5 flex flex-col sm:flex-row justify-between items-center gap-6 text-black/30 text-[12px] font-medium uppercase tracking-widest">
                    <span>{t('footer.copyright')}</span>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 items-center">
                        <a href="https://www.linkedin.com/in/suneel-p/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors flex items-center gap-2">
                            <Linkedin className="w-5 h-5" />
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://www.facebook.com/aifirstlink/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors flex items-center gap-2">
                            <Facebook className="w-5 h-5" />
                            <span>Facebook</span>
                        </a>
                        <a href="https://www.instagram.com/firstlinkai/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors flex items-center gap-2">
                            <Instagram className="w-5 h-5" />
                            <span>Instagram</span>
                        </a>
                        <a href="https://github.com/firstlinkai" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors flex items-center gap-2">
                            <Github className="w-5 h-5" />
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
