import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const bank = JSON.parse(readFileSync(new URL('../practice/book-6/question-bank.json', import.meta.url), 'utf8')).questions;
const page = readFileSync(new URL('../practice/book-6/index.html', import.meta.url), 'utf8');
const languages = ['en', 'zh-Hans'];
const allowedTags = new Set(['g', 'rect', 'line', 'path', 'text', 'tspan', 'polyline', 'polygon', 'circle', 'ellipse']);

assert.equal(bank.filter(question => question.answerVisual).length, 101, 'Every Book 6 question needs a source-aligned visual model.');
for (const question of bank) {
  assert.match(question.answerVisual?.sourceMethod ?? '', /\S/, `Q${question.id} needs its printed-method label.`);
  assert.ok(Number.isInteger(question.answerVisual?.sourcePdfPage) && question.answerVisual.sourcePdfPage >= 50 && question.answerVisual.sourcePdfPage <= 88, `Q${question.id} needs a private Book 6 Solutions-page reference.`);
  for (const language of languages) {
    const visual = question.answerVisual?.[language];
    assert.match(visual?.viewBox ?? '', /^0 0 \d+ \d+$/, `Q${question.id} ${language} needs a sized SVG viewBox.`);
    assert.match(visual?.alt ?? '', /\S/, `Q${question.id} ${language} needs an accessible model description.`);
    assert.match(visual?.svg ?? '', /<(?:rect|line|path|polyline|polygon|circle|ellipse)\b/, `Q${question.id} ${language} needs real diagram geometry.`);
    const tags = [...(visual?.svg ?? '').matchAll(/<\/?([a-zA-Z][\w-]*)\b/g)].map(match => match[1]);
    assert.ok(tags.every(tag => allowedTags.has(tag)), `Q${question.id} ${language} may use only safe SVG diagram elements.`);
    assert.doesNotMatch(visual?.svg ?? '', new RegExp(`(?<![\\d.])${question.answer.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![\\d.])`, 'i'), `Q${question.id} ${language} must not reveal its final answer in the visual.`);
    const givenNumbers = new Set(question.question.match(/\d+(?:\.\d+)?/g) ?? []);
    const answerOnlyNumbers = [...new Set(question.answer.match(/\d+(?:\.\d+)?/g) ?? [])].filter(token => !givenNumbers.has(token));
    for (const token of answerOnlyNumbers) assert.doesNotMatch(visual?.svg ?? '', new RegExp(`>[^<]*(?<![\\d.])${token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![\\d.])[^<]*<`, 'i'), `Q${question.id} ${language} must not reveal computed answer value ${token} in the visual.`);
  }
}
assert.match(page, /function\s+answerVisualMarkup\s*\(\s*q\s*\)/, 'Book 6 must render answer-aligned visual data.');
assert.match(page, /q\.answerVisual\?\.?\[I18N\.getLanguage\(\)\]/, 'The visual must change with the selected language.');
assert.match(page, /visual\.svg/, 'The renderer must draw the stored visual geometry.');
assert.match(page, /<script src="question-bank\.js\?v=[^"]+"><\/script>/, 'Book 6 must cache-bust its generated bank so a reload receives the current visual models.');

console.log('PASS: every Book 6 visual model is source-aligned, bilingual, safe, and answer-last.');
