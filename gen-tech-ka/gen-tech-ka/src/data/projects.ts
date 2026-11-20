export interface Project {
  id: string;
  name: string;
  category: 'Websites & 3D' | 'Web Apps' | 'Mobile Apps' | 'AI & Automation' | 'E-commerce';
  headline: string;
  shortDesc: string;
  fullDesc: string;
  techStack: string[];
  features: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
  gradient: string;
  previewType: '3d-canvas' | 'hologram' | 'dashboard' | 'mobile-hud';
  isDemo: true;
}

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'kinetic-ai',
    name: 'KINETIC AGENT OS',
    category: 'AI & Automation',
    headline: 'Autonomous Business Decision & Workflow Architecture',
    shortDesc: 'Multi-agent orchestration platform that analyzes customer signals, automates inventory reordering, and triggers intelligent email & WhatsApp dispatches in milliseconds.',
    fullDesc: 'Built as an autonomous operational spine, Kinetic Agent OS coordinates specialized LLM subagents for automated CRM data hygiene, dynamic pricing optimization, and cross-channel customer service routing.',
    techStack: ['Python', 'LangChain', 'FastAPI', 'React', 'Tailwind CSS', 'Pinecone', 'Docker'],
    features: [
      'Autonomous multi-agent consensus engine',
      'Real-time WhatsApp & Webhook event triggers',
      'Vector memory RAG for zero-hallucination compliance',
      'Executive telemetry dashboard with 99.9% uptime',
    ],
    metrics: [
      { label: 'Time Saved / Week', value: '42 hrs' },
      { label: 'Latency', value: '180ms' },
      { label: 'Accuracy Rate', value: '99.4%' },
    ],
    accentColor: '#8B2CFF',
    gradient: 'from-[#8B2CFF]/30 to-[#087BFF]/20',
    previewType: 'dashboard',
    isDemo: true,
  },
  {
    id: 'nexus-spatial',
    name: 'NEXUS 3D SPATIAL COMMERCE',
    category: 'Websites & 3D',
    headline: 'Immersive WebGL Flagship Showroom & Customizer',
    shortDesc: 'High-performance 3D spatial web platform delivering real-time product rendering, 360° tactile customization, and instant checkout integration.',
    fullDesc: 'Nexus 3D eliminates the gap between physical retail and digital commerce with photorealistic Three.js shaders, reactive lighting, and fluid camera choreography that elevates brand prestige.',
    techStack: ['Three.js', 'React Three Fiber', 'TypeScript', 'Tailwind CSS', 'WebGL', 'Stripe'],
    features: [
      'Hardware-accelerated 60 FPS 3D configurator',
      'Instant PBR material & texture swapping',
      'Mobile-optimized touch orbit controls',
      'Sub-second first contentful paint (0.35s)',
    ],
    metrics: [
      { label: 'Conversion Lift', value: '+68%' },
      { label: 'Avg Time on Site', value: '4m 12s' },
      { label: 'LCP Score', value: '0.35s' },
    ],
    accentColor: '#00C8FF',
    gradient: 'from-[#00C8FF]/30 to-[#087BFF]/20',
    previewType: '3d-canvas',
    isDemo: true,
  },
  {
    id: 'aura-health',
    name: 'AURA BIO-METRIC MOBILE',
    category: 'Mobile Apps',
    headline: 'Next-Generation Telehealth & Vital Telemetry App',
    shortDesc: 'Sleek, biometric health application connecting wearable sensor data with intelligent clinician consultation schedules and encrypted records.',
    fullDesc: 'Engineered with React Native and native biometric APIs, Aura Health features dark-mode glowing telemetry, offline-first sync, and military-grade end-to-end encryption.',
    techStack: ['React Native', 'TypeScript', 'Supabase', 'GraphQL', 'Tailwind', 'HealthKit'],
    features: [
      'Biometric Face ID & Fingerprint authentication',
      'Real-time pulse and metabolic telemetry charting',
      'Encrypted WebRTC high-definition video consultations',
      'Offline-first automated cloud replication',
    ],
    metrics: [
      { label: 'App Store Rating', value: '4.9 ★' },
      { label: 'Sync Latency', value: '12ms' },
      { label: 'Active Users', value: '85K+' },
    ],
    accentColor: '#FFC229',
    gradient: 'from-[#FFC229]/25 to-[#5715A8]/20',
    previewType: 'mobile-hud',
    isDemo: true,
  },
  {
    id: 'pulse-cloud-os',
    name: 'PULSE ANALYTICS OS',
    category: 'Web Apps',
    headline: 'Collaborative Real-time Infrastructure Monitoring',
    shortDesc: 'Full-stack cloud telemetry hub handling 2M+ daily events with low-latency WebSockets, anomaly detection, and automated failover switches.',
    fullDesc: 'Designed for DevOps and engineering leads, Pulse provides an ultra-responsive dark interface for server node monitoring, incident resolution, and CI/CD pipelines.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'WebSockets', 'Docker'],
    features: [
      'Real-time WebSocket cluster telemetry',
      'Configurable alert thresholds & Discord/Slack bots',
      'Role-based granular multi-tenant security',
      'Automated PDF & CSV audit log export',
    ],
    metrics: [
      { label: 'Daily Events', value: '2.4M' },
      { label: 'Mean Resolution', value: '2.1m' },
      { label: 'Uptime', value: '99.99%' },
    ],
    accentColor: '#087BFF',
    gradient: 'from-[#087BFF]/30 to-[#00C8FF]/20',
    previewType: 'dashboard',
    isDemo: true,
  },
  {
    id: 'chrono-luxe',
    name: 'CHRONO LUXE FLAGSHIP',
    category: 'E-commerce',
    headline: 'Ultra-Luxury Horology Experience & Digital Concierge',
    shortDesc: 'Editorial-grade e-commerce showcase combining micro-animations, VIP private concierge booking, and tactile product storytelling.',
    fullDesc: 'Crafted for a high-end luxury watch brand concept, Chrono Luxe features bespoke typography, golden atmospheric lighting, and high-converting private enquiry mechanics.',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Shopify Storefront API', 'TypeScript'],
    features: [
      'Magnetic cursor interaction & sound feedback',
      'VIP private viewing reservation system',
      'High-resolution multi-angle macro zooms',
      'Automated concierge WhatsApp communication link',
    ],
    metrics: [
      { label: 'Avg Order Value', value: '₹1.8L' },
      { label: 'Bounce Rate', value: '18%' },
      { label: 'Mobile Score', value: '98/100' },
    ],
    accentColor: '#FFC229',
    gradient: 'from-[#FFC229]/30 to-[#FF3366]/20',
    previewType: 'hologram',
    isDemo: true,
  },
  {
    id: 'flow-automata',
    name: 'FLOW AUTOMATA PIPELINE',
    category: 'AI & Automation',
    headline: 'Omnichannel B2B Marketing & Lead Engine',
    shortDesc: 'Automated revenue engine combining AI copywriting, multi-step lead enrichment, automated scheduling, and CRM synchronization.',
    fullDesc: 'Flow Automata replaces 5 disconnected marketing tools with a unified intelligent pipeline that ingests inbound traffic, enriches business profiles, and books qualified meetings.',
    techStack: ['Python', 'FastAPI', 'OpenAI', 'n8n', 'React', 'Tailwind CSS'],
    features: [
      'Instant enrichment via LinkedIn & business registries',
      'Dynamic personalized landing page generator',
      'Smart calendar slot negotiation via WhatsApp',
      'Zero maintenance cloud serverless architecture',
    ],
    metrics: [
      { label: 'Lead Response Time', value: '< 45s' },
      { label: 'Qualified Rate', value: '+54%' },
      { label: 'ROI Multiple', value: '4.8x' },
    ],
    accentColor: '#00C8FF',
    gradient: 'from-[#00C8FF]/30 to-[#5715A8]/20',
    previewType: 'dashboard',
    isDemo: true,
  },
];
