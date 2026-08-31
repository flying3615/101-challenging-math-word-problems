# Hint review — all six books

Companion to [`HINT-REVIEW-BOOK-4.md`](HINT-REVIEW-BOOK-4.md), which audited Book 4
question by question against its scanned pages. This document covers the other five,
and records the work done to bring them up to the same standard.

Date: 2026-09-01

---

## Summary

At the start of this review, only Books 4 and 5 had hints written for their questions.
Books 1, 2, 3 and 6 shipped placeholder templates covering 404 questions, and Book 2's
template **stated the answer** in all 101 of its hints.

Books 1, 2 and 3 are now written out — 303 hints, in English and Simplified Chinese,
each one solved before it was written and each one checked mechanically before it was
applied.

**Book 6 is not, and should not be, until something more serious is fixed first: its
question text is a lossy paraphrase of the book, not a transcription.** Writing hints
onto it would decorate questions that are, in several cases, unsolvable as displayed.

| Book | Distinct hint sentences before | after | State |
|---|---|---|---|
| 1 | 1 / 101 | **101 / 101** | done |
| 2 | 11 / 101 | **101 / 101** | done |
| 3 | 10 / 101 | **101 / 101** | done |
| 4 | 101 / 101 | 101 / 101 | already written; audited separately |
| 5 | 101 / 101 | 101 / 101 | already written; not yet audited for correctness |
| 6 | 3 / 101 | 3 / 101 | **blocked — see below** |

---

## Book 2 gave away the answer, 101 times out of 101

Every Book 2 hint was this, in both languages:

> **EN** Write the known quantities, choose the operation signs, then check against **25 kg**.
> **ZH** 列出已知数量，选择运算符号，再核对结果是否为 **25 kg**。

…where `25 kg` was the question's own answer. `q1` said "check against 394" and the
answer was 394; `q60` said "check against 2/7" and the answer was 2/7.

A learner pressed *Hint* and read the answer. That is not a weak hint, it is a broken
question. Fixed, then replaced with 101 hints written for their own questions.

---

## What the 303 new hints look like

Each names the actual first move and the trap in the wording, rather than restating the
question or handing over arithmetic.

| id | hint |
|---|---|
| 1 · q12 | "Mind the direction: Mary sold more, so her count is Jack's 24 raised by 17. Add the pair only after that." |
| 1 · q96 | "Divide before you multiply: find the size of 1 group, then multiply that group size by the groups the question asks about." |
| 2 · q26 | "Each corner tree stands on 2 sides at the same time, so counting 5 trees for every side counts the corners 2 times." |
| 2 · q45 | "Suppose all 8 pies were the cheaper kind — the takings would fall short of $34. Every pie swapped to an apple pie lifts the takings by $1." |
| 3 · q3 | "Let Jerry be 1 unit; Jacob is 2 units and Kenny is 6 units, so 846 covers 9 units. The question asks only for the gap of 5 units." |
| 3 · q33 | "Add both fruits and take away what is left to find how many pieces were sold in all. Split that into 3 equal units, with apples taking 2 of them." |

### How they were checked

Every question was solved independently **before** its hint was written; a hint was only
allowed to lean on a number whose derivation had been reproduced. Then, before anything
was applied to the bank, a validator rejected the whole batch unless all of the
following held:

- 101 distinct English sentences and 101 distinct Chinese ones, after masking every
  digit to `#` — so a template cannot pass by swapping numbers;
- no spelled-out number word in any English hint (the repo's house rule, enforced by
  `arabic-numerals.test.mjs`);
- no 2 bare numerals side by side, which would read as a single number;
- no hint stating its own answer, in either language;
- Chinese present, fullwidth punctuation, Latin names left untransliterated.

The validator was itself tested by feeding it a file with 6 planted defects; it caught
all 6. It then rejected 4 real drafts that used `first` or `one`, which were reworded
and re-checked.

---

## Two answer errors found along the way

Both were found by solving the question rather than trusting the bank, and both were
then confirmed against the printed page rather than assumed.

**Book 1 q39 — the bank said 8, the book says 4.** 20 + 18 boys and 10 + 24 girls gives
38 − 34 = 4. The question page is a faithful transcription, and the book's own worked
solution on page 54 of the scan ends "There are 4 fewer girls than boys altogether."
**Fixed.**

**Book 6 q51 — the bank says 5/7, the book says 2/5.** Not fixed, because it sits inside
the larger Book 6 problem below.

---

## Book 3 q87 and q88 needed a fact only the figure carried

Both said "the figure below", but the app draws no figure and the relationship that makes
them solvable was printed only in the diagram:

- `q87` — a corner of the 32 cm square sits at the **centre** of each smaller square.
- `q88` — the 2 squares span exactly **3** of the 4 rectangles.

Without those, the perimeter is undetermined. Both facts are now in the question text,
the way Book 4's `q101` already did it. Each reconstruction reproduces the published
answer: 128 + 24 + 36 = 188 cm, and 40 + 18 + 10 + 15 + 30 + 15 + 18 = 146 cm.

---

## Book 6 is blocked — its questions are a paraphrase, not a transcription

This is the most consequential finding in the review, and it is not about hints.

### The scale

72 of Book 6's 101 questions read as compressed telegraphic summaries rather than word
problems. They end in instructions like "Find each count.", "Find requested values.",
"Find 3 requested values." Compare the mean question length:

| Book | 1 | 2 | 3 | 4 | 5 | **6** |
|---|---|---|---|---|---|---|
| mean question length | 125 | 122 | 163 | 220 | 248 | **141** |
| summary-shaped questions | 0 | 0 | 7 | 8 | 9 | **72** |

Book 6 is the hardest of the six, so its problems should be the *longest*. They are
shorter than Book 4's and Book 5's because they were compressed.

