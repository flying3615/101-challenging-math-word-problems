/*
 * Content checks on every question bank.
 *
 * The rest of the suite checks page wiring, theme colours, storage keys and
 * markup. None of it looked inside a question bank, so a duplicated question, a
 * topic label that had drifted away from its content, and two questions missing
 * from the printed book all survived a green suite. These checks close that gap.
 */
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const BOOKS = [1, 2, 3, 4, 5, 6];

// every model a bank may use; each one needs a branch in the practice page
const KNOWN_MODELS = new Set([
  'bar-change', 'fraction-of-remainder', 'geometry',
  'guess-check', 'mass-bar', 'money-units', 'unit-bar',
]);

const normalise = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

// Two bare numerals side by side read as one number: "5 10-cent coins" looks
// like "510-cent". A mixed number such as "4 1/2" is correct and allowed.
function runTogetherNumbers(text) {
  const hits = [];
  for (const match of String(text).matchAll(/\d+\s+\d+(?:\/\d+)?/g)) {
    if (/^\d+\s+\d+\/\d+$/.test(match[0])) continue;
    hits.push(match[0]);
  }
  return hits;
}

for (const book of BOOKS) {
  const label = `Book ${book}`;
  const jsonPath = new URL(`../practice/book-${book}/question-bank.json`, import.meta.url);
  const bank = JSON.parse(await readFile(jsonPath, 'utf8'));
  const questions = bank.questions;

  // ---- 1. exactly 101 questions, numbered 1..101 with no gap or repeat ----
  assert.equal(questions.length, 101, `${label} must hold exactly 101 questions.`);
  assert.deepEqual(
    questions.map(q => q.id),
    Array.from({ length: 101 }, (_, i) => i + 1),
    `${label} ids must run 1..101 in order, with no gap and no repeat.`,
  );

  // ---- 2. no question may appear twice ----
  const seen = new Map();
  for (const q of questions) {
    const key = normalise(q.question);
    if (seen.has(key)) {
      assert.fail(`${label} q${seen.get(key)} and q${q.id} are the same question. A duplicate hides a question that is missing from the book.`);
    }
    seen.set(key, q.id);
  }

  // ---- 3. topic labels must form one contiguous run of ids each ----
  // The printed books group their questions into topic blocks, so a topic that
  // reappears later means a label has drifted away from its content.
  const runs = [];
  for (const q of questions) {
    const last = runs[runs.length - 1];
    if (!last || last.topic !== q.topic) runs.push({ topic: q.topic, from: q.id, to: q.id });
    else last.to = q.id;
  }
  const runCount = new Map();
  for (const run of runs) runCount.set(run.topic, (runCount.get(run.topic) || 0) + 1);
  for (const [topic, count] of runCount) {
    assert.equal(count, 1, `${label} topic "${topic}" appears in ${count} separate id runs. Each topic must be one contiguous block.`);
  }

  // ---- 4. every entry is complete, and every model has a renderer ----
  const page = await readFile(new URL(`../practice/book-${book}/index.html`, import.meta.url), 'utf8');
  for (const q of questions) {
    for (const field of ['topic', 'question', 'answer', 'model', 'hint']) {
      assert.ok(
        typeof q[field] === 'string' && q[field].trim(),
        `${label} q${q.id} needs a non-empty "${field}".`,
      );
    }
    assert.ok(KNOWN_MODELS.has(q.model), `${label} q${q.id} uses an unknown model "${q.model}".`);
    if (book === 4) {
      assert.ok(q.answerVisual, `${label} q${q.id} needs its answer-aligned SVG instead of a generic model branch.`);
      assert.match(page, /function answerVisualMarkup\(q\)/, `${label} must render answer-aligned SVG data.`);
    } else {
      assert.ok(
        page.includes(`'${q.model}'`) || page.includes(`"${q.model}"`),
        `${label} q${q.id} uses model "${q.model}", but the practice page has no branch for it.`,
      );
    }
  }

  // ---- 5. the browser copy must match the source of truth ----
  const source = await readFile(new URL(`../practice/book-${book}/question-bank.js`, import.meta.url), 'utf8');
  const context = { window: {} };
  vm.runInNewContext(source, context);
  // the vm gives back objects from another realm, so round-trip through JSON
  // before comparing — otherwise the prototypes differ and every check fails
  const browserCopy = JSON.parse(JSON.stringify(context.window.QUESTION_BANK));
  assert.deepEqual(
    browserCopy,
    questions,
    `${label} question-bank.js must match question-bank.json exactly. The page loads the .js file, so a divergence means the learner sees something the tests never checked.`,
  );

  // ---- 6. wording: numerals must not run together ----
  for (const q of questions) {
    for (const field of ['question', 'hint']) {
      const hits = runTogetherNumbers(q[field]);
      assert.deepEqual(
        hits,
        [],
        `${label} q${q.id} ${field} puts numerals side by side (${hits.join(', ')}), which reads as a single number. Separate them with a word.`,
      );
    }
  }

  // ---- 7. a hint must not invent a currency the question never mentions ----
  for (const q of questions) {
    if (/\$/.test(q.hint)) {
      assert.match(
        q.question,
        /\$/,
        `${label} q${q.id} hint uses "$" but the question is not about money.`,
      );
    }
  }
}

// ---- 8. Book 4 must follow the topic blocks printed on the book's own
// Contents page (resources/book-4/.../selected-preview-pages/page004.png),
// which is what keeps every bank id equal to its printed question number.
const book4 = JSON.parse(await readFile(new URL('../practice/book-4/question-bank.json', import.meta.url), 'utf8')).questions;
const BOOK_4_BLOCKS = [
  [1, 9, 'Whole Numbers'],
  [10, 48, 'Fractions'],
  [49, 66, 'Money'],
  [67, 70, 'Mass'],
  [71, 78, 'Area & Perimeter'],
  [79, 101, '2-part Word Problems'],
];
for (const [from, to, topic] of BOOK_4_BLOCKS) {
  for (let id = from; id <= to; id += 1) {
    assert.equal(
      book4.find(q => q.id === id).topic,
      topic,
      `Book 4 q${id} must carry the topic "${topic}" that the book's Contents page gives to question ${id}.`,
    );
  }
}

// ---- 9. the two questions the first transcription skipped ----
for (const [id, answer, fragment] of [[35, '600 eggs', 'cartons'], [36, '117 candles', 'candles']]) {
  const q = book4.find(entry => entry.id === id);
  assert.equal(q.answer, answer, `Book 4 q${id} must be the book's question ${id}, whose answer is ${answer}.`);
  assert.match(q.question, new RegExp(fragment), `Book 4 q${id} must be the book's question ${id}.`);
}

console.log('PASS: every question bank is complete, correctly numbered and consistent with its browser copy.');
