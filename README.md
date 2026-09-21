# Varchasv Gupta — Analytics Portfolio

A responsive, accessible portfolio focused on Data Analyst, BI and reporting roles in Australia. Built with Next.js App Router, React, TypeScript and Tailwind CSS. Production output is static: no database, API key, analytics tracker or backend is needed.

## Run locally

Requires Node.js 22.13 or later and npm.

```sh
npm ci
npm run dev
```

For the production build and local static preview:

```sh
npm run typecheck
npm run build
npm start
```

The production preview serves `out/` at http://localhost:3000. `PORT` changes its port. `npm run dev:sites` retains the bundled Sites preview workflow.

## Content editing

Start with [CONTENT_GUIDE.md](CONTENT_GUIDE.md) for simple copy/paste instructions. Routine updates do not require editing page components.

- `data/profile.ts`: introduction, about text, email, LinkedIn, GitHub, resume URL, experience, credentials and skills. Add earned credentials with `Completed`; use `In Progress` only when study is confirmed.
- `data/projects.ts`: curated projects, slugs, overview, business question, dataset, preparation, approach, model, insights, recommendations, tools, repository, dashboard URL and screenshots. `secondaryProjects` controls the smaller technical cards.
- `data/site.ts`: canonical production origin. Set `NEXT_PUBLIC_SITE_URL` to the deployed custom domain before building.
- `public/projects/`: original dashboard previews. Add full screenshots here and reference their public URL and meaningful alt text in the project's `screenshots` array. The gallery supports click-to-enlarge, keyboard controls, focus trapping and Escape dismissal.
- `docs/content-sources.md`: claim provenance and remaining evidence gaps.

All case studies use one typed data model and a reusable page at `app/projects/[slug]/page.tsx`. A new project automatically gains a static route and sitemap entry. Set `featured: true` to add it to the home page; the first featured entry is the flagship. Non-featured projects with `status: "Planned"` appear in the “Coming next” area. Copy `data/project-template.ts` to start a new project. Profile text, education, credentials, skills and experience also come from the content files.

## Deployment

**GitHub Pages (primary):** [zapped-varchasv.github.io](https://zapped-varchasv.github.io/) is published from [this repository](https://github.com/zapped-varchasv/zapped-varchasv.github.io). In **Settings → Pages**, set **Source** to **GitHub Actions**. `.github/workflows/deploy-pages.yml` installs the locked dependencies, type-checks, builds the static site and deploys `out/` after every push to `main`. Follow progress in the **Actions** tab. No deployment token or secret is needed. You can also select **Publish portfolio → Run workflow** to republish.

For simple updates, edit `data/profile.ts` or `data/projects.ts` using GitHub's pencil button, then commit to `main`. See the content guide for copy/paste examples. The public repository and its history must contain only information intended for public sharing.

**Vercel:** import this repository, use the Next.js preset and `npm run build`. Set `NEXT_PUBLIC_SITE_URL` to your public domain, then redeploy. There are no runtime environment variables or secrets.

**Other static hosting:** deploy the contents of `out/`, including hidden files. The site assumes hosting at the domain root. A repository-subpath Pages deployment requires adapting `basePath` and root-relative assets/anchors first; do not deploy it unchanged at `/repository-name/`. For a custom domain, update both `data/site.ts` and the workflow's `NEXT_PUBLIC_SITE_URL`, configure the domain with the host, and rebuild.

**Sites:** `.openai/hosting.json` identifies the private Sites project and declares `out/` as the static directory. Preserve that identity when publishing updates. The initial Sites audience is owner-only; public recruiter access requires changing the audience separately.

The starter's optional UI library and Sites tooling are retained for compatibility. Application pages only import the components they use. The primary app has two interactive components: navigation and the accessible image gallery. It does not require server rendering at runtime.

## Evidence still needed

Experience, education, courses and DataCareer processing metrics come from the supplied resume. The retail images are genuine cropped previews from the previous portfolio. Unavailable findings, source metadata, full dashboard screenshots and project-specific repository links remain clearly labelled. The retail SQL/star-schema work is a proposed extension; the automated pipeline is a future project. No cloud proficiency, business uplift, Microsoft certification or unverified comparative insight is asserted.

Before sharing with recruiters, fill the remaining evidence fields and replace the cropped previews with full dashboard exports when available. Email contact opens the visitor's mail application; there is deliberately no form that pretends to send messages.
