const fs = require('fs');
const html = fs.readFileSync('C:/Users/Hp/.gemini/antigravity-ide/brain/640b95f6-b7f8-4fd5-a97a-2e07f4811c32/.system_generated/steps/509/content.md', 'utf8');
const matches = html.match(/https?:\/\/[^\s"'<>]+\.(jpg|jpeg|png|webp)/gi);
if (matches) {
  console.log([...new Set(matches)]);
} else {
  console.log("No images found.");
}
