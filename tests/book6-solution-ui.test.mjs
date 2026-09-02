import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const page = await readFile(new URL('../practice/book-6/index.html', import.meta.url), 'utf8');

for (const marker of [
  'solutionStages:new Map()',
  'solutionHidden:new Set()',
  'function solutionMarkup(q)',
  'id="solutionButton"',
  'id="hideSolution"',
  'solutionHidden.add(q.id)',
  'solutionHidden.delete(q.id)',
  "const shown=hidden?0:Math.min(stage,solution.steps.length)",
  'const answerVisible=!hidden&&stage>solution.steps.length',
  "$('solutionButton')?.addEventListener('click'",
  "$('hideSolution')?.addEventListener('click'"
]) {
  assert.ok(page.includes(marker), `Book 6 solution UI is missing: ${marker}`);
}

assert.match(page, /stage===0[\s\S]*solutionButton/, 'The solution must start concealed behind an explicit button.');
assert.match(page, /answerVisible[\s\S]*answerCheck/, 'The final answer/check must render only at the final reveal stage.');
console.log('PASS: Book 6 has progressive, hideable, resumable guided-solution UI.');
