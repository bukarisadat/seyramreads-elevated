export const quickActions = [
  { id: 'qa1', title: 'Summarize', copy: 'Short summary of selected document' },
  { id: 'qa2', title: 'Explain', copy: 'Explain accounting treatment' },
  { id: 'qa3', title: 'Extract', copy: 'Pull formulas and tables' },
  { id: 'qa4', title: 'Listen', copy: 'Text-to-speech for this document' },
];

export const aiCards = [
  { title: 'Generate flashcards', copy: 'Create revision cards from this document' },
  { title: 'Summarise section', copy: 'Shorten a section into key points' },
  { title: 'Explain formula', copy: 'Break down complex formulas step-by-step' },
  { title: 'Compare entries', copy: 'Compare two accounting approaches' },
];

export const tools = [
  { title: 'Trial Balance', copy: 'View balances and reconcile quickly' },
  { title: 'Search', copy: 'Find terms across all docs' },
  { title: 'Highlighter', copy: 'Mark important passages' },
];

export const courses = [
  { code: 'IFRS', name: 'Financial Reporting', docs: 12, completion: 72 },
  { code: 'TAX', name: 'Corporate Tax', docs: 8, completion: 40 },
  { code: 'AUD', name: 'Audit & Assurance', docs: 6, completion: 55 },
];

export const coverTone = {
  plum: 'linear-gradient(135deg,#8b5cf6,#7c3aed)',
  teal: 'linear-gradient(135deg,#06b6d4,#0891b2)',
  gold: 'linear-gradient(135deg,#f59e0b,#f97316)',
  slate: 'linear-gradient(135deg,#64748b,#475569)',
};

export const libraryFiles = [
  {
    id: 'doc1',
    type: 'PDF',
    code: 'IFRS16',
    meta: '59 pages',
    title: 'IFRS 16 — Leases: Recognition, Measurement & Disclosure',
    course: 'Financial Reporting',
    offline: true,
    progress: 64,
    tone: 'gold',
    filter: 'all',
  },
  {
    id: 'doc2',
    type: 'XLSX',
    code: 'CT01',
    meta: '6 sheets',
    title: 'Corporate Tax Computation',
    course: 'Corporate Tax',
    offline: false,
    progress: 0,
    tone: 'plum',
    filter: 'tax',
  },
  {
    id: 'doc3',
    type: 'PDF',
    code: 'AUD01',
    meta: '24 pages',
    title: 'Audit Procedures Guide',
    course: 'Audit & Assurance',
    offline: false,
    progress: 12,
    tone: 'teal',
    filter: 'audit',
  },
];

