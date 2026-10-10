# SHIELD — Phase 1 scaffold

**S.H.I.E.L.D. — Student Help Initiative for Education, Liability and Dues**

A React + TypeScript + Vite starter for a student support initiative. Phase 1 focuses on the brand system, responsive public landing page, navigation, motion details, and demo-only page shells.

## Important project boundaries

- The initial pilot is Matrix Institute; no affiliation or endorsement is implied.
- The site uses fictional demo data only.
- There is no Firebase connection, application submission, payment processing, or real student data in Phase 1.
- Do not accept real contributions or publish real cases until verification, privacy, financial controls, and applicable legal requirements are ready.
- Never commit Firebase service-account credentials or private applicant evidence.

## Run locally

Requires Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open the local URL Vite prints in the terminal.

## Check before publishing

```bash
npm run typecheck
npm run build
npm run preview
```

## GitHub + browser-based workflow

1. Create a **private or public** repository named `shield-student-support` on GitHub.
2. Upload/extract the contents of this project at the repository root (the `src/` directory and `package.json` must be at the root).
3. In a browser IDE such as GitHub Codespaces, open the repository and run `npm install`, then `npm run dev`.
4. For a public demo, Firebase Hosting is a good eventual fit; GitHub Pages is also possible but needs a base-path adjustment for project sites. Deployment config is intentionally not included until the repo and hosting choice are confirmed.

## Routes included in Phase 1

- `/` — Home
- `/students` — Current support opportunities (demo shell)
- `/helped` — Previously helped (demo shell)
- `/fund` — Fund transparency (demo shell)
- `/transactions` — Public transaction ledger (demo shell)
- `/about`, `/support`, `/contact`
- `/privacy`, `/terms`, `/cookies`, `/accessibility`
- Unknown paths — custom 404

## Planned next phases

1. Finish and review brand, accessibility, and responsive UI.
2. Connect Firebase Auth, Firestore, and private evidence storage.
3. Add server-validated applications and role-based admin review.
4. Add append-only financial records, reconciliation, and audit logs.
5. Run security, privacy, accessibility, and end-to-end tests before any real-world pilot.
