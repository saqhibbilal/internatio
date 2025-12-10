import React from 'react';
import { motion } from 'framer-motion';
import { QUOTES } from '../constants';

const QuoteSection: React.FC = () => {
  return (
    <section className="py-40 bg-white text-milan-black relative overflow-hidden flex items-center justify-center min-h-screen">
       {/* Decorative Elements */}
       <div className="absolute top-20 right-20 w-32 h-32 border-r-4 border-t-4 border-lipstick-red rounded-tr-3xl"></div>
       <div className="absolute bottom-20 left-20 w-32 h-32 border-l-4 border-b-4 border-black rounded-bl-3xl"></div>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <span className="font-lipstick text-lipstick-red text-9xl absolute -top-16 left-1/4 opacity-20 select-none">"</span>
            
            <h3 className="font-sharp text-5xl md:text-8xl leading-tight max-w-5xl mx-auto">
                {QUOTES[0].text}
            </h3>
            
            <div className="mt-12">
                <p className="font-sans uppercase tracking-[0.4em] text-sm font-bold text-gray-900 relative inline-block">
                    {QUOTES[0].author}
                    <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-lipstick-red"></span>
                </p>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;