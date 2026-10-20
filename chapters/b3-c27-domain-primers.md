---
id: C27
title: Domain Primers
tier: 2
competencies: [strategy-gtm, product-sense, technical]
prerequisites: [C05, C18, C19]
defines_terms: [liquidity, sales-cycle, net-revenue-retention, chargeback, know-your-customer, trust-and-safety, prevalence, ad-auction, internal-platform]
uses_terms: [goodharts-law, inversion, two-sided-market, take-rate, cold-start-problem, multi-homing, network-effect, platform, developer-experience, disintermediation, abuse-case, precision-recall, threshold, churn, funnel, activation, retention, unit-economics, willingness-to-pay, value-metric, product-led-growth, customer-acquisition-cost, lifetime-value, guardrail-metric, base-rate, on-device-processing, service-level-objective, availability, api, tradeoff, dark-pattern, experiment, growth-loop, north-star-metric]
frameworks: [FW-C27-01, FW-C27-02, FW-C27-03, FW-C27-04, FW-C27-05, FW-C27-06, FW-C27-07]
case_studies: [CS-C27-01 (Illustrative), CS-C27-02 (Verified)]
cross_refs_out: [C02, C05, C09, C10, C13, C14, C17, C18, C19, C20, C21, C22, C23, C24, C25, C32]
cross_refs_pending: []
status: draft
---

# C27 — Domain Primers

## 1. What interviewers test

"Design a trust program for a marketplace with third-party sellers." "Authorization rates on card payments fell 1.2 points; how do you diagnose it?" "Who are the buyer, the user and the administrator of an enterprise product, and why does it matter?" "How does an ad auction pick an ad and set its price?" Interviewers often set a product question inside a domain (a marketplace, a payments product, enterprise software, a safety problem) and listen for whether you understand what makes that domain different: the actors, the constraints, the metrics, the risks and the tradeoffs. This chapter gives a primer for nine domains, each with what is distinctive, the concepts to know, the questions to expect and a metric tree, so that you can reason in any of them without starting from nothing.

**Where it shows up.** `Inferred`: product-sense, strategy and analytical rounds at Google, Meta, Microsoft, Amazon, Apple, Netflix, Stripe and others, where the prompt names a domain `[unverified: candidate-reported]`. On the job, a PM moving to a new domain faces the same question: what do I need to learn first?

**What is scored.** Whether you adapt your general method to the domain `Inferred`. Interviewers listen for the right actors and incentives; the domain's specific risks (fraud, abuse, regulation, long sales cycles, hardware that cannot be patched); metrics that fit the domain; and tradeoffs named in the domain's own terms.

Six observable behaviors:

1. You identify the actors in the domain and what each wants.
2. You name the constraint that makes the domain different (for example, trust, compliance, adversaries, long cycles or regulation).
3. You use the domain's own vocabulary correctly and sparingly.
4. You build a metric tree that fits the domain and has guardrails.
5. You state the tradeoff the domain forces and take a position.
6. You say what you would learn first if the domain were new to you.

**The failure this prevents.** Six patterns end domain answers: a consumer-app answer to an enterprise question, ignoring fraud and compliance in payments, treating safety as a content-filter problem, measuring a marketplace by sign-ups, copying a consumer growth tactic into a regulated domain, and jargon without understanding.

## 2. The concept from first principles

Each primer follows a shape (FW-C27-01): *what is distinctive; the actors and what they want; key concepts; metrics; typical tradeoffs and questions.* Domain terms are defined where first needed.

### C27.1 Marketplace: liquidity, take rate, trust

**What is distinctive.** A marketplace connects two sides, and its value depends on both being present and finding each other (C19 covered two-sided markets, take rates and cold start).

**Actors.** Buyers (demand), sellers or suppliers (supply), the platform, and often third parties (payments, delivery).

**Liquidity.** **Liquidity** is the likelihood that a participant on one side finds what they want from the other side quickly: for buyers, that a search ends in a satisfying purchase; for sellers, that their listing sells or is used. It is the central health measure. Measures `Inferred`: the share of searches that show at least one available, relevant result; search-to-purchase conversion; time to first match; and supplier utilization (the share of capacity that is booked).

**Concepts.** *Supply and demand balance:* adding supply without demand leaves sellers idle and drives them away; adding demand without supply produces empty searches and drives buyers away; the binding side changes by market and by time (Worked example 1). *Take rate:* the fee share (C19); too high pushes users to transact off-platform (**leakage**, the loss of transactions that move off the platform after matching, C19 disintermediation). *Trust:* ratings, verification, guarantees and dispute resolution matter more than features when strangers transact; a single bad incident can damage both sides. *Matching and search ranking:* ranking should favor transactions likely to succeed and to be good for both sides, not only those with the highest fee.

**Metric tree.** Gross merchandise value (GMV) = active buyers × orders per buyer × average order value; active buyers depend on new and returning buyers, which depend on search success and trust; supply depends on new sellers, active sellers and their utilization; revenue = GMV × take rate; guardrails: dispute rate, refund rate, seller churn and quality ratings.

**Typical tradeoffs and questions.** Quality versus quantity of supply; fees versus leakage; growth in one city versus depth in a few; speed of onboarding versus verification. "How would you grow supply in a new city?" "How would you reduce cancellations?" "Design trust for sellers you do not know."

> **Counterexample.** Asked how to grow a new local-services marketplace, a candidate proposes a seller sign-up drive and reports success as the number of sellers who joined. The interviewer asks what share of buyer requests get a reply within an hour. The candidate has measured supply and not liquidity: in the cities with the most new sellers, many requests still go unanswered because the sellers offer the wrong services. A better start: "I'd measure the share of requests that get a reply, find where they go unfilled, and add supply only there."

**When not to use a domain primer.** Do not force a domain label onto a problem that is general (a product-sense question about a to-do list needs the general method, not marketplace vocabulary), and do not recite jargon to signal expertise; use the domain's terms only where they change the answer.

### C27.2 Enterprise software: buyers versus users, sales cycles

**What is distinctive.** The person who pays is often not the person who uses the product, and the purchase involves many people, security review and contracts.

**Actors.** The *economic buyer* (holds the budget), the *champion* (wants it and advocates), the *end users*, the *administrators* (configure and secure it), *IT and security* (approve or block), *procurement and legal*, and the vendor's sales and customer-success teams. A *buying committee* (a common term in enterprise sales) is the group of such people whose agreement the deal needs.

**Concepts.** A **sales cycle** is the time from first contact to a signed contract, often months in enterprise sales, shaped by the buying committee, security review and budget cycles. *Land and expand:* start with a small team or product and grow within the customer. *Product-led entry* (C20.5) lets users adopt before the purchase and sales follow; many products blend both. *Requirements that decide deals but are not features:* single sign-on, role-based access, audit logs, data residency, compliance reports and certifications (such as a SOC 2 report, which an independent auditor issues against the AICPA Trust Services Criteria `[V: AICPA: SOC 2 is an attestation report by an independent CPA firm against the Trust Services Criteria (security, availability, processing integrity, confidentiality, privacy)]`), service-level agreements, admin controls and support. **Net revenue retention** (NRR; also net dollar retention) is the revenue from a cohort of customers a year later, including expansion and net of churn and downgrades, as a percentage of their revenue at the start; above 100% means existing customers grow even without new customers. *Customization versus product:* a feature built for one large customer can distort the roadmap (C32.7 on saying no).

**Metric tree.** Revenue = customers × annual contract value (ACV); new customers = pipeline × win rate; pipeline depends on lead sources and cycle time; expansion = seats and products per customer; retention = logo churn and NRR; product health = activation per account, seat utilization and weekly active users per account; guardrails: support load, security incidents, time to resolve.

**Typical tradeoffs and questions.** Buyer value versus user love; roadmap from strategy versus from customers; seat-based versus usage-based pricing (C20.3); product-led versus sales-led. "How would you win a large customer from a competitor?" "How would you prioritize between a feature for ten users and one for a customer paying a million?"

> **Counterexample.** Asked how to grow a new enterprise chat product, a candidate says: "Make it viral: add invitations and rewards so employees spread it." The interviewer asks who signs the contract and what the company's security team will require. The candidate has applied a consumer growth tactic and has not mentioned the buyer, the buying committee, security review or the sales cycle. A better start: "Usage can spread bottom-up, and the deal is signed by a buyer who needs single sign-on, access control, audit logs and compliance; so I'd design for both: easy team adoption and the requirements that let a large customer say yes."

### C27.3 Fintech: trust, compliance, payments

**What is distinctive.** Money movement is regulated, irreversible in practice, a target for fraud, and unforgiving of errors; trust and reliability are the product.

**Actors.** Consumers and merchants, banks (issuers and acquirers), card networks, regulators, and the fintech's partners.

**The payment flow (simplified).** A card payment is *authorized* (the issuer approves or declines), *captured* (the merchant claims the funds) and *settled* (money moves to the merchant, often days later), with possible *refunds* and *chargebacks*. A **chargeback** is a reversal of a card payment forced by the cardholder's bank after a dispute, usually accompanied by a fee, and a main cost of fraud. *Ledgers* record every movement and must balance exactly.

**Compliance.** **Know your customer** (KYC) is the process of verifying a customer's identity (and, for businesses, ownership and activity), required by financial regulation; related obligations include anti-money-laundering monitoring and sanctions screening `[V: RBI Master Direction on KYC (2016, amended 2023 and 2024), aligned with FATF standards]`. Compliance shapes the product: onboarding steps, limits, holds and reviews, and these steps cost conversion.

**Concepts.** *Authorization rate* (the share of payment attempts approved) is a core metric: small changes move revenue (C20; Worked example 3). *Fraud and false declines:* blocking fraud and approving good customers trade off (C23.3, C25). *Reliability:* an outage stops money movement; availability and idempotency matter (C21, C22). *Partners and rails:* the product depends on banks and networks whose rules change.

**Metric tree.** Net revenue = attempts × authorization rate × average amount × take rate − fraud and chargeback losses − processing cost; guardrails: fraud rate, chargeback rate, false-decline rate, time to settle, onboarding completion and compliance incident rate.

