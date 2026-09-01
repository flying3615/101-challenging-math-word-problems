import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const bank = JSON.parse(await readFile(new URL('../practice/book-4/question-bank.json', import.meta.url), 'utf8')).questions;
const question6 = bank.find(question => question.id === 6);

assert.equal(question6.answer, '240 beads', 'Q6 asks how many beads Mrs Taylor gave in total, so its answer must not say "each".');

console.log('PASS: Book 4 Q6 answer matches the quantity the question asks for.');
