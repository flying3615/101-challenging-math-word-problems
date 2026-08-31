import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const css = await readFile(new URL('../practice/recovered-ui.css', import.meta.url), 'utf8');
for (const selector of ['.hint-box{', '.answer-area{', '.answer-line{', '.answer-line input{', '.bottom-nav{', '.bottom-nav button{', '.bottom-nav .advance{']) {
  assert.ok(css.includes(selector), `Shared stylesheet must style ${selector}`);
}
for (const book of [1, 2, 3, 5, 6]) {
  const page = await readFile(new URL(`../practice/book-${book}/index.html`, import.meta.url), 'utf8');
  assert.match(page, /<link rel="stylesheet" href="\.\.\/recovered-ui\.css">/, `Book ${book} must load the shared lower-control styling.`);
}
console.log('PASS: every affected practice page loads styled hint, answer, and navigation controls.');
