import type { Discipline } from "./content";

export type CaseStudy = {
  id: string;
  discipline: Discipline;
  org: string;
  year: string;
  title: string;
  summary: string;
  problem: string;
  decision: string;
  architecture: string;
  shipped: string;
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "bid-intelligence-agent",
    discipline: "ai",
    org: "Celnet",
    year: "2026",
    title: "Bid intelligence agent",
    summary:
      "Multi-step LangGraph orchestration with human approval gates placed at every irreversible decision.",
    problem:
      "Enterprise bidding is high-stakes and slow: teams have to pull signals from procurement platforms, CRM history, and internal documents, then make a judgment call on whether and how to bid, under deadline pressure where a wrong automated move, an early submission, a bad number, can't be undone.",
    decision:
      "Let the agent do the research and drafting work continuously, but stop and surface a review screen at every step that can't be reversed, before a bid figure is finalized, before anything goes out. The system explains why it's recommending a decision, not just what the decision is, so review takes seconds instead of requiring the reviewer to redo the research themselves.",
    architecture:
      "LangGraph orchestration over GPT-4o and Gemini 2.5 Pro, with structured tool calling and retrieval against HigherGov and internal knowledge repositories, business-rule validation nodes, and stateful checkpoints where the graph pauses for human input. FastAPI services connect the graph to HubSpot and internal CRM data; a React and TypeScript frontend renders each pending decision as a reviewable card rather than a raw log.",
    shipped:
      "An end-to-end enterprise agent that moves a bid from raw opportunity data to a reviewed, submission-ready package, with humans in the loop at the decision points that matter and out of the loop everywhere else.",
    stack: ["LangGraph", "GPT-4o", "Gemini 2.5 Pro", "FastAPI", "React", "TypeScript"],
  },
  {
    id: "incident-response-agent",
    discipline: "ai",
    org: "xAI",
    year: "2025",
    title: "Security incident-response agent",
    summary:
      "The agent investigates an anomaly, calls tools, and proposes an action inside a conversation-first workspace.",
    problem:
      "Security operations work is triage under time pressure: an anomaly fires, and an analyst has to pull context from half a dozen tools, form a theory about what happened, and decide whether it warrants action. The same investigative loop, dozens of times a shift, mostly on alerts that turn out to be nothing.",
    decision:
      "Let the agent run the investigative loop and arrive with a hypothesis already backed by evidence, but never let it act on its own. The analyst's job shifts from gathering to judging, which only works if every claim the agent makes is traceable to the tool call that produced it. So the workspace is conversation-first, with the evidence trail attached rather than summarized away.",
    architecture:
      "An agent that executes tool calls against telemetry and enrichment sources, accumulates evidence into a structured hypothesis, and proposes a next action for review. Python and FastAPI services behind it; a React and TypeScript workspace that renders the investigation as a conversation with its evidence inline, built end to end.",
    shipped:
      "A working incident-response platform where analysts review reasoning instead of assembling it, processing incidents roughly 20% faster than the prior workflow.",
    stack: ["Agentic tool calling", "FastAPI", "Python", "React", "TypeScript"],
  },
  {
    id: "agentic-legal-assistant",
    discipline: "ai",
    org: "Independent project",
    year: "2026",
    title: "Paralegal agentic AI platform",
    summary:
      "Sensitive entities masked before the model ever sees them, with answers grounded in domain documents.",
    problem:
      "Legal documents are exactly the place an LLM shouldn't guess, but they're also full of names, dates, and case-specific detail that can't be sent to a model carelessly, and multi-step legal reasoning breaks down fast if the system loses track of what it's already established.",
    decision:
      "Mask sensitive entities before anything reaches the model, so privacy isn't a policy promise, it's structurally true of the pipeline. Ground every claim in retrieved source documents rather than model memory, so a user can trace an answer back to the passage it came from instead of taking it on faith.",
    architecture:
      "LangChain-orchestrated multi-step reasoning over Gemini and Grok, NER-based entity extraction and masking as a pre-processing stage ahead of any model call, and retrieval-augmented generation over a domain document corpus using vector embeddings and semantic search. Python and FastAPI services handle ingestion, chunking, retrieval, and inference; a React and TypeScript interface surfaces the multi-step reasoning and citations rather than hiding them behind a single chat bubble.",
    shipped:
      "A production conversational assistant for legal workflows that reasons across multiple steps while keeping sensitive data out of the model path entirely.",
    stack: ["LangChain", "Gemini", "Grok", "NER masking", "RAG", "FastAPI", "React"],
  },
  {
    id: "knowledge-assistant",
    discipline: "frontend",
    org: "Independent project",
    year: "2025",
    title: "Scholar Assistant",
    summary: "Hybrid vector and keyword retrieval, with an interface that shows its sources by default.",
    problem:
      "A knowledge assistant that answers confidently but can't show its work isn't trustworthy enough to actually use for anything that matters, and pure vector search alone tends to miss exact-match queries, names, IDs, specific terms, that keyword search catches easily.",
    decision:
      "Show sources by default, not behind a sources toggle a user has to think to click. If the answer can't be traced to something retrieved, that's a signal the interface should surface, not smooth over.",
    architecture:
      "A multi-turn conversational assistant on Gemini 2.5 Flash, with hybrid retrieval combining ChromaDB vector search and keyword search so semantic and exact-match queries both land, and iterative prompt evaluation tightening grounding and consistency across a corpus of religious scriptures. Python and FastAPI backend; React and TypeScript frontend that renders citations inline with the answer.",
    shipped:
      "A conversational assistant where every answer arrives with its sources attached, built to be checked rather than trusted blindly.",
    stack: ["Gemini 2.5 Flash", "ChromaDB", "Hybrid retrieval", "FastAPI", "React"],
  },
];

export function getCaseStudy(id: string) {
  return caseStudies.find((c) => c.id === id);
}
