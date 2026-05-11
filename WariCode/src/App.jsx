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
<<<<<<< HEAD
                  <span className="text-[#3B82F6] font-semibold tracking-wider text-xs mb-6 block uppercase">Nuestra Misión</span>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-[#0A2540]">Impulsar tu negocio digital</h3>
                  <p className="text-slate-500 leading-relaxed text-lg">
                    Diseñamos experiencias digitales profesionales y amigables. Ayudamos a clínicas, gimnasios y tiendas a automatizar sus procesos y atraer más clientes con sistemas diseñados a la perfección.
=======
                  <span className="text-cyber-blue font-bold tracking-[0.5em] text-[8px] md:text-[10px] mb-4 md:mb-6 block uppercase">NUESTRA MISIÓN</span>
                  <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 tracking-tighter text-white">[ TU ÉXITO DIGITAL ]</h3>
                  <p className="text-white/40 leading-relaxed text-sm md:text-base font-light">
                    Hacer realidad tus ideas con tecnología de alta calidad, potente y fácil de usar.
>>>>>>> ef9ca63ff6343cf57ff524e8aad3cc0d48617bdc
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white p-10 md:p-14 rounded-[2.5rem] apple-shadow-lg"
                >
<<<<<<< HEAD
                  <span className="text-[#3B82F6] font-semibold tracking-wider text-xs mb-6 block uppercase">Nuestra Visión</span>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-[#0A2540]">Tecnología accesible</h3>
                  <p className="text-slate-500 leading-relaxed text-lg">
                    Creemos que el diseño premium y el software robusto no deberían ser solo para las grandes corporaciones. Creamos soluciones elegantes y fáciles de usar al alcance de tu mano.
=======
                  <span className="text-cyber-blue font-bold tracking-[0.5em] text-[8px] md:text-[10px] mb-4 md:mb-6 block uppercase">NUESTRA VISIÓN</span>
                  <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 tracking-tighter text-white">[ INNOVACIÓN CONSTANTE ]</h3>
                  <p className="text-white/40 leading-relaxed text-sm md:text-base font-light">
                    Ser el aliado número uno para que cualquier negocio crezca y destaque en el mundo digital.
>>>>>>> ef9ca63ff6343cf57ff524e8aad3cc0d48617bdc
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          <Services />
          
<<<<<<< HEAD
          <Portfolio />
=======
          {/* Featured Projects Marquee */}
          <section className="py-10 md:py-20 bg-white/[0.01] border-y border-white/5 overflow-hidden">
            <div className="flex flex-col gap-8 md:gap-12">
              <div className="container mx-auto px-6 text-center">
                <span className="text-cyber-blue font-bold tracking-[0.3em] text-[8px] md:text-[10px] uppercase">Lo que podemos crear para tu negocio</span>
              </div>
              <div className="flex overflow-hidden group select-none">
                <div className="flex items-center gap-12 md:gap-24 animate-marquee whitespace-nowrap py-4">
                  {['VENDER POR INTERNET', 'TU PÁGINA PERSONAL', 'PÁGINA PARA TU NEGOCIO', 'TU ESCUELA ONLINE', 'SISTEMA DE VENTAS', 'TU MARCA PROFESIONAL', 'CATÁLOGO DE PRODUCTOS', 'RESERVAS POR INTERNET', 'TU BLOG PERSONAL', 'MENÚ DIGITAL', 'TARJETA WEB', 'GALERÍA DE FOTOS', 'PÁGINA PARA EVENTOS', 'SISTEMA DE PAGOS', 'TU PORTAFOLIO', 'ACADEMIA DIGITAL', 'CITAS ONLINE', 'TIENDA DE ROPA', 'PÁGINA PARA TU RESTAURANTE', 'TU CV DIGITAL'].map((type, i) => (
                    <span key={i} className="text-2xl md:text-5xl font-black text-white/10 group-hover:text-cyber-blue/40 transition-colors tracking-tighter uppercase">
                      {type}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-12 md:gap-24 animate-marquee whitespace-nowrap py-4">
                  {['VENDER POR INTERNET', 'TU PÁGINA PERSONAL', 'PÁGINA PARA TU NEGOCIO', 'TU ESCUELA ONLINE', 'SISTEMA DE VENTAS', 'TU MARCA PROFESIONAL', 'CATÁLOGO DE PRODUCTOS', 'RESERVAS POR INTERNET', 'TU BLOG PERSONAL', 'MENÚ DIGITAL', 'TARJETA WEB', 'GALERÍA DE FOTOS', 'PÁGINA PARA EVENTOS', 'SISTEMA DE PAGOS', 'TU PORTAFOLIO', 'ACADEMIA DIGITAL', 'CITAS ONLINE', 'TIENDA DE ROPA', 'PÁGINA PARA TU RESTAURANTE', 'TU CV DIGITAL'].map((type, i) => (
                    <span key={i} className="text-2xl md:text-5xl font-black text-white/10 group-hover:text-cyber-blue/40 transition-colors tracking-tighter uppercase">
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
          
          {/* Core Processing Nodes (Nosotros) */}
          <section id="nosotros" className="py-12 md:py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
              <div className="text-center mb-10 md:mb-16 relative">
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-4 text-white uppercase relative z-10">
                  NUESTRO_<span className="text-gradient">EQUIPO</span>
                </h2>
                <div className="flex items-center justify-center gap-2 md:gap-4 text-cyber-blue text-[8px] md:text-[10px] font-bold tracking-[0.5em] md:tracking-[1em] uppercase opacity-50">
                  Expertos a tu servicio // Talento UNI
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
                {[
                  { 
                    name: 'LEONARDO', 
                    node: 'FUNDADOR', 
                    role: 'ARQUITECTO DE SOFTWARE',
                    bio: 'Experto en crear sistemas potentes y seguros que nunca fallan.',
                    ig: '@lk_leao',
                    link: 'https://www.instagram.com/lk_leao/'
                  },
                  { 
                    name: 'ALEJANDRO', 
                    node: 'CO-FUNDADOR', 
                    role: 'DISEÑADOR DE EXPERIENCIAS',
                    bio: 'Especialista en crear páginas hermosas, rápidas y fáciles de navegar.',
                    ig: '@alejan_droo07',
                    link: 'https://www.instagram.com/alejan_droo07/'
                  }
                ].map((node, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02 }}
                    className="group relative"
                  >
                    <div className="relative zen-card p-6 md:p-10 rounded-2xl md:rounded-3xl border border-white/5 overflow-hidden">
                      {/* Scanning Line */}
                      <motion.div 
                        animate={{ top: ['-10%', '110%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        className="absolute left-0 right-0 h-8 bg-gradient-to-b from-transparent via-cyber-blue/10 to-transparent pointer-events-none"
                      />
>>>>>>> ef9ca63ff6343cf57ff524e8aad3cc0d48617bdc

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
