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
- **Module cards** with estimated time and modality
- **Scenario dialog** per module with a short knowledge check
- **Progress dashboard**:
  - modules completed
  - journey progress
  - average knowledge check score
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

- Manager dashboard for team-level reporting
- Certificate generation for completed journeys
- Integration with Microsoft Graph and Copilot usage telemetry
- SCORM/xAPI export compatibility for enterprise LMS systems
