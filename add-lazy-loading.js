const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

let totalChanges = 0;

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Add loading="lazy" to all <img> tags that don't already have it
  const imgRegex = /<img\s(?![^>]*loading=)/g;
  if (imgRegex.test(content)) {
    content = content.replace(/<img\s(?![^>]*loading=)/g, '<img loading="lazy" ');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    totalChanges++;
    console.log('Added lazy loading to', file);
  }
}

console.log('Total files updated:', totalChanges);
