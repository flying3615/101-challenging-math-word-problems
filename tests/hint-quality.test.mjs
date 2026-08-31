/*
 * A hint must nudge, not answer.
 *
 * Book 2 shipped one template for all 101 questions with the answer appended:
 *   "Write the known quantities, choose the operation signs, then check against 25 kg."
 * where 25 kg was the answer. A learner opened the hint and typed the number.
 * The Chinese hint carried the same clause. This guards against that returning.
 *
 * It also pins the two books whose hints really are written per question, so
 * they cannot quietly regress into templates.
 */
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const BOOKS = [1, 2, 3, 4, 5, 6];
const norm = s => String(s).replace(/\s+/g, ' ').trim();
const numbersIn = s => [...new Set([...String(s).matchAll(/\d+(?:\.\d+)?/g)].map(m => m[0]))];
const standalone = (num, text) =>
  new RegExp(String.raw`(?<![\d.])${num.replace('.', '\\.')}(?![\d])`).test(text);

for (const book of BOOKS) {
  const label = `Book ${book}`;
  const questions = JSON.parse(
    await readFile(new URL(`../practice/book-${book}/question-bank.json`, import.meta.url), 'utf8'),
  ).questions;

  // ---- 1. no hint may hand over the answer ----
  // A number that the question already gives is not a leak — the hint is just
  // repeating a given. Only a hint that states EVERY number of the answer, none
  // of which the question supplied, counts.
  for (const q of questions) {
    const answerNums = numbersIn(q.answer);
    if (!answerNums.length) continue;

    for (const field of ['hint', 'hintZh']) {
      const text = norm(q[field]);
      const leaked = answerNums.filter(n => standalone(n, text) && !standalone(n, norm(q.question)));
      assert.notEqual(
        leaked.length,
        answerNums.length,
        `${label} q${q.id} ${field} states the answer (${leaked.join(', ')}). A hint must nudge, not answer:\n  answer: ${q.answer}\n  ${field}: ${text}`,
      );
    }
  }

  // ---- 2. a hint must not be empty in either language ----
  for (const q of questions) {
    for (const field of ['hint', 'hintZh']) {
      assert.ok(norm(q[field]).length >= 10, `${label} q${q.id} has no usable ${field}.`);
    }
  }
}

// ---- 3. books 4 and 5 have a hint written for each question — keep it that way ----
// Books 1, 2, 3 and 6 are still on placeholder templates (1, 1, 10 and 3 distinct
// sentences for 101 questions). That is tracked as outstanding work in
// HINT-REVIEW-BOOK-4.md; it is not asserted here because it is not yet true.
for (const book of [4, 5]) {
  const questions = JSON.parse(
    await readFile(new URL(`../practice/book-${book}/question-bank.json`, import.meta.url), 'utf8'),
  ).questions;
  for (const field of ['hint', 'hintZh']) {
    const shapes = new Set(questions.map(q => norm(q[field]).replace(/\d+(?:\.\d+)?/g, '#')));
    assert.equal(
      shapes.size,
      questions.length,
      `Book ${book} must keep a distinct ${field} for every question; found ${shapes.size} distinct shapes for ${questions.length} questions.`,
    );
  }
}

console.log('PASS: no hint gives away its answer, and books 4 and 5 keep a hint written for every question.');
