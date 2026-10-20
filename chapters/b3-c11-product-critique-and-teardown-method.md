---
id: C11
title: Product Critique and Teardown Method
tier: 1
competencies: [product-sense, design-ux, strategy-gtm]
prerequisites: [C07, C10]
defines_terms: [teardown, first-run-experience]
uses_terms: [survivorship-bias, pain-point, jobs-to-be-done, user-segment, problem-statement, metric, north-star-metric, guardrail-metric, counter-metric, activation, funnel, retention, tradeoff, second-order-effect, cannibalization, legacy-user, headroom, usability-heuristic, cognitive-load, accessibility, dark-pattern, product-sense, moat, network-effect, unit-economics, churn, say-do-gap, goodharts-law]
frameworks: [FW-C11-01, FW-C11-02, FW-C11-03, FW-C11-04, FW-C11-05, FW-C11-06, FW-C11-07]
case_studies: [CS-C11-01 (Illustrative), CS-C11-02 (Verified)]
cross_refs_out: [C02, C05, C06, C07, C08, C09, C10, C12, C13, C14, C17, C18, C28, C33, C34]
cross_refs_pending: []
status: draft
---

# C11 — Product Critique and Teardown Method

## 1. What interviewers test

"What is your favorite product, and what would you change?" and "Critique this app" are among the most open questions in a product loop, and the most often answered with a list of likes and dislikes. The interviewer is not asking for your taste. They want to see whether you can judge a product against what it is for, find the problems that matter, say how you know, and turn the judgment into a recommendation with a way to tell whether it worked.

**Where it shows up.** `Inferred` from the round structures candidates commonly report: critique and "favorite product" questions at Google, Meta, Microsoft, Amazon, Apple, Netflix, Stripe and others, often as a warm-up or as the second question in a product-sense round `[unverified: candidate-reported]`. On the job it is the work of studying a competitor, reviewing a team's own product with fresh eyes, or preparing to improve something (C08).

**What is scored.** Whether your critique is anchored, specific and prioritized `Inferred`. Interviewers listen for whether you start from the product's purpose and users, whether you walk a real flow and cite what you saw, whether you name strengths worth protecting, whether you rank problems and say why one matters more, whether your recommendation follows from the problem and has a metric, and whether you are honest about what you can and cannot know about a product you do not run.

Six observable behaviors:

1. You state what the product is for, and for whom, before judging it.
2. You walk a specific flow and ground each point in what happens there.
3. You name strengths, and say which to protect.
4. You rank issues by importance with a stated reason.
5. You recommend a change tied to the issue, with a metric and a risk.
6. You separate what you observed, what you infer and what is your opinion, and you make no claim to inside knowledge.

**The failure this prevents.** Six patterns end critique answers: a list of likes and dislikes with no goal, taste presented as user need, criticizing screens and not the product, a flat list with no ranking, a wish list of features as the recommendation, and claims about a company's metrics or intentions that the candidate cannot know.

## 2. The concept from first principles

### C11.1 What a critique is, and what it is not

A critique is a structured judgment of a product against its purpose, supported by evidence. A **teardown** is a structured analysis of how a product works and why, covering design, strategy and economics, from public information and use. A teardown describes and explains; a critique goes on to judge and recommend. Both are done from the outside, so both must be honest about what they cannot see.

**What it is not.** A review (does it deserve five stars?), a rant (what annoys me), a wish list (features I would add), or a design exercise (C07: design something new). It is also not an attack: the best critiques begin with what the product does well and why.

**The core move.** Judge relative to a goal. A feature that is a flaw for one purpose is a virtue for another: a product that hides settings behind menus is poor for power users and may be right for a mass-market tool whose job is to be simple. Without a stated goal, a critique is opinion; with one, it is an argument that someone can follow and dispute.

**When not to use the critique method.** If asked to design something new, use C07. If asked how to improve a specific metric or area, use C08, which uses critique as input but adds sizing and constraints. If asked why a metric moved, use C13.

> **Counterexample.** Asked to critique a food-delivery app, a candidate says: "I like the clean design and the photos. I dislike the delivery fees and the long list of restaurants. I'd add a loyalty program and a recipe section." Each statement is a feeling or a feature; none is tied to a user, a task or a goal, and nothing is ranked. The interviewer asks, "Which of those matters most, and how do you know?" The candidate has no answer. A better opening: "I'll judge it as a way for a busy household to get a hot meal on a weeknight with little effort. On that goal, the main problem is not the fees but the uncertainty about when the food will arrive."

**Hidden risks.** Two. *The outsider's blind spot:* you do not see the constraints the team works under (regulation, contracts, technical limits, past failures), so a flaw you see may be a deliberate tradeoff. Say so, and ask what would explain the design. *Projecting yourself onto users:* your frustration is one data point, a hypothesis about a segment, not evidence.

### C11.2 The method: purpose, users, flow, strengths, ranked issues, recommendations, metrics

FW-C11-01 is the spine: seven steps.

**1. Purpose.** State what the product is for, in a sentence: the job it does for the user and the goal it serves for the company, as you infer them from how it is offered and used (FW-C11-02). Name your assumption and invite correction.

**2. Users.** Name two or three [[user-segment]] groups by need and behavior, and say which one you critique for. A critique "for everyone" is a critique for no one.

**3. Flow.** Choose the key journey (the one that delivers the main value) and walk it, step by step, as the user would, including the first run. The **first-run experience** is what a person sees and does from first opening a product or device until they have reached their first real value, including setup, permissions and the first task. For a device it includes unboxing and pairing. Use C10's tools: the heuristic review and the state map.

**4. Strengths.** Name two or three things the product does well and why they matter for the goal. This earns credibility, shows that you understand the design, and marks what a change must not break (the legacy-user idea, C08).

**5. Ranked issues.** List the problems you found, each with the evidence (what you saw, in which step), the user it affects and the cost. Rank them (FW-C11-03) by severity (how bad when it happens), reach (how many people) and fixability. Say why the top issue is the top one. Treat accessibility and safety problems as requirements that outrank the score.

**6. Recommendations.** For the top one or two issues, recommend a change that follows from the problem (FW-C11-05): state the problem in the user's terms, choose a move (fix, add, remove, reposition, C08), say what it costs and what it risks.

**7. Metrics.** Say how you would know it worked: a primary metric tied to the problem, a guardrail, and what would change your mind.

**Why it works.** The order forces the argument to be built before it is delivered: a goal, evidence, a ranking and a test. **When not to use all seven steps at length.** For a short question, give the purpose, one strength, the top issue with evidence, and a recommendation with a metric.

### C11.3 Strategic critique: business model, distribution, defensibility

Screens are not the whole product. A product succeeds or fails on whether the business around it works. FW-C11-04 adds a strategic layer to the critique.

**Business model.** Who pays, for what, and how much? What does a customer cost to acquire and serve, and what do they bring in? A product people love and that loses money on each customer is a problem in the model, not the interface ([[unit-economics]], C18).

**Distribution.** How do people find the product and start using it? A better product with no way to reach users loses to a worse product with a channel. Ask whether the product spreads by itself (sharing, invitations) or depends on paid acquisition.

**Defensibility.** Why would customers stay and rivals fail to copy it? Sources include a [[network-effect]] (the product is more valuable as more people use it), switching costs, unique data or content, scale economies and brand. A [[moat]] (C18) is such an advantage. Features alone are easy to copy.

**Timing and context.** Does the product fit the moment: devices people have, habits they hold, rules in force, competitors' moves?

**Why it works.** A strategic critique shows that you understand why products win and lose beyond the interface. **When not to lead with it.** In a short critique of a specific flow, start with the user and the flow; add the strategic point as the reason the issue matters ("it matters because the product depends on word of mouth").

### C11.4 From critique to improvement

A critique that ends at a list is half an answer. The bridge to improvement (FW-C11-05) has four moves.

1. **Pick one or two issues.** The top-ranked. Resist "I'd redesign everything."
2. **Restate each as a problem** for a user in a situation ([[problem-statement]], C06), without the solution in it.
3. **Choose the move** (fix, add, remove, reposition) and say why that one (C08, FW-C08-05), including what it could break.
4. **Define the test and the metric**, with a guardrail (C05, C14).

A recommendation should name its own uncertainty: "I believe this because of what I saw; I would check it with five users and the funnel."

**Why it works.** It converts judgment into action that a team could take on Monday. **When not to go further.** If the interviewer asks only for a critique, stop at the ranked issues and a one-line recommendation.

### C11.5 Live-critique answer architecture, including the "favorite product" question

Section 4 sets out the live-critique answer with a time budget. The "favorite product" question deserves a note of its own (FW-C11-07), because it looks easier than it is.

**The question.** "What is your favorite product, and what would you change?" It tests whether you can explain why a product is good in terms of a job, and whether you can criticize something you like without gushing or trashing it.

**The approach.** Choose a specific product you know well and use often, not an obvious flagship you cannot say anything new about. State the job it does for you and why it does it better than the alternatives (a strength with evidence). Then name what you would change: one issue, with evidence from your own use and a thought about who else feels it, a recommendation, a metric and a risk. Show you know the tradeoff you would be making.

**Pitfalls.** Flattery (a list of praise); only complaint (a chance to show you cannot see value); choosing a product where your only reason is brand loyalty; a change that would help you and harm most users; and claiming knowledge of the company's internal data.

**Why it works.** It shows taste backed by reasoning, the core of product sense. **When to adapt.** If the interviewer names the product (for example, "your favorite Apple product"), use the same structure with the named product and say why it is your pick; do not make claims about the company's internal decisions.

### C11.6 Worked critiques across three product types, including a device-and-software product

Section 5 gives four worked critiques: a consumer app, a device-and-software product (wireless earbuds), a business tool and a strategic critique of a subscription service. Section 11 adds seven questions with model answers, including two on Apple products.

### C11.7 Labeling discipline for teardown claims: Verified versus Reconstructed

A critique of a real product mixes facts you can check with guesses. State which is which; the discipline also protects you from claims you cannot support (FW-C11-06). Two layers:

**For facts about the product or company** use the book's labels: *Verified* (from public documents or filings you can name), *Reconstructed* (inferred from public information, with the inference stated), *Illustrative* (invented to teach). Never state a real company's internal metrics, decisions or intentions as fact.

**For claims in your own critique** use three words: *observation* ("when I pair the earbuds, the screen shows X"), *inference* ("this suggests the team prioritized speed over clarity"), and *opinion* ("I would prefer"). An answer that says "I observed this, I infer that, and I'd check it with users" is more credible than one that states all three as fact.

