"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: "هل محتاج خبرة سابقة؟", a: "لأ! البرنامجين متصممين ياخدوك من الصفر لحد ما تدير بيزنس كامل. بنغطي الأساسيات كلها قبل ما ندخل في الاستراتيجيات المتقدمة." },
  { q: "الكورسات هتفضل معايا قد إيه؟", a: "معاك مدى الحياة! تقدر تذاكر براحتك وترجع للمحتوى في أي وقت. وأي تحديثات هتنزل بعد كده هتاخدها مجاناً." },
  { q: "هل في ضمان لو معجبنيش المحتوى؟", a: "[تفاصيل الضمان هنا، مثلاً 14 يوم استرجاع لو طبقت الخطوات ومستفدتش]" },
  { q: "هل ده هينفعني لو أنا ماليش في التكنولوجيا القوية؟", a: "أيوة. إحنا بنركز على البيزنس والاستراتيجية وطريقة التفكير مش الكود المعقد. وبنوريك أبسط الأدوات اللي تخلص بيها الشغل." },
  { q: "محتاج أخصص وقت قد إيه؟", a: "بننصح بتخصيص كام ساعة في الأسبوع، وبما إن الكورس مسجل، تقدر تخلصه براحتك على حسب وقتك وسرعتك." }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 px-4 bg-[#F8FAFC] flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-[#0F172A] tracking-tight"
          >
            أسئلة بتتكرر كتير
          </motion.h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === i ? 'border-indigo-500 bg-[#FCFBF8] shadow-md' : 'border-gray-200 bg-[#FCFBF8] hover:border-gray-300'}`}
            >
              <button 
                onClick={() => toggleFaq(i)}
                className="w-full px-6 py-6 flex justify-between items-center text-right focus:outline-none"
              >
                <h3 className={`text-lg font-bold pl-8 ${openIndex === i ? 'text-indigo-600' : 'text-[#0F172A]'}`}>
                  {faq.q}
                </h3>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === i ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-400'}`}>
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
