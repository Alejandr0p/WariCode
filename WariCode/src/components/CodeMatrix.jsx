import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const BackgroundRain = () => {
  const canvasRef = useRef(null); // Lluvia

  // --- MOTOR 2D LLUVIA TRANSPARENTE LENTA ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const dropImg = document.createElement('canvas');
    dropImg.width = 64;
    dropImg.height = 64;
    const dropCtx = dropImg.getContext('2d');
    const cx = 32, cy = 32, cr = 26;
    
    // Sombra pequeñísima
    dropCtx.beginPath();
    dropCtx.arc(cx, cy + cr * 0.1, cr * 0.9, 0, Math.PI * 2);
    dropCtx.fillStyle = 'rgba(10, 30, 80, 0.15)'; 
    dropCtx.fill();

    // Cuerpo cristalino
    dropCtx.beginPath();
    dropCtx.arc(cx, cy, cr, 0, Math.PI * 2);
    const grad = dropCtx.createLinearGradient(cx - cr, cy - cr, cx + cr, cy + cr);
    grad.addColorStop(0, 'rgba(255, 255, 255, 0.9)'); 
    grad.addColorStop(0.4, 'rgba(255, 255, 255, 0.0)'); 
    grad.addColorStop(0.7, 'rgba(165, 180, 252, 0.1)'); 
    grad.addColorStop(1, 'rgba(255, 255, 255, 0.8)'); 
    dropCtx.fillStyle = grad;
    dropCtx.fill();

    // Brillo intenso del cristal
    dropCtx.beginPath();
    dropCtx.arc(cx - cr * 0.35, cy - cr * 0.35, cr * 0.25, 0, Math.PI * 2);
    dropCtx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    dropCtx.fill();

    const drops = [];
    const trailDrops = [];
    const maxDrops = window.innerWidth > 768 ? 40 : 20;

    const init = () => {
      // El canvas ahora tiene el tamaño del contenedor del vidrio
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width;
      canvas.height = height;
      drops.length = 0;
      trailDrops.length = 0;

      const numStatic = Math.floor((width * height) / 3000);
      for(let i = 0; i < numStatic; i++) {
        trailDrops.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 3 + 0.5,
          life: 1 
        });
      }

      for(let i = 0; i < maxDrops; i++) {
        drops.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 4 + 2,
          speedY: 0,
          isSliding: false
        });
      }
    };

    window.addEventListener('resize', init);
    // Necesitamos un pequeño timeout para asegurar que el elemento padre ya tiene tamaño en pantalla
    setTimeout(init, 10);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = trailDrops.length - 1; i >= 0; i--) {
        const t = trailDrops[i];
        ctx.globalAlpha = t.life;
        ctx.drawImage(dropImg, t.x - t.r, t.y - t.r, t.r * 2, t.r * 2);
        
        if (t.life < 1) {
          t.life -= 0.002;
          if (t.life <= 0) {
            trailDrops.splice(i, 1);
          }
        }
      }
      ctx.globalAlpha = 1;

      drops.forEach(drop => {
        if (!drop.isSliding) {
          drop.r += 0.01;
          if (drop.r > 6 + Math.random() * 2) {
            drop.isSliding = true;
            drop.speedY = Math.random() * 0.5 + 0.5; // Muy lento
          }
        } else {
          drop.y += drop.speedY;
          drop.speedY += 0.02; // Gravedad bajísima
          if (drop.speedY > 3.5) drop.speedY = 3.5; 
          
          drop.x += (Math.random() - 0.5) * 1.0;

          if (Math.random() > 0.5) {
            drop.r -= 0.04;
            trailDrops.push({
              x: drop.x + (Math.random() - 0.5) * 1.5,
              y: drop.y - drop.r,
              r: drop.r * (Math.random() * 0.4 + 0.3),
              life: 0.8 
            });
          }

          if (drop.r <= 2 || drop.y > height + 50) {
            drop.x = Math.random() * width;
            drop.y = Math.random() * -100; 
            drop.r = Math.random() * 4 + 2;
            drop.speedY = 0;
            drop.isSliding = false;
          }
        }

        ctx.drawImage(dropImg, drop.x - drop.r, drop.y - drop.r, drop.r * 2, drop.r * 2);
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#FAFAFC]">
      <style>
        {`
          @keyframes floatClouds {
            0% { transform: scale(1.1) translateX(0) translateY(0); }
            50% { transform: scale(1.3) translateX(-3%) translateY(1%); }
            100% { transform: scale(1.1) translateX(0) translateY(0); }
          }
          .animate-clouds {
            animation: floatClouds 40s ease-in-out infinite;
          }
        `}
      </style>

      {/* Fondo de nubes reales esponjosas con animación 3D de paneo lento */}
      <img 
        src="https://images.unsplash.com/photo-1499346030926-9a72daac6c63?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
        alt="Real Fluffy Clouds"
        className="absolute inset-0 w-full h-full object-cover animate-clouds"
      />
      
      {/* Simulación física de un Vidrio Real, completamente claro (SIN difuminado) */}
      <div className="absolute inset-3 md:inset-6 lg:inset-8 border-2 border-white/40 shadow-[0_0_20px_rgba(0,0,0,0.1),inset_0_0_60px_rgba(255,255,255,0.4)] rounded-3xl overflow-hidden">
        
        {/* Reflejo diagonal de la luz en el cristal */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-80" />
        
        {/* Lienzo donde cae la lluvia */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      </div>

    </div>
  );
};

export default BackgroundRain;
