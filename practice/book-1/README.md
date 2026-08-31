# Book 1 private practice library

This folder is a local, private companion for **101 Must-Know Challenging Maths Word Problems Book 1**. The original PDF remains in `resources/book-1/`; do not publish, distribute, or upload this question bank or the original workbook content.

## Build and test

```sh
node scripts/merge-bank.mjs
node --test tests/*.test.mjs
```

`data/questions-001-034.json`, `data/questions-035-070.json`, and `data/questions-071-101.json` are the maintainable source chunks. The merge script produces `question-bank.json` and `question-bank.js`; the latter lets `index.html` work when opened directly with `file://`.

The source workbook was scanned. Questions and answers were transcribed from rendered pages plus the printed solution pages, with Arabic numerals used for learner-facing quantities.
