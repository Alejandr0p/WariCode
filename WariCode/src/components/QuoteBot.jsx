import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, MessageSquare, Send, X, CheckCircle2, Sparkles, ChevronRight } from 'lucide-react';

const QuoteBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState([]);
  
  const options = [
    {
      question: "¿Qué tipo de arquitectura buscas?",
      choices: [
        { label: "Ecosistema E-commerce", price: 2500 },
        { label: "Sistemas Web Master", price: 1200 },
        { label: "Interfaces de Alta Gama", price: 600 },
        { label: "Integración de IA", price: 800 }
      ]
    },
    {
      question: "¿Escala del proyecto?",
      choices: [
        { label: "Protocolo Inicial (MVP)", factor: 1 },
        { label: "Protocolo Business", factor: 1.5 },
        { label: "Protocolo Enterprise", factor: 2.5 }
      ]
    }
  ];

  const handleChoice = (choice) => {
    setSelections([...selections, choice]);
    setStep(step + 1);
  };

  const calculateTotal = () => {
    if (selections.length < 2) return 0;
    return selections[0].price * selections[1].factor;
  };

  const reset = () => {
    setStep(0);
    setSelections([]);
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-white text-raven-950 rounded-2xl shadow-2xl border border-white/20 group overflow-hidden"
      >
        <Bot className="w-6 h-6 relative z-10" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            className="fixed bottom-24 right-6 z-50 w-72 md:w-[280px] zen-card rounded-2xl overflow-hidden border border-white/10"
          >
            {/* Header */}
            <div className="p-3 bg-white/[0.02] flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-cyber-blue/10 flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-cyber-blue" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold tracking-tight">WARI AI</h4>
                  <p className="text-[7px] text-white/20 font-bold tracking-[0.1em] uppercase">Sincronizador</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors">
                <X className="w-3 h-3 text-white/20" />
              </button>
            </div>

            {/* Chat Content */}
            <div className="p-4 min-h-[240px] flex flex-col justify-end">
              <AnimatePresence mode="wait">
                {step < options.length ? (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    <p className="text-sm font-medium text-white/90 leading-tight">
                      {options[step].question}
                    </p>

                    <div className="grid grid-cols-1 gap-2">
                      {options[step].choices.map((choice, i) => (
                        <motion.button
                          key={i}
                          whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.03)' }}
                          onClick={() => handleChoice(choice)}
                          className="w-full text-left p-3 text-[11px] bg-white/[0.01] rounded-xl border border-white/5 transition-all group flex items-center justify-between"
                        >
                          <span className="font-medium text-white/50 group-hover:text-white">{choice.label}</span>
                          <ChevronRight size={10} className="opacity-20 group-hover:opacity-100 transition-opacity text-cyber-blue" />
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6 py-4"
                  >
                    <div className="w-12 h-12 bg-cyber-blue/10 rounded-xl flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6 text-cyber-blue" />
                    </div>
                    <div>
                      <p className="text-[8px] text-white/20 uppercase tracking-[0.3em] font-bold mb-2">Inversión Estimada</p>
                      <h3 className="text-3xl font-black font-heading tracking-tighter text-white">S/ {calculateTotal()}</h3>
                    </div>
                    <div className="space-y-2">
                      <button className="w-full py-3 bg-white text-raven-950 font-bold rounded-xl text-[9px] uppercase tracking-widest hover:scale-[1.02] transition-all">
                        INICIAR
                      </button>
                      <button 
                        onClick={reset}
                        className="text-[8px] text-white/20 hover:text-white font-bold tracking-[0.2em] uppercase transition-colors"
                      >
                        Reiniciar
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default QuoteBot;
