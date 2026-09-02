import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const bank = JSON.parse(readFileSync(new URL('../practice/book-6/question-bank.json', import.meta.url), 'utf8')).questions;
const visualCues = /\b(?:bar|bars|table|tables|timeline|time strip|strips?|diagram|diagrams|model|grid|line|shape|route|track|chart|units?|box|capacity|parts?|cells?|rectangles?)\b/i;
const visualCuesZh = /(?:图|条|表|时间线|模型|方格|路线|轨迹|等份|单位|框|容积)/;

for (const question of bank) {
  const en = question.solution.en;
  const zh = question.solution['zh-Hans'];
  assert.match(en.strategy, visualCues, `Q${question.id} English strategy must name the visual model used to solve it.`);
  assert.match(zh.strategy, visualCuesZh, `Q${question.id} Chinese strategy must name the visual model used to solve it.`);
  assert.match(en.steps.map(step => step.text).join(' '), visualCues, `Q${question.id} English steps must read or operate on the visual model.`);
  assert.match(zh.steps.map(step => step.text).join(' '), visualCuesZh, `Q${question.id} Chinese steps must read or operate on the visual model.`);
}
console.log('PASS: every Book 6 guided solution explicitly works from its matching visual model.');
