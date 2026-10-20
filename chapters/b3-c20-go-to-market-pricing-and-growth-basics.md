---
id: C20
title: Go-to-Market, Pricing and Growth Basics
tier: 2
competencies: [strategy-gtm, analytics]
prerequisites: [C05, C18]
defines_terms: [go-to-market, willingness-to-pay, packaging, value-metric, growth-loop, customer-acquisition-cost, lifetime-value, payback-period, product-led-growth]
uses_terms: [positioning, unit-economics, contribution-margin, funnel, activation, retention, churn, conversion-rate, cohort, north-star-metric, moat, switching-cost, network-effect, platform, tradeoff, assumption, metric, guardrail-metric, experiment, staged-rollout, rollback, base-rate]
frameworks: [FW-C20-01, FW-C20-02, FW-C20-03, FW-C20-04, FW-C20-05, FW-C20-06, FW-C20-07]
case_studies: [CS-C20-01 (Illustrative), CS-C20-02 (Verified)]
cross_refs_out: [C04, C05, C09, C10, C13, C14, C17, C18, C19, C24, C25, C32]
cross_refs_pending: []
status: draft
---

# C20 — Go-to-Market, Pricing and Growth Basics

## 1. What interviewers test

"How would you price this product?" "Design the launch plan for a new feature." "Our referral program has a viral coefficient of 0.4; what do you do?" "Should we add an ad-supported tier?" "Price a new premium wearable together with its services subscription." Strategy and product-sense rounds regularly end with go-to-market and pricing, because a product that no one finds, understands or pays for is not a success, and because these questions test whether you can connect a product to the economics of a business. This chapter gives the working depth an associate PM needs: what go-to-market is, how to position and price, how to package, which channels and loops grow a product, how to keep users, how to read unit economics, and how to plan a launch and work with the people who run it.

**Where it shows up.** `Inferred`: strategy, product and analytical rounds at Google, Meta, Microsoft, Amazon, Apple, Netflix, Stripe and others `[unverified: candidate-reported]`, usually as a follow-on ("now how would you launch or price it?") and, for some roles, as a dedicated question. On the job it is the work a PM does with product marketing, sales and finance.

**What is scored.** Whether you tie price, positioning and channel to a specific customer and to the economics `Inferred`. Interviewers listen for a clear target customer and value; evidence for willingness to pay (not just cost-plus); packaging and the metric you charge on; the right growth mechanism for the product; numbers for acquisition cost, lifetime value and payback; and a launch plan with criteria for success and rollback.

Six observable behaviors:

1. You start from the customer, the problem and the value, not from a price.
2. You position the product against a real alternative, with a message a customer would repeat.
3. You price from willingness to pay and costs, and test it, not from a guess.
4. You choose what to package and what to charge on, and say what each tier is for.
5. You distinguish a funnel from a loop, and compute what a loop can and cannot do.
6. You compute acquisition cost, lifetime value and payback, say what would change them, and plan a launch with success and rollback criteria.

**The failure this prevents.** Six patterns end GTM answers: a price with no customer or evidence, cost-plus pricing for a product whose value is far above its cost, a launch plan that is a list of tasks, "go viral" as a strategy, unit economics quoted without assumptions, and a launch with no success measure.

## 2. The concept from first principles

### C20.1 What go-to-market is

**Go-to-market** (GTM) is the plan for how a product reaches its target customers and wins them: who the customer is, the problem and value proposition, the positioning and message, the price and packaging, the channels, the launch, and the metrics that show whether it is working (FW-C20-01). It answers four questions: *who* will buy or use this and why; *what* do we say to them; *how* do they find and pay for it; and *how will we know* it is working.

**Motions.** Common ways of reaching customers `Inferred`:
- **Product-led.** The product itself acquires, converts and expands users: free or self-serve trials, in-product invitations, viral sharing. Typical for consumer apps and developer tools.
- **Sales-led.** Salespeople find and close customers, often with demos, contracts and negotiated prices. Typical for enterprise software.
- **Partner-led.** Resellers, integrators, platforms or distribution partners bring the product to their customers.
- **Hybrid.** A product-led entry that grows into sales for larger accounts.

**Who owns what.** The PM owns the *why and what* (the customer problem, the value, the product); product marketing usually owns positioning, messaging and launch communications; sales owns relationships and closing; support owns the post-sale experience; finance owns pricing governance and forecasts `Inferred`. In practice the PM co-owns positioning and pricing decisions and carries the launch, with product marketing as the closest partner (C20.10).

**Consumer and business differ.** A consumer product has many small buyers, little sales contact, price sensitivity and virality; a business product has fewer, larger buyers, buying committees, security and procurement requirements, and longer cycles. The same framework applies; the channels and metrics differ.

> **Counterexample.** Asked how to launch a new expense-tracking feature, a candidate says: "Build a landing page, run social ads, and send an email to all users." The interviewer asks who it is for and why they would switch from what they use now. The candidate has listed tactics with no target, no value and no measure. A better start: "The target is small-business owners who track expenses in spreadsheets; the value is that receipts are captured automatically; the alternative is the spreadsheet. Success is the share of active owners who capture ten receipts in their first two weeks."

**When not to over-plan.** For a small, reversible feature a one-paragraph plan and a staged rollout may be enough (C17); a full GTM plan is for products and features whose adoption depends on persuading customers or on changing how they pay.

### C20.2 Positioning and messaging

**Positioning** (defined in C18) is the place a product holds in a customer's mind relative to the alternatives. **Messaging** is how that is said to a specific audience (FW-C20-02). The ladder:

1. **Target:** who, specifically (a segment by need or behavior, not demographics).
2. **Problem and alternative:** what they struggle with and what they use now.
3. **Value proposition:** the benefit that matters most to them, in their words.
4. **Proof:** evidence that it works (a number, a customer, a demonstration).
5. **Differentiation:** why this and not the alternative, and what you will not claim.
6. **Message per audience:** the same truth in the words of the buyer, the user and, where different, the approver.

A positioning statement template: *For [target] who [problem or need], [product] is a [category] that [key benefit]. Unlike [alternative], it [differentiator].* The test of a good statement is that a customer could repeat it, and that a competitor could not truthfully say the same.

**Test messaging** with real customers: show two or three versions and ask which they would repeat to a colleague and what they think the product does; run a landing-page or ad test with the conversion rate (C05) as the measure and a guardrail on the quality of sign-ups. Beware of claims you cannot prove, and of messages that describe features instead of outcomes.

### C20.3 Pricing models and willingness to pay

**Willingness to pay** is the most a customer is prepared to pay for something, which varies by customer and by what they compare it with. Price should sit between a floor set by cost and strategy and a ceiling set by willingness to pay and alternatives (FW-C20-03).

**Three anchors.**
- *Cost (the floor).* Cost to serve per unit plus a required margin. Cost-plus pricing sets the price from cost alone; it is a floor, not a method, because it ignores value: a product that saves customers $1,000 a year should not be priced at its $20 cost.
- *Competitors and substitutes (the reference).* What customers compare with, including doing nothing.
- *Value (the ceiling).* The benefit to the customer, in money or time, that they would perceive.

**Estimating willingness to pay.** Interviews and observation of what people pay now; price-sensitivity surveys that ask at what price a product becomes too cheap to trust, a bargain, expensive and too expensive (a method often credited to Peter van Westendorp `[V: van Westendorp, ESOMAR Congress paper, 1976]`); conjoint analysis (customers choose among product profiles with different features and prices, and the analysis infers the value of each feature); and, best, live tests of price on real traffic with a holdout and guardrails (C14). Stated willingness to pay overstates what people actually pay `Inferred`, so treat survey figures as relative guides and test.

**Pricing models.**

| Model | How it works | Fits | Risk |
|---|---|---|---|
| One-time purchase | Pay once | Hardware; simple software | No recurring revenue; upgrades needed |
| Subscription | A recurring fee for access | Services, software, content | Churn; value must recur |
| Usage-based | Pay for what you use | Infrastructure, APIs, AI features | Unpredictable bills for customers (the upside: revenue tracks cost) |
| Tiered | Several plans at different prices and features | Mixed customer needs | Complexity; wrong fences |
| Freemium | Free tier, paid upgrade | Products with low marginal cost and viral use | Free users cost money and may never convert |
| Ad-supported | Users free, advertisers pay | Large audiences | Trust, experience, regulation |
| Marketplace take rate | A share of each transaction (C19) | Two-sided markets | Disintermediation |

**Premium pricing.** A high price can signal quality and fit a segment that values craft, status or reliability; it needs a product and positioning that justify it and a segment large enough to matter. Test with willingness-to-pay evidence, not with a belief that "expensive means better."

**Bundles.** A bundle sells several products for one price. It tends to raise revenue when customers' valuations of the parts differ and are negatively correlated, because the bundle price can fit all of them (Worked example 2). It tends to fail when everyone values the same part, or when the bundle includes things that customers see as filler.

**Services attach.** For a device or a product with a related service (a wearable with a subscription), the economics have two parts: the product's margin and the service's recurring contribution times the *attach rate* (the share of buyers who subscribe) and their retention (Worked example 1). A trial or an included period can raise attach and costs service delivery; compare the lifetime contributions, not just the first year.

**Usage-based pricing for AI features.** AI features carry real cost per use (C24.7, C25.6), so a flat price can lose money on heavy users. Options: price per seat with an included allowance and overage; price per task or per outcome; or a hybrid. Choose a **value metric** (below) that tracks the value the customer gets and the cost you bear.

### C20.4 Packaging

**Packaging** is the decision about what is included in each plan or tier, and how the plans are named and fenced, so that different customers choose the plan that fits them (FW-C20-03). A **value metric** is the unit on which price is charged (seats, tasks, storage, transactions, outcomes), chosen so that the price grows as the customer's value grows and as your cost grows.

**Principles.**
- *Choose the value metric well.* A good one is understood by the customer, grows with their success, is measurable and fair, and tracks your cost (a per-seat price for a product whose cost is tasks can lose money on heavy users; a per-task price for a collaboration tool can discourage use).
- *Good, better, best.* Three tiers are common: an entry plan, a main plan most customers should pick, and a premium plan for power or enterprise needs. The middle plan is the one you are designing.
- *Fences, not walls.* Differentiate tiers by what matters to different segments (limits, advanced features, support, security), so customers can see why they would upgrade, and keep the entry plan genuinely useful.
- *Upgrade triggers.* Know what causes a customer to outgrow a plan (a limit reached, a team added, a compliance need), and make the upgrade easy at that moment.
- *Avoid complexity.* Too many plans and add-ons confuse buyers and support; simplicity has value.
- *Grandfathering and migration.* Changing prices or tiers affects existing customers; plan communication and transition (CS-C20-02).

### C20.5 Channels, growth loops versus funnels, product-led growth

**Channels** are the routes by which customers find a product: organic search and content, app stores, paid advertising, referral and word of mouth, partnerships and integrations, email and owned channels, sales and events `Inferred`. Each has a cost, a volume, a quality and a speed; choose by the customer's behavior and by unit economics (C20.7).

