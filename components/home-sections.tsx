import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Database,
  ChartNoAxesCombined,
  Code2,
  ChartSpline,
  GraduationCap,
  Mail,
} from "lucide-react";
import { profile, skillGroups } from "@/data/profile";
import { projects, secondaryProjects } from "@/data/projects";
const icons = [ChartNoAxesCombined, Database, Code2, ChartSpline];
export function HomeSections() {
  return (
    <>
      {projects
        .filter((p) => !p.featured && p.status === "Planned")
        .map((p) => (
          <div className="wrap" key={p.slug}>
            <Link className="up-next" href={"/projects/" + p.slug}>
              <div>
                <span className="eyebrow">COMING NEXT</span>
                <h3>{p.title}</h3>
                <p>{p.pipeline.join(" → ")}</p>
              </div>
              <span className="text-link">
                View project plan <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        ))}
      <section className="section wrap other-projects">
        <div className="subsection-heading">
          <h2>Other Technical Projects</h2>
          <p>Supporting work in Python, machine learning and natural language processing.</p>
        </div>
        <div className="small-grid">
          {secondaryProjects.map((p) => (
            <a
              className="small-project"
              href={p.url}
              key={p.title}
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <Code2 size={20} />
                <ArrowUpRight size={18} />
              </div>
              <span>{p.type}</span>
              <h3>{p.title}</h3>
              <p>{p.tools}</p>
            </a>
          ))}
        </div>
      </section>
      <section id="about" className="about-section">
        <div className="wrap split-section">
          <div>
            <div className="eyebrow">02 / ABOUT ME</div>
            <h2 className="section-title">
              Curious about the data.
              <br />
              <em>Focused on the decision.</em>
            </h2>
            <div className="about-note">
              <MapPinText />
            </div>
          </div>
          <div className="body-copy">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>
      <section id="skills" className="section wrap">
        <div className="section-heading">
          <div>
            <div className="eyebrow">03 / SKILLS & TOOLKIT</div>
            <h2>The right tools for the question.</h2>
            <p>From reliable data foundations to reporting people can use.</p>
          </div>
        </div>
        <div className="skills-grid">
          {skillGroups.map((g, i) => {
            const Icon = icons[i] || Code2;
            return (
              <article className="skill-card" key={g.name}>
                <Icon size={23} />
                <h3>{g.name}</h3>
                <p>{g.note}</p>
                <div className="tags">
                  {g.skills.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <section id="experience" className="section experience-section">
        <div className="wrap split-section">
          <div>
            <div className="eyebrow">04 / EXPERIENCE</div>
            <h2 className="section-title">
              Applied analytics.
              <br />
              Business experience.
            </h2>
            <p className="section-intro">
              Analytical work and experience in Australian business.
            </p>
          </div>
          <div className="timeline">
            {profile.experience.map((e) => (
              <article key={e.company + e.title + e.dates}>
                <div className="timeline-marker" />
                <div className="experience-top">
                  <h3>{e.company}</h3>
                  <span>{e.dates}</span>
                </div>
                <h4>{e.title}</h4>
                <p>{e.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="education" className="section wrap">
        <div className="split-section">
          <div>
            <div className="eyebrow">05 / EDUCATION</div>
            <h2 className="section-title">
              A foundation
              <br />
              in analytical thinking.
            </h2>
          </div>
          <div className="education-card">
            <GraduationCap size={28} />
            {profile.education.map((education, index) =>
              index === 0 ? (
                <div key={education.degree}>
                  <span className="eyebrow">
                    {education.institution.toUpperCase()}
                  </span>
                  <h3>{education.degree}</h3>
                  <p>{education.details}</p>
                  {education.subjects.length > 0 && (
                    <div className="tags">
                      {education.subjects.map((subject) => (
                        <span key={subject}>{subject}</span>
                      ))}
                    </div>
                  )}
                  {education.note && (
                    <p className="education-note">{education.note}</p>
                  )}
                </div>
              ) : (
                <div className="bachelors" key={education.degree}>
                  <strong>{education.degree}</strong>
                  <p>
                    {education.institution} · {education.details}
                  </p>
                  {education.subjects.length > 0 && (
                    <div className="tags">
                      {education.subjects.map((subject) => (
                        <span key={subject}>{subject}</span>
                      ))}
                    </div>
                  )}
                  {education.note && <p>{education.note}</p>}
                </div>
              ),
            )}
          </div>
        </div>
        <div className="certifications">
          <h3>Certifications</h3>
          {profile.certifications.length ? (
            <div className="certification-items">
              {profile.certifications.map((c) => (
                <div key={c.name}>
                  <strong>{c.name}</strong>
                  <span>{c.status}</span>
                  {c.url && (
                    <a href={c.url} target="_blank" rel="noreferrer">
                      View credential ↗
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p>
              Verified credentials will be added here as they are confirmed.
            </p>
          )}
        </div>
      </section>
      <section id="contact" className="contact-section">
        <div className="wrap contact-inner">
          <div>
            <div className="eyebrow">06 / LET’S CONNECT</div>
            <h2>
              Have a question worth
              <br />
              <em>digging into?</em>
            </h2>
            <p>{profile.contactDescription}</p>
            <a className="contact-email" href={"mailto:" + profile.email}>
              {profile.email}
              <ArrowUpRight size={24} />
            </a>
            <div className="contact-links">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <ArrowUpRight size={16} />
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className="contact-card" id="resume">
            <Mail size={27} />
            <h3>Let’s start a conversation.</h3>
            <p>{profile.contactCardDescription}</p>
            <a className="button primary" href={"mailto:" + profile.email}>
              Get in touch <ArrowRight size={17} />
            </a>
            {profile.resumeUrl ? (
              <a
                className="text-link"
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                View or download my resume <ArrowUpRight size={16} />
              </a>
            ) : (
              <p>Resume available on request.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
function MapPinText() {
  return (
    <>
      <span>BASED IN</span>
      <strong>{profile.location}</strong>
      <span>SEEKING</span>
      <strong>{profile.targetRoles}</strong>
    </>
  );
}
