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
    icon: <Heart className="w-8 h-8 text-blue-400" />,
    color: "from-white/90 to-blue-50/50",
    delay: 0.1
  },
  {
    title: "Para Gimnasios",
    subtitle: "Control total",
    desc: "Olvida el papel. Controla quién entra, quién pagó y mira tus ganancias desde donde estés.",
    detail: "Administra tu gimnasio con total tranquilidad. Sabrás exactamente quién tiene la mensualidad al día y recibirás reportes de cuánto estás ganando mes a mes.",
    includes: ["Control de mensualidades", "Registro de asistencia", "Reportes de ventas"],
    icon: <Dumbbell className="w-8 h-8 text-blue-400" />,
    color: "from-white/90 to-blue-50/50",
    delay: 0.2
  },
  {
    title: "Para Farmacias",
    subtitle: "Ventas rápidas",
    desc: "No pierdas la cuenta de tus medicinas. Un sistema fácil que te avisa qué falta.",
    detail: "Llevar el inventario de una botica puede ser difícil, pero con nuestro sistema es súper sencillo. Te avisamos cuando un producto se está agotando.",
    includes: ["Inventario automático", "Alerta de poco stock", "Cierre de caja fácil"],
    icon: <Tablet className="w-8 h-8 text-blue-400" />,
    color: "from-white/90 to-blue-50/50",
    delay: 0.3
  },
  {
    title: "Tiendas Online",
    subtitle: "Vende 24/7",
    desc: "Muestra tus productos a todo el mundo y recibe pagos por Yape automáticamente.",
    detail: "Llevamos tu negocio al mundo digital. Tus clientes podrán ver tu catálogo, elegir sus productos favoritos y pagarte al instante de forma segura.",
    includes: ["Catálogo de productos", "Pagos con Yape/Plin/Tarjeta", "Carrito de compras"],
    icon: <ShoppingBag className="w-8 h-8 text-blue-400" />,
    color: "from-white/90 to-blue-50/50",
    delay: 0.4
  },
  {
    title: "Restaurantes",
    subtitle: "Pedidos al toque",
    desc: "Menú digital con QR y recepción de pedidos directamente a tu WhatsApp.",
    detail: "Tus clientes escanean el código, eligen sus platos favoritos y te envían el pedido listo por WhatsApp. ¡Agiliza tu atención y evita errores!",
    includes: ["Carta digital con QR", "Pedidos por WhatsApp", "Gestión de mesas"],
    icon: <Star className="w-8 h-8 text-blue-400" />,
    color: "from-white/90 to-blue-50/50",
    delay: 0.5
  },
  {
    title: "Para Colegios",
    subtitle: "Aula Digital",
    desc: "Plataforma para subir notas, tareas y comunicados para los padres.",
    detail: "Moderniza tu institución educativa con un portal donde los padres ven el progreso de sus hijos y reciben noticias importantes al instante.",
    includes: ["Registro de notas", "Envío de tareas", "Avisos a padres"],
    icon: <Cloud className="w-8 h-8 text-blue-400" />,
    color: "from-white/90 to-blue-50/50",
    delay: 0.6
  },
  {
    title: "Inmobiliarias",
    subtitle: "Vende más rápido",
    desc: "Muestra tus departamentos y casas con galerías de fotos impresionantes.",
    detail: "Crea una vitrina digital de alto impacto para tus propiedades. Tus clientes podrán filtrar por precio, zona y contactarte en un clic.",
    includes: ["Galería de fotos HD", "Filtros de búsqueda", "Formulario de contacto"],
    icon: <Sun className="w-8 h-8 text-blue-400" />,
    color: "from-white/90 to-blue-50/50",
    delay: 0.7
  },
  {
    title: "Abogados y Cont.",
    subtitle: "Orden Total",
    desc: "Sistema para organizar expedientes, clientes y plazos importantes.",
    detail: "Mantén el control de todos tus casos y documentos legales o contables de forma segura y organizada. Nunca más pierdas una fecha importante.",
    includes: ["Gestión de documentos", "Alertas de plazos", "Base de datos de clientes"],
    icon: <Tablet className="w-8 h-8 text-blue-400" />,
    color: "from-white/90 to-blue-50/50",
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
            className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Aplicamos el rigor de la ingeniería de la <span className="text-[#1E3A8A] font-bold">UNI</span> para desarrollar soluciones que simplifican procesos y potencian el crecimiento de todo tipo de industrias.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: service.delay, duration: 0.6 }}
              className="group relative"
            >
              {/* Card Container */}
              <div 
                onClick={() => setSelected(service)}
                className="h-full cursor-pointer p-8 md:p-10 rounded-[3rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_20px_50px_-15px_rgba(148,163,184,0.1)] flex flex-col items-center text-center transition-all duration-500 hover:bg-white/80 hover:shadow-blue-200/40 hover:-translate-y-3"
              >
                {/* Icon in Glass Bubble */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-blue-400/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 w-20 h-20 rounded-[2rem] bg-white shadow-xl shadow-blue-100/50 flex items-center justify-center text-blue-500 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                    {React.cloneElement(service.icon, { size: 32 })}
                  </div>
                </div>
                
                {/* Text Content */}
                <span className="text-[10px] font-black text-blue-500/60 uppercase tracking-[0.3em] mb-2">{service.subtitle}</span>
                <h3 className="text-2xl font-black text-[#0A2540] mb-4 tracking-tighter leading-tight">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium mb-8">
                  {service.desc}
                </p>
                
                {/* Action Link */}
                <div className="mt-auto flex items-center gap-2 text-xs font-black text-blue-600 opacity-60 group-hover:opacity-100 group-hover:gap-4 transition-all duration-500">
                  EXPLORAR <ArrowRight size={16} />
                </div>

                {/* Subtle Hover Glow Line at Bottom */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full transition-all duration-500 group-hover:w-1/2" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 relative min-h-[500px] flex items-center justify-center overflow-hidden"
        >
          {/* Interactive Particle Field */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
                  y: [Math.random() * 100 - 50, Math.random() * 100 - 50],
                  scale: [1, 1.5, 1],
                  opacity: [0.1, 0.4, 0.1],
                }}
                transition={{ 
                  duration: 10 + Math.random() * 10, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute w-2 h-2 bg-blue-400 rounded-full blur-[2px]"
                style={{ 
                  left: `${Math.random() * 100}%`, 
                  top: `${Math.random() * 100}%` 
                }}
              />
            ))}
          </div>

          {/* Transparent Frame */}
          <div className="relative z-10 w-full max-w-6xl p-12 md:p-24 rounded-[5rem] border border-white/20 backdrop-blur-[2px] group overflow-hidden">
            
            {/* Animated Edge Glow */}
            <motion.div 
              animate={{ 
                rotate: 360,
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-1 border-2 border-transparent bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 [mask-image:linear-gradient(white,white)] pointer-events-none"
            />

            <div className="relative z-20 flex flex-col items-center text-center">
              <motion.span
                initial={{ letterSpacing: "0.2em", opacity: 0 }}
                whileInView={{ letterSpacing: "0.5em", opacity: 1 }}
                className="text-[10px] font-black text-blue-500 uppercase mb-8 block"
              >
                Trascendiendo el Código
              </motion.span>

              <h3 className="text-5xl md:text-8xl font-black text-[#0A2540] mb-10 tracking-tighter leading-tight">
                ¿Tu idea está <br />
                <span className="relative inline-block">
                  preparada?
                  <motion.div 
                    animate={{ scaleX: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute bottom-2 left-0 w-full h-3 bg-blue-500/20 -z-10 origin-left"
                  />
                </span>
              </h3>
              
              <p className="text-slate-600/70 text-xl md:text-3xl font-medium leading-relaxed max-w-3xl mb-16">
                Desbloqueamos el potencial infinito de tu negocio con tecnología que respira.
              </p>

              <div className="flex flex-wrap justify-center gap-8">
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative px-16 py-8 bg-transparent border-2 border-blue-600 text-blue-600 font-black rounded-full hover:bg-blue-600 hover:text-white transition-all duration-500 flex items-center gap-4 overflow-hidden"
                >
                  <span className="text-lg uppercase tracking-widest">Hacerlo Realidad</span>
                  <ArrowRight size={24} className="group-hover/btn:translate-x-2 transition-transform" />
                  
                  {/* Neon Glow Hover */}
                  <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity -z-10 shadow-[0_0_50px_rgba(37,99,235,0.8)]" />
                </a>
              </div>
            </div>
          </div>

          {/* Ambient Lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-400/5 blur-[150px] -z-10" />
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
