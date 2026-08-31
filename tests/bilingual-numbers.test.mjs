import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

async function questions(book) {
  const file = new URL(`../practice/book-${book}/question-bank.json`, import.meta.url);
  return JSON.parse(await readFile(file, 'utf8')).questions;
}

const book3 = await questions(3);
const book4 = await questions(4);
const book6 = await questions(6);

assert.match(book3[82].questionZh, /6:40/, 'Book 3 Q83 must retain the time in Arabic digits.');
assert.match(book4[6].questionZh, /每1行/, 'Book 4 Q7 must retain the per-row quantity in Arabic digits.');
assert.match(book4[7].hintZh, /10/, 'Book 4 Q8 hint must retain the 10-sweet transfer.');
assert.match(book4[10].questionZh, /3个包裹/, 'Book 4 Q11 must retain the number of parcels in Arabic digits.');
assert.match(book4[15].hintZh, /2种纸币/, 'Book 4 Q16 hint must retain the number of note types in Arabic digits.');
assert.match(book4[53].hintZh, /2/, 'Book 4 Q54 hint must retain the 2-cookie conversion.');
assert.match(book4[89].questionZh, /2天/, 'Book 4 Q90 must use Arabic digits for the 2-day quantity.');
assert.match(book4[89].hintZh, /2天/, 'Book 4 Q90 hint must use Arabic digits for the 2-day total.');
assert.match(book6[38].questionZh, /2个同心圆/, 'Book 6 Q39 must use Arabic digits for the number of circles.');

console.log('PASS: localized mathematical quantities remain explicit Arabic numerals.');
