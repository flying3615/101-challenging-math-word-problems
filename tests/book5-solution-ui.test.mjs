import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const page = await readFile(new URL('../practice/book-5/index.html', import.meta.url), 'utf8');

assert.match(page, /solutionMarkup\(q\)/, 'Book 5 must render a guided solution only for questions with solution data.');
assert.match(page, /id="solutionButton"/, 'Book 5 must expose progressive reveal controls.');
assert.match(page, /id="hideSolution"/, 'Book 5 must let a learner hide revealed solution steps.');
assert.match(page, /solutionHidden:new Set\(\)/, 'Book 5 needs separate hidden-state tracking so collapse preserves reveal progress.');
assert.match(page, /state\.solutionHidden\.add\(q\.id\)/, 'Hiding a Book 5 solution must preserve its reveal stage.');
assert.match(page, /state\.solutionHidden\.delete\(q\.id\)/, 'Reopening a Book 5 solution must retain its earlier reveal stage.');

console.log('PASS: Book 5 has progressive, resumable guided-solution UI.');
