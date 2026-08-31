import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

for (const book of ['book-4', 'book-5']) {
  const page = await readFile(new URL(`../../${book}/index.html`, import.meta.url), 'utf8');
  assert.doesNotMatch(page, /Learn at your own pace/, `${book} must not show non-functional pace-prompt copy.`);
  assert.doesNotMatch(page, /class="level"/, `${book} must not render the unused level badge.`);
  assert.doesNotMatch(page, /hints used today/, `${book} must not show a non-essential daily hint counter.`);
  assert.match(page, /grid-template-columns:1\.8fr \.8fr \.8fr;/, `${book} summary must not reserve an empty metric column.`);
}
console.log('PASS: practice pages omit the unused pace-prompt badge.');
