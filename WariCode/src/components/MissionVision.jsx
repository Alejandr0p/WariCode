import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Compass, Telescope, ArrowRight } from 'lucide-react';

const MissionVision = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.5], ['0%', '100%']);
  const orbRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  // Pre-generate random values for floating particles
  const particles = useMemo(() =>
    Array.from({ length: 16 }, (_, i) => ({
      left: `${5 + (i * 6.1) % 90}%`,
      top: `${10 + (i * 7.3) % 80}%`,
      size: 3 + (i % 3) * 2,
      duration: 5 + (i % 4) * 1.5,
      delay: (i % 5) * 0.8,
    })), []
  );

  // Stagger animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] },
    },
  };

  const pillars = [
    {
      icon: Compass,
      label: 'Misión',
      title: 'Transformar negocios con tecnología de precisión',
      paragraphs: [
        'Desarrollamos soluciones digitales que se integran con la esencia de cada negocio. No creamos software genérico — diseñamos sistemas que entienden tu industria, tus clientes y tu visión.',
        'Cada línea de código refleja nuestro compromiso con la excelencia técnica y el impacto real en los resultados de nuestros clientes.',
      ],
      attributes: [
        { title: 'Ingeniería de élite', desc: 'Arquitecturas robustas diseñadas para crecer con tu negocio.' },
        { title: 'Diseño centrado en el usuario', desc: 'Interfaces que conquistan clientes y simplifican procesos.' },
        { title: 'Compromiso con resultados', desc: 'Cada proyecto se mide por el impacto tangible que genera.' },
      ],
    },
    {
      icon: Telescope,
      label: 'Visión',
      title: 'Ser el referente digital del mercado peruano',
      paragraphs: [
        'Aspiramos a que cada empresa peruana tenga acceso a tecnología de clase mundial. Nuestra visión es construir un ecosistema donde la innovación digital impulse el crecimiento sostenible.',
        'No somos un proveedor más — somos el aliado tecnológico que camina contigo en cada etapa de tu evolución digital.',
      ],
      attributes: [
        { title: 'Innovación continua', desc: 'Adoptamos las tecnologías más avanzadas para mantenerte adelante.' },
        { title: 'Alianza a largo plazo', desc: 'Tu crecimiento es nuestro crecimiento. Estamos contigo siempre.' },
        { title: 'Impacto nacional', desc: 'Democratizamos la tecnología para impulsar al Perú al mundo digital.' },
      ],
    },
  ];

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="relative py-32 md:py-44 overflow-hidden bg-transparent"
    >
      {/* ── Decorative Background with Animations ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Parallax rotating gradient orb */}
        <motion.div
          style={{ y: backgroundY, rotate: orbRotate }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-gradient-to-br from-blue-50/60 via-indigo-50/30 to-transparent rounded-full blur-[120px]"
        />

        {/* Second orb — smaller, offset */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-2/3 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-blue-100/40 to-indigo-50/20 rounded-full blur-[100px]"
        />

        {/* Subtle vertical line accent */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-200/30 to-transparent" />

        {/* Floating particles */}
        {particles.map((p, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              x: [0, 8, 0],
              opacity: [0.15, 0.5, 0.15],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
            className="absolute rounded-full bg-blue-400/40"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
            }}
          />
        ))}

        {/* Animated grid pattern */}
        <motion.div
          animate={{ opacity: [0.02, 0.05, 0.02] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(#1E3A8A 1px, transparent 1px), linear-gradient(90deg, #1E3A8A 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* ── Section Header ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={containerVariants}
            className="text-center mb-24 md:mb-32"
          >
            {/* Badge with pulse */}
            <motion.div variants={scaleUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-200/60 bg-white/60 backdrop-blur-sm text-xs font-semibold text-[#1E3A8A] uppercase tracking-[0.2em]">
                <motion.span
                  animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-[#3B82F6] inline-block"
                />
                Nuestro Propósito
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6"
            >
              Construimos el futuro
              <br />
              <span className="text-gradient">digital del Perú.</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium"
            >
              Combinamos ingeniería de alto nivel con diseño de vanguardia
              para crear soluciones que transforman negocios.
            </motion.p>

            {/* Animated separator line */}
            <motion.div className="mt-10 mx-auto h-px max-w-xs overflow-hidden">
              <motion.div
                style={{ width: lineWidth }}
                className="h-full bg-gradient-to-r from-transparent via-blue-400 to-transparent"
              />
            </motion.div>
          </motion.div>

          {/* ── Pillar Panels ── */}
          <div className="space-y-20 md:space-y-32">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const isReversed = index % 2 !== 0;

              return (
                <motion.div
                  key={pillar.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-100px' }}
                  variants={containerVariants}
                  className={`grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start ${isReversed ? 'md:direction-rtl' : ''}`}
                >
                  {/* ── Left / Text Column ── */}
                  <div className={`md:col-span-7 ${isReversed ? 'md:order-2' : 'md:order-1'}`}>
                    {/* Icon with animated pulse ring */}
                    <motion.div
                      variants={isReversed ? slideInRight : slideInLeft}
                      className="flex items-center gap-4 mb-8"
                    >
                      <div className="relative">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] flex items-center justify-center shadow-lg shadow-blue-900/20">
                          <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                        </div>
                        {/* Pulse ring */}
                        <motion.div
                          animate={{
                            scale: [1, 1.8, 1],
                            opacity: [0.4, 0, 0.4],
                          }}
                          transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
                          className="absolute inset-0 rounded-2xl border-2 border-blue-400/40"
                        />
                        {/* Second pulse ring delayed */}
                        <motion.div
                          animate={{
                            scale: [1, 2.2, 1],
                            opacity: [0.2, 0, 0.2],
                          }}
                          transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
                          className="absolute inset-0 rounded-2xl border border-blue-300/30"
                        />
                      </div>
                      <div>
                        <span className="block text-[11px] font-bold text-blue-500 uppercase tracking-[0.25em] mb-0.5">
                          {pillar.label}
                        </span>
                        {/* Animated underline */}
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: 32 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                          className="h-px bg-blue-400/60"
                        />
                      </div>
                    </motion.div>

                    {/* Heading with letter spacing animation */}
                    <motion.h3
                      variants={isReversed ? slideInRight : slideInLeft}
                      className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6"
                    >
                      {pillar.title}
                    </motion.h3>

                    {/* Paragraphs with stagger */}
                    {pillar.paragraphs.map((p, i) => (
                      <motion.p
                        key={i}
                        variants={itemVariants}
                        className="text-slate-800 text-base leading-relaxed font-medium mb-4 last:mb-0"
                      >
                        {p}
                      </motion.p>
                    ))}

                    {/* Animated decorative line below text */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '40%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="h-px bg-gradient-to-r from-blue-300/60 to-transparent mt-8"
                    />
                  </div>

                  {/* ── Right / Attributes Column ── */}
                  <div className={`md:col-span-5 ${isReversed ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="space-y-4">
                      {pillar.attributes.map((attr, i) => (
                        <motion.div
                          key={i}
                          variants={isReversed ? slideInLeft : slideInRight}
                          whileHover={{
                            x: 8,
                            scale: 1.02,
                            transition: { duration: 0.3, ease: 'easeOut' },
                          }}
                          className="group relative p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-blue-100/50 shadow-sm hover:shadow-lg hover:shadow-blue-100/40 hover:border-blue-200/60 transition-all duration-500 cursor-default"
                        >
                          {/* Hover glow accent — animated height */}
                          <motion.div
                            className="absolute top-0 left-0 w-1 rounded-full bg-gradient-to-b from-[#1E3A8A] to-[#3B82F6]"
                            initial={{ height: 0, opacity: 0 }}
                            whileHover={{ height: '100%', opacity: 1 }}
                            transition={{ duration: 0.4 }}
                            style={{ height: '0%' }}
                          />
                          <div className="absolute top-0 left-0 w-1 h-full rounded-full bg-gradient-to-b from-[#1E3A8A] to-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                          {/* Subtle background shimmer on hover */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/40 group-hover:to-indigo-50/20 transition-all duration-700" />

                          <div className="flex items-start gap-3 relative z-10">
                            <motion.div
                              className="mt-1 shrink-0"
                              whileHover={{ x: 4 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ArrowRight className="w-4 h-4 text-blue-400 group-hover:text-[#1E3A8A] transition-colors duration-300" />
                            </motion.div>
                            <div>
                              <h4 className="text-sm font-bold text-slate-900 mb-1 tracking-tight">
                                {attr.title}
                              </h4>
                              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                                {attr.desc}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ── Bottom Values Strip ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={containerVariants}
            className="mt-28 md:mt-36"
          >
            <motion.div variants={scaleUp} className="text-center mb-16">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">
                Nuestros Pilares
              </span>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: 'Velocidad', desc: 'Entregamos en tiempo récord sin sacrificar la calidad del producto.' },
                { title: 'Seguridad', desc: 'Arquitecturas blindadas que protegen tus datos y los de tus clientes.' },
                { title: 'Diseño', desc: 'Interfaces premium que enamoran y convierten visitantes en clientes.' },
                { title: 'Escalabilidad', desc: 'Tu software evoluciona y crece junto con tu negocio.' },
              ].map((val, i) => (
                <motion.div
                  key={i}
                  variants={scaleUp}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                    transition: { duration: 0.4, ease: 'easeOut' },
                  }}
                  className="group relative text-center p-8 rounded-3xl bg-white/70 backdrop-blur-sm border border-blue-100/60 hover:border-blue-300/70 hover:bg-white hover:shadow-xl hover:shadow-blue-100/30 transition-all duration-500 overflow-hidden"
                >
                  {/* Background shimmer on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/50 group-hover:to-indigo-50/30 transition-all duration-700 rounded-3xl" />

                  {/* Number — visible gradient with scale animation */}
                  <motion.span
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 0.7 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                    className="block text-5xl md:text-6xl font-black mb-4 select-none leading-none relative z-10"
                    style={{
                      background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    0{i + 1}
                  </motion.span>

                  <h4 className="text-sm font-extrabold text-slate-900 tracking-tight mb-2 uppercase relative z-10">
                    {val.title}
                  </h4>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed relative z-10">
                    {val.desc}
                  </p>

                  {/* Bottom accent line that grows on hover */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/2 h-[2px] bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] transition-all duration-500 rounded-full" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
