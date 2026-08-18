const fs = require('fs');
const path = require('path');

const heroPath = path.join(__dirname, 'src', 'components', 'HeroSection.tsx');
let heroContent = fs.readFileSync(heroPath, 'utf8');

heroContent = heroContent.replace('className="relative w-full min-h-[85vh] flex flex-col items-center justify-start px-4 overflow-hidden bg-[#0F172A]"', 'className="relative w-full pb-20 flex flex-col items-center justify-start px-4 overflow-hidden bg-[#0F172A]"');

fs.writeFileSync(heroPath, heroContent, 'utf8');
console.log('Fixed height');
