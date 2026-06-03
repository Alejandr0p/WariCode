import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target;
      // Comprobar si el elemento es interactivo
      const isClickable = target.closest('a') || target.closest('button') || window.getComputedStyle(target).cursor === 'pointer';
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const smoothX = useSpring(mousePosition.x, { damping: 25, stiffness: 250, mass: 0.1 });
  const smoothY = useSpring(mousePosition.y, { damping: 25, stiffness: 250, mass: 0.1 });

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[10000] mix-blend-difference hidden md:block"
      style={{
        x: smoothX,
        y: smoothY,
        width: isHovering ? 64 : 12,
        height: isHovering ? 64 : 12,
        marginLeft: isHovering ? -32 : -6,
        marginTop: isHovering ? -32 : -6,
        backgroundColor: '#ffffff',
      }}
      animate={{
        scale: isHovering ? 1.2 : 1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    />
  );
};

export default CustomCursor;
