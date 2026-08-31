import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const expected = {
  1: ['#2f6ea5', '#20547e'],
  2: ['#4d7f57', '#355c3d'],
  3: ['#bd704e', '#8d4d32'],
  6: ['#ad3b55', '#7d253a'],
};
for (const [book, [primary, dark]] of Object.entries(expected)) {
  const page = await readFile(new URL(`../practice/book-${book}/index.html`, import.meta.url), 'utf8');
  assert.ok(page.includes(`--violet:${primary}`), `Book ${book} practice must use its homepage primary colour.`);
  assert.ok(page.includes(`--violet-dark:${dark}`), `Book ${book} practice must use its homepage dark colour.`);
}
console.log('PASS: all new practice pages match their homepage colour identities.');
