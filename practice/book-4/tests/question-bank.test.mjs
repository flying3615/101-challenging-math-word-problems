import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const raw = await readFile(new URL('../question-bank.json', import.meta.url), 'utf8');
const bank = JSON.parse(raw);

assert.equal(bank.questions.length, 101, 'The learning library must cover Questions 1–101.');
assert.deepEqual(bank.questions.map(q => q.id), Array.from({ length: 101 }, (_, i) => i + 1), 'Question IDs must be consecutive.');
for (const question of bank.questions) {
  assert.ok(question.question.trim().length >= 25, `Question ${question.id} needs readable English wording.`);
  assert.ok(question.topic, `Question ${question.id} needs a topic.`);
  assert.ok(question.model, `Question ${question.id} needs a visual model.`);
  assert.ok(question.answer !== undefined && question.answer !== '', `Question ${question.id} needs a checkable answer.`);
}
console.log(`PASS: ${bank.questions.length} questions are ready for the learning library.`);
