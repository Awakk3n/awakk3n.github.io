# 04 — Glossary

Generated from `tools/state.json`. Date reference: 2026-10. Index version: v1.2.

**236 terms** (0 seeded in Phase 3, 236 added while writing chapters). Terms are added when a chapter defines something new, per the definition protocol.

**Rules**

- A term is defined **once**, here, and in its owning chapter. Other chapters may link to it with `[[term-slug]]` but are not required to, and may extend the idea but never redefine it; a chapter that uses a glossary term without a link relies on this definition.
- Each entry has a one-sentence definition, one example, one non-example and an owning chapter.
- If a definition must change, change it here first, then add every affected chapter to the revision queue in `05_tracker.md`.
- Definitions are general. Examples about real companies are not used in this glossary; chapters may add labeled examples.

**Term index by owning chapter**

- **C01** The APM Role and How This Book Works: [[decision-rights]], [[product-triad]], [[rotational-program]]
- **C02** Product Thinking and Decision Foundations: [[product-thinking]], [[first-principles-reasoning]], [[tradeoff]], [[reversible-decision]], [[cost-of-delay]], [[pre-mortem]], [[second-order-effect]], [[inversion]], [[local-optimum]], [[sunk-cost]]
- **C03** Structured Problem Solving: MECE, Issue Trees, Hypotheses: [[mece]], [[issue-tree]], [[hypothesis]], [[root-cause]], [[framework-theater]], [[five-whys]], [[symptom]], [[pareto-principle]]
- **C04** Estimation Under Pressure: [[estimation]], [[sanity-check]], [[anchor]], [[order-of-magnitude]], [[sensitivity-analysis]]
- **C05** Metrics: Choosing, Defining and Reading Them: [[metric]], [[north-star-metric]], [[input-metric]], [[guardrail-metric]], [[counter-metric]], [[funnel]], [[activation]], [[retention]], [[cohort]], [[leading-indicator]], [[lagging-indicator]], [[proxy-metric]], [[metric-tree]], [[goodharts-law]], [[churn]], [[conversion-rate]], [[instrumentation]], [[daily-and-monthly-active-users]]
- **C06** Users, Problems and Discovery: [[problem-statement]], [[jobs-to-be-done]], [[user-segment]], [[say-do-gap]], [[persona]]
- **C07** Product Design: Designing for a User: [[product-sense]], [[pain-point]]
- **C08** Improving an Existing Product: [[headroom]], [[legacy-user]], [[cannibalization]]
- **C09** New Markets and Underserved Users: [[localization]], [[underserved-user]], [[trust-signal]]
- **C10** UX and Product Quality: [[usability-heuristic]], [[information-architecture]], [[accessibility]], [[cognitive-load]], [[nudge]], [[dark-pattern]]
- **C11** Product Critique and Teardown Method: [[teardown]], [[first-run-experience]]
- **C12** Statistics for PMs: [[statistical-power]], [[p-value]], [[confidence-interval]], [[practical-significance]], [[base-rate]], [[simpsons-paradox]], [[percentile]], [[effect-size]], [[standard-error]], [[regression-to-the-mean]], [[multiple-comparisons]], [[survivorship-bias]]
- **C13** Diagnosing a Metric Change: [[metric-diagnosis]], [[mix-shift]], [[baseline]], [[seasonality]], [[pull-forward]], [[grain]], [[sql]]
- **C14** Experiment Design and Causal Reasoning: [[experiment]], [[randomization]], [[causal-effect]], [[counterfactual]], [[confounder]], [[minimum-detectable-effect]], [[sample-ratio-mismatch]], [[interference]], [[novelty-effect]], [[holdout]], [[peeking]], [[difference-in-differences]], [[a-b-test]]
- **C15** Prioritization and Tradeoffs: [[assumption]], [[prioritization]], [[mvp]], [[opportunity-cost]], [[scope-creep]], [[time-box]]
- **C16** Specs, Engineering and Design Partnership: [[prd]], [[non-goal]], [[user-story]], [[acceptance-criteria]], [[definition-of-done]], [[technical-debt]], [[sprint]], [[backlog]]
- **C17** Launch, Rollout and Execution Decisions: [[feature-flag]], [[staged-rollout]], [[rollback]], [[canary-release]], [[blast-radius]], [[rollback-trigger]], [[postmortem]]
- **C18** Strategy at APM Depth: [[strategy]], [[positioning]], [[moat]], [[network-effect]], [[unit-economics]], [[total-addressable-market]], [[switching-cost]], [[contribution-margin]], [[okr]], [[roadmap]]
- **C19** Platforms and Ecosystems: [[platform]], [[two-sided-market]], [[cold-start-problem]], [[multi-homing]], [[take-rate]], [[disintermediation]], [[developer-experience]]
- **C20** Go-to-Market, Pricing and Growth Basics: [[go-to-market]], [[willingness-to-pay]], [[packaging]], [[value-metric]], [[growth-loop]], [[customer-acquisition-cost]], [[lifetime-value]], [[payback-period]], [[product-led-growth]]
- **C21** How Products Work: Technical Fluency: [[api]], [[latency]], [[idempotency]], [[schema]], [[data-pipeline]], [[cache]], [[message-queue]], [[throughput]], [[service-level-objective]], [[database-index]], [[on-device-processing]], [[availability]]
- **C22** PM-Level System Design: [[graceful-degradation]], [[fan-out]], [[abuse-case]], [[webhook]], [[rate-limiting]], [[eventual-consistency]]
- **C23** Machine Learning, Ranking and Recommendation for PMs: [[recommender-system]], [[precision-recall]], [[model]], [[training-data]], [[label]], [[overfitting]], [[threshold]], [[ranking]], [[candidate-generation]], [[position-bias]], [[feedback-loop]], [[popularity-bias]], [[exploration]], [[offline-evaluation]], [[embedding]]
- **C24** AI Product Management: Foundations: [[llm]], [[hallucination]], [[rag]], [[agent]], [[token]], [[context-window]], [[prompt]], [[fine-tuning]], [[grounding]], [[prompt-injection]], [[human-in-the-loop]]
- **C25** AI Product Management: Building, Evaluating and Governing: [[eval]], [[red-teaming]], [[guardrail]], [[model-graded-eval]], [[inter-rater-agreement]], [[drift]], [[shadow-mode]], [[regression-test]], [[risk-tier]], [[model-card]]
- **C26** 0→1 and Idea Evaluation: [[riskiest-assumption]], [[smoke-test]], [[concierge-test]], [[product-market-fit]], [[pivot]], [[kill-criteria]]
- **C27** Domain Primers: [[liquidity]], [[sales-cycle]], [[net-revenue-retention]], [[chargeback]], [[know-your-customer]], [[trust-and-safety]], [[prevalence]], [[ad-auction]], [[internal-platform]]
- **C29** Anti-Patterns: [[anti-pattern]], [[vanity-metric]], [[feature-factory]], [[hippo]]
- **C31** Behavioral Interviews: Stories That Hold Up: [[story-bank]], [[signal]]
- **C32** Communication and Influence at APM Level: [[bluf]], [[pyramid-principle]], [[stakeholder]], [[decision-document]], [[escalation]], [[influence-without-authority]]
- **C33** Interview Loops and Company Lenses: [[interview-loop]], [[hiring-committee]], [[bar-raiser]], [[company-brief]]
- **C34** Mock Interviews, Scoring and Calibration: [[mock-interview]], [[scorecard]], [[calibration]], [[deliberate-practice]], [[error-log]]
- **C37** The 12-Month Plan, Readiness Checklist and Your First 90 Days: [[reading-map]], [[readiness-gate]]

---

## Entries (alphabetical by slug)

### `[[a-b-test]]` — A/B test

- **Definition:** An experiment in which users are randomly assigned to the current version (A) or a changed version (B) and the same metric is compared between the two groups.
- **Example:** Half of new visitors see the current checkout and half see the new one; the share who buy is compared.
- **Non-example:** Comparing sign-ups before and after a launch.
- **Owning chapter:** C14
- **Status:** defined

### `[[abuse-case]]` — abuse case

- **Definition:** A way a system could be used to harm someone, analyzed like a requirement: who might misuse it, how, the harm, and the control that reduces it.
- **Example:** A small tracker slipped into a bag to follow a person, with an alert to the person being followed as the control.
- **Non-example:** An ordinary bug that affects only the person who triggered it.
- **Owning chapter:** C22
- **Status:** defined

### `[[acceptance-criteria]]` — acceptance criteria

- **Definition:** The specific, testable conditions a story must meet to count as done, often written as given a situation, when an action, then an observable result.
- **Example:** Given a list shared as view only, when a visitor opens the link, then they see the items and cannot change them.
- **Non-example:** 'It should work well.'
- **Owning chapter:** C16
- **Status:** defined

### `[[accessibility]]` — accessibility

- **Definition:** The degree to which a product can be used by people with the widest range of abilities, including through assistive technology.
- **Example:** Labels that a screen reader can speak, text with enough contrast and controls operable by keyboard or voice.
- **Non-example:** An accessibility statement on a website with no accessible controls.
- **Owning chapter:** C10
- **Status:** defined

### `[[activation]]` — activation

- **Definition:** The point at which a new user first experiences the product's core value, defined by an observable action.
- **Example:** Sending a first message to a teammate.
- **Non-example:** Creating an account.
- **Owning chapter:** C05
- **Status:** defined

### `[[ad-auction]]` — ad auction

- **Definition:** The mechanism by which an advertising platform decides, each time a slot is available, which ad to show and at what price, typically ranking advertisers by their bid combined with the predicted chance the user responds and charging the winner the minimum needed to keep its position.
- **Example:** A $2.00 bid with a 1.0% predicted click rate beats a $3.00 bid with 0.5% and pays $1.80 a click.
- **Non-example:** Showing the ad with the highest bid and charging that bid.
- **Owning chapter:** C27
- **Status:** defined

### `[[agent]]` — agent

- **Definition:** A system that uses a model to plan and take actions through tools in pursuit of a goal.
- **Example:** An assistant that reads a calendar, proposes times, and sends invitations.
- **Non-example:** A model that answers one question and stops.
- **Owning chapter:** C24
- **Status:** defined

### `[[anchor]]` — anchor

- **Definition:** A well-known quantity used as the starting point for an estimate.
- **Example:** The number of seconds in a day, or the population of a country.
- **Non-example:** A number guessed with no basis and presented as fact.
- **Owning chapter:** C04
- **Status:** defined

### `[[anti-pattern]]` — anti-pattern

- **Definition:** A common response to a recurring problem that looks sensible, is easy to adopt and reliably produces a worse result than the alternatives; the term names the response, not the person.
- **Example:** Judging a team by the number of features shipped instead of the outcomes they change.
- **Non-example:** A one-off mistake with no recurring cause.
- **Owning chapter:** C29
- **Status:** defined

### `[[api]]` — API

- **Definition:** A defined way for one piece of software to request data or actions from another.
- **Example:** A weather service returning a forecast when sent a city name.
- **Non-example:** A website's visual design.
- **Owning chapter:** C21
- **Status:** defined

### `[[assumption]]` — assumption

