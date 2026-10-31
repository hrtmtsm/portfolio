# Haruto Matsushima — Portfolio

Next.js App Router portfolio with React and TypeScript.

## Development

Use Node.js 20.9 or later (Node.js 22 LTS recommended).

```sh
npm ci
npm run dev
```

```sh
npm run lint
npx tsc --noEmit
npm run build
npm start
```

## Where to edit

- `app/`: routes, page composition and global styles.
- `components/`: shared display components and case study layout.
- `content/site.ts`: shared Resume and LinkedIn destinations.
- `content/projects/index.ts`: homepage project summaries.
- `content/projects/<slug>/case.tsx`: full case study content.
- `lib/cases.ts`: case study loader registry.
- `types/case.ts`: shared case study schema.
- `public/images/`: canonical image and video assets.
- `public/resume.pdf`: versioned resume, served at `/resume.pdf`. Replace this file to update it.

The historical standalone HTML, CSS and duplicate root asset directory have been removed. Legacy `/projects/project-*.html` URLs redirect to the current case study routes through `next.config.ts`.

To add a project, create its case study, register its loader, add its homepage summary, and update the next-project navigation in `app/projects/[slug]/page.tsx`.

Commit `package-lock.json` when dependencies change so local and deployment installs use the same versions.
