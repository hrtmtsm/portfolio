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
- `content/resume/en.json` and `ja.json`: editable resume content (English / Japanese).
- `public/resume.pdf` and `public/resume-ja.pdf`: generated two-column, one-page PDFs, linked as downloads from the navigation.
- `scripts/build_resumes.py`: reproducible PDF layout and generation.

The historical standalone HTML, CSS and duplicate root asset directory have been removed. Legacy `/projects/project-*.html` URLs redirect to the current case study routes through `next.config.ts`.

To add a project, create its case study, register its loader, add its homepage summary, and update the next-project navigation in `app/projects/[slug]/page.tsx`.

Commit `package-lock.json` when dependencies change so local and deployment installs use the same versions.

## Updating resumes

Edit the JSON content first, then regenerate both PDFs. Keep claims and dates consistent between languages.

```sh
python3 -m venv .venv
.venv/bin/pip install -r scripts/requirements-resume.txt
.venv/bin/python scripts/build_resumes.py \
  --font-dir /path/to/liberation-sans-ttfs \
  --japanese-font /path/to/japanese-font.ttf
```

The Latin font directory must contain `LiberationSans-Regular.ttf` and `LiberationSans-Bold.ttf`. Use a licensed TrueType font with Japanese coverage for Japanese content (e.g. Arial Unicode on macOS). Fonts are embedded as subsets; do not commit local font files. Review both rendered PDFs after regeneration and commit the JSON, script and PDF changes together.

The Japanese PDF is a concise career summary rather than a prescribed Japanese 履歴書 form.
