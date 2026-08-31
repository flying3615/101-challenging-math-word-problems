import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const homepage = await readFile(new URL('../index.html', import.meta.url), 'utf8');
assert.match(homepage, /6:\{primary:'#ad3b55',dark:'#7d253a',soft:'#fae6eb'\}/, 'Book 6 must use a berry palette distinct from Book 3’s coral palette.');
assert.doesNotMatch(homepage, /6:\{primary:'#a56d22'/, 'Book 6 must no longer use the warm amber palette that was too similar to Book 3.');
console.log('PASS: Book 6 uses a colour distinct from Book 3.');
