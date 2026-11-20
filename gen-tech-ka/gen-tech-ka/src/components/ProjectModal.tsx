import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import type { Project } from '../data/projects';
import { sound } from '../utils/sound';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onRequestSimilar: (category: string) => void;
}

export default function ProjectModal({ project, onClose, onRequestSimilar }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#050817]/90 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-4xl rounded-3xl border border-[#00C8FF]/40 bg-[#0A1025] shadow-[0_0_60px_rgba(0,200,255,0.3)] overflow-hidden my-8">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#050817]/80">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#FFC229]/20 text-[#FFC229] border border-[#FFC229]/40 uppercase">
              DEMO ARCHITECTURE CONCEPT
            </span>
            <span className="text-xs font-mono text-[#9CA6C5] hidden sm:inline">
              // {project.category}
            </span>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            onMouseEnter={() => sound.playHover()}
            className="p-1.5 rounded-lg border border-white/10 text-[#9CA6C5] hover:text-[#FF3366] hover:border-[#FF3366]/40 hover:bg-[#FF3366]/10 transition-colors"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 space-y-8 max-h-[75vh] overflow-y-auto">
          
          {/* Header Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00C8FF]">
              <Sparkles className="w-4 h-4" />
              <span>PROJECT SPECIFICATION</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-space font-extrabold text-[#F5F7FF] tracking-tight">
              {project.name}
            </h3>
            <p className="text-base sm:text-lg font-sora text-[#FFC229]">
              {project.headline}
            </p>
            <p className="text-sm font-inter text-[#9CA6C5] leading-relaxed">
              {project.fullDesc}
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 p-4 rounded-2xl bg-[#050817] border border-white/10">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="text-center p-2">
                <div className="text-xl sm:text-3xl font-space font-extrabold text-[#00C8FF]">
                  {m.value}
                </div>
                <div className="text-[10px] sm:text-xs font-mono text-[#9CA6C5] uppercase mt-1">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Feature Architecture Matrix */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#00C8FF]">
              ENGINEERED CAPABILITIES & ARCHITECTURE
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, fIdx) => (
                <div
                  key={fIdx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#050817]/60 border border-white/5 text-xs text-[#F5F7FF]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#00C8FF] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#9CA6C5]">
              TECHNOLOGY STACK
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-[#050817] border border-[#00C8FF]/20 text-[#00C8FF]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Demo Notice Banner */}
          <div className="p-4 rounded-xl border border-white/10 bg-[#050817]/80 flex items-center gap-3 text-xs text-[#9CA6C5]">
            <ShieldCheck className="w-5 h-5 text-[#FFC229] shrink-0" />
            <span>
              This is an engineered concept model demonstrating GEN TECH KA&apos;s architectural capabilities. Ready to build a bespoke production version tailored to your venture?
            </span>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 border-t border-white/10 bg-[#050817]/90">
          <span className="text-xs font-mono text-[#9CA6C5]">
            CONCEPT ID: GTK-SPEC-{project.id.toUpperCase()}
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-white/10 text-xs font-mono text-[#9CA6C5] hover:text-[#F5F7FF] transition-colors"
            >
              CLOSE
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
                onRequestSimilar(project.category);
              }}
              onMouseEnter={() => sound.playHover()}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-space font-bold text-xs uppercase tracking-wider text-[#050817] bg-gradient-to-r from-[#00C8FF] to-[#087BFF] hover:from-[#FFC229] hover:to-[#FFA000] transition-all shadow-[0_0_20px_rgba(0,200,255,0.4)] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>REQUEST SIMILAR BUILD</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
