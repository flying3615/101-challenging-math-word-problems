import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const book4 = await readFile(new URL('../../book-4/index.html', import.meta.url), 'utf8');
assert.match(book4, /function answerVisualMarkup\(q\)/, 'Book 4 must render its per-question answer-aligned SVG data.');
assert.match(book4, /q\.answerVisual\?\.\[I18N\.getLanguage\(\)\]/, 'Book 4 must use the selected language visual.');
assert.match(book4, /answerVisualMarkup\(q\)/, 'Book 4 must place the answer-aligned SVG in the visual-model panel.');
assert.doesNotMatch(book4, /Story map: \$\{plan\.title\}/, 'Book 4 must not fall back to a generic story-map title.');

const book5 = await readFile(new URL('../../book-5/index.html', import.meta.url), 'utf8');
assert.match(book5, /function modelPlan\(q\)/, 'Book 5 must derive a visual plan from each question.');
assert.match(book5, /Key values from this question/, 'Book 5 must show the actual values for the current question.');
assert.match(book5, /Story map: \$\{plan\.title\}/, 'Book 5 must identify the current question relationship.');
assert.doesNotMatch(book5, /The blocks are equal-sized parts\./, 'Book 5 must not show the generic bar-model label.');
assert.match(book5, /const type=fractions\.length&&rawType==='unit-bar'\?'fraction-of-remainder':rawType/, 'Book 5 must use a fraction map when a fraction question was assigned a generic bar type.');

console.log('PASS: Book 4 uses answer-aligned SVG models and Book 5 keeps question-specific story maps.');
