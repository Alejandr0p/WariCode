import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, X, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";

// Configuración de Gemini segura mediante variables de entorno
const apiKey = import.meta.env.VITE_GEMINI_KEY;
const genAI = new GoogleGenerativeAI(apiKey || "");
const model = genAI.getGenerativeModel({ 
  model: "gemini-flash-latest",
  systemInstruction: "Eres WARI AI, el asistente virtual de 'WariCode'. Tu tono es: Amigable, Profesional, Claro y Ayudador. Tus capacidades: Explicar de forma sencilla los servicios de WariCode (Tiendas Online, Páginas Web, Diseño de Lujo, Inteligencia Artificial), dar consejos útiles para negocios y guiar a nuevos clientes que no saben nada de programación. Contexto: WariCode crea herramientas digitales que ayudan a los negocios a crecer. Responde de forma concisa y evita tecnicismos innecesarios."
});

const QuoteBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: '¡Hola! Bienvenido a WariCode. Soy WARI AI, tu asistente personal. ¿Tienes alguna idea en mente para tu negocio? Estoy aquí para ayudarte a hacerla realidad.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue;
    const newMessages = [...messages, { role: 'user', text: userText }];
    setMessages(newMessages);
    setInputValue('');
    setIsLoading(true);

    try {
      // Configurar el historial para Gemini (omitiendo el saludo inicial de la IA)
      const history = messages.slice(1).map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }],
      }));

      const chat = model.startChat({ history });
      const result = await chat.sendMessage(userText);
      const response = await result.response;
      const text = response.text();

      setMessages(prev => [...prev, { role: 'ai', text: text }]);
    } catch (error) {
      console.error("WARI_AI_ERROR:", error);
      const errorMsg = "Lo siento, hubo un error al conectar. Por favor intenta de nuevo.";
      setMessages(prev => [...prev, { role: 'ai', text: `UPS: ${errorMsg}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 p-3.5 bg-white text-black rounded-2xl shadow-xl border border-white/20"
      >
        {isOpen ? <X size={20} /> : <Bot size={20} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 right-4 md:right-6 z-50 w-[92vw] md:w-[320px] h-[480px] bg-[#050505] rounded-2xl overflow-hidden border border-white/10 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-4 bg-white/[0.02] flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyber-blue/10 flex items-center justify-center border border-cyber-blue/20">
                  <Sparkles size={16} className="text-cyber-blue" />
                </div>
                <div>
                  <h4 className="text-[11px] font-black text-white uppercase tracking-tighter">WARI_ASISTENTE</h4>
                  <div className="flex items-center gap-1">
                    <div className="w-1 h-1 rounded-full bg-cyber-blue animate-pulse" />
                    <span className="text-[7px] text-cyber-blue font-bold uppercase tracking-widest">En línea</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-white/60 hover:text-white p-1.5 hover:bg-white/10 rounded-lg transition-all"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-xl text-[11px] leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-cyber-blue text-black font-bold rounded-tr-none' 
                      : 'bg-white/[0.05] text-white/90 border border-white/5 rounded-tl-none backdrop-blur-md'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/[0.03] p-3 rounded-xl border border-white/5 flex items-center gap-2">
                    <Loader2 size={12} className="animate-spin text-cyber-blue" />
                    <span className="text-[8px] text-white/20 font-bold uppercase">Procesando...</span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/5 bg-black">
              <div className="relative flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Escribe tu pregunta aquí..."
                  className="flex-1 bg-white/[0.03] border border-white/10 rounded-xl py-2.5 px-4 text-[11px] text-white focus:outline-none focus:border-cyber-blue/30 transition-all"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading}
                  className="w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center hover:bg-cyber-blue transition-all disabled:opacity-50"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default QuoteBot;
