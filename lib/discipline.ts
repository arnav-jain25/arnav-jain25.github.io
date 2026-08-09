import type { CSSProperties } from "react";
import type { Discipline } from "./content";

const dotVar: Record<Discipline, string> = {
  ai: "var(--ultra)",
  platform: "var(--amber)",
  frontend: "var(--verd)",
};

const washVar: Record<Discipline, string> = {
  ai: "var(--wash-ultra)",
  platform: "var(--wash-amber)",
  frontend: "var(--wash-verd)",
};

export function dotStyle(discipline: Discipline): CSSProperties {
  return { "--dot": dotVar[discipline] } as CSSProperties;
}

export function dotWashStyle(discipline: Discipline): CSSProperties {
  return { "--dot": dotVar[discipline], "--wash": washVar[discipline] } as CSSProperties;
}
