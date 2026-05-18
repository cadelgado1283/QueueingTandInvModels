const fs = require('fs');
const required = [
  'index.html',
  'sitio-a/index.html',
  'sitio-a/styles.css',
  'sitio-a/app.js',
  'sitio-a/data.js',
  'sitio-b/index.html',
  'sitio-b/styles.css',
  'sitio-b/solutions.js',
  'sitio-b/data.js',
  'backend/server.js',
  'backend/package.json',
  'netlify.toml',
  'vercel.json',
  '.github/workflows/deploy-github-pages.yml'
];
let ok = true;
for (const file of required) {
  if (!fs.existsSync(file)) {
    console.error(`Falta: ${file}`);
    ok = false;
  } else {
    console.log(`OK: ${file}`);
  }
}
process.exit(ok ? 0 : 1);
