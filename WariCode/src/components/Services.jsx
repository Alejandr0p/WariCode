import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, ShoppingCart, Activity, PlusSquare, ChevronRight, X, CheckCircle2 } from 'lucide-react';

const services = [
  {
<<<<<<< HEAD
    title: "Clínicas y Consultorios",
    desc: "Sitios web elegantes para atraer más pacientes.",
    detail: "Diseñamos páginas web profesionales para clínicas, doctores y psicólogos. Incluye un sistema de reservas en línea fácil de usar y optimizado para celulares.",
    protocols: ["Sistema de Citas", "Perfil Profesional", "Integración WhatsApp"],
    price: "Consultar",
    label: "Salud",
    icon: <PlusSquare className="w-6 h-6" />,
    className: "md:col-span-2",
  },
  {
    title: "Gimnasios",
    desc: "Control total de socios y pagos.",
    detail: "Software de gestión para controlar membresías, asistencia y rutinas. Olvídate del papel y administra tu gym desde cualquier lugar.",
    protocols: ["Control de Pagos", "Asistencia QR", "App para Socios"],
    price: "Consultar",
    label: "Fitness",
    icon: <Activity className="w-5 h-5" />,
    className: "md:col-span-1",
  },
  {
    title: "Boticas",
    desc: "Ventas e inventario sin errores.",
    detail: "Controla tu stock de medicinas, caducidades y ventas diarias de forma rápida y sencilla. Cumple con los requerimientos necesarios sin complicaciones.",
    protocols: ["Control de Stock", "Alertas Vencimiento", "Caja Diaria"],
    price: "Consultar",
    label: "Farmacia",
=======
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
>>>>>>> ef9ca63ff6343cf57ff524e8aad3cc0d48617bdc
    icon: <Layout className="w-5 h-5" />,
    className: "md:col-span-1",
  },
  {
<<<<<<< HEAD
    title: "Tiendas Online",
    desc: "Vende tus productos por internet 24/7.",
    detail: "Tu propio catálogo digital con carrito de compras. Recibe pagos con tarjeta o Yape/Plin automáticamente y gestiona tus envíos fácilmente.",
    protocols: ["Catálogo Virtual", "Pasarela de Pagos", "Gestión de Envíos"],
    price: "Consultar",
    label: "E-Commerce",
=======
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
>>>>>>> ef9ca63ff6343cf57ff524e8aad3cc0d48617bdc
    icon: <ShoppingCart className="w-6 h-6" />,
    className: "md:col-span-2",
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="servicios" className="py-24 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl relative">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#3B82F6] font-semibold tracking-wider text-xs uppercase mb-4"
            >
              Nuestras Soluciones
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-[#0A2540]"
            >
<<<<<<< HEAD
              Tecnología a tu medida.
=======
              PÁGINAS WEB <br />
              <span className="text-gradient">QUE MARCAN LA DIFERENCIA.</span>
>>>>>>> ef9ca63ff6343cf57ff524e8aad3cc0d48617bdc
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="max-w-xl"
          >
<<<<<<< HEAD
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed border-l-2 border-[#E2E8F0] pl-6 py-1">
              Hacemos que lo complejo sea simple y fácil de usar.
=======
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
>>>>>>> ef9ca63ff6343cf57ff524e8aad3cc0d48617bdc
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedService(service)}
              className={`bg-white p-8 md:p-10 rounded-[2.5rem] group cursor-pointer transition-all duration-300 apple-shadow-lg hover:-translate-y-2 ${service.className}`}
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 rounded-2xl bg-[#F1F5F9] text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">{service.label}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 tracking-tight text-[#0A2540]">{service.title}</h3>
                <p className="text-slate-500 mb-8 leading-relaxed text-sm md:text-base">
                  {service.desc}
                </p>
                
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100">
                  <span className="text-sm font-medium text-[#3B82F6] group-hover:text-[#1E3A8A] transition-colors">Ver detalles</span>
                  <div className="w-8 h-8 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors">
                    <ChevronRight size={16} />
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
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[2.5rem] p-8 md:p-12 overflow-hidden apple-shadow-lg"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-500 hover:text-slate-800 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-[#F1F5F9] rounded-2xl text-[#1E3A8A]">
                    {selectedService.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#3B82F6] uppercase tracking-wider">{selectedService.label}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#0A2540] mt-1">{selectedService.title}</h3>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
<<<<<<< HEAD
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">¿En qué consiste?</h4>
                    <p className="text-base text-slate-600 leading-relaxed">
=======
                    <h4 className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] mb-4">Sobre este servicio</h4>
                    <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
>>>>>>> ef9ca63ff6343cf57ff524e8aad3cc0d48617bdc
                      {selectedService.detail}
                    </p>
                  </div>

                  <div>
<<<<<<< HEAD
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">¿Qué incluye?</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
=======
                    <h4 className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] mb-4">Lo que incluimos</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
>>>>>>> ef9ca63ff6343cf57ff524e8aad3cc0d48617bdc
                      {selectedService.protocols.map((protocol, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                          <CheckCircle2 size={18} className="text-[#3B82F6] flex-shrink-0" />
                          <span className="text-sm font-medium text-slate-700">{protocol}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 flex flex-col sm:flex-row justify-end items-center gap-4">
                    <button 
                      onClick={() => setSelectedService(null)}
                      className="w-full sm:w-auto px-8 py-3.5 bg-[#1E3A8A] text-white font-medium rounded-full text-sm hover:-translate-y-1 transition-transform apple-shadow"
                    >
<<<<<<< HEAD
                      Solicitar Cotización
=======
                      Pedir información
>>>>>>> ef9ca63ff6343cf57ff524e8aad3cc0d48617bdc
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