- **Definition:** A belief a plan depends on that has not yet been verified.
- **Example:** "Users will pay for faster delivery."
- **Non-example:** A verified measurement.
- **Owning chapter:** C15
- **Status:** defined

### `[[availability]]` — availability

- **Definition:** The share of time a service works as intended, usually stated in nines; availabilities of services in a chain multiply.
- **Example:** 99.9% availability allows about 43.8 minutes of downtime in a month.
- **Non-example:** The speed of a single response.
- **Owning chapter:** C21
- **Status:** defined

### `[[backlog]]` — backlog

- **Definition:** The single list of work a team could do next, ranked by the product manager against the goal.
- **Example:** A list of 40 items in priority order whose top ten are clear, estimated and testable.
- **Non-example:** A pile of unranked requests from many people.
- **Owning chapter:** C16
- **Status:** defined

### `[[bar-raiser]]` — bar raiser

- **Definition:** An interviewer from outside the hiring team, trained to hold a consistent hiring standard across teams, who in some processes can block a hire the team wants (as candidates report for one company).
- **Example:** An outside interviewer in the loop who probes stories for detail and writes a separate assessment.
- **Non-example:** The hiring manager of the team that is recruiting.
- **Owning chapter:** C33
- **Status:** defined

### `[[base-rate]]` — base rate

- **Definition:** How common something is in the population before any new evidence is considered.
- **Example:** If 1 in 1,000 accounts is fraudulent, a flag must be judged against that rate.
- **Non-example:** The accuracy of the detection model.
- **Owning chapter:** C12
- **Status:** defined

### `[[baseline]]` — baseline

- **Definition:** The value a metric would be expected to take without the event under investigation, estimated from recent history and the same period in earlier cycles.
- **Example:** This Tuesday's orders compared with the average of recent Tuesdays and with the same holiday week last year.
- **Non-example:** Yesterday's value, which carries the day-of-week effect and one day's noise.
- **Owning chapter:** C13
- **Status:** defined

### `[[blast-radius]]` — blast radius

- **Definition:** How many users or systems a failure would affect.
- **Example:** A bug behind a flag at 1% exposure affects 10,000 of a million users; the same bug at 100% affects all of them.
- **Non-example:** The probability that a failure occurs.
- **Owning chapter:** C17
- **Status:** defined

### `[[bluf]]` — bottom line up front

- **Definition:** The practice of stating the conclusion or request first and the supporting detail after it.
- **Example:** I recommend we delay the launch one week because the checkout bug affects 3% of orders; I need your approval by Thursday.
- **Non-example:** Two minutes of background before the point.
- **Owning chapter:** C32
- **Status:** defined

### `[[cache]]` — cache

- **Definition:** A stored copy of data kept close to where it is needed so it can be served faster than recomputing or refetching it, at the cost of possible staleness.
- **Example:** Product details served from memory for a few minutes instead of querying the database each time.
- **Non-example:** The system of record that holds the authoritative data.
- **Owning chapter:** C21
- **Status:** defined

### `[[calibration]]` — calibration

- **Definition:** The alignment of your self-assessment with outside judgment, measured as bias (mean of your score minus the outside score) and error (mean absolute difference).
- **Example:** A candidate whose self-scores run 0.75 points above a partner's over eight mocks and who corrects for it.
- **Non-example:** Feeling confident that you are ready.
- **Owning chapter:** C34
- **Status:** defined

### `[[canary-release]]` — canary release

- **Definition:** A first release of a change to a small subset of users or servers that acts as an early warning before wider exposure.
- **Example:** Showing the rewritten account page to 1% of users for a business day while watching errors.
- **Non-example:** A release to all users with monitoring added afterward.
- **Owning chapter:** C17
- **Status:** defined

### `[[candidate-generation]]` — candidate generation

- **Definition:** The cheap first stage of a recommender or search system that narrows a huge catalog to a manageable set of plausible items for the heavier ranking stage.
- **Example:** Narrowing 100 million videos to about 1,000 candidates using similarity, follows and trending.
- **Non-example:** The final ordering of the items shown.
- **Owning chapter:** C23
- **Status:** defined

### `[[cannibalization]]` — cannibalization

- **Definition:** When a new feature or offer takes away use or revenue from an existing one of the same company, so that gross gains overstate net gains.
- **Example:** A cheaper plan that mostly attracts existing full-price subscribers.
- **Non-example:** A new plan whose subscribers are all people who were not customers before.
- **Owning chapter:** C08
- **Status:** defined

### `[[causal-effect]]` — causal effect

- **Definition:** The difference in outcome caused by a change, compared with what would have happened without it.
- **Example:** The extra purchases that occurred because of the new recommendation module.
- **Non-example:** Purchases by users who used the module.
- **Owning chapter:** C14
- **Status:** defined

### `[[chargeback]]` — chargeback

- **Definition:** A reversal of a card payment forced by the cardholder's bank after a dispute, usually with a fee, and a main cost of fraud.
- **Example:** A $60 purchase reversed with a $15 fee.
- **Non-example:** A refund the merchant chooses to give.
- **Owning chapter:** C27
- **Status:** defined

### `[[churn]]` — churn

- **Definition:** The share of users or customers lost in a period, the complement of retention.
- **Example:** 4% of subscribers cancelling in a month.
- **Non-example:** The number of new subscribers added.
- **Owning chapter:** C05
- **Status:** defined

### `[[cognitive-load]]` — cognitive load

- **Definition:** The mental effort a task demands of working memory; interfaces that add unneeded effort slow people and cause errors.
- **Example:** A 22-toggle list with no grouping that makes people scan and remember.
- **Non-example:** A short, grouped list with clear labels.
- **Owning chapter:** C10
- **Status:** defined

### `[[cohort]]` — cohort

- **Definition:** A group of users who share a starting event or period, tracked together over time.
- **Example:** Everyone who signed up in March.
- **Non-example:** All users active today.
- **Owning chapter:** C05
- **Status:** defined

### `[[cold-start-problem]]` — cold-start problem

- **Definition:** The difficulty a platform faces when its value depends on participants who will not join until the platform is already valuable.
- **Example:** A marketplace where buyers will not come without sellers and sellers will not come without buyers.
- **Non-example:** A mature platform with steady demand and supply.
- **Owning chapter:** C19
- **Status:** defined

### `[[company-brief]]` — company brief

- **Definition:** A one-page summary of a company's products, users, strategy, metrics, competitors and recent moves, built from public sources, plus your own angle and questions, used to answer 'why us' and to ground product answers.
- **Example:** A page with the main products, how the company makes money, two competitors, the last three launches, one critique with an improvement and three questions.
- **Non-example:** A list of facts copied from the careers page with no view.
- **Owning chapter:** C33
- **Status:** defined

### `[[concierge-test]]` — concierge test

- **Definition:** A test in which the service is delivered manually to a few customers, with little or no software, to learn whether it is wanted, how it should work and what it costs.
- **Example:** Matching meal plans to 12 customers by hand for 12 weeks at $60 a week.
- **Non-example:** A fully automated product launched to everyone.
- **Owning chapter:** C26
- **Status:** defined

### `[[confidence-interval]]` — confidence interval

- **Definition:** A range of values consistent with the data at a stated confidence level, produced by a procedure that captures the true value at that rate over repeated samples.
- **Example:** A lift of 1.2% with a 95% interval from 0.4% to 2.0%.
- **Non-example:** A guarantee that the true value is inside this one range.
- **Owning chapter:** C12
- **Status:** defined

### `[[confounder]]` — confounder

- **Definition:** A factor linked to both a change and an outcome that makes the observed relationship misleading.
- **Example:** Heavy users adopt a feature and also retain better, so adoption appears to cause retention.
- **Non-example:** A random event affecting all users equally.
- **Owning chapter:** C14
- **Status:** defined

### `[[context-window]]` — context window

- **Definition:** The maximum amount of text, in tokens, that a model can consider at once, covering instructions, supplied documents, the conversation so far and the answer.
- **Example:** A document too long to fit in the window must be split or retrieved in parts.
- **Non-example:** The model's training data.
- **Owning chapter:** C24
- **Status:** defined

### `[[contribution-margin]]` — contribution margin

- **Definition:** Revenue minus the variable costs of a unit (cost of goods, delivery, payment fees, support), before fixed costs.
- **Example:** An $80 grocery order with $17.60 gross margin and $12 delivery cost contributes $5.60.
- **Non-example:** Net profit after allocated overhead.
- **Owning chapter:** C18
- **Status:** defined

### `[[conversion-rate]]` — conversion rate

- **Definition:** The share of a defined population that completes a defined action within a stated window.
- **Example:** First purchases divided by new visitors within seven days.
- **Non-example:** A bare statement that conversion is 3% with no population or window.
- **Owning chapter:** C05
- **Status:** defined

### `[[cost-of-delay]]` — cost of delay

- **Definition:** The value lost for each unit of time that a decision or release is postponed.
- **Example:** A fix that recovers 1% of weekly revenue loses that amount every week it waits.
- **Non-example:** The time a task takes to complete.
- **Owning chapter:** C02
- **Status:** defined

### `[[counter-metric]]` — counter metric

- **Definition:** A metric paired with a target specifically to expose the damage that optimizing the target could cause.
- **Example:** Support tickets per order, tracked beside order volume.
- **Non-example:** A second goal with its own target.
- **Owning chapter:** C05
- **Status:** defined

### `[[counterfactual]]` — counterfactual

- **Definition:** What would have happened to the same units if they had not received the change.
- **Example:** The retention of treated users had they never seen the feature.
- **Non-example:** The retention of a different, unrelated group.
- **Owning chapter:** C14
- **Status:** defined

### `[[customer-acquisition-cost]]` — customer acquisition cost

- **Definition:** The average cost to acquire one new customer: sales and marketing spend in a period divided by the new customers acquired in it. Abbreviated CAC.
- **Example:** $45 per new subscriber including salaries, tools and promotions.
- **Non-example:** Only the advertising spend divided by clicks.
- **Owning chapter:** C20
- **Status:** defined

### `[[daily-and-monthly-active-users]]` — daily and monthly active users

- **Definition:** The counts of distinct users who did a defined qualifying action on one day (DAU) or in a 30-day window (MAU); DAU divided by MAU shows how often monthly users come back.
- **Example:** 200,000 daily active users and 1,000,000 monthly active users: one in five monthly users shows up on a given day.
- **Non-example:** Total registered accounts, which includes people who never return.
- **Owning chapter:** C05
- **Status:** defined

### `[[dark-pattern]]` — dark pattern

- **Definition:** A user-interface design that tricks or pressures people into actions they did not intend, to the benefit of the business.
- **Example:** A subscription that takes one click to join and many steps across several screens to cancel.
- **Non-example:** A short retention step that offers a pause and keeps a one-click exit.
- **Owning chapter:** C10
- **Status:** defined

### `[[data-pipeline]]` — data pipeline

- **Definition:** A set of automated steps that moves data from where it is produced to where it is analyzed, collecting, cleaning, transforming and loading it, in batches or as a stream.
- **Example:** A nightly job that turns raw app events into the tables behind a dashboard.
- **Non-example:** A one-off spreadsheet export.
- **Owning chapter:** C21
- **Status:** defined

