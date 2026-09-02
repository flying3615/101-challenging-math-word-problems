import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const bank = JSON.parse(await readFile(new URL('../practice/book-5/question-bank.json', import.meta.url), 'utf8')).questions;
const q69 = bank.find(question => question.id === 69);
const q83 = bank.find(question => question.id === 83);
const q31 = bank.find(question => question.id === 31);

assert.equal(q69.answer, '59°', 'Book 5 Q69 must follow the printed square-angle chase and isosceles-triangle route.');
assert.equal(q83.answer, '(a) $6480; (b) 33 1/3%', 'Book 5 Q83 must compare the spending difference with the full six-part salary.');
assert.equal(q31.solution.en.answerCheck, '156 cups', 'Book 5 Q31 must use the printed two paid sets plus one single sales group.');

console.log('PASS: Book 5 answer integrity reflects the printed solution methods.');
