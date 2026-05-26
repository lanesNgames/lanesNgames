# Copilot Coach LMS (Associate Enablement Prototype)

This project is a lightweight Learning Management System (LMS) prototype focused on helping associates get practical value from Microsoft Copilot in day-to-day workflows.

## Why this exists

This prototype demonstrates initiative for a Training & Enablement-style role by emphasizing:
- Role-based learning journeys
- Scenario-based practice
- In-the-flow job aids
- Practical adoption tracking (completion + knowledge checks)

## Features

- **Role pathways**:
  - Store Associate
  - Team Lead
  - Operations Associate
- **Expanded learning paths** with 5 modules per role (15 modules total)
- **Scenario dialog** per module with multiple scenario-based questions (30 total checks)
- **Progress dashboard**:
  - modules completed
  - journey progress
  - average knowledge check score across all scenario questions
- **Downloadable completion certificate** (SVG) unlocked when a named associate completes a journey
- **Manager dashboard** with:
  - associates tracked
  - average completion percentage
  - completed journey count
  - learner-level reporting table (role, progress, quiz average, and last update)
- **Local persistence** using browser `localStorage` for profile, completion, and quiz outcomes

## Run locally

No build step required.

1. Open `index.html` in your browser, or run a static server:
   - `python3 -m http.server 8000`
2. Navigate to `http://localhost:8000`

## Files

- `index.html` - app structure and UI shell
- `styles.css` - styling and responsive layout
- `app.js` - curriculum data and LMS logic

## Future extensions

- Manager export (CSV) for quarterly reporting
- Integration with Microsoft Graph and Copilot usage telemetry
- SCORM/xAPI export compatibility for enterprise LMS systems
