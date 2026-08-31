import { readFile, writeFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const names = ['questions-001-034.json', 'questions-035-070.json', 'questions-071-101.json'];
const chunks = await Promise.all(names.map(name => readFile(new URL(`data/${name}`, root), 'utf8').then(JSON.parse)));
const questions = chunks.flat().sort((a, b) => a.id - b.id);
const required = ['id', 'topic', 'question', 'answer', 'model', 'hint'];
const ids = questions.map(q => q.id);
if (questions.length !== 101 || ids.some((id, index) => id !== index + 1)) throw new Error('Expected 101 contiguous Book 2 question IDs.');
for (const q of questions) for (const field of required) if (!String(q[field] ?? '').trim()) throw new Error(`Question ${q.id} has no ${field}.`);
const bank = { title: 'Book 2 Challenge Library', questions };
await writeFile(new URL('question-bank.json', root), JSON.stringify(bank, null, 2) + '\n');
await writeFile(new URL('question-bank.js', root), `window.QUESTION_BANK = ${JSON.stringify(questions, null, 2)};\n`);
console.log(`Built ${questions.length} Book 2 questions.`);