**Why it works.** It makes the reasoning auditable and the claims defensible. **When to relax it.** In a spoken answer, a phrase ("from using it," "I'm guessing") is enough.

### C11.8 Common mistakes

Section 8 lists ten common mistakes with how to detect each and the fix.

## 3. Frameworks

Seven frameworks, set out below. The heuristic review (FW-C10-01), the state map (FW-C10-02), the accessibility pass (FW-C10-03), the four moves (FW-C08-05), the product state card (FW-C08-02), the success-metric template (FW-C05-06) and the responsible-design check (FW-C07-06) are reused, not repeated.

#### FW-C11-01 · The critique spine · Original

- **Inputs:** a product and 15 to 30 minutes.
- **Outputs:** an answer with seven visible steps: purpose, users, flow, strengths, ranked issues, recommendations, metrics.
- **Assumptions:** you can use the product or know it well from public information.
- **Tradeoffs:** structure makes the argument followable and can sound recited; adapt the order to the question.
- **Failure modes:** skipping the goal; a flat list of issues; a recommendation with no metric.
- **Worked example:** the critiques in section 5 and the model answers in section 11.

Steps: **Purpose → Users → Flow → Strengths → Ranked issues → Recommendations → Metrics.** The time budget is in section 4.

#### FW-C11-02 · The goal-first statement · Original

- **Inputs:** a named product.
- **Outputs:** one sentence: "[Product] exists to help [user] do [job], and for the company it serves [goal]; I judge it by [criterion]."
- **Assumptions:** the purpose can be inferred from public positioning and use; the interviewer will correct you.
- **Tradeoffs:** committing to a goal focuses the critique and can be wrong; say it is an assumption.
- **Failure modes:** a goal that is a feature ("to show recipes"); a goal that flatters the product; no criterion.
- **Worked example:** the statement for the saved-places critique in Worked example 1.

Template: **"X exists to help [segment] [do a job]. For the company it [earns / retains / grows]. I'll judge it on [how quickly and reliably users get that job done]."**

#### FW-C11-03 · The issue ranking grid · Original

- **Inputs:** a list of observed problems.
- **Outputs:** a table of issues with evidence, severity, reach and fixability, an impact score and a ranking, with accessibility and safety issues flagged as requirements.
- **Assumptions:** you can rate each issue on a 1 to 5 scale from your use and reasoning.
- **Tradeoffs:** scores are judgments and can look precise; the reasons matter more than the numbers.
- **Failure modes:** rating everything high; ignoring reach; letting a score bury an accessibility barrier.
- **Worked example:** the earbud issues in Worked example 2.

| Issue | Evidence | Severity (1–5) | Reach (1–5) | Impact = S × R | Fixability (1–5, 5 easy) | Rank |
|---|---|---|---|---|---|---|

Rule: rank by impact; break ties by fixability; override the score for accessibility and safety problems, which are requirements.

#### FW-C11-04 · The strategic lens · Original

- **Inputs:** a product and what is publicly known about how it makes money and reaches users.
- **Outputs:** answers on business model, distribution, defensibility and timing, each labeled observation, inference or opinion, and the one that most explains the product's position.
- **Assumptions:** public information and your own use are enough for a first view.
- **Tradeoffs:** strategic critique is broader and less certain than flow critique.
- **Failure modes:** claiming internal numbers; a list of four items with no view on which matters; ignoring distribution.
- **Worked example:** the subscription critique in Worked example 4 and the Quibi case in CS-C11-02.

| Lens | Question |
|---|---|
| Business model | Who pays, how much, and does each customer pay back their cost? |
| Distribution | How do people find and start using it, and at what cost? |
| Defensibility | Why would customers stay and rivals fail to copy it? |
| Timing and context | Does it fit the devices, habits and rules of the moment? |

#### FW-C11-05 · The critique-to-improvement bridge · Original

- **Inputs:** the top-ranked issue.
- **Outputs:** a problem statement without a solution, a chosen move (fix, add, remove, reposition) with a reason, a risk, a metric with a guardrail, and the cheapest test.
- **Assumptions:** the issue is real for a segment you can name.
- **Tradeoffs:** focusing on one issue leaves others; say so.
- **Failure modes:** a feature as the recommendation; no risk named; a metric the change cannot move.
- **Worked example:** the bridge in Worked example 3, and IQ-C11-03.

Steps: **Issue → Problem statement → Move and why → What it could break → Metric and guardrail → Cheapest test.**

#### FW-C11-06 · The teardown claim labels · Original

- **Inputs:** a claim about a product or company you are about to make.
- **Outputs:** a label on each claim: for company facts, Verified, Reconstructed or Illustrative; for critique claims, observation, inference or opinion; and a rewrite of any claim you cannot support.
- **Assumptions:** you can tell what you know from what you guess.
- **Tradeoffs:** labels slow a fast answer slightly and make it more credible.
- **Failure modes:** stating guesses as facts; claiming internal knowledge; hiding opinion as observation.
- **Worked example:** the labeled claims in EX-C11-09 and the case studies' source notes.

| Layer | Labels |
|---|---|
| Company facts | Verified (name the source type) · Reconstructed (state the inference) · Illustrative (invented, marked) |
| Your critique | Observation (what I saw) · Inference (what I think it implies) · Opinion (what I prefer) |

#### FW-C11-07 · The favorite-product answer · Original

- **Inputs:** a product you know well and use.
- **Outputs:** a two-minute answer in five parts: the job, why it is the best at it, one thing to change with evidence, the recommendation with a metric and a risk, and the tradeoff you would be making.
- **Assumptions:** you can speak from real use.
- **Tradeoffs:** a specific, modest pick is more interesting than an obvious flagship.
- **Failure modes:** praise only; complaint only; a change that serves you and harms most; claims about internal decisions.
- **Worked example:** IQ-C11-01 and EX-C11-07.

Steps: **Job → Why it wins → One change (with evidence) → Metric and risk → The tradeoff.**

## 4. Answer architecture

### The live-critique answer, for a 20-minute segment

| Step | Minutes | What to produce |
|---|---|---|
| Purpose and users | 3 | The goal-first statement; the segment you critique for |
| Flow | 4 | The key journey walked step by step, including first run |
| Strengths | 2 | Two or three, with why they matter and what to protect |
| Ranked issues | 5 | Three to five issues with evidence, severity and reach; the top one and why |
| Recommendation and metric | 4 | The bridge: problem, move, risk, metric, guardrail, cheapest test |
| Close | 2 | Two sentences; labels for what you know and infer |

**Pacing rules.** If the interviewer names a flow, skip the choosing and spend more on the ranking. If you run behind, give the purpose, the top issue with evidence and a recommendation with a metric. Treat the interviewer's questions as steering.

**How to say it.** Lead with the goal: "I'll judge this as a way for [user] to [job]." Mark your claims: "From using it, I noticed...; I'd guess that's because...; I'd check with users."

**How to close.** Two sentences: "The product does [strength] well, and its biggest problem for [user] is [issue], which costs them [cost]. I'd [change], measure [metric] with [guardrail], and I'd want to check [uncertainty]."

### Type: critique this product

Use the full spine (FW-C11-01).

### Type: favorite product

Use FW-C11-07. Choose a specific product, keep the change modest and the tradeoff explicit.

### Type: critique for strategy

Use the strategic lens (FW-C11-04) alongside the flow: why the product is where it is.

### Type: device and software

Include unboxing, setup and the first run, and the states that a physical device has (indicator lights, sounds, pairing, a second device).

### Type: the short version (8 to 10 minutes)

Goal, one strength, the top issue with evidence, recommendation with a metric. Protect the ranking.

### Common interviewer interventions, and what to do

| Interviewer says | What it means | What to do |
|---|---|---|
| "Who is this for?" | You skipped the user | State the segment and the job |
| "Why is that the most important issue?" | Your ranking is unclear | Give severity, reach and the alternative you rejected |
| "How do you know?" | Opinion stated as fact | Say what you observed and what you infer |
| "Maybe they did that on purpose." | The outsider's blind spot | Name the likely tradeoff and say what you would check |
| "What would you do about it?" | You stopped at the problem | Give the bridge: problem, move, risk, metric |
| "How would you measure that?" | They want a metric | Use the C05 template with a guardrail |
| "What do you like about it?" | You skipped strengths | Name two with why they matter |

## 5. Worked examples

All four examples are `Illustrative`. Where a real product type is the setting (examples 1 and 2), nothing here is a claim about a real company's metrics, systems or decisions, and every figure is an invented assumption; observations are described as what a user could see. The arithmetic was computed. Each follows the critique spine (FW-C11-01) and is written as notes you could say aloud.

### Worked example 1 — Consumer app: critiquing "saved places" in a maps product (Illustrative)

*Setting: a maps product of the kind Google operates. No fact about any real product is claimed.*

**Purpose and users (FW-C11-02).** Saved places exist to help travelers and planners remember places and find them again when they need them. For the company, saved places keep people returning and feed useful signals about interest (an assumption, labeled as inference). I'll judge it by how quickly and reliably a person gets from "I saved this once" to "I'm here and need it." I'll critique for a traveler on a week-long trip who saved 30 places in advance.

**Flow.** Find a place, tap save, put it in a list, later open the list, pick a place, navigate, and perhaps share the list with a friend.

**Strengths.** One tap to save, which makes saving nearly free (so people save a lot). Integration with search and navigation, so a saved place is one tap from directions. These are worth protecting: any change that adds steps to saving would hurt.

**Ranked issues (FW-C11-03).** Scores are my judgments (invented).

| Issue | Evidence (observation) | Severity | Reach | Impact | Fixability |
|---|---|---|---|---|---|
| On the trip, 30 saved places appear as pins and lists with no sense of "near me now" or "open now" | Opening the list shows a long list sorted by date saved | 4 | 5 | 20 | 3 |
| A saved place that has closed permanently looks the same as an open one | Pins carry no status until opened | 4 | 3 | 12 | 4 |
| Sharing a list gives unclear permission (can the friend edit?) | The share screen does not say | 3 | 3 | 9 | 5 |
| Many lists with similar names after a few trips | Default list names repeat | 2 | 4 | 8 | 5 |

The top issue is the first: saving is easy and retrieval at the moment of need is hard. That is the gap between the stated purpose and the experience.

**Inference, not observation.** My guess is that people save far more places than they visit; I'd check by looking at how many saved places are ever visited. I cannot know the actual numbers.

