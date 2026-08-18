"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MonitorPlay, CheckCircle2 } from 'lucide-react';

export default function IdentitySelector() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="w-full py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">إنت مين في دول؟</h2>
        <p className="text-gray-500 mb-12 text-lg">عشان نوجهك للحل الصح، اختار الوصف اللي بينطبق عليك أكتر:</p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <button 
            onClick={() => setSelected('fap')}
            className={`p-8 rounded-3xl border-2 transition-all text-right flex flex-col gap-4 ${selected === 'fap' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white hover:border-blue-200'}`}
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${selected === 'fap' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
              <Briefcase size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">أنا فريلانسر / مقدم خدمات</h3>
            <p className="text-gray-600 text-sm leading-relaxed">بشتغل مع عملاء وعايز أزود أسعاري، أجيب عملاء VIP، وأبني سيستم يجيبلي شغل باستمرار من غير ما أعتمد على منصات العمل الحر.</p>
          </button>

          <button 
            onClick={() => setSelected('dpl')}
            className={`p-8 rounded-3xl border-2 transition-all text-right flex flex-col gap-4 ${selected === 'dpl' ? 'border-purple-500 bg-purple-50' : 'border-gray-200 bg-white hover:border-purple-200'}`}
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${selected === 'dpl' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
              <MonitorPlay size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">أنا صانع محتوى / خبير</h3>
            <p className="text-gray-600 text-sm leading-relaxed">عندي مهارة أو متابعين وعايز أحول معرفتي دي لمنتج ديجيتال (كورس، أداة، كتاب) يتباع أوتوماتيك وأبني دخل سلبي.</p>
          </button>
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="bg-gray-900 text-white p-6 rounded-2xl flex items-center gap-4 text-right shadow-xl"
            >
              <CheckCircle2 size={32} className="text-[#25D366] shrink-0" />
              <div>
                <p className="font-bold text-lg mb-1">ممتاز! الباقة دي معمولة عشانك بالظبط.</p>
                <p className="text-gray-400 text-sm">
                  {selected === 'fap' ? 'برنامج FAP هيديك القوالب والخطوات عشان تقفل أول عميل VIP ليك في أقل من 30 يوم.' : 'برنامج DPL هيمشيك خطوة بخطوة عشان تبني وتطلق منتجك الأول وتحقق مبيعات وإنت نايم.'}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
