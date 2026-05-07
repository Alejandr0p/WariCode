import React, { useEffect, useRef } from 'react';

const CodeMatrix = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const characters = '01WARICODE<>[]{}/\\|!@#$%^&*()_+=-';
    const columns = Math.floor(canvas.width / 20);
    const drops = new Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#10B981';
      ctx.font = '15px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      // Ripple effects
      particles.current.forEach((p, index) => {
        ctx.fillStyle = `rgba(16, 185, 129, ${p.alpha})`;
        ctx.fillText(p.char, p.x, p.y);
        p.y += p.speed;
        p.alpha -= 0.01;
        if (p.alpha <= 0) particles.current.splice(index, 1);
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleClick = (e) => {
      for (let i = 0; i < 20; i++) {
        particles.current.push({
          x: e.clientX + (Math.random() - 0.5) * 100,
          y: e.clientY + (Math.random() - 0.5) * 100,
          char: characters.charAt(Math.floor(Math.random() * characters.length)),
          alpha: 1,
          speed: Math.random() * 2 + 1
        });
      }
    };

    window.addEventListener('mousedown', handleClick);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousedown', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 opacity-40 pointer-events-none"
    />
  );
};

export default CodeMatrix;
