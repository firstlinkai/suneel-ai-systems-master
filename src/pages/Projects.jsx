import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  ArrowLeft, 
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
  User,
  Briefcase,
  Mail
} from 'lucide-react';
import { projects, categories } from '../data/projects';

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
  return icons[name] || <Briefcase className={className} />;
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

      {/* Floating Dashboard Card Simulator */}
      <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 w-[85%] h-[75%] flex flex-col justify-between shadow-2xl transition-transform duration-500 group-hover:scale-105">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-white/15 rounded-lg">
              <IconRenderer name={icon} className="w-4 h-4 text-white" />
            </div>
            <span className="text-[11px] font-bold tracking-wider text-white/90 uppercase">{title.split(' ')[0]}</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        </div>

        {/* Mock Analytics Lines */}
        <div className="space-y-2 py-2">
          <div className="h-1 bg-white/20 rounded-full w-3/4" />
          <div className="h-1 bg-white/10 rounded-full w-1/2" />
          <div className="flex gap-1 pt-1 items-end h-6">
            <div className="w-full bg-white/20 rounded-t h-[40%]" />
            <div className="w-full bg-white/30 rounded-t h-[75%]" />
            <div className="w-full bg-white/45 rounded-t h-[55%]" />
            <div className="w-full bg-white/20 rounded-t h-[90%]" />
            <div className="w-full bg-white/50 rounded-t h-[45%]" />
            <div className="w-full bg-white/60 rounded-t h-[80%]" />
          </div>
        </div>

        <div className="flex items-center justify-between text-[9px] text-white/50 font-mono">
          <span>SYSTEM // OK</span>
          <span>ROI +320%</span>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#f3f3f3] text-[#2d3436] font-['Outfit'] selection:bg-black/10 overflow-x-hidden leading-relaxed pb-32">
      
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center border-b border-black/5">
        <Link to="/" className="text-xl font-bold tracking-tighter flex items-center gap-2 group">
          <div className="w-8 h-8 bg-black rounded flex items-center justify-center group-hover:rotate-6 transition-transform">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span>Firstlink<span className="text-black/40">.AI</span></span>
        </Link>
        <Link to="/" className="text-[12px] font-bold uppercase tracking-widest text-black/40 hover:text-black transition-colors flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </Link>
      </nav>

      {/* Hero Header */}
      <section className="max-w-4xl mx-auto pt-20 pb-16 px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full mb-6 border border-black/5 shadow-sm">
          <Briefcase className="w-4 h-4 text-blue-600" />
          <span className="text-[11px] font-black uppercase tracking-[0.2em] opacity-70">Marketing agency client solutions</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1] text-black">
          High-Performance Systems <br />
          <span className="text-black/40">Built For Scale.</span>
        </h1>
        
        <p className="text-lg text-black/50 max-w-2xl mx-auto font-medium font-['Inter']">
          Explore production-ready automation architectures, analytics dashboards, and campaign intelligence pipelines built strictly for high-growth marketing and DTC teams.
        </p>
      </section>

      {/* Categories Filter Strip */}
      <section className="max-w-5xl mx-auto px-6 mb-12 flex justify-center">
        <div className="flex flex-wrap gap-2 justify-center bg-white/50 backdrop-blur p-2 rounded-2xl border border-black/5">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-xl text-[13px] font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-black text-white shadow-md shadow-black/10"
                  : "text-black/50 hover:text-black hover:bg-black/5"
              }`}
            >
              {cat}
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
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-[14px] text-black/50 leading-relaxed font-['Inter'] mb-6">
                    {project.description}
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
                      className="px-3 bg-white border border-black/10 rounded-xl text-black/60 hover:text-black hover:bg-black/5 transition-colors flex items-center justify-center"
                      title="Live Demo"
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
          Showing {filteredProjects.length} client application architectures
        </p>
      </section>

    </div>
  );
};

export default Projects;
