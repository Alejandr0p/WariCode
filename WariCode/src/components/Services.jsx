import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, ShoppingCart, Database, Bot, Zap, Shield, ChevronRight, X, CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: "Páginas Web y Sistemas",
    desc: "Sitios rápidos, seguros y fáciles de usar.",
    detail: "Desarrollamos plataformas que crecen con tu negocio. Desde sitios web profesionales hasta sistemas internos personalizados, todo diseñado para funcionar perfectamente.",
    protocols: ["Diseño Moderno", "Carga Rápida", "Seguridad Total"],
    price: "S/ 2,500+",
    label: "Premium",
    icon: <Database className="w-6 h-6" />,
    className: "md:col-span-2",
  },
  {
    title: "Diseño de Lujo",
    desc: "Páginas hermosas que atraen clientes.",
    detail: "Creamos experiencias visuales que enamoran a tus visitantes. Nos enfocamos en que tu marca se vea profesional y que sea muy fácil para tus clientes comprar o contactarte.",
    protocols: ["Imagen Profesional", "Fácil de Usar", "Adaptable a Móviles"],
    price: "S/ 1,200+",
    label: "Estratégica",
    icon: <Layout className="w-5 h-5" />,
    className: "md:col-span-1",
  },
  {
    title: "Inteligencia Artificial",
    desc: "Automatiza tareas con IA.",
    detail: "Ayudamos a que tu empresa sea más eficiente usando las últimas herramientas de IA. Automatizamos respuestas, organizamos datos y te ayudamos a ahorrar tiempo valioso.",
    protocols: ["Chatbots Inteligentes", "Tareas Automáticas", "Análisis de Datos"],
    price: "S/ 1,800+",
    label: "Tecnológica",
    icon: <Bot className="w-5 h-5" />,
    className: "md:col-span-1",
  },
  {
    title: "Tiendas Online",
    desc: "Vende tus productos en todo el mundo.",
    detail: "Construimos tu tienda virtual lista para recibir pagos. Optimizamos todo el proceso de compra para que tus clientes tengan una experiencia fluida y segura.",
    protocols: ["Pagos con Tarjeta", "Gestión de Pedidos", "Carrito de Compras"],
    price: "S/ 3,500+",
    label: "Negocio",
    icon: <ShoppingCart className="w-6 h-6" />,
    className: "md:col-span-2",
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="servicios" className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-8">
          <div className="max-w-2xl relative">
            <div className="absolute -left-10 md:-left-20 top-0 text-[8rem] md:text-[20rem] font-black text-white/[0.02] pointer-events-none select-none tracking-tighter">
              CODE
            </div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-cyber-blue font-bold tracking-[0.3em] md:tracking-[0.5em] text-[8px] md:text-[10px] uppercase mb-4 md:mb-6"
            >
              Nuestra Expertise
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-8xl font-black font-heading tracking-tighter leading-[0.9] mb-6 md:mb-8"
            >
              PÁGINAS WEB <br />
              <span className="text-gradient">QUE MARCAN LA DIFERENCIA.</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="max-w-xl"
          >
            <p className="text-white/70 text-lg md:text-3xl font-light leading-snug mb-4 md:mb-8 border-l-2 md:border-l-4 border-cyber-blue pl-6 md:pl-12 py-1 md:py-2">
              No creamos simples páginas. <br />
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-white font-bold"
              >
                Creamos herramientas potentes
              </motion.span> que ayudan a que tu negocio crezca sin límites.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedService(service)}
              className={`zen-card p-6 rounded-2xl group transition-all hover:border-white/20 cursor-pointer relative overflow-hidden ${service.className}`}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-cyber-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-cyber-blue opacity-30 group-hover:opacity-100 transition-opacity">
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-[7px] font-bold uppercase tracking-widest text-white/10 mb-0.5">{service.label}</div>
                    <div className="text-lg font-black text-white">{service.price}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 tracking-tight group-hover:text-cyber-blue transition-colors">{service.title}</h3>
                <p className="text-white/20 mb-6 leading-relaxed text-xs font-light">
                  {service.desc}
                </p>
                
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-[8px] font-bold uppercase tracking-widest text-white/5">Click para detalles</span>
                  <div className="w-6 h-6 rounded-full border border-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ChevronRight size={12} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal de Detalles */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-raven-950 border border-white/10 rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-2xl"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-blue/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
              
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-3 bg-white/5 hover:bg-white/10 rounded-2xl text-white/40 hover:text-white transition-all"
              >
                <X size={20} />
              </button>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-cyber-blue/10 rounded-2xl text-cyber-blue">
                    {selectedService.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-cyber-blue uppercase tracking-[0.3em]">{selectedService.label}</span>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">{selectedService.title}</h3>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] mb-4">Sobre este servicio</h4>
                    <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
                      {selectedService.detail}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] mb-4">Lo que incluimos</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedService.protocols.map((protocol, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                          <CheckCircle2 size={16} className="text-cyber-blue" />
                          <span className="text-sm font-medium text-white/80">{protocol}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                      <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] block mb-1">Inversión Estimada</span>
                      <span className="text-3xl font-black text-white">{selectedService.price}</span>
                    </div>
                    <button 
                      onClick={() => setSelectedService(null)}
                      className="w-full md:w-auto px-10 py-5 bg-cyber-blue text-black font-black rounded-2xl text-[10px] uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-[0_20px_40px_rgba(16,185,129,0.2)]"
                    >
                      Pedir información
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
