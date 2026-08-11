import type { CSSProperties } from "react";
import { certifications, education } from "@/lib/content";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="shell">
        <div className="sec-head" data-reveal>
          <h2>
            <i style={{ "--dot": "var(--ultra)" } as CSSProperties} />
            About
          </h2>
          <span className="eyebrow">05 — The short version</span>
        </div>

        <div className="about">
          <div data-reveal>
            <p>
              I spent my first years building interfaces and my last few building the systems
              behind them. That combination is the whole point: I can argue about retrieval
              strategy in the morning and about where a confirmation dialog belongs in the
              afternoon, and I think those are the same argument.
            </p>
            <p>
              Most of my work now lives in regulated, high-stakes workflows (bids, contracts,
              legal documents) where an AI system has to be transparent enough that a person will
              actually sign off on what it produced. Making that legible is a design problem at
              least as much as an engineering one.
            </p>
            <p>Outside of work I love to sing, write songs, dance, and play badminton!</p>
          </div>

          <div className="about-side" data-reveal>
            {education.map((e, i) => (
              <div className="edu" key={e.org}>
                {i === 0 ? <u>{e.label ?? "Education"}</u> : null}
                <div className="edu-row">
                  <span className="edu-mark">
                    {e.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={e.logo} alt={`${e.org} logo`} />
                    ) : (
                      <b>{e.org[0]}</b>
                    )}
                  </span>
                  <div className="edu-text">
                    <b>{e.degree}</b>
                    <span>{e.org}</span>
                  </div>
                </div>
              </div>
            ))}
            <div className="edu">
              <u>Certifications</u>
              <span>
                {certifications.map((c, i) => (
                  <span key={c}>
                    {c}
                    {i < certifications.length - 1 ? <br /> : null}
                  </span>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
