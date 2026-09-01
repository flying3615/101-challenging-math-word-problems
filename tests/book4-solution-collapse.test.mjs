import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const page = await readFile(new URL('../practice/book-4/index.html', import.meta.url), 'utf8');
const i18n = await readFile(new URL('../i18n.js', import.meta.url), 'utf8');

assert.match(page, /solutionHidden:new Set\(\)/, 'Book 4 needs separate hidden-state tracking so collapse does not discard reveal progress.');
assert.match(page, /state\.solutionHidden\.add\(q\.id\)/, 'Hiding a Book 4 solution must preserve its reveal stage.');
assert.match(page, /state\.solutionHidden\.delete\(q\.id\)/, 'Reopening a Book 4 solution must retain its earlier reveal stage.');
assert.match(i18n, /hideGuidedSolution/, 'The hide-solution control needs bilingual labels.');
assert.match(i18n, /resumeGuidedSolution/, 'The reopened solution control needs bilingual labels.');

console.log('PASS: Book 4 guided solutions collapse without losing reveal progress.');
