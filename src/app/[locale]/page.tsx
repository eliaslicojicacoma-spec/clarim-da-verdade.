import React, { useState, useEffect } from 'react';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { SiteFooter } from '../../components/layout/SiteFooter';
import { TopBar } from '../../components/layout/TopBar';
import { HeroSection } from '../../components/home/HeroSection';
import { FeaturedArticles } from '../../components/home/FeaturedArticles';
import { FeaturedStudies } from '../../components/home/FeaturedStudies';
import { FeaturedBooks } from '../../components/home/FeaturedBooks';
import { FeaturedHymns } from '../../components/home/FeaturedHymns';
import { MissionSection } from '../../components/home/MissionSection';
import { TestimonySection } from '../../components/home/TestimonySection';
import { SupportSection } from '../../components/home/SupportSection';
import { NewsletterSection } from '../../components/home/NewsletterSection';

export default function LocalePage() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] selection:bg-secondary selection:text-primary overflow-x-hidden font-sans">
      
      {/* Dynamic Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[120px] rounded-full opacity-50"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/5 blur-[150px] rounded-full opacity-30"></div>
      </div>

      <TopBar />
      <SiteHeader />

      <main className="relative z-10">
        <HeroSection />
        <FeaturedArticles />
        <FeaturedStudies />
        <FeaturedBooks />
        <FeaturedHymns />
        <MissionSection />
        <TestimonySection />
        <SupportSection />
        <NewsletterSection />
      </main>

      <SiteFooter />

      {/* Floating Time Indicator */}
      <div className="fixed bottom-8 right-8 z-[100] hidden md:block">
        <div className="glass-dark px-6 py-3 rounded-full flex items-center gap-4">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-[10px] font-mono font-bold tracking-widest text-white/60">
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} LUBANGO, ANG
          </span>
        </div>
      </div>

    </div>
  );
}
