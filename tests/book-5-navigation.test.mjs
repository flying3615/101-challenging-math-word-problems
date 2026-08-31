import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const homepage = await readFile(new URL('../index.html', import.meta.url), 'utf8');
assert.match(homepage, /practice: true/, 'Book 5 must remain marked as ready for interactive practice alongside the other books.');
assert.match(homepage, /href="practice\/book-\$\{book\.number\}\/index\.html"/, 'The homepage must generate a practice-library route for a selected ready book.');
console.log('PASS: Book 5 is available from the central practice homepage.');
