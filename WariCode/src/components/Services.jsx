import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cloud, Heart, Dumbbell, ShoppingBag, Tablet, ArrowRight, Star, Sun, Globe, Cpu, Layout, Smartphone } from 'lucide-react';

const mainServices = [
  {
    title: "Landing Pages",
    subtitle: "Conversión de Impacto",
    desc: "Páginas de aterrizaje de alto rendimiento diseñadas específicamente para capturar prospectos y maximizar tus ventas.",
    detail: "Creamos páginas web enfocadas al 100% en la conversión de visitas en clientes. Ideales para campañas publicitarias (Google Ads, Facebook/Instagram Ads). Incluyen velocidad de carga ultra rápida, botones estratégicos de llamada a la acción y un diseño completamente responsivo.",
    includes: ["Diseño UI/UX de alta conversión", "Optimización de velocidad (Speed SEO)", "Formularios dinámicos y chat de WhatsApp"],
    icon: <Layout className="w-8 h-8 text-blue-400" />,
    color: "from-white/90 to-blue-50/50",
    delay: 0.1
  },
  {
    title: "Páginas de Presentación",
    subtitle: "Presencia Corporativa",
    desc: "Sitios institucionales elegantes que transmiten seriedad, confianza y el valor diferencial de tu marca.",
    detail: "La cara digital de tu negocio. Diseñamos sitios web completos con secciones bien estructuradas (Nosotros, Servicios, Catálogo, Portafolio, Contacto) que proyectan una imagen sólida y profesional ante tus clientes y socios estratégicos.",
    includes: ["Arquitectura de información clara", "Optimización SEO inicial de marca", "Formularios de contacto profesionales"],
    icon: <Globe className="w-8 h-8 text-blue-400" />,
    color: "from-white/90 to-blue-50/50",
    delay: 0.2
  },
  {
    title: "E-Commerce",
    subtitle: "Tienda Online 24/7",
    desc: "Plataformas de venta robustas con carrito de compras, catálogo inteligente y pagos directos.",
    detail: "Lleva tus ventas físicas a todo el país. Creamos tu tienda virtual a medida para que tus clientes exploren tus productos, los añadan al carrito y paguen de forma automatizada mediante pasarelas seguras (Yape, Plin, tarjetas de crédito y débito).",
    includes: ["Carrito y pasarelas de pago integradas", "Gestión sencilla de catálogo y stock", "Notificaciones de pedidos al instante"],
    icon: <ShoppingBag className="w-8 h-8 text-blue-400" />,
    color: "from-white/90 to-blue-50/50",
    delay: 0.3
  },
  {
    title: "Sistemas Web a Medida",
    subtitle: "Automatización Absoluta",
    desc: "Software personalizado a la medida de los procesos, operaciones y necesidades de tu negocio.",
    detail: "Desarrollamos soluciones digitales que resuelven retos específicos de tu negocio. Desde sistemas de control administrativo, gestión de inventarios, automatización de flujos internos, hasta plataformas personalizadas con bases de datos seguras y reportes analíticos.",
    includes: ["Bases de datos seguras y escalables", "Paneles de administración (Dashboards)", "Roles y permisos de usuario a medida"],
    icon: <Cpu className="w-8 h-8 text-blue-400" />,
    color: "from-white/90 to-blue-50/50",
    delay: 0.4
  }
];