**Funnel versus loop.** A *funnel* (C05) is a one-way path: awareness, sign-up, activation, purchase; new users must be bought or earned at the top each time. A **growth loop** is a closed system in which the output of one cycle becomes the input of the next, so that growth compounds: for example, a user invites friends, some join, and those new users invite others (FW-C20-05). Loops exist in referral, content (users create content that attracts search traffic and new users), marketplaces (supply attracts demand attracts supply, C19) and data (usage improves the product, which attracts usage).

**Viral coefficient.** For a referral loop, the viral coefficient *k* is the number of new users each user brings: invitations sent per user times the share of invitations that convert. If k is below 1, each cohort brings fewer users than the last; the total from an initial group of N users, across all generations, is N ÷ (1 − k). If k is 1 or more, growth is self-sustaining in principle, though in practice it fades as the network saturates and quality falls. Cycle time matters as much as k (Worked example 4).

**Product-led growth.** **Product-led growth** is a go-to-market approach in which the product itself drives acquisition, conversion and expansion, typically through a free or self-serve entry, quick time to value and in-product prompts to invite others or upgrade. It works when the product can show value quickly without a salesperson and the cost to serve a free user is low. It struggles when value needs configuration, procurement or training, in which case sales-assisted motion is added.

**Paid channels.** Paid acquisition is scalable and costs money per user; whether it works depends on whether lifetime value exceeds acquisition cost with a margin (C20.7). Use it to test messaging and to scale a proven loop, and watch for diminishing returns as spend grows.

### C20.6 Retention levers

Growth is the product of getting users and keeping them; a product that loses most users in the first month wastes every acquisition dollar (C05 on cohorts and retention). Levers `Inferred`:

- **Activation.** Get the user to the first moment of value quickly: fewer steps, clear defaults, a first success (C05).
- **Habit and return triggers.** Give a reason to come back: new content, progress, reminders and notifications used with restraint and respect for the user (C10.10 on dark patterns).
- **Depth of value.** Features that increase the product's usefulness over time (stored data, integrations, personalization) and, with them, **switching costs** (C18).
- **Community and network effects.** Value from other users (C18, C19).
- **Onboarding and education.** Help users reach advanced value; many churned users never found the valuable feature.
- **Pricing and plan fit.** Annual plans reduce churn and may lower flexibility; a plan that does not fit usage creates cancellations.
- **Win-back and involuntary churn.** Voluntary churn is a decision to leave; involuntary churn is a failed payment. Fixing failed payments (retries, updating cards, notifications) can recover a meaningful share of churn without any product change `Inferred`.

**Diagnose before acting.** Segment churn by cohort, plan, reason (survey and observed behavior) and time since sign-up; then target the biggest reason (C13).

### C20.7 Unit economics at APM depth: acquisition cost, lifetime value, payback

**Customer acquisition cost** (CAC) is the average cost to acquire one new customer: the sales and marketing spend in a period divided by the new customers acquired in it. **Lifetime value** (LTV) is the total contribution a customer is expected to generate over their life with the product. **Payback period** is the time it takes for a customer's contribution to repay the cost of acquiring them (FW-C20-06; C18.6 gave the general method).

**Simple formulas.**
- *Contribution per month* = average revenue per user (ARPU) × gross margin.
- *LTV* ≈ contribution per month ÷ monthly churn rate (this assumes constant churn; real cohorts rarely behave that way).
- *Payback period* (months) = CAC ÷ contribution per month.
- *LTV:CAC ratio* = LTV ÷ CAC. A common heuristic is that a ratio of about 3 or more and a payback of under about 12 months indicate a healthy business `[V: arithmetic checked; the 3:1 and 12-month benchmarks are common heuristics, not sourced]`; it varies with the business, and cash constraints change the picture.

**Read them with care.** CAC must include all acquisition cost (salaries, tools, promotions), not only ad spend; blended CAC hides channel differences (compute it by channel); LTV depends on churn, which is uncertain and changes by cohort; margins must be after cost to serve (for AI features this is large); and payback matters more than LTV when cash is short. Do sensitivity: what happens to the ratio if churn rises one point or CAC rises twenty percent (Worked example 5).

### C20.8 Launch planning

A launch is a coordinated set of actions that makes a product or feature known, available and supported (FW-C20-07; C17 covers rollout and execution decisions).

**Tiers of launch.** *Quiet release* (rolled out, little announcement) for small changes; *beta or early access* (a limited audience, for learning); *general availability with announcement* (marketing, press, enablement) for major products. Choose by the importance of the change and the cost of getting it wrong.

**The checklist.** Positioning and messaging agreed; pricing and packaging set; the product ready (quality, performance, accessibility, privacy review); documentation and help content; support and sales enablement; instrumentation and dashboards (C05); communications plan (in-product, email, announcements); the rollout plan with stages and rollback triggers (C17); and owners and dates.

**A timeline.** About eight weeks out: positioning, pricing and success metrics set; six weeks: beta and feedback; four weeks: documentation, enablement and communications drafted; two weeks: readiness review; launch week: staged rollout, monitoring, a daily check; two to four weeks after: review against success criteria, learnings and adjustments.

**Success criteria.** Decide in advance the primary metric (adoption among the target segment within a time window), guardrails (support contacts, errors, cancellations, performance) and the decision rule (what result leads to expansion, iteration or rollback).

### C20.9 Interview forms

**"How would you price this?"** Answer structure: (1) *Goal* of pricing (revenue, share, margin, positioning). (2) *Customer and value:* who, what the product is worth to them, their alternatives. (3) *Anchors:* cost floor, competitor reference, value ceiling. (4) *Model and packaging:* subscription, usage or tiers, the value metric and the tiers. (5) *Evidence and test:* how you would estimate willingness to pay and test (C14). (6) *Metrics and guardrails:* conversion, revenue per user, churn, margin. (7) *Risks:* cannibalization, perception, complexity. State a price and what would change it.

**"Launch plan for X."** Target and value; the positioning; the channels; the launch tier and timeline; readiness checklist; success criteria with guardrails and rollback triggers; owners.

**"Go-to-market for a new feature."** Who it is for within the existing base, how they will find out (in-product first), how it is explained, how it is packaged or priced (included or add-on), and how adoption and retention impact are measured with a holdout.

**"Should we add a tier or a benefit?"** Costs and benefits per member, cannibalization of existing tiers, effect on acquisition and retention, and a test.

### C20.10 Working with product marketing, sales and support

- **Product marketing** needs the value proposition, the target customer and evidence, early access to the product, launch dates and a clear decision on pricing and packaging. They give you customer language, competitive insight and messaging tests. Agree who decides the message and who decides the price.
- **Sales** needs an honest roadmap, a clear value story, enablement and a fast route for customer feedback; they give you customer needs and objections. Learn to say no with an alternative (C32.7) to custom requests.
- **Support** needs advance notice of changes, documentation, known issues and a path to engineering; they give you the voice of confused and frustrated users at scale.
- **Finance** reviews pricing, forecasts and margins; bring numbers and assumptions early.
- **Legal and privacy** review claims, terms, consent and regional rules; involve them before the announcement, not after.
- **A launch review** with all functions a week before launch, with a readiness checklist and a go/no-go decision, prevents most launch failures.

> **Regional Lens: India.** Price sensitivity is high in many consumer segments, average revenue per user is often lower than in other markets, and a global price may be unaffordable or may position the product wrongly `Inferred` `[unverified: author's synthesis; no source checked]`. Payment methods differ: real-time bank-transfer payments through UPI are widely used for consumer payments, cards are less universal, and cash on delivery remains common in some e-commerce categories; recurring payments are governed by rules for card and UPI mandates, including authentication requirements above stated limits (additional-factor authentication can be waived for recurring payments up to 15,000 rupees, and up to 1,00,000 rupees for mutual-fund subscriptions, insurance premiums and credit card bills), which affect how subscriptions and free-trial conversions are designed `[V: RBI circular RBI/2023-24/88 of 12 December 2023; e-mandate framework of August 2019]`. Distribution norms include telecom and super-app partnerships, local-language support, shorter pricing periods (weekly, monthly or prepaid plans rather than annual), and mobile-first, low-data experiences (C09) `Inferred`. The practical consequences for a PM: test local price points, offer payment methods that people actually use, design trials and renewals around mandate rules, and treat the local market as its own GTM, not a translation of the global one.

## 3. Frameworks

Seven frameworks, set out below. The metric card (FW-C05-01), the unit-economics sheet (FW-C18-06), the experiment decision-rule table (FW-C14-05), the launch-or-hold table (FW-C17-04), the AI unit-economics sheet (FW-C25-06) and the no script (FW-C32-07) are reused, not repeated.

#### FW-C20-01 · The go-to-market one-pager · Original

- **Inputs:** a product or feature, its target customer and the business goal.
- **Outputs:** one page: the target and the problem; the value proposition and positioning; price and packaging; the motion and channels; the launch tier and timeline; success metrics with guardrails and a decision rule; the owners (PM, product marketing, sales, support, finance, legal).
- **Assumptions:** the target customer can be named and reached.
- **Tradeoffs:** a one-pager forces choices and leaves detail to supporting documents.
- **Failure modes:** a list of tactics; no target; no success measure.
- **Worked example:** Worked example 1 and EX-C20-01.

| Item | Answer |
|---|---|
| Target and problem | |
| Value proposition and positioning | |
| Price and packaging | |
| Motion and channels | |
| Launch tier and timeline | |
| Success metrics, guardrails, decision rule | |
| Owners | |

#### FW-C20-02 · The positioning and messaging ladder · Original

- **Inputs:** a product and a segment.
- **Outputs:** target, problem and alternative, value proposition, proof, differentiation and the message for each audience; a positioning statement; a messaging test plan with a measure.
- **Assumptions:** you can talk to customers.
- **Tradeoffs:** a sharp message excludes some customers.
- **Failure modes:** feature lists; claims without proof; a statement a competitor could also make.
- **Worked example:** Worked example 3 and EX-C20-02.

#### FW-C20-03 · The pricing worksheet · Original

- **Inputs:** the product, its customers and costs.
- **Outputs:** the pricing goal; the cost floor; the competitor and substitute reference; the value and willingness-to-pay evidence; the model, value metric and tiers; the test plan; metrics and guardrails; risks (cannibalization, perception, complexity); a price and what would change it.
- **Assumptions:** survey figures overstate real willingness to pay, so the price is tested.
- **Tradeoffs:** a higher price raises margin and lowers volume; the right point depends on the goal.
- **Failure modes:** cost-plus only; copying a competitor; no test; a price with no packaging logic.
- **Worked example:** Worked examples 1 and 3.

| Item | Answer |
|---|---|
| Goal | |
| Cost floor | |
| Reference (competitors, substitutes) | |
| Value and willingness to pay | |
| Model, value metric, tiers | |
| Test plan | |
| Metrics and guardrails | |
| Risks and what would change the price | |

#### FW-C20-04 · The bundle test · Original

- **Inputs:** customer segments and their valuations of each component.
- **Outputs:** revenue and margin under separate pricing (the best price for each component) and under a bundle price; the correlation of valuations; the conclusion (bundle when valuations differ and are negatively correlated); a check for filler components and cannibalization.
- **Assumptions:** valuations are estimated from research, and marginal cost is known.
- **Tradeoffs:** bundles raise revenue when valuations differ and can hide the value of each part.
- **Failure modes:** bundling when all customers value the same part; assuming bundles always help.
- **Worked example:** Worked example 2 and EX-C20-04.

