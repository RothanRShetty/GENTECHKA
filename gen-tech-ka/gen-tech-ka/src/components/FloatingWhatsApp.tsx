import { useState } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { sound } from '../utils/sound';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const defaultPhone = '919876543210'; // Brand WhatsApp number

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();
    const text = encodeURIComponent(
      message.trim() || 'Hi GEN TECH KA! I am exploring your digital agency services and would like to build something.'
    );
    window.open(`https://wa.me/${defaultPhone}?text=${text}`, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Quick Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl border border-[#25D366]/40 bg-[#0A1025] shadow-[0_10px_35px_rgba(0,0,0,0.8)] overflow-hidden animate-fade-in backdrop-blur-xl">
          {/* Header */}
          <div className="bg-[#050817] p-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full bg-[#25D366]/20 border border-[#25D366] flex items-center justify-center text-[#25D366]">
                <MessageSquare className="w-5 h-5" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#25D366] rounded-full border-2 border-[#050817]" />
              </div>
              <div>
                <div className="text-xs font-space font-bold text-[#F5F7FF]">GEN TECH KA Support</div>
                <div className="text-[10px] font-mono text-[#25D366]">Online // Instant Reply</div>
              </div>
            </div>

            <button
              onClick={() => {
                sound.playClick();
                setIsOpen(false);
              }}
              className="p-1 rounded-md text-[#9CA6C5] hover:text-[#F5F7FF]"
              aria-label="Close Chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3">
            <div className="p-3 rounded-xl bg-[#050817]/80 border border-white/5 text-xs text-[#F5F7FF] space-y-1">
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#00C8FF]">
                <Sparkles className="w-3 h-3" />
                <span>GEN TECH KA // ARCHITECTURE DESK</span>
              </div>
              <p>
                Have a quick question about a project, budget, or 3D development timeline? Ping us directly!
              </p>
            </div>

            <form onSubmit={handleSend} className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 rounded-xl bg-[#050817] border border-white/10 text-xs text-[#F5F7FF] placeholder-[#9CA6C5]/50 focus:outline-none focus:border-[#25D366]"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-[#25D366] text-[#050817] hover:scale-105 transition-transform"
                title="Send via WhatsApp"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => {
          sound.playClick();
          setIsOpen(!isOpen);
        }}
        onMouseEnter={() => sound.playHover()}
        className="group relative w-14 h-14 rounded-full bg-[#25D366] text-[#050817] flex items-center justify-center shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:shadow-[0_0_35px_rgba(37,211,102,0.8)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Chat on WhatsApp with GEN TECH KA"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
        
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75 pointer-events-none" />

        {/* Hover Pill Label */}
        <span className="hidden sm:group-hover:inline-block absolute right-16 px-3 py-1.5 rounded-lg bg-[#0A1025] border border-[#25D366]/40 text-[#25D366] text-xs font-mono whitespace-nowrap shadow-[0_4px_15px_rgba(0,0,0,0.8)] pointer-events-none">
          Chat on WhatsApp
        </span>
      </button>

    </div>
  );
}
