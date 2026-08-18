"use client";
import React from 'react';
import { Globe, Link as LinkIcon, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full pt-20 pb-10 px-4 bg-[#030712] text-gray-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-16">
        
        <div className="text-center md:text-right max-w-sm">
          <h2 className="text-3xl font-extrabold text-white mb-4 tracking-tighter">FAP<span className="text-blue-500">&</span>DPL</h2>
          <p className="text-sm leading-relaxed text-gray-500 mb-6">
            بندعم الجيل الجاي من رواد الأعمال الديجيتال والفريلانسرز عشان يبنوا بيزنس بيكسب وبيكبر بجد.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all"><Globe size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all"><LinkIcon size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all"><Mail size={18} /></a>
          </div>
        </div>

        <div className="flex gap-16 text-center md:text-right">
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold mb-2">البرامج</h4>
            <a href="#" className="text-sm hover:text-white transition-colors">برنامج تسريع الفريلانس</a>
            <a href="#" className="text-sm hover:text-white transition-colors">إطلاق المشاريع الرقمية</a>
            <a href="#" className="text-sm hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2">الباقة الشاملة <span className="bg-blue-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">عرض</span></a>
          </div>
          
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold mb-2">الشركة</h4>
            <a href="#" className="text-sm hover:text-white transition-colors">عن الشركة</a>
            <a href="#" className="text-sm hover:text-white transition-colors">الشروط والأحكام</a>
            <a href="#" className="text-sm hover:text-white transition-colors">سياسة الخصوصية</a>
            <a href="#" className="text-sm hover:text-white transition-colors">تواصل مع الدعم</a>
          </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs">&copy; {new Date().getFullYear()} برنامج تسريع الفريلانس. جميع الحقوق محفوظة.</p>
        <p className="text-xs flex items-center gap-1">مبني بـ <span className="text-red-500">♥</span> لصناع المحتوى.</p>
      </div>
    </footer>
  );
}
