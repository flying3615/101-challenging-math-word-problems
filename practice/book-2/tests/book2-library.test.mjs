import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const bank = JSON.parse(await readFile(new URL('question-bank.json', root), 'utf8'));
const page = await readFile(new URL('index.html', root), 'utf8');
const sourceChunks = [
  'data/questions-001-034.json',
  'data/questions-035-070.json',
  'data/questions-071-101.json'
];

assert.equal(bank.title, 'Book 2 Challenge Library');
assert.equal(bank.questions.length, 101, 'Book 2 must include all 101 problems.');
assert.deepEqual(bank.questions.map(q => q.id), Array.from({ length: 101 }, (_, i) => i + 1), 'Question IDs must be contiguous from 1 to 101.');
const allowedModels = new Set(['bar-change', 'fraction-of-remainder', 'unit-bar', 'money-units', 'mass-bar', 'geometry']);
const numberWords = /\b(?:zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|twice|thrice|half)\b/i;
for (const q of bank.questions) {
  for (const field of ['topic', 'question', 'answer', 'model', 'hint']) {
    assert.ok(String(q[field] ?? '').trim(), `Question ${q.id} needs ${field}.`);
  }
  assert.match(q.question, /\d/, `Question ${q.id} must retain Arabic numeric quantities.`);
  assert.ok(allowedModels.has(q.model), `Question ${q.id} must use a supported visual model.`);
  assert.doesNotMatch(`${q.question}\n${q.hint}`, numberWords, `Question ${q.id} must use Arabic numerals for quantities.`);
}
assert.match(page, /question-bank\.js/, 'The local page must load its bank without fetch().');
assert.match(page, /book2MathStoryActive/, 'Book 2 must namespace the active problem state.');
assert.match(page, /book2MathStorySolved/, 'Book 2 must namespace solved state.');
assert.match(page, /book2MathStoryAttempted/, 'Book 2 must namespace attempted state.');
assert.match(page, /book2MathStoryHints/, 'Book 2 must namespace hint state.');
assert.doesNotMatch(page, /book[1456]MathStory/, 'Book 2 must not reuse another book state namespace.');
assert.match(page, /function answerMatches\(/, 'The page must provide answer-check behavior.');
assert.match(page, /function checkAnswer\(/, 'The page must check submitted answers.');
assert.match(page, /modelButton/, 'The page must offer a visual model.');
assert.match(page, /hintButton/, 'The page must offer a hint.');
assert.doesNotMatch(page, /speechSynthesis|AudioContext|<audio\b|\bsound\b/i, 'The practice page must not include sound.');
assert.doesNotMatch(page, /[\u{1F300}-\u{1FAFF}]/u, 'The practice page must not include emoji.');
for (const relative of sourceChunks) {
  const chunk = JSON.parse(await readFile(new URL(relative, root), 'utf8'));
  assert.ok(chunk.length > 0, `${relative} must be a non-empty maintainable source batch.`);
}
console.log(`PASS: Book 2 has ${bank.questions.length} complete, locally runnable practice questions.`);
