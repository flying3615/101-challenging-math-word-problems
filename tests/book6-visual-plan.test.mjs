import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const page = readFileSync(new URL('../practice/book-6/index.html', import.meta.url), 'utf8');
const bank = JSON.parse(readFileSync(new URL('../practice/book-6/question-bank.json', import.meta.url), 'utf8')).questions;

assert.match(page, /function\s+answerVisualMarkup\s*\(\s*q\s*\)/, 'Book 6 needs a renderer for source-aligned visual models.');
assert.match(page, /q\.answerVisual\?\.?\[I18N\.getLanguage\(\)\]/, 'The renderer must choose the visual model for the selected language.');
assert.doesNotMatch(page, /function\s+visualPlanMarkup\s*\(/, 'The retired text-only visual plan must not be used as the model.');
assert.ok(bank.every(q => q.answerVisual?.en?.svg && q.answerVisual?.['zh-Hans']?.svg), 'Every Book 6 question needs bilingual model data.');

console.log('PASS: Book 6 visual plans render source-aligned bilingual diagrams rather than a text-only strategy card.');
