/*
 * The geometry Story map used to state things that were not true.
 *
 * Its two labels came from the first two matches of a unit regex that ended in
 * `\b`, so "81 cm²" matched as "81 cm" and an AREA was drawn as a side length
 * (book 4 q72/q74, book 6 q28/q41/q96). When the regex matched nothing the code
 * fell back to `plan.values.slice(0,2)`, so bare numbers became side lengths —
 * book 4 q78 drew "2" and "3", the counts of rectangles and squares, and book 3
 * q97 drew "$45.80".
 *
 * These checks stop both from coming back.
 */
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const BOOKS = [1, 2, 3, 4, 5, 6];

// the unit regex each practice page must now use
const UNIT_PATTERN = /\(\?:centimetres\?\|kilometres\?\|kilograms\?\|millilitres\?\|metres\?\|litres\?\|grams\?\|cm\|mm\|km\|kg\|ml\|m\|g\|l\)\(\?!\[²³\\w\]\)/;

for (const book of BOOKS) {
  const label = `Book ${book}`;
  const page = await readFile(new URL(`../practice/book-${book}/index.html`, import.meta.url), 'utf8');

  assert.ok(
    !page.includes('(?:cm|mm|m|km|g|kg|l|ml)\\b'),
    `${label} still uses the old unit regex, which matches "81 cm" inside "81 cm²" and draws an area as a side length.`,
  );
  assert.match(
    page,
    UNIT_PATTERN,
    `${label} must exclude a following ² or ³ when it reads measurements off a question.`,
  );
  assert.ok(
    !page.includes('plan.measures.length?plan.measures:plan.values.slice(0,2)'),
    `${label} must not fall back to bare numbers for the geometry visual. That drew counts of shapes, and once a price, as side lengths.`,
  );
  if (book === 4) {
    assert.match(page, /function answerVisualMarkup\(q\)/, 'Book 4 uses source-aligned SVG diagrams rather than the generic geometry outline.');
    continue;
  }
  // the caption used to be hardcoded English in the page; it now goes through
  // I18N so it is a reminder in whichever language the learner chose
  assert.ok(
    page.includes("I18N.t('sublineGeometryTail')"),
    `${label} must tell the learner that the geometry outline is a reminder, not the shape in the question.`,
  );
  assert.ok(
    !page.includes('It is not the shape in the question.'),
    `${label} must not hardcode that caption in English — it belongs in i18n.js.`,
  );
}

// The regex must keep lengths and drop areas and volumes. Book 6 q52 is the
// interesting case: its text holds both "12 cm" (a tank side) and "12 cm³".
const RE = /\d+(?:\.\d+)?\s*(?:centimetres?|kilometres?|kilograms?|millilitres?|metres?|litres?|grams?|cm|mm|km|kg|ml|m|g|l)(?![²³\w])/gi;
const cases = [
  ['The area of a square is 81 cm². Find its side.', ['known side']],
  ['A 20 cm × 12 cm × 15 cm tank. The tub gained 12 cm³.', ['20 cm', '12 cm', '15 cm']],
  ['It costs $23 to fence 2 m of the garden, which runs 34 m along the top.', ['2 m', '34 m']],
  ['The garden is 2 similar rectangles and 3 similar squares.', ['known side']],
];
for (const [text, expected] of cases) {
  const found = text.match(RE) || [];
  const labels = found.length ? found : ['known side'];
  assert.deepEqual(
    labels,
    expected,
    `Reading measurements from "${text}" gave [${labels.join(', ')}], expected [${expected.join(', ')}].`,
  );
}

console.log('PASS: the geometry visual never presents an area, a volume or a bare count as a side length.');
