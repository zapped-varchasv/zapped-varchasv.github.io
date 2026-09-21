"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { evidence } from "@/data/evidence";
export function EvidencePanel() {
  const [selected, setSelected] = useState(0);
  const item = evidence[selected];
  return (
    <aside className="evidence-panel" aria-label="Selected project evidence">
      <div className="panel-topline">
        <span>SELECTED EXPERIENCE</span>
        <span className="evidence-status">
          <Check size={12} /> Resume-backed
        </span>
      </div>
      <div
        className="evidence-switch"
        role="group"
        aria-label="Explore work evidence"
      >
        {evidence.map((e, i) => (
          <button
            key={e.label}
            onClick={() => setSelected(i)}
            aria-pressed={selected === i}
          >
            {e.label}
          </button>
        ))}
      </div>
      <div className="evidence-content" aria-live="polite" aria-atomic="true">
        <div className="evidence-value">{item.value}</div>
        <p className="evidence-unit">{item.unit}</p>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <div className="evidence-capabilities">
          {item.capabilities.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
        <div className="evidence-source">{item.source}</div>
        <Link href={item.href} className="evidence-link">
          Explore the case study <ArrowUpRight size={17} />
        </Link>
      </div>
    </aside>
  );
}
