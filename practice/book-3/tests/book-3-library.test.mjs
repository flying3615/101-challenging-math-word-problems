import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const root = new URL('../', import.meta.url);
const load = name => readFile(new URL(name, root), 'utf8');

const bank = JSON.parse(await load('question-bank.json'));
const page = await load('index.html');
const generated = await load('question-bank.js');

assert.equal(bank.title, 'Book 3 Challenge Library');
assert.equal(bank.questions.length, 101, 'Book 3 must include all Questions 1–101.');
assert.deepEqual(bank.questions.map(question => question.id), Array.from({ length: 101 }, (_, index) => index + 1), 'Question IDs must be contiguous from 1 through 101.');

const requiredFields = ['id', 'topic', 'question', 'answer', 'model', 'hint'];
const allowedModels = new Set(['bar-change', 'fraction-of-remainder', 'unit-bar', 'money-units', 'mass-bar', 'geometry']);
for (const question of bank.questions) {
  for (const field of requiredFields) assert.ok(String(question[field] ?? '').trim(), `Question ${question.id} needs ${field}.`);
  assert.ok(question.question.trim().length >= 25, `Question ${question.id} needs readable wording.`);
  assert.ok(allowedModels.has(question.model), `Question ${question.id} has an unsupported model.`);
}

const window = {};
vm.runInNewContext(generated, { window });
assert.deepEqual(JSON.parse(JSON.stringify(window.QUESTION_BANK)), bank.questions, 'The browser data file must exactly match question-bank.json.');

assert.match(page, /book3MathStoryActive/, 'Book 3 must use its own active-question key.');
assert.match(page, /book3MathStorySolved/, 'Book 3 must use its own solved-question key.');
assert.match(page, /book3MathStoryAttempted/, 'Book 3 must use its own attempt key.');
assert.match(page, /book3MathStoryHints/, 'Book 3 must use its own hint key.');
assert.doesNotMatch(page, /book[45]MathStory|mathStoryActive/, 'Book 3 must not read or write another book’s storage namespace.');
assert.doesNotMatch(page, /[\u{1F300}-\u{1FAFF}]/u, 'Book 3 learner-facing UI must not contain emoji.');
assert.doesNotMatch(page, /speechSynthesis|Audio\(|new Audio|\.play\(\)/, 'Book 3 must not include sound or speech features.');

assert.match(page, /function answerMatches\(/, 'Practice page needs checkable-answer behavior.');
assert.match(page, /function renderLesson\(/, 'Practice page needs question rendering behavior.');
assert.match(page, /Show a visual model/, 'Practice page needs a visual model control.');
assert.match(page, /Show a small hint/, 'Practice page needs a hint control.');
assert.match(page, /Check my answer/, 'Practice page needs an answer-checking control.');

console.log('PASS: Book 3 question bank, isolation, and practice controls are complete.');
