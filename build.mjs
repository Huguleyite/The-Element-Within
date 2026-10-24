import { readFileSync, writeFileSync } from 'node:fs';
const read = name => readFileSync(new URL(`dist/${name}`, import.meta.url), 'utf8');
const html = read('index.html').replace('<link rel="stylesheet" href="style.css">', `<style>${read('style.css')}</style>`).replace('<script src="app.js"></script>', `<script>${read('app.js')}</script>`);
writeFileSync(new URL('The Element Within.html', import.meta.url), html);
console.log('Standalone HTML refreshed.');
