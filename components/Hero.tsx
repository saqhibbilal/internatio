import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-milan-black flex items-center justify-center">
      {/* Video Background - High contrast silhouette style */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover contrast-100 brightness-150"
        >
          {/* Local background video file from assets folder */}
          <source src="/assets/75550-556034413_small.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Sharp dark overlay instead of gradient */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center px-4 w-full mix-blend-screen">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <h1 className="font-sharp text-[18vw] leading-[0.7] tracking-tighter text-white select-none">
            MILANO
          </h1>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6, type: "spring", bounce: 0.5 }}
            className="absolute top-[55%] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[60%] z-20"
          >
            <span className="font-lipstick text-lipstick-red text-7xl md:text-9xl lipstick-text whitespace-nowrap block">
              Fashion Week
            </span>
          </motion.div>
        </motion.div>

        <motion.div 
            initial={{ height: 0 }}
            animate={{ height: 100 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="mt-16 w-[2px] bg-lipstick-red"
        />
        
        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="mt-4 font-sharp text-sm tracking-[0.5em] uppercase text-white font-bold"
        >
            Est. 1958
        </motion.p>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 right-12 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
         <div className="flex flex-col items-center gap-2">
            <span className="font-sharp text-xs text-white tracking-widest uppercase">Scroll</span>
            <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-[1px] h-12 bg-white"
            />
         </div>
      </motion.div>
    </section>
  );
};

export default Hero;