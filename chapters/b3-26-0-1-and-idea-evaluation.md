---
id: C26
title: 0→1 and Idea Evaluation
tier: 2
competencies: [product-sense, strategy-gtm, discovery]
prerequisites: [C06, C15, C18]
defines_terms: [riskiest-assumption, smoke-test, concierge-test, product-market-fit, pivot, kill-criteria]
uses_terms: [inversion, mvp, assumption, hypothesis, pre-mortem, total-addressable-market, jobs-to-be-done, experiment, north-star-metric, reversible-decision, sunk-cost, unit-economics, positioning, willingness-to-pay, retention, cohort, activation, base-rate, survivorship-bias, tradeoff, prioritization, go-to-market, funnel, conversion-rate, confidence-interval]
frameworks: [FW-C26-01, FW-C26-02, FW-C26-03, FW-C26-04, FW-C26-05, FW-C26-06, FW-C26-07]
case_studies: [CS-C26-01 (Illustrative), CS-C26-02 (Verified)]
cross_refs_out: [C02, C03, C05, C06, C09, C10, C12, C14, C15, C16, C17, C18, C19, C20, C22, C24]
cross_refs_pending: []
status: draft
---

# C26 — 0→1 and Idea Evaluation

## 1. What interviewers test

"You have an idea for a new product; how would you decide whether to build it?" "Design a product for a market that does not exist yet." "A team has spent six months and the numbers are flat: kill, persist or pivot?" "Is a 5% sign-up rate on your landing page good?" New-product prompts are common in product-sense and strategy rounds, and zero-to-one thinking is a real part of an associate PM's work: most ideas fail, and the skill is to find out cheaply which ones. This chapter teaches how to generate ideas, evaluate and compare them, design and read the cheapest tests, decide to stop, continue or change direction, recognize real traction, and understand what changes as a product moves from zero to one to ten.

**Where it shows up.** `Inferred`: product-sense and strategy rounds at Google, Meta, Microsoft, Amazon, Apple, Netflix, Stripe and others, as "design a new product," "evaluate this idea," or "what would you test first?" `[unverified: candidate-reported]`. On the job it is the work of exploring a new surface, a new feature bet or an adjacent market.

**What is scored.** Whether you treat an idea as a bundle of assumptions to be tested, not a plan to be executed `Inferred`. Interviewers listen for a defined user and problem; a structured evaluation with evidence quality; the riskiest assumption named and the cheapest test that could prove it wrong; a measure and a threshold set in advance; a decision rule to kill, persist or pivot; and honesty about what early signals do and do not show.

Six observable behaviors:

1. You start from a problem and a user, and generate many ideas before choosing.
2. You evaluate ideas with explicit criteria and note the strength of the evidence behind each score.
3. You name the riskiest assumption and design the cheapest test that could falsify it.
4. You set the measure, the threshold and the decision rule before running the test.
5. You decide to kill, persist or pivot by pre-set criteria, not by attachment.
6. You distinguish real traction from vanity signals, and you know what changes when a product scales.

**The failure this prevents.** Six patterns end new-product answers: a solution with no user, a full build before any test, "validated" by friends and family, a waiting list taken as demand, no kill criteria, and a launch spike mistaken for product-market fit.

## 2. The concept from first principles

### C26.1 Sources of ideas; opportunity taxonomy

Strong ideas usually start from a problem observed in the world, not from a technology looking for a use (FW-C26-01). Common sources `Inferred`:

- **A pain you or others observe** (the workaround, the spreadsheet, the repeated complaint); the best source, because it comes with a user (C06).
- **Data signals:** a funnel step where many drop, searches with no good result, a segment that uses the product in an unplanned way.
- **Technology shifts:** something newly cheap, fast or possible (for example capabilities of AI, C24).
- **Regulatory or market change** that opens or closes options.
- **Business-model gaps:** customers overpaying, a service sold in a bundle that could be sold alone (unbundling), or separate services that could be one (bundling).
- **Adjacency:** a new product for existing customers, or the existing product for new customers (C09).
- **Competitor weaknesses** and complaints about incumbents.

**An opportunity taxonomy.** Classify an idea by how new it is to the company and to the customer (a framework in the spirit of the product-market matrix often attributed to Igor Ansoff `[V: Ansoff, Strategies for Diversification, Harvard Business Review 35(5), September-October 1957, pp. 113 to 124]`):

| | Existing customers | New customers |
|---|---|---|
| **Existing product** | Improve the core: more usage, retention, monetization | New market: new segment or geography for the same product (C09) |
| **New product** | Adjacent product for the base | Diversification: new product for a new market (highest risk) |

The further from the existing product and customer, the more assumptions are untested and the more the company's advantages (C18) matter. Another useful split: a **painkiller** (solves an acute, frequent problem that people already try to solve) against a **vitamin** (nice to have; people intend to use it and rarely do). Evaluate which one you are building.

### C26.2 Idea generation and the idea funnel

**Generating ideas.** Quantity first, judgment after. Start from problems (list twenty pains in a segment) and generate several solutions per problem; vary the approach (remove a step, change the price model, serve a different user, use new technology, combine two things). Constrain to focus: a customer segment, a time limit, a technology. Involve engineering and design, who see different possibilities. Postpone criticism until you have a long list.

**The funnel.** Ideas are cheap to generate and expensive to build, so move them through cheap filters before expensive ones (FW-C26-02): a *long list* (say 50), a *screen* by problem evidence and fit (about 12), a *scorecard* evaluation (about 5), *validation tests* (about 2), and a *build* of the survivor (1). The pass rates fall at each stage, which is the point: each stage costs more per idea than the last, so the funnel spends the least on the ideas that fail. Worked example 1 computes the hours.

### C26.3 Evaluating an idea: a scorecard

A scorecard makes the criteria explicit and comparable (FW-C26-03). Typical criteria, with weights that you set for the context:

| Criterion | Question |
|---|---|
| Problem severity and frequency | How painful and how often? Is there evidence (behavior, complaints, spending)? |
| Reach | How many people have it? A rough size at APM depth: customers × frequency × price (the total addressable market, C18), sanity-checked |
| Willingness to pay (or equivalent value) | Will they pay, change habits or switch? Evidence (C20.3) |
| Right to win | What advantage does this team or company have (distribution, data, technology, trust)? (C18) |
| Feasibility | Can it be built, legally and technically, in the time and with the team? |
| Differentiation | Why this and not the alternative, including doing nothing? |
| Strategic fit | Does it advance the company's direction, and is it reversible if wrong? |

**Score each criterion from one to five and record the *evidence quality*:** strong (observed behavior, paid commitment), medium (interviews, survey) or weak (opinion, analogy). Multiply the weighted score by a confidence factor (for example 1.0, 0.8 and 0.6) to get an *evidence-adjusted score*, which ranks ideas by what you know and not only by what you hope. The scorecard narrows the field and identifies what to test; it does not replace testing. Worked example 1 scores five ideas.

> **Counterexample.** Asked how to evaluate a new idea for a food app, a candidate says: "I think it's great: lots of people eat, the market is huge, and we could build it in three months." The interviewer asks who exactly would use it, how often, what they do today and what would change their behavior. The candidate has an idea and a market size, and none of the evidence that people have the problem. A better start: "I'd begin with the problem: who struggles to plan meals, what they do now, how often, and what it costs them. Then I'd list the assumptions that must hold and test the riskiest cheaply before building."

**When not to use a scorecard.** For a tiny, reversible experiment, just run it; the scorecard is for choosing among several options that cost real effort. Do not treat a score as truth when the evidence behind it is weak.

### C26.4 Validation design: MVP variants

C15 introduced the minimum viable product (MVP) as the smallest thing that tests an assumption. Here is how to design validation (FW-C26-04).

**Find the riskiest assumption.** List what must be true for the idea to succeed. A **riskiest assumption** is the assumption that, if false, would sink the idea, and about which you know least. Sort assumptions by *impact if wrong* and *how uncertain you are*; test the high-impact, high-uncertainty ones first. A useful way to cover the ground is to ask about four kinds of risk, often attributed to Marty Cagan `[V: Marty Cagan, SVPG, The Four Big Risks and Product Risk Taxonomies: value, usability, feasibility, business viability; three risks in the first Inspired edition, four from the second]`: *value* (will customers want it?), *usability* (can they use it?), *feasibility* (can we build it?) and *viability* (does it work for the business: legal, financial, strategic?). Most new products fail on value: nobody wants it enough.

**Choose the cheapest test that could prove you wrong.** The test must be able to fail. A test that cannot fail is a demonstration. Match the test to the assumption:

| Assumption | Cheap test |
|---|---|
| People have the problem and care | Interviews and observation of current behavior; examine what they already spend or do |
| People want this solution | Explainer video or landing page with a sign-up or deposit (smoke test); fake-door button in an existing product |
| People will use and pay, and value depends on delivery | Concierge test (do it by hand for a few customers) or Wizard-of-Oz (it looks automated; people do the work behind it) |
| People can use it | Prototype test with 5 to 8 users (C10) |
| We can build it | A technical spike: the hardest part, built roughly |
| It works economically | Unit economics from the concierge test (C20.7) |

### C26.5 Validation: smoke tests, prototypes, concierge tests

**Smoke test.** A **smoke test** is a test of demand run before the product exists, by presenting the offer (a page, an advertisement, a button) and measuring whether people take a costly-enough action (sign up, give a deposit, pre-order). The steps: (1) state the hypothesis and the decision it informs; (2) build the offer (page, video, price); (3) choose the audience (the target segment, from a channel you can measure); (4) set the measure and the threshold *before* the test; (5) compute the sample size; (6) run for a fixed time; (7) decide. Treat the action as a *commitment ladder*: viewing, then email, then a deposit, then a pre-order, then payment. Each step up is a stronger signal and a smaller number. An email costs nothing and says little; a deposit says more.

