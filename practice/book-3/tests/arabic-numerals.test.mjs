import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const bank = JSON.parse(await readFile(new URL('../question-bank.json', import.meta.url), 'utf8'));
const writtenQuantity = /\b(?:zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|twice|half)\b/i;
const failures = bank.questions.flatMap(question => ['question', 'hint'].flatMap(field => writtenQuantity.test(question[field]) ? [`Question ${question.id} ${field}: ${question[field]}`] : []));
assert.deepEqual(failures, [], `Arabic numeric quantities are required.\n${failures.join('\n')}`);
console.log('PASS: Book 3 question and hint quantities use Arabic numerals.');
