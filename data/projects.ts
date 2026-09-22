export type Project = {
  title: string;
  featured: boolean;
  slug: string;
  subtitle: string;
  description: string;
  business: string;
  category: string;
  status: string;
  tools: string[];
  visual: "retail" | "jobs" | "roads" | "pipeline";
  dataset: {
    source: string;
    records: string;
    features: string;
    limitations: string;
  };
  preparation: string[];
  analysis: string;
  model: string;
  insights: string[];
  recommendations: string[];
  outcome: string;
  pipeline: string[];
  repository?: string;
  dashboardUrl?: string;
  downloads?: { label: string; href: string }[];
  thumbnailCaption?: string;
  insightNote?: string;
  recommendationNote?: string;
  workflowNote?: string;
  modelDiagram?: "retail-star";
  screenshots: { src: string; alt: string }[];
};
export const projects: Project[] = [
  {
    title: "Australian Airline Reliability",
    featured: true,
    slug: "australian-airline-reliability",
    subtitle: "Turning Australian flight data into an evidence-based operations review with SQL, Python, Power BI and Excel.",
    description: "An end-to-end analysis of BITRE's domestic airline on-time performance data for 2023–2025. A reproducible Python pipeline separates reporting routes from network totals, audits the source and loads a dimensional SQL model. Power BI and Excel turn the validated counts into interactive reporting for an operations audience.",
    business: "Which Australian routes should an operations team investigate first, considering cancellation volume, reliability and reporting coverage?",
    category: "04 / OPERATIONS ANALYTICS",
    status: "End-to-end project",
    tools: ["SQL", "Python", "Power BI", "Excel", "DAX", "Power Query"],
    visual: "pipeline",
    dataset: {
      source: "Australian Government, Bureau of Infrastructure and Transport Research Economics (BITRE), domestic airline on-time performance time series. Downloaded 22 September 2026; analysis covers January 2023–December 2025.",
      records: "12,860 month × airline × directional-route records; 128 routes and 7 airlines across the three-year cohort.",
      features: "Scheduled, flown and cancelled sectors; on-time and delayed arrivals/departures; date, airline, origin and destination dimensions. Separate monthly network benchmark.",
      limitations: "Reporting-route coverage changes and is narrower than the full domestic network. Flight counts do not measure passengers, delay duration or causes. Airline comparisons reflect route mix. No claim of affiliation, savings or commercial deployment.",
    },
    preparation: [
      "Separated 17,451 source rows by scope to prevent double-counting route detail and published totals; standardised six inconsistent airline labels.",
      "Validated unique keys, required values, non-negative counts and scheduled = flown + cancelled. All 29,960 route/month/count reconciliation checks passed.",
      "Preserved four failed partition checks across two July 2025 network rows in a public exception audit. These rows never enter the route fact table.",
      "Built a contiguous daily date dimension, foreign-key constraints and seven acceptance tests covering weighted metrics, coverage, rolling windows and database integrity.",
    ],
    analysis: "SQL joins, CTEs and window functions calculate weighted KPIs, route cancellation rankings, concentration shares, three-month trends and a fixed-route year-on-year comparison. Power BI provides year, airline, origin and route slicers, cross-filtering, DAX measures and a detailed route review. Excel uses a year selector, SUMIFS-based calculations, a native trend chart and a filterable route table. Source data and reproducible scripts are versioned in GitHub.",
    model: "A monthly route-airline fact joins to Date, Airline and Route dimensions through one-to-many relationships. The separate network benchmark joins only to Date. Cancellation rate uses cancelled / scheduled; punctuality uses on-time / flown. Percentages are calculated from aggregated counts, never averaged across rows.",
    insights: [
      "Sydney–Melbourne in both directions accounted for 2,190 cancellations in 2025: 20.7% of cancellations across the reporting routes.",
      "Canberra–Sydney had 474 cancellations from 7,659 scheduled sectors (6.19%), versus Sydney–Melbourne's 1,103 from 25,294 (4.36%). Volume and rate point to different investigation priorities.",
      "For 116 routes reported in every month of both years, arrival punctuality improved from 73.19% in 2024 to 75.80% in 2025, a 2.61 percentage-point increase.",
      "The reporting-route arrival OTP was 75.83% in 2025; the separate network benchmark rounded to 76.9%, matching BITRE's annual publication.",
    ],
    recommendations: [
      "Start a Sydney–Melbourne corridor review because of its share of cancellation volume; request flight-level cause codes and aircraft-rotation data before attributing causes.",
      "Include smaller routes with high cancellation rates, checking scheduled volume and months reported before comparing them.",
      "Track a consistent route cohort in recurring reporting and keep selected-route KPIs visibly separate from entire-network benchmarks.",
    ],
    recommendationNote: "Proposed investigation steps based on descriptive public data; business impact has not been measured.",
    outcome: "Reconciled 12,860 route records, built a tested SQL model and delivered interactive Power BI and Excel reports. Identified a corridor responsible for 20.7% of reporting-route cancellations in 2025.",
    pipeline: ["BITRE source", "Python audit", "SQL model", "Power BI + Excel", "Operations review"],
    repository: "https://github.com/zapped-varchasv/SQL/tree/main/australian-airline-reliability",
    downloads: [
      { label: "Download Power BI report (.pbix)", href: "https://github.com/zapped-varchasv/SQL/raw/refs/heads/main/australian-airline-reliability/reports/Australian_Airline_Reliability.pbix" },
      { label: "Download Excel workbook", href: "https://github.com/zapped-varchasv/SQL/raw/refs/heads/main/australian-airline-reliability/reports/Australian_Airline_Reliability.xlsx" },
      { label: "Open Power BI project files", href: "https://github.com/zapped-varchasv/SQL/tree/main/australian-airline-reliability/powerbi" },
      { label: "Read the SQL analysis", href: "https://github.com/zapped-varchasv/SQL/blob/main/australian-airline-reliability/sql/02_analysis_views.sql" },
      { label: "View BITRE source", href: "https://www.bitre.gov.au/resource/aviation/airline-time-performance-monthly-reports-and-time-series-data" },
    ],
    screenshots: [{ src: "/projects/airline-excel-dashboard.png", alt: "Australian Airline Reliability Excel dashboard: year selector, weighted 2025 KPIs and monthly punctuality chart calculated from BITRE data." }],
  },
  {
    title: "Retail Sales & Performance Analytics",
    featured: true,
    modelDiagram: "retail-star",
    workflowNote: "Proposed SQL extension workflow",
    insightNote:
      "Results below are evidence placeholders, not confirmed findings.",
    recommendationNote:
      "Proposed next steps, subject to validation of the analysis.",
    thumbnailCaption: "Original dashboard excerpt · View the case study",
    slug: "retail-sales-performance",
    subtitle:
      "Exploring loyalty, sales trends and store performance through interactive reporting.",
    description:
      "Retail reporting work brings together a Woolworths loyalty dashboard in Power BI and a Kmart sales dashboard in Excel. These completed dashboards explore customer engagement, transactions, loyalty points, sales trends and store performance. A unified SQL-backed commercial model is a proposed extension.",
    business:
      "Which products and stores drive profitable growth, and where should a retail team investigate underperformance?",
    category: "01 / COMMERCIAL ANALYTICS",
    status: "Retail dashboards",
    tools: [
      "Power BI",
      "Excel",
      "DAX",
      "Power Query",
      "SQL (planned extension)",
    ],
    visual: "retail",
    dataset: {
      source:
        "Woolworths loyalty and Kmart sales project datasets. Original provenance, reporting periods and usage terms are to be documented.",
      records: "To be supplied after profiling.",
      features:
        "Existing reporting covers customers, transactions, loyalty points, stores and online versus store sales. A unified sales / product / store / date model is proposed.",
      limitations:
        "Screenshots document the dashboards, but source files and metric definitions are not available here. The projects are portfolio analyses, with no claim of affiliation or commercial deployment.",
    },
    preparation: [
      "Planned: profile missing keys, prices, quantities and dates; document rules before filling or excluding values.",
      "Planned: test transaction identifiers for duplicates and convert dates, currency and numeric types consistently.",
      "Planned: reconcile cleaned totals against raw files and validate join cardinality, referential integrity and calculated profit.",
    ],
    analysis:
      "Existing work includes a Power BI loyalty dashboard with DAX KPIs and drill-through, and an Excel sales dashboard comparing trends and online versus store performance. The proposed SQL extension uses joins, aggregations, CTEs and CASE expressions for category and store comparisons. Date analysis and window functions support period comparisons. Additional DAX measures would calculate revenue, gross profit, margin, orders and average order value; year-on-year growth and target variance require sufficient source coverage.",
    model:
      "Proposed SQL extension (not a claim about the existing dashboard models): a sales fact table connects to date, product and store dimensions through one-to-many relationships. Targets use their own fact table at the agreed reporting grain.",
    insights: [
      "Revenue and gross-profit findings — awaiting validated data.",
      "Category and store performance — awaiting analysis.",
      "Returns and margin drivers — awaiting source coverage.",
    ],
    recommendations: [
      "Evaluate category and store actions after reconciling revenue and profit.",
      "Set exception thresholds only after establishing a reliable baseline.",
      "Record metric definitions and ownership before sharing the dashboard.",
    ],
    outcome:
      "Built interactive retail reporting in Power BI and Excel, including DAX KPIs, drill-through, sales trends and channel comparisons. Business impact and uplift have not been measured.",
    pipeline: [
      "Raw Data",
      "SQL Cleaning",
      "Data Model",
      "Power BI",
      "Business Insights",
    ],
    screenshots: [
      {
        src: "/projects/woolworths-dashboard.png",
        alt: "Woolworths loyalty Power BI dashboard, from the original portfolio.",
      },
      {
        src: "/projects/kmart-dashboard.png",
        alt: "Kmart Excel sales dashboard, from the original portfolio.",
      },
    ],
  },
  {
    title: "Australian Data & Technology Job Market Analysis",
    featured: true,
    insightNote:
      "Data-quality observations are supported by the resume; demand findings are not yet published.",
    recommendationNote:
      "Proposed next steps, subject to validation of the analysis.",
    slug: "australian-job-market",
    subtitle:
      "Making sense of skills, roles and locations in the Australian job market.",
    description:
      "At DATACAREER.APP, processed 104,461 records with Excel Power Query and Python, removing 2,150 duplicates and standardising 2,836 inconsistent entries into 110 controlled categories. Built a four-page Power BI report using dimensional modelling, DAX KPIs, year-on-year measures and drill-through, refining it through stakeholder feedback.",
    business:
      "How does demand for data and technology skills differ across roles and Australian locations?",
    category: "02 / WORKFORCE ANALYTICS",
    status: "Internship project",
    tools: ["Python", "SQL", "Power BI", "Excel"],
    visual: "jobs",
    dataset: {
      source:
        "DataCareer-related job-advertisement data; exact source and collection period to be confirmed.",
      records:
        "104,461 input records processed; final retained record count to be documented.",
      features:
        "Role title, advertisement text, skills and location; available fields to be verified.",
      limitations:
        "Advertisements are a proxy for hiring demand. Duplicate posts, source coverage and extraction errors can bias comparisons.",
    },
    preparation: [
      "Removed 2,150 duplicate records using Excel Power Query and Python. Missing-value handling and date-conversion rules still need to be documented from the source work.",
      "Standardised 2,836 inconsistent entries into 110 controlled categories, maintaining the data dictionary and validation rules so definitions remain traceable.",
      "Used dimensional modelling for a four-page Power BI report. Exact skill-mapping, role-classification and location rules need to be confirmed from the project documentation.",
    ],
    analysis:
      "Built DAX KPIs, year-on-year measures and drill-through views, then refined the report with stakeholder feedback. Role, location and skill-demand comparisons are the wider analytical questions; specific rankings and comparative findings are not yet available for publication.",
    model:
      "The delivered report uses a dimensional model. The exact table names, relationship cardinalities and reporting grain are to be documented before publishing a model diagram.",
    insights: [
      "Data-quality review identified and removed 2,150 duplicate records.",
      "Standardising 2,836 inconsistent entries into 110 controlled categories created traceable definitions for reporting.",
      "Skill-demand rankings, role comparisons and geographic findings are awaiting publication.",
    ],
    recommendations: [
      "Use verified skill patterns to guide role-specific learning priorities.",
      "Publish coverage limitations alongside geographic comparisons.",
      "Review ambiguous classifications before relying on demand rankings.",
    ],
    outcome:
      "Delivered a four-page Power BI report and traceable definitions for 110 controlled categories. The verified contribution is data quality and reporting; no unverified hiring-demand findings are claimed.",
    pipeline: [
      "Job Ads",
      "Data Profiling",
      "Skill Mapping",
      "Role Analysis",
      "Reporting",
    ],
    screenshots: [],
  },
  {
    title: "NSW Road Safety & Crash Analysis",
    featured: true,
    insightNote:
      "Results below are evidence placeholders, not confirmed findings.",
    recommendationNote:
      "Proposed next steps, subject to validation of the analysis.",
    slug: "nsw-road-safety",
    subtitle:
      "Exploring the factors associated with crash severity across 90,000+ NSW records.",
    description:
      "Analysed more than 90,000 NSW crash records to identify factors associated with crash severity and produce evidence-based road-safety insights. The work uses R, data preparation, feature engineering and statistical modelling; exact model outputs and findings are awaiting publication.",
    business:
      "Which recorded factors are associated with more severe road crashes in NSW?",
    category: "03 / PUBLIC DATA & STATISTICS",
    status: "Analysis · R",
    tools: ["R", "GLM", "Statistical modelling", "Visualisation"],
    visual: "roads",
    dataset: {
      source:
        "NSW crash records; exact release, source link and study period to be added.",
      records:
        "More than 90,000 crash records (supplied in the project brief).",
      features:
        "Crash severity and explanatory variables; final field list to be added from the analysis.",
      limitations:
        "Observational associations do not establish causation. Missingness, reporting practices and unmeasured exposure can affect interpretation.",
    },
    preparation: [
      "The project includes preprocessing and feature engineering; exact missing-value rules and duplicate checks are to be documented from the original analysis.",
      "Confirm variable types, reference categories and transformations against the R scripts.",
      "Record exclusions and validate the final modelling population against the source record count.",
    ],
    analysis:
      "Used logistic and Poisson regression in R across more than 90,000 crash records. The methods, validation and findings were documented in a formal case study. Model coefficients, uncertainty intervals and specific conclusions must be transferred from that report before they are published here.",
    model:
      "An analysis-ready crash-level table supports exploratory summaries and statistical modelling. A BI star schema is not required for this study.",
    insights: [
      "Factors associated with severity — model results to be supplied.",
      "Direction and size of associations — estimates and intervals to be supplied.",
      "Model diagnostics and sensitivity — evidence to be supplied.",
    ],
    recommendations: [
      "Prioritise road-safety recommendations after reviewing effect sizes and uncertainty.",
      "Separate observed associations from causal claims.",
      "Consider exposure data and external validation before targeting interventions.",
    ],
    outcome:
      "Analytical outcome: an interpretable framework for assessing crash-severity associations. Specific conclusions await the original results.",
    pipeline: [
      "Crash Records",
      "Preparation",
      "Exploration",
      "GLM",
      "Interpretation",
    ],
    screenshots: [],
  },
  {
    title: "Automated Reporting Pipeline",
    featured: false,
    insightNote:
      "Planned project: findings will be added after implementation.",
    recommendationNote: "Proposed implementation steps.",
    slug: "automated-reporting-pipeline",
    subtitle: "From raw extracts to validated, repeatable reporting.",
    description:
      "A planned project connecting ingestion, SQL transformations and quality checks to a reporting layer. This is a future project, with no completed implementation or results claimed.",
    business:
      "How can recurring reporting become more consistent and easier to validate?",
    category: "04 / COMING NEXT",
    status: "Planned",
    tools: ["Python", "PostgreSQL", "SQL", "Power BI"],
    visual: "pipeline",
    dataset: {
      source: "Not yet selected.",
      records: "Not applicable: project planned.",
      features: "To be defined after selecting the reporting use case.",
      limitations: "Architecture is proposed and has not been implemented.",
    },
    preparation: [
      "Plan schema checks, missing-value rules, duplicate detection and data-type validation.",
      "Preserve raw inputs and log transformation failures.",
      "Reconcile source and reporting totals before refresh.",
    ],
    analysis:
      "Proposed work focuses on idempotent ingestion, SQL transformations, validation gates and refresh monitoring.",
    model:
      "A reporting model will be selected to fit the source data and reporting grain.",
    insights: [
      "Pipeline reliability — to be measured after implementation.",
      "Data quality — checks to be defined.",
      "Refresh time — baseline to be established.",
    ],
    recommendations: [
      "Define data contracts before automation.",
      "Make failed validation visible and prevent publication of invalid outputs.",
      "Document recovery and refresh ownership.",
    ],
    outcome:
      "Planned outcome: repeatable reporting with visible quality checks.",
    pipeline: [
      "Python",
      "PostgreSQL",
      "Transformation",
      "Validation",
      "Power BI",
    ],
    screenshots: [],
  },
];
export const secondaryProjects = [
  {
    title: "Rock Paper Scissors Image Classifier",
    type: "Computer vision",
    tools: "Python · Image classification",
    url: "https://github.com/zapped-varchasv/rock_paper_scissors_classification",
  },
  {
    title: "WikiQA Question Answering",
    type: "Natural language processing",
    tools: "Python · Question answering",
    url: "https://github.com/zapped-varchasv/wiki-qa-system",
  },
  {
    title: "MNIST",
    type: "Image classification",
    tools: "Python · Machine learning",
    url: "https://github.com/zapped-varchasv/MNIST",
  },
];
