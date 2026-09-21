// Edit text between quotes. Add new experience/education items at the top.
// A step-by-step guide with copy/paste examples lives in CONTENT_GUIDE.md.
export const profile = {
  name: "Varchasv Gupta",
  tagline: "Reliable data. Clear decisions.",
  role: "Data Analyst",
  headlineTools: "SQL · Power BI · Excel · Python",
  location: "Sydney, Australia",
  degreeBadge: "Master of Data Science",
  availability: "Open to analytics opportunities",
  targetRoles: "Data Analyst · BI · Reporting",
  contactDescription:
    "I’m open to Data Analyst, BI Analyst, Reporting Analyst and junior Analytics opportunities in Australia.",
  contactCardDescription:
    "Based in Sydney. Ready to bring careful analysis and clear reporting to a team.",
  intro:
    "Data Analyst Intern and Master of Data Science graduate in Sydney. I clean and validate complex datasets, build Power BI reporting, and translate analysis into decisions people can act on.",
  github: "https://github.com/zapped-varchasv",
  linkedin: "https://www.linkedin.com/in/varchasv-gupta-2b1a65205/",
  email: "guptavarchasv8@gmail.com",
  resumeUrl:
    "https://drive.google.com/file/d/1Buqzc_I7nNDJt_EKeGDhmynVwWl2ovO5/view?usp=sharing",
  about: [
    "I’m a Master of Data Science graduate from Macquarie University with hands-on experience across data cleaning, analysis, visualisation and statistical modelling.",
    "I enjoy taking messy datasets, working out what is actually happening, and turning the results into reporting that people can understand and act on.",
    "My work spans SQL, Power BI, Excel, Python and R, including Australian public datasets, job-market data and statistical modelling. I’m seeking my first dedicated Data Analyst, Reporting Analyst or BI role in Australia.",
  ],
  education: [
    {
      institution: "Macquarie University",
      degree: "Master of Data Science",
      details: "Sydney, Australia · Graduated April 2026",
      subjects: [
        "Statistical Modelling",
        "Machine Learning",
        "Big Data",
        "Data Mining",
        "Data Visualisation",
        "Decision Analytics",
      ],
      note: "Academic work includes NSW crash modelling and large-scale data analysis.",
    },
    {
      institution: "University of Delhi",
      degree: "Bachelor of Science (Honours) in Electronics",
      details: "2020–2023",
      subjects: [],
      note: "",
    },
  ],
  certifications: [
    {
      name: "Excel Skills for Business · Macquarie University / Coursera · Jan 2026",
      status: "Completed",
    },
    {
      name: "Intermediate SQL & Introduction to SQL · DataCamp · Jun 2025",
      status: "Completed",
    },
  ] as { name: string; status: "Completed" | "In Progress"; url?: string }[],
  experience: [
    {
      company: "DATACAREER.APP",
      title: "Data Analyst Intern · Sydney, NSW",
      dates: "Jun 2026 – Present",
      description:
        "Processed 104,461 records with Excel Power Query and Python, removing 2,150 duplicates and standardising 2,836 inconsistent entries into 110 controlled categories. Built a four-page Power BI report with dimensional modelling, DAX KPIs, year-on-year measures and drill-through. Maintains the data dictionary and validation rules, and refines reporting through stakeholder feedback.",
    },
    {
      company: "Coles Group",
      title: "Operational Administrator · Mascot, NSW",
      dates: "Dec 2025 – May 2026",
      description:
        "Maintained daily operational records, delivery run sheets and completion updates. Coordinated schedule and route changes with drivers and dispatch, recorded exceptions and escalated unresolved issues. Prepared shift handovers and routed outstanding tasks to the appropriate teams.",
    },
  ],
};
export const skillGroups = [
  {
    name: "Analytics & BI",
    note: "Reporting & decision support",
    skills: [
      "Power BI",
      "DAX",
      "Power Query",
      "Excel",
      "Data visualisation",
      "KPI reporting",
      "Dashboard design",
    ],
  },
  {
    name: "Data & Querying",
    note: "Reliable foundations",
    skills: [
      "SQL",
      "Data cleaning",
      "Data validation",
      "Relational data",
      "Data modelling",
      "Joins",
      "CTEs",
      "Window functions",
    ],
  },
  {
    name: "Programming",
    note: "Analysis & preparation",
    skills: ["Python", "pandas", "NumPy", "R"],
  },
  {
    name: "Statistical Analysis",
    note: "Understanding patterns",
    skills: [
      "Exploratory data analysis",
      "Statistical modelling",
      "Regression",
      "Feature engineering",
    ],
  },
];
