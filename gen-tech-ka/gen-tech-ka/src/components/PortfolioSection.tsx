import { useState } from 'react';
import { Sparkles, Eye, ArrowUpRight, CheckCircle } from 'lucide-react';
import { PORTFOLIO_PROJECTS, type Project } from '../data/projects';
import ProjectModal from './ProjectModal';
import { sound } from '../utils/sound';

interface PortfolioSectionProps {
  onSelectCategory?: (category: string) => void;
}

export default function PortfolioSection({ onSelectCategory }: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Websites & 3D', 'Web Apps', 'Mobile Apps', 'AI & Automation', 'E-commerce'];

  const filteredProjects = activeFilter === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === activeFilter);

  const handleOpenProject = (project: Project) => {
    sound.playClick();
    setSelectedProject(project);
  };

  const handleRequestSimilar = (category: string) => {
    sound.playClick();
    if (onSelectCategory) {
      onSelectCategory(category);
    }
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="showcase" className="relative w-full py-24 sm:py-32 bg-[#050817] overflow-hidden border-t border-white/5">
      {/* Background Gradients */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#00C8FF]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#5715A8]/15 blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#00C8FF]/40 bg-[#00C8FF]/10 text-[#00C8FF] text-xs font-mono tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,200,255,0.2)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO & PROTOTYPES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-space font-extrabold tracking-tight text-[#F5F7FF] leading-tight mb-4">
            IMAGINATION,{' '}
            <span className="text-[#FFC229] glow-gold">MEET EXECUTION.</span>
          </h2>
          <p className="text-sm sm:text-base font-inter text-[#9CA6C5] max-w-xl mx-auto">
            A curated showcase of cutting-edge digital architectures engineered by GEN TECH KA.
          </p>

          {/* Demomark Transparency Banner */}
          <div className="inline-flex items-center gap-2 mt-4 px-3 py-1 rounded-md bg-[#0A1025] border border-white/10 text-[11px] font-mono text-[#9CA6C5]">
            <span className="w-2 h-2 rounded-full bg-[#00C8FF]" />
            <span>Clearly marked concept showcases. Production builds tailored on commission.</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sound.playClick();
                setActiveFilter(cat);
              }}
              onMouseEnter={() => sound.playHover()}
              className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-[#00C8FF] text-[#050817] font-bold shadow-[0_0_20px_rgba(0,200,255,0.4)]'
                  : 'bg-[#0A1025] text-[#9CA6C5] border border-white/5 hover:border-[#00C8FF]/40 hover:text-[#F5F7FF]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => sound.playHover()}
              className="group relative rounded-2xl border border-white/10 bg-[#0A1025]/80 hover:border-[#00C8FF]/60 hover:shadow-[0_0_35px_rgba(0,200,255,0.25)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Card Top Preview Box */}
              <div className={`relative h-48 w-full bg-gradient-to-br ${project.gradient} p-5 flex flex-col justify-between overflow-hidden border-b border-white/5`}>
                <div className="flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-[#050817]/80 text-[#00C8FF] border border-[#00C8FF]/30">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FFC229]/20 text-[#FFC229] border border-[#FFC229]/30">
                    CONCEPT DEMO
                  </span>
                </div>

                {/* Abstract Interactive Visual representation */}
                <div className="relative z-10">
                  <div className="text-xl sm:text-2xl font-space font-black text-[#F5F7FF] tracking-tight group-hover:text-[#00C8FF] transition-colors">
                    {project.name}
                  </div>
                  <div className="text-xs font-sora text-[#FFC229] line-clamp-1">
                    {project.headline}
                  </div>
                </div>

                {/* Cyber decorative grid on hover */}
                <div className="absolute inset-0 cyber-grid opacity-30 group-hover:opacity-60 transition-opacity" />
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-inter text-[#9CA6C5] line-clamp-3 leading-relaxed mb-4">
                    {project.shortDesc}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-4">
                    {project.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#F5F7FF]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#00C8FF] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#050817] text-[#9CA6C5] border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono text-[#00C8FF]">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => handleOpenProject(project)}
                    className="w-full py-2.5 px-4 rounded-xl font-space font-bold text-xs uppercase tracking-wider text-[#F5F7FF] bg-[#050817] hover:bg-[#00C8FF] hover:text-[#050817] border border-[#00C8FF]/30 transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>VIEW PROJECT DETAILS</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Modal Viewer */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestSimilar={handleRequestSimilar}
      />
    </section>
  );
}
