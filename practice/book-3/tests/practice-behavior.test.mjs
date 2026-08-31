import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const page = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const source = page.match(/function norm\(.*?\n\s*function current\(/s)?.[0];
assert.ok(source, 'The practice page must provide answer matching code.');
const sandbox = {};
vm.runInNewContext(`${source.replace(/\n\s*function current\([\s\S]*/, '')}\nglobalThis.answerMatches = answerMatches;`, sandbox);

assert.equal(sandbox.answerMatches('225', '225'), true, 'A verified exact answer must be accepted.');
assert.equal(sandbox.answerMatches('91 m2', '91 m²'), true, 'Harmless unit formatting must be accepted.');
assert.equal(sandbox.answerMatches('2', '225'), false, 'A partial answer must not be accepted.');
assert.equal(sandbox.answerMatches('224', '225'), false, 'An incorrect answer must be rejected.');
console.log('PASS: Book 3 accepts verified answers and rejects partial or incorrect answers.');
