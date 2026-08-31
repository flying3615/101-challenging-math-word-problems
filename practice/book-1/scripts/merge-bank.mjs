import { readFile, writeFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const names = ['questions-001-034.json', 'questions-035-070.json', 'questions-071-101.json'];
const chunks = await Promise.all(names.map(async name => JSON.parse(await readFile(new URL(`data/${name}`, root), 'utf8'))));
const questions = chunks.flat().sort((left, right) => left.id - right.id);
const ids = questions.map(question => question.id);
if (questions.length !== 101 || ids.some((id, index) => id !== index + 1)) {
  throw new Error(`Expected Questions 1–101; received ${questions.length} entries.`);
}
await writeFile(new URL('question-bank.json', root), JSON.stringify({ title: 'Book 1 Challenge Library', questions }, null, 2) + '\n');
await writeFile(new URL('question-bank.js', root), `window.QUESTION_BANK = ${JSON.stringify(questions, null, 2)};\n`);
console.log(`Built ${questions.length} Book 1 questions.`);
