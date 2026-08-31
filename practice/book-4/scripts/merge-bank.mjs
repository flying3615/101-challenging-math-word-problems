import { readFile, writeFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const names = ['questions-001-034.json', 'questions-035-070.json', 'questions-071-101.json'];
const chunks = await Promise.all(names.map(async name => JSON.parse(await readFile(new URL(`data/${name}`, root), 'utf8'))));
const questions = chunks.flat().sort((a, b) => a.id - b.id);
const curriculum = id => {
  if (id <= 9) return 'Whole Numbers';
  if (id <= 48) return 'Fractions';
  if (id <= 66) return 'Money';
  if (id <= 70) return 'Mass';
  if (id <= 78) return 'Area & Perimeter';
  return '2-part Word Problems';
};
for (const question of questions) question.topic = curriculum(question.id);
const ids = questions.map(q => q.id);
if (questions.length !== 101 || ids.some((id, i) => id !== i + 1)) {
  throw new Error(`Expected exactly Questions 1–101; got ${questions.length} entries with IDs ${ids.join(', ')}`);
}
const bank = { title: '101 Challenge Library', questions };
await writeFile(new URL('question-bank.json', root), JSON.stringify(bank, null, 2) + '\n');
await writeFile(new URL('question-bank.js', root), `window.QUESTION_BANK = ${JSON.stringify(questions, null, 2)};\n`);
console.log(`Built ${questions.length} questions into question-bank.json and question-bank.js.`);