**Concierge test.** A **concierge test** is a test in which you deliver the service to a few customers manually, with no or minimal software, to learn whether the service is wanted, how it should work and what it costs. It tests value and economics at the same time. It does not scale, which is the point: you learn what to automate (Worked example 4).

**Prototype tests.** A clickable prototype shows users a flow and tests usability and comprehension (C10); it does not test whether they would use it in their lives.

**Reading results.** Use intervals (C12): with 1,200 visitors and 66 sign-ups, the rate is 5.5% with a 95% interval of about 4.2% to 6.8% (Worked example 3). **Bias risks:** *selection* (the audience you chose may be unrepresentative: the early adopters of a technology community are not the mainstream); *novelty* (an unfamiliar idea attracts clicks); *social desirability* (friends and family say yes); *price absent* (interest without price tells you little); and *survivorship* (you hear from those who engaged). Prefer behavior to words, price to interest, and commitment to curiosity.

### C26.6 Kill, persist or pivot

Teams drift from evidence toward attachment. **Kill criteria** are conditions, set in advance, under which the team agrees to stop a project: for example, "if week-8 retention is below 8%, or fewer than 30% of surveyed users would be very disappointed without the product after three months, we stop." Writing them first removes the temptation to move the goalposts (FW-C26-06).

**The three decisions.**
- **Kill** when the pre-set criteria are met, when the riskiest assumptions have been tested and failed, or when the cost of continuing exceeds the expected value. Killing is a successful outcome of a cheap test: you stopped spending. Beware the **sunk cost** (C02): money and time already spent are not a reason to continue.
- **Persist** when the evidence is positive or inconclusive for a good reason (a test too small, a wrong audience), and the next test is cheap. Set a time box.
- **Pivot.** A **pivot** is a change in a core element of the strategy (the customer, the problem, the solution, the channel or the business model) based on what you learned, while keeping what is working (a capability, a team, a bit of insight). A pivot is a hypothesis too; test it. Signs that suggest pivoting: strong pull from a narrow segment, a different use than designed, a problem that is real but the solution is wrong.

**A decision table:** strong signal in one segment but weak overall suggests a pivot to that segment; weak signal everywhere suggests kill; inconclusive because of test design suggests persist with a better test (Worked example 5).

### C26.7 Early traction signals

**Product-market fit** is the state in which a product satisfies a strong market need: enough of the right customers use it, value it and keep using it, without being pushed. It cannot be measured by one number; look for a pattern (FW-C26-07).

**Signals that matter.**
- **Retention that flattens.** A cohort retention curve that falls and then levels off at a non-zero level means a core of users keeps coming back. A curve that keeps falling to zero means no fit (C05).
- **The disappointment question.** Asking users how they would feel if they could no longer use the product, with "very disappointed" as the strongest answer, has been used as a leading indicator; a commonly cited threshold is about 40% `[V: Sean Ellis survey and 40% benchmark, as described in Rahul Vohra's First Round article]` (CS-C06-02 discusses a company that used it).
- **Organic growth and referrals:** users arriving and inviting without being paid.
- **Usage intensity and frequency** among the target segment.
- **Willingness to pay** and low discounting.
- **Qualitative pull:** customers asking for access, complaining when it breaks, describing it in their own words.

**False signals.** A waiting list (intent without commitment), a launch spike, paid acquisition that disappears when spend stops, praise from friends, usage driven by incentives, and averages that hide a single enthusiastic segment. Ask: what happens to the numbers if marketing stops?

### C26.8 From zero to one to one to ten

Stages `Inferred`: *problem-solution fit* (a real problem and a solution that works for a small group); *product-market fit* (a repeatable pull from a defined market); *scaling* (growth through channels, operations and monetization).

**What changes as it grows.**
- **Metrics:** from qualitative learning and cohort retention to funnel, unit economics (C20.7) and the north-star metric (C05).
- **Team and process:** from a few people moving fast to specialized roles, planning and quality gates (C16, C17).
- **Quality bar:** from "good enough to learn" to reliability, security, privacy, accessibility and support at scale (C10, C22).
- **Go-to-market:** from founder-led and manual to channels and loops (C20).
- **Risk:** premature scaling (spending on growth before fit) is a common failure; a late start on infrastructure and quality is another.

**The PM's role.** In 0→1 the PM is closest to the customer, runs the tests, and sets the kill criteria; in 1→10 the PM balances growth with quality, and hands over the discoveries (what users value, what to protect) to an operating team. Knowing which stage you are in tells you which questions matter.

### C26.9 Worked examples (`Illustrative`)

Section 5 gives five worked examples with computed figures, all `Illustrative` with invented numbers: moving fifty ideas through a funnel with an evidence-adjusted scorecard; ranking assumptions and sizing a smoke test; reading a smoke test with intervals and checking the audience; the economics of a concierge test; and a kill, persist or pivot decision with segment data. Section 11 adds eight questions with model answers and follow-ups.

## 3. Frameworks

Seven frameworks, set out below. The MVP ladder and assumption log (C15), the problem-definition template (C02.7), the pre-mortem (FW-C02-05), the experiment decision-rule table (FW-C14-05), the pricing worksheet (FW-C20-03) and the unit-economics sheet (FW-C20-06) are reused, not repeated.

#### FW-C26-01 · The opportunity map · Original

- **Inputs:** a domain or a segment and a list of observed pains and signals.
- **Outputs:** the sources of each opportunity; its place in the taxonomy (improve core, new market, adjacent product, diversification); painkiller or vitamin; and what is most untested.
- **Assumptions:** the pains come from observation, not invention.
- **Tradeoffs:** distant opportunities carry more upside and more untested assumptions.
- **Failure modes:** a solution with no user; ignoring the company's advantages.
- **Worked example:** Worked example 1.

| Opportunity | Source | Taxonomy cell | Painkiller or vitamin | Most untested |
|---|---|---|---|---|

#### FW-C26-02 · The idea funnel · Original

- **Inputs:** a long list of ideas and the cost of each stage.
- **Outputs:** the stages (long list, screen, scorecard, test, build), the pass rate at each, the hours per idea per stage, the total hours, and the comparison with building everything.
- **Assumptions:** each stage costs more per idea than the last.
- **Tradeoffs:** a strict early screen saves hours and may discard a good idea; keep screen criteria about evidence.
- **Failure modes:** skipping the cheap stages; a funnel with no kills.
- **Worked example:** Worked example 1.

#### FW-C26-03 · The idea scorecard · Original

- **Inputs:** two to six ideas and the criteria (problem severity, reach, willingness to pay, right to win, feasibility, differentiation, strategic fit) with weights.
- **Outputs:** a score from one to five per criterion with the evidence quality (strong, medium, weak), the weighted score, the confidence factor (1.0, 0.8, 0.6), the evidence-adjusted score, and the assumptions each score rests on.
- **Assumptions:** weights reflect the company's goals; scores come with evidence.
- **Tradeoffs:** a scorecard is transparent and can disguise opinion as number; always show the evidence.
- **Failure modes:** scores without evidence; weights chosen to favor a pet idea.
- **Worked example:** Worked example 1.

Formula: **evidence-adjusted score = (sum of weight × score) × confidence factor.**

| Criterion | Weight | Score | Evidence quality | Note |
|---|---|---|---|---|

#### FW-C26-04 · The riskiest-assumption map · Original

- **Inputs:** an idea.
- **Outputs:** the assumptions (value, usability, feasibility, viability), each rated for impact if wrong and uncertainty, ranked by their product; the riskiest one named; the cheapest test that could falsify it.
- **Assumptions:** you can list assumptions honestly.
- **Tradeoffs:** a long list takes an hour and focuses the test.
- **Failure modes:** testing the safe assumption; a test that cannot fail.
- **Worked example:** Worked example 2 and EX-C26-02.

| Assumption | Kind | Impact if wrong (1 to 5) | Uncertainty (1 to 5) | Product | Cheapest test |
|---|---|---|---|---|---|

#### FW-C26-05 · The validation test card · Original

- **Inputs:** the riskiest assumption.
- **Outputs:** the hypothesis and the decision it informs; the test (smoke, concierge, Wizard-of-Oz, prototype, spike); the audience and channel; the measure and the threshold set in advance (proceed, persist, kill); the sample size; the time box; the bias risks and how you will limit them; the decision rule.
- **Assumptions:** the threshold is set before the test.
- **Tradeoffs:** a more costly commitment (a deposit) gives a stronger and smaller signal.
- **Failure modes:** a threshold set after the result; a test with friends; interest taken as demand.
- **Worked example:** Worked examples 2, 3 and 4.

Formula: **sample size for a rate p within ±δ at 95% confidence: n ≈ 1.96² × p × (1 − p) ÷ δ².**

#### FW-C26-06 · The kill, persist or pivot table · Original

- **Inputs:** the kill criteria set in advance and the evidence so far.
- **Outputs:** a decision (kill, persist with a better test, or pivot) with the evidence that supports it; for a pivot, what changes and what is kept and the next test; for persisting, the time box and the next cheap test; the sunk-cost check.
- **Assumptions:** the criteria were written before the results.
- **Tradeoffs:** early kills save money and may stop a late bloomer; use the time box and the next test.
- **Failure modes:** moving the goalposts; attachment; pivoting without a hypothesis.
- **Worked example:** Worked example 5.

| Evidence | Pattern | Decision |
|---|---|---|
| Strong signal in one segment, weak overall | Narrow pull | Pivot to the segment and test |
| Weak everywhere on well-designed tests | No demand | Kill |
| Inconclusive because of test design | Poor test | Persist with a better test |
| Strong everywhere | Fit | Persist and scale carefully |

#### FW-C26-07 · The product-market-fit signal checklist · Original

- **Inputs:** cohort retention, survey results, acquisition mix and usage data.
- **Outputs:** the retention curve and whether it flattens, the share "very disappointed" without the product and by segment, the share of organic and referral acquisition, usage frequency in the target segment, willingness to pay, qualitative pull, and the false signals checked (waiting lists, launch spikes, paid dependence, incentives, averages hiding a segment).
- **Assumptions:** signals are read by segment and over time.
- **Tradeoffs:** waiting for clear signals delays scaling; scaling early wastes money.
- **Failure modes:** one number as proof; averages; a launch spike.
- **Worked example:** Worked example 5 and IQ-C26-04.

