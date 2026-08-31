import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFile } from 'node:fs/promises';

const page = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const lines = page.split('\n');
const normLine = lines.find(line => line.includes('function norm'));
const answerMatcherLine = lines.find(line => line.includes('function answerMatches'));
assert.ok(normLine && answerMatcherLine, 'The page must provide its real answer-matching implementation.');
const sandbox = {};
vm.runInNewContext(`${normLine}\n${answerMatcherLine}; result = answerMatches;`, sandbox);
const answerMatches = sandbox.result;

assert.equal(answerMatches('35', '35'), true, 'A verified exact numeric answer must be accepted.');
assert.equal(answerMatches('$94', '94'), true, 'Harmless currency formatting must be accepted.');
assert.equal(answerMatches('50; 90', '50; 90'), true, 'A complete 2-part response must be accepted.');
assert.equal(answerMatches('3', '35'), false, 'A partial numeric response must not be accepted as a complete answer.');
assert.equal(answerMatches('36', '35'), false, 'A different numeric response must be rejected.');
console.log('PASS: the real answer checker accepts complete answers and rejects partial or incorrect ones.');
