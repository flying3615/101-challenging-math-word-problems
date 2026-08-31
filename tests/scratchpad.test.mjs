import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const storageKeys = {
  1: 'book1MathStoryScratchpad', 2: 'book2MathStoryScratchpad', 3: 'book3MathStoryScratchpad',
  4: 'mathStoryScratchpad', 5: 'book5MathStoryScratchpad', 6: 'book6MathStoryScratchpad'
};
for (const [book, key] of Object.entries(storageKeys)) {
  const page = await readFile(new URL(`../practice/book-${book}/index.html`, import.meta.url), 'utf8');
  assert.match(page, /<textarea id="scratchpad"/, `Book ${book} needs an accessible typed working-space field.`);
  assert.match(page, /Scratch work stays on this device/, `Book ${book} must explain its local-only storage.`);
  assert.match(page, /id="clearScratchpad"/, `Book ${book} needs a clear-working button.`);
  assert.ok(page.includes(`data-scratch-key="${key}"`), `Book ${book} must use its own scratch-work storage key.`);
  assert.match(page, /<script src="\.\.\/scratchpad\.js" defer><\/script>/, `Book ${book} must load the local scratchpad behavior.`);
}
const scratchpadScript = await readFile(new URL('../practice/scratchpad.js', import.meta.url), 'utf8');
assert.match(scratchpadScript, /localStorage\.getItem\(key\)/, 'Scratch work must be restored locally.');
assert.match(scratchpadScript, /localStorage\.setItem\(key/, 'Scratch work must be saved locally.');
assert.match(scratchpadScript, /addEventListener\('input'/, 'Scratch work must save while the student types.');
console.log('PASS: every book provides an independent local typed working space.');
