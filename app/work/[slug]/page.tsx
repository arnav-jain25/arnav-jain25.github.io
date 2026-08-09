import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies, getCaseStudy } from "@/lib/caseStudies";
import { dotStyle } from "@/lib/discipline";
import Nav from "@/components/Nav";
import PageEffects from "@/components/PageEffects";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.title} — Arnav Jain`,
    description: study.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <Nav />
      <article className="case" style={dotStyle(study.discipline)}>
        <div className="shell case-shell">
          <Link className="case-back" href="/#work">
            ← Back to work
          </Link>

          <header className="case-head" data-reveal>
            <span className="eyebrow">
              {study.org} · {study.year}
            </span>
            <h1>{study.title}</h1>
            <p className="case-summary">{study.summary}</p>
            <ul className="case-stack">
              {study.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </header>

          <div className="case-body">
            <section className="case-sec" data-reveal>
              <u>Problem</u>
              <p>{study.problem}</p>
            </section>
            <section className="case-sec" data-reveal>
              <u>The interaction decision</u>
              <p>{study.decision}</p>
            </section>
            <section className="case-sec" data-reveal>
              <u>Architecture</u>
              <p>{study.architecture}</p>
            </section>
            <section className="case-sec" data-reveal>
              <u>What shipped</u>
              <p>{study.shipped}</p>
            </section>
          </div>

          <footer className="case-foot" data-reveal>
            <Link className="btn" href="/#work">
              More work
            </Link>
            <Link className="btn ghost" href="/#contact">
              Get in touch
            </Link>
          </footer>
        </div>
      </article>
      <PageEffects />
    </>
  );
}
