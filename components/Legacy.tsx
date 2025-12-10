import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Legacy: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  
  return (
    <section ref={containerRef} id="legacy" className="relative py-40 bg-milan-black overflow-hidden">
        {/* Sharp background line instead of gradient/noise */}
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white/10 hidden md:block"></div>

        {/* Big Bold Background Text */}
        <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none opacity-10">
            <h2 className="text-[25vw] font-sharp leading-none text-white whitespace-nowrap translate-x-[-10%]">
                L'EREDITÀ
            </h2>
        </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-24 items-center relative z-10">
        <motion.div style={{ y }} className="space-y-10 relative">
          <h2 className="text-7xl md:text-9xl font-sharp text-white leading-[0.8]">
            The <br/>
            <span className="font-lipstick text-lipstick-red lipstick-text ml-8">Legacy</span>
          </h2>
          
          <div className="h-[2px] w-24 bg-lipstick-red"></div>
          
          <div className="font-sans text-lg text-gray-300 font-light leading-loose max-w-lg border-l-2 border-white/20 pl-8">
            <p>
            Born in the cobblestone streets of Milan, defined by sharp cuts and unapologetic luxury. 
            </p>
            <p className="mt-6 text-white font-medium">
            We do not follow trends; we carve them into history with the precision of a stiletto heel.
            </p>
          </div>
        </motion.div>

        <div className="relative h-[700px] w-full group perspective-1000">
            {/* Solid sharp frame */}
            <div className="absolute inset-0 border-2 border-lipstick-red translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-8 group-hover:translate-y-8 z-0"></div>
            
            <motion.div 
                className="absolute inset-0 bg-milan-black z-10 overflow-hidden"
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.4 }}
            >
                 <img 
                    src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2274&auto=format&fit=crop" 
                    alt="Milan Architecture" 
                    className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                />
            </motion.div>
            
            <div className="absolute top-10 -right-10 z-20 mix-blend-difference">
                <p className="font-lipstick text-7xl text-white -rotate-90 origin-bottom-right">
                    Iconic
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;