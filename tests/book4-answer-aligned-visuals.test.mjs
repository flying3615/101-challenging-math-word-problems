import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const bank = JSON.parse(await readFile(new URL('practice/book-4/question-bank.json', root), 'utf8')).questions;
const page = await readFile(new URL('practice/book-4/index.html', root), 'utf8');

assert.equal(bank.length, 101, 'Book 4 must retain all 101 questions.');
assert.equal(bank.filter(question => question.answerVisual).length, 101, 'Every Book 4 question needs an answer-aligned visual model.');
const sourceUnavailableIds = new Set([37, 38, 39]);

const allowedTags = /<\/?(?:g|rect|line|path|text|tspan|polyline|polygon|circle|ellipse)\b[^>]*>/gi;
for (const question of bank) {
  const visual = question.answerVisual;
  assert.match(visual?.sourceMethod ?? '', /\S/, `Question ${question.id} needs its printed-method label.`);
  if (sourceUnavailableIds.has(question.id)) {
    assert.equal(visual?.sourceUnavailable, true, `Question ${question.id} must honestly mark the missing source page.`);
    assert.equal(visual?.sourcePdfPage, null, `Question ${question.id} must not invent a printed-source page.`);
  } else {
    assert.equal(visual?.sourceUnavailable, undefined, `Question ${question.id} must not be marked source-unavailable.`);
    assert.ok(Number.isInteger(visual?.sourcePdfPage) && visual.sourcePdfPage >= 42 && visual.sourcePdfPage <= 79, `Question ${question.id} must identify its private printed-solution page.`);
  }
  const answerTokens = question.answer.match(/\d+(?:\.\d+)?/g) ?? [];
  const questionTokens = new Set(question.question.match(/\d+(?:\.\d+)?/g) ?? []);
  const answerPattern = answerTokens.length === 1 && questionTokens.has(answerTokens[0])
    ? /$^/
    : answerTokens.length === 1
      ? new RegExp(`>[^<]*(?<![\\d.])${answerTokens[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![\\d.])[^<]*<`, 'i')
      : new RegExp(`>[^<]*${answerTokens.map(token => `(?<![\\d.])${token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![\\d.])`).join('[^<]*')}[^<]*<`, 'i');
  for (const language of ['en', 'zh-Hans']) {
    const localized = visual?.[language];
    assert.ok(localized?.viewBox && localized?.svg && localized?.alt, `Question ${question.id} needs a complete ${language} SVG model.`);
    const tags = localized.svg.match(allowedTags) || [];
    assert.ok(tags.length > 0, `Question ${question.id} ${language} model must contain SVG geometry.`);
    assert.equal(localized.svg.replace(allowedTags, '').includes('<'), false, `Question ${question.id} ${language} SVG must use only safe tags.`);
    assert.doesNotMatch(localized.svg, /<\/?(?:script|style|image|foreignObject)\b|\son\w+\s*=|\s(?:href|xlink:href|style)\s*=/i, `Question ${question.id} ${language} SVG must not contain executable or external content.`);
    assert.doesNotMatch(localized.svg, answerPattern, `Question ${question.id} ${language} SVG must not reveal the final answer.`);
  }
}

assert.match(page, /function\s+safeVisualSvg\s*\(\s*svg\s*\)/, 'Book 4 needs SVG sanitization.');
assert.match(page, /unsafeTag\.test\(value\)/, 'Book 4 must actually run the unsafe-tag test before rendering.');
assert.match(page, /function\s+answerVisualMarkup\s*\(\s*q\s*\)/, 'Book 4 needs a renderer for answer-aligned visual models.');
assert.match(page, /q\.answerVisual\?\.\[I18N\.getLanguage\(\)\]/, 'The renderer must select the active language model.');
assert.match(page, /function\s+modelMarkup\s*\(\s*q\s*\)[\s\S]*answerVisualMarkup\(q\)/, 'Book 4 visual models must render the answer-aligned SVG, not the generic story map.');

console.log('PASS: every Book 4 visual model is source-aligned, bilingual, safe, and answer-last.');
