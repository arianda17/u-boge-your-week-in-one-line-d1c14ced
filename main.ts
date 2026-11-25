const ENTRY = "Shipped the fix, killed the demo laptop, cat filed the incident report before I did";

const fs = require('node:fs');
const path = require('node:path');

const outputDir = '/output';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(path.join(outputDir, 'entry.txt'), ENTRY, { encoding: 'utf8', flag: 'w' });

console.log(ENTRY);