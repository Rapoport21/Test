# AI Direction Log

This log records every significant AI output across sessions — what was asked, what was produced, and what was corrected. It is the institutional memory of human-AI collaboration on this project.

---

## Entry 1 — Session 2: Infrastructure Scaffold

**Date:** April 6, 2026
**Session:** 2
**Prompted by:** Art Director

**What was asked:**
Full infrastructure rebuild from scratch. Convert existing React prototype to Vanilla JS. Scaffold a clean Vite + Vanilla JS project with a specific folder structure, GitHub Actions deploy workflow, empty placeholder files, and ESF documentation in a `claude/` folder. Add a labeled plumbing test (JS → DOM → CSS pipeline check).

**What was produced:**
- `index.html` — HTML5 shell with plumbing test button, imports `src/main.js`
- `vite.config.js` — Vite config, no React plugin, `base: '/Test/'`
- `package.json` — Vite-only, scripts: dev / build / preview
- `.gitignore` — Standard Node/Vite ignores
- `.github/workflows/deploy.yml` — GitHub Actions workflow, triggers on push to main, deploys to GitHub Pages via `actions/deploy-pages@v4`
- `src/main.js` — Imports style.css, plumbing test logic
- `src/css/style.css` — Empty with design intent placeholder comment
- `src/js/selector.js` — Empty with character logic placeholder comment
- `src/assets/images/.gitkeep` — Holds empty images dir
- `claude/context.md`, `claude/steps.md`, `claude/ai-direction-log.md`, `claude/records-of-resistance.md`

**Corrections made:**
None. Spec was followed exactly. AI made no design decisions.

---

## Entry 2 — Session 3: (Placeholder)

**Date:**
**Session:** 3
**Prompted by:**

**What was asked:**

**What was produced:**

**Corrections made:**

---

## Entry 3 — Session 4: (Placeholder)

**Date:**
**Session:** 4
**Prompted by:**

**What was asked:**

**What was produced:**

**Corrections made:**

---

## Entry 4 — Session 5: (Placeholder)

**Date:**
**Session:** 5
**Prompted by:**

**What was asked:**

**What was produced:**

**Corrections made:**
