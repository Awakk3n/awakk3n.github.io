# PART 14: TECHNICAL FOUNDATIONS FOR PMs

You don't need to write production code to be a great PM. But you do need genuine technical fluency. Without it: you can't have substantive conversations with engineers; you'll miss the trade-offs that matter; you'll make commitments you can't keep; engineers will lose respect for you.

This chapter teaches the technical foundation a PM needs in 2026. It's deep enough that an engineer will respect you, broad enough to cover the ground you'll encounter daily.

## 14.1 Why Technical Fluency Matters

Three specific reasons technical fluency pays off:

**1. Better trade-off decisions.**
"Can we add this feature?" requires knowing roughly how complex it is, what existing systems it touches, what the maintenance cost will be. Without fluency, you make commitments engineers privately mock.

**2. Better communication with engineers.**
When an engineer says "this requires a schema migration" or "the API is rate-limited," you should understand at the conceptual level what they mean. Otherwise, conversations slow.

**3. Better product decisions about technical-flavored features.**
Performance, reliability, security, scalability — these aren't just engineering concerns. They affect users. PMs who don't understand them ship products that fail at scale.

### The Bar by Company Type

The technical bar varies:
- **B2B infra companies (Stripe, Twilio, Snowflake, Databricks, Cloudflare):** Very high. PMs often have CS degrees and prior eng experience. You'll read API specs, understand distributed systems, sometimes write code.
- **Developer tools (GitHub, Vercel, Linear):** High. Similar to above.
- **Consumer tech (Meta, Google consumer, Pinterest, TikTok):** Medium-high. Need to reason about ML systems and scale.
- **B2B SaaS (Salesforce, HubSpot, Zoom):** Medium. APIs, integrations, security, compliance.
- **Consumer non-tech-first (FinTech, edtech, marketplaces):** Medium. Domain knowledge often more important than tech depth.

The bar is rising everywhere. AI-era PMs especially need depth.

## 14.2 How the Internet Works

Foundation level: how does any web request work?

### The Basic Flow

When you type `instagram.com` in your browser:

1. **DNS lookup.** Your computer asks DNS servers: "what's the IP address for instagram.com?" Returns something like `157.240.196.174`.
2. **TCP connection.** Your computer establishes a connection to that IP address on port 443 (HTTPS).
3. **TLS handshake.** Encryption is set up — your computer and Instagram's server agree on encryption keys.
4. **HTTP request.** Your computer sends `GET /` along with headers (cookies, user-agent, etc.).
5. **Server processing.** Instagram's servers receive the request, look up data, generate a response.
6. **HTTP response.** Server sends back HTML (and often JSON if API call), CSS, JavaScript, images.
7. **Browser rendering.** Browser parses the HTML, executes JavaScript, fetches additional resources, renders pixels.

### Key Concepts to Understand

**HTTP methods:**
- `GET` — read data ("show me users").
- `POST` — create data ("add a user").
- `PUT` / `PATCH` — update data.
- `DELETE` — remove data.

**Status codes:**
- `200 OK` — success.
- `301 / 302` — redirects.
- `400 Bad Request` — client sent bad data.
- `401 Unauthorized` — not authenticated.
- `403 Forbidden` — authenticated but not allowed.
- `404 Not Found` — resource doesn't exist.
- `500 Internal Server Error` — server crashed.
- `503 Service Unavailable` — server overloaded.

**Headers** — metadata about the request/response (auth tokens, content-type, caching directives).

**Cookies** — small bits of data the server stores in your browser; used for sessions, tracking.

### Why This Matters

When users say "the page is slow," PMs who understand the request flow can ask the right questions:
- Is DNS slow?
- Is the server slow to respond?
- Are we sending too much data?
- Is the browser slow to render?
- Is there a redirect chain?

Each of those has different solutions.

## 14.3 APIs Explained

APIs are how systems talk to each other. Most modern products consume and expose APIs.

### What an API Is

A contract between two systems: "if you send a request shaped like this, I'll respond shaped like that."

