# FileLabelPro pricing page with the Black Friday bar

This is a rebuild of https://filelabelpro.collegeproduce.com/pricing using the live page's own layout, text, colors (orange #FF6B2B, navy #1A2744), fonts (Montserrat and Inter), links and logo. The Black Friday bar sits above the navigation bar.

## Files

- `pricing-option-1.html`: Black Friday bar, Option 1 (offer first)
- `pricing-option-2.html`: Black Friday bar, Option 2 (Black Friday first)
- `pricing-option-3.html`: Black Friday bar, Option 3 (locked line first)
- `styles.css`: page styles and Black Friday bar styles. The bar's styles are in the last section, after the comment marked "Black Friday bar".
- `script.js`: the countdown and the Monthly/Annual price switch ($9.99/mo ↔ $95.90/yr, the same prices as the live page)
- `assets/file-label-pro.png`: the logo, taken from the live site

Open any of the HTML files in a browser to view it.

## How it behaves

- **Scrolling:** the Black Friday bar scrolls away with the page, and the navigation bar stays pinned to the top as it does now.
- **End time:** the countdown runs to `data-ends="2026-11-30T23:59:59-05:00"` (11:59 pm Eastern Time, Monday November 30). When it reaches zero, the bar removes itself.
- **Mobile:** under 900px wide, the bar switches to a short one-line version.

## Adding just the bar to the real site

The live site is a Next.js app. On the real site, add only these three things:

1. The `<aside class="flp-bf">…</aside>` block, placed before `<header>`
2. The CSS from the "Black Friday bar" section of `styles.css`
3. The countdown function from `script.js`

## Links used

- **Button:** "Claim Offer" goes to `https://filelabelpro.collegeproduce.com/try`
- **Terms:** "See terms" goes to `https://collegeproduce.com/file-labelpro/terms`, the general Terms of Service. Point it at offer-specific terms if you have them.
