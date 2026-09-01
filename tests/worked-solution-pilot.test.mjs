import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const expectedIds = Array.from({ length: 101 }, (_, index) => index + 1);
const root = new URL('../', import.meta.url);
const bank = JSON.parse(await readFile(new URL('../practice/book-4/question-bank.json', import.meta.url), 'utf8')).questions;
const page = await readFile(new URL('../practice/book-4/index.html', import.meta.url), 'utf8');
const i18n = await readFile(new URL('../i18n.js', import.meta.url), 'utf8');

assert.deepEqual(bank.filter(question => question.solution).map(question => question.id), expectedIds, 'Every Book 4 question should include a worked solution.');
for (const id of expectedIds) {
  const question = bank.find(entry => entry.id === id);
  const solution = question?.solution;
  const questionNumberTokens = [...new Set((question.question.match(/\$?\d+(?:\.\d+)?(?:\/\d+)?%?/g) || []).map(token => token.replace(/^\$/, '')))];
  const answerNumberTokens = [...new Set((question.answer.match(/\d+(?:\.\d+)?(?:\/\d+)?%?/g) || []))];
  for (const language of ['en', 'zh-Hans']) {
    assert.ok(solution?.[language]?.strategy?.trim(), `Q${id} needs a ${language} strategy.`);
    assert.ok(solution?.[language]?.steps?.length >= 2, `Q${id} needs at least 2 progressive ${language} steps.`);
    assert.ok(solution?.[language]?.steps?.every(step => step.title?.trim() && step.text?.trim()), `Q${id} needs complete ${language} step text.`);
    assert.ok(solution?.[language]?.answerCheck?.trim(), `Q${id} needs a final ${language} answer check.`);
    const solutionText = [solution[language].strategy, solution[language].answerCheck, ...solution[language].steps.flatMap(step => [step.title, step.text])].join(' ');
    assert.ok(questionNumberTokens.some(token => solutionText.includes(token)), `Q${id}'s ${language} solution must use a question-specific number.`);
    if (language === 'en') assert.ok(solutionText.includes(question.answer), `Q${id}'s English solution must state the exact checked answer: ${question.answer}.`);
    for (const token of answerNumberTokens) assert.ok(solutionText.includes(token), `Q${id}'s ${language} solution must show the answer number ${token}.`);
  }
}
assert.match(page, /id="solutionButton"/, 'The standard lesson page must expose a guided-solution control.');
assert.match(page, /solutionStage/, 'Guided solutions must reveal progressively rather than displaying at once.');
assert.match(i18n, /startGuidedSolution/, 'The guided-solution control needs bilingual labels.');
assert.doesNotMatch(page, /q4-guided\.html/, 'The pilot must not restore a Question 4-only entry point.');

console.log('PASS: all 101 Book 4 questions offer bilingual, progressive worked-solution guidance.');
