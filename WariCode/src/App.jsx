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
          <section className="py-20 relative">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-px bg-cyber-blue/10 max-w-6xl mx-auto border border-cyber-blue/20">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="matrix-card p-12 border-none"
                >
                  <span className="text-cyber-blue font-bold tracking-[0.5em] text-[10px] mb-6 block uppercase">PROTOCOL_01</span>
                  <h3 className="text-3xl font-black mb-6 tracking-tighter text-white whitespace-nowrap">[ MISIÓN_ESTRATÉGICA ]</h3>
                  <p className="text-white/40 leading-relaxed text-base font-light">
                    Sincronizar la visión del cliente con arquitecturas de software inquebrantables.
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="matrix-card p-12 border-none border-t md:border-t-0 md:border-l border-cyber-blue/10"
                >
                  <span className="text-cyber-blue font-bold tracking-[0.5em] text-[10px] mb-6 block uppercase">PROTOCOL_02</span>
                  <h3 className="text-3xl font-black mb-6 tracking-tighter text-white whitespace-nowrap">[ VISIÓN_SISTÉMICA ]</h3>
                  <p className="text-white/40 leading-relaxed text-base font-light">
                    Ser el sistema operativo de la innovación global, donde cada desafío digital encuentre su resolución.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          <Services />
          
          {/* Core Processing Nodes (Nosotros) */}
          <section id="nosotros" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16 relative">
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-white uppercase relative z-10">
                  CORE_<span className="text-gradient">NODES</span>
                </h2>
                <div className="flex items-center justify-center gap-4 text-cyber-blue text-[10px] font-bold tracking-[1em] uppercase opacity-50">
                  <div className="w-8 h-[1px] bg-cyber-blue/20" />
                  Sincronía Humana // Protocolo UNI
                  <div className="w-8 h-[1px] bg-cyber-blue/20" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {[
                  { 
                    name: 'LEONARDO', 
                    node: 'NODE_001', 
                    role: 'SYSTEM_ARCHITECT',
                    bio: 'Especialista en arquitecturas distribuidas de alta resiliencia y protocolos de seguridad.' 
                  },
                  { 
                    name: 'ALEJANDRO', 
                    node: 'NODE_002', 
                    role: 'UX_STRATEGIST',
                    bio: 'Maestro en el diseño de flujos cognitivos y optimización de interfaces reactivas.' 
                  }
                ].map((node, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02 }}
                    className="group relative"
                  >
                    <div className="relative zen-card p-10 rounded-3xl border border-white/5 overflow-hidden">
                      {/* Scanning Line */}
                      <motion.div 
                        animate={{ top: ['-10%', '110%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        className="absolute left-0 right-0 h-8 bg-gradient-to-b from-transparent via-cyber-blue/10 to-transparent pointer-events-none"
                      />

                      <div className="flex justify-between items-start mb-8">
                        <div>
                          <span className="text-cyber-blue text-[10px] font-bold tracking-widest block mb-1">{node.node}</span>
                          <span className="text-white/20 text-[8px] font-mono uppercase tracking-widest">{node.role}</span>
                        </div>
                        <div className="w-3 h-3 rounded-full bg-cyber-blue shadow-[0_0_15px_#10B981]" />
                      </div>

                      <div className="relative mb-6">
                        <h3 className="text-4xl md:text-5xl font-black mb-3 tracking-tighter uppercase text-white group-hover:text-cyber-blue transition-colors">
                          {node.name}
                        </h3>
                        <div className="h-[2px] w-12 bg-cyber-blue/30 group-hover:w-full transition-all duration-700" />
                      </div>

                      <p className="text-white/40 leading-relaxed text-lg font-light mb-10 italic">
                        "{node.bio}"
                      </p>

                      <div className="flex items-center gap-6 pt-6 border-t border-white/5">
                        <div className="flex-1 h-[2px] bg-white/[0.02] relative overflow-hidden">
                          <motion.div 
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="absolute inset-y-0 w-1/3 bg-cyber-blue/40"
                          />
                        </div>
                        <span className="text-[8px] font-bold text-white/10 uppercase tracking-widest">ACCESS_GRANTED</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Footer Terminal */}
          <footer className="py-10 border-t border-white/5 bg-black/50 backdrop-blur-md">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-cyber-blue" />
                <span className="text-[9px] font-bold text-white/40 uppercase tracking-[0.2em]">WariCode System © 2024</span>
              </div>
              <div className="flex gap-8">
                {['Github', 'LinkedIn', 'Terminal'].map((link) => (
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
