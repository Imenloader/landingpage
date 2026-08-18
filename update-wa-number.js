const fs = require('fs');
const path = require('path');

const OLD_WA = '201000000000';
const NEW_WA = '201027609518';

const heroPath = path.join(__dirname, 'src', 'components', 'HeroSection.tsx');
let heroContent = fs.readFileSync(heroPath, 'utf8');
heroContent = heroContent.replace(new RegExp(OLD_WA, 'g'), NEW_WA);
fs.writeFileSync(heroPath, heroContent, 'utf8');

const pricingPath = path.join(__dirname, 'src', 'components', 'PricingSection.tsx');
let pricingContent = fs.readFileSync(pricingPath, 'utf8');
pricingContent = pricingContent.replace(new RegExp(OLD_WA, 'g'), NEW_WA);
fs.writeFileSync(pricingPath, pricingContent, 'utf8');

console.log('Updated WA number.');
