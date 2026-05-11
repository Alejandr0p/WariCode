import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cloud, Heart, Dumbbell, ShoppingBag, Tablet, ArrowRight, Star, Sun } from 'lucide-react';

const services = [
  {
    title: "Para Clínicas",
    subtitle: "Citas sin estrés",
    desc: "Tu propia página donde tus pacientes pueden agendar sus citas fácilmente desde su celular.",
    detail: "Creamos un sistema donde tus pacientes ven tus horarios disponibles y reservan en segundos. Te llega una notificación y listo, ¡olvídate de las llamadas interminables!",
    includes: ["Calendario inteligente", "Recordatorios por WhatsApp", "Ficha digital de pacientes"],
    icon: <Heart className="w-8 h-8 text-rose-400" />,
    color: "from-rose-50/80 to-pink-50/80",
    delay: 0.1
  },
  {
    title: "Para Gimnasios",
    subtitle: "Control total",
    desc: "Olvida el papel. Controla quién entra, quién pagó y mira tus ganancias desde donde estés.",
    detail: "Administra tu gimnasio con total tranquilidad. Sabrás exactamente quién tiene la mensualidad al día y recibirás reportes de cuánto estás ganando mes a mes.",
    includes: ["Control de mensualidades", "Registro de asistencia", "Reportes de ventas"],
    icon: <Dumbbell className="w-8 h-8 text-blue-400" />,
    color: "from-blue-50/80 to-indigo-50/80",
    delay: 0.2
  },
  {
    title: "Para Farmacias",
    subtitle: "Ventas rápidas",
    desc: "No pierdas la cuenta de tus medicinas. Un sistema fácil que te avisa qué falta.",
    detail: "Llevar el inventario de una botica puede ser difícil, pero con nuestro sistema es súper sencillo. Te avisamos cuando un producto se está agotando.",
    includes: ["Inventario automático", "Alerta de poco stock", "Cierre de caja fácil"],
    icon: <Tablet className="w-8 h-8 text-emerald-400" />,
    color: "from-emerald-50/80 to-teal-50/80",
    delay: 0.3
  },
  {
    title: "Tiendas Online",
    subtitle: "Vende 24/7",
    desc: "Muestra tus productos a todo el mundo y recibe pagos por Yape automáticamente.",
    detail: "Llevamos tu negocio al mundo digital. Tus clientes podrán ver tu catálogo, elegir sus productos favoritos y pagarte al instante de forma segura.",
    includes: ["Catálogo de productos", "Pagos con Yape/Plin/Tarjeta", "Carrito de compras"],
    icon: <ShoppingBag className="w-8 h-8 text-amber-400" />,
    color: "from-amber-50/80 to-orange-50/80",
    delay: 0.4
  },
  {
    title: "Restaurantes",
    subtitle: "Pedidos al toque",
    desc: "Menú digital con QR y recepción de pedidos directamente a tu WhatsApp.",
    detail: "Tus clientes escanean el código, eligen sus platos favoritos y te envían el pedido listo por WhatsApp. ¡Agiliza tu atención y evita errores!",
    includes: ["Carta digital con QR", "Pedidos por WhatsApp", "Gestión de mesas"],
    icon: <Star className="w-8 h-8 text-orange-400" />,
    color: "from-orange-50/80 to-red-50/80",
    delay: 0.5
  },
  {
    title: "Para Colegios",
    subtitle: "Aula Digital",
    desc: "Plataforma para subir notas, tareas y comunicados para los padres.",
    detail: "Moderniza tu institución educativa con un portal donde los padres ven el progreso de sus hijos y reciben noticias importantes al instante.",
    includes: ["Registro de notas", "Envío de tareas", "Avisos a padres"],
    icon: <Cloud className="w-8 h-8 text-sky-400" />,
    color: "from-sky-50/80 to-cyan-50/80",
    delay: 0.6
  },
  {
    title: "Inmobiliarias",
    subtitle: "Vende más rápido",
    desc: "Muestra tus departamentos y casas con galerías de fotos impresionantes.",
    detail: "Crea una vitrina digital de alto impacto para tus propiedades. Tus clientes podrán filtrar por precio, zona y contactarte en un clic.",
    includes: ["Galería de fotos HD", "Filtros de búsqueda", "Formulario de contacto"],
    icon: <Sun className="w-8 h-8 text-yellow-400" />,
    color: "from-yellow-50/80 to-amber-50/80",
    delay: 0.7
  },
  {
    title: "Abogados y Cont.",
    subtitle: "Orden Total",
    desc: "Sistema para organizar expedientes, clientes y plazos importantes.",
    detail: "Mantén el control de todos tus casos y documentos legales o contables de forma segura y organizada. Nunca más pierdas una fecha importante.",
    includes: ["Gestión de documentos", "Alertas de plazos", "Base de datos de clientes"],
    icon: <Tablet className="w-8 h-8 text-indigo-400" />,
    color: "from-indigo-50/80 to-violet-50/80",
    delay: 0.8
  }
];

