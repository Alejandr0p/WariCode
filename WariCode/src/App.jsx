import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis';
import { Target, Eye } from 'lucide-react';
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
          
          {/* Misión & Visión (Balanced and Ultra-Premium UI/UX) */}
          <section id="nosotros" className="py-24 relative bg-transparent overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/20 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-6xl mx-auto">
                {/* Centered Heading */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-4"
                  >
                    <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-widest">Nuestro Propósito</span>
                  </motion.div>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6"
                  >
                    Impulsamos el Éxito de <span className="text-gradient">Tu Empresa.</span>
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-slate-800 font-medium text-base md:text-lg"
                  >
                    Combinamos el rigor de la mejor ingeniería peruana con un diseño moderno para crear soluciones digitales de alto impacto.
                  </motion.p>
                </div>

                {/* 2-Column Balanced Cards */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Misión */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group relative h-full"
                  >
                    <div className="h-full bg-white/80 backdrop-blur-xl p-10 md:p-12 rounded-[3.2rem] border border-blue-100/30 shadow-[0_20px_50px_-15px_rgba(30,58,138,0.05)] flex flex-col justify-between transition-all duration-500 hover:shadow-blue-100/50 hover:bg-white hover:-translate-y-2">
                      <div>
                        {/* Icon and Category */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white transition-all duration-500 shadow-md shadow-blue-100/50">
                            <Target className="w-7 h-7" />
                          </div>
                          <span className="text-[#3B82F6] font-bold tracking-widest text-xs uppercase">Nuestra Misión</span>
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-slate-950">Ingeniería de Clase Mundial</h3>
                        <p className="text-slate-800 leading-relaxed text-lg font-medium">
                          Nuestra misión es digitalizar negocios con el estándar de excelencia de la <span className="text-[#1E3A8A] font-bold">UNI</span>. Transformamos procesos complejos en experiencias fluidas, ayudando a empresas peruanas a escalar con software diseñado bajo el rigor de la mejor ingeniería del país.
                        </p>
                      </div>

                      {/* Bullet highlights */}
                      <div className="mt-8 pt-6 border-t border-slate-100 flex gap-6">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Garantía UNI</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">A Medida</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Visión */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="group relative h-full"
                  >
                    <div className="h-full bg-white/80 backdrop-blur-xl p-10 md:p-12 rounded-[3.2rem] border border-blue-100/30 shadow-[0_20px_50px_-15px_rgba(30,58,138,0.05)] flex flex-col justify-between transition-all duration-500 hover:shadow-blue-100/50 hover:bg-white hover:-translate-y-2">
                      <div>
                        {/* Icon and Category */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white transition-all duration-500 shadow-md shadow-blue-100/50">
                            <Eye className="w-7 h-7" />
                          </div>
                          <span className="text-[#3B82F6] font-bold tracking-widest text-xs uppercase">Nuestra Visión</span>
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-slate-950">Liderazgo Tecnológico</h3>
                        <p className="text-slate-800 leading-relaxed text-lg font-medium">
                          Aspiramos a ser el referente en desarrollo de software de alta gama en Lima y el mundo. Creemos firmemente que el talento de la <span className="text-[#1E3A8A] font-bold">Universidad Nacional de Ingeniería</span> está capacitado para liderar la innovación tecnológica global desde el Perú.
                        </p>
                      </div>

                      {/* Bullet highlights */}
                      <div className="mt-8 pt-6 border-t border-slate-100 flex gap-6">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Visión Global</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Élite Digital</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
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
