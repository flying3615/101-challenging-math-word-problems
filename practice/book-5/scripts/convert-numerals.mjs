import { readFile, writeFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const files = ['questions-001-034.json', 'questions-035-070.json', 'questions-071-101.json'];
const units = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19 };
const tens = { twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90 };
const denominators = { half: 2, halves: 2, third: 3, thirds: 3, quarter: 4, quarters: 4, fifth: 5, fifths: 5, sixth: 6, sixths: 6, seventh: 7, sevenths: 7, eighth: 8, eighths: 8, ninth: 9, ninths: 9, tenth: 10, tenths: 10 };
const ordinals = { first: '1st', second: '2nd', third: '3rd', fourth: '4th', fifth: '5th', sixth: '6th', seventh: '7th', eighth: '8th', ninth: '9th', tenth: '10th' };

function convert(text) {
  let out = text;
  // Convert written fractions before standalone numbers or ordinals.
  out = out.replace(/\b(one|two|three|four|five|six|seven|eight|nine|ten)[ -](half|halves|thirds?|quarters?|fifths?|sixths?|sevenths?|eighths?|ninths?|tenths?)\b/gi, (_, numerator, denominator) => `${units[numerator.toLowerCase()]}/${denominators[denominator.toLowerCase()]}`);
  out = out.replace(/\b(twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)[ -](one|two|three|four|five|six|seven|eight|nine)\b/gi, (_, ten, unit) => String(tens[ten.toLowerCase()] + units[unit.toLowerCase()]));
  out = out.replace(/\btwice\b/gi, '2 times');
  out = out.replace(/\bhalf\b/gi, '1/2');
  out = out.replace(/\b(first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth)\b/gi, word => ordinals[word.toLowerCase()]);
  out = out.replace(/\b(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)\b/gi, word => String(units[word.toLowerCase()] ?? tens[word.toLowerCase()]));
  return out;
}

for (const file of files) {
  const path = new URL(`data/${file}`, root);
  const questions = JSON.parse(await readFile(path, 'utf8'));
  for (const q of questions) {
    q.question = convert(q.question);
    q.hint = convert(q.hint);
  }
  await writeFile(path, JSON.stringify(questions, null, 2) + '\n');
}
console.log(`Converted written numeric quantities to Arabic numerals in ${files.length} question-data files.`);
