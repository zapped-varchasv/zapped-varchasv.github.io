# Make basic changes to your portfolio

You only need two content files for routine updates. The layout, mobile styles and case-study pages are generated from these files.

| What you want to change | Where to edit |
| --- | --- |
| Name, headline, introduction, location, availability | `data/profile.ts` → `profile` |
| About paragraphs | `data/profile.ts` → `about` |
| Email, LinkedIn, GitHub or resume | `data/profile.ts` → the matching URL/email field |
| Add or update work experience | `data/profile.ts` → `experience` |
| Add education or certifications | `data/profile.ts` → `education` / `certifications` |
| Add skills or a skill category | `data/profile.ts` → `skillGroups` |
| Add projects, screenshots or case-study descriptions | `data/projects.ts` → `projects` |
| Smaller ML/technical project cards | `data/projects.ts` → `secondaryProjects` |
| Change the deployment domain | `data/site.ts` or `NEXT_PUBLIC_SITE_URL` |
| Home-page evidence highlights | `data/evidence.ts` (keep claims consistent with your resume) |
| Interactive demo dataset | `data/analytics-demo.ts` (synthetic data, separate from your real projects) |

The project search and tool filters update automatically from featured projects. Tools labelled “planned” are excluded from the tool filters. The analytics lab recalculates KPIs, chart values, category rankings and CSV exports from the selected rows. Its demonstration label must remain visible: these are sample figures, not employer or client results.

Keep text inside quotation marks. Keep commas between entries. Use `\"` when you need a double quote inside a quoted sentence. Do not change the property names on the left of the colon.

## Add experience

Inside `experience: [ ... ]`, copy an existing entry and place the new one first. Replace its text:

```ts
{
  company: "Your company",
  title: "Your actual role title · Sydney, NSW",
  dates: "Oct 2026 – Present",
  description: "Describe your responsibilities and verified results in plain language.",
},
```

The timeline uses the order in this list. No component changes are needed. To remove an entry, delete that complete object, including its opening and closing braces.

## Add a project

1. Open `data/project-template.ts`. Copy the object from its opening `{` to its closing `}`.
2. Paste it inside `projects: Project[] = [ ... ]` in `data/projects.ts`, with a comma after the new object.
3. Replace the text. Give it a **unique slug**, for example `customer-retention-analysis`. Avoid changing an existing slug because people may have bookmarked its URL.
4. Set `featured: true` to show it on the home page. Move it to the top of the list to make it the large flagship card. There is no fixed three-project limit.
5. For a future project, set `featured: false` and `status: "Planned"`. It will appear in the “Coming next” area. When completed, change its status and set `featured: true`.
6. Add `repository` and `dashboardUrl` only when you have real links. Missing links show an honest unavailable state rather than a broken button.

Every added project automatically gets a detail page and a sitemap entry on the next build. `featured: false` removes it from the featured grid; **it does not make its detail page private**. To remove a project from the website altogether, remove its object and rebuild.

The optional `insightNote`, `recommendationNote` and `workflowNote` fields provide context for unfinished work. Remove a note when the evidence is complete. `modelDiagram: "retail-star"` shows the supplied example star schema; omit it for other projects or a different model.

## Add dashboard images

Copy the image into `public/projects/`, then edit the project's `screenshots` list:

```ts
screenshots: [
  {
    src: "/projects/customer-retention-dashboard.png",
    alt: "Retention dashboard comparing repeat customers across monthly cohorts",
  },
],
```

The first image becomes the project thumbnail. Every image appears in the click-to-enlarge gallery. Use PNG, JPEG or WebP, preferably under 1 MB each. Use descriptive alt text. If there are no screenshots, the site displays a clearly labelled illustration, not a fabricated result.

## Update your resume

Replace `resumeUrl` in `data/profile.ts` with the new sharing URL. Alternatively, put a PDF at `public/resume.pdf` and set `resumeUrl: "/resume.pdf"`. A remote Drive link opens its viewer, where visitors can download the PDF; make sure visitors can access the file.

## Add education or a course

Copy an object inside `education` or `certifications`. Education supports `institution`, `degree`, `details`, `subjects` and `note`. Use `subjects: []` and `note: ""` if they are not needed. Put your most relevant degree first.

Credentials support `name`, `status` and an optional `url`. Use `status: "Completed"` only for earned credentials, or `"In Progress"` for confirmed current study. The site never calculates skill percentages.

## Preview, check and publish

### Edit directly on GitHub (no installation needed)

1. Open [your portfolio repository](https://github.com/zapped-varchasv/zapped-varchasv.github.io).
2. Open `data/profile.ts` for experience or descriptions, or `data/projects.ts` for projects.
3. Click the pencil icon, make your changes using the examples above, and click **Commit changes**. Commit to `main` to publish.
4. Open the **Actions** tab. Wait for **Publish portfolio** to finish with a green check.
5. Refresh [your live portfolio](https://zapped-varchasv.github.io/). Updates can take a few minutes.

For images, open `public/projects` and use **Add file → Upload files**, then reference the filename in `data/projects.ts`. Upload the image before committing the content that uses it. Repository files and committed history are public: only include information you want to share.

If an update fails, the previous successful deployment stays online. Open the failed run to see the error, correct the content, and commit again. A missing comma or quote is the most common cause. To undo an edit, copy the previous version from the file's **History**, replace the edited content, and commit it.

### Edit on your computer

From the portfolio folder, run `npm run dev`. It opens a local development server; changes appear after saving. Before publishing, run `npm run typecheck` and `npm run build` to catch missing fields and syntax errors. A production preview is available with `npm start` after building.

Saving a local file does **not** update the live website. Commit and push your changes to the GitHub repository's `main` branch. The included workflow checks and publishes the site automatically after every push to `main`. Changes on other branches stay unpublished until merged into `main`.

You can also ask Codex directly: “Add this experience to my portfolio” or “Add this project using these screenshots and findings.” The same content files are the source of truth either way. There is no public admin panel or database to maintain.
