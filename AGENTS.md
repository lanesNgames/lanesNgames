# AGENTS.md

## Cursor Cloud specific instructions

This is a static vanilla HTML/CSS/JS web application (no framework, no build step, no package manager). The entire app lives in three files: `index.html`, `styles.css`, and `app.js`.

### Running the app

Serve files with any static HTTP server:

```bash
cd /workspace && python3 -m http.server 8000
```

Then open http://localhost:8000 in a browser.

### Key notes

- No dependencies to install (no `package.json`, no `requirements.txt`).
- No automated test suite exists. Changes should be verified manually via the browser.
- No linting or formatting tools are configured.
- All state is persisted in browser `localStorage`; there is no database or backend.
- The app uses modern browser APIs (`<dialog>`, `<template>`, Blob URLs) — use Chrome for testing.
