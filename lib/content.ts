export type Discipline = "ai" | "platform" | "frontend";

export const disciplineLabel: Record<Discipline, string> = {
  ai: "AI & agentic systems",
  platform: "Full-stack & platform",
  frontend: "Frontend engineering",
};

export type ExperienceItem = {
  id: string;
  discipline: Discipline;
  dateRange: string;
  org: string;
  monogram: string;
  monogramCompact?: boolean;
  logo?: string;
  role: string;
  location: string;
  description: string;
  chips: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "celnet",
    discipline: "ai",
    dateRange: "Jan 2026 — Present · 8 mo",
    org: "Celnet",
    monogram: "Ce",
    logo: "/logos/celnet.svg",
    role: "Senior AI Full Stack Engineer",
    location: "Alpharetta, GA",
    description:
      "Architected an enterprise bid intelligence platform on LangGraph (structured tool calling, retrieval, business-rule validation, stateful orchestration), then built the React interface where users review and intervene at the decisions that matter. Bid opportunity intake improved 10–12%.",
    chips: ["LangGraph", "GPT-4o", "Gemini 2.5 Pro", "FastAPI", "React · TypeScript"],
  },
  {
    id: "xai",
    discipline: "ai",
    dateRange: "Feb 2025 — Dec 2025 · 11 mo",
    org: "xAI",
    monogram: "xAI",
    monogramCompact: true,
    logo: "/logos/xai.svg",
    role: "AI Engineer, LLM Evaluation",
    location: "Seattle, WA",
    description:
      "Evaluated model behaviour across long multi-turn conversations and built the datasets and frameworks to measure grounding, hallucination, and task completion. Also built an agentic incident-response platform for security operations end to end (FastAPI services and React interface), processing incidents roughly 20% faster.",
    chips: ["LangChain", "Prompt engineering", "LLM evaluation", "FastAPI", "React · TypeScript"],
  },
  {
    id: "wsu",
    discipline: "platform",
    dateRange: "Jan 2023 — Dec 2024 · 2 yrs",
    org: "Washington State University",
    monogram: "WSU",
    monogramCompact: true,
    logo: "/logos/wsu.svg",
    role: "Full Stack Engineer, AI & Analytics",
    location: "Pullman, WA",
    description:
      "Built client-facing analytics interfaces in React and the Python microservices behind them: interactive data views over AI-generated output, wired to FastAPI through asynchronous retrieval. Also built NLP preprocessing pipelines covering tokenization, normalization, and feature extraction, with structured logging and fault-tolerant processing throughout.",
    chips: ["React", "FastAPI", "NLP pipelines", "Microservices"],
  },
  {
    id: "deloitte",
    discipline: "frontend",
    dateRange: "Sep 2020 — Dec 2022 · 2 yrs 4 mo",
    org: "Deloitte",
    monogram: "De",
    logo: "/logos/deloitte.svg",
    role: "Software Engineer, Full Stack (B2B)",
    location: "India",
    description:
      "Turned Figma wireframes into production B2B interfaces across multiple modules in React and TypeScript, built on reusable component patterns and integrated with REST APIs through async workflows. Improved application responsiveness by roughly 10% through lazy loading, code splitting, and caching, with Cypress coverage over the critical paths.",
    chips: ["React · TypeScript", "Figma", "Design systems", "Cypress"],
  },
];

export type WorkItem = {
  id: string;
  discipline: Discipline;
  year: string;
  title: string;
  description: string;
};

export const work: WorkItem[] = [
  {
    id: "bid-intelligence-agent",
    discipline: "ai",
    year: "2026",
    title: "Bid intelligence agent",
    description:
      "Multi-step LangGraph orchestration with human approval gates placed at every irreversible decision.",
  },
  {
    id: "agentic-legal-assistant",
    discipline: "ai",
    year: "2026",
    title: "Paralegal agentic AI platform",
    description:
      "Sensitive entities masked before the model ever sees them, with answers grounded in domain documents.",
  },
  {
    id: "incident-response-agent",
    discipline: "ai",
    year: "2025",
    title: "Security incident-response agent",
    description:
      "The agent investigates an anomaly, calls tools, and proposes an action inside a conversation-first workspace.",
  },
  {
    id: "knowledge-assistant",
    discipline: "frontend",
    year: "2025",
    title: "Scholar Assistant",
    description:
      "Hybrid vector and keyword retrieval, with an interface that shows its sources by default.",
  },
];

