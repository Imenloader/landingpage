const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const files = ['HeroSection.tsx', 'IdentitySelector.tsx', 'CourseModules.tsx'];

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  if (content.includes('10,000 دولار')) {
    content = content.replace(/10,000 دولار/g, '100,000 جنيه');
    changed = true;
  }
  if (content.includes('أول دولار')) {
    content = content.replace(/أول دولار/g, 'أول أرباحك');
    changed = true;
  }
  if (content.includes('5000 دولار')) {
    content = content.replace(/5000 دولار/g, '50,000 جنيه');
    changed = true;
  }
  if (content.includes('دخل دولاري')) {
    content = content.replace(/دخل دولاري/g, 'دخل مادي مستقر');
    changed = true;
  }
  // replace any leftover standalone دولار
  if (content.includes('دولار')) {
    content = content.replace(/دولار/g, 'جنيه');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated', file);
  }
}
