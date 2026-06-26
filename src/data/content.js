export const profile = {
  name: 'Ummara Ali Syeda',
  title: 'Software engineer',
  descriptors: [
    'Data & informatics',
    'Turning business needs into software people rely on',
    'Crocheter',
  ],
  github: 'https://github.com/ummaraali2',
  linkedin: 'https://www.linkedin.com/in/ummara-ali-syeda-157469219/',
  intro:
    'I like building software that people come back to. Two of my projects, PostScholar and Form Builder, started as personal ideas and grew into tools with active communities using them regularly. I care about making complex things feel straightforward for the people using them.',
  aside:
    'I recently finished my MS in Informatics at Northeastern. I do my best work on projects that sit somewhere between a useful product and something I would want to use myself.',
};

export const projects = [
  {
    id: 'postscholar',
    title: 'PostScholar',
    description:
      'Researchers paste a DOI and open threaded discussions around published papers. ORCID verification, mentions, moderation, bookmarks, and SEO built in from the start.',
    community: 'Active community of researchers discussing published papers, with verified authors via ORCID.',
    detail:
      'Next.js 16 and Express 5 on PostgreSQL. Google, GitHub, and ORCID sign-in with httpOnly JWT cookies. Dynamic sitemaps, Schema.org markup, ISR where it helps.',
    stack: 'Next.js · Express · PostgreSQL · OAuth · ORCID',
    live: 'https://postscholar.org',
    github: 'https://github.com/ummaraali2/postscholar',
    images: ['postscholar-1.png', 'postscholar-2.png'],
  },
  {
    id: 'form-builder',
    title: 'Form Builder',
    description:
      'Paste plain-text questions; get a live Google Form in your own Drive. Parses MCQ, checkboxes, and short answer. Quiz mode with scoring.',
    community: 'Used by an active community of educators and students building forms from plain text.',
    detail:
      'Custom parser, real-time preview, drag-and-drop reorder, draft autosave. Google Identity Services OAuth. No backend database; forms stay in the user\'s account.',
    stack: 'Next.js · Google Forms API · OAuth · Vercel',
    live: 'https://gformbuild.vercel.app',
    github: 'https://github.com/ummaraali2/form-builder',
    images: ['form-builder-1.png', 'form-builder-2.png'],
  },
  {
    id: 'sudocoin',
    title: 'SudoCoin',
    description:
      'A working blockchain in the browser: PoW mining, Ed25519 wallets, mempool, block explorer, and proof-of-existence document sealing with merkle proofs.',
    detail:
      'React 18 with the Web Crypto API. Mining runs in a Web Worker so the UI stays responsive. Django REST backend, deployed via GitHub Actions.',
    stack: 'React · Web Crypto · Django · Web Workers',
    live: 'https://ummaraali2.github.io/CryptoWebApp/',
    github: 'https://github.com/ummaraali2/CryptoWebApp',
    images: ['sudocoin-1.png', 'sudocoin-2.png'],
  },
  {
    id: 'cpl-ai',
    title: 'CPL AI Assistant',
    description:
      'Capstone with Northeastern CPS and IBM Research. Automates credit-for-prior-learning review with RAG over student documents and course syllabi.',
    detail:
      'Watson Assistant for student and faculty portals. watsonx.ai embeddings in Milvus, LangChain orchestration, Iceberg metadata on watsonx.data.',
    stack: 'Watsonx · Milvus · LangChain · Python · Flask',
    github: 'https://github.com/ummaraali2/Credit-for-Prior-Learning-AI-Assistant',
    note: 'Northeastern × IBM',
    images: ['cpl-ai-1.png', 'cpl-ai-2.png'],
  },
  {
    id: 'paper-radar',
    title: 'Paper Radar',
    description:
      'HN to arXiv/DOI pipeline that ranks papers and outputs a top-6 digest. Zero npm dependencies. Runs on a GitHub Actions cron.',
    detail:
      'Node scripts for extraction and attention scoring. Semantic Scholar fallback for DOIs. Optional SMTP digest. No database anywhere.',
    stack: 'Node.js · GitHub Actions · arXiv API',
    github: 'https://github.com/PostScholar/external-discourse-data',
    images: ['paper-radar-1.png'],
  },
];

export const experiences = [
  {
    role: 'Software Engineer',
    org: 'AskAlong',
    when: 'Current',
    text: 'AskAlong is an AI podcast app with a companion web platform. Contributed to the web platform built on Next.js and deployed on Vercel, working across frontend interfaces, backend API routes, and RSS feed integration. Integrated Supabase as the primary data layer, managed schema versioning with Flyway CLI, and built email broadcast infrastructure using the Resend API.',
  },
  {
    role: 'Graduate Tutor',
    org: 'Northeastern University',
    place: 'Boston, MA',
    when: 'Oct 2024 to Dec 2025',
    text: 'Designed and delivered lab curriculum for cloud computing and full-stack web development courses at Northeastern, covering AWS infrastructure (EC2, S3, RDS, VPC), REST API development, and data visualization in Tableau and Power BI.',
  },
  {
    role: 'Software Development Intern',
    org: 'Tech Robots Inc.',
    place: 'Cary, NC',
    when: 'Jan to Jul 2025',
    text: 'Software engineering intern on a real estate analytics team. Built data pipelines and internal tools that turned property and location data into reports for market analysis, zoning review, and site selection.',
  },
  {
    role: 'Research Assistant',
    org: 'Northeastern University',
    place: 'Boston, MA',
    when: 'Feb to May 2024',
    text: 'Analyzed highway patrol incident data across Massachusetts and Texas using GeoPandas and Shapely, applying spatial analysis techniques to government open datasets to surface geographic patterns in patrol activity.',
  },
];

export const education = [
  {
    degree: "Master's in Informatics",
    school: 'Northeastern University',
  },
  {
    degree: 'B.E. Computer Science',
    school: 'Osmania University',
  },
];

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
];
