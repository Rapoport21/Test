# Project Context — Hero Faction Screen

## Course Information
- **Course:** AI 201, Spring 2026
- **School:** Savannah College of Art and Design (SCAD)
- **Professor:** Tim Lindsey
- **Project:** Hero Faction Screen — a fashion era character selector

---

## Project Description
An interactive web experience presenting a cast of characters, each representing a distinct fashion era. Users select a character/faction and are presented with that era's visual world. The screen functions as both a selector and a mood piece.

---

## Tech Stack
- **Language:** Vanilla JavaScript (no frameworks)
- **Bundler:** Vite
- **Layout:** CSS Grid
- **Deployment:** GitHub Pages (via GitHub Actions)
- **Repo:** https://github.com/Rapoport21/Test

---

## Folder Map
```
/
├── index.html
├── vite.config.js
├── package.json
├── .gitignore
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── main.js
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── selector.js
│   └── assets/
│       └── images/        ← character and environment art goes here
└── claude/
    ├── context.md
    ├── steps.md
    ├── ai-direction-log.md
    └── records-of-resistance.md
```

---

## Key Rules

1. **Human writes Design Intent first.** No creative coding begins until the Art Director has written and handed over Design Intent.
2. **AI builds infrastructure only** until Design Intent is received. AI does not make decisions about colors, fonts, layouts, character design, mood, or any visual element.
3. **If it's a design question, it waits.** When in doubt about whether something is a design decision, treat it as one and hold.
4. **These docs travel with the project.** The `claude/` folder is the institutional memory of every session.

---

## Roles
- **Art Director / Orchestrator:** Nick Rapoport — makes all design decisions, sets creative direction, approves or rejects AI output
- **Engineering:** Claude (AI) — builds infrastructure, implements Design Intent as handed over, flags ambiguity

---

## Current Status
**Session 2 complete. Infrastructure scaffolded.**

- Vite + Vanilla JS project is set up at repo root
- GitHub Actions deploy workflow is configured for GitHub Pages
- Plumbing test (JS → DOM → CSS) is in place and labeled for removal
- No design decisions have been made
- `src/css/style.css` and `src/js/selector.js` are empty placeholders

**Awaiting Design Intent from Art Director before any creative coding begins.**

---

## Next Steps
1. Art Director writes Design Intent document
2. Session 3 begins: implement Design Intent