### `[[database-index]]` — database index

- **Definition:** A data structure that lets a database find rows by a column's value without scanning the whole table, at the cost of storage and some write time.
- **Example:** An index on category and city that turns a 2.1-second query into 12 milliseconds.
- **Non-example:** A full table scan.
- **Owning chapter:** C21
- **Status:** defined

### `[[decision-document]]` — decision document

- **Definition:** A short written proposal that frames a decision for the people who must make it: the decision needed and deadline, context, options, a recommendation with reasons, what would change it, risks and next steps.
- **Example:** A one-page memo asking for a choice of trial length by Friday with three options and a recommendation.
- **Non-example:** A slide deck that presents findings with no ask.
- **Owning chapter:** C32
- **Status:** defined

### `[[decision-rights]]` — decision rights

- **Definition:** The allocation of who makes which decisions on a team, and who must be consulted or informed; rarely written down, and unclear rights cause more conflict than disagreement about substance.
- **Example:** The PM decides what to build and why; engineering decides how; design decides the interaction.
- **Non-example:** A reporting line or job title.
- **Owning chapter:** C01
- **Status:** defined

### `[[definition-of-done]]` — definition of done

- **Definition:** The shared checklist a piece of work must meet before it counts as complete, such as code reviewed, tests passing, accessibility checked, instrumented and documented.
- **Example:** A story is done only when its acceptance tests pass, accessibility is checked and events are logged.
- **Non-example:** Done meaning 'the developer says it works.'
- **Owning chapter:** C16
- **Status:** defined

### `[[deliberate-practice]]` — deliberate practice

- **Definition:** A form of practice, described in the research on expertise, in which you work on a specific aspect of performance just beyond your current ability, with immediate feedback and repetition.
- **Example:** Ten metric-definition drills each checked against a success test and retested after three days.
- **Non-example:** Logging hours of unscored, unfocused practice.
- **Owning chapter:** C34
- **Status:** defined

### `[[developer-experience]]` — developer experience

- **Definition:** The sum of what it takes for a developer to discover, understand, integrate and succeed with a platform: documentation, examples, software kits, error messages, tooling, support and pricing.
- **Example:** A first working request within an hour, guided by clear errors and a quick start that runs as written.
- **Non-example:** A powerful API with outdated examples and errors that say only 'invalid request.'
- **Owning chapter:** C19
- **Status:** defined

### `[[difference-in-differences]]` — difference-in-differences

- **Definition:** An estimate of an effect as the change over time in a treated group minus the change over time in a comparison group, which removes shared trends under the assumption that the groups would have moved in parallel without the change.
- **Example:** Conversion up 1.5 points in the treated region and 0.6 points in a comparison region gives an estimated effect of 0.9 points.
- **Non-example:** The before-and-after change in the treated region alone.
- **Owning chapter:** C14
- **Status:** defined

### `[[disintermediation]]` — disintermediation

- **Definition:** Participants bypassing the platform to transact directly after being matched, which reduces the platform's revenue and data.
- **Example:** A customer and provider rebooking by phone after a first job found on a marketplace.
- **Non-example:** Two users who never found each other through the platform.
- **Owning chapter:** C19
- **Status:** defined

### `[[drift]]` — drift

- **Definition:** The change over time in inputs, user behavior or the world that makes a deployed model perform worse than when it was evaluated.
- **Example:** A support assistant's accuracy falling after the company changes its policies.
- **Non-example:** A one-time bug introduced by a release.
- **Owning chapter:** C25
- **Status:** defined

### `[[effect-size]]` — effect size

- **Definition:** The size of a difference or relationship, stated in units that can be compared with a decision threshold (absolute points, relative percent, or standardized units).
- **Example:** A lift of 0.1 percentage points, which is 2% relative, worth 10,000 purchases a month at the traffic in question.
- **Non-example:** A p-value, which says whether a difference can be told from zero and not how large it is.
- **Owning chapter:** C12
- **Status:** defined

### `[[embedding]]` — embedding

- **Definition:** A list of numbers that represents an item, user or word so that similar things lie close together, letting a system find similar items quickly.
- **Example:** Finding the 500 videos nearest to a viewer's recent watches.
- **Non-example:** A plain category label.
- **Owning chapter:** C23
- **Status:** defined

### `[[error-log]]` — error log

- **Definition:** A running list of the specific mistakes made in practice, each with its cause and the fix to apply, reviewed regularly so that recurring errors become the next drills.
- **Example:** Spent 20 minutes on users and 3 on metrics; fix: state a clock aloud; retest in 72 hours.
- **Non-example:** A vague note to manage time better.
- **Owning chapter:** C34
- **Status:** defined

### `[[escalation]]` — escalation

- **Definition:** Taking a problem or disagreement to someone with more authority to resolve it; used well it is a way to get a decision, not a way to win.
- **Example:** Raising a safety disagreement with the decision-maker openly, with the other person informed.
- **Non-example:** Going around a colleague without telling them to win an argument.
- **Owning chapter:** C32
- **Status:** defined

### `[[estimation]]` — estimation

- **Definition:** Producing a reasoned approximate number from stated assumptions and a decomposition of the quantity.
- **Example:** Estimating daily rides in a city from population, share who ride, and rides per rider.
- **Non-example:** Recalling a published statistic.
- **Owning chapter:** C04
- **Status:** defined

### `[[eval]]` — eval

- **Definition:** A repeatable test set and scoring method used to measure the quality of an AI system's output.
- **Example:** A set of 300 real support questions with reference answers and a grading rubric.
- **Non-example:** Trying a few prompts by hand and judging by feel.
- **Owning chapter:** C25
- **Status:** defined

### `[[eventual-consistency]]` — eventual consistency

- **Definition:** A property in which copies of data may differ for a short time but will agree if no new changes arrive.
- **Example:** A like count that is a few seconds behind on one device.
- **Non-example:** An account balance that must be the same everywhere at once.
- **Owning chapter:** C22
- **Status:** defined

### `[[experiment]]` — experiment

- **Definition:** A controlled test in which units are randomly assigned to variants so the effect of a change can be measured.
- **Example:** Half of users see the new checkout and half see the old.
- **Non-example:** Comparing this month's sales with last month's.
- **Owning chapter:** C14
- **Status:** defined

### `[[exploration]]` — exploration

- **Definition:** Deliberately showing items whose value the system is unsure of, to learn, at some cost to immediate engagement, as opposed to exploiting what it already believes is best.
- **Example:** Reserving 8% of home-screen slots for unfamiliar songs.
- **Non-example:** Always showing the highest-scoring items.
- **Owning chapter:** C23
- **Status:** defined

### `[[fan-out]]` — fan-out

- **Definition:** One action causing many deliveries or updates, such as one post reaching a million followers; the main cost driver in feeds and notifications (distinct from the join fan-out in a query).
- **Example:** A post written into the feed lists of 200 followers.
- **Non-example:** A one-to-one message.
- **Owning chapter:** C22
- **Status:** defined

### `[[feature-factory]]` — feature factory

- **Definition:** A team that is rewarded for shipping features rather than for the outcomes the features change; signalled by low outcome-metric coverage on the roadmap and few shipped items reviewed afterward.
- **Example:** Fourteen launches in a half-year with no one able to say which improved completion.
- **Non-example:** A team that ships quickly and reviews each launch against a target.
- **Owning chapter:** C29
- **Status:** defined

### `[[feature-flag]]` — feature flag

- **Definition:** A switch that turns functionality on or off for chosen users without shipping a new release.
- **Example:** Enabling a redesigned page for 5% of users.
- **Non-example:** A branch in version control.
- **Owning chapter:** C17
- **Status:** defined

### `[[feedback-loop]]` — feedback loop

- **Definition:** A cycle in which a system's outputs become its future inputs, so its own choices shape the data it learns from.
- **Example:** A recommender shows popular songs, which get played, which trains it to show them more.
- **Non-example:** A model trained once on data it did not influence.
- **Owning chapter:** C23
- **Status:** defined

### `[[fine-tuning]]` — fine-tuning

- **Definition:** Further training of a model on examples of the desired behavior so that it follows a style, format or task more reliably; it does not reliably add new facts.
- **Example:** Training a small model on 10,000 labeled support tickets to classify them.
- **Non-example:** Pasting a policy into the prompt.
- **Owning chapter:** C24
- **Status:** defined

### `[[first-principles-reasoning]]` — first-principles reasoning

- **Definition:** Breaking a problem into its basic facts and rebuilding the answer from them instead of copying an existing solution.
- **Example:** Pricing a delivery service by building up cost per order from courier time, fuel and platform overhead.
- **Non-example:** Copying a competitor's price list.
- **Owning chapter:** C02
- **Status:** defined

### `[[first-run-experience]]` — first-run experience

- **Definition:** What a person sees and does from first opening a product or device until they have reached their first real value, including setup, permissions and the first task.
- **Example:** Unboxing earbuds, pairing them, running a fit test and starting a first listening session.
- **Non-example:** The experience of a long-time user who already knows the product.
- **Owning chapter:** C11
- **Status:** defined

### `[[five-whys]]` — five whys

- **Definition:** A root-cause technique that asks why repeatedly, usually about five times, until it reaches a cause that can be acted on.
- **Example:** Tracing a missed notification run back to an expired credential and then to a missing ownership process.
- **Non-example:** Stopping at the first answer, or concluding that a person made a mistake.
- **Owning chapter:** C03
- **Status:** defined

### `[[framework-theater]]` — framework theater

- **Definition:** Naming or drawing a framework without using it to reach a conclusion.
- **Example:** Reciting a prioritization acronym and then ranking items by gut feel.
- **Non-example:** Scoring each option on stated criteria and choosing from the scores.
- **Owning chapter:** C03
- **Status:** defined

### `[[funnel]]` — funnel

- **Definition:** The ordered steps a user passes through to reach an outcome, with drop-off measured at each step.
- **Example:** Visit, sign up, add payment method, first purchase.
- **Non-example:** An unordered list of features and their usage.
- **Owning chapter:** C05
- **Status:** defined

### `[[go-to-market]]` — go-to-market

- **Definition:** The plan for how a product reaches its target customers and wins them: who the customer is, the problem and value proposition, positioning and message, price and packaging, channels, launch, and the metrics that show whether it is working.
- **Example:** A one-page plan for an expense-capture feature naming the target owners, the message, the in-product launch and the success measure.
- **Non-example:** A list of marketing tactics with no target or success measure.
- **Owning chapter:** C20
- **Status:** defined

### `[[goodharts-law]]` — Goodhart's law

- **Definition:** The observation that when a measure becomes a target it stops being a good measure, because effort shifts to the measure rather than the goal.
- **Example:** Teams raising notification volume to lift a daily-active count.
- **Non-example:** A metric rising because the product genuinely improved.
- **Owning chapter:** C05
- **Status:** defined

### `[[graceful-degradation]]` — graceful degradation

- **Definition:** A system's ability to keep providing a reduced but useful service when a part fails, instead of failing completely.
- **Example:** A product page that loads without recommendations when the recommendation service is down.
- **Non-example:** A blank page or an endless spinner when one dependency fails.
- **Owning chapter:** C22
- **Status:** defined

