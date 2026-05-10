import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import QuoteBot from './components/QuoteBot';
import CodeMatrix from './components/CodeMatrix';

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-black text-white selection:bg-deep-emerald selection:text-black relative font-mono overflow-x-hidden">
      {/* Reactive Code Matrix Background */}
      <CodeMatrix />

      {/* System Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-cyber-blue origin-left z-[100]" style={{ scaleX }} />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          
          {/* System Protocols (Mission & Vision) */}
          <section id="protocolos" className="py-20 relative">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-px bg-cyber-blue/10 max-w-6xl mx-auto border border-cyber-blue/20">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="matrix-card p-8 md:p-12 border-none"
                >
                  <span className="text-cyber-blue font-bold tracking-[0.5em] text-[8px] md:text-[10px] mb-4 md:mb-6 block uppercase">NUESTRA MISIÓN</span>
                  <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 tracking-tighter text-white">[ TU ÉXITO DIGITAL ]</h3>
                  <p className="text-white/40 leading-relaxed text-sm md:text-base font-light">
                    Hacer realidad tus ideas con tecnología de alta calidad, potente y fácil de usar.
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="matrix-card p-8 md:p-12 border-none border-t md:border-t-0 md:border-l border-cyber-blue/10"
                >
                  <span className="text-cyber-blue font-bold tracking-[0.5em] text-[8px] md:text-[10px] mb-4 md:mb-6 block uppercase">NUESTRA VISIÓN</span>
                  <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 tracking-tighter text-white">[ INNOVACIÓN CONSTANTE ]</h3>
                  <p className="text-white/40 leading-relaxed text-sm md:text-base font-light">
                    Ser el aliado número uno para que cualquier negocio crezca y destaque en el mundo digital.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          <Services />
          
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

                      <div className="flex justify-between items-start mb-6 md:mb-8">
                        <div>
                          <span className="text-cyber-blue text-[8px] md:text-[10px] font-bold tracking-widest block mb-1">{node.node}</span>
                          <span className="text-white/20 text-[7px] md:text-[8px] font-mono uppercase tracking-widest">{node.role}</span>
                        </div>
                        <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-cyber-blue shadow-[0_0_15px_#10B981]" />
                      </div>

                      <div className="relative mb-4 md:mb-6">
                        <h3 className="text-3xl md:text-5xl font-black mb-2 md:mb-3 tracking-tighter uppercase text-white group-hover:text-cyber-blue transition-colors">
                          {node.name}
                        </h3>
                        <div className="h-[2px] w-12 bg-cyber-blue/30 group-hover:w-full transition-all duration-700" />
                      </div>

                      <p className="text-white/40 leading-relaxed text-base md:text-lg font-light mb-8 md:mb-10 italic">
                        "{node.bio}"
                      </p>

                      <div className="flex items-center justify-between pt-6 border-t border-white/5">
                        <div className="flex items-center gap-4">
                          <div className="w-1 md:w-2 h-[1px] bg-cyber-blue/30" />
                          <a href={node.link} target="_blank" rel="noopener noreferrer" className="text-[9px] md:text-[11px] font-bold text-cyber-blue hover:text-white transition-colors uppercase tracking-widest">
                            {node.ig}
                          </a>
                        </div>
                        <span className="text-[7px] md:text-[8px] font-bold text-white/10 uppercase tracking-widest">VALIDATED</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Footer Terminal */}
          <footer id="contacto" className="py-10 border-t border-white/5 bg-black/50 backdrop-blur-md">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-cyber-blue" />
                <span className="text-[9px] font-bold text-white/40 uppercase tracking-[0.2em]">WariCode System © 2024</span>
              </div>
              <div className="flex flex-wrap justify-center gap-8">
                {['Instagram', 'WhatsApp', 'Github', 'LinkedIn'].map((link) => (
                  <a key={link} href="#" className="text-[9px] font-bold text-white/20 hover:text-cyber-blue uppercase tracking-[0.2em] transition-colors">{link}</a>
                ))}
              </div>
            </div>
          </footer>
        </main>

        {/* WARI AI Bot */}
        <QuoteBot />
      </div>
    </div>
  );
};

export default App;
