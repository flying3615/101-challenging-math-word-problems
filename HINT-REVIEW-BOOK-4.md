# Book 4 — Hint & Question-Bank Review

Audit of `practice/book-4/question-bank.json` (and its browser twin
`practice/book-4/question-bank.js`) against the printed source
*101 Must-Know Challenging Maths Word Problems Book 4* (Singapore Asia Publishers),
using the scanned page images in
`resources/book-4/supporting-materials/reference-images/`.

Date: 2026-08-31

> The follow-up question — *do the other five books have the same problems?* — is
> answered in [`HINT-REVIEW-ALL-BOOKS.md`](HINT-REVIEW-ALL-BOOKS.md). Short version:
> they do not, because only Books 4 and 5 have hints written for their questions at
> all. Book 2's template stated the answer in all 101 of its hints.

---

## Summary

The hints are, on the whole, faithful to the book's methods. Several are exemplary —
`q8`, `q10`, `q11`, `q26` and `q28` reproduce the official unit schemes exactly. No
wrong answer was found anywhere in the bank.

The problems cluster into five groups.

| # | Finding | Scope | Severity |
|---|---|---|---|
| 1 | Four hints lead to a **wrong answer**. `q76`'s is a plain mathematical error. | q72, q75, q76, q101 | **high** |
| 2 | Four questions are **unanswerable in the app** — the figure's dimensions exist only in the printed book, yet the hints tell the learner to read them off a diagram that is never drawn. | q70, q72, q77, q78 | **high** |
| 3 | The geometry visual labels an **area, or a count of shapes, as a side length**. | 5 questions | **high** |
| 4 | Two questions are **duplicated**, which hides the fact that **two book questions are missing** (book Q35 and Q36) and leaves **six questions with the wrong topic**. | q69–q72, q47, q48, q65, q66 | medium |
| 5 | Wording defects: numerals that run together, a stray `$` on a people count, one unit scheme that forces half a unit. | q9, q11, q58, q69, q86, q100 | medium |

Groups 1 and 2 are what to fix first. Group 2 cannot be fixed by editing hints at all —
the question text or the renderer has to change before any hint can work.

The 30 test files that existed all passed and would not have caught any of this.

---

## Status — all of the above is now fixed

Branch `fix/book-4-hints-and-bank-integrity`. 32 of 32 test files pass.

| Group | What changed |
|---|---|
| 1 | `q76`, `q75`, `q72` and `q101` hints rewritten. `q76`'s halving is restored. |
| 2 | The figure's data is now in the question text for `q72`, `q77` (10 cm and 13 cm) and `q78` (6 m strip, 34 m across, 34 m down). All 3 are answerable from the text alone. |
| 3 | The geometry visual no longer labels an area, a volume or a shape count as a side — **fixed in all 6 books, not only book 4**. |
| 4 | The 2 duplicated entries are gone, book Q35 (600 eggs) and Q36 (117 candles) are inserted, and every id now equals its printed question number — which realigns all 6 drifted topics automatically. |
| 5 | `q86`'s stray `$`, the run-together numerals, and `q9`'s half-unit scheme are all rewritten, in English and in Chinese. |

### On group 2 — `q72` needed a second pass

The first rewrite said the step line ran "across to H, up to E, then across to F".
"Across" and "up" are informal, so the positions of H and E were never pinned down and
`EH` was still not derivable from the text — the same defect the rewrite was meant to
remove, with the hint quietly carrying `EH = 5`. The text now says **horizontally**,
**vertically**, and that E is level with F. The chain is then closed:

side = √81 = 9 · GD = 9 − 7 = 2 · BF = GD = 2 · E and F sit 2 below the top ·
**EH = 7 − 2 = 5** · E is directly above H so GH + EF = 9 ·
perimeter = 9 + 2 + 9 + 5 + 7 = **32 cm**

### On group 3 — the same renderer defect was in every book

Book 4 was not special. The identical unit regex and bare-number fallback shipped in all
6 practice pages:

| Book | What the visual claimed |
|---|---|
| 6 | `q28` drew the area 226 cm² as "226 cm"; also `q41` (864 cm²) and `q96` (625 cm²) |
| 3 | `q97` drew the price **"$45.80" as a side length**; also `q96`, `q98`, `q99`, `q100` drew bare numbers |
| 5 | `q40`, `q68`, `q69` drew bare numbers as side lengths |
| 4 | `q78` drew "2" and "3", the counts of shapes; `q72` and `q74` drew areas |

