import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ScrambleLetter = ({ finalChar, delay }) => {
  const [currentChar, setCurrentChar] = useState("");
  const chars = "!<>-_\\/[]{}—=+*^?#________";
  
  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setCurrentChar(chars[Math.floor(Math.random() * chars.length)]);
      iteration++;
      
      if (iteration > 10 + delay * 10) {
        setCurrentChar(finalChar);
        clearInterval(interval);
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, [finalChar, delay]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ 
        color: "#10B981",
        scale: 1.1,
        textShadow: "0 0 20px rgba(16, 185, 129, 0.5)"
      }}
      className="inline-block"
    >
      {currentChar}
    </motion.span>
  );
};

const Hero = () => {
  const title = "WariCode";

  return (
    <section id="inicio" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-transparent">
      {/* Background Grid Pattern (Software feel) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #10B981 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Background Central Aura */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[60%] h-[60%] bg-cyber-blue/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 z-10 relative flex flex-col items-center justify-center h-full">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-12 flex items-center justify-center gap-4"
          >
            <div className="h-[1px] w-12 bg-cyber-blue/40" />
            <span className="text-[10px] font-mono font-bold tracking-[1em] text-cyber-blue uppercase">System.Initialize()</span>
            <div className="h-[1px] w-12 bg-cyber-blue/40" />
          </motion.div>
          
          <h1 className="text-[18vw] md:text-[12rem] font-black leading-none mb-8 md:mb-12 font-mono tracking-tighter text-white select-none flex items-center justify-center">
            {title.split('').map((char, i) => (
              <ScrambleLetter key={i} finalChar={char} delay={i} />
            ))}
            <motion.span 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-cyber-blue ml-1 md:ml-2"
            >
              _
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col items-center w-full"
          >
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-8 md:mb-12 px-4">
              <span className="text-white/20 text-[10px] font-mono hidden md:block">0x001_A</span>
              <p className="text-white/40 text-sm md:text-xl font-light uppercase tracking-[0.3em] md:tracking-[0.5em] border-l-2 md:border-l border-cyber-blue/30 pl-4 md:pl-6 text-center md:text-left">
                Ingeniería de <span className="text-white font-bold">Software</span> <br className="md:hidden" /> de Alto Nivel
              </p>
            </div>

            <motion.button
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "#10B981", 
                color: "#000",
                boxShadow: "0 0 30px rgba(16, 185, 129, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 border border-cyber-blue/30 text-cyber-blue font-mono text-[11px] uppercase tracking-[0.5em] transition-all relative overflow-hidden group"
            >
              <span className="relative z-10">[ EXECUTE_DEPLOY ]</span>
              <motion.div 
                className="absolute inset-0 bg-cyber-blue translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Binary Stream (Software feel) */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col gap-2 text-[8px] font-mono text-white/5 uppercase">
          {[...Array(10)].map((_, i) => (
            <div key={i}>{Math.random().toString(2).slice(2, 10)}</div>
          ))}
        </div>
      </div>

      {/* Decorative Symmetry Elements */}
      <div className="absolute inset-x-20 top-20 border-t border-white/5" />
      <div className="absolute inset-x-20 bottom-20 border-b border-white/5" />
    </section>
  );
};

export default Hero;
