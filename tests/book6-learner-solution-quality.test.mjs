import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const bank = JSON.parse(await readFile(new URL('../practice/book-6/question-bank.json', import.meta.url), 'utf8')).questions;
const byId = new Map(bank.map(question => [question.id, question]));

assert.match(byId.get(3).question, /reduced by 1\/3/, 'Q3 must retain the printed 1/3 reduction.');
assert.match(byId.get(71).question, /reached Q at 3\.30 pm/, 'Q71 must retain the printed 3.30 pm target time.');
assert.match(byId.get(74).question, /first 5\/9/, 'Q74 must retain the printed first 5/9 journey fraction.');
assert.match(byId.get(84).question, /C had 2\/3/, 'Q84 must retain the printed 2/3 relationship.');

const learnerFacingDiagnostics = /\b(?:current source|printed-book|canonical answer|retain the canonical|source facts|source answer|cannot be derived|source conflict|internally inconsistent)\b/i;
for (const question of bank) {
  for (const language of ['en', 'zh-Hans']) {
    const solution = question.solution?.[language];
    const text = [solution?.strategy, ...(solution?.steps ?? []).flatMap(step => [step.title, step.text]), solution?.answerCheck].join(' ');
    assert.doesNotMatch(text, learnerFacingDiagnostics, `Q${question.id} ${language} must give learners a coherent derivation, not editorial diagnostics.`);
  }
}

console.log('PASS: Book 6 presents coherent printed-source derivations without editorial diagnostics.');