All 6 pages are fixed. The regex now rejects a following `²` or `³` and accepts full unit
words, the bare-number fallback is gone, and the measurements are listed in a caption
that says outright that some of them are a perimeter or an area rather than a side.

Numbering: because 2 duplicates were removed and 2 missing questions added, the bank
still holds exactly 101 questions, and `id` now equals the book's own question number
throughout. Book 4's `localStorage` keys were renamed from `mathStory*` to
`book4MathStory*` so that saved progress and typed scratch work from the old, drifted
numbering are discarded rather than silently reattached to the wrong questions. That
also makes Book 4 consistent with the other 5 books, which already used the prefix.

Beyond Book 4: the same run-together-numerals defect was found and fixed in Book 1
(`q91` "1 5-dollar note", `q95` "5 10-cent coins") and Book 3 (`q49` "7 50-cent
coins"), so the new test can cover all 6 books.

### New tests, each checked against the defect it is meant to catch

`tests/question-bank-integrity.test.mjs` covers all 6 banks: ids 1..101 with no gap,
no duplicate question, one contiguous id run per topic, no unknown model, a model the
page can actually render, `.js` identical to `.json`, no run-together numerals, and no
`$` in a hint whose question is not about money. It also pins book 4's topic blocks to
the book's printed Contents page and asserts that Q35 and Q36 are present.

`tests/geometry-visual-labels.test.mjs` covers the renderer: no page may carry the old
unit regex or the bare-number fallback, every page must carry the honest caption, and
the regex itself is checked against 4 cases including book 6 q52, whose text holds both
`12 cm` and `12 cm³`.

Both were verified by mutation rather than by passing. Re-introducing each defect one at
a time — duplicate question, topic drift, id gap, run-together numerals, stray `$`,
empty hint, unknown model, a `.js`/`.json` divergence, a missing question padded back
into a duplicate, the old unit regex, and the bare-number fallback — produced **11 out
of 11 failures**. A test that only passes proves nothing.

---

## 0. Scope and method

The OCR text in `resources/book-4/supporting-materials/ocr/` is usable for body text
but **destroyed every diagram and every printed question-number tag**. All alignment
claims below therefore come from the **page images**, which are fully legible and
which carry the book's own question number on a purple tag in the left margin.

Checks run:

1. Parity of `question-bank.js` against `question-bank.json`.
2. Every bank answer searched for in the official solution OCR.
3. Bank ↔ book alignment via printed question numbers in the page images.
4. Hint wording scan (ambiguous number adjacency, stray symbols, restatement).
5. Topic/model consistency against the book's topic blocks.

---

## 1. Two things that are healthy

**`.js` and `.json` are identical.** All 101 entries match on `question`, `answer`,
`hint`, `model`, and `topic`. Findings below apply to what the learner actually sees.

**No wrong answer was found.** 86 of the 101 answer strings appear verbatim in the
official solution OCR. The other 15 fail only on typography the OCR cannot render —
the superscript in `cm²` and mixed fractions such as `4 5/12` — and for each of those
the answer's numerals do appear on the expected solution page:

| id | answer | numerals found on |
|---|---|---|
| q69, q71 | 441 cm² | page065 |
| q73 | 3888 cm² | page066 |
| q75 | 256 cm² | page067 |
| q77 | 3738 cm² | page068 |
| q100 | 192 cm / 60 cm² | page078 |
| q101 | 92 cm / 251 cm² | page079 |
| q24 | 65 / 52 stickers | page049 |
| q27 | 114 / 152 sweets | page050 |
| q6 | 240 beads | page043 |
| q35, q36 | 84 | page052, page053 |

Three mixed-fraction answers could not be localised from OCR alone, because their
component digits are too common. One is now settled by image:

- `q11` (**4 5/12 kg**) — **confirmed** on `solution-pages-170dpi/page045.png`,
  "Solution to Question 11", final line "The mass of Parcel C was 4 5/12 kg".
- `q19` (38 1/6 kg) and `q37` (12 3/4 L) remain **unverified**, not disproved.
  Confirming them needs their solution page images.

`q11` also turns out to be a model hint. The book's own thought bubbles on that page
read "Remember to change to a common denominator before subtracting" and "… before
adding", and the bank's hint ends with exactly that advice. `q12` ($7800) is confirmed
on the same page.

All 12 `model: geometry` answers were additionally confirmed against the solution page
images `page065`, `page066`, `page067`, `page068`, `page078` and `page079` — including
the four whose `cm²` the OCR could not read.

---

## 2. Confirmed defect — two duplicated questions

`page028.png` prints the book's Question 70, 71 and 72, each exactly once:

| Book | Question |
|---|---|
| Q70 | mass of a box is 45 kg when full … mass of 6 empty boxes |
| Q71 | 9 small squares form a large square, small side 7 cm, area? |
| Q72 | area of a square is 81 cm², perimeter of the unshaded portion |

The bank contains Q71 and Q72 **twice**:

| Bank id | Content | `topic` | Verdict |
|---|---|---|---|
| q69 | 9 small squares (441 cm²) | `Mass` | spurious copy |
| q70 | 81 cm² unshaded (32 cm) | `Mass` | spurious copy |
| q71 | 9 small squares (441 cm²) | `Area & Perimeter` | correct entry |
| q72 | 81 cm² unshaded (32 cm) | `Area & Perimeter` | correct entry |

`q69` and `q71` are byte-identical in `question`. `q70` and `q72` differ only by the
trailing words "shown in the diagram".

The copies are identifiable as the spurious pair because they carry the wrong `topic`.

**Effect on hints:** the learner meets the same problem twice, with two different
hints, and the two hints disagree about which figure feature to use (see §5, q70/q72).

---

## 3. Consequence — two printed questions are missing

The duplication is not an extra pair added on top of a complete set. It is padding
that hides an omission. Reconstructed alignment:

| Bank ids | Book questions | Note |
|---|---|---|
| q1 – q9 | Q1 – Q9 | aligned |
| q10 – q46 | Q10 – Q48 minus 2 | **2 book questions skipped here** |
| q47 – q64 | Q49 – Q66 | bank runs 2 behind |
| q65 – q68 | Q67 – Q70 | bank runs 2 behind |
| q69, q70 | Q71, Q72 | content correct |
| q71, q72 | Q71, Q72 again | duplicates restore the count to 101 |
| q73 – q101 | Q73 – Q101 | aligned again |

Anchors, each read from an image or from clean OCR:

- `q9` is a whole-number problem and `q10` is the first fraction problem, so the
  offset is **0** at the Whole Numbers / Fractions boundary.
- `q47` ("Michael paid $14 for 3 similar mangoes and a durian") contains no fraction
  at all and is a Money problem, yet sits inside the `Fractions` label range. So the
  offset is already **2** by `q47`.
- `page028.png` proves `q68` = book Q70, i.e. offset **2**.
- `q73` = book Q73 (perimeter 288 cm) and `q101` = the book's last question
  (3 identical rectangles), i.e. offset **0** again.

### The two missing questions are book Q35 and Q36

Both are printed on `question-pages-170dpi/page016.png`, whose purple tags read
**34, 35, 36**. The bank's `q34` is the book's Q34, but the bank's `q35` is the
question `page017.png` tags as **37**. The bank jumps straight from book Q34 to
book Q37. Neither missing question has a figure; both are pure text.

**Book Q35** — official answer **600 eggs** (`solution-pages-170dpi/page052.png`:
15 × 25 = 375 packed; 5 units → 375; 1 unit → 75; 8 units → 600).

> A farmer sold some eggs in the morning. He then packed the remaining eggs into 15
> cartons with 25 eggs in each carton. If the number of eggs he sold was 3/5 of the
> number of eggs he packed, how many eggs did the farmer have at first?

**Book Q36** — official answer **117 candles** (`page052.png`: yellow 6 + red 24 +
blue 48 = 78 = 2 units; 1 unit → 39; 3 units → 117).

> There were some candles in a box. 1/3 of the candles were green. There were twice as
> many blue candles as red candles and 1/4 as many yellow candles as red candles. If
> there were 24 red candles, how many candles were there in the box altogether?

Both texts are transcribed verbatim from the page. The bank normalises printed prose
("twice" → "2 times", "half as many" → "1/2 as many"), so apply that house style when
inserting them.

The offset was verified directly at these points, not interpolated: offset 0 at bank
q22, q30, q33, q34; offset 2 at bank q35, q38, q40, q44, q60. The count identity
closes the argument — 101 entries = 101 book questions − 2 skips + 2 duplicates — so
no third skip or duplicate can exist anywhere in the bank.

---

## 4. Confirmed defect — six questions carry the wrong topic

The book groups its 101 questions into contiguous topic blocks. The bank's `topic`
labels were applied to the book's *id ranges*, but the content sits two positions
earlier. Every block boundary in the affected region is therefore mislabelled.

The blocks are not inferred from the bank. The book prints them on its **Contents**
page, `reference-images/selected-preview-pages/page004.png`:

| Book questions | Learning objective |
|---|---|
| 1 – 9 | The Four Operations of Whole Numbers |
| 10 – 48 | Fractions |
| 49 – 66 | Money |
| 67 – 70 | Mass |
| 71 – 78 | Area and Perimeter |
| — | **2-part Word Problems**, subdivided as: |
| 79 – 80 | The Four Operations of Whole Numbers |
| 81 – 95 | Fractions |
| 96 – 99 | Money |
| 100 – 101 | Area and Perimeter |

The preface on `page003.png` states the same intent: "The questions are categorized into
respective topics in accordance with the current Primary Mathematics Syllabus."

This is what makes the six rows below defects rather than judgement calls. Per the
Contents page, book Q49 and Q50 are **Money**, and the bank holds them at `q47`/`q48`
labelled `Fractions`.

| Bank id | Content really is | `topic` says | Evidence |
|---|---|---|---|
| q47 | Money | `Fractions` | holds book Q49, which `page004.png` lists under Money; also has no fraction in its text |
| q48 | Money | `Fractions` | holds book Q50, listed under Money; `model` is already `money-units` |
| q65 | Mass | `Money` | "total mass … 124 kg", answer `4 kg` |
| q66 | Mass | `Money` | "total mass of 100.75 kg", answer `8.3 kg` |
| q69 | Area & Perimeter | `Mass` | answer `441 cm²` |
| q70 | Area & Perimeter | `Mass` | answer `32 cm` |

**Effect:** the app offers topic selection. A learner who picks **Mass** currently
gets two geometry problems and never sees two real mass problems. A learner who picks
**Money** gets two mass problems. This is user-visible, not cosmetic.

### A separate loss — the 2-part section's own topics were flattened

The Contents page divides the 23 two-part questions into four learning objectives:
Whole Numbers (Q79–80), Fractions (Q81–95), Money (Q96–99) and Area and Perimeter
(Q100–101). The bank collapses all 23 into a single topic string,
`"2-part Word Problems"`.

That is a defensible design choice, not an error — "2-part" is a useful category in its
own right. But it does mean the app's topic filter cannot offer, say, the two-part
fraction problems, and that 23 of 101 questions share one undifferentiated label. If
topic selection matters to the learner, consider a second field (`subtopic`) rather than
overloading `topic`.

---

## 5. The biggest hint problem — several hints point at a figure the app never draws

This is the finding with the widest user impact, and it is not a wording issue.

`practice/book-4/index.html` renders one visual per question from the `model` field. For
`model: "geometry"` the renderer is:

```js
} else if (plan.type === 'geometry') {
  const values = plan.measures.length ? plan.measures : plan.values.slice(0, 2);
  art = `<div class="shape-map">
      <div class="shape-label top-label">${escapeHTML(values[0] || 'known side')}</div>
      <div class="geometry"></div>
      <div class="shape-label side-label">${escapeHTML(values[1] || 'other side')}</div>
    </div>
    <div class="model-subline">Mark the given lengths before calculating.</div>`
}
```

`.geometry` is a single fixed rectangle whose CSS pseudo-elements hard-code the words
`length` and `breadth`. **All 12 geometry questions therefore draw the same plain
rectangle**, whatever their real shape — a 3 × 3 array of squares, a staircase, three
overlapping rectangles, a garden made of 2 rectangles and 3 squares. `values` is
scraped from the question text, so a dimension that lives only in the printed figure
never reaches the screen at all.

### The scrape also mislabels what it does find

`modelPlan` builds those two labels from the first two matches of

```js
/\d+(?:\.\d+)?\s*(?:cm|mm|m|km|g|kg|l|ml)\b/gi
```

That regex cannot tell an **area** from a **length**, and it has no fallback that knows
it failed. The result is a visual that states things which are false:

| id | screen shows as "length" / "breadth" | what those values really are |
|---|---|---|
| q70, q72 | "81 cm" | 81 **cm²**, an area — the `²` is outside the match |
| q74 | "36 cm" | 36 **cm²**, the square's area |
| q101 | "25 cm" | 25 **cm²**, an overlap square's area |
| q78 | "2" and "3" | **counts of shapes** (2 rectangles, 3 squares) — no unit matched, so it fell through to bare numbers |
| q77 | "180 cm" and "24 cm" | a perimeter and one side, drawn as though they were the two sides |

`q78` takes a second, worse path, and it is worth spelling out because it needs a
different part of the code. Its text says "2 **metres**", and the measures regex
requires a word boundary right after the unit — after `m` comes `e`, so `\b` fails and
`measures` comes back **empty**. The geometry branch then falls through to
`plan.values.slice(0, 2)`, and `valuesFrom` is:

```js
function valuesFrom(q){
  return [...new Set((q.question.match(/\$?\d+(?:\.\d+)?(?:\s*\/\s*\d+)?%?/g)||[])
    .map(value => value.replace(/\s+/g,'')))].slice(0,6)
}
```

On q78's text that yields `["2", "3", "$23"]` — "2 similar rectangles", "3 similar
squares", "$23", with the second "2" removed as a duplicate. `slice(0, 2)` takes `"2"`
and `"3"`. So the garden is drawn as a rectangle whose sides are labelled with the
number of rectangles and the number of squares.

So for these questions the learner is shown a rectangle whose two sides are labelled
with an area, or with a count of shapes. That is worse than showing no visual, and it
works against whatever the hint says.

Two things follow. Some questions cannot be answered in the app, and their hints
instruct the learner to read labels that are not there.

| id | hint tells the learner to use | present in question text? | on screen? | verdict |
|---|---|---|---|---|
| q78 | "the **34 m and 6 m labels**" | **no** — text has only "$23 to fence 2 metres" | no | **unanswerable** |
| q77 | "the labelled horizontal and vertical sections of the diagram" | partly — text names EFGH, YH, GZ, ABCD but not their arrangement | no | **unanswerable** |
| q70 | "the **7 cm** marked side and **matching tick marks**" | **no** — text has only "area of a square is 81 cm²" | no | **unanswerable** |
| q72 | "the unshaded **L-shaped** portion", text says "shown in the diagram" | no | no | **unanswerable** |
| q101 | "each overlap square has side 5 cm … each 13 cm by 9 cm rectangle" | **yes** — text was supplemented with "Each rectangle is 13 cm by 9 cm" | no | arrangement still needed for part (a) |
| q69, q71 | "a 3 by 3 array" | inferable — 9 squares forming a square must be 3 × 3 | no | acceptable |
| q73, q74, q75, q76, q100 | measurements only | yes | n/a | fine |

`q101` shows that someone already knew about this problem and fixed it the right way:
its dimensions were folded into the question text. The same treatment was never applied
to `q70`, `q72`, `q77` or `q78`.

`page028.png` confirms what `q70`/`q72` are missing. The printed figure is a square with
a grey staircase region; a vertical arrow labelled **7 cm** spans part of the left edge,
and single and double tick marks pair up equal horizontal segments. None of that is
recoverable from the question text.

### What to do

Improving these four hints is not enough — the hint cannot rescue a question whose data
is missing. Pick one of:

1. **Fold the figure's data into the question text**, as `q101` already does. Cheapest,
   and it makes the questions answerable without any renderer work. For `q70`/`q72`:
   state the 7 cm and the equal-segment relationship in words.
2. **Ship the figure.** The scans already exist under `reference-images/`. Add an
   optional `figure` field to the bank pointing at a cropped image, and render it for
   these questions instead of the generic rectangle.

Only after the data is present does rewriting the hints make sense.

---

## 6. Hint defects

### 6a. Mathematically wrong, or leading to a wrong answer — fix these first

Four hints do not merely read awkwardly. A learner who follows them literally reaches a
wrong answer. Each was checked against the official solution page image.

**q76 — the hint drops a halving. This is a plain error.**

The question states that the perimeter of a square is **½** the area of a rectangle.
The rectangle is 15 cm by 12 cm, so its area is 180 cm² and one square's perimeter is
**90 cm**. The hint says:

> Find the rectangle's area and perimeter. **Its area gives the perimeter of 1 square**;
> then add wire for all 5 shapes and the leftover 20 cm.

Followed literally, the learner uses 180 cm as the square's perimeter and computes
3 × 180 + 108 + 20 = **668 cm** instead of the correct **398 cm**. `page067` confirms
the official step is 180 ÷ 2 = 90.

Suggested: "The rectangle's area is 180 cm², so 1 square's perimeter is half of that,
90 cm. Add 3 square perimeters, 2 rectangle perimeters and the 20 cm left over."

**q75 — the hint only points one way.**

> Remember that the border **adds** 4 cm on both sides.

That is right for the paper's breadth (8 + 4 + 4 = 16) but wrong for the picture's
length, where `page067` **subtracts** (24 − 4 − 4 = 16). A learner applying "adds" to
the length gets 32 cm.

Suggested: "The border adds 4 cm at each end, so the paper is 8 + 4 + 4 wide while the
picture is 24 − 4 − 4 long. Then subtract the picture's area from the paper's."

**q72 — "outside edges" invites dropping half the perimeter.**

> … then **trace only the outside edges** of the unshaded L-shaped portion.

The unshaded region's boundary includes the two step cuts that sit *inside* the square.
`page066` Step 3 counts them. A learner who traces only the square's own outer edges
gets 18 cm instead of 32 cm.

Suggested: "The square's side is 9 cm and the marked 7 cm gives 2 cm steps. The L's
perimeter includes the two step cuts as well as the parts of the square's own edges."

**q101 — "square(s)" hides the step that decides the answer.**

> … then subtract **the overlap square(s)** from each 13 cm by 9 cm rectangle.

`page079` shows the **middle** rectangle overlapping on both ends, so it loses **two**
25 cm² squares, while each outer rectangle loses one: 92 + 67 + 92 = **251 cm²**. A
learner who subtracts one square from each of the three rectangles gets 3 × 92 = 276
cm²; one who subtracts a single square from the combined 351 cm² gets 326 cm². Neither
is right, and the bare "(s)" does not tell them which case applies.

Suggested: "The overlap squares are 5 cm by 5 cm. The middle rectangle loses two of
them; each end rectangle loses one."

### 6b. Adjacent bare numbers read as one number

Four hints place two numerals side by side with nothing between them. For the
9-to-11-year-old audience this is a genuine misread risk.

| id | Current text | Reads as | Suggested |
|---|---|---|---|
| q69 | "each side … has 3 7 cm lengths" | "37 cm" | "each side of the large square is 3 × 7 cm" |
| q58 | "Use the 2 50-cent coins" | "250-cent" | "Use the two 50-cent coins" |
| q100 | "the wire needed for 2 12 cm squares" | "212 cm" | "the wire needed for two squares of side 12 cm" |
| q11 | "Subtract 3/4 kg from 4 1/2 kg" | "41/2" | "Subtract 3/4 kg from 4½ kg" (or "from 4 and a half kg") |

### 6c. Stray currency symbol on a people count — q86

Current hint:

> Split the hat wearers into 6 equal units. The difference between 5 units of women
> and 1 unit of men is **$124 in people, not dollars**.

The problem contains no money at all; it counts people. The `$` is wrong, and the
appended "in people, not dollars" is an attempt to patch it that makes the sentence
contradict itself. The hint also omits the step that matters: the difference is
**4 units**.

Suggested: "Split the hat wearers into 6 equal units — 1 unit of men and 5 units of
women. Their difference is 4 units, which equals 124 people."

### 6d. A hint that only restates the question — q69

`q69`'s hint reuses 78% of the question's own vocabulary and adds no new step. It is
also the spurious duplicate. Deleting the entry removes the problem.

### 6e. Style: "1st" and "2nd" — WITHDRAWN, this is a deliberate house rule

An earlier draft of this report listed the 18 hints that write "1st" where the word
"first" would read more naturally, and recommended changing them. **That
recommendation was wrong.** The repo enforces the opposite rule:

`practice/book-4/tests/arabic-numerals.test.mjs` fails the build if any `question` or
`hint` contains a spelled-out number word — the list covers `zero`…`ninety`,
`first`…`tenth`, `twice` and `half`. Writing "First," would break the suite.

So "1st", "2 times" and "1/2" are the intended style, not a defect. Any hint rewrite in
this report has to stay inside that rule, which is why the fixes below say "1/2 of it"
rather than "half of it" and "2 of the 50-cent coins" rather than "two 50-cent coins".

### 6f. A unit scheme that forces half a unit (q9)

This is the most substantive defect among hints whose question data is intact, because
the hint actively leads the learner into the trap the book's method is designed to
avoid.

Book Q9: a basket has 4 times as many blue balls as red. After 21 blue balls are taken
away, there are 2 times as many red as blue. How many balls at first? Answer 30.

The official solution on `solution-pages-170dpi/page044.png` reads:

> Step 2: Find the total number of balls at first
> 7 units → 21 · 1 unit → 21 ÷ 7 = 3 · **10 units → 10 × 3 = 30**

So the book draws **blue = 8 units and red = 2 units**. It deliberately scales the
4 : 1 ratio up by two, because after the removal the new blue amount must equal half
the red amount — and only at that scale does it land on a whole unit (1 unit).

The bank's hint instead says:

> Represent the original blue balls as **4 units** and red balls as **1 unit**. After
> 21 blue balls are removed, compare the new blue amount with 2 times the red amount.

A learner who draws 4 and 1 as instructed finds the new blue amount is **half a unit**.
The bars can no longer be divided evenly and the model stops working. The hint states
the ratio correctly but picks the unit scheme the book rejects.

Suggested: "Draw blue as 8 units and red as 2 units, so that after the removal the new
blue amount is exactly 1 unit. The 21 balls taken away are then 7 units."

**For contrast, `q8` and `q10` on the same solution page are exemplary** — both hints
reproduce the book's unit scheme exactly (`q8`: after-transfer 3 units → 120; `q10`:
remove Lucy's $20 first, then 7 units → $112). So the defect is specific, not
systemic.

**Where else to look — and how noisy that shortlist is.** A scan comparing every
"N units" claim in a hint against the "N units" steps on its own solution page flagged
15 questions. Three of them were then checked against
`solution-pages-170dpi/page050.png`, and **all three turned out to be correct**:

| id | book method on page050 | bank hint | verdict |
|---|---|---|---|
| q26 | Gina 4, Cindy 3, Ray 2 units → 9 units → 324 tickets | names 4, 3, 2 units | **OK, exact match** |
| q28 | after = 6 units → $54; Mike 5 units, Sue 2 units + $50 → $113 | names 5 units and "leftover plus the $50" | **OK, exact match** |
| q29 | Saturday 2, Sunday 4, Monday 1 → 7 units → 1260 | says 1, 2, ½ then "use a common denominator" | **correct but indirect** |

So the flag is mostly OCR noise — the solution pages do use those unit counts, the OCR
just lost them. `q9` remains the one confirmed failure. Remaining unchecked flags, in
case someone wants to close them out: q6, q22, q48, q64, q73, q79, q80, q86, q88, q93,
q95.

`q29` is worth one small polish. It asks the learner to start from Saturday = 1 unit,
Sunday = 2, Monday = ½ and then rescale. That is sound — unlike `q9` it does not leave
the half unit unresolved — but the book simply draws 2, 4 and 1 from the start.
Suggested: "Draw Saturday as 2 units, Sunday as 4 units and Monday as 1 unit, so no day
needs half a unit. All 7 units together are 1260."

---

## 7. Method mismatch between hint, book, and the app's visual — q7

Book question: Helen arranges chairs; more than 30 and fewer than 70; 8 per row leaves
her 7 short; 7 per row leaves 2 over. Answer 65 chairs.

- The official solution on `page043` solves it with **Guess and Check**, laid out as
  two tables of multiples. The OCR of that page still shows the words
  "Thinking skills", "Visualisation" and the multiple rows `1 9 17 25 33 41 49 57 65`.
- The bank's hint is mathematically correct: "Look for a number between 31 and 69 that
  is 2 more than a multiple of 7 and 7 less than a multiple of 8." (65 − 2 = 63 = 7×9,
  and 65 + 7 = 72 = 8×9.)
