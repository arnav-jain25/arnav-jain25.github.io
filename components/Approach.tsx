import type { CSSProperties } from "react";
import { principles } from "@/lib/content";
import { dotStyle } from "@/lib/discipline";

export default function Approach() {
  return (
    <section className="section" id="approach">
      <div className="shell">
        <div className="sec-head" data-reveal>
          <h2>
            <i style={{ "--dot": "var(--verd)" } as CSSProperties} />
            How I work
          </h2>
          <span className="eyebrow">03 — Four convictions</span>
        </div>

        <div className="principles">
          {principles.map((p) => (
            <div className="prin" key={p.id} style={dotStyle(p.discipline)} data-reveal>
              <u>{p.label}</u>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
