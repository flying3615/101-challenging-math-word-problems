import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const bank = JSON.parse(await readFile(new URL('../practice/book-5/question-bank.json', import.meta.url), 'utf8')).questions;
const q69 = bank.find(question => question.id === 69);
const q83 = bank.find(question => question.id === 83);
const q31 = bank.find(question => question.id === 31);

assert.equal(q69.answer, '63°', 'Book 5 Q69 base angles must follow the stated 54° vertex angle in isosceles triangle BPQ.');
assert.equal(q83.answer, '(a) $6480; (b) 200%', 'Book 5 Q83 must calculate Samuel’s comparison from $3240 spent and $1080 given.');
assert.match(q31.solution.en.answerCheck, /(?:cannot|correction|conflict)/i, 'Book 5 Q31 must flag its unsolved source-data inconsistency rather than assert a false calculation.');

console.log('PASS: Book 5 answer integrity protects verified corrections and flags the unresolved source conflict.');