## 4. Answer architecture

### The "How would you evaluate and validate this idea?" answer, for 25 minutes

| Step | Minutes | What to produce |
|---|---|---|
| The problem and user | 4 | Who has it, how often, what they do now, evidence |
| Opportunity and criteria | 4 | Where it sits; the scorecard criteria that matter and the evidence quality |
| The riskiest assumption | 4 | The assumptions by impact and uncertainty; the one to test first |
| The cheapest test | 6 | A test that can fail, the audience, the measure, the threshold and sample size |
| Decision rules | 4 | Kill, persist or pivot criteria set in advance; time box |
| Early signals and next stage | 3 | What traction would look like; what changes if it works |

**Pacing rules.** If the interviewer gives you a constraint (a budget, a time), design the test within it. If you run behind, keep the riskiest assumption, the test with its threshold and the decision rule.

**How to say it.** "The riskiest assumption is that students will pay $40 a week for this; I'd test it with a page showing the price and a $5 refundable deposit, with 700 visitors from target campuses. I'd proceed at a 4% sign-up rate and 0.5% deposits, and stop below 2%."

**How to close.** "So I'd spend about $8,000 and six weeks to learn whether to build, and I'd decide on the thresholds I set today."

### Type: evaluate an idea or choose among ideas

Problem and user, scorecard with evidence quality, the assumptions behind the top score.

### Type: design a new product for a new market

User and problem in the new market (C09), several solutions, the riskiest assumption, a cheap test, a staged plan.

### Type: validation design

Riskiest assumption, the test that can fail, threshold set in advance, sample size, biases.

### Type: kill, persist or pivot

Pre-set criteria, the evidence by segment, the decision table, sunk-cost check, time box.

### Type: is this traction real

Retention curve, disappointment question, organic share, usage by segment, false signals.

### Common interviewer interventions, and what to do

| Interviewer says | What it means | What to do |
|---|---|---|
| "How do you know people want it?" | Evidence | Behavior and commitment, not opinion |
| "What's the riskiest part?" | Assumption thinking | Name it, with impact and uncertainty |
| "What would make you stop?" | Kill criteria | State thresholds set in advance |
| "5% signed up. Good?" | Benchmarks | Compare with a threshold, an interval and the audience |
| "Isn't the waiting list proof?" | Vanity signals | Intent is not commitment; price and deposit |
| "Should you pivot?" | Decision rule | Segment evidence; a hypothesis to test |

## 5. Worked examples

All five examples are `Illustrative`: the ideas, customers and figures are invented (invented), and the arithmetic was computed.

### Worked example 1 — From fifty ideas to one test, with a scorecard (Illustrative)

**The situation.** A team exploring student finances generates 50 ideas from observed pains (FW-C26-02).

**The funnel.** Screen by problem evidence and fit: 12 ideas remain (24% pass). Scorecard: 5 remain (42%). Validation tests on 2 (40% of those scored). Build 1 (50% of those tested). Hours per idea (invented): screen 0.5, scorecard 4, test 30, prototype and pilot 200. Total hours: 50 × 0.5 + 12 × 4 + 5 × 30 + 2 × 200 = 25 + 48 + 150 + 400 = 623 hours. Building all 50 at about 2,000 hours each would take 100,000 hours. The funnel spends 623 hours to find the one to build.

**The scorecard (FW-C26-03).** Weights: problem severity 25%, reach 15%, willingness to pay 15%, right to win 15%, feasibility 10%, differentiation 10%, strategic fit 10%. Scores (1 to 5) and the confidence factor from evidence quality:

| Idea | Severity | Reach | WTP | Right to win | Feasibility | Differentiation | Fit | Weighted | Confidence | Adjusted |
|---|---|---|---|---|---|---|---|---|---|---|
| A Roommate expense splitting | 4 | 4 | 2 | 3 | 5 | 2 | 3 | 3.35 | 0.8 | 2.68 |
| B Bill negotiation service | 4 | 3 | 4 | 2 | 3 | 4 | 2 | 3.25 | 0.6 | 1.95 |
| C Study-abroad budgeting | 3 | 2 | 3 | 3 | 5 | 3 | 4 | 3.15 | 0.8 | 2.52 |
| D Student tax-filing helper | 5 | 3 | 4 | 2 | 3 | 3 | 2 | 3.40 | 1.0 | 3.40 |
| E Micro-savings round-ups | 3 | 4 | 2 | 3 | 4 | 2 | 4 | 3.10 | 0.6 | 1.86 |

Each weighted score is the sum of weight × score; for D: 0.25 × 5 + 0.15 × 3 + 0.15 × 4 + 0.15 × 2 + 0.10 × 3 + 0.10 × 3 + 0.10 × 2 = 3.40.

**Read it.** The raw scores are close (3.10 to 3.40), so the ranking would be fragile. The evidence quality changes the picture: D has strong evidence (observed spending and a deadline-driven pain) and ranks first (3.40); B's raw score is the third highest (3.25, only 0.15 below D), but it rests on weak evidence (an analogy) and falls to 1.95. The adjusted scores point to D, A and C for validation. The scorecard also tells what to test: for D, the weak score is right to win (2): can the team compete with established tax software? That is the riskiest assumption to test.

**What this shows.** The funnel spent hours in proportion to evidence, and the evidence-adjusted scorecard ranked ideas by what the team knew, not what it hoped.

### Worked example 2 — Finding the riskiest assumption and sizing a smoke test (Illustrative)

**The idea.** A weekly meal kit for students in dorm rooms with only a microwave and a mini-fridge.

**The assumption map (FW-C26-04).**

| Assumption | Kind | Impact (1 to 5) | Uncertainty (1 to 5) | Product |
|---|---|---|---|---|
| Students want to eat better and struggle to cook | Value | 5 | 2 | 10 |
| They will pay about $40 a week | Value | 5 | 5 | 25 |
| Meals can be made with a microwave and mini-fridge | Usability | 4 | 3 | 12 |
| We can deliver fresh within 48 hours | Feasibility | 4 | 3 | 12 |
| Housing rules allow deliveries and storage | Viability | 4 | 4 | 16 |
| Unit economics work at small volumes | Viability | 5 | 4 | 20 |
| We can reach students cheaply | Viability | 4 | 3 | 12 |

**The riskiest assumption.** Willingness to pay $40 a week (product 25): if students will not pay, nothing else matters, and nobody knows. The next riskiest are the unit economics (20) and housing rules (16).

**The cheapest test (FW-C26-05).** A smoke test: a landing page that shows the meals and the price of $40 a week, with a sign-up and a $5 refundable deposit, shown to students on three campuses through targeted posts and ads. Thresholds, set in advance: proceed at a sign-up rate of at least 4% and deposits of at least 0.5% of visitors; stop below 2%; between 2% and 4%, run a concierge test before deciding. The sample: to estimate a 4% rate within ±1.5 points at 95% confidence, n = 1.96² × 0.04 × 0.96 ÷ 0.015² = about 656, so 700 visitors; at 4% that is about 28 sign-ups.

**The costs.** About $1,500 for the page and ads and a week of one person's time (invented): small beside the cost of building a meal-kit operation. It does not test delivery or the unit economics, which are the next assumptions; a pass would lead to a concierge test (Worked example 4).

**Bias risks.** The audience (students reached through campus groups may be keener than the average); the novelty of the page; the price shown but not yet felt as a charge, which is why the deposit is part of the test.

**What this shows.** Ranking assumptions by impact and uncertainty chose the test, and writing the thresholds and the sample size first made the result decisive.

### Worked example 3 — Reading a smoke test (Illustrative)

**The result (FW-C26-05) (invented).** The test in Worked example 2 ran for two weeks: 1,200 visitors, 66 sign-ups and 9 deposits.

**Compute with intervals.** Sign-up rate: 66 ÷ 1,200 = 5.5%; standard error √(0.055 × 0.945 ÷ 1,200) = 0.66 points; 95% interval about 4.2% to 6.8%. Deposit rate: 9 ÷ 1,200 = 0.75%; standard error √(0.0075 × 0.9925 ÷ 1,200) = 0.25 points; 95% interval about 0.26% to 1.24% (normal approximation, rough at this size).

**Compare with the pre-set thresholds.** Sign-ups: the whole interval (4.2% to 6.8%) is above the 4% threshold: pass. Deposits: the estimate (0.75%) is above 0.5%, but the interval (0.26% to 1.24%) includes values below the threshold: not conclusive. Deposits are the stronger signal and the less certain one.

**Check the audience.** Suppose 80% of the traffic came from two campus group chats (selection), the page was shown to a motivated slice of students, and all deposits were $5 and refundable. So the result shows that a self-selected group will put down a small, refundable amount, not that students at large will pay $40 a week.

**Decision.** Persist, with a better test, not a build: the demand signal is promising and the commitment signal is not yet certain. Run a concierge test (Worked example 4) with 12 paying customers at the full price, which tests willingness to pay with real money and tests the economics together.

**What this shows.** Intervals and thresholds turned a result that looked like a pass into a precise statement: sign-ups pass, deposits are inconclusive, and the sample is not the market.

### Worked example 4 — Economics of a concierge test (Illustrative)

**The test (FW-C26-05) (invented).** The team delivers the meal service by hand to 12 students for 12 weeks at $60 a week (a higher price than the smoke test, after learning).

**The manual cost.** Per customer per week: 3.0 hours of work at $25 an hour plus $5 of materials, $80, against $60 of revenue: a loss of $20 per customer-week. Over 144 customer-weeks (12 × 12) the learning costs 144 × $20 = $2,880.

**What was learned.** 9 of 12 customers (75%) are still active at week 12. Time per customer splits as: intake 0.6 hours, matching meals to needs 1.2, follow-up 0.8 and reporting 0.4.

