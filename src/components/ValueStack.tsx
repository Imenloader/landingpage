"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Gift, ArrowDown } from 'lucide-react';

const valueItems = [
  { name: "المنهج التدريبي الكامل (خطوة بخطوة)", value: "$1,000" },
  { name: "قوالب كتابة العروض والإيميلات اللي مبتترفضش", value: "$500" },
  { name: "استراتيجيات جلب العملاء وإطلاق المنتجات", value: "$500" },
  { name: "دخول لمجتمع الدعم الفني الخاص", value: "$500" },
];

export default function ValueStack() {
  return (
    <section className="w-full py-20 px-4 bg-gray-50 flex flex-col items-center">
      <div className="max-w-3xl w-full bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border-2 border-blue-100 relative mt-10">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
          <Gift size={32} />
        </div>
        
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8 mt-4">القيمة الحقيقية اللي هتاخدها:</h2>
        
        <div className="space-y-4 mb-8">
          {valueItems.map((item, i) => (
            <div key={i} className="flex justify-between items-center border-b border-gray-100 pb-4">
              <span className="text-gray-700 font-medium">{item.name}</span>
              <span className="font-bold text-gray-900 text-xl">{item.value}</span>
            </div>
          ))}
        </div>

        <div className="bg-red-50 p-6 rounded-2xl flex justify-between items-center mb-8 border border-red-100">
          <span className="font-bold text-red-800 text-lg">إجمالي القيمة الفورية:</span>
          <span className="font-extrabold text-red-600 text-3xl line-through">$2,500</span>
        </div>

        <div className="text-center">
          <p className="text-gray-600 font-medium mb-4">لكن إنت مش هتدفع الرقم ده خالص النهاردة...</p>
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex justify-center text-blue-500"
          >
            <ArrowDown size={32} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
