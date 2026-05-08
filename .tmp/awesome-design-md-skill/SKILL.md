---
name: awesome-design-md
description: Use curated DESIGN.md style systems from real-world products to drive high-fidelity UI generation. Trigger when users ask for a page/app/UI in the style of a specific brand (for example Vercel, Linear, Apple, Stripe, Notion, etc.) or ask for DESIGN.md-based styling.
---

# awesome-design-md

This skill packages the `VoltAgent/awesome-design-md` collection as local references.

## Use when

- User asks for a website/app UI that should match a known brand style.
- User asks to pick a visual direction from multiple product aesthetics.
- User asks for DESIGN.md-driven generation.

## Resource location

- `resources/design-md/<brand>/DESIGN.md`
- `resources/design-md/<brand>/README.md`

## Workflow

1. Identify the target style from the user request (for example `vercel`, `linear.app`, `apple`, `stripe`, `notion`).
2. Open and extract: palette, typography, spacing, component states, and interaction constraints from the corresponding `DESIGN.md`.
3. Implement UI with those constraints first, then adjust for task-specific UX needs.
4. If user is undecided, propose 3 distinct style candidates from this library and build one quickly.

## Notes

- Prioritize structural consistency (layout rhythm, spacing, typography scale) over decorative mimicry.
- Keep brand influence as style guidance; do not imply official affiliation.
