import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  GraduationCap,
  Code2,
  Download,
} from "lucide-react";
import { profile } from "@/data/profile";
import { HomeSections } from "@/components/home-sections";
import { Header } from "@/components/header";
import { SectionLink } from "@/components/section-link";
import { EvidencePanel } from "@/components/evidence-panel";
import { ProjectExplorer } from "@/components/project-explorer";
import { AnalyticsLab } from "@/components/analytics-lab";
export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="hero wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              {profile.availability}
            </div>
            <p className="hero-name">
              {profile.name} / {profile.role}
            </p>
            <h1>{profile.tagline}</h1>
            <p className="hero-description">{profile.intro}</p>
            <div className="hero-tools">
              {profile.headlineTools.split(" · ").map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
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
                Explore my work <ArrowRight size={17} />
              </SectionLink>
              <a
                className="button secondary"
                href={profile.resumeUrl || "#resume"}
                target="_blank"
                rel="noreferrer"
              >
                View resume <Download size={16} />
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
              <SectionLink href="#analytics-lab">
                Try the analytics lab <ArrowRight size={14} />
              </SectionLink>
            </div>
          </div>
          <EvidencePanel />
        </section>
        <div className="capability-band">
          <div className="wrap">
            <span>FROM QUESTION TO DECISION</span>
            <strong>Clean & validate</strong>
            <i>→</i>
            <strong>Model & analyse</strong>
            <i>→</i>
            <strong>Report & explain</strong>
          </div>
        </div>
        <section id="projects" className="section wrap">
          <div className="section-heading">
            <div>
              <div className="eyebrow">01 / SELECTED WORK</div>
              <h2>Business questions. Analytical evidence.</h2>
              <p>
                Explore the process, deliverables and limitations behind each
                project.
              </p>
            </div>
          </div>
          <ProjectExplorer />
        </section>
        <AnalyticsLab />
        <HomeSections />
      </main>
      <footer className="wrap footer">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>
          {profile.role} · {profile.location}
        </span>
        <SectionLink href="#home">Back to top ↑</SectionLink>
      </footer>
    </>
  );
}
