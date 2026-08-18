const fs = require('fs');
const path = require('path');

const writeComponent = (name, content) => {
    fs.writeFileSync(path.join(__dirname, 'src', 'components', name), content, 'utf8');
};

// 1. TrustBar (Halo Effect)
writeComponent('TrustBar.tsx', `"use client";
import React from 'react';

export default function TrustBar() {
  return (
    <div className="w-full bg-[#0F172A] border-y border-white/10 py-8 overflow-hidden flex flex-col items-center z-20 relative">
      <p className="text-gray-400 text-sm font-medium mb-6 uppercase tracking-wider">كما ظهر في / موثوق من قبل</p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
        {/* Logos Placeholders */}
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="w-32 h-10 bg-white/10 rounded-lg flex items-center justify-center border border-white/20 border-dashed relative group">
            <span className="text-white/30 text-xs font-bold">Logo {i}</span>
            <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
              <span className="text-white text-[10px]">ضع لوجو هنا</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
`);

// 2. BeforeAfterSection (Visual Contrast / Negativity Bias)
writeComponent('BeforeAfterSection.tsx', `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Frown, Smile } from 'lucide-react';

export default function BeforeAfterSection() {
  return (
    <section className="w-full py-24 px-4 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] mb-4">الفرق بين الطريقة القديمة وسيستم FAP</h2>
          <p className="text-gray-500 text-lg">الصورة بتعبر عن ألف كلمة. اختار إنت عايز تكون فين.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Before */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white p-6 rounded-[2rem] border-2 border-red-100 shadow-lg flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-6">
              <Frown size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">حياتك دلوقتي (الإرهاق)</h3>
            <div className="w-full aspect-video bg-slate-100 rounded-2xl border-2 border-dashed border-red-200 flex flex-col items-center justify-center relative group overflow-hidden mb-6">
              <span className="text-slate-400 font-bold">صورة: شخص مرهق قدام اللاب توب</span>
              <div className="absolute inset-0 bg-red-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-white px-4 py-2 rounded-full text-sm font-bold text-red-600 shadow-sm">Replace Image</span>
              </div>
            </div>
            <ul className="text-right space-y-3 w-full text-gray-600 font-medium">
              <li>❌ بتدور على عملاء كل يوم من الصفر</li>
              <li>❌ بتنافس على السعر القليل في مواقع الفريلانس</li>
              <li>❌ مفيش دخل ثابت أو أمان مالي</li>
            </ul>
          </motion.div>

          {/* After */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white p-6 rounded-[2rem] border-2 border-emerald-500 shadow-xl shadow-emerald-500/10 flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-500 text-white px-6 py-1 rounded-bl-2xl font-bold text-sm">الوضع الجديد</div>
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 mt-4">
              <Smile size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">حياتك بعد السيستم (التحكم)</h3>
            <div className="w-full aspect-video bg-slate-100 rounded-2xl border-2 border-dashed border-emerald-300 flex flex-col items-center justify-center relative group overflow-hidden mb-6">
              <span className="text-slate-400 font-bold">صورة: شخص مرتاح بيشرب قهوة وبيشوف مبيعات</span>
              <div className="absolute inset-0 bg-emerald-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-white px-4 py-2 rounded-full text-sm font-bold text-emerald-600 shadow-sm">Replace Image</span>
              </div>
            </div>
            <ul className="text-right space-y-3 w-full text-gray-600 font-medium">
              <li>✅ العملاء هما اللي بيطلبوا يشتغلوا معاك</li>
              <li>✅ بتسعر خدماتك بقيمتها الحقيقية (VIP)</li>
              <li>✅ دخل أوتوماتيكي من منتجاتك الديجيتال</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
`);

// 3. CourseBundleMockup (Tangibility & Ownership Bias)
writeComponent('CourseBundleMockup.tsx', `"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function CourseBundleMockup() {
  return (
    <section className="w-full py-20 px-4 bg-[#0F172A] overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">إيه اللي هتاخده بالظبط؟</h2>
          <p className="text-indigo-300 text-lg">كل حاجة محتاجها متجمعة في مكان واحد.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl aspect-[2/1] md:aspect-[2.5/1] bg-slate-800 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(79,70,229,0.3)] relative group cursor-pointer flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-indigo-900/40 to-slate-900 opacity-80"></div>
          
          <div className="relative z-10 text-center px-4">
            <span className="text-4xl mb-4 block">💻 📱 🖥️</span>
            <h3 className="text-2xl font-bold text-white mb-2">صورة مجمعة (Mockup)</h3>
            <p className="text-indigo-200 max-w-md mx-auto">
              ضع هنا صورة احترافية تظهر الكورسات على شاشة لاب توب، أيباد، وموبايل. 
              (استخدم موقع مثل Smartmockups.com لدمج صور الكورس)
            </p>
          </div>

          <div className="absolute inset-0 border-4 border-dashed border-indigo-500/30 rounded-3xl group-hover:border-indigo-400 transition-colors"></div>
        </motion.div>
      </div>
    </section>
  );
}
`);

// 4. Update page.tsx
const pagePath = path.join(__dirname, 'src', 'app', 'page.tsx');
let pageContent = `import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import IdentitySelector from "@/components/IdentitySelector";
import ValueProposition from "@/components/ValueProposition";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import VSLSection from "@/components/VSLSection";
import FuturePacing from "@/components/FuturePacing";
import CourseBundleMockup from "@/components/CourseBundleMockup";
import CourseModules from "@/components/CourseModules";
import InstructorBio from "@/components/InstructorBio";
import RawProofWall from "@/components/RawProofWall";
import ValueStack from "@/components/ValueStack";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import EmailCapture from "@/components/EmailCapture";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center w-full" dir="rtl">
      <HeroSection />
      <TrustBar />
      <IdentitySelector />
      <ValueProposition />
      <BeforeAfterSection />
      <VSLSection />
      <FuturePacing />
      <CourseBundleMockup />
      <CourseModules />
      <InstructorBio />
      <RawProofWall />
      <ValueStack />
      <PricingSection />
      <FAQSection />
      <EmailCapture />
      <Footer />
    </main>
  );
}
`;
fs.writeFileSync(pagePath, pageContent, 'utf8');

console.log('Added high-conversion components and reordered funnel.');
