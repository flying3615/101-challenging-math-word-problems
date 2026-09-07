import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

for (const book of ['book-1', 'book-2', 'book-3', 'book-4', 'book-5', 'book-6']) {
  const bookNumber = book.split('-')[1];
  const page = await readFile(new URL(`../../${book}/index.html`, import.meta.url), 'utf8');

  assert.match(page, /const PARENT_PASSWORD='parent123';/, `${book} needs the parent-mode password constant.`);
  assert.match(page, /id="parentGateLocked" hidden/, `${book} needs a locked parent-password gate in the Parent snapshot panel.`);
  assert.match(page, /id="parentGateUnlocked" hidden/, `${book} needs an unlocked parent-mode status view in the Parent snapshot panel.`);
  assert.match(
    page,
    new RegExp(`localStorage\\.getItem\\('book${bookNumber}MathStoryParentMode'\\)===('|")1('|")`),
    `${book} must read its parent-mode flag from localStorage on load.`
  );
  assert.match(
    page,
    /id="feedback"><\/div>\$\{state\.parentMode\?`<div class="parent-answer">Parent view — Answer: \$\{q\.answer\}<\/div>`:''\}<\/div>/,
    `${book} must only render the answer text when parent mode is on.`
  );

  if (page.includes('function solutionMarkup(')) {
    assert.match(
      page,
      /\$\{state\.parentMode\?solutionMarkup\(q\):''\}/,
      `${book} must only render the guided solution (it contains the answer) when parent mode is on.`
    );
  }
}

const sharedStyles = await readFile(new URL('../../recovered-ui.css', import.meta.url), 'utf8');
assert.match(sharedStyles, /\.parent-gate\{/, 'recovered-ui.css needs styling for the parent-mode password gate.');
assert.match(sharedStyles, /\.parent-answer\{/, 'recovered-ui.css needs styling for the revealed parent-mode answer.');

console.log('PASS: parent mode is password-gated and hides answers until unlocked, in all six books.');
