import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const page = await readFile(new URL('../index.html', import.meta.url), 'utf8');
assert.match(page, /function getBookProgress\(book\)/, 'Homepage must read saved progress for each interactive book.');
assert.match(page, /mathStorySolved/, 'Book 4 progress must use its saved-progress key.');
assert.match(page, /book5MathStorySolved/, 'Book 5 progress must use its saved-progress key.');
assert.match(page, /class="progress-ring/, 'Every book card must include a progress ring.');
assert.match(page, /style="--progress:\$\{progress\.percent\|\|0\}"/, 'Interactive rings must use the calculated progress percentage.');
assert.match(page, /PDF only/, 'Books without interactive practice must not imply that progress can be tracked.');
console.log('PASS: homepage book cards contain accurate progress rings.');
