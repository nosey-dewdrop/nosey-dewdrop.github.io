# damlahelloworld.github.io — rework plan (2026-07-10)

Final rework. Decided with Damla over long back-and-forth; scope is FROZEN below. Whimsy stays. No reference to existing portfolio designs; anti-reference: vibecodedflopware landing (bad: huge paddings, narrow column, slow reveal; good: confetti mouse trail + click confetti, glyph dividers, colored word highlights).

## The problem it solves
- HR person glancing for 3 seconds must instantly get it ("3rd year, 40 products, SaaS machine")
- 40 projects must be manageable: adding a product = one line in a data file, never touching layout
- Current site tires the eye: bad colors, bad spacing, small fonts, borders everywhere

## Page structure (single page)
1. **HR layer (top, airy)** — plain one-sentence intro + stats strip ("40 products · X live · iOS + web · 3rd year Bilkent CS") + compact education & skills. The ONLY generously-spaced zone; it is short so it fits one screen.
2. **Marquee** — two thin rows of project names flowing in OPPOSITE directions, brand-strip style. Decoration, not information: nobody reads it, it transmits volume + motion. Pausable on hover.
3. **Project list (the wall)** — all ~39 projects, dense list rows: `name — one sentence — technologies`, status color-coded (live / app store / wip / archived). Fed from products.json. This is the scannable scale-proof layer; tight is fine here (nerd layer, not HR layer).
4. **Click → project detail** — each row opens a mini-doc page. Detailed spec below ("Detail pages").

## Detail pages (spec, 2026-07-10)
One template, fed per-project from products.json. NOTHING invented: every field has a real source.

Fields and their sources:
- `name / status / tech / links` — from the repo (gh repo list + topics + homepage)
- `what` (2-4 sentences) — drafted from the repo README + existing index.html project descriptions (they are already Damla-approved copy); Damla corrects
- `features` (3-5 bullets) — from README / app screens; only shipped features, no roadmap items
- `built` — REAL directory tree of the repo (generated from actual file listing, pruned to top 2 levels, annotated per folder), never a generic App/Views placeholder
- `modules` — key classes/files and their one-line jobs, extracted by reading the actual source (flagships get this; small projects skip)
- `numbers` — language split from GitHub languages API, commit count, first/last commit date. Real numbers only.
- `story` (optional, Damla's voice) — why she built it; she writes or approves every word

Depth tiers:
- FULL (live + wip products, ~15): all fields
- SHORT (uni + archive, ~25): what + tech + built(tree) + links, no modules/story

Production pipeline:
1. Script pulls per repo: README, file tree, languages, commits → drafts products.json entries
2. I hand-write `what`/`features` from the drafts (no auto-copy garbage), flagships first: lingolingo, sunflower, msducky, snailmail, stitchu, vibecodedflopware, yks-koc, prolotherapy-reference
3. Damla pass per batch (5-8 projects at a time), corrections applied same session
4. uni/archive batch last

Overlay layout order: header (nr, name, status, one-liner) → tags → what → features → built (tree) → modules → numbers → links → story.

## Craft rules (all decided, non-negotiable)
- Whimsy stays: ASCII mascot, star field, monospace soul
- NO borders — separation via spacing + color only
- One type scale: bigger base, max ~3 sizes, breathing line-height
- One spacing rhythm across all sections
- Confetti: mouse trail + click bursts (port the vibecodedflopware feel)
- Everything visible within 10 seconds of landing; no giant paddings
- Density formula: little content + airy = HR layer; lots of content + tight = nerd layers
- Colors: DECIDED 2026-07-10 — all THREE palettes (gece / beyaz / menekşe) ship as a user-facing theme switcher, menekşe default. Damla loves the transition between them.
- Copy: top sentence + HR-layer wording drafted by me from real facts only, Damla rewrites (sozel metin Damla'nin)

## Data model
- `products.json` = single source of truth: name, one-liner, tech[], status, live URL, repo URL, detail fields
- Generated initially from gh repo list (39 public repos) + READMEs; maintained by hand afterwards
- Fits ecosystem plan (reports/2026-07-09-damlahelloworld-ekosistem.md): portfolio is the brand hub

## Build order (next session)
1. products.json from repo data (names, descriptions, tech via languages API)
2. Page skeleton: HR layer + marquee x2 + wall, palette variables with 2-3 variants
3. Confetti + whimsy port (mascot, stars)
4. Detail template page reading products.json
5. Damla passes: palette pick, copy rewrite, per-project detail corrections

## Status
- 2026-07-10: plan frozen, zero code written. Damla paused the session (tired). Start at step 1 next time.