### `[[grain]]` — grain

- **Definition:** What one row of a table, or of a query result, represents: one row per user, per event, per order or per user per day; most wrong counts come from not knowing the grain of the tables joined or of the result wanted.
- **Example:** The events table has one row per user per event, so a user with three events has three rows.
- **Non-example:** The number of columns in a table, or its total row count.
- **Owning chapter:** C13
- **Status:** defined

### `[[grounding]]` — grounding

- **Definition:** Tying a model's output to supplied sources so that its claims can be traced and checked.
- **Example:** An answer that quotes the current refund policy and links to it.
- **Non-example:** An answer written from the model's memory with no source.
- **Owning chapter:** C24
- **Status:** defined

### `[[growth-loop]]` — growth loop

- **Definition:** A closed system in which the output of one cycle becomes the input of the next, so that growth compounds, as when users invite others who then invite more.
- **Example:** A referral loop with 4 invitations per user and 12% conversion.
- **Non-example:** A one-way funnel that must be refilled with paid users at the top each time.
- **Owning chapter:** C20
- **Status:** defined

### `[[guardrail]]` — guardrail

- **Definition:** A control placed around a model to keep its behavior within limits, such as input and output filters, rules about what it may do, limits on tools and permissions, and escalation to people.
- **Example:** An output filter that blocks private account data and a cap on refund amounts.
- **Non-example:** A metric that must not worsen in an experiment, which is a guardrail metric.
- **Owning chapter:** C25
- **Status:** defined

### `[[guardrail-metric]]` — guardrail metric

- **Definition:** A metric that must not get worse while a team pursues its primary goal.
- **Example:** Crash rate, during a launch meant to make the app faster.
- **Non-example:** The metric the launch is trying to improve.
- **Owning chapter:** C05
- **Status:** defined

### `[[hallucination]]` — hallucination

- **Definition:** A model output that is fluent but unsupported by its inputs or by fact.
- **Example:** A model citing a study that does not exist.
- **Non-example:** A correct answer phrased awkwardly.
- **Owning chapter:** C24
- **Status:** defined

### `[[headroom]]` — headroom

- **Definition:** The gap between how a segment performs at a journey step today and a realistic level it could reach, which bounds how much an improvement there can add.
- **Example:** A checkout step where 40% of users succeed and comparable products reach 70% has a lot of headroom.
- **Non-example:** A step where 95% of people already succeed, however annoying it is to the other 5%.
- **Owning chapter:** C08
- **Status:** defined

### `[[hippo]]` — HiPPO

- **Definition:** The highest-paid person's opinion, deciding by seniority instead of an evidence rule agreed in advance.
- **Example:** A roadmap set in a meeting that reverses when a senior person changes their mind.
- **Non-example:** A decision made by a rule agreed before a test, with a senior person committing to the result.
- **Owning chapter:** C29
- **Status:** defined

### `[[hiring-committee]]` — hiring committee

- **Definition:** A group, separate from the interviewers, that reviews written interview feedback and decides whether to hire.
- **Example:** A panel that reads each interviewer's written evidence about a candidate it never met.
- **Non-example:** A hiring manager deciding alone after the interviews.
- **Owning chapter:** C33
- **Status:** defined

### `[[holdout]]` — holdout

- **Definition:** A group deliberately kept from a change (or a set of changes) for a period so that its outcome serves as the comparison, often over a long horizon.
- **Example:** A 2% group of members kept on the old experience for months to see whether a quarter's launches added up.
- **Non-example:** A group left out only because it was hard to reach.
- **Owning chapter:** C14
- **Status:** defined

### `[[human-in-the-loop]]` — human in the loop

- **Definition:** A design in which a person reviews or approves an AI output or action before it takes effect.
- **Example:** The user confirms an order summary before an assistant places it.
- **Non-example:** An agent that sends emails with no review.
- **Owning chapter:** C24
- **Status:** defined

### `[[hypothesis]]` — hypothesis

- **Definition:** A specific, testable statement about a cause or an effect that could turn out to be false.
- **Example:** "The drop comes from Android users on the latest release."
- **Non-example:** "Something is wrong with Android."
- **Owning chapter:** C03
- **Status:** defined

### `[[idempotency]]` — idempotency

- **Definition:** The property that doing an operation more than once has the same effect as doing it once; an idempotency key lets a server recognize a retried request and return the first result instead of repeating the action.
- **Example:** A retried 'charge $50' request returns the original confirmation and charges the card once.
- **Non-example:** A retry that charges the customer $100.
- **Owning chapter:** C21
- **Status:** defined

### `[[influence-without-authority]]` — influence without authority

- **Definition:** Getting people to act on a proposal when you are not their manager and cannot require it, by understanding their incentives, finding a shared goal, bringing evidence, pre-wiring and making the ask easy.
- **Example:** Securing engineering support by showing the shared goal, trading scope and asking for a half-day estimate.
- **Non-example:** Pressure, false urgency or hiding the costs.
- **Owning chapter:** C32
- **Status:** defined

### `[[information-architecture]]` — information architecture

- **Definition:** The way content and functions are organized, grouped and labeled so people can find them.
- **Example:** Deciding that notification controls sit under a clearly named Settings group with a search box.
- **Non-example:** The visual style of the screen.
- **Owning chapter:** C10
- **Status:** defined

### `[[input-metric]]` — input metric

- **Definition:** A metric a team can move directly that drives the north star.
- **Example:** Share of new teams that invite a colleague in week one.
- **Non-example:** The north star itself.
- **Owning chapter:** C05
- **Status:** defined

### `[[instrumentation]]` — instrumentation

- **Definition:** The code that records user actions and system events as data, which is how a metric becomes a number.
- **Example:** An invite_sent event with its time, user and channel.
- **Non-example:** A dashboard that displays numbers computed from events.
- **Owning chapter:** C05
- **Status:** defined

### `[[inter-rater-agreement]]` — inter-rater agreement

- **Definition:** The extent to which independent reviewers give the same judgment, corrected for the agreement expected by chance.
- **Example:** 94% raw agreement that is a kappa of 0.63 once chance is removed.
- **Non-example:** Raw percent agreement on a set where nearly every item is good.
- **Owning chapter:** C25
- **Status:** defined

### `[[interference]]` — interference

- **Definition:** A situation in which one unit's treatment affects another unit's outcome, breaking independence between groups.
- **Example:** In a marketplace, discounts for buyers in the test group change prices for buyers in the control group.
- **Non-example:** A feature that only affects the user who sees it.
- **Owning chapter:** C14
- **Status:** defined

### `[[internal-platform]]` — internal platform

- **Definition:** A product, such as a service, tool or set of interfaces, whose customers are other teams within the same company, who cannot easily be forced to be delighted and adopt it when it saves them time or risk.
- **Example:** A shared experimentation service used by forty product teams.
- **Non-example:** A consumer product sold to the public.
- **Owning chapter:** C27
- **Status:** defined

### `[[interview-loop]]` — interview loop

- **Definition:** The set of interviews a candidate completes in one hiring process, usually in a single day or a few days, whose feedback is combined into one decision.
- **Example:** Four 45-minute interviews on product design, metrics, a technical conversation and behavioral questions, followed by a debrief.
- **Non-example:** A single phone call with a recruiter.
- **Owning chapter:** C33
- **Status:** defined

### `[[inversion]]` — inversion

- **Definition:** Solving a problem by asking what would guarantee failure and then avoiding it.
- **Example:** Listing how to make users mute every notification, then designing the opposite.
- **Non-example:** Brainstorming features that might delight users.
- **Owning chapter:** C02
- **Status:** defined

### `[[issue-tree]]` — issue tree

- **Definition:** A hierarchy that breaks a question into MECE branches, down to items that can be tested.
- **Example:** Revenue drop split into traffic, conversion and revenue per order, then each split further.
- **Non-example:** A flat list of ideas with no hierarchy.
- **Owning chapter:** C03
- **Status:** defined

### `[[jobs-to-be-done]]` — jobs to be done

- **Definition:** A lens that describes the progress a user is trying to make in a situation, which the product is hired to help with.
- **Example:** "Help me arrive at a meeting on time without stress."
- **Non-example:** "Users aged 25 to 34."
- **Owning chapter:** C06
- **Status:** defined

### `[[kill-criteria]]` — kill criteria

- **Definition:** Conditions, set in advance of a test or project, under which the team agrees to stop; written first to prevent moving the goalposts.
- **Example:** Stop if week-8 retention is below 8% or fewer than 30% of surveyed users would be very disappointed without the product.
- **Non-example:** A decision to stop made after seeing results and chosen to justify an existing preference.
- **Owning chapter:** C26
- **Status:** defined

### `[[know-your-customer]]` — know your customer

- **Definition:** The process of verifying the identity of a customer, and for businesses their ownership and activity, required by financial regulation along with related monitoring obligations.
- **Example:** An identity and address check before a payments account is enabled.
- **Non-example:** A marketing survey about customer preferences.
- **Owning chapter:** C27
- **Status:** defined

### `[[label]]` — label

- **Definition:** The outcome a model is trying to predict for each training example.
- **Example:** Marked as spam; watched to the end; later disputed as fraud.
- **Non-example:** An input attribute such as the time of day.
- **Owning chapter:** C23
- **Status:** defined

### `[[lagging-indicator]]` — lagging indicator

- **Definition:** A measure that reflects results after they have happened.
- **Example:** Quarterly churn.
- **Non-example:** Number of onboarding steps completed on day one.
- **Owning chapter:** C05
- **Status:** defined

### `[[latency]]` — latency

- **Definition:** The time between a request and its response.
- **Example:** The delay between tapping search and seeing results.
- **Non-example:** How many requests a system can handle per second.
- **Owning chapter:** C21
- **Status:** defined

### `[[leading-indicator]]` — leading indicator

- **Definition:** A measure that moves before the outcome it predicts.
- **Example:** First-week activity, as a predictor of 90-day retention.
- **Non-example:** Last quarter's revenue.
- **Owning chapter:** C05
- **Status:** defined

### `[[legacy-user]]` — legacy user

- **Definition:** A user or customer who depends on the current behavior of a product (habits, integrations, stored data or contracts), so that a change creates cost for them even when it benefits others.
- **Example:** An enterprise customer whose weekly reporting scripts read the current export columns.
- **Non-example:** A brand-new user with no habits or integrations to break.
- **Owning chapter:** C08
- **Status:** defined

### `[[lifetime-value]]` — lifetime value

- **Definition:** The total contribution a customer is expected to generate over their life with the product; in a simple model, contribution per month divided by monthly churn. Abbreviated LTV.
- **Example:** $6 a month of contribution at 5% monthly churn gives a lifetime value of $120.
- **Non-example:** Total revenue to date from a customer.
- **Owning chapter:** C20
- **Status:** defined

### `[[liquidity]]` — liquidity

- **Definition:** In a marketplace, the likelihood that a participant on one side finds what they want from the other side quickly; measured by the share of searches with an available relevant result, conversion given a result and supplier utilization.
- **Example:** 40% of searches in a city show an available listing and hosts book 0.25 times a week.
- **Non-example:** The number of sellers who have signed up.
- **Owning chapter:** C27
- **Status:** defined

