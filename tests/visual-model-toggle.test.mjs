import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

for (const book of [1, 2, 3, 4, 5, 6]) {
  const page = await readFile(new URL(`../practice/book-${book}/index.html`, import.meta.url), 'utf8');
  assert.match(page, /event\.target\.id==='modelButton'&&state\.modelOpen/, `Book ${book} must close an open visual model when its button is clicked again.`);
}

const i18n = await readFile(new URL('../i18n.js', import.meta.url), 'utf8');
assert.match(i18n, /Hide visual model/, "English must describe the model button's close action.");
assert.match(i18n, /隐藏图示/, "Chinese must describe the model button's close action.");

console.log('PASS: visual models toggle open and closed in every book.');
