import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
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
          
          {/* Misión & Visión */}
          <section id="nosotros" className="py-24 relative">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-white p-10 md:p-14 rounded-[2.5rem] apple-shadow-lg"
                >
                  <span className="text-[#3B82F6] font-semibold tracking-wider text-xs mb-6 block uppercase">Nuestra Misión</span>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-[#0A2540]">Impulsar tu negocio digital</h3>
                  <p className="text-slate-500 leading-relaxed text-lg">
                    Diseñamos experiencias digitales profesionales y amigables. Ayudamos a clínicas, gimnasios y tiendas a automatizar sus procesos y atraer más clientes con sistemas diseñados a la perfección.
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white p-10 md:p-14 rounded-[2.5rem] apple-shadow-lg"
                >
                  <span className="text-[#3B82F6] font-semibold tracking-wider text-xs mb-6 block uppercase">Nuestra Visión</span>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-[#0A2540]">Tecnología accesible</h3>
                  <p className="text-slate-500 leading-relaxed text-lg">
                    Creemos que el diseño premium y el software robusto no deberían ser solo para las grandes corporaciones. Creamos soluciones elegantes y fáciles de usar al alcance de tu mano.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          <Services />
          
          <Portfolio />

          {/* Footer Minimalista */}
          <footer id="contacto" className="py-16 border-t border-slate-200 bg-white mt-24">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-3">
                <span className="text-xl font-bold tracking-tight text-[#0A2540]">WariCode<span className="text-[#3B82F6]">.</span></span>
                <span className="text-sm font-medium text-slate-400">© 2026</span>
              </div>
              <div className="flex flex-wrap justify-center gap-8">
                {['Instagram', 'WhatsApp', 'Facebook', 'LinkedIn'].map((link) => (
                  <a key={link} href="#" className="text-sm font-medium text-slate-500 hover:text-[#1E3A8A] transition-colors">{link}</a>
                ))}
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