### `[[llm]]` — large language model

- **Definition:** A model trained on large amounts of text to predict the next token, which can generate and transform language.
- **Example:** A model that drafts an email reply from a prompt.
- **Non-example:** A database that returns stored answers.
- **Owning chapter:** C24
- **Status:** defined

### `[[local-optimum]]` — local optimum

- **Definition:** The best result reachable by small changes from the current position, which may be far worse than a result reachable by a different approach.
- **Example:** A signup flow tuned by copy tests to a plateau while a different first screen would double conversion.
- **Non-example:** The best possible result across all approaches.
- **Owning chapter:** C02
- **Status:** defined

### `[[localization]]` — localization

- **Definition:** Adapting a product to a market's language, norms, infrastructure and rules so that it works and feels right there; translation is only its first layer.
- **Example:** Showing a fare upfront, accepting cash and letting riders describe a pickup by landmark when street numbers are not used.
- **Non-example:** Translating the interface text and leaving the sign-up, payment and address flows unchanged.
- **Owning chapter:** C09
- **Status:** defined

### `[[mece]]` — MECE

- **Definition:** A way of splitting a problem into parts that do not overlap and together cover the whole.
- **Example:** Splitting signups by platform: iOS, Android, web.
- **Non-example:** Splitting signups into "mobile", "iOS" and "new users", which overlap and leave gaps.
- **Owning chapter:** C03
- **Status:** defined

### `[[message-queue]]` — message queue

- **Definition:** A holding area for tasks or messages that workers process later, so the part of the system that receives a request need not wait for slow work.
- **Example:** A confirmation email waiting in a queue while the user already sees a quick response.
- **Non-example:** A function that blocks until the email is sent.
- **Owning chapter:** C21
- **Status:** defined

### `[[metric]]` — metric

- **Definition:** A defined quantity, measured over a stated population and time window, that tracks one aspect of product performance.
- **Example:** "Share of new users who complete a first purchase within seven days."
- **Non-example:** "Engagement."
- **Owning chapter:** C05
- **Status:** defined

### `[[metric-diagnosis]]` — metric diagnosis

- **Definition:** A structured investigation into why a metric changed, ending in a cause, a decision and a communication.
- **Example:** Confirming a signup drop is real, isolating it to one platform and one release, and recommending a rollback.
- **Non-example:** Guessing a cause and proposing a fix.
- **Owning chapter:** C13
- **Status:** defined

### `[[metric-tree]]` — metric tree

- **Definition:** A diagram that decomposes a metric into components that multiply or add up to it.
- **Example:** Orders = visitors × conversion rate; each factor then decomposed further.
- **Non-example:** A dashboard of unrelated metrics.
- **Owning chapter:** C05
- **Status:** defined

### `[[minimum-detectable-effect]]` — minimum detectable effect

- **Definition:** The smallest change an experiment is designed to detect reliably.
- **Example:** Sizing a test to detect a one-point lift in conversion.
- **Non-example:** The change the team hopes for.
- **Owning chapter:** C14
- **Status:** defined

### `[[mix-shift]]` — mix shift

- **Definition:** A change in an overall metric caused by a change in the composition of users or traffic rather than a change in behavior within groups.
- **Example:** Average order value falls because more new, low-spend users joined.
- **Non-example:** Average order value falling because prices were cut.
- **Owning chapter:** C13
- **Status:** defined

### `[[moat]]` — moat

- **Definition:** A durable advantage that protects a business from competitors.
- **Example:** Accumulated data that makes recommendations better with each user.
- **Non-example:** Being first to launch.
- **Owning chapter:** C18
- **Status:** defined

### `[[mock-interview]]` — mock interview

- **Definition:** A practice interview run under realistic conditions (the real format, time limit and tools, with no pausing or hints) and scored afterward against a rubric.
- **Example:** A timed 45-minute product round with a partner who probes three levels deep and scores independently.
- **Non-example:** Rereading a chapter or watching a recorded sample interview.
- **Owning chapter:** C34
- **Status:** defined

### `[[model]]` — model

- **Definition:** A function fitted to data to predict something about new cases, such as whether a message is spam or which items a person will value.
- **Example:** A fraud model that gives each payment a risk score.
- **Non-example:** A hand-written rule such as hold any payment above $10,000 from a new account.
- **Owning chapter:** C23
- **Status:** defined

### `[[model-card]]` — model card

- **Definition:** A short document stating a model's intended use, data, evaluation results, limitations and risks.
- **Example:** A page describing a summarizer's languages, tested error rates and known failure cases.
- **Non-example:** A marketing description of a model's capabilities.
- **Owning chapter:** C25
- **Status:** defined

### `[[model-graded-eval]]` — model-graded eval

- **Definition:** An evaluation in which a language model scores another model's outputs against a rubric; fast and cheap, and it must be calibrated against human judgments because it can miss real failures.
- **Example:** A grader model that flags 80 of 1,000 outputs and catches 70 of the 100 that humans found bad.
- **Non-example:** Human reviewers scoring outputs against the same rubric.
- **Owning chapter:** C25
- **Status:** defined

### `[[multi-homing]]` — multi-homing

- **Definition:** Participants using several platforms at the same time, which weakens lock-in and network-effect advantages.
- **Example:** A driver running two ride-hailing apps at once.
- **Non-example:** Users who can only reach their friends on one app.
- **Owning chapter:** C19
- **Status:** defined

### `[[multiple-comparisons]]` — multiple comparisons

- **Definition:** The inflation of false-positive chances when many tests or segments are examined and the most striking result is reported.
- **Example:** Slicing a result 20 ways at a 5% threshold gives about a 64% chance of at least one significant segment when nothing is going on.
- **Non-example:** A single comparison planned in advance.
- **Owning chapter:** C12
- **Status:** defined

### `[[mvp]]` — minimum viable product

- **Definition:** The smallest thing that can test the riskiest assumption with real users.
- **Example:** A manual concierge service run by hand to test demand before building software.
- **Non-example:** A full product with a few features removed for time.
- **Owning chapter:** C15
- **Status:** defined

### `[[net-revenue-retention]]` — net revenue retention

- **Definition:** The revenue from a cohort of customers a year later, including expansion and net of churn and downgrades, as a percentage of their revenue at the start; above 100 percent means existing customers grow without new customers.
- **Example:** A cohort paying $1,000,000 that pays $1,100,000 a year later has NRR of 110%.
- **Non-example:** The share of customers who did not cancel.
- **Owning chapter:** C27
- **Status:** defined

### `[[network-effect]]` — network effect

- **Definition:** A property in which each additional user increases the product's value to the other users.
- **Example:** A messaging app becomes more useful as more of a person's contacts join.
- **Non-example:** A product that is cheaper at higher volume.
- **Owning chapter:** C18
- **Status:** defined

### `[[non-goal]]` — non-goal

- **Definition:** Something explicitly declared out of scope for a project.
- **Example:** "This release will not support offline mode."
- **Non-example:** A requirement postponed without saying so.
- **Owning chapter:** C16
- **Status:** defined

### `[[north-star-metric]]` — north star metric

- **Definition:** The single metric that best captures the value users get from a product and that predicts long-term success.
- **Example:** Weekly active teams that send messages, for a team chat product.
- **Non-example:** Page views.
- **Owning chapter:** C05
- **Status:** defined

### `[[novelty-effect]]` — novelty effect

- **Definition:** A temporary change in behavior because something is new, which fades as the novelty wears off; the mirror image, a temporary dip from change aversion, is handled the same way.
- **Example:** A redesigned row lifts viewing by 6% in week one and settles near 1% by week five.
- **Non-example:** A stable lift that is the same in week one and week six.
- **Owning chapter:** C14
- **Status:** defined

### `[[nudge]]` — nudge

- **Definition:** A design choice that steers behavior toward an option without forbidding others or changing incentives sharply.
- **Example:** An unchecked, clearly worded opt-in asked at a moment when the value is clear.
- **Non-example:** A pre-checked box that signs people up for charges and hides the way out.
- **Owning chapter:** C10
- **Status:** defined

### `[[offline-evaluation]]` — offline evaluation

- **Definition:** Judging a model on historical data without showing it to users; fast and cheap and unable to show how users react to new results.
- **Example:** Measuring the error of predicted ratings on held-out past ratings.
- **Non-example:** An online experiment with real users.
- **Owning chapter:** C23
- **Status:** defined

### `[[okr]]` — OKR

- **Definition:** A goal-setting method pairing a qualitative objective with a small number of measurable key results that are outcomes, not tasks.
- **Example:** Objective: new users reach first success quickly. Key result: raise the share completing the first task within 10 minutes from 38% to 55%.
- **Non-example:** Key results that read 'launch the tutorial' and 'complete the redesign.'
- **Owning chapter:** C18
- **Status:** defined

### `[[on-device-processing]]` — on-device processing

- **Definition:** Running computation on the user's own device instead of sending data to a server.
- **Example:** Recognizing a voice command on the phone without sending the audio away.
- **Non-example:** Uploading audio to a server for transcription.
- **Owning chapter:** C21
- **Status:** defined

### `[[opportunity-cost]]` — opportunity cost

- **Definition:** The value of the best alternative given up when a choice is made.
- **Example:** Building the custom feature displaces a planned item expected to return $1,200,000 a year.
- **Non-example:** The cost of the chosen option measured on its own.
- **Owning chapter:** C15
- **Status:** defined

### `[[order-of-magnitude]]` — order of magnitude

- **Definition:** A factor of ten, used to judge whether a quantity is about a thousand, a million or a billion.
- **Example:** Two estimates that differ by a factor of one hundred signal a unit error or a missing factor.
- **Non-example:** The third significant digit of an answer.
- **Owning chapter:** C04
- **Status:** defined

### `[[overfitting]]` — overfitting

- **Definition:** A model learning the quirks of its training data so closely that it predicts new cases poorly.
- **Example:** 99% accuracy on training data and 80% on held-out data.
- **Non-example:** A model that performs about equally on training and held-out data.
- **Owning chapter:** C23
- **Status:** defined

### `[[p-value]]` — p-value

- **Definition:** The probability of seeing a result at least this extreme if there were no true effect.
- **Example:** A p-value of 0.03 means data this extreme would be rare if the change did nothing.
- **Non-example:** The probability that the change works.
- **Owning chapter:** C12
- **Status:** defined

### `[[packaging]]` — packaging

- **Definition:** The decision about what is included in each plan or tier, and how plans are named and fenced, so that different customers choose the plan that fits them.
- **Example:** An entry plan, a main plan and a premium plan with different limits and features.
- **Non-example:** The price of a single plan.
- **Owning chapter:** C20
- **Status:** defined

### `[[pain-point]]` — pain point

- **Definition:** A specific, observable difficulty a user meets while trying to do something, which can be ranked by how often it occurs and how much it costs them.
- **Example:** Going out too fast in the first third of a long run and fading by the last third.
- **Non-example:** "Running is hard," which names no moment and cannot be watched.
- **Owning chapter:** C07
- **Status:** defined

