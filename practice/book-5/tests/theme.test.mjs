import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const page = await readFile(new URL('../index.html', import.meta.url), 'utf8');
assert.match(page, /<meta name="theme-color" content="#0f7c7c"/, 'Book 5 needs its own teal browser theme color.');
assert.match(page, /--violet:#0f7c7c/, 'Book 5 primary learning controls need the teal palette.');
assert.doesNotMatch(page, /--violet:#6e54c8/, 'Book 5 must not reuse Book 4’s violet primary palette.');
console.log('PASS: Book 5 uses a distinct teal visual identity.');
