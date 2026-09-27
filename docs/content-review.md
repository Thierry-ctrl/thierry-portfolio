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

## Deeper automation review

The follow-up explicitly requested Impuruza and fuller automation coverage. Read the previous “Review main codebase branch” and “Understand codebase” task reviews, checked Impuruza monitor function structure, and inspected the local issue-tracking importer README/code plus the air-quality analysis README. No monitors, importers or live integrations were executed; no source data, credentials, internal URLs or reporter details were copied.

- Impuruza: scheduled DHIS2 signal monitoring, metadata enrichment, age checks and webhook reporting are supported. The earlier review identified n8n-to-Zammad ticket creation/reconciliation as planned at that time. The user subsequently confirmed that the workflow has been implemented; the final site and resume reflect this newer confirmation.
- eBuzima: clarified that the source is aggregate utilization data, not raw clinical records. Added scheduled ingestion, concurrency, upserts, quality checks and separate recovery/backfill tools. dbt remains a broader skill, not a claim about this specific pipeline.
- Issue-tracking automation: the local Airtable-to-NocoDB importer supports field/date mapping, target-schema checks, source/destination duplicate checks, dry runs and batched writes. Described capabilities only; no execution count, savings or adoption claim.
- Environmental reporting: repeatable source combination, completeness analysis, averages verification, weather retrieval and generated tables/charts are supported by the local project documentation. Did not publish environmental or health-impact estimates.
- The older resume source provided useful context but included a superseded 2027 graduation date. Kept the user's confirmed January 2028 date. Did not automatically adopt every tool claim from the older draft.

Updated the one-page resume to prioritize Impuruza and implemented migration tooling over the early medication-safety concept. The concept remains labelled on the website. After this update, build/type checks and all five browser tests passed, including accessibility and responsive layout checks; inspected the featured project on desktop/mobile and rendered the one-page PDF.

User confirmation in this follow-up: the Impuruza n8n → Zammad ticket workflow is implemented. Final copy states monitoring-to-ticket creation is implemented. No additional claim of automatic reconciliation, closure, guaranteed deduplication, production uptime or measured impact is inferred from this confirmation.
