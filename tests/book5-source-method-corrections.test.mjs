import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const bank = JSON.parse(await readFile(new URL('../practice/book-5/question-bank.json', import.meta.url), 'utf8')).questions;
const q = id => bank.find(question => question.id === id);

assert.match(q(31).question, /number of sets of 5 cups.*2 times.*cups sold singly/i, 'Book 5 Q31 must state the transaction-group relationship used by its printed solution.');
assert.doesNotMatch(q(31).solution.en.strategy, /inconsistency/i, 'Book 5 Q31 learner guidance must follow the printed transaction-group solution.');
assert.equal(q(69).answer, '59°', 'Book 5 Q69 must use the printed angle-chase result.');
assert.match(q(69).question, /angle QBC is 54°/i, 'Book 5 Q69 must name the adjacent 54° angle used in the printed solution.');
assert.equal(q(83).answer, '(a) $6480; (b) 33 1/3%', 'Book 5 Q83 must use the printed full-salary percentage comparison.');
assert.match(q(83).solution.en.strategy, /full salary/i, 'Book 5 Q83 learner guidance must state the printed comparison denominator.');

console.log('PASS: Book 5 Q31, Q69 and Q83 match their selected printed-answer methods.');
