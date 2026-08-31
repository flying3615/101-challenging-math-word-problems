import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const page = await readFile(new URL('../index.html', import.meta.url), 'utf8');
assert.match(page, /book5MathStoryActive/, 'Book 5 must use its own progress-storage key.');
assert.doesNotMatch(page, /localStorage\.getItem\('mathStoryActive'\)/, 'Book 5 must not read Book 4 progress.');
console.log('PASS: Book 5 progress is isolated from Book 4.');