#### FW-C20-05 · The growth-loop map · Original

- **Inputs:** a product and its acquisition mechanisms.
- **Outputs:** the loop drawn as a cycle (input, action, output that becomes the next input); for a referral loop, invitations per user, conversion and k; the multiplier N ÷ (1 − k); the cycle time; the cumulative users by cycle; the guardrails (quality, spam, trust); and how a funnel feeds the loop.
- **Assumptions:** invitations and conversion are measured, not guessed.
- **Tradeoffs:** incentives raise k and may bring low-quality users.
- **Failure modes:** "go viral" as a plan; ignoring cycle time; k above 1 assumed to last.
- **Worked example:** Worked example 4 and EX-C20-05.

Formulas: **k = invitations per user × conversion rate; total users from a starting group N (k < 1) = N ÷ (1 − k).**

#### FW-C20-06 · The acquisition unit-economics sheet · Original

- **Inputs:** ARPU, gross margin, monthly churn, fully loaded acquisition cost by channel.
- **Outputs:** contribution per month, LTV, payback period, LTV:CAC ratio, a sensitivity grid (churn and CAC), the break-even churn and CAC, and a decision (scale, hold or fix).
- **Assumptions:** churn is constant for the calculation and checked against cohorts.
- **Tradeoffs:** a simple LTV is easy to compute and sensitive to the churn estimate.
- **Failure modes:** ad spend only in CAC; blended CAC; margins before cost to serve.
- **Worked example:** Worked example 5 and EX-C20-06.

Formulas: **contribution = ARPU × gross margin; LTV ≈ contribution ÷ churn; payback = CAC ÷ contribution.**

#### FW-C20-07 · The launch plan · Original

- **Inputs:** a product or feature, the audience and the date.
- **Outputs:** the launch tier; a readiness checklist (positioning, price, product, documentation, enablement, instrumentation, communications, rollout and rollback); a timeline from about eight weeks before to four weeks after; success criteria with guardrails and a decision rule; owners.
- **Assumptions:** functions meet in a launch review a week before.
- **Tradeoffs:** a larger launch gets attention and raises the cost of failure.
- **Failure modes:** a task list with no success measure; no rollback; support not told.
- **Worked example:** EX-C20-07 and IQ-C20-08.

## 4. Answer architecture

### The "How would you price this?" answer, for 20 minutes

| Step | Minutes | What to produce |
|---|---|---|
| Goal and customer | 3 | What pricing should achieve; who buys; the problem and alternatives |
| Anchors | 4 | Cost floor, competitor reference, value ceiling (with a number each) |
| Model and packaging | 4 | The pricing model, the value metric, the tiers and what each is for |
| Evidence and test | 4 | How to estimate willingness to pay and test the price with guardrails |
| Economics and risks | 3 | Margin, attach or conversion, cannibalization, perception |
| Recommendation | 2 | A price, the packaging and what would change it |

