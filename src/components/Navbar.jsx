import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Briefcase, FlaskConical, Github, LayoutGrid } from 'lucide-react';
import { usePreferences } from '../context/PreferencesContext';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { t } = usePreferences();

    const isHomeActive = location.pathname === '/';
    const isWorkActive = location.pathname === '/work';
    const isDevLabActive = location.pathname === '/dev-lab';

    const handleContactClick = () => {
        if (location.pathname === '/') {
            document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/', { state: { scrollToContact: true } });
        }
    };

    // "Case Studies" points at the Results/Portfolio showcase on the home page.
    const handleCaseStudiesClick = () => {
        if (location.pathname === '/') {
            document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/', { state: { scrollToResults: true } });
        }
    };

    return (
        <header className="max-w-7xl mx-auto px-6 pb-6 pt-20 md:pt-6 md:pr-44 flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] font-medium text-black/60">
            <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 items-center">
                <Link
                    to="/"
                    className={`px-4 py-1.5 rounded-full border shadow-sm transition-all font-bold block ${
                        isHomeActive
                            ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700'
                            : 'bg-white text-black border-black/5 hover:bg-black/5'
                    }`}
                >
                    {t('nav.home')}
                </Link>
                <Link
                    to="/work"
                    className={`px-4 py-1.5 rounded-full border shadow-sm transition-all font-bold flex items-center gap-2 ${
                        isWorkActive 
                            ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700' 
                            : 'bg-white text-black border-black/5 hover:bg-black/5'
                    }`}
                >
                    <Briefcase className={`w-3 h-3 ${isWorkActive ? 'text-white' : 'text-black/60'}`} />
                    {t('nav.work')}
                </Link>
                <Link
                    to="/dev-lab"
                    className={`px-4 py-1.5 rounded-full border shadow-sm transition-all font-bold flex items-center gap-2 ${
                        isDevLabActive
                            ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700'
                            : 'bg-white text-black border-black/5 hover:bg-black/5'
                    }`}
                >
                    <FlaskConical className={`w-3 h-3 ${isDevLabActive ? 'text-white' : 'text-black/60'}`} />
                    {t('nav.devlab')}
                </Link>
                <button
                    onClick={handleCaseStudiesClick}
                    className="bg-white px-4 py-1.5 rounded-full border border-black/5 shadow-sm hover:bg-black/5 transition-all text-black font-bold flex items-center gap-2 active:scale-95 cursor-pointer"
                >
                    <LayoutGrid className="w-3 h-3 text-black/60" />
                    {t('nav.partnership')}
                </button>
                <button
                    onClick={handleContactClick}
                    className="bg-white px-4 py-1.5 rounded-full border border-black/5 shadow-sm hover:bg-black/5 transition-all text-black font-bold flex items-center gap-2 active:scale-95 cursor-pointer"
                >
                    {t('nav.contact')}
                </button>
                <div className="flex gap-2">
                    <a href="https://github.com/firstlinkai" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full border border-black/5 shadow-sm hover:bg-black/5 transition-colors" title={t('nav.github')}>
                        <Github className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
