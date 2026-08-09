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
    role: "Senior AI Engineer",
    location: "Alpharetta, GA",
    description:
      "Architected an enterprise bid intelligence platform on LangGraph — structured tool calling, retrieval, business-rule validation, stateful orchestration — then built the React interface where users review and intervene at the decisions that matter.",
    chips: ["LangGraph", "GPT-4o", "Gemini 2.5 Pro", "FastAPI", "React · TypeScript"],
  },
  {
    id: "xai",
    discipline: "ai",
    dateRange: "Jan 2025 — Dec 2025 · 1 yr",
    org: "xAI",
    monogram: "xAI",
    monogramCompact: true,
    logo: "/logos/xai.svg",
    role: "AI Engineer, LLM Evaluation",
    location: "Seattle, WA",
    description:
      "Evaluated model behaviour across long multi-turn conversations and built the datasets and frameworks to measure grounding, hallucination, and task completion. Shipped two conversational platforms end to end.",
    chips: ["LangChain", "ChromaDB", "RAG", "Prompt engineering"],
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
      "Built client-facing analytics interfaces in React and the Python microservices behind them — interactive data views over AI-generated output, wired to FastAPI through asynchronous retrieval.",
    chips: ["React", "FastAPI", "NLP pipelines", "Microservices"],
  },
  {
    id: "deloitte",
    discipline: "frontend",
    dateRange: "Mar 2021 — Dec 2022 · 1 yr 10 mo",
    org: "Deloitte",
    monogram: "De",
    logo: "/logos/deloitte.svg",
    role: "Frontend Developer, B2B",
    location: "India",
    description:
      "Turned Figma wireframes into production interfaces across multiple modules, working directly with UI/UX designers on layout, interaction behaviour, and usability. Cut load time roughly 10% through lazy loading, code splitting, and caching.",
    chips: ["React · TypeScript", "Figma", "Design systems", "Cypress"],
  },
  {
    id: "cogent",
    discipline: "frontend",
    dateRange: "Dec 2020 — Mar 2021 · 4 mo",
    org: "Cogent Technocom",
    monogram: "Co",
    role: "Full Stack Engineer",
    location: "India",
    description:
      "Built a real-time quiz application on Microsoft Kaizala, with WebSocket pipelines pushing instant UI updates and reusable state patterns that sped up delivery across the team.",
    chips: ["React", "WebSockets", "Redux"],
  },
  {
    id: "smartknower",
    discipline: "ai",
    dateRange: "Sep 2020 — Nov 2020 · 3 mo",
    org: "SmartKnower",
    monogram: "SK",
    logo: "/logos/smartknower.svg",
    role: "Machine Learning Intern",
    location: "India",
    description:
      "Where it started — image classification and sentiment models served through Flask APIs and visualised in React dashboards. The pairing has followed me ever since.",
    chips: ["Scikit-learn", "Flask", "NLP"],
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
    year: "2025",
    title: "Agentic legal assistant",
    description:
      "Sensitive entities masked before the model ever sees them, with answers grounded in domain documents.",
  },
  {
    id: "knowledge-assistant",
    discipline: "frontend",
    year: "2025",
    title: "Citation-backed knowledge assistant",
    description:
      "Hybrid vector and keyword retrieval, with an interface that shows its sources by default.",
  },
  {
    id: "evaluation-framework",
    discipline: "platform",
    year: "2025",
    title: "LLM evaluation framework",
    description:
      "A working taxonomy of how multi-turn conversations break, and the datasets built to catch it.",
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
    text: "Prompt engineering, LLM evaluation, response grounding, hallucination detection and mitigation, retrieval-augmented generation.",
  },
  {
    id: "frameworks",
    discipline: "ai",
    label: "Frameworks",
    text: "LangChain, LangGraph, CrewAI, Hugging Face, PyTorch, TensorFlow, scikit-learn.",
  },
  {
    id: "frontend",
    discipline: "frontend",
    label: "Frontend",
    text: "React, TypeScript, component architecture, state management, responsive interfaces, Figma, design systems.",
  },
  {
    id: "backend",
    discipline: "platform",
    label: "Backend & knowledge systems",
    text: "Python, FastAPI, REST and JSON APIs, async processing, ChromaDB, Pinecone, FAISS, MongoDB, semantic search, chunking, reranking.",
  },
  {
    id: "cloud",
    discipline: "platform",
    label: "Cloud & tooling",
    text: "AWS, Docker, Git, Postman, Claude Code, Cursor.",
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
    degree: "B.Tech. Computer & Communication Engineering",
    org: "Manipal Institute of Technology",
  },
];

export const certifications = [
  "AI Proficiency & Claude 101 — Anthropic",
  "Building RAG Agents with LLMs — NVIDIA",
  "AWS Certified Cloud Practitioner",
];
