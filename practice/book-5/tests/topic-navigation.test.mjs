import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const page = await readFile(new URL('../index.html', import.meta.url), 'utf8');
for (const topic of ['Four Operations', 'Measurement', 'Ratio', 'Percentage', 'Geometry', '2-part: Four Operations', '2-part: Measurement', '2-part: Ratio', '2-part: Percentage']) {
  assert.ok(page.includes(`'${topic}'`), `Book 5 topic navigation must include ${topic}.`);
}
console.log('PASS: Book 5 topic navigation matches the book sections.');
