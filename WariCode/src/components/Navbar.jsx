import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Menu, X, Rocket } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full z-[100] px-4 py-4 pointer-events-none flex justify-center">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          scrolled 
            ? 'w-[680px] bg-black/80 backdrop-blur-2xl border border-white/10 py-3 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
            : 'w-full max-w-6xl bg-transparent py-4 rounded-none'
        } flex items-center justify-between px-10`}
      >
        <a href="#inicio" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue shadow-[0_0_10px_#10B981] group-hover:scale-125 transition-transform" />
          <span className="text-lg font-black tracking-tighter text-white">
            WariCode<span className="text-cyber-blue">.</span>
          </span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'Misión', id: 'protocolos' },
            { name: 'Servicios', id: 'servicios' },
            { name: 'Nosotros', id: 'nosotros' },
            { name: 'Contacto', id: 'contacto' }
          ].map((item) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all"
            >
              {item.name}
            </a>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: '#10B981', color: '#000' }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-white/[0.03] border border-white/10 text-white font-bold rounded-full text-[8px] uppercase tracking-widest transition-all"
          >
            Contacto
          </motion.button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="md:hidden absolute top-24 left-4 right-4 glass rounded-3xl p-8 pointer-events-auto"
          >
            <div className="flex flex-col gap-6 text-center">
              {[
                { name: 'Inicio', id: 'inicio' },
                { name: 'Misión', id: 'protocolos' },
                { name: 'Servicios', id: 'servicios' },
                { name: 'Nosotros', id: 'nosotros' },
                { name: 'Contacto', id: 'contacto' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  className="text-2xl font-heading font-bold text-white hover:text-cyber-blue"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full mt-4 bg-cyber-blue text-white px-5 py-4 rounded-2xl font-bold flex items-center justify-center gap-2">
                <Rocket size={20} />
                Empezar Proyecto
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