- But the bank sets `model: "unit-bar"`, so the app draws a **bar model** for a problem
  that has no bar model in the book and cannot usefully be shown as one.

Suggested: keep the hint, change the visual. Either add a `guess-check` model that
renders a small table of multiples, or drop the visual for this question rather than
render a misleading bar.

---

## 8. Hint calibration — an observation, not a defect list

Several hints hand over the decisive relationship and leave only arithmetic, e.g.

- `q15`: "The difference between women and men is 3 equal units, which is 960."
- `q4`: "… The 2-unit difference is 16."
- `q99`: "Vivian's $78 is 2/3 of her starting money, while her brother's $78 is 3/5 of
  his."

These are correct and they match the book's method. Whether they give away too much
depends on the intended role of the single hint button. If the app ever grows a
two-stage hint, these are the natural candidates to split into "what to notice" and
"what to compute".

---

## 9. Recommended order of work

Every item below is now done — see **Status** near the top of this report. The list is
kept as the record of why each change was made, and in what order.

Ordered by harm to the learner, not by effort.

**Fix now — these produce wrong answers (§6a)**

1. `q76` — restore the halving. The hint is currently a plain mathematical error.
2. `q101` — say that the middle rectangle loses two overlap squares.
3. `q72` — say that the step cuts belong to the perimeter.
4. `q75` — give both directions, "adds 4 cm at each end" and "subtract 4 cm twice".

