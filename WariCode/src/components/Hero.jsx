import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-transparent pt-20">
      {/* Very soft background glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-[#E0E7FF]/50 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 z-10 relative flex flex-col items-center justify-center h-full">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex items-center justify-center"
          >
            <span className="text-xs md:text-sm font-semibold tracking-wider text-[#1E3A8A] uppercase bg-white px-5 py-2 rounded-full apple-shadow border border-[#E2E8F0]">
              Impulsa tu negocio digital
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6 tracking-tight text-[#0A2540]"
          >
            Sistemas Web que <br className="hidden md:block" />
            <span className="text-gradient">Generan Ventas.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed"
          >
            Diseño premium y funcionalidad perfecta para cualquier escala. Ya seas un pequeño emprendimiento o una gran empresa, nuestro equipo de <span className="font-bold text-[#1E3A8A]">desarrolladores de software de la UNI</span> crea sistemas a la medida, intuitivos, elegantes y 100% seguros.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-[#1E3A8A] text-white font-medium rounded-2xl text-sm transition-all apple-shadow flex items-center justify-center gap-2"
            >
              Empezar ahora <ArrowRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#0A2540] hover:bg-slate-50 font-medium rounded-2xl border border-slate-200 text-sm transition-all apple-shadow"
            >
              Ver Proyectos
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
