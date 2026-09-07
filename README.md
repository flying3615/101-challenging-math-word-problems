# 101 Challenging Math Word Problems Website

Interactive practice site for 101 Must-Know Challenging Maths Word Problems (Books 1–6): visual models, hints, answer checks, progress tracking, and a password-gated parent mode.

Open `index.html` to choose a book.

## Deploying to Cloudflare Pages

This repository is configured as a no-build Cloudflare Pages site. The deployment workflow stages the website in `.cloudflare-pages/`, excluding OCR reference images and moving source PDFs above Pages' 25 MiB file limit to the `math-word-problem-resources` R2 bucket. A Pages Function serves those R2 objects through their original `/resources/...` URLs.

1. In Cloudflare, create an API token with **Account > Cloudflare Pages > Edit** and **Account > Workers R2 Storage > Edit** permissions for the target account.
2. Add these GitHub Actions repository secrets:
   - `CLOUDFLARE_API_TOKEN` — the Pages API token.
   - `CLOUDFLARE_ACCOUNT_ID` — the Cloudflare account ID.
3. Push to `main`, or run the **Deploy to Cloudflare Pages** workflow manually. The first deployment creates or updates the `101-challenging-math-word-problems` Pages project.

For a local or one-off deployment, authenticate with Wrangler and run:

```sh
npx wrangler pages deploy .cloudflare-pages --project-name=101-challenging-math-word-problems
```

Cloudflare applies the response headers in `_headers`; runtime secrets are not used by the deployed site.

## Website layout

- `index.html` — the central homepage for choosing Book 1–6.
- `resources/book-1/` to `resources/book-6/` — original PDFs for all six books.
- `resources/book-4/supporting-materials/` — Book 4 OCR text and rendered reference pages.
- `practice/book-1/` through `practice/book-6/` — complete interactive learning libraries. Open their `index.html` files directly, or select the relevant book from the homepage.

## Current practice coverage

Every book (1 through 6) contains all 101 interactive questions with visual models, hints, answer checks, topic selection, and separate local progress tracking. Books 4–6 also include a guided, step-by-step worked solution per question.

Each library has a password-gated "Parent snapshot" panel (default password `parent123`, set in each book's `index.html`). Entering the parent password shows the answer next to every question and unlocks the guided solution (Books 4–6); without it, both stay hidden. Because these are static sites, the password deters casual browsing — it is not a security control.
