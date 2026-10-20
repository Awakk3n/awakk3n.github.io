---
id: C18
title: Strategy at APM Depth
tier: 1
competencies: [strategy-gtm, product-sense]
prerequisites: [C02, C03]
defines_terms: [strategy, positioning, moat, network-effect, unit-economics, total-addressable-market, switching-cost, contribution-margin, okr, roadmap]
uses_terms: [tradeoff, second-order-effect, opportunity-cost, reversible-decision, hypothesis, mece, issue-tree, estimation, order-of-magnitude, sanity-check, user-segment, jobs-to-be-done, metric, north-star-metric, guardrail-metric, churn, retention, activation, cohort, cannibalization, legacy-user, headroom, localization, trust-signal, underserved-user, assumption, mvp, prioritization, framework-theater, goodharts-law, survivorship-bias, pareto-principle]
frameworks: [FW-C18-01, FW-C18-02, FW-C18-03, FW-C18-04, FW-C18-05, FW-C18-06, FW-C18-07, FW-C18-08]
case_studies: [CS-C18-01 (Illustrative), CS-C18-02 (Verified)]
cross_refs_out: [C02, C03, C04, C05, C06, C08, C09, C12, C13, C15, C16, C19, C20, C26, C27, C28, C33]
cross_refs_pending: []
status: draft
---

# C18 — Strategy at APM Depth

## 1. What interviewers test

"Should a device maker launch a subscription bundle of its services?" "A competitor just launched a free tier. How do you respond?" "Should we build, buy or partner for this capability?" "How would you decide whether to enter a new market?" These are strategy questions, and at the associate level they are not asking for a vision of the industry. They are asking whether you can reason like an owner: diagnose the situation, lay out real options, weigh them against criteria with numbers, and commit to a recommendation with its risks. Candidates fail them in two opposite ways: by reciting frameworks (SWOT, five forces) without a point of view, and by giving an opinion with no structure.

**Where it shows up.** `Inferred` from the round structures candidates commonly report: strategy and business-judgment questions at Google, Meta, Microsoft, Amazon, Apple, Netflix, Stripe and others, often as a case of 20 to 30 minutes, with market-entry, competitive-response, build-or-partner and pricing or bundling variants `[unverified: candidate-reported]`. On the job, APMs are rarely asked to set company strategy; they are asked to understand it, to connect their product's choices to it, and to contribute a clear analysis when a strategic question arises.

**What is scored.** Whether your reasoning is structured, quantitative and committed `Inferred`. Interviewers listen for a diagnosis before options; options that differ in kind; criteria tied to the objective; unit economics and a market size with reality checks; an understanding of what makes an advantage durable; second-order effects (cannibalization, competitor response, regulation); a recommendation with a sequence; and a statement of what would change your mind.

Six observable behaviors:

1. You clarify the objective and the company's situation, and diagnose before proposing.
2. You size the opportunity with two routes and a reality check.
3. You analyze competition by customer value and positioning, not by feature tables.
4. You name the source of advantage and test whether it is durable.
5. You ground the recommendation in unit economics and sensitivities, and name the second-order effects.
6. You commit to a recommendation, sequence it, and say what would change your mind.

**The failure this prevents.** Six patterns end strategy answers: a framework recited with no conclusion, a market size with no reality check, a feature comparison taken for competitive analysis, "network effects" named without a mechanism, ignoring cannibalization and competitor response, and a roadmap presented as a strategy.

## 2. The concept from first principles

### C18.1 What strategy is: diagnosis, guiding policy, coherent action

**Strategy** is a coherent set of choices about where to compete and how to win, grounded in a diagnosis of the situation. A useful way to see the structure is the "kernel" from Richard Rumelt (FW-C18-01): a *diagnosis* of the challenge (what is going on, and what is the crux?), a *guiding policy* (the approach chosen to deal with it, which includes what you will not do), and *coherent actions* (steps that reinforce one another and carry out the policy).

