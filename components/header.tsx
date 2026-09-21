"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { SectionLink } from "./section-link";
import { profile } from "@/data/profile";
const items = ["Projects", "Analytics lab", "Skills", "Experience", "Contact"];
export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const pathname = usePathname();
  useEffect(() => {
    const sections = items
      .map((item) =>
        document.getElementById(item.toLowerCase().replaceAll(" ", "-")),
      )
      .filter((s): s is HTMLElement => !!s);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-15% 0px -60% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <>
      <SectionLink className="skip-link" href="#main">
        Skip to content
      </SectionLink>
      <header className="site-header">
        <div className="wrap nav-inner">
          <Link className="brand" href="/" aria-label={profile.name + " home"}>
            <span>
              {profile.name}
              <small>
                {profile.role} · {profile.location.split(",")[0]}
              </small>
            </span>
          </Link>
          <button
            className="menu-toggle"
            id="menu-toggle"
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
                href={"/#" + item.toLowerCase().replaceAll(" ", "-")}
                aria-current={
                  pathname === "/" &&
                  active === item.toLowerCase().replaceAll(" ", "-")
                    ? "location"
                    : undefined
                }
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
