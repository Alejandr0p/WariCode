import React from 'react';
import { motion } from 'framer-motion';
import { Layout, ShoppingCart, Database, Bot, Zap, Shield, ChevronRight } from 'lucide-react';

const services = [
  {
    title: "Arquitectura Digital",
    desc: "Sistemas robustos de precisión matemática.",
    price: "S/ 2,500+",
    label: "Premium",
    icon: <Database className="w-6 h-6" />,
    className: "md:col-span-2",
  },
  {
    title: "Interfaces Gama Alta",
    desc: "Diseño zen que prioriza conversión.",
    price: "S/ 1,200+",
    label: "Estratégica",
    icon: <Layout className="w-5 h-5" />,
    className: "md:col-span-1",
  },
  {
    title: "Inteligencia Aplicada",
    desc: "Automatización mediante IA.",
    price: "S/ 1,800+",
    label: "Tecnológica",
    icon: <Bot className="w-5 h-5" />,
    className: "md:col-span-1",
  },
  {
    title: "E-commerce Fluid",
    desc: "Plataformas de alto rendimiento.",
    price: "S/ 3,500+",
    label: "Negocio",
    icon: <ShoppingCart className="w-6 h-6" />,
    className: "md:col-span-2",
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-8">
          <div className="max-w-2xl relative">
            <div className="absolute -left-10 md:-left-20 top-0 text-[8rem] md:text-[20rem] font-black text-white/[0.02] pointer-events-none select-none tracking-tighter">
              CODE
            </div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-cyber-blue font-bold tracking-[0.3em] md:tracking-[0.5em] text-[8px] md:text-[10px] uppercase mb-4 md:mb-6"
            >
              Nuestra Expertise
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-8xl font-black font-heading tracking-tighter leading-[0.9] mb-6 md:mb-8"
            >
              INGENIERÍA <br />
              <span className="text-gradient">ALTO IMPACTO.</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="max-w-xl"
          >
            <p className="text-white/70 text-lg md:text-3xl font-light leading-snug mb-4 md:mb-8 border-l-2 md:border-l-4 border-cyber-blue pl-6 md:pl-12 py-1 md:py-2">
              No creamos software común. <br />
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-white font-bold"
              >
                Esculpimos herramientas digitales
              </motion.span> que definen el futuro de las industrias.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`zen-card p-6 rounded-2xl group transition-all hover:border-white/20 ${service.className}`}
            >
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-cyber-blue opacity-30 group-hover:opacity-100 transition-opacity">
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-[7px] font-bold uppercase tracking-widest text-white/10 mb-0.5">{service.label}</div>
                    <div className="text-lg font-black text-white">{service.price}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 tracking-tight">{service.title}</h3>
                <p className="text-white/20 mb-6 leading-relaxed text-xs font-light">
                  {service.desc}
                </p>
                
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-[8px] font-bold uppercase tracking-widest text-white/5">Protocolo v1.0</span>
                  <div className="w-6 h-6 rounded-full border border-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-raven-950 transition-all">
                    <ChevronRight size={12} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