**Automation economics.** To reach a 50% margin the cost must be at most $30, so labor must be at most $25: 1.0 hour, given $5 of materials. Automating matching and reporting (1.6 hours) brings time to 1.4 hours: cost 1.4 × $25 + $5 = $40; margin $20 (33%). Also automating intake (0.6 hours) brings time to 0.8 hours: cost $25; margin $35 (58%). So automating matching, reporting and intake (three of the four steps, 2.2 of the 3.0 hours) makes the service profitable at $60.

**Decision.** The concierge test shows demand and retention (75%) and a clear path to profitable economics, if the automation can be built. Persist: extend to 25 customers while building the matching and reporting automation first, and set kill criteria: stop if retention falls below 50% at week 12 or if automation cannot get time below 1.5 hours in three months.

**What this shows.** A manual test measured willingness to pay, retention and unit economics together, and named the automation targets.

### Worked example 5 — Kill, persist or pivot (Illustrative)

**The situation (FW-C26-06).** A team has run a habit-tracking app for six months. Kill criteria set at the start: stop if week-8 retention is below 8% or fewer than 30% of surveyed users would be very disappointed without the product.

**The data (invented).** Cohort retention: week 1, 40%; week 4, 12%; week 8, 11%; week 12, 11%. The survey (140 users): 27% would be very disappointed overall. By segment: freelancers (45 users) 46%; everyone else (95 users) 18%. The weighted overall check: (45 × 0.46 + 95 × 0.18) ÷ 140 = 27%.

**Read it against the criteria.** Week-8 retention is 11%, above the 8% line, and the curve has flattened at about 11%, which suggests a core of retained users. The overall survey figure (27%) is below the 30% line, so by the letter of the criteria the team would stop. But the segment split changes the picture: freelancers are at 46%, above even the commonly cited 40% `[V: Sean Ellis survey and 40% benchmark, as described in Rahul Vohra's First Round article]`, while others are at 18%.

