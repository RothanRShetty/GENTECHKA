import { ArrowUp, ArrowUpRight, Sparkles, MessageSquare, Mail } from 'lucide-react';
import ThreeEndingEmblem from './ThreeEndingEmblem';
import { InstagramIcon } from './Icons';
import { sound } from '../utils/sound';

interface CinematicEndingProps {
  onStartProject?: () => void;
}

export default function CinematicEnding({ onStartProject }: CinematicEndingProps) {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartProject = () => {
    sound.playClick();
    if (onStartProject) {
      onStartProject();
    }
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#050817] overflow-hidden border-t border-white/5 pt-20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-b from-[#087BFF]/15 via-[#5715A8]/20 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      {/* Massive 3D Floating Emblem Scene */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="relative w-full flex items-center justify-center -mb-8 sm:-mb-14">
          <ThreeEndingEmblem />
        </div>

        {/* Golden Typography & Dramatic Copy */}
        <div className="relative z-10 max-w-4xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#FFC229]/40 bg-[#FFC229]/10 text-[#FFC229] text-xs font-mono tracking-widest uppercase mb-2 shadow-[0_0_15px_rgba(255,194,41,0.2)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE NEXT HORIZON</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-7xl font-space font-extrabold tracking-tight text-[#FFC229] glow-gold leading-tight">
            THE FUTURE ISN&apos;T WAITING.
          </h2>

          <h3 className="text-3xl sm:text-5xl md:text-6xl font-space font-extrabold tracking-tight text-[#F5F7FF] leading-tight">
            WHY SHOULD YOU?
          </h3>

          <p className="text-base sm:text-xl font-sora text-[#00C8FF] tracking-wide pt-2">
            &ldquo;LET&apos;S BUILD THE FUTURE TOGETHER.&rdquo;
          </p>

          {/* Final CTA Button */}
          <div className="pt-6">
            <button
              onClick={handleStartProject}
              onMouseEnter={() => sound.playHover()}
              className="px-10 py-5 rounded-2xl font-space font-extrabold text-sm sm:text-base uppercase tracking-wider text-[#050817] bg-gradient-to-r from-[#00C8FF] via-[#087BFF] to-[#FFC229] bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-500 shadow-[0_0_35px_rgba(0,200,255,0.5)] hover:shadow-[0_0_45px_rgba(255,194,41,0.6)] hover:scale-105 active:scale-95 inline-flex items-center gap-2 cursor-pointer"
            >
              <span>START YOUR PROJECT</span>
              <ArrowUpRight className="w-5 h-5 text-[#050817]" />
            </button>
          </div>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#00C8FF]/30 to-transparent my-16" />

        {/* Detailed Brand Footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left pb-16">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#087BFF]/20 border border-[#00C8FF] flex items-center justify-center font-mono font-black text-xs text-[#00C8FF] shadow-[0_0_12px_rgba(0,200,255,0.4)]">
                GTK
              </div>
              <span className="text-xl font-space font-extrabold tracking-wider text-[#F5F7FF]">
                GEN TECH KA
              </span>
            </div>

            <p className="text-xs sm:text-sm font-sora text-[#00C8FF]">
              &ldquo;We Turn Ideas Into Digital Reality.&rdquo;
            </p>

            <p className="text-xs font-inter text-[#9CA6C5] max-w-sm leading-relaxed">
              Karnataka-born next-generation digital technology studio engineering 3D websites, intelligent web applications, mobile platforms, and autonomous systems.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/gentechka"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0A1025] border border-white/10 flex items-center justify-center text-[#9CA6C5] hover:text-[#00C8FF] hover:border-[#00C8FF] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0A1025] border border-white/10 flex items-center justify-center text-[#9CA6C5] hover:text-[#25D366] hover:border-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@gentechka.com"
                className="w-8 h-8 rounded-lg bg-[#0A1025] border border-white/10 flex items-center justify-center text-[#9CA6C5] hover:text-[#087BFF] hover:border-[#087BFF] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#00C8FF]">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-inter text-[#9CA6C5]">
              <li>
                <a href="#problem" className="hover:text-[#F5F7FF] transition-colors">
                  01 // The Problem
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-[#F5F7FF] transition-colors">
                  02 // Architectural Solutions
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-[#F5F7FF] transition-colors">
                  03 // Digital Showcase
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#F5F7FF] transition-colors">
                  04 // Engineering Process
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#F5F7FF] transition-colors">
                  05 // Why GEN TECH KA
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F5F7FF] transition-colors">
                  06 // Project Enquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Services Quick List */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#FFC229]">
              CORE SERVICES
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#9CA6C5]">
              <span>• Website Dev</span>
              <span>• Web Apps</span>
              <span>• Mobile Apps</span>
              <span>• AI & Automation</span>
              <span>• UI/UX Design</span>
              <span>• Digital Solutions</span>
            </div>
            
            <div className="pt-4 p-3 rounded-xl bg-[#0A1025] border border-white/10">
              <div className="flex items-center gap-2 text-[10px] font-mono text-[#00C8FF]">
                <span className="w-2 h-2 rounded-full bg-[#00C8FF] animate-pulse" />
                <span>SYSTEM ONLINE // ALL CHANNELS ACTIVE</span>
              </div>
              <div className="text-[11px] font-inter text-[#9CA6C5] mt-1">
                Karnataka, India 🇮🇳 // Accepting commission briefs for 2026.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back-to-Top Bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9CA6C5]">
          <div>
            © 2026 <strong className="text-[#F5F7FF]">GEN TECH KA</strong>. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => sound.playHover()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 hover:border-[#00C8FF] hover:text-[#00C8FF] transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
