import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const questions = JSON.parse(readFileSync(new URL('../practice/book-6/question-bank.json', import.meta.url), 'utf8')).questions;
const question = id => questions.find(item => item.id === id);

const q51 = question(51);
assert.match(q51.question, /1\/2 full/, 'Q51 must retain the printed 1/2-full basin A condition.');
assert.match(q51.question, /1\/5 full/, 'Q51 must retain the printed 1/5-full basin B condition.');
assert.equal(q51.answer, '2/5', 'Q51 must use the fraction produced by its segmented fill model.');
assert.match(q51.questionZh, /1\/2满/, 'Q51 Chinese wording must retain basin A at 1/2 full.');
assert.match(q51.questionZh, /1\/5满/, 'Q51 Chinese wording must retain basin B at 1/5 full.');

const q75 = question(75);
assert.match(q75.question, /distance Tom was from B when Jane overtook him/i, 'Q75(a) must ask for the 400 km remaining-to-B distance shown in the model.');
assert.match(q75.questionZh, /汤姆距离B多远/, 'Q75(a) Chinese wording must ask for the distance from B at overtaking.');

console.log('PASS: Book 6 Q51 and Q75 wording and answers agree with their source-aligned models.');
