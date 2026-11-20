import { useState } from 'react';
import {
  Globe,
  Layout,
  Smartphone,
  Bot,
  Palette,
  Network,
  ArrowRight,
  Code2,
  Workflow,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { sound } from '../utils/sound';

interface SolutionsSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export default function SolutionsSection({ onSelectService }: SolutionsSectionProps) {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 'web-dev',
      num: '01',
      title: 'WEBSITE DEVELOPMENT',
      subtitle: 'Spatial 3D & High-Conversion Digital Flagships',
      desc: 'From stunning landing pages to complete business websites, we turn your brand into a powerful digital experience.',
      icon: Globe,
      color: '#00C8FF',
      deliverables: [
        'Custom Three.js & WebGL 3D Experiences',
        'Sub-second Core Web Vitals & Next.js/Vite Architecture',
        'Tailored CMS & Headless Content Workflows',
        'Mobile-First Responsive Cinematic Layouts',
      ],
      techStack: ['Three.js', 'React', 'Tailwind CSS', 'TypeScript', 'WebGL', 'GSAP'],
      interactiveType: 'browser',
    },
    {
      id: 'web-app',
      num: '02',
      title: 'WEB APPLICATIONS',
      subtitle: 'Scalable Enterprise & SaaS Ecosystems',
      desc: 'Powerful, scalable web applications designed to solve real business problems with secure backend architecture.',
      icon: Layout,
      color: '#087BFF',
      deliverables: [
        'Full-Stack Cloud Architecture & Microservices',
        'Real-time WebSockets & Collaborative Dashboards',
        'Role-Based Access Control (RBAC) & OAuth2',
        'High-Throughput Database Optimization (PostgreSQL/Redis)',
      ],
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'GraphQL', 'AWS'],
      interactiveType: 'dashboard',
    },
    {
      id: 'mobile-app',
      num: '03',
      title: 'MOBILE APP DEVELOPMENT',
      subtitle: 'Native-Feel iOS & Android Applications',
      desc: 'Transform your ideas into intuitive mobile applications engineered for fluid performance and user retention.',
      icon: Smartphone,
      color: '#FFC229',
      deliverables: [
        'Cross-Platform React Native & Flutter Engineering',
        'Offline-First Data Synchronization',
        'Biometric Auth & Push Notification Gateways',
        'App Store & Play Store End-to-End Launch Management',
      ],
      techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Supabase'],
      interactiveType: 'smartphone',
    },
    {
      id: 'ai-automation',
      num: '04',
      title: 'AI & AUTOMATION',
      subtitle: 'Intelligent Workflows & Autonomous Agents',
      desc: 'Work smarter with AI-powered systems, intelligent workflows, and business automation that eliminate manual grind.',
      icon: Bot,
      color: '#8B2CFF',
      deliverables: [
        'Custom AI Agent Teams & Decision Pipelines',
        'CRM, WhatsApp, & ERP Business Automation',
        'LLM Fine-Tuning & Vector Knowledge Bases (RAG)',
        'Automated Lead Nurturing & Sentiment Intelligence',
      ],
      techStack: ['Python', 'OpenAI / Gemini', 'LangChain', 'n8n', 'FastAPI', 'Pinecone'],
      interactiveType: 'neural',
    },
    {
      id: 'ui-ux',
      num: '05',
      title: 'UI/UX DESIGN',
      subtitle: 'Obsessively Crafted Human-Centric Interfaces',
      desc: 'Beautiful interfaces. Seamless experiences. Designs that make people stay, engage, and convert.',
      icon: Palette,
      color: '#00C8FF',
      deliverables: [
        'Interactive Figma Design Systems & Token Architecture',
        'Micro-Interactions & Motion Design Storyboarding',
        'Conversion Rate Optimization (CRO) UX Audits',
        'Heuristic Analysis & User Journey Mapping',
      ],
      techStack: ['Figma', 'Spline 3D', 'After Effects', 'Design Tokens', 'Protopie'],
      interactiveType: 'design',
    },
    {
      id: 'digital-solutions',
      num: '06',
      title: 'CUSTOM DIGITAL SOLUTIONS',
      subtitle: 'Tailor-Made Engineering For Niche Verticals',
      desc: 'Custom technology solutions designed around your business goals, unconstrained by standard software limits.',
      icon: Network,
      color: '#FFC229',
      deliverables: [
        'Custom E-Commerce & Payment Engine Integration',
        'Hardware & IoT Telemetry Gateways',
        'Legacy Platform Modernization & Cloud Migration',
        'Automated Reporting & Business Intelligence Pipelines',
      ],
      techStack: ['Node.js', 'Go', 'Python', 'Stripe', 'Redis', 'Kafka'],
      interactiveType: 'ecosystem',
    },
  ];

  const current = services[activeTab];

  const handleServiceSelect = (serviceTitle: string) => {
    sound.playClick();
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="solutions" className="relative w-full py-24 sm:py-32 bg-[#050817] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#087BFF]/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#5715A8]/20 blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#00C8FF]/40 bg-[#00C8FF]/10 text-[#00C8FF] text-xs font-mono tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,200,255,0.2)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR ARCHITECTURAL CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-space font-extrabold tracking-tight text-[#F5F7FF] leading-tight mb-4">
            WE DON&apos;T JUST BUILD WEBSITES.{' '}
            <span className="bg-gradient-to-r from-[#00C8FF] via-[#087BFF] to-[#FFC229] bg-clip-text text-transparent glow-neon">
              WE BUILD DIGITAL EXPERIENCES.
            </span>
          </h2>
          <p className="text-sm sm:text-base font-inter text-[#9CA6C5] max-w-2xl mx-auto">
            Six elite engineering pillars designed to elevate your business into a digital powerhouse.
          </p>
        </div>

        {/* Interactive Service Tab Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-10">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={srv.id}
                onClick={() => {
                  sound.playClick();
                  setActiveTab(idx);
                }}
                onMouseEnter={() => sound.playHover()}
                className={`relative p-3.5 sm:p-4 rounded-xl border transition-all duration-300 text-left flex flex-col justify-between group cursor-pointer ${
                  isActive
                    ? 'border-[#00C8FF] bg-[#0A1025] shadow-[0_0_20px_rgba(0,200,255,0.3)]'
                    : 'border-white/5 bg-[#0A1025]/50 hover:border-white/20 hover:bg-[#0A1025]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-[#00C8FF]' : 'text-[#9CA6C5]'}`}>
                    // {srv.num}
                  </span>
                  <Icon
                    className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                      isActive ? 'text-[#00C8FF]' : 'text-[#9CA6C5]'
                    }`}
                  />
                </div>
                <div className={`font-space font-bold text-xs leading-snug ${isActive ? 'text-[#F5F7FF]' : 'text-[#9CA6C5]'}`}>
                  {srv.title}
                </div>
                {isActive && (
                  <div className="absolute -bottom-1 left-4 right-4 h-0.5 bg-[#00C8FF] shadow-[0_0_10px_#00C8FF]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Service Deep Dive Showcase */}
        <div className="rounded-3xl border border-[#00C8FF]/30 bg-[#0A1025]/90 p-6 sm:p-10 lg:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.9)] backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Details & Capabilities */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded bg-[#00C8FF]/10 border border-[#00C8FF]/30 font-mono text-xs text-[#00C8FF] font-bold">
                  SERVICE // {current.num}
                </span>
                <span className="text-xs font-mono text-[#FFC229] uppercase tracking-wider">
                  {current.subtitle}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-space font-extrabold text-[#F5F7FF] tracking-tight">
                {current.title}
              </h3>

              <p className="text-sm sm:text-base font-inter text-[#9CA6C5] leading-relaxed">
                {current.desc}
              </p>

              {/* Deliverables Checklist */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-mono uppercase tracking-widest text-[#00C8FF] flex items-center gap-2">
                  <Workflow className="w-3.5 h-3.5" />
                  <span>WHAT WE DELIVER</span>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {current.deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#050817]/60 border border-white/5 text-xs text-[#F5F7FF]"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-[#00C8FF] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="pt-2">
                <div className="text-xs font-mono uppercase tracking-widest text-[#9CA6C5] flex items-center gap-2 mb-2">
                  <Code2 className="w-3.5 h-3.5 text-[#FFC229]" />
                  <span>CORE TECHNOLOGIES</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {current.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#050817] border border-white/10 text-[#00C8FF]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button
                  onClick={() => handleServiceSelect(current.title)}
                  onMouseEnter={() => sound.playHover()}
                  className="px-6 py-3.5 rounded-xl font-space font-bold text-xs uppercase tracking-wider text-[#050817] bg-gradient-to-r from-[#00C8FF] to-[#087BFF] hover:from-[#FFC229] hover:to-[#FFA000] transition-all shadow-[0_0_20px_rgba(0,200,255,0.4)] flex items-center gap-2 group cursor-pointer"
                >
                  <span>START YOUR {current.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Visual 3D / Interactive Simulated Interface */}
            <div className="lg:col-span-6">
              
              {/* Type 1: Floating Browser Window */}
              {current.interactiveType === 'browser' && (
                <div className="rounded-2xl border border-[#00C8FF]/40 bg-[#050817] overflow-hidden shadow-[0_0_40px_rgba(0,200,255,0.25)]">
                  {/* Browser Bar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-[#0A1025] border-b border-white/10">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#FF3366]" />
                      <div className="w-3 h-3 rounded-full bg-[#FFC229]" />
                      <div className="w-3 h-3 rounded-full bg-[#00C8FF]" />
                    </div>
                    <div className="text-[11px] font-mono text-[#9CA6C5] bg-[#050817] px-4 py-1 rounded-full border border-white/10 flex items-center gap-2">
                      <span className="text-[#00C8FF]">https://</span>
                      <span>gentechka.com/experience</span>
                    </div>
                    <div className="text-[10px] font-mono text-[#00C8FF]">60 FPS</div>
                  </div>
                  {/* Browser Canvas Body */}
                  <div className="p-6 space-y-4">
                    <div className="h-40 rounded-xl bg-gradient-to-br from-[#087BFF]/20 via-[#5715A8]/30 to-[#00C8FF]/10 border border-[#00C8FF]/20 p-4 flex flex-col justify-between relative overflow-hidden">
                      <div className="absolute top-2 right-2 text-[10px] font-mono px-2 py-0.5 rounded bg-[#00C8FF]/20 text-[#00C8FF]">
                        Three.js Viewport
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-mono text-[#FFC229]">RENDER_ENGINE_READY</span>
                        <div className="text-lg font-space font-extrabold text-[#F5F7FF]">
                          Spatial Web Experience
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="h-2 w-16 bg-[#00C8FF] rounded" />
                        <div className="h-2 w-24 bg-white/20 rounded" />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 rounded-lg bg-[#0A1025] border border-white/5 text-center">
                        <div className="text-base font-space font-bold text-[#00C8FF]">0.4s</div>
                        <div className="text-[10px] font-mono text-[#9CA6C5]">LCP Speed</div>
                      </div>
                      <div className="p-3 rounded-lg bg-[#0A1025] border border-white/5 text-center">
                        <div className="text-base font-space font-bold text-[#FFC229]">100</div>
                        <div className="text-[10px] font-mono text-[#9CA6C5]">Performance</div>
                      </div>
                      <div className="p-3 rounded-lg bg-[#0A1025] border border-white/5 text-center">
                        <div className="text-base font-space font-bold text-[#8B2CFF]">WebGL</div>
                        <div className="text-[10px] font-mono text-[#9CA6C5]">Hardware Accel</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Type 2: Holographic Application Interface */}
              {current.interactiveType === 'dashboard' && (
                <div className="rounded-2xl border border-[#087BFF]/40 bg-[#050817] p-5 shadow-[0_0_40px_rgba(8,123,255,0.25)] space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#00C8FF] animate-pulse" />
                      <span className="font-space font-bold text-sm text-[#F5F7FF]">ENTERPRISE CONSOLE</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#00C8FF] px-2 py-0.5 rounded bg-[#00C8FF]/10">
                      LIVE TELEMETRY
                    </span>
                  </div>

                  {/* Microservices Node Visualizer */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-[#0A1025] border border-white/10">
                      <div className="text-[10px] font-mono text-[#9CA6C5]">API Latency</div>
                      <div className="text-xl font-space font-bold text-[#00C8FF]">18ms</div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-[#00C8FF] w-[88%]" />
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#0A1025] border border-white/10">
                      <div className="text-[10px] font-mono text-[#9CA6C5]">Active WebSockets</div>
                      <div className="text-xl font-space font-bold text-[#FFC229]">12,480</div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-[#FFC229] w-[75%]" />
                      </div>
                    </div>
                  </div>

                  {/* Reactive Chart Simulated Lines */}
                  <div className="h-32 rounded-xl bg-[#0A1025] p-3 border border-white/5 flex flex-col justify-between">
                    <div className="flex justify-between text-[10px] font-mono text-[#9CA6C5]">
                      <span>EVENT STREAM THROUGHPUT</span>
                      <span className="text-[#00C8FF]">99.99% UPTIME</span>
                    </div>
                    <div className="flex items-end gap-1.5 h-16 pt-2">
                      {[40, 65, 30, 85, 95, 75, 60, 90, 100, 80, 70, 95, 110, 85].map((val, i) => (
                        <div
                          key={i}
                          style={{ height: `${(val / 110) * 100}%` }}
                          className="flex-1 bg-gradient-to-t from-[#087BFF] to-[#00C8FF] rounded-t hover:bg-[#FFC229] transition-colors"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Type 3: Rotating Holographic Smartphone Simulator (With User's Reference Asset!) */}
              {current.interactiveType === 'smartphone' && (
                <div className="relative rounded-2xl border border-[#FFC229]/40 bg-[#050817] p-4 shadow-[0_0_40px_rgba(255,194,41,0.25)] overflow-hidden">
                  <div className="relative rounded-xl overflow-hidden border border-white/10">
                    <img
                      src="/images/holographic-mobile-ui.jpg"
                      alt="Holographic Mobile App UI by GEN TECH KA"
                      className="w-full h-80 object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050817] via-transparent to-transparent opacity-75" />
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#0A1025]/90 backdrop-blur-md border border-[#FFC229]/30 flex justify-between items-center">
                      <div>
                        <div className="text-[10px] font-mono text-[#FFC229]">REACT NATIVE + FLUTTER</div>
                        <div className="text-xs font-space font-bold text-[#F5F7FF]">Spatial Mobile UI</div>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-[#FFC229]/20 text-[#FFC229] text-[10px] font-mono">
                        120Hz ProMotion
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Type 4: AI & Neural Network Visualizer */}
              {current.interactiveType === 'neural' && (
                <div className="rounded-2xl border border-[#8B2CFF]/40 bg-[#050817] p-6 shadow-[0_0_40px_rgba(139,44,255,0.25)] space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-space font-bold text-sm text-[#F5F7FF]">NEURAL WORKFLOW ENGINE</span>
                    <span className="text-[10px] font-mono text-[#8B2CFF] px-2 py-0.5 rounded bg-[#8B2CFF]/20">
                      AGENTIC LOOP
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-[#0A1025] border border-[#8B2CFF]/30 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#8B2CFF]/20 flex items-center justify-center text-[#8B2CFF]">
                          <Bot className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-space font-bold text-[#F5F7FF]">Lead Intelligence Agent</div>
                          <div className="text-[10px] font-mono text-[#9CA6C5]">Qualifies & Enriches Incoming Data</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-[#00C8FF]">AUTONOMOUS</span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0A1025] border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#00C8FF]/20 flex items-center justify-center text-[#00C8FF]">
                          <Workflow className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-space font-bold text-[#F5F7FF]">Automated CRM Sync</div>
                          <div className="text-[10px] font-mono text-[#9CA6C5]">Instant WhatsApp & Email Pipeline</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-[#FFC229]">SYNCED</span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0A1025] border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#FFC229]/20 flex items-center justify-center text-[#FFC229]">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-space font-bold text-[#F5F7FF]">Custom Vector RAG</div>
                          <div className="text-[10px] font-mono text-[#9CA6C5]">Trained on Your Business Knowledge</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-[#00C8FF]">ACCURACY 99.4%</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Type 5: UI/UX Design System Specimen */}
              {current.interactiveType === 'design' && (
                <div className="rounded-2xl border border-[#00C8FF]/40 bg-[#050817] p-6 shadow-[0_0_40px_rgba(0,200,255,0.25)] space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-space font-bold text-sm text-[#F5F7FF]">DESIGN TOKENS & ATOMS</span>
                    <span className="text-[10px] font-mono text-[#00C8FF]">FIGMA AUTO-SYNC</span>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    <div className="h-14 rounded-lg bg-[#050817] border border-white/20 p-2 flex flex-col justify-between">
                      <span className="text-[8px] font-mono text-[#9CA6C5]">#050817</span>
                      <span className="text-[9px] font-mono text-[#F5F7FF]">Midnight</span>
                    </div>
                    <div className="h-14 rounded-lg bg-[#087BFF] p-2 flex flex-col justify-between text-white">
                      <span className="text-[8px] font-mono opacity-80">#087BFF</span>
                      <span className="text-[9px] font-mono font-bold">Electric</span>
                    </div>
                    <div className="h-14 rounded-lg bg-[#00C8FF] p-2 flex flex-col justify-between text-[#050817]">
                      <span className="text-[8px] font-mono font-bold opacity-80">#00C8FF</span>
                      <span className="text-[9px] font-mono font-bold">Neon</span>
                    </div>
                    <div className="h-14 rounded-lg bg-[#FFC229] p-2 flex flex-col justify-between text-[#050817]">
                      <span className="text-[8px] font-mono font-bold opacity-80">#FFC229</span>
                      <span className="text-[9px] font-mono font-bold">Gold</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#0A1025] border border-white/10 space-y-2">
                    <div className="text-[10px] font-mono text-[#9CA6C5]">TYPOGRAPHY SPECIMEN</div>
                    <div className="text-xl font-space font-black text-[#F5F7FF]">Space Grotesk 800</div>
                    <div className="text-sm font-sora font-semibold text-[#00C8FF]">Sora SemiBold 600</div>
                    <div className="text-xs font-inter text-[#9CA6C5]">Inter Regular 400 — Precision readability</div>
                  </div>
                </div>
              )}

              {/* Type 6: Interconnected 3D Digital Ecosystem */}
              {current.interactiveType === 'ecosystem' && (
                <div className="rounded-2xl border border-[#FFC229]/40 bg-[#050817] p-6 shadow-[0_0_40px_rgba(255,194,41,0.25)] space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-space font-bold text-sm text-[#F5F7FF]">CUSTOM DIGITAL ARCHITECTURE</span>
                    <span className="text-[10px] font-mono text-[#FFC229]">CLOUD AGNOSTIC</span>
                  </div>

                  <div className="relative p-6 rounded-xl bg-[#0A1025] border border-white/10 flex flex-col items-center justify-center text-center space-y-3">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#087BFF] to-[#00C8FF] flex items-center justify-center text-[#050817] font-bold shadow-[0_0_20px_rgba(0,200,255,0.5)]">
                      <Network className="w-7 h-7" />
                    </div>
                    <div className="text-base font-space font-bold text-[#F5F7FF]">
                      Distributed Cloud Mesh
                    </div>
                    <div className="text-xs font-mono text-[#9CA6C5] max-w-sm">
                      REST & GraphQL APIs // Webhooks // Real-time Message Queues // Zero-Downtime CI/CD
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
