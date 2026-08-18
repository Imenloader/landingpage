const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, 'src', 'app', 'page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');

if (!content.includes('import HeroSectionNeuromarketing')) {
  content = content.replace(
    'import HeroSection from "@/components/HeroSection";',
    'import HeroSection from "@/components/HeroSection";\nimport HeroSectionNeuromarketing from "@/components/HeroSectionNeuromarketing";'
  );
  
  content = content.replace(
    '<HeroSection />',
    `{/* Version 1: Original Hero */}\n      <div className="w-full border-b-[20px] border-red-500 relative"><span className="absolute top-2 right-2 bg-red-500 text-white font-bold px-4 py-1 z-50">النسخة القديمة (الحالية)</span><HeroSection /></div>\n      {/* Version 2: Neuromarketing Hero */}\n      <div className="w-full relative"><span className="absolute top-2 right-2 bg-emerald-500 text-white font-bold px-4 py-1 z-50">النسخة الجديدة (NeuroMarketing)</span><HeroSectionNeuromarketing /></div>`
  );
  
  fs.writeFileSync(pagePath, content, 'utf8');
  console.log('Added A/B test to page.tsx');
}
