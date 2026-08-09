import type { CSSProperties } from "react";
import Image from "next/image";

const WORDS: { text: string; accent?: boolean }[] = [
  { text: "I" },
  { text: "build" },
  { text: "the" },
  { text: "surfaces" },
  { text: "where" },
  { text: "people" },
  { text: "and" },
  { text: "AI agents", accent: true },
  { text: "meet." },
];

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="shell">
        <span className="eyebrow" data-reveal>
          Senior AI Engineer · Atlanta Metro, GA
        </span>
        <h1>
          {WORDS.map((w, i) => (
            <span className="h-w" style={{ "--i": i } as CSSProperties} key={w.text}>
              <span className={w.accent ? "accent" : undefined}>
                {w.text}
                {i < WORDS.length - 1 ? " " : ""}
              </span>
            </span>
          ))}
        </h1>
        <div className="hero-rule" />

        <div className="hero-foot">
          <div className="hero-left">
            <p className="hero-sub" data-reveal>
              Five years across two disciplines that rarely share a desk: agentic systems in
              LangGraph and LangChain, and the React interfaces that let a person review, approve,
              and override what those systems decide.
            </p>
            <div className="hero-actions" data-reveal>
              <a className="btn" href="#experience">
                See the work
              </a>
              <a className="btn ghost" href="/resume.docx">
                Download résumé
              </a>
            </div>
          </div>

          <div className="portrait-wrap" data-reveal>
            <div className="portrait">
              <Image
                src="/portrait.png"
                alt="Arnav Jain"
                fill
                sizes="168px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <span className="portrait-cap">Atlanta, 2026</span>
          </div>
        </div>
      </div>
    </header>
  );
}
