import type { CSSProperties } from "react";
import { capabilities } from "@/lib/content";
import { dotStyle } from "@/lib/discipline";

export default function Capabilities() {
  return (
    <section className="section" id="capabilities">
      <div className="shell">
        <div className="sec-head" data-reveal>
          <h2>
            <i style={{ "--dot": "var(--amber)" } as CSSProperties} />
            Capabilities
          </h2>
          <span className="eyebrow">04 — Depth, not a checklist</span>
        </div>

        <div className="caps">
          {capabilities.map((c) => (
            <div className="cap" key={c.id} style={dotStyle(c.discipline)} data-reveal>
              <u>{c.label}</u>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
