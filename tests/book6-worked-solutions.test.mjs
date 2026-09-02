import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const expectedIds = Array.from({ length: 101 }, (_, index) => index + 1);
const bank = JSON.parse(await readFile(new URL('../practice/book-6/question-bank.json', import.meta.url), 'utf8')).questions;
const page = await readFile(new URL('../practice/book-6/index.html', import.meta.url), 'utf8');
const i18n = await readFile(new URL('../i18n.js', import.meta.url), 'utf8');
const containsNumberToken = (text, token) =>
  new RegExp(`(?<!\\d)${token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?!\\d|\\.\\d)`).test(text);

assert.deepEqual(bank.filter(question => question.solution).map(question => question.id), expectedIds, 'Every Book 6 question should include a worked solution.');
for (const question of bank) {
  const solution = question.solution;
  for (const language of ['en', 'zh-Hans']) {
    assert.ok(solution?.[language]?.strategy?.trim(), `Q${question.id} needs a ${language} strategy.`);
    assert.ok(solution?.[language]?.steps?.length >= 2, `Q${question.id} needs at least 2 progressive ${language} steps.`);
    assert.ok(solution?.[language]?.steps?.every(step => step.title?.trim() && step.text?.trim()), `Q${question.id} needs complete ${language} step text.`);
    assert.ok(solution?.[language]?.answerCheck?.trim(), `Q${question.id} needs a final ${language} answer check.`);
  }
  assert.ok(solution.en.answerCheck.includes(question.answer), `Q${question.id}'s English solution must state its checked answer.`);
  const sourceNumbers = [...new Set(question.question.match(/\d+(?:\.\d+)?/g) || [])];
  for (const language of ['en', 'zh-Hans']) {
    const explanation = [solution[language].strategy, ...solution[language].steps.map(step => `${step.title} ${step.text}`), solution[language].answerCheck].join(' ');
    assert.ok(sourceNumbers.some(token => containsNumberToken(explanation, token)), `Q${question.id}'s ${language} solution must use a real number from the question.`);
  }
  for (const token of question.answer.match(/\d+(?:\.\d+)?/g) || []) {
    assert.ok(containsNumberToken(solution['zh-Hans'].answerCheck, token), `Q${question.id}'s Chinese checked answer must retain ${token}.`);
  }
}
assert.match(page, /solutionMarkup\(q\)/, 'The standard Book 6 practice page must render guided solutions.');
assert.match(page, /id="solutionButton"/, 'Book 6 must expose a progressive reveal control.');
assert.match(page, /id="hideSolution"/, 'Book 6 must let a learner hide revealed solution steps.');
assert.match(page, /solutionHidden:new Set\(\)/, 'Book 6 must preserve a hidden solution’s reveal stage.');
assert.match(page, /state\.solutionHidden\.add\(q\.id\)/, 'Book 6 must hide steps without discarding their state.');
assert.match(i18n, /resumeGuidedSolution/, 'The resumed solution control needs bilingual labels.');

console.log('PASS: all 101 Book 6 questions provide progressive bilingual worked solutions.');