**Recommendation (FW-C11-05).** Problem: "A traveler with many saved places cannot quickly see which are near, open and worth going to now, so saved places go unused." Move: an *add* that is mostly a *fix*: a "near me" view of saved places, filtered by open now and sorted by distance, offered when the person is in a city where they have saved places. Risk: noise (a notification for every saved place would annoy), so show it only on request or at a moderate prompt. Metric: the share of saved places visited within 90 days (say 18% today, a target of 30%, invented), with a guardrail on the share of users who turn off saved-place suggestions, and a counter metric on saves per user (a drop would show that the feature makes saving feel heavy). Test: show the view to a random 5% of users in travel cities (C14), and meanwhile watch five travelers use it.

**What this shows.** The critique ranked by impact, named strengths to protect, labeled inference, and ended with a recommendation tied to a metric.

### Worked example 2 — Device and software: critiquing the first run of wireless earbuds (Illustrative)

*Setting: wireless earbuds sold with a phone app, of the kind Apple and several other companies make. No claim is made about any real product. Platform guidelines are a public reference `[V: Apple Human Interface Guidelines and Material Design]`.*

**Purpose and users.** The earbuds exist to take a new owner from the box to listening in about a minute and keep them listening. Segment: first-time owners using a phone they already own; the switchers who already have another pair are a second segment. The first-run experience is the product's first impression and the point where returns begin.

**Flow (device and software).** Open the box, power the earbuds on, pair with the phone, set up optional features (a fit test, controls, voice assistant, a companion app), listen for the first time. For devices the states include indicator lights, sounds and what the case shows.

**Strengths.** Pairing that starts when the case is opened near the phone (a pattern several makers use) makes the first step nearly effortless. A voice prompt confirming "connected" gives clear feedback when the user's eyes are elsewhere. Both are worth protecting.

**Ranked issues (FW-C11-03).** Scores are my judgments (invented).

| Issue | Observation | Severity | Reach | Impact | Fixability |
|---|---|---|---|---|---|
| The ear-tip fit test, which affects sound quality, is hidden several screens into the app | Most people never find it | 3 | 5 | 15 | 5 |
| If pairing fails there is no message, only a blinking light | The user cannot tell whether to wait, retry or reset | 5 | 2 | 10 | 4 |
| Connecting a second device (a laptop) has no obvious path | Users search settings | 3 | 3 | 9 | 2 |
| The meaning of the case's light colors is not explained | Users guess | 2 | 4 | 8 | 5 |
| Setup is visual only; a low-vision user has no spoken guidance for the steps | The app screens carry the instructions | 5 | 1 | 5 | 3 |