export type Principle = {
  id: string;
  discipline: Discipline;
  label: string;
  title: string;
  text: string;
};

export const principles: Principle[] = [
  {
    id: "grounding",
    discipline: "ai",
    label: "Grounding",
    title: "Show the sources, not just the answer",
    text: "A confident paragraph with nothing behind it is worse than no answer at all. Citations belong in the default view, not behind a disclosure arrow.",
  },
  {
    id: "hitl",
    discipline: "platform",
    label: "Human-in-the-loop",
    title: "Put the person at the irreversible step",
    text: "Automation should run freely right up to the point where a mistake costs something. That is where the interface stops and asks.",
  },
  {
    id: "failure",
    discipline: "frontend",
    label: "Failure design",
    title: "Design the failure path first",
    text: "Ambiguous intent, lost context, a tool that times out. These are the common cases, not the edge cases, and they deserve real screens.",
  },
  {
    id: "state",
    discipline: "ai",
    label: "State",
    title: "A conversation is state, not a transcript",
    text: "What the agent knows, what it assumed, and what it is waiting on should all be visible. If a user can see the state, they can correct it.",
  },
];

export type Capability = {
  id: string;
  discipline: Discipline;
  label: string;
  text: string;
};

export const capabilities: Capability[] = [
  {
    id: "conversational-ai",
    discipline: "ai",
    label: "Conversational & agentic AI",
    text: "Multi-turn dialogue orchestration, conversation state, agent workflow design, tool and function calling, human-in-the-loop patterns, prompt chaining, context management.",
  },
  {
    id: "genai",
    discipline: "ai",
    label: "Generative AI & LLM engineering",
    text: "GPT, Gemini, Grok, Claude. Prompt engineering, LLM evaluation, contextual reasoning, response grounding, hallucination detection and mitigation, retrieval-augmented generation.",
  },
  {
    id: "frameworks",
    discipline: "ai",
    label: "Frameworks",
    text: "LangChain, LangGraph, CrewAI, Hugging Face, PyTorch, TensorFlow, scikit-learn, NumPy, pandas.",
  },
  {
    id: "frontend",
    discipline: "frontend",
    label: "Frontend",
    text: "React, TypeScript, component architecture, state management, responsive interfaces, REST integration.",
  },
  {
    id: "design",
    discipline: "frontend",
    label: "Product design",
    text: "User journey mapping, explainable AI interactions, Figma, design systems.",
  },
  {
    id: "backend",
    discipline: "platform",
    label: "Backend & knowledge systems",
    text: "Python, FastAPI, Flask, Node.js, Express, REST and JSON APIs, microservices, async and event-driven processing, ChromaDB, Pinecone, FAISS, MongoDB, semantic search, chunking, reranking.",
  },
  {
    id: "cloud",
    discipline: "platform",
    label: "Cloud & tooling",
    text: "AWS, Docker, Git, Postman, Claude Code, Cursor, Codex.",
  },
];

export type Education = {
  label?: string;
  degree: string;
  org: string;
  logo?: string;
};

export const education: Education[] = [
  {
    label: "Education",
    degree: "M.S. Computer Science — AI & ML",
    org: "Washington State University",
    logo: "/logos/wsu.svg",
  },
  {
    label: "Education",
    degree: "B.Tech. Computer & Communication Engineering",
    org: "Manipal Institute of Technology",
    logo: "/logos/mit.svg",
  },
];

export const certifications = [
  "AI Proficiency & Claude 101 — Anthropic",
  "Building RAG Agents with LLMs — NVIDIA",
  "LLMs & Agentic AI — LinkedIn Learning",
  "AWS Certified Cloud Practitioner",
];
