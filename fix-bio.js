const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'InstructorBio.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const oldHtml = '<div className="w-full aspect-[4/5] bg-gray-800 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">';
const newHtml = `<div className="w-full aspect-[4/5] bg-slate-800 rounded-3xl border-2 border-dashed border-indigo-400/50 shadow-2xl relative overflow-hidden group flex flex-col items-center justify-center cursor-pointer">
<span className="text-6xl mb-4">📸</span>
<span className="text-indigo-200 font-bold text-center px-4">ضع صورتك الشخصية هنا (Hero Shot)</span>
<span className="text-slate-400 text-sm text-center px-4 mt-2">يفضل صورة تنظر فيها مباشرة للكاميرا لزيادة الثقة</span>
<div className="absolute inset-0 bg-indigo-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
  <span className="bg-white px-4 py-2 rounded-full text-sm font-bold text-indigo-600 shadow-sm">تغيير الصورة</span>
</div>`;

content = content.replace(oldHtml, newHtml);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed InstructorBio placeholder');
