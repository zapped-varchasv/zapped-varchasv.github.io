import type { Project } from "./projects";

// Copy this object into the projects array in data/projects.ts.
// This template is NOT displayed on the website until you add it there.
export const projectTemplate: Project = {
  title: "Your project title",
  slug: "your-project-title", // Unique, lowercase, words separated by hyphens.
  featured: true, // Show on the home page. The first featured entry is largest.
  subtitle: "One sentence about the problem or purpose.",
  description: "Two or three sentences describing your completed work.",
  business: "What decision or question did the analysis address?",
  category: "BUSINESS ANALYTICS",
  status: "Completed", // Use Planned for a future project.
  tools: ["SQL", "Power BI"],
  visual: "retail", // Fallback only: retail, jobs, roads or pipeline.
  dataset: {
    source: "Source name and URL; include the relevant release or time period.",
    records: "Verified number of records.",
    features: "Important tables, columns and reporting grain.",
    limitations: "Known limitations or coverage gaps.",
  },
  preparation: [
    "How you handled missing values, duplicates and data types.",
    "How you validated transformations and totals.",
  ],
  analysis: "Describe the approach, calculations and validation.",
  model: "Describe the actual data model or explain why one was not needed.",
  insights: [
    "Your first evidence-backed finding.",
    "Your second finding.",
    "Your third finding.",
  ],
  recommendations: ["An action supported by the findings."],
  outcome: "The analytical or business outcome, without unverified claims.",
  pipeline: ["Source", "Cleaning", "Analysis", "Reporting"],
  screenshots: [], // Example: [{src: '/projects/my-dashboard.png', alt: 'Description of the dashboard'}]
  // repository: 'https://github.com/your-user/your-project',
  // dashboardUrl: 'https://your-real-dashboard-url',
  // insightNote: 'Use this to explain evidence that is still pending.',
  // recommendationNote: 'Optional context for the recommendations.',
};
