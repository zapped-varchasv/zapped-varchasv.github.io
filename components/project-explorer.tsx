"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
export function ProjectExplorer() {
  const [tool, setTool] = useState("All");
  const [query, setQuery] = useState("");
  const featured = projects.filter((p) => p.featured);
  const tools = [
    ...new Set(
      featured.flatMap((p) =>
        p.tools.filter((t) => !t.toLowerCase().includes("planned")),
      ),
    ),
  ];
  const filtered = featured.filter(
    (p) =>
      (tool === "All" || p.tools.includes(tool)) &&
      `${p.title} ${p.subtitle} ${p.tools.join(" ")} ${p.business}`
        .toLowerCase()
        .includes(query.toLowerCase().trim()),
  );
  return (
    <>
      <div className="explorer-toolbar">
        <div
          className="filter-chips"
          role="group"
          aria-label="Filter projects by tool"
        >
          {["All", ...tools].map((t) => (
            <button
              key={t}
              aria-pressed={t === tool}
              onClick={() => setTool(t)}
            >
              {t}
            </button>
          ))}
        </div>
        <label className="project-search">
          <Search size={17} />
          <span className="sr-only">Search projects</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="search"
            placeholder="Search projects…"
          />
        </label>
      </div>
      <p className="result-count" role="status">
        {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        {tool !== "All"
          ? ` using ${tool}`
          : " · Explore the question, method and evidence"}
      </p>
      <div className="evidence-projects">
        {filtered.map((p) => (
          <article className="evidence-project" key={p.slug}>
            <div className="project-kicker">
              <span>{p.category.split(" / ").pop()}</span>
              <span>{p.status}</span>
            </div>
            <h3>
              <Link href={"/projects/" + p.slug}>{p.title}</Link>
            </h3>
            <p className="project-question">{p.business}</p>
            {p.screenshots.length ? (
              <Link
                className="evidence-thumbnail"
                href={"/projects/" + p.slug}
                aria-label={"View " + p.title + " dashboard"}
              >
                <img
                  src={p.screenshots[0].src}
                  alt={p.screenshots[0].alt}
                  width="800"
                  height="239"
                  loading="lazy"
                />
                <span>
                  Original dashboard preview <ArrowUpRight size={14} />
                </span>
              </Link>
            ) : (
              <div className="project-workflow" aria-label="Analysis workflow">
                {p.pipeline.map((step, i) => (
                  <span key={step}>
                    {i > 0 && <ArrowRight size={13} />} {step}
                  </span>
                ))}
              </div>
            )}
            <div className="project-delivery">
              <span>DELIVERED</span>
              <p>{p.outcome}</p>
            </div>
            <div className="tags">
              {p.tools
                .filter((t) => !t.toLowerCase().includes("planned"))
                .map((t) => (
                  <span key={t}>{t}</span>
                ))}
            </div>
            <Link className="project-link" href={"/projects/" + p.slug}>
              Read case study <ArrowUpRight size={17} />
            </Link>
          </article>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="empty-projects">
          <h3>No matching projects</h3>
          <p>Try another tool or a broader search.</p>
          <button
            className="button secondary"
            onClick={() => {
              setTool("All");
              setQuery("");
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </>
  );
}
