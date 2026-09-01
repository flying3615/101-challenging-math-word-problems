import assert from 'node:assert/strict';
import { access } from 'node:fs/promises';

await assert.rejects(
  access(new URL('../practice/book-4/q4-guided.html', import.meta.url)),
  'Book 4 must not expose a Question 4-only guided route.'
);

console.log('PASS: Book 4 has no Question 4-only guided route.');