**Decision table (FW-C26-06).** Strong signal in one segment and weak overall is the pattern for a pivot, not a kill: keep what works (the product's core habit loop and the 11% retained core) and change the target (freelancers who track billable habits). Before pivoting, check that the freelancers are not a small group by accident: 45 users is a small sample, and the freelancer share of retained users is what matters; suppose 7 of the 15 retained users are freelancers (invented), which supports the pattern.

**The pivot as a hypothesis.** Reposition for freelancers; test a landing page and a three-month paid pilot with 100 freelancers, with new kill criteria: week-8 retention of at least 20% among freelancers and at least 40% very disappointed. Time box: eight weeks. Sunk cost check: six months of work is not a reason to continue; the segment evidence is.

**What this shows.** Pre-set criteria and segment data turned an ambiguous result into a decision, a narrow pivot with new criteria, and a check against sunk cost.

## 6. Baseline, Strong, Standout

**Prompt:** "How would you decide whether to build a new product idea?"

### Baseline answer

"I'd research the market, see if it's big enough, talk to some people and build an MVP if it looks promising."

*What is wrong:* no user, no problem evidence, no riskiest assumption, no test design, no thresholds.

### Strong answer

"I'd start with the problem: who has it, how often, what they do today and whether they'd pay. I'd evaluate the idea against criteria such as severity, size, willingness to pay, our advantage and feasibility, and I'd note how good the evidence is for each. Then I'd list the assumptions, find the riskiest, and run the cheapest test: a landing page with a price and a deposit or a manual version for a few customers. I'd decide what result I'd need before running it."

### Standout answer

Everything in the Strong answer, plus:

"I'd rank assumptions by impact and uncertainty; usually it's willingness to pay. For a test I'd write the threshold first: for instance, proceed at a 4% sign-up rate and 0.5% deposits, stop below 2%, with 700 visitors to estimate the rate within 1.5 points. I'd read results with intervals, not point estimates, and I'd check the audience: a self-selected group isn't the market. If the numbers are ambiguous, I'd run a concierge test with 12 paying customers, which measures retention and economics together. Kill criteria are set up front, so sunk cost doesn't decide; a strong signal in one segment points to a pivot, which I'd treat as another hypothesis. For traction I'd look for retention that flattens, organic growth, and the share who would be very disappointed without the product, by segment, and I'd ignore waiting lists and launch spikes. The whole validation should cost a few thousand dollars and weeks, against months and hundreds of thousands to build blind."

### What moves an answer up a band

| From Baseline to Strong | From Strong to Standout |
|---|---|
| Starts from the problem and the user | Ranks assumptions and sizes the test |
| Names the riskiest assumption and a cheap test | Sets thresholds, reads intervals, checks the audience |
| Decides what result would change the plan | Pre-set kill criteria; pivot as a hypothesis; traction signals by segment |

## 7. Company lens

All claims describe what companies say publicly or what candidates commonly report, not insider knowledge. Programs and formats change `[as of 2026-10]`.

> **Company lens: Google [as of 2026-10].** Google is publicly associated with an experimentation culture and, historically, time for personal projects and an internal incubator `Public` `[V: Google founders' 2004 IPO letter on 20 percent time; Quartz 2013 reported it had effectively faded; Area 120 incubator announced 2016]`. Whether either still exists today was not checked. Candidates commonly report "design a new product" and ambiguity questions `Inferred`. Practical consequence: structure the idea as assumptions with cheap tests, and show user empathy and technical feasibility.

> **Company lens: Meta [as of 2026-10].** Meta's published values emphasize moving fast `Public` `[V: Meta's careers culture page, six core values]`. Candidates commonly report new-product and new-feature questions that test speed with evidence `Inferred`. Practical consequence: propose the smallest test that could fail within days, with a clear metric and a kill rule.

> **Company lens: Microsoft [as of 2026-10].** Microsoft has described an internal program that lets employees build and test ideas `Public` `[V: Microsoft Garage: employee projects, hackathons and an experimental outlet; first company-wide Hackathon July 2014 (Microsoft blog, TechCrunch)]`. Candidates commonly report questions on new products within an existing platform or enterprise setting `Inferred`. Practical consequence: reason about the right to win from existing customers and distribution, and about adoption by an organization, not only an individual.

> **Company lens: Amazon [as of 2026-10].** Amazon describes a practice of writing a press release and frequently asked questions for a new product before building it (working backwards) `Public` `[V: Amazon working-backwards material (AWS re:Invent 2022 deck; Fast Company)]`. Candidates commonly report new-product questions and customer-obsession probing `Inferred`. Practical consequence: write the customer's problem and the announcement first, test whether it is compelling, and be explicit about how you would know.

> **Company lens: Apple [as of 2026-10].** Apple does not describe its development process publicly in detail `Inferred` `[unverified: candidate-reported]`. Practical consequence: in an interview, reason about the user problem and craft, and show how you would validate with prototypes while respecting privacy and secrecy in any past work you describe.

> **Company lens: Netflix [as of 2026-10].** Netflix is widely known for testing changes with experiments and for commissioning original content `Public` `[V: Netflix Tech Blog posts on experimentation and resilience testing]`. Candidates commonly report questions on testing and on bets with uncertain demand `Inferred`. Practical consequence: separate what can be tested cheaply (interface, recommendations) from what cannot (a large content bet), and reason about leading indicators.

> **Company lens: Stripe [as of 2026-10].** Stripe builds products for developers and has launched new products and programs over time `Public` `[V: Stripe newsroom: Connect, Billing, Terminal, Radar, Capital, Corporate Card]`. Candidates report questions on new developer products `Inferred`. Practical consequence: validate with developers directly (a prototype and an integration spike), watch usage after first integration, and consider reliability and trust as part of fit.

## 8. Common mistakes

| # | Mistake | How to detect it | Fix |
|---|---|---|---|
| 1 | A solution with no user | "People will love it" | Start from the problem and the evidence |
| 2 | Building before testing | Months of work, no demand data | Cheapest test first |
| 3 | Testing the safe assumption | A usability test of an unwanted product | Test the riskiest assumption |
| 4 | A test that cannot fail | "Show it and see" | Pre-set threshold and decision rule |
| 5 | Friends and family as validation | "Everyone I asked said yes" | Behavior and commitment from the target segment |
| 6 | Waiting list as demand | "75,000 people signed up" | Price, deposit, retention |
| 7 | Moving the goalposts | New thresholds after bad results | Kill criteria written first |
| 8 | Sunk cost | "We've come too far to stop" | Decide on evidence and time box |
| 9 | Averages hiding a segment | One overall number | Read by segment |
| 10 | Scaling before fit | Paid growth with falling retention | Retention and organic pull first |

## 9. Mental models applied

Four models, each tied to a decision in this chapter. [[sunk-cost]] is from C02, [[survivorship-bias]] from C12 and [[inversion]] from C02.

**The value of information** (`MM-value-of-information`). A test is worth its cost if learning the answer is likely to change the decision and the decision is costly `[V: Hubbard, How to Measure Anything, chapter on the value of information]`. Test the riskiest assumption first because its answer changes the most.

**Sunk cost** (`MM-sunk-cost`, see [[sunk-cost]], C02). Spent money and time should not decide the future; only future costs and benefits matter. Kill criteria written in advance protect against it.

**Survivorship bias** (`MM-survivorship-bias`, see [[survivorship-bias]], C12). You see the people who engaged and the companies that survived, not those who did not. A waiting list of enthusiasts and a success story from a founder both over-represent the winners.

**Inversion** (`MM-inversion`, see [[inversion]], C02). To find the riskiest assumption, ask how the idea would fail and why: who would not want it, what would not work. Test those first.

## Engineering, design and data-science perspectives

- **Engineering.** Early on, engineers build the smallest thing that tests an assumption, or a technical spike for the hardest part; they dislike throwaway work that is not labeled as such. Say what is a test and what will be kept, and ask what the riskiest technical assumption is.
- **Design and research.** Research and design lead the discovery of the problem and the prototype tests (C06, C10); they dislike validation that is really a sales demo. Agree what the test is meant to learn.
- **Data science.** Data scientists help set thresholds, sample sizes and the reading of small samples; they dislike conclusions drawn from point estimates. Agree the measure, the threshold and the interval before the test.
- **Finance, legal and leadership.** Finance wants the cost of the test and the economics early; legal checks claims and deposits (a deposit or pre-order has rules); leadership wants a decision rule and a time box.

## Checklist: before you spend on a new idea

1. Have I named the user, the problem, the frequency and the evidence?
2. Have I placed the idea in the taxonomy and said whether it is a painkiller?
3. Have I scored it with evidence quality and compared it with alternatives?
4. Have I listed assumptions by impact and uncertainty, and named the riskiest?
5. Is the test the cheapest that can fail, with a threshold and a sample size set in advance?
6. Have I thought about audience, novelty and commitment bias?
7. Are the kill criteria and a time box written down?
8. Do I know which signals of traction I will trust, and which I will not?

## 10. Case studies

#### CS-C26-01 · Six months of building before anyone was asked · Illustrative · Beginner

*Fictional composite. Every number is invented (invented).*

**Situation.** A startup team of three engineers and a PM is excited by an idea: an app that plans a family's weekly meals from what is in the fridge. They spend six months building it, including a recipe database and a camera feature that recognizes ingredients.

**Constraints.** Enthusiasm; limited runway; a belief that the product would sell itself; no prior test of demand.

**Data.** The cost was about $270,000 (three engineers at $15,000 a month loaded for six months). At launch: 2,000 downloads in two months from a press mention; day-30 retention of 4%; a small survey of 80 users finds that 9% would be very disappointed without the app; most said that they "like the idea" and do not plan meals weekly.

**Problem definition.** As an observable problem: "The team built the product before testing whether anyone had the problem or would change their habits, and the first real data shows weak retention and little pull."

**Analysis.** Applying the riskiest-assumption map (FW-C26-04): the assumptions were that families want to plan weekly meals (value, uncertain), that they would photograph their fridge (usability, uncertain), that recognition would be accurate enough (feasibility), and that they would pay (viability). The team tested the one it was most confident about (feasibility, which it enjoyed building) and never tested the riskiest (that families plan weekly and would change a habit). A smoke test and a concierge test (meal plans delivered by a person to ten families for six weeks) could have tested the habit and willingness to pay for about $18,000 (invented), about 7% of the build cost.

**Options.**

| Option | Optimizes | Costs |
|---|---|---|
| A. Keep building features to improve retention | Continuity | More spend on an unproven need |
| B. Stop building; run a concierge test with 10 families to find the real problem and whether anyone pays, with kill criteria | Learning per dollar | A pause; admitting the first build missed |
| C. Shut down | Saves runway | Loses what could be learned from the 9% who care |

**Tradeoffs.** B costs a few weeks and a small amount and finds out whether any segment cares; A throws more money at an untested assumption; C may stop too early.

**Decision.** Choose B, with kill criteria: continue only if at least 40% of the concierge families would be very disappointed to lose the service, and at least 5 of 10 will pay $20 a week; stop if not. Also interview the 9% who care to find out who they are.

**Outcome.** In this fictional scenario the concierge test showed that families did not plan weekly but a segment (people managing a food allergy) did and would pay; 6 of 10 paid $20 a week and 5 were very disappointed to lose it. The team narrowed to that segment and rebuilt around it at a fraction of the original cost (invented).

**Alternative outcomes.** If the concierge test had shown no segment with pull, the team would have stopped after spending about $18,000 more, not $270,000 more. The lesson: test the riskiest assumption first, set thresholds before the test, and never let enthusiasm for what is fun to build choose what to validate.

#### CS-C26-02 · Dropbox, 2007 to 2008: a demo video as the test · Verified · Advanced

*Sources (types): the Hacker News thread of Houston's post of 4 April 2007 (primary: date, title and the first reactions); an interview with Houston on the startups.com founder-interview site, in his own words (primary); a TechCrunch recap of a Founder Stories interview with Houston and TechCrunch's 2011 excerpt from Eric Ries's *The Lean Startup*, which quotes Houston (reported speech and an author's interpretation); the First Round Review's account of a talk by Houston (reported speech); and a reference timeline of the company (secondary). Retellings differ on details, and several overstate that Dropbox had no working software. The analysis is the author's. Re-read in October 2026.*

**Situation.** Drew Houston, who had studied at MIT, wanted to solve the problem of keeping files in sync across computers; retellings say the idea came to him on a bus ride from Boston to New York `[V: secondary retellings]`. He had a working but limited prototype, reported in a secondary account to run only on Windows, and in Eric Ries's account it was hard to demonstrate the software in prototype form `[V: TechCrunch excerpt, 2011]`. On 4 April 2007 Houston posted a screencast on Hacker News under the title "My YC app: Dropbox - Throw away your USB drive", and commenters questioned parts of the idea, for example whether it could replace a USB drive `[V: Hacker News thread]`. Houston has described making two three-minute demo videos himself: the first went to Hacker News, and the second, with about a dozen in-jokes aimed at Digg readers, went to Digg and Reddit about a year later, during the private-beta launch, which a reference timeline dates to March 2008 `[V: First Round Review; founder interviews; secondary timeline]`. After the video, viewers were pointed to a waiting list for the private beta. In Houston's own words, the team had expected a high of about 15,000 sign-ups and by the next day 75,000 people had signed up `[V: founder interview]`; as reported, the list had been about 5,000 before, and the video had more than 10,000 Diggs within 24 hours `[V: TechCrunch quoting Houston]`. Later accounts report that the company went on to raise venture funding and, seven years on, had more than 100 million users `[V: First Round Review, as reported]`.

**Constraints.** A product that was hard to demonstrate in words (the value is a feeling of files "just being there"); a working but limited prototype (reportedly Windows only); a technical audience reachable through a few online communities; and, as an inference, no practical way to run a paid test of demand with a product that was not ready.

**Data.** As reported: the Hacker News post and its date; the videos and the audience; Houston's account of the waiting-list numbers and of what the team had expected; the Digg votes; Ries's account that the video was the minimum viable product.

**Problem definition.** *The author's reading.* Houston needed evidence of demand before building a polished, multi-platform product. As an observable problem: "Would enough people want this to justify the work, and how to find out cheaply?"

**Analysis.** *The author's analysis, through this chapter's tools.*

*The riskiest assumption.* That people other than the founder would want automatic file synchronization enough to try it. The product's feasibility was partly shown (a working prototype existed), so the riskiest assumption was value, not technology.

*The test.* A demonstration video with a waiting-list form is a smoke test (C26.5): an offer presented before the product is ready, with an action (join the list) as the measure. It was cheap, and it could fail (nobody signs up).

*What it measured, and what it did not.* The signal was a *sign-up to a waiting list*, the weakest rung of the commitment ladder: it shows interest, not payment, retention or willingness to pay. The scale of the response (a fifteenfold jump) was far above what the team itself had expected (about 15,000 at most, in Houston's account), which is why it was persuasive, but the audience was chosen: a community of technology early adopters on Digg, with jokes aimed at them. That was a good place to find the people who most wanted the product, and a poor place to estimate mainstream demand (selection, C26.5).

*The video as a message test.* The video also tested the explanation: viewers could understand the product in three minutes and it was shown working. That is evidence on positioning (C20.2), not only on demand.

*What the evidence does not show.* How many waiting-list members became users or paid; whether the demand would have appeared without the Digg audience; what the founder's threshold or decision rule was before the video; and the exact date of the second video, which a reference timeline gives as March 2008 and the founder's interviews give only as about a year after the first. The case supports an analysis of a smoke test and its limits, not a claim that a video proves a market.

**Options.** *The author's reconstruction of choices a founder could have faced; not a record of Houston's deliberations.*

| Option | Optimizes | Costs |
|---|---|---|
| A. Build the full multi-platform product before showing it | A polished launch | Months of work before any evidence; the risk of building what nobody wants |
| B. Show a demonstration video with a waiting-list form to the audience most likely to care | Cheap evidence of interest; a message test | A weak commitment signal; a skewed audience |
| C. Run interviews and a closed concierge-style pilot first | Stronger commitment signals | Slower; small scale |

**Tradeoffs.** B gives the fastest, cheapest signal of interest and the weakest signal of commitment; A bets everything on an untested assumption; C is more reliable and slower.

**Decision.** As reported, Houston used the videos and the waiting list, and the company went on to launch and to raise funding; the sources read do not say how far the waiting list influenced investors.

**Outcome.** Reported: the waiting list grew to about 75,000 within a day, Houston has said the service reached one million users seven months after its public launch `[V: TechCrunch recap of a founder interview]`, and later accounts report more than 100 million users `[V: First Round Review, as reported]`. Whether and how the waiting list converted is not described in the sources read.

**Alternative outcomes.** *Inference.* A video that attracted few sign-ups would have been a cheap early kill signal; a large response from the wrong audience could have misled. A reader should avoid hindsight: the case is a famous success, and many similar videos produce nothing. The method to carry away: name the riskiest assumption, test it with the cheapest offer that can fail, read the strength of the signal (a list is not a payment), and be honest about the audience you reached.

## 11. Interview questions and model answers

Eight questions. Model answers are `Illustrative` (composite candidates), and every figure is invented (invented). Each ends with follow-ups and answers. The answers are fuller than a first pass in a real round. No company tag is attached because the topic is not tied to a single company.

#### IQ-C26-01 · Beginner · product-sense · PS

**Prompt.** How do you decide whether a new idea is worth pursuing?

**Rubric.**
- **Baseline:** "I'd check whether the market is big and the idea is good."
- **Strong:** Starts from the problem and uses criteria.
- **Standout:** Scores with evidence quality, names the assumptions behind the score, compares alternatives and decides what to test first.

**Model answer.** "I start with the problem, not the idea: who has it, how often, how painful it is, what they do today and what they spend on it. Then I score the idea on a few criteria: severity and frequency, how many people have it, willingness to pay or switch, our advantage in doing it, feasibility, differentiation and fit with strategy. For each score I note the evidence: strong if I have observed behavior or a payment, medium if from interviews or surveys, weak if it's opinion or analogy, and I discount the weak ones. That gives a ranking by what I know, not by what I hope.

"The scorecard doesn't decide; it tells me what to test. I list the assumptions behind the top ideas, find the one that would sink the idea if it were false and about which I know the least, usually that people will pay, and design the cheapest test that could prove it wrong. I decide in advance what result would make me continue, stop or change direction."

*Signals.* Problem first; criteria with evidence quality; assumptions; a test with pre-set rules.

**Follow-ups.**

- **Q.** What if two ideas score the same? **A.** "I'd look at the evidence quality and the cost to test: the one with weaker evidence and cheaper tests is the better first test, since learning is fast. I'd also look at reversibility: prefer the one I can stop cheaply."
- **Q.** What if leadership likes an idea that scores poorly? **A.** "I'd show the scorecard and the weakest assumption, and propose the cheap test that would settle it, with a decision rule agreed in advance. That keeps the conversation about evidence and gives the idea a fair chance."

#### IQ-C26-02 · Beginner · product-sense · PS

**Prompt.** What is a minimum viable product, and what is it not?

**Rubric.**
- **Baseline:** "The first version with the basic features."
- **Strong:** The smallest thing that tests an assumption.
- **Standout:** Links the MVP to a specific hypothesis, gives forms that are not software, says what it is not (a poor product, a small launch), and names a success rule.

**Model answer.** "An MVP is the smallest thing you can build or do that lets you test the riskiest assumption about an idea and learn from real behavior. It is defined by the question it answers, not by how many features it has. So it may not be software at all: a landing page with a price and a deposit tests demand; a video shows whether people understand and want it; a concierge version, where you do the service by hand for a few customers, tests value and economics; a Wizard-of-Oz version looks automated and is staffed behind the scenes; a prototype tests usability.

"What it is not: a bad product shipped because time ran out; a small launch with no hypothesis; or a demo that cannot fail. A good MVP has a hypothesis ('students will put down a $5 deposit for a $40-a-week meal kit'), a measure, a threshold set before the test and a decision. If the test can't change your mind, it isn't an MVP; it's a demonstration."

*Signals.* The question defines it; non-software forms; what it is not; a threshold.

**Follow-ups.**

- **Q.** Isn't an MVP with poor quality bad for the brand? **A.** "It should be good enough for the assumption being tested, and the audience should know it is early. For a smoke test there is no product to disappoint; for a concierge test the service is real and personal. If trust is at stake (payments, health), the quality bar for that part is high even in an MVP."
- **Q.** How do you know when the MVP has done its job? **A.** "When the pre-set threshold is met or missed. If met, the next riskiest assumption becomes the test; if missed, I decide to kill, persist with a better test or pivot, by the criteria I set first."

#### IQ-C26-03 · Intermediate · product-sense · PS

**Prompt.** You have an idea for a service that matches volunteers with local charities that need help for a few hours. How would you validate it cheaply?

**Rubric.**
- **Baseline:** "Build an app and see if people sign up."
- **Strong:** Names assumptions and a cheap test.
- **Standout:** Ranks assumptions, designs a test with measure, threshold and sample size, uses a concierge stage, and handles both sides of the marketplace.

**Model answer.** "It's a two-sided idea, so I'd list assumptions for each side. Volunteers: they want short, flexible opportunities and will show up (value; uncertain). Charities: they have small tasks, can describe them, and will use a new channel (value; uncertain). Viability: matching by hand can be made cheap enough, and there is a way to fund it. The riskiest is probably whether charities will post tasks and whether volunteers will show up for them, since a marketplace with no supply or no demand is nothing (C19).

"Cheapest test: a concierge version. I'd contact 15 charities, ask for a list of tasks they can't staff, and match volunteers by hand through a messaging group of 100 people from one neighborhood. Measure: tasks posted per charity, the share of tasks filled within a week and the show-up rate. Thresholds, set in advance: proceed if at least 10 of 15 charities post a task and at least 60% of tasks are filled with 80% show-up; stop if fewer than 5 charities post. For a landing-page test on the volunteer side, to estimate a sign-up rate near 5% within ±2 points I'd need about 450 visitors (1.96² × 0.05 × 0.95 ÷ 0.02²). Then I'd look at what the manual work costs per match, to see what must be automated, and keep the geography small so that both sides find each other."

*Signals.* Both sides; the riskiest assumption; a concierge test with thresholds; economics.

**Follow-ups.**

- **Q.** What if charities post tasks but volunteers don't show? **A.** "Then the problem is on the volunteer side: reminders, commitment (a small pledge), or tasks that are hard to fit. I'd test one fix at a time on the next batch and watch the show-up rate; if it stays low, the idea may fail."
- **Q.** How would you tell it should be an app and not a messaging group? **A.** "When the manual work becomes the bottleneck: matching time per task rises as volume grows and the group size makes messages noisy. The app should automate the most time-consuming steps, found by timing the concierge work."

#### IQ-C26-04 · Intermediate · product-sense · PS

**Prompt.** How do you tell whether a product has product-market fit?

**Rubric.**
- **Baseline:** "When lots of people use it and it's growing."
- **Strong:** Names retention and a disappointment survey.
- **Standout:** Reads the retention curve shape, the survey by segment, organic growth and willingness to pay, and distinguishes false signals (waiting lists, launch spikes, paid dependence, incentives).

**Model answer.** "I look for a pattern, not one number. First, retention: plot cohorts and see whether the curve flattens at a non-zero level. If it levels at, say, 25%, a core of users keeps coming back; if it falls to zero, there's no fit. Second, a survey asking how users would feel if they could no longer use the product, with 'very disappointed' as the strongest answer; a commonly cited threshold is about 40% `[V: Sean Ellis survey and 40% benchmark, as described in Rahul Vohra's First Round article]`, and I'd read it by segment, since an average can hide a group with strong fit. Third, organic growth: users arriving and inviting others without being paid. Fourth, usage frequency in the target segment and willingness to pay. Fifth, qualitative pull: customers complaining when it breaks.

"False signals: a waiting list or a launch spike (interest, not commitment); growth that stops when ad spend stops; usage driven by incentives; praise from friends; and averages that hide that one segment loves the product and the rest don't. The question I ask is: what happens to the numbers if marketing stops?"

*Signals.* A pattern of signals; segment reading; false signals.

**Follow-ups.**

- **Q.** What if retention flattens at 8%? **A.** "That is a core of users, so there's something there, but small. I'd look at who the 8% are, what they do, and whether the product can be shaped for them; the next test is a narrower positioning with that segment. Whether 8% is enough depends on the economics: a high-value niche can sustain a business."
- **Q.** Does fit mean you should scale? **A.** "It means scaling is worth testing: confirm that acquisition cost and payback work (C20.7) and that quality and support can keep up. Scaling before fit wastes money; scaling at fit without economics can too."

#### IQ-C26-05 · Intermediate · product-sense · PS

**Prompt.** Your landing-page smoke test got a 5% sign-up rate. Is that good?

**Rubric.**
- **Baseline:** "Yes, 5% is good."
- **Strong:** Asks about the threshold, the audience and the sample.
- **Standout:** Computes the interval, compares with a pre-set threshold, considers the commitment level, the traffic source and the price, and decides the next test.

**Model answer.** "I can't say without three things: the threshold we set before the test, the size of the sample and who the visitors were. With 300 visitors, 5% (15 sign-ups) has a standard error of about 1.3 points, so the 95% interval is roughly 2.5% to 7.5%: it could be well below a 4% bar. With 800 visitors it narrows to about ±1.5 points. So first the interval.

"Second, the commitment: an email sign-up is the weakest signal; a deposit or pre-order is stronger. If the page showed a price and 5% still signed up, it is more meaningful than if no price was shown. Third, the audience: visitors from a community of enthusiasts or from friends will convert more than the target segment; I'd look at conversion by source, and at who the sign-ups are. Fourth, what we compare with: we have no universal benchmark; compare with our threshold, with a control page, or with similar offers we've run.

"If the threshold was 4% and 1,200 visitors gave an interval of about 3.8% to 6.2%, the lower end sits just under the bar, so I'd extend the test before calling it a pass. If the whole interval were above 4%, that would be a pass on sign-ups, and I'd then test a stronger commitment: a deposit, or a concierge pilot with paying customers."

*Signals.* The interval; threshold, source and commitment; the next test.

**Follow-ups.**

- **Q.** What if 5% is below the threshold? **A.** "Then by the pre-set rule I stop or change the offer, not the threshold. I'd look at where visitors dropped (the headline, the price, the form) and test a revised page if the drop shows a fixable problem; if the offer itself is the problem, I'd pivot or kill."
- **Q.** Why not just keep running the test until it looks good? **A.** "Stopping on a good-looking number inflates false positives; I'd set the sample size and the duration first, and run to them, then decide."

#### IQ-C26-06 · Hard · product-sense · PS

**Prompt.** A team has worked on a new product for six months and the key metrics are flat. Should it kill, persist or pivot?

**Rubric.**
- **Baseline:** "Give it more time," or "kill it."
- **Strong:** Checks the criteria and the evidence.
- **Standout:** Uses criteria set in advance, reads by segment and cohort, applies the decision table, checks sunk cost, designs the next test and a time box, and handles the team's attachment.

**Model answer.** "I'd start with the criteria the team set at the beginning: what thresholds on retention or the disappointment survey would have meant stop? If none were set, I'd write them now, before looking at more data, to avoid moving the goalposts. Then I'd read the data properly: cohort retention (flat overall may hide a segment that retains), the survey by segment, and who the retained users are.

"Then the decision table. Weak everywhere on tests that were well designed means kill; strong in a narrow segment means pivot to that segment; inconclusive because the test was poor means persist with a better test. Suppose retention flattens at 11% and one segment is 46% very disappointed against 18% elsewhere: that is a pivot, treated as a hypothesis with new kill criteria, say retention of 20% in that segment at week eight, and a time box of eight weeks. I'd also name sunk cost: the six months are gone either way and shouldn't weigh.

"For the team: I'd separate the idea from the people, thank them for what was learned, and make sure that stopping is seen as the result of a good test, not a failure."

*Signals.* Pre-set criteria; segment reading; the decision table; sunk cost; a time box; team care.

**Follow-ups.**

- **Q.** What if there are no segments with strong signal? **A.** "Then it is a kill, unless the test design was weak. I'd check whether the audience was right and the test long enough; if both are fine, stop, capture the learning and free the team for the next bet."
- **Q.** How do you stop a pivot from being endless wandering? **A.** "Each pivot is a hypothesis with a threshold and a deadline; the team keeps a log of what each test showed, and leadership agrees a limit on pivots before the funding or time runs out."

#### IQ-C26-07 · Hard · product-sense · PS

**Prompt.** You are asked to build a product for smallholder farmers in a region where there is little data. What do you build first?

**Rubric.**
- **Baseline:** "An app that connects farmers to buyers."
- **Strong:** Starts with research on the users and the problem.
- **Standout:** Researches the farmers' actual jobs and constraints (connectivity, trust, payments, language), identifies the riskiest assumption, runs an assisted concierge test through channels they already use, measures real transactions, and plans how to scale.

**Model answer.** "I'd begin with the farmers, not the app: observe and interview 20 to 30 farmers about how they sell today, to whom, at what price, how they get paid, what goes wrong and what they would pay or give up to fix it. The constraints matter: patchy connectivity, low-end phones, limited literacy in some languages, trust in middlemen and in digital payments (C09).

"Assumptions: farmers want a different way to sell (value); they'll use a channel they already know (usability: voice or a messaging app, not a new app); buyers will pay enough for reliable supply (viability); logistics and payment can be handled (feasibility). The riskiest is probably trust and the transaction itself: will a farmer sell through us and will the buyer pay?

"First build: a concierge marketplace through a phone line and a messaging group. We take produce listings from 40 farmers, match them with 6 buyers by hand, and handle payment through a method both use. Measure: listings per farmer, the share of listings sold, price compared with the farmer's usual price, repeat sales in four weeks. Thresholds: proceed if 30% of farmers (12 of 40) sell at least twice and the average price is at least 10% better than the middleman price. The learning is what to automate: matching, price information, payment. I'd decide the app only after the manual process works."

*Signals.* Research first; local constraints; riskiest assumption; a concierge test with thresholds.

**Follow-ups.**

- **Q.** How do you avoid assumptions based on your own context? **A.** "By spending time in the field, with local researchers and community members, listening for what they already do, and by testing in their channels. I would also involve them in judging the design, and I'd keep my assumptions written and test them."
- **Q.** What if the middlemen resist? **A.** "They may be partners as well as competitors: they provide credit, transport and trust. I'd learn what they do for farmers before trying to replace them; a product that includes them may work better than one that excludes them."

#### IQ-C26-08 · Intermediate · product-sense · PS

**Prompt.** You have two zero-to-one ideas and little data on either. How do you decide which to pursue?

**Rubric.**
- **Baseline:** "Pick the bigger market."
- **Strong:** Compares on criteria and effort.
- **Standout:** Uses evidence-adjusted scoring and a simple expected-value comparison including the cost and speed of testing, prefers the idea with faster learning when values are close, and considers reversibility and learning value.

**Model answer.** "I'd compare them on the criteria with evidence quality, then on expected value and learning speed. Suppose idea X has a 30% chance of working and a payoff of $5 million, and idea Y a 15% chance and a payoff of $12 million (all guesses, so I'd give ranges). Expected value: X is 0.30 × $5M = $1.5M; Y is 0.15 × $12M = $1.8M. After test costs of $20,000 and $30,000: $1.48M and $1.77M. On paper Y wins, but the numbers are weak guesses.

"So I'd add what the guesses don't capture. Learning speed: if I can test X in three weeks and Y in eight, I can resolve X sooner and move on if it fails, which has value. Evidence quality: if the success probability for Y rests on an analogy, I'd discount it. Reversibility and learning: which test also teaches something useful for the other idea or for the company? If the values are close and one test is much faster, I'd run the faster test first and keep the other in the queue; or, if the tests are cheap, run both small tests in parallel for a few weeks and decide on the results, which is often better than debating guesses."

*Signals.* Evidence-adjusted comparison; expected value with caution; learning speed; parallel small tests.

**Follow-ups.**

- **Q.** What if the team has strong feelings about one? **A.** "I'd make the comparison explicit and agree the test and the threshold for both before starting, so that the decision follows the evidence. Attachment is normal; a shared rule protects the team's trust."
- **Q.** When would you pursue the lower-expected-value idea? **A.** "If it is much cheaper and faster to test, if it builds a capability the company needs, or if the higher-value idea has a hidden risk that the estimate ignores, such as regulation. Expected value is a guide, not the decision."

## 12. Exercises

Eight exercises. Each has a model solution and an alternative. Every figure is invented.

#### EX-C26-01 · The idea funnel

**Problem.** A team starts with 40 ideas. Pass rates: screen 30%, scorecard 50%, tests 40%, build 50%. Hours per idea: screen 0.5, scorecard 4, test 25, prototype and pilot 150. Compute the number of ideas at each stage and the total hours, and compare with building all 40 at 1,500 hours each.

**Context.** Funnel economics.

**Data.** As above.

**Constraints.** Six minutes.

**Expected approach.** FW-C26-02 and Worked example 1.

**Solution.** Screen: 40 ideas; 12 pass (30%). Scorecard: 12 ideas; 6 pass (50%). Tests: 6 ideas; about 2.4 pass (40%), so run tests on 6 and about 2 to 3 go on. Build: say 2 ideas enter prototype and pilot and 1 is built (50%). Hours: 40 × 0.5 = 20; 12 × 4 = 48; 6 × 25 = 150; 2 × 150 = 300; total 518 hours. Building all 40 at 1,500 hours: 60,000 hours. The funnel spends under 1% of that to find the one to build.

**Alternative solution.** Show the funnel with the cost of a false kill: if 10% of killed ideas would have worked, estimate the loss.

**Tradeoffs.** Strict screens save hours and risk discarding good ideas; keep screen criteria about evidence.

#### EX-C26-02 · The riskiest-assumption map

**Problem.** For the idea "a subscription service that delivers a monthly box of plants chosen for your light and space," list six assumptions, rate impact (1 to 5) and uncertainty (1 to 5), find the riskiest and name the cheapest test.

**Context.** Validation.

**Data.** None.

**Constraints.** Eight minutes.

**Expected approach.** FW-C26-04 and Worked example 2.

**Solution.** (1) People want a monthly plant delivery (value): impact 5, uncertainty 4, product 20. (2) They will pay about $30 a month (value): 5, 5, 25. (3) Plants survive delivery (feasibility): 4, 3, 12. (4) People can match plants to their light correctly from a questionnaire (usability): 4, 3, 12. (5) Retention beyond three months (value and viability): 5, 5, 25. (6) Unit economics work with shipping and losses (viability): 5, 4, 20. The riskiest are willingness to pay and retention (25 each). The cheapest test: a landing page with the price and a deposit (for willingness to pay), then a concierge pilot of three monthly boxes for 15 customers (for retention and economics). Thresholds in advance.

**Alternative solution.** Add a first test of the plant-survival assumption by shipping 20 plants to friends with a structured check.

**Tradeoffs.** Testing willingness first avoids spending on logistics; a feasibility check is cheap and can be done in parallel.

#### EX-C26-03 · A smoke test sample size and thresholds

**Problem.** You expect a sign-up rate near 3% and want it within ±2 points at 95% confidence. Compute the sample size. Set thresholds to proceed, persist and stop for sign-ups.

**Context.** Test design.

**Data.** n ≈ 1.96² × p × (1 − p) ÷ δ².

**Constraints.** Five minutes.

**Expected approach.** FW-C26-05.

**Solution.** n = 3.84 × 0.03 × 0.97 ÷ 0.0004 = about 280 visitors. Thresholds (set before the test): proceed at 3% or more sign-ups (about 8 of 280) together with a deposit rate of at least 0.5%; persist with a better test or audience between 1.5% and 3%; stop below 1.5%. Add a duration (two weeks) and a source rule: at least half the traffic from the target segment. Read the result with an interval.

**Alternative solution.** Raise the sample to 700 to estimate the rate within ±1.3 points when the decision is costly.

**Tradeoffs.** A larger sample takes longer and costs more; set it by the cost of a wrong decision.

#### EX-C26-04 · Read a smoke test

**Problem.** A smoke test with 900 visitors shows 27 sign-ups and 4 deposits. Thresholds set in advance: sign-ups at least 3%, deposits at least 0.5%. Compute rates and 95% intervals, compare with the thresholds and decide.

**Context.** Reading results.

**Data.** Standard error √(p(1 − p) ÷ n); interval ±1.96 standard errors.

**Constraints.** Seven minutes.

**Expected approach.** Worked example 3.

**Solution.** Sign-ups: 27 ÷ 900 = 3.0%; standard error 0.57 points; interval 1.9% to 4.1%: the estimate meets the threshold exactly and the interval includes values below it: inconclusive. Deposits: 4 ÷ 900 = 0.44%; standard error 0.22 points; interval about 0.01% to 0.88%: below the 0.5% threshold and uncertain. Decision: persist with a better test (not proceed): increase the sample or improve the offer, and run a concierge test with paying customers. Do not lower the threshold to pass.

**Alternative solution.** Check conversion by traffic source: if the target segment converts higher, the test audience was diluted.

**Tradeoffs.** Ambiguous results are common; a concierge test gives a stronger signal for the cost.

#### EX-C26-05 · Concierge economics

**Problem.** A concierge test sells a service at $40 a week. Delivery takes 2.5 hours of labor at $20 an hour plus $4 of materials. Compute the margin per customer-week, and the hours needed for a 50% margin. Over 10 customers for 8 weeks, what does learning cost?

**Context.** Economics of a manual test.

**Data.** As above.

**Constraints.** Six minutes.

**Expected approach.** Worked example 4.

**Solution.** Cost: 2.5 × $20 + $4 = $54; margin: $40 − $54 = −$14 per customer-week. For a 50% margin cost must be at most $20: labor at most $16, so 0.8 hours. Learning cost over 10 customers for 8 weeks: 80 customer-weeks × $14 = $1,120. Next: find the steps that take the most time and automate those first; set a kill criterion: stop if automation cannot get time below about 1 hour.

**Alternative solution.** Test a higher price ($55): margin of $1; check whether willingness to pay allows it.

**Tradeoffs.** A higher price tests willingness to pay and may reduce the number of customers.

#### EX-C26-06 · Score and compare

**Problem.** Weights: severity 25%, reach 15%, willingness to pay 15%, right to win 15%, feasibility 10%, differentiation 10%, fit 10%. Idea P scores 4, 3, 3, 3, 4, 3, 3 with strong evidence (factor 1.0). Idea Q scores 3, 4, 4, 2, 3, 4, 2 with weak evidence (factor 0.6). Compute the weighted and adjusted scores and say what to test.

**Context.** Scorecard.

**Data.** As above.

**Constraints.** Six minutes.

**Expected approach.** FW-C26-03 and Worked example 1.

**Solution.** P: 0.25 × 4 + 0.15 × 3 + 0.15 × 3 + 0.15 × 3 + 0.10 × 4 + 0.10 × 3 + 0.10 × 3 = 3.35; adjusted 3.35. Q: 0.25 × 3 + 0.15 × 4 + 0.15 × 4 + 0.15 × 2 + 0.10 × 3 + 0.10 × 4 + 0.10 × 2 = 3.15; adjusted 3.15 × 0.6 = 1.89. P ranks first on both measures, and its lead grows when evidence is considered. Q's weak evidence means its score is mostly hope; to compare fairly, cheap tests could raise the evidence quality (for instance, willingness to pay and right to win). Test P's weakest scores first and run one cheap test on Q's highest score (willingness to pay, 4) to see whether it holds.

**Alternative solution.** Use a confidence factor of 0.8 for Q and show that P still leads (2.52 against 3.35).

**Tradeoffs.** The confidence factor is a judgment; show it transparently.

#### EX-C26-07 · Write kill criteria

**Problem.** For a new grocery-delivery feature in a messaging app, write kill, persist and pivot criteria, with measures, thresholds and a time box.

**Context.** Decision rules.

**Data.** None.

**Constraints.** Seven minutes.

**Expected approach.** FW-C26-06.

**Solution.** Measures: the share of weekly active users in the pilot city who place an order within eight weeks (adoption); repeat orders within 30 days; orders per active user; delivery issues per 100 orders as a guardrail. *Proceed* if at least 8% adopt, at least 40% of them order again within 30 days, and issues are under 5 per 100. *Persist with a better test* if adoption is 4% to 8% and repeat is above 30%, with a specific fix to test in four weeks. *Kill* if adoption is under 4% after eight weeks or repeat orders are under 20%. *Pivot signals:* strong adoption and repeat in one segment (for example, families with young children) and weak elsewhere: test a narrower proposition. Time box: eight weeks for the pilot, reviewed at four. Write the criteria before launching the pilot and date them.

**Alternative solution.** Add an economics criterion: stop if contribution per order stays negative after volume doubles.

**Tradeoffs.** Pre-set criteria can feel rigid; revise them only by an agreed process, not after results.

#### EX-C26-08 · Is it product-market fit?

**Problem.** Cohort retention: week 1, 35%; week 4, 10%; week 8, 5%; week 12, 2%. A survey finds 18% would be very disappointed without the product. Acquisition is 90% paid. What do you conclude and do?

**Context.** Traction signals.

**Data.** As above.

**Constraints.** Six minutes.

**Expected approach.** FW-C26-07 and IQ-C26-04.

**Solution.** The retention curve keeps falling toward zero rather than flattening, so no core is retained. The survey figure (18%) is well below the commonly cited 40% `[V: Sean Ellis survey and 40% benchmark, as described in Rahul Vohra's First Round article]` and below a 30% kill line. Acquisition is mostly paid, so growth would stop with spend. These signals indicate no fit. Before killing: read the data by segment (is any segment above, say, 35% very disappointed or retaining above 15%?), check whether the audience is right, and check the onboarding: could a fixable activation problem explain the early drop? If no segment shows pull, kill or restart with a new problem; do not scale or buy more traffic.

**Alternative solution.** Interview the retained 2% to see whether they use the product for a different purpose than designed, which could suggest a pivot.

**Tradeoffs.** Stopping early saves money and risks missing a late bloomer; a time-boxed segment search balances them.

## 13. Practice protocol

**Timed drills (three a week for two weeks).**

- *Week 1: evaluate and design tests.* Use IQ-C26-01, IQ-C26-02, IQ-C26-03, EX-C26-01, EX-C26-02 and EX-C26-03. For three ideas of your own, fill in a scorecard with evidence quality and an assumption map, and write a test card with thresholds.
- *Week 2: read results and decide.* Use IQ-C26-04, IQ-C26-05, IQ-C26-06, IQ-C26-08, EX-C26-04, EX-C26-05, EX-C26-07 and EX-C26-08. Compute intervals by hand, write kill criteria for a real project, and practice the 25-minute answer aloud.

**With a partner.** Ask your partner to say "5% signed up, is that good?" and "Isn't the waiting list proof?" at random, and to ask for the threshold you set before the test.

**Feedback checklist (yes, partly, no).**

1. Did I start from the problem, the user and the evidence?
2. Did I score with criteria and evidence quality?
3. Did I name the riskiest assumption by impact and uncertainty?
4. Is my test the cheapest that can fail, with a threshold and sample size set in advance?
5. Did I read results with an interval, and consider audience and commitment?
6. Did I set kill, persist and pivot criteria before the test?
7. Did I check sunk cost and read data by segment?
8. Did I distinguish real traction from false signals?

**Answer journal.** Record the date, the prompt, the assumption you tested, the threshold, your score and the one fix.

## 14. Implementation playbook

Apply the chapter on a real idea over the next three weeks. If you have no new product at work, use a feature bet or a side project.

**Days 1 to 3.** Write down five problems you have observed (with evidence) and three ideas for each. Place them on the opportunity map (FW-C26-01). Choose the strongest three and score them (FW-C26-03), marking evidence quality.

**Week 1.** For the top idea, build the riskiest-assumption map (FW-C26-04) and write a test card (FW-C26-05) with the measure, the threshold, the sample size and the decision rule. Ask a colleague to attack the test: can it fail?

**Week 2.** Run the cheapest test: a landing page with a price, five customer interviews with a commitment question, or a manual version for three customers. Read the result with an interval and the audience in mind.

**Week 3.** Decide with the pre-set criteria (FW-C26-06): kill, persist or pivot; write the decision and the next test, with a time box. Record what you learned.

**Deliverables that become stories:** the scorecard with evidence quality (a time you evaluated an idea rigorously), the test card and result (a time you validated cheaply), and the decision record (a time you decided on evidence, including to stop). Keep numbers real and credit partners.

## 15. Key takeaways and further reading

### Key takeaways

1. Ideas start from observed problems; classify them (improve the core, new market, adjacent product, diversification; painkiller or vitamin), generate many, and pass them through a funnel that spends the fewest hours on the most that will fail.
2. Evaluate with explicit criteria and the quality of the evidence behind each score; evidence-adjusted ranking reflects what you know, and the scorecard tells you what to test, not what to build.
3. Name the riskiest assumption (high impact, high uncertainty, usually that people will pay) and test it with the cheapest experiment that can fail (smoke test, concierge, Wizard-of-Oz, prototype), with the measure, threshold and sample size set in advance; read results with intervals and watch audience and commitment bias.
4. Write kill, persist and pivot criteria before the test, decide by them and by segment data, treat a pivot as a new hypothesis with its own criteria and time box, and ignore sunk cost.
5. Trust traction that shows in retention that flattens, a strong "very disappointed" share, organic growth and willingness to pay by segment, and distrust waiting lists, launch spikes, paid dependence and averages; what changes from zero to one to ten is the metrics, the team, the quality bar and the go-to-market.

### Further reading

- Eric Ries, *The Lean Startup* (2011), the source of the minimum viable product vocabulary and the Dropbox account in CS-C26-02 (read as TechCrunch's 19 October 2011 excerpt) `[V: TechCrunch excerpt of The Lean Startup, 19 October 2011]`.
- The Hacker News thread of 4 April 2007 ("My YC app: Dropbox - Throw away your USB drive"), the First Round Review account of Drew Houston's talk, an interview with Houston on startups.com and TechCrunch's 2011 recap of his Founder Stories interview. Sources for CS-C26-02 (confirmed in October 2026).
- Rob Fitzpatrick, *The Mom Test* (2013), on interviewing for real evidence of problems `[V: CreateSpace Independent Publishing Platform, 10 September 2013, ISBN 9781492180746]`.
- Marty Cagan, *Inspired* (2017), on product discovery and the four risks `[V: 2nd edition, Wiley, December 2017, ISBN 9781119387503; the discussion of the four risks was not opened]`.
- Alberto Savoia, *The Right It* (2019), on pretotyping and testing market demand `[V: HarperOne, 2019, ISBN 9780062884657]`.
- Sean Ellis's work on the "very disappointed" survey and product-market fit, and the Superhuman account in C06 `[V: Sean Ellis survey; Vohra, First Round Review]`.
