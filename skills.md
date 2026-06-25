# Form Builder — Skills & Technologies

A web app that lets users paste questions with options and answer keys, then instantly generates a Google Form in their own Google Drive. Includes real-time preview, quiz mode with scoring, inline editing, and drag-and-drop reordering.

**Live app:** https://gformbuild.vercel.app/  
**GitHub:** https://github.com/ummaraali2/form-builder

---

## Frontend

- **Next.js** — Pages Router, API routes, `next/head`, `next/script`, `next/document`
- **React** — hooks (`useEffect`), JSX, component composition
- **JavaScript (ES6+)** — async/await, fetch, regex parsing, debouncing
- **TypeScript** — Next.js configuration
- **HTML5** — semantic markup, drag-and-drop API, form controls
- **CSS3** — custom properties, Flexbox, CSS Grid, responsive media queries, animations and transitions
- **Material Icons** and **Roboto** (Google Fonts)
- **SVG** — inline icons and branding
- **Responsive / mobile-first UI** — tab switching, sticky headers, touch-friendly layout

## Backend & APIs

- **Next.js API Routes** — serverless endpoints
- **REST API integration** — Google Forms API `batchUpdate`
- **Fetch API** — client and server-side requests
- **Environment variables** — Vercel (`SHEET_WEBHOOK_URL`)
- **Google Apps Script** — webhook for usage logging to Google Sheets

## Google Platform

- **Google Identity Services** — OAuth 2.0 token client
- **Google Forms API v1** — form creation, quiz settings, grading
- **Google Drive API** — file scope for form creation in the user's Drive
- **Google OAuth 2.0 UserInfo API** — profile and email retrieval
- **Google Cloud Console** — OAuth client setup, API enablement, test users
- **Google Analytics** — gtag integration

## DevOps & Tooling

- **Vercel** — hosting, serverless deployment, environment variables
- **Git / GitHub** — version control, auto-deploy on push
- **Node.js 20**
- **npm** — package management

## Concepts & Patterns

- OAuth 2.0 authentication and silent token refresh
- Client-side state management — module-level state plus localStorage drafts
- Custom text parsing engine — auto-detects multiple choice, checkboxes, and short answer
- Real-time preview with debounced parsing
- Inline question editing and drag-and-drop reordering
- Autosave and draft persistence
- Quiz mode with answer keys and per-question scoring
- XSS-safe HTML escaping
- Privacy-first architecture — no database; forms created in the user's own Google Drive

## Highlights

- End-to-end **Google Forms API** integration — from pasted plain text to a live, shareable form
- Custom **question parser** that infers question type and correct answers from flexible input formats
- Migrated from a **vanilla HTML/JS** prototype ([`legacy/`](legacy/)) to a **Next.js + React** production app
- community of active users..



























# PostScholar — Skills & Resume Reference

