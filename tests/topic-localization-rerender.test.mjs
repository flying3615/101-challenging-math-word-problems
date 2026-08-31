import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

for (const book of [1, 2, 3, 4, 5, 6]) {
  const page = await readFile(new URL(`../practice/book-${book}/index.html`, import.meta.url), 'utf8');
  assert.match(page, /I18N\.topic\(t\)/, `Book ${book} must localize labels when it rerenders topics.`);
  assert.match(page, /state\.topic==='All'\?I18N\.t\('allProblems'\):I18N\.topic\(state\.topic\)/, `Book ${book} must localize the selected-topic heading.`);
}

console.log('PASS: rerendered topic controls preserve the selected language.');
