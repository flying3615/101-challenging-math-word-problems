import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const page = readFileSync(new URL('../practice/book-6/index.html', import.meta.url), 'utf8');

assert.match(page, /function\s+organizeLearningSupport\s*\(\s*\)/, 'Book 6 needs a semantic learning-support organizer.');
const organizerStart = page.indexOf('function organizeLearningSupport()');
const renderStart = page.indexOf('function renderLesson()');
assert.ok(organizerStart >= 0 && renderStart > organizerStart, 'The learning-support organizer must be independently testable.');
const markup = page.slice(organizerStart, renderStart);

assert.match(markup, /support\.id\s*=\s*['"]learningSupport['"]/, 'The optional help controls need one labelled support region.');
assert.match(markup, /\$\(['"]modelButton['"]\)/, 'The visual-model control belongs inside learning support.');
assert.match(markup, /\$\(['"]hintButton['"]\)/, 'The small-hint control belongs inside learning support.');
assert.match(markup, /answerArea\.after\s*\(\s*support\s*\)/, 'Learning support must follow the answer area.');
assert.match(markup, /support\.append\s*\([\s\S]*?actionRow/, 'The visual-model and hint controls must be appended inside the support region as one action group.');

const goStart = page.indexOf('function go(');
assert.ok(goStart > renderStart, 'Book 6 must render the learning flow.');
assert.match(page.slice(renderStart, goStart), /organizeLearningSupport\s*\(\s*\)/, 'Every rendered question must use the independent-first learning flow.');

console.log('PASS: Book 6 puts working and answer first, then groups visual and hint help together.');