**PostScholar** — [postscholar.org](https://postscholar.org)  
Open academic discussion platform for published research papers. Researchers paste a DOI, start or join focused threads, verify authorship via ORCID, and engage in post-publication discourse with a growing community of scholars.

---

## One-line resume bullets (pick & adapt)

- Built and shipped **PostScholar**, a full-stack academic discussion platform (Next.js, Express, PostgreSQL) with OAuth, ORCID verification, threaded comments, moderation, and SEO-optimized public pages.
- Designed and implemented **community features** — user profiles, follows, @mentions, bookmarks, topic feeds, comment reactions, and a moderator reporting workflow — for researchers discussing published papers.
- Implemented **technical SEO** end to end: dynamic sitemaps, robots.txt, canonical URLs, Open Graph/Twitter cards, and Schema.org JSON-LD for discussions and scholarly articles.

---

## Technical skills (end to end)

### Languages
- **JavaScript** (ES modules + CommonJS)
- **SQL** (PostgreSQL — queries, migrations, triggers, indexes, constraints)
- **HTML / CSS**
- **JSON / REST API design**

### Frontend
- **React 19**
- **Next.js 16** (App Router)
- **React Server Components (RSC)** — server-rendered pages, async data fetching
- **Client Components** (`'use client'`) — interactivity, forms, auth state
- **React Context** — global auth and theme state
- **React Suspense** — loading boundaries
- **Next.js Metadata API** — `metadata`, `generateMetadata`, `viewport`
- **Next.js dynamic routing** — `[slug]`, `[username]`, `[id]`
- **Next.js rewrites** — API proxy for cookie-safe cross-origin auth (mobile Safari)
- **Next.js ISR / caching** — `revalidate`, `force-dynamic`, `cache: 'no-store'`
- **CSS Modules** — scoped component styling
- **Responsive / mobile-first UI**
- **Dark / dim theme** — CSS custom properties, `localStorage`, `data-theme`
- **KaTeX** — LaTeX math rendering in comments
- **Lucide React** — icon system
- **Web Share API** + clipboard fallback
- **Accessibility** — ARIA labels, semantic HTML, keyboard-friendly controls
- **Error boundaries** — graceful client error handling
- **Loading skeletons & empty states** — perceived performance UX

### Backend
- **Node.js**
- **Express 5** — REST API, middleware pipeline, route modules
- **RESTful API design** — resource-oriented endpoints, nested resources
- **Middleware** — auth, optional auth, email verification gate, error handler
- **JWT authentication** — token generation and verification
- **httpOnly cookies** — secure session storage (XSS-resistant)
- **bcrypt** — password hashing
- **CORS** — cross-origin credentials for frontend/backend split
- **Helmet** — HTTP security headers
- **express-rate-limit** — auth and general API throttling
- **cookie-parser** — session cookie handling
- **sanitize-html** — XSS prevention on user-generated content
- **Parameterized SQL queries** — SQL injection prevention (`pg`)
- **Custom error handling** — `AppError`, centralized error middleware
- **Health checks** — `/health` with DB ping
- **Trust proxy** — correct client IP behind Railway/Vercel reverse proxies

### Database
- **PostgreSQL 14+**
- **Schema design** — users, papers, discussions, comments, bookmarks, follows, reports, mentions, reactions, views
- **Relational modeling** — foreign keys, composite keys, CHECK constraints
- **Database migrations** — numbered, idempotent SQL migration system
- **PL/pgSQL triggers** — auto `updated_at` timestamps
- **Strategic indexing** — lookups, sorting, feed queries
- **Full-text / search queries** — discussion and comment search
- **Cursor-based pagination**
- **Enum-style constraints** — report reasons, moderation statuses, user roles

### Authentication & identity
- **Email/password auth** — register, login, forgot/reset password
- **Email verification** — token-based verify flow, resend (rate-limited)
- **OAuth 2.0** — Google sign-in and account linking
- **OAuth 2.0** — GitHub sign-in and account linking
- **ORCID OAuth** — login, author verification, author badges on discussions
- **Multi-provider account linking** — connect/disconnect sign-in methods
- **Role-based access** — user, moderator, admin
- **Protected routes** — JWT middleware on server; client auth guards

### Third-party integrations & APIs
- **CrossRef API** — DOI lookup, paper metadata normalization (title, authors, journal, abstract, year)
- **ORCID API** — OAuth and author identity verification
- **Google OAuth**
- **GitHub OAuth**
- **Resend** — transactional email (verification, password reset)
- **Fetch API** — server-side HTTP to external APIs

### Community & social platform features
Built a full **user community** around academic paper discussions:

| Feature | Description |
|--------|-------------|
| **User accounts & profiles** | Username, display name, bio, affiliation, location, social links, ORCID ID, profile visibility controls |
| **Paper discussions** | Start threads from DOI or manual entry; one discussion per paper |
| **Threaded comments** | Nested replies, depth limits, sort (newest / top) |
| **Comment reactions** | Upvote-style “+” appreciation (one per user per comment) |
| **@Mentions** | Tag users in comments; dedicated mentions inbox and notifications |
| **Follow system** | Follow researchers; follower/following lists |
| **Topic follows** | Subscribe to academic topics for personalized explore feed |
| **Bookmarks** | Save discussions for later |
| **Explore feed** | Browse, filter by topic, sort by activity |
| **Search** | Full-text search across discussions and comments |
| **Author verification** | ORCID-linked verified author badges on paper threads |
| **View tracking** | Anonymous + authenticated discussion view analytics |
| **Content reporting** | Users report spam, harassment, off-topic, misinformation |
| **Moderation dashboard** | Moderators review reports, update status (pending → actioned/dismissed) |
| **Share discussions** | Native share + copy link for spreading threads |
| **Settings** | Profile editing, topic preferences, connected accounts, password management |

Platform principles: academic-focused (not social-media-style), institution-agnostic, free and open.

### SEO & discoverability
Implemented **search engine optimization** across the stack:

| Area | Implementation |
|------|----------------|
| **Meta tags** | Site-wide `title`, `description`, `metadataBase` in root layout |
| **Per-page metadata** | `generateMetadata` on discussion, profile, explore, about, and static pages |
| **Open Graph** | `og:title`, `og:description`, `og:url`, `og:type`, `og:site_name`, `og:locale`, article authors/time |
| **Twitter Cards** | `summary_large_image` cards on key pages |
| **Canonical URLs** | Slug-based discussion URLs with canonical redirects (duplicate URL prevention) |
| **SEO-friendly URLs** | Human-readable slugs: `/d/{paper-title-slug}-{id}` |
| **robots.txt** | Next.js `robots.js` — allow public pages, disallow `/settings`, `/moderation`, auth pages |
| **Dynamic sitemap** | Next.js `sitemap.js` — static pages + all discussions from API, hourly revalidation |
| **Sitemap API** | Backend `/sitemap/discussions` endpoint for crawlable discussion URLs |
| **Structured data (JSON-LD)** | Schema.org `WebSite` + `SearchAction` on homepage |
| **Structured data (JSON-LD)** | `ScholarlyArticle` + `DiscussionForumPosting` + nested `Comment` on discussion pages |
| **Semantic HTML** | Proper headings, article/discussion page structure for crawlers |
| **Public indexable content** | Discussions, explore, profiles, about — server-rendered for bots |
| **Legacy sitemap script** | Standalone PostgreSQL → `sitemap.xml` export for one-off use |

### DevOps, CI/CD & tooling
- **Git / GitHub** — version control, PR workflow, open-source repo
- **GitHub Actions** — CI pipeline (tests, lint, production build)
- **GitHub Dependabot** — dependency update automation
- **Husky** — pre-commit hooks (lint before commit)
- **ESLint 9** — server and client linting (`eslint-config-next`)
- **Prettier** — code formatting
- **concurrently** — run frontend + backend in dev
- **nodemon** — backend hot reload in development
- **Jest** — backend integration/unit tests
- **Supertest** — HTTP API testing
- **PostgreSQL in CI** — GitHub Actions service container for test DB
- **npm workspaces-style monorepo scripts** — root orchestration of client + server

### Deployment & infrastructure
- **Vercel** — Next.js frontend hosting, edge-friendly static assets
- **Railway** — Express API + PostgreSQL production database
- **Environment configuration** — `.env` / `.env.local`, secrets management
- **Database migrations in production** — Railway CLI migration runner
- **HTTPS** — production TLS on both frontend and API origins
- **Custom domain** — postscholar.org

### Testing
- **Integration tests** — auth, OAuth users, connections, papers/CrossRef, social features, email verification
- **Test helpers & setup** — isolated test DB, migration before test run
- **CI gate** — tests + lint + `next build` on every PR

### Architecture & patterns
- **Client–server separation** — Next.js UI + Express API
- **Monorepo layout** — `client-next/`, `server/`, shared root scripts
- **Idempotent migrations**
- **Progressive enhancement** — core content available without heavy client JS
- **Slug parsing & canonical redirects** — SEO-safe URL handling
- **IP hashing** — privacy-conscious view tracking
- **Rate limiting & input sanitization** — abuse prevention for a public community platform

### Legacy / additional
- **Vite + React** — earlier `client/` SPA (superseded by `client-next/`)
- **CSS custom properties** — design tokens (spacing, typography, colors)

---

## Skills grouped for resume “Skills” section

Copy the lines that fit your resume format:

**Frontend:** React, Next.js, React Server Components, JavaScript, HTML, CSS Modules, responsive design, accessibility (ARIA), KaTeX, client/server state (Context)

**Backend:** Node.js, Express, REST APIs, JWT, OAuth 2.0, middleware, rate limiting, input sanitization

**Database:** PostgreSQL, SQL, schema design, migrations, triggers, indexing, full-text search

**Auth & security:** bcrypt, httpOnly cookies, Helmet, CORS, XSS prevention, role-based access, email verification

**Integrations:** CrossRef API, ORCID, Google OAuth, GitHub OAuth, Resend (transactional email)

**SEO:** metadata API, Open Graph, Twitter Cards, canonical URLs, robots.txt, dynamic XML sitemaps, Schema.org JSON-LD, SSR for crawlable pages

**Community / product:** user profiles, threaded comments, mentions, follows, bookmarks, moderation, reporting, topic feeds, author verification badges

**DevOps:** Git, GitHub Actions, Jest, ESLint, Prettier, Husky, Vercel, Railway, environment-based deployment

---

## Project context for interviews

**What it is:** A free, open platform where researchers discuss published papers after publication — paste a DOI, pull metadata from CrossRef, open a focused thread, and connect with verified authors.

**Who uses it:** Academics, graduate students, and researchers who want post-publication discourse outside paywalled comment systems — a **community of users** discussing real papers with verified author participation via ORCID.

**What you built end to end:** Full-stack web app from database schema and migrations through REST API, auth (4 providers), community features, moderation, SEO, CI, and production deployment on Vercel + Railway.

**Live links:**
- Production: https://postscholar.org
- API: https://postscholar-production.up.railway.app
- Repository: https://github.com/PostScholar/postscholar









































---
name: postscholar-paper-radar
description: >-
  Operate the PostScholar external-discourse-data paper radar: local runs,
  GitHub Actions cron, workflow_dispatch, SMTP email digest, and artifact
  downloads. Use when working on external-discourse-data, paper radar, HN
  digest, targets JSON, or GitHub Actions setup for this repo.
---

# PostScholar paper radar

Minimal HN → arXiv/DOI → top-6 digest tool for founder seeding. **No database.** Zero npm dependencies.

Repo: `PostScholar/external-discourse-data`

## Project layout

```
src/
  run.js            # pipeline entry
  extractPaper.js   # DOI + arXiv extraction
  resolveArxiv.js   # arXiv API metadata
  resolveDoi.js     # Semantic Scholar DOI fallback (top picks)
  tags.js           # topic + link tags
  attentionScore.js
  sources/hn.js
.github/workflows/cron.yml   # "Paper radar" workflow
```

Output (gitignored): `targets-YYYY-MM-DD.json` + `.md` in repo root.

## Local run

```bash
cd external-discourse-data
npm run radar
# alias: npm run fetch
```

Optional env:

| Var | Default | Purpose |
|-----|---------|---------|
| `TOP_N` | `6` | Papers in digest |

No `.env` required for local runs.

## Git push (first time or updates)

User runs git commands unless they explicitly ask the agent to commit/push.

```bash
cd external-discourse-data
git add .
git status
git commit -m "Your message"
git push origin main
```

**Scheduled Actions only run from the default branch** (`main`) after the workflow file is pushed.

## GitHub Actions workflow

File: `.github/workflows/cron.yml`  
Workflow name in UI: **Paper radar**

### Triggers

| Trigger | When |
|---------|------|
| `schedule` | `0 8 */3 * *` — **08:00 UTC** on days **1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31** (~2–3× per week) |
| `workflow_dispatch` | Manual: **Actions → Paper radar → Run workflow** |

**Not** “every Monday.” Cron uses calendar day-of-month, not weekday.

EDT offset: **08:00 UTC = 4:00 AM EDT** (adjust for DST).

### What the job does

1. Checkout repo
2. Node 20
3. `npm run radar`
4. Upload `targets-*.json` and `targets-*.md` as artifact `targets-<run_id>`
5. If `MAIL_TO` secret set → email digest via SMTP

Timeout: 20 minutes.

### First scheduled run gotcha

If the workflow is **pushed after** 08:00 UTC on a scheduled day, that day's slot is **skipped**. Next run is the **next** `*/3` date.

Example: pushed Fri Jun 13 ~23:07 UTC → missed Jun 13 08:00 UTC → next run Jun 16 08:00 UTC.

## Email digest (optional secrets)

GitHub **never** emails artifacts by default. Email runs only when `MAIL_TO` is set.

**Settings → Secrets and variables → Actions → New repository secret:**

| Secret | Example |
|--------|---------|
| `MAIL_TO` | `you@gmail.com` |
| `MAIL_FROM` | `you@gmail.com` |
| `SMTP_SERVER` | `smtp.gmail.com` |
| `SMTP_PORT` | `587` |
| `SMTP_USERNAME` | `you@gmail.com` |
| `SMTP_PASSWORD` | Gmail App Password (not normal password) |

Gmail: enable 2FA → [App Passwords](https://myaccount.google.com/apppasswords).

If `MAIL_TO` is unset, artifact-only mode (no email step).

## Getting results

| Where run | Where output goes |
|-----------|-------------------|
| **Local** `npm run radar` | Repo root: `targets-YYYY-MM-DD.*` |
| **GitHub Actions** | **Artifacts** on run page only — does not sync to laptop |
| **Email** (if secrets set) | Inbox with `.md` body + attachments |

Download artifact: **Actions → Paper radar → run → Artifacts → targets-&lt;run_id&gt;.zip**

## Manual run checklist

```
- [ ] Code pushed to main (workflow + src changes)
- [ ] Actions → Paper radar → Run workflow → branch main
- [ ] Run completes green (~1–2 min + up to ~45s if Semantic Scholar lookups)
- [ ] Download artifact or check email
```

## Upcoming schedule helper

For cron `0 8 */3 * *`, list month days where `day % 3 == 1` (1, 4, 7, …) at 08:00 UTC.

After any given run, next run is the **next date in that list**, typically **2–3 calendar days** later.

## Troubleshooting

| Problem | Likely cause |
|---------|----------------|
| No run on Monday | Schedule is not weekday-based; check if today is a `*/3` day |
| No scheduled runs at all | Workflow not on `main`, or pushed after that day's 08:00 UTC slot |
| Only manual runs in history | Normal until first scheduled day after push |
| Empty artifact | HN fetch failed; check run logs |
| Email step skipped | `MAIL_TO` secret not set |
| Email fails | Wrong SMTP password; use Gmail App Password |
| Low paper count | Expected for DOI-only weeks; arXiv extraction is the main yield lever |

## Agent constraints for this repo

- Do **not** commit/push unless user explicitly asks
- Do **not** add Postgres/DB layer unless user requests Explore integration
- Reddit is **out of scope** (ToS)
- `targets-*.json` / `targets-*.md` are gitignored — never commit digests

## Related PostScholar work (separate repo)

Main app `postscholar` would read ranked papers via `GET /explore/noted` — **not implemented** in this minimal tool. This repo is founder digest only.

For cron schedule examples and digest JSON shape, see [reference.md](reference.md).























# Project : Credit-for-Prior-Learning-AI-Assistant
ummaraali2/Credit-for-Prior-Learning-AI-Assistant
Go to file
t
T
Name		
ummaraali2
ummaraali2
Update README.md
b435d5a
 · 
2 months ago
backend
initial
6 months ago
deployments/watsonx-ai
add rag deployed notebook
6 months ago
docs
Add CPL Reference Material
2 months ago
frontend
initial
6 months ago
openapi-text
initial
6 months ago
sql
initial
6 months ago
tests
initial
6 months ago
.gitignore
initial
6 months ago
PROJECT_STRUCTURE.md
Update PROJECT_STRUCTURE.md
6 months ago
README.md
Update README.md
2 months ago
package-lock.json
initial
6 months ago
package.json
initial
6 months ago
pytest.ini
initial
6 months ago
server.js
initial
6 months ago
upload
initial
6 months ago
Repository files navigation
README
CPL Website - Credit for Prior Learning System
Demo
 video.1.mov 
 trim1.mov 
 trim.2.mov 
 trim3.mov 
Credit for Prior Learning (CPL) AI Assistant
Intelligent automation system for evaluating student learning experiences for academic credit at Northeastern University's College of Professional Studies, built in partnership with IBM Research.

GitHub: https://github.com/ummaraali2/Credit-for-Prior-Learning-AI-Assistant

Problem Statement
This project originated as a capstone at Northeastern University, sponsored by IBM Research and the College of Professional Studies. The problem came directly from academic advisors: they are overwhelmed by Credit for Prior Learning requests, particularly at the start of each semester when volume spikes. Each request requires a faculty reviewer to manually read through student-submitted documents, map qualifications against course learning outcomes, and render a decision with no AI assistance and no structured workflow.

The burden falls on both sides. Students with relevant professional experience have no way to gauge whether their application is worth pursuing before investing hours assembling documentation. Advisors and faculty have no tooling to surface the most relevant evidence inside lengthy submissions. The result is long turnaround times, inconsistent decisions, and a process that effectively discourages the students most likely to qualify.

I was also motivated by the opportunity to work directly with IBM Cloud and understand their AI services in a production-grade context. I led the project and was responsible for the full technical build. Success looked like: a system where students submit stronger applications with less friction, faculty spend time on judgment calls rather than document triage, and the entire workflow is traceable and auditable.

Solution Overview
The CPL AI Assistant is a full-stack intelligent workflow system that automates the end-to-end CPL process, from application intake through faculty review and credit award.

Students interact through a Watson Assistant conversational interface embedded in a web portal. They describe their background, upload supporting documents (resumes, transcripts, certifications, project portfolios), and walk through a guided application flow before submitting. A separate faculty portal provides evaluation summaries grounded in retrieved document evidence, an inline document viewer, and a structured decision workflow.

AI is core to the solution, not supplementary. Without it, the system would be a form with a document upload button. The RAG pipeline is what makes competency assessment possible: it retrieves relevant course syllabus sections from a vector store, compares them against student submissions, and generates evidence-grounded evaluations with confidence indicators. The conversational interface does more than collect data. It guides students through articulating their experience in terms that map to course learning outcomes. Neither capability is meaningful without the underlying AI.

Tech stack: IBM Watson Assistant, IBM watsonx.ai (slate-125m-english-rtrvr-v2 embedding model), Milvus vector database, IBM watsonx.data (Apache Iceberg via Presto), IBM Cloud Object Storage, Python/Flask, Node.js/Express, LangChain, PyPDF2, python-docx.

AI Integration
Models and APIs used:

IBM watsonx.ai with the slate-125m-english-rtrvr-v2 embedding model for high-dimensional semantic embeddings optimized for retrieval tasks
Watson Assistant for conversational flow, session state management, and LLM looping via custom OpenAPI extensions
LangChain for RAG pipeline orchestration, text splitting, and document loader abstraction
Agentic patterns:

RAG: student documents are chunked, embedded, and stored in Milvus; at evaluation time, the pipeline retrieves the most semantically similar syllabus sections, then generates a competency mapping grounded in retrieved evidence
Multi-turn reasoning: Watson Assistant Actions loop back to the LLM extension across turns, passing accumulated conversation history as context on each call, enabling the chatbot to maintain coherent state through a multi-step application without re-prompting from scratch
Tool use: Watson Assistant calls custom extensions (defined via OpenAPI spec) for document processing, status lookups, and LLM completions, keeping business logic in the backend while the conversational layer stays focused on dialogue management
Tradeoffs considered:

Chose Milvus over managed vector services to keep data on IBM infrastructure, which was a hard requirement given FERPA obligations; the cost was more operational overhead setting up the HNSW index and managing the collection schema
The IBM slate embedding model produces larger embeddings than lightweight alternatives, increasing storage and search latency slightly, but retrieval quality on domain-specific educational text was noticeably better
Watson Assistant character limits for session variables required careful chunking of conversation history passed to the LLM extension; the workaround (appending to a structured rolling buffer rather than raw transcript) introduced complexity but kept context coherent
Where AI exceeded expectations: The automated post-submission workflow performed better than expected end to end. Once a student submits, the system stores the application, runs the intelligent routing algorithm to assign the most appropriate faculty reviewer based on department and workload, and dispatches notifications to both parties without any manual intervention. During user testing this pipeline ran without failures across all test scenarios, which was not a given given the number of services involved. The context-aware chunking also preserved document meaning better than a naive fixed-size approach would have, which kept semantic search results coherent across long professional resumes and multi-page project portfolios.

Where it fell short: Watson Assistant's Actions vs. Dialog skill distinction introduced early architectural friction. Looping behavior and context variable handling differ between them in non-obvious ways, and the debugging surface is limited. The system also has no graceful fallback when a student's document is a scanned image rather than searchable text; OCR preprocessing is required before upload.

Architecture and Design Decisions
The system uses a three-tier architecture. For the full architecture diagram, see CPL Project Documentation.pdf (Appendix A).

┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │────│  Node.js        │────│  Python         │
│   (HTML/JS)     │    │  Gateway        │    │  Backend        │
│   Port: 3000    │    │  Port: 3000     │    │  Port: 5000     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
        │                        │                        │
        │              ┌─────────────────┐                │
        └──────────────│ Watson Assistant│                │
                       │   (IBM Cloud)   │                │
                       └─────────────────┘                │
                                                          │
     ┌────────────────────────────────────────────────────┼──────────────┐
     │                                                    │              │
┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ watsonx.ai   │  │   Milvus     │  │  IBM COS     │  │ watsonx.data │
│ (Embeddings) │  │  (Vectors)   │  │ (Documents)  │  │  (Iceberg)   │
└──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘
Project structure:

Credit-for-Prior-Learning-AI-Assistant/
├── backend/                    # Python AI processing services
│   ├── services/               # Main application services
│   ├── handlers/               # External service handlers
│   ├── scripts/                # Setup and maintenance scripts
│   ├── utils/                  # Utility functions
│   └── config/                 # Configuration files
├── deployments/                # Jupyter Notebook RAG pipeline deployed as a watsonx.ai online function
│   └── watsonx-ai/
├── frontend/                   # Web application
│   ├── pages/                  # HTML pages
│   ├── assets/css/             # Stylesheets
│   ├── assets/js/              # JavaScript files
│   └── assets/images/
├── docs/                       # Documentation
│   ├── setup/                  # Installation guides
│   ├── api/                    # OpenAPI specs
│   └── architecture/           # System design docs
├── tests/                      # Test suites
│   ├── backend/                # Python backend tests
│   ├── frontend/               # JavaScript frontend tests
│   ├── integration/            # API integration tests
│   └── e2e/                    # End-to-end browser tests
├── sql/schemas/                # Database schemas
├── server.js                   # Node.js gateway entry point
├── package.json
└── pytest.ini
Presentation layer: Watson Assistant web chat widget embedded in HTML5 portals. The student portal handles application submission; the faculty portal handles evaluation. Both are served as static assets from the Node.js gateway.

Application layer (dual-backend):

Node.js/Express gateway handles HTTP routing, CORS, and file upload (via Multer). It proxies requests to the Python backend and serves the frontend.
Python/Flask AI backend handles document processing (PyPDF2, python-docx), embedding generation via the watsonx.ai API, vector storage and retrieval via PyMilvus, and RAG pipeline orchestration via LangChain.
Data layer:

Milvus vector database stores embeddings with an 8-field schema including student metadata, enabling filtered semantic search (e.g., retrieve only embeddings from a specific student's submission)
IBM watsonx.data (Apache Iceberg via Presto) stores application metadata with full ACID compliance, partitioned by status for efficient queue queries
IBM Cloud Object Storage preserves original documents (S3-compatible API)
Key design decisions:

1. Dual portal with dual Watson Assistant instances. Rather than a single interface with role-based views, I deployed two fully separate portals (student and faculty), each backed by its own Watson Assistant instance. The student-facing assistant is optimized for guided application intake across multiple turns; the faculty-facing assistant is optimized for application queries and status management. This kept each conversational flow clean and purpose-built. The tradeoff is maintaining two assistant configurations, but the clarity in each user experience justified it.

2. Building a Milvus vector store from scratch instead of using the default watsonx vector database. IBM watsonx.data includes a built-in vector store, but I chose to set up Milvus independently for three reasons: finer control over the index type (HNSW with L2 metric), the ability to include student metadata fields in the schema for filtered search (so a faculty reviewer querying for a specific student only retrieves that student's embeddings), and keeping the vector store portable and not locked to a specific IBM service tier. Building the 8-field schema from scratch added setup time but gave retrieval behavior I could tune directly.

3. Using LangChain as the RAG orchestration layer. The alternative was wiring the pipeline manually: call the watsonx.ai embedding API, push to Milvus, retrieve, call the generation API. LangChain abstracts this into composable components (document loaders, text splitters, vectorstore interfaces, chains) that made the pipeline easier to reason about and iterate on. The tradeoff is a dependency that adds abstraction overhead, but for a project with evolving chunking and retrieval logic the flexibility was the right call.

4. OpenAPI extension design for Watson Assistant communication. Connecting Watson Assistant to the backend required defining a custom extension via an OpenAPI specification. Three approaches were designed and tested: a baseline spec connecting directly to the Flask backend, a RAG-integrated spec that routes evaluation requests through the full pipeline, and an ngrok-tunneled variant for local development and testing before the backend had a stable public endpoint. These specs are in docs/api/. The production build uses the RAG-integrated spec.

What AI Helped With (and Where It Got in the Way)
Where AI coding tools accelerated development:

Claude and Copilot were most useful for boilerplate-heavy tasks: writing the OpenAPI spec for Watson Assistant custom extensions, scaffolding the LangChain pipeline structure, and generating the Milvus collection schema and index configuration from the documented parameter space. Tasks that would have taken an hour of reading IBM documentation were compressed to minutes of prompting and verification.

The Watson Assistant web chat integration, particularly the writeableElements API and updateUserDefinedResponse patterns, was also faster with AI assistance since the documentation is dense and the API surface is narrow.

Where AI tools got in the way:

IBM-specific SDK behavior was a persistent gap. Suggestions for ibm-watsonx-ai method signatures, Milvus DataType enum values, and Presto SQL quirks in watsonx.data were frequently wrong or outdated. The pattern that emerged: use AI tools to scaffold structure and identify the right abstractions, then go directly to IBM documentation to verify parameters and handle edge cases. Trusting generated IBM SDK code without verification added debugging time.

Watson Assistant session variable handling, especially passing structured context to LLM extensions, required iterative debugging that AI tools could not meaningfully accelerate, because the failure modes (silent truncation, context drops between steps) only surface at runtime inside the Watson console.

Getting Started
System Requirements
End users (students and faculty): Modern web browser (Chrome, Firefox, Safari, Edge), JavaScript enabled, stable internet connection.

System administrators: Node.js 18+, Python 3.9+, Linux/macOS/Windows Server.

External services required: IBM Cloud account with active subscriptions for watsonx.ai, Watson Assistant, Cloud Object Storage, and watsonx.data; Milvus cluster (self-hosted or cloud-managed).

Installation
# Clone the repository
git clone https://github.com/ummaraali2/Credit-for-Prior-Learning-AI-Assistant.git
cd Credit-for-Prior-Learning-AI-Assistant

# Install Node.js dependencies
npm install

# Install Python dependencies
pip install -r requirements.txt

# Configure environment variables
cp .env.example .env
Full .env reference:

# IBM watsonx.ai
WATSONX_AI_APIKEY=your_watsonx_api_key
WATSONX_AI_SERVICE_URL=https://us-south.ml.cloud.ibm.com
WATSONX_AI_PROJECT_ID=your_project_id

# Milvus Vector Database
MILVUS_CONNECTION_ID=your_milvus_connection_id
MILVUS_HOST=your_milvus_host
MILVUS_PORT=32668
MILVUS_USERNAME=your_username
MILVUS_PASSWORD=your_password

# IBM Cloud Object Storage
COS_API_KEY=your_cos_api_key
COS_INSTANCE_ID=your_cos_instance_id
COS_ENDPOINT=https://s3.us-south.cloud-object-storage.ibmcloud.com
COS_BUCKET_NAME=cpl-documents

# IBM watsonx.data (Iceberg)
WATSONX_DATA_HOST=your_presto_host
WATSONX_DATA_PORT=30670
WATSONX_DATA_USER=ibmlhapikey_your_email
WATSONX_DATA_PASSWORD=your_api_key
ICEBERG_CATALOG=iceberg_data
ICEBERG_SCHEMA=cpl_schema
ICEBERG_TABLE=cpl_requests
# Initialize the Milvus collection
cd backend/scripts && python create_cpl_collection.py

# Initialize the Iceberg metadata table
# Execute sql/schemas/CREATE-TABLE.sql in your watsonx.data Presto interface

# Start services in two terminals

# Terminal 1 - Python AI backend (runs on http://localhost:5000):
cd backend/services && python watson_upload.py

# Terminal 2 - Node.js gateway (runs on http://localhost:3000):
npm start

# Access the application:
# open http://localhost:3000/frontend/pages/index.html
See docs/setup/requirements.txt and docs/setup/DEPENDENCIES.md for complete dependency lists. For full installation instructions, environment variable reference, and service verification steps, see the User Manual.

The student flow begins with the Watson Assistant widget in the bottom-right of the portal. Students greet the bot, select an application type (experience-based CPL, prior coursework, or credit transfer), provide detailed information about their background, and upload supporting documents. A unique application ID is generated on submission for status tracking.

Faculty access the review portal, where each application shows a RAG-grounded evaluation summary, an inline document viewer with highlighted evidence, and a decision form for approvals, denials, or information requests.

Screenshots and architecture diagrams are in CPL Project Documentation.pdf (Appendix A). (Appendix B).

Testing and Error Handling
The system was tested across three surfaces: unit tests for the Python backend (covering text extraction, chunking, and embedding pipeline), integration tests for the Node.js gateway (file upload routing, CORS, proxy behavior), and end-to-end user testing with real student and faculty participants.

Test configuration is managed via pytest.ini. The test suite is in tests/.

Running tests:

# All tests
npm test

# Python backend tests with coverage
python -m pytest tests/backend/ -v --cov=backend

# Integration tests
python -m pytest tests/integration/ -v

# End-to-end browser tests
npx playwright test tests/e2e/
API endpoints (Node.js gateway, port 3000):

POST /api/upload - Upload student documents
GET /api/download-document/:documentId/:filename - Download documents
GET /api/preview-document/:documentId/:filename - Preview documents inline
GET /api/requests - Get all CPL requests
GET /api/requests-by-nuid/:nuid - Get requests by student ID
PUT /api/requests/:id/status - Update request status
GET /health - Service health check
API endpoints (Python backend, port 5000):

POST /api/upload-to-watsonx - Process and embed documents
GET /api/get-requests - Query Iceberg for requests
PUT /api/update-status - Update request status in Iceberg
POST /api/search - Vector search through documents
GET /health - Service health check
Vector store configuration:

Collection: cpl_documents_v5
Index type: HNSW with L2 metric
Embedding dimensions: 768 (IBM slate model output)
Chunk size: 800 characters with 150-character overlap, tuned to the 512-token embedding model limit
Error handling covers the failure modes most likely to occur in production: file type mismatches and oversized uploads (caught at the Node.js layer before reaching the backend), text extraction failures on scanned PDFs (surfaced to the user with an OCR recommendation), Milvus connection failures (logged with retry logic), and Watson Assistant API timeouts (handled with exponential backoff in the custom extension). The Iceberg metadata table uses ACID transactions to prevent partial writes on application submission.

The user testing report covering task completion rates, qualitative feedback, and identified pain points is in docs/full-documentation.md, Section IV.

Future Improvements
Generalized prompts for easier scaling. The current prompts are tuned specifically for PJM (Project Management) courses at Northeastern. Making them more generalized, so that department, course code, and learning outcome structure are injected dynamically rather than hardcoded, would make it far easier to extend to other programs without rewriting the AI pipeline.
Handoff-ready architecture for sponsors. I would refactor with the IBM team's operational standards in mind from the start, specifically using IBM-native deployment patterns (watsonx.ai online functions for all AI components, watsonx Orchestrate for workflow automation) so that IBM Research or the College of Professional Studies could take ownership of the codebase and scale it without depending on my original setup choices.
OCR preprocessing pipeline. Automatically detect and process scanned PDFs at upload time, rather than returning an error and asking users to pre-process externally.
LMS and SIS integration. Webhook-based status sync with Northeastern's student information system so credit awards post automatically rather than requiring registrar action.
Confidence calibration. The assessment confidence indicators are not yet calibrated against faculty decision outcomes. A feedback loop that updates scoring based on accepted/denied decisions would improve reliability over time.
Documentation
File	Contents
docs/user-manual.md	Complete installation guide, student portal walkthrough, faculty portal walkthrough, troubleshooting, FAQ, security and compliance notes, and full references for all libraries, SDKs, and frameworks used
docs/full-documentation.md	Full project documentation including competitor analysis, project development plan, work breakdown structure, schedule, risk/quality/communication plans, user testing plan, user testing report, and architecture appendices
docs/setup/requirements.txt	Python dependency list
docs/setup/DEPENDENCIES.md	Annotated dependency reference
docs/api/	OpenAPI specifications for Watson Assistant custom extensions (baseline, RAG-integrated, and ngrok variants)
docs/architecture/	Architecture decision records and script history
sql/	Iceberg table DDL and query examples
Acknowledgments and Third-Party Components
IBM Services: IBM watsonx.ai, Watson Assistant, Cloud Object Storage, watsonx.data (Apache Iceberg / Presto). Used under IBM Cloud subscription terms.

Open-source libraries (Python): Flask, LangChain, PyMilvus, PyPDF2, python-docx, ibm-watsonx-ai SDK, ibm-cos-sdk, pandas, pydantic, aiohttp. See docs/setup/requirements.txt for full versions.

Open-source libraries (Node.js): Express.js, Multer, CORS, dotenv, uuid, axios. See package.json for full versions.

Infrastructure: Milvus vector database (Apache 2.0 license). Apache Iceberg (Apache 2.0 license).

A complete annotated reference list covering all libraries, SDKs, frameworks, Watson services documentation, and third-party resources is in the User Manual (References section). For a complete reference list of all IBM Cloud APIs, watsonx services, Watson Assistant documentation, and open-source libraries used in this project, see CPL Reference Material.pdf.

Project Background
Capstone project, Team 06, Northeastern University College of Professional Studies, in partnership with IBM Research. Technical Lead: Ummara Ali Contact: ummaraali2020@gmail.com GitHub Issues: https://github.com/ummaraali2/Credit-for-Prior-Learning-AI-Assistant/issues

About
This is a prototype build using IBM cloud resources like watsonx ai, watsonx assistant, and watsonx data to enable AI conversation in the Assistant and creating a RAG pipeline. I have also used IBM's Cloud Object storage to send all the students uploads. Frontend - Javascript, Backend - Flask.

Resources
 Readme
 Activity
Stars
 1 star
Watchers
 0 watching
Forks
 0 forks
Releases
No releases published
Create a new release
Packages
No packages published
Publish your first package
Contributors
1
@ummaraali2
ummaraali2 Ummara Ali Syeda
Languages
Python
36.2%
 
JavaScript
25.4%
 
Jupyter Notebook
13.5%
 
CSS
13.2%
 
HTML
11.7%
Suggested workflows
Based on your tech stack
Python application logo
Python application
Create and test a Python application.
Publish Node.js Package to GitHub Packages logo
Publish Node.js Package to GitHub Packages
Publishes a Node.js package to GitHub Packages.
Python package logo
Python package
Create and test a Python package on multiple Python versions.
More workflows
Footer
© 2026 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Community
Docs
Contact
Manage cookies
Do not share my personal information














# SudoCoin — Skills & Technologies

> **Project:** Full-stack blockchain web application with proof-of-work consensus, document sealing (proof-of-existence), wallet management, mempool, block explorer, and public verification.  
> **Stack:** React 18 · Web Crypto API · Django · GitHub Actions · GitHub Pages

Use this document for resume bullets, LinkedIn skills, and interview talking points.

---

## Languages

| Skill | Used for |
|-------|----------|
| **JavaScript (ES6+)** | Frontend app, blockchain engine, crypto, workers |
| **Python 3** | Django REST API, server-side blockchain logic |
| **HTML5 / CSS3** | UI structure, responsive layout, print styles |
| **SQL** | SQLite (Django ORM / dev database) |
| **JSON** | Chain state, wallet backup, API payloads |

---

## Frontend

| Skill | Details |
|-------|---------|
| **React 18** | Component-based UI, hooks, context |
| **React Context API** | Global blockchain/wallet/mempool state (`BlockchainContext`) |
| **Create React App (react-scripts 5)** | Build tooling, dev server, production bundles |
| **SPA architecture** | Multi-view dashboard (Dashboard, Seal, Verify, Transfer, Mempool, Blocks, Wallet, Settings) |
| **Responsive CSS** | Sidebar layout, data tables, mobile breakpoints |
| **Web Workers** | Background proof-of-work mining (`mining.worker.js`) |
| **localStorage** | Chain persistence, wallet keys, seal registry, settings |
| **Client-side file handling** | `FileReader`, `ArrayBuffer`, chunked SHA-256 hashing |
| **Accessibility basics** | Semantic HTML, `aria-label`, form labels, `role="status"` |

---

## Backend

| Skill | Details |
|-------|---------|
| **Django 4.2** | REST-style API endpoints for blockchain operations |
| **Django URL routing** | `get_chain`, `mine_block`, `add_transaction`, `is_valid`, `connect_node`, `replace_chain` |
| **django-cors-headers** | Cross-origin API access for frontend integration |
| **Gunicorn** | WSGI production server (`Procfile`) |
| **WhiteNoise** | Static file serving in production |
| **SQLite** | Development database |
| **HTTP / REST** | JSON request/response, GET/POST endpoints |
| **CSRF handling** | `@csrf_exempt` for JSON API endpoints |

---

## Blockchain & Cryptography

| Skill | Details |
|-------|---------|
| **Proof of Work (PoW)** | SHA-256 mining with configurable difficulty target |
| **SHA-256 hashing** | Blocks, transactions, files, address derivation |
| **Web Crypto API** | `crypto.subtle.digest`, `generateKey`, `sign`, `verify` |
| **Ed25519 digital signatures** | Wallet keypairs, signed transactions |
| **Merkle trees** | Per-block merkle root computation |
| **Merkle inclusion proofs** | Generate and verify tx inclusion in a block |
| **Genesis block** | Chain initialization |
| **Chain validation** | Linked hashes, PoW, merkle root integrity |
| **Mempool** | Pending transaction queue before block confirmation |
| **Account-model ledger** | Balance calculation from transaction history |
| **Transaction fees** | Network fees paid to block producer |
| **Coinbase / network rewards** | Mining reward transactions |
| **Document sealing** | Proof-of-existence via on-chain document hash |
| **Certificate IDs** | Public verifiable seal identifiers |
| **Longest-chain rule** | Node sync / chain replacement (Django backend) |
| **Hash rate telemetry** | Mining performance metrics during PoW |
| **Confirmation counting** | Blocks depth from chain tip |

---

## Software Architecture & Patterns

| Skill | Details |
|-------|---------|
| **Separation of concerns** | `lib/` (protocol), `context/` (state), `components/` (UI), `views/` (screens) |
| **Custom hooks** | `useBlockchain()` for shared application state |
| **Layered architecture** | Presentation → context → domain logic → storage |
| **Modular libraries** | `blockchain.js`, `crypto.js`, `merkle.js`, `verification.js`, `analytics.js`, `files.js`, `format.js`, `storage.js` |
| **Progress callbacks** | Non-blocking PoW with UI progress updates |
| **Graceful degradation** | Worker mining with main-thread fallback |
| **Data export/import** | JSON wallet + chain backup with integrity checks |
| **Versioned storage keys** | Schema migration across app versions |
| **Single-page view routing** | View state without React Router |

---

## DevOps, CI/CD & Deployment

| Skill | Details |
|-------|---------|
| **Git / GitHub** | Version control, repository hosting |
| **GitHub Actions** | CI/CD pipeline (build + deploy on push) |
| **GitHub Pages** | Static frontend hosting |
| **gh-pages** | Manual deployment CLI |
| **npm / package.json** | Dependency management, scripts |
| **Production builds** | `npm run build`, optimized bundles |
| **Environment variables** | `PUBLIC_URL`, `REACT_APP_*` patterns |
| **Procfile** | Heroku/Railway-style process definition |
| **Concurrency controls** | GitHub Actions deploy concurrency groups |

---

## Testing

| Skill | Details |
|-------|---------|
| **Jest** | Unit/integration test runner (via CRA) |
| **React Testing Library** | Component rendering tests |
| **@testing-library/jest-dom** | DOM assertion matchers |
| **Test environment polyfills** | Web Crypto, `TextEncoder`, Worker stubs in `setupTests.js` |
| **CI test execution** | `CI=true npm test` |

---

## Tools & Platforms

| Tool | Purpose |
|------|---------|
| **Node.js 20** | Frontend toolchain, CI builds |
| **npm** | Package manager |
| **ESLint** | Linting (react-app config) |
| **Babel** | JS transpilation (via CRA) |
| **pip / requirements.txt** | Python dependency management |
| **VS Code / Cursor** | IDE |

---

## Domain & Product Concepts

| Concept | Implemented in project |
|---------|------------------------|
| **Block explorer** | Paginated blocks, header details, tx tables |
| **Wallet / account management** | Address, balance, transaction history |
| **Address book** | Saved recipient contacts |
| **Transfer builder** | Amount, fee, memo, validation |
| **Network dashboard** | Chain height, supply, block time, integrity status |
| **Global search** | Blocks, transactions, addresses |
| **Proof-of-existence / notarization** | Document hash sealing + certificates |
| **Public verification** | Independent audit of seals (chain, sig, merkle) |
| **Printable certificates** | CSS print layout for seal proof |
| **Privacy-preserving hashing** | Client-side file hash (file stays local) |

---





- Developed a full-stack **blockchain web application** with **proof-of-work consensus**, **Ed25519-signed transactions**, and a **merkle-tree-based** block structure using **React 18** and the **Web Crypto API**.

- Implemented **document sealing (proof-of-existence)** with **client-side SHA-256 hashing**, on-chain anchoring, **merkle inclusion proofs**, and a **public verification center** with multi-step integrity checks.

- Built a production-style **blockchain explorer** featuring mempool management, paginated block inspection, wallet analytics, global search, and real-time **PoW mining telemetry** (hash rate, nonce attempts).

- Engineered **non-blocking proof-of-work** using **Web Workers** to keep the UI responsive during block production, with automatic main-thread fallback.

- Designed a **modular ledger architecture** separating protocol logic, cryptographic primitives, analytics, persistence, and UI layers using **React Context** and custom hooks.

- Created a **Django REST API** with endpoints for chain sync, mining, transactions, and node networking; configured **Gunicorn**, **WhiteNoise**, and **CORS** for deployment.

- Set up **CI/CD with GitHub Actions** to build and deploy the React frontend to **GitHub Pages** on every push to `main`.

- Wrote **Jest + React Testing Library** tests with Web Crypto polyfills for CI-compatible component and integration testing.

---



> Built SudoCoin, a blockchain node and explorer with PoW mining, Ed25519 wallets, document sealing, merkle proofs, and public verification — React 18, Web Crypto API, Django, GitHub Actions.

---


**Languages:** JavaScript, Python, HTML, CSS, SQL, JSON  

**Frontend:** React, React Hooks, React Context API, SPA, Responsive Web Design, Web Workers, localStorage, Create React App  

**Backend:** Django, REST APIs, Gunicorn, SQLite, CORS  

**Blockchain & Security:** Proof of Work, SHA-256, Ed25519, Merkle Trees, Digital Signatures, Chain Validation, Mempool, Proof-of-Existence, Wallet Management  

**DevOps:** Git, GitHub, GitHub Actions, GitHub Pages, CI/CD, npm  

**Testing:** Jest, React Testing Library  

**Concepts:** Block Explorer, Cryptography, Distributed Ledger, Transaction Fees, Data Integrity, Client-Side Security  

---

## File Map (for interviews)

| Area | Key files |
|------|-----------|
| Blockchain protocol | `frontend/src/lib/blockchain.js` |
| Cryptography | `frontend/src/lib/crypto.js` |
| Merkle proofs | `frontend/src/lib/merkle.js` |
| Document verification | `frontend/src/lib/verification.js` |
| File hashing | `frontend/src/lib/files.js` |
| Chain analytics | `frontend/src/lib/analytics.js` |
| App state | `frontend/src/context/BlockchainContext.js` |
| Mining worker | `frontend/public/mining.worker.js` |
| Django API | `blockchain/views.py`, `PyChain/urls.py` |
| CI/CD | `.github/workflows/deploy.yml` |

---

*Last updated: June 2026 — SudoCoin Protocol v4.0*


