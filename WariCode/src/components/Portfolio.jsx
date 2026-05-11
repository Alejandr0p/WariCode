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
  const scrollRef = React.useRef(null);
  const [isPaused, setIsPaused] = React.useState(false);

  // Triple the projects for infinite scroll
  const allProjects = [...projects, ...projects, ...projects];

  React.useEffect(() => {
    let animationFrame;
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Set initial position to middle set of projects
    const singleSetWidth = scrollContainer.scrollWidth / 3;
    if (scrollContainer.scrollLeft === 0) {
      scrollContainer.scrollLeft = singleSetWidth;
    }

    const autoScroll = () => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += 0.8; // Smooth slow scroll
        
        // Seamless loop jump
        if (scrollContainer.scrollLeft >= singleSetWidth * 2) {
          scrollContainer.scrollLeft = singleSetWidth;
        }
        if (scrollContainer.scrollLeft <= 0) {
          scrollContainer.scrollLeft = singleSetWidth;
        }
      }
      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

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
          Proyectos <span className="text-blue-500">Exitosos.</span>
        </motion.h2>
        
        <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
          Hemos trabajado en soluciones reales que ya están ayudando a miles de personas.
        </p>
      </div>

      <div className="relative w-full">
        {/* Navigation Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#FAFAFC] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#FAFAFC] to-transparent z-20 pointer-events-none" />
        
        <div 
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onMouseDown={() => setIsPaused(true)}
          className={`flex gap-8 pb-20 pt-10 overflow-x-auto scrollbar-hide select-none transition-all duration-300 ${isPaused ? 'opacity-100' : 'opacity-95'}`}
          style={{ scrollSnapType: 'x proximity' }}
        >
          {allProjects.map((project, index) => (
            <motion.a 
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-[300px] sm:w-[350px] md:w-[450px] flex-shrink-0 group/card scroll-snap-align-start"
            >
              <div className="h-full rounded-[3rem] bg-white border-2 border-white shadow-[0_20px_50px_-15px_rgba(148,163,184,0.15)] overflow-hidden transition-all duration-500 group-hover/card:shadow-blue-200/50 group-hover/card:border-blue-100">
                {/* Image Container */}
                <div className="h-56 md:h-64 relative overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 bg-slate-900/5 group-hover/card:bg-transparent transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110"
                  />
                  <div className="absolute top-6 left-6 px-4 py-2 rounded-2xl bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-blue-600 z-20 shadow-sm">
                    {project.type}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8 md:p-12 text-left pointer-events-none">
                  <h3 className="text-2xl md:text-3xl font-black text-[#0A2540] mb-3 group-hover/card:text-blue-600 transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 font-medium line-clamp-2">
                    {project.desc}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-blue-500 flex items-center gap-2 group-hover/card:gap-4 transition-all">
                      Ver Proyecto <ExternalLink size={16} />
                    </span>
                    <div className={`w-12 h-1.5 rounded-full bg-gradient-to-r ${project.color} opacity-80`} />
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
