import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const page = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const norm = page.match(/function norm\(s\)\{[^\n]+/)[0];
const answerMatches = page.match(/function answerMatches\(given,answer\)\{[^\n]+/)[0];
const matches = Function(`${norm}\n${answerMatches}\nreturn answerMatches;`)();

assert.equal(matches('394', '394'), true, 'A verified single-number answer should be accepted.');
assert.equal(matches('2 apple pies and 6 chocolate pies', '2 apple pies and 6 chocolate pies'), true, 'A verified multi-part answer should be accepted.');
assert.equal(matches('2', '2 apple pies and 6 chocolate pies'), false, 'A partial multi-part answer must not be accepted.');
assert.equal(matches('30', '30; 70'), false, 'A partial numeric answer must not be accepted.');
console.log('PASS: answer checking accepts complete answers and rejects partial answers.');
