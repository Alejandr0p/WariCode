import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhatsAppBot from './components/QuoteBot';
import BackgroundRain from './components/CodeMatrix';

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-slate-800 selection:bg-[#E0E7FF] selection:text-[#1E3A8A] relative font-sans overflow-x-hidden">
      <BackgroundRain />

      {/* System Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] origin-left z-[100]" style={{ scaleX }} />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />

          <MissionVision />

          <Services />

          <Portfolio />

          {/* Footer Minimalista */}
          <footer id="contacto" className="py-16 border-t border-slate-200 bg-white mt-24">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-3">
                <span className="text-xl font-bold tracking-tight text-[#0A2540]">WariCode<span className="text-[#3B82F6]">.</span></span>
                <span className="text-sm font-medium text-slate-600">© 2026</span>
              </div>
            </div>
          </footer>
        </main>

        <WhatsAppBot />
      </div>
    </div>
  );
};

export default App;
