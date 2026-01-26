// debug.js
const path = require('path');
const fs = require('fs');

console.log('Current directory:', process.cwd());
console.log('__dirname:', __dirname);

const possiblePaths = [
  path.join(__dirname, 'dist/Application_2_stage/index.html'),
  path.join(__dirname, 'dist/Application_2_stage/browser/index.html'),
  path.join(process.cwd(), 'dist/Application_2_stage/index.html'),
  path.join(process.cwd(), 'dist/Application_2_stage/browser/index.html'),
];

possiblePaths.forEach((p, i) => {
  console.log(`Path ${i}: ${p}`);
  console.log(`Exists: ${fs.existsSync(p)}`);
});