### `[[pareto-principle]]` — Pareto principle

- **Definition:** The pattern that a small share of causes usually produces a large share of the effects, so effort should go first to the largest few.
- **Example:** One funnel step accounting for 25 of the 62 lost installs per 100.
- **Non-example:** A guarantee that exactly 20% of causes produce 80% of effects.
- **Owning chapter:** C03
- **Status:** defined

### `[[payback-period]]` — payback period

- **Definition:** The time it takes for a customer's contribution to repay the cost of acquiring them; acquisition cost divided by contribution per month.
- **Example:** $45 of acquisition cost and $6 of monthly contribution give a payback of 7.5 months.
- **Non-example:** The time until a customer cancels.
- **Owning chapter:** C20
- **Status:** defined

### `[[peeking]]` — peeking

- **Definition:** Checking the results of a test repeatedly and stopping when the difference first looks significant, which inflates false positives.
- **Example:** Looking at ten equally spaced points and stopping at the first p below 0.05, which declares a win about 19% of the time when nothing is going on.
- **Non-example:** Watching a guardrail for harm while the test runs to its planned end.
- **Owning chapter:** C14
- **Status:** defined

### `[[percentile]]` — percentile

- **Definition:** The value below which a given share of observations fall; the 95th percentile is the value that 95% of observations do not exceed.
- **Example:** A page load time of 6.5 seconds at the 95th percentile means 95% of loads were that fast or faster.
- **Non-example:** The average load time, which can look fine while one load in twenty is very slow.
- **Owning chapter:** C12
- **Status:** defined

### `[[persona]]` — persona

- **Definition:** A composite profile of a user type, built from research, used to align a team.
- **Example:** A profile of a type of weekly planner, built from eight interviews and tied to how that person decides what to order.
- **Non-example:** A stock photo with a name and a hobby, invented in a workshop.
- **Owning chapter:** C06
- **Status:** defined

### `[[pivot]]` — pivot

- **Definition:** A change in a core element of the strategy (the customer, the problem, the solution, the channel or the business model) based on what was learned, while keeping what is working; a pivot is itself a hypothesis to be tested.
- **Example:** Repositioning a habit-tracking app for freelancers after one segment showed strong pull.
- **Non-example:** Abandoning the product, or making a small feature change.
- **Owning chapter:** C26
- **Status:** defined

### `[[platform]]` — platform

- **Definition:** A product that others build on or transact through, creating value for more than one group of participants.
- **Example:** An app store connecting developers and users.
- **Non-example:** A product with an export button.
- **Owning chapter:** C19
- **Status:** defined

### `[[popularity-bias]]` — popularity bias

- **Definition:** A tendency for a recommender to favor already-popular items because they have the most data, which starves new and niche items of exposure and makes the popular more popular.
- **Example:** The top 50 songs rising from 40% to 62% of plays.
- **Non-example:** A catalog where exposure follows quality.
- **Owning chapter:** C23
- **Status:** defined

### `[[position-bias]]` — position bias

- **Definition:** The tendency of items shown higher in a list to be clicked more regardless of their quality.
- **Example:** The same item gets 10% clicks at position 1 and 4% at position 3.
- **Non-example:** A genuine difference in how much people like two items.
- **Owning chapter:** C23
- **Status:** defined

### `[[positioning]]` — positioning

- **Definition:** The place a product occupies in customers' minds relative to the alternatives.
- **Example:** "The fastest option for short urban deliveries."
- **Non-example:** A tagline that does not say who the product is for or against whom.
- **Owning chapter:** C18
- **Status:** defined

### `[[postmortem]]` — postmortem

- **Definition:** A blameless review after an incident that records the timeline, causes, what went well and badly, and actions with owners.
- **Example:** A written review of a four-hour login outage ending in three owned actions with dates.
- **Non-example:** A search for the person who made the mistake.
- **Owning chapter:** C17
- **Status:** defined

### `[[practical-significance]]` — practical significance

- **Definition:** Whether an effect is large enough to matter for the decision, regardless of whether it is statistically significant.
- **Example:** A 0.1% lift that is significant but too small to cover the cost of shipping.
- **Non-example:** A p-value below 0.05.
- **Owning chapter:** C12
- **Status:** defined

### `[[prd]]` — product requirements document

- **Definition:** A written spec of the problem, goals, non-goals, requirements, metrics and risks that aligns a team on what to build.
- **Example:** A three-page doc defining the problem, the success metric, and what is out of scope.
- **Non-example:** A list of feature names.
- **Owning chapter:** C16
- **Status:** defined

### `[[pre-mortem]]` — pre-mortem

- **Definition:** A planning exercise in which a team imagines that a plan has already failed and lists the reasons, so risks are found before commitment.
- **Example:** Before launch, each team member writes why the feature was pulled six months later.
- **Non-example:** A review held after a failure to assign blame.
- **Owning chapter:** C02
- **Status:** defined

### `[[precision-recall]]` — precision and recall

- **Definition:** Two measures of a classifier: precision is the share of flagged items that are correct, and recall is the share of all true items that were flagged; raising one often lowers the other.
- **Example:** A spam filter that flags almost nothing has high precision and low recall.
- **Non-example:** Overall accuracy.
- **Owning chapter:** C23
- **Status:** defined

### `[[prevalence]]` — prevalence

- **Definition:** The estimated share of views, or of content, that violates a policy, measured by sampling and review; it measures what users actually see, unlike counts of removals.
- **Example:** 0.15% of views are of violating content.
- **Non-example:** The number of items removed this week.
- **Owning chapter:** C27
- **Status:** defined

### `[[prioritization]]` — prioritization

- **Definition:** Choosing what to do first under limited capacity, using stated criteria and acknowledged tradeoffs.
- **Example:** Ranking three projects by expected impact on a goal metric against effort and risk.
- **Non-example:** Working through requests in the order they arrived.
- **Owning chapter:** C15
- **Status:** defined

### `[[problem-statement]]` — problem statement

- **Definition:** A short description of who has what problem in what context and why it matters, written without a solution.
- **Example:** "New users abandon setup at the permissions screen because they cannot see why it is needed."
- **Non-example:** "We need an onboarding wizard."
- **Owning chapter:** C06
- **Status:** defined

### `[[product-led-growth]]` — product-led growth

- **Definition:** A go-to-market approach in which the product itself drives acquisition, conversion and expansion, typically through a free or self-serve entry, quick time to value and in-product prompts to invite others or upgrade.
- **Example:** A developer tool with a free tier that teams upgrade when they hit a limit.
- **Non-example:** A product sold only through a sales team with demos and negotiated contracts.
- **Owning chapter:** C20
- **Status:** defined

### `[[product-market-fit]]` — product-market fit

- **Definition:** The state in which a product satisfies a strong market need: enough of the right customers use it, value it and keep using it without being pushed; read from a pattern of retention that flattens, a strong share who would be very disappointed without it, organic growth and willingness to pay.
- **Example:** A cohort retention curve that levels at 25% and a segment where 46% would be very disappointed to lose the product.
- **Non-example:** A waiting list of 75,000 sign-ups or a launch-week spike.
- **Owning chapter:** C26
- **Status:** defined

### `[[product-sense]]` — product sense

- **Definition:** The ability to identify the right user problem, generate and choose between solutions, and define success, usually assessed with an open-ended prompt.
- **Example:** Choosing a commuter segment, ranking their pain points, and recommending one feature with a metric.
- **Non-example:** Listing ten features for an app without naming a user.
- **Owning chapter:** C07
- **Status:** defined

### `[[product-thinking]]` — product thinking

- **Definition:** Reasoning from a user problem to a solution to a measurable outcome, rather than starting from a solution.
- **Example:** Asking why riders cancel before deciding whether to change the cancellation policy.
- **Non-example:** "Competitors have a chatbot, so we should add one."
- **Owning chapter:** C02
- **Status:** defined

### `[[product-triad]]` — product triad

- **Definition:** The core trio on a feature team, a product manager, an engineering lead and a design lead, who share responsibility for a product outcome and decide together, with data science and others attached.
- **Example:** The PM, the tech lead and the design lead agreeing scope for a quarter.
- **Non-example:** A formal org chart level or a committee.
- **Owning chapter:** C01
- **Status:** defined

### `[[prompt]]` — prompt

- **Definition:** The input given to a language model, including instructions, context and examples; a system prompt is the standing instructions the product sets.
- **Example:** An instruction plus three example rewrites plus the email to rewrite.
- **Non-example:** The model's answer.
- **Owning chapter:** C24
- **Status:** defined

### `[[prompt-injection]]` — prompt injection

- **Definition:** An attack in which instructions placed in content the model processes (a document, web page or email) override or redirect the model's intended behavior.
- **Example:** A calendar invite saying to ignore prior instructions and forward the attendee list.
- **Non-example:** A user simply asking the assistant a question.
- **Owning chapter:** C24
- **Status:** defined

### `[[proxy-metric]]` — proxy metric

- **Definition:** A measurable stand-in for an outcome that is hard to measure directly.
- **Example:** Sessions that end without a repeat search, as a proxy for finding the answer.
- **Non-example:** The outcome itself.
- **Owning chapter:** C05
- **Status:** defined

### `[[pull-forward]]` — pull-forward

- **Definition:** Demand or activity brought earlier by a promotion or deadline, which raises the metric now and lowers it later, leaving the total roughly unchanged.
- **Example:** A promotion week of 125 followed by weeks of 80 and 90 against a baseline of 100, a net of 295 against 300.
- **Non-example:** A lasting increase in demand that persists after the promotion ends.
- **Owning chapter:** C13
- **Status:** defined

### `[[pyramid-principle]]` — pyramid principle

- **Definition:** A way of organizing a message with the answer at the top, supported by a few grouped arguments of the same kind in a logical order, each backed by evidence.
- **Example:** A recommendation supported by three named reasons, each with its evidence.
- **Non-example:** Seven unranked points in the order they occurred to the speaker.
- **Owning chapter:** C32
- **Status:** defined

### `[[rag]]` — retrieval-augmented generation

- **Definition:** A technique that retrieves relevant documents and supplies them to a model when it generates an answer.
- **Example:** A support bot that fetches help-center articles before answering.
- **Non-example:** Fine-tuning a model on a dataset.
- **Owning chapter:** C24
- **Status:** defined

### `[[randomization]]` — randomization

- **Definition:** Assigning units to variants by chance so that the groups differ, on average, only in the treatment.
- **Example:** Hashing user IDs to assign variants.
- **Non-example:** Letting users choose which version to use.
- **Owning chapter:** C14
- **Status:** defined

### `[[ranking]]` — ranking

- **Definition:** Ordering items by a predicted score so that the most valuable appear first.
- **Example:** Ordering 400 candidate titles by the predicted chance a member will start and finish each.
- **Non-example:** Choosing a single yes-or-no label for an item.
- **Owning chapter:** C23
- **Status:** defined

### `[[rate-limiting]]` — rate limiting

- **Definition:** Capping how many requests a caller may make in a period, to protect a system from overload or abuse.
- **Example:** At most 100 requests per minute per account.
- **Non-example:** Adding servers to absorb unlimited traffic.
- **Owning chapter:** C22
- **Status:** defined

