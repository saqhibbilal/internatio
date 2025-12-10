import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PAST_SHOWS } from '../constants';

const Gallery: React.FC = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <section ref={targetRef} id="collection" className="relative h-[300vh] bg-milan-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        <div className="absolute top-10 left-10 z-20 mix-blend-difference">
             <h3 className="font-sharp text-5xl md:text-8xl text-white uppercase tracking-tighter leading-none">
                Past<br/>
                <span className="text-lipstick-red font-serif italic">Seasons</span>
            </h3>
        </div>

        <motion.div style={{ x }} className="flex gap-0 px-0">
            {/* Intro Spacer */}
            <div className="w-[50vw] md:w-[30vw] flex-shrink-0"></div>

          {PAST_SHOWS.map((show) => (
            <div key={show.id} className="relative group w-[85vw] md:w-[600px] h-[100vh] flex-shrink-0 bg-neutral-900 overflow-hidden cursor-none border-r border-white/10">
              <img
                src={show.image}
                alt={show.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter grayscale contrast-125 group-hover:grayscale-0"
              />
              
              {/* Sharp Information Box - No Gradients */}
              <div className="absolute bottom-12 left-0 bg-milan-black/90 p-8 w-full md:w-3/4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out border-t border-lipstick-red">
                <div className="flex justify-between items-baseline mb-2">
                     <span className="font-sharp text-4xl text-white">{show.title}</span>
                     <span className="font-sans text-xs tracking-widest text-lipstick-red uppercase font-bold">{show.season} {show.year}</span>
                </div>
                <p className="font-sans text-gray-400 font-light text-sm">
                    {show.description}
                </p>
              </div>

              {/* Hover Overlay Text */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30">
                 <span className="font-lipstick text-9xl text-lipstick-red drop-shadow-lg transform -rotate-12 block whitespace-nowrap lipstick-text">
                    View
                 </span>
              </div>
            </div>
          ))}
          
          {/* Final Call to Action Card */}
           <div className="relative w-[100vw] md:w-[800px] h-[100vh] flex-shrink-0 bg-lipstick-red flex items-center justify-center">
                <div className="text-center p-12 border-4 border-black m-12">
                    <h4 className="font-sharp text-7xl text-black mb-6">The Future</h4>
                    <p className="font-lipstick text-6xl text-white -rotate-6 lipstick-text">Is Unwritten</p>
                </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;