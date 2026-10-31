import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const pages=fs.readdirSync(root).filter(x=>x.endsWith('.html'));
assert.equal(pages.length,18,'Expected exactly 18 website pages');
let links=0;
for(const file of pages){const html=fs.readFileSync(path.join(root,file),'utf8');assert.equal((html.match(/<h1>/g)||[]).length,1,`${file}: one H1`);assert.match(html,/<title>[^<]+<\/title>/);assert.match(html,/<meta name="description"/);assert.match(html,/<html lang="en">/);assert.match(html,/id="main"/);for(const [,url]of html.matchAll(/(?:href|src)="([^"]+)"/g)){if(/^(https?:|tel:|mailto:|#)/.test(url))continue;assert.ok(fs.existsSync(path.join(root,url.split('#')[0])),`${file}: missing ${url}`);links++;}for(const [,anchor]of html.matchAll(/href="#([^"]+)"/g))assert.ok(html.includes(`id="${anchor}"`),`${file}: missing anchor ${anchor}`);}
for(const file of ['experience-marigold.html','experience-royal.html','experience-midnight.html'])assert.match(fs.readFileSync(path.join(root,file),'utf8'),/Not a completed event/);
assert.ok(fs.existsSync(path.join(root,'assets/luvvent-logo.png')));
console.log(`PASS: ${pages.length} pages; ${links} local links/assets; headings, metadata, anchors, logo and concept labels.`);
