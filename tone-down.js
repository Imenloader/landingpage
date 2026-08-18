const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');

// Fix Hero Section
const heroPath = path.join(componentsDir, 'HeroSection.tsx');
let heroContent = fs.readFileSync(heroPath, 'utf8');
heroContent = heroContent.replace(/أول 100,000 جنيه/g, 'أول أرباحك الحقيقية');
fs.writeFileSync(heroPath, heroContent, 'utf8');

// Fix Course Modules
const modulesPath = path.join(componentsDir, 'CourseModules.tsx');
let modulesContent = fs.readFileSync(modulesPath, 'utf8');
modulesContent = modulesContent.replace(/بـ 50,000 جنيه/g, 'قيمة ومستمرة');
fs.writeFileSync(modulesPath, modulesContent, 'utf8');

console.log('Fixed overpromising');
