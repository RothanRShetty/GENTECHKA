import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Terminal, ArrowUpRight } from 'lucide-react';
import { sound } from '../utils/sound';

interface NavbarProps {
  onOpenContact?: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(!sound.enabled);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const active = sound.toggle();
    setIsMuted(!active);
  };

  const navLinks = [
    { label: 'THE PROBLEM', href: '#problem', tag: '01' },
    { label: 'SOLUTIONS', href: '#solutions', tag: '02' },
    { label: 'SHOWCASE', href: '#showcase', tag: '03' },
    { label: 'PROCESS', href: '#process', tag: '04' },
    { label: 'WHY US', href: '#why-us', tag: '05' },
    { label: 'CONTACT', href: '#contact', tag: '06' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    sound.playClick();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050817]/85 backdrop-blur-md border-b border-[#00C8FF]/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-transparent py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              sound.playClick();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onMouseEnter={() => sound.playHover()}
            className="flex items-center gap-3 group"
          >
            {/* Holographic Hexagonal Icon */}
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#087BFF]/20 rounded-lg rotate-45 border border-[#00C8FF] group-hover:rotate-90 group-hover:border-[#FFC229] transition-transform duration-500 shadow-[0_0_15px_rgba(0,200,255,0.4)]" />
              <div className="relative font-mono font-black text-sm tracking-tighter text-[#00C8FF] group-hover:text-[#FFC229] transition-colors">
                GTK
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-space font-extrabold text-lg sm:text-xl tracking-wider text-[#F5F7FF] group-hover:text-[#00C8FF] transition-colors">
                  GEN TECH KA
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] font-mono tracking-widest uppercase bg-[#00C8FF]/10 text-[#00C8FF] border border-[#00C8FF]/30 rounded">
                  2.0
                </span>
              </div>
              <p className="text-[10px] font-mono tracking-widest text-[#9CA6C5] uppercase hidden md:block">
                Digital Reality Studio
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                onMouseEnter={() => sound.playHover()}
                className="relative px-3 py-1.5 text-xs font-mono font-medium tracking-wider text-[#9CA6C5] hover:text-[#00C8FF] hover:bg-[#00C8FF]/5 rounded transition-all duration-200 group"
              >
                <span className="text-[10px] text-[#FFC229] opacity-60 group-hover:opacity-100 mr-1.5">
                  {link.tag}
                </span>
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Audio Feedback Synthesizer Toggle */}
            <button
              onClick={toggleSound}
              onMouseEnter={() => sound.playHover()}
              title={isMuted ? 'Turn Sound FX On' : 'Mute Sound FX'}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border text-xs font-mono transition-all duration-200 ${
                !isMuted
                  ? 'border-[#00C8FF]/60 bg-[#00C8FF]/10 text-[#00C8FF] shadow-[0_0_10px_rgba(0,200,255,0.3)]'
                  : 'border-white/10 bg-white/5 text-[#9CA6C5] hover:border-white/30'
              }`}
            >
              {!isMuted ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                  <span className="hidden sm:inline text-[10px] uppercase tracking-wider">Audio On</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 opacity-60" />
                  <span className="hidden sm:inline text-[10px] uppercase tracking-wider">Audio Muted</span>
                </>
              )}
            </button>

            {/* Primary Action Button */}
            <a
              href="#contact"
              onClick={(e) => {
                handleLinkClick(e, '#contact');
                if (onOpenContact) onOpenContact();
              }}
              onMouseEnter={() => sound.playHover()}
              className="relative inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-space font-bold uppercase tracking-wider text-[#050817] bg-gradient-to-r from-[#00C8FF] to-[#087BFF] hover:from-[#FFC229] hover:to-[#FFA000] rounded transition-all duration-300 shadow-[0_0_20px_rgba(0,200,255,0.4)] hover:shadow-[0_0_25px_rgba(255,194,41,0.5)] transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>LET'S BUILD</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2 text-[#9CA6C5] hover:text-[#00C8FF] border border-white/10 rounded bg-[#0A1025]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Cyber Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050817]/95 backdrop-blur-xl pt-24 px-6 flex flex-col justify-between pb-10 lg:hidden">
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-4 border-b border-white/10 text-xs font-mono text-[#00C8FF]">
              <Terminal className="w-4 h-4" />
              <span>NAVIGATION TERMINAL</span>
            </div>
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-[#0A1025]/60 hover:border-[#00C8FF]/50 hover:bg-[#00C8FF]/10 transition-colors"
                >
                  <span className="font-space font-bold text-base text-[#F5F7FF] tracking-wider">
                    {link.label}
                  </span>
                  <span className="font-mono text-xs text-[#FFC229]">
                    // {link.tag}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <div className="flex justify-between items-center text-xs font-mono text-[#9CA6C5]">
              <span>STATUS: SYSTEM OPERATIONAL</span>
              <span className="text-[#00C8FF]">KARNATAKA, IN</span>
            </div>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#00C8FF] text-[#050817] font-space font-extrabold text-sm uppercase rounded shadow-[0_0_20px_rgba(0,200,255,0.4)]"
            >
              <span>START YOUR PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
