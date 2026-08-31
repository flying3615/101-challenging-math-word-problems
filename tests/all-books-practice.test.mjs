import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const page = await readFile(new URL('../index.html', import.meta.url), 'utf8');
assert.match(page, /practice: true/, 'All six books should be marked as having interactive practice.');
const progressKeys = {
  1: 'book1MathStorySolved', 2: 'book2MathStorySolved', 3: 'book3MathStorySolved',
  4: 'mathStorySolved', 5: 'book5MathStorySolved', 6: 'book6MathStorySolved',
};
for (const [book, key] of Object.entries(progressKeys)) {
  assert.ok(page.includes(`${book}:'${key}'`), `Book ${book} needs its independent saved-progress key.`);
}
assert.ok(page.includes('href="practice/book-${book.number}/index.html"'), 'Practice routing must remain dynamic for every book.');
console.log('PASS: homepage enables interactive practice and progress for all six books.');