Example (Stripe's API):
```
POST /v1/charges
Authorization: Bearer sk_test_xxxxx
Content-Type: application/json

{
  "amount": 50000,
  "currency": "inr",
  "source": "tok_xxx",
  "description": "Order #1234"
}
```

Returns:
```
{
  "id": "ch_1234567",
  "status": "succeeded",
  "amount": 50000,
  ...
}
```

The API spec defines the request format, the response format, the authentication, and the error handling.

### REST APIs

The dominant API style. Built around resources (nouns) and HTTP methods.

```
GET    /users        → list users
GET    /users/123    → get user 123
POST   /users        → create user
PUT    /users/123    → update user 123
DELETE /users/123    → delete user 123
```

**Strengths:** Simple, ubiquitous, well-tooled.
**Weaknesses:** Multiple round trips for complex data; over-fetching; under-fetching.

### GraphQL

Alternative API style. Single endpoint; clients specify what they want.

```graphql
query {
  user(id: 123) {
    name
    email
    orders(last: 5) {
      id
      total
    }
  }
}
```

**Strengths:** Clients get exactly what they need; flexible; one endpoint.
**Weaknesses:** More server complexity; harder to cache; learning curve.

Used by Facebook, GitHub, Shopify, and others. PMs at companies using GraphQL should know the basics.

### Webhooks

Reverse APIs. Instead of you polling for changes, the system calls *you* when something happens.

```
You register a webhook URL with Stripe.
When a payment succeeds, Stripe POSTs to your URL with the event data.
```

Webhooks are critical for real-time integrations. Common pitfalls:
- **Reliability:** Webhooks can fail; design for retries.
- **Security:** Webhooks must be signed/verified to prevent spoofing.
- **Idempotency:** Same event might arrive twice; handle gracefully.

### gRPC

Modern RPC framework. Fast, strongly typed, used heavily for service-to-service in microservices.

PMs encounter gRPC mostly in B2B infrastructure contexts. Most product PMs don't need to go deep here.

### API Design — What PMs Should Know

When designing or reviewing an API:

**1. Resource hierarchy clear.** `/users/{id}/orders/{id}` is intuitive; `/getUserOrders?userId=X` less so.

**2. Naming consistent.** Pluralization (`/users` not `/user`), conventions on naming.

**3. Versioning.** APIs evolve; you need a strategy. `/v1/`, `/v2/` URLs is one approach.

**4. Pagination.** Lists must be paginated. Cursor-based or offset-based; cursor is generally better.

**5. Errors that mean something.** Not just `400`; explain what went wrong.

**6. Rate limits.** Document them; return clear errors when hit.

**7. Authentication.** API keys (simple), OAuth (for user-context APIs), JWT, mTLS (high-security).

**8. Idempotency.** A repeated request shouldn't double-charge a customer. Idempotency keys.

PMs at companies whose API is the product (Stripe, Twilio, Algolia) live in these decisions daily.

### API as Product

For developer-facing companies, the API is the product. PMs there think about:
- **Developer experience** (DX) at every step.
- **Documentation as a first-class deliverable.**
- **Onboarding flow** (signup → first API call in <5 min).
- **Error message quality.**
- **SDKs** in major languages.
- **Sandbox / test mode.**

Stripe is the canonical example of API-as-product done right.

## 14.4 Databases

How data is stored and queried. PMs benefit from foundational understanding.

### Two Major Categories

**Relational (SQL) databases.**
- Examples: Postgres, MySQL, SQLite, Snowflake, BigQuery.
- Data in tables (rows and columns) with strict schema.
- SQL for queries.
- Strong consistency, transactions, joins.
- Best for: structured data, financial transactions, business apps.

**NoSQL databases.**
- Document (MongoDB, DynamoDB, Firestore): JSON-like documents.
- Key-value (Redis): simple key→value lookups, in-memory.
- Wide-column (Cassandra): for massive scale, time-series.
- Graph (Neo4j): for connected data.
- Best for: specific workloads (caching, time-series, hierarchies, scale-out).

Most products use a mix: Postgres for primary data, Redis for caching, search engines (Elasticsearch) for text search.

### Schema and Indexing

**Schema:** The structure of your data. In SQL, you define tables with columns and types. Schema changes are expensive — adding a column to a 1B-row table can take hours.

**Indexes:** Pre-computed structures that make queries fast. Without an index on `users.email`, finding a user by email requires scanning every row. With an index, it's instant.

**Trade-off:** Indexes speed reads but slow writes. Adding too many indexes makes inserts/updates slow.

This explains why "just add a filter on this field" can take 2 weeks: it might require an index that affects write performance, schema changes that require migration, and so on. PMs who understand this don't make naive estimates.

### Transactions

A transaction is a group of operations that succeed or fail together.

```
BEGIN;
  UPDATE accounts SET balance = balance - 100 WHERE user_id = 1;
  UPDATE accounts SET balance = balance + 100 WHERE user_id = 2;
COMMIT;
```

Either both updates happen or neither. Critical for financial operations.

### ACID vs BASE

**ACID** (Atomicity, Consistency, Isolation, Durability) — the guarantees relational databases provide.

**BASE** (Basically Available, Soft state, Eventually consistent) — the relaxed guarantees of many NoSQL systems.

**Trade-off:** ACID systems are easier to reason about but harder to scale. BASE systems scale better but require careful design (you might read stale data).

For a payments system: ACID is essential. For a "likes" counter: eventual consistency is fine.

### When to Migrate Databases

PMs sometimes face "should we migrate from X to Y?" decisions. Migrations are expensive (months) and risky. Common drivers:

- Performance ceiling on current DB.
- Cost of current DB at scale.
- Specific features needed.
- Operational burden.

Most PMs should default to: avoid database migrations unless absolutely necessary; talk to senior engineers before considering.

## 14.5 System Architecture

How software systems are structured. PMs need conceptual fluency.

### Monolith vs Microservices

**Monolith:** One big codebase deployed as one unit.
- Pros: Simpler operations; easier debugging; faster development at small scale.
- Cons: Slower deploys at scale; one bug can take down everything; team scaling friction.

**Microservices:** Many small services, each independently deployed.
- Pros: Teams ship independently; failures isolated; tech-stack flexibility.
- Cons: Operational complexity; distributed systems issues (networking, consistency); harder debugging.

Most companies start with monolith and split into services as they grow. Premature microservices is one of the most common engineering mistakes.

### Common Architectural Components

**Load balancer.**
Distributes incoming requests across multiple servers. So one server doesn't get overwhelmed.

**CDN (Content Delivery Network).**
Caches static content (images, CSS, JS) at locations near users. Cloudflare, Fastly, Akamai. Speeds up content delivery globally.

**Cache.**
Memory-fast storage for frequently accessed data. Redis, Memcached. Reduces database load.

**Queue / message broker.**
For async work. Producer puts jobs on queue; consumer processes them. RabbitMQ, Kafka, AWS SQS.

**Search engine.**
Specialized for text search. Elasticsearch, Algolia, Meilisearch.

**Object storage.**
Files (images, videos, PDFs). S3, GCS, Azure Blob.

**Database.**
Primary data store. Postgres, MySQL, etc.

A typical web application:

```
[CDN] ← serves static content
   ↓
[Load Balancer]
   ↓
[Web Servers] ← run application code
   ↓ ↓ ↓
[Cache (Redis)]  [Database (Postgres)]  [Queue (Kafka)]  [Object storage (S3)]
                                                  ↓
                                          [Background workers]
```

### Mobile vs Web Architecture

**Web:** Code runs on browser; server provides data. Network round-trips affect everything.
- HTML / CSS / JavaScript on client.
- React, Vue, Svelte are popular UI frameworks.
- Rendering modes: client-side (CSR), server-side (SSR), static (SSG).

**Mobile:** Code runs as native app; client has more state.
- iOS: Swift / SwiftUI.
- Android: Kotlin / Jetpack Compose.
- Cross-platform: React Native, Flutter — write once, run on both.

Mobile development cycles are slower because:
- App store review (1-2 days at minimum).
- Users may not update; you support old versions.
- Testing across many devices.

### Async vs Sync

**Sync:** Caller waits for response. Simple. Slow if anything takes time.
**Async:** Caller submits request and continues; response comes later (callback, promise, queue).

For user-facing operations: short ones sync, long ones async.

Example: User uploads a photo. The upload itself can be sync (user sees progress). Image processing (resizing, ML tagging) happens async — user gets notification when done.

PMs designing flows should think: which operations need to be fast (sync)? Which can be async without user noticing? Which are async but need clear user communication?

## 14.6 Cloud Basics

Most modern infrastructure runs on cloud providers. PMs should know the basics.

### The Big Three

- **AWS (Amazon Web Services):** Largest, most mature.
- **GCP (Google Cloud):** Strong for data and ML.
- **Azure (Microsoft):** Strong in enterprise.

### Common Services

- **Compute:** EC2 (AWS), Compute Engine (GCP), VMs (Azure). Virtual machines.
- **Container orchestration:** ECS / EKS (AWS), GKE (GCP), AKS (Azure). Run containers (Docker, Kubernetes).
- **Serverless:** Lambda (AWS), Cloud Functions (GCP), Azure Functions. Code that runs in response to events.
- **Storage:** S3 / GCS / Blob.
- **Databases:** RDS, BigQuery, Cosmos DB.
- **CDN:** CloudFront, Cloud CDN.
- **AI/ML:** Bedrock (AWS), Vertex AI (GCP), Azure OpenAI.

### What PMs Need to Know

- Cloud spend can be 10-30% of revenue for some companies. Optimization matters.
- Multi-cloud is sometimes strategic (avoid lock-in) but expensive operationally.
- Specific compliance and data residency requirements (e.g., data must stay in India for some financial products).
- The shift from on-prem to cloud is mostly complete; the next shift is "edge" (compute closer to users).

## 14.7 The Deployment Pipeline

How code goes from a developer's laptop to production users.

### Stages

1. **Code review.** Engineer submits a Pull Request (PR); colleagues review and approve.
2. **CI (Continuous Integration).** Automated tests run on the PR. Code is merged only if tests pass.
3. **Staging.** Code deployed to a staging environment that mirrors production. QA happens here.
4. **Production deploy.** Code rolls out to production users. Often gradually (1% → 10% → 100%).
5. **Monitoring.** Errors, latency, usage tracked. Issues trigger alerts.

### Modern Deployment Practices

- **Continuous Deployment (CD):** Code is auto-deployed to production after passing tests. Many web companies do this multiple times a day.
- **Feature flags:** Decouple "deployed code" from "active feature." Code can be in production but turned off until ready.
- **Canary deployments:** Roll out to a small % first, monitor, then expand.
- **Blue-green deployments:** Run two production environments; switch traffic once new version is verified.

PMs benefit from understanding this because:
- **Speed of shipping.** Modern teams can deploy 50× a day.
- **Risk management.** Feature flags reduce launch risk dramatically.
- **Rollback.** When something breaks, fast rollback matters.

## 14.8 Performance and Scalability

How fast can your product respond, and how many users can it handle?

### Performance Concepts

**Latency:** Time for a single request to complete. Measured in milliseconds.

**Throughput:** How many requests per second the system can handle.

**P50 / P95 / P99:** Percentile latencies. P99 = 99% of requests are faster than this. The P99 is what bad-day users experience.

**Bandwidth:** How much data can move through a network per second.

**Doherty Threshold:** ~400ms perceived as "instant." Beyond, users feel friction.

### Scaling Strategies

**Vertical scaling:** Bigger machines. Easy; has limits.

**Horizontal scaling:** More machines. Requires the system to be designed for it (stateless services, distributed databases).

**Caching:** Faster than computing. Cache as much as possible; invalidate carefully.

**Async processing:** Move slow work off the request path. User clicks; you respond fast; actual work happens in background.

**CDN / edge:** Push content closer to users. India users hitting a US server have ~250ms baseline latency before any compute.

### What Breaks at Scale

A common pattern: products work great at 10K users, struggle at 100K, completely break at 1M. Common breaking points:

- **Database overload:** Queries that work for small datasets become unbearably slow.
- **Single points of failure:** Components that work alone fail when traffic 10×s.
- **Cascading failures:** Slow downstream service slows everything; cascades.
- **Memory leaks** that accumulate over hours and crash production.

PMs should celebrate engineering investments in scale-out infrastructure even when they "look like" they don't add user value. They prevent painful crashes and slow times that *do* affect users.

## 14.9 Reliability — Uptime, SLAs, Error Budgets

Reliability is a feature. Users notice when products break.

### Uptime

Measured as a percentage. Common targets:
- 99% uptime = 3.65 days/year of downtime.
- 99.9% uptime = 8.76 hours/year.
- 99.99% uptime = 52.6 minutes/year.
- 99.999% uptime = 5.26 minutes/year.

Each "9" added is roughly 10× more expensive in engineering and infrastructure investment.

### SLAs (Service Level Agreements)

Promises made to customers about uptime, latency, support response. B2B contracts often include these. PMs:
- Define what's promised.
- Track whether you're meeting it.
- Negotiate exceptions for legitimate reasons (planned maintenance, force majeure).

### Error Budgets

Google's SRE framework: if you commit to 99.9% uptime, you have a budget of 0.1% for failures (~8.76 hours/year). When you've exhausted the budget, you must focus on stability over features.

This creates healthy tension between PM (wants features) and SRE/eng (wants stability). PMs respecting error budgets is a sign of maturity.

### Designing for Reliability

- **Redundancy.** Multiple servers, multiple data centers.
- **Graceful degradation.** When a component fails, the rest still works (maybe with reduced functionality).
- **Health checks and auto-recovery.** Failing components are restarted automatically.
- **Monitoring and alerting.** Detect issues fast.
- **Postmortems.** When things break, learn structurally.

## 14.10 Security Basics for PMs

Security is a feature users assume; its absence is catastrophic.

### Core Concepts

**Authentication.** Verifying who someone is. Passwords, magic links, OAuth, biometrics.

**Authorization.** Verifying what they're allowed to do. Roles, permissions.

**Encryption at rest.** Data stored encrypted (databases, backups).

**Encryption in transit.** Data encrypted when moving over network (TLS / HTTPS).

**MFA (Multi-Factor Authentication).** Multiple proofs of identity (password + phone code).

**Audit logs.** Records of who did what when.

### OWASP Top 10

The most common security vulnerabilities. Every PM should know these conceptually:

1. **Broken access control.** Users accessing things they shouldn't.
2. **Cryptographic failures.** Sensitive data exposed.
3. **Injection** (SQL injection, command injection). Untrusted input used in queries.
4. **Insecure design.** Architectural mistakes.
5. **Security misconfiguration.** Default passwords, exposed admin panels.
6. **Vulnerable components.** Old libraries with known issues.
7. **Authentication failures.** Weak passwords, session hijacking.
8. **Software / data integrity failures.**
9. **Logging / monitoring failures.** Can't detect attacks.
10. **Server-side request forgery (SSRF).**

PMs don't fix these; engineers do. PMs ensure security work is prioritized.

### When to Bring Security In

Always. Especially:
- Any new authentication / authorization design.
- Any feature handling sensitive data (PII, payments, health, financial).
- Any third-party integration.
- Any new data collection.

Late security review is the #2 cause of preventable launch delays (after legal). Bring them in at PRD stage.

## 14.11 Privacy and Data Handling

Increasingly regulated. PMs need real fluency.

### Major Regulations

**GDPR (EU):** Comprehensive. Users have rights to access, delete, port their data. Heavy fines (up to 4% of global revenue).

**CCPA / CPRA (California):** Similar to GDPR. Right to know, right to delete, right to opt out of sale.

**India DPDP Act (2023):** India's privacy law. Came into effect. Consent-based; data fiduciaries (companies) have obligations. Penalties up to ₹250 Cr.

**HIPAA (US health):** For health data.

**PCI DSS:** For payment data.

### Privacy Principles

**Purpose limitation.** Use data only for the purposes you collected it for.

**Data minimization.** Collect only what you need.

**Storage limitation.** Don't keep data forever.

**User rights.** Users can access, correct, delete, port their data.

**Consent.** Often required, especially for sensitive data and in regulated regions.

### Privacy by Design

Build privacy in from the start, not retrofit:
- Default to minimum data collection.
- Clear in-product privacy controls.
- Automatic data deletion after retention period.
- Anonymization / pseudonymization where possible.
- Privacy review as part of PRD process.

PMs at companies handling personal data should treat privacy as a product feature, not a compliance burden. Users increasingly value it; brands lose trust when breached.

## 14.12 Mobile Platforms — iOS and Android

Most consumer products are mobile-first. PMs need platform fluency.

### iOS Specifics

- **Distribution:** Apple App Store. Strict review (1-2 days). Apple takes 30% (15% for small developers).
- **Languages:** Swift (modern), Objective-C (legacy).
- **UI framework:** SwiftUI (modern), UIKit (mature).
- **Strengths:** Consistent hardware, predictable performance, design language.
- **Constraints:** Strict guidelines; no sideloading (mostly); App Store rejection risk.

### Android Specifics

- **Distribution:** Google Play Store, plus alternative stores (Samsung Galaxy Store, Huawei AppGallery, etc.). Less strict review; sideloading allowed.
- **Languages:** Kotlin (modern), Java (legacy).
- **UI framework:** Jetpack Compose (modern), XML layouts (mature).
- **Strengths:** Massive market in India and emerging markets; flexibility.
- **Constraints:** Device fragmentation (thousands of phones); diverse OS versions; performance variance.

### Cross-Platform

- **React Native:** JavaScript / React. Used by Meta, Shopify, Discord. Decent for most products; not for graphic-heavy.
- **Flutter:** Google's framework, Dart language. Strong UI; growing adoption.
- **Native:** Best performance and platform integration. Most large consumer apps.

Choose based on team skills, performance needs, and platform features needed.

### Indian Context — Critical

For Indian users specifically:
- **Massive Android dominance** (~95%).
- **Low-end devices common** — design for 2GB RAM, 32GB storage.
- **App size matters** — large apps don't get installed; users uninstall to save space.
- **Connectivity variable** — design for 3G, intermittent connectivity.
- **Background data savings** — let users control video quality.
- **Update reluctance** — users don't update apps; support old versions longer.

PMs for India who don't account for these realities ship products that fail in actual use.

## 14.13 Web Platforms

Web is still vast; PMs working on web products need basics.

### Browsers and Standards

- **Chrome dominant** (~65% globally). Safari (iOS), Firefox, Edge make up the rest.
- **Web standards:** HTML, CSS, JavaScript. Standardized but with minor browser differences.
- **Modern JavaScript ecosystem:** React, Vue, Angular, Svelte for frameworks. Webpack/Vite for builds.

### Progressive Web Apps (PWAs)

Web apps that behave like native apps:
- Install to home screen.
- Work offline.
- Push notifications.
- Background sync.

Used heavily in markets where native app size is a problem (India). Examples: Twitter Lite, Pinterest PWA, OLA Lite.

### Server-Side Rendering vs Client-Side

- **SSR:** Server generates HTML. Faster first paint. Better SEO.
- **CSR:** Client (browser) renders. Snappier interactions after load. Worse first-load.
- **SSG (Static Site Generation):** HTML pre-generated. Fastest. Good for content sites.

Modern frameworks (Next.js, Remix) blur these lines.

## 14.14 Tech Debt — What It Is, When to Invest

Technical debt is the accumulated cost of choosing easy short-term solutions over robust long-term ones.

### Why Tech Debt Happens

- **Speed pressure.** Ship now, fix later.
- **Learning over time.** What seemed right then is wrong now.
- **Scaling pressure.** Code that worked at 10K users breaks at 1M.
- **Departed engineers.** Knowledge leaves with people.
- **Library updates.** Dependencies become outdated.

### The Cost of Tech Debt

- **Slower development.** New features take longer to build.
- **More bugs.** Brittle code breaks in unexpected ways.
- **Engineer turnover.** Talented engineers won't work in messy codebases.
- **Reliability problems.** Systems fail more often.

### When to Invest in Paying Down

- When a workflow is slowed by 50%+ due to debt.
- When debt blocks specific feature work you want to do.
- When recruiting is hurting because of code quality.
- When reliability is impacted.

A common approach: dedicate ~20% of engineering capacity to ongoing tech debt and infrastructure. Don't let it build to a crisis.

PMs who treat tech debt as the engineering team's problem damage their relationship and the product. Fund it explicitly.

## 14.15 Build vs Buy vs Partner

Every component of your product is a build/buy/partner decision.

### Build

Make it yourself.
- **Pros:** Full control, no per-seat fees, fits your needs exactly.
- **Cons:** High initial cost, ongoing maintenance, distraction from core.

### Buy

License or subscribe to existing software.
- **Pros:** Fast time-to-market, vendor handles maintenance, vendor expertise.
- **Cons:** Per-seat fees grow with you, vendor lock-in, may not fit perfectly.

### Partner

Integrate with another company's product.
- **Pros:** Borrow their distribution and capability.
- **Cons:** Not your IP; partner can change terms.

### Decision Framework

Default: **buy**. Build only if:
- Core to your differentiation (this is what you're best at).
- Vendor solutions don't meet your needs.
- Custom requirements demand it.
- Cost-benefit analysis favors building (rare).

Common mistakes: building things that aren't core (vanity engineering), buying core capabilities (commoditizing yourself), partnering with companies that may compete with you.

### Worked Example: Should You Build Your Own Auth?

**Buy:** Auth0, Clerk, Stytch, Supabase Auth. Off-the-shelf, secure, scales.

**Build:** Custom auth implementation.

For 99% of products: **buy**. Auth is hard to do well; security mistakes are catastrophic; vendors do this for a living.

For products where auth is core (a security company, an identity provider): **build**.

The decision is rarely close. PMs who insist on building auth "to save money" usually regret it.

## 14.16 Estimating Engineering Effort (Without Being an Engineer)

You don't write code, but you'll be asked "how long will this take?" constantly.

### Don't Estimate; Ask

**Wrong:** "I think this takes 2 weeks."
**Right:** "What would it take to build this? What are the unknowns? What's the rough range?"

You're not an engineer; estimating without input is asking to be wrong.

### Build Pattern Recognition

Over time, you'll develop intuition:
- New screen with existing data: usually quick (1-2 weeks).
- New screen requiring new data: medium (2-4 weeks).
- Feature requiring schema migration: longer (4-8 weeks).
- Cross-team dependencies: significantly longer.
- Integration with external system: highly variable, often longer than expected.
- AI/ML: very high uncertainty.

### Calibrate by Watching

Track estimates vs actuals for your team. Most teams over-promise by 30-50% consistently. Adjust accordingly.

### What to Do When You Disagree

If an engineer estimates 8 weeks for what feels like 4:
- **Don't say "that's too long."** Defensive.
- **Ask: "What's driving the time? What if we cut [X]?"**
- **Discuss trade-offs.** Often there's a 2-week version and an 8-week version of the same feature.

The 2-week version may not be perfect, but it might be enough to test the hypothesis. The 8-week version may be over-engineered.

## 14.17 Talking to Engineers Confidently

Practical patterns for productive conversations.

### Show Curiosity, Not Authority

"Why does this approach take longer?" beats "Are you sure that's necessary?"

### Use Their Language

Learn 50 words: API, schema, migration, latency, caching, rate limit, dependency, refactor, deploy, feature flag, etc. Use them properly.

### Ask About Trade-offs

"What's the trade-off if we do X?" treats engineering as collaborative.

### Read Some Code

You don't need to write it; reading it builds intuition. Skim PRs, especially ones touching features you own.

### Bring Context

Engineers care about the user/business problem. Walk them through it. They'll often propose better technical solutions if they understand the problem.

### Defend Their Work to Others

When sales or executives ask "why is this taking so long?", you defend the team's reasoning. Engineers notice and remember.

## 14.18 Reading Technical Design Docs

Engineering design docs are how engineers communicate technical decisions. PMs should read them.

### What's Usually Inside

- **Context / problem.** Why this work?
- **Goals / non-goals.** What we're trying to achieve.
- **Proposed design.** How we'll build it.
- **Alternatives considered.** What else we considered and why we rejected.
- **Trade-offs.** Pros and cons.
- **Open questions.**
- **Timeline / milestones.**

### How PMs Should Engage

- **Read it.** Don't skim.
- **Comment on user-impact aspects.** Not architecture.
- **Push back on long timelines** with curiosity.
- **Ask about edge cases and failure modes.**
- **Approve clearly** when ready.

Avoid:
- Dictating technical choices.
- Skipping doc and finding out at standup.
- Approving without reading.

## 14.19 Common Technical Trade-offs PMs Face

A reference table of trade-offs you'll encounter:

| Trade-off | When to lean toward A | When to lean toward B |
|---|---|---|
| Build vs buy | Core to differentiation | Anything else |
| Monolith vs microservices | Small team, early product | Scaling team and complexity |
| SQL vs NoSQL | Structured data, transactions | Schema flexibility, scale |
| Sync vs async | Fast operations, user waiting | Slow operations, user can wait |
| Generic solution vs specific | Broad use cases | Specific high-value use case |
| Quality vs velocity | Mature product, high stakes | Pre-PMF, learning fast |
| Vendor lock-in vs flexibility | Mature, stable vendor | Strategic capability, switching risk |
| In-house infra vs cloud | Massive scale, specific needs | Almost everything else |
| Open-source vs commercial | Engineering capacity, customization needs | Speed to market |

## 14.20 AI and ML for PMs (Cross-reference Part 11)

A brief reference. Detailed treatment is in Part 11.

### What ML Engineers Actually Do

- Train models on data (training).
- Evaluate model quality (eval).
- Deploy models to production (inference).
- Monitor and update over time (MLOps).

### Vocabulary

- **Model.** The trained ML system.
- **Training data.** Data used to train.
- **Inference.** Running the model on new data.
- **Loss / accuracy / F1.** Metrics for model quality.
- **Hyperparameters.** Knobs you tune during training.
- **Embedding.** Vector representation of input.
- **Fine-tuning.** Specializing a base model for your task.
- **Prompt engineering.** Designing inputs to LLMs.

### What PMs Should Know

- Models are statistical; they're wrong sometimes.
- Eval is critical (and underdone).
- Cost / latency / quality trade-off.
- Training data quality matters more than model architecture often.
- Production ML is harder than research ML — drift, monitoring, retraining.

## 14.21 SQL — A PM Reference (Extension of Part 7)

(Part 7 covered SQL basics. This extends with more practical patterns.)

### Window Functions

For analyses across rows:

```sql
-- For each user, calculate their cumulative spend over time
SELECT
  user_id,
  transaction_date,
  amount,
  SUM(amount) OVER (PARTITION BY user_id ORDER BY transaction_date) AS cumulative_spend
FROM transactions
ORDER BY user_id, transaction_date;
```

```sql
-- For each user, find the time gap between transactions
SELECT
  user_id,
  transaction_date,
  transaction_date - LAG(transaction_date) OVER (PARTITION BY user_id ORDER BY transaction_date) AS days_since_prev
FROM transactions;
```

Window functions are powerful for retention, cohort, and time-series analyses.

### CTEs for Complex Queries

```sql
WITH 
  daily_active AS (
    SELECT user_id, DATE(event_time) AS day
    FROM events
    GROUP BY user_id, DATE(event_time)
  ),
  user_first_day AS (
    SELECT user_id, MIN(day) AS first_day
    FROM daily_active
    GROUP BY user_id
  )
SELECT
  ufd.first_day AS cohort_day,
  COUNT(DISTINCT ufd.user_id) AS cohort_size,
  COUNT(DISTINCT CASE WHEN da.day = ufd.first_day + 7 THEN da.user_id END) AS day_7_returned
FROM user_first_day ufd
LEFT JOIN daily_active da ON da.user_id = ufd.user_id
GROUP BY ufd.first_day
ORDER BY ufd.first_day;
```

### Common Patterns to Memorize

- Funnel conversion rates.
- Cohort retention.
- Time-to-event (signup to first purchase).
- Top-N per group (top 10 customers per region).
- Period-over-period growth.

These cover ~80% of PM analytical SQL.

## 14.22 Practice Exercises

### Exercise 14.1 — API Design Review
Given an API specification (search "Twitter API" or "Stripe API"), critique it: what's clear, what's confusing, what would you change?

### Exercise 14.2 — Architecture Diagram
For a hypothetical product (e.g., a mobile food delivery app), draw a system architecture: clients, servers, databases, external services. Identify potential bottlenecks.

### Exercise 14.3 — Build vs Buy Decision
For each of these, decide build/buy/partner with rationale:
- Authentication for a fintech app.
- AI-powered customer support for a SaaS product.
- Push notification system for a consumer app.
- Search engine for a marketplace.
- Analytics dashboard for end customers.

### Exercise 14.4 — Diagnose a Slow Page
A user reports the home page is slow to load. Walk through your diagnostic approach: what data would you ask for, what would you investigate first?

### Exercise 14.5 — Tech Debt Trade-off
Engineering is asking for 2 weeks to refactor the payments module. Write a memo to your VP arguing for or against, with reasoning.

### Exercise 14.6 — Privacy Review
For a hypothetical health-tracking app, list 10 privacy considerations from collection to deletion. What controls would users have?

### Exercise 14.7 — Mobile Platform Choice
For a new B2C fintech app launching in India, would you build native (separate iOS and Android), React Native, Flutter, or a PWA? Justify.

### Exercise 14.8 — Read a Real Design Doc
Find a public engineering design doc (search "engineering design doc" on GitHub or company blogs). Read it. Write a 1-page summary of the technical decisions and trade-offs.

## 14.23 References for Part 14

**Books:**
- *Designing Data-Intensive Applications* — Martin Kleppmann. The most-recommended technical book for PMs and engineers. Dense but invaluable. ([Amazon](https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321))
- *The Pragmatic Programmer* — Hunt & Thomas. Classic on engineering thinking. ([Amazon](https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052))
- *System Design Interview* — Alex Xu. Even non-interviewers benefit from these mental models. ([Amazon](https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF))
- *Designing Web APIs* — Jin et al. For PMs at API-led companies. ([Amazon](https://www.amazon.com/Designing-Web-APIs-Building-Developers/dp/1492026921))
- *The Phoenix Project* — Gene Kim. Novel about DevOps; reveals operational reality. ([Amazon](https://www.amazon.com/Phoenix-Project-DevOps-Helping-Business/dp/0988262592))
- *Site Reliability Engineering* — Google's free book. ([sre.google](https://sre.google/books/))
- *Web Application Architecture* — Microsoft / industry resources.

**Online resources:**
- ByteByteGo (Alex Xu's blog and YouTube). Visual system design. ([bytebytego.com](https://bytebytego.com))
- High Scalability blog. Real architecture stories. ([highscalability.com](http://highscalability.com))
- Patrick Collison's tech-aware curiosity. ([patrickcollison.com](https://patrickcollison.com))
- Stripe's API design philosophy posts. ([stripe.com/blog](https://stripe.com/blog))
- AWS / GCP / Azure architecture centers. Free reference architectures.
- OWASP. ([owasp.org](https://owasp.org))

**Tutorials and courses:**
- **Database:** Use the Mode SQL tutorial (Part 7). Then PostgreSQL official docs for depth.
- **APIs:** Build a small project consuming Stripe's or Twilio's API. Read their docs.
- **Cloud:** AWS Cloud Practitioner certification (free study materials).
- **Security:** OWASP top 10 walkthrough; Stanford's free CS155 lecture videos.
- **System design:** ByteByteGo + system design mock interviews.

**Tools to learn:**
- Postman / Insomnia for API testing.
- DBeaver / TablePlus for database exploration.
- Chrome DevTools for web debugging.
- Sentry / Datadog for monitoring (read-only access).
- GitHub for code reading.

**Practice:**
- Write SQL daily on Mode, DataLemur, StrataScratch.
- Read 1 engineering blog post per week (Stripe, Uber, Netflix engineering blogs).
- Skim 1 PR per week from your eng team.
- Try one cloud service free tier per month.

---

*End of Part 14. The next part is the soul of this book in many ways: how to come up with great product ideas and build them from zero.*


\newpage


