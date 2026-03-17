import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ChevronRight,
    Search,
    BarChart3,
    Globe,
    Mail,
    Zap,
    Layout,
    Smartphone,
    PenTool,
    Code,
    ArrowUpRight,
    User,
    Briefcase,
    Facebook,
    Linkedin,
    Instagram,
    Copy,
    Check
} from 'lucide-react';

const clients = [
    { name: "SpeakEasy Marketing", logo: "/logos/speakeasy.png" },
    { name: "Floowy.ai", logo: "/logos/floowy.png" },
    { name: "DGTL BASE", logo: "/logos/dgtlbase.png" },
    { name: "10xGrowth", logo: "/logos/10xgrowth.jpg" },
    { name: "Botanic", logo: "/logos/botanic.png" },
    { name: "Wild Boocha", logo: "/logos/wildboocha.png" },
    { name: "Firstlink AI", logo: "/logos/firstlinkai.jpg" },
    { name: "Picka Chai", logo: "/logos/pickachai.png" },
];

const SavingsCalculator = () => {
    const [volume, setVolume] = useState(10);
    const costPerPost = 150;
    const aiCostPerPost = 15;
    const hoursPerManualPost = 4;
    const hoursPerAIPost = 0.1;

    const savedHours = (volume * (hoursPerManualPost - hoursPerAIPost)).toFixed(1);
    const costSaved = volume * (costPerPost - aiCostPerPost);

    return (
        <div className="max-w-2xl mx-auto space-y-12 font-['Inter']">
            <div className="space-y-6">
                <div className="flex justify-between items-center text-[14px] font-bold">
                    <span className="text-black/60 uppercase tracking-wider">Scale of Monthly Assets</span>
                    <span className="bg-black text-white px-4 py-1 rounded-lg">
                        {volume} Assets
                    </span>
                </div>
                <input
                    type="range"
                    min="1"
                    max="100"
                    value={volume}
                    onChange={(e) => setVolume(parseInt(e.target.value))}
                    className="w-full h-1 bg-black/10 rounded-lg appearance-none cursor-pointer accent-black"
                />
                <div className="flex justify-between text-[11px] font-bold text-black/30 uppercase">
                    <span>Starter (1)</span>
                    <span>Scalable (100)</span>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-black/5">
                <div className="space-y-1">
                    <p className="text-[12px] font-black uppercase tracking-[0.2em] text-black/30">Cost Efficiency</p>
                    <p className="text-4xl font-bold text-black">${costSaved.toLocaleString()}</p>
                    <p className="text-[13px] text-black/40">Estimated Monthly ROI</p>
                </div>
                <div className="space-y-1 border-l border-black/5 pl-8 text-left">
                    <p className="text-[12px] font-black uppercase tracking-[0.2em] text-black/30">Time Efficiency</p>
                    <div className="flex items-baseline gap-2">
                        <p className="text-4xl font-bold text-black">{savedHours}</p>
                        <span className="text-lg font-bold text-black/40">Hours</span>
                    </div>
                    <p className="text-[13px] text-black/40">Reclaimed Per Month</p>
                </div>
            </div>

            <p className="text-[13px] font-medium text-black italic opacity-30 pt-4">
                "I build systems that work while you sleep."
            </p>
        </div>
    );
};

