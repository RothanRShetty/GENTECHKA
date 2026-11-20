import { Brain, Cpu, Sliders, HeartHandshake, Lightbulb, Gauge, Check, X, Sparkles } from 'lucide-react';
import { sound } from '../utils/sound';

export default function WhyUsSection() {
  const brandValues = [
    {
      title: 'Creative Thinking',
      desc: 'We discard cookie-cutter patterns and reinvent digital conventions for every client.',
      icon: Brain,
      color: '#00C8FF',
    },
    {
      title: 'Modern Technology',
      desc: 'Cutting-edge Three.js, React, WebGL, and LLM agent architectures built for 2026 and beyond.',
      icon: Cpu,
      color: '#087BFF',
    },
    {
      title: 'Custom-Built Solutions',
      desc: '100% tailor-crafted source code without bloated pre-made templates or fragile plugins.',
      icon: Sliders,
      color: '#FFC229',
    },
    {
      title: 'User-Focused Experiences',
      desc: 'Obsessively polished micro-interactions and intuitive journeys that convert visitors into advocates.',
      icon: HeartHandshake,
      color: '#8B2CFF',
    },
    {
      title: 'Innovation First',
      desc: 'We continuously experiment with spatial web, autonomous workflows, and generative interfaces.',
      icon: Lightbulb,
      color: '#00C8FF',
    },
    {
      title: 'Performance Driven',
      desc: 'Engineered for sub-second page loads, 60 FPS rendering, and measurable revenue impact.',
      icon: Gauge,
      color: '#FFC229',
    },
  ];

  const comparisonRows = [
    {
      feature: 'Design & Visual Identity',
      gentech: 'Immersive 3D Spatial Canvas & Bespoke Aesthetics',
      traditional: 'Recycled WordPress or generic SaaS templates',
    },
    {
      feature: 'Code Quality & Performance',
      gentech: 'Handwritten modern React/TS, 60 FPS, <0.5s LCP',
      traditional: 'Bloated page builders, slow load times, poor SEO',
    },
    {
      feature: 'AI & Automation Systems',
      gentech: 'Custom intelligent agents, automated CRM & WhatsApp pipelines',
      traditional: 'Basic static contact form with manual copy-pasting',
    },
    {
      feature: 'Communication & Ownership',
      gentech: 'Direct engineer access, complete source code handover',
      traditional: 'Layers of account managers, vendor lock-in',
    },
  ];

  return (
    <section id="why-us" className="relative w-full py-24 sm:py-32 bg-[#050817] overflow-hidden border-t border-white/5">
      {/* Background Gradients */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#5715A8]/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#00C8FF]/15 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#00C8FF]/40 bg-[#00C8FF]/10 text-[#00C8FF] text-xs font-mono tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,200,255,0.2)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE GEN TECH KA STANDARD</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-space font-extrabold tracking-tight text-[#F5F7FF] leading-tight mb-6">
            NOT JUST ANOTHER{' '}
            <span className="text-[#FFC229] glow-gold">TECH AGENCY.</span>
          </h2>
          <p className="text-sm sm:text-base font-inter text-[#9CA6C5] max-w-xl mx-auto">
            We are a rare intersection of creative art directors and hardcore software engineers.
          </p>
        </div>

        {/* 6 Core Brand Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {brandValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                onMouseEnter={() => sound.playHover()}
                className="group relative p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#0A1025]/80 hover:border-[#00C8FF]/60 hover:shadow-[0_0_30px_rgba(0,200,255,0.2)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#050817] border border-white/10 flex items-center justify-center text-[#00C8FF] group-hover:scale-110 group-hover:border-[#00C8FF] transition-all duration-300 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-space font-bold text-[#F5F7FF] group-hover:text-[#00C8FF] transition-colors mb-3">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-inter text-[#9CA6C5] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
                <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#FFC229]">VALUE // 0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C8FF] group-hover:scale-150 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Powerful Brand Manifesto Banner */}
        <div className="relative rounded-3xl p-8 sm:p-14 border border-[#FFC229]/40 bg-gradient-to-r from-[#0A1025] via-[#101738] to-[#0A1025] shadow-[0_0_50px_rgba(255,194,41,0.15)] text-center my-16 overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#00C8FF]">
              OUR CREED
            </span>
            <div className="text-3xl sm:text-5xl lg:text-6xl font-space font-black tracking-tight leading-tight text-[#F5F7FF]">
              &ldquo;WE DON&apos;T FOLLOW THE FUTURE.{' '}
              <span className="text-[#FFC229] glow-gold">WE BUILD IT.&rdquo;</span>
            </div>
            <p className="text-xs sm:text-sm font-inter text-[#9CA6C5] pt-2">
              Every system we launch is engineered to endure, scale, and outcompete.
            </p>
          </div>
        </div>

        {/* Agency Comparison Matrix */}
        <div className="rounded-3xl border border-white/10 bg-[#0A1025]/90 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl">
          <div className="p-6 sm:p-8 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-space font-bold text-[#F5F7FF]">
                THE ARCHITECTURAL DIFFERENCE
              </h3>
              <p className="text-xs font-inter text-[#9CA6C5]">
                Why forward-thinking enterprises choose GEN TECH KA over legacy agencies.
              </p>
            </div>
            <span className="px-3 py-1 rounded bg-[#00C8FF]/10 border border-[#00C8FF]/30 font-mono text-xs text-[#00C8FF] self-start sm:self-auto">
              HEAD-TO-HEAD AUDIT
            </span>
          </div>

          <div className="divide-y divide-white/5">
            {comparisonRows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 p-6 gap-4 items-center hover:bg-white/[0.02] transition-colors">
                <div className="md:col-span-4 font-space font-bold text-sm text-[#F5F7FF]">
                  {row.feature}
                </div>
                <div className="md:col-span-4 flex items-start gap-3 p-3 rounded-xl bg-[#00C8FF]/5 border border-[#00C8FF]/20">
                  <Check className="w-4 h-4 text-[#00C8FF] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] font-mono text-[#00C8FF] font-bold uppercase">GEN TECH KA</div>
                    <div className="text-xs font-inter text-[#F5F7FF]">{row.gentech}</div>
                  </div>
                </div>
                <div className="md:col-span-4 flex items-start gap-3 p-3 rounded-xl bg-[#050817] border border-white/5 opacity-75">
                  <X className="w-4 h-4 text-[#FF3366] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] font-mono text-[#9CA6C5] font-bold uppercase">TYPICAL AGENCIES</div>
                    <div className="text-xs font-inter text-[#9CA6C5]">{row.traditional}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
