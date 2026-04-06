# Session Steps — Recreation Guide

## Session 1 (Prior Session)
- Initial commit: Hero Faction Screen prototype built with React + Vite
- React-based component structure in place (HeroScreen, FactionCard, factions data)
- Basic deployment to GitHub Pages attempted via gh-pages script

---

## Session 2 — Infrastructure Scaffold (Current Session)

### What Was Asked
Art Director requested a full infrastructure teardown and rebuild from scratch:
- Remove React entirely — project converts to Vanilla JS
- Scaffold a clean Vite + Vanilla JS project
- Set up GitHub Actions for GitHub Pages deployment
- Create ESF documentation folder (`claude/`) with four .md files
- Add a labeled plumbing test (JS → DOM → CSS)

### What Was Produced

**Files removed (React cleanup):**
- `src/App.jsx`
- `src/main.jsx`
- `src/components/FactionCard.jsx`
- `src/components/HeroScreen.jsx`
- `src/data/factions.js`
- `src/styles/` (all CSS files)
- `src/assets/vite.svg`
- `public/` directory

**Files created or rewritten:**

| File | Action | Notes |
|------|--------|-------|
| `index.html` | Rewritten | HTML5 shell, imports `src/main.js`, contains labeled plumbing test button |
| `vite.config.js` | Rewritten | Removed React plugin, `base: '/Test/'` retained |
| `package.json` | Rewritten | Removed React and gh-pages deps, Vite only |
| `.gitignore` | Updated | Standard Node/Vite ignores |
| `.github/workflows/deploy.yml` | Created | GitHub Actions → GitHub Pages, triggers on push to main |
| `src/main.js` | Created | Imports `style.css`, contains labeled plumbing test logic |
| `src/css/style.css` | Created | Empty placeholder with design intent comment + temp test class |
| `src/js/selector.js` | Created | Empty placeholder with comment |
| `src/assets/images/.gitkeep` | Created | Holds empty images directory in git |
| `claude/context.md` | Created | Full project context document |
| `claude/steps.md` | Created | This file |
| `claude/ai-direction-log.md` | Created | AI direction log |
| `claude/records-of-resistance.md` | Created | Resistance record template |

### Key Decisions Made
- **No React.** The spec explicitly calls for Vanilla JS. All React dependencies removed.
- **`base: '/Test/'`** carried over from Session 1 — correct for GitHub Pages subdirectory.
- **Plumbing test** is entirely self-contained and clearly labeled in all three files it touches (index.html, main.js, style.css). Remove all three sections when Design Phase begins.
- **`node_modules/` not deleted** — directory exists on disk but is gitignored. Run `npm install` after switching to new package.json.

### To Reinstall Dependencies After This Session
```bash
npm install
```

### To Run Dev Server
```bash
npm run dev
```

### To Test Plumbing
1. Run dev server
2. Open localhost
3. Click "TEMP TEST — Run Plumbing Check"
4. Confirm: console.log fires, text updates, lime outline appears

---

## Session 3 — (Pending)
Awaiting Design Intent from Art Director.
