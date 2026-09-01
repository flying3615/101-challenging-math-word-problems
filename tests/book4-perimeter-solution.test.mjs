import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const bank = JSON.parse(await readFile(new URL('../practice/book-4/question-bank.json', import.meta.url), 'utf8')).questions;
const question72 = bank.find(question => question.id === 72);

for (const language of ['en', 'zh-Hans']) {
  const boundaryStep = question72.solution[language].steps.find(step => /boundary|边界|周长/.test(step.title));
  assert.ok(boundaryStep, `Q72 needs a ${language} step that adds the boundary.`);
  assert.match(boundaryStep.text, /\(EF \+ HG\).*?= 9/, `Q72's ${language} perimeter equation must group EF and HG before using their combined 9 cm length.`);
}

console.log('PASS: Book 4 Q72 groups the two horizontal perimeter segments accurately.');
