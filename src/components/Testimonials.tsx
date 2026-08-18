"use client";
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      name: "وفاء الجندي",
      role: "طالبة لغات (بدأت من الصفر)",
      content: "في الأول كنت خايفة بصراحة لإن دي حاجة ملهاش أي علاقة بكليتي، بس قولت اخد الخطوة. أنا بدأت في الكورس من شهر وأسبوع، والحمدلله النهارده اتفقت مع أول عميلة هعملها Chatbot وإعلانات ممولة وموقع. بجد حاسة إني فخورة أوي بنفسي.",
      highlight: "من طالبة لغات لـ فريلانسر بتعمل مواقع وإعلانات في شهر"
    },
    {
      name: "محب عزمي",
      role: "حقق مبيعات 15,900 جنيه في شهر",
      content: "الكورس مليان معلومات تيكنيكال قوية جداً ومنظم. أنا استفدت جداً في طريقة التفكير ومبقتش أخاف أفتح بيزنس مع أي عميل لإن بقا عندي مرجع قوي وخبرة كويسة أفهم بيها السوق. كورس مكثف ودسم في ٦ محاضرات مليانين معلومات.",
      highlight: "كسر حاجز الخوف وبدأ يقفل ديلات بثقة"
    },
    {
      name: "مي رمضان",
      role: "تغيير كامل في العقلية (Mindshift)",
      content: "حاسة بـ mindshift جامد بالذات إن مجال دراستي وكل وظيفة اشتغلتها بعيدة تماماً عن الاتجاه ده! دي أول مرة أتعامل مع عميل على التليفون وأقنعه. أستاذ أحمد عنده طريقة فريدة في إيصال المحتوى بتخليك تثق في قدراتك.",
      highlight: "Mindshift جامد وثقة في التعامل مع العملاء"
    }
  ];

  return (
    <section className="w-full py-16 px-4 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] mb-4">قصص نجاح من ناس <span className="text-emerald-600">بدأوا زيك بالظبط</span></h2>
          <p className="text-gray-500 text-lg">دي مش مجرد أرقام.. دي حكايات حقيقية لشباب وبنات كسروا حاجز الخوف وبدأوا يحققوا أرباح</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 relative group"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Quote size={20} fill="currentColor" />
              </div>
              
              <div className="flex text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">"{t.content}"</p>
              
              <div className="pt-6 border-t border-slate-100">
                <p className="font-bold text-[#0F172A] text-lg">{t.name}</p>
                <p className="text-emerald-600 font-bold text-sm mb-2">{t.highlight}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
