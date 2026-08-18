const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  if (content.includes('مستقر مستقر')) {
    content = content.replace(/مستقر مستقر/g, 'مستقر');
    changed = true;
  }
  
  if (content.includes('ديلات قيمة ومستمرة')) {
    // just checking if this needs a fix
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed typo in', file);
  }
}