**Fix next — these make a question unanswerable (§5)**

5. Fold the printed figure's data into the question text for `q70`, `q72`, `q77`
   and `q78`, the way `q101` already does. Specifically: `q70`/`q72` need the 7 cm and
   the equal-segment relationship; `q77` needs 10 cm and 13 cm; `q78` needs 34 m and
   6 m. Until this is done, no hint rewrite can help those four.
6. Stop the geometry visual from labelling an area or a shape count as a side length.
   Either match the unit including `²`, or drop the label when the scrape is not a
   confident length.

**Then — bank integrity**

7. Keep one entry per book question. The two pairs are separate problems, so handle
   them separately:
   - **9-squares pair (book Q71):** keep `q71`, delete `q69`. `q71`'s wording is
     already clean; `q69`'s is the garbled "3 7 cm" version.
   - **81 cm² pair (book Q72):** keep `q72`, delete `q70` — but first port `q70`'s
     figure detail ("the 7 cm marked side and matching tick marks") into `q72`'s hint,
     because `q72`'s hint names no number at all.
8. Insert book Q35 (600 eggs) and Q36 (117 candles) — full text and official answers
   are in §3 — and write a hint for each. Both are fraction problems with no figure, so
   `model: "fraction-of-remainder"` suits Q35 and `model: "unit-bar"` suits Q36.

   **Decide deliberately how to number them.** The app saves solved question ids in
   `localStorage` (`mathStorySolved` for Book 4, `bookNMathStorySolved` for the others),
   and the homepage computes progress as `completed / 101` over ids 1–101. Renumbering
   to restore the book's own 1…101 would silently reassign the meaning of every saved
   id from 35 upward, so an existing learner's progress becomes *wrong* rather than
   merely reset. Either append the two as ids 102 and 103 and raise the denominator, or
   renumber and clear the saved keys on purpose. Do not renumber and leave the keys.
9. Fix the six wrong `topic` values in §4. Better still, derive `topic` from the book
   block rather than storing it per entry, so label and content cannot drift again.

**Then — wording and visuals**

10. Apply the number-adjacency fixes in §6b and the `q86` stray `$` fix in §6c.
11. Rewrite `q9`'s unit scheme (§6f) and polish `q29`.
12. Decide on `q7`'s visual (§7).
13. One editorial pass on "1st" versus "First" (§6e).

**Then — prevent recurrence**

14. Add the content tests in §10. The existing 27 files all pass and none of them would
    have caught a single defect in this report.

---

## 10. Test-suite gap

All 27 test files in the repo pass. They check page wiring, theme colours, progress
keys, scratchpad presence and markup styling. None checks the **content** of a
question bank. The duplicate pair, the topic drift and the missing questions all
survived a green suite.

Minimum useful additions:

- no two entries share the same `question` text;
- `topic` values form contiguous id runs;
- `id` values are exactly 1…101 with no gaps;
- every `model` value is one of the renderer's known models;
- `question-bank.js` matches `question-bank.json`.
