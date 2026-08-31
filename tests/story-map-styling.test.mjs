import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

for (const book of [1, 2, 3, 5, 6]) {
  const page = await readFile(new URL(`../practice/book-${book}/index.html`, import.meta.url), 'utf8');
  assert.ok(!page.includes('[truncated]'), `Book ${book} must not contain a truncated CSS fragment.`);
  for (const selector of ['.model-kicker{', '.model-values{', '.relation-cards{', '.story-card{', '.story-arrow{', '.model-caption{']) {
    assert.ok(page.includes(selector), `Book ${book} must style ${selector} used by its Story map.`);
  }
}
console.log('PASS: all new books include the Story map styling required by their model markup.');
