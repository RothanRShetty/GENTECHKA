import { useState, useRef } from 'react';
import { EyeOff, AlertTriangle, FastForward, Sparkles, ArrowRight, Zap, Flame } from 'lucide-react';
import { sound } from '../utils/sound';

interface TiltCardState {
  rotateX: number;
  rotateY: number;
}

export default function ProblemSection() {
  const [tilt, setTilt] = useState<{ [key: number]: TiltCardState }>({});
  const [isTransformed, setIsTransformed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setTilt((prev) => ({
      ...prev,
      [id]: { rotateX, rotateY },
    }));
  };

  const handleMouseLeave = (id: number) => {
    setTilt((prev) => ({
      ...prev,
      [id]: { rotateX: 0, rotateY: 0 },
    }));
  };

  const problems = [
    {
      id: 1,
      num: '01',
      tag: 'VISIBILITY DEFICIT',
      title: 'YOUR BUSINESS IS INVISIBLE ONLINE.',
      desc: 'Lost in a sea of generic WordPress themes and boring corporate templates. Visitors bounce within 3 seconds because your site fails to captivate, communicate authority, or inspire action.',
      icon: EyeOff,
      stat: '78% of visitors leave due to uninspiring digital presence.',
      symptom: 'Zero brand recall & low conversion rates',
    },
    {
      id: 2,
      num: '02',
      tag: 'EXECUTION BOTTLENECK',
      title: 'YOUR IDEAS ARE STUCK WITHOUT TECHNOLOGY.',
      desc: 'You have ambitious visions, groundbreaking service concepts, or innovative product roadmaps, but you lack the engineering firepower to build high-performance 3D apps and automated systems.',
      icon: AlertTriangle,
      stat: 'Vision without execution remains purely digital dust.',
      symptom: 'Stalled product launches & lost momentum',
    },
    {
      id: 3,
      num: '03',
      tag: 'SPEED GAP',
      title: 'YOUR COMPETITORS ARE MOVING FASTER.',
      desc: 'Modern market leaders are adopting AI workflows, 3D interactive experiences, and automated customer engines while traditional businesses drown in manual repetitive tasks.',
      icon: FastForward,
      stat: 'Speed to market separates market leaders from obsolete brands.',
      symptom: 'Shrinking market share & obsolete pipelines',
    },
  ];

  return (
    <section
      id="problem"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-[#050817]/75 backdrop-blur-sm border-t border-white/5"
    >
      {/* Ambient background grids */}
      <div className="absolute inset-0 cyber-grid-dense opacity-20 pointer-events-none" />

      {/* Red/Pink Problem Ambient Glow transitioning to Blue */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-[140px] pointer-events-none transition-all duration-1000 ${
          isTransformed ? 'bg-[#087BFF]/25' : 'bg-[#FF3366]/15'
        }`}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#FF3366]/40 bg-[#FF3366]/10 text-[#FF3366] text-xs font-mono tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(255,51,102,0.2)]">
            <Flame className="w-3.5 h-3.5" />
            <span>THE REALITY CHECK</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-space font-extrabold tracking-tight text-[#F5F7FF] leading-tight mb-4">
            EVERY BIG IDEA STARTS WITH A{' '}
            <span className="text-[#FF3366] glow-box-problem underline decoration-wavy decoration-[#FF3366]/50">
              PROBLEM.
            </span>
          </h2>
          <p className="text-sm sm:text-base font-inter text-[#9CA6C5] max-w-xl mx-auto">
            Before we talk about cutting-edge code or 3D visuals, we confront the raw digital friction holding your venture back.
          </p>
        </div>

        {/* 3 Floating 3D Tilt Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20 perspective-1000">
          {problems.map((prob) => {
            const Icon = prob.icon;
            const currentTilt = tilt[prob.id] || { rotateX: 0, rotateY: 0 };

            return (
              <div
                key={prob.id}
                onMouseMove={(e) => handleMouseMove(e, prob.id)}
                onMouseLeave={() => handleMouseLeave(prob.id)}
                onMouseEnter={() => sound.playHover()}
                style={{
                  transform: `perspective(1000px) rotateX(${currentTilt.rotateX}deg) rotateY(${currentTilt.rotateY}deg)`,
                  transition: 'transform 0.15s ease-out, box-shadow 0.3s ease',
                }}
                className="relative rounded-2xl p-6 sm:p-8 bg-[#0A1025]/90 border border-[#FF3366]/30 hover:border-[#FF3366] shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_35px_rgba(255,51,102,0.3)] transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Red warning scanline stripe */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF3366] to-transparent opacity-80" />

                {/* Card Top */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold tracking-widest text-[#FF3366] px-2.5 py-1 rounded bg-[#FF3366]/10 border border-[#FF3366]/20">
                      PROBLEM // {prob.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FF3366]/10 border border-[#FF3366]/40 flex items-center justify-center text-[#FF3366] group-hover:scale-110 group-hover:bg-[#FF3366] group-hover:text-[#050817] transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[10px] font-mono tracking-widest text-[#9CA6C5] uppercase block mb-1">
                    {prob.tag}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-space font-extrabold text-[#F5F7FF] tracking-tight group-hover:text-[#FF3366] transition-colors leading-snug mb-3">
                    {prob.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-inter text-[#9CA6C5] leading-relaxed mb-6">
                    {prob.desc}
                  </p>
                </div>

                {/* Card Bottom Indicator */}
                <div className="pt-4 border-t border-white/5 space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#FF3366]/90">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Symptom: {prob.symptom}</span>
                  </div>
                  <div className="text-[10px] font-mono text-[#9CA6C5]">
                    {prob.stat}
                  </div>
                </div>

                {/* Cyber Corner Marks */}
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#FF3366]/50" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[#FF3366]/50" />
              </div>
            );
          })}
        </div>

        {/* Dramatic Transformation Sequence into Solutions */}
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10 bg-gradient-to-b from-[#0A1025] via-[#081232] to-[#050817] shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden">
          
          {/* Cyber glowing circuit background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00C8FF]/10 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5715A8]/20 rounded-full blur-[90px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00C8FF]/40 bg-[#00C8FF]/10 text-[#00C8FF] text-xs font-mono uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>THE PARADIGM SHIFT</span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-space font-extrabold text-[#F5F7FF] leading-tight">
                WHAT IF TECHNOLOGY COULD{' '}
                <span className="text-[#00C8FF] glow-neon">CHANGE EVERYTHING?</span>
              </h3>

              <p className="text-sm sm:text-base font-inter text-[#9CA6C5] leading-relaxed">
                Imagine turning every digital touchpoint into an unfair competitive advantage. 
                From immersive 3D architectures that mesmerize your clients to autonomous systems that do the heavy lifting 24/7.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => {
                    sound.playClick();
                    setIsTransformed(!isTransformed);
                    const el = document.querySelector('#solutions');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className="px-6 py-3.5 rounded-xl font-space font-bold text-xs uppercase tracking-wider text-[#050817] bg-gradient-to-r from-[#00C8FF] to-[#087BFF] hover:from-[#FFC229] hover:to-[#FFA000] transition-all shadow-[0_0_25px_rgba(0,200,255,0.4)] flex items-center gap-2 group cursor-pointer"
                >
                  <span>SEE THE SOLUTIONS</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-[#050817]/60 text-xs font-mono text-[#9CA6C5]">
                  <Zap className="w-3.5 h-3.5 text-[#FFC229]" />
                  <span>Transforming Problems Into Digital Power</span>
                </div>
              </div>
            </div>

            {/* Right Authentic Visual Frame (from user Instagram post!) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#00C8FF]/40 shadow-[0_0_35px_rgba(0,200,255,0.25)] group">
                <img
                  src="/images/cyber-core-platform.jpg"
                  alt="GEN TECH KA Cyber Core Platform"
                  className="w-full h-64 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050817] via-transparent to-transparent opacity-80" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#050817]/90 backdrop-blur-md border border-[#00C8FF]/30 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono text-[#00C8FF] uppercase tracking-wider">
                      GEN TECH KA LABS
                    </div>
                    <div className="text-xs font-space font-bold text-[#F5F7FF]">
                      Exposed Truths → Engineered Solutions
                    </div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00C8FF] animate-ping" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
