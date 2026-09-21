"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { SectionLink } from "./section-link";
import { profile } from "@/data/profile";
const items = [
  "Home",
  "About",
  "Projects",
  "Skills",
  "Experience",
  "Education",
  "Contact",
];
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <SectionLink className="skip-link" href="#main">
        Skip to content
      </SectionLink>
      <header className="site-header">
        <div className="wrap nav-inner">
          <Link className="brand" href="/" aria-label={profile.name + " home"}>
            <span className="brand-icon">
              vg<span>.</span>
            </span>
            <span>{profile.name}</span>
          </Link>
          <button
            className="menu-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
          <nav
            id="main-navigation"
            className={open ? "navigation open" : "navigation"}
            aria-label="Main navigation"
          >
            {items.map((item) => (
              <SectionLink
                key={item}
                href={"/#" + item.toLowerCase()}
                onClick={() => setOpen(false)}
              >
                {item}
              </SectionLink>
            ))}
          </nav>
          <SectionLink href="/#contact" className="nav-contact">
            Let’s connect <ArrowUpRight size={16} />
          </SectionLink>
        </div>
      </header>
    </>
  );
}
