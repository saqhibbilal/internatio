import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.closest('.group')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Sharp Red Diamond */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-lipstick-red rotate-45 pointer-events-none z-[9999] mix-blend-exclusion"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 2 : 1,
          rotate: isHovering ? 135 : 45,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 35
        }}
      />
      {/* Outer Sharp Box */}
      <motion.div 
         className="fixed top-0 left-0 w-8 h-8 border border-white rotate-45 pointer-events-none z-[9998]"
         animate={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: isHovering ? 1.5 : 1,
            opacity: isHovering ? 0 : 0.5,
            rotate: 45
         }}
         transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            delay: 0.05
         }}
      />
    </>
  );
};

export default CustomCursor;