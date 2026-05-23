# Neon Stopwatch & Timer App

A minimal dual-timer React app (Stopwatch + Countdown Timer) with a static neon-inspired UI.

Key points

- Dual timing controls: a precision stopwatch and a configurable countdown timer.
- Built with Vite + React and small utilities (`react-icons`, `clsx`).
- Plain static CSS served from `public/styles.css` .


Quick start

1. Install dependencies

```bash
npm install
```

2. Run dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview the production build locally

```bash
npm run preview
```

Project structure (important files)

- `src/main.jsx` — App entry
- `src/pages/Dashboard.jsx` — Top-level page containing stopwatch and timer
- `src/components/Stopwatch.jsx` — Stopwatch UI
- `src/components/Timer.jsx` — Timer UI + inputs
- `src/components/TimeDisplay.jsx` — Reusable time display component
- `src/components/ControlButton.jsx` — Styled control buttons
- `src/hooks/useStopwatch.js` — Stopwatch logic (start/pause/reset)
- `src/hooks/useTimer.js` — Timer/countdown logic
- `src/utils/formatTime.js` — Time formatting helpers
- `public/styles.css` — Plain CSS used by the app (linked in `index.html`)
- `src/index.css` — legacy Tailwind file (kept as reference; not imported)

Notes & troubleshooting

- Styling: The app currently loads CSS from `public/styles.css` via a `<link>` in `index.html` to avoid PostCSS/Tailwind parsing issues encountered during development. If you want to re-enable Tailwind, remove the static stylesheet link, restore a CSS import in `src/main.jsx`, and ensure `postcss`/`tailwindcss` versions and config match your toolchain.

- Animations: All animation/motion code has been intentionally removed. Do not reintroduce `framer-motion` unless you also add and test the required dependencies.

- Build: A production build has been verified (`npm run build`) in this workspace.
