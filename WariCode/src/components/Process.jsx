import React from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, Palette, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <MessageCircle className="w-7 h-7" />,
    title: 'Consulta Gratuita',
    desc: 'Nos reunimos contigo (presencial o virtual) para entender tu negocio, tus metas y el problema que quieres resolver. Sin compromiso.',
    accent: 'from-blue-500 to-indigo-600',
    light: 'bg-blue-50',
    border: 'border-blue-100',
    tag: 'Día 1',
  },
  {
    number: '02',
    icon: <Palette className="w-7 h-7" />,
    title: 'Diseño & Propuesta',
    desc: 'Entregamos una propuesta detallada con prototipos de diseño, alcance técnico, tiempos y costos. Tú apruebas antes de empezar.',
    accent: 'from-violet-500 to-purple-600',
    light: 'bg-violet-50',
    border: 'border-violet-100',
    tag: 'Día 3–5',
  },
  {
    number: '03',
    icon: <Code2 className="w-7 h-7" />,
    title: 'Desarrollo Ágil',
    desc: 'Sprints cortos con actualizaciones constantes. Ves el avance de tu proyecto en tiempo real y puedes dar feedback en cada etapa.',
    accent: 'from-sky-500 to-blue-600',
    light: 'bg-sky-50',
    border: 'border-sky-100',
    tag: 'Semanas 2–6',
  },
  {
    number: '04',
    icon: <Rocket className="w-7 h-7" />,
    title: 'Entrega & Soporte',
    desc: 'Lanzamos tu proyecto y te acompañamos en los primeros meses. No desaparecemos: somos tu equipo de tecnología a largo plazo.',
    accent: 'from-emerald-500 to-teal-600',
    light: 'bg-emerald-50',
    border: 'border-emerald-100',
    tag: 'Ongoing',
  },
];

const StepCard = ({ step, index }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative group"
    >
      {/* Connector line (desktop) — hidden for last item */}
      {index < steps.length - 1 && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: index * 0.12 + 0.5, ease: 'easeOut' }}
          className="hidden lg:block absolute top-12 left-[calc(100%_-_8px)] w-full h-[2px] bg-gradient-to-r from-slate-200 to-slate-100 origin-left z-0"
          style={{ width: 'calc(100% - 60px)' }}
        />
      )}

      {/* Card */}
      <div
        className={`relative z-10 h-full rounded-3xl border ${step.border} bg-white/80 backdrop-blur-md p-8 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-blue-100/40 group-hover:bg-white`}
      >
        {/* Tag */}
        <div className="flex items-center justify-between mb-6">
          <span
            className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-gradient-to-r ${step.accent} text-white`}
          >
            {step.tag}
          </span>
          <span className="text-5xl font-black text-slate-100 group-hover:text-blue-50 transition-colors select-none">
            {step.number}
          </span>
        </div>

        {/* Icon */}
        <div
          className={`w-14 h-14 rounded-2xl ${step.light} flex items-center justify-center mb-5 bg-gradient-to-br ${step.accent} text-white shadow-lg transition-transform duration-500 group-hover:scale-110`}
        >
          {step.icon}
        </div>

        {/* Text */}
        <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight">{step.title}</h3>
        <p className="text-sm text-slate-500 font-medium leading-relaxed">{step.desc}</p>

        {/* Hover glow line bottom */}
        <div
          className={`absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r ${step.accent} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
        />
      </div>
    </motion.div>
  );
};

const Process = () => {
  return (
    <section id="proceso" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/40 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-blue-100 shadow-md mb-6"
          >
            <motion.span
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-blue-500 inline-block"
            />
            <span className="text-xs font-black text-[#1E3A8A] uppercase tracking-widest">
              Cómo Trabajamos
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-5 leading-tight"
          >
            De la idea al{' '}
            <span className="text-gradient">lanzamiento.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg font-medium leading-relaxed"
          >
            Un proceso claro y transparente en 4 etapas. Siempre sabrás en qué punto está tu proyecto.
          </motion.p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        >
          <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
            <span className="text-2xl">🕐</span>
            <div className="text-left">
              <p className="text-xs font-black text-slate-900 uppercase tracking-wider">Primera reunión</p>
              <p className="text-xs text-slate-500 font-medium">Gratis y sin compromiso</p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
            <span className="text-2xl">📋</span>
            <div className="text-left">
              <p className="text-xs font-black text-slate-900 uppercase tracking-wider">Propuesta en 48h</p>
              <p className="text-xs text-slate-500 font-medium">Detallada y transparente</p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
            <span className="text-2xl">🤝</span>
            <div className="text-left">
              <p className="text-xs font-black text-slate-900 uppercase tracking-wider">Soporte continuo</p>
              <p className="text-xs text-slate-500 font-medium">Post-lanzamiento incluido</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
