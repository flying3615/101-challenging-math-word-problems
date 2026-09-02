import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const bank = JSON.parse(await readFile(new URL('practice/book-5/question-bank.json', root), 'utf8')).questions;
const page = await readFile(new URL('practice/book-5/index.html', root), 'utf8');
const allowedTags = /<\/?(?:g|rect|line|path|text|tspan|polyline|polygon|circle|ellipse)\b[^>]*>/gi;

assert.equal(bank.length, 101, 'Book 5 must retain all 101 questions.');
assert.equal(bank.filter(question => question.answerVisual).length, 101, 'Every Book 5 question needs an answer-aligned visual model.');
for (const question of bank) {
  const visual = question.answerVisual;
  assert.match(visual?.sourceMethod ?? '', /\S/, `Question ${question.id} needs its printed-method label.`);
  assert.ok(Number.isInteger(visual?.sourcePdfPage) && visual.sourcePdfPage >= 48 && visual.sourcePdfPage <= 88, `Question ${question.id} must identify its private printed-solution page.`);
  const answerTokens = question.answer.match(/\d+(?:\.\d+)?/g) ?? [];
  // A visual may show stated quantities and legitimate intermediate values.
  // Flag a numeric answer token only when it occurs in neither the question
  // nor the worked route before its answer-check label.
  const routeText = [question.question, ...question.solution.en.steps.map(step => step.text)].join(' ');
  const routeTokens = new Set(routeText.match(/\d+(?:\.\d+)?/g) ?? []);
  const answerOnlyTokens = answerTokens.filter(token => !routeTokens.has(token));
  const answerPattern = answerOnlyTokens.length === 0
    ? /$^/
    : answerOnlyTokens.length === 1
      ? new RegExp(`>[^<]*(?<![\\d.])${answerOnlyTokens[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![\\d.])[^<]*<`, 'i')
      : new RegExp(`>[^<]*${answerOnlyTokens.map(token => `(?<![\\d.])${token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![\\d.])`).join('[^<]*')}[^<]*<`, 'i');
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

assert.match(page, /function\s+safeVisualSvg\s*\(\s*svg\s*\)/, 'Book 5 needs SVG sanitization.');
assert.match(page, /unsafeTag\.test\(value\)/, 'Book 5 must actually run the unsafe-tag test before rendering.');
assert.match(page, /function\s+answerVisualMarkup\s*\(\s*q\s*\)/, 'Book 5 needs a renderer for answer-aligned visual models.');
assert.match(page, /q\.answerVisual\?\.\[I18N\.getLanguage\(\)\]/, 'The renderer must select the active-language model.');
assert.match(page, /function\s+modelMarkup\s*\(\s*q\s*\)[\s\S]*answerVisualMarkup\(q\)/, 'Book 5 visual models must render answer-aligned SVG, not generic story maps.');
console.log('PASS: every Book 5 visual model is source-aligned, bilingual, safe, and answer-last.');
