import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Legacy from './components/Legacy';
import Gallery from './components/Gallery';
import QuoteSection from './components/QuoteSection';
import CustomCursor from './components/CustomCursor';
import { NAV_ITEMS } from './constants';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Simulate asset loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full bg-milan-black flex items-center justify-center overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-center"
        >
          <h1 className="font-sharp text-4xl text-white tracking-widest">MILANO</h1>
          <p className="font-lipstick text-lipstick-red text-2xl mt-2">Loading Luxury...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-milan-black min-h-screen text-white selection:bg-lipstick-red selection:text-white">
      <CustomCursor />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 mix-blend-difference flex justify-between items-center pointer-events-auto">
        <div className="font-sharp text-2xl font-bold tracking-tighter">MW</div>
        <ul className="hidden md:flex gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.label} className="overflow-hidden group">
              <a href={item.href} className="font-sans text-xs uppercase tracking-widest hover:text-gray-300 transition-colors relative block">
                <span className="block transform transition-transform duration-300 group-hover:-translate-y-full">{item.label}</span>
                <span className="absolute top-full left-0 text-lipstick-red block transform transition-transform duration-300 group-hover:-translate-y-full">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <button className="font-sans text-xs uppercase border border-white px-6 py-2 hover:bg-white hover:text-black transition-colors duration-300">
            RSVP
        </button>
      </nav>

      <main>
        <Hero />
        <Legacy />
        <QuoteSection />
        <Gallery />
        
        {/* Footer */}
        <footer className="py-24 px-8 bg-milan-black border-t border-white/10 relative overflow-hidden">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-end">
                <div>
                    <h2 className="font-sharp text-6xl md:text-9xl mb-4">M / W</h2>
                    <p className="font-sans text-gray-500 text-sm max-w-xs">
                        © 2024 Milan Fashion Week Portfolio.<br/>
                        Designed with passion. Crafted for the bold.
                    </p>
                </div>
                
                <div className="mt-12 md:mt-0 flex flex-col items-start md:items-end gap-2">
                    <span className="font-lipstick text-3xl text-lipstick-red">Contact Us</span>
                    <a href="mailto:hello@milanfw.com" className="font-sharp text-2xl hover:text-lipstick-red transition-colors">hello@milanfw.com</a>
                    <div className="flex gap-4 mt-4">
                        {['Instagram', 'Twitter', 'YouTube'].map(social => (
                            <a key={social} href="#" className="text-xs uppercase tracking-widest hover:line-through decoration-lipstick-red decoration-2">
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Background flourish */}
            <span className="absolute -bottom-20 -right-20 font-lipstick text-[20rem] text-white/5 pointer-events-none select-none">
                Ciao
            </span>
        </footer>
      </main>
    </div>
  );
};

export default App;