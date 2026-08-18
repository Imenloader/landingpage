const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, 'src', 'app', 'page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');

if (content.includes('<HeroSectionNeuromarketing />')) {
  // Switch back to original
  content = content.replace(
    'import HeroSectionNeuromarketing from "@/components/HeroSectionNeuromarketing";',
    'import HeroSection from "@/components/HeroSection";'
  );
  content = content.replace('<HeroSectionNeuromarketing />', '<HeroSection />');
  console.log('✅ Switched to Original Hero Section');
} else if (content.includes('<HeroSection />')) {
  // Switch to neuromarketing
  content = content.replace(
    'import HeroSection from "@/components/HeroSection";',
    'import HeroSectionNeuromarketing from "@/components/HeroSectionNeuromarketing";'
  );
  content = content.replace('<HeroSection />', '<HeroSectionNeuromarketing />');
  console.log('✅ Switched to Neuromarketing Hero Section');
}

fs.writeFileSync(pagePath, content, 'utf8');