const Services = () => {
  const [selected, setSelected] = useState(null);
  const WHATSAPP_URL = "https://wa.me/51943836076?text=Estimados%20equipo%20de%20WariCode.%20Me%20pongo%20en%20contacto%20con%20ustedes%20para%20solicitar%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20desarrollo%20de%20software.";

  const handleContact = (serviceTitle = "") => {
    const text = serviceTitle 
      ? `Estimados, me pongo en contacto para solicitar informaci%C3%B3n detallada sobre el servicio de: "${serviceTitle}". Me interesa implementar esta soluci%C3%B3n en mi negocio. Gracias de antemano.`
      : "Estimados equipo de WariCode. Me pongo en contacto con ustedes para solicitar informaci%C3%B3n sobre sus servicios de desarrollo de software y soluciones digitales.";
    window.open(`https://wa.me/51943836076?text=${text}`, '_blank');
    setSelected(null);
  };

  return (
    <section id="servicios" className="py-32 relative bg-transparent overflow-hidden">
      {/* Animated Floating Clouds in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ x: [-100, 100], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 opacity-20"
        >
          <Cloud size={120} className="text-blue-200" />
        </motion.div>
        <motion.div 
          animate={{ x: [200, -200], y: [0, 30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 right-20 opacity-20"
        >
          <Cloud size={180} className="text-white" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-lg mb-8"
          >
            <Sun className="w-4 h-4 text-amber-500 animate-spin-slow" />
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Lo que hacemos por ti</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-[#0A2540] mb-8"
          >
            Hacemos crecer <br /> <span className="text-blue-500">tu negocio.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Soluciones simples y bonitas para que te olvides de la tecnología y te concentres en lo que más te gusta.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: service.delay,
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -15,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className={`h-full p-10 rounded-[3rem] bg-gradient-to-br ${service.color} backdrop-blur-xl border-4 border-white shadow-2xl shadow-blue-200/50 flex flex-col items-center text-center transition-all duration-300 group-hover:shadow-blue-300/60`}>
                <div className="mb-8 p-6 rounded-full bg-white shadow-inner flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                  {service.icon}
                </div>
                
                <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em] mb-2">{service.subtitle}</span>
                <h3 className="text-2xl font-bold text-[#0A2540] mb-6">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm mb-8">
                  {service.desc}
                </p>
                
                <button 
                  onClick={() => setSelected(service)}
                  className="mt-auto flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:gap-4 transition-all"
                >
                  Saber más <ArrowRight size={18} />
                </button>
              </div>

              {/* Decorative Sparkle */}
              <motion.div 
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                className="absolute -top-2 -right-2 text-amber-400"
              >
                <Star size={20} fill="currentColor" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 p-12 rounded-[4rem] bg-white border-4 border-blue-50 shadow-2xl shadow-blue-100/50 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden group"
        >
          <div className="relative z-10 text-center lg:text-left">
            <h3 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4 tracking-tight">¿Tienes otra idea en mente?</h3>
            <p className="text-slate-500 text-lg">Cuéntanos qué necesitas y lo haremos realidad para ti.</p>
          </div>
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 px-10 py-5 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 hover:scale-105 transition-all flex items-center gap-3 shadow-xl shadow-blue-200"
          >
            ¡Hablemos por WhatsApp! <ArrowRight size={20} />
          </a>
          
          {/* Background circles */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-50 rounded-full group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-rose-50 rounded-full group-hover:scale-110 transition-transform duration-700" />
        </motion.div>
      </div>

      {/* Modal de Detalles Rediseñado (Más Compacto) */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-[#0A2540]/60 backdrop-blur-xl"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl bg-white/95 backdrop-blur-md rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden border border-white max-h-[90vh] overflow-y-auto"
            >
              {/* Botón Cerrar */}
              <button 
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 p-3 bg-slate-100 hover:bg-rose-50 hover:text-rose-500 rounded-full transition-all z-20"
              >
                <Star size={16} className="fill-current" />
              </button>

              <div className="flex flex-col">
                {/* Cabecera Compacta */}
                <div className={`p-8 md:p-10 bg-gradient-to-br ${selected.color} flex items-center gap-6 border-b border-white/50`}>
                  <div className="p-5 rounded-3xl bg-white shadow-xl text-blue-500 shrink-0">
                    {selected.icon}
                  </div>
                  <div className="text-left">
                    <span className="text-[9px] font-black text-blue-600/60 uppercase tracking-[0.3em] mb-1 block">{selected.subtitle}</span>
                    <h3 className="text-2xl md:text-3xl font-black text-[#0A2540] leading-tight uppercase tracking-tighter">
                      {selected.title}
                    </h3>
                  </div>
                </div>

                {/* Contenido Optimizado */}
                <div className="p-8 md:p-10 bg-white/50 space-y-8">
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">¿Cómo te ayuda?</h4>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      {selected.detail}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Lo que incluimos</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selected.includes.map((item, i) => (
                        <div 
                          key={i} 
                          className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-slate-100 shadow-sm"
                        >
                          <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                            <Star size={10} fill="currentColor" />
                          </div>
                          <span className="text-[13px] font-bold text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => handleContact(selected.title)}
                    className="w-full py-5 bg-[#0A2540] text-white font-black rounded-2xl hover:bg-blue-600 transition-all shadow-xl shadow-blue-900/20 uppercase text-xs tracking-widest flex items-center justify-center gap-3"
                  >
                    ¡Quiero empezar ya! <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Services;
