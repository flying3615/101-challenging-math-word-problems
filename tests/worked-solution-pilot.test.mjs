import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const pilotIds = [1, 8, 11, 19, 25, 47, 62, 70, 74, 87];
const root = new URL('../', import.meta.url);
const bank = JSON.parse(await readFile(new URL('../practice/book-4/question-bank.json', import.meta.url), 'utf8')).questions;
const page = await readFile(new URL('../practice/book-4/index.html', import.meta.url), 'utf8');
const i18n = await readFile(new URL('../i18n.js', import.meta.url), 'utf8');

assert.deepEqual(bank.filter(question => question.solution).map(question => question.id), pilotIds, 'Only the 10 selected Book 4 pilot questions should include worked solutions.');
for (const id of pilotIds) {
  const solution = bank.find(question => question.id === id)?.solution;
  for (const language of ['en', 'zh-Hans']) {
    assert.ok(solution?.[language]?.strategy?.trim(), `Q${id} needs a ${language} strategy.`);
    assert.ok(solution?.[language]?.steps?.length >= 2, `Q${id} needs at least 2 progressive ${language} steps.`);
    assert.ok(solution?.[language]?.steps?.every(step => step.title?.trim() && step.text?.trim()), `Q${id} needs complete ${language} step text.`);
    assert.ok(solution?.[language]?.answerCheck?.trim(), `Q${id} needs a final ${language} answer check.`);
  }
}
assert.match(page, /id="solutionButton"/, 'The standard lesson page must expose a guided-solution control.');
assert.match(page, /solutionStage/, 'Guided solutions must reveal progressively rather than displaying at once.');
assert.match(i18n, /startGuidedSolution/, 'The guided-solution control needs bilingual labels.');
assert.doesNotMatch(page, /q4-guided\.html/, 'The pilot must not restore a Question 4-only entry point.');

console.log('PASS: 10 Book 4 questions offer bilingual, progressive worked-solution guidance.');
