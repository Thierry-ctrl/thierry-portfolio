# Thierry Rugira — portfolio

A responsive React / TypeScript portfolio for data and AI engineering work in Rwanda. Original dark, mint-accented systems aesthetic; no external fonts or image requests on the main page.

## Run and verify

```sh
npm ci
npm run dev
npm run typecheck
npm run build
npx playwright install chromium
npm test
```

If Chrome is already installed, use `PLAYWRIGHT_CHANNEL=chrome npm test`. Tests cover project filters, scope disclosures, keyboard navigation, mobile layout, PDF serving, reduced motion and automated WCAG AA checks. Automated checks do not replace human accessibility testing.

Deploy the generated `dist/` directory on a static host. For a subdirectory deployment, use `BASE_PATH=/thierry-portfolio/ npm run build`. To preview that build locally, also set `BASE_PATH=/thierry-portfolio/ npm run preview` and open `/thierry-portfolio/`. Configure an SPA fallback to index.html if the host should serve the custom 404 route. No contact API or secrets are required: contact uses direct email and existing public profile links.

## Content and resume

- `src/pages/Home.tsx`: portfolio content and interactions.
- `src/index.css`: responsive design, print styles, focus and reduced-motion support.
- `public/Thierry-Rugira-Resume.pdf`: downloadable one-page resume.
- `scripts/build_resume.py`: editable resume source; regenerate with Python and ReportLab (`python3 scripts/build_resume.py`). Visually review the PDF after content changes.
- `docs/content-review.md`: provenance, scope and remaining factual checks.

The decorative signals are illustrations, not live sensor readings or measured performance charts. Portfolio project links do not imply that private work has public source code.