### `[[readiness-gate]]` — readiness gate

- **Definition:** A written decision rule, set in advance, that says when to apply to top-choice targets: a list of measurable conditions that must all be true, re-tested before each loop, replacing anxiety and the calendar as the decider.
- **Example:** Outside-scored averages of at least 4.0 on high-weight dimensions, calibration within half a point and three full mock loops with an independent lean of hire or better.
- **Non-example:** A feeling that the last mock went well, or the date on which a window opens.
- **Owning chapter:** C37
- **Status:** defined

### `[[reading-map]]` — reading map

- **Definition:** A ranking of the chapters of this book into a core path, deep dives and a reference library, with the hours each costs, so that the book's length does not burden a reader on a twelve-month plan.
- **Example:** A core path of 21 chapters at about 62.7 study hours, eight deep dives at about 22.4 and a reference library of five chapters at about 12.
- **Non-example:** A table of contents.
- **Owning chapter:** C37
- **Status:** defined

### `[[recommender-system]]` — recommender system

- **Definition:** A system that predicts which items a user will value and ranks them for display.
- **Example:** A feed that orders videos by predicted interest.
- **Non-example:** A list sorted alphabetically.
- **Owning chapter:** C23
- **Status:** defined

### `[[red-teaming]]` — red-teaming

- **Definition:** Deliberate adversarial testing in which people try to make a system fail or cause harm, to find weaknesses before real users do.
- **Example:** Testers attempting 250 prompts in each of eight harm categories against an assistant before launch.
- **Non-example:** Friendly user studies with cooperative testers.
- **Owning chapter:** C25
- **Status:** defined

### `[[regression-test]]` — regression test

- **Definition:** A test that checks that a change has not broken behavior that used to work; for AI products it is the evaluation set rerun on every change and read by slice.
- **Example:** Rerunning 400 cases after a prompt change and finding that refunds fell from 96% to 78%.
- **Non-example:** A test of a brand-new feature that has no prior behavior.
- **Owning chapter:** C25
- **Status:** defined

### `[[regression-to-the-mean]]` — regression to the mean

- **Definition:** The tendency for unusually high or low measurements to be followed by measurements closer to the average, because part of the extreme was chance.
- **Example:** The ten worst-converting pages improve next week with no change made to them.
- **Non-example:** A real improvement caused by a fix that a control group does not show.
- **Owning chapter:** C12
- **Status:** defined

### `[[retention]]` — retention

- **Definition:** The share of users or customers who keep using or paying over time, measured by cohort.
- **Example:** The share of March signups still active 30 days later.
- **Non-example:** The total number of users ever acquired.
- **Owning chapter:** C05
- **Status:** defined

### `[[reversible-decision]]` — reversible decision

- **Definition:** A decision that can be undone cheaply, so it can be made quickly on less evidence.
- **Example:** Running a one-week test of different button text.
- **Non-example:** Discontinuing a product line.
- **Owning chapter:** C02
- **Status:** defined

### `[[risk-tier]]` — risk tier

- **Definition:** A category of AI use ranked by its potential for harm, which sets the obligations on its provider and deployer, as in the risk-based approach of the European Union's AI Act.
- **Example:** A resume-screening tool classed as high-risk and a spam filter as minimal-risk.
- **Non-example:** A company's internal priority level for a bug.
- **Owning chapter:** C25
- **Status:** defined

### `[[riskiest-assumption]]` — riskiest assumption

- **Definition:** The assumption that, if false, would sink an idea and about which the team knows least; the one to test first.
- **Example:** That students will pay $40 a week for a dorm meal kit.
- **Non-example:** An assumption that is likely true or would not change the decision.
- **Owning chapter:** C26
- **Status:** defined

### `[[roadmap]]` — roadmap

- **Definition:** A plan of what will be built and when; the logic behind it is the strategy.
- **Example:** A quarterly plan that names the three problems the team will work on and the order, tied to the strategy.
- **Non-example:** A list of wished-for features with no logic for the order.
- **Owning chapter:** C18
- **Status:** defined

### `[[rollback]]` — rollback

- **Definition:** Reverting a release to its previous state.
- **Example:** Switching a flag off after error rates spike.
- **Non-example:** Fixing the bug in the next release.
- **Owning chapter:** C17
- **Status:** defined

### `[[rollback-trigger]]` — rollback trigger

- **Definition:** A pre-agreed condition (metric, threshold, window, owner) that, when met, causes a release to be reverted or paused.
- **Example:** Payment success below 95.0% over a rolling two hours: the on-call engineer turns off the flag.
- **Non-example:** A debate at 2 a.m. about whether the drop is bad enough.
- **Owning chapter:** C17
- **Status:** defined

### `[[root-cause]]` — root cause

- **Definition:** The underlying condition that, if removed, stops the problem from recurring, as opposed to a symptom.
- **Example:** A payment-library update that broke one checkout step.
- **Non-example:** "Conversion fell."
- **Owning chapter:** C03
- **Status:** defined

### `[[rotational-program]]` — rotational program

- **Definition:** A structured early-career program in which a new hire rotates across several teams over one to two years, with training, mentorship and a cohort, before settling into a role.
- **Example:** A two-year associate product manager program with two rotations.
- **Non-example:** A direct hire into one team with no rotations.
- **Owning chapter:** C01
- **Status:** defined

### `[[sales-cycle]]` — sales cycle

- **Definition:** The time from first contact with a prospective customer to a signed contract, often months in enterprise sales, shaped by the buying committee, security review and budget cycles.
- **Example:** A nine-month cycle from first demo to signature.
- **Non-example:** The time a user takes to sign up for a free plan.
- **Owning chapter:** C27
- **Status:** defined

### `[[sample-ratio-mismatch]]` — sample ratio mismatch

- **Definition:** A gap between the expected and observed split of users across variants, signaling a flaw in the experiment.
- **Example:** A planned 50/50 split that shows 52/48 across millions of users.
- **Non-example:** A small imbalance expected in a tiny sample.
- **Owning chapter:** C14
- **Status:** defined

### `[[sanity-check]]` — sanity check

- **Definition:** Testing a result against an independent route or a known bound before trusting it.
- **Example:** Comparing a bottom-up estimate of coffee shops with a per-capita figure.
- **Non-example:** Re-running the same arithmetic.
- **Owning chapter:** C04
- **Status:** defined

### `[[say-do-gap]]` — say-do gap

- **Definition:** The difference between what people say they do or want and what they actually do.
- **Example:** Users report reading settings pages; logs show few ever open them.
- **Non-example:** A survey sample that over-represents one group.
- **Owning chapter:** C06
- **Status:** defined

### `[[schema]]` — schema

- **Definition:** The defined structure of stored data: the entities, their fields and how they relate.
- **Example:** A users table, an orders table, and a rule that one order belongs to one user and has many items.
- **Non-example:** A single free-text field holding everything about a customer.
- **Owning chapter:** C21
- **Status:** defined

### `[[scope-creep]]` — scope creep

- **Definition:** The growth of a project's scope after it starts, without a matching change in time, resources or other scope, which delays or degrades delivery.
- **Example:** Ten stories become fourteen mid-project with the same date and the same three engineers.
- **Non-example:** A deliberate, agreed change in scope with the trade named.
- **Owning chapter:** C15
- **Status:** defined

### `[[scorecard]]` — scorecard

- **Definition:** A one-page form listing the dimensions of an interview round, a score for each anchored to the bands, the evidence for each score and an overall lean.
- **Example:** Five product-sense dimensions each scored 1 to 5 with the sentence said as evidence and a lean of hire.
- **Non-example:** A general impression of how the answer went.
- **Owning chapter:** C34
- **Status:** defined

### `[[seasonality]]` — seasonality

- **Definition:** A regular, calendar-linked pattern in a metric (day of week, holidays, school terms, weather) that recurs and should be removed before inferring cause.
- **Example:** A desktop-heavy dip in queries during a national holiday week that also appeared last year.
- **Non-example:** A one-off drop caused by a release.
- **Owning chapter:** C13
- **Status:** defined

### `[[second-order-effect]]` — second-order effect

- **Definition:** A consequence of a consequence, usually produced by other people's response to the first change.
- **Example:** A referral bonus raises signups, then attracts bonus-seekers who never become active and raise support costs.
- **Non-example:** The direct, intended result of the change.
- **Owning chapter:** C02
- **Status:** defined

### `[[sensitivity-analysis]]` — sensitivity analysis

- **Definition:** Checking how much a result changes when one assumption changes, to find the assumption that matters most.
- **Example:** Halving the weekly-ordering share halves the delivery estimate, while changing orders per household barely moves it.
- **Non-example:** Running the same calculation again with the same inputs.
- **Owning chapter:** C04
- **Status:** defined

### `[[service-level-objective]]` — service level objective

- **Definition:** A target for a measured aspect of service quality over a period, such as 99.9% of requests succeeding monthly; the allowed shortfall is the error budget.
- **Example:** 99.9% of payment attempts succeed each month, giving a budget of about 43.8 minutes of failure.
- **Non-example:** A promise to customers with penalties, which is a service level agreement.
- **Owning chapter:** C21
- **Status:** defined

### `[[shadow-mode]]` — shadow mode

- **Definition:** A deployment in which a new system runs on live inputs and its outputs are logged and judged but not shown to users.
- **Example:** A summarizer producing summaries for reviewers to score while users still see the original notifications.
- **Non-example:** A canary release that users can see.
- **Owning chapter:** C25
- **Status:** defined

### `[[signal]]` — signal

- **Definition:** What an interviewer infers about your judgment, skills, values or growth from an answer; a story with a real decision, personal action, evidence and learning gives strong signal and a vague one gives none.
- **Example:** A conflict story in which you asked what each step was for, ran a test and credited the colleague's idea.
- **Non-example:** A story told entirely as 'we' with no decision and no number.
- **Owning chapter:** C31
- **Status:** defined

### `[[simpsons-paradox]]` — Simpson's paradox

- **Definition:** A pattern in which a trend appears in every subgroup but reverses or disappears when the groups are combined.
- **Example:** A new flow improves conversion on both mobile and desktop, yet overall conversion falls because mobile share grew.
- **Non-example:** A metric moving in one direction in every segment.
- **Owning chapter:** C12
- **Status:** defined

### `[[smoke-test]]` — smoke test

- **Definition:** A test of demand run before the product exists, by presenting the offer (a page, an advertisement, a button) and measuring whether people take a costly-enough action such as signing up, leaving a deposit or pre-ordering.
- **Example:** A landing page with a price and a refundable $5 deposit shown to 700 target visitors.
- **Non-example:** A usability test of a finished prototype, or asking friends whether they like the idea.
- **Owning chapter:** C26
- **Status:** defined

### `[[sprint]]` — sprint

- **Definition:** A fixed, short period (commonly one to two weeks) in which a team commits to a set of work and delivers it in a usable state.
- **Example:** A two-week sprint to deliver the view-only share link and its tests.
- **Non-example:** An open-ended project phase with no fixed end.
- **Owning chapter:** C16
- **Status:** defined

### `[[sql]]` — SQL

