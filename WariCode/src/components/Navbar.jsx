import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const WHATSAPP_URL = "https://wa.me/51943836076?text=Saludos%20equipo%20de%20WariCode.%20He%20revisado%20su%20plataforma%20y%20estoy%20interesado%20en%20solicitar%20una%20consultor%C3%ADa%20profesional%20para%20un%20nuevo%20proyecto%20digital.%20Quedo%20atento%20a%20su%20respuesta.";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full z-[100] px-4 py-4 pointer-events-none flex justify-center">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          scrolled 
            ? 'w-full md:w-[700px] bg-white/70 backdrop-blur-2xl border border-black/5 py-3 md:rounded-full apple-shadow' 
            : 'w-full max-w-6xl bg-transparent py-4 rounded-none'
        } flex items-center justify-between px-6 md:px-8`}
      >
        <a href="#inicio" className="flex items-center gap-2 group cursor-pointer">
          <span className="text-xl font-bold tracking-tight text-slate-900">
            WariCode<span className="text-[#3B82F6]">.</span>
          </span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          {[

            { name: 'Nosotros', id: 'nosotros' },
            { name: 'Servicios', id: 'servicios' },
            { name: 'Portafolio', id: 'portafolio' },
          ].map((item) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              className="text-[16px] font-semibold text-slate-900 hover:text-[#3B82F6] transition-colors"
            >
              {item.name}
            </a>
          ))}
          <motion.a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-5 py-2 bg-[#1E3A8A] text-white font-medium rounded-full text-[16px] transition-all apple-shadow"
          >
            Contáctanos
          </motion.a>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-900 p-2"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="md:hidden absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl border border-black/5 rounded-3xl p-8 pointer-events-auto apple-shadow-lg"
          >
            <div className="flex flex-col gap-6 text-center">
              {[
                { name: 'Inicio', id: 'inicio' },

                { name: 'Nosotros', id: 'nosotros' },
                { name: 'Servicios', id: 'servicios' },
                { name: 'Portafolio', id: 'portafolio' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  className="text-xl font-bold text-slate-900 hover:text-[#3B82F6] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-4 bg-[#1E3A8A] text-white px-5 py-4 rounded-2xl font-medium flex items-center justify-center gap-2 apple-shadow"
              >
                Empezar Proyecto <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