> **Regional Lens: India.** Payments in India are shaped by real-time bank-to-bank transfers through the Unified Payments Interface (UPI), which is widely used for consumer and small-merchant payments, with rules and standards set by the central bank and the payments body `[V: RBI and NPCI; merchant-fee FAQs of 15 September 2026]`. Recurring payments and subscriptions follow rules on mandates and customer authentication, payment aggregators are regulated (non-bank aggregators need RBI authorization), and storage of payment data is subject to localization requirements `[V: RBI payment aggregator directions, 2025; RBI storage directive FAQ]`; recurring-payment mandates follow the RBI's e-mandate framework, with authentication waived up to 15,000 rupees and up to 1,00,000 rupees for some categories `[V: RBI circular RBI/2023-24/88 of 12 December 2023; e-mandate framework of August 2019; the same limits are restated in RBI's 2026 consolidated directions on e-mandates (RBI/DPSS/2026-27/396), as reported by TaxGuru and not opened in full]`. Customer identity checks commonly use national digital identity and video verification within regulatory limits `[V: RBI Master Direction on KYC, as amended in 2023 and 2024]`, and personal data is governed by the Digital Personal Data Protection Act, in phases `[V: law-firm summaries of the DPDP Rules]`. For a PM the consequences are to design around bank-account rails and mandates, to treat regulatory change as a roadmap input, and to learn the local rules before copying a card-based design.

**Typical tradeoffs and questions.** Friction versus risk; speed of onboarding versus compliance; reliability versus new features; fees versus conversion. "Authorization rates fell; why?" "Design onboarding for a lending product." "How would you reduce chargebacks?"

### C27.4 Trust and safety: adversaries and tradeoffs

**What is distinctive.** **Trust and safety** is the work of protecting users and the platform from abuse, fraud, harassment, harmful content and manipulation, through policy, product design, detection and enforcement. Its defining feature is an *adversary who adapts* (C22.4 on abuse cases), and its defining difficulty is that every decision harms someone: a false removal silences a legitimate user; a missed violation harms others.

**Actors.** Users (including victims and abusers), reviewers (human moderators), policy teams, legal, engineers and researchers, regulators and the public.

**Concepts.** *Policy first:* write what is not allowed and why, before detection. *Layers* (C25.4): design that prevents abuse, automated detection, human review, user reports, appeals and enforcement. *Precision and recall* (C23.3): a stricter classifier catches more and wrongly removes more; thresholds are policy decisions with costs for each error. **Prevalence** is the estimated share of views (or content) that violate a policy, measured by sampling and review: it measures what users actually see, unlike counts of removals, which can rise because detection improved. *Other measures:* proactive detection rate (the share of violations found before users report), time to action, appeal rate and overturn rate (a signal of false removals), and repeat-offender rates. *Human review:* capacity, quality, reviewer wellbeing and consistency. *Appeals and transparency:* fairness requires a way to contest decisions. *Adaptation:* adversaries change tactics, so measure over time and test with red teams (C25.4).

**Metric tree.** Harm to users ≈ prevalence × exposure; prevalence falls through prevention, detection and enforcement; costs: false removals (appeal overturn rate), reviewer load and delay; guardrails: legitimate-user friction, regional and language coverage, and fairness across groups.

**Typical tradeoffs and questions.** Speed versus accuracy; automation versus human judgment; speech versus harm; global policy versus local norms; privacy versus detection. "Design the safety approach for a new live-video feature." "Reduce harassment without driving away good users."

### C27.5 Advertising and monetization: advertiser versus user tension, auction basics at PM depth

**What is distinctive.** The people who use the product are not the ones who pay for it; the advertiser pays and the user supplies attention, and the product must serve both without breaking trust.

**Actors.** Users, advertisers (and agencies), publishers or the platform, and measurement partners.

**Concepts.** *Ad load* (how many ads) trades revenue against experience and retention. An **ad auction** is the mechanism by which an advertising platform decides, each time an ad slot is available, which advertisers' ads to show and at what price, typically ranking advertisers by their bid combined with the predicted chance that the user will respond (and sometimes ad quality), and charging the winner the minimum needed to keep its position, a rule akin to a second-price auction (FW-C27-06; Worked example 5). Ranking by bid times predicted response rewards relevant ads, protects users from irrelevant ones and raises platform revenue per impression. *Pricing models:* cost per thousand impressions, per click, per action. *Targeting and measurement:* better targeting raises value; privacy rules and platform changes (such as limits on cross-app tracking) reduce signal and change advertiser results `[V: Apple App Tracking Transparency, iOS 14.5]`.

**Metric tree.** Revenue = impressions × revenue per thousand impressions (RPM); RPM = bids × predicted response × auction pressure (number of competing bidders); impressions = users × sessions × ad slots per session (ad load); advertiser value: return on spend and repeat spend; guardrails: user retention, satisfaction, complaints about ads, and ad quality (policy violations).

**Typical tradeoffs and questions.** Ad load versus retention; relevance versus privacy; short-term revenue versus advertiser trust. "How would you add ads to a product that has none?" "Explain how an auction chooses an ad."

### C27.6 Consumer devices and hardware-software products, including integrated ecosystems (primer)

**What is distinctive.** Hardware cannot be patched like software, cycles are long, costs are fixed once manufacturing starts, and the product spans hardware, software and services.

**Concepts.** *Bill of materials and margin:* each unit carries cost; price sets margin (C20.3). *Long lead times:* decisions about components are made a year or more before launch; supply chains and manufacturing capacity constrain volume. *Launch once:* a hardware defect becomes returns, recalls and reputation (C17.3 and the Note 7 case in C17); testing is more extensive and rollouts less reversible. *Hardware-software co-design:* the experience depends on both, and over-the-air updates can improve software but not parts. *Ecosystem effects:* devices that work better together, accessories, a store and services increase value and switching costs (C18, C19, C24.5 on on-device processing). *Services attach* (C20.3): the recurring contribution of services on a device base.

**Metric tree.** Revenue = units × price + services attach × services revenue; units = demand × supply; margin = price − unit cost − returns; guardrails: return and defect rates, support contacts, battery and reliability complaints, and privacy incidents; engagement: daily use, feature adoption and repeat purchase.

**Typical tradeoffs and questions.** Features versus cost and schedule; openness versus integration; premium margin versus volume. "Price a new device and its subscription." "A defect affects 0.5% of units; what do you do?"

### C27.7 Infrastructure and internal-platform products: customers are other teams (primer)

**What is distinctive.** An **internal platform** is a product (a service, tool or set of interfaces) whose customers are other teams within the same company, who often cannot easily go elsewhere and cannot be forced to be delighted. The same product principles apply, and the usual levers (price, marketing) do not.

**Concepts.** *Customers and adoption:* internal teams adopt a platform when it saves them time or risk; mandates produce compliance and resentment; adoption is the primary success measure. *Developer experience* (C19.3): time to first successful use, documentation, clarity of errors. *Reliability and service levels* (C21): internal customers depend on service-level objectives and notice outages. *Roadmap negotiation:* many teams ask for features, and the PM must prioritize by company-wide value and say no (C32.7). *Deprecation and migration:* removing old interfaces is costly for customers; plan, communicate and help migrate. *Platform versus product tension:* a platform serves many use cases and can become slow to change.

**Metric tree.** Value = adoption × impact per adopter; adoption = teams onboarded × share of workload moved; impact = time saved, incidents avoided or cost saved; guardrails: reliability (availability, latency), support load, customer satisfaction, and migration progress.

**Typical tradeoffs and questions.** Standardization versus flexibility; mandate versus persuasion; one platform versus several. "Adoption of an internal tool is low; what do you do?" "How would you prioritize requests from forty teams?"

### C27.8 Growth product management

**What is distinctive.** Growth PMs own the movement of users through acquisition, activation, retention, referral and revenue, using experiments (C14) and loops (C20.5).

**Concepts.** *The funnel and loops* (C05, C20.5): find the biggest drop, and look for loops that compound. *Activation:* the first moment of value is often the highest-leverage point (C05). *Experimentation at volume:* many small tests, guardrails on retention and trust, and care about novelty and interference (C14). *Ethics:* growth tactics that trick users (hidden costs, forced sharing, pre-checked boxes, difficult cancellation) are dark patterns (C10.10) and carry legal and trust costs. *Short term versus long term:* a tactic that raises sign-ups and lowers retention reduces value. *Unit economics* (C20.7): acquisition must pay back.

**Metric tree.** Weekly active users = new + resurrected + retained; new users = visitors × sign-up rate × activation; retained = prior users × retention; revenue = active users × conversion × revenue per paying user; guardrails: long-term retention, complaints and refunds, cost of acquisition.

**Typical tradeoffs and questions.** Growth versus quality of users; experiments versus coherence; incentives versus organic growth. "Weekly active users grew 12% but retention fell; why, and what do you do?"

### C27.9 Regulated domains: health and education notes

**What is distinctive.** In health and education, outcomes matter more than engagement, evidence standards are higher, privacy rules are stricter and mistakes harm vulnerable people. Cycles are slow and review is mandatory.

**Health notes.** *Safety and efficacy:* a product that diagnoses or treats may be a regulated medical device, with clinical validation and regulatory approval `[V: FDA, EU MDR and India's Medical Devices Rules 2017 regulate software with a medical purpose]`. *Privacy:* health data is sensitive and tightly regulated (for example, HIPAA in the United States, which applies to covered entities such as health plans, clearinghouses and providers, and to their business associates, but not to every health app; and data protection law elsewhere) `[V: HHS: HIPAA Privacy Rule and Security Rule apply to covered entities and business associates]`. *Clinical workflow:* products that disrupt clinicians' work fail; liability and who is responsible for a decision matter. *Outcomes:* improvement in health measures, adherence and safety events, not time in app. *AI in health* (C24, C25) raises evaluation, error cost and human-in-the-loop questions.

**Education notes.** *Learning outcomes:* evidence that learners learn, not completion or engagement. *Minors:* protections for children's data and advertising, with regional rules `[V: children's consent ages differ: GDPR Article 8 (16, lowerable to 13 by member states), US COPPA (under 13), India DPDP Act (under 18)]`. *Users and buyers differ:* learners, teachers, parents and institutions. *Equity and access:* connectivity and devices vary (C09).

**Common to both:** consult domain experts and ethics reviewers early; design evaluation around outcomes; expect slower launches and careful claims; avoid applying consumer growth tactics unchanged.

**Metric tree.** Value = reach × adherence × outcome improvement; guardrails: safety events, privacy incidents, equity of access, and the evidence quality behind claims.

### C27.10 Domain metric trees

A metric tree breaks a goal into drivers you can act on (C05). The nine trees above, in one view (FW-C27-07):

| Domain | Top metric | First-level drivers | Key guardrails |
|---|---|---|---|
| Marketplace | GMV (and revenue = GMV × take rate) | Active buyers × orders × order value; supply × utilization; liquidity | Disputes, refunds, seller churn, ratings |
| Enterprise software | Net revenue (ACV × customers; NRR) | Pipeline × win rate; expansion; retention | Support load, security incidents, time to resolve |
| Fintech and payments | Net revenue after losses | Attempts × authorization rate × amount × take rate; losses | Fraud, chargebacks, false declines, compliance incidents, uptime |
| Trust and safety | Harm to users (prevalence × exposure) | Prevention, detection, enforcement | Appeal overturn rate, legitimate-user friction, language and fairness coverage |
| Advertising | Revenue (impressions × RPM) | Auction pressure, predicted response, ad load | Retention, satisfaction, ad quality |
| Devices | Units × price + services | Demand, supply, attach | Returns, defects, support, privacy |
| Internal platform | Adoption × impact | Teams onboarded, workload moved | Reliability, support load, satisfaction |
| Growth | Weekly active users and revenue | New, resurrected, retained; conversion | Long-term retention, complaints, acquisition payback |
| Health and education | Outcome improvement × reach | Adherence, access | Safety events, privacy incidents, equity |

**Use.** In an interview, draw the tree for the named domain in under two minutes, say which driver you would investigate first, and name one guardrail.

## 3. Frameworks

Seven frameworks, set out below. The metric card (FW-C05-01), the two-sided market and governance tools (C19), the failure-mode table (FW-C22-06), the abuse-case pass (FW-C22-08), the threshold by cost (FW-C23-02), the pricing worksheet (FW-C20-03) and the unit-economics sheet (FW-C20-06) are reused, not repeated.

#### FW-C27-01 · The domain primer card · Original

- **Inputs:** a domain named in a prompt.
- **Outputs:** what is distinctive; the actors and what each wants; the key concepts and constraints; the metric tree with guardrails; the typical tradeoffs; and what you would learn first if the domain were new.
- **Assumptions:** the general method (users, problem, options, metrics, tradeoffs) still applies.
- **Tradeoffs:** a card gives orientation and not depth; follow the interviewer's lead.
- **Failure modes:** a consumer-app answer in an enterprise or regulated domain; jargon without understanding.
- **Worked example:** all five worked examples; C27.10.

| Item | Answer |
|---|---|
| What is distinctive | |
| Actors and wants | |
| Key concepts and constraints | |
| Metric tree and guardrails | |
| Typical tradeoffs | |
| Learn first | |

#### FW-C27-02 · The marketplace liquidity check · Original

- **Inputs:** a market (city or category) with searches, available supply, conversions and utilization.
- **Outputs:** the share of searches with at least one available result; conversion given results; the booking rate; supplier utilization; the binding side (supply or demand); the lever (add supply, add demand, improve matching); and the effect of the lever with a guardrail on utilization.
- **Assumptions:** metrics are measured per market and per week.
- **Tradeoffs:** adding supply without demand strands suppliers; adding demand without supply wastes acquisition.
- **Failure modes:** measuring sign-ups; averaging across markets.
- **Worked example:** Worked example 1.

Formula: **booking rate = share of searches with available results × conversion given results.**

#### FW-C27-03 · The enterprise buying map · Original

- **Inputs:** a target customer organization and a product.
- **Outputs:** the economic buyer, champion, users, administrators, IT and security, procurement and legal; each one's concern; the stages and length of the sales cycle; the non-feature requirements (single sign-on, access control, audit logs, compliance, service levels); and a plan to win each.
- **Assumptions:** the buyer and the user differ.
- **Tradeoffs:** serving the buyer's checklist can slow the product loved by users.
- **Failure modes:** ignoring security review; a single contact; one-off customization.
- **Worked example:** Worked example 2.

| Role | Concern | Evidence they need | Risk |
|---|---|---|---|

#### FW-C27-04 · The payments flow and risk map · Original

- **Inputs:** a payment product.
- **Outputs:** the flow (authorize, capture, settle, refund, dispute); where fraud, decline, error and delay occur; the metrics (authorization rate, fraud rate, chargeback rate, false-decline rate, time to settle); the compliance steps (identity checks, monitoring) and their conversion cost; the reliability needs; and a cost comparison of tighter and looser fraud screening.
- **Assumptions:** a false decline has a cost beyond the lost margin.
- **Tradeoffs:** friction versus risk; speed versus review.
- **Failure modes:** ignoring false declines; ignoring partner rules; counting only fraud.
- **Worked example:** Worked example 3.

#### FW-C27-05 · The trust and safety decision frame · Original

- **Inputs:** a harm and a surface.
- **Outputs:** the policy; the adversaries and how they adapt; the layers (prevent, detect, review, enforce, appeal); the prevalence estimate and target; precision and recall at the chosen threshold and the cost of each error; human-review capacity; the appeals and overturn measure; and fairness and coverage checks across languages and groups.
- **Assumptions:** prevalence is sampled and reviewed, not inferred from removals.
- **Tradeoffs:** a lower prevalence usually costs more false removals and more reviewers.
- **Failure modes:** measuring removals; one threshold for all harms; no appeals.
- **Worked example:** Worked example 4.

Formula: **prevalence = violating views ÷ total views.**

#### FW-C27-06 · The ad-auction worksheet · Original

- **Inputs:** bidders with bids and predicted response rates (and a quality factor if used).
- **Outputs:** each bidder's score (bid × predicted response); the ranking; the winner's price (the minimum bid that would keep its position); revenue per thousand impressions at bid and at price; and the effect of weighting by predicted response compared with ranking by bid alone.
- **Assumptions:** predicted response rates are reasonably calibrated (C23).
- **Tradeoffs:** weighting by quality protects users and may lower revenue in the short run.
- **Failure modes:** ranking by bid alone; ignoring ad load and retention.
- **Worked example:** Worked example 5.

Formula: **score = bid × predicted response; winner's price per click = next-highest score ÷ the winner's predicted response.**

#### FW-C27-07 · The domain metric tree · Original

- **Inputs:** a domain and a goal.
- **Outputs:** a tree with the top metric, first-level drivers, the driver to investigate first and the reason, and at least one guardrail; drawn in under two minutes.
- **Assumptions:** drivers can be measured and acted on (C05).
- **Tradeoffs:** a broad tree shows range; a deep one shows judgment.
- **Failure modes:** a tree with no guardrail; a tree of vanity metrics.
- **Worked example:** C27.10 and IQ-C27-09.

## 4. Answer architecture

### The "design or improve a product in domain X" answer, for 30 minutes

| Step | Minutes | What to produce |
|---|---|---|
| Domain orientation | 4 | The actors and what each wants; the constraint that makes the domain different |
| The user and problem | 5 | The segment and the problem, inside the domain's rules |
| Options and choice | 8 | Three options, one chosen with reasons that use the domain's terms |
| Metric tree and guardrails | 5 | The domain tree; the first driver to examine; guardrails |
| Risks and tradeoffs | 5 | The domain's tradeoff, fraud, abuse, compliance or adoption risks |
| Test and rollout | 3 | A staged plan and a decision rule |

**Pacing rules.** If you do not know the domain, say so in one sentence and ask two orienting questions (who pays, who is at risk); then proceed from the general method.

**How to say it.** "In a marketplace the binding constraint is usually one side; I'd first check what share of searches show an available result, because that tells me whether supply or demand is short."

**How to close.** "So I'd add supply in the market where only 40% of searches have an available listing, test it for four weeks, and watch supplier utilization so we don't strand hosts."

### Type: a marketplace question

Liquidity check, binding side, trust, take rate and leakage.

### Type: an enterprise product question

Buying map, buyer versus user, non-feature requirements, land and expand, NRR.

### Type: a payments or fintech question

Flow, authorization versus fraud, compliance, reliability, partner rules.

### Type: a safety or abuse question

Adversaries, layers, prevalence, thresholds with error costs, appeals.

### Type: advertising, devices, platforms, growth or regulated domains

The relevant primer: auction mechanics; hardware constraints; internal adoption; funnel and loops with guardrails; outcomes and evidence.

### Common interviewer interventions, and what to do

| Interviewer says | What it means | What to do |
|---|---|---|
| "How is this different from a consumer app?" | Domain awareness | Name the actors and the constraint |
| "Who is the customer?" | Buyer versus user | Separate buyer, user and administrator |
| "What if fraud rises?" | Risk tradeoff | Compare tighter and looser screening with costs |
| "How do you know it's working?" | Metrics | The tree, the first driver and a guardrail |
| "Won't bad actors adapt?" | Adversaries | Layers, monitoring, red teams |
| "What would you learn first?" | Humility | Two orienting questions and one data check |

## 5. Worked examples

All five examples are `Illustrative`: the markets, products and figures are invented (invented), and the arithmetic was computed. Companies are settings only.

### Worked example 1 — Which side of the marketplace is short? (Illustrative)

**The situation (FW-C27-02).** A home-sharing marketplace compares two cities for the week (invented):

| | City A | City B |
|---|---|---|
| Listings (hosts) | 400 | 150 |
| Searches | 3,000 | 2,500 |
| Share of searches with at least one available result | 85% | 40% |
| Conversion given a result | 4.7% | 3.75% |
| Booking rate (product of the last two rows) | 4.0% | 1.5% |
| Bookings | 120 | 37.5 |
| Bookings per host per week | 0.30 | 0.25 |

**Read it.** Conversion given a result is similar (4.7% and 3.75%): once a guest sees an available listing, they book at similar rates. The difference is availability: in City B, 60% of searches end with nothing available. So City B is supply-constrained, and City A is balanced. Host utilization in B (0.25 bookings a week) is close to A's (0.30), so hosts in B are not starved; there is unmet demand.

**The lever.** Add supply in B. Suppose adding 100 hosts raises availability from 40% to 70% and conversion stays at 3.75%: booking rate 0.70 × 0.0375 = 2.6%, bookings 2,500 × 0.02625 = 65.6 a week (+75%); utilization 65.6 ÷ 250 hosts = 0.26: still healthy. At a $120 average booking and a 12% take rate, weekly revenue rises from 37.5 × $120 × 0.12 = $540 to 65.6 × $120 × 0.12 = $945.

**The guardrail.** If the team added 400 hosts (550 in all) and availability rose only to 75%, bookings would be about 70 and utilization 0.13 bookings per host per week: half the current level, and hosts would likely leave. Adding supply beyond the demand it can serve strands hosts. So add in steps, check utilization after each, and watch quality (ratings, cancellations).

**What this shows.** Splitting the booking rate into availability and conversion found the binding side, and utilization set a limit on the fix.

### Worked example 2 — Enterprise: pipeline math and net revenue retention (Illustrative)

**Pipeline (FW-C27-03).** A sales-led product sells at an annual contract value (ACV) of $60,000, wins 25% of qualified opportunities, and has a nine-month sales cycle (invented). To close 10 deals, the team needs 10 ÷ 0.25 = 40 qualified opportunities, worth $600,000 in new annual contract value if all 10 close. Because the cycle is nine months, opportunities opened now close next year, so a shortfall in pipeline shows up in revenue nine months later: the PM watches the pipeline, win rate and cycle time, not only closed revenue.

**Net revenue retention.** A cohort of 100 customers paying $1,000,000 a year in total. Over the year: customers who leave take away $80,000; downgrades reduce revenue by $30,000; expansion (more seats and products) adds $210,000. NRR = (1,000,000 − 80,000 − 30,000 + 210,000) ÷ 1,000,000 = 110%. The cohort grew 10% with no new customers. Logo churn (the share of customers lost) is a separate measure: here 8% of revenue came from leaving customers, and a count of logos could differ.

**Land and expand.** A team lands with 20 seats at $12 per seat per month: $2,880 a year. If usage spreads to 200 seats, the account is $28,800 a year, ten times larger, with little sales effort if adoption is organic. This is how a product-led entry (C20.5) produces high NRR; it requires that the product be useful to the first team without a long implementation.

**Buyers and users.** The 20 users love the product; the economic buyer needs a security review, single sign-on and an audit log before approving 200 seats. If the roadmap ignores those, the deal stalls in the buying map (FW-C27-03) despite user love. The PM treats these requirements as product work with a deadline set by the sales cycle.

**What this shows.** Pipeline and cycle math showed why enterprise revenue lags, NRR showed growth without new logos, and the buying map showed that non-feature requirements decide deals.

### Worked example 3 — Fraud screening versus false declines (Illustrative)

**The situation (FW-C27-04) (invented).** A payments product processes 1,000,000 card payments in a period, average $80, with a 0.4% fraud rate (4,000 fraudulent). Each missed fraud costs $95 (the amount plus a $15 chargeback fee). The product's margin is 3% ($2.40 per payment). A false decline (a good payment wrongly blocked) loses the margin and some future value: suppose $6 of lost future contribution, so $8.40 per false decline (the $6 is an assumption).

**Two screening settings.**

| Setting | Fraud caught | Good payments wrongly declined | Missed fraud | Cost of missed fraud | Cost of false declines | Total |
|---|---|---|---|---|---|---|
| Tight | 70% | 1.5% (14,940) | 1,200 | $114,000 | $125,496 | $239,496 |
| Loose | 55% | 0.5% (4,980) | 1,800 | $171,000 | $41,832 | $212,832 |

With no screening the loss would be 4,000 × $95 = $380,000. Both settings help; the loose setting costs $26,664 less under these assumptions.

**What decides it.** The cost of a false decline. The tight setting declines 9,960 more good payments than the loose one and catches 600 more frauds (worth $57,000). The break-even cost per false decline is $57,000 ÷ 9,960 = $5.72: if a false decline costs more than that in total (margin plus lost future value), the loose setting is cheaper; if less, the tight one is. With only the $2.40 margin counted, the tight setting would win ($149,856 against $182,952). So an estimate of the lifetime effect of a false decline settles the policy, and it should be measured (a holdout that approves a sample of borderline payments gives the true fraud rate among them).

**Better design.** A single threshold wastes the middle: approve clear cases, block clear fraud, and add friction (a verification step) for the borderline band, which converts some false declines into approvals and some fraud into catches (C25.4 layers).

**What this shows.** A cost comparison with a break-even showed that the fraud policy turns on a number (the cost of a false decline) that many teams never measure.

### Worked example 4 — Prevalence and thresholds in trust and safety (Illustrative)

**The situation (FW-C27-05) (invented).** A video surface has 1,000,000 views a day. Sampling and review estimate that 0.15% of views are of content that violates a policy: 1,500 violating views a day (prevalence 0.15%).

**Setting A.** The detection system removes violating content with 70% recall and 90% precision. Violations removed: 0.70 × 1,500 = 1,050. Wrongly removed (false positives): 1,050 × (10 ÷ 90) = about 117. Remaining violating views: 450, so prevalence falls to 0.045%, a 70% reduction. Human review: about 1,167 flagged items a day; at 100 items per reviewer-day, about 12 reviewers.

**Setting B.** A stricter threshold: 85% recall and 80% precision. Violations removed: 0.85 × 1,500 = 1,275; wrongly removed: 1,275 × (20 ÷ 80) = about 319; remaining 225, so prevalence 0.0225%. Review load rises to about 1,594 flagged a day (about 16 reviewers).

**The tradeoff.** Moving from A to B halves the remaining violating views (450 to 225) and nearly triples wrongful removals (117 to 319), with 4 more reviewers. Whether that is right depends on the harm of each error. For a severe harm (child safety), B or stricter is justified, with appeals to correct errors; for a borderline category (a mild policy), A may be better. The threshold is a policy decision (C23.3), set per harm.

**What to measure alongside.** Prevalence by sampling (not removals, which rise when detection improves); the appeal and overturn rate (false removals); proactive detection rate; time to action; and coverage across languages and groups, since detection often works worse in some languages.

**Adversaries.** Abusers adapt (new wording, images), so recall measured today falls over time; refresh sampling monthly and red-team the detector.

**What this shows.** Prevalence gave an honest measure of harm, and the two settings made the tradeoff between harm remaining and false removals explicit and per harm.

### Worked example 5 — How an ad auction picks and prices an ad (Illustrative)

**The situation (FW-C27-06).** Three advertisers compete for one ad slot (invented). Each has a bid per click and a predicted click rate: A bids $2.00 with a predicted 1.0%; B bids $3.00 with 0.5%; C bids $1.50 with 1.2%.

**Scores.** Bid × predicted click rate (expected revenue per impression): A 0.0200; B 0.0150; C 0.0180. Ranking: A first, C second, B third. B has the highest bid and loses because users are unlikely to click its ad.

**The price.** The winner pays the least that would keep its position: A needs a score above C's 0.0180, so its price per click is 0.0180 ÷ 0.010 = $1.80 (not its $2.00 bid). Expected revenue per thousand impressions: at its price, 1,000 × 0.010 × $1.80 = $18.00 (at its bid it would be $20.00).

**Why weight by predicted response.** Ranking by bid alone would show B's ad: expected revenue per thousand impressions 1,000 × 0.005 × $3.00 = $15.00 (at its bid), lower than A's $18.00 at price, and the user would see a less relevant ad. Weighting by predicted response raises revenue, protects the user experience and rewards advertisers with relevant ads.

**Guardrails.** Predicted rates must be calibrated (C23): if the model overestimates an ad's rate, the platform loses revenue and shows poor ads. Watch ad load, retention and complaints, because more ads raise short-term revenue and can reduce return visits (C20.6). Privacy changes that reduce targeting signal lower predicted response and advertiser results.

**What this shows.** A three-bidder example explained that the auction ranks by expected value, prices at the next competitor's level and serves users and advertisers together.

## 6. Baseline, Strong, Standout

**Prompt:** "Authorization rates on your payments product fell by 1.2 points last week. How do you diagnose it?"

### Baseline answer

"I'd look at the data to find what changed, maybe a bug, and fix it. I'd also check with the banks."

*What is wrong:* no structure, no segmentation, no thought of fraud settings or partner rules, no estimate of impact.

### Strong answer

"First I'd size it: 1.2 points on, say, 500,000 weekly attempts of $50 at a 2.5% take rate is about $7,500 a week. Then segment: by issuer and card network, country, payment method, merchant, device, amount and time. Hypotheses: a release or configuration change on our side, a change in our fraud screening that declines more, an issuer or network issue, a change in merchant mix, or a partner outage. The cheapest check is the release and configuration log against the date, then whether the drop is concentrated in one issuer or one segment."

### Standout answer

Everything in the Strong answer, plus:

"I'd separate declines by who made them: our own fraud rules, the issuer, or a technical failure, since the fixes differ. If the drop is in our fraud declines, I'd check the threshold or a new rule and compare the cost of the lost approvals with the fraud avoided: on a million attempts, tight screening might decline 1.5% of good payments against 0.5% for a looser setting, and the break-even depends on what a false decline costs us. If one issuer is declining more, I'd contact them with transaction examples, and add retries or alternative routing for those payments. I'd check for a mix shift: a new merchant with riskier traffic can lower the aggregate rate with nothing broken. I'd set a guardrail so that a fix does not raise fraud or chargebacks, and I'd keep a holdout to measure the true fraud rate among declined borderline payments. Finally, I'd put an alert on authorization rate by issuer, so that the next drop is seen in hours."

### What moves an answer up a band

| From Baseline to Strong | From Strong to Standout |
|---|---|
| Sizes the impact and segments the data | Separates who declined (us, issuer, technical) |
| Lists hypotheses with a cheapest check | Compares fraud and false-decline costs; mix shift |
| Mentions release logs and partners | Guardrails, a holdout, alerts by segment |

## 7. Company lens

All claims describe what companies say publicly or what candidates commonly report, not insider knowledge. Products and interview formats change `[as of 2026-10]`.

> **Company lens: Google [as of 2026-10].** Google's businesses include advertising, a cloud platform sold to enterprises, devices and consumer services `Public` `[V: Alphabet Form 10-K for 2025]`. Candidates commonly report questions on ads, platforms and trust at scale `Inferred`. Practical consequence: be ready with the ad-auction basics, the platform adoption view and the safety tradeoffs.

> **Company lens: Meta [as of 2026-10].** Meta's products are mostly funded by advertising, and it has described changes to ad measurement after platform privacy changes `Public` `[V: Meta Form 10-K for 2025 (advertising and measurement changes)]`, and it is described as operating large trust and safety programs (not rechecked here) `Inferred`. Candidates commonly report questions on ads, safety and growth `Inferred`. Practical consequence: reason about advertiser and user tension, prevalence-based measurement of harm and growth with guardrails.

> **Company lens: Microsoft [as of 2026-10].** Microsoft sells enterprise software and cloud services alongside consumer products, and works with large buying organizations `Public` `[V: Microsoft FY2025 Form 10-K segments: Microsoft 365 Commercial and Intelligent Cloud alongside Windows, Surface, Xbox and search advertising; the point about large buying organizations is general and not in the filing]`. Candidates commonly report enterprise and platform questions `Inferred`. Practical consequence: map buyers, users and administrators, discuss security and compliance requirements and expansion within accounts.

> **Company lens: Amazon [as of 2026-10].** Amazon runs a large third-party marketplace `Public` `[V: European Commission decision]`, and is described as running a cloud platform, logistics, and programs against counterfeits and fraudulent sellers (not rechecked here) `Inferred`. Candidates commonly report marketplace trust, seller and platform questions `Inferred`. Practical consequence: use the liquidity check, seller verification and abuse layers, and platform adoption by builders.

> **Company lens: Apple [as of 2026-10].** Apple combines devices, software and services in an integrated ecosystem and has described privacy measures that affect advertising `Public` `[V: Apple privacy page on App Tracking Transparency (iOS 14.5, April 2021)]`. Candidates commonly report hardware-software, services and privacy questions `Inferred`. Practical consequence: reason about launch-once constraints, attach and on-device processing.

> **Company lens: Netflix [as of 2026-10].** Netflix is a subscription entertainment service with an ad-supported tier and large content investments `Public` `[V: Netflix ad tier launched 3 November 2022 (Netflix IR as reported)]`. Candidates commonly report questions on tiers, ads and growth `Inferred`. Practical consequence: connect tier design, ad economics (the auction view) and retention.

> **Company lens: Stripe [as of 2026-10].** Stripe provides payments and financial infrastructure for businesses, including fraud prevention and compliance tooling `Public` `[V: Stripe newsroom: Connect, Billing, Terminal, Radar, Capital, Corporate Card]`. Candidates report payments, risk and developer-platform questions `Inferred`. Practical consequence: know the payment flow, authorization versus fraud tradeoffs, compliance steps and reliability.

## 8. Common mistakes

| # | Mistake | How to detect it | Fix |
|---|---|---|---|
| 1 | A consumer answer to an enterprise question | Only the user is considered | Map buyer, user, administrator, security |
| 2 | Measuring a marketplace by sign-ups | "Sellers signed up" | Liquidity: availability, conversion, utilization |
| 3 | Adding supply without checking demand | Hosts idle, churn | Check utilization after each step |
| 4 | Ignoring compliance in fintech | Onboarding with no identity step | Name the required steps and their conversion cost |
| 5 | Counting only fraud | False declines absent | Compare both errors with costs |
| 6 | Measuring safety by removals | "We removed 2 million items" | Prevalence by sampling; appeals |
| 7 | One threshold for all harms | Same setting everywhere | Set by harm and error cost |
| 8 | Ranking ads by bid alone | The highest bidder always wins | Weight by predicted response |
| 9 | Forcing adoption of an internal platform | Compliance without value | Adoption by value; developer experience |
| 10 | Copying growth tactics into regulated domains | Engagement as the goal | Outcomes, evidence and privacy first |

## 9. Mental models applied

Four models, each tied to a decision in this chapter. [[inversion]] is from C02.

**Constraints define domains** (`MM-binding-constraint`). In each domain one constraint binds first: supply or demand in a marketplace, security review in enterprise sales, trust and compliance in payments, an adversary in safety. Find it before optimizing anything else.

**Error costs differ** (`MM-error-costs`). When a system can err two ways (fraud or false decline, over- or under-removal), the right threshold depends on the cost of each, not on accuracy (C23.3). Measure the cost you do not see.

**Goodhart's law** (`MM-goodhart`, see [[goodharts-law]], C02). Removals, sign-ups and engagement become targets and stop measuring what matters; prevalence, liquidity and outcomes are harder to game.

**Inversion** (`MM-inversion`, see [[inversion]], C02). To design for a domain with adversaries or risk, ask how it would fail: how a seller would cheat, how fraud would get through, how an abuser would adapt.

## Engineering, design and data-science perspectives

- **Engineering.** Payments, safety and platform work depend on reliability, latency and correctness (C21, C22); engineers will ask about failure modes, rollbacks and partner dependencies. Bring cost-of-error numbers and an incident plan.
- **Design and research.** In trust-heavy domains design carries the trust (clear errors, warnings, appeals, onboarding that explains verification); in enterprise it serves administrators as well as users. Research the actors beyond the primary user.
- **Data science.** Domain metrics need careful definition: prevalence by sampling, authorization rate by issuer, liquidity by market, NRR by cohort. Agree the definitions and the holdouts before the analysis.
- **Legal, policy, risk and compliance.** They define the requirements in payments, safety, health and education; bring them in at the problem stage and ask what the requirement is and how it can be met with the least friction.

## Checklist: before you answer inside a domain

1. Have I named the actors and what each wants?
2. Have I named the constraint that makes this domain different?
3. Have I used the domain's vocabulary correctly, and sparingly?
4. Have I drawn a metric tree with a first driver to investigate and a guardrail?
5. Have I stated the tradeoff the domain forces and taken a position?
6. Have I considered adversaries, fraud, compliance or adoption as the domain requires?
7. Do I have a staged test and a decision rule?
8. Have I said what I would learn first if the domain were new to me?

## 10. Case studies

#### CS-C27-01 · Four hundred new hosts and no new guests · Illustrative · Beginner

*Fictional composite. Every number is invented (invented).*

**Situation.** A home-sharing marketplace enters a mid-sized city. The team runs a host-recruitment campaign and signs up 400 hosts in two months, and the metric dashboard celebrates "hosts signed up."

**Constraints.** A fixed marketing budget; a goal set on supply sign-ups; few guests in the city and little brand awareness; a three-month window before the high season.

**Data.** After three months: 400 hosts listed, 1,800 weekly searches (from existing app users and small campaigns), 45% of searches show at least one available listing, conversion given a result is 3%, so the booking rate is 1.35% and bookings about 24 a week. Utilization is 24 ÷ 400 = 0.06 bookings per host per week. Host churn is 30% within three months, and surveyed hosts say "nobody books."

**Problem definition.** As an observable problem: "Supply was chosen as the goal and the target, while demand was the binding side, so hosts are idle and leaving."

**Analysis.** Applying the liquidity check (FW-C27-02): availability is 45% (not terrible), conversion given a result is 3% (comparable to mature cities), so the booking rate is low because there are few searches, not because results are missing. The binding side is demand (1,800 searches against 400 hosts, a low ratio); utilization of 0.06 is a fifth of a healthy 0.3. The metric (hosts signed up) rewarded the wrong thing and produced the host churn. Fixing it means demand: local awareness, guest promotions, partnerships with local events, and pausing host recruitment until utilization recovers.

**Options.**

| Option | Optimizes | Costs |
|---|---|---|
| A. Keep recruiting hosts to hit the supply target | The sign-up metric | More idle hosts; higher churn; reputational damage |
| B. Pause host recruitment; spend on guest demand and events; watch utilization and availability | Liquidity | The supply target is missed for a quarter |
| C. Withdraw from the city | Saves cost | Loses the opportunity |

**Tradeoffs.** B accepts a missed target for a healthier market; A makes the dashboard look good and hurts both sides.

**Decision.** Choose B. Change the goal metric to bookings per week and host utilization; pause host recruitment; focus on local demand (partnerships, a guest first-booking offer); set a rule: resume recruiting when utilization exceeds 0.2 bookings per host per week and availability falls below 60%.

**Outcome.** In this fictional scenario, after eight weeks searches rose to 4,500 a week, the booking rate to 2.4%, bookings to 108 a week, and utilization to 0.27; host churn fell to 12% in the next quarter (invented).

**Alternative outcomes.** If demand had not responded to the campaigns, the team would have limited the city to a narrow niche (a university area, an event venue) and tested whether depth in one area could create liquidity. The lesson: measure liquidity, find the binding side, and do not let a supply-side sign-up target decide what to do.

#### CS-C27-02 · Slack's S-1, 2019: bottom-up adoption and what the numbers show · Verified · Advanced

*Sources (types): Slack Technologies' registration statement on Form S-1 and its amendments, filed with the US Securities and Exchange Commission in 2019, read on the SEC site (primary); Slack's earnings releases for the third quarter of fiscal 2020 and the first quarters of fiscal 2021 and 2022, filed as exhibits, and its annual report for fiscal 2021 (primary). Figures that circulate in commentary (free-to-paid conversion rates, pricing per user) were not confirmed in the filings read and are not used. The analysis is the author's. Re-read in October 2026.*

**Situation.** In its 2019 registration statement Slack said it offered a self-service approach for both free and paid subscriptions that "capitalizes on strong word-of-mouth adoption" and combined it with direct sales efforts aimed at growing paid users inside larger organizations; it said that self-service users become leads for its salespeople and that free usage helps prospective paid customers see the value of the product `[V: Form S-1]`. An organization counts as a Paid Customer once it has three or more users on a paid plan. As of 31 January 2019 Slack had more than 600,000 organizations with three or more users: more than 88,000 Paid Customers, including more than 65 of the Fortune 100, and more than 500,000 on the free plan `[V: Form S-1]`. It measured adoption in large enterprises by the number of Paid Customers above $100,000 of annual recurring revenue (ARR), 575 as of that date, which accounted for about 40% of fiscal 2019 revenue; the three year-ends show 135, 298 and 575 `[V: Form S-1 and amendment]`. It measured expansion within Paid Customers by its Net Dollar Retention Rate (its name for net revenue retention): 171% at 31 January 2017, 152% at 31 January 2018 and 143% at 31 January 2019, a decline it attributed to the growth of its base of revenue and to deeper penetration within existing, long-term Paid Customers `[V: S-1 amendment]`. Paid Customers numbered 37,000, 59,000 and 88,000 at those year-ends, and fiscal 2019 revenue was $400.6 million, up 82% from $220.5 million `[V: Form S-1]`. Slack's later filings and releases give 134% at the third quarter of fiscal 2020 (October 2019), 132% at 31 January 2020, 123% at 31 January 2021 and 122% at the end of the first quarter of fiscal 2022 (30 April 2021), when it reported over 169,000 Paid Customers and 1,285 above $100,000 `[V: earnings releases; annual report for fiscal 2021]`.

**Constraints.** A product that starts with a team and spreads; a market in which large organizations buy through procurement, security review and contracts (an inference from the enterprise setting); a need to serve free users at low cost and convert some to paid; and, as the filing's risk factors note, competitors that may acquire users more rapidly or at lower cost.

**Data.** As reported: the customer counts and their definition, the high-value customer count and its share of revenue, the net dollar retention series and the company's explanation of its decline, revenue for fiscal 2018 and 2019, and the later figures.

**Problem definition.** *The author's reading.* An enterprise product wanted to grow by letting teams adopt it themselves, while also reaching the large organizations where most revenue sits. As an observable problem: "How to grow bottom-up and still capture enterprise revenue."

**Analysis.** *The author's analysis, through this chapter's tools.*

*Buyers and users.* Usage spreads from teams (users) inside organizations, and large paid contracts require the economic buyer, security and procurement (C27.2). The company's own measures separate the two: paid customers (including many small self-serve accounts) and customers above $100,000 of ARR, where the concentration is clear: 575 of 88,000 customers (under 1%) were about 40% of revenue. That concentration means the enterprise requirements (security, administration, compliance) matter more than the customer count suggests.

*Product-led entry with a sales overlay.* The filing describes self-service adoption driving paid conversion and expansion, with a distinction between expansion driven by sales inside larger customers and organic, product-driven expansion inside self-serve customers. This is the hybrid motion of C20.5: the product creates the demand, and sales closes the large accounts.

*Net revenue retention as the health measure.* At 143%, customers that stayed grew by more than 40% a year, so the installed base alone grew rapidly, a sign of expansion within accounts (the land-and-expand arithmetic of Worked example 2). The series then falls: 171%, 152% and 143% in the filing and 134%, 132%, 123% and 122% in later documents. The company's own explanation for the first three years is a larger base of revenue and deeper penetration within existing customers, which fits the arithmetic of a base in which early gains from small accounts spreading to many users are hard to repeat at scale. Whether the later declines also reflected a saturating market, price pressure or competition is not shown by the numbers.

*What to ask next.* A PM reading this would ask what drives expansion (seats, products, usage), how expansion differs for self-serve and large accounts, what the retention is by cohort and size, what share of revenue depends on a few large accounts, and what the free plan costs to serve.

*What the evidence does not show.* The company's internal conversion funnel (free to paid), the reasons for the declines after fiscal 2019 beyond the explanation it gave for 2017 to 2019, the effect of competitors' bundling, and the economics by segment. The case supports an analysis of an enterprise hybrid motion and its metrics, not a claim about why every number moved.

**Options.** *The author's reconstruction of choices a company could have faced; not a record of its deliberations.*

| Option | Optimizes | Costs |
|---|---|---|
| A. Sales-led from the start | Large contracts and control | Slow adoption; high acquisition cost; less word of mouth |
| B. Self-service free and paid plans with a sales overlay for large accounts | Rapid adoption, low acquisition cost, then enterprise expansion | Free-user cost; a slower start in large enterprises; two motions to run |
| C. Free only, monetized later | Fastest adoption | Revenue delay; hard to introduce charging |

**Tradeoffs.** B grows quickly through usage and still reaches the enterprise, at the cost of running two motions; A is slower and more controlled; C risks never charging.

**Decision.** As documented, the company followed B: a self-service model with free and paid plans and a sales effort in larger accounts.

**Outcome.** Reported: growth to more than 88,000 Paid Customers and $400.6 million of revenue in fiscal 2019, with net dollar retention declining from 171% to 143% over the three years `[V: Form S-1]` and to 122% by April 2021 `[V: earnings release]`. Later results and outcomes come from sources beyond those read here and are not claimed.

**Alternative outcomes.** *Inference.* A sales-led launch would probably have grown more slowly at a higher acquisition cost; a free-only strategy might have won users and struggled to charge. A reader should avoid hindsight: the company is one data point and its metrics are disclosed under a securities-law framework that shapes what is emphasized. The method to carry away: separate buyers from users, measure expansion with net revenue retention and concentration, expect retention to fall as the base grows, and ask what drives expansion before judging a number.

## 11. Interview questions and model answers

Nine questions. Model answers are `Illustrative` (composite candidates), and every figure is invented (invented). Each ends with follow-ups and answers. Where a real company's product is the setting, the answer reasons from public information and states no internal fact.

#### IQ-C27-01 · Beginner · strategy-gtm · ST

**Prompt.** What makes a marketplace hard to start, and what is liquidity?

**Rubric.**
- **Baseline:** "You need both buyers and sellers."
- **Strong:** Explains the cold start and defines liquidity.
- **Standout:** Measures liquidity with availability, conversion and utilization, finds the binding side, and describes a start in one narrow market.

**Model answer.** "A marketplace is worth something only if both sides are there, and each waits for the other: sellers won't list with no buyers, buyers won't come with nothing to buy. Liquidity is how likely a participant is to find a good match quickly. I measure it with the share of searches that show at least one available, relevant result, conversion once a result is shown, and how much of suppliers' capacity is used. The booking rate is the product of the first two.

"To start, I'd pick one narrow market (a neighborhood, a category) and make it work there before expanding. I'd find which side is short: if 60% of searches end with nothing available, supply is short; if hosts' utilization is a fifth of normal, demand is short. Then I'd add the short side in steps, checking that the other side isn't stranded."

*Signals.* The cold start; measured liquidity; the binding side; a narrow start.

**Follow-ups.**

- **Q.** How would you attract the first suppliers? **A.** "By lowering their risk: do the first transactions by hand, guarantee a minimum, bring my own demand (a partnership or a community), or offer an existing supplier a new channel with no cost. I'd measure whether the first ones transact repeatedly, which tells me whether the supply is real."
- **Q.** What if buyers and sellers transact off the platform after meeting? **A.** "That's leakage. I'd give a reason to stay: payment protection, insurance, reviews, repeat-booking tools, and a fee that is fair for the value. If the fee is too high, they leave; I'd test it."

#### IQ-C27-02 · Beginner · strategy-gtm · ST · Microsoft

**Prompt.** Who are the buyer, the user and the administrator of an enterprise product, and why does it matter?

**Rubric.**
- **Baseline:** "The customer is the company and the users are employees."
- **Strong:** Distinguishes the buyer, user and administrator and what each needs.
- **Standout:** Adds security, procurement and champions, explains the sales cycle and non-feature requirements, and says how this changes the roadmap.

**Model answer.** The setting is general; nothing here describes any real product or company. "The economic buyer holds the budget and cares about cost, risk and results; the users do the work in the product and care about speed and ease; the administrators configure, secure and support it and care about control, audit and reliability. Add a champion who wants it, IT and security who can block it, and procurement and legal who set terms. Together they are the buying committee, which makes the sales cycle long: months of evaluations, reviews and approvals.

"It matters because a product users love can still stall if it lacks single sign-on, access control, audit logs, data controls or compliance certifications, which decide deals though they are not features users ask for. So the roadmap has three streams: user value, administrator control and enterprise requirements, and the PM balances them. I'd also design for expansion: land with a team, then grow within the account, and track net revenue retention."

*Signals.* The actors; non-feature requirements; the cycle; roadmap consequence.

**Follow-ups.**

- **Q.** Which do you prioritize when they conflict? **A.** "I'd ask what blocks revenue and retention: if a security gap blocks three large deals, it takes priority over a nice user feature; if users are churning, usability does. I'd bring numbers on each and agree the tradeoff openly."
- **Q.** How do you handle a single large customer demanding a custom feature? **A.** "I'd ask what problem it solves and whether others share it; offer a configuration or a general version; and if it must be custom, price it as a service. I'd say no to features that distort the product (C32.7)."

#### IQ-C27-03 · Intermediate · strategy-gtm · ST · Amazon

**Prompt.** How would you reduce counterfeit and low-quality sellers in a third-party marketplace without hurting good sellers?

**Rubric.**
- **Baseline:** "Verify sellers and remove bad ones."
- **Strong:** Layers prevention, detection and enforcement, and notes false positives.
- **Standout:** Measures prevalence by sampling, sets thresholds by error cost, uses brand and buyer reports, designs appeals, and watches adaptation and fairness.

**Model answer.** The setting is general; I describe a method and claim nothing about any real company's programs `Inferred`. "First measure the problem: sample 5,000 listings for expert review and find, say, 40 counterfeit, a prevalence of 0.8% with a 95% interval of about ±0.25 points; across 2 million listings that is about 16,000. Then layers. *Prevention:* verify identity and business details at onboarding, with stricter checks in high-risk categories; let brands register and gate sensitive categories. *Detection:* models on listing text, images, price and seller behavior, plus reports from buyers and brands. *Enforcement:* graduated actions (warn, limit, suspend), with appeals. *Incentives:* make counterfeits unprofitable (holds on payouts for new sellers in risky categories).

"Tradeoffs: stricter checks slow good new sellers and block honest ones, so I'd set thresholds by the cost of each error, use friction (extra verification) for the borderline band, and measure appeal overturn rates. Measures: prevalence (sampled), buyer complaints per 1,000 orders, time to remove, seller onboarding completion and false-suspension rate. Adversaries adapt, so I'd resample monthly and red-team the detection."

*Signals.* Sampled prevalence; layers; error-cost thresholds; appeals; adaptation.

**Follow-ups.**

- **Q.** A large, legitimate seller is wrongly suspended. What do you do? **A.** "Fast human review, restore if wrong, and learn: why did the model flag it, and are similar sellers affected? The overturn rate is a quality signal; if it is high, tighten the model or add friction before suspension."
- **Q.** How do you know the program works if counterfeits move to new tactics? **A.** "By sampling prevalence over time, not by counting removals, and by watching buyer complaints and brand reports. A rising removal count may mean better detection; a stable or falling prevalence with steady complaints means it is working."

#### IQ-C27-04 · Intermediate · strategy-gtm · ST · Stripe

**Prompt.** How would you reduce chargebacks on a payments product without hurting conversion?

**Rubric.**
- **Baseline:** "Block more risky payments."
- **Strong:** Separates fraud from other disputes and compares costs.
- **Standout:** Segments chargebacks by cause, uses friction for a borderline band, computes net benefit with the cost of lost conversion, and monitors false declines.

**Model answer.** The setting is general; I describe a method and no real product's numbers `Inferred`. "First understand the chargebacks: 2 million payments a month at an average $60 with a 0.45% chargeback rate is 9,000 chargebacks, and with the $15 fee about $675,000 a month. Split by cause: true fraud, 'friendly fraud' (the cardholder disputes a purchase they made), merchandise problems (not received, not as described), and unclear billing descriptors. The fixes differ: fraud needs screening; friendly fraud needs evidence and clear receipts; merchandise problems need merchant quality; descriptors need clarity.

"For fraud, blocking more costs good customers, so I'd add friction only for a risky band. Suppose 100,000 payments a month are in the borderline band with 4,500 of the chargebacks, and an extra verification step cuts those by 40% (1,800 × $75 = $135,000 saved) but loses 3% of the band's payments (3,000 × ($1.80 margin + $6 future value) = $23,400). Net about $111,600 a month. I'd test it on a holdout and measure conversion, chargebacks and false declines. For the other causes: clearer descriptors, receipts and delivery confirmation, and a dispute-evidence tool for merchants."

*Signals.* Chargebacks by cause; a friction band; net benefit with lost conversion; monitoring.

**Follow-ups.**

- **Q.** How do you tell friendly fraud from real fraud? **A.** "Signals such as repeated disputes from the same cardholder, delivery confirmation, usage logs and device history. I wouldn't treat it as certain; I'd use evidence-based dispute responses and track win rates."
- **Q.** What if merchants resist friction? **A.** "I'd show them the net numbers (what the step saves against what it costs), offer a setting for risk tolerance and measure their conversion impact. Merchants carry the loss, so they should have a say with the data in front of them."

#### IQ-C27-05 · Intermediate · strategy-gtm · ST

**Prompt.** How does an ad auction decide which ad to show and what it costs?

**Rubric.**
- **Baseline:** "The highest bidder wins."
- **Strong:** Explains that predicted response is combined with the bid.
- **Standout:** Works a numeric example with scores and the winner's price, explains why weighting protects users and revenue, and names calibration and ad-load guardrails.

**Model answer.** "Each time a slot opens, the system scores each eligible ad by its bid times the predicted chance the user will respond, which is the expected revenue per impression, and shows the highest score. The winner pays the least that would keep its position, close to what the next competitor needed. Example: A bids $2.00 with a 1.0% predicted click rate (score 0.020), B bids $3.00 with 0.5% (0.015), C bids $1.50 with 1.2% (0.018). A wins. Its price per click is C's score divided by A's rate: 0.018 ÷ 0.010 = $1.80, not $2.00. B's higher bid loses because users are unlikely to click.

"Weighting by predicted response raises revenue (A earns $18 per thousand impressions at its price, against $15 for B at its bid), protects users from irrelevant ads and rewards good ads. It depends on calibrated predictions; if they're wrong, revenue and quality fall. Guardrails: ad load, retention and complaints."

*Signals.* Expected value ranking; the price rule; a numeric example; guardrails.

**Follow-ups.**

- **Q.** Why not charge the winner its bid? **A.** "It encourages advertisers to shade bids and game the system; charging the minimum needed makes truthful bidding a reasonable strategy and simplifies advertisers' decisions."
- **Q.** How would you add ads to a product that has none? **A.** "Start with low ad load in a few placements, measure retention against a holdout, choose formats that fit the experience, require ad quality standards, and set the guardrail that retention must not fall by more than a stated margin."

#### IQ-C27-06 · Intermediate · strategy-gtm · ST

**Prompt.** Design the trust and safety approach for a new live-video feature.

**Rubric.**
- **Baseline:** "Add a report button and moderators."
- **Strong:** Names harms and layers.
- **Standout:** Starts from harms and adversaries, designs prevention by design (limits, age and account requirements), real-time detection, human review, appeals and measures prevalence, and plans a staged rollout with a kill switch.

**Model answer.** "Live video is hard because harm happens in real time and cannot be reviewed first. I'd start with the harms (violence, sexual content, harassment, scams, self-harm) and the adversaries who will adapt. Layers: *prevention by design:* require account age and verification to broadcast, start with small audiences, limit features for new accounts, delay or sample streams from high-risk accounts; *detection:* automated checks on audio, video and chat, with a lower threshold for severe harms; *response:* the ability to interrupt a stream quickly, human review of flagged streams within minutes, and a kill switch per feature; *after:* appeals and penalties.

"Measures: prevalence of violating live views by sampling, time to interrupt, proactive detection rate, appeal overturn rate and legitimate-creator friction. Tradeoffs: a lower threshold stops more harm and interrupts more good streams; I'd set it by harm severity. Rollout: invite-only, then a small share of regions, with review of incidents and red-team tests before expanding."

*Signals.* Harms first; layers designed for real time; prevalence; staged rollout.

**Follow-ups.**

- **Q.** How do you cover languages and regions? **A.** "By measuring detection quality by language, hiring reviewers who know the languages and context, and holding expansion until coverage meets the bar. Lower quality in some languages is a fairness and safety issue."
- **Q.** What if a legitimate creator is cut off by mistake? **A.** "A fast human check and restoration, an explanation, and tracking of such cases as a guardrail. If they cluster in a group, I'd treat it as a model or policy problem."

#### IQ-C27-07 · Hard · strategy-gtm · ST

**Prompt.** You are the PM of an internal platform used by 40 teams. Only 12 have adopted it. What do you do?

**Rubric.**
- **Baseline:** "Mandate that teams use it."
- **Strong:** Finds out why teams haven't adopted.
- **Standout:** Segments the non-adopters, measures time to first use and the cost of migration, fixes the biggest barrier, uses early adopters as proof, and considers mandates only with evidence and a transition plan.

**Model answer.** "Adoption is 30% (12 of 40). I'd interview a sample of non-adopters and look at why: it doesn't fit their use case, migration is too costly, it's less reliable than their own solution, they don't know about it, or they distrust the team's support. Then quantify: time to first successful use, migration effort, and the value they'd get (time saved, incidents avoided).

"Fix the largest barrier first: if migration takes three weeks and the benefit is small, build migration tools or support; if it doesn't fit a use case shared by ten teams, add it; if reliability is the issue, publish and meet service levels. Use the 12 adopters as proof: collect results (hours saved) and have them help others. A mandate is a last resort: it produces compliance and resentment, and works only when the benefit is clear and a transition is funded. Measure adoption by workload moved, not by teams signed, with guardrails on reliability and customer satisfaction. I'd also be willing to say no to the teams whose needs are too different, and say so."

*Signals.* Diagnosis of non-adoption; barrier-first; proof; careful use of mandates.

**Follow-ups.**

- **Q.** What if leadership wants a mandate by quarter-end? **A.** "I'd show the cost and risk: forced migration of teams that won't benefit creates incidents and distrust. I'd propose a mandate for the 15 teams where the evidence is strongest, with migration help, and keep the rest on a path with a date."
- **Q.** How do you decide which requests from 40 teams to build? **A.** "By the number of teams and the value per team, the cost, and fit with the platform's purpose; publish the criteria and the roadmap, and give a clear no with an alternative to requests that don't fit."

#### IQ-C27-08 · Hard · strategy-gtm · ST

**Prompt.** As a growth PM you raised weekly active users by 12%, but 90-day retention fell. What do you do?

**Rubric.**
- **Baseline:** "Keep the growth; retention often drops with more users."
- **Strong:** Segments new users and checks quality.
- **Standout:** Separates mix shift from a real change in retention, reads cohorts by acquisition source and tactic, computes the net effect on long-term active users and acquisition payback, checks for dark patterns, and decides by a rule.

**Model answer.** "First check whether it's mix or real. If the growth came from a new channel or tactic whose users retain less, overall retention falls even if nothing else changed; compare retention by cohort and source. Then compute the net effect on long-term active users: say a baseline of 100,000 new users with 30% retained at 90 days is 30,000 retained; the growth tactic adds 12,000 new users with 10% retention (1,200 retained) while lowering retention among existing sources by 2 points (2,000 fewer): net negative. If instead the tactic's users retain at 25% and the rest is unchanged, the net is positive.

"Then inspect the tactic: did it use incentives, forced sharing or hard-to-cancel flows (dark patterns, C10.10) that inflate sign-ups and harm trust? I'd check complaints and the economics: acquisition cost against the lifetime value of the retained users (C20.7). Decision rule: keep the tactic where the 90-day retained users per dollar beat the baseline channel; cut or redesign where they do not; and change the goal metric to retained users, not weekly active users, so growth is not rewarded for churn."

*Signals.* Mix versus real; net retained users; dark patterns; a rule; a better metric.

**Follow-ups.**

- **Q.** What if leadership likes the weekly active user number? **A.** "I'd show the retained-user view and the cost per retained user, and propose a dashboard with both. A metric that rises while retention falls is a warning; I'd make that visible with numbers."
- **Q.** How do you test a tactic's long-term effect quickly? **A.** "Hold out a group, track early proxies of retention (day-7, day-14 activity) validated against 90-day retention in past cohorts, and run the test long enough to see them; for high-risk tactics keep a longer holdout."

#### IQ-C27-09 · Hard · strategy-gtm · ST

**Prompt.** What is different about building a product in a regulated domain such as health?

**Rubric.**
- **Baseline:** "More rules to follow."
- **Strong:** Names safety, privacy and evidence.
- **Standout:** Designs around outcomes, validates claims, engages regulators and clinicians early, handles sensitive data, plans slow cycles, and applies AI-specific evaluation and human oversight.

**Model answer.** "Three things change. The goal: outcomes (improved health measures, adherence, fewer adverse events) matter more than engagement; a product that holds attention and doesn't help is a failure. The evidence bar: claims must be supported, and a product that diagnoses or treats may be regulated as a medical device with clinical validation `[V: FDA, EU MDR and India's Medical Devices Rules 2017]`. The data: health data is among the most sensitive, with strict rules on collection, consent, storage and sharing `[V: HHS: HIPAA Privacy Rule and Security Rule apply to covered entities and business associates]`.

"So I'd involve clinicians, privacy and regulatory experts from the problem stage; define the claim narrowly (information, not diagnosis, unless validated); measure outcomes and safety events; design for clinical workflow, since products that burden clinicians are abandoned; and plan for slow cycles and review before launch. Growth tactics from consumer apps (aggressive notifications, streaks, incentives) can be inappropriate. If AI is involved, I'd add evaluation on real cases with error costs, human oversight for anything consequential, and clear limits shown to users (C24, C25)."

*Signals.* Outcomes; evidence and regulation; sensitive data; clinicians; AI controls.

**Follow-ups.**

- **Q.** How would you move quickly in such a domain? **A.** "By scoping a first release that makes a narrow, lower-risk claim, running a prospective evaluation with a small group under review, and building evidence that supports a wider claim. Speed comes from clear scope and early expert involvement, not from skipping steps."
- **Q.** How do you measure success? **A.** "Clinical or learning outcomes with a comparison group where possible, adherence, safety events, equity of access and user trust; engagement is a means and not the goal."

## 12. Exercises

Eight exercises. Each has a model solution and an alternative. Every figure is invented.

#### EX-C27-01 · Liquidity

**Problem.** A city has 4,000 weekly searches, 50% show an available result, conversion given a result is 4%, and 200 hosts. Compute the booking rate, bookings and utilization. If adding 50 hosts raises availability to 75% and conversion stays 4%, what are the new bookings and utilization? What do you conclude?

**Context.** Marketplace.

**Data.** As above.

**Constraints.** Five minutes.

**Expected approach.** FW-C27-02 and Worked example 1.

**Solution.** Booking rate: 0.50 × 0.04 = 2%; bookings 80; utilization 80 ÷ 200 = 0.40 per host per week. After: 0.75 × 0.04 = 3%; bookings 120; utilization 120 ÷ 250 = 0.48. Utilization rose, so hosts are not stranded and the market was supply-constrained; adding the 50 hosts was justified. Check whether availability would keep rising with more hosts, and watch quality.

**Alternative solution.** Compute the revenue at a $100 average booking and 12% take rate: from $960 to $1,440 a week.

**Tradeoffs.** If utilization had fallen below a healthy level, supply growth would have been too fast.

#### EX-C27-02 · Net revenue retention

**Problem.** A cohort pays $500,000 a year. Churned customers took $40,000; downgrades cost $10,000; expansion added $95,000. Compute NRR and say what it means.

**Context.** Enterprise.

**Data.** NRR = (start − churn − downgrades + expansion) ÷ start.

**Constraints.** Four minutes.

**Expected approach.** Worked example 2.

**Solution.** (500,000 − 40,000 − 10,000 + 95,000) ÷ 500,000 = 545,000 ÷ 500,000 = 109%. The existing customers grew 9% with no new customers; expansion more than covered churn and downgrades. Check how concentrated the expansion is (a few large accounts or many) and how NRR differs by customer size.

**Alternative solution.** Compute gross retention (without expansion): 450,000 ÷ 500,000 = 90%.

**Tradeoffs.** A high NRR can hide high logo churn if a few accounts expand a lot.

#### EX-C27-03 · An ad auction

**Problem.** Advertiser X bids $4.00 with a predicted click rate of 0.5%; Y bids $2.50 with 1.0%; Z bids $1.20 with 2.0%. Compute scores, the ranking, the winner's price per click and the winner's revenue per thousand impressions at that price.

**Context.** Advertising.

**Data.** Score = bid × predicted rate; price = next score ÷ winner's rate.

**Constraints.** Five minutes.

**Expected approach.** FW-C27-06 and Worked example 5.

**Solution.** Scores: X 0.020; Y 0.025; Z 0.024. Ranking: Y, Z, X. Y's price per click: 0.024 ÷ 0.010 = $2.40. Revenue per thousand impressions: 1,000 × 0.010 × $2.40 = $24.00. X has the highest bid and loses; ranking by bid would show X, with 1,000 × 0.005 × $4.00 = $20.00 per thousand at its bid and a less relevant ad.

**Alternative solution.** Add a quality factor of 1.1 for Z and recompute: Z's score 0.0264 beats Y's 0.025.

**Tradeoffs.** Quality weights protect users and depend on calibrated predictions.

#### EX-C27-04 · Fraud versus false declines

**Problem.** A payments product handles 500,000 payments with a 0.3% fraud rate (1,500 fraudulent). A missed fraud costs $65. Tight screening catches 80% of fraud and wrongly declines 2% of good payments; loose catches 60% and declines 0.8%. A false decline costs $5 in total. Compute the total cost of each and the break-even cost per false decline.

**Context.** Fintech.

**Data.** As above.

**Constraints.** Seven minutes.

**Expected approach.** FW-C27-04 and Worked example 3.

**Solution.** Good payments: 498,500. Tight: missed 300 × $65 = $19,500; false declines 9,970 × $5 = $49,850; total $69,350. Loose: missed 600 × $65 = $39,000; false declines 3,988 × $5 = $19,940; total $58,940. Loose is cheaper by $10,410. Break-even cost per false decline: the extra fraud caught by tight screening is worth 300 × $65 = $19,500, against 5,982 extra false declines (9,970 − 3,988): $19,500 ÷ 5,982 = $3.26. Because a false decline costs $5 (more than $3.26), loose screening wins; if it cost less than $3.26, tight would. Measure the true cost of a false decline.

**Alternative solution.** Add a middle band with extra verification and recompute.

**Tradeoffs.** The result turns on an estimate you can measure with a holdout.

#### EX-C27-05 · Prevalence and thresholds

**Problem.** A surface has 2,000,000 views a day with 0.2% violating. Setting A: 60% recall, 85% precision; Setting B: 80% recall, 70% precision. Compute violating views removed, wrongly removed items, remaining prevalence for each, and say which is better for a severe harm.

**Context.** Trust and safety.

**Data.** False positives = true positives × (1 − precision) ÷ precision.

**Constraints.** Seven minutes.

**Expected approach.** FW-C27-05 and Worked example 4.

**Solution.** Violating views: 4,000. A: removed 2,400; false positives 2,400 × 0.15 ÷ 0.85 = about 424; remaining 1,600 (0.08%). B: removed 3,200; false positives 3,200 × 0.30 ÷ 0.70 = about 1,371; remaining 800 (0.04%). B halves the remaining harm and triples wrongful removals (424 to 1,371). For a severe harm, B (or stricter) is justified with fast appeals; for a mild category, A may be better. Set per harm and measure the appeal overturn rate.

**Alternative solution.** Compute reviewers needed at 100 flagged items a day each: A about 28 (2,824 flagged), B about 46 (4,571 flagged).

**Tradeoffs.** Lower prevalence costs more false removals and more reviewers.

#### EX-C27-06 · An enterprise buying map

**Problem.** Fill in an enterprise buying map (FW-C27-03) for selling a team-chat product to a 5,000-person company: the roles, each one's concern, and a plan.

**Context.** Enterprise.

**Data.** None.

**Constraints.** Eight minutes.

**Expected approach.** FW-C27-03.

**Solution.** *Economic buyer (head of a function or IT):* cost, risk, results; evidence: a pilot with measured time saved. *Champion (a team lead):* wants adoption; arm with a pilot plan and a usage dashboard. *Users:* speed and ease; get them into a free pilot. *Administrators:* control, user management, audit; show the admin console and logs. *IT and security:* single sign-on, data location, compliance certification, retention; provide the security documentation early. *Procurement and legal:* price, terms, data-processing agreement; a standard contract and a clear price list. *Plan:* land with one team (30 days), prove results, complete the security review in parallel, then expand by department.

**Alternative solution.** Add a competitor already in use and a plan to coexist.

**Tradeoffs.** Starting security review early slows the pilot and avoids a stall.

#### EX-C27-07 · A domain metric tree

**Problem.** Draw a metric tree (FW-C27-07) for a ride-hailing marketplace: the top metric, first-level drivers, the driver you would investigate first if ride completions fell, and one guardrail.

**Context.** Marketplace metrics.

**Data.** None.

**Constraints.** Six minutes.

**Expected approach.** C27.10 and C05.

**Solution.** Top metric: completed rides per week. Drivers: ride requests × share fulfilled; requests = active riders × requests per rider; fulfilled share = driver availability × match rate × (1 − cancellations). Investigate first: the share of requests fulfilled, split by area and hour: a fall there points to driver supply or matching, whereas a fall in requests points to demand. Guardrails: rider wait time, driver earnings per hour (a supply guardrail), cancellations and safety incidents. If requests held and fulfillment fell, check driver supply by area and the cancellation reasons.

**Alternative solution.** Add price: surge and fares affect both requests and driver supply.

**Tradeoffs.** A broader tree finds more causes and slows the first check.

#### EX-C27-08 · From cards to bank transfers

**Problem.** A subscription product built around card payments is moving to a market where real-time bank transfers (such as UPI in India) are widely used. List five things that change in the product and the payment design.

**Context.** Regional lens.

**Data.** None.

**Constraints.** Seven minutes.

**Expected approach.** The Regional Lens in C27.3 and C20.

**Solution.** `[V: RBI circular RBI/2023-24/88 of 12 December 2023 on e-mandates for recurring payments; this exercise answer is illustrative]` (1) *Payment method:* offer bank-transfer payments as a first-class option and design checkout around it. (2) *Recurring payments:* learn the mandate and authentication rules for recurring transfers; the customer may need to approve the mandate, and renewals may need alerts and limits. (3) *Trials:* the convert-after-free-trial pattern depends on being able to charge automatically; redesign the trial's consent and notifications. (4) *Failures and retries:* bank-transfer failures differ from card declines; design retries, reminders and grace periods, and measure involuntary churn. (5) *Compliance and data:* identity checks, data storage and consent rules differ; involve legal and compliance early. Also price points (C20) and receipts.

**Alternative solution.** Start with one-time and monthly prepaid plans while the recurring flow is built.

**Tradeoffs.** Adapting to local rails costs time and opens a market that cards do not reach.

## 13. Practice protocol

**Timed drills (three a week for two weeks).**

- *Week 1: marketplace, enterprise and payments.* Use IQ-C27-01 to IQ-C27-04 and EX-C27-01, EX-C27-02, EX-C27-04 and EX-C27-06. Answer each as a 30-minute domain question aloud, starting with the actors and the constraint.
- *Week 2: safety, advertising, platforms, growth and regulated domains.* Use IQ-C27-05 to IQ-C27-09 and EX-C27-03, EX-C27-05, EX-C27-07 and EX-C27-08. Draw a metric tree in under two minutes for each of the nine domains.

**With a partner.** Ask your partner to name a domain at random and give you 90 seconds to state the actors, the binding constraint and the first metric you would check.

**Feedback checklist (yes, partly, no).**

1. Did I name the actors and what each wants?
2. Did I name the constraint that makes the domain different?
3. Did I use the domain's vocabulary correctly?
4. Did I draw a metric tree with a first driver and a guardrail?
5. Did I state the tradeoff and take a position?
6. Did I consider adversaries, fraud, compliance or adoption as the domain needs?
7. Did I propose a staged test and a decision rule?
8. Did I say what I would learn first?

**Answer journal.** Record the date, the domain, the binding constraint you named, the number you computed, your score and the one fix.

## 14. Implementation playbook

Apply the chapter to the domain of your own product, and to one you do not know.

**Days 1 to 3.** Write the domain primer card (FW-C27-01) for your product's domain: actors, constraint, concepts, metric tree, tradeoffs. Check it with a colleague who knows the domain.

**Week 1.** Draw your product's metric tree (FW-C27-07) with real numbers where you have them; find the driver with the weakest data. For a marketplace, compute liquidity by market; for enterprise, NRR by cohort; for payments, authorization rate by issuer; for safety, prevalence by sampling.

**Week 2.** Pick a domain you do not know and write a one-page primer from public sources (regulator pages, company filings, engineering blogs), with three questions you would ask an expert. Use it to answer one practice question aloud.

**Deliverables that become stories:** the primer card and tree for your domain (a time you learned a domain quickly), the measured liquidity, retention or prevalence analysis (a time you used a domain metric), and the one-page primer for a new domain (a time you ramped up). Keep numbers real and credit partners.

## 15. Key takeaways and further reading

### Key takeaways

1. In any domain, name the actors, what each wants and the binding constraint: supply or demand in a marketplace, security review and the buying committee in enterprise software, trust, compliance and false declines in payments, an adapting adversary in safety, calibrated prediction and ad load in advertising, launch-once limits in devices, adoption in internal platforms, retention in growth, and outcomes and evidence in regulated domains.
2. Measure what the domain actually cares about: liquidity (availability, conversion, utilization), net revenue retention and concentration, authorization rate with fraud and false declines, prevalence by sampling, revenue per thousand impressions with user guardrails, and outcomes.
3. Where a system can err two ways, set the threshold by the cost of each error and measure the cost you do not see; add friction for the borderline band instead of one hard line.
4. Use the domain's mechanics correctly: an ad auction ranks by bid times predicted response and prices at the next competitor's level; an enterprise sale is a buying committee and a long cycle; a payment moves through authorization, capture and settlement with fraud and chargebacks.
5. Draw a metric tree for the named domain in two minutes, name the first driver to check and a guardrail, and say what you would learn first if the domain were new.

### Further reading

- Slack Technologies' Form S-1 and amendments (2019), its earnings releases for fiscal 2020 to 2022 and its annual report for fiscal 2021, on a self-service enterprise motion and its metrics. Sources for CS-C27-02 (confirmed in October 2026).
- Andrew Chen, *The Cold Start Problem* (2021), on marketplaces and network effects `[V: Harper Business, 7 December 2021, ISBN 9780062969743]`.
- Bessemer Venture Partners and similar investor writing on net revenue retention and enterprise metrics, as secondary reading `[V: Bessemer Venture Partners, Scaling to $100 Million: net retention benchmarks for cloud companies]`.
- Stripe's public documentation on payments, disputes and fraud prevention, as primary reading on how a payments platform describes its flow `[V: Stripe API documentation on idempotency, versioning and webhooks]`.
- Google's, Meta's and others' published transparency reports on how prevalence of violating content is measured, read with the date in mind `[V: Meta, Community Standards Enforcement Report (quarterly; prevalence is the estimated share of views that were of violating content); other companies' reports were not rechecked]`.
- Hal Varian's writing on ad auctions (for example "Position Auctions," *International Journal of Industrial Organization*, 2007) and Google's public documentation of its ad ranking, as an introduction to auction design `[V: Varian, Position Auctions, International Journal of Industrial Organization 25 (2007), pp. 1163 to 1178; Google Ads Help Center, About Ad Rank]`.