**Pacing rules.** If the interviewer gives a specific constraint (a competitor's price, a margin target), build on it. If you run behind, keep the anchors, the model and the recommendation.

**How to say it.** "I'd price between the floor and the ceiling: the cost to serve is about $200 a unit, which with a 55% margin gives a floor near $445; competitors sit at $300 to $500; and the value is in the daily health insight. I'd test $449."

**How to close.** "So $449 with a subscription at $9.99, tested against $399 and $499 on a holdout. I'd change it if conversion falls more than expected or if the service attach rate falls below about 43%."

### Type: price a product or feature

Goal, customer and value, anchors, model and packaging, test, economics, risks, a recommendation.

### Type: plan a launch

Target and value, positioning, channels, tier and timeline, readiness checklist, success criteria and rollback.

### Type: a growth mechanism (referral, virality, channel)

Funnel versus loop; k and cycle time; guardrails on quality; unit economics by channel.

### Type: add a tier, benefit or bundle

Costs and benefits per customer; cannibalization; the bundle test; a test with a holdout.

### Type: unit economics and CAC

The sheet: contribution, LTV, payback, ratio; sensitivity; a decision rule.

### Common interviewer interventions, and what to do

| Interviewer says | What it means | What to do |
|---|---|---|
| "How did you get that price?" | Evidence | Floor, reference, value, and a test |
| "A competitor charges half." | Positioning and value | Differentiation, segment, willingness to pay |
| "What happens to existing customers?" | Transition | Grandfathering, communication, migration |
| "Won't this cannibalize our main plan?" | Tier logic | Fences, a test of mix, a guardrail |
| "How would you know the launch worked?" | Success criteria | A metric, guardrails and a decision rule |
| "That's a big CAC." | Economics | Payback, LTV, sensitivity, channel split |

## 5. Worked examples

All five examples are `Illustrative`: the products and figures are invented (invented), and the arithmetic was computed. Company types are settings only, with no claim about any real company's prices or economics.

### Worked example 1 — Pricing a premium wearable with its services subscription (Illustrative)

*Setting: a premium wearable device and a subscription, of the kind several large device companies sell. No fact about any real product or price is claimed.*

**The situation.** A team plans a premium health wearable and a health-services subscription. The all-in unit cost (parts, assembly, logistics and a warranty allowance) is $200. The target gross margin on the device is 55%.

**The cost floor (FW-C20-03).** Price at a 55% margin: $200 ÷ (1 − 0.55) = about $444. So the price should not be below roughly $445 if the margin target holds.

**Willingness to pay.** A survey of 1,000 target customers (invented) asks whether they would buy at four prices: 62% at $349, 41% at $449, 22% at $549 and 9% at $649. Stated intent overstates purchase, so use it for relative comparison. The margin index (price minus cost, times the share willing) is: at $349, (349 − 200) × 0.62 = 92.4; at $449, 249 × 0.41 = 102.1; at $549, 349 × 0.22 = 76.8; at $649, 449 × 0.09 = 40.4. The highest margin per respondent is at $449, which also clears the floor, and competitors reference prices between about $300 and $500 (invented). Recommended starting price: $449, tested against $399 and $499.

**The services economics.** The subscription costs $9.99 a month (about $120 a year) with a 70% gross margin. Suppose 35% of buyers subscribe in year one and 80% of subscribers renew each year. Revenue per device sold: year one 0.35 × $119.88 = $41.96; year two $33.57 (80% retained); year three $26.85. Three-year services revenue is about $102.4 per device and, at 70% gross margin, contribution is about $71.7 per device. The device itself earns $249 at $449, so services add about 29% to the three-year contribution per device (71.66 ÷ 249).

**A trial that raises attach.** Suppose giving three months free would raise attach from 35% to 50% but cost $3.00 a month to serve ($9.00 per trial user) for the 80% of buyers who activate it ($7.20 per device). Year one: 50% of buyers pay for nine months, $44.95 of revenue, contribution 0.70 × $44.95 − $7.20 = $24.27, lower than the $29.37 without the trial. Years two and three: $33.57 and $26.85 of contribution (50% attach, retained at 80%), against $23.50 and $18.80 without the trial. Three-year contribution with the trial is $84.69, against $71.66 without it: the trial wins by about $13 per device if the 50% attach holds. The break-even attach with the trial is about 43%: below that, the trial loses money. So the decision depends on one assumption, which a test must settle: run the trial for a share of launch buyers and measure attach and retention at 90 days.

**Recommendation.** Launch at $449 with the subscription at $9.99; test the three-month trial on half of buyers; decide on the 90-day attach (continue the trial if attach is at least 45%, drop it if below 43%); watch returns and the services churn as guardrails.

**What this shows.** The price came from a floor, a willingness-to-pay curve and the services economics, and the trial decision came down to one testable number.

### Worked example 2 — Does a bundle help? (Illustrative)

**The situation (FW-C20-04).** Two digital products, A and B, with zero marginal cost. Three customers value them as follows (invented): customer 1 values A at $10 and B at $3; customer 2 values A at $6 and B at $7; customer 3 values A at $3 and B at $10.

**Best separate prices.** Price A at $6: customers 1 and 2 buy, revenue $12 (at $10 only customer 1 buys: $10; at $3 all buy: $9). Price B at $7: customers 2 and 3 buy, revenue $14 (at $10: $10; at $3: $9). Best separate total: $12 + $14 = $26.

**Bundle.** Each customer values the pair at $13 (10 + 3, 6 + 7, 3 + 10). At a bundle price of $13, all three buy: revenue $39. The bundle raises revenue by 50% ($39 against $26).

**Why it works.** The customers' valuations of A and B are negatively correlated: those who value A most value B least. Separate prices lose the low-valuing customer for each product; the bundle price fits all three because the *total* valuations are equal.

**When it fails.** If everyone valued A highly and B at almost nothing, a bundle with B would add no value and might look like filler; if one customer valued each product at $13 and others at $1, separate prices would do as well. Check the correlation before bundling.

**Other checks.** The marginal cost of components (a costly component can make a bundle unprofitable), cannibalization of single purchases, and how the bundle changes perceived value.

**What this shows.** A small table of valuations explains when a bundle helps: when the parts are valued differently across customers.

### Worked example 3 — Choosing the value metric (Illustrative)

**The situation (FW-C20-03) (invented).** A software product with an AI feature costs $0.02 per task to serve. Two customers: customer A has 5 users and runs 4,000 tasks a month (a few people using it heavily); customer B has 200 users and runs 3,000 tasks a month (many people using it lightly).

**Three pricing options.**

| Option | Customer A revenue | A margin | Customer B revenue | B margin |
|---|---|---|---|---|
| $20 per seat per month | $100 | $20 | $4,000 | $3,940 |
| $0.05 per task | $200 | $120 | $150 | $90 |
| $8 per seat plus $0.03 per task | $160 | $80 | $1,690 | $1,630 |

Cost to serve: A 4,000 × $0.02 = $80; B 3,000 × $0.02 = $60.

**Read it.** *Per seat* is nearly unprofitable for customer A (a $20 margin on $100 of revenue, 20%) and very profitable for B; heavy users of the AI feature are underpriced. *Per task* matches cost and value for A and gives B only $150: it ignores the value B gets from the whole team having access. *Hybrid* charges both: A pays $160 (50% margin) and B $1,690.

**Which metric tracks value and cost?** The AI feature's cost is per task; the collaboration value is per seat. A hybrid with an included allowance captures both: for example $10 per seat with 100 tasks per seat included and $0.03 for each extra task. Customer A: seats $50, included 500 tasks, extra 3,500 × $0.03 = $105: $155 (margin $75). Customer B: seats $2,000, included 20,000 tasks, extra none: $2,000 (margin $1,940).

**Decision and risks.** Choose a per-seat price with an included task allowance and a per-task overage. Risks: bill shock for customers near the limit (offer alerts and caps); complexity (explain it on one line); gaming (sharing seats). Test with a sample of customers and watch conversion, upgrade rate and margin by segment (C25.6).

**What this shows.** The right value metric made price follow both value and cost, and a table of two customers exposed what each simple model misses.

### Worked example 4 — Can a referral loop carry growth? (Illustrative)

**The situation (FW-C20-05) (invented).** A consumer app has a referral feature: each user sends 4 invitations on average, and 12% of invitations convert to new users. Paid acquisition brings 10,000 new users in a month at a cost of $20 each ($200,000).

**Viral coefficient.** k = 4 × 0.12 = 0.48. Each new user brings 0.48 further users.

**What the loop adds.** Total users from the 10,000 paid users across all generations: 10,000 ÷ (1 − 0.48) = 19,231. So the loop nearly doubles each paid cohort (a multiplier of 1.92), and the effective cost per user falls from $20 to $200,000 ÷ 19,231 = $10.40 over the long run. But it takes time: if each generation takes two weeks, the cumulative users after one, two, three and four cycles are about 14,800, 17,100, 18,200 and 18,700; most of the benefit arrives within about two months.

**Can it be self-sustaining?** At k = 0.48, no: without paid acquisition, each cohort shrinks by about half. To reach k = 0.9 the team could raise invitations to 6 and conversion to 15% (6 × 0.15 = 0.90). Then the multiplier is 10 and, over five generations, a cohort of 10,000 grows to about 40,950 users (10,000 × (1 + 0.9 + 0.81 + 0.729 + 0.656)); the long-run total approaches 100,000. But k is hard to raise: invitations beyond a few annoy users, and incentives (a reward for inviting) attract invitations from people who do not use the product.

**Guardrails.** Quality of referred users (activation and retention against paid users), spam complaints and unsubscribes, the cost of rewards per converted user, and fraud (fake accounts earning rewards).

**Decision.** Do not rely on virality alone: keep paid acquisition for the base and improve the loop where it is cheap (make invitations contextual, with a reason to invite: sharing something the recipient values); test an incentive on a holdout and measure retention of referred users, since an incentive that lifts k and lowers quality can cost more than it saves.

**What this shows.** Computing k and the multiplier showed that a loop with k below 1 helps but cannot replace acquisition, and that cycle time and quality matter as much as k.

### Worked example 5 — Is the acquisition economics healthy? (Illustrative)

**The situation (FW-C20-06) (invented).** A subscription app: ARPU $8 a month, gross margin 75% after cost to serve, monthly churn 5%, fully loaded CAC $45.

**The sheet.** Contribution per month: $8 × 0.75 = $6.00. LTV ≈ $6.00 ÷ 0.05 = $120. LTV:CAC = 120 ÷ 45 = 2.67. Payback = 45 ÷ 6.00 = 7.5 months.

**Read it.** A payback of 7.5 months is good; an LTV:CAC of 2.67 is below the common heuristic of about 3 `[V: arithmetic checked; the 3:1 and 12-month benchmarks are common heuristics, not sourced]`. The ratio is sensitive to churn: LTV falls to $100 if churn rises to 6% (ratio 2.22) and rises to $150 if it falls to 4% (ratio 3.33).

**Sensitivity grid.**

| Monthly churn | CAC $40 | CAC $45 | CAC $60 |
|---|---|---|---|
| 4% | 3.75 | 3.33 | 2.50 |
| 5% | 3.00 | 2.67 | 2.00 |
| 6% | 2.50 | 2.22 | 1.67 |

Payback by CAC: $40 gives 6.7 months, $45 gives 7.5 and $60 gives 10.0.

**Decision rule.** Scale paid acquisition where the ratio is at least 3 and payback under 12 months: at current churn that means a CAC of $40 or less, or churn of 4% with CAC up to $45. Otherwise fix retention first: a one-point churn reduction moves the ratio more than a 10% cut in CAC (from 2.67 to 3.33 against 2.67 to 2.96).

**Caution.** CAC should be by channel (the blended $45 may hide a $25 organic channel and a $90 paid one); churn should be read by cohort (new users churn faster than old ones, so a constant 5% overstates the value of long-lived customers and understates the early losses); and LTV is a forecast, not a fact.

**What this shows.** Three numbers and a sensitivity grid turned "is it healthy?" into a decision: scale where the ratio and payback pass, and fix retention before spending more.

## 6. Baseline, Strong, Standout

**Prompt:** "How would you price a new subscription for a meal-planning app?"

### Baseline answer

"I'd look at what competitors charge and pick a similar price, maybe a bit lower to attract users, around $5 a month, and offer a free trial."

*What is wrong:* copies competitors; no customer, no value, no cost, no test.

### Strong answer

"I'd start with who it's for and what it's worth to them: busy households who spend money on groceries and waste some food. If the app saves a family $20 a month in waste, then $5 to $10 is a fair share of the value. Competitors charge $4 to $8, so I'd position around $6.99 a month with a discount for annual. I'd offer a free tier with limited plans and a 14-day trial of the paid tier, and test two prices with a holdout, measuring conversion to paid and 90-day retention."

### Standout answer

Everything in the Strong answer, plus:

"I'd set the price between a cost floor and the value ceiling. Cost to serve is small, so margin isn't binding; the real constraint is conversion and churn. I'd estimate willingness to pay with a price-sensitivity survey and then test, because stated willingness overstates what people pay. Packaging: free for one weekly plan; paid for unlimited plans, shopping-list sync and nutrition tracking; the value metric is the household, not the plan. I'd check unit economics: at $6.99 with 80% margin and 6% monthly churn, LTV is about $93; with a CAC under $30, the ratio is above 3 and payback is about five months; at $45 CAC, the ratio falls to about 2 and I'd fix retention before buying users. I'd run the test on new sign-ups only, to avoid disrupting existing users, with guardrails on trial-to-paid and refunds. I'd change my view if the cheaper price raised conversion enough to make revenue per visitor higher, which I'd compute from the test."

### What moves an answer up a band

| From Baseline to Strong | From Strong to Standout |
|---|---|
| Starts from the customer and the value, not competitors | Anchors (floor, reference, ceiling) and the value metric |
| Proposes a test with a metric | Computes unit economics and a decision rule |
| Offers a tier or trial | Packaging logic, transition and guardrails |

## 7. Company lens

All claims describe what companies say publicly or what candidates commonly report, not insider knowledge. Prices, products and interview formats change `[as of 2026-10]`.

> **Company lens: Google [as of 2026-10].** Google monetizes largely through advertising and also sells subscriptions and cloud services `Public` `[V: Alphabet Form 10-K for 2025]`. Candidates commonly report strategy and product questions about free products with paid tiers and ad models `Inferred`. Practical consequence: reason about who pays (users or advertisers), the free tier's cost, and when a paid tier is justified.

> **Company lens: Meta [as of 2026-10].** Meta's consumer products are free to users and funded by advertising, and its business tools involve advertiser pricing `Public` `[V: Meta Form 10-K for 2025]`. Candidates commonly report questions on monetizing a messaging or social product `Inferred`. Practical consequence: separate user value from advertiser value, and name the experience guardrails on ads.

> **Company lens: Microsoft [as of 2026-10].** Microsoft sells productivity and cloud products by subscription and has offered AI assistants as add-ons and in bundles `Public` `[V: Microsoft 365 Copilot at 30 dollars per user per month from 1 November 2023 (Directions on Microsoft)]`. Candidates commonly report packaging, bundling and enterprise-pricing questions `Inferred`. Practical consequence: reason about add-on versus bundle, seat-based pricing with usage, and enterprise buying (C25.6).

> **Company lens: Amazon [as of 2026-10].** Amazon runs a paid membership that bundles delivery, video and other benefits `Public` `[V: FTC action and settlement]`, and has faced scrutiny of enrollment and cancellation practices (C10.10). Candidates commonly report questions on membership benefits and seller pricing `Inferred`. Practical consequence: compute the cost per member of a benefit against its effect on retention and spend, and design honest sign-up and cancellation.

> **Company lens: Apple [as of 2026-10].** Apple sells premium hardware and a growing set of services `Public` `[V: Apple Form 10-K for fiscal 2025]`. Candidates commonly report premium-pricing and services-attach questions `Inferred`. Practical consequence: connect device margin, services attach and retention (Worked example 1), and justify premium positioning with craft and ecosystem value.

> **Company lens: Netflix [as of 2026-10].** Netflix is a subscription service that introduced an ad-supported tier and tightened account sharing in recent years `Public` `[V: Netflix ad tier launched 3 November 2022; extra-member fee introduced 2023 (Fast Company)]`. Candidates commonly report questions on tiers, price changes and ad tiers `Inferred`. Practical consequence: reason about tier fences, cannibalization of the premium plan, ad load and retention.

> **Company lens: Stripe [as of 2026-10].** Stripe's payments pricing is usage-based, a percentage plus a fixed amount per transaction, with custom pricing for larger users `Public` `[V: Stripe pricing page: percentage plus fixed fee per transaction, custom pricing for large volume]`. Candidates report questions on developer-product pricing `Inferred`. Practical consequence: choose a value metric that scales with the customer's success, and discuss volume discounts and custom pricing.

## 8. Common mistakes

| # | Mistake | How to detect it | Fix |
|---|---|---|---|
| 1 | Pricing with no customer | "I'd charge $10" | Start from the customer and value; floor, reference, ceiling |
| 2 | Cost-plus as the method | "Cost plus 30%" | Cost is the floor; value sets the ceiling |
| 3 | Copying a competitor | "Same as theirs" | Position and value first |
| 4 | Trusting survey intent | "62% said they'd buy" | Use as relative; test on real traffic |
| 5 | Wrong value metric | Seats for a usage-cost product | Metric that tracks value and cost |
| 6 | "Go viral" as strategy | No k, no cycle time | Compute k and the multiplier |
| 7 | Blended CAC | One CAC for all channels | CAC by channel; fully loaded |
| 8 | LTV without churn evidence | A constant 5% assumed | Cohort churn; sensitivity |
| 9 | A launch with no success measure | A task list | Metric, guardrails, decision rule |
| 10 | Ignoring existing customers | A price change with no plan | Grandfathering and communication |

## 9. Mental models applied

Four models, each tied to a decision in this chapter.

**Anchoring** (`MM-anchoring`). The first number a person sees shapes their sense of value `[V: Tversky and Kahneman, Judgment under Uncertainty: Heuristics and Biases, Science 185(4157), 1974, pp. 1124 to 1131 (adjustment from an anchor)]`. A visible higher tier makes the middle plan look reasonable; a competitor's price frames yours. Use it honestly in packaging, and test it.

**Compounding** (`MM-compounding`). Growth that feeds itself builds on its own results. A loop with k near 1 and a short cycle time compounds; one with k of 0.3 and a long cycle does not. Compute before betting on it.

**Marginal thinking** (`MM-marginal-thinking`). Decide by the change an action causes, not by averages: the contribution of the next customer or the next task, not the average margin. It explains why heavy users can be unprofitable at an average price (Worked example 3).

**Adverse selection** (`MM-adverse-selection`). When a price or offer attracts the customers who benefit most and cost most, the average customer is worse than expected `[V: Akerlof, Quarterly Journal of Economics 84(3), August 1970, pp. 488 to 500, the founding paper on quality uncertainty; the insurance-style wording here is the usual textbook form]`. Unlimited plans attract heavy users; a delivery subscription attracts frequent orderers. Model the segment that joins.

## Engineering, design and data-science perspectives

- **Engineering.** Pricing and packaging become entitlements, billing, metering and migration; a pricing change can be a large project. Involve engineering early, and ask what a usage meter, a plan change or a grandfathered price costs to build and run.
- **Design.** The pricing page, the paywall and the upgrade prompt are product surfaces: clarity and honesty matter (C10.10), and complexity costs conversion. Test the page like any other.
- **Data science.** Price tests, willingness-to-pay analyses, LTV and churn models need careful design (C14): interference between prices, novelty and selection effects. Agree the metric, the guardrails and the duration up front.
- **Finance, legal and sales.** Finance reviews margins and forecasts; legal reviews terms, consent, auto-renewal rules and regional requirements; sales needs a price list and a clear story. Bring each in before the announcement.

## Checklist: before you propose a price or a launch

1. Have I named the customer, the problem and the alternative?
2. Do I have a cost floor, a reference and a value estimate, each with a number?
3. Have I chosen the model, the value metric and the tiers, and said what each tier is for?
4. Is there a test plan with a holdout, a metric and guardrails?
5. Have I computed CAC (by channel), LTV, payback and a sensitivity grid?
6. For a loop, have I computed k, the multiplier and the cycle time?
7. Does the launch plan have a tier, a checklist, a timeline, success criteria and rollback triggers?
8. Have I involved product marketing, sales, support, finance and legal, and planned for existing customers?

## 10. Case studies

#### CS-C20-01 · The add-on priced at cost plus thirty percent · Illustrative · Beginner

*Fictional composite. Every number is invented (invented).*

**Situation.** A business-software team builds a reporting add-on for its analytics product. The cost to serve is $9 per seat per month. Finance suggests a cost-plus price of $12 (cost plus about 30%), and the team prepares to launch at $12.

**Constraints.** A quarter to launch; 1,000 seats of target customers in an early-access group; no pricing research done; a PM new to pricing.

**Data.** Interviews with 15 customers suggest the add-on saves each analyst three to four hours a month, which they value at $30 to $50 an hour. A price-sensitivity survey of the early-access group (invented) suggests that 80% would buy at $12, 52% at $35 and 25% at $60.

**Problem definition.** As an observable problem: "The price is set from cost, while customers' willingness to pay is several times higher, so the team may leave most of the value uncaptured."

**Analysis.** Applying the pricing worksheet (FW-C20-03): the cost floor is $9; the reference (what customers use now, a manual process and two competing tools priced at about $30 to $40) is higher; the value ceiling is on the order of $90 to $200 a month per analyst (three to four hours at $30 to $50). Stated intent overstates purchase, so the survey is used for relative comparison. Revenue and margin per 1,000 seats: at $12, 800 buy: revenue $9,600 and margin $3 × 800 = $2,400. At $35, 520 buy: revenue $18,200 and margin $26 × 520 = $13,520. At $60, 250 buy: revenue $15,000 and margin $51 × 250 = $12,750. The $35 price yields about 1.9 times the revenue and 5.6 times the margin of $12.

**Options.**

| Option | Optimizes | Costs |
|---|---|---|
| A. Launch at $12 (cost plus) | Adoption and simplicity | Leaves most of the value uncaptured; hard to raise later |
| B. Launch at $35 after a live test of $29, $35 and $45 on new accounts | Revenue and margin with evidence | Slower launch; possible lower adoption |
| C. Launch at $60 | Margin per seat | Lower volume; risk of positioning as a luxury |

**Tradeoffs.** B costs a few weeks and yields evidence; A is simple and gives away value; C may be too high for the evidence.

**Decision.** Choose B: test $29, $35 and $45 on a holdout of new accounts for four weeks, measuring conversion, revenue per account and 60-day retention, with a guardrail on support contacts; set the packaging as an add-on with a free 14-day trial.

**Outcome.** In this fictional scenario, the $35 price converted 48% of trial accounts and had the highest revenue per account; $45 converted 33%; $29 converted 53% with lower revenue; retention at 60 days was similar across arms (invented). The team launched at $35.

**Alternative outcomes.** If $45 had converted nearly as well as $35, the team would have moved up and tested again. If 60-day retention had fallen at higher prices, the team would have favored the lower price. The lesson: cost is a floor, value sets the ceiling, and a test settles the price.

#### CS-C20-02 · Adobe, 2013: from a boxed suite to a $49.99-a-month subscription · Verified · Advanced

*Sources (types): Adobe's press release of 6 May 2013 (primary; its full text was read as reproduced on a technology news site that cites the adobe.com original); Adobe's quarterly report for the period ended 31 May 2013, its earnings releases for the third and fourth quarters of fiscal 2013 (filed as exhibits with the US Securities and Exchange Commission), and its annual reports for fiscal 2011, 2012 and 2014 (all primary); and two secondary reports of the list prices of the boxed suite, whose editions are not identical. The analysis is the author's. Figures and prices were re-read against these sources in October 2026.*

**Situation.** On 6 May 2013 Adobe announced that it would stop developing new versions of its boxed Creative Suite software and would deliver its creative tools through Creative Cloud, a subscription. The release stated that individual Creative Cloud membership was $49.99 a month based on an annual membership, that existing owners of CS3 to CS5.5 would get their first year at $29.99 a month, that students and teachers would pay $29.99 a month, and that teams would pay $69.99 a month per seat; it added that promotional pricing was available for some customers, including CS6 users, and that Adobe would keep selling CS6 and had no plans for future releases of Creative Suite `[V: Adobe press release, 6 May 2013]`. Adobe's fiscal 2011 annual report says it announced in October 2011 a major new offering to deploy and license its creative tools, Creative Cloud, marketed as a subscription and expected to be available in 2012 `[V: annual report, fiscal 2011]`, and the release said the service had more than half a million paid members and well over two million free members, about a year after its launch `[V: press release]`. In its quarterly report for the period ended 31 May 2013, Adobe reported that its Digital Media revenue had decreased by $142.6 million in the quarter, compared with the same quarter a year earlier, as it transitioned toward subscriptions, with subscription revenue recognized ratably over the term. It exited its third fiscal quarter of 2013 with about 1.03 million paid Creative Cloud subscriptions and a Creative annualized recurring revenue of $546 million, and its fourth quarter with about 1.44 million subscriptions and a Creative annualized recurring revenue of $768 million `[V: earnings releases, 2013]`. The documents contain one unexplained difference: the fourth-quarter release states an increase of 402 thousand subscriptions over the end of the third quarter, while the two reported totals differ by 408 thousand, and the filings read do not say why. Adobe's annual report for fiscal 2014 shows net income of $832.8 million in fiscal 2012, $290.0 million in fiscal 2013 and $268.4 million in fiscal 2014 `[V: annual report, fiscal 2014]`; the filings read here do not apportion the fall among its causes.

**Constraints.** A flagship product line for creative professionals (the release calls Creative Cloud the company's flagship offering for creatives); a large installed base of perpetual-license customers; revenue recognized over the term under a subscription, where a boxed license was recognized when sold; and a risk that existing customers would feel they were being forced (an inference: the sources read do not describe customer reaction).

**Data.** As reported: the announcement and price points; the quarterly revenue decrease in Digital Media; the subscription counts and annualized recurring revenue at the end of the third and fourth quarters; net income for fiscal 2012 to 2014.

**Problem definition.** *The author's reading.* Adobe wanted a more predictable, growing revenue base and a closer relationship with customers, at the cost of a revenue dip and the risk of alienating existing buyers. As an observable problem: "How to change the pricing model of a product with a large installed base without losing its customers or its investors' confidence."

**Analysis.** *The author's analysis, through this chapter's tools.*

*Revenue timing, the verified mechanism.* A perpetual license is recognized as revenue when sold; a subscription is recognized ratably over its term. Adobe's annual report for fiscal 2012 says that the success of Creative Cloud adoption lowered reported revenue for that reason, and its quarterly report for the period ended 31 May 2013 attributes the $142.6 million fall in Digital Media revenue to adoption of the subscription offerings `[V: annual report, fiscal 2012; quarterly report]`. The arithmetic of the price: $49.99 a month is $599.88 a year. Reported list prices of the boxed suite varied by edition, about $1,299 for one and $2,599 for the Master Collection `[V: two secondary reports, 2013 and 2024]`, so a subscription takes about 26 to 52 months (1,299 ÷ 49.99 and 2,599 ÷ 49.99) to collect the same total as one box. How this compares with what customers paid over time depends on how often they upgraded and at what upgrade price, which the sources read do not show, so I make no claim that revenue per customer fell or rose. The case for the change had to rest on more customers, longer retention and predictability (an inference).

*Metrics that matter in a subscription.* Revenue recognized over time hides progress in the short run; the metrics the company emphasized were the number of paid subscriptions and annualized recurring revenue, which moved quickly: Creative ARR rose from $546 million to $768 million in a single quarter. This is the lesson of choosing the right metric (C05) when changing a model: the income statement lagged, and leading indicators showed the change working.

*Packaging and the value metric.* The release shows tiering by customer type: individuals ($49.99 on an annual membership), owners of earlier suites (a discounted first year at $29.99), students and teachers ($29.99) and teams ($69.99 a seat), with promotional pricing for some customers `[V: press release]`. The discounted first year for owners is a transition tool (grandfathering in effect): it eased the move for existing buyers. Whether any lower-priced plan widened the base is not shown in the sources read.

*Why it could work for Adobe (inference).* The release says that focusing development on Creative Cloud would speed the rate of innovation, so a subscription could deliver continuing value and a recurring fee matched a recurring benefit; whether customers had few close alternatives is not shown in the sources read. For a product without continuing value, the same move could lose customers.

*What the evidence does not show.* The share of customers lost or the effect of competitors' promotions; the precise reasoning inside the company; and how much of the later growth is due to the pricing change rather than to market growth and product investment. The case supports an analysis of the economics and the transition, not a claim that subscriptions always win.

**Options.** *The author's reconstruction of choices the company could have faced; not a record of its deliberations.*

| Option | Optimizes | Costs |
|---|---|---|
| A. Keep perpetual licenses and offer a subscription as a choice | Lower risk of alienating customers | Two models to run; slower shift in predictability; less pressure to convert |
| B. Move new development to subscription only, with a discounted first year for existing customers and promotional pricing | Recurring revenue, a wider base, predictability | A revenue dip; customer backlash; investor skepticism |
| C. Move gradually over many years | Smoothness | Slower; competitors and expectations may move first |

**Tradeoffs.** B accepts a near-term revenue and earnings decline for a bigger, steadier base; A keeps the old revenue and the old problems; C delays the choice.

**Decision.** As documented, Adobe chose B on 6 May 2013.

**Outcome.** Reported: Creative Cloud subscriptions passed one million within the third quarter of fiscal 2013 and reached about 1.44 million by the end of the year, and Adobe's annual report for fiscal 2014 shows net income falling from $832.8 million in fiscal 2012 to $290.0 million in fiscal 2013 and $268.4 million in fiscal 2014 `[V: earnings releases; annual report, fiscal 2014]`. Longer-run results come from company reports beyond the sources read here and are not claimed.

**Alternative outcomes.** *Inference.* A company with weaker lock-in might have lost customers to alternatives. A reader should avoid hindsight: the decision looked risky then, with a revenue gap forecast and customer anger. The method to carry away: compare revenue recognition before and after, choose the leading metrics for the new model, use transition pricing for existing customers, and check whether your product's switching costs and continuous value could support the change.

## 11. Interview questions and model answers

Nine questions. Model answers are `Illustrative` (composite candidates), and every figure is invented (invented). Each ends with follow-ups and answers. Where a real company's product is the setting, the answer reasons from public information and states no internal fact. The answers are fuller than a first pass in a real round.

#### IQ-C20-01 · Beginner · strategy-gtm · ST

**Prompt.** What is a go-to-market plan, and what is a PM's role in it?

**Rubric.**
- **Baseline:** "It's the plan for launching a product with marketing."
- **Strong:** Names the elements: customer, value, positioning, price, channels, launch, metrics.
- **Standout:** Distinguishes motions, assigns ownership across functions, ties the plan to a success measure, and gives an example.

**Model answer.** "A go-to-market plan is how a product reaches its target customers and wins them: who they are and what problem they have, what we say to them, what it costs and how it is packaged, how they find and buy it, how we launch, and how we'll know it's working. The motion varies: product-led for a consumer app or developer tool, sales-led for enterprise, partner-led where a platform brings the customers.

"The PM owns the customer problem, the value and the product, and works closely with product marketing on positioning and launch, with sales and support on enablement, and with finance on price. The PM usually co-owns the positioning and pricing decisions and carries the launch. For example, when we launched an expense-capture feature for small-business owners, I defined the target (owners tracking expenses in spreadsheets), the message (receipts captured automatically), the in-product launch and the success measure: the share of active owners who capture ten receipts in two weeks, with support contacts as a guardrail."

*Signals.* The elements; motions; ownership; a success measure.

**Follow-ups.**

- **Q.** Who decides the price? **A.** "It depends on the company, usually a pricing owner or leadership with finance, informed by the PM and product marketing. I'd bring willingness-to-pay evidence, the cost floor and a test plan, and agree who decides before the work starts."
- **Q.** What if product marketing and the PM disagree on the message? **A.** "I'd test both with customers: which version do they repeat, and what do they think the product does? The evidence settles most disagreements, and where it doesn't, we agree who decides and move on."

#### IQ-C20-02 · Beginner · strategy-gtm · ST

**Prompt.** Write a positioning statement for a new note-taking app for graduate students.

**Rubric.**
- **Baseline:** "The best note-taking app for students."
- **Strong:** Names the target, need, category, benefit and alternative.
- **Standout:** Targets by need, states a differentiator a competitor could not claim, supports it with proof, and plans a test.

**Model answer.** "For graduate students who read hundreds of papers and lose track of where an idea came from, [the app] is a notebook that links every note to its source passage. Unlike general note apps, where you copy and paste and lose the origin, it keeps the citation attached, so writing a literature review means assembling notes you can trace.

"What makes it sharp: the target is defined by a need (managing sources), not by 'students'; the benefit is one thing (traceable notes); the differentiator is specific; and a competitor could not say it unless they built it. Proof: a test with ten graduate students writing a short review, measuring time to assemble and citation errors against their current tools. For messaging I'd show three headlines to twenty students and ask which they'd repeat to a labmate and what they think the app does; I'd choose the one they can repeat and understand correctly."

*Signals.* Need-based target; one benefit; a differentiator; proof and a test.

**Follow-ups.**

- **Q.** Why not target all students? **A.** "A broad target produces a vague message and loses to general tools. I'd start with the segment with the sharpest need and the most willingness to pay, and expand when that works."
- **Q.** What if a big competitor adds the same feature? **A.** "Then the differentiator must be the way it works together: the workflow around sources, the quality of the links and the habit users have built. I'd watch for it and track how much of our retention comes from that feature."

#### IQ-C20-03 · Intermediate · strategy-gtm · ST · Apple

**Prompt.** Price a new premium wearable together with its services subscription.

**Rubric.**
- **Baseline:** "I'd price it like competitors, maybe a bit higher because it's premium."
- **Strong:** Uses cost floor, willingness to pay and the subscription's attach and margin.
- **Standout:** Computes the floor, finds the margin-maximizing price from willingness-to-pay data, models services economics over several years, tests a trial, and states the assumption that decides it.

**Model answer.** The setting is general; I reason from the structure of device-plus-services businesses and claim nothing about any real product or price. "I'd set the price between a cost floor and the value ceiling and treat the services as a second profit stream. The unit cost is about $200, so a 55% margin gives a floor near $445. Competitors sit between $300 and $500, and the value is a daily health insight. From a willingness-to-pay survey, the margin per respondent is highest at $449 (about 102 against 92 at $349 and 77 at $549), so I'd start at $449 and test $399 and $499, since survey intent overstates purchase.

"For the subscription at $9.99 a month with a 70% margin, 35% attach and 80% annual renewal, services contribute about $72 per device over three years, which is about 29% on top of the $249 device margin. A three-month free trial that lifts attach to 50% costs about $7 per device to serve and wins by about $13 over three years, but only if attach reaches about 43%; below that it loses. So I'd test the trial on half of buyers and decide on 90-day attach and retention.

"Positioning: premium on craft and ecosystem value, not price alone; guardrails: returns, services churn and support load."

*Signals.* Floor, WTP-based price, services economics, the deciding assumption, a test.

**Follow-ups.**

- **Q.** What if the competitor cuts price by 20%? **A.** "I'd check whether the segment I'm targeting responds to price: the survey and sales data by segment. If it does not, I'd hold and strengthen the value story; if the survey shows a drop in the share willing at $449, I'd consider an entry model and keep the premium for the flagship."
- **Q.** Would you bundle the subscription into the device price? **A.** "Possibly, for the first year, as a way to raise attach and retention, which the trial analysis suggests could pay if attach is high enough. The risk is conditioning customers to expect it free, so I'd make the included period explicit and test it."

#### IQ-C20-04 · Intermediate · strategy-gtm · ST · Amazon

**Prompt.** How would you decide whether to add a new benefit to a paid membership program?

**Rubric.**
- **Baseline:** "Add it if customers want it."
- **Strong:** Compares cost per member with effects on retention and spend.
- **Standout:** Computes the break-even retention gain, accounts for selection and cannibalization, designs a holdout test with guardrails, and considers honest enrollment and cancellation.

**Model answer.** The setting is general; I describe a method and no real program's economics `Inferred`. "I'd compare the benefit's cost per member with its effect on the member's value. Suppose a member pays $120 a year and contributes $150 a year of margin on their spending, so a retained member-year is worth $270, and renewal today is 85%. The benefit costs $18 per member a year. If it lifts renewal by 1.5 points, that is worth 0.015 × $270 = $4.05; if it also raises spending by 2%, that adds $3.00; the total is $7.05 against a cost of $18, a net loss of about $11 per member. To break even the benefit would need to lift renewal by about 5.6 points ((18 − 3) ÷ 270), which is unlikely for one benefit.

"So I'd not add it as designed, and I'd ask what could change the math: a cheaper way to deliver it, or a benefit that targets a segment where the effect is bigger (members at risk of leaving). I'd test with a holdout, measure renewal and spending at 90 and 365 days, and watch for selection (heavy users take up the benefit most). I'd also check that the program remains honest: clear enrollment and easy cancellation, since regulators and customers care (C10.10)."

*Signals.* Break-even computed; selection; a test; honesty about enrollment.

**Follow-ups.**

- **Q.** What if the benefit also attracts new members? **A.** "Then I'd add acquisition value: new members times their lifetime contribution, compared with the cost across all members, since existing members pay for the benefit too. The test would measure sign-ups in markets with and without the benefit."
- **Q.** What if leadership wants it for competitive reasons? **A.** "I'd show the cost and the break-even, and propose a cheaper version or a narrower launch. If it's a strategic choice, I'd say so explicitly and track the cost as an investment with a review date."

#### IQ-C20-05 · Intermediate · strategy-gtm · ST · Microsoft

**Prompt.** Should an AI assistant be sold as an add-on to a productivity suite or bundled into the suite price?

**Rubric.**
- **Baseline:** "Bundle it so everyone uses it."
- **Strong:** Compares revenue, cost and adoption for each.
- **Standout:** Computes contribution under each option, includes churn and cost to serve, considers strategic effects (adoption, data, competition), and plans a test.

**Model answer.** The setting is general; nothing here describes any real product or price `Inferred`. "I'd compute the contribution of each option for 1,000 users. The suite is $12 per user per month; the assistant costs about $6 per user per month to serve for a full user and $2.40 on average if the average user is lighter. *Add-on:* priced at $20, 15% attach: revenue 1,000 × $12 + 150 × $20 = $15,000; cost 150 × $6 = $900; contribution $14,100. *Bundle:* the suite price rises to $17 for everyone; suppose 5% of users leave over the increase: 950 users at $17 is $16,150; cost 950 × $2.40 = $2,280; contribution $13,870. On these numbers the add-on is slightly better; if the price rise lost only 2% of users, the bundle would be about $14,300 and ahead.

"So the numbers are close, and the deciding factors are strategic: a bundle puts the assistant in front of everyone, which grows usage, feedback and habit, and may defend against competitors; an add-on protects margin and lets heavy users self-select, and reveals willingness to pay. I'd propose an add-on first, with a trial for all, then move to a bundle at a higher suite price if attach and usage show that most users value it. I'd test price and packaging on a sample of enterprise customers, with guardrails on renewal and complaints."

*Signals.* Computed comparison; sensitivity; strategic factors; a staged plan.

**Follow-ups.**

- **Q.** What would make you choose the bundle at once? **A.** "If competitors have bundled and users expect it, or if the assistant's value depends on everyone using it (a shared workspace), or if the cost to serve falls enough that the bundle's margin holds. I'd compute with the new cost."
- **Q.** How do you handle enterprise customers who negotiate? **A.** "With a price list and guardrails: a floor per seat, discounts tied to volume and term, and a rule that the assistant is not given away free to close a suite renewal. Sales needs a clear story and a clear no (C32.7)."

#### IQ-C20-06 · Intermediate · strategy-gtm · ST · Netflix

**Prompt.** Should a subscription streaming service launch a cheaper, ad-supported tier?

**Rubric.**
- **Baseline:** "Yes, to reach more subscribers."
- **Strong:** Weighs new subscribers against cannibalization.
- **Standout:** Computes revenue under cannibalization assumptions, finds the break-even number of new subscribers, considers ad load and retention, and designs a test.

**Model answer.** The setting is general; I reason from the structure of the decision and claim nothing about any real company's numbers `Inferred`. "The question is whether the new tier adds more revenue than it takes from the premium tier. Suppose 1,000 premium subscribers at $15 a month: revenue $15,000. The ad tier is $8 plus about $5 a month of advertising revenue per subscriber, $13 in total. If 20% of premium subscribers move down and the tier adds 150 new subscribers, revenue is 800 × $15 + 200 × $13 + 150 × $13 = $16,550, up 10%. If 35% move down, it is 650 × $15 + 350 × $13 + 150 × $13 = $16,250. At 35% cannibalization, the tier needs at least 54 new subscribers to break even, about 5.4% growth. So the answer depends on the two uncertain numbers, the share who move down and the number who join.

"I'd also check ad revenue per subscriber, which depends on ad load and on advertisers, and retention: ad-tier subscribers may churn faster or slower; content costs are largely fixed, so the extra subscribers' margin is high. Fences matter: features the premium plan keeps (resolution, downloads, no ads) so that the move-down is limited. I'd test in one market with a holdout, measuring sign-ups, switching and retention at 90 days, with guardrails on satisfaction and ad complaints."

*Signals.* Computed cannibalization and break-even; ad economics; fences; a test.

**Follow-ups.**

- **Q.** What if ad revenue per subscriber is lower than expected? **A.** "Then the tier is less attractive: at $3 a month of ads, the tier's revenue per subscriber is $11 and the break-even new-subscriber count rises. I'd raise the price of the ad tier, increase ad load carefully or reduce the premium discount."
- **Q.** How do you protect the premium plan? **A.** "With fences customers value (quality, offline viewing, ad-free), a price gap that is not too wide, and communication that frames the tiers by need. I'd monitor the move-down rate and retain a holdout to measure it."

#### IQ-C20-07 · Intermediate · strategy-gtm · ST

**Prompt.** Your referral program has a viral coefficient of 0.4. What do you do?

**Rubric.**
- **Baseline:** "Try to get it above 1 so it goes viral."
- **Strong:** Computes what 0.4 means and what drives it.
- **Standout:** Computes the multiplier and cycle effect, decomposes k into invitations and conversion, evaluates incentives against quality, and sets guardrails and unit economics.

**Model answer.** "At k = 0.4 each new user brings 0.4 more, so the loop is not self-sustaining, but it multiplies acquisition by 1 ÷ (1 − 0.4) = 1.67: 10,000 users acquired by other means become about 16,700 over several cycles, and the effective acquisition cost falls by 40%. That is worth having and worth improving; it is not a growth engine by itself.

"I'd decompose k: say 4 invitations per user at 10% conversion. Levers: invitations (make the prompt contextual, at the moment the user gets value, and give a reason to invite: sharing something the recipient will want); conversion (the invitation page and the first-use experience for the invited). Raising invitations to 5 and conversion to 12% gives k = 0.6 and a multiplier of 2.5. An incentive can raise both but may attract people who do not use the product, so I'd test it against a holdout and measure the retention and activation of referred users and the reward cost per retained user.

"Guardrails: spam complaints and unsubscribes, fraud (fake accounts to earn rewards), and the quality of referred users compared with other channels. Unit economics: if a reward costs $5 and a referred user is worth $30 in contribution, it pays; if referred users churn twice as fast, it may not."

*Signals.* Multiplier; decomposition; incentive tradeoffs; guardrails.

**Follow-ups.**

- **Q.** What if the cycle time is long? **A.** "The value arrives late and cash tied up in rewards pays back slowly; I'd reduce the time to the first invitation (invite at activation) and measure cumulative users by week, not just k."
- **Q.** How do you know k is real? **A.** "I'd measure it by cohort from actual attribution, check that referred users are new (not existing users re-registering), and look at conversion from invitation to active user, not to sign-up."

#### IQ-C20-08 · Hard · strategy-gtm · ST

**Prompt.** How would you launch a significant new feature to existing users? Give the plan and the success criteria.

**Rubric.**
- **Baseline:** "Announce it by email and in the app."
- **Strong:** A staged launch with a checklist and metrics.
- **Standout:** Targets a segment with a message, a launch tier and timeline, a readiness checklist across functions, success criteria with guardrails and rollback triggers, a holdout, and a post-launch review.

**Model answer.** "First, who it is for within the base and what problem it solves for them: say a scheduling feature for the 30% of users who book appointments weekly. The message: 'book in two taps instead of six,' with proof from the beta. The tier: a staged rollout with an announcement only after the first stage is stable (C17).

"Timeline. Eight weeks out: positioning, success metrics and rollout plan agreed. Six weeks: beta with 2,000 users; feedback. Four weeks: documentation, support and sales enablement, in-product messages drafted. Two weeks: a readiness review across product, engineering, design, data, support, legal and marketing, with a checklist (quality, performance, accessibility, privacy, instrumentation, help content, rollback). Launch week: 5%, then 25%, then 100% over a week, with a daily check. Two to four weeks after: a review.

"Success criteria, written in advance: the share of target users who use the feature at least twice in the first two weeks (primary; target 35%), repeat usage at 30 days, and impact on the core metric (bookings per user) against a 5% holdout; guardrails: support contacts per user, crash rate, and cancellations; rollback if crash rate doubles or bookings per user fall more than 2%. I'd review adoption, retention and the holdout comparison, and decide to expand, iterate or roll back."

*Signals.* A target and message; a staged plan; cross-functional readiness; criteria and rollback; a holdout.

**Follow-ups.**

- **Q.** What if adoption is at 15% against a 35% target? **A.** "I'd diagnose before changing: is the problem awareness (users didn't see it), activation (they tried it and left) or value (they used it and it didn't help)? Each has a different fix: better placement and messaging, a simpler first use, or a product change. I'd test the cheapest fix first."
- **Q.** How do you work with sales and support in the launch? **A.** "I'd give them the value story, a clear scope, known issues and a feedback route, hold a launch review a week before and agree who answers what. Support is the early signal of problems, so I'd review its tickets daily in launch week."

#### IQ-C20-09 · Hard · strategy-gtm · ST

**Prompt.** Customer acquisition cost has risen 40% over two quarters. Diagnose it and decide what to do.

**Rubric.**
- **Baseline:** "Cut marketing spend."
- **Strong:** Segments by channel and checks conversion.
- **Standout:** Computes the effect on payback and LTV:CAC, decomposes the rise (mix, saturation, conversion, price or product changes), checks cohort quality, and decides with a rule.

**Model answer.** "First the effect: CAC rose from $45 to $63. With contribution of $6 a month (ARPU $8, margin 75%), payback went from 7.5 to 10.5 months, and with LTV of $120 the ratio fell from 2.67 to 1.90, below the usual threshold of about 3 `[V: arithmetic checked; the 3:1 and 12-month benchmarks are common heuristics, not sourced]`. So it matters.

"Diagnose by decomposing CAC into spend and new customers, by channel: is spend up while volume is flat (saturation: the cheapest audiences are used up and we are buying more expensive ones), did the mix shift toward a costly channel, did conversion fall (a landing page or product change; the funnel step where it fell), did a competitor or an auction raise prices, or is attribution broken (a tracking change counts fewer customers)? I'd also check the quality: do new customers retain as well as before? A cheap but poor channel and an expensive but good one look different in CAC and the same in value.

"Then decide with a rule: for each channel compute LTV:CAC and payback; cut or cap channels below the threshold; shift spend to channels that pass; fix the funnel step that fell if that is the cause; and improve retention if LTV is the lever. I would not cut across the board: it may drop the good channels with the bad."

*Signals.* The effect on payback and ratio; decomposition; cohort quality; a channel-level rule.

**Follow-ups.**

- **Q.** How do you tell saturation from a funnel problem? **A.** "Saturation shows as rising cost per click and falling reach in the same audience with a stable conversion rate; a funnel problem shows as a stable cost per click and a falling conversion at a particular step. Splitting CAC into those two parts tells which."
- **Q.** What if the finance team wants CAC back to $45 this quarter? **A.** "I'd show the channel-level view and propose which channels to cut and which to keep, with the payback of each, and what each choice does to volume. A target met by cutting good channels would reduce growth, which they may not want."

## 12. Exercises

Eight exercises. Each has a model solution and an alternative. Every figure is invented.

#### EX-C20-01 · A GTM one-pager

**Problem.** Fill in a go-to-market one-pager (FW-C20-01) for "a feature that lets restaurant owners accept table reservations in a delivery app."

**Context.** Strategy practice.

**Data.** None.

**Constraints.** Eight minutes.

**Expected approach.** FW-C20-01.

**Solution.** *Target and problem:* independent restaurant owners with 10 to 60 seats who take reservations by phone and lose bookings when they are busy. *Value and positioning:* "never miss a booking: customers reserve in the app you already use; no new tool" against the phone and a standalone booking tool. *Price and packaging:* free for the first 50 reservations a month, then $29 a month for unlimited; a no-show deposit option as an add-on. *Motion and channels:* in-app prompts to existing delivery partners (product-led), plus sales calls for chains. *Launch:* a beta with 200 restaurants in two cities, then a staged rollout. *Success:* share of beta restaurants taking at least 20 reservations a month by week four; guardrails: no-show rate, support contacts, delivery orders. *Owners:* PM, product marketing, partner sales, support, finance.

**Alternative solution.** Start from the competing tool and write the difference.

**Tradeoffs.** A narrow target for the beta gives cleaner learning.

#### EX-C20-02 · A positioning statement and test

**Problem.** Write a positioning statement for a budgeting app for freelancers with irregular income and design a test of two messages.

**Context.** Positioning practice.

**Data.** None.

**Constraints.** Seven minutes.

**Expected approach.** FW-C20-02.

**Solution.** "For freelancers whose income changes every month and who struggle to know what they can safely spend, [the app] is a budgeting tool that sets aside tax and a buffer from each payment automatically. Unlike spreadsheets and fixed-income budgeting apps, it plans around uneven months." Test: two headlines, "Budget for irregular income" and "Know what's safe to spend this week," shown to 300 freelancers each in a landing-page test; the measure is sign-up conversion with 30-day activation as a guardrail (to avoid choosing a headline that attracts the wrong users); also ask ten freelancers to say in their own words what the app does.

**Alternative solution.** Test the proof element (a number about taxes saved) instead of the headline.

**Tradeoffs.** A narrow message wins the target and may repel others; that is its purpose.

#### EX-C20-03 · Floor and willingness to pay

**Problem.** A device costs $120 to make and deliver. Target margin 60%. A survey of 500 shows willingness to buy of 55% at $199, 40% at $249, 24% at $299 and 10% at $349. Compute the floor, the margin per respondent at each price and the starting price.

**Context.** Pricing.

**Data.** As above.

**Constraints.** Six minutes.

**Expected approach.** FW-C20-03 and Worked example 1.

**Solution.** Floor: $120 ÷ (1 − 0.60) = $300. Margin per respondent: $199 gives $79 × 0.55 = 43.5; $249 gives $129 × 0.40 = 51.6; $299 gives $179 × 0.24 = 43.0; $349 gives $229 × 0.10 = 22.9. The margin is highest at $249, but that price is below the $300 floor, so the 60% margin target fails there (the margin is 52%). If the target is firm, price at $299 (a 59.9% margin, effectively at the floor) or $349 and accept lower volume; if volume matters more, price at $249 and accept the lower margin. State the tradeoff, test at $249 and $299, and decide on revenue, margin and returns. Survey intent overstates purchase, so use it for relative comparison.

**Alternative solution.** Lower the unit cost: a $100 cost gives a floor of $250 and fits the margin-maximizing price.

**Tradeoffs.** A margin target and a volume goal can conflict; make the choice explicit.

#### EX-C20-04 · The bundle test

**Problem.** Three customers value products A and B (at zero marginal cost) as follows: customer 1, A $12, B $2; customer 2, A $7, B $7; customer 3, A $2, B $12. Compute the best separate prices and revenue, and the revenue from a bundle at $14.

**Context.** Bundling.

**Data.** As above.

**Constraints.** Six minutes.

**Expected approach.** FW-C20-04 and Worked example 2.

**Solution.** Separate: A at $7 sells to customers 1 and 2, revenue $14 (at $12 only customer 1: $12; at $2 all three: $6); B at $7 sells to customers 2 and 3, revenue $14; total $28. Bundle: each customer values the pair at $14; at $14 all three buy: revenue $42, 50% higher than $28. The valuations are negatively correlated (who values A most values B least), so the bundle fits. Check marginal costs and cannibalization before deciding.

**Alternative solution.** Give the third customer a value of $12 for both products; separate pricing would then match the bundle, and bundling would not help.

**Tradeoffs.** A bundle can hide the price of each part; check perceived fairness.

#### EX-C20-05 · A referral loop

**Problem.** Each user sends 5 invitations and 10% convert. Compute k and the multiplier. What change gets k to 0.8? Compute the total from 8,000 starting users at k = 0.5 and k = 0.8.

**Context.** Growth loops.

**Data.** As above.

**Constraints.** Six minutes.

**Expected approach.** FW-C20-05 and Worked example 4.

**Solution.** k = 5 × 0.10 = 0.5; multiplier 1 ÷ (1 − 0.5) = 2. To reach 0.8: 8 invitations at 10%, or 5 at 16%, or 6 at about 13.3%. Total from 8,000 users: at k = 0.5, 8,000 × 2 = 16,000; at k = 0.8, 8,000 × 5 = 40,000 (long-run, over many cycles; the cycle time sets how fast). Conversion is usually more valuable to improve than the number of invitations, since more invitations annoy users. Guardrails: referred-user quality, spam complaints and reward cost.

**Alternative solution.** Compute the users after three cycles at k = 0.8: 8,000 × (1 + 0.8 + 0.64 + 0.512) = 23,616.

**Tradeoffs.** Higher k from incentives may reduce user quality.

#### EX-C20-06 · Unit economics

**Problem.** ARPU $12, gross margin 80%, monthly churn 4%, CAC $90. Compute contribution, LTV, payback and the ratio. What churn is needed for a ratio of 3 at this CAC?

**Context.** Acquisition economics.

**Data.** As above.

**Constraints.** Six minutes.

**Expected approach.** FW-C20-06 and Worked example 5.

**Solution.** Contribution: $12 × 0.8 = $9.60 a month. LTV: $9.60 ÷ 0.04 = $240. Ratio: 240 ÷ 90 = 2.67. Payback: 90 ÷ 9.60 = 9.4 months. For a ratio of 3 at CAC $90, LTV must be $270, so churn = $9.60 ÷ $270 = 3.56% a month. Alternatively CAC must fall to $80. Decision: payback is acceptable; improve retention by about half a point or lower CAC by about $10 before scaling spend, and check churn by cohort.

**Alternative solution.** Compute the ratio at 5% churn: LTV $192, ratio 2.13.

**Tradeoffs.** A longer payback is acceptable with cash and confidence in churn; a shorter one is safer.

#### EX-C20-07 · A launch plan

**Problem.** Write a launch plan (FW-C20-07) for a new "collaborative playlists" feature in a music app: tier, timeline, checklist, success criteria with guardrails and a rollback trigger.

**Context.** Launch planning.

**Data.** None.

**Constraints.** Eight minutes.

**Expected approach.** FW-C20-07 and IQ-C20-08.

**Solution.** *Tier:* a staged rollout with an in-app announcement after stability. *Timeline:* eight weeks out, positioning and metrics; six weeks, beta with 5,000 users; four weeks, help content, support and marketing materials; two weeks, readiness review (quality, performance, accessibility, privacy, content-moderation rules for shared lists, instrumentation, rollback); launch week 5%, 25%, 100%; after launch, a four-week review. *Success:* the share of weekly active users who create or join a collaborative playlist within two weeks (target 12%), repeat use at 30 days and effect on weekly listening hours against a 5% holdout. *Guardrails:* reports of inappropriate content, support contacts, crash rate. *Rollback trigger:* crash rate doubling, or reports rising above a stated threshold, or listening hours falling more than 1%.

**Alternative solution.** Limit the beta to friend groups, where the feature's value is clearest.

**Tradeoffs.** A longer beta delays the launch and reduces risk.

#### EX-C20-08 · Pricing for a local market

**Problem.** A global app charges $12 a month. In a market where average income and willingness to pay are much lower, test price points. Suppose a local price of 40% of the global price ($4.80), a monthly cost to serve of $1.20 per user, and a local payment fee of 4%. Compute the margin, and list three design changes for payments and plans.

**Context.** Regional lens (India).

**Data.** As above.

**Constraints.** Seven minutes.

**Expected approach.** The Regional Lens in C20, and C09.

**Solution.** Revenue $4.80; payment fee 4% = $0.19; cost to serve $1.20; contribution $4.80 − $0.19 − $1.20 = $3.41 a month (71%). So the local price remains profitable at 40% of the global price. Design changes: (1) offer the payment methods people actually use (bank-transfer payments through UPI, wallets and cards) and design renewals around recurring-payment mandate rules, including authentication limits (waived up to 15,000 rupees, and up to 1,00,000 rupees for some categories) `[V: RBI circular RBI/2023-24/88 of 12 December 2023; e-mandate framework of August 2019; the same limits appear in RBI's later notifications, including its 2025 authentication directions, checked October 2026]`; (2) offer shorter or smaller plans (weekly or monthly, lower-priced tiers, prepaid options) instead of annual-only; (3) support local languages and low-data use. Test two or three local price points on new users with guardrails on retention and refunds, and check for arbitrage (users in other markets buying at the local price).

**Alternative solution.** Test a lower-priced ad-supported or limited tier if willingness to pay is lower still.

**Tradeoffs.** Lower prices raise reach and lower revenue per user; check the unit economics for the new price.

## 13. Practice protocol

**Timed drills (three a week for two weeks).**

- *Week 1: price and position.* Use IQ-C20-01, IQ-C20-02, IQ-C20-03, EX-C20-02, EX-C20-03 and EX-C20-04. Answer "How would you price this?" aloud in twenty minutes for three products, and fill in a pricing worksheet for each.
- *Week 2: growth, economics and launch.* Use IQ-C20-07, IQ-C20-08, IQ-C20-09, EX-C20-05, EX-C20-06 and EX-C20-07. Compute k, LTV and payback by hand and write a launch plan with success criteria and a rollback trigger.

**With a partner.** Ask your partner to say "A competitor charges half" and "Won't this cannibalize our main plan?" at random, and to ask for the number behind every claim.

**Feedback checklist (yes, partly, no).**

1. Did I start from the customer and the value, not from a price?
2. Did I give a cost floor, a reference and a value estimate with numbers?
3. Did I choose the model, the value metric and the tiers, and say what each tier is for?
4. Did I propose a test with guardrails and a decision rule?
5. Did I compute CAC, LTV, payback and a sensitivity?
6. For a loop, did I compute k, the multiplier and the cycle time?
7. Did my launch plan include success criteria, guardrails and a rollback trigger?
8. Did I say what would change my recommendation?

**Answer journal.** Record the date, the prompt, the number you were asked for and whether you computed it, your score and the one fix.

## 14. Implementation playbook

Apply the chapter on real work over the next three weeks. If you do not work on pricing or launches, apply it to a product you use.

**Days 1 to 3.** Pick a product or feature (yours or one you use) and write its go-to-market one-pager (FW-C20-01) and positioning statement (FW-C20-02). Ask product marketing or a colleague what is missing.

**Week 1.** Fill in a pricing worksheet (FW-C20-03) for it: floor, reference, value, model, value metric, tiers, test plan. If pricing exists, compare the current price with the worksheet and note the gap.

**Week 2.** Compute the acquisition economics (FW-C20-06) from real data if you have it: ARPU, margin, churn by cohort, CAC by channel; build the sensitivity grid. If there is a referral or sharing feature, compute k and the multiplier (FW-C20-05).

**Week 3.** Write the launch plan (FW-C20-07) for the next release: tier, checklist, timeline, success criteria and rollback trigger; hold a launch review with product marketing, support and engineering a week before.

**Deliverables that become stories:** the pricing worksheet with a test result (a time you priced from evidence), the economics sheet with a decision (a time you used LTV and payback), and the launch plan and review (a time you coordinated a launch). Keep numbers real and credit partners.

## 15. Key takeaways and further reading

### Key takeaways

1. Go-to-market is the plan for how a product reaches and wins its customers: target, value, positioning, price and packaging, channels, launch and metrics; the PM owns the problem and the value, co-owns positioning and pricing, and carries the launch with product marketing, sales, support and finance.
2. Price between a cost floor and a value ceiling using competitor references and willingness-to-pay evidence, choose a value metric that tracks both value and cost, and test the price on real traffic with guardrails; cost-plus is a floor, not a method, and bundles help when valuations differ and are negatively correlated.
3. Distinguish funnels from loops: compute the viral coefficient, the multiplier N ÷ (1 − k) and the cycle time, and remember that incentives can raise k and lower quality; most products need other acquisition besides virality.
4. Read unit economics with care: contribution = ARPU × margin, LTV ≈ contribution ÷ churn, payback = CAC ÷ contribution, a ratio near 3 and payback under about a year as a heuristic, by channel and by cohort, with a sensitivity grid; fix retention before scaling spend when the ratio is low.
5. Plan a launch with a tier, a cross-functional readiness checklist, a timeline, success criteria with guardrails and a rollback trigger, and a holdout; plan the transition for existing customers when you change a price or a model, as Adobe's 2013 move shows.

### Further reading

- Adobe's press release of 6 May 2013; its quarterly report for the period ended 31 May 2013; its earnings releases for the third and fourth quarters of fiscal 2013; and its annual reports for fiscal 2011, 2012 and 2014, as filed with the US Securities and Exchange Commission. Sources for CS-C20-02 (confirmed in October 2026).
- Thomas Nagle and Georg Müller, *The Strategy and Tactics of Pricing* (first edition 1987; 6th edition 2018; a 7th edition appeared in 2024), for the standard treatment of value-based pricing `[V: first edition 1987; sixth edition Routledge, 2018 (ISBN 9781138737518); a seventh edition with Evert Gruyaert followed in 2024]`.
- Peter van Westendorp's price sensitivity meter (ESOMAR Congress paper, 1976), as described in pricing research texts `[V: van Westendorp, NSS Price Sensitivity Meter, Proceedings of the 29th ESOMAR Congress, 1976, pp. 139 to 167]`.
- Andrew Chen, *The Cold Start Problem* (2021), on growth loops and network effects `[V: Harper Business, 7 December 2021, ISBN 9780062969743]`.
- Patrick Campbell (founder of ProfitWell, formerly Price Intelligently, acquired by Paddle in 2022) and others on subscription pricing and packaging, and company pricing pages as primary evidence of how real products are packaged, read with the date in mind `[V: ProfitWell (formerly Price Intelligently), founded 2012 by Patrick Campbell, acquired by Paddle in May 2022]`.
