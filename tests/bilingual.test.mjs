import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const root = new URL('../', import.meta.url);
const i18n = await readFile(new URL('../i18n.js', import.meta.url), 'utf8');
assert.match(i18n, /mathStoryLanguage/, 'The chosen language must be remembered only on this device.');
assert.match(i18n, /zh-Hans/, 'Simplified Chinese must be an available language.');
assert.match(i18n, /setLanguage/, 'The shared controller must be able to change language.');

const home = await readFile(new URL('../index.html', import.meta.url), 'utf8');
assert.match(home, /data-language="en"/, 'The home page needs an English language choice.');
assert.match(home, /data-language="zh-Hans"/, 'The home page needs a Chinese language choice.');
assert.match(home, /src="i18n\.js"/, 'The home page must load the shared language controller.');

for (let book = 1; book <= 6; book += 1) {
  const page = await readFile(new URL(`../practice/book-${book}/index.html`, import.meta.url), 'utf8');
  assert.match(page, /data-language="en"/, `Book ${book} needs an English language choice.`);
  assert.match(page, /data-language="zh-Hans"/, `Book ${book} needs a Chinese language choice.`);
  assert.match(page, /\.\.\/\.\.\/i18n\.js/, `Book ${book} must load the shared language controller.`);
  assert.match(page, /I18N\.t\(/, `Book ${book} must render interface text in the selected language.`);
  assert.match(page, /I18N\.startPractice\(/, `Book ${book} must connect the page to the shared bilingual controller.`);

  const source = await readFile(new URL(`../practice/book-${book}/question-bank.js`, import.meta.url), 'utf8');
  const context = { window: {} };
  vm.runInNewContext(source, context);
  const bank = context.window.QUESTION_BANK;
  assert.equal(bank.length, 101, `Book ${book} must retain all 101 questions.`);
  assert.ok(bank.every(q => typeof q.questionZh === 'string' && q.questionZh.trim()), `Book ${book} needs a Chinese translation for every question.`);
  assert.ok(bank.every(q => typeof q.hintZh === 'string' && q.hintZh.trim()), `Book ${book} needs a Chinese translation for every hint.`);
  for (const question of bank) {
    const source = question.question;
    const translated = question.questionZh.replace(/\s+/g, '');
    for (const match of source.matchAll(/\$?\d+(?:\.\d+)?(?:\s*\/\s*\d+)?%?/g)) {
      const value = match[0].replace(/\s+/g, '');
      const following = source.slice((match.index ?? 0) + match[0].length);
      if (/^(?:st|nd|rd|th)\b/i.test(following)) continue;
      const isClockTime = /^\d+\.\d{2}$/.test(value) && /^\s*(?:a\.?m\.?|p\.?m\.?)/i.test(following);
      const alternatives = isClockTime ? [value, value.replace('.', ':')] : [value];
      assert.ok(alternatives.some(candidate => translated.includes(candidate)), `Book ${book}, question ${question.id} must preserve the value ${value} in Arabic numerals.`);
    }
  }
}

const book3Source = await readFile(new URL('../practice/book-3/question-bank.json', import.meta.url), 'utf8');
assert.doesNotMatch(book3Source, /se liT-23¢7-\) 7\)/, 'Book 3 must not expose the OCR artifact before Q61.');

console.log('PASS: the full learning site supports English and Simplified Chinese.');