**Why choices are the point.** A strategy that says yes to everything is a wish list. Strategy is as much about what you decline as what you pursue, because resources and attention are limited (C15's opportunity cost). A statement such as "be the best and grow 30% a year" is a goal. A strategy says: "We will win small clinics, not hospitals, because we can serve them better and they are underserved; so we will build for a front desk of two people, sell by referral and not by sales team, and decline custom integrations."

**At APM scale.** Most APM-level strategy questions are about a product, a market or a decision, not an entire company. The same kernel applies: what is the situation, what approach do you take, and what do you do first.

**When not to use a full strategy analysis.** For a tactical question (which feature first) use C15; for a question about why a metric moved, use C13. Strategy is for choices that are expensive to reverse and shape many later choices (entering a market, building versus buying, a pricing model).

> **Counterexample.** Asked how a company should respond to a rival's price cut, a candidate says: "I'd do a SWOT. Strengths: brand. Weaknesses: price. Opportunities: new markets. Threats: the rival. Then I'd consider the five forces." There is no diagnosis (why did the rival cut, and whom does it hurt?), no options, no numbers and no recommendation. A better start: "First, who is at risk? If the cut targets our price-sensitive 30% of customers, the question is whether to defend them, and at what cost, which I can size."

**Hidden risks.** Two. *Frameworks as substitutes for thinking:* SWOT and five forces are lists; they help organize a diagnosis and cannot replace one. *Hindsight:* it is easy to explain a winner's strategy after the fact; analyze with the information available at the time and say what you do not know.

### C18.2 Vision, mission and product principles

**Vision** is the future a company or product aims to bring about; **mission** is what it does and for whom; **product principles** are the choices that guide tradeoffs when goals conflict (for example, "simple over powerful," "private by default," "fast over feature-rich"). In interviews you should not recite a company's mission. Use it as a test: does the option serve the stated purpose, and does it fit the principles the product has chosen?

Principles do real work when they settle arguments. A team with the principle "a first-time user should succeed without help" has an answer when asked to add an advanced option to the first screen. A principle that cannot say no to anything is a slogan. Companies publish missions and sometimes principles `Public` `[V: Google's "Ten things we know to be true" (archived copy); Amazon's Leadership Principles page; Netflix's culture page; read October 2026]`; use public statements as evidence of intent and say that you are inferring how they apply.

**Why it works.** Principles turn strategy into daily decisions. **When not to dwell.** A mission line takes a sentence in an answer; the analysis is the substance.

### C18.3 Market sizing with reality checks

A market-size estimate tells you whether an opportunity could be big enough to matter, and it is only useful if you test it. The **total addressable market** (TAM) is the total revenue available if every potential customer bought the product. Narrower layers are more useful: the *serviceable* market (what you can reach with your product and channels) and the *obtainable* share (what you could win in a given period). FW-C18-03 gives the method.

**Two routes.** *Top-down* starts from a large population and applies filters: people, then those who fit, then adoption, then price. *Bottom-up* starts from units you can count: customers or sites you could reach, times how many would buy, times what they pay. Compare them. If they differ by a factor of two or three, find the assumption that explains the gap.

**Reality checks.** Compare with known quantities: the revenue of existing providers, what customers spend today on the nearest alternative, the number of transactions the market could physically sustain, and adoption rates seen for similar products. A claim that a market is "$50 billion" because it is 1% of a $5 trillion industry is not a size; it is a slogan, and a favorite error in business plans.

**Example (invented).** Corporate lunch catering in a mid-sized city. *Top-down:* 315,000 office workers; suppose 15% order group lunches, 4 times a month at $12 a meal: 315,000 × 0.15 × 48 meals a year × $12 = $27.2 million a year. *Bottom-up:* 6,000 offices with 20 or more staff; 25% order group lunches; 2 orders a month at $350: 6,000 × 0.25 × 24 × $350 = $12.6 million a year. The top-down figure is 2.2 times the bottom-up. Why? The top-down approach counts 15% of all workers regardless of whether their office orders; the bottom-up requires an office-level decision and a lower frequency. The honest statement is a range: $12 to $27 million, with a planning number near the lower end for a new entrant, to be tested with a pilot. And then the question that matters: what share could we obtain, and is it enough? At a 10% share, the lower figure is $1.3 million a year, which may not cover a team.

**Why it works.** Two routes and a reality check protect against the false precision of a single estimate. **When not to size at length.** If the decision does not depend on whether the market is $20 million or $200 million, say so and move on (C04's so-what bridge).

### C18.4 Competitive analysis beyond feature tables; positioning

A feature table compares what products have; it says nothing about why customers choose. Better analysis starts with the customer's alternatives (including doing nothing, a spreadsheet or a substitute outside the category, C06) and what they value.

**Positioning** is the place a product occupies in customers' minds relative to the alternatives. A positioning statement has a target customer, the need or job, the category, the key benefit and the reason to believe. It is a choice: a product cannot be best at everything.

**A positioning map (FW-C18-04).** Choose two axes that matter to customers (not to the company): for example, speed of setup against depth of capability, or price against service level. Place the alternatives. Look for crowded areas (hard to win), empty areas (a gap, or a place with no demand), and where your product's strength lies. Ask for each competitor: what is their position, what are they good at, what can they not do without hurting their own business (the position a rival cannot copy because it would cannibalize them), and how will they respond?

**A named alternative: Blue Ocean.** Kim and Mauborgne's *Blue Ocean Strategy* (2005, from a 2004 *Harvard Business Review* article) asks you to stop competing on the factors the industry already competes on and to look for "value innovation": raising buyer value and lowering cost at the same time. Its tools are a strategy canvas (plot each competitor's level on the factors buyers weigh) and four questions about each factor: which to eliminate, reduce, raise or create `[V: Kim and Mauborgne, Blue Ocean Strategy, Harvard Business Review Press, 2005; the authors' framework as summarized by Strategy & Leadership and strategy teaching notes]`. Use it as a prompt for finding a gap on the positioning map, and treat any claimed gap as a hypothesis to test with customers, not as proof that demand exists `Inferred`.

**Anticipate response.** A move that threatens a strong competitor invites a reply. Consider what they can do quickly (cut price, copy a feature, bundle) and what they cannot (change their cost structure, abandon a core customer).

**Why it works.** Customer-value positioning exposes the real basis of competition. **When not to rely on it.** Axes chosen after the fact to flatter a favorite are decoration; choose them from customer research or ask what customers value.

### C18.5 Sources of advantage: distribution, data, switching costs, network effects, ecosystem integration, scale, brand

A **moat** is a durable advantage that protects a business from competitors. Strategic analysis asks where an advantage comes from and whether it lasts. FW-C18-05 tests each source.

| Source | What it is | Durable when | Weak when |
|---|---|---|---|
| Distribution | Access to customers that rivals lack (pre-installation, a sales network, an existing user base) | It is hard or costly to replicate and customers do not mind | Rivals can buy the same channel |
| Data | Information that improves the product and that rivals cannot get | More data keeps improving the product and access is exclusive | The advantage saturates, or data can be bought or is regulated |
| Switching costs | A **switching cost** is the cost, in money, time, effort or risk, a customer bears to change provider | Customers have built habits, data or integrations on you | Export and import are easy, or rivals pay the cost |
| Network effects | A **network effect** is a property in which each additional user increases the product's value to the other users | Value truly rises with users and users cannot easily coordinate to move | The network is local or thin, or multi-homing is easy |
| Ecosystem integration | Products working together better than apart (hardware, software, services) | Users are invested in several parts and parts reinforce each other | Integration is closed in a way users resent, or standards open it |
| Scale | Lower cost per unit with volume, or learning from volume | Fixed costs are large and the leader can pass savings on | Costs do not fall with volume, or smaller rivals can access the same inputs |
| Brand | Trust and preference | Built over time on real performance | Easily imitated or damaged |

**Test each claimed advantage.** Does the mechanism exist, or is the word being used loosely ("network effects" for any product with users)? Is it durable, and what would erode it? Does it compound (the leader gets stronger)? Can a rival copy it, and at what cost? Network effects are often misapplied: a messaging app has one where users want to reach friends there; a document editor's collaboration feature has a weaker one; a product with many users but no interaction between them has none.

**Ecosystem integration** is the one most relevant to device makers and platform owners, and it ties to C19: a customer who owns a phone, a watch and earbuds from one maker gains from each working with the others, and is less likely to leave.

**Why it works.** Naming the mechanism and testing durability separates real moats from slogans. **When not to claim one.** Early products rarely have a moat; the honest answer is that speed and learning are the advantage, and what you would build toward.

### C18.6 Business model and unit economics at APM depth

A business model answers who pays, for what, how, and at what cost. **Unit economics** are the revenue and cost attached to a single unit, such as a customer or an order, showing whether each unit makes money. **Contribution margin** is revenue minus the variable costs of a unit (cost of goods, delivery, payment fees, support), before fixed costs. C09.5 gave the basics for low revenue per user; here the aim is APM-level fluency (FW-C18-06).

**The chain.** Revenue per unit minus variable cost gives contribution per unit. Multiply by frequency for contribution per customer per month. The cost to acquire a customer (CAC) divided by monthly contribution gives the payback period. With churn, the expected lifetime is one over monthly churn, and lifetime contribution is monthly contribution times lifetime. Compare with CAC.

**Example (invented).** A marketplace entering grocery delivery: an average order of $80, a 22% gross margin ($17.60), picking and delivery cost $12 per order: contribution $5.60. Customers order 3 times a month ($16.80). Monthly churn 8%: lifetime 12.5 months: lifetime contribution $210. With CAC $40, the ratio is 5.3. Now let the average order be $60: gross margin $13.20, minus $12 is $1.20 per order, lifetime $45, ratio 1.1. A 25% smaller basket turns an attractive business into a marginal one, because the delivery cost is fixed per order. The strategic questions follow: how to raise basket size, lower delivery cost with density, and which neighborhoods to enter first.

**Sensitivities and cautions.** Name the two or three assumptions that swing the result (basket size, churn, delivery cost). Lifetime value forecasts are unreliable early because churn is uncertain; treat them as ranges. Include second-order effects: **cannibalization** (C08), price effects on the rest of the business, and cost allocation (shared costs are not variable costs). Pricing models (subscription, usage-based, transaction fee, advertising, freemium) each shift who bears risk and what behavior they encourage.

**Why it works.** A few lines of arithmetic show whether a strategy can make money and where it is fragile. **When not to model deeply.** In an interview, a clear chain with two sensitivities beats a spreadsheet.

### C18.7 Answer architectures: enter a market, respond to a competitor, build or buy or partner, prioritize a business line

Four recurring forms. Section 4 gives the common spine, and the specifics:

**Enter a market.** Questions: Is the market attractive (size, growth, profit pool)? Do we have a right to win (an advantage there: customers, assets, capabilities)? Can we make money (unit economics, investment, timing)? What are the risks (competitors' response, regulation, execution)? Then how: build, buy or partner, which segment first, and what would make us stop. Criteria: attractiveness × right to win × economics × risk.

**Respond to a competitor.** Questions: What did they do and who does it hurt? Why did they do it (their position and incentives)? Options: ignore, match, differentiate, flank (serve a segment they cannot), or retaliate. Evaluate each by cost, effect on our economics and likely reply. Often the right response is narrower than the move: defend the segment at risk.

**Build, buy or partner (FW-C18-07).** Criteria: time to market, cost, control, strategic importance (is it core to our advantage?), capability fit, and risk (execution, integration, dependency). Build when it is core and you have the capability and time; buy when you need speed or a capability you lack and can integrate it; partner when it is non-core, speed matters and the dependency is acceptable. Compare over the relevant horizon (Worked example 3).

**Prioritize a business line.** Compare lines by size, growth, margin, strategic fit and investment needed; separate lines that fund the company (mature, profitable) from those that grow it and those that are experiments. Allocate capital to the highest return on strategic goals while protecting the cash source.

**Why it works.** Forms speed up structure so thinking goes to the specific case. **When not to apply a form.** When the question does not fit; use the general spine.

### C18.8 Roadmap versus strategy; goals frameworks used well

A **roadmap** is a plan of what will be built and when. A strategy is the logic behind it. A [[roadmap]] without a strategy is a list; a strategy without a roadmap is an idea. If the roadmap would be the same under any strategy, it is not an expression of one.

**Goals frameworks.** An **OKR** (objectives and key results) is a goal-setting method pairing a qualitative objective with a small number of measurable key results. The method is widely used `Public` `[V: Doerr, Measure What Matters, 2018: objectives paired with measurable key results]` and is often misused. Used well: an objective that states a direction, key results that are outcomes (a measurable change in behavior or results, not a list of tasks), a handful per objective, and an honest review. Misuse: key results that are outputs ("launch feature X"), too many objectives, goals set so safe that they are always met, and scores used as performance ratings, which encourages gaming (C05's Goodhart). Connect goals to the strategy: each objective should serve the guiding policy.

### C18.9 Worked cases

Section 5 gives five worked cases: market sizing with a reality check, a market-entry analysis with unit economics, a build-buy-partner decision, a response to a competitor's free tier, and a rewrite of a roadmap into a strategy. Section 11 adds nine questions with model answers, including questions on Apple, Google, Microsoft and Amazon settings.

### C18.10 Strategy theater: how to spot it

Strategy theater is activity that looks like strategy and is not. FW-C18-08 lists the signs (adapted from Rumelt's four hallmarks of bad strategy `[V: Rumelt, Good Strategy Bad Strategy (2011): four hallmarks of bad strategy]`): *fluff* (buzzwords such as "synergy," "best-in-class," "leverage"); *failure to name the challenge* (no diagnosis, so any action seems fine); *goals mistaken for strategy* ("grow 30%"); *a list of unrelated initiatives*; and *no tradeoffs* (nothing is declined). The test is simple: can you say what the company will not do, and why?

## 3. Frameworks

Eight frameworks, set out below. The root-cause toolkit (FW-C03-08), the tradeoff table (FW-C02-03), the decision memo (FW-C02-06), the range method (FW-C04-06), the so-what bridge (FW-C04-05), the low-revenue unit-economics sketch (FW-C09-06), the sizing ladder (FW-C08-06) and the prioritization spine (FW-C15-01) are reused, not repeated.

#### FW-C18-01 · The strategy kernel · Established

- **Origin:** Richard P. Rumelt, *Good Strategy/Bad Strategy* (2011): diagnosis, guiding policy and coherent action `[V: Rumelt, Good Strategy Bad Strategy (2011): the kernel of diagnosis, guiding policy and coherent action]`.
- **Inputs:** a situation and an objective.
- **Outputs:** a diagnosis of the crux, a guiding policy that includes what you will not do, and a set of coherent actions that reinforce one another.
- **Assumptions:** the challenge can be named; choices have costs.
- **Tradeoffs:** a focused strategy gives up options.
- **Failure modes:** a goal in place of a diagnosis; a policy that is a wish; actions that do not reinforce.
- **Worked example:** the rewrite in Worked example 5 and CS-C18-01.

Format: **Diagnosis (the crux) → Guiding policy (the approach, and what we won't do) → Coherent actions (steps that reinforce).**

#### FW-C18-02 · The strategy answer spine · Original

- **Inputs:** a strategy question and 25 to 30 minutes.
- **Outputs:** an answer with seven steps: objective, diagnosis, options, criteria, evaluation with numbers, recommendation and sequence, risks and what would change the view.
- **Assumptions:** the interviewer will answer questions about context.
- **Tradeoffs:** structure helps and can feel formulaic; adapt to the case.
- **Failure modes:** a framework with no conclusion; options of one kind; no numbers; no commitment.
- **Worked example:** the cases in section 5 and the model answers in section 11.

Steps: **Objective and context → Diagnose → Options (different in kind) → Criteria → Evaluate with numbers → Recommend, sequence → Risks and what would change my mind.** The time budget is in section 4.

#### FW-C18-03 · Market sizing with reality checks · Original

- **Inputs:** a market definition.
- **Outputs:** a top-down and a bottom-up estimate, the gap explained, a range, a reality check against known quantities, and the obtainable share.
- **Assumptions:** order-of-magnitude inputs are enough (C04).
- **Tradeoffs:** two routes cost time and expose errors.
- **Failure modes:** one route; a percentage of a huge industry; no check; total market treated as obtainable.
- **Worked example:** the catering example in C18.3 and Worked example 1.

Steps: **Define → Top-down → Bottom-up → Explain the gap → Range → Reality check → Obtainable share and the so-what.**

#### FW-C18-04 · The positioning map · Original

- **Inputs:** the alternatives customers consider and what they value.
- **Outputs:** a two-axis map, each player's position, strengths and what they cannot do, a gap or defensible position, and the likely competitor response.
- **Assumptions:** axes come from customer research or reasoning about the job.
- **Tradeoffs:** two axes simplify; test with a second pair.
- **Failure modes:** axes that flatter the favorite; feature lists; ignoring substitutes.
- **Worked example:** the tiers in Worked example 4.

#### FW-C18-05 · The sources-of-advantage test · Original

**Core framework.** Learn this one first.

- **Inputs:** a claimed advantage.
- **Outputs:** for each of seven sources (distribution, data, switching costs, network effects, ecosystem integration, scale, brand): present or absent, the mechanism, durability, compounding, and copyability.
- **Assumptions:** the mechanism can be stated in a sentence.
- **Tradeoffs:** a strict test rejects many claims; that is its value.
- **Failure modes:** "network effects" as a label; ignoring multi-homing; treating a lead as a moat.
- **Worked example:** the analysis in CS-C18-02.

| Source | Mechanism | Durable? | Compounds? | Copyable? |
|---|---|---|---|---|

#### FW-C18-06 · Unit economics at APM depth · Original

**Core framework.** Learn this one first.

- **Inputs:** price, variable costs, frequency, acquisition cost and churn.
- **Outputs:** contribution per unit and per month, payback, lifetime contribution, ratio to CAC, two sensitivities and the second-order effects.
- **Assumptions:** variable costs are separable from fixed.
- **Tradeoffs:** early churn is a guess; present ranges.
- **Failure modes:** gross revenue as margin; allocated fixed cost as variable; one point estimate.
- **Worked example:** Worked example 2.

Formulas: **contribution = revenue − variable cost; payback = CAC ÷ monthly contribution; lifetime = 1 ÷ churn; lifetime contribution = monthly contribution × lifetime.**

#### FW-C18-07 · The build, buy, partner chooser · Original

- **Inputs:** a needed capability.
- **Outputs:** a table comparing the three on time to market, cost, control, strategic importance, capability fit and risk, a multi-year net comparison, and a recommendation with a path (for example, partner now, build later).
- **Assumptions:** the revenue timeline and costs can be estimated.
- **Tradeoffs:** the ranking depends on the horizon and on strategic value not captured in cash.
- **Failure modes:** a single-year view; ignoring integration cost; treating a partner as free.
- **Worked example:** Worked example 3.

| | Build | Buy | Partner |
|---|---|---|---|
| Time to market | | | |
| Cost | | | |
| Control | | | |
| Strategic importance | | | |
| Risk | | | |

#### FW-C18-08 · The strategy-theater detector · Original

- **Inputs:** a strategy document or answer.
- **Outputs:** a check against five signs (fluff, no named challenge, goals as strategy, a list of unrelated initiatives, no tradeoffs) and a rewrite.
- **Assumptions:** you can say what is declined.
- **Tradeoffs:** an honest check can be uncomfortable.
- **Failure modes:** accepting jargon; counting initiatives as coherence.
- **Worked example:** Worked example 5.

| Sign | Question |
|---|---|
| Fluff | Does it say something specific that could be wrong? |
| No challenge named | What is the diagnosis? |
| Goals as strategy | What is the approach, apart from the target? |
| Unrelated initiatives | Do the actions reinforce one another? |
| No tradeoffs | What will we not do? |

## 4. Answer architecture

### The strategy answer, for a 30-minute round

| Step | Minutes | What to produce |
|---|---|---|
| Objective and context | 4 | The goal, the company's position, constraints; assumptions stated |
| Diagnose | 7 | Customers and their job; market (size with a reality check); competition and positioning; company capabilities and advantages |
| Options | 5 | Three or four options that differ in kind |
| Evaluate | 7 | Criteria from the objective; unit economics with sensitivities; second-order effects; risks |
| Recommend and sequence | 5 | The choice, what to do first, the metric, what would change the view |
| Slack | 2 | |

**Pacing rules.** If the interviewer gives the objective or the market, spend the saved time on options and evaluation. If you run behind, keep the diagnosis, the recommendation and one number. Treat questions as steering.

**How to say it.** Lead with the crux: "The key question is whether [X]." State the criteria before scoring. State one or two numbers and the assumption that swings them.

**How to close.** Two sentences: "I'd [recommendation], starting with [first step], because [diagnosis and advantage]. The main risk is [risk], and I'd change my view if [signal]."

### Type: enter a market

Attractiveness, right to win, economics, risk; then segment and sequence.

### Type: respond to a competitor

Who is hurt, why they moved, options (ignore, match, differentiate, flank), cost and likely reply.

### Type: build, buy or partner

The chooser (FW-C18-07), over the right horizon, with strategic importance.

### Type: should we launch X (bundle, paid tier, new line)?

Unit economics, cannibalization, the advantage it builds or erodes, and a test.

### Type: prioritize among business lines

Role of each line (fund, grow, experiment), return on goals, protect the cash source.

### Type: the short version (10 to 15 minutes)

Crux, two options, one number, a recommendation and the main risk. Protect the recommendation.

### Common interviewer interventions, and what to do

| Interviewer says | What it means | What to do |
|---|---|---|
| "What's your point of view?" | You are listing | State the crux and a recommendation |
| "How big is it?" | Market size | Two routes and a reality check |
| "Who are the competitors?" | Beyond the obvious | Include substitutes and doing nothing |
| "Why would customers stay?" | Moat | Name the mechanism and test durability |
| "Does it make money?" | Economics | Give contribution, payback and a sensitivity |
| "What will they do in response?" | Competitor reaction | Say what they can and cannot do quickly |
| "What won't you do?" | Strategy as choice | Name what you decline and why |

## 5. Worked examples

All five examples are `Illustrative`: the products are fictional or use a product type as the setting only, and every figure is an invented assumption. The arithmetic was computed. Each follows the strategy spine (FW-C18-02) and is written as notes you could say aloud.

### Worked example 1 — Sizing a market with two routes and a reality check (Illustrative)

**The prompt.** "Size the market for a pet-health telemedicine subscription in a country of 25 million households."

**Top-down (FW-C18-03).** 25,000,000 households; 40% own a pet, so 10,000,000. Suppose 5% would pay for a telemedicine subscription: 500,000 households, at $120 a year: $60 million a year (invented).

**Bottom-up.** Count the places that could sell it. 12,000 veterinary clinics; suppose 20% would offer a telemedicine package; each averages 300 subscribers at $120: 12,000 × 0.20 × 300 × $120 = $86.4 million a year.

**The gap.** The bottom-up figure is 1.4 times the top-down. Both rely on an adoption guess (5% of owners; 20% of clinics with 300 subscribers). The two are in the same range, which is mildly reassuring, though they share optimistic assumptions about adoption.

**Reality check.** A known provider in the category (suppose a public company reports 40,000 subscribers at $120, invented) has revenue of about $4.8 million. If the market were $60 million, the leader would have 8% of it, plausible in an early market. It also shows the current realized market is a small fraction of the potential: the $60 million is a three-to-five-year serviceable ceiling (if adoption grows), not today's market. Another check: if households spend $250 a year on veterinary visits per pet and telemedicine can replace some, the plausible shift is a small share of that spend, supporting a figure in the tens of millions, not hundreds.

**The range and the so-what.** A planning range of $40 million to $60 million a year in three to five years. An entrant that wins 10% earns $4 to $6 million a year in revenue. Is that enough? It depends on the cost of serving (veterinarian time) and acquisition. So the sizing sets up the next question: unit economics and the channel (clinics as partners reduce acquisition cost). I'd also state the swing assumption: adoption of 5% could be 2% or 10%, a fivefold range, so the first goal is evidence on adoption (a pilot with a few clinics).

**What this shows.** Two routes exposed shared optimism, the reality check separated potential from today, and the number was tied to a decision.

### Worked example 2 — Market entry: density decides the economics (Illustrative)

*Setting: a retail marketplace of the kind Amazon operates, considering grocery delivery in a new city. No fact about any real company is claimed.*

**The question.** Should the marketplace enter grocery delivery in a new city, and where first?

**Attractive and winnable.** Grocery is frequent (weekly), large, and a customer who orders groceries uses the platform more often. The right to win rests on an existing customer base, logistics and payments. The market is contested by local grocers and delivery services.

**Unit economics (FW-C18-06).** Average order $80; gross margin 22% ($17.60); picking and delivery cost depends on density. Suppose a delivery route costs $30 per route-hour (driver, vehicle, handling) (invented). Deliveries per route-hour determine cost per order:

| Neighborhood | Drops per route-hour | Delivery cost per order | Contribution per order | Per month (3 orders) | Lifetime (12.5 months) | Ratio to CAC of $40 |
|---|---|---|---|---|---|---|
| Sparse suburb | 2.5 | $12.00 | $5.60 | $16.80 | $210 | 5.3 |
| Mid-density | 4.0 | $7.50 | $10.10 | $30.30 | $379 | 9.5 |
| Dense city core | 6.0 | $5.00 | $12.60 | $37.80 | $473 | 11.8 |

Churn of 8% a month gives the 12.5-month lifetime. The break-even density is where contribution is zero: $30 ÷ $17.60 = 1.7 drops per route-hour. Below about two drops an hour each order loses money; at four or more it earns well.

**The sensitivity.** Basket size and density are the swing factors. A basket of $60 cuts gross margin to $13.20; in the sparse suburb contribution becomes $1.20 (the lifetime ratio falls to about 1.1), in the dense core $8.20. So the entry sequence is: start in the densest neighborhoods, and enter the sparse ones only when density or basket size has grown.

**Risks and second-order effects.** Local competitors may respond with discounts; supply (picking staff, vehicles) must be hired before demand; perishable goods raise waste. Customers acquired for groceries may buy more of other categories (an upside not counted).

**Recommendation.** Enter with a pilot in two dense neighborhoods, with explicit thresholds: at least 4 drops per route-hour and a basket above $70 within six months, a 90-day retention target, and a stop rule if contribution per order is not positive after six months. Expand by adding adjacent neighborhoods to raise density. What would change my view: a competitor with much lower delivery cost, or a basket size far below $60.

**What this shows.** The strategic question reduced to one driver (density), which pointed to where to start and how to tell if it was working.

### Worked example 3 — Build, buy or partner (Illustrative)

*Setting: an enterprise software suite of the kind Microsoft offers. No fact about any real company is claimed.*

**The question.** The suite lacks a compliance-archiving capability that large customers ask for. Build, buy or partner?

**Facts (invented).** At full run-rate the capability would add $20 million a year of revenue at a 70% contribution margin. *Build:* 12 months to ship, $6 million to build plus $1 million a year to maintain. *Buy:* acquire a startup for $45 million; 6 months to integrate; the team stays. *Partner:* integrate a vendor's product in 3 months; the vendor takes 25% of the revenue (so contribution falls to 45% of revenue).

**Criteria (FW-C18-07).**

| | Build | Buy | Partner |
|---|---|---|---|
| Time to market | 12 months | 6 months | 3 months |
| Cost | $6M + $1M a year | $45M | 25% of revenue |
| Control of roadmap | High | High | Low |
| Strategic importance | Core for large customers | Same | Dependency on a vendor |
| Main risk | Execution, time | Integration, price paid | Vendor leverage, margin |

**Net over time.** Revenue starts when the capability ships and is assumed to run at $20 million a year (a simplification). *Three years:* build earns 24 months of revenue ($40M) × 0.70 = $28M, less $6M and two years of maintenance ($2M), net $20M. Buy: 30 months ($50M) × 0.70 = $35M, less $45M, net −$10M. Partner: 33 months ($55M) × 0.45 = $24.75M. At three years, partner leads ($24.75M), build is close ($20M), buy is negative.

*Five years:* build: 48 months ($80M) × 0.70 = $56M less $6M and four years of maintenance ($4M) = $46M. Buy: 54 months ($90M) × 0.70 = $63M less $45M = $18M. Partner: 57 months ($95M) × 0.45 = $42.75M. At five years, build leads ($46M), partner is close ($42.75M), buy $18M.

**Reading it.** The answer depends on the horizon. Partner wins on speed and low upfront cost, and loses margin every year; build wins if the capability is core and the horizon is long. Buying makes sense only if the acquired team and technology are worth more than the numbers above show (other products, talent, a faster path in other areas), which would need its own case.

**Recommendation.** Partner now to reach customers in three months, and start building in parallel with a plan to replace the vendor in 12 to 18 months, if the capability proves to be core (large customers adopt). This captures early revenue and keeps the long-run margin, at the cost of running two efforts for a time and of vendor negotiation (a contract that allows the transition). What would change my view: a startup whose team and data we could not build ourselves (a case for buying), or a vendor who would not agree to a transition.

**What this shows.** A small multi-year calculation turned a debate into a horizon question, and the recommendation combined options.

### Worked example 4 — A competitor launches a free tier (Illustrative)

**The situation.** A subscription product has 100,000 paying members at $10 a month. A competitor launches a free tier with ads. The team asks whether to match.

**Diagnosis.** Who is at risk? The competitor's free tier mainly attracts price-sensitive and casual users; our heavy users value features it lacks. The crux: how many of our paying members would move to a free tier, and whether a free tier of our own would bring in enough new payers and ad revenue to offset.

**Options.** (A) Ignore. (B) Match with a free tier. (C) Differentiate: keep the paid product, emphasize what the free tier lacks, and improve value for paying members. (D) Flank: a lower-priced tier for casual users, protecting the main product.

**Economics of matching (B), per month (invented).** Suppose a free tier draws 300,000 free users, 4% of whom convert to paid at $10 (12,000 payers, $120,000), and the ads earn $0.50 per free user ($150,000). A share of current payers would downgrade to free. If 15% downgrade: −100,000 × 0.15 × $10 = −$150,000. Net: −$150,000 + $120,000 + $150,000 = +$120,000 a month. If 25% downgrade: −$250,000 + $270,000 = +$20,000. If conversion is only 2% (6,000 payers, $60,000) and 15% downgrade: −$150,000 + $60,000 + $150,000 = +$60,000. The break-even downgrade rate (with 4% conversion): ($120,000 + $150,000) ÷ $1,000,000 = 27%. If more than about 27% of payers would downgrade, matching loses money.

**What we don't know, and how to learn it.** The downgrade rate is the swing assumption. Our payers' features and engagement tell us who would leave: members who use only the basic features are most at risk. A survey is weak evidence (the say-do gap); a test of a free tier in one market is better.

**Competitor response.** The competitor can cut price or add features quickly; it cannot easily remove the free tier without losing the users it won. A free tier also changes positioning: we become the paid alternative to free, or we become a freemium product.

**Recommendation.** Do not match in full. Choose D: a limited, lower-priced tier that is hard to downgrade to from our heavy-use features (it lacks them), and a differentiation push for the main product. Test the lower tier in one market for a quarter, and measure downgrades, conversions and ad revenue, with a stop rule if downgrades pass 20%. What would change my view: evidence that a majority of payers use only features the free tier offers.

**What this shows.** A break-even downgrade rate (27%) turned "should we match?" into a measurable question, and a narrower response protected the core.

### Worked example 5 — A roadmap dressed as a strategy (Illustrative)

**Before.** A team's "strategy" slide for a clinic-scheduling tool (invented): *Grow revenue 40%. Launch a mobile app. Add analytics. Build 10 integrations. Add an AI assistant. Raise NPS to 50. Enter two new markets.* This is a list of goals and projects: fluff-free but without a diagnosis, a choice or a tradeoff (FW-C18-08).

**Diagnosis.** From the data (invented): 70% of revenue comes from small clinics (one to three providers). 60% of churn happens in the first 90 days, and exit interviews cite setup effort ("too much to configure"). Large clinics ask for integrations with their records systems, which the product cannot yet support, and are served worse than by competitors. The crux: the product wins where setup is simple and loses where complexity rises.

**Guiding policy (FW-C18-01).** Win small clinics by being the easiest scheduling tool to set up and keep. Decline custom integrations for large clinics and new markets this year.

**Coherent actions.** (1) Guided setup that gets a clinic scheduling its first appointment within 30 minutes. (2) An import tool for existing calendars. (3) A referral loop through the associations that small clinics already belong to. (4) Simplified pricing (one plan). (5) Retention review at day 90. Each action reinforces the policy: easier setup lowers early churn, referral lowers acquisition cost, and simpler pricing removes a barrier.

**What is declined and why.** Integrations (cost and skill), the AI assistant (not tied to the crux), mobile (secondary for a front-desk tool), new markets (focus). The reasons are stated, with a date to revisit.

**Targets that follow from the strategy.** 90-day retention from 62% to 75%; time to first appointment under 30 minutes for 80% of new clinics; referral share of new sign-ups from 10% to 30% (invented). Revenue growth follows from these, instead of being the strategy.

**What this shows.** The same company, rewritten as a diagnosis, a policy and reinforcing actions, now says what it will not do, and its goals measure the policy.

## 6. Baseline, Strong, Standout

**Prompt:** "A competitor just launched a free version of a product like ours. How do you respond?"

### Baseline answer

"I'd do a SWOT and look at the five forces. We should probably lower our price or add features to stay competitive, and invest in marketing."

*What is wrong:* frameworks named, no diagnosis, no options that differ in kind, and a response that is a guess. No numbers, no commitment.

### Strong answer

"First I'd diagnose: who is at risk? A free version mostly attracts price-sensitive and casual users. I'd segment our customers by how much they use features the free version lacks, and estimate how many might switch.

"Options: ignore it, match it with a free tier, differentiate the paid product, or flank with a cheaper tier for casual users. I'd evaluate them on cost, effect on our economics and the competitor's likely reply. The key number is the share of our payers who would downgrade, against the new payers and ad revenue a free tier would bring.

"I'd likely recommend protecting the segment at risk with a narrower response than matching, and testing it in one market before committing."

### Standout answer

Everything in the Strong answer, plus:

"I'd put a number on the break-even: if a free tier would convert 4% of free users and earn some ad revenue, matching pays only if fewer than about a quarter of our payers downgrade, so the downgrade rate is the assumption to test. I'd check cannibalization in both directions and the effect on positioning: matching risks turning us into a freemium product competing on the competitor's terms.

"I'd ask what the competitor can and cannot do. They can cut price quickly; they cannot remove the free tier without losing what they won. So I'd choose a response that makes our advantage clearer rather than imitating their move: the value of features and service that the free version lacks.

"I'd name what we will not do (a price war), what would change my view (evidence that most payers use only free-tier features), and the first step (a one-market test with a stop rule). And I'd separate the diagnosis from the action so that if the data show the threat is smaller, we spend less."

### What moves an answer up a band

| From Baseline to Strong | From Strong to Standout |
|---|---|
| Diagnoses who is at risk and offers options that differ in kind | Computes a break-even for the key assumption and tests it |
| Evaluates on cost, economics and reply | Considers positioning and what the competitor cannot do |
| Recommends a narrower response and a test | Names what is declined, what would change the view and a stop rule |

## 7. Company lens

All claims describe what companies say publicly or what candidates commonly report, not insider knowledge. Interview formats change `[as of 2026-10]`.

> **Company lens: Apple [as of 2026-10].** Apple describes integrating hardware, software and services and reports services as a business line `Public` `[V: Apple Form 10-K for fiscal 2025: Services net sales 109.2 billion dollars]`. Third-party guides report that strategy prompts at Apple concern ecosystem decisions such as bundling services or responding to platform regulation `Inferred`. Practical consequence: treat ecosystem integration as the advantage to test, weigh cannibalization of existing subscriptions, and discuss second-order effects on security, quality and developers; label regulatory facts as to be verified.

> **Company lens: Google [as of 2026-10].** Google's free, advertising-funded consumer products and its cloud business are public `Public` `[V: Alphabet Form 10-K for 2025]`. Candidates commonly report strategy prompts about monetizing a free product or responding to new technologies `Inferred`. Practical consequence: compute what a paid tier does to ad revenue, consider selection (who would pay), and say how a response affects the core business.

> **Company lens: Amazon [as of 2026-10].** Amazon has described a flywheel of selection, low prices and customer experience, and its shareholder letters emphasize long-term thinking `Public` `[V: Amazon flywheel as described in AWS material and Bezos letters]`; its leadership principles include Think Big and Customer Obsession `Public`. Candidates commonly report market-entry and marketplace-conflict prompts `Inferred`. Practical consequence: explain the flywheel mechanism, include unit economics and density, and address trust with third parties where the platform also competes.

> **Company lens: Microsoft [as of 2026-10].** Microsoft's 2014 statement of a mobile-first, cloud-first direction is public `Public` `[V: Nadella email to all employees, 10 July 2014: productivity and platform company for the mobile-first and cloud-first world]`, and its enterprise customer base is public in its annual reports (not reopened here) `Inferred`. Candidates commonly report build, buy or partner and portfolio-allocation prompts for enterprise settings `Inferred`. Practical consequence: separate the roles of mature, growing and experimental lines, and show how a platform and its partners create value together.

> **Company lens: Meta [as of 2026-10].** Meta's reliance on advertising is public `Public` `[V: Meta Form 10-K for 2025 (advertising)]`, and its acquisitions are widely known (not rechecked here) `Inferred`. Candidates commonly report prompts on competing with a fast-growing rival, acquisition, and product positioning for different audiences `Inferred`. Practical consequence: discuss network effects precisely (who benefits from whom), multi-homing and the response to a rival that copies.

> **Company lens: Netflix [as of 2026-10].** Netflix's move from DVDs by mail to streaming and then to original content, and the later addition of an advertising tier, are public `Public` `[V: Netflix streaming launch 2007; ad tier launched 3 November 2022 (Fast Company, Netflix IR as reported)]`. Candidates commonly report prompts on pricing, content strategy and competition `Inferred`. Practical consequence: connect content spending to retention and unit economics, and treat price tiers as segmentation.

> **Company lens: Stripe [as of 2026-10].** Stripe's expansion from payments into a wider set of financial products for businesses is public `Public` `[V: Stripe newsroom: Connect, Billing, Terminal, Radar, Capital, Corporate Card]`. Candidates report prompts on platform expansion and developer-product strategy `Inferred`. Practical consequence: explain how the first product creates distribution and data for the next, and how switching costs arise from integration.

## 8. Common mistakes

| # | Mistake | How to detect it | Fix |
|---|---|---|---|
| 1 | A framework with no conclusion | SWOT recited, no recommendation | Diagnose, choose, commit |
| 2 | Goals as strategy | "Grow 40%" | State the approach and what is declined |
| 3 | One-route market size | A percentage of a huge industry | Two routes and a reality check |
| 4 | Feature table as competitive analysis | A grid of checkmarks | Position by customer value; consider substitutes |
| 5 | A moat claimed by label | "Network effects" with no mechanism | Name the mechanism; test durability |
| 6 | No unit economics | Growth without margin | Contribution, payback, ratio, two sensitivities |
| 7 | Ignoring cannibalization | Gross new revenue counted | Net it against what it replaces |
| 8 | Ignoring competitor response | A move that assumes no reply | Say what they can and cannot do |
| 9 | A single-horizon comparison | Build versus partner at one year | Compare over the relevant horizon |
| 10 | A roadmap presented as strategy | A list of projects | Rewrite as diagnosis, policy, actions |

## 9. Mental models applied

Four models, each tied to a decision in this chapter. [[survivorship-bias]] is from C12 and [[opportunity-cost]] from C15.

**Where you play, how you win** (`MM-play-win`). Strategy reduces to two choices: which customers and markets you serve, and the basis on which you beat the alternatives. Writing them in one sentence each is a test of clarity. If the "how to win" would apply to any competitor, it is not a choice.

**The flywheel** (`MM-flywheel`). A reinforcing loop in which each element feeds the next: more selection attracts more customers, more customers attract more sellers, more sellers add selection. Draw the loop and ask where it starts, what slows it and whether a competitor can enter it at a point of weakness. A flywheel is a way to explain a network effect or scale advantage concretely.

**Second-order effects** (`MM-second-order`, see [[second-order-effect]], C02). The first effect of a move is visible; the effects of the responses to it are where strategy succeeds or fails: competitors react, partners change terms, regulators notice, customers adapt. Ask "and then what?" twice.

**Survivorship in strategy stories** (`MM-survivorship`, see [[survivorship-bias]], C12). The strategies that are famous are those that worked. Learn from a success by asking which conditions were specific to the place and time, and look for failures that followed the same approach.

## Engineering, design and data-science perspectives

- **Engineering.** Engineers can say what is easy, hard and time-consuming to build, which drives build, buy or partner. They also know the architecture's constraints on ecosystem integration. Involve them in sizing the cost and the time to market.
- **Design and research.** Research tells you what customers actually value, which is the basis for positioning axes and the answer to "why would they switch?" Use it to test positioning claims.
- **Data science.** Data scientists help test the assumptions that swing a strategy: churn, downgrade rates, conversion, willingness to pay. Ask for ranges and for cheap experiments.
- **Finance, legal and policy.** Finance supplies cost structure and the discipline of unit economics; legal and policy teams identify regulatory constraints that can reshape options (competition rules, data rules). Involve them early in any move that affects partners or markets `[as of 2026-10]`.

## Checklist: before you recommend a strategy

1. Did I state the objective and diagnose the situation before proposing anything?
2. Did I size the opportunity with two routes and a reality check?
3. Did I analyze competition by customer value, including substitutes and likely responses?
4. Did I name the source of advantage and test its durability?
5. Did I run unit economics with two sensitivities and net out cannibalization?
6. Are my options different in kind, and compared over the right horizon?
7. Did I commit to a recommendation, say what is declined and sequence the first steps?
8. Did I say what would change my view, and avoid roadmap-as-strategy and framework theater?

## 10. Case studies

#### CS-C18-01 · The coffee chain's expansion · Illustrative · Beginner

*Fictional composite. Every number is invented (invented).*

**Situation.** A coffee-cart chain has 10 carts. Each earns $1,000 a day in revenue with a 28% contribution margin ($280). Management wants to open more carts, reasoning that a new cart at $900 a day brings $252 a day of contribution and pays back its $30,000 cost in 119 days.

**Constraints.** Capital for a few carts a year, a limited number of good locations, and managers who can supervise only so many sites.

**Data.** Sales data show that when a new cart opens within 400 meters of an existing one, the existing cart's sales fall by about 20%. Most proposed new locations are within 400 meters of one or two existing carts.

**Problem definition.** As an observable problem: "The expansion case counts the new cart's revenue as additional, though part of it comes from the chain's own carts."

**Analysis.** Net the cannibalization. A new cart near one existing cart adds $252 a day of contribution and removes 20% of that cart's $280, $56, for a net of $196 a day: payback is $30,000 ÷ $196 = 153 days, not 119. Near two existing carts it removes $112, for a net of $140 a day and a payback of 214 days. In a location 500 meters or more from any cart, the net is the full $252 and the payback 119 days. So the same expansion budget buys more profit in uncannibalized locations, and the case for an infill location depends on whether it is worth 214 days of payback. The strategic reading: the chain's advantage in a neighborhood is local density of customers who walk by, and adding carts beyond a point shares the same customers.

**Options.**

| Option | Optimizes | Costs |
|---|---|---|
| A. Open carts wherever space is available | Number of carts | Cannibalization; slower payback |
| B. Prioritize locations more than 500 meters from existing carts | Net contribution per dollar | Fewer available sites; possibly lower foot traffic |
| C. Improve the existing carts (hours, menu, speed) | Contribution per cart | Does not add reach |

**Tradeoffs.** B gives the best payback if good non-overlapping sites exist. C is cheap and limited by the carts' capacity. A inflates the count and the cost.

**Decision.** Choose B, with C for the carts that have idle time. Rule: open a new cart only if net payback (after cannibalization) is under 180 days. Primary metric: net contribution per dollar invested; guardrail: the sales of the nearest existing carts after each opening.

**Outcome.** In this fictional scenario three new carts were opened at least 500 meters from existing ones and averaged $240 a day of net contribution; one infill location was declined (payback 214 days). Sales at neighboring carts were tracked and fell as predicted at a second infill site, near one cart (payback 153 days), opened as a pilot (invented).

**Alternative outcomes.** If foot traffic at remote sites were much lower, the net would fall below the infill case, and B would be wrong; the pilot would show it. The lesson: count the net, not the gross, and know what advantage the business actually has in a place.

#### CS-C18-02 · Amazon Web Services, 2006: turning internal infrastructure into a product · Verified · Advanced

*Sources (types): Amazon Web Services' own posts and announcements: Jeff Barr's blog posts of 14 March 2006 (S3) and 25 August 2006 (the EC2 beta), the S3 "What's New" announcement of 14 March 2006 as quoted in the AWS News Blog, and the AWS News Blog's twenty-year retrospective of 13 March 2026, read in full (primary, for dates, prices and design intent); Amazon's 2015 annual report on Form 10-K and press reports of its first-quarter 2015 results (for the segment disclosure); and reference timelines for the later EC2 dates, marked as secondary. The analysis is the author's. The sources do not reveal internal deliberations or strategy documents. Re-read in October 2026.*

**Situation.** On 14 March 2006 Amazon launched the Simple Storage Service (S3), described in AWS's retrospective as quietly launched with a one-paragraph announcement, offering storage over the internet at 15 cents per gigabyte per month, with data transfer at 20 cents per gigabyte `[V: Jeff Barr, 14 March 2006]`, on about a petabyte of capacity across roughly 400 storage nodes in 15 racks spanning three data centers, with 15 Gbps of total bandwidth, a design target of tens of billions of objects and a maximum object size of 5 gigabytes `[V: AWS News Blog, 13 March 2026]`. On 25 August 2006 it opened the Elastic Compute Cloud (EC2) for limited beta testing, offering a virtual computer (the equivalent of a 1.7 GHz Xeon processor with 1.75 GB of RAM) built on the Xen virtual machine monitor `[V: Jeff Barr, 25 August 2006]`; press and reference timelines report a price of 10 cents an hour, access at first only to existing AWS customers, an unlimited public beta from 16 October 2007 (Amazon's press release of that date says the beta, which had limited the number of new registrants, was now open to all developers; some reference timelines give 22 August 2007, which conflicts with that announcement) and the end of the beta on 23 October 2008 `[V: Amazon Web Services press release, 16 October 2007; secondary for the price and the end of the beta]`. AWS's launch announcement presented S3 as giving any developer access to the same scalable, reliable, fast and inexpensive storage infrastructure that Amazon used to run its own network of web sites `[V: AWS announcement as quoted in the AWS News Blog, 2026]`. The sources used here do not describe Amazon's internal reasoning before the launch.

**Constraints.** Amazon was an online retailer with no history of selling computing to others `[V: AWS launch announcement]`; selling to outside developers would have required things a retailer's internal systems did not need, such as identity, authentication, billing and security for external customers `[inference]`; the sources read here do not describe how Amazon built them. Its customers would be developers, who choose tools on merit and switch easily at first. The offering had to be priced for use, not for upfront commitment.

**Data.** As reported by AWS: the launch dates, prices and capacity above; AWS's statement in 2026 that code written for S3 in 2006 still works unchanged, with complete API backward compatibility described as its commitment `[V: AWS News Blog, 2026]`; a fall in S3's price from 15 cents to slightly over 2 cents per gigabyte, about 85%, over twenty years; and growth from about a petabyte to hundreds of exabytes. Amazon has reported AWS as a separate segment since the first quarter of 2015; its first disclosure, on 23 April 2015, showed AWS net sales of $1.57 billion and operating income of $265 million for the quarter `[V: Amazon 2015 Form 10-K; press reports of the 23 April 2015 results]`.

**Problem definition.** *The author's reading.* Developers and companies faced large upfront costs and effort to buy and run servers and storage before they knew whether a product would succeed. Amazon had solved the same problem for itself. The strategic question: sell the capability to others, and on what terms?

**Analysis.** *The author's analysis.* Through this chapter's tools:

*Diagnosis and policy (FW-C18-01).* The crux was that infrastructure was a large fixed cost and a distraction for the people building products. The guiding policy, as the launches suggest, was to offer simple, well-specified building blocks (storage, then compute) over the internet, priced by use, with programming interfaces that developers could adopt without a sales process. This is a choice and a set of declined options: a single abstract service with a stable interface, not custom contracts.

*Positioning (C18.4).* The alternatives were buying servers, renting colocation space, or using managed hosting. AWS's position was on speed of start, no upfront commitment, and elasticity, trading away the customization of owning hardware.

*Sources of advantage (FW-C18-05).* *Scale:* Amazon already ran large infrastructure for its retail business, and falling costs could be passed to customers: AWS reports an 85% fall in S3's price since launch `[V: AWS News Blog, 2026]`, and attributing it to scale and learning is the author's inference, since the post does not give a cause `[inference]`. *Switching costs:* once a customer's data and code are built on a service's interfaces, moving is costly; the promise that old code keeps working is the other side of this, a trust signal that lowers the fear of lock-in while raising the reward of staying. *Ecosystem:* each new service (databases, networking, identity) works with the others, so customers' investment compounds. *Distribution:* developers adopt through documentation and self-service, a low-cost channel. There is no strong network effect in the sense of C18.5, and it would be wrong to claim one; the advantage is scale, integration and switching costs.

*Unit economics (FW-C18-06).* A usage-based price converts a fixed cost for customers into a variable one, and for the provider turns fixed infrastructure into revenue from many customers, with utilization as the swing factor. The sources do not disclose margins.

*Sequence.* Storage first (a simple, universal need), compute months later, then many more services: a pattern of landing a clear building block and extending.

*What the evidence does not show.* Whether the original intent was to build a large business or to monetize spare capacity; AWS's profitability in the early years; and how much of the later success owes to timing, competitor mistakes or execution. The case supports an analysis of the structure of the advantage, not a claim about intentions.

**Options.** *The author's reconstruction of choices a team could have faced; not a record of Amazon's deliberations.*

| Option | Optimizes | Costs |
|---|---|---|
| A. Keep the infrastructure internal as an efficiency tool | Focus on retail | Forgoes a new business; others may own the category |
| B. Sell simple, usage-priced building blocks with self-service interfaces | Reach among developers; scale; learning | New capabilities (billing, support, security for outsiders); commitment to stable interfaces |
| C. Sell through traditional enterprise contracts and sales teams | Large accounts | Slow start; cost of sales; less developer adoption |

**Tradeoffs.** B gives up the high-touch margins of enterprise sales for speed and scale, and takes on the obligation of stability. A is low risk and low reward. C fits an established vendor.

**Decision.** As documented, Amazon launched S3 and then EC2 on the terms above.

**Outcome.** Reported: continued expansion of services; price reductions; the backward compatibility that AWS describes as its commitment, upheld according to AWS itself; AWS reported as a separate segment from 2015 `[V: Amazon 2015 Form 10-K]`. Beyond the first-quarter 2015 figures, the sources used here do not give financial results.

**Alternative outcomes.** *Inference.* Had the services required enterprise sales cycles, adoption by start-ups and developers, the early customers, would have been slower. Had early pricing been set higher, competitors might have entered the low end. A reader should resist reading the outcome as proof that the decision was obviously right at the time: the same facts would be discussed differently if a competitor had won the category. The method to carry away: describe the advantage by its mechanism, check it for durability, tie the business model to the customer's cost structure, and sequence the offering from a clear building block.

## 11. Interview questions and model answers

Nine questions: two Beginner, two Intermediate, five Hard. Model answers are `Illustrative` (composite candidates), every figure is an assumption, and the arithmetic was computed. Each is written against the six behaviors in section 1 and uses the strategy spine (FW-C18-02). Where a real company's product or a regulation is the setting, the answer reasons from public information and states no internal fact; regulatory facts are marked for verification. The answers are fuller than a first pass in a real round.

#### IQ-C18-01 · Beginner · strategy · ST

**Prompt.** What is strategy, and how is it different from a plan or a goal?

**Rubric.**
- **Baseline:** "It's the long-term plan to achieve goals."
- **Strong:** Defines strategy as choices based on a diagnosis, distinct from goals and plans.
- **Standout:** Gives the kernel (diagnosis, guiding policy, coherent actions), includes what is declined, and offers a short example and a test for bad strategy.

**Model answer.** A goal is where you want to end up. A plan is a list of steps and dates. A strategy is the logic that connects them: a diagnosis of the situation, an approach chosen to deal with it, and actions that reinforce each other. The distinguishing feature is choice, and especially what you decide not to do.

An example. A clinic-scheduling product says: "Grow 40% and launch mobile, analytics, integrations and an AI assistant." That is a goal and a project list. A strategy would read: "Diagnosis: 70% of our revenue comes from small clinics, who churn in the first 90 days because setup is hard, while large clinics need integrations we cannot deliver. Policy: win small clinics by being the easiest to set up; decline large-clinic integrations and new markets this year. Actions: guided setup, a calendar import tool, referral through clinic associations, one simple price." The actions all push in the same direction, and the declined items are named.

A quick test for a real strategy: can you say what the company will not do, and why? If every initiative fits, it is a wish list. Another test: would the plan look the same under any strategy? Then it expresses none.

At my level, strategy shows up as understanding the company's choices and connecting my product's decisions to them, and as the ability to reason about a strategic question when it arises.

**Follow-ups.**

- **Q.** How do you tell a bad strategy from a good one? **A.** "By checking for the three parts of the kernel and for a declined option. A bad strategy is a list of goals ("grow 40%, launch mobile, analytics and integrations") with no diagnosis of why the company is where it is, no approach to the main obstacle, and no statement of what it will not do. A good one names the situation, chooses a way to deal with the central challenge and lists actions that reinforce each other. My quick test is to ask what the company is deciding not to do; if the answer is nothing, it is a wish list."
- **Q.** What would a good version of the clinic-scheduling strategy decline? **A.** "It would pick a focus, for example small independent clinics whose main pain is no-shows, and decline the rest for now: no large-hospital integrations, no general analytics suite, no mobile app until reminder messaging is proven. The diagnosis is that no-shows cost small clinics a large share of their revenue and that existing tools are built for big systems. The actions reinforce each other: reminders reduce no-shows, which produces the evidence for referrals, which lowers acquisition cost. The declined items are named so that the team can say no to requests."

#### IQ-C18-02 · Beginner · strategy · ST

**Prompt.** Estimate the size of the market for a dog-walking app in a city of 1.2 million households.

**Rubric.**
- **Baseline:** One estimate with no check.
- **Strong:** Two routes (top-down, bottom-up), a range, and a so-what.
- **Standout:** Explains the gap between routes, checks against a reality constraint, separates total from obtainable, and states the swing assumption and a way to test it.

**Model answer.** I'll estimate two ways and compare.

*Top-down.* 1,200,000 households; suppose 25% own a dog: 300,000. Say 10% use a paid walker regularly: 30,000 households. At 3 walks a week for 52 weeks at $20 a walk: 30,000 × 3 × 52 × $20 = $93.6 million a year.

*Bottom-up (supply side).* Suppose 2,000 active walkers in the city, each doing 6 walks a day, 5 days a week, 50 weeks a year, at $20: 2,000 × 6 × 5 × 50 × $20 = $60 million a year.

*Compare.* The top-down is 1.6 times the bottom-up. A likely reason: the top-down adoption (10% of owners using a walker, 3 walks a week) is optimistic, while the bottom-up counts only walkers who are currently active, and informal walkers (neighbors, friends) are not counted in either. So the current paid market is probably nearer the lower figure.

*Reality check.* A walker doing 6 walks a day, 5 days a week, earns $600 a week, about $30,000 a year: plausible for a full-time walker. Cross-check demand against supply: 30,000 households at 3 walks a week is 90,000 walks a week; at 30 walks per walker per week that needs 3,000 walkers, 1.5 times the 2,000 assumed. That is the same 1.5 gap, so the demand assumptions (adoption and frequency) are the likelier overstatement.

*Range and so-what.* $60 to $94 million for all paid walking; I'd plan on $60 million. Our obtainable share is the question: with a 5% share in three years, about $3 million in gross bookings; an app taking a 20% commission would earn about $600,000 in revenue, which may not support a team. So the size sets up the real question: what commission and share, and whether the app is more than a directory. The assumption that swings it is paid-walker adoption (10% could be 4% or 15%), which a small survey or a pilot could test.

**Follow-ups.**

- **Q.** The two routes disagree. What do you do? **A.** "Reconcile them. Top-down gave about $94 million (30,000 households × 3 walks × 52 × $20) and supply-side gave $60 million (2,000 walkers × 6 walks × 5 days × 50 weeks × $20 is 3 million walks). The gap says something: either there are more walkers than I assumed, or the 10% of dog owners who pay regularly is too high, or walkers are working more than 6 walks a day. I would take the lower figure as a reality constraint on what can be served today and the higher as potential, and I would present the range of $60 to $94 million."
- **Q.** What is the obtainable share, and what is the swing assumption? **A.** "The obtainable revenue depends on how many walks we can supply. If we could capture 5% of the walks in year one, that is 150,000 walks, about $3 million at $20 a walk. The swing assumption is the share of owners who pay regularly, 10% in my top-down: halving it halves the market. I would test it with a short survey of dog owners and with a landing page that takes sign-ups for a first walk at a stated price, and I would update the estimate with the conversion rate."

#### IQ-C18-03 · Intermediate · strategy · ST · Apple

**Prompt.** Should a device maker launch a subscription bundle of its services?

**Rubric.**
- **Baseline:** "Yes, bundles increase revenue," or "no, it will cannibalize."
- **Strong:** Diagnoses the situation, models the economics, and addresses cannibalization.
- **Standout:** Names ecosystem integration as the source of advantage, computes the break-even on cannibalization and the retention benefit, states the assumption to test, and proposes a staged test.

**Model answer.** The setting is general: I know the product only from public information, and nothing here describes any real plan. I'd first ask what the company wants (more revenue per customer, lower churn, a stronger ecosystem) and diagnose the current state: how many customers pay for how many services.

*Diagnosis (invented).* Per 1,000 users: 250 pay for two or more services (average $22 a month), 450 pay for one ($8), and 300 pay for none. A bundle of four services at $20 is cheaper than buying them separately.

*Where the advantage comes from.* Ecosystem integration: the services work better together and with the device, and customers who use several are less likely to leave. A bundle reinforces that and makes switching costlier (C18.5).

*Economics.* Three effects. *Cannibalization:* the 250 multi-service payers move to $20 and lose $2 each: −$500 a month per 1,000 users. *Upgrades:* single-service payers who add the others at +$12 each; suppose 5% do: 450 × 0.05 × $12 = +$270. *New payers:* non-payers who join at $20; suppose 3%: 300 × 0.03 × $20 = +$180. Net: −$500 + $270 + $180 = −$50 a month per 1,000 users: roughly break-even on the first month. With 8% upgrades and 4% new payers: +$172. So on revenue alone the bundle is marginal; its value depends on adoption.

*The retention benefit.* If bundle subscribers churn less, say 2.1% a month against 3.0% (invented), the expected lifetime rises from 33 months to 48 months. For a multi-service payer, $22 a month over 33 months is $733; $20 over 48 months is $952: a gain of about $219 per customer in lifetime revenue, in spite of the lower monthly price. So the bundle pays if the retention effect is real, and it does not if it is not. That is the assumption to test.

*Other effects.* Pricing power: a bundle makes it harder to raise individual prices; each service's team may lose visibility of its own economics; regulators may examine bundles that tie services together `[V: the European Commission's 2022 decision on Amazon's Prime and Buy Box practices is an example]`.

*Recommendation.* Test it before committing: offer the bundle in one market for a quarter, with a holdout, and measure upgrades, new payers and, most importantly, retention of bundle subscribers against a matched group. Launch more widely if retention improves by enough to give a positive lifetime value (at least a 20% longer lifetime in this example). I would change my mind if the retention gain were small, in which case the bundle is a discount.

*Company note.* Apple is the setting only: `Inferred` from third-party reports that strategy prompts at Apple include ecosystem and services decisions `[unverified: candidate-reported]`. No claim is made about any real bundle, price or data.

**Follow-ups.**

- **Q.** How do you compute the break-even on cannibalization? **A.** "With round numbers of my own, labeled invented. Suppose 250 users per 1,000 pay $22 a month for two services separately, $5,500. A bundle of those services at $18 would, if all 250 switched, bring $4,500, a loss of $1,000. To make up for it the bundle needs about 1,000 ÷ 18 = 56 extra subscribers, a rise of 22%, or a retention gain that is worth the same. If the bundle also reduces monthly churn for bundled users, that adds value over time. The break-even therefore depends on how many new subscribers and how much retention improvement the bundle brings, and that is the assumption to test."
- **Q.** What staged test would you run? **A.** "Offer the bundle to a random 10% of eligible customers in one country for eight weeks, with a control group that sees the existing offers. Measure take-up, the share who switch from separate subscriptions (cannibalization), new subscribers, churn over the period and revenue per user. Decide in advance: continue if net revenue per eligible user is higher than the control's or churn falls enough to pay back in a year; stop if the net is lower and churn is unchanged. The integration across devices is the source of advantage, so I would also measure how many services bundle users actually use."

#### IQ-C18-04 · Intermediate · strategy · ST · Google

**Prompt.** A company has a popular free, ad-supported consumer product. Should it launch a paid, ad-free tier?

**Rubric.**
- **Baseline:** "Yes, subscriptions are good revenue."
- **Strong:** Computes the revenue gained against ad revenue lost, and notes who would pay.
- **Standout:** Recognizes selection (heavy users are worth more in ads), sets the break-even, considers the effects on the free product, positioning and trust, and proposes a test.

**Model answer.** The setting is general; I know such products only from public information, and nothing here describes a real plan. The crux: the people who would pay to remove ads are the people the ads earn the most from.

*Numbers (invented).* 1,000,000 monthly users; average ad revenue $2.40 per user per month. A paid tier at $8. Suppose 4% convert: 40,000 payers, $320,000 a month. If the converters were average users, the ad revenue lost is 40,000 × $2.40 = $96,000, a net of +$224,000. But paying users are typically heavier users: if their ad value is $5 a month, the loss is $200,000, a net of +$120,000. The break-even is where the converters' ad value equals the price: if they are worth $8 a month in ads, the tier gains nothing. So the key estimate is the ad value of the converters, which I can measure from usage.

*Other effects.* Does the paid tier change the free product (fewer heavy users sharing content, a weaker network)? Does it affect advertisers (a smaller audience)? Does it change how users see the company (a paid product has to be better; trust is higher when the customer pays)? Is there a segment (professionals) that would pay for features beyond ad removal, which would justify the price better?

*Alternatives.* A lower-priced tier; feature-based paid tiers; a usage limit on the free tier. I'd evaluate the paid tier on the heavy segments first.

*Recommendation.* Run a limited test: offer the paid tier to a sample of heavy users, measure conversion, the ad revenue they leave, retention and any effect on others, and compute the net per converter. Launch if the net per converter is clearly positive and retention is higher among payers. What would change my mind: converters' ad value near $8.

*Company note.* Google is the setting only: `Inferred` from candidate reports that strategy prompts at Google concern monetizing free consumer products `[unverified: candidate-reported]`. No Google data or plan is claimed.

**Follow-ups.**

- **Q.** How do you set the break-even given who converts? **A.** "The people who pay to remove ads are the heavy users, who earn the most in ads. If converters average $6 of ad revenue a month, not the $2.40 average, a $8 price gains only $2 per converter, and 40,000 payers add about $80,000 a month net, not $320,000. The break-even price is the ad revenue the converters used to generate, here $6. I would estimate converters' ad revenue from the data on heavy users and check that the net is positive after payment costs and support."
- **Q.** What are the effects on the free product, positioning and trust? **A.** "Heavy users leaving the free tier lowers total ad impressions and may reduce advertisers' reach, so I would check advertiser spend. Positioning: a paid ad-free tier tells users the ads are a cost, which could make the free experience feel worse. Trust: if the free product's ad load rises to make up the revenue, free users lose. I would test in one market for eight weeks, measuring total revenue per user across both tiers, free-user engagement and advertiser reach, and keep the free tier's ad load unchanged during the test."

#### IQ-C18-05 · Hard · strategy · ST · Apple

**Prompt.** How should a platform owner respond if regulation opens alternative app distribution?

**Rubric.**
- **Baseline:** "Fight it," or "comply and accept lower revenue."
- **Strong:** Identifies what is at stake (revenue, security, quality, developers, users) and lays out response options.
- **Standout:** Models revenue under different shifts, separates what regulation requires from what the owner chooses, considers second-order effects on security and developers, and proposes a staged response with measures.

**Model answer.** This is an Illustrative scenario, with regulatory facts as of 2026-10 `[V: Apple Form 10-Q, 2026, on US and EU proceedings; the EU Digital Markets Act]`; I know the area only from public information, and nothing here describes any real company's plans. Several jurisdictions have adopted or considered rules that require large platforms to allow other app stores or payment methods. I'd treat the question as how to respond, in order.

*Diagnosis.* What is at stake: (1) *revenue*: the platform earns a commission on developer billings; (2) *security and quality*: the platform's review and distribution control is part of its promise to users; (3) *developers*: they want lower fees and direct relationships; (4) *users*: they value safety, simplicity and choice; (5) *the ecosystem advantage*: integration between devices and services (C18.5).

*Revenue under shifts (illustrative index).* Developers bill 100 through the platform; commission 30%: revenue 30. Suppose regulation allows alternatives, and the platform charges a reduced technology fee of 5% on billings that move. If 10% of billings move: 90 × 30% + 10 × 5% = 27 + 0.5 = 27.5, down 8%. If 30% move: 70 × 30% + 30 × 5% = 21 + 1.5 = 22.5, down 25%. The size of the shift is the swing assumption, and it depends on how much developers gain by moving and how much users will follow.

*Options.* (A) Contest the rule and comply minimally. (B) Comply fully and compete on value: invest in the quality of the platform's own store and services so that users and developers choose it. (C) Comply and redesign the commercial terms (a lower commission with a fee for services such as payments, review, discovery, and updates) so that the platform's revenue tracks the value it provides. (D) Comply with strong safeguards (verification, notarization, clear warnings) for alternative channels.

*Evaluation.* A delays and risks penalties and goodwill. B and C aim to keep users and developers on the platform by merit. D protects users from the new risks (malware, scams) that alternative channels can create, a real second-order effect. The options combine: C and D are compatible, and B is the long-term goal.

*Second-order effects.* Security incidents on alternative channels could harm users and the platform's reputation even if the platform is not at fault; developers may fragment their releases; competitors may exploit the opening; privacy promises may be harder to keep. Regulators may scrutinize the new terms themselves.

*Recommendation.* Comply in good faith, restructure commercial terms to charge for value (C), build the safeguards (D), and invest in making the platform's store the best place to distribute (B). Measure: share of billings that move, security incident rate, developer satisfaction, user trust, and revenue per user. Stage by region where rules apply. I'd change my mind if the share of billings moving were small, which would mean less urgency, or large, which would call for a deeper rethink of the model.

*Company note.* Apple is the setting only (a platform owner of the kind Apple and Google are): `Inferred` from third-party reports that strategy prompts at Apple include platform and regulatory scenarios `[unverified: candidate-reported]`. No claim is made about any company's actual response, fees or rules.

**Follow-ups.**

- **Q.** What does regulation require and what does the owner choose? **A.** "I would separate the two carefully. The requirement is whatever the rule states for the jurisdiction, for example permitting alternative stores or payment methods, and I would confirm the exact text with legal `[V: EU Digital Markets Act; Apple Form 10-Q on app-store proceedings]`. The choices are everything the rule leaves open: fees on alternative distribution, how security review works, how users are warned, and how developers are supported. The response should comply fully, choose terms that are lawful and defensible, and avoid actions that read as obstruction. Treating the choices as a business decision, with legal review, keeps the response honest."
- **Q.** How do you model revenue under different shifts? **A.** "With scenarios. Suppose commission revenue is 100 on a base where the platform takes 30% of spend. If 15% of spend moves to an alternative channel where the platform charges a 10% fee on the moved spend, revenue is 85 × 0.30 + 15 × 0.10 = 27.0 on the same spend base (index), about 10% below the 30 on that base. At a 30% shift it is 70 × 0.30 + 30 × 0.10 = 24.0, a 20% fall. I would show 5%, 15% and 30%, say which assumptions drive them (the fee and the share that moves), and set measures: share of spend moved, developer retention and security incidents."

#### IQ-C18-06 · Hard · strategy · ST · Microsoft

**Prompt.** An enterprise software company has three business lines: a mature suite that funds the company, a fast-growing platform, and an experimental line. How do you allocate investment?

**Rubric.**
- **Baseline:** "Put the most money in the growing business."
- **Strong:** Assigns each line a role and criteria, and allocates with reasons.
- **Standout:** Protects the cash source, sets stage gates for the experiment, uses numbers on return, names interdependencies between lines, and states what would change the allocation.

**Model answer.** The setting is general; I know such companies only from public information. The first move is to give each line a role, because the right investment depends on what the line is for.

*Roles (invented figures).* The *mature suite*: revenue 60 (index), growth 3% a year, margin 45%. Its role is to fund the company and to defend against erosion. The *growth platform*: revenue 30, growth 25%, margin 30%. Its role is to become the next major business and to be the company's future. The *experimental line*: revenue 2, growth 100%, margin deeply negative. Its role is to find out whether a new bet is worth scaling.

*Criteria.* Return on the strategic goal, size of the opportunity, strength of the advantage, risk, and interdependence (does one line strengthen another?). For example, the platform may sell to the suite's customers, and the suite's relationships may be its distribution.

*Allocation logic.* Suppose 10 units of investment capacity. *Suite:* enough to defend and modernize, since it produces 27 of profit (60 × 45%) and any erosion hurts everything; say 2. *Platform:* the largest share, since growth at 25% on 30 is 7.5 of new revenue a year, with a good chance of becoming the largest line; say 6. *Experiment:* a bounded amount with stage gates, say 2, released in stages against milestones (customer evidence, unit economics) with a stop rule.

*Numbers to check.* The platform's growth adds 7.5 in revenue at 30% margin, about 2.25 of profit a year at current margins, rising as scale grows; the experiment may have a low chance of success but a high payoff. The suite's decline rate matters: if it fell by 5 a year, that would be worth more than a small platform gain, so I'd check what the suite needs to hold its position.

*Interdependencies.* If the platform's customers come through the suite's relationships, cutting suite investment harms the platform. I'd map such dependencies.

*Decision and review.* Allocate about 2, 6 and 2, review each quarter, and shift if the platform's growth slows, if the suite shows faster erosion or if the experiment reaches a gate. What would change my mind: evidence that the experiment is more promising than its stage suggests (a larger share), or that the suite's customers are at risk of leaving (more to defend).

*Company note.* Microsoft is the setting only: `Inferred` from candidate reports that portfolio-allocation prompts at Microsoft involve mature, growth and experimental lines `[unverified: candidate-reported]`. No Microsoft data or plan is claimed.

**Follow-ups.**

- **Q.** What stage gates would you set for the experimental line? **A.** "Fund in tranches tied to evidence, with a cap. For example, a budget of no more than 5% of operating income; at month six, 30% weekly retention among pilot customers; at month twelve, at least five paying customers each above $50,000 a year; and miss a gate and the line is stopped or reshaped. Each gate is written in advance and reviewed by someone outside the experimental team. This lets the company explore without letting the experiment grow into a drain on the lines that fund it."
- **Q.** How do you protect the cash source, and what would change the allocation? **A.** "The mature suite keeps the investment needed for reliability, security and defense against erosion, since it funds the company; cutting it to feed growth would shrink the source. I would name the interdependencies: the platform sells into the suite's customers, so suite churn hurts the platform, and the experimental line may use shared services. The allocation would change if platform growth falls below, say, 15%, if suite churn rises, or if the experiment hits a gate early. I would review the allocation every six months against these triggers."

#### IQ-C18-07 · Hard · strategy · ST · Amazon

**Prompt.** A large online marketplace is considering selling its own branded products in categories where third-party sellers do well. Should it?

**Rubric.**
- **Baseline:** "Yes, own brands have higher margins," or "no, it will upset sellers."
- **Strong:** Weighs margin against seller trust and regulatory risk, with numbers.
- **Standout:** Models the net including diverted commission and trust effects, identifies the mechanism of the marketplace advantage (selection, trust), proposes safeguards, and states a test and conditions.

**Model answer.** The setting is general; I know the topic only from public information, and nothing here describes any real company's practice. Marketplaces and their owners' own products have been the subject of public scrutiny and regulatory attention in several jurisdictions `[V: European Commission decision of 20 December 2022 on Amazon's use of seller data and Buy Box; Digital Markets Act self-preferencing rule]`, which is part of the risk.

*Diagnosis.* A marketplace's advantage is selection and trust: buyers come because it has what they want and they can rely on the process; sellers come because buyers are there (a network effect, C18.5). The question is whether competing with sellers erodes that advantage.

*Numbers (illustrative).* A category has gross merchandise value of $1 billion. The marketplace earns a 15% commission: $150 million. Suppose its own brand captures 10% of the category ($100 million of sales) at a 35% margin: $35 million. But those sales come largely from sellers' sales, so the commission on them is lost: 15% × $100 million = $15 million. Net: +$20 million.

Now suppose sellers respond: a few leave and others raise prices, and the category's total sales fall 3% ($30 million), costing $4.5 million of commission. Net: +$15.5 million. If the response is worse (a 10% fall, $100 million, $15 million of commission), the net is +$5 million and the long-run damage could exceed it. The estimate of the seller and buyer response is the swing assumption.

*Beyond the arithmetic.* Trust has a multiplier: sellers make decisions about where to invest based on whether the platform will use their success against them. Concerns include use of sellers' sales data to choose what to copy, favored placement for own products, and the effect on buyer trust if results look biased. Regulation can change the economics overnight.

*Options.* (A) No own brands. (B) Own brands only where sellers are thin (gaps in selection), which fills selection and competes less directly. (C) Own brands with strict safeguards: no use of individual sellers' data, clear labeling, no preferential ranking, and independent audit. (D) Free entry in all categories.

*Recommendation.* B with C's safeguards: enter where selection or quality is poor, which expands the marketplace's value, and keep firm rules on data and ranking. Measure: seller retention and investment, buyer trust, category growth, and the diverted-commission arithmetic, with a stop rule if seller exits exceed a threshold. What would change my mind: evidence that sellers in the category are leaving or that regulators are acting, which would favor A.

*Company note.* Amazon is the setting only (a large marketplace operator): `Inferred` from candidate reports that marketplace-conflict prompts appear at Amazon `[unverified: candidate-reported]`. No claim is made about Amazon's actual practices, data or decisions.

**Follow-ups.**

- **Q.** How do you model the net effect including diverted commission and trust? **A.** "With three effects, using invented figures. Suppose own-brand sells 1,000 units a day at $6 margin: $6,000. If 600 of those units were diverted from third-party sellers who would have paid $3 each in commission, the platform loses $1,800, for a net of $4,200 a day before trust effects. Now the trust effect: if buyers or sellers believe the platform favors its own products, and total marketplace sales fall by 0.5% on $5 million of daily sales at a 15% commission, the loss is about $3,750 a day, which nearly erases the gain. So the decision turns on the trust effect, which I would measure by seller retention and buyer conversion."
- **Q.** What safeguards would you propose? **A.** "Structural ones. Do not use non-public seller data to design or price own-brand products; do not give own-brand products preference in search or placement, and label them clearly; keep teams separate with documented rules; and have an independent review of ranking. Measures: third-party seller retention and revenue in the categories, the share of search results that are own-brand at equal quality, and complaints. Because regulators in several places have examined this question `[V: European Commission decision of 20 December 2022; Digital Markets Act]`, I would involve legal early and treat the safeguards as the price of doing it at all."

#### IQ-C18-08 · Hard · strategy · ST

**Prompt.** Your productivity-software company wants to add voice transcription to its notes product. Should it build the capability, buy a company that has it, or partner with a provider?

**Rubric.**
- **Baseline:** "Build it, because we should own our technology," or "partner, because it's faster."
- **Strong:** Compares the options on cost, time and control, and says whether the capability is core.
- **Standout:** Decides by whether the capability differentiates the product, models the volume at which build overtakes partner, prices the delay as well as the spend, protects against dependence (data, terms, exit), and says what would change the choice.

**Model answer.** *Start with the question that decides the rest (the chooser is FW-C18-07).* Is transcription something customers choose us for, or something they expect as a basic part of notes? If it is a basic expectation, speed and cost matter most and ownership matters least; if it is where we want to win (for example, a unique accuracy on meetings), control and learning matter more.

*Options and figures (all invented).* Partner: license a provider at $0.012 a minute with about six weeks to integrate. Build: about $3.0 million and twelve months, with a run cost of $0.004 a minute. Buy: a company at about $25 million with a team of twenty engineers and a small user base. At 10 million minutes a month, partner costs 0.012 × 10,000,000 × 12 = $1.44 million a year and build costs $0.48 million a year to run, so build's extra $3.0 million is repaid in 3.0 ÷ (1.44 − 0.48) = about 3.1 years. At 30 million minutes a month, partner costs $4.32 million a year against $1.44 million, and build is repaid in about one year. So volume decides when building pays.

*Delay has a price.* Building takes twelve months against six weeks: if the feature is expected to lift retention or win deals, those twelve months of lost benefit belong in the comparison, as does the risk that a competitor ships first.

*Risks of each.* Partner: dependence on a provider's price and quality, and where our customers' audio goes (privacy and data terms). Build: delivery risk and distraction from the roadmap. Buy: integration risk and paying for a team and product we may not need; it makes sense only when the capability and the team are both scarce and strategic.

*Recommendation.* Partner now, to ship in weeks and learn how customers use it, with contract terms that protect data, cap price increases and allow an exit; revisit building when volume passes about 25 million minutes a month or when accuracy for our use case becomes a reason customers choose us. Buy only if a partner cannot meet the quality bar and a team with the capability is available at a price that is small beside the value. I'd measure adoption, accuracy on our own audio, cost per minute and customer privacy concerns, and I'd change my view if the provider's terms worsened or our volume grew faster than expected.

*Signals.* The core-or-context question; a computed break-even on volume; the price of delay; dependence risks; a staged recommendation with triggers.

**Follow-ups.**

- **Q.** How would you decide whether to acquire a company instead? **A.** "I'd ask whether we need the technology, the team or the customers, and whether we could get it more cheaply by partnering or hiring. An acquisition is justified when the capability is strategic, the team is scarce, and buying is faster than building by enough to matter, and when we can integrate it without losing the people. At $25 million, I'd compare it with the build cost of $3 million and the partner cost over several years; unless the team is the real prize, it is the most expensive route. I'd also run diligence on quality, security and the retention of key people, and I'd set integration criteria before signing."
- **Q.** What if the partner raises prices or changes its terms? **A.** "That is the main risk of partnering, so I'd plan for it up front: a price cap or notice period in the contract, a second provider qualified in parallel if the feature matters, and an abstraction in our product so that switching is a weeks-long task, not a rewrite. I'd also track cost per minute and the point at which building becomes cheaper, so that a price increase moves the decision rather than surprising us."

#### IQ-C18-09 · Hard · strategy · ST

**Prompt.** What should the product vision be for a mid-sized photo-sharing app over the next three years, and how would you turn it into a roadmap?

**Rubric.**
- **Baseline:** A list of features: "AI editing, video, a marketplace."
- **Strong:** States who the product is for, the change it makes in their lives, and a few strategic bets, ordered in time.
- **Standout:** Grounds the vision in user and market trends and the company's advantages, states what it will not do, converts it into outcomes and bets by horizon with metrics and kill criteria, and says how it would learn that the vision is wrong.

**Model answer.** *Ground it.* A vision should answer who we serve, what changes for them, and why we can win. I'd start from evidence: how people share photos now (messaging apps and private groups, more than public feeds), what our users do that is distinctive (suppose families sharing within small circles), and what we do better than large platforms (privacy, a calm experience, long-term storage and organization). I'd also name the trends that could hurt us: sharing moving to messaging, and phone makers building photo features into the device.

*A vision statement.* "The place where a family's photos live and are shared with the people who matter, for decades." It is specific about the user (families and close circles), the job (keep and share), and the quality (private and lasting). It leaves out public fame-seeking and ad-driven feeds, which is a strategic choice: what we will not do.

*From vision to outcomes by horizon.* Now (next two quarters): make sharing within circles effortless, measured by shares per active family and the share of new users who invite a second person within a week (say from 28% to 40%). Next (quarters three to six): make the archive worth keeping, through search by person and event and annual books, measured by weekly retrievals per user and 12-month retention. Later (year two and three): extend to shared family history and relatives who are not users, measured by non-user recipients who become users and by paid conversion. For each bet I'd write the assumption, a small test and a kill criterion (C26), so that the roadmap is a set of testable bets, not promised features.

*Guardrails and honesty.* The roadmap should commit to outcomes and ranges, and show confidence falling with distance: high for now, medium for next, low for later. I'd keep capacity for the unplanned and review the vision yearly against what the data says.

*How I'd know it's wrong.* Leading indicators: if circles do not grow, if retrieval stays low, or if shares move to messaging apps faster than we can integrate. I'd set a review date and thresholds in advance, and be ready to change the target user, not just the features.

*Signals.* Evidence-based user and trend grounding; a specific vision with exclusions; outcomes by horizon with metrics; bets with kill criteria; how it could be wrong.

**Follow-ups.**

- **Q.** How do you keep a three-year vision from becoming a promise to stakeholders? **A.** "By separating the vision from the roadmap and showing confidence by horizon. The vision is a direction and a choice about who we serve; the roadmap commits to outcomes for the next two quarters and shows later items as bets with their assumptions. When someone asks for a date on a later item, I give the test that would earn it a date. I also review the plan quarterly and say publicly what changed and why, so changes read as learning."
- **Q.** What would you not do, and why does it matter? **A.** "A vision is only useful if it excludes things. Here I would not build a public, ad-funded feed, because it would pull the product toward attention and away from privacy and the family use case, and it would put us against much larger platforms on their strengths. Saying this early helps me say no to attractive requests, and it makes the roadmap coherent."

## 12. Exercises

Ten exercises. Each has a model solution and an alternative. Figures are assumptions unless marked, and the arithmetic was computed.

#### EX-C18-01 · Turn a goal into a strategy

**Problem.** Rewrite each as diagnosis, guiding policy and coherent actions, naming one thing declined: (a) "Grow the app's weekly users 50%." (b) "Be the number one meal-kit brand." (c) "Expand internationally."

**Context.** Three slides from a planning deck.

**Data.** Invent plausible diagnoses and mark them `(invented)`.

**Constraints.** Eight minutes.

**Expected approach.** FW-C18-01 and the detector (FW-C18-08).

**Solution.** (a) *Diagnosis:* 60% of weekly users arrive from one referral channel and half of new users leave in a week because the first session is empty (invented). *Policy:* grow by fixing activation and deepening the referral loop, not by buying traffic. *Actions:* a guided first session, an invite flow, a weekly digest. *Declined:* paid acquisition this year. (b) *Diagnosis:* the category is crowded and customers churn on price; our edge is dietary-specific kits (invented). *Policy:* be the best for people with dietary needs.

*Actions:* specialized recipes, a nutritionist partnership, a retention program. *Declined:* the general family market. (c) *Diagnosis:* 40% of our customers already ship to one neighboring country at high cost (invented). *Policy:* enter that country first through a partner. *Actions:* local payment methods, a partner for logistics. *Declined:* other countries until unit economics are proven.

**Alternative solution.** Add a measure for each policy that tests whether it is working.

**Tradeoffs.** A focused strategy gives up opportunities; naming what is declined is the discipline.

#### EX-C18-02 · Size a market two ways

**Problem.** Size the annual market for a car-wash subscription in a city of 800,000 households. Top-down: 70% of households own a car, 6% subscribe, at $300 a year. Bottom-up: 60 car-wash sites, 700 members each, at $300 a year. Compute both, the gap and a planning range, and name the swing assumption.

**Context.** A market-entry case.

**Data.** As above.

**Constraints.** Five minutes.

**Expected approach.** FW-C18-03.

**Solution.** Top-down: 800,000 × 0.70 = 560,000 cars; × 0.06 = 33,600 subscribers; × $300 = $10.08 million. Bottom-up: 60 × 700 = 42,000 members × $300 = $12.6 million. The bottom-up is 1.25 times the top-down, close, which is reassuring. A planning range of $10 million to $13 million. Reality check: 42,000 members is 7.5% of cars, so the subscription rate would need to be near 7.5%; the 6% assumption is below that, and the sites may serve people from outside the city. The swing assumption is the subscription rate (6% could be 3% or 10%). A pilot or a survey of members at existing sites would test it.

**Alternative solution.** Cross-check with the usage of the nearest alternative (pay-per-wash revenue per site).

**Tradeoffs.** Two routes that agree can share a hidden assumption; check the reality constraint.

#### EX-C18-03 · Unit economics with sensitivities

**Problem.** A subscription costs $10 a month; variable cost is $3.50; CAC is $45; monthly churn is 6%. Compute contribution, payback, lifetime, lifetime contribution and the ratio to CAC. Then recompute for churn 9%, and for churn 9% with CAC $70.

**Context.** A pricing and growth review.

**Data.** As above.

**Constraints.** Six minutes.

**Expected approach.** FW-C18-06.

**Solution.** Contribution $6.50 a month. Payback $45 ÷ $6.50 = 6.9 months. Lifetime 1 ÷ 0.06 = 16.7 months; lifetime contribution $108; ratio 2.4. At 9% churn: lifetime 11.1 months, lifetime contribution $72, ratio 1.6. At 9% churn and CAC $70: payback 10.8 months, ratio 1.03 (barely covering acquisition). The business is healthy at 6% churn and fragile if churn and acquisition cost worsen together. The strategic implication: retention is the first lever, and a channel with cheaper acquisition the second.

**Alternative solution.** Raise the price to $12 with the same costs: contribution $8.50, payback 5.3 months at CAC $45, and test the effect on churn.

**Tradeoffs.** Higher price raises margin and may raise churn; measure both.

#### EX-C18-04 · Test the claimed advantage

**Problem.** For each claim, say whether the mechanism exists, whether it is durable, and what would erode it: (a) "Our photo app has network effects because we have many users." (b) "Our data is our moat." (c) "Customers can't leave because their documents are stored with us." (d) "We have scale: we are the biggest."

**Context.** A pitch deck.

**Data.** None.

**Constraints.** Seven minutes.

**Expected approach.** FW-C18-05.

**Solution.** (a) Probably no mechanism: many users does not mean each user's value rises with others; unless people share albums so that value depends on friends being there, it is scale, not a network effect. (b) Depends: data is a moat only if more data keeps improving the product and rivals cannot get similar data; many data advantages saturate. (c) A switching cost: real if export is hard; durable only until export tools or regulation lower the cost, and customers resent lock-in. (d) Scale is an advantage only if it lowers cost per unit or improves the product; being biggest is a position, not a mechanism. In each case ask what the leader can do that a smaller rival cannot.

**Alternative solution.** Ask what evidence would show the mechanism (churn is lower among users with many connections).

**Tradeoffs.** A strict test rejects many claims; that is its purpose.

#### EX-C18-05 · Choose positioning axes

**Problem.** For a project-management tool, choose two axes from the customer's point of view that would separate the main alternatives (a spreadsheet, a simple task app, a full enterprise suite, a developer-focused tool), place them, and name a gap.

**Context.** A positioning discussion.

**Data.** None.

**Constraints.** Six minutes.

**Expected approach.** FW-C18-04.

**Solution.** Axes: setup effort (minutes to useful) against depth (how much complexity it can handle). Spreadsheet: low setup, low depth. Simple task app: low setup, medium depth. Enterprise suite: high setup, high depth. Developer tool: medium setup, high depth for one type of team. The gap: low setup with high depth for non-technical teams (a product that starts simple and grows with the team). The risk: that is where a simple tool can expand upward and where an enterprise suite can come down; check what each cannot do without hurting its main business (an enterprise suite cannot become simple without confusing its buyers).

**Alternative solution.** Use price against service level.

**Tradeoffs.** Axes chosen after the answer flatter it; choose from customer interviews.

#### EX-C18-06 · Build, buy or partner over two horizons

**Problem.** A capability would add $15 million a year of revenue at a 60% contribution margin once shipped. Build: 14 months, $8 million. Buy: 8 months, $30 million. Partner: 4 months, vendor takes 30% of revenue. Compute the net over three years and over five years for each, and recommend.

**Context.** A capability gap.

**Data.** Ignore maintenance and discounting.

**Constraints.** Eight minutes.

**Expected approach.** FW-C18-07.

**Solution.** Three years: build (36 − 14) ÷ 12 × $15M = $27.5M revenue × 0.60 = $16.5M less $8M = $8.5M. Buy: (36 − 8) ÷ 12 × $15M = $35M × 0.60 = $21M less $30M = −$9M. Partner: (36 − 4) ÷ 12 × $15M = $40M × (0.60 − 0.30) = $12M. Five years: build (60 − 14) ÷ 12 × $15M = $57.5M × 0.60 = $34.5M less $8M = $26.5M. Buy: 52 ÷ 12 × $15M = $65M × 0.60 = $39M less $30M = $9M. Partner: 56 ÷ 12 × $15M = $70M × 0.30 = $21M. Partner leads at three years ($12M against $8.5M), build leads at five ($26.5M against $21M); buy trails unless the acquired assets have other value. Recommend partnering now with a plan to build, if the capability is core and the five-year view is the relevant one.

**Alternative solution.** Add a discount rate; the ranking at three years moves further toward partner.

**Tradeoffs.** Running a partner and a build in parallel costs more and keeps the early revenue.

#### EX-C18-07 · The break-even for matching a free tier

**Problem.** A product has 50,000 payers at $12. A rival's free tier prompts a decision to launch one: 200,000 free users, 3% convert to $12, ads earn $0.40 per free user a month. What share of current payers can downgrade before matching loses money?

**Context.** A competitive response.

**Data.** As above.

**Constraints.** Five minutes.

**Expected approach.** Worked example 4.

**Solution.** Gains per month: conversions 200,000 × 0.03 × $12 = $72,000; ads 200,000 × $0.40 = $80,000; total $152,000. Each downgrade costs $12. Break-even downgrades: $152,000 ÷ $12 = 12,667, which is 12,667 ÷ 50,000 = 25.3% of payers. If more than about a quarter of payers would downgrade, matching loses money. Test the downgrade rate before launching broadly.

**Alternative solution.** Design the free tier so heavy-use features are absent, to reduce the downgrade rate.

**Tradeoffs.** A constrained free tier attracts fewer users and cannibalizes less.

#### EX-C18-08 · Spot the strategy theater

**Problem.** For each statement say what is wrong and how to fix it: (a) "Our strategy is to leverage synergies to deliver best-in-class customer value." (b) "Our strategy: increase revenue 30%, reduce churn 20%, launch five features." (c) "We will do everything: grow in all segments and all regions."

**Context.** A planning review.

**Data.** None.

**Constraints.** Five minutes.

**Expected approach.** FW-C18-08.

**Solution.** (a) Fluff: nothing could be wrong with it; replace it with a specific claim, such as "win teams of under ten by being usable in an hour." (b) Goals and a project list, no diagnosis or approach; add the diagnosis (why churn is high) and the policy. (c) No tradeoffs: nothing is declined, so it is not a choice; name the segment and region to win first and what is deferred.

**Alternative solution.** Apply the question "what will we not do?" to each.

**Tradeoffs.** A sharper statement can be wrong, which is why it is useful.

#### EX-C18-09 · Repair an OKR

**Problem.** Fix this OKR: *Objective: Make onboarding great. KR1: Launch the new tutorial. KR2: Complete the redesign. KR3: Run five user interviews.* Write an objective and three key results that are outcomes, with targets.

**Context.** A quarterly goal-setting.

**Data.** Invent baselines and mark them `(invented)`.

**Constraints.** Six minutes.

**Expected approach.** C18.8.

**Solution.** *Objective:* New users reach their first success quickly and come back. *KR1:* Raise the share of new users who complete the first task within 10 minutes from 38% to 55% (invented). *KR2:* Raise day-7 retention of new users from 24% to 30%. *KR3:* Cut onboarding-related support contacts per 100 new users from 6 to 4. The original key results were outputs (launch, complete, interview); the revised ones measure the outcome the work should produce. Add a guardrail (sign-up completion must not fall) and agree that the key results are for learning and not for rating individuals.

**Alternative solution.** Cut to two key results to keep focus.

**Tradeoffs.** Outcome targets can be missed for reasons beyond the team; review honestly.

#### EX-C18-10 · A timed full strategy answer

**Problem.** Give a 25-minute answer to: "Should a ride-hailing company enter food delivery?"

**Context.** Self-scored; record yourself. State assumptions aloud.

**Data.** None. Label what you assume.

**Constraints.** Use the 30-minute budget in section 4, compressed.

**Expected approach.** The strategy spine (FW-C18-02).

**Solution.** An outline of a strong answer. Objective: more usage per customer and better use of drivers. Diagnose: customers (frequent, time-sensitive), market (large, contested, low margin), competition (specialists with restaurant relationships; their advantage is supply density and restaurant ties), the company's advantages (an existing user base, a fleet of drivers, payments, routing). Sizing with two routes. Unit economics: order value, commission, courier cost per order, density (drops per hour), CAC (low, since it can market to existing riders); sensitivity to density.

Options: enter fully, enter in cities where the fleet is dense, partner with an incumbent, or not enter. Second-order effects: restaurants' trust, drivers' earnings during idle time (an upside), brand safety, cannibalization of ride supply at peak. Recommendation: pilot in two dense cities, use idle driver time, with thresholds (drops per hour, order value, retention) and a stop rule. What would change my mind: low density, or an incumbent with a strong lock on restaurants.

**Alternative solution.** Partner with a delivery specialist for restaurant supply and bring the user base.

**Tradeoffs.** Entering adjacent markets uses existing assets and spreads attention.

## 13. Practice protocol

**Timed drills (three a week for four weeks).**

- *Week 1: choices and sizing.* Use IQ-C18-01, IQ-C18-02, EX-C18-01, EX-C18-02 and EX-C18-08. Rewrite goals as strategy, size two ways, and spot theater.
- *Week 2: advantage and economics.* Use IQ-C18-03, IQ-C18-04, EX-C18-03, EX-C18-04, EX-C18-05 and EX-C18-07. Compute unit economics and break-evens by hand, and test advantage claims.
- *Week 3: decisions with structure.* Use IQ-C18-05 to IQ-C18-09, EX-C18-06 and EX-C18-09. Practice platform, portfolio and marketplace cases, build-buy-partner over two horizons, and OKR repair.
- *Week 4: full cases.* Use EX-C18-10 and two prompts you have not seen. Run 25-minute answers with a partner who changes the objective midway.

**With a partner.** Ask your partner to say "What's your point of view?", "How do you know the market is that big?" and "What will they do in response?" at random. Practice committing to a recommendation in two sentences.

**Read one real strategy.** Read a public strategy memo or shareholder letter of a company you follow, and write its diagnosis, policy and actions in three sentences, and what it declines.

**Feedback checklist (yes, partly, no).**

1. Did I state the objective and diagnose before proposing?
2. Did I size the market with two routes and a reality check?
3. Did I analyze competition by customer value, including substitutes and responses?
4. Did I name and test the source of advantage?
5. Did I compute unit economics with sensitivities and net out cannibalization?
6. Were my options different in kind, and compared over the right horizon?
7. Did I commit to a recommendation, sequence it and say what is declined?
8. Did I say what would change my view?
9. Did I avoid recited frameworks, goals as strategy and roadmap as strategy?
10. Did I finish with the two-sentence close from section 4?

**Answer journal.** For each drill record the date, the prompt, the diagnosis, the recommendation, the key number and assumption, your score out of ten and the step you rushed.

## 14. Implementation playbook

Apply the chapter on real work over the next three weeks. Each deliverable doubles as an interview story.

**Days 1 to 3.** Write the strategy of your product area in the kernel format: diagnosis, guiding policy (including what is declined) and coherent actions. Show it to your manager and ask what is wrong. If you cannot say what is declined, note it.

**Week 1.** Size one opportunity you could pursue with two routes and a reality check, and write the range, the swing assumption and a cheap test of it.

**Week 1.** Run the unit economics of your product or a feature: contribution per unit, payback, lifetime and two sensitivities. Share it with finance or data science for a sanity check.

**Week 2.** Write a one-page competitive analysis by customer value: the alternatives customers actually consider (including doing nothing), the positioning map, what each cannot do and likely responses. Test it with sales or support.

**Week 2.** Take one claimed advantage in your area (network effects, data, scale) and run it through the sources-of-advantage test.

**Week 3.** Rewrite your team's roadmap or goals (OKRs) so that each item traces to the guiding policy, and flag items that do not. Present the cuts you would make.

**Deliverables that become stories:** the kernel strategy and the declined list (a time you made a strategic choice explicit), the unit-economics and sizing work (a time you quantified an opportunity honestly), and the advantage test (a time you challenged a claim with a mechanism). Keep the numbers real, and keep what you did separate from what the team did.

## 15. Key takeaways and further reading

### Key takeaways

1. Strategy is a diagnosis, a guiding policy and coherent actions; its distinguishing feature is choice, including what you decline. A goal or a project list is not a strategy.
2. Size opportunities with two routes and a reality check, separate total from obtainable, and say which assumption swings the answer and how to test it.
3. Analyze competition by customer value and positioning, include substitutes and doing nothing, and anticipate the response; test every claimed advantage by its mechanism, durability and copyability.
4. Ground recommendations in unit economics with two sensitivities, net out cannibalization, and compare options over the right horizon (build, buy and partner rank differently at three and five years).
5. Commit to a recommendation, sequence it with a pilot and a stop rule, and say what would change your mind; use goals frameworks to measure the strategy, and watch for strategy theater.

### Further reading

- Richard P. Rumelt, *Good Strategy/Bad Strategy* (2011). The kernel and the four hallmarks of bad strategy `[V: Rumelt, Good Strategy Bad Strategy, 2011]`.
- Michael E. Porter, "What Is Strategy?" *Harvard Business Review* 74(6), November to December 1996, pp. 61 to 78 `[V: HBR 74(6), November to December 1996, pp. 61 to 78]`.
- Hamilton Helmer, *7 Powers* (2016). A rigorous treatment of sources of durable advantage `[V: Deep Strategy, 25 October 2016, ISBN 9780998116310]`.
- A. G. Lafley and Roger L. Martin, *Playing to Win* (2013). Where to play and how to win `[V: Harvard Business Review Press, 5 February 2013, ISBN 9781422187395]`.
- Carl Shapiro and Hal R. Varian, *Information Rules* (1999), on switching costs, lock-in and network effects `[V: Harvard Business School Press, 1999, ISBN 087584863X]`.
- John Doerr, *Measure What Matters* (2018), on OKRs, with the caution that misuse is common `[V: Portfolio/Penguin, 24 April 2018, ISBN 9780525536222]`.
- Jeff Barr, "Amazon S3" (14 March 2006) and "Amazon EC2 Beta" (25 August 2006); Sébastien Stormacq, "Twenty years of Amazon S3 and building what's next," AWS News Blog (13 March 2026); all on aws.amazon.com/blogs/aws. Amazon's 2015 annual report on Form 10-K (SEC) for the segment disclosure. The sources for CS-C18-02.