### The compression changed the maths

Checked directly against the scan, Book 6 `q3`:

> **Printed book** "…the number of blue beads was **reduced by 1/3 its original number of beads**."
> **Bank** "…blue beads **were 1/2 of their original count**."

The fraction and the referent both differ. The book's wording gives 50 = 1/3 × 0.6T →
T = 250 → 200 left, which is the stated answer. The bank's wording gives a non-integer
total and no answer at all.

That is not an isolated slip. Across ids 1–68, the following carry a fraction or
percentage that disagrees with the printed book:

**3, 4, 6, 8, 9, 10, 13, 14, 16, 17, 18, 20, 21, 23, 30, 33, 46, 48, 51, 53, 54, 55, 56,
58, 60, 61, 62**

with specifics including: `q46` gave 1/4 not 1/3 · `q48` Mary had 2/3 as much as Tom,
not "2 times" · `q51` basins 1/2 and 1/5 full, not 1/4 and 3/4 · `q54` 1/3 of packs
small and 1/5 more medium · `q56` Agnes gave 1/11, not 1/3 · `q58` English is 1/5 of the
remainder, not 1/3 · `q62` 2/3 of coins were 20-cent, not 1/4.

Several are unsolvable as displayed: `q17`'s fractions give a negative count, and its
text literally reads "Use the stated equal flavour relationships" without stating them.

`q23` additionally drops the tank's 18 cm × 15 cm base, and `q41`, `q49` and `q50` rely
on layout facts that exist only in their figures.

Ids 69–101 show the same pattern, so this is the whole book rather than a bad patch:

| id | bank says | book says | consequence |
|---|---|---|---|
| q74 | 3/5 | **5/9** | only 5/9 yields the stated 34.5 min |
| q78 | 1/3 white | **1/2** | only 1/2 yields 3200 |
| q82 | 1/3 women | **1/2** | only 1/2 yields 120 |
| q84 | C was 1/4 of A | **2/3** | 1/4 is unsolvable |
| q71(b) | — | "reach town Q at 3.30 pm" | the target time is missing entirely, so (b) has no answer |

`q98(a)` is a separate case worth flagging: the salary and part (b) both check out, but
the book's own printed solution treats the stated $150 *increase* as if it were
February's total. The sound answer to the question as asked is 150%, not the printed 8%.
That one is a defect in the book, not in the transcription.

### Why no hints were written into Book 6

Hints for these questions were drafted and are held outside the repo, deliberately
unapplied. Two reasons:

1. **A hint cannot rescue a question whose numbers are wrong.** The drafts had to be
   written "structure-only" — naming the *role* of each fraction rather than its value —
   precisely because the displayed value is often not the book's. That is a workaround
   for a defect, not a fix.
2. **Applying them would turn the templating test green for Book 6** and so hide the
   fact that it is the least trustworthy book in the set. The test is currently the only
   thing marking Book 6 as unfinished; that signal is worth keeping.

### What Book 6 actually needs

1. **Re-transcribe all 101 questions from the scans**, in both languages, restoring the
   full prose. This is the prerequisite for everything else.
2. **Re-check every answer** as part of that pass. `q51` is already known wrong.
3. **Fold figure-only facts into the question text** for `q23`, `q28`, `q32`, `q41`,
   `q49`, `q50`, as was done for Book 3's `q87`/`q88` and Book 4's `q72`/`q77`/`q78`.
4. **Then** write its 101 hints, and add Book 6 to the distinctness assertion in
   `tests/hint-quality.test.mjs`.

One thing not to "fix": `q34`. The book's own prose there makes joint chiming impossible,
while the bank's paraphrase is the version that yields the stated answer. Reverting that
one toward the book would break it.

---

## Still not done: correctness audit of Book 5

Book 5's hints are real and specific, and the automated detectors flagged only a single
lead across all 101, which proved to be a false positive. But it has never had the
question-by-question audit that Book 4 got, so 101 hints remain unverified against the
printed solutions. It ships 42 question-page and 41 solution-page images, so the audit is
straightforward — with one caveat: unlike Book 4's, Book 5's `solutions-ocr.txt` has **no
page markers**, so the question→page map has to be rebuilt from the images.

---

## Working notes for whoever picks this up

Books 1, 2, 3 and 6 ship only a PDF — no OCR, no page images — and the PDFs are pure
scans with **no text layer**, so text extraction returns nothing. `pdftoppm` is not
installed and there is no root access to add it.

What worked: a throwaway virtualenv with `pymupdf`, which rendered all 329 pages of the
four books to PNG at 150 dpi.

```
python3 -m venv /tmp/pdfenv && /tmp/pdfenv/bin/pip install pymupdf
# then, per page: page.get_pixmap(dpi=150).save(...)
```

The renders were kept out of the repo — 650 MB of scans into a repository already at
1.3 GB — so they must be regenerated.

---

## Tests

`tests/hint-quality.test.mjs`

- No hint, in either language, may state its own answer. A number the question already
  gives is not a leak; only a hint stating every number of the answer, none of them
  supplied by the question, fails.
- No hint may be empty in either language.
- **Books 1, 2, 3, 4 and 5** must keep a distinct hint for every question. Book 6 is
  deliberately absent: that assertion is not yet true for it, and its absence is the
  marker that Book 6 is unfinished.

Verified by mutation, not by passing:

| Mutation | Caught |
|---|---|
| Book 2 q1 English hint states the answer again | yes |
| Book 2 q1 **Chinese** hint states the answer, English left clean | yes |
| Book 4 loses a per-question hint (q10 copies q9) | yes |
| Book 4 q6 Chinese hint emptied | yes |

`33/33` test files pass.
