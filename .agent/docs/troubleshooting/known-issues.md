# Known Issues & Gotchas

## 1. Next.js Windows Build File Locking (`EPERM: operation not permitted`)
- **Symptom:** `npm run build` fails with `uncaughtException [Error: EPERM: operation not permitted, open '.next\trace']`.
- **Root Cause:** Next.js development server (`npm run dev`) holds an exclusive file lock on `.next/trace` on Windows operating systems.
- **Solution:** Cancel or kill the running dev server task (`manage_task` kill or `Ctrl+C`) before executing `npm run build`.

## 2. Fandom Wiki Image Naming Discrepancies
- **Symptom:** Substring matching character names to image files resulted in incorrect matches (e.g. matching `Overlord` to `Unicorn-Overlord-Hunter.png`).
- **Root Cause:** Wiki image names prepend `Unicorn-Overlord-` or `Unicorn_Overlord_`.
- **Solution:** Clean prefix patterns and strip possessives (`'s`) prior to name normalization during wiki asset matching scripts.
