"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function VSLSection() {
  useEffect(() => {
    // Dynamically load wistia scripts on mount to avoid hydration mismatch
    const script1 = document.createElement('script');
    script1.src = "https://fast.wistia.com/player.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = "https://fast.wistia.com/embed/6wg5nrmcpm.js";
    script2.async = true;
    script2.type = "module";
    document.body.appendChild(script2);

    return () => {
      // cleanup if necessary
    };
  }, []);

  return (
    <section className="w-full py-20 px-4 bg-[#0F172A] relative z-20 -mt-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full text-center mb-8"
        >
          <p className="text-indigo-400 font-bold mb-2 tracking-wide uppercase text-sm">رسالة سريعة</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">شوف الفيديو ده قبل ما تاخد أي قرار</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full aspect-video bg-black rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(79,70,229,0.15)] relative"
        >
          <div className="wistia_responsive_padding" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
            <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
              <div className="wistia_embed wistia_async_6wg5nrmcpm videoFoam=true" style={{ height: '100%', position: 'relative', width: '100%' }}>
                <div className="wistia_swatch" style={{ height: '100%', left: 0, opacity: 0, overflow: 'hidden', position: 'absolute', top: 0, transition: 'opacity 200ms', width: '100%' }}>
                  <img src="https://fast.wistia.com/embed/medias/6wg5nrmcpm/swatch" style={{ filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%' }} alt="" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
