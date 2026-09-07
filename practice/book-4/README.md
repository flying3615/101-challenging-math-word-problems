# Math Story Lab · 101 Challenge Library

A private, browser-based learning companion for the supplied **101 Must-Know Challenging Maths Word Problems Book 4**.

## Open it

Open `index.html` in a modern browser. It is self-contained and works without a server.

- `index.html` — the complete question library
- `q4-guided.html` — a fully guided, four-step animated lesson for Question 4
- `question-bank.json` / `question-bank.js` — question data used by the library

## Child learning flow

1. Choose a topic or a question number.
2. Read the problem.
3. Reveal a visual model only when useful.
4. Use one small hint if needed.
5. Type an answer and check it.

Progress is stored locally in the browser on this device. No audio or voice features are included.

## Parent use

The **Parent snapshot** button shows solved problems, attempted problems, and hints used during the current practice history.

Enter the parent password (`parent123` by default — change it in `index.html`'s `PARENT_PASSWORD` constant) to turn on parent mode. While parent mode is on, every question shows its answer next to the answer box. Parent mode stays on across page reloads until you click "Exit parent mode." Because this is a static site, the password only deters casual browsing — it is not a security control.
