import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const WhatsAppBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!message.trim()) return;
    const phone = "51943836076"; 
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 p-4 bg-[#25D366] text-white rounded-full apple-shadow-lg"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-4 md:right-8 z-50 w-[92vw] md:w-[340px] bg-white rounded-3xl overflow-hidden apple-shadow-lg border border-black/5"
          >
            {/* Header */}
            <div className="p-5 bg-[#25D366] text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">WariCode Asesor</h4>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span className="text-[11px] text-green-50 font-medium">En línea</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-white/80 hover:text-white p-1.5 hover:bg-white/10 rounded-full transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="p-6 bg-[#FAFAFC]">
              <div className="bg-white p-4 rounded-2xl rounded-tl-none apple-shadow max-w-[90%] mb-2">
                <p className="text-slate-700 text-sm leading-relaxed">
                  ¡Hola! 👋 Soy asesor de WariCode. ¿Te gustaría tener una web elegante o automatizar tu negocio?
                </p>
                <span className="text-[10px] text-slate-400 block mt-2 text-right font-medium">Ahora</span>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100">
              <div className="relative flex items-center gap-3">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 bg-slate-50 border border-slate-100 rounded-full py-3 px-5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#25D366]/30 transition-all"
                />
                <button
                  onClick={handleSend}
                  className="w-11 h-11 bg-[#25D366] text-white rounded-full flex items-center justify-center hover:bg-[#20bd5b] transition-all apple-shadow"
                >
                  <Send size={18} className="ml-1" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppBot;
