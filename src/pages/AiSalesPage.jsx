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
import Navbar from '../components/Navbar';
import { usePreferences } from '../context/PreferencesContext';

const AiSalesPage = () => {
    const { t } = usePreferences();
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
            <Navbar />

            {/* 1. Hero Section */}
            <section className="max-w-4xl mx-auto pt-16 pb-20 md:pt-24 md:pb-32 px-6 text-center">
                <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full mb-10 border border-black/5 shadow-sm">
                    <Activity className="w-4 h-4 text-blue-600" />
                    <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] opacity-70">{t('sales.badge')}</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-black">
                    {t('sales.h1a')} <br />
                    <span className="text-black/40">{t('sales.h1b')}</span>
                </h1>

                <h2 className="text-2xl md:text-3xl font-bold text-black/80 mb-10 max-w-3xl mx-auto leading-tight">
                    {t('sales.h2')}
                </h2>

                <p className="text-lg md:text-xl text-black/50 max-w-2xl mx-auto mb-12 leading-relaxed font-medium font-['Inter']">
                    {t('sales.intro')}
                </p>

                <div className="flex flex-col items-center gap-6">
                    <a href="#contact" className="w-full sm:w-auto bg-black text-white px-10 py-5 rounded-full font-bold transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 shadow-xl shadow-black/10">
                        {t('sales.cta')}
                        <ArrowRight className="w-5 h-5" />
                    </a>
                    <div className="flex flex-col gap-2">
                        <p className="text-[11px] font-bold uppercase tracking-widest text-black/30">{t('sales.ctaNote1')}</p>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-blue-600">{t('sales.ctaNote2')}</p>
                    </div>
                </div>
            </section>

            {/* 2. The Pain Point */}
            <section className="max-w-4xl mx-auto py-20 md:py-32 px-6 border-t border-black/5">
                <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-10 tracking-tight text-black">{t('sales.painH2a')} <span className="text-red-500/80">{t('sales.painH2b')}</span></h2>
                    <p className="text-xl text-black/60 leading-relaxed font-medium font-['Inter'] mb-8">
                        {t('sales.painP')}
                    </p>
                    <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm inline-block">
                        <p className="text-xl font-bold text-black mb-2">{t('sales.painCardTitle')}</p>
                        <p className="text-lg text-black/40 font-medium">{t('sales.painCardSub')}</p>
                    </div>
                </div>
            </section>

            {/* 3. The Three Pillars */}
            <section className="max-w-4xl mx-auto py-20 md:py-32 px-6 border-t border-black/5 space-y-32">
                {[
                    { num: "01", titleKey: "sales.pillar1Title", descKey: "sales.pillar1Desc" },
                    { num: "02", titleKey: "sales.pillar2Title", descKey: "sales.pillar2Desc" },
                    { num: "03", titleKey: "sales.pillar3Title", descKey: "sales.pillar3Desc" }
                ].map((pillar, i) => (
                    <div key={i} className="group">
                        <span className="text-black/20 font-black text-4xl mb-6 block font-['Outfit']">{t('sales.pillarLabel')} {pillar.num}</span>
                        <h3 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight text-black flex items-center gap-4">
                            {t(pillar.titleKey)}
                            <div className="h-px bg-black/10 flex-grow hidden md:block" />
                        </h3>
                        <p className="text-xl text-black/50 leading-relaxed max-w-2xl font-['Inter'] font-medium">
                            {t(pillar.descKey)}
                        </p>
                    </div>
                ))}
            </section>

            {/* 4. The Deliverable Node */}
            <section className="bg-white border-y border-black/5 py-20 md:py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight text-center text-black">{t('sales.deliverTitle')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { titleKey: "sales.deliver1Title", descKey: "sales.deliver1Desc", icon: <Zap /> },
                            { titleKey: "sales.deliver2Title", descKey: "sales.deliver2Desc", icon: <BarChart3 /> },
                            { titleKey: "sales.deliver3Title", descKey: "sales.deliver3Desc", icon: <Target /> },
                            { titleKey: "sales.deliver4Title", descKey: "sales.deliver4Desc", icon: <FileText /> }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#fcfcfc] border border-black/5 p-8 rounded-3xl hover:border-black/20 transition-all group shadow-sm">
                                <div className="text-black mb-6 group-hover:scale-110 transition-transform">{React.cloneElement(item.icon, { size: 28, className: "opacity-40" })}</div>
                                <h4 className="text-xl font-bold mb-3 text-black">{t(item.titleKey)}</h4>
                                <p className="text-black/50 font-['Inter'] font-medium">{t(item.descKey)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Why This Works */}
            <section className="max-w-4xl mx-auto py-20 md:py-32 px-6 border-b border-black/5">
                <div className="inline-block bg-black text-white text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1 rounded-lg mb-8">{t('sales.whyLabel')}</div>
                <h2 className="text-3xl md:text-5xl font-bold mb-10 tracking-tight text-black">{t('sales.whyH2')}</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-6">
                        <p className="text-xl text-black/60 leading-relaxed font-medium font-['Inter']">
                            {t('sales.whyP')}
                        </p>
                        <p className="text-xl text-black font-bold font-['Outfit']">
                            {t('sales.whyBold')}
                        </p>
                    </div>
                    <div className="bg-white border border-black/5 p-10 rounded-3xl flex flex-col justify-center text-center shadow-sm">
                        <p className="text-[12px] font-bold uppercase tracking-widest text-black/30 mb-4">{t('sales.betaLabel')}</p>
                        <div className="flex items-baseline justify-center gap-3 mb-2">
                            <span className="text-2xl font-bold text-black/30 line-through decoration-black/20">$1200</span>
                            <p className="text-5xl font-bold text-black">$699<span className="text-lg text-black/40">/mo</span></p>
                        </div>
                        <p className="text-[13px] font-bold text-black/40 mb-8 uppercase tracking-widest">{t('sales.betaIncludes')}</p>
                        <div className="space-y-3">
                            <div className="flex items-center justify-center gap-2 text-black/60 font-bold text-sm">
                                <ShieldCheck className="w-4 h-4" /> {t('sales.betaNoContract')}
                            </div>
                            <p className="text-blue-600 font-bold text-sm uppercase tracking-widest">{t('sales.betaLimited')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Contact Form Section */}
            <section id="contact" className="max-w-xl mx-auto py-20 md:py-32 px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-black">{t('sales.formH2')}</h2>
                    <p className="text-black/50 font-medium">{t('sales.formSub')}</p>
                </div>

                <div className="bg-white p-10 rounded-[2.5rem] border border-black/5 shadow-xl">
                    {submitted ? (
                        <div className="py-20 text-center animate-in fade-in zoom-in duration-500">
                            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 className="w-8 h-8 text-green-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-2">{t('sales.sentTitle')}</h3>
                            <p className="text-black/40">{t('sales.sentSub')}</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[12px] font-bold uppercase tracking-widest text-black/40 ml-4">{t('sales.formName')}</label>
                                <input
                                    required
                                    name="name"
                                    value={formState.name}
                                    onChange={handleInputChange}
                                    placeholder={t('sales.formNamePh')}
                                    className="w-full bg-[#f8f8f8] border border-black/5 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 transition-all font-medium"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[12px] font-bold uppercase tracking-widest text-black/40 ml-4">{t('sales.formEmail')}</label>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleInputChange}
                                    placeholder={t('sales.formEmailPh')}
                                    className="w-full bg-[#f8f8f8] border border-black/5 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 transition-all font-medium"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[12px] font-bold uppercase tracking-widest text-black/40 ml-4">{t('sales.formMsg')}</label>
                                <textarea
                                    required
                                    name="message"
                                    value={formState.message}
                                    onChange={handleInputChange}
                                    placeholder={t('sales.formMsgPh')}
                                    rows="4"
                                    className="w-full bg-[#f8f8f8] border border-black/5 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 transition-all font-medium resize-none"
                                />
                            </div>
                            <button type="submit" className="w-full bg-black text-white py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-lg shadow-black/10">
                                {t('sales.formBtn')}
                                <Send className="w-5 h-5 opacity-50" />
                            </button>
                        </form>
                    )}
                </div>

                <div className="text-center mt-12">
                     <Link to="/" className="text-black/30 hover:text-black transition-colors uppercase tracking-[0.2em] text-[11px] font-bold">
                        {t('sales.returnPortfolio')}
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
                    <p className="text-black/20 text-[11px] font-bold uppercase tracking-widest">{t('sales.footerTagline')}</p>
                </div>
                <div className="text-black/20 text-[11px] font-bold uppercase tracking-widest md:text-right">
                    {t('sales.footerCopyright')}
                </div>
            </footer>
        </div>
    );
};

export default AiSalesPage;
