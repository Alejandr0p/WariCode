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
<<<<<<< HEAD
            <span className="text-xs md:text-sm font-semibold tracking-wider text-[#1E3A8A] uppercase bg-white px-5 py-2 rounded-full apple-shadow border border-[#E2E8F0]">
              Impulsa tu negocio digital
            </span>
=======
            <div className="h-[1px] w-12 bg-cyber-blue/40" />
            <span className="text-[10px] font-mono font-bold tracking-[1em] text-cyber-blue uppercase">WariCode.Bienvenido()</span>
            <div className="h-[1px] w-12 bg-cyber-blue/40" />
>>>>>>> ef9ca63ff6343cf57ff524e8aad3cc0d48617bdc
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
<<<<<<< HEAD
=======
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-8 md:mb-12 px-4">
              <span className="text-white/20 text-[10px] font-mono hidden md:block">0x001_A</span>
              <p className="text-white/40 text-sm md:text-xl font-light uppercase tracking-[0.3em] md:tracking-[0.5em] border-l-2 md:border-l border-cyber-blue/30 pl-4 md:pl-6 text-center md:text-left">
                Creamos tu <span className="text-white font-bold">Presencia Digital</span> <br className="md:hidden" /> de Alto Impacto
              </p>
            </div>

>>>>>>> ef9ca63ff6343cf57ff524e8aad3cc0d48617bdc
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-[#1E3A8A] text-white font-medium rounded-2xl text-sm transition-all apple-shadow flex items-center justify-center gap-2"
            >
<<<<<<< HEAD
              Empezar ahora <ArrowRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#0A2540] hover:bg-slate-50 font-medium rounded-2xl border border-slate-200 text-sm transition-all apple-shadow"
            >
              Ver Proyectos
=======
              <span className="relative z-10">[ EMPEZAR PROYECTO ]</span>
              <motion.div 
                className="absolute inset-0 bg-cyber-blue translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              />
>>>>>>> ef9ca63ff6343cf57ff524e8aad3cc0d48617bdc
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
