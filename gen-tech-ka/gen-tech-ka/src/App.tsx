import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionsSection from './components/SolutionsSection';
import PortfolioSection from './components/PortfolioSection';
import ProcessTimeline from './components/ProcessTimeline';
import WhyUsSection from './components/WhyUsSection';
import ContactSection from './components/ContactSection';
import CinematicEnding from './components/CinematicEnding';
import CyberCursor from './components/CyberCursor';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ThreeFullBackground from './components/ThreeFullBackground';

export default function App() {
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('');

  const handleSelectService = (serviceName: string) => {
    setSelectedServiceForContact(serviceName);
  };

  const handleSelectPortfolioCategory = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      'Websites & 3D': 'Website Development',
      'Web Apps': 'Web Application',
      'Mobile Apps': 'Mobile App Development',
      'AI & Automation': 'AI & Automation',
      'E-commerce': 'E-commerce Website',
    };
    setSelectedServiceForContact(categoryMap[category] || 'Custom Digital Solution');
  };

  return (
    <div className="min-h-screen bg-[#050817] text-[#F5F7FF] relative selection:bg-[#00C8FF] selection:text-[#050817] overflow-x-hidden">
      {/* FULL-SCREEN 3D SCROLL BACKGROUND (AI Chip & Wavy Bus Wires) */}
      <ThreeFullBackground />

      {/* Custom Cyber Interactive Cursor */}
      <CyberCursor />

      {/* Futuristic HUD Navigation Bar */}
      <Navbar onOpenContact={() => setSelectedServiceForContact('')} />

      {/* Main Content Flow */}
      <main className="relative z-10">
        {/* 1. Hero Section (Axion-Class Editorial Layout over Full 3D AI Chip Background) */}
        <Hero
          onExplore={() => {}}
          onContact={() => setSelectedServiceForContact('')}
        />

        {/* 2. Scroll Storytelling — The Problem (3D tilt cards, red-to-blue transition) */}
        <ProblemSection />

        {/* 3. Our Solutions — What We Build (6 Interactive Service Showcases) */}
        <SolutionsSection onSelectService={handleSelectService} />

        {/* 4. Our Showcase — Digital Creations (Portfolio, Filters, Deep-dive modal) */}
        <PortfolioSection onSelectCategory={handleSelectPortfolioCategory} />

        {/* 5. The Process — How We Work (5-Step Execution Timeline) */}
        <ProcessTimeline />

        {/* 6. Why GEN TECH KA? (Brand Values & Comparison Matrix) */}
        <WhyUsSection />

        {/* 7. Contact Section — Fully Interactive Enquiry Pipeline */}
        <ContactSection initialService={selectedServiceForContact} />
      </main>

      {/* 8. Final Cinematic Brand Ending & Footer */}
      <CinematicEnding onStartProject={() => setSelectedServiceForContact('')} />

      {/* 9. Floating WhatsApp Widget */}
      <FloatingWhatsApp />
    </div>
  );
}
