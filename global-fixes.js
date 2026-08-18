const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // 1. Fix Whatsapp numbers
  if (content.includes('wa.me/201027609518') || content.includes('wa.me/+201027609518')) {
    content = content.replace(/wa\.me\/\+?201027609518/g, 'wa.me/+201027609518');
    changed = true;
  }

  // 2. Fix the non-working button in ValueProposition (and any other naked button)
  // We'll replace naked <button> in ValueProposition with a Link to whatsapp
  if (file === 'ValueProposition.tsx' && content.includes('<button className="text-indigo-600 font-bold')) {
    const oldBtn = /<button className="text-indigo-600 font-bold hover:text-indigo-800 transition-colors text-lg">([\s\S]*?)<\/button>/;
    const newBtn = `<a href="https://wa.me/+201027609518?text=أهلاً، أنا مهتم وعايز أبدأ التغيير ده" target="_blank" className="text-emerald-600 font-bold hover:text-emerald-800 transition-colors text-lg inline-block border-b-2 border-emerald-600 pb-1 hover:scale-105">$1</a>`;
    content = content.replace(oldBtn, newBtn);
    changed = true;
  }
  
  // same for EmailCapture if there is one
  if (file === 'EmailCapture.tsx' && content.includes('<button')) {
     const oldBtn2 = /<button className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium text-sm">([\s\S]*?)<\/button>/;
     const newBtn2 = `<a href="https://wa.me/+201027609518?text=أهلاً، أنا مهتم وعايز أبدأ" target="_blank" className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium text-sm border-b border-emerald-400">$1</a>`;
     content = content.replace(oldBtn2, newBtn2);
     changed = true;
  }

  // 3. Fix blank spaces globally (reduce paddings)
  if (content.includes('py-32')) {
    content = content.replace(/py-32/g, 'py-16');
    changed = true;
  }
  if (content.includes('py-24')) {
    content = content.replace(/py-24/g, 'py-12');
    changed = true;
  }
  if (content.includes('py-20')) {
    content = content.replace(/py-20/g, 'py-12');
    changed = true;
  }
  if (content.includes('mb-20')) {
    content = content.replace(/mb-20/g, 'mb-10');
    changed = true;
  }
  if (content.includes('mb-16')) {
    content = content.replace(/mb-16/g, 'mb-8');
    changed = true;
  }
  if (content.includes('mt-16')) {
    content = content.replace(/mt-16/g, 'mt-8');
    changed = true;
  }
  if (content.includes('min-h-screen')) {
    content = content.replace(/min-h-screen/g, 'min-h-[70vh]');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated', file);
  }
}
