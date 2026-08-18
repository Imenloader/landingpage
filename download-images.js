const fs = require('fs');
const https = require('https');
const path = require('path');

const urls = [
  "https://d1yei2z3i6k35z.cloudfront.net/14693084/68ebba962dc21_Untitleddesign3.png",
  "https://d1yei2z3i6k35z.cloudfront.net/14693084/6918c0aa2e266_ad522012-06fd-4a50-bb32-4d244170ad7e.png",
  "https://d1yei2z3i6k35z.cloudfront.net/14693084/6918c0fa4458a_77921cd3-9602-47e1-a530-ceb7a5888aaa.png",
  "https://d1yei2z3i6k35z.cloudfront.net/14693084/6918c0e9b2f3e_5f3912db-d1ab-43a3-9927-d7d0ac627d1a.png",
  "https://d1yei2z3i6k35z.cloudfront.net/14693084/6918c10777cbd_de2b0069-0a9b-4404-8c87-0caf66a56220.png",
  "https://d1yei2z3i6k35z.cloudfront.net/14693084/68ebbac80680f_Untitleddesign2.png",
  "https://d1yei2z3i6k35z.cloudfront.net/14693084/68ebbb832c552_Untitleddesign4.png"
];

urls.forEach((url, i) => {
  const dest = path.join(__dirname, `screenshot_${i+1}.png`);
  const file = fs.createWriteStream(dest);
  https.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close();  
      console.log(`Downloaded ${dest}`);
    });
  });
});
