/*
 * Switching to Chinese must actually give you Chinese.
 *
 * It did not. Three separate leaks put English on a Chinese screen:
 *
 *   1. topicText covered 24 topic strings but the 6 banks use 35 between them,
 *      so 15 topic labels stayed English in the sidebar, the topic pill and the
 *      breadcrumb. Book 5 showed 6 of its 9 topics in English. One was just an
 *      ampersand: the map had "Area and Perimeter", book 4 uses "Area &
 *      Perimeter".
 *   2. The Story map's sublines and caption were hardcoded English inside the
 *      page's template literals, and i18n.js rewrote neither.
 *   3. "Math Story Lab" and the loading messages were hardcoded too.
 *
 * These checks stop each of them coming back.
 */
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const BOOKS = [1, 2, 3, 4, 5, 6];
const i18n = await readFile(new URL('../i18n.js', import.meta.url), 'utf8');

// ---- 1. English and Chinese must define exactly the same keys ----
const block = name => {
  const start = i18n.indexOf(`${name}: {`);
  assert.notEqual(start, -1, `i18n.js must define a ${name} block.`);
  const open = i18n.indexOf('{', start);
  let depth = 0;
  for (let i = open; i < i18n.length; i += 1) {
    if (i18n[i] === '{') depth += 1;
    else if (i18n[i] === '}') { depth -= 1; if (depth === 0) return i18n.slice(open + 1, i); }
  }
  throw new Error(`${name} block is unbalanced`);
};
const keysOf = src => new Set([...src.matchAll(/(?:^|[{,]\s*)([A-Za-z][A-Za-z0-9]*)\s*:/g)].map(m => m[1]));

const en = keysOf(block('en'));
const zh = keysOf(block("'zh-Hans'"));
const missingZh = [...en].filter(k => !zh.has(k));
const extraZh = [...zh].filter(k => !en.has(k));
assert.deepEqual(missingZh, [], `These interface strings have no Chinese: ${missingZh.join(', ')}`);
assert.deepEqual(extraZh, [], `These Chinese strings have no English: ${extraZh.join(', ')}`);

// ---- 2. every topic any bank uses must have a Chinese label ----
const topicBlockStart = i18n.indexOf('const topicText = {');
assert.notEqual(topicBlockStart, -1, 'i18n.js must define topicText.');
const topicBlock = i18n.slice(topicBlockStart, i18n.indexOf('\n  };', topicBlockStart));
const translatedTopics = new Set([...topicBlock.matchAll(/'([^']+)'\s*:/g)].map(m => m[1]));

const usedTopics = new Set();
for (const book of BOOKS) {
  const questions = JSON.parse(
    await readFile(new URL(`../practice/book-${book}/question-bank.json`, import.meta.url), 'utf8'),
  ).questions;
  questions.forEach(q => usedTopics.add(q.topic));
}
const untranslated = [...usedTopics].filter(t => !translatedTopics.has(t)).sort();
assert.deepEqual(
  untranslated,
  [],
  `These topics would show in English on a Chinese screen: ${untranslated.map(t => `"${t}"`).join(', ')}`,
);

// ---- 3. the Story map may not hardcode English prose in a practice page ----
// Each of these shipped as a literal and never passed through I18N.
const MUST_NOT_APPEAR = [
  'Each block is 1 equal part. Do not calculate the answer yet.',
  'to balance the relationship.',
  'This map uses the information in the question.',
  'Measurements given in this question:',
  'It is not the shape in the question.',
  'Solve this one by listing and testing',
  'Number in the story',
  "'first quantity'",
  "'second quantity'",
  ' parts</b>',
];
for (const book of BOOKS) {
  const page = await readFile(new URL(`../practice/book-${book}/index.html`, import.meta.url), 'utf8');
  for (const phrase of MUST_NOT_APPEAR) {
    assert.ok(
      !page.includes(phrase),
      `Book ${book} hardcodes "${phrase}" in the Story map. It must go through I18N.t so a Chinese learner sees Chinese.`,
    );
  }
  if (book === 4) {
    assert.match(page, /function answerVisualMarkup\(q\)/, 'Book 4 must provide language-specific answer-aligned SVG diagrams.');
    assert.match(page, /q\.answerVisual\?\.\[I18N\.getLanguage\(\)\]/, 'Book 4 must select the SVG matching the learner language.');
    continue;
  }
  // and it must actually be calling the translator for them
  assert.ok(page.includes("I18N.t('sublineUnit')"), `Book ${book} must translate the unit-bar subline.`);
  assert.ok(page.includes("I18N.t('mapCaption')"), `Book ${book} must translate the Story map caption.`);
  assert.ok(page.includes("I18N.t('parts'"), `Book ${book} must translate the "N parts" ratio labels.`);
}

// ---- 4. i18n.js must not hardcode English of its own ----
assert.ok(!i18n.includes('`Math Story Lab<small>'), 'i18n.js must not hardcode the product name in English.');
assert.ok(i18n.includes("t('brandName')"), 'i18n.js must render the product name through the translator.');
assert.ok(i18n.includes("setNodeText('.model-caption'"), 'i18n.js must keep the Story map caption in the chosen language.');

console.log('PASS: every interface string, topic label and Story map caption has a Chinese form.');
