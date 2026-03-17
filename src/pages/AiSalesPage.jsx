import React from 'react';
import { 
    Zap, 
    ArrowRight, 
    BarChart3, 
    CheckCircle2,
    ArrowUpRight,
    Target,
    Activity,
    FileText,
    ShieldCheck,
    Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AiSalesPage = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-['Outfit'] selection:bg-blue-500/30 overflow-x-hidden leading-relaxed">
            {/* Minimal Navigation */}
            <nav className="max-w-4xl mx-auto px-6 py-10 flex justify-between items-center relative z-10 border-b border-white/5">
                <Link to="/" className="text-xl font-bold tracking-tighter flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center group-hover:rotate-6 transition-transform">
                        <Target className="w-5 h-5 text-white" />
                    </div>
                    <span>Suneel<span className="text-blue-500">.AI</span></span>
                </Link>
                <Link to="/" className="text-[12px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                    Back to Portfolio
                </Link>
            </nav>

            {/* 1. Hero Section */}
            <section className="max-w-4xl mx-auto pt-32 pb-40 px-6 text-center">
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-10 backdrop-blur-sm">
                    <Activity className="w-4 h-4 text-blue-500" />
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] opacity-70">For Growth Agencies & DTC Brands</span>
                </div>
                
                <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-10 leading-[1.05]">
                    Stop Guessing. <br />
                    <span className="text-blue-600">Start Scaling.</span>
                </h1>
                
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 max-w-3xl mx-auto leading-tight">
                    Turn Your Competitors’ Ad Spend Into Your Creative Blueprint.
                </h2>
                
                <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto mb-16 leading-relaxed font-medium">
                    We leverage industrial-grade AI to monitor, analyze, and reverse-engineer every winning hook from your competitors across Facebook, Instagram, and TikTok. Get a weekly strategic roadmap with 10 production-ready ad concepts.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a href="mailto:info@suneelp.com" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-lg font-bold transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 shadow-2xl shadow-blue-600/20">
                        Get My Sample Intelligence Report
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
                <p className="mt-6 text-[12px] font-bold uppercase tracking-widest text-white/20">Current Turnaround: Less than 24 Hours</p>
            </section>

            {/* 2. The Pain Point (The "Admin Debt" Section) */}
            <section className="max-w-4xl mx-auto py-32 px-6 border-t border-white/5">
                <div className="max-w-2xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-10 tracking-tight">Manual Market Research is a <span className="text-red-500">Revenue Leak.</span></h2>
                    <p className="text-xl text-white/50 leading-relaxed font-medium">
                        Most creative teams spend 8+ hours a week manually auditing the market, guessing based on "vibes." Our system replaces manual administrative debt with high-precision data. We identify exactly why your competitors are winning, so you can outperform them in a fraction of the time.
                    </p>
                </div>
            </section>

            {/* 3. The Three Pillars of the System */}
            <section className="max-w-4xl mx-auto py-32 px-6 border-t border-white/10 space-y-32">
                {/* Pillar 01 */}
                <div className="group">
                    <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-6 block">Pillar 01</span>
                    <h3 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight group-hover:translate-x-2 transition-transform duration-500">Cross-Platform Hook Intelligence</h3>
                    <p className="text-xl text-white/40 leading-relaxed max-w-2xl font-['Inter']">
                        Our system audits the first 3 seconds of every high-performing competitor creative. We break down the visual styles, audio cues, and text overlays that are successfully stopping the scroll in your niche.
                    </p>
                </div>

                {/* Pillar 02 */}
                <div className="group">
                    <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-6 block">Pillar 02</span>
                    <h3 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight group-hover:translate-x-2 transition-transform duration-500">Pattern Recognition & Gap Analysis</h3>
                    <p className="text-xl text-white/40 leading-relaxed max-w-2xl font-['Inter']">
                        We detect the specific creative formats currently scaling—whether it’s POV transformations, authority-based social proof, or routine demonstrations. We show you what is working now and identify the "Knowledge Gaps" your brand can exploit.
                    </p>
                </div>

                {/* Pillar 03 */}
                <div className="group">
                    <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-6 block">Pillar 03</span>
                    <h3 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight group-hover:translate-x-2 transition-transform duration-500">The 24-Hour Creative Brief</h3>
                    <p className="text-xl text-white/40 leading-relaxed max-w-2xl font-['Inter']">
                        Move from observation to production instantly. Every intelligence report includes 10 new, unique ad scripts and storyboards architected from the aggregated data of your top competitors.
                    </p>
                </div>
            </section>

            {/* 4. The Deliverable Node */}
            <section className="bg-white/5 border-y border-white/10 py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tight text-center">Your Weekly Strategic Intelligence Report</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { title: "The Hook Swipe File", desc: "15+ ready-to-test hooks tailored to your specific brand.", icon: <Zap /> },
                            { title: "Creative Pattern Audit", desc: "A deep dive into winning visual and narrative structures.", icon: <BarChart3 /> },
                            { title: "Competitor Performance Mapping", desc: "Detailed analysis of rival messaging and where they are failing.", icon: <Target /> },
                            { title: "10 Production Scripts", desc: "High-converting copy ready for your next content shoot.", icon: <FileText /> }
                        ].map((item, i) => (
                            <div key={i} className="bg-black/40 border border-white/5 p-10 rounded-2xl hover:border-blue-500/30 transition-colors group">
                                <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform">{React.cloneElement(item.icon, { size: 32 })}</div>
                                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                                <p className="text-white/40 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. The "Grand Slam" Offer (The Wedge) */}
            <section className="max-w-4xl mx-auto py-32 px-6 border-b border-white/5">
                <span className="inline-block bg-blue-600 text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1 rounded mb-8">Special Access</span>
                <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight">The "Industrial Precision" Beta</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <p className="text-xl text-white/50 leading-relaxed mb-8">
                            I spent 7 years in highly regulated engineering industry. I am now bringing that same engineering precision to your creative strategy.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-white/70">
                                <ShieldCheck className="w-5 h-5 text-blue-500" />
                                <span className="font-bold">No contracts. No hidden fees.</span>
                            </div>
                            <div className="flex items-center gap-3 text-white/70">
                                <Lock className="w-5 h-5 text-blue-500" />
                                <span className="font-bold">Cancel anytime.</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-10 rounded-2xl flex flex-col justify-center text-center">
                        <p className="text-[12px] font-bold uppercase tracking-widest text-white/30 mb-4">Beta Partnership</p>
                        <p className="text-5xl font-bold mb-2">$300/mo</p>
                        <p className="text-sm text-white/40 mb-8">(Inclusive of Weekly Reports)</p>
                        <p className="text-blue-500 font-bold text-sm">Limited to 5 agencies this month</p>
                    </div>
                </div>
            </section>

            {/* 6. Call to Action (The Conversion Node) */}
            <section className="max-w-4xl mx-auto py-40 px-6 text-center">
                <h2 className="text-5xl md:text-8xl font-bold mb-12 tracking-tight">Ready to see the data?</h2>
                <div className="flex flex-col items-center gap-8">
                    <a href="mailto:info@suneelp.com" className="w-full sm:w-auto bg-white text-black px-12 py-5 rounded-lg font-black text-lg hover:scale-[1.05] transition-transform flex items-center justify-center gap-3 shadow-2xl shadow-white/10">
                        Get My Sample Intelligence Report
                        <ArrowUpRight className="w-6 h-6" />
                    </a>
                    <Link to="/" className="text-white/40 hover:text-white transition-colors uppercase tracking-[0.2em] text-[11px] font-bold">
                        Return to Portfolio
                    </Link>
                </div>
            </section>

            {/* 7. Footer */}
            <section className="max-w-4xl mx-auto py-20 px-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="flex flex-col gap-2">
                    <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
                        <Target className="w-5 h-5 text-blue-600" />
                        <span>Suneel<span className="text-blue-500">.AI</span></span>
                    </div>
                    <p className="text-white/20 text-[11px] font-bold uppercase tracking-widest">Built with Precision.</p>
                </div>
                <div className="text-white/20 text-[11px] font-bold uppercase tracking-widest md:text-right">
                    © 2026 Suneel Pervez | Firstlink AI
                </div>
            </section>
        </div>
    );
};

export default AiSalesPage;
