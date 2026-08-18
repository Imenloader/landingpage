"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function RawProofWall() {
  const screenshots = [
    "https://d1yei2z3i6k35z.cloudfront.net/14693084/68ebba962dc21_Untitleddesign3.png",
    "https://d1yei2z3i6k35z.cloudfront.net/14693084/6918c0aa2e266_ad522012-06fd-4a50-bb32-4d244170ad7e.png",
    "https://d1yei2z3i6k35z.cloudfront.net/14693084/6918c0fa4458a_77921cd3-9602-47e1-a530-ceb7a5888aaa.png",
    "https://d1yei2z3i6k35z.cloudfront.net/14693084/6918c0e9b2f3e_5f3912db-d1ab-43a3-9927-d7d0ac627d1a.png",
    "https://d1yei2z3i6k35z.cloudfront.net/14693084/6918c10777cbd_de2b0069-0a9b-4404-8c87-0caf66a56220.png",
    "https://d1yei2z3i6k35z.cloudfront.net/14693084/68ebbac80680f_Untitleddesign2.png",
    "https://d1yei2z3i6k35z.cloudfront.net/14693084/68ebbb832c552_Untitleddesign4.png"
  ];

  return (
    <section className="w-full py-16 px-4 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-bold mb-6"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            بدون أي فلاتر أو تعديل
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-[#0F172A] mb-4 tracking-tighter"
          >
            مش كلام وخلاص.. دي <span className="text-emerald-600">رسايل حقيقية من موبايلي</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl mx-auto"
          >
            سكرين شوتس خام من محادثات الواتساب مع الطلبة. الأرقام والمبيعات اللي هتشوفها دي حقيقية ١٠٠٪ ونتائج شغل وتعب بجد.
          </motion.p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {screenshots.map((src, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="break-inside-avoid"
            >
              <img 
                src={src} 
                alt={"Screenshot Proof " + (idx + 1)} 
                className="w-full rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
