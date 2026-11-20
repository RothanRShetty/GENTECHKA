import { useState } from 'react';
import { Search, Compass, Palette, Code2, Rocket, Sparkles, CheckCircle2, Clock } from 'lucide-react';
import { sound } from '../utils/sound';

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      tagline: 'Deep Dive & Goal Alignment',
      summary: 'We understand your idea, business, and goals.',
      desc: 'Every breakthrough project starts with surgical listening. We dissect your business model, target audience, competitive landscape, and brand voice to unearth your most lethal differentiators.',
      icon: Search,
      duration: 'Day 1–3',
      deliverables: [
        'Discovery Workshop & Strategic Brief',
        'Competitor & Technology Landscape Audit',
        'User Persona & Journey Definition',
        'Scope Matrix & Architectural Feasibility',
      ],
      color: '#00C8FF',
    },
    {
      num: '02',
      title: 'STRATEGIZE',
      tagline: 'Architectural Blueprint & Roadmap',
      summary: 'We plan the perfect digital solution.',
      desc: 'We map the tech stack, data pipelines, information architecture, and user flows before writing a single line of code. No guesswork, no costly rewrites.',
      icon: Compass,
      duration: 'Day 4–7',
      deliverables: [
        'System Architecture & Stack Selection',
        'Interactive Wireframes & Information Hierarchy',
        'Conversion Funnel Strategy',
        'Milestone Roadmap & Sprint Schedule',
      ],
      color: '#087BFF',
    },
    {
      num: '03',
      title: 'DESIGN',
      tagline: 'Cinematic 3D & Human-Centric UI/UX',
      summary: 'We transform your idea into an incredible visual experience.',
      desc: 'We craft a breathtaking visual universe with futuristic typography, high-contrast layouts, custom 3D assets, and micro-interactions that forge instant brand reverence.',
      icon: Palette,
      duration: 'Week 2',
      deliverables: [
        'High-Fidelity Interactive Figma Prototype',
        'Custom 3D Emblems, Shaders & Motion Specs',
        'Complete Design System & Token Tokens',
        'Cross-Device Mobile & Desktop Sign-Off',
      ],
      color: '#FFC229',
    },
    {
      num: '04',
      title: 'DEVELOP',
      tagline: 'Clean Code, 60 FPS 3D & AI Pipelines',
      summary: 'We bring everything to life using modern technology.',
      desc: 'We write robust, modular, production-ready code. From hardware-accelerated Three.js scenes to real-time APIs, automated database workflows, and rigorous automated tests.',
      icon: Code2,
      duration: 'Week 3–4',
      deliverables: [
        'Production React / Three.js / TypeScript Build',
        'Sub-second Core Web Vitals Optimization',
        'Backend APIs, Databases & Security Hardening',
        'Automated Testing & Cross-Browser Validation',
      ],
      color: '#8B2CFF',
    },
    {
      num: '05',
      title: 'LAUNCH',
      tagline: 'Zero-Downtime Deployment & Handover',
      summary: 'We launch your digital product into the world.',
      desc: 'We manage DNS configurations, SSL certificates, cloud deployment, and telemetry tracking. Then we provide comprehensive documentation and training so you take full ownership.',
      icon: Rocket,
      duration: 'Launch Day & Beyond',
      deliverables: [
        'Zero-Downtime Cloud Deployment (AWS/Vercel/CDN)',
        'SEO & Analytics Event Tracking Verification',
        'Admin Video Walkthrough & Source Code Handover',
        '30-Day Post-Launch Warranty & Monitoring',
      ],
      color: '#00C8FF',
    },
  ];

  const current = steps[activeStep];
  const StepIcon = current.icon;

  return (
    <section id="process" className="relative w-full py-24 sm:py-32 bg-[#050817] overflow-hidden border-t border-white/5">
      {/* Background Grids */}
      <div className="absolute inset-0 cyber-grid-dense opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#087BFF]/10 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#FFC229]/40 bg-[#FFC229]/10 text-[#FFC229] text-xs font-mono tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(255,194,41,0.2)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE EXECUTION METHODOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-space font-extrabold tracking-tight text-[#F5F7FF] leading-tight mb-4">
            FROM A SMALL IDEA TO{' '}
            <span className="text-[#00C8FF] glow-neon">SOMETHING BIG.</span>
          </h2>
          <p className="text-sm sm:text-base font-inter text-[#9CA6C5] max-w-xl mx-auto">
            A battle-tested 5-phase engineering protocol that guarantees precision, velocity, and unforgettable quality.
          </p>
        </div>

        {/* Horizontal Step Navigation Bar */}
        <div className="relative mb-12 sm:mb-16">
          {/* Progress Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 z-0" />
          <div
            className="hidden md:block absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-[#00C8FF] to-[#FFC229] -translate-y-1/2 z-0 transition-all duration-500 shadow-[0_0_10px_#00C8FF]"
            style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 relative z-10">
            {steps.map((st, idx) => {
              const Icon = st.icon;
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <button
                  key={st.num}
                  onClick={() => {
                    sound.playClick();
                    setActiveStep(idx);
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className={`p-4 rounded-2xl border transition-all duration-300 text-left flex flex-col justify-between group cursor-pointer ${
                    isActive
                      ? 'border-[#00C8FF] bg-[#0A1025] shadow-[0_0_25px_rgba(0,200,255,0.35)] scale-105'
                      : isPast
                      ? 'border-[#00C8FF]/40 bg-[#0A1025]/80 hover:border-[#00C8FF]'
                      : 'border-white/5 bg-[#0A1025]/40 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        isActive
                          ? 'bg-[#00C8FF] text-[#050817]'
                          : isPast
                          ? 'bg-[#00C8FF]/20 text-[#00C8FF]'
                          : 'bg-white/5 text-[#9CA6C5]'
                      }`}
                    >
                      STEP {st.num}
                    </span>
                    <Icon
                      className={`w-4 h-4 ${
                        isActive ? 'text-[#FFC229]' : isPast ? 'text-[#00C8FF]' : 'text-[#9CA6C5]'
                      }`}
                    />
                  </div>
                  <div className="font-space font-bold text-sm text-[#F5F7FF] tracking-tight">
                    {st.title}
                  </div>
                  <div className="text-[10px] font-mono text-[#9CA6C5] mt-1">
                    {st.duration}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Feature Showcase */}
        <div className="rounded-3xl border border-[#00C8FF]/30 bg-[#0A1025]/90 p-6 sm:p-10 lg:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded bg-[#00C8FF]/10 border border-[#00C8FF]/30 font-mono text-xs text-[#00C8FF] font-bold">
                  STEP // {current.num}
                </span>
                <span className="text-xs font-mono text-[#FFC229] uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> {current.duration}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-space font-extrabold text-[#F5F7FF] tracking-tight">
                {current.title}: {current.tagline}
              </h3>

              <div className="p-4 rounded-xl bg-[#050817] border border-white/10 text-sm font-sora font-semibold text-[#00C8FF]">
                &ldquo;{current.summary}&rdquo;
              </div>

              <p className="text-sm sm:text-base font-inter text-[#9CA6C5] leading-relaxed">
                {current.desc}
              </p>

              {/* Deliverables Checklist */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono uppercase tracking-widest text-[#00C8FF]">
                  PHASE MILESTONES & DELIVERABLES
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {current.deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-start gap-2 p-2.5 rounded-lg bg-[#050817]/60 border border-white/5 text-xs text-[#F5F7FF]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#00C8FF] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Interactive Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border border-white/10 bg-[#050817] p-8 flex flex-col items-center text-center justify-between min-h-[340px] shadow-[0_0_35px_rgba(0,0,0,0.8)] overflow-hidden">
                <div className="absolute inset-0 cyber-grid opacity-30" />
                
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#087BFF] to-[#00C8FF] flex items-center justify-center text-[#050817] shadow-[0_0_30px_rgba(0,200,255,0.4)] mb-4">
                  <StepIcon className="w-10 h-10" />
                </div>

                <div className="relative z-10 space-y-2">
                  <div className="text-xs font-mono uppercase tracking-widest text-[#FFC229]">
                    PHASE 0{activeStep + 1} OF 05
                  </div>
                  <div className="text-2xl font-space font-extrabold text-[#F5F7FF]">
                    {current.title}
                  </div>
                  <div className="text-xs font-inter text-[#9CA6C5]">
                    Engineered with surgical standards. Every phase signed off by you before deployment.
                  </div>
                </div>

                {/* Progress Mini Dots */}
                <div className="relative z-10 flex gap-2 mt-6">
                  {steps.map((_, dotIdx) => (
                    <div
                      key={dotIdx}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        dotIdx === activeStep
                          ? 'w-6 bg-[#00C8FF]'
                          : dotIdx < activeStep
                          ? 'w-2 bg-[#FFC229]'
                          : 'w-2 bg-white/20'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
