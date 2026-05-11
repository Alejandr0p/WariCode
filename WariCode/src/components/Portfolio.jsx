import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "SanarCare",
    type: "Clínica Médica",
    desc: "Plataforma de salud con reservas integradas.",
    image: "https://images.unsplash.com/photo-1576091160550-2173ff9e5c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "GymPower",
    type: "Software Fitness",
    desc: "Control de socios y pagos recurrentes.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "FarmaExpress",
    type: "Inventario Inteligente",
    desc: "Gestión de boticas en la nube.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "EcoStore",
    type: "E-Commerce",
    desc: "Tienda online rápida y moderna.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  }
];

const Portfolio = () => {
  // Duplicamos el array para el efecto infinito
  const allProjects = [...projects, ...projects, ...projects];

  return (
    <section id="portafolio" className="py-24 relative bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center relative">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#3B82F6] font-semibold tracking-wider text-xs uppercase mb-4"
          >
            Casos de Éxito
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-[#0A2540] mb-6"
          >
            Proyectos Destacados
          </motion.h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Descubre cómo hemos ayudado a empresas a automatizar sus procesos y aumentar sus ventas con software de calidad.
          </p>
        </div>
      </div>

      <div className="relative w-full pause-on-hover px-4">
        {/* Gradientes laterales para suavizar el efecto de entrada/salida */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#FAFAFC] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#FAFAFC] to-transparent z-10 pointer-events-none" />
        
        <div className="animate-scroll-infinite flex gap-6 pb-10 pt-4">
          {allProjects.map((project, index) => (
            <div 
              key={index}
              className="group relative w-[300px] md:w-[340px] flex-shrink-0 rounded-[2rem] overflow-hidden bg-white apple-shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="h-44 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 relative z-20 bg-white">
                <span className="text-[#3B82F6] text-[10px] font-bold uppercase tracking-wider block mb-1">
                  {project.type}
                </span>
                <h3 className="text-xl font-bold text-[#0A2540] mb-2 group-hover:text-[#1E3A8A] transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>
                
                <button className="flex items-center gap-1.5 text-sm font-semibold text-[#0A2540] group-hover:text-[#3B82F6] transition-colors">
                  Ver detalle <ExternalLink size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