- **Definition:** Structured query language: the language most analytics databases use to read, filter and combine tables of data.
- **Example:** A query that counts the orders placed each day, grouped by country.
- **Non-example:** A spreadsheet formula.
- **Owning chapter:** C13
- **Status:** defined

### `[[staged-rollout]]` — staged rollout

- **Definition:** Releasing a change to progressively larger shares of users while monitoring for problems.
- **Example:** 1%, then 10%, then 50%, then everyone, with checks between steps.
- **Non-example:** Releasing to all users at once.
- **Owning chapter:** C17
- **Status:** defined

### `[[stakeholder]]` — stakeholder

- **Definition:** A person or group who affects or is affected by a decision or product and whose support, input or approval it needs.
- **Example:** Privacy counsel, the growth lead, the engineering lead and the VP who decides.
- **Non-example:** Only the people who attend the planning meeting.
- **Owning chapter:** C32
- **Status:** defined

### `[[standard-error]]` — standard error

- **Definition:** The standard deviation of an estimate across repeated samples, which shows how much the estimate would move if the sample were drawn again; it shrinks with the square root of the sample size.
- **Example:** For a 4% rate measured on 10,000 users, about 0.2 percentage points.
- **Non-example:** The spread of individual users' values, which is the standard deviation of the data.
- **Owning chapter:** C12
- **Status:** defined

### `[[statistical-power]]` — statistical power

- **Definition:** The probability that a test detects an effect of a given size when that effect really exists.
- **Example:** A test with 80% power to detect a two-point lift.
- **Non-example:** The share of users in the test.
- **Owning chapter:** C12
- **Status:** defined

### `[[story-bank]]` — story bank

- **Definition:** A prepared set of real experiences from your own work, each with notes, mapped to the themes interviewers ask about, from which you choose a story for each question.
- **Example:** Nine rehearsed stories with verified numbers covering conflict, failure, influence, ambiguity, customer focus, a data decision, prioritization, leading and a values moment.
- **Non-example:** A set of memorized scripts or stories invented to fit a company's list of values.
- **Owning chapter:** C31
- **Status:** defined

### `[[strategy]]` — strategy

- **Definition:** A coherent set of choices about where to compete and how to win, grounded in a diagnosis of the situation.
- **Example:** Entering a market with a narrow wedge where the company has a distribution advantage.
- **Non-example:** A list of goals with no choices about how to reach them.
- **Owning chapter:** C18
- **Status:** defined

### `[[sunk-cost]]` — sunk cost

- **Definition:** Cost already spent and not recoverable, which should not drive a forward-looking decision.
- **Example:** The four months already spent on a feature, when deciding whether to spend three more.
- **Non-example:** The remaining cost of finishing the project.
- **Owning chapter:** C02
- **Status:** defined

### `[[survivorship-bias]]` — survivorship bias

- **Definition:** Drawing conclusions from the items that remain after a selection process while ignoring those removed by it.
- **Example:** Concluding that a feature drives retention because users who stayed a year all used it, when users who left early never had the chance.
- **Non-example:** A retention analysis that follows every user from sign-up, including those who left.
- **Owning chapter:** C12
- **Status:** defined

### `[[switching-cost]]` — switching cost

- **Definition:** The cost, in money, time, effort or risk, a customer bears to change from one provider to another.
- **Example:** Moving years of documents, habits and integrations to a different service.
- **Non-example:** A cancellation fee that customers resent but can easily avoid by exporting.
- **Owning chapter:** C18
- **Status:** defined

### `[[symptom]]` — symptom

- **Definition:** An observable sign of a problem, which may be fixed in one instance without removing what produces it.
- **Example:** Checkout conversion fell.
- **Non-example:** A payment-library update that broke one step on older phones.
- **Owning chapter:** C03
- **Status:** defined

### `[[take-rate]]` — take rate

- **Definition:** The share of transaction value that a platform keeps.
- **Example:** A platform keeping 20% of each sale.
- **Non-example:** The share of visitors who convert.
- **Owning chapter:** C19
- **Status:** defined

### `[[teardown]]` — teardown

- **Definition:** A structured analysis of how a product works and why, covering design, strategy and economics, from public information and use.
- **Example:** Walking a competitor's sign-up flow, noting its pricing and distribution from public sources, and labeling what is observed, inferred and unknown.
- **Non-example:** A list of features copied from a rival, or claims about the rival's internal metrics.
- **Owning chapter:** C11
- **Status:** defined

### `[[technical-debt]]` — technical debt

- **Definition:** The accumulated cost of earlier shortcuts or aging design choices in a system, which makes later changes slower or riskier; the principal is the work to fix it and the interest is the extra cost paid each time the team works around it.
- **Example:** A fragile billing module that costs 15% of a team's capacity in workarounds each sprint.
- **Non-example:** A feature the team has not built yet.
- **Owning chapter:** C16
- **Status:** defined

### `[[threshold]]` — threshold

- **Definition:** The score above which a classifier's output triggers an action; moving it trades one kind of error for the other.
- **Example:** Flag every item scoring above 0.7.
- **Non-example:** The model's score itself.
- **Owning chapter:** C23
- **Status:** defined

### `[[throughput]]` — throughput

- **Definition:** The amount of work a system completes per unit of time, such as requests per second; it is distinct from latency.
- **Example:** A service handling 20,000 requests per second.
- **Non-example:** How long one request takes.
- **Owning chapter:** C21
- **Status:** defined

### `[[time-box]]` — time-box

- **Definition:** A fixed period given to a piece of work, with scope that flexes to fit.
- **Example:** Two weeks to build the best first slice of a feature, then reassess.
- **Non-example:** An open-ended task with a fixed scope and no date.
- **Owning chapter:** C15
- **Status:** defined

### `[[token]]` — token

- **Definition:** A chunk of text, often a word or part of a word, that a language model reads and writes; models are priced, limited and slowed by tokens.
- **Example:** About 1,000 tokens is roughly 750 English words.
- **Non-example:** A security token used to log in.
- **Owning chapter:** C24
- **Status:** defined

### `[[total-addressable-market]]` — total addressable market

- **Definition:** The total revenue available if every potential customer bought the product; narrower layers (serviceable and obtainable market) are the usable ones for planning.
- **Example:** A $60 million ceiling for pet telemedicine in three to five years, of which an entrant might obtain 10%.
- **Non-example:** One percent of a multi-trillion-dollar industry used as a market size.
- **Owning chapter:** C18
- **Status:** defined

### `[[tradeoff]]` — tradeoff

- **Definition:** A choice in which gaining on one dimension costs something on another, stated with what is given up.
- **Example:** Shipping two weeks sooner by cutting the search filters from the first release.
- **Non-example:** Calling one option "best" without naming its cost.
- **Owning chapter:** C02
- **Status:** defined

### `[[training-data]]` — training data

- **Definition:** The set of past examples a model learns from.
- **Example:** Millions of past payments with the outcome of whether each was later disputed.
- **Non-example:** The new cases the model will be used on.
- **Owning chapter:** C23
- **Status:** defined

### `[[trust-and-safety]]` — trust and safety

- **Definition:** The work of protecting users and a platform from abuse, fraud, harassment, harmful content and manipulation through policy, product design, detection and enforcement, against adversaries who adapt.
- **Example:** Designing layers of prevention, detection, review and appeals for a live-video feature.
- **Non-example:** A report button with no policy, detection or appeals behind it.
- **Owning chapter:** C27
- **Status:** defined

### `[[trust-signal]]` — trust signal

- **Definition:** A visible cue that tells a person a product, a person or a payment is legitimate and safe, whose absence can stop a transaction.
- **Example:** A cash agent who is a shopkeeper the customer already knows, or a receipt in the local language.
- **Non-example:** A security badge nobody recognizes.
- **Owning chapter:** C09
- **Status:** defined

### `[[two-sided-market]]` — two-sided market

- **Definition:** A market with two distinct groups of participants who need each other, where the platform's value to each group depends on the size and quality of the other.
- **Example:** Riders and drivers; buyers and sellers.
- **Non-example:** A product with many users who do not interact with one another.
- **Owning chapter:** C19
- **Status:** defined

### `[[underserved-user]]` — underserved user

- **Definition:** A person or group that existing products fail because of cost, access, ability or context, described by what the product lacks for them and not by who they are.
- **Example:** Adults in a rural district with a shared basic phone and no internet, who live far from a clinic.
- **Non-example:** "The poor," which is a label and gives no design direction.
- **Owning chapter:** C09
- **Status:** defined

### `[[unit-economics]]` — unit economics

- **Definition:** The revenue and cost attached to a single unit, such as a customer or an order, showing whether each unit makes money.
- **Example:** Average revenue per order minus delivery, payment and support cost per order.
- **Non-example:** Total company profit.
- **Owning chapter:** C18
- **Status:** defined

### `[[usability-heuristic]]` — usability heuristic

- **Definition:** A rule of thumb for judging whether an interface is easy to use, applied by an evaluator without users.
- **Example:** Checking that every error message says what went wrong and what to do next.
- **Non-example:** A usability test, which watches real users attempt tasks.
- **Owning chapter:** C10
- **Status:** defined

### `[[user-segment]]` — user segment

- **Definition:** A group of users defined by shared needs or behavior that matter to the decision at hand.
- **Example:** Weekly commuters who change routes often.
- **Non-example:** "Women", with no link to a need or behavior.
- **Owning chapter:** C06
- **Status:** defined

### `[[user-story]]` — user story

- **Definition:** A short description of a capability from the user's point of view, usually in the form 'As a [user], I want [capability] so that [benefit].'
- **Example:** As a shopper planning a trip with a friend, I want to share my packing list so that my friend can tick things off.
- **Non-example:** 'Add a share button,' which names a control and no purpose.
- **Owning chapter:** C16
- **Status:** defined

### `[[value-metric]]` — value metric

- **Definition:** The unit on which price is charged, such as seats, tasks, storage, transactions or outcomes, chosen so that price grows as the customer's value grows and as the seller's cost grows.
- **Example:** A per-seat price with an included allowance of tasks and a per-task overage.
- **Non-example:** A flat price unrelated to use.
- **Owning chapter:** C20
- **Status:** defined

### `[[vanity-metric]]` — vanity metric

- **Definition:** A number that rises reliably and flatters but does not tell you whether the product is working or what to do; a test is whether any decision would change if it fell.
- **Example:** Registered users, which only ever grows.
- **Non-example:** Weekly active users who return in each of four consecutive weeks, by cohort, with a guardrail.
- **Owning chapter:** C29
- **Status:** defined

### `[[webhook]]` — webhook

- **Definition:** A message one system sends to another's web address when an event happens, so the receiver need not keep asking.
- **Example:** A payments service telling a merchant's server that a payment succeeded.
- **Non-example:** A merchant polling every minute to ask whether anything changed.
- **Owning chapter:** C22
- **Status:** defined

### `[[willingness-to-pay]]` — willingness to pay

- **Definition:** The most a customer is prepared to pay for something, which varies by customer and by what they compare it with.
- **Example:** A survey in which 41% of target customers say they would buy at $449.
- **Non-example:** The cost of producing the product.
- **Owning chapter:** C20
- **Status:** defined
