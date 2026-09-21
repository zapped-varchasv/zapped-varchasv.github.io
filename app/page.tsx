import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  GraduationCap,
  Code2,
  Download,
} from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { HomeSections } from "@/components/home-sections";
import { Header } from "@/components/header";
import { ProjectVisual } from "@/components/project-visual";
import { SectionLink } from "@/components/section-link";
export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="hero wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              {profile.availability.toUpperCase()}
            </div>
            <h1>
              {profile.name}
              <span>{profile.tagline}</span>
            </h1>
            <p className="role">
              {profile.role} <span>|</span> {profile.headlineTools}
            </p>
            <p className="hero-description">{profile.intro}</p>
            <div className="hero-meta">
              <span>
                <MapPin size={15} />
                {profile.location}
              </span>
              <span>
                <GraduationCap size={17} />
                {profile.degreeBadge}
              </span>
            </div>
            <div className="actions">
              <SectionLink className="button primary" href="#projects">
                View Projects <ArrowRight size={17} />
              </SectionLink>
              <a
                className="button secondary"
                href={profile.resumeUrl || "#resume"}
                target="_blank"
                rel="noreferrer"
              >
                Download Resume <Download size={16} />
              </a>
            </div>
            <div className="social-links">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Code2 size={16} />
                GitHub <ArrowUpRight size={14} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
          <div className="hero-art">
            <div className="art-caption">
              <span>AN ANALYST’S APPROACH</span>
              <span>01 — 04</span>
            </div>
            <div className="analysis-sheet">
              <div className="sheet-top">
                <span className="mini-mark">VG /</span>
                <span>FROM DATA TO DECISIONS</span>
              </div>
              <h2>
                Good decisions start
                <br />
                with good questions.
              </h2>
              {[
                [
                  "Understand the question",
                  "Start with the business context",
                  "?",
                ],
                ["Make the data reliable", "Clean, validate and connect", "≡"],
                ["Find what matters", "Analyse, model and visualise", "↗"],
              ].map((x, i) => (
                <div className="process-row" key={x[0]}>
                  <span className="process-number">0{i + 1}</span>
                  <div>
                    <strong>{x[0]}</strong>
                    <small>{x[1]}</small>
                  </div>
                  <span className="process-symbol">{x[2]}</span>
                </div>
              ))}
              <div className="decision-row">
                <span className="process-number">04</span>
                <strong>Turn findings into action</strong>
                <ArrowUpRight size={22} />
              </div>
            </div>
            <div className="art-footer">
              <span>SQL → ANALYSIS → REPORTING</span>
              <span>Built around the business.</span>
            </div>
          </div>
        </section>
        <div className="expertise-strip">
          <div className="wrap">
            <span>THE TOOLKIT</span>
            <strong>SQL</strong>
            <span className="strip-dot" />
            <strong>Power BI</strong>
            <span className="strip-dot" />
            <strong>Excel & Power Query</strong>
            <span className="strip-dot" />
            <strong>Python</strong>
            <span className="strip-dot" />
            <strong>R</strong>
          </div>
        </div>
        <section id="projects" className="section wrap">
          <div className="section-heading">
            <div>
              <div className="eyebrow">01 / SELECTED WORK</div>
              <h2>Analysis with a purpose.</h2>
              <p>Business questions, thoughtful analysis, clear next steps.</p>
            </div>
            <a
              className="text-link"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              Explore GitHub <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="projects-grid">
            {projects
              .filter((project) => project.featured)
              .map((p, i) => (
                <article
                  className={"project-card " + (i === 0 ? "flagship" : "")}
                  key={p.slug}
                >
                  <Link
                    href={"/projects/" + p.slug}
                    className="project-image"
                    aria-label={"Read " + p.title}
                  >
                    {p.screenshots.length ? (
                      <div className="real-thumbnail">
                        <span>{p.category}</span>
                        <img
                          src={p.screenshots[0].src}
                          alt={p.screenshots[0].alt}
                          width={800}
                          height={239}
                        />
                        <span>
                          {p.thumbnailCaption ||
                            "Project screenshot · View the case study"}
                        </span>
                      </div>
                    ) : (
                      <ProjectVisual kind={p.visual} />
                    )}
                  </Link>
                  <div className="project-body">
                    <div className="project-kicker">
                      <span>{p.category}</span>
                      <span>{p.status}</span>
                    </div>
                    <h3>
                      <Link href={"/projects/" + p.slug}>{p.title}</Link>
                    </h3>
                    <p>{p.subtitle}</p>
                    <div className="tags">
                      {p.tools.slice(0, 4).map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    <Link className="project-link" href={"/projects/" + p.slug}>
                      Explore case study <ArrowUpRight size={18} />
                    </Link>
                  </div>
                </article>
              ))}
          </div>
        </section>
        <HomeSections />
      </main>
      <footer className="wrap footer">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Sydney, Australia · Made with purpose.</span>
      </footer>
    </>
  );
}
