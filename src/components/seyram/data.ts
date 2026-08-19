export type ScreenId = "home" | "library" | "ai" | "progress" | "settings";

export const quickActions = [
  { id: "summary", title: "AI Summary", copy: "Turn long accounting notes into clear revision points." },
  { id: "formula", title: "Formula Extractor", copy: "Find and collect formulas from any document." },
  { id: "cards", title: "Flashcards", copy: "Convert highlights and notes into revision cards." },
  { id: "listen", title: "Listen", copy: "Use text-to-speech while commuting or revising." },
] as const;

export const courses = [
  { code: "FAR", name: "Financial Reporting", docs: 18, completion: 68 },
  { code: "TAX", name: "Taxation", docs: 12, completion: 52 },
  { code: "AUD", name: "Audit & Assurance", docs: 9, completion: 41 },
  { code: "MA", name: "Management Accounting", docs: 14, completion: 35 },
];

export const tools = [
  { title: "Table Reader", copy: "Read trial balances, statements and schedules clearly." },
  { title: "Search across documents", copy: "Find \u201cdeferred tax\u201d or any concept across your library." },
  { title: "Highlights & exam notes", copy: "Save definitions, IFRS paragraphs and your own exam tips." },
];

export type LibraryFile = {
  id: string;
  type: "PDF" | "PPT" | "DOCX" | "XLSX";
  tone: "green" | "gold" | "blue" | "plum";
  code: string;
  title: string;
  course: string;
  meta: string;
  progress: number;
  offline: boolean;
  filter: "far" | "tax" | "audit";
};

export const libraryFiles: LibraryFile[] = [
  { id: "ifrs16", type: "PDF", tone: "gold", code: "IFRS 16", title: "IFRS 16 \u2014 Leases", course: "Financial Reporting", meta: "59 pages", progress: 64, offline: true, filter: "far" },
  { id: "ias12", type: "PPT", tone: "green", code: "IAS 12", title: "IAS 12 \u2014 Income Taxes", course: "Financial Reporting", meta: "42 slides", progress: 0, offline: true, filter: "far" },
  { id: "auditrisk", type: "DOCX", tone: "blue", code: "Audit Risk", title: "Audit Risk & Materiality", course: "Audit & Assurance", meta: "18 pages", progress: 31, offline: false, filter: "audit" },
  { id: "corptax", type: "XLSX", tone: "plum", code: "Corp Tax", title: "Corporate Tax Computation", course: "Taxation", meta: "6 sheets", progress: 0, offline: true, filter: "tax" },
];

export const aiCards = [
  { title: "Smart Summary", copy: "Summarise a 30-page document into exam-ready points." },
  { title: "Formula Extractor", copy: "Detect formulas and explain when each is used." },
  { title: "Flashcards", copy: "Create questions and answers from selected sections." },
  { title: "Explain Concept", copy: "Ask \u201cExplain deferred tax like I\u2019m revising for exams.\u201d" },
];

export const coverTone: Record<LibraryFile["tone"], string> = {
  green: "linear-gradient(150deg, oklch(0.46 0.09 167), oklch(0.28 0.06 168))",
  gold: "linear-gradient(150deg, oklch(0.74 0.09 85), oklch(0.45 0.07 78))",
  blue: "linear-gradient(150deg, oklch(0.52 0.08 255), oklch(0.32 0.06 258))",
  plum: "linear-gradient(150deg, oklch(0.48 0.09 350), oklch(0.3 0.06 350))",
};
