import { useState, useEffect } from 'react';
import {
  Send,
  MessageSquare,
  Mail,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Copy,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { InstagramIcon } from './Icons';
import confetti from 'canvas-confetti';
import { sound } from '../utils/sound';

interface ContactSectionProps {
  initialService?: string;
}

export default function ContactSection({ initialService = '' }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    services: [] as string[],
    budget: '',
    description: '',
    timeline: 'Within 2 Weeks',
    preferredContact: 'WhatsApp',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<{
    id: string;
    date: string;
    data: typeof formData;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  // Sync initial service from portfolio or solutions CTA
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        services: prev.services.includes(initialService) ? prev.services : [...prev.services, initialService],
      }));
    }
  }, [initialService]);

  const serviceOptions = [
    'Website Development',
    'Web Application',
    'Mobile App Development',
    'AI & Automation',
    'UI/UX Design',
    'E-commerce Website',
    'Custom Digital Solution',
    'Other',
  ];

  const budgetOptions = [
    'Below ₹10,000',
    '₹10,000–₹25,000',
    '₹25,000–₹50,000',
    '₹50,000–₹1,00,000',
    'Above ₹1,00,000',
    'Not Decided Yet',
  ];

  const timelineOptions = ['ASAP', 'Within 2 Weeks', 'Within 1 Month', 'Flexible'];

  const contactMethods = ['WhatsApp', 'Email', 'Phone Call'];

  const toggleService = (srv: string) => {
    sound.playHover();
    setFormData((prev) => {
      const exists = prev.services.includes(srv);
      return {
        ...prev,
        services: exists ? prev.services.filter((s) => s !== srv) : [...prev.services, srv],
      };
    });
    if (errors.services) {
      setErrors((prev) => ({ ...prev, services: '' }));
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone / WhatsApp Number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (formData.services.length === 0) {
      newErrors.services = 'Please select at least one service';
    }

    if (!formData.budget) {
      newErrors.budget = 'Please select a project budget tier';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Please describe your project or idea';
    } else if (formData.description.trim().length < 15) {
      newErrors.description = 'Please provide a bit more detail (min 15 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();

    if (!validate()) {
      sound.playWhoosh();
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate real asynchronous submission network request
      await new Promise((resolve) => setTimeout(resolve, 900));

      const ticketId = `GTK-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const submissionRecord = {
        id: ticketId,
        date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        data: { ...formData },
      };

      // Store in localStorage for audit persistence
      try {
        const existing = JSON.parse(localStorage.getItem('gtk_enquiries') || '[]');
        existing.push(submissionRecord);
        localStorage.setItem('gtk_enquiries', JSON.stringify(existing));
      } catch {
        // LocalStorage fallback
      }

      setSubmittedTicket(submissionRecord);
      sound.playChime();

      // Launch celebratory cyberpunk confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00C8FF', '#FFC229', '#087BFF', '#5715A8'],
        });
      } catch {
        // Confetti fallback
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // WhatsApp formatted direct link generator
  const getWhatsAppLink = () => {
    const phone = '919876543210'; // Replace with brand WhatsApp number
    const text = encodeURIComponent(
      `*GEN TECH KA // PROJECT ENQUIRY*\n` +
      `Ticket: ${submittedTicket?.id || 'NEW'}\n` +
      `Name: ${formData.fullName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Company: ${formData.company || 'N/A'}\n` +
      `Services: ${formData.services.join(', ')}\n` +
      `Budget: ${formData.budget}\n` +
      `Timeline: ${formData.timeline}\n` +
      `Details: ${formData.description}`
    );
    return `https://wa.me/${phone}?text=${text}`;
  };

  // Direct Mailto link generator
  const getMailtoLink = () => {
    const subject = encodeURIComponent(`Project Enquiry: ${formData.fullName} - ${formData.services.join(', ')}`);
    const body = encodeURIComponent(
      `Hi GEN TECH KA Team,\n\n` +
      `I would like to discuss a project:\n\n` +
      `Name: ${formData.fullName}\n` +
      `Company: ${formData.company || 'N/A'}\n` +
      `Phone: ${formData.phone}\n` +
      `Services: ${formData.services.join(', ')}\n` +
      `Budget Tier: ${formData.budget}\n` +
      `Timeline: ${formData.timeline}\n` +
      `Preferred Contact: ${formData.preferredContact}\n\n` +
      `Description:\n${formData.description}\n\n` +
      `Looking forward to your response.`
    );
    return `mailto:hello@gentechka.com?subject=${subject}&body=${body}`;
  };

  const copyTicketSummary = () => {
    sound.playHover();
    const summary = `GEN TECH KA Enquiry [${submittedTicket?.id}]\nClient: ${formData.fullName}\nServices: ${formData.services.join(', ')}\nBudget: ${formData.budget}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative w-full py-24 sm:py-32 bg-[#050817] overflow-hidden border-t border-white/5">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[700px] bg-gradient-to-tr from-[#087BFF]/15 via-[#5715A8]/20 to-[#00C8FF]/10 blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#00C8FF]/40 bg-[#00C8FF]/10 text-[#00C8FF] text-xs font-mono tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,200,255,0.2)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DIRECT ARCHITECTURE PIPELINE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-space font-extrabold tracking-tight text-[#F5F7FF] leading-tight mb-4">
            HAVE AN IDEA?{' '}
            <span className="bg-gradient-to-r from-[#00C8FF] via-[#087BFF] to-[#FFC229] bg-clip-text text-transparent glow-neon">
              LET&apos;S MAKE IT REAL.
            </span>
          </h2>
          <p className="text-sm sm:text-base font-inter text-[#9CA6C5] max-w-xl mx-auto">
            Your next big digital idea deserves more than just a conversation. Let&apos;s build something extraordinary together.
          </p>
        </div>

        {/* Main Interactive Form Card */}
        <div className="rounded-3xl border border-[#00C8FF]/30 bg-[#0A1025]/90 p-6 sm:p-10 lg:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl relative overflow-hidden">
          
          {submittedTicket ? (
            /* Success State */
            <div className="space-y-6 text-center py-6 animate-fade-in">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#00C8FF] to-[#087BFF] flex items-center justify-center text-[#050817] mx-auto shadow-[0_0_30px_rgba(0,200,255,0.5)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-[#FFC229] uppercase tracking-widest">
                  TRANSMISSION SUCCESSFUL
                </span>
                <h3 className="text-2xl sm:text-3xl font-space font-extrabold text-[#F5F7FF]">
                  Enquiry Logged Under Ticket #{submittedTicket.id}
                </h3>
                <p className="text-sm font-inter text-[#9CA6C5] max-w-lg mx-auto">
                  Thank you, <strong className="text-[#00C8FF]">{submittedTicket.data.fullName}</strong>. Our lead engineers review every enquiry within 12 hours.
                </p>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25D366] text-[#050817] font-space font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-105 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>DISPATCH ON WHATSAPP NOW</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={getMailtoLink()}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#087BFF] text-white font-space font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(8,123,255,0.4)] hover:scale-105 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>OPEN IN EMAIL CLIENT</span>
                </a>

                <button
                  onClick={copyTicketSummary}
                  className="w-full sm:w-auto px-4 py-3 rounded-xl border border-white/10 text-xs font-mono text-[#9CA6C5] hover:text-[#F5F7FF] flex items-center justify-center gap-2"
                >
                  <Copy className="w-4 h-4" />
                  <span>{copied ? 'COPIED!' : 'COPY TICKET'}</span>
                </button>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setSubmittedTicket(null)}
                  className="text-xs font-mono text-[#00C8FF] hover:underline"
                >
                  ← Submit Another Project Enquiry
                </button>
              </div>
            </div>
          ) : (
            /* The Form */
            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              
              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-[#F5F7FF] mb-2 uppercase tracking-wider">
                    Full Name <span className="text-[#FF3366]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full px-4 py-3 rounded-xl bg-[#050817] border text-sm text-[#F5F7FF] placeholder-[#9CA6C5]/50 focus:outline-none transition-all ${
                      errors.fullName
                        ? 'border-[#FF3366] focus:border-[#FF3366]'
                        : 'border-white/10 focus:border-[#00C8FF] focus:shadow-[0_0_15px_rgba(0,200,255,0.2)]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] font-mono text-[#FF3366] mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#F5F7FF] mb-2 uppercase tracking-wider">
                    Email Address <span className="text-[#FF3366]">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. rahul@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-[#050817] border text-sm text-[#F5F7FF] placeholder-[#9CA6C5]/50 focus:outline-none transition-all ${
                      errors.email
                        ? 'border-[#FF3366] focus:border-[#FF3366]'
                        : 'border-white/10 focus:border-[#00C8FF] focus:shadow-[0_0_15px_rgba(0,200,255,0.2)]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] font-mono text-[#FF3366] mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Phone & Company Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-[#F5F7FF] mb-2 uppercase tracking-wider">
                    Phone / WhatsApp Number <span className="text-[#FF3366]">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={`w-full px-4 py-3 rounded-xl bg-[#050817] border text-sm text-[#F5F7FF] placeholder-[#9CA6C5]/50 focus:outline-none transition-all ${
                      errors.phone
                        ? 'border-[#FF3366] focus:border-[#FF3366]'
                        : 'border-white/10 focus:border-[#00C8FF] focus:shadow-[0_0_15px_rgba(0,200,255,0.2)]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] font-mono text-[#FF3366] mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#F5F7FF] mb-2 uppercase tracking-wider">
                    Company / Brand Name <span className="text-[#9CA6C5] font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Apex Tech Lab"
                    className="w-full px-4 py-3 rounded-xl bg-[#050817] border border-white/10 text-sm text-[#F5F7FF] placeholder-[#9CA6C5]/50 focus:outline-none focus:border-[#00C8FF] focus:shadow-[0_0_15px_rgba(0,200,255,0.2)] transition-all"
                  />
                </div>
              </div>

              {/* Field 5: What service are you looking for? (Multi-select) */}
              <div>
                <label className="block text-xs font-mono text-[#F5F7FF] mb-2 uppercase tracking-wider">
                  What service are you looking for? <span className="text-[#FF3366]">*</span>
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {serviceOptions.map((srv) => {
                    const isSelected = formData.services.includes(srv);
                    return (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => toggleService(srv)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-mono tracking-wider transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#00C8FF] text-[#050817] font-bold shadow-[0_0_15px_rgba(0,200,255,0.4)]'
                            : 'bg-[#050817] text-[#9CA6C5] border border-white/10 hover:border-[#00C8FF]/40 hover:text-[#F5F7FF]'
                        }`}
                      >
                        {isSelected ? '✓ ' : '+ '}
                        {srv}
                      </button>
                    );
                  })}
                </div>
                {errors.services && (
                  <p className="text-[11px] font-mono text-[#FF3366] mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.services}
                  </p>
                )}
              </div>

              {/* Field 6: Project Budget (Radio/Buttons) */}
              <div>
                <label className="block text-xs font-mono text-[#F5F7FF] mb-2 uppercase tracking-wider">
                  Estimated Project Budget <span className="text-[#FF3366]">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {budgetOptions.map((b) => {
                    const isSelected = formData.budget === b;
                    return (
                      <button
                        type="button"
                        key={b}
                        onClick={() => {
                          sound.playHover();
                          setFormData({ ...formData, budget: b });
                          if (errors.budget) setErrors({ ...errors, budget: '' });
                        }}
                        className={`p-3 rounded-xl text-xs font-mono text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#FFC229] text-[#050817] font-bold shadow-[0_0_15px_rgba(255,194,41,0.4)]'
                            : 'bg-[#050817] text-[#9CA6C5] border border-white/10 hover:border-white/30 hover:text-[#F5F7FF]'
                        }`}
                      >
                        <div className="text-[10px] opacity-75 uppercase">TIER</div>
                        <div className="font-space font-bold mt-0.5">{b}</div>
                      </button>
                    );
                  })}
                </div>
                {errors.budget && (
                  <p className="text-[11px] font-mono text-[#FF3366] mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.budget}
                  </p>
                )}
              </div>

              {/* Field 7: Project Description */}
              <div>
                <label className="block text-xs font-mono text-[#F5F7FF] mb-2 uppercase tracking-wider">
                  Project Description & Vision <span className="text-[#FF3366]">*</span>
                </label>
                <textarea
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Tell us about your venture, what problems you're solving, any benchmark designs or tech requirements..."
                  className={`w-full px-4 py-3 rounded-xl bg-[#050817] border text-sm text-[#F5F7FF] placeholder-[#9CA6C5]/50 focus:outline-none transition-all ${
                    errors.description
                      ? 'border-[#FF3366] focus:border-[#FF3366]'
                      : 'border-white/10 focus:border-[#00C8FF] focus:shadow-[0_0_15px_rgba(0,200,255,0.2)]'
                  }`}
                />
                {errors.description && (
                  <p className="text-[11px] font-mono text-[#FF3366] mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.description}
                  </p>
                )}
              </div>

              {/* Field 8: Expected Timeline & Field 9: Preferred Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-[#F5F7FF] mb-2 uppercase tracking-wider">
                    Expected Timeline
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {timelineOptions.map((tl) => (
                      <button
                        type="button"
                        key={tl}
                        onClick={() => {
                          sound.playHover();
                          setFormData({ ...formData, timeline: tl });
                        }}
                        className={`p-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                          formData.timeline === tl
                            ? 'bg-[#00C8FF]/20 text-[#00C8FF] border border-[#00C8FF]'
                            : 'bg-[#050817] text-[#9CA6C5] border border-white/10 hover:border-white/30'
                        }`}
                      >
                        {tl}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#F5F7FF] mb-2 uppercase tracking-wider">
                    Preferred Contact Method
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {contactMethods.map((cm) => (
                      <button
                        type="button"
                        key={cm}
                        onClick={() => {
                          sound.playHover();
                          setFormData({ ...formData, preferredContact: cm });
                        }}
                        className={`p-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                          formData.preferredContact === cm
                            ? 'bg-[#00C8FF]/20 text-[#00C8FF] border border-[#00C8FF]'
                            : 'bg-[#050817] text-[#9CA6C5] border border-white/10 hover:border-white/30'
                        }`}
                      >
                        {cm}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Submit CTA Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onMouseEnter={() => sound.playHover()}
                  className="w-full py-4 px-8 rounded-xl font-space font-extrabold text-sm sm:text-base uppercase tracking-wider text-[#050817] bg-gradient-to-r from-[#00C8FF] via-[#087BFF] to-[#FFC229] bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-500 shadow-[0_0_30px_rgba(0,200,255,0.4)] hover:shadow-[0_0_40px_rgba(255,194,41,0.5)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-[#050817] border-t-transparent rounded-full animate-spin" />
                      <span>TRANSMITTING ENQUIRY...</span>
                    </span>
                  ) : (
                    <>
                      <span>SEND PROJECT ENQUIRY</span>
                      <Send className="w-4 h-4 text-[#050817]" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

        {/* Contact Info Footer Strip */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <a
            href="https://instagram.com/gentechka"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => sound.playHover()}
            className="p-4 rounded-xl border border-white/5 bg-[#0A1025]/60 hover:border-[#00C8FF]/40 hover:bg-[#00C8FF]/10 transition-colors flex items-center gap-3 text-left group"
          >
            <div className="w-10 h-10 rounded-lg bg-[#050817] border border-white/10 flex items-center justify-center text-[#00C8FF] group-hover:scale-110 transition-transform">
              <InstagramIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-[#9CA6C5] uppercase">Instagram</div>
              <div className="text-xs font-space font-bold text-[#F5F7FF]">@gentechka</div>
            </div>
          </a>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => sound.playHover()}
            className="p-4 rounded-xl border border-white/5 bg-[#0A1025]/60 hover:border-[#25D366]/40 hover:bg-[#25D366]/10 transition-colors flex items-center gap-3 text-left group"
          >
            <div className="w-10 h-10 rounded-lg bg-[#050817] border border-white/10 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-[#9CA6C5] uppercase">WhatsApp</div>
              <div className="text-xs font-space font-bold text-[#F5F7FF]">+91 98765 43210</div>
            </div>
          </a>

          <a
            href="mailto:hello@gentechka.com"
            onMouseEnter={() => sound.playHover()}
            className="p-4 rounded-xl border border-white/5 bg-[#0A1025]/60 hover:border-[#087BFF]/40 hover:bg-[#087BFF]/10 transition-colors flex items-center gap-3 text-left group"
          >
            <div className="w-10 h-10 rounded-lg bg-[#050817] border border-white/10 flex items-center justify-center text-[#087BFF] group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-[#9CA6C5] uppercase">Email</div>
              <div className="text-xs font-space font-bold text-[#F5F7FF]">hello@gentechka.com</div>
            </div>
          </a>

          <div className="p-4 rounded-xl border border-white/5 bg-[#0A1025]/60 flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-lg bg-[#050817] border border-white/10 flex items-center justify-center text-[#FFC229]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-[#9CA6C5] uppercase">Headquarters</div>
              <div className="text-xs font-space font-bold text-[#F5F7FF]">Karnataka, India 🇮🇳</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
