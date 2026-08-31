# Book 3 private practice library

This folder is a local, private-learning conversion of *101 Must-Know Challenging Maths Word Problems Book 3*. It is not for publication or redistribution.

## Source and generated data

- `data/questions-001-034.json`, `data/questions-035-070.json`, and `data/questions-071-101.json` are the maintainable contiguous source batches.
- `scripts/merge-bank.mjs` validates the source batches and generates `question-bank.json` and `question-bank.js`.
- `question-bank.js` is loaded directly by `index.html`, so the practice page works when opened with `file://`.

Regenerate after a source-data change:

```sh
node scripts/merge-bank.mjs
node --test tests/*.test.mjs
```

The question topics match the Book 3 contents: whole-number operations, money, fractions, length, mass, volume, time, area and perimeter, plus 2-part problems. Learner progress is stored only in the `book3MathStory*` localStorage namespace.
