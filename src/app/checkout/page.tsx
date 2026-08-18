"use client";
import React, { useState } from 'react';
import { ShieldCheck, Lock, CreditCard, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-4" dir="rtl">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors">
            <ArrowRight size={20} />
            <span>الرجوع للصفحة الرئيسية</span>
          </Link>
          <div className="flex items-center gap-2 text-emerald-600 font-bold">
            <Lock size={20} />
            <span>دفع آمن 100%</span>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          
          {/* Order Summary (Right Column in RTL) */}
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 sticky top-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">ملخص الطلب</h2>
              
              <div className="flex gap-4 mb-6 border-b border-slate-100 pb-6">
                <div className="w-24 h-24 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-3xl">🚀</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">الباقة المتكاملة (FAP + DPL)</h3>
                  <p className="text-sm text-slate-500 mt-1">الوصول الفوري لجميع الكورسات، القوالب، ومجتمع الدعم الفني.</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-slate-500">
                  <span>السعر الأساسي</span>
                  <span className="line-through">$2,500</span>
                </div>
                <div className="flex justify-between font-bold text-slate-900 text-xl">
                  <span>الإجمالي (عرض اليوم)</span>
                  <span className="text-emerald-600">$497</span>
                </div>
              </div>

              {/* Guarantees */}
              <div className="bg-slate-50 p-4 rounded-xl space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">دخول مدى الحياة للبرنامج والتحديثات</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">ضمان استرجاع الأموال 14 يوم بدون أسئلة</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">دعم فني مباشر على الجروب السري</p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Form (Left Column in RTL) */}
          <div className="md:col-span-7 order-1 md:order-2">
            <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-indigo-50">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-8">أكمل بياناتك للبدء فوراً</h2>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">الاسم بالكامل</label>
                    <input 
                      type="text" 
                      placeholder="محمد أحمد"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">البريد الإلكتروني (لتفعيل الحساب)</label>
                    <input 
                      type="email" 
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all text-left"
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">رقم الواتساب</label>
                    <input 
                      type="tel" 
                      placeholder="+20 100 000 0000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all text-left"
                      dir="ltr"
                    />
                  </div>
                </div>

                <hr className="border-slate-100" />

                <div>
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <CreditCard size={20} className="text-indigo-500" />
                    طريقة الدفع (مؤمنة بتقنية Stripe)
                  </h3>
                  
                  {/* Stripe Element Placeholder */}
                  <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl mb-4 text-center text-slate-500 flex flex-col items-center justify-center min-h-[120px]">
                    <Lock size={24} className="mb-2 text-slate-400" />
                    <p>نموذج الدفع الآمن سيظهر هنا (Stripe / Paymob)</p>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 bg-[#059669] text-white font-extrabold text-xl rounded-xl hover:bg-emerald-700 transition-all shadow-[0_10px_20px_rgba(5,150,105,0.2)] flex justify-center items-center gap-3"
                >
                  <ShieldCheck size={24} />
                  تأكيد الدفع وإرسال بيانات الدخول
                </button>
                <p className="text-center text-xs text-slate-500 mt-4">
                  بإتمامك الدفع، أنت توافق على شروط الاستخدام. لن يتم خصم أي مبالغ إضافية خفية.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
