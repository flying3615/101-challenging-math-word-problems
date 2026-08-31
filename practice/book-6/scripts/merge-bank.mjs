import { readFile, writeFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const names = ['questions-001-034.json', 'questions-035-070.json', 'questions-071-101.json'];
const chunks = await Promise.all(names.map(async name => JSON.parse(await readFile(new URL(`data/${name}`, root), 'utf8'))));
const questions = chunks.flat().sort((left, right) => left.id - right.id);
const expectedIds = Array.from({ length: 101 }, (_, index) => index + 1);
if (questions.length !== expectedIds.length || questions.some((question, index) => question.id !== expectedIds[index])) {
  throw new Error(`Expected contiguous Question IDs 1–101; received ${questions.map(question => question.id).join(', ')}.`);
}
const bank = { title: 'Book 6 Challenge Library', questions };
await writeFile(new URL('question-bank.json', root), JSON.stringify(bank, null, 2) + '\n');
await writeFile(new URL('question-bank.js', root), `window.QUESTION_BANK = ${JSON.stringify(questions, null, 2)};\n`);
console.log(`Built ${questions.length} Book 6 questions into question-bank.json and question-bank.js.`);
