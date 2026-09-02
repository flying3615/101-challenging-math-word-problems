import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const page = await readFile(new URL('../practice/book-6/index.html', import.meta.url), 'utf8');

assert.match(page, /solutionStages\s*:\s*new\s+Map\s*\(/, 'Book 6 needs per-question solution-reveal state.');
assert.match(page, /solutionHidden\s*:\s*new\s+Set\s*\(/, 'Book 6 needs per-question hidden-solution state.');
assert.match(page, /function\s+solutionMarkup\s*\(\s*q\s*\)/, 'Book 6 needs guided-solution markup.');
assert.match(page, /hidden\s*\?\s*0\s*:\s*Math\.min\s*\(/, 'Hiding a solution must conceal its rendered steps.');
assert.match(page, /answerVisible\s*=[^;]*stage\s*>\s*solution\.steps\.length/, 'The answer must require the final reveal stage.');
assert.match(page, /solutionHidden\.delete\s*\(\s*q\.id\s*\)[\s\S]{0,240}renderLesson\s*\(/, 'Resuming must preserve reveal state and re-render.');
assert.match(page, /solutionHidden\.add\s*\(\s*q\.id\s*\)[\s\S]{0,160}renderLesson\s*\(/, 'Hiding must preserve reveal state and re-render.');
assert.match(page, /\$\(['"]solutionButton['"]\)\?\.addEventListener\(['"]click['"]/, 'Book 6 needs a progressive reveal control.');
assert.match(page, /\$\(['"]hideSolution['"]\)\?\.addEventListener\(['"]click['"]/, 'Book 6 needs a hide control after steps are revealed.');

console.log('PASS: Book 6 keeps progressive, hideable, resumable guided-solution behavior.');