**Reading the grid.** By score, the order is the fit test (15), failed pairing (10), second device (9), the light colors (8), and the spoken setup guidance (5). But the last is an accessibility barrier: for the people it affects, setup is impossible without help. Accessibility and safety are requirements that override the score (FW-C11-03), so spoken guidance goes into the fix list regardless of its reach. A device adds a constraint a screen does not: some behaviors (the case's lights and sounds) are in hardware or firmware that cannot be changed after shipping, so I'd separate fixes that can be made in the app from those that cannot (C10, C17).

**Recommendation.** Problem: "A first-time owner does not find the fit test and gets no guidance when pairing fails, so some have poor sound and some return the product." Moves: a *fix* that surfaces the fit test as an offered step right after the first connection, and a *fix* that adds a plain failure message with a "try again / reset" instruction in the app and a distinct sound from the earbuds. Risk: a longer first run for people who want to skip; make the fit test optional and skippable. Metrics: primary, the share of new owners who reach a first listening session within five minutes of opening the box; input, the share who complete the fit test; guardrails: pairing success rate, support contacts and returns in the first month; counter metric: the share who skip setup entirely. A caution: returns and support contacts are lagging signals, so I would use the five-minute measure as a proxy and check that it predicts fewer returns (C14, FW-C14-08).

**What this shows.** For a device, the first run spans hardware and software, accessibility can override a scoring grid, and some fixes are only possible before the product ships.

### Worked example 3 — Business tool: critiquing the onboarding of a project-management product (Illustrative)

**Purpose and users.** The product helps teams plan and track work; the company earns by seat, so it grows when more teammates join. The user I critique for is the *admin*, the first person at a company to try it, who decides whether the team adopts it. The buyer, the admin and the daily user can be different people (C08, FW-C08-02).

**Flow and numbers (invented).** 10,000 admins sign up in a month. 8,500 create a workspace (85%); 5,100 create a first project (60% of those); 2,800 invite at least three teammates (55% of those). So the activation rate, an admin who has created a project and invited three people, is 2,800 of 10,000, or 28% ([[activation]], C05).

**Strengths.** A workspace opens with a sample project that shows what the product does (value before effort). Worth protecting.

**Ranked issues.**

| Issue | Observation | Impact on the goal |
|---|---|---|
| After creating a workspace, a blank screen offers no guidance to start a first project | 40% of admins stop here (3,400 people) | Large leak at the largest step |
| Inviting teammates asks for email addresses one at a time, with no link to share or import | 45% stop here (2,300 people) | The growth step: teammates are the way the product spreads |
| The first project template list is long and unlabeled | Admins scroll and leave | Adds to the first leak |

**Judgment on priority.** By raw numbers the blank first screen loses more people (3,400 against 2,300). But the invite step is the product's growth loop: each admin who invites three people brings more seats, and the invite step is cheap to fix (a shareable link, import from contacts). The arithmetic of a fix: raising the invite step from 55% to 65% gives 5,100 × 0.65 = 3,315 activated admins, 33.2% against 28%, a gain of 5.2 points. Raising the project step from 60% to 70% gives 8,500 × 0.70 = 5,950 who create a project and 5,950 × 0.55 = 3,272 who invite, 32.7%, a gain of 4.7 points. Both are worth doing; I'd start with the invite step because it is cheaper and it feeds growth, and I'd say the ranking would flip if the blank-screen fix were cheaper.

**Recommendation.** A shareable invite link and a "paste a list of emails" field, with a gentle prompt to invite after the first project. Metric: activation rate, with a guardrail on the share of invited teammates who report the invitation as unwanted (spam-like), since easier inviting can annoy people, and a counter metric on teammates who accept and never use the product.

**What this shows.** Ranking by the goal (activation and growth) and not only by the biggest leak, with the arithmetic to support it and a guardrail against an unwanted side effect.

### Worked example 4 — Strategic critique: a meal-kit subscription (Illustrative)

**Purpose and users.** A weekly subscription that delivers ingredients and recipes for people who want to cook at home without planning or shopping. The critique here is strategic (FW-C11-04): not what is wrong with the screens, but whether the business works.

**Business model (invented).** An order averages $70 with a 25% contribution margin, so $17.50 per order; customers order twice a month, so $35 of contribution a month. Acquiring a customer costs $90 through paid advertising. Payback: $90 ÷ $35 = 2.6 months. Monthly churn is 12%, so the expected lifetime is 1 ÷ 0.12 = 8.3 months and lifetime contribution is about $292. The ratio of lifetime contribution to acquisition cost is 3.2: a healthy business on these numbers.

**The sensitivity.** The model is fragile where churn is concerned. At 20% monthly churn the lifetime is 5 months, lifetime contribution $175 and the ratio 1.9. If the cost of acquiring a customer also rises to $140 (as the cheapest audiences are used up), the ratio falls to 1.25, a thin margin for error, before accounting for the cost of support and wasted food. The strategic question is churn: why do customers leave, and can the product change it?

**Distribution.** Mostly paid advertising and promotions, as inferred from the pricing of first boxes. That means growth costs money in proportion to new customers, and referrals and word of mouth are the cheaper channels to build.

**Defensibility.** Weak, as I see it: switching costs are low (a customer cancels with a click and tries a competitor's discount), there is no network effect, and recipes and ingredients are not unique. Possible sources: a supply chain advantage, a brand, personalization from taste data. I would label these as inference.

**Timing and context.** If demand rose in periods when people stayed home and fell afterward, that can mean the product served a moment as much as a habit (a hypothesis to check against public coverage of the category).

**Recommendation.** Treat retention as the central product problem: study why people cancel, make skipping a week easy (so a busy week pauses and does not cancel), and invest in what makes the box part of a routine. Metrics: retention at 90 days by acquisition channel, with a guardrail on contribution margin per order and a counter metric on the rate of paused-then-cancelled customers.

**What this shows.** A product can have a good interface and a fragile business; the strategic layer found where it was fragile and tied the product work (skipping, routine) to the number that mattered (churn).

## 6. Baseline, Strong, Standout

**Prompt:** "Critique a to-do list app."

### Baseline answer

"I like that it's simple and the checkboxes feel satisfying. I don't like that there are too many menus and no dark mode. I'd add a calendar view and reminders."

*What is wrong:* likes and dislikes with no goal, user or ranking, and a list of features as the recommendation. Nothing says why any of it matters.

### Strong answer

"I'd judge it as a way for a busy professional to keep track of what they must do and actually do it. For that user, I'd walk the main flow: capture a task, organize it, see today's list, complete it.

"Strengths: capturing is fast, and the today view is clear. I'd protect both. Issues, ranked by how much they get in the way of the goal: first, tasks pile up with no sense of priority, so the today list grows beyond what a person can do, which defeats the purpose; second, recurring tasks are awkward to set up; third, the menus are deep. The top one matters most because it is the reason people abandon to-do apps: the list becomes a source of guilt.

"Recommendation: help people choose what to do today, for example by asking at the start of the day for the three that matter, and moving the rest out of view. Metric: the share of tasks planned for a day that are completed that day, with a guardrail on daily retention. I'd test it with five users and in a staged rollout."

### Standout answer

Everything in the Strong answer, plus:

"I'd say what I observed against what I infer. I observed that the today list has no cap; I infer that the team optimized for capture, because the product's early growth came from people saving lots of tasks; I can't know that. I'd also be careful that a limit feels like a loss for heavy users, so I'd make it a suggestion, not a rule, and measure heavy users separately (the legacy-user point).

"On strategy: to-do apps are easy to copy and switch from, so the defensibility is in habit and data: if a person's whole life is in the list, leaving is costly. That suggests retention and import/export matter more than another feature, and makes the guilt problem a retention problem. The business probably depends on converting free users to paid, so a change that improves completion should be checked against what drives conversion.

"The risk of my recommendation is that asking people to choose three tasks adds friction to the first minute of the day, so I'd test it as optional first. What would change my mind: if data showed that people who accumulate long lists still retain well, then the pile-up is not the problem and the issue is elsewhere, perhaps recurring tasks."

### What moves an answer up a band

| From Baseline to Strong | From Strong to Standout |
|---|---|
| States a goal and a user, walks a flow, ranks issues | Separates observation, inference and opinion; names the tradeoff and the blind spot |
| Names strengths to protect | Adds the strategic layer: business, distribution, defensibility |
| Ties a recommendation to a metric and a test | Names the risk of the recommendation and what would change the view |

## 7. Company lens

All claims describe what companies say publicly or what candidates commonly report, not insider knowledge. Interview formats change `[as of 2026-10]`.

> **Company lens: Apple [as of 2026-10].** Apple designs hardware, software and services together and publishes platform design guidelines `Public` `[V: Apple Human Interface Guidelines (developer.apple.com) and privacy pages; Apple's own description of its platforms and services]`. Third-party guides report that "favorite product" and first-run critique questions are common at Apple and reward specific, detail-aware answers `Inferred`. Practical consequence: choose a specific product, walk the first run across hardware and software, cover accessibility and the user's other devices, and make no claim about internal decisions.

> **Company lens: Google [as of 2026-10].** Google publishes design guidance and a stated philosophy that begins with the user `Public` `[V: Google, Ten things we know to be true; Material Design]`. Candidates commonly report critique prompts about its own products at large scale `Inferred`. Practical consequence: critique for a specific segment, include users with older devices and slow connections, and say how a change would be tested at scale. Appendix A has briefs on eight Google products to practice against.

> **Company lens: Amazon [as of 2026-10].** Amazon publishes Customer Obsession as a leadership principle, and former leaders describe writing a customer-facing press release and FAQ before building `Public` `[V: Amazon's Leadership Principles; Amazon working-backwards material]`. Candidates commonly report that critiques are expected to start from the customer's problem `Inferred`. Practical consequence: state the customer's job and the customer-visible cost of each issue.

> **Company lens: Meta [as of 2026-10].** Candidates commonly report critique prompts about social products, with follow-ups on engagement, safety and unintended effects `Inferred` `[unverified: candidate-reported]`. Practical consequence: include the effects on other users and on people who are not the target segment, and apply the ethical nudge test (C10) to engagement mechanics.

> **Company lens: Microsoft [as of 2026-10].** Microsoft publishes inclusive-design principles and its products often serve buyers, administrators and daily users who differ `Public` `[V: Microsoft Inclusive Design toolkit manual (Microsoft Design)]` `Inferred`. Practical consequence: say whose experience you critique, and include accessibility and the administrator's view.

> **Company lens: Netflix [as of 2026-10].** Netflix publishes material on its culture and on personalization and testing `Public` `[V: Netflix culture memo; Netflix Tech Blog]`; candidates report data-informed prompts `Inferred`. Practical consequence: say what you would test to confirm a critique, and separate what people say from what they do.

> **Company lens: Stripe [as of 2026-10].** Stripe is widely described as emphasizing documentation and developer experience `Inferred` `[V: Stripe documentation reputation: Slab interview with its former Documentation Manager and Mintlify article; design principles for checkout not separately checked]`. Practical consequence: for developer products, critique the first integration, the documentation and the error messages as the interface.

## 8. Common mistakes

| # | Mistake | How to detect it | Fix |
|---|---|---|---|
| 1 | No stated goal | You list likes and dislikes | Open with the goal-first statement |
| 2 | Critiquing for everyone | "Users" with no segment | Name one segment and its job |
| 3 | Screen-level taste | Color and style opinions | Tie each point to a task and a cost |
| 4 | A flat list of issues | No ranking, no reason for the top | Rank by severity and reach; justify the top |
| 5 | Skipping strengths | Only complaints | Name two strengths and what to protect |
| 6 | A feature wish list as the recommendation | "Add X, Y, Z" | State the problem, then choose a move |
| 7 | Claiming inside knowledge | "They obviously optimize for..." | Label as inference; say what you would check |
| 8 | Ignoring the business | Only interface points for a failing business | Add the strategic lens |
| 9 | A recommendation with no metric or risk | The change cannot be tested | Add a metric, a guardrail and a risk |
| 10 | Gushing or trashing a favorite | All praise or all complaint | Specific strength, one modest change, the tradeoff |

## 9. Mental models applied

Four models, each tied to a decision in this chapter. The legacy-user idea is from C08.

**Steelman first** (`MM-steelman`). Before criticizing a design, build the strongest case for why it is that way: a tradeoff, a constraint, a different goal. A flaw that survives the steelman is a real flaw; one that does not was a misunderstanding. It is the critic's version of asking why a fence was built before removing it (C08).

**Observation, inference, opinion** (`MM-three-labels`). Most weak critiques mix them. What you saw is checkable; what you infer from it is a hypothesis; what you prefer is a taste. Saying which is which makes your argument stronger and your humility visible.

**The outsider's blind spot** (`MM-outsider`). From outside you see the product and not the constraints: contracts, regulation, technical limits, past incidents. So the same observation can be a flaw or a deliberate tradeoff. Say which you suspect and what would tell you.

**Survivorship in what you see** (`MM-survivorship`, see [[survivorship-bias]], C12). The products you can critique are the ones that survived, and a failed product teaches different things. When you study a product, ask what similar products failed and why, so you do not mistake features of survivors for causes of success.

## Engineering, design and data-science perspectives

- **Engineering.** Ask what would make an issue hard or easy to fix, and which behaviors are fixed in hardware or firmware. A critique that ignores feasibility cannot be acted on. Engineers often know why something is as it is, which is the steelman.
- **Design and research.** Designers can say which problems are known and which are new, and researchers can turn an observation into evidence with a quick test. Critique with them, not at them: bring the ranking and ask what they would add.
- **Data science.** For a product you work on, the critique is a set of hypotheses the data can test: where the funnel leaks, which segment struggles. For one you do not, say what data you would want to see. Ask what would change the ranking.
- **Competitive and strategy teams.** For a strategic critique, ask the people who study the market for what is public about the business model, pricing and distribution, and label what is inference.

## Checklist: before you deliver a critique

1. Did I state the goal and the user before judging?
2. Did I walk a specific flow, including the first run?
3. Did I name strengths worth protecting?
4. Did I rank issues with evidence and say why the top one is the top?
5. Is my recommendation tied to the issue, with a metric, a guardrail and a risk?
6. Did I separate observation, inference and opinion, and avoid inside knowledge?
7. Did I add the strategic layer where it explains the product's position?
8. Did I say what would change my mind?

## 10. Case studies

#### CS-C11-01 · Critiquing a library-lending app · Illustrative · Beginner

*Fictional composite. Every number is invented (invented).*

**Situation.** A public library offers an app for borrowing e-books. Staff are asked to review it before a redesign. The initial comment from the team is "it looks dated and needs a refresh."

**Constraints.** A small budget, a requirement to work with the library's catalog system, and a goal from the library's board of increasing the number of loans per member.

**Data.** From the app's analytics (invented): 100,000 searches a month; 9% of searches lead to a borrow within a week. In observation of 8 members searching for a title they wanted (invented), 6 found a book that was listed but not available, and 5 of those left without placing a hold. Members who do place a hold say the wait time is unclear. Survey comments ask for an "available now" filter.

**Problem definition.** As an observable problem: "A member searches for a book, finds it listed but unavailable, does not understand the wait, and leaves without borrowing."

**Analysis.** (FW-C11-01) *Purpose and user:* the app exists to help a member get a book to read quickly; the critique is for a member searching for a specific title. *Strengths:* the catalog is large and the checkout is one tap for available books; protect both. *Ranked issues:* (1) availability is not shown in search results (severity 5, reach 4, impact 20), (2) wait times for holds are unclear (4 × 3 = 12), (3) the visual style is dated (1 × 5 = 5). The team's first comment, the style, ranks last. The evidence for (1) is observation (6 of 8) and the analytics; the explanation that members expect to borrow immediately is an inference.

**Options.**

| Option | Optimizes | Costs |
|---|---|---|
| A. Refresh the visual style | Appearance | Does not touch the leak |
| B. Show availability and an estimated wait in results, with an "available now" filter | Searches that lead to a borrow | Needs data from the catalog system |
| C. Recommend similar available titles when a book is unavailable | Borrows from unavailable searches | More build; a recommendation system |

**Tradeoffs.** B addresses the top issue directly; C builds on it. A is the least connected to the loans goal. A risk with B: showing long waits could discourage holds, so show the wait with an alternative.

**Decision.** Build B first. Primary metric: the share of searches that lead to a borrow within a week (baseline 9%); holds are tracked separately as a sign of intent. Guardrail: the share of holds that are later cancelled. Counter metric: the share of members who stop using the app after seeing a long wait.

**Outcome.** In this fictional scenario the share of searches leading to a borrow rose from 9% to 14%, which is 5,000 more borrows from 100,000 searches (invented), and cancelled holds rose slightly. The visual refresh was scheduled later.

**Alternative outcomes.** If the share had not moved, the team would have watched more members to find why (perhaps the catalog's availability data was stale). If long waits had driven members away, they would have added C. The lesson: start from the goal and the observed behavior, rank, and let the evidence overrule the first comment.

#### CS-C11-02 · Quibi, 2020: a strategic critique of a product that lasted six months · Verified · Advanced

*Sources (types): news reports of the shutdown by the Associated Press (carried by the Canadian Broadcasting Corporation and PBS), CNBC, Yahoo Finance and Variety (October and December 2020), which quote the founders' joint letter and Meg Whitman's statement (the letter itself is read as quoted); trade and technology coverage of the product's launch, price and TV support (Variety, MobileSyrup, 9to5Mac, Android Central); and an encyclopedic summary of dates and funding. The analysis is the author's. This case is a critique from public information; it makes no claim about the company's internal data or decisions. Re-read in October 2026.*

**Situation.** Quibi, short for "quick bites," was a streaming service of short-form, premium video made for phones. It was founded by Jeffrey Katzenberg, a Hollywood executive, and led by Meg Whitman, a former technology chief executive. It raised $1.75 billion before launching in the United States and Canada on 6 April 2020, with prices of $4.99 a month with ads and $7.99 without `[V: Variety, 2020]`. On 21 October 2020, about six months after launch, it announced that it would shut down, and on 22 October said the service would end on or around 1 December `[V: AP; reference summary]`. In their statement, the founders gave two possible reasons: that the idea was not strong enough to justify a standalone streaming service, or that the timing was wrong, and said they suspected a combination.

**Constraints.** The product was designed for watching on a phone while away from home; the launch coincided with the early weeks of widespread lockdowns, which kept many people at home. The app was phone-only at launch: AirPlay support arrived in May 2020 and Chromecast support in June, and native apps for Apple TV, Amazon Fire TV and Android TV launched on 19 to 20 October 2020, two days before the shutdown announcement `[V: MobileSyrup, May 2020; Variety, October and December 2020]`. Reports also say that users could not share screenshots of shows `[V: MobileSyrup, May 2020]`. The company did not publish subscriber figures; a mobile-analytics firm, Sensor Tower, estimated 9.6 million installs of the app, which does not equal paying users `[V: AP]`, and the research firm Kantar estimated 710,000 subscriber households in the third quarter of 2020, down from 1.1 million in the second `[V: Variety, December 2020]`.

**Data.** As reported: the funding, the launch and shutdown dates, the starting price, the founders' two explanations, the late arrival of TV options and, from secondary sources, the sharing restrictions. The founder attributed the poor performance to the coronavirus pandemic in comments reported at the time.

**Problem definition.** *The author's reading.* The product was built on a specific assumption about a moment: that people would pay for premium short video in the pockets of time away from home, such as commutes. The question for a critique is whether the product, the model and the timing together could support that.

**Analysis.** *The author's analysis.* Through the strategic lens (FW-C11-04):

*Purpose and moment.* The core assumption was context-dependent: a commute-like moment on a phone. The founders' own statement separates two explanations, the idea or the timing. The pandemic, which reduced commuting, is outside the team's control and is a real factor. But it is only one of the explanations the founders offered, and the sources do not separate them. A critic should name the assumption a product rests on and ask how fragile it is: a thesis that depends on one context can fail when the context changes, so a product with that dependence benefits from being usable in others.

*Product choices.* Two choices were within the team's control, as reported: the phone-only design (at a time when people were at home, with televisions at hand) and the restrictions on sharing. Phone-only narrowed where the product could be used; the sharing restrictions, if as reported, removed a route by which people discover content. Both bear on distribution.

*Distribution.* A new standalone paid app had no existing audience and competed for attention with free video apps built around sharing and with established subscription services. Without a built-in channel, it relied on marketing and word of mouth, and the sharing restrictions limited the latter.

*Business model and defensibility.* A subscription priced at a few dollars a month with expensive premium content needs many subscribers to cover costs; Variety reported spending of up to $6 million per hour of produced content `[V: Variety, December 2020]`. The advantage rested on exclusive content, which is expensive to sustain and easy for large competitors to match, and the product had no network effect or other switching cost.

*What the evidence does not show.* Whether a different design (multi-device, shareable) would have succeeded is unknown. Hindsight makes causes look clear; the sources support a list of risks that were visible in the plan, not a proof of which one decided the outcome.

**Options.** *The author's reconstruction of choices the team could have faced; not a record of its deliberations.*

| Option | Optimizes | Costs |
|---|---|---|
| A. Launch phone-only with restricted sharing, as planned | A distinct position and control over how content is seen | Narrow use and little organic discovery |
| B. Launch on phone and TV with shareable clips | Reach and word of mouth | Dilutes the "for phones" premise; the sharing of premium content has costs for rights holders |
| C. Launch with a free, ad-supported tier to build an audience first | Distribution | Lower early revenue; changes the model |

**Tradeoffs.** A protects the thesis and bets everything on one context. B and C widen the audience and make the product less distinctive. A critique can say which assumption is most costly to be wrong about and design the first version so that it can survive its being wrong.

**Decision.** As documented, the company launched as in A, added casting and TV apps later, and, six months in, announced the wind-down and the return of remaining cash to shareholders `[V: AP, 21 October 2020]`.

**Outcome.** Reported: shutdown within about six months, with the funding raised. The sources do not show the subscriber count or the internal reasons for specific design choices.

**Alternative outcomes.** *Inference.* Had the pandemic not occurred, the commute-based moment might have been larger, and the product might have found more subscribers; the founders' own statement allows for that. Had the product been usable on TVs and shareable from the start, it might have lasted longer, and it is not clear that it would have been profitable. The method to carry away: name the moment and the assumption a product depends on, check which parts of the position were within the team's control, apply the strategic lens (business model, distribution, defensibility), label what is reported and what is inferred, and resist treating the outcome as proof of a single cause.

## 11. Interview questions and model answers

Seven questions: two Beginner, two Intermediate, three Hard. Model answers are `Illustrative` (composite candidates; replace the product and the experience with your own), and every figure is an assumption. Each is written against the six behaviors in section 1 and uses the critique spine (FW-C11-01). Where a real company's product is the setting, the answer reasons from use and public information and states no internal fact. The answers are fuller than a first pass in a real round.

#### IQ-C11-01 · Beginner · critique · PS · Apple

**Prompt.** What is your favorite Apple product, and what would you change?

**Rubric.**
- **Baseline:** Praise ("it just works, the design is beautiful") and a minor wish ("make it cheaper").
- **Strong:** Names the job, why the product does it better than alternatives, and one change with evidence and a metric.
- **Standout:** Picks a specific, modest product, backs the strength with observation from use, makes the change modest and tied to a segment, names the tradeoff and the risk, and claims nothing about the company's internal reasons.

**Model answer.** *(A composite candidate's answer; use your own product and experience.)* My pick is the wireless earbuds I use every day on my commute and for calls. The job: get audio into my ears with no effort, and switch between my phone and laptop without thinking about it.

*Why it wins.* From my own use: pairing takes seconds when I open the case near my phone, and a spoken "connected" tells me it worked without looking at a screen. The case doubles as a charger, so I do not manage a cable. Those are strengths I'd protect: anything that adds a step to connecting would hurt the whole experience.

*What I'd change.* One thing I observe: it is hard to know the case's battery level at a glance when the earbuds are in the case and the lid is closed, and I have been caught out on a long trip. I'd guess many commuters feel that, though I can't know how many. The problem: "A commuter cannot tell whether the case has enough charge before leaving home, so they sometimes run out mid-trip."

*Recommendation.* A small *add*: a battery reminder on the phone the night before, if the case is low and I have a regular early commute, which the phone could infer from my routine. Keep it opt-in, since an unwanted notification is a cost. Metric: the share of users who see a low-battery event during their commute, with a guardrail on how many switch the reminder off. Risk: noise, and use of routine data, which should stay on the device.

*Tradeoff.* A reminder helps people with predictable routines and annoys the rest, so I'd make it a suggestion and test it with a small group first. What would change my mind: if few people actually run out of charge, the problem is not worth a feature.

*Company note.* Apple is the setting only: `Inferred` from third-party reports that "favorite product" questions are common at Apple and reward specific, detail-aware answers `[unverified: candidate-reported]`. No claim is made about any real product's behavior or the company's internal decisions.

**Follow-ups.**

- **Q.** What is the risk or tradeoff of the change you propose? **A.** "Any change to a well-liked product has a user who is worse off, and I would name that person. If the change adds a setting or a feature to the pairing flow, the first-time owner who wants nothing to decide may see more options, so I would put it behind a default that preserves the current behavior. I would also state a risk of cost or complexity: engineering and support work for a modest segment. The measure is whether the segment that needs it uses it and whether setup time or returns for everyone else stay the same."
- **Q.** How do you avoid claiming things about the company's reasons? **A.** "By labeling. What I saw in use is an observation; why the company built it that way is an inference unless a public statement says so, and I would say I am inferring. I would use words such as the design appears to, and put what I could not verify at the end. If the interviewer asks why the company made a choice, I would give my reasoning as a hypothesis, name the evidence I would need, and avoid presenting a guess about internal intent as fact."

#### IQ-C11-02 · Beginner · critique · PS

**Prompt.** Pick the app you used most today and critique it.

**Rubric.**
- **Baseline:** "It's great; I'd add more features."
- **Strong:** States the goal and user, walks the flow, names strengths, ranks issues and recommends a change with a metric.
- **Standout:** Uses observation from today's use as evidence, separates observation from inference, notes the strategic position briefly, and says what would change the view.

**Model answer.** *(Composite.)* The app I used most is a messaging app. I'll judge it as a way for me to stay in touch with a handful of people and a few busy group chats with little effort. I'll critique for a person like me: many groups, some of them active.

*Flow.* Open, see the list of chats, open one, read, reply, return. *Strengths:* replying is fast, and message status (sent, read) is clear. I'd protect both.

*Ranked issues (from today's use).* (1) Two group chats produced 80 messages while I was in meetings, and I could not tell which contained something addressed to me; I scrolled for several minutes (severity 4, reach high among people in busy groups). (2) Search found the message but opened the chat at the bottom, not at the message, so I scrolled to find the context (3). (3) Notification settings are per chat and buried (2). I'd rank the first at the top because it is the reason people mute groups, which weakens the product's core value.

*Observation versus inference.* I observed the 80 messages and the scrolling. I infer that many people with busy groups feel this, and that muting is the response. I can't know the numbers.

*Recommendation.* The problem: "After time away, a member of a busy group cannot find what matters to them." A catch-up view that shows mentions and replies to me first, optional and in addition to the normal chat. Metric: the share of members of busy groups still active in the group after eight weeks, with a guardrail on messages sent per member (so the feature does not discourage posting). Risk: it reduces the visibility of messages not addressed to anyone, so I'd keep the full view as the default. Strategically, a messaging product depends on groups staying alive, which is why this issue matters to the business and not only to me.

*Close.* "It does quick replies well; its biggest problem for people in busy groups is finding what matters after time away. I'd add an optional catch-up view and measure retention in busy groups. I'd check it with five users and with the mute rate."

**Follow-ups.**

- **Q.** How do you separate observation from inference in your critique? **A.** "I say which is which in the sentence. Observation: when I opened the app today, it took two taps to reach a group I use constantly. Inference: the app may be optimizing for recent chats and not for the groups I use most. Opinion: I would prefer a pinned section. Separating them lets the interviewer challenge each differently: an observation by asking for evidence, an inference by offering another explanation, an opinion by asking about other users. It also stops me from stating a guess as a fact."
- **Q.** What would change your view of the biggest issue? **A.** "Evidence about the users I am not. My ranking is for a person with many active groups; if usage data showed that most users have two or three chats, the discovery issue would rank lower and message status or notifications might rank higher. I would also change my view if the fix turned out to cost far more than I assumed, because the ranking uses fixability. I would say this at the end, as a check I would run with data from the product team."

#### IQ-C11-03 · Intermediate · critique · PS · Apple

**Prompt.** Critique the pairing and setup experience of wireless earbuds.

**Rubric.**
- **Baseline:** "Make pairing easier and add more colors."
- **Strong:** Treats it as a first-run experience across hardware and software, ranks issues, and recommends fixes with metrics.
- **Standout:** Separates what can be changed after shipping from what cannot, lets accessibility override the score, uses proxies for lagging outcomes such as returns, and avoids claims about any real product.

**Model answer.** I know the category from use and from public information; nothing here describes a specific product.

*Purpose and users.* The earbuds should take a new owner from the box to listening in about a minute and keep them listening. I'll critique for a first-time owner with a phone they already own, and note switchers as a second segment. The first-run experience is the first impression and the point where returns begin.

*Flow.* Open the box, power on, pair, set up optional features (fit test, controls, assistant, companion app), first listening session. For a device there are extra surfaces: indicator lights, sounds and what the case shows.

*Strengths.* Pairing that begins when the case opens near the phone (a pattern several makers use) is nearly effortless; a spoken "connected" gives eyes-free feedback. Protect both.

*Ranked issues.*

| Issue | Severity | Reach | Impact | Fixability |
|---|---|---|---|---|
| The fit test, which affects sound quality, sits deep in the app | 3 | 5 | 15 | 5 |
| A failed pairing shows only a blinking light, with no message | 5 | 2 | 10 | 4 |
| Connecting a second device is not obvious | 3 | 3 | 9 | 2 |
| Case light colors are unexplained | 2 | 4 | 8 | 5 |
| Setup guidance is visual only | 5 | 1 | 5 | 3 |

By score, the fit test is first. The last row is an accessibility barrier: a low-vision owner cannot complete setup without help, so it is a requirement and goes on the list whatever its reach.

*Hardware and software.* Some fixes live in the app and can be shipped any time (a fit-test prompt, a failure message, spoken guidance); others live in the device's firmware or hardware (light behavior, sounds) and may be fixed only before manufacture or by an update if the device supports it. I'd separate the lists and say which is which.

*Recommendation.* The problem: "A first-time owner does not find the fit test and gets no guidance when pairing fails, so some have poor sound and some return the product." Moves: an app prompt that offers the fit test right after connection (skippable), and a clear failure message with "try again / reset" plus a distinct sound. Metrics: primary, the share of new owners who reach a first listening session within five minutes; input, the share who complete the fit test; guardrails: pairing success, support contacts and returns in the first month; counter metric: the share who skip setup entirely. Returns arrive weeks later, so I'd use the five-minute measure as a proxy and check that it predicts fewer returns.

*Company note.* Apple is the setting only: `Inferred` from third-party reports that critique prompts at Apple include device first-run experiences `[unverified: candidate-reported]`. No claim is made about any real product.

**Follow-ups.**

- **Q.** What can be changed after shipping and what cannot? **A.** "Software and firmware can change after shipping: the setup flow in the companion app, the prompts, error messages and pairing logic can be updated, and I would prioritize fixes there. Hardware cannot: the physical button placement, the case, the charging contacts and the sensors are fixed once units are made. So I would put early effort into hardware decisions that affect setup, such as a clear status light and a physical pairing button, and treat app copy and flow as adjustable. The ranking weights fixability, which for hardware means it must be right before the factory."
- **Q.** How do you handle accessibility and returns in your critique? **A.** "Accessibility can override the score. If setup cannot be completed with a screen reader or by someone with limited dexterity, it is a launch-blocking issue however high the average satisfaction is. For returns, a lagging outcome, I would use proxies available early: the share of new owners who finish setup within five minutes, support contacts in the first week and reviews that mention setup. A first-week setup completion rate under, say, 90% would flag a problem months before return data arrives."

#### IQ-C11-04 · Intermediate · critique · PS

**Prompt.** Critique a food-delivery app, from both the customer's and the business's point of view.

**Rubric.**
- **Baseline:** "Fees are too high; add loyalty rewards."
- **Strong:** Critiques the customer's flow and the business's economics, and notes where they conflict.
- **Standout:** Names the multi-sided tension (customers, restaurants, couriers), ranks issues for one segment, applies the strategic lens with numbers labeled as assumptions, and recommends with a guardrail on the other sides.

**Model answer.** *Customer view.* The goal: a household gets a hot meal on a weeknight with little effort and little uncertainty. The flow: choose a restaurant, build an order, pay, wait, receive. Strengths: browsing is easy and reordering a past meal is quick, which I'd protect. Ranked issues: (1) uncertainty during the wait: the estimate shifts and there is little explanation when it does (severity 4, reach high); (2) substitutions and missing items, handled after the fact (4, medium); (3) the total cost is clear only at the last step, where fees appear (3, high). I'd rank the first at the top because uncertainty is anxiety, and it drives support contacts.

*Business view.* A delivery marketplace has three sides: customers, restaurants and couriers, and its economics depend on all of them. Suppose (invented) an average order of $30, a 25% commission, and $7 of courier and handling cost per order, leaving $0.50 contribution before marketing and support. That is thin, so each support contact (say $4) or discount matters. Distribution relies on promotions and advertising (inferred), and defensibility is limited because customers can use several apps. This explains why the company is sensitive to wait-time contacts and to fee transparency: both affect contact cost and conversion.

*Where views conflict.* Showing the total cost early could lower conversion (people see the fee sooner) while raising satisfaction and reducing refunds. The honest design is to show it early, and measure net outcomes.

*Recommendation.* Fix the wait: show an honest estimate with a range and a reason when it changes. Metric: delivery-related support contacts per 100 orders, with guardrails on conversion at checkout and on courier earnings (a more accurate estimate should not be achieved by pressuring couriers), and a counter metric on the share of customers who cancel after seeing a longer estimate. I'd label my numbers as assumptions and my view of the economics as inference.

**Follow-ups.**

- **Q.** How do you handle the tension among customers, restaurants and couriers? **A.** "By naming it and giving each side a guardrail. A change that helps customers, such as promising a shorter estimate, can hurt couriers (pressure to rush) and restaurants (rushed kitchens). I would rank issues for one segment, here customers, then check the effect on the others: courier earnings per hour and acceptance rate, restaurant prep-time accuracy and cancellations. A recommendation passes only if the other sides' measures do not fall beyond limits I set in advance. If the sides conflict, I would take the tradeoff to a decision with the numbers, not choose silently."
- **Q.** How do you use the strategic lens with numbers you do not have? **A.** "I label them as assumptions and show how the answer depends on them. For example, if I assume a typical order earns $2 of margin after courier cost and the average customer orders four times a month, a one-point rise in repeat rate is worth about a few cents per customer per month, which tells me how much to spend on a fix. I would say these are invented for the exercise and name which one I would verify first. The aim is to show the structure of the economics, not to claim real figures."

#### IQ-C11-05 · Hard · critique · PS

**Prompt.** A startup is launching a premium short-video service for phones, with expensive original shows, a subscription price of a few dollars a month, and no free tier. Critique the plan and say whether you would bet on it.

**Rubric.**
- **Baseline:** "The content looks good, so it will do well," or "it will fail because streaming is crowded."
- **Strong:** Applies business model, distribution and defensibility, and names the key assumption.
- **Standout:** Separates what is within the team's control from what is not, lists the assumptions in order of fragility with ways to test them cheaply, and gives a decision with conditions.

**Model answer.** I'd treat it as a strategic critique (FW-C11-04), and I'd label everything as based on the description, not on inside knowledge.

*Purpose and moment.* The thesis is that people will pay for premium short video in pockets of time away from home. That is a context-dependent assumption: it depends on people having such moments (commutes, waiting) and on a phone being the screen they choose. If the context changes, the thesis weakens. A product that rests on one moment needs to work in others.

*Business model.* A few dollars a month is thin against expensive originals. Suppose (invented) each show costs a few million dollars and the service needs several million paying subscribers to cover its content and operations. That needs large, fast growth, so the model's success depends on one number: paid conversion. A cheap test: pre-launch interest is not payment, so measure willingness to pay with a paid pilot.

*Distribution.* A new standalone app has no audience. The short-video apps people already use are free and designed around sharing. If the product restricts sharing, it loses the main route by which free apps spread. So I'd ask how a person hears about a show and how they bring a friend.

*Defensibility.* Exclusive content is expensive and can be matched by larger competitors; short episodes are easy to imitate; there is no network effect unless people share, and no switching cost. I'd ask what is hard to copy.

*Assumptions in order of fragility, with tests.* (1) People will pay for short-form premium video: test with a paid pilot. (2) They will watch it in the moments assumed: observe a cohort. (3) Phone-only is enough: test with and without TV viewing. (4) Sharing is not needed: test with shareable clips.

*Decision.* "I wouldn't bet on the plan as described. I'd bet on a version that tests assumptions 1 to 4 cheaply before spending on a large content slate, and that works on more than a phone and lets people share. If a paid pilot shows strong conversion and retention, I'd scale." What would change my mind: strong evidence that the moment exists and that people pay.

**Follow-ups.**

- **Q.** Which assumptions are most fragile, and how would you test them cheaply? **A.** "In order of fragility: first, that people will pay for premium short video with no free tier; second, that the original shows can be made at a cost the price can cover; third, that people have the pockets of time. Cheap tests: a landing page with the price and a waitlist deposit to test willingness to pay; a small paid pilot of one show with 500 users measuring completion and retention; and a diary study on when people watch video away from home. The first test is the cheapest and decides whether the others matter."
- **Q.** What is your decision, with conditions? **A.** "I would not bet on the plan as described, and I would bet on a staged version. Condition one: at least 5% of a targeted audience put down a small deposit at the stated price. Condition two: a pilot show reaches a 30-day retention above a threshold, say 25%. Condition three: the cost per show is within the revenue it can plausibly earn at a few thousand paying users. If those hold, invest in the next stage; if not, stop. The plan's strength is a clear premium position; its weakness is large fixed content costs before any evidence."

#### IQ-C11-06 · Hard · critique · PS

**Prompt.** You critique a checkout page and name its biggest issue. The interviewer says: "I don't think that's the most important issue." What do you do?

**Rubric.**
- **Baseline:** Defends it stubbornly, or abandons it at once.
- **Strong:** Restates the ranking criteria and evidence, listens, and revises if the interviewer's point is better.
- **Standout:** Separates the question of importance from the question of evidence, offers a way to settle it (a quick check), shows willingness to change the ranking without losing the structure, and stays collegial.

**Model answer.** I'd treat it as a request to show my reasoning, not as a verdict. "That's a fair challenge. I ranked it first on three criteria: how bad it is when it happens, how many people reach it, and how fixable it is. The checkout page's biggest leak, as I saw it, is the hidden shipping cost at the last step, which I rated severity 4, reach high, because it affects everyone who gets that far and it comes as a surprise at the moment of payment."

*Then ask.* "Which issue would you rank first, and why? If you think the payment-method options matter more, that depends on how many people fail there. Do you have a sense of the numbers, or should I say how I'd find out?"

*Settle it with evidence.* "The way to decide is the funnel: where do people leave the checkout, and what do recordings show at that step? If most leave at payment, I'd re-rank. If most leave when the shipping total appears, the ranking stands." I'd then say both versions of the recommendation in one sentence each.

*Change my mind when warranted.* If the interviewer's point is better (for example, a trust problem at payment that affects fewer people but blocks purchase), I'd say so plainly: "That's a good point; on severity it outweighs reach, so I'd move it up, and here is how that changes the recommendation." Changing the ranking in response to a better argument is a strength, provided the structure stays.

*What I'd avoid.* Digging in because I said it first, or dropping my view with no reason because someone pushed. The goal is the best answer, and the criteria are what let us argue about it.

**Follow-ups.**

- **Q.** How do you separate the question of importance from the question of evidence? **A.** "Importance is a ranking judgment based on criteria, and evidence is what supports each criterion. I would restate my criteria (severity, reach, fixability), show the evidence for each rating, and ask which criterion the interviewer sees differently. If they think another issue matters more, I would ask what evidence supports that, and say what a quick check could be, such as the funnel drop at each step or a five-person test. That turns a disagreement of opinion into a question that data can answer."
- **Q.** How do you stay collegial while keeping your structure? **A.** "By being willing to change the ranking and not the method. I would say, That is a fair challenge; if reach is higher on that issue than I assumed, it would move up, and I would explain how my ranking would change. I would keep the same structure (criteria, evidence, ranking) and update the numbers. Changing a conclusion because of a good argument is a strength; abandoning the structure under pressure is not. I would thank the interviewer for the challenge, which usually leaves the conversation better."

#### IQ-C11-07 · Hard · critique · PS

**Prompt.** Your team wants to learn from a competitor's product to inform the roadmap. How do you critique it without copying it, and how do you avoid claiming things you can't know?

**Rubric.**
- **Baseline:** "List their features and build the ones we lack."
- **Strong:** Critiques the competitor against its purpose and users, and separates what to learn from what to copy.
- **Standout:** Uses labeling discipline (observation, inference, opinion; Verified, Reconstructed), asks why they made each choice, tests whether it fits your users, and respects legal and ethical limits on how information was obtained.

**Model answer.** I'd start by being clear on what the teardown is for: to understand what job the competitor does well, where it falls short, and what that implies for our users, not to build a feature list.

*Method.* Apply the critique spine to the competitor: purpose and users (who they serve), flow (walk their main journey as a customer), strengths (what we should respect), ranked issues (where they fall short for a segment we might serve better). Add the strategic lens: how they make money, how they reach users, what protects them.

*Learn versus copy.* For each strength, ask why it works there: their users, their brand, their data, their constraints. A feature that works for them may not fit our segment or capability (the outsider's blind spot, and the steelman). Copy only what solves a problem that we have confirmed our users have; otherwise we import their solution to a problem we do not have.

*Labeling.* I'd write the findings in three columns: *observation* (what we saw using it, with screenshots), *inference* (what we think it means, such as "they probably prioritize speed over detail"), and *opinion* (what we prefer). For anything about their business (pricing, subscriber counts, strategy) I'd use public sources and label each as Verified (a filing or announcement), Reconstructed (inferred from public data, with the inference stated) or unknown. I'd not state their internal metrics as fact.

*Limits.* Use only public information and our own use of the product as a customer. Do not use confidential documents, and do not misrepresent who we are to obtain information; check with legal if unsure.

*Output.* A short memo with ranked opportunities framed as problems for our users, each with a hypothesis and a cheap test (C14). What would change my plan: if testing shows our users do not have the problem the competitor solves, we do not build it, however well it works for them.

**Follow-ups.**

- **Q.** How do you critique a competitor without copying it? **A.** "I use the critique spine to learn what job they do well and for whom, then ask why they made each choice and whether the reason holds for our users. A feature that works for their segment may fail for ours. I write the output as implications for our users (what we should respect, what we should avoid, what is unserved) and not as a feature list. Before adopting any idea, I test it with our users and our data. The learning is the reasoning, and copying the surface skips the reasoning."
- **Q.** What are the limits on how you gather information about a competitor? **A.** "Public and legitimate sources only: using the product as a customer, reading public documentation, filings, and press, and talking with customers openly. I would not use confidential information from former employees of the competitor, access accounts or systems without authorization, or use deceptive methods. If someone offers confidential material, I would decline and tell legal. I would label what I observe, infer and cannot verify, and I would not claim knowledge of the competitor's internal metrics or plans."

## 12. Exercises

Ten exercises. Each has a model solution and an alternative. Figures are assumptions unless marked, and the arithmetic was computed.

#### EX-C11-01 · Goal-first statements

**Problem.** Write a goal-first statement (FW-C11-02) for each: (a) a ride-hailing app, (b) a language-learning app, (c) a calendar app, (d) a smart thermostat, (e) a note-taking app.

**Context.** You have one sentence each in an interview.

**Data.** None.

**Constraints.** Five minutes.

**Expected approach.** The template: product exists to help segment do a job; for the company it earns, retains or grows; judge by how quickly and reliably the job is done.

**Solution.** (a) Exists to help riders get a safe, predictable trip with little waiting; for the company it earns commission and builds a two-sided network; judged by time to a confirmed ride and the share of trips that go as planned. (b) Helps adult learners build speaking confidence in a few minutes a day; retains and converts to paid; judged by weeks of consistent practice. (c) Helps busy people schedule without back-and-forth; retains through habit and integration; judged by time to schedule a meeting. (d) Helps a household stay comfortable at low energy cost without effort; sells hardware and services; judged by comfort and savings with no manual setting. (e) Helps people capture and find their thinking; retains through accumulated notes; judged by time to capture and to find.

**Alternative solution.** For (d), a hardware product may be judged by setup success first, since people who fail to install never get value.

**Tradeoffs.** A goal commits you; say it is an assumption and invite correction.

#### EX-C11-02 · Observation, inference, opinion

**Problem.** Label each part of this critique as observation (O), inference (I) or opinion (P): "When I open the app it takes six seconds to load. The team must care more about features than speed. I prefer a simpler home screen. Many users probably leave because of the wait."

**Context.** A candidate's critique.

**Data.** As above.

**Constraints.** Three minutes.

**Expected approach.** FW-C11-06.

**Solution.** "It takes six seconds to load": O, if timed (say how many times and on what device). "The team must care more about features than speed": I, and a risky one; it claims knowledge of intent; rewrite as "this suggests speed was not prioritized, which I'd check." "I prefer a simpler home screen": P. "Many users probably leave because of the wait": I, a hypothesis that analytics can check (load time against abandonment).

**Alternative solution.** Rewrite the paragraph with the labels in the words ("I timed it at six seconds; I guess...; I'd like...").

**Tradeoffs.** Labels add words; they make the argument defensible.

#### EX-C11-03 · Rank the issues

**Problem.** Rank these issues for a bill-splitting app, using impact = severity × reach (each 1 to 5), with fixability (5 easy) as a tie-breaker. Flag any that are requirements. (a) Rounding errors in uneven splits: S4, R3, F4. (b) No way to add an expense after a trip is closed: S3, R4, F4. (c) Colors in the debt summary rely on red and green alone: S4, R2, F5. (d) The app's icon looks dated: S1, R5, F5. (e) Payment-link failures that lose a transfer: S5, R2, F2.

**Context.** A critique with five issues.

**Data.** As above.

**Constraints.** Five minutes.

**Expected approach.** FW-C11-03.

**Solution.** Impact: (a) 12, (b) 12, (c) 8, (d) 5, (e) 10. Order by impact: (a) and (b) tie at 12; fixability is 4 for both, so tie on both; I'd put (a) first because errors involve money and trust. Then (e) 10, (c) 8, (d) 5. Flags: (c) is an accessibility barrier (color alone) and a requirement; (e) involves money lost, a trust and safety matter; both go on the fix list regardless of score, and (e), despite low fixability, needs an owner now. The icon is last.

**Alternative solution.** Treat (e) as top priority because the harm is a financial loss, even though only a few are affected.

**Tradeoffs.** Scores are judgments; harm to money, safety and access outranks reach.

#### EX-C11-04 · Name the strengths

**Problem.** Name two strengths of a product you use daily, say why each matters for its goal, and say what a change must not break.

**Context.** Credibility in a critique comes from knowing what works.

**Data.** Your own use.

**Constraints.** Four minutes.

**Expected approach.** Step 4 of the spine.

**Solution.** An example for a maps app: (1) the destination search tolerates typos and partial names, which matters because people type on the move; a change must not make search stricter. (2) The estimated arrival time updates as conditions change, which builds trust; a change must not hide the update or make it less frequent. Each strength is tied to the goal (arrive without surprise) and states a protection.

**Alternative solution.** Choose a strength that is invisible when working (speed), and say how you would notice losing it.

**Tradeoffs.** Spending time on strengths shortens the issues section; two are enough.

#### EX-C11-05 · From issue to problem statement and metric

**Problem.** Turn each issue into a problem statement (no solution in it), a move (fix, add, remove, reposition) and a metric with a guardrail: (a) "The signup form is too long." (b) "Notifications are annoying." (c) "Search is bad."

**Context.** The bridge in FW-C11-05.

**Data.** None.

**Constraints.** Six minutes.

**Expected approach.** Issue, problem, move, risk, metric.

**Solution.** (a) Problem: "First-time visitors who start sign-up leave before finishing, because they are asked for details they do not see the need for yet." Move: remove fields, add reasons. Metric: completion of sign-up to a verified account; guardrail: verification failures. (b) Problem: "Users who get several notifications a day mute or disable them, and then miss the ones that matter." Move: fix (batch and let users choose categories). Metric: the share of users who keep notifications enabled after 30 days; guardrail: key actions that depend on notifications. (c) Problem: "Users searching for a specific item often cannot find it, and abandon after one or two tries." Move: fix (tolerant matching, better ranking). Metric: search success (a result opened and acted on); guardrail: search latency.

**Alternative solution.** For (b), a remove (turn off the lowest-value notification type) may be the cheapest test.

**Tradeoffs.** Each metric is a proxy; say what it would miss.

#### EX-C11-06 · A strategic critique with numbers

**Problem.** A marketplace charges buyers a $4 delivery fee and takes a 15% commission on $40 average orders. Handling and delivery cost $9 per order. Acquiring a customer costs $60 and customers order 1.5 times a month. Compute the contribution per order and per month, payback, and lifetime contribution with 10% monthly churn. Then say which assumption you would test.

**Context.** A strategic lens on a delivery marketplace.

**Data.** As above.

**Constraints.** Seven minutes.

**Expected approach.** FW-C11-04, with the arithmetic of C09.5.

**Solution.** Revenue per order: $4 fee + 15% × $40 = $4 + $6 = $10. Contribution per order: $10 − $9 = $1. Per month: 1.5 × $1 = $1.50. Payback: $60 ÷ $1.50 = 40 months. With 10% monthly churn the lifetime is 10 months and lifetime contribution is $15, a quarter of the acquisition cost: the model loses money on each customer. The assumption to test is the handling and delivery cost per order (small changes swing the contribution) and the order frequency; at $5 handling, contribution per order is $5, per month $7.50, payback 8 months, lifetime $75, a ratio of 1.25.

**Alternative solution.** Test whether customers will pay a higher fee or order larger baskets, which raise revenue per order.

**Tradeoffs.** The business is highly sensitive to cost per order, so the product work (batching, density) matters as much as the interface.

#### EX-C11-07 · The favorite-product answer

**Problem.** Write and say aloud a two-minute answer to "What is your favorite product, and what would you change?" using FW-C11-07, for a product you actually use.

**Context.** A warm-up question in a loop.

**Data.** Your own use.

**Constraints.** Two minutes, recorded.

**Expected approach.** Job, why it wins, one change with evidence, metric and risk, tradeoff.

**Solution.** An outline: "My favorite is [product]. The job I hire it for is [job]. It beats the alternatives because [observation from use]. The one thing I'd change: [issue, with an example from my use, and who else feels it, as a guess]. I'd [move], measure [metric] with [guardrail], and the risk is [risk]. The tradeoff is [what the change costs]." Check: under two minutes, one change, a tradeoff, no claims about internal decisions.

**Alternative solution.** Pick a less obvious product (a tool, an appliance) to avoid clichés.

**Tradeoffs.** A modest change is easier to defend than a redesign.

#### EX-C11-08 · Critique a device's first run

**Problem.** List the first-run steps of a smart speaker (unbox, plug in, connect to Wi-Fi, set up the voice assistant, first request). For each step, name one likely issue, using the state map (empty, error, offline, permission) and one accessibility check.

**Context.** A device-and-software critique.

**Data.** None.

**Constraints.** Eight minutes.

**Expected approach.** C10's state map and accessibility pass, applied to a device.

**Solution.** Unbox: the instructions are a small leaflet in many languages (accessibility: no spoken or large-text guidance). Plug in: the light pattern is unexplained (empty state: what does "ready" look like?). Connect to Wi-Fi: wrong password gives only a tone (error: no explanation or retry guidance); a weak network is the offline case. Voice assistant setup: microphone and account permissions (permission denied: what if the user declines?). First request: no response when the assistant misheard (error), and no way to know it is listening (visibility of status). Across all: hardware behaviors that cannot be changed after shipping, and the app companion, which can.

**Alternative solution.** Add the second-user case (a household member who was not part of setup).

**Tradeoffs.** A device cannot be patched like an app; the critique should say which fixes are possible after shipping.

#### EX-C11-09 · Label the claims

**Problem.** Label each claim about a real streaming company as Verified, Reconstructed, or unsupported, and rewrite any unsupported one: (a) "It launched in 2007 and began streaming in 2007." (b) "Their churn is about 2% a month." (c) "They obviously designed the profiles feature to reduce password sharing." (d) "The company has publicly described using experiments to test changes to its homepage."

**Context.** Labeling discipline for teardown claims (FW-C11-06).

**Data.** None; the point is the labeling.

**Constraints.** Five minutes.

**Expected approach.** Name the source type for facts; label inference; avoid claims about internal numbers and intent.

**Solution.** (a) A date claim: Verified only if you can cite a source; check and cite (company history or filings). (b) An internal metric: unsupported unless the company has published it; rewrite as "I'd want to know churn, which I can't see; publicly reported figures, if any, should be cited with their source." (c) A claim about intent: unsupported; rewrite as "One possible reason for profiles is to give each household member their own recommendations; whether it was also meant to affect sharing, I can't know." (d) A statement about public communications: Verified if you can point to the company's technical blog or talks; cite them.

**Alternative solution.** Add `[as of 2026-10]` to any date or feature that may change.

**Tradeoffs.** Careful labeling can feel slow in a spoken answer; a short phrase is enough.

#### EX-C11-10 · A timed 15-minute critique

**Problem.** Give a 15-minute critique of a product you did not choose in advance (ask a partner to name one: a banking app, a fitness tracker, a ride-hailing app).

**Context.** Self-scored; record yourself.

**Data.** Your own use or public knowledge; label what you do not know.

**Constraints.** Use the 20-minute budget in section 4, compressed.

**Expected approach.** The full spine (FW-C11-01), scored against the six behaviors in section 1.

**Solution.** An outline of a strong answer. Goal-first statement and the segment (two minutes). The key flow walked step by step, with one observation per step (four minutes). Two strengths and why (one minute). Three ranked issues with severity, reach and the reason for the top one (four minutes). One recommendation with the bridge: problem, move, risk, metric and guardrail, and the cheapest test (three minutes). A two-sentence close with labels on what you observed, inferred and prefer (one minute).

**Alternative solution.** If a partner names a product you do not use, say so, critique from public information and label it accordingly.

**Tradeoffs.** Depth on one issue beats breadth across many.

## 13. Practice protocol

**Timed drills (three a week for three weeks).**

- *Week 1: goal, flow and strengths.* Use IQ-C11-02, EX-C11-01, EX-C11-02 and EX-C11-04. Say the goal-first statement aloud and walk a real flow, labeling observation, inference and opinion.
- *Week 2: rank and recommend.* Use IQ-C11-03, IQ-C11-04, EX-C11-03 and EX-C11-05. Build the ranking grid and the bridge for two products, and say why the top issue is the top.
- *Week 3: strategy and pushback.* Use IQ-C11-05, IQ-C11-06, IQ-C11-07, EX-C11-06, EX-C11-07 and EX-C11-10. Add the strategic layer, rehearse changing your ranking in response to a better argument, and run a timed 15-minute critique.

**With a partner.** Ask your partner to interrupt with "Who is this for?", "How do you know?" and "I don't think that's the biggest issue." Practice answering each in under 30 seconds and returning to the spine.

**Critique what you use.** Each day for a week, spend ten minutes critiquing one product you used, with the spine. Keep the one-sentence goal and the top issue for each in a log.

**Feedback checklist (yes, partly, no).**

1. Did I state a goal and a user before judging?
2. Did I walk a specific flow, including the first run?
3. Did I name strengths and what to protect?
4. Did I rank issues with evidence and justify the top?
5. Did my recommendation follow from the issue, with a metric, a guardrail and a risk?
6. Did I separate observation, inference and opinion, and avoid inside claims?
7. Did I add the strategic layer where it mattered?
8. Did I handle pushback by returning to the criteria?
9. Did I finish with the two-sentence close from section 4?

**Answer journal.** For each drill record the date, the product, the goal statement, the top issue, the recommendation, your score out of ten and the step you rushed.

## 14. Implementation playbook

Apply the chapter on real work over the next two weeks. Each deliverable doubles as an interview story.

**Days 1 to 3.** Write the goal-first statement for your own product and show it to two colleagues from different functions. Note where they disagree: that is where the team's understanding of the product's purpose differs.

**Week 1.** Do a fresh-eyes critique of your product's first-run experience: walk it as a new user, labeling observations, and rank the issues with the grid. Share it with the designer and the PM for that area and ask which are known and which are new.

**Week 1.** Choose one competitor and write a short teardown using the spine and the strategic lens, with every claim labeled. Include a section on what to learn and what not to copy.

**Week 2.** Take the top issue from your critique and run the bridge: problem statement, move, risk, metric and cheapest test. Propose it to your team in one page.

**Week 2.** Practice the favorite-product answer aloud on a colleague, and ask whether the change you named is one they would defend.

**Deliverables that become stories:** the goal-first statement and fresh-eyes critique (a time you saw your product clearly and ranked its problems), the competitor teardown with labeled claims (a time you learned from a rival without copying), and the one-page bridge (a time you turned a critique into a proposal). Keep the numbers real, and keep what you did separate from what the team did.

## 15. Key takeaways and further reading

### Key takeaways

1. A critique is a structured judgment against a stated goal: purpose, users, flow, strengths, ranked issues, recommendations and metrics, in that order.
2. Rank issues by severity, reach and fixability with a reason for the top one, and let accessibility and safety problems override the score.
3. Add the strategic layer (business model, distribution, defensibility, timing) to explain why a product is where it is, and name the assumption it depends on.
4. Turn the top issue into a problem statement, a move, a risk, a metric and a cheap test; a list of problems or a wish list of features is half an answer.
5. Separate observation, inference and opinion, label facts about real companies as Verified or Reconstructed, and claim no inside knowledge.

### Further reading

- Don Norman, *The Design of Everyday Things* (revised edition, 2013), and Steve Krug, *Don't Make Me Think* (revised edition, 2014). The vocabulary and habits behind a good flow critique.
- Michael E. Porter, "What Is Strategy?" *Harvard Business Review* 74(6), November to December 1996, pp. 61 to 78. A classic account of competitive position `[V: HBR 74(6), November to December 1996, pp. 61 to 78]`.
- Hamilton Helmer, *7 Powers: The Foundations of Business Strategy* (2016). Sources of defensibility `[V: Deep Strategy, 25 October 2016, ISBN 9780998116310]`.
- A. G. Lafley and Roger L. Martin, *Playing to Win* (2013). A practical strategy framework `[V: Harvard Business Review Press, 5 February 2013, ISBN 9781422187395]`.
- Clayton M. Christensen and others, *Competing Against Luck* (2016). The jobs-to-be-done lens used in the goal-first statement (cited in C06).
- Tali Arbel, Associated Press, "Short-video app Quibi shutting down just months after launch" (21 October 2020), and CNBC's report of the shutdown with the founders' joint letter; Variety's reports on Quibi's TV apps (October 2020) and shutdown (December 2020). The sources for CS-C11-02.
