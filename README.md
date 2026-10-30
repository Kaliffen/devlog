# Devlog

Dated pages from projects in progress. Live site: https://kaliffen.github.io/devlog/

This is a static site with no build step. GitHub Pages serves the main branch root. For local preview, run `python -m http.server 8765` in this directory.

- `index.html` is the devlog: every page, dated, newest first. Add an entry there when you add a page.
- `dsl-primer/` is the Game DSL Primer: the core primitives of game-dsl, with snippets and diagrams.
- `ekapital/` is the eKapital mapping lab. Edit synthetic fixed-width product records and inspect the resulting eKapital 2026 XML. The main lab is `ekapital/index.html`, and the narrated overview is `ekapital/guide.html`. The fixed-width layouts, account identifiers and reporting metadata are synthetic teaching data. Base XML examples were validated against the official year-end 2026 r28215 XSDs. No data is submitted to SKAT. Three.js, used by the overview, is distributed under the MIT license in `ekapital/vendor/THREE-LICENSE.txt`.
