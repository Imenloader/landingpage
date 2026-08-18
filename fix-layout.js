const fs = require('fs');
const path = require('path');

const heroPath = path.join(__dirname, 'src', 'components', 'HeroSection.tsx');
let heroContent = fs.readFileSync(heroPath, 'utf8');

// Fix RTL Alignment
heroContent = heroContent.replace('text-center max-w-5xl mx-auto flex flex-col items-center pt-32 md:pt-40', 'text-right max-w-5xl mx-auto flex flex-col items-start pt-32 md:pt-40');
// Fix emoji direction
heroContent = heroContent.replace(/👉/g, '👈');

fs.writeFileSync(heroPath, heroContent, 'utf8');

const pricingPath = path.join(__dirname, 'src', 'components', 'PricingSection.tsx');
let pricingContent = fs.readFileSync(pricingPath, 'utf8');
pricingContent = pricingContent.replace(/👉/g, '👈');
fs.writeFileSync(pricingPath, pricingContent, 'utf8');

console.log('Done fixing layout and emojis.');
