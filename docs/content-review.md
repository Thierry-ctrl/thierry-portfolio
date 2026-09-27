# Content review — September 27, 2026

## Basis and confirmed facts

The user's current brief is the source for the SAND start date (December 2024), Kigali location, engineering stack, named project contexts and approximate eBuzima data scope (10,500 rows/day, 450 facilities). The user additionally confirmed employee status and expected ALU completion in January 2028 during this task.

Education remains explicitly in progress. Year 2 and the Software Engineering / BSE wording come from the supplied brief; no completed degree is implied. Professional work is described as contributions, not sole ownership. No salary, savings, clinical outcomes, deployment counts or adoption figures have been invented.

The referenced conversation supports a medication-safety assistant as an early idea only. The site and resume make no claim of hackathon acceptance, award, completed model integration, deployment or clinical validation. Waka remains a prototype.

## Still worth confirming

1. Exact official SAND job title. “Data & AI engineering” currently describes work area; employee status is confirmed.
2. Exact formal ALU degree wording and whether “Year 2” remains the preferred current label. Expected January 2028 completion is confirmed.
3. Email `thierry.ru34@gmail.com` and LinkedIn `thierry-rugira-644146264` were retained from the existing repository; confirm they are current. GitHub is the user-supplied repository owner's public profile. No missing project demos were fabricated.
4. Whether there are approved public project writeups or Waka links to add later. No confidential implementation URLs or credentials are included.

Pay is deliberately omitted; it is not needed for the portfolio or resume.

## Implementation changes

Replaced generic sections with concrete project scope, stack and employment context. Retired the old section components and the form that called a nonexistent contact API. Added an original systems illustration, responsive layout, semantic headings, skip link, focus indicators, native navigation dialog, filters, details, restrained learning-arc interaction and reduced-motion/print styles. Added a real PDF resume and generator. Replaced zoom-restricting viewport settings, improved metadata and made favicon/PDF paths work under a deployment base path. Updated dependencies to resolve the initial audit findings.

## Validation

See the repository's Playwright suite and npm scripts. Local build/type checks and desktop/mobile visual inspection are required before release. This change is local; it does not publish or deploy the site.

Completed checks: TypeScript and production build passed; all five Playwright tests passed in Chrome; axe reported no WCAG A/AA violations on the page or open navigation dialog. Visual checks covered desktop, mobile and the one-page PDF. Layout overflow checks passed at 320, 390, 768, 1024 and 1440px. A production subdirectory build was verified with working resume and favicon routes. The PDF has selectable text and exactly one page. Dependency audit reported zero known vulnerabilities. No real messages were sent and no live medical or private data was accessed.
