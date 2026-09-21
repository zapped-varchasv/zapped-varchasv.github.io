import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { Header } from "@/components/header";
import { DashboardGallery } from "@/components/dashboard-gallery";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return p
    ? {
        title: p.title,
        description: p.subtitle,
        openGraph: { title: p.title, description: p.subtitle, type: "article" },
      }
    : { title: "Project not found" };
}
const headings = [
  "Overview",
  "Business Question",
  "Dataset",
  "Data Preparation",
  "Analysis",
  "Data Model",
  "Dashboard",
  "Key Insights",
  "Recommendations",
  "Tools",
  "Repository",
];
const sectionId = (text: string) => text.toLowerCase().replaceAll(" ", "-");
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  return (
    <>
      <Header />
      <main id="main">
        <header className="case-hero wrap">
          <Link className="text-link" href="/#projects">
            <ArrowLeft size={16} />
            Back to selected work
          </Link>
          <div className="eyebrow">
            {p.category}
            <span className="case-status">{p.status}</span>
          </div>
          <h1>{p.title}</h1>
          <p>{p.subtitle}</p>
          <div className="tags">
            {p.tools.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </header>
        <div className="wrap case-layout">
          <aside className="case-sidebar">
            <span className="eyebrow">IN THIS CASE STUDY</span>
            <nav aria-label="Case study contents">
              {headings.map((h, i) => (
                <a key={h} href={"#" + sectionId(h)}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {h}
                </a>
              ))}
            </nav>
          </aside>
          <article className="case-content">
            <section id="overview">
              <h2>Overview</h2>
              <p>{p.description}</p>
              <div className="outcome">
                <strong>Analytical outcome</strong>
                <p>{p.outcome}</p>
              </div>
              {p.workflowNote && (
                <p className="evidence-note">{p.workflowNote}</p>
              )}
              <ol className="pipeline" aria-label="Analysis workflow">
                {p.pipeline.map((s, i) => (
                  <li key={s}>
                    <span>{s}</span>
                    {i < p.pipeline.length - 1 && <ArrowRight size={15} />}
                  </li>
                ))}
              </ol>
            </section>
            <section id="business-question">
              <h2>Business Question</h2>
              <blockquote>{p.business}</blockquote>
            </section>
            <section id="dataset">
              <h2>Dataset</h2>
              <dl className="dataset-details">
                {Object.entries(p.dataset).map(([key, value]) => (
                  <div key={key}>
                    <dt>
                      {
                        (
                          {
                            source: "Source",
                            records: "Number of records",
                            features: "Tables / features",
                            limitations: "Important limitations",
                          } as Record<string, string>
                        )[key]
                      }
                    </dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </section>
            <section id="data-preparation">
              <h2>Data Preparation</h2>
              <ul>
                {p.preparation.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </section>
            <section id="analysis">
              <h2>Analysis</h2>
              <p>{p.analysis}</p>
            </section>
            <section id="data-model">
              <h2>Data Model</h2>
              <p>{p.model}</p>
              {p.modelDiagram === "retail-star" && (
                <div
                  className="schema"
                  aria-label="Proposed star schema: Date, Product and Store dimensions each have a one to many relationship with Sales"
                >
                  <div className="schema-dimensions">
                    {["Date", "Product", "Store"].map((x) => (
                      <div key={x}>
                        <small>DIMENSION</small>
                        <strong>{x}</strong>
                        <span>1 ↓ many</span>
                      </div>
                    ))}
                  </div>
                  <div className="schema-fact">
                    <small>FACT TABLE</small>
                    <strong>Sales</strong>
                    <span>
                      Date key · Product key · Store key
                      <br />
                      Quantity · Revenue · Cost
                    </span>
                  </div>
                  <p>
                    Proposed model · final grain and relationships depend on the
                    source data.
                  </p>
                </div>
              )}
            </section>
            <section id="dashboard">
              <h2>Dashboard</h2>
              <DashboardGallery project={p} />
              {p.dashboardUrl && (
                <a
                  className="text-link"
                  href={p.dashboardUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open interactive dashboard <ArrowUpRight size={16} />
                </a>
              )}
            </section>
            <section id="key-insights">
              <h2>Key Insights</h2>
              {p.insightNote && (
                <p className="evidence-note">{p.insightNote}</p>
              )}
              <ul>
                {p.insights.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </section>
            <section id="recommendations">
              <h2>Recommendations</h2>
              {p.recommendationNote && (
                <p className="evidence-note">{p.recommendationNote}</p>
              )}
              <ol>
                {p.recommendations.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ol>
            </section>
            <section id="tools">
              <h2>Tools</h2>
              <div className="tags">
                {p.tools.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </section>
            <section id="repository">
              <h2>Repository</h2>
              {p.repository ? (
                <a
                  className="button primary"
                  href={p.repository}
                  target="_blank"
                  rel="noreferrer"
                >
                  View project on GitHub <ArrowUpRight size={17} />
                </a>
              ) : (
                <>
                  <p>
                    A verified repository link for this project will be added
                    here.
                  </p>
                  <a
                    className="text-link"
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Explore Varchasv’s GitHub profile <ArrowUpRight size={16} />
                  </a>
                </>
              )}
            </section>
          </article>
        </div>
        <div className="wrap case-bottom">
          <Link href="/#projects" className="text-link">
            <ArrowLeft size={17} />
            All projects
          </Link>
          <a className="button primary" href={"mailto:" + profile.email}>
            Discuss this project <ArrowUpRight size={17} />
          </a>
        </div>
      </main>
      <footer className="wrap footer">
        <span>© {new Date().getFullYear()} Varchasv Gupta</span>
        <a href="/#contact">Let’s connect ↗</a>
      </footer>
    </>
  );
}
