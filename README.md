# 101 Challenging Math Word Problems Website

Open `index.html` to choose a book.

## Deploying to Cloudflare Pages

This repository is configured as a no-build Cloudflare Pages site. The publish directory is the repository root, as defined by `wrangler.jsonc`.

1. In Cloudflare, create an API token with **Account > Cloudflare Pages > Edit** permission for the target account.
2. Add these GitHub Actions repository secrets:
   - `CLOUDFLARE_API_TOKEN` — the Pages API token.
   - `CLOUDFLARE_ACCOUNT_ID` — the Cloudflare account ID.
3. Push to `main`, or run the **Deploy to Cloudflare Pages** workflow manually. The first deployment creates or updates the `101-challenging-math-word-problems` Pages project.

For a local or one-off deployment, authenticate with Wrangler and run:

```sh
npx wrangler pages deploy . --project-name=101-challenging-math-word-problems
```

Cloudflare applies the response headers in `_headers`; all application files are served as static assets and no runtime secrets are required.

## Website layout

- `index.html` — the central homepage for choosing Book 1–6.
- `resources/book-1/` to `resources/book-6/` — original PDFs for all six books.
- `resources/book-4/supporting-materials/` — Book 4 OCR text and rendered reference pages.
- `practice/book-4/` and `practice/book-5/` — complete interactive learning libraries. Open their `index.html` files directly, or select the relevant book from the homepage.

## Current practice coverage

Books 4 and 5 each contain all 101 interactive questions with visual models, hints, answer checks, topic selection, and separate local progress tracking. Books 1, 2, 3, and 6 currently provide their original PDFs through the homepage; their interactive question libraries can be added into `practice/book-1/`, `practice/book-2/`, and so on without changing the main website structure.
