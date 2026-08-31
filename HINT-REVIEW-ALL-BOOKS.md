# Hint review — all six books

Companion to [`HINT-REVIEW-BOOK-4.md`](HINT-REVIEW-BOOK-4.md), which audited Book 4
question by question against its scanned pages. This document answers the follow-up
question: **do the other five books have the same problems?**

Date: 2026-09-01

---

## Summary

They do not have Book 4's problems. They have a larger one.

**Only Books 4 and 5 have hints that were written for their questions.** Books 1, 2, 3
and 6 ship placeholder templates — 404 questions whose "hint" is one of a handful of
generic sentences that say nothing about the problem in front of the learner.

And Book 2's template was worse than useless: it **appended the answer**.

| Book | Distinct English hint sentences (numerals collapsed) | Verdict |
|---|---|---|
| 1 | **1** / 101 | every hint is the same sentence |
| 2 | **11** / 101 | one template, 95% shared — and it stated the answer |
| 3 | **10** / 101 | one template per topic block |
| **4** | **101** / 101 | written per question |
| **5** | **101** / 101 | written per question |
| 6 | **3** / 101 | one template per topic family |

The Chinese hint sets have exactly the same shape counts, so the templates were
translated as templates.

---

## Fixed in this PR — Book 2 gave away the answer 101 times out of 101

Every Book 2 hint was this, in both languages:

> **EN** Write the known quantities, choose the operation signs, then check against **25 kg**.
> **ZH** 列出已知数量，选择运算符号，再核对结果是否为 **25 kg**。

…where `25 kg` was the question's own answer. Some samples:

| id | answer | hint said |
|---|---|---|
| q1 | `394` | "…check against **394**." |
| q56 | `25 kg` | "…check against **25 kg**." |
| q57 | `6 kg` | "…check against **6 kg**." |
| q60 | `2/7` | "…check against **2/7**." |
| q73 | `$2` | "…check against **$2**." |

A learner pressed *Hint* and read the answer. That is not a weak hint, it is a broken
question: the exercise cannot be attempted once the hint is open.

**The fix:** the answer clause is stripped from all 101 hints, in English and Chinese.

> **EN** Write the known quantities, then choose the operation signs before you calculate.
> **ZH** 列出已知数量，先确定运算符号，再进行计算。

This does **not** make them good hints. It makes them as unhelpful as Book 1's, which is
strictly better than handing over the answer. Writing real hints for Book 2 remains
outstanding — see the section below.

---

## What was checked, and what was not

Two different depths of check were applied, and the difference matters.

### Depth A — mechanical, all six books, automated and now covered by tests

| Check | Result |
|---|---|
| exactly 101 questions, ids 1..101 with no gap or repeat | all 6 clean |
| no duplicate question text | Book 4 had 2 pairs — fixed in this branch |
| each topic occupies one contiguous id run | all 6 clean |
| `question-bank.js` identical to `question-bank.json`, Chinese fields included | all 6 clean |
| every `model` value has a branch in that book's page | all 6 clean |
| no numerals run together (`"5 10-cent coins"` reads as `510-cent`) | Books 1 and 3 had 3 cases — fixed |
| no `$` in a hint whose question is not about money | Book 4 had 1 — fixed |
| the geometry visual never labels an area, a volume or a shape count as a side | **all 6 books were broken** — fixed |
| no hint states its own answer | **Book 2, 101 of 101** — fixed |
| Books 4 and 5 keep a distinct hint per question | pinned by test |

### Depth B — per-question mathematical correctness

This is the audit that found Book 4's `q76` (a hint that dropped a halving and led to
668 cm instead of 398 cm). It requires solving each problem independently and then
reading the hint against the printed solution.

**It has been done for Book 4 only.** For Books 1, 2, 3, 5 and 6 — 505 hints — it has
**not** been done.

Eight subagents were dispatched to do it, two per book for the harder books. All eight
died on the same API error:

```
You've hit your org's monthly spend limit (error type rate_limit, HTTP 429)
```

None of them returned a finding. Nothing in this document rests on their output.

### Why the remaining 404 hints were not simply rewritten tonight

Books 1, 2, 3 and 6 need 404 hints written from scratch. That was deliberately **not**
attempted here.

Writing 404 hints in bulk, at speed, without checking each one against the printed
solution, is precisely how a `q76` is created — a confident sentence that quietly
contradicts its question. This review exists because that already happened once. Adding
404 unverified hints to fix a "hints are generic" complaint would trade a visible,
harmless gap for an invisible, harmful one.

---

## What the depth-A pass can and cannot tell you

A useful asymmetry showed up: **a templated hint cannot have most of Book 4's defects.**
It never names a figure label, never states a unit scheme, never asserts an intermediate
value — because it never says anything specific. So the detectors that found Book 4's
`q77` and `q78` returned nothing for Books 1, 2, 3 and 6, and that silence is not
evidence of quality. It is evidence that there is nothing there to be wrong.

Book 5 is the one book where silence is meaningful: its hints are specific, and the
detectors flagged only a single lead, which turned out to be a false positive (`q69`'s
"angle ABE" and "angle PBC" are derivable from points the question does name). Book 5 is
therefore the best candidate for the next depth-B audit, and it already ships the
scanned pages needed for one.

---

## Outstanding work, in the order worth doing it

1. **Depth-B audit of Book 5** (101 hints). Its hints are real, and
   `resources/book-5/supporting-materials/` already holds 42 question-page and 41
   solution-page images. One caveat: unlike Book 4's, Book 5's `solutions-ocr.txt` has
   **no page markers** — it is one continuous blob — so the question→page map has to be
   rebuilt from the images or from the "Solution to Question" headings.
2. **Write real hints for Books 1, 2, 3 and 6** (404 hints), verifying each against the
   printed solution as it is written. Book 1 is the natural place to start: single-step
   arithmetic within 100, so each hint is short and each check is quick.
3. **Depth-B audit of Books 1, 2, 3 and 6**, once their hints say something worth
   checking.

### A note on source material for books 1, 2, 3 and 6

These four books ship only a PDF — no OCR, no page images — and the PDFs are pure
scans with **no text layer**, so text extraction returns nothing. `pdftoppm` is not
installed and there is no root access to add it.

The workaround that succeeded: a throwaway virtualenv with `pymupdf`, which rendered all
329 pages of the four books to PNG at 150 dpi. Whoever resumes this work will need to
repeat that step — the renders were written to scratch space, not committed, because 650
MB of scans would go into a repository that is already 1.3 GB.

```
python3 -m venv /tmp/pdfenv && /tmp/pdfenv/bin/pip install pymupdf
# then render page.get_pixmap(dpi=150).save(...) for each page
```

---

## Tests added

`tests/hint-quality.test.mjs`

- No hint, in either language, may state its own answer. A number the question already
  gives is not a leak; only a hint that states every number of the answer, none of them
  supplied by the question, fails.
- No hint may be empty in either language.
- Books 4 and 5 must keep a distinct hint for every question, so the two books whose
  hints are real cannot quietly regress into templates. Books 1, 2, 3 and 6 are **not**
  asserted here, because the assertion would not yet be true — that is the outstanding
  work above, not a passing test.

Verified by mutation, not by passing. Re-introducing each defect one at a time failed the
test every time:

| Mutation | Caught |
|---|---|
| Book 2 q1 English hint states the answer again | yes |
| Book 2 q1 **Chinese** hint states the answer, English left clean | yes |
| Book 4 loses a per-question hint (q10 copies q9) | yes |
| Book 4 q6 Chinese hint emptied | yes |

`33/33` test files pass.
