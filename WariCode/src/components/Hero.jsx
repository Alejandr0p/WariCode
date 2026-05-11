import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const WHATSAPP_URL = "https://wa.me/51943836076?text=Buen%20d%C3%ADa%20equipo%20de%20WariCode.%20Deseo%20agendar%20una%20reuni%C3%B3n%20de%20consultor%C3%ADa%20para%20evaluar%20la%20digitalizaci%C3%B3n%20y%20automatizaci%C3%B3n%20de%20procesos%20en%20mi%20empresa.";

  return (
    <section id="inicio" className="relative min-h-[90vh] md:h-screen w-full flex items-center justify-center overflow-hidden bg-transparent pt-32 pb-20 md:pt-20 md:pb-0">
      {/* Very soft background glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-[#E0E7FF]/50 rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 z-10 relative flex flex-col items-center justify-center h-full">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 md:mb-8 flex items-center justify-center"
          >
            <span className="text-[10px] md:text-xs font-bold tracking-widest text-[#1E3A8A] uppercase bg-white px-4 py-2 rounded-full apple-shadow border border-[#E2E8F0]">
              Impulsa tu negocio digital
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-6 tracking-tight text-[#0A2540]"
          >
            Sistemas Web que <br className="hidden md:block" />
            <span className="text-gradient">Generan Ventas.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base md:text-xl max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed px-4 md:px-0"
          >
            Diseño premium y funcionalidad perfecta para cualquier escala. Creamos sistemas a la medida, <span className="font-bold text-[#1E3A8A]">intuitivos, elegantes y 100% seguros.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-6 sm:px-0"
          >
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-5 bg-[#1E3A8A] text-white font-bold rounded-2xl text-sm transition-all apple-shadow flex items-center justify-center gap-2"
            >
              Empezar ahora <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#portafolio"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-5 bg-white text-[#0A2540] hover:bg-slate-50 font-bold rounded-2xl border border-slate-200 text-sm transition-all apple-shadow"
            >
              Ver Proyectos
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
