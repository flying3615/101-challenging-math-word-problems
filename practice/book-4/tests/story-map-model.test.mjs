import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

for (const book of ['book-4', 'book-5']) {
  const page = await readFile(new URL(`../../${book}/index.html`, import.meta.url), 'utf8');
  assert.match(page, /function modelPlan\(q\)/, `${book} must derive a visual plan from each question.`);
  assert.match(page, /Key values from this question/, `${book} must show the actual values for the current question.`);
  assert.match(page, /Story map: \$\{plan\.title\}/, `${book} must identify the current question's relationship.`);
  assert.doesNotMatch(page, /The blocks are equal-sized parts\./, `${book} must not show the generic bar-model label.`);
  assert.match(page, /const type=fractions\.length&&rawType==='unit-bar'\?'fraction-of-remainder':rawType/, `${book} must use a fraction map when a fraction question was assigned a generic bar type.`);
}
console.log('PASS: visual models are built as question-specific story maps.');
