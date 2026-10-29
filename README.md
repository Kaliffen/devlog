# eKapital mapping lab

Edit synthetic fixed-width product records and inspect the resulting eKapital 2026 XML. The lab includes exact field-to-element tracing, validation explanations, targeted repairs, and downloadable input/output examples.

Live site: https://kaliffen.github.io/devlog/

This is a static site with no build step. GitHub Pages serves the main branch root. For local preview, run `python -m http.server 8765` in this directory.

The fixed-width layouts, account identifiers and reporting metadata are synthetic teaching data. Base XML examples were validated against the official year-end 2026 r28215 XSDs. No data is submitted to SKAT.

The main lab is `index.html`. The earlier narrated overview is `guide.html`.

Three.js, used by the earlier overview, is distributed under the MIT license in `vendor/THREE-LICENSE.txt`.
