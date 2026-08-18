const fs = require('fs');
const path = require('path');

// Fix TrustBar broken image
const trustBarPath = path.join(__dirname, 'src', 'components', 'TrustBar.tsx');
let trustBarContent = fs.readFileSync(trustBarPath, 'utf8');
trustBarContent = trustBarContent.replace('cdn.simpleicons.org/openai/ffffff', 'cdn.simpleicons.org/chatgpt/ffffff');
fs.writeFileSync(trustBarPath, trustBarContent, 'utf8');

// Fix HeroSection massive blank space
const heroPath = path.join(__dirname, 'src', 'components', 'HeroSection.tsx');
let heroContent = fs.readFileSync(heroPath, 'utf8');
// remove min-h-[90vh]
heroContent = heroContent.replace('min-h-[90vh]', '');
// change pt-24 md:pt-32 to pt-16 md:pt-20 to pull it up slightly and avoid too much top space
heroContent = heroContent.replace('pt-24 md:pt-32', 'pt-16 md:pt-20');
// change pb-20 to pb-10
heroContent = heroContent.replace('pb-20', 'pb-12');
fs.writeFileSync(heroPath, heroContent, 'utf8');

console.log('Fixed broken image and blank space');
