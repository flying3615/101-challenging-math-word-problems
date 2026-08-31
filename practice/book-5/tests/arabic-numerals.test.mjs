import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const bank = JSON.parse(await readFile(new URL('../question-bank.json', import.meta.url), 'utf8'));
const numberWords = /\b(?:zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|twice|half)(?:-[a-z]+)?\b/i;
const failures = bank.questions.flatMap(q => ['question', 'hint'].flatMap(field => numberWords.test(q[field]) ? [`Question ${q.id} ${field}: ${q[field]}`] : []));
assert.deepEqual(failures, [], `Numeric quantities must use Arabic numerals.\n${failures.join('\n')}`);
console.log('PASS: numeric quantities use Arabic numerals.');
