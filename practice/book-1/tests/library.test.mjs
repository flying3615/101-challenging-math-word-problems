import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const bank = JSON.parse(await readFile(new URL('question-bank.json', root), 'utf8'));
const page = await readFile(new URL('index.html', root), 'utf8');

assert.equal(bank.questions.length, 101, 'Book 1 must contain all 101 questions.');
assert.deepEqual(bank.questions.map(question => question.id), Array.from({ length: 101 }, (_, index) => index + 1), 'Question IDs must be contiguous from 1 to 101.');
for (const question of bank.questions) {
  for (const field of ['topic', 'question', 'answer', 'model', 'hint']) {
    assert.ok(String(question[field] ?? '').trim(), `Question ${question.id} needs a non-empty ${field}.`);
  }
  assert.ok(question.question.length >= 20, `Question ${question.id} needs complete learner-facing wording.`);
  assert.match(question.model, /^(bar-change|fraction-of-remainder|unit-bar|money-units|mass-bar|geometry)$/, `Question ${question.id} uses a supported visual model.`);
}

const numberWords = /\b(?:zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|twice|half)(?:-[a-z]+)?\b/i;
const numericFailures = bank.questions.flatMap(question => ['question', 'hint'].flatMap(field => numberWords.test(question[field]) ? [`Question ${question.id} ${field}`] : []));
assert.deepEqual(numericFailures, [], `Numeric quantities must use Arabic numerals: ${numericFailures.join(', ')}`);

assert.match(page, /book1MathStoryActive/, 'Book 1 must keep its own active-question state.');
assert.match(page, /book1MathStorySolved/, 'Book 1 must keep its own solved-question state.');
assert.doesNotMatch(page, /book(?:4|5)MathStory/, 'Book 1 must not use another book’s localStorage namespace.');
assert.doesNotMatch(page, /[\u{1F000}-\u{1FAFF}]/u, 'Learner-facing page must not contain emoji.');
assert.doesNotMatch(page, /speechSynthesis|Audio\(|new Audio|\.play\(/, 'Practice page must not use sound.');
assert.match(page, /function answerMatches\(/, 'Practice page must check submitted answers.');
assert.match(page, /Show a visual model/, 'Practice page must offer visual models.');
assert.match(page, /Show a small hint/, 'Practice page must offer hints.');

console.log('PASS: Book 1 bank, accessible practice behavior, and isolated progress requirements hold.');
