"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function RawProofWall() {
  return (
    <section className="w-full py-32 px-4 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 tracking-tight"
          >
            مش كلام وخلاص.. دي رسايل حقيقية من موبايلاتي
          </motion.h2>
          <p className="text-gray-500 text-lg">بص بنفسك على اللي بيحصل لما تطبق السيستم صح.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* WhatsApp Message Simulation 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#EFEAE2] p-4 rounded-[2rem] border border-gray-200 shadow-sm relative overflow-hidden flex flex-col justify-end min-h-[250px]"
          >
            <div className="bg-white p-4 rounded-2xl rounded-br-none shadow-sm max-w-[85%] self-end mb-2 relative">
              <p className="text-[#111B21] text-sm leading-relaxed" dir="rtl">
                والله مكنتش مصدق إن الاستراتيجية دي هتجيب عميل بـ 2000 دولار في أسبوعين بس! شكراً يا هندسة ❤️ بجد حياتي اتغيرت.
              </p>
              <div className="text-right mt-1 text-[10px] text-gray-400">10:42 AM <span className="text-blue-500 font-bold">✓✓</span></div>
              <div className="absolute -right-2 bottom-0 w-4 h-4 bg-white clip-polygon-whatsapp"></div>
            </div>
            <div className="absolute top-4 right-4 bg-white/80 backdrop-blur text-xs px-3 py-1 rounded-full text-gray-600 font-medium">WhatsApp Chat</div>
          </motion.div>

          {/* Voice Note Simulation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-lg flex flex-col items-center justify-center min-h-[250px]"
          >
            <p className="text-center font-bold text-gray-900 mb-6">"أول منتج ديجيتال أطلقه جاب 50 مبيعة وأنا نايم..."</p>
            <div className="w-full bg-gray-100 rounded-full h-12 flex items-center px-4 gap-3 cursor-pointer hover:bg-gray-200 transition-colors">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
                <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-white border-b-4 border-b-transparent ml-1"></div>
              </div>
              <div className="flex-1 flex items-center gap-1">
                {[...Array(15)].map((_, i) => (
                  <div key={i} className="w-1 bg-blue-400 rounded-full" style={{ height: `${Math.random() * 20 + 4}px` }}></div>
                ))}
              </div>
              <span className="text-xs text-gray-500 font-medium">0:45</span>
            </div>
          </motion.div>

          {/* Stripe Simulation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-lg flex flex-col justify-center min-h-[250px]"
          >
            <div className="flex items-center gap-4 mb-6 border-b pb-4">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center font-bold text-xl">S</div>
              <div>
                <p className="font-bold text-gray-900">Stripe Payment</p>
                <p className="text-xs text-gray-500">Just now</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-sm mb-1">New payment received</p>
              <p className="text-4xl font-extrabold text-gray-900">$497.00</p>
            </div>
            <div className="mt-6 bg-green-50 text-green-700 text-xs text-center py-2 rounded-lg font-bold">
              Course Enrollment (DPL)
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
