import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "IndexUNI",
    type: "Plataforma Educativa",
    desc: "El punto de encuentro para estudiantes de la UNI con recursos y foros.",
    url: "https://indexuni.site",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    color: "from-blue-400 to-indigo-500"
  },
  {
    title: "EstacionU",
    type: "Portal Universitario",
    desc: "Todo lo que necesitas para tu vida universitaria en un solo lugar.",
    url: "https://estacionu.com",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    color: "from-purple-400 to-pink-500"
  },
  {
    title: "Salud Mental",
    type: "Consultorio Digital",
    desc: "Plataforma profesional para la Dra. Rodríguez con agendamiento.",
    url: "https://neuropsicologarodriguez.com",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    color: "from-emerald-400 to-teal-500"
  },
  {
    title: "Bodega JIVA",
    type: "E-Commerce Local",
    desc: "Minimarket digital con sistema de pedidos y delivery en tiempo real.",
    url: "https://bodegajiva.onrender.com",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    color: "from-amber-400 to-orange-500"
  }
];

const Portfolio = () => {
  // Duplicamos para el efecto de scroll infinito
  const allProjects = [...projects, ...projects, ...projects];

  return (
    <section id="portafolio" className="py-32 relative bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 mb-20 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-md border border-white/60 text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-6 shadow-sm"
        >
          Portafolio Real
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-[#0A2540] mb-8"
        >
          Proyectos que <span className="text-blue-500">cobran vida.</span>
        </motion.h2>
        
        <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Hemos trabajado en soluciones reales que ya están ayudando a miles de personas.
        </p>
      </div>

      <div className="relative w-full group">
        {/* Fade effects on the sides */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-[#FAFAFC] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-[#FAFAFC] to-transparent z-10 pointer-events-none" />
        
        <div className="animate-scroll-infinite flex gap-4 md:gap-8 pb-10 md:pb-20 pt-6 md:pt-10">
          {allProjects.map((project, index) => (
            <motion.a 
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              whileHover={{ y: -15 }}
              className="relative w-[280px] sm:w-[320px] md:w-[400px] flex-shrink-0 group/card cursor-pointer"
            >
              <div className="h-full rounded-[2.5rem] md:rounded-[3.5rem] bg-white border-2 md:border-4 border-white shadow-xl md:shadow-2xl shadow-blue-100/40 overflow-hidden transition-all duration-500 group-hover/card:shadow-blue-200/60">
                {/* Image Container */}
                <div className="h-48 md:h-56 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover/card:bg-transparent transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  {/* Badge */}
                  <div className={`absolute top-4 left-4 md:top-6 md:left-6 px-3 py-1.5 md:px-4 md:py-2 rounded-xl md:rounded-2xl bg-white/90 backdrop-blur-md text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#0A2540] z-20`}>
                    {project.type}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 md:p-10 text-left">
                  <h3 className="text-xl md:text-3xl font-bold text-[#0A2540] mb-2 md:mb-3 group-hover/card:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-xs md:text-base leading-relaxed mb-6 md:mb-8 line-clamp-2 md:line-clamp-none">
                    {project.desc}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] md:text-xs font-bold text-blue-500 flex items-center gap-2 group-hover/card:translate-x-1 md:group-hover/card:translate-x-2 transition-transform">
                      Visitar sitio <ExternalLink size={12} />
                    </span>
                    <div className={`w-10 md:w-12 h-1 md:h-1.5 rounded-full bg-gradient-to-r ${project.color}`} />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
