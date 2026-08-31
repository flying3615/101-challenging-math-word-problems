import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const bank = JSON.parse(await readFile(new URL('question-bank.json', root), 'utf8'));
const page = await readFile(new URL('index.html', root), 'utf8');
const expectedIds = Array.from({ length: 101 }, (_, index) => index + 1);
const requiredFields = ['id', 'topic', 'question', 'answer', 'model', 'hint'];
const allowedModels = new Set(['bar-change', 'fraction-of-remainder', 'unit-bar', 'money-units', 'mass-bar', 'geometry']);

assert.equal(bank.title, 'Book 6 Challenge Library');
assert.equal(bank.questions.length, 101, 'The library must cover all Questions 1–101.');
assert.deepEqual(bank.questions.map(question => question.id), expectedIds, 'Question IDs must be consecutive.');
for (const question of bank.questions) {
  for (const field of requiredFields) assert.ok(String(question[field] ?? '').trim(), `Question ${question.id} requires ${field}.`);
  assert.ok(question.question.trim().length >= 25, `Question ${question.id} needs readable wording.`);
  assert.ok(allowedModels.has(question.model), `Question ${question.id} has an unsupported model.`);
}

const numberWords = /\b(?:zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|hundred|thousand|million|twice|half|quarter)(?:-[a-z]+)?\b/i;
const numberWordFailures = bank.questions.flatMap(question => ['question', 'hint'].flatMap(field => numberWords.test(question[field]) ? [`Question ${question.id} ${field}: ${question[field]}`] : []));
assert.deepEqual(numberWordFailures, [], `Numeric quantities must use Arabic numerals.\n${numberWordFailures.join('\n')}`);

assert.match(page, /book6MathStoryActive/, 'Book 6 must use its own active-progress key.');
assert.match(page, /book6MathStorySolved/, 'Book 6 must persist solved problems independently.');
assert.match(page, /book6MathStoryAttempted/, 'Book 6 must persist attempts independently.');
assert.match(page, /book6MathStoryHints/, 'Book 6 must persist hint use independently.');
assert.doesNotMatch(page, /book[45]MathStory|mathStoryActive/, 'Book 6 must not read another book’s progress.');
assert.match(page, /function answerMatches\(/, 'The page must include answer-checking behavior.');
assert.match(page, /id="checkButton"/, 'The page must provide an answer-check control.');
assert.match(page, /id="modelButton"/, 'The page must provide a visual-model control.');
assert.match(page, /id="hintButton"/, 'The page must provide a hint control.');
assert.doesNotMatch(page, /[\u{1F300}-\u{1FAFF}]/u, 'Learner-facing page must not contain emoji.');
assert.doesNotMatch(page, /speechSynthesis|Audio\(|new Audio|\.play\(\)/i, 'Learner-facing page must not contain sound behavior.');

console.log('PASS: Book 6 bank, numeric format, isolated state, and practice controls are ready.');
