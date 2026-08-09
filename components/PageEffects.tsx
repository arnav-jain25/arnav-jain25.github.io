"use client";

import { useEffect } from "react";

const SECTION_IDS = ["experience", "work", "approach", "capabilities", "about"];
const SECTION_NAMES: Record<string, string> = {
  experience: "Experience",
  work: "Work",
  approach: "Approach",
  capabilities: "Capabilities",
  about: "About",
};

export default function PageEffects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ---- scroll reveals ----
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    let io: IntersectionObserver | undefined;
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-in"));
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            const parent = el.parentElement;
            const siblings = parent
              ? Array.from(parent.querySelectorAll<HTMLElement>(":scope > [data-reveal]"))
              : [el];
            const i = Math.max(0, Math.min(siblings.indexOf(el), 6));
            el.style.transitionDelay = `${i * 65}ms`;
            el.classList.add("is-in");
            io!.unobserve(el);
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
      );
      items.forEach((el) => io!.observe(el));
    }

    const nav = document.getElementById("nav");
    const progress = document.getElementById("navProgress");
    const rail = document.getElementById("tlRail");
    const fill = document.getElementById("tlFill");
    const here = document.getElementById("navHere");
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>("#navLinks a"));
    const sections = SECTION_IDS.map((id) => document.getElementById(id));

    const clamp = (n: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, n));

    const frame = () => {
      const y = window.scrollY || window.pageYOffset;
      const doc = document.documentElement;

      if (nav) {
        if (y > 8) nav.classList.add("stuck");
        else nav.classList.remove("stuck");
      }
      if (progress) {
        const max = doc.scrollHeight - window.innerHeight;
        progress.style.width = `${max > 0 ? clamp(y / max, 0, 1) * 100 : 0}%`;
      }

      if (rail && fill && !reduce) {
        const r = rail.getBoundingClientRect();
        const anchor = window.innerHeight * 0.55;
        const pct = clamp((anchor - r.top) / r.height, 0, 1);
        fill.style.height = `${pct * 100}%`;
      }

      let activeIdx = -1;
      sections.forEach((s, i) => {
        if (s && s.getBoundingClientRect().top <= window.innerHeight * 0.42) activeIdx = i;
      });
      links.forEach((a, i) => a.classList.toggle("active", i === activeIdx));
      if (here) here.textContent = activeIdx >= 0 ? SECTION_NAMES[SECTION_IDS[activeIdx]] : "Intro";
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        frame();
        ticking = false;
      });
    };

    frame();
    if (reduce && fill) fill.style.height = "100%";

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      io?.disconnect();
    };
  }, []);

  return null;
}
