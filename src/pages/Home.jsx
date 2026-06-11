import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
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
                    <p className="text-3xl md:text-4xl font-bold text-black">${costSaved.toLocaleString()}</p>
                    <p className="text-[13px] text-black/40">Estimated Monthly ROI</p>
                </div>
                <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-black/5 pt-8 sm:pt-0 sm:pl-8 text-left">
                    <p className="text-[12px] font-black uppercase tracking-[0.2em] text-black/30">Time Efficiency</p>
                    <div className="flex items-baseline gap-2">
                        <p className="text-3xl md:text-4xl font-bold text-black">{savedHours}</p>
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
    const [formStatus, setFormStatus] = useState(null); // 'success' | 'error' | null
    const [isSubmitting, setIsSubmitting] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollToContact) {
            setTimeout(() => {
                document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
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
        const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE";
        formData.append("access_key", accessKey);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Accept": "application/json"
                },
                body: formData
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
                        <span className="text-[14px] font-bold">Suneel 👋</span>
                    </div>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-black">
                    I build the systems that <br className="hidden md:block" />
                    <span className="text-black/40">scale marketing & DTC agencies.</span>
                </h1>

                <div className="flex flex-col items-center gap-4">
                    <Link
                        to="/work"
                        className="bg-black text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 group hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-black/10"
                    >
                        Explore Agency Systems
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>

                    <Link
                        to="/dev-lab"
                        className="text-[13px] font-bold text-black/40 hover:text-black transition-colors flex items-center gap-1 group"
                    >
                        Explore Work
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                </div>

            </section>

            {/* Services Context */}
            <section className="max-w-4xl mx-auto py-20 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-black/80 max-w-2xl mx-auto leading-snug">
                    Collaborate with marketing & DTC agencies to build scalable automated systems.
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
                <div className="bg-white p-6 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-black/5 shadow-sm text-center">
                    <h2 className="text-2xl font-bold mb-12 text-black/80">The Efficiency Advantage</h2>
                    <SavingsCalculator />
                </div>
            </section>

            {/* Comparison Chart */}
            <section className="max-w-4xl mx-auto py-20 px-6">
                <div className="overflow-x-auto rounded-3xl border border-black/5 bg-white">
                    <table className="w-full min-w-[600px] md:min-w-full text-left border-collapse">
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

            {/* Contact Form Section */}
            <section id="contact-section" className="max-w-4xl mx-auto py-12 px-6 flex flex-col items-center">
                <h2 className="text-3xl font-bold mb-8 text-black text-center">Let's Connect</h2>
                <div className="form-container">
                    <form onSubmit={handleFormSubmit} className="form">
                        <div className="form-group">
                            <label htmlFor="email">Company Email</label>
                            <input type="email" id="email" name="email" required placeholder="Enter company email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="textarea">How Can We Help You?</label>
                            <textarea id="textarea" name="message" required placeholder="Describe your project..."></textarea>
                        </div>
                        <button type="submit" disabled={isSubmitting} className="form-submit-btn">
                            {isSubmitting ? "Sending..." : "Submit"}
                        </button>
                        {formStatus === "success" && (
                            <p className="text-green-400 text-[13px] mt-2 font-medium">Message sent successfully! I'll get back to you soon.</p>
                        )}
                        {formStatus === "error" && (
                            <p className="text-red-400 text-[13px] mt-2 font-medium">Something went wrong. Please check your access key or try again.</p>
                        )}
                    </form>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="max-w-4xl mx-auto py-24 px-6 text-center">
                <div className="bg-white p-8 md:p-20 rounded-[3rem] md:rounded-[4rem] border border-black/5 shadow-sm flex flex-col items-center">
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
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <a
                            href={`mailto:${email}`}
                            className="bg-black text-white px-8 py-3 rounded-full font-bold hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 shadow-lg shadow-black/10 w-full sm:w-auto"
                        >
                            <Mail className="w-5 h-5" />
                            Email Me
                        </a>
                        <a
                            href="https://wa.me/639956411291"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black border border-black/10 px-8 py-3 rounded-full font-bold hover:bg-black/5 transition-colors shadow-sm flex items-center justify-center gap-2 w-full sm:w-auto"
                        >
                            <Smartphone className="w-5 h-5" />
                            WhatsApp
                        </a>
                    </div>
                </div>
                <div className="mt-20 pt-10 border-t border-black/5 flex flex-col sm:flex-row justify-between items-center gap-6 text-black/30 text-[12px] font-medium uppercase tracking-widest">
                    <span>© 2026 Firstlink AI</span>
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
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