const additionalServices = [
  {
    title: "Para Clínicas",
    subtitle: "Gestión de Citas",
    desc: "Tus pacientes agendan citas desde su móvil en segundos.",
    detail: "Un sistema inteligente que muestra tus horarios disponibles para reserva inmediata. Olvídate de la saturación telefónica y las agendas manuales.",
    includes: ["Calendario inteligente", "Recordatorios automáticos", "Ficha digital básica"],
    icon: <Heart className="w-6 h-6 text-blue-400" />,
    color: "from-white/90 to-blue-50/50",
    delay: 0.1
  },
  {
    title: "Para Gimnasios",
    subtitle: "Control de Membresías",
    desc: "Administra mensualidades, asistencia e ingresos fácilmente.",
    detail: "Lleva el control de membresías, vencimientos y asistencias diarias con reportes automáticos de ganancias desde cualquier dispositivo.",
    includes: ["Alertas de mensualidad", "Asistencia de socios", "Reporte financiero express"],
    icon: <Dumbbell className="w-6 h-6 text-blue-400" />,
    color: "from-white/90 to-blue-50/50",
    delay: 0.2
  },
  {
    title: "Para Farmacias",
    subtitle: "Inventario y Ventas",
    desc: "Control de stock inteligente y cierre de caja simplificado.",
    detail: "Facilitamos la venta rápida en el mostrador y te alertamos automáticamente cuando las medicinas o productos de mayor rotación se están agotando.",
    includes: ["Registro rápido de ventas", "Alertas de stock mínimo", "Reporte de caja diario"],
    icon: <Tablet className="w-6 h-6 text-blue-400" />,
    color: "from-white/90 to-blue-50/50",
    delay: 0.3
  },
  {
    title: "Restaurantes",
    subtitle: "Carta QR y Pedidos",
    desc: "Menú digital dinámico y pedidos fluidos directo a tu WhatsApp.",
    detail: "Tus comensales escanean un código QR, eligen sus platos de la carta digital y te envían el pedido listo por WhatsApp, acelerando la atención en el salón o delivery.",
    includes: ["Menú QR interactivo", "Envío de pedidos a WhatsApp", "Gestión visual de platos"],
    icon: <Star className="w-6 h-6 text-blue-400" />,
    color: "from-white/90 to-blue-50/50",
    delay: 0.4
  },
  {
    title: "Para Colegios",
    subtitle: "Aula e Información",
    desc: "Subida de notas, tareas y comunicados directos a los padres.",
    detail: "Una intranet ágil para mantener comunicada a toda tu comunidad educativa. Los padres podrán monitorear el progreso y avisos del colegio en tiempo real.",
    includes: ["Registro de notas en línea", "Envío de tareas digital", "Comunicados masivos seguros"],
    icon: <Cloud className="w-6 h-6 text-blue-400" />,
    color: "from-white/90 to-blue-50/50",
    delay: 0.5
  },
  {
    title: "Inmobiliarias",
    subtitle: "Vitrina de Propiedades",
    desc: "Muestra inmuebles con galerías HD y filtros de búsqueda.",
    detail: "Atrae a compradores e inquilinos con una plataforma elegante donde pueden filtrar propiedades por precio, ubicación, tamaño y contactarte en un clic.",
    includes: ["Galería de fotos de alta resolución", "Filtros por zona y tipo", "Contacto directo por inmueble"],
    icon: <Sun className="w-6 h-6 text-blue-400" />,
    color: "from-white/90 to-blue-50/50",
    delay: 0.6
  },
  {
    title: "Abogados y Contadores",
    subtitle: "Expedientes y Tareas",
    desc: "Organización blindada de expedientes, clientes y plazos.",
    detail: "Evita multas o demoras organizando todos tus documentos legales o contables de forma segura, con alarmas activas para plazos claves.",
    includes: ["Repositorio documental seguro", "Gestión de fechas críticas", "Base de datos de clientes"],
    icon: <Tablet className="w-6 h-6 text-blue-400" />,
    color: "from-white/90 to-blue-50/50",
    delay: 0.7
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
            Hacemos crecer <br /> <span className="text-blue-700">tu negocio.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-800 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Aplicamos el rigor de la ingeniería de la <span className="text-[#1E3A8A] font-bold">UNI</span> para desarrollar soluciones que simplifican procesos y potencian el crecimiento de todo tipo de industrias.
          </motion.p>
        </div>

        {/* 4 MAIN SERVICES (Friendly, balanced and slightly larger UI/UX) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-6 mb-24 w-full px-2">
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              {/* Card Container (Perfect size) */}
              <div 
                onClick={() => setSelected(service)}
                className="h-full cursor-pointer p-11 md:p-14 rounded-[3rem] bg-white/60 backdrop-blur-xl border border-blue-100/40 shadow-[0_20px_45px_-15px_rgba(30,58,138,0.05)] flex flex-col transition-all duration-500 hover:bg-white hover:shadow-blue-200/30 hover:-translate-y-2"
              >
                {/* Icon and Subtitle Bubble */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-blue-400/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 w-20 h-20 rounded-3xl bg-white shadow-lg shadow-blue-100/50 flex items-center justify-center text-blue-500 transition-all duration-500 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white">
                    {React.cloneElement(service.icon, { size: 32 })}
                  </div>
                </div>
                
                {/* Text Content */}
                <span className="text-[10px] font-black text-blue-500/60 uppercase tracking-[0.2em] mb-2 block">{service.subtitle}</span>
                <h3 className="text-2xl md:text-3xl font-black text-[#0A2540] mb-3 tracking-tight leading-tight">{service.title}</h3>
                <p className="text-slate-700 text-base leading-relaxed font-medium mb-6">
                  {service.desc}
                </p>
                
                {/* Action Link */}
                <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-black text-blue-600 group-hover:text-[#1E3A8A] transition-colors">
                  <span className="uppercase tracking-wider">Ver Más</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                </div>

                {/* Subtle Hover Glow Line at Bottom */}
                <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-blue-400 to-[#1E3A8A] rounded-full scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* SECTION HEADER FOR ADDITIONAL SECTOR-SPECIFIC SERVICES */}
        <div className="text-center mt-28 mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/50 border border-slate-200/50 shadow-sm mb-4"
          >
            <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">Soluciones Especializadas</span>
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-extrabold text-[#0A2540] tracking-tight mb-4"
          >
            Especialidades por Sector
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-slate-800 font-semibold text-sm md:text-base leading-relaxed"
          >
            Sistemas especializados diseñados para cubrir las necesidades operativas específicas de cada rubro.
          </motion.p>
        </div>

        {/* ADDITIONAL SECTOR-SPECIFIC SERVICES (Compact mention badges) */}
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto mb-12">
          {additionalServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group relative"
            >
              <div 
                onClick={() => setSelected(service)}
                className="group cursor-pointer flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/50 backdrop-blur-md border border-slate-200/60 shadow-sm transition-all duration-300 hover:bg-white hover:border-blue-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-blue-500 group-hover:text-blue-600 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <span className="text-base font-bold text-slate-800 group-hover:text-blue-900 transition-colors">
                  {service.title}
                </span>
                <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 opacity-0 group-hover:opacity-100 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300">
                  <ArrowRight size={10} />
                </div>
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
              
              <p className="text-slate-800 text-xl md:text-3xl font-semibold leading-relaxed max-w-3xl mb-16">
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
                    <h4 className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-3">¿Cómo te ayuda?</h4>
                    <p className="text-slate-800 leading-relaxed font-medium">
                      {selected.detail}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-4">Lo que incluimos</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selected.includes.map((item, i) => (
                        <div 
                          key={i} 
                          className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-slate-100 shadow-sm"
                        >
                          <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                            <Star size={10} fill="currentColor" />
                          </div>
                          <span className="text-[13px] font-bold text-slate-900">{item}</span>
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
