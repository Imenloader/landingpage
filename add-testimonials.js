const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, 'src', 'app', 'page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');

if (!content.includes('import Testimonials')) {
  content = content.replace(
    'import RawProofWall from "@/components/RawProofWall";',
    'import Testimonials from "@/components/Testimonials";\nimport RawProofWall from "@/components/RawProofWall";'
  );
}

if (!content.includes('<Testimonials />')) {
  content = content.replace(
    '<RawProofWall />',
    '<Testimonials />\n      <RawProofWall />'
  );
}

fs.writeFileSync(pagePath, content, 'utf8');
console.log('Added Testimonials to page.tsx');
