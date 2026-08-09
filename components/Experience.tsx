import type { CSSProperties } from "react";
import { experience } from "@/lib/content";
import { dotWashStyle } from "@/lib/discipline";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="shell">
        <div className="sec-head" data-reveal>
          <h2>
            <i style={{ "--dot": "var(--ultra)" } as CSSProperties} />
            Experience
          </h2>
          <span className="eyebrow">01 — 2020 to present</span>
        </div>

        <p className="lead" data-reveal style={{ marginBottom: 24 }}>
          I started in frontend and moved toward AI without leaving the interface behind. Each
          marker is coloured by the discipline the role actually leaned on.
        </p>

        <ul className="legend" data-reveal>
          <li>
            <i style={{ background: "var(--ultra)" }} />
            AI &amp; agentic systems
          </li>
          <li>
            <i style={{ background: "var(--amber)" }} />
            Full-stack &amp; platform
          </li>
          <li>
            <i style={{ background: "var(--verd)" }} />
            Frontend engineering
          </li>
        </ul>

        <div className="tl" id="tl">
          <div className="tl-rail" id="tlRail">
            <i id="tlFill" />
          </div>

          {experience.map((role) => (
            <div className="tl-item" key={role.id} style={dotWashStyle(role.discipline)} data-reveal>
              <div className="tl-med">
                {role.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={role.logo} alt={`${role.org} logo`} className="tl-med-logo" />
                ) : (
                  <b className={role.monogramCompact ? "m3" : undefined}>{role.monogram}</b>
                )}
              </div>
              <div className="tl-body">
                <span className="tl-when">{role.dateRange}</span>
                <h3 className="tl-org">{role.org}</h3>
                <div className="tl-role">
                  <span>{role.role}</span>
                  <span>{role.location}</span>
                </div>
                <p className="tl-copy">{role.description}</p>
                <ul className="tl-chips">
                  {role.chips.map((chip) => (
                    <li key={chip}>{chip}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