const Home = () => {
    const [copied, setCopied] = useState(false);
    const email = "info@suneelp.com";

    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-[#f3f3f3] text-[#2d3436] font-['Outfit'] selection:bg-black/10 overflow-x-hidden pb-20">
            {/* Top Nav/Header Info */}
            <header className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center text-[13px] font-medium text-black/60">
                <div className="flex gap-4 items-center">
                    <span className="bg-white px-4 py-1.5 rounded-full border border-black/5 shadow-sm text-black font-bold">Suneel</span>
                    <Link 
                        to="/ai-system"
                        className="bg-blue-600 text-white px-4 py-1.5 rounded-full shadow-sm hover:bg-blue-700 transition-all font-bold flex items-center gap-2"
                    >
                        <Zap className="w-3 h-3 fill-white" />
                        Firstlink.AI
                    </Link>
                    <button
                        onClick={copyEmail}
                        className="group bg-white px-4 py-1.5 rounded-full border border-black/5 shadow-sm hover:bg-black/5 transition-all flex items-center gap-2 active:scale-95"
                    >
                        {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
                        {copied ? "Copied!" : "Copy Email"}
                    </button>
                    <div className="flex gap-3 ml-2">
                        <a href="https://suneelp.com/" target="_blank" rel="noopener noreferrer" className="bg-white p-2.5 rounded-full border border-black/5 shadow-sm hover:bg-black/5 transition-colors" title="Personal Website">
                            <User className="w-5 h-5" />
                        </a>
                        <a href="https://firstlinkai.com/" target="_blank" rel="noopener noreferrer" className="bg-white p-2.5 rounded-full border border-black/5 shadow-sm hover:bg-black/5 transition-colors" title="Work Website">
                            <Briefcase className="w-5 h-5" />
                        </a>
                    </div>
                </div>
                <div className="flex gap-8 items-center">
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
                </div>
            </header>

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
                        <span className="text-[14px] font-bold">Suneel 👋</span>
                    </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-black max-w-2xl">
                    Building digital products, brands, and experience.
                </h1>

                <div className="flex flex-col items-center gap-4">
                    <a
                        href="https://www.github.com/firstlinkai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 group hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-black/10"
                    >
                        Latest Work
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                    
                    <Link 
                        to="/ai-system"
                        className="text-[13px] font-bold text-black/40 hover:text-black transition-colors flex items-center gap-1 group"
                    >
                        Explore AI Systems
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                </div>

                {/* Logo Strip */}
                <div className="mt-28 w-full overflow-hidden">
                    <div className="flex flex-wrap justify-center gap-10 md:gap-16 items-center opacity-30 grayscale saturate-0 hover:opacity-50 transition-opacity">
                        {clients.map((client, index) => (
                            <img
                                key={index}
                                src={client.logo}
                                alt={client.name}
                                className={
                                    client.name === "DGTL BASE" || client.name === "SpeakEasy Marketing" || client.name === "Wild Boocha"
                                        ? "h-10 md:h-16 object-contain"
                                        : "h-8 md:h-12 object-contain"
                                }
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Context */}
            <section className="max-w-4xl mx-auto py-20 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-black/80 max-w-2xl mx-auto leading-snug">
                    Collaborate with brands and agencies to create impactful results.
                </h2>

                <div className="relative mb-20">
                    <span className="bg-white px-4 py-1 rounded-full border border-black/5 shadow-sm text-[12px] font-bold">Services</span>
                    <div className="h-px bg-black/5 w-full absolute top-1/2 -z-10" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
                    {/* Section 1: Creative Production */}
                    <div>
                        <div className="mb-4 text-black"><PenTool className="w-5 h-5 opacity-40" /></div>
                        <h3 className="font-bold mb-2">Creative Production</h3>
                        <p className="text-[14px] text-black/50 leading-relaxed font-['Inter']">
                            I build autonomous creative engines: 3D Cinematic Renders via Kling & UGC Automation pipelines.
                        </p>
                    </div>

                    {/* Section 2: Intelligence Layer */}
                    <div>
                        <div className="mb-4 text-black"><BarChart3 className="w-5 h-5 opacity-40" /></div>
                        <h3 className="font-bold mb-2">Growth Intelligence</h3>
                        <p className="text-[14px] text-black/50 leading-relaxed font-['Inter']">
                            Automated Google Ads Performance Audit & Social Media competitor "hook" analysis for high-margin ROI.
                        </p>
                    </div>

                    {/* Section 3: Omnichannel */}
                    <div>
                        <div className="mb-4 text-black"><Globe className="w-5 h-5 opacity-40" /></div>
                        <h3 className="font-bold mb-2">Omnichannel</h3>
                        <p className="text-[14px] text-black/50 leading-relaxed font-['Inter']">
                            2,000-word SEO Blog engines & 8-platform autoposter systems to maintain 24/7 brand presence.
                        </p>
                    </div>

                    {/* Section 4: Performance Design */}
                    <div>
                        <div className="mb-4 text-black"><Search className="w-5 h-5 opacity-40" /></div>
                        <h3 className="font-bold mb-2">Performance Design</h3>
                        <p className="text-[14px] text-black/50 leading-relaxed font-['Inter']">
                            Hyper-realistic Atmospheric Brief Generators for studio-level 4K branded imagery.
                        </p>
                    </div>
                </div>
            </section>

            {/* Savings & Efficiency Calculator */}
            <section className="max-w-4xl mx-auto py-20 px-6">
                <div className="bg-white p-12 rounded-[3rem] border border-black/5 shadow-sm text-center">
                    <h2 className="text-2xl font-bold mb-12 text-black/80">The Efficiency Advantage</h2>
                    <SavingsCalculator />
                </div>
            </section>

            {/* Comparison Chart */}
            <section className="max-w-4xl mx-auto py-20 px-6">
                <div className="overflow-hidden rounded-3xl border border-black/5 bg-white">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-black/5 text-[12px] uppercase tracking-wider font-bold">
                                <th className="p-6 text-black/30">Feature</th>
                                <th className="p-6 text-black/30">Traditional Methods</th>
                                <th className="p-6 text-black">My Workflow</th>
                            </tr>
                        </thead>
                        <tbody className="text-[14px]">
                            <tr className="border-b border-black/5">
                                <td className="p-6 font-bold">Turnaround</td>
                                <td className="p-6 text-black/40">Days / Weeks</td>
                                <td className="p-6 text-black">&lt; 5 Minutes (Automated)</td>
                            </tr>
                            <tr className="border-b border-black/5">
                                <td className="p-6 font-bold">Volume Scale</td>
                                <td className="p-6 text-black/40">Limited by headcount</td>
                                <td className="p-6 text-black">Infinite (On-demand)</td>
                            </tr>
                            <tr className="border-b border-black/5">
                                <td className="p-6 font-bold">Ads Audit</td>
                                <td className="p-6 text-black/40">Manual Data Entry</td>
                                <td className="p-6 text-black">Real-time Velocity Tracking</td>
                            </tr>
                            <tr>
                                <td className="p-6 font-bold">Content Quality</td>
                                <td className="p-6 text-black/40">Subjective / Variable</td>
                                <td className="p-6 text-black">Branded AI (Studio-Grade)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="max-w-4xl mx-auto py-24 px-6 text-center">
                <div className="bg-white p-20 rounded-[4rem] border border-black/5 shadow-sm flex flex-col items-center">
                    <div className="w-16 h-12 flex items-center justify-center mb-10">
                        {/* Minimal handshake icon replacement */}
                        <svg viewBox="0 0 24 24" className="w-10 h-10 opacity-30 fill-none stroke-current" strokeWidth="1.5">
                            <path d="M10 13a2 2 0 100-4 2 2 0 000 4zM21 15a2 2 0 11-4 0 2 2 0 014 0z" />
                            <path d="M5 20c0-2.5 4-4 7-4s7 1.5 7 4M10 13l-4 4" />
                        </svg>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-12 text-black tracking-tight leading-none px-4">
                        Tell me about your next project
                    </h2>
                    <div className="flex gap-4">
                        <a
                            href={`mailto:${email}`}
                            className="bg-black text-white px-8 py-3 rounded-full font-bold hover:scale-[1.02] transition-transform flex items-center gap-2 shadow-lg shadow-black/10"
                        >
                            <Mail className="w-5 h-5" />
                            Email Me
                        </a>
                        <a
                            href="https://wa.me/639956411291"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black border border-black/10 px-8 py-3 rounded-full font-bold hover:bg-black/5 transition-colors shadow-sm flex items-center gap-2"
                        >
                            <Smartphone className="w-5 h-5" />
                            WhatsApp
                        </a>
                    </div>
                </div>
                <div className="mt-20 pt-10 border-t border-black/5 flex justify-between items-center text-black/30 text-[12px] font-medium uppercase tracking-widest">
                    <span>© 2026 Firstlink AI</span>
                    <div className="flex gap-6 items-center">
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
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
