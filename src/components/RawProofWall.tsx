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
        <div className="text-center mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-[#0F172A] tracking-tight"
          >
            مش كلام وخلاص.. دي رسايل حقيقية من موبايلي
          </motion.h2>
          <p className="text-gray-500 text-lg">بص بنفسك على اللي بيحصل لما تطبق السيستم صح.</p>
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
