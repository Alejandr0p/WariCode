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

          {/* Misión & Visión — Ultra Premium Section */}
          <section id="nosotros" className="py-32 relative bg-transparent overflow-hidden">

            {/* ── Decorative background layers ── */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Large soft orb */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-50/30 rounded-full blur-[140px]" />
              {/* Grid lines */}
              <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'linear-gradient(#1E3A8A 1px, transparent 1px), linear-gradient(90deg, #1E3A8A 1px, transparent 1px)', backgroundSize: '60px 60px' }}
              />
              {/* Floating dots */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -18, 0], opacity: [0.15, 0.45, 0.15] }}
                  transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
                  className="absolute w-2 h-2 rounded-full bg-blue-400"
                  style={{ left: `${8 + i * 7.5}%`, top: `${15 + (i % 3) * 25}%` }}
                />
              ))}
            </div>

            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-6xl mx-auto">

                {/* ── Section badge + heading ── */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-blue-100 shadow-md mb-6"
                  >
                    <motion.span
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 rounded-full bg-blue-500 inline-block"
                    />
                    <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-widest">Nuestro Propósito</span>
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-5 leading-tight"
                  >
                    Impulsamos el Éxito de{' '}
                    <span className="text-gradient">Tu Empresa.</span>
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-500 font-medium text-base md:text-lg leading-relaxed"
                  >
                    Combinamos el rigor de la mejor ingeniería peruana con un diseño moderno
                    para crear soluciones digitales de alto impacto.
                  </motion.p>
                </div>

                {/* ── Animated Stats Row ── */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
                >
                  {[
                    { value: '100%', label: 'Código a medida', color: 'from-blue-50 to-indigo-50' },
                    { value: '5★', label: 'Satisfacción garantizada', color: 'from-sky-50 to-blue-50' },
                    { value: '24/7', label: 'Soporte activo', color: 'from-indigo-50 to-blue-50' },
                    { value: 'UNI', label: 'Ingeniería de élite', color: 'from-blue-50 to-sky-50' },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.08 }}
                      whileHover={{ y: -4, scale: 1.03 }}
                      className={`bg-gradient-to-br ${stat.color} rounded-3xl p-6 text-center border border-blue-100/60 shadow-sm`}
                    >
                      <span className="block text-3xl md:text-4xl font-black text-[#1E3A8A] mb-1">{stat.value}</span>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* ── Misión + Visión Cards ── */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">

                  {/* Misión */}
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="group relative"
                  >
                    {/* Glow behind card */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-blue-200/40 to-indigo-200/20 rounded-[3.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative h-full bg-white/80 backdrop-blur-xl p-10 md:p-12 rounded-[3.2rem] border border-blue-100/40 shadow-[0_20px_50px_-15px_rgba(30,58,138,0.07)] flex flex-col transition-all duration-500 hover:shadow-blue-100/50 hover:bg-white hover:-translate-y-2">

                      {/* Icon */}
                      <div className="flex items-center gap-4 mb-8">
                        <div className="relative w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white transition-all duration-500 shadow-md shadow-blue-100/60">
                          <Target className="w-7 h-7" />
                          <motion.div
                            animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2.5, repeat: Infinity }}
                            className="absolute inset-0 rounded-2xl bg-blue-400/30"
                          />
                        </div>
                        <div>
                          <span className="block text-[#3B82F6] font-bold tracking-widest text-[10px] uppercase mb-0.5">Nuestra Misión</span>
                          <h3 className="text-2xl md:text-3xl font-black tracking-tight text-slate-950">Ingeniería de Clase Mundial</h3>
                        </div>
                      </div>

                      <p className="text-slate-500 leading-relaxed text-base font-medium mb-8">
                        Nuestra misión es digitalizar negocios con el estándar de excelencia de la{' '}
                        <span className="text-[#1E3A8A] font-bold">UNI</span>. Transformamos procesos complejos en experiencias
                        fluidas, ayudando a empresas peruanas a escalar con software diseñado bajo el rigor de la mejor
                        ingeniería del país.
                      </p>

                      {/* Pillars */}
                      <div className="space-y-3 mb-8">
                        {[
                          { label: 'Código limpio y escalable', pct: 95 },
                          { label: 'Entrega en tiempo y forma', pct: 98 },
                          { label: 'Experiencia de usuario premium', pct: 92 },
                        ].map((bar, i) => (
                          <div key={i}>
                            <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                              <span>{bar.label}</span><span className="text-[#1E3A8A]">{bar.pct}%</span>
                            </div>
                            <div className="h-1.5 bg-blue-50 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${bar.pct}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, delay: 0.2 + i * 0.15, ease: 'easeOut' }}
                                className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="mt-auto pt-6 border-t border-slate-100 flex flex-wrap gap-3">
                        {['Garantía UNI', 'A Medida', 'Alta Calidad'].map((tag) => (
                          <span key={tag} className="flex items-center gap-1.5 text-xs font-bold text-slate-600 uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Visión */}
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="group relative"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-br from-indigo-200/40 to-blue-200/20 rounded-[3.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative h-full bg-white/80 backdrop-blur-xl p-10 md:p-12 rounded-[3.2rem] border border-blue-100/40 shadow-[0_20px_50px_-15px_rgba(30,58,138,0.07)] flex flex-col transition-all duration-500 hover:shadow-blue-100/50 hover:bg-white hover:-translate-y-2">

                      {/* Icon */}
                      <div className="flex items-center gap-4 mb-8">
                        <div className="relative w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white transition-all duration-500 shadow-md shadow-blue-100/60">
                          <Eye className="w-7 h-7" />
                          <motion.div
                            animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                            className="absolute inset-0 rounded-2xl bg-blue-400/30"
                          />
                        </div>
                        <div>
                          <span className="block text-[#3B82F6] font-bold tracking-widest text-[10px] uppercase mb-0.5">Nuestra Visión</span>
                          <h3 className="text-2xl md:text-3xl font-black tracking-tight text-slate-950">Tu Éxito, Nuestra Meta</h3>
                        </div>
                      </div>

                      <p className="text-slate-500 leading-relaxed text-base font-medium mb-8">
                        Nos importa que tu negocio crezca de verdad. Por eso nos tomamos el tiempo
                        de entender cómo trabajas, qué necesitas y hacia dónde quieres llegar.
                        Somos tu <span className="text-[#1E3A8A] font-bold">equipo de tecnología de confianza</span>,
                        no solo un proveedor más.
                      </p>

                      {/* Pillars */}
                      <div className="space-y-3 mb-8">
                        {[
                          { icon: '💬', title: 'Te escuchamos primero', desc: 'Antes de escribir una línea de código, entendemos tu negocio a fondo.' },
                          { icon: '🎯', title: 'Soluciones a tu medida', desc: 'Nada genérico. Todo pensado para tu industria y tus clientes.' },
                          { icon: '🤝', title: 'Contigo a largo plazo', desc: 'No desaparecemos al entregar. Te acompañamos mientras creces.' },
                        ].map((p, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            className="flex items-start gap-3 p-3 rounded-2xl bg-blue-50/40 border border-blue-100/50"
                          >
                            <span className="text-xl shrink-0 mt-0.5">{p.icon}</span>
                            <div>
                              <span className="block text-xs font-black text-slate-800 mb-0.5">{p.title}</span>
                              <span className="text-xs text-slate-500 font-medium leading-snug">{p.desc}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="mt-auto pt-6 border-t border-slate-100 flex flex-wrap gap-3">
                        {['Confianza', 'Compromiso', 'Resultados'].map((tag) => (
                          <span key={tag} className="flex items-center gap-1.5 text-xs font-bold text-slate-600 uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* ── Core Values Strip ── */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                  {[
                    { icon: '⚡', title: 'Velocidad', desc: 'Entregamos en tiempo récord sin sacrificar calidad.' },
                    { icon: '🔒', title: 'Seguridad', desc: 'Arquitecturas robustas que protegen tus datos.' },
                    { icon: '🎨', title: 'Diseño', desc: 'Interfaces que enamoran y convierten visitantes.' },
                    { icon: '📈', title: 'Escalabilidad', desc: 'Tu software crece junto con tu negocio.' },
                  ].map((val, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                      whileHover={{ y: -5, scale: 1.03 }}
                      className="bg-white/70 backdrop-blur-md rounded-3xl p-6 border border-blue-50 shadow-sm text-center group cursor-default"
                    >
                      <motion.span
                        animate={{ rotate: [0, 8, -8, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                        className="text-3xl block mb-3"
                      >
                        {val.icon}
                      </motion.span>
                      <h4 className="text-sm font-black text-slate-900 mb-1 tracking-tight">{val.title}</h4>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">{val.desc}</p>
                    </motion.div>
                  ))}
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
