import type { CSSProperties } from "react";
import Link from "next/link";
import { work } from "@/lib/content";
import { dotStyle } from "@/lib/discipline";

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="shell">
        <div className="sec-head" data-reveal>
          <h2>
            <i style={{ "--dot": "var(--ultra)" } as CSSProperties} />
            Selected work
          </h2>
          <span className="eyebrow">02 — Four case studies</span>
        </div>

        <div className="work-list">
          {work.map((item) => (
            <Link
              className="work-item"
              key={item.id}
              href={`/work/${item.id}`}
              style={dotStyle(item.discipline)}
              data-reveal
            >
              <span className="work-yr">{item.year}</span>
              <span className="work-ttl">{item.title}</span>
              <span className="work-desc">{item.description}</span>
              <span className="work-arrow">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
