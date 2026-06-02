import React, { useState } from 'react';
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
    Lock,
    ChevronRight,
    Mail,
    User,
    Send
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AiSalesPage = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setFormState({ name: '', email: '', message: '' });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="min-h-screen bg-[#f3f3f3] text-[#2d3436] font-['Outfit'] selection:bg-black/10 overflow-x-hidden leading-relaxed">
            {/* Navigation */}
            <nav className="max-w-7xl mx-auto px-6 py-10 flex justify-between items-center relative z-10 border-b border-black/5">
                <Link to="/" className="text-xl font-bold tracking-tighter flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-black rounded flex items-center justify-center group-hover:rotate-6 transition-transform">
                        <Zap className="w-5 h-5 text-white" />
                    </div>
                    <span>Firstlink<span className="text-black/40">.AI</span></span>
                </Link>
                <div className="flex gap-6 items-center">
                    <Link to="/work" className="text-[12px] font-bold uppercase tracking-widest text-black/40 hover:text-black transition-colors">
                        Our Work
                    </Link>
                    <Link to="/" className="text-[12px] font-bold uppercase tracking-widest text-black/40 hover:text-black transition-colors">
                        Back to Home
                    </Link>
                </div>
            </nav>

            {/* 1. Hero Section */}
            <section className="max-w-4xl mx-auto pt-24 pb-32 px-6 text-center">
                <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full mb-10 border border-black/5 shadow-sm">
                    <Activity className="w-4 h-4 text-blue-600" />
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] opacity-70">For Growth Agencies & DTC Brands</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-black">
                    Your Competitors Already Found <br />
                    <span className="text-black/40">Winning Ads.</span>
                </h1>
                
                <h2 className="text-2xl md:text-3xl font-bold text-black/80 mb-10 max-w-3xl mx-auto leading-tight">
                    You Just Haven’t Mapped Them Yet.
                </h2>
                
                <p className="text-lg md:text-xl text-black/50 max-w-2xl mx-auto mb-12 leading-relaxed font-medium font-['Inter']">
                    Turn your competitors’ ad spend into production-ready creative. We track and break down top-performing ads across Facebook, Instagram, and TikTok. Every week, you get a clear report showing what’s working right now—plus 3 ad concepts ready to produce.
                </p>
                
                <div className="flex flex-col items-center gap-6">
                    <a href="#contact" className="w-full sm:w-auto bg-black text-white px-10 py-5 rounded-full font-bold transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 shadow-xl shadow-black/10">
                        Get My Sample Intelligence Report
                        <ArrowRight className="w-5 h-5" />
                    </a>
                    <div className="flex flex-col gap-2">
                        <p className="text-[11px] font-bold uppercase tracking-widest text-black/30">(See exactly what you’ll receive before you commit)</p>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-blue-600">Turnaround: &lt; 24 Hours</p>
                    </div>
                </div>
            </section>

            {/* 2. The Pain Point */}
            <section className="max-w-4xl mx-auto py-32 px-6 border-t border-black/5">
                <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-10 tracking-tight text-black">Manual Market Research is a <span className="text-red-500/80">Revenue Leak.</span></h2>
                    <p className="text-xl text-black/60 leading-relaxed font-medium font-['Inter'] mb-8">
                        Most creative teams spend 8+ hours a week reviewing ads and guessing what works.
                    </p>
                    <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm inline-block">
                        <p className="text-xl font-bold text-black mb-2">This system replaces that with clear data.</p>
                        <p className="text-lg text-black/40 font-medium">You’ll know why competitors are winning—and what to test next.</p>
                    </div>
                </div>
            </section>

            {/* 3. The Three Pillars */}
            <section className="max-w-4xl mx-auto py-32 px-6 border-t border-black/5 space-y-32">
                {[
                    {
                        num: "01",
                        title: "Cross-Platform Hook Intelligence",
                        desc: "We analyze the first 3 seconds of top-performing ads—what actually stops the scroll. You’ll see the exact visual styles, hooks, and messaging patterns being used in your market."
                    },
                    {
                        num: "02",
                        title: "Pattern Recognition & Gap Analysis",
                        desc: "We identify the ad formats that are working right now—and the gaps your competitors are missing. This gives you clear angles to test instead of recycling the same ideas."
                    },
                    {
                        num: "03",
                        title: "The 24-Hour Creative Brief",
                        desc: "You get 3 new ad scripts and storyboards every week, built from what’s already working in your niche. No brainstorming. No guesswork. Just execution."
                    }
                ].map((pillar, i) => (
                    <div key={i} className="group">
                        <span className="text-black/20 font-black text-4xl mb-6 block font-['Outfit']">Pillar {pillar.num}</span>
                        <h3 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight text-black flex items-center gap-4">
                            {pillar.title}
                            <div className="h-px bg-black/10 flex-grow hidden md:block" />
                        </h3>
                        <p className="text-xl text-black/50 leading-relaxed max-w-2xl font-['Inter'] font-medium">
                            {pillar.desc}
                        </p>
                    </div>
                ))}
            </section>

            {/* 4. The Deliverable Node */}
            <section className="bg-white border-y border-black/5 py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight text-center text-black">Your Weekly Strategic Intelligence Report Includes:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: "Hook Swipe File", desc: "10 ready-to-test hooks tailored to your brand", icon: <Zap /> },
                            { title: "Creative Pattern Audit", desc: "Breakdown of winning visual and narrative structures", icon: <BarChart3 /> },
                            { title: "Competitor Performance Mapping", desc: "Where competitors are strong—and where they’re vulnerable", icon: <Target /> },
                            { title: "3 Ready-to-Shoot Ad Scripts", desc: "Built for your next content production cycle", icon: <FileText /> }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#fcfcfc] border border-black/5 p-8 rounded-3xl hover:border-black/20 transition-all group shadow-sm">
                                <div className="text-black mb-6 group-hover:scale-110 transition-transform">{React.cloneElement(item.icon, { size: 28, className: "opacity-40" })}</div>
                                <h4 className="text-xl font-bold mb-3 text-black">{item.title}</h4>
                                <p className="text-black/50 font-['Inter'] font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Why This Works */}
            <section className="max-w-4xl mx-auto py-32 px-6 border-b border-black/5">
                <div className="inline-block bg-black text-white text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1 rounded-lg mb-8">Why This Works</div>
                <h2 className="text-3xl md:text-5xl font-bold mb-10 tracking-tight text-black">Precision Engineering Meets Creative.</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-6">
                        <p className="text-xl text-black/60 leading-relaxed font-medium font-['Inter']">
                            I spent 7 years working in high-reliability engineering systems. That same approach is applied here—structured analysis, repeatable outputs, and no guesswork.
                        </p>
                        <p className="text-xl text-black font-bold font-['Outfit']">
                            This isn’t trend-chasing. It’s a system.
                        </p>
                    </div>
                    <div className="bg-white border border-black/5 p-10 rounded-3xl flex flex-col justify-center text-center shadow-sm">
                        <p className="text-[12px] font-bold uppercase tracking-widest text-black/30 mb-4">Beta Partnership</p>
                        <div className="flex items-baseline justify-center gap-3 mb-2">
                            <span className="text-2xl font-bold text-black/30 line-through decoration-black/20">$1200</span>
                            <p className="text-5xl font-bold text-black">$699<span className="text-lg text-black/40">/mo</span></p>
                        </div>
                        <p className="text-[13px] font-bold text-black/40 mb-8 uppercase tracking-widest">(Includes Weekly Reports)</p>
                        <div className="space-y-3">
                            <div className="flex items-center justify-center gap-2 text-black/60 font-bold text-sm">
                                <ShieldCheck className="w-4 h-4" /> No contracts. Cancel anytime.
                            </div>
                            <p className="text-blue-600 font-bold text-sm uppercase tracking-widest">Limited to 5 agencies this month</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Contact Form Section */}
            <section id="contact" className="max-w-xl mx-auto py-32 px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-black">Want to see the data?</h2>
                    <p className="text-black/50 font-medium">Get your sample report or reach out to start a partnership.</p>
                </div>

                <div className="bg-white p-10 rounded-[2.5rem] border border-black/5 shadow-xl">
                    {submitted ? (
                        <div className="py-20 text-center animate-in fade-in zoom-in duration-500">
                            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 className="w-8 h-8 text-green-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-2">Message Sent!</h3>
                            <p className="text-black/40">I'll get back to you within 24 hours.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[12px] font-bold uppercase tracking-widest text-black/40 ml-4">Full Name</label>
                                <input 
                                    required
                                    name="name"
                                    value={formState.name}
                                    onChange={handleInputChange}
                                    placeholder="Jane Doe"
                                    className="w-full bg-[#f8f8f8] border border-black/5 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 transition-all font-medium" 
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[12px] font-bold uppercase tracking-widest text-black/40 ml-4">Business Email</label>
                                <input 
                                    required
                                    type="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleInputChange}
                                    placeholder="jane@agency.com"
                                    className="w-full bg-[#f8f8f8] border border-black/5 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 transition-all font-medium" 
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[12px] font-bold uppercase tracking-widest text-black/40 ml-4">Message</label>
                                <textarea 
                                    required
                                    name="message"
                                    value={formState.message}
                                    onChange={handleInputChange}
                                    placeholder="Tell me about your competitors..."
                                    rows="4"
                                    className="w-full bg-[#f8f8f8] border border-black/5 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 transition-all font-medium resize-none" 
                                />
                            </div>
                            <button type="submit" className="w-full bg-black text-white py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-lg shadow-black/10">
                                Send Message
                                <Send className="w-5 h-5 opacity-50" />
                            </button>
                        </form>
                    )}
                </div>
                
                <div className="text-center mt-12">
                     <Link to="/" className="text-black/30 hover:text-black transition-colors uppercase tracking-[0.2em] text-[11px] font-bold">
                        Return to Portfolio
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="max-w-7xl mx-auto py-20 px-6 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="flex flex-col gap-2">
                    <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
                        <Zap className="w-5 h-5 text-black" />
                        <span>Firstlink<span className="text-black/40">.AI</span></span>
                    </div>
                    <p className="text-black/20 text-[11px] font-bold uppercase tracking-widest">Built with Precision.</p>
                </div>
                <div className="text-black/20 text-[11px] font-bold uppercase tracking-widest md:text-right">
                    © 2026 Suneel Pervez | Firstlink AI
                </div>
            </footer>
        </div>
    );
};

export default AiSalesPage;
