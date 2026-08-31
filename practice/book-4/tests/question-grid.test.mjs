import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

for (const book of ['book-4', 'book-5']) {
  const page = await readFile(new URL(`../../${book}/index.html`, import.meta.url), 'utf8');
  assert.match(page, /grid-template-columns:repeat\(5,minmax\(0,1fr\)\)/, `${book} needs a 5-column desktop picker that fits the sidebar.`);
  assert.match(page, /overflow-y:auto;overflow-x:hidden/, `${book} must allow vertical but not horizontal scrolling in the question picker.`);
}
console.log('PASS: question pickers fit their sidebars without horizontal scrolling.');
