import { readFile, writeFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const sourceFiles = ['questions-001-034.json', 'questions-035-070.json', 'questions-071-101.json'];
const chunks = await Promise.all(sourceFiles.map(async file => JSON.parse(await readFile(new URL(`data/${file}`, root), 'utf8'))));
const questions = chunks.flat().sort((left, right) => left.id - right.id);
const requiredFields = ['id', 'topic', 'question', 'answer', 'model', 'hint'];
const allowedModels = new Set(['bar-change', 'fraction-of-remainder', 'unit-bar', 'money-units', 'mass-bar', 'geometry']);

if (questions.length !== 101 || questions.some((question, index) => question.id !== index + 1)) {
  throw new Error(`Expected contiguous Question IDs 1–101; found ${questions.map(question => question.id).join(', ')}.`);
}
for (const question of questions) {
  for (const field of requiredFields) {
    if (!String(question[field] ?? '').trim()) throw new Error(`Question ${question.id} is missing ${field}.`);
  }
  if (!allowedModels.has(question.model)) throw new Error(`Question ${question.id} uses an unknown model: ${question.model}.`);
}

const bank = { title: 'Book 3 Challenge Library', questions };
await writeFile(new URL('question-bank.json', root), `${JSON.stringify(bank, null, 2)}\n`);
await writeFile(new URL('question-bank.js', root), `window.QUESTION_BANK = ${JSON.stringify(questions, null, 2)};\n`);
console.log(`Built ${questions.length} Book 3 questions into question-bank.json and question-bank.js.`);
