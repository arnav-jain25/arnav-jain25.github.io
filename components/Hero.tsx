import type { CSSProperties } from "react";
import Image from "next/image";

const WORDS: { text: string; accent?: boolean }[] = [
  { text: "I" },
  { text: "build" },
  { text: "AI applications", accent: true },
  { text: "that" },
  { text: "can" },
  { text: "transform" },
  { text: "the way" },
  { text: "you" },
  { text: "work.", accent: true },
];

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="shell">
        <span className="eyebrow" data-reveal>
          Senior AI Full Stack Engineer · Atlanta Metro, GA
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
              Full-stack AI engineer specializing in agentic systems and the interfaces that keep them explainable. Six years across application development, full-stack engineer, Agentic AI, RAG, and more! 
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
