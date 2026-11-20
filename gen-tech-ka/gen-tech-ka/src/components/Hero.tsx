import { ArrowDown, Sparkles, Cpu, Layers, ShieldCheck, Zap, Activity } from 'lucide-react';
import { sound } from '../utils/sound';

interface HeroProps {
  onExplore?: () => void;
  onContact?: () => void;
}

export default function Hero({ onExplore, onContact }: HeroProps) {
  const handleScrollTo = (id: string) => {
    sound.playClick();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-12 sm:pb-16 z-10 pointer-events-none">
      
      {/* Top Editorial Headline Banner (Matching Axion Reference Layout) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 sm:pt-8 pointer-events-auto">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          
          {/* Main Massive Editorial Title */}
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#00C8FF]/40 bg-[#050817]/80 backdrop-blur-md mb-2 shadow-[0_0_20px_rgba(0,200,255,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#00C8FF] animate-pulse" />
              <span className="text-[10px] font-mono tracking-widest text-[#00C8FF] uppercase">
                NEURAL SILICON // AXION-CLASS ARCHITECTURE
              </span>
              <span className="text-[10px] font-mono text-[#9CA6C5]">|</span>
              <span className="text-[10px] font-mono text-[#FFC229] flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> GEN TECH KA
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-space font-extrabold tracking-tight text-[#F5F7FF] leading-[0.98]">
              at the speed of <br />
              <span className="bg-gradient-to-r from-[#00C8FF] via-[#087BFF] to-[#FFC229] bg-clip-text text-transparent glow-neon">
                compute.
              </span>
            </h1>

            <p className="text-base sm:text-xl font-sora font-semibold text-[#FFC229] pt-2">
              &ldquo;We Turn Ideas Into Digital Reality.&rdquo;
            </p>
          </div>

          {/* Top-Right Secondary Narrative Spec */}
          <div className="max-w-xs md:text-right space-y-2 self-start md:self-auto bg-[#050817]/60 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
            <div className="text-[10px] font-mono text-[#00C8FF] uppercase tracking-wider">
              GEN TECH KA CORE FABRIC
            </div>
            <p className="text-xs font-inter text-[#9CA6C5] leading-relaxed">
              We engineer ultra-fast 3D digital experiences, web apps, and autonomous AI systems built on bespoke modern architectures.
            </p>
            <div className="text-[10px] font-mono text-[#FFC229]">
              Karnataka, India 🇮🇳 // 60 FPS
            </div>
          </div>

        </div>
      </div>

      {/* Middle Spacer: The 3D AI Chip, Wavy Wires, and Glowing Wavefront are Fully Visible Here! */}
      <div className="my-auto py-12 flex items-center justify-center">
        {/* Subtle HUD Targeting Ring */}
        <div className="pointer-events-none text-center space-y-1 opacity-70">
          <div className="text-[9px] font-mono tracking-[0.3em] text-[#00C8FF] uppercase">
            [ 3D NEURAL DATA PASSING // SCROLL TO INTERACT ]
          </div>
        </div>
      </div>

      {/* Bottom Action Dock & Telemetry */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4 border-t border-white/10 bg-[#050817]/70 backdrop-blur-md p-4 sm:p-6 rounded-2xl border">
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => {
                handleScrollTo('#contact');
                if (onContact) onContact();
              }}
              onMouseEnter={() => sound.playHover()}
              className="px-6 py-3.5 rounded-xl font-space font-bold text-xs uppercase tracking-wider text-[#050817] bg-gradient-to-r from-[#00C8FF] via-[#087BFF] to-[#00C8FF] bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-500 shadow-[0_0_25px_rgba(0,200,255,0.4)] hover:shadow-[0_0_35px_rgba(255,194,41,0.6)] hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span>LET&apos;S BUILD SOMETHING</span>
              <Zap className="w-3.5 h-3.5 text-[#050817]" />
            </button>

            <button
              onClick={() => {
                handleScrollTo('#problem');
                if (onExplore) onExplore();
              }}
              onMouseEnter={() => sound.playHover()}
              className="px-5 py-3.5 rounded-xl font-space font-bold text-xs uppercase tracking-wider text-[#F5F7FF] border border-[#00C8FF]/40 bg-[#0A1025]/80 hover:bg-[#00C8FF]/10 hover:border-[#00C8FF] transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span>EXPLORE OUR WORLD</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#00C8FF]" />
            </button>
          </div>

          {/* Live Telemetry Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full md:w-auto">
            <div className="px-3 py-1.5 rounded-lg bg-[#050817] border border-white/5 text-left">
              <div className="text-[9px] font-mono text-[#00C8FF] flex items-center gap-1">
                <Cpu className="w-3 h-3" /> ARCH
              </div>
              <div className="text-[11px] font-space font-bold text-[#F5F7FF]">Axion Silicon</div>
            </div>

            <div className="px-3 py-1.5 rounded-lg bg-[#050817] border border-white/5 text-left">
              <div className="text-[9px] font-mono text-[#FFC229] flex items-center gap-1">
                <Activity className="w-3 h-3" /> BUS
              </div>
              <div className="text-[11px] font-space font-bold text-[#F5F7FF]">Wavefront Pulse</div>
            </div>

            <div className="px-3 py-1.5 rounded-lg bg-[#050817] border border-white/5 text-left">
              <div className="text-[9px] font-mono text-[#8B2CFF] flex items-center gap-1">
                <Layers className="w-3 h-3" /> FLOW
              </div>
              <div className="text-[11px] font-space font-bold text-[#F5F7FF]">3D Scroll Story</div>
            </div>

            <div className="px-3 py-1.5 rounded-lg bg-[#050817] border border-white/5 text-left">
              <div className="text-[9px] font-mono text-[#00C8FF] flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> PERF
              </div>
              <div className="text-[11px] font-space font-bold text-[#F5F7FF]">Hardware 60 FPS</div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
