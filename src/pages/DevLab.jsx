import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import {
  Zap,
  Github,
  ExternalLink,
  Target,
  BarChart3,
  Smartphone,
  Globe,
  PenTool,
  Layout,
  FileText,
  ShieldCheck,
  Activity,
  Briefcase,
  Mail,
  FlaskConical
} from 'lucide-react';
import { devLabProjects, devLabCategories } from '../data/devLabProjects';
import { usePreferences } from '../context/PreferencesContext';
import { projectContent } from '../i18n/projectContent';

// Maps the canonical (English) category value to its translation key.
const CATEGORY_KEYS = {
  'All': 'cat.all',
  'AI & Agents': 'cat.aiAgents',
  'Automation': 'cat.automation',
  'Content & Media': 'cat.contentMedia',
  'Web Apps': 'cat.webApps',
};

// Helper to map icon names to Lucide icons
const IconRenderer = ({ name, className }) => {
  const icons = {
    Target: <Target className={className} />,
    BarChart3: <BarChart3 className={className} />,
    Zap: <Zap className={className} />,
    Smartphone: <Smartphone className={className} />,
    Globe: <Globe className={className} />,
    PenTool: <PenTool className={className} />,
    Layout: <Layout className={className} />,
    FileText: <FileText className={className} />,
    ShieldCheck: <ShieldCheck className={className} />,
    Activity: <Activity className={className} />,
    Mail: <Mail className={className} />
  };
  return icons[name] || <FlaskConical className={className} />;
};

// Helper to generate premium stylized CSS visual previews
const VisualMockup = ({ preset, title, icon }) => {
  const gradients = {
    purpleGradient: "from-violet-600 to-indigo-900",
    blueGradient: "from-blue-600 to-indigo-950",
    emeraldGradient: "from-emerald-500 to-teal-900",
    roseGradient: "from-rose-500 to-pink-900",
    orangeGradient: "from-orange-500 to-amber-900",
    indigoGradient: "from-indigo-500 to-purple-900",
    cyanGradient: "from-cyan-500 to-blue-900",
    violetGradient: "from-purple-600 to-pink-950",
    amberGradient: "from-amber-500 to-orange-950",
    skyGradient: "from-sky-400 to-indigo-900"
  };

  const selectedGradient = gradients[preset] || "from-neutral-800 to-neutral-950";

  return (
    <div className={`w-full h-48 bg-gradient-to-br ${selectedGradient} relative overflow-hidden flex items-center justify-center`}>
      {/* Abstract Grid Overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Decorative Blur Orbs */}
      <div className="absolute -top-10 -left-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-black/30 rounded-full blur-2xl" />

      {/* Floating Code Card Simulator */}
      <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 w-[85%] h-[75%] flex flex-col justify-between shadow-2xl transition-transform duration-500 group-hover:scale-105">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-white/15 rounded-lg">
              <IconRenderer name={icon} className="w-4 h-4 text-white" />
            </div>
            <span className="text-[11px] font-bold tracking-wider text-white/90 uppercase">{title.split(' ')[0]}</span>
          </div>
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          </div>
        </div>

        {/* Mock Code Lines */}
        <div className="space-y-1.5 py-2 font-mono">
          <div className="h-1 bg-white/30 rounded-full w-1/3" />
          <div className="h-1 bg-white/15 rounded-full w-3/4 ml-3" />
          <div className="h-1 bg-white/15 rounded-full w-2/3 ml-3" />
          <div className="h-1 bg-white/25 rounded-full w-1/2 ml-6" />
          <div className="h-1 bg-white/30 rounded-full w-1/4" />
        </div>

        <div className="flex items-center justify-between text-[9px] text-white/50 font-mono">
          <span>BUILD // PASSING</span>
          <span>v0.1.0</span>
        </div>
      </div>
    </div>
  );
};

const DevLab = () => {
  const { t, lang } = usePreferences();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? devLabProjects
    : devLabProjects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#f3f3f3] text-[#2d3436] font-['Outfit'] selection:bg-black/10 overflow-x-hidden leading-relaxed pb-32">

      <Navbar />

      {/* Hero Header */}
      <section className="max-w-4xl mx-auto pt-20 pb-16 px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full mb-6 border border-black/5 shadow-sm">
          <FlaskConical className="w-4 h-4 text-blue-600" />
          <span className="text-[11px] font-black uppercase tracking-[0.2em] opacity-70">{t('devlab.badge')}</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1] text-black">
          {t('devlab.title1')} <br />
          <span className="text-black/40">{t('devlab.title2')}</span>
        </h1>

        <p className="text-lg text-black/50 max-w-2xl mx-auto font-medium font-['Inter']">
          {t('devlab.subtitle')}
        </p>
      </section>

      {/* Categories Filter Strip */}
      <section className="max-w-5xl mx-auto px-6 mb-12 flex justify-center">
        <div className="flex flex-wrap gap-2 justify-center bg-white/50 backdrop-blur p-2 rounded-2xl border border-black/5">
          {devLabCategories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-xl text-[13px] font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-black text-white shadow-md shadow-black/10"
                  : "text-black/50 hover:text-black hover:bg-black/5"
              }`}
            >
              {t(CATEGORY_KEYS[cat] || cat)}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-[2.5rem] border border-black/5 overflow-hidden shadow-sm hover:shadow-xl hover:border-black/15 transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Visual Representation (Dynamic Image or Stylized Mockup) */}
                {project.image ? (
                  <div className="w-full h-48 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <VisualMockup preset={project.visualPreset} title={project.title} icon={project.icon} />
                )}

                {/* Card Info Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-[#f3f3f3] text-black/60 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-black/5">
                      {t(CATEGORY_KEYS[project.category] || project.category)}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-[14px] text-black/50 leading-relaxed font-['Inter'] mb-6">
                    {projectContent[lang]?.[project.id] ?? project.description}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer Area */}
              <div className="px-8 pb-8 pt-2 border-t border-black/5 flex flex-col gap-4 bg-slate-50/20 rounded-b-[2.5rem]">
                {/* Technology Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] font-mono text-black/40 bg-black/5 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub & Demo Links */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-black text-white py-2.5 rounded-xl text-[12px] font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-transform"
                  >
                    <Github className="w-3.5 h-3.5" /> GitHub
                  </a>
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 bg-white border border-black/10 rounded-xl text-black/60 hover:text-black hover:bg-black/5 transition-colors flex items-center justify-center"
                      title={t('common.liveDemo')}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dynamic Count Footer Status */}
      <section className="max-w-4xl mx-auto mt-20 text-center">
        <p className="text-[12px] font-bold uppercase tracking-widest text-black/30">
          {t('devlab.showing').replace('{n}', filteredProjects.length)}
        </p>
      </section>

    </div>
  );
};

export default DevLab;
