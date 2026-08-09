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
      "Enterprise bidding is high-stakes and slow: teams have to pull signals from procurement platforms, CRM history, and internal documents, then make a judgment call on whether and how to bid — all under deadline pressure where a wrong automated move, an early submission, a bad number, can't be undone.",
    decision:
      "Let the agent do the research and drafting work continuously, but stop and surface a review screen at every step that can't be reversed, before a bid figure is finalized, before anything goes out. The system explains why it's recommending a decision, not just what the decision is, so review takes seconds instead of requiring the reviewer to redo the research themselves.",
    architecture:
      "LangGraph orchestration over GPT-4o and Gemini 2.5 Pro, with structured tool calling and retrieval against HigherGov and internal knowledge repositories, business-rule validation nodes, and stateful checkpoints where the graph pauses for human input. FastAPI services connect the graph to HubSpot and internal CRM data; a React and TypeScript frontend renders each pending decision as a reviewable card rather than a raw log.",
    shipped:
      "An end-to-end enterprise agent that moves a bid from raw opportunity data to a reviewed, submission-ready package, with humans in the loop at the decision points that matter and out of the loop everywhere else.",
    stack: ["LangGraph", "GPT-4o", "Gemini 2.5 Pro", "FastAPI", "React", "TypeScript"],
  },
  {
    id: "agentic-legal-assistant",
    discipline: "ai",
    org: "xAI",
    year: "2025",
    title: "Agentic legal assistant",
    summary:
      "Sensitive entities masked before the model ever sees them, with answers grounded in domain documents.",
    problem:
      "Legal documents are exactly the place an LLM shouldn't guess, but they're also full of names, dates, and case-specific detail that can't be sent to a model carelessly, and multi-step legal reasoning breaks down fast if the system loses track of what it's already established.",
    decision:
      "Mask sensitive entities before anything reaches the model, so privacy isn't a policy promise, it's structurally true of the pipeline. Ground every claim in retrieved source documents rather than model memory, so a user can trace an answer back to the passage it came from instead of taking it on faith.",
    architecture:
      "LangChain-orchestrated multi-step reasoning, NER-based masking as a pre-processing stage ahead of any model call, and retrieval-augmented generation over a domain document corpus. Python and FastAPI backend; a React and TypeScript interface built to surface the multi-step reasoning and citations rather than hide them behind a single chat bubble.",
    shipped:
      "A production conversational assistant for legal workflows that reasons across multiple steps while keeping sensitive data out of the model path entirely.",
    stack: ["LangChain", "NER masking", "RAG", "FastAPI", "React", "TypeScript"],
  },
  {
    id: "knowledge-assistant",
    discipline: "frontend",
    org: "xAI",
    year: "2025",
    title: "Citation-backed knowledge assistant",
    summary: "Hybrid vector and keyword retrieval, with an interface that shows its sources by default.",
    problem:
      "A knowledge assistant that answers confidently but can't show its work isn't trustworthy enough to actually use for anything that matters, and pure vector search alone tends to miss exact-match queries, names, IDs, specific terms, that keyword search catches easily.",
    decision:
      "Show sources by default, not behind a sources toggle a user has to think to click. If the answer can't be traced to something retrieved, that's a signal the interface should surface, not smooth over.",
    architecture:
      "Hybrid retrieval combining ChromaDB vector search with keyword search, so semantic and exact-match queries both land. Python and FastAPI backend; React and TypeScript frontend that renders citations inline with the answer.",
    shipped:
      "A production knowledge assistant where every answer arrives with its sources attached, built to be checked rather than trusted blindly.",
    stack: ["ChromaDB", "Hybrid retrieval", "FastAPI", "React", "TypeScript"],
  },
  {
    id: "evaluation-framework",
    discipline: "platform",
    org: "xAI",
    year: "2025",
    title: "LLM evaluation framework",
    summary: "A working taxonomy of how multi-turn conversations break, and the datasets built to catch it.",
    problem:
      "“The model seems worse at X” isn't actionable without a way to say precisely where multi-turn conversations break, ambiguity, lost context, unsupported claims, failed intent recognition, and without a repeatable way to measure it before and after a change.",
    decision:
      "Treat evaluation as a product surface, not a one-off script. Build a shared vocabulary for failure modes so an evaluator, a prompt engineer, and a researcher can point at the same transcript and agree on what went wrong.",
    architecture:
      "Evaluation datasets and testing frameworks measuring response quality, factual grounding, hallucination rate, and task completion across multi-step planning and tool-use scenarios. A working taxonomy of interaction-level failure modes, ambiguity, failed intents, context loss, unsupported responses, built from analyzing human-AI transcripts, feeding back into prompt and model improvements documented as guidelines for other teams.",
    shipped:
      "A reusable evaluation methodology and failure taxonomy adopted across teams, not a single product, proof of systems thinking rather than a shipped screen.",
    stack: ["Evaluation datasets", "Failure taxonomy", "Prompt engineering"],
  },
];

export function getCaseStudy(id: string) {
  return caseStudies.find((c) => c.id === id);
}
