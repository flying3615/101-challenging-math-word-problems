import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const homepage = await readFile(new URL('../index.html', import.meta.url), 'utf8');
assert.match(homepage, /4:\{primary:'#6e54c8'/, 'Book 4 needs the same violet used by its practice site.');
assert.match(homepage, /5:\{primary:'#0f7c7c'/, 'Book 5 needs the same teal used by its practice site.');
assert.match(homepage, /--active/, 'Selecting a book must apply its colour to the detail panel and action buttons.');
console.log('PASS: homepage selection colours match the book practice themes.');
