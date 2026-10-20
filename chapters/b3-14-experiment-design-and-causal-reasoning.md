---
id: C14
title: Experiment Design and Causal Reasoning
tier: 1
competencies: [analytics]
prerequisites: [C05, C12, C13]
defines_terms: [experiment, randomization, causal-effect, counterfactual, confounder, minimum-detectable-effect, sample-ratio-mismatch, interference, novelty-effect, holdout, peeking, difference-in-differences, a-b-test]
uses_terms: [metric, guardrail-metric, counter-metric, proxy-metric, funnel, retention, cohort, hypothesis, estimation, order-of-magnitude, statistical-power, p-value, confidence-interval, practical-significance, effect-size, base-rate, simpsons-paradox, survivorship-bias, regression-to-the-mean, multiple-comparisons, standard-error, mix-shift, baseline, seasonality, pull-forward, network-effect, cannibalization, reversible-decision, goodharts-law, say-do-gap, user-segment]
frameworks: [FW-C14-01, FW-C14-02, FW-C14-03, FW-C14-04, FW-C14-05, FW-C14-06, FW-C14-07, FW-C14-08]
case_studies: [CS-C14-01 (Illustrative), CS-C14-02 (Verified)]
cross_refs_out: [C02, C03, C05, C06, C08, C12, C13, C15, C17, C25, C33, C34]
cross_refs_pending: []
status: draft
---

# C14 — Experiment Design and Causal Reasoning

## 1. What interviewers test

"How would you test this?" and "The test shows a lift; do we ship?" are standard product questions, and the best candidates answer them the same way: they decide what decision the test serves, say who is randomized and what is measured, and say in advance what result would lead to what action. Weaker answers say "run an A/B test" and stop. Another common weak answer is to compare numbers before and after a launch and call the difference the effect of the launch.

**Where it shows up.** `Inferred` from the round structures candidates commonly report: experiment design and interpretation questions appear in analytical and execution rounds at Google, Meta, Microsoft, Amazon, Apple, Netflix and Stripe, with the heaviest emphasis at companies known to run very large numbers of online tests `[unverified: candidate-reported]`. On the job it is a PM's regular work: deciding what to test, defining success before the data arrive, reading a readout and saying ship, hold or roll back.

**What is scored.** Causal reasoning and judgment, not formulas `Inferred`. Interviewers listen for whether you separate correlation from effect, whether you randomize at a sensible unit, whether you name a primary metric, guardrails and a decision rule before seeing results, whether you size the test and know the usual threats to a valid result, and whether you have something sensible to say when randomization is not possible.

Six observable behaviors:

1. You state the decision, the hypothesis and what you would do under each outcome before designing the test.
2. You choose the unit of randomization with a reason and analyze at that unit.
3. You name one primary metric, the guardrails and the decision rule in advance.
4. You size the test (effect worth detecting, sample, duration) and say what you would do if it is too long.
5. You name the validity threats that matter here (sample-ratio mismatch, novelty, interference, peeking) and how you would check them.
6. You say what you would do when you cannot randomize, and how much weaker the evidence is.

**The failure this prevents.** Six patterns end experiment answers: "run an A/B test" with no design, a before-and-after comparison presented as an effect, a long list of metrics with no primary, no decision rule, trusting a result without checking that the groups were split as planned, and shipping on the first day the result turns significant.

## 2. The concept from first principles

### C14.1 Causation versus correlation; the counterfactual

A **causal effect** is the difference in outcome caused by a change, compared with what would have happened without it. The comparison is with a **counterfactual**: what would have happened to the same units if they had not received the change. The difficulty is that you never see both for the same unit. A customer either attended the webinar or did not; you observe one world.

**Why simple comparisons mislead.** Compare people who got the change with people who did not, and you are comparing two groups that may differ for reasons unrelated to the change. A **confounder** is a factor linked to both a change and an outcome that makes the observed relationship misleading. Customers who choose to attend an onboarding webinar are more motivated and more likely to renew regardless of the webinar; "webinar attendees renew more" mixes the effect of the webinar with the effect of motivation. Other traps from C12 apply: survivorship ([[survivorship-bias]]) and regression to the mean ([[regression-to-the-mean]]).

**Randomization.** **Randomization** is assigning units to variants by chance so that the groups differ, on average, only in the treatment. If a coin flip decides who gets the change, motivation, device, country and every other factor, measured or not, are balanced across the groups on average, and a difference in outcomes can be attributed to the change. An **experiment** is a controlled test in which units are randomly assigned to variants so the effect of a change can be measured. An **A/B test** is an experiment with two groups: users are randomly assigned to the current version (A) or the changed version (B), and the same metric is compared between them. [[a-b-test]] is the form most product experiments take.

**A ladder of evidence (FW-C14-02).** From weakest to strongest: an anecdote; a correlation in the data; a before-and-after comparison (confounded by anything else that changed over time); a comparison with a control group chosen by the analyst (confounded by how it was chosen); a comparison with a matched or modeled control; a randomized experiment. Each step rules out more explanations. Say which rung you are on and what it cannot rule out.

**When not to run an experiment.** When the effect is obvious and the change is a fix (a crash on one browser needs no test); when randomizing would be unsafe or unethical (withholding a safety warning); when the traffic is too small to detect any worthwhile effect; when the change is cheap and reversible and you can learn faster by shipping and watching; and when the question is "why" and not "how much", for which research (C06) is the tool.

> **Counterexample.** A team sees that customers who attended its onboarding webinars renew at 92%, against 78% for those who did not. It concludes that webinars cause renewals and requires every new customer to attend. A year later, renewals are unchanged and complaints about the forced webinar have risen. The gap was a confounder: the customers who chose to attend were the engaged ones. A randomized invitation, where half of new customers were invited and half were not, would have shown a much smaller effect, perhaps none, and cost far less than a company-wide mandate.

**Hidden risks.** Two. *Treating the experiment as magic:* a randomized test can still be invalid (a broken split, a wrong unit, a short window), and a small, noisy result is still noisy (C12). *Treating the result as a law:* an experiment measures what happened to these users in this period; whether it generalizes to other users, other seasons or the long run is a judgment.

### C14.2 Anatomy of an experiment: unit, randomization, treatment, metrics

FW-C14-01 is a one-page design card with the parts below.

| Part | The question | Notes |
|---|---|---|
| Decision and hypothesis | What will we do differently depending on the result? What do we believe and why? | A test with no decision is research; fine, but say so |
| Unit | Who or what is randomized: user, account, device, session, store, city, a cluster of friends? | Pick the unit at which the treatment is experienced and at which outcomes should be independent |
| Randomization | How is assignment made? | A stable hash of the unit ID with an experiment-specific salt, so a unit always sees the same variant |
| Treatment and control | What exactly differs? | Keep the control the current experience; one change per test where possible |
| Exposure | Who actually could be affected? | Analyze those who reached the changed feature ("triggered" analysis) to avoid dilution |
| Metrics | One primary, a few guardrails, some secondary | Decided in advance (C05, FW-C05-06) |
| Analysis | What comparison, at what unit, with what interval? | Analyze as assigned (intent to treat), at the unit of randomization |
| Duration | How long, in whole weeks? | Set from the sample size (C14.3) and the need to cover weekly cycles |
| Decision rule | What result means ship, hold, roll back? | Written before the data arrive (C14.5) |

**The unit.** Randomize at the level at which the change is experienced and at which behavior is independent. For a page layout, the user (so a person does not see different layouts on different visits). For a pricing change, perhaps the account or the market. If the unit of randomization is the user but you analyze at the level of sessions or page views, the observations are not independent and your intervals are too narrow (C12.3).

**Consistency.** A unit should see one variant throughout. If a person is assigned by cookie and uses two devices, they may see both, which contaminates the comparison; assign by a logged-in identifier where there is one.

**A/A tests.** Running a test in which both arms are identical checks the machinery: about 5% of such tests should show a significant difference by chance, and a much higher rate signals a faulty setup. Teams use A/A tests to validate a new experimentation system.

**Why it works.** The card forces the decisions that are otherwise made implicitly and wrongly. **When not to fill in every row.** For a trivial, reversible change, the unit, the primary metric and the decision rule are enough.

### C14.3 Power, minimum detectable effect, duration and sample size at PM depth

C12.4 introduced power and the rule of 16. Here is how it is used in design. The **minimum detectable effect** is the smallest true effect a test is designed to detect with stated power and significance. It should come from the decision: the smallest effect that would justify shipping given its cost (C12.5), not the smallest effect the traffic can reveal.

**The planner (FW-C14-04).** (1) Write the baseline rate and the smallest worthwhile effect. (2) Users per arm ≈ 16 × p(1 − p) ÷ δ² for 80% power at 5% significance. (3) Divide by the daily eligible users per arm to get days, and round up to whole weeks so that every weekday appears equally in both arms. (4) If it is too long, raise the minimum effect if the decision allows, narrow to the people the change can affect, choose a more sensitive metric, accept lower power with a staged rollout, or decide without a test.

**Dilution.** The effect you can detect depends on who is in the analysis. If a feature is seen by only 10% of users, and the metric is something every user has (say, a 20% weekly purchase rate), a +2 point effect among those who see it is only +0.2 points across everyone. Analyzing all users needs 16 × 0.16 ÷ 0.002² = 640,000 users per arm. Analyzing only the exposed needs 16 × 0.16 ÷ 0.02² = 6,400 exposed users per arm, which at 10% exposure is 64,000 users per arm of traffic. The triggered analysis needs a tenth of the traffic. The cost: you must log exposure correctly and trigger identically in both arms (otherwise you create a sample-ratio problem, C14.4).

**Other design choices.** *Split:* 50/50 maximizes power for two arms; unequal splits (90/10) cost power and are used for safety. *Number of variants:* each added arm needs its own sample and adds comparisons (C12.7). *Duration:* at least one full weekly cycle, usually longer if behavior takes time to settle (novelty, C14.4). *Variance reduction:* using each user's behavior before the test to sharpen the comparison can cut the sample needed substantially; a data scientist will set it up, and a PM should know that it exists (C14.7).

**Why it works.** A sized test is a test that can answer the question; many tests are run too small to see the effect they were meant to find. **When not to size at length.** For a quick feasibility check in an interview, the rule of 16 and one sentence on duration are enough.

### C14.4 Validity threats: sample-ratio mismatch, novelty and primacy, interference, contamination, peeking

A result is only as good as the test that produced it. FW-C14-03 is a checklist of threats, with a check and a remedy for each.

**Sample-ratio mismatch.** A **sample-ratio mismatch** is a difference between the planned and observed split of units across variants, larger than chance allows, that signals a problem in assignment or logging. Suppose 1,000,000 users are assigned 50/50 and the readout shows 508,000 in control and 492,000 in the variant. The expected count is 500,000 each, and the standard deviation of the count is √(1,000,000 × 0.25) = 500, so the gap of 8,000 is 16 standard deviations: not chance. A smaller gap, 501,000 against 499,000, is 2 standard deviations (p ≈ 0.046), which would occur by chance about once in 22 tests; teams therefore set a stricter alarm (for example p below 0.001) for this check. A real mismatch means something differs between arms in who is counted: a bot filter applied to one arm, a slower variant that loses users before the event is logged, a redirect that fails, an assignment made after exposure. When it fires, the results are untrustworthy, whatever they say. Find the cause, fix it and rerun.

**Novelty and primacy.** The **novelty effect** is a temporary change in behavior because something is new, which fades as the novelty wears off. A new layout can draw extra clicks in the first week because it is different, and the lift shrinks as people get used to it. The mirror image, sometimes called a primacy or change-aversion effect, is a temporary dip because people dislike change before they adapt. The check is to look at the effect over time, by day or week since the user's first exposure, and to compare new users (who have no old habit) with existing users. A lift that decays toward a stable level tells you the long-run effect is the stable level. Run long enough to see it settle, or keep a long-term holdout (C14.6).

**Interference.** **Interference** is when one unit's treatment affects another unit's outcome, so that the control group is not a clean picture of no change. It is common wherever people or sellers interact. In a social product, if treated users send more messages, control users receive them and change their own behavior. In a marketplace, if treated buyers get a discount, they take supply away from control buyers. In both cases the measured difference between arms is not the effect you would see if everyone were treated. Remedies: randomize clusters (whole friend groups, cities, markets) so that interaction stays within an arm; use time-based alternation (switchback) in a marketplace; or measure spillover directly.

**Contamination.** Users who see both variants (two devices, shared accounts, a bug in assignment) blur the comparison and understate any effect. Assign by a stable identifier and check the share of units seen in both arms.

**Peeking.** **Peeking** is checking the results repeatedly during a test and stopping when the difference first looks significant, which inflates false positives. If nothing is going on and you test at the 5% level once, you are wrong 5% of the time. Look at accumulating data at 2 equally spaced points and stop at the first significant one, and the false-positive rate is about 8%; at 5 looks, about 14%; at 10 looks, about 19%; at 20 looks, about 25% (simulated for this chapter, consistent with the sequential-testing literature). The remedies are to fix the sample size and the duration in advance and look once at the end, or to use a sequential method designed for repeated looks, which a data scientist can set up. Watching a dashboard for problems (a guardrail that signals harm) is different from stopping early for success.

**Other threats.** *Ramping the split mid-test:* if the share of traffic in the variant changes over time and behavior varies over time, the pooled comparison can be Simpson's paradox (C12.7); analyze by period or keep the split constant. *Instrumentation differences* between arms (a new event logged only in the variant). *Seasonality or an external event* during the test, which affects both arms equally but can change who shows up. *Carryover:* a user's earlier experience (a previous test) influences their behavior now; keep tests from the same user population separate or randomize independently and check interactions.

**Why it works.** The checklist catches the failures that make a clean-looking result wrong. **When not to run all checks.** Prioritize SRM (always), the over-time pattern (for any visible change) and interference (for anything social or two-sided).

### C14.5 Primary and guardrail metrics; ship, hold or roll-back decision rules

Decide before the data arrive what you will do under each result. FW-C14-05 is the table.

**One primary metric.** The metric the decision rests on, tied to the problem the change addresses (C05, FW-C05-06). A primary metric chosen after seeing which one moved is a result found by searching ([[multiple-comparisons]]).

**Guardrails.** Metrics that must not get worse: speed, errors, support contacts, cancellations, revenue per user, safety signals. For each, set a **margin**: the largest harm you would accept, written as a number ("support contacts must not rise by more than 3%"). A guardrail passes if the interval for the change lies within the margin, not merely if the point estimate looks small.

**Secondary metrics.** Explain the mechanism (did clicks rise because more people started, or because the same people clicked more?). They inform but do not decide, and with many of them, some will look significant by chance, so treat surprises as hypotheses.

**The decision rule.** A template:

- *Ship* if the lower end of the primary interval is at or above the smallest worthwhile effect, and every guardrail's interval is within its margin.
- *A looser, common variant* ships if the interval excludes zero and the point estimate is at least the smallest worthwhile effect. The strict version above needs a larger sample than a test powered only to detect the target effect, because the lower end of the interval, not the estimate, must clear the threshold; say which version you are using.
- *Hold or extend* if the primary interval straddles the threshold (not enough data) and guardrails are fine: collect more, or decide on judgment with a staged rollout.
- *Do not ship, or roll back* if the primary interval lies below the threshold, or a guardrail's interval breaches its margin.

**If the rule seems wrong when the result arrives.** Do not rewrite it to fit. Follow it, note why it felt wrong, and change the rule for next time; if the stakes justify it, rerun with the better rule. Changing the rule after seeing the data is the experimental version of moving the goalposts.

**Why it works.** A rule written first turns the readout into a decision and prevents motivated reading. **When not to be rigid.** If the result reveals something the rule did not anticipate (a harm outside the guardrails), the right move is to pause and investigate, and to say so.

### C14.6 When you cannot randomize

Sometimes you cannot randomize: the change is global (a price change for a whole market), the units cannot be separated, the change has already shipped, or randomizing is unacceptable. FW-C14-06 lists approaches in order of strength, with what each assumes. They are at awareness depth: know the idea, the assumption and the main risk, and know when to call a data scientist.

**Holdouts.** A **holdout** is a group deliberately kept from a change (or a set of changes) for a period so that its outcome serves as the comparison, often over a long horizon. A long-term holdout of, say, 1% of users who do not get any of a quarter's launches measures their cumulative effect and whether early gains faded. The cost is the benefit forgone by the holdout, which is small if the group is small.

**Geographic or market tests.** Treat some cities or regions and compare with matched others. The weakness is that few units (a handful of cities) make the comparison noisy, since each city has its own shocks. Use many matched pairs rather than one against one.

**Difference-in-differences.** **Difference-in-differences** is an estimate of an effect as the change over time in a treated group minus the change over time in a comparison group, which removes shared trends under the assumption that the groups would have moved in parallel without the change. Take a promotion launched in one city (invented). Conversion in the treated city went from 5.0% to 5.6%, a before-and-after gain of 0.6 points. In a comparison city with no promotion it went from 5.0% to 5.3%, so something (a season, a trend) lifted both. The estimate of the promotion's effect is (5.6 − 5.0) − (5.3 − 5.0) = 0.6 − 0.3 = +0.3 points, half the naive figure. The assumption is *parallel trends*: without the promotion the treated city would have moved like the comparison city. Check it on the weeks before the launch: if the two lines moved together then, the assumption is more credible. The risk is that city-specific shocks are not removed.

**Switchback tests.** Alternate the treatment on and off over time periods for the same market (treated Monday, control Tuesday...), used where users interact and cannot be split, such as dispatch or pricing in a marketplace. Needs enough periods, and attention to carryover between them.

**Staggered rollouts as natural experiments.** When a feature rolls out to groups at different times for operational reasons, early and late groups can be compared, provided the order was not chosen on the basis of the outcome.

**Before and after.** The weakest: anything that changed at the same time is confounded. Use only with a control, or as a first look.

**Observational methods.** Matching and regression adjustment (comparing similar users who did and did not get the change), and methods such as synthetic control, can be useful, and they rest on strong assumptions that unmeasured confounders do not matter. Say that, and call it weaker evidence.

**Why it works.** Naming the rung you are on and what it cannot rule out is the honest way to use weaker evidence. **When not to over-engineer.** If a clean experiment is possible, run it.

### C14.7 Experimentation at scale: platforms, variance reduction, long-term holdouts

Large product companies run many experiments at once on a shared platform `[V: Tang et al., KDD 2010; Kohavi and Thomke, HBR 2017]`. A PM should know the main ideas.

- **Platforms and layers.** Companies have published how they run thousands of overlapping experiments by assigning each event (for example a web search) to one experiment in each of several independent layers, so that tests of unrelated changes do not interfere `Public` `[V: Tang et al., KDD 2010]`.
- **Automatic checks.** Platforms run SRM checks and other health checks automatically and flag results that look too good, in the spirit of Twyman's law (C12.7).
- **Variance reduction.** Using a user's pre-experiment behavior as a covariate reduces noise, so tests can reach the same power with fewer users or less time (the approach commonly called CUPED).
- **Long-term holdouts.** Keeping a small group on the old experience for months to measure whether gains persist and how many small wins add up. This addresses the problem that short tests overstate effects that fade, and that a series of small wins may not sum.
- **Most ideas do not win.** Practitioners at large companies have reported that only a minority of tested ideas improve their target metric: Kohavi and Thomke write that at Google and Bing only about 10% to 20% of experiments generate positive results, and that at Microsoft as a whole one-third are effective, one-third neutral and one-third negative `[V: Kohavi and Thomke, HBR, 2017]`, which is why testing is valuable and why a PM should be comfortable with null and negative results.
- **Opportunity cost.** An experiment uses traffic, time and attention. Prioritizing which tests to run is a PM decision (C15).

**Why it works.** Knowing the vocabulary lets you talk to a data scientist and discuss tradeoffs without pretending to build the platform. **When not to go deeper.** In an interview, a sentence on layers, automatic checks and long-term holdouts is enough.

### C14.8 Reading readouts with conflicting metrics

Readouts rarely show every metric moving the right way. FW-C14-07 gives a hierarchy.

1. **Validity first.** Is there a sample-ratio mismatch? Did the test run as planned? If not, stop: the metrics do not matter.
2. **Guardrails next.** Does any guardrail's interval breach its margin? If so, the pre-set rule says do not ship as is, and the work is to understand why.
3. **Then the primary metric.** Compare its interval with the threshold.
4. **Then secondary metrics** to explain the mechanism.
5. **Then segments.** Effects can differ by group (new versus existing users, platforms). Treat a surprising segment as a hypothesis to test, since slicing finds noise (C12.7); an effect in a pre-specified segment of interest deserves more weight.
6. **Then the horizon.** Is the effect stable over time, or decaying? Is there a long-term holdout?

**Common conflicts.** *Primary up, guardrail down:* weigh the size of each in the same units (dollars, users), look for the mechanism, and consider a version that keeps the gain and removes the harm. *Short term up, long term unknown:* ship in stages with a long-term holdout. *Overall flat, segments opposite:* the average hides two effects, a case for targeting. *Many secondary metrics, one primary flat:* resist declaring a win on a secondary.

**Why it works.** The order protects against the most expensive mistakes first. **When not to apply it mechanically.** If a guardrail breach is tiny in absolute terms and the rule's margin was clearly too tight, say so and recommend a re-test with a better margin, not an override.

### C14.9 Answer architecture for experiment-design questions

Section 4 sets out the design answer with a time budget: decision and hypothesis, unit, metrics, size and duration, validity, decision rule, and what to do if you cannot randomize.

### C14.10 Worked examples

Section 5 gives six worked examples: designing a test end to end, diagnosing a sample-ratio mismatch, a novelty effect, a readout with conflicting metrics, interference in a social product and a difference-in-differences estimate. Section 11 adds eight questions with model answers, including an Apple question on testing a once-per-user flow, and one each set on a Google, a Meta and a Netflix product.

## 3. Frameworks

Eight frameworks, set out below. The six-question statistics check (FW-C12-01), the interval reading card (FW-C12-03), the significance triage (FW-C12-04), the rule-of-16 sketch (FW-C12-05), the trap detector (FW-C12-07), the success-metric template (FW-C05-06) and the good-news check (FW-C13-08) are reused, not repeated.

#### FW-C14-01 · The experiment design card · Original

- **Inputs:** a change to evaluate and a decision that depends on it.
- **Outputs:** a one-page card: decision and hypothesis, unit, randomization, treatment and control, exposure, metrics, analysis, duration and decision rule.
- **Assumptions:** the change can be assigned randomly and traffic is enough to power the test.
- **Tradeoffs:** a card adds up-front effort and saves a rerun.
- **Failure modes:** a card with no decision; a unit different from the analysis unit; a primary metric chosen after the fact.
- **Worked example:** the shipping-estimate test in Worked example 1, and the designs in section 11.

Parts: **Decision · Hypothesis · Unit · Randomization · Treatment/Control · Exposure · Primary/Guardrails/Secondary · Analysis · Duration · Decision rule.**

#### FW-C14-02 · The ladder of causal evidence · Original

- **Inputs:** a claim that a change caused an outcome and the evidence offered.
- **Outputs:** the rung the evidence sits on, what it cannot rule out, and the next stronger evidence.
- **Assumptions:** stronger evidence is available at an acceptable cost.
- **Tradeoffs:** climbing costs time and money; sometimes a lower rung is enough for a cheap, reversible decision.
- **Failure modes:** presenting a correlation as an effect; dismissing all non-randomized evidence; not naming the confounder.
- **Worked example:** the webinar counterexample in C14.1 and the notification case in CS-C14-01.

| Rung | Evidence | What it cannot rule out |
|---|---|---|
| 1 | Anecdote | Everything |
| 2 | Correlation in the data | Confounders; reverse causation |
| 3 | Before and after | Anything else that changed over time |
| 4 | Comparison with an analyst-chosen control | How the control was chosen |
| 5 | Matched or modeled control; difference-in-differences | Unmeasured confounders; parallel-trends failures |
| 6 | Randomized experiment | Invalid setup; generalization limits |

#### FW-C14-03 · The validity checklist · Original

- **Inputs:** a designed or completed experiment.
- **Outputs:** a table of threats with the check run and the remedy, and a verdict (valid, valid with limits, invalid).
- **Assumptions:** assignment and exposure logs are available.
- **Tradeoffs:** checks take time; skipping them risks acting on an invalid result.
- **Failure modes:** reading metrics before checking the split; checking only SRM; ignoring interference in a two-sided product.
- **Worked example:** the mismatch in Worked example 2 and the novelty check in Worked example 3.

| Threat | Check | Remedy |
|---|---|---|
| Sample-ratio mismatch | Compare observed split with planned (z-test; strict alarm, p < 0.001) | Find the cause; fix; rerun |
| Novelty or primacy | Effect by week since first exposure; new versus existing users | Run longer; use the stable level; long-term holdout |
| Interference | Do units affect each other (social, marketplace)? | Cluster randomization; switchback; measure spillover |
| Contamination | Share of units seen in both arms | Stable identifiers |
| Peeking | Was the stopping rule fixed? | Fixed horizon or sequential method |
| Ramping | Did the split change mid-test? | Constant split or analyze by period |
| Instrumentation | Are events logged the same in both arms? | Fix logging; A/A test |

#### FW-C14-04 · The sample-size and duration planner · Original

- **Inputs:** baseline rate, smallest worthwhile effect, daily eligible traffic, exposure share.
- **Outputs:** users per arm, duration in whole weeks, a triggered-versus-diluted comparison, and options if the test is too long.
- **Assumptions:** two arms, a proportion metric, 80% power, 5% two-sided significance, independent units.
- **Tradeoffs:** a sketch decides feasibility; important tests deserve a proper power analysis.
- **Failure modes:** choosing the effect to fit the traffic; analyzing everyone when few are exposed; ignoring weekly cycles.
- **Worked example:** Worked example 1, and the dilution arithmetic in C14.3.

Steps as in C14.3. Dilution: **effect among everyone ≈ exposure share × effect among the exposed**; analyze the exposed (triggered) and require identical triggering in both arms.

#### FW-C14-05 · The decision-rule table · Original

**Core framework.** Learn this one first.

- **Inputs:** the smallest worthwhile effect, guardrails with margins, and the costs of shipping wrongly or not shipping.
- **Outputs:** a written rule for ship, hold or extend, and do not ship or roll back, fixed before the test starts.
- **Assumptions:** margins can be set from the cost of harm.
- **Tradeoffs:** a fixed rule can feel rigid; changing it after the data is worse.
- **Failure modes:** no guardrail margins; choosing the primary metric afterward; overriding the rule silently.
- **Worked example:** the rule in Worked example 1 and its use in Worked example 4.

| Result | Action |
|---|---|
| Primary interval ≥ threshold; guardrails within margins | Ship |
| Primary interval straddles threshold; guardrails fine | Hold or extend; or staged rollout on judgment |
| Primary interval below threshold | Do not ship |
| Any guardrail interval breaches its margin | Do not ship as is; investigate; rollback if live |

#### FW-C14-06 · The no-randomization toolkit · Original

- **Inputs:** a change that cannot be randomized and the data available.
- **Outputs:** a chosen method (holdout, geographic test, difference-in-differences, switchback, staggered rollout, before and after with control), its assumption, a check on the assumption, and a note on how much weaker the evidence is.
- **Assumptions:** a credible comparison group or period exists.
- **Tradeoffs:** weaker methods are cheaper and rest on assumptions that cannot be fully tested.
- **Failure modes:** a single treated and a single control unit; no pre-period check; calling the result proof.
- **Worked example:** the promotion estimate in Worked example 6, and the Apple setup question in IQ-C14-05.

| Method | Fits | Key assumption | Check |
|---|---|---|---|
| Long-term holdout | Cumulative effects of many launches | The holdout is a random small group | Same as an experiment |
| Geographic test | Market-level changes | Matched markets behave alike | Pre-period similarity; many units |
| Difference-in-differences | A change in one group over time | Parallel trends | Pre-period trends |
| Switchback | Interacting units (marketplaces) | Little carryover between periods | Period length; carryover test |
| Staggered rollout | Rollout order not tied to outcomes | Order as good as random | How order was chosen |
| Before and after | A first look | Nothing else changed | A control |

#### FW-C14-07 · The conflicting-metrics readout · Original

**Core framework.** Learn this one first.

- **Inputs:** a readout with a primary metric, guardrails, secondary metrics and segment cuts.
- **Outputs:** a verdict in the order validity, guardrails, primary, secondary, segments, horizon, with a decision and the reasoning.
- **Assumptions:** the decision rule was set before the test.
- **Tradeoffs:** a strict order protects against motivated reading and can ignore context.
- **Failure modes:** declaring a win on a secondary metric; overriding a guardrail without saying so; trusting a surprising segment.
- **Worked example:** the readout in Worked example 4, and IQ-C14-07.

Order: **Validity → Guardrails → Primary → Secondary → Segments → Horizon → Decision.**

#### FW-C14-08 · The low-frequency-event design · Original

- **Inputs:** a change to something users do rarely or once (device setup, sign-up, a yearly renewal), so outcomes arrive slowly.
- **Outputs:** a design that uses proxy metrics measured soon after, cohorts over a longer horizon, a holdout, and qualitative evidence, with the link between proxy and outcome stated.
- **Assumptions:** the proxy plausibly predicts the real outcome; the cohorts are comparable.
- **Tradeoffs:** proxies arrive fast and may not predict the outcome; waiting for the outcome is slow.
- **Failure modes:** treating a proxy as the goal ([[goodharts-law]]); a test too short to see the outcome; ignoring that each user is measured once.
- **Worked example:** the device-setup test in IQ-C14-05.

Steps: (1) name the real outcome and its delay; (2) choose proxies that arrive early and predict it, and state how you would validate the link; (3) run the test in cohorts so each user is in one arm; (4) hold out a small group for the long outcome; (5) add qualitative evidence (watch sessions, support contacts); (6) decide on the proxy and the guardrails, and check the long outcome later.

## 4. Answer architecture

### The experiment-design answer, for a 30-minute round

| Step | Minutes | What to produce |
|---|---|---|
| Decision and hypothesis | 4 | What we will do under each result; the hypothesis and the mechanism |
| Unit and randomization | 4 | The unit with a reason; assignment; exposure and trigger; contamination risk |
| Metrics | 5 | One primary, guardrails with margins, a few secondary metrics |
| Size and duration | 5 | Baseline, smallest worthwhile effect, users per arm, whole weeks; what if too long |
| Validity | 5 | SRM, novelty, interference, peeking; the checks and remedies that matter here |
| Decision rule and readout | 4 | Ship, hold, do not ship; how conflicting metrics are read |
| If you cannot randomize | 3 | The method, its assumption and how much weaker the evidence is |

**Pacing rules.** If the interviewer gives the metric or the unit, spend the time on validity and the decision rule. If you run behind, keep the decision rule, the unit and the SRM check. Treat questions as steering and rejoin the card.

**How to say it.** State the decision first: "What would we do if it wins, and if it loses?" State the rule in advance: "I'd ship only if the lower end of the interval is above a 0.5 point lift and support contacts stay within 3%."

**How to close.** Two sentences: "I'd randomize [unit] 50/50, measure [primary] with [guardrails], run [n] weeks, and ship if [rule]. The threats I'd watch are [two], and I'd change my plan if [condition]."

### Type: design a test

Use the design card (FW-C14-01). Spend the middle on the unit, the metric and the decision rule.

### Type: read a result

Use the validity checklist first, then the readout order (FW-C14-07), then the triage from C12 (FW-C12-04).

### Type: you can't randomize

State the rung of the ladder (FW-C14-02), choose a method from the toolkit (FW-C14-06), name its assumption and the check, and say how much weaker the evidence is.

### Type: rare or slow events

Use the low-frequency design (FW-C14-08): proxies, cohorts, a holdout and qualitative evidence.

### Type: the short version (10 minutes)

Decision, unit, primary metric and guardrail, sample size sketch, SRM check and decision rule. Protect the decision rule.

### Common interviewer interventions, and what to do

| Interviewer says | What it means | What to do |
|---|---|---|
| "Why not just compare before and after?" | They test the counterfactual | Name what else changed over time; propose a control |
| "What is your unit?" | You did not choose one | Choose with a reason; say you analyze at that unit |
| "What's your primary metric?" | You listed many | Choose one tied to the problem, with guardrails |
| "How long will it run?" | They want a sketch | Use the rule of 16; round to whole weeks |
| "The split is 51/49." | A possible SRM | Compute the z-score; set the strict alarm; look for the cause |
| "The lift is shrinking each week." | Novelty | Look by time since exposure; use the stable level |
| "What if the groups affect each other?" | Interference | Cluster randomization or switchback |
| "You can't randomize." | A different question | Name the method, the assumption and the weaker evidence |

## 5. Worked examples

All six examples are `Illustrative`; the products are fictional or use a product type as the setting only, and every figure is an invented assumption. The arithmetic was computed. Each follows the design card (FW-C14-01) and is written as notes you could say aloud; a spoken answer is shorter.

### Worked example 1 — Designing a test end to end: a shipping-cost estimate on the cart page (Illustrative)

**The situation.** A shop wants to show an estimated shipping cost on the cart page, hoping more people finish buying (invented). Building the estimate needs a shipping-rate service that costs money to run.

**Decision and hypothesis.** The decision is whether to keep the service running. Hypothesis: people abandon carts because shipping is a surprise at the last step; showing the cost early removes the surprise and raises the share who buy.

**Unit and randomization.** The user, assigned 50/50 by a stable hash of the user ID with this test's own salt, so a user sees one version on every visit and device where they are logged in. Exposure: the change is visible only on the cart page, which 40% of visitors reach. Log "reached the cart" identically in both arms and analyze only users who did (a triggered analysis).

**Metrics.** Primary: the share of cart-reaching users who buy (baseline 10%). Guardrails: checkout error rate (must not rise by more than 0.2 points), page speed at the 95th percentile (no more than 50 milliseconds slower), and support contacts about shipping per 1,000 orders (no more than a 3% rise). Secondary: whether more users start checkout, and average order value.

**Size and duration (FW-C14-04).** The smallest effect worth the service's cost is +1 point (10% to 11%). The rule of 16 gives 16 × 0.10 × 0.90 ÷ 0.01² = 14,400 cart-reaching users per arm (an exact calculation gives about 14,750). With 20,000 visitors a day, 8,000 reach the cart, which is 4,000 per arm per day, so the sample arrives in 3.6 days. I would run two full weeks anyway: two weekly cycles, and time to see whether the effect fades.

**Validity plan.** Check the split before reading any metric. Look at the effect by week and for new versus returning users. No interference (one person's cart does not affect another's). Fix the duration in advance and look once at the end, with a dashboard watch on the guardrails only.

**Decision rule (FW-C14-05), written before the test.** Ship if the interval for the lift excludes zero and the estimate is at least +0.5 points, and every guardrail's interval is within its margin. Extend if the estimate is at least +0.5 but the interval includes zero. Do not ship if the upper end of the interval is below +0.5 points, or if a guardrail breaches its margin.

**What this shows.** Every row of the card was filled before launch, and the rule was fixed before the data. The sample was small because the analysis was limited to the people who could be affected.

### Worked example 2 — A sample-ratio mismatch that created a fake win (Illustrative)

**The situation.** A test assigns 1,000,000 users 50/50 (invented). The assignment log shows 500,000 in each arm. The analytics readout shows 500,000 users in control and 492,000 in the variant, and a conversion of 5.00% in control against 5.08% in the variant, a "+1.6% lift."

**Check the split first (FW-C14-03).** The analytics counts total 992,000, so the expected count per arm is 496,000. The control has 500,000 and the variant 492,000, a gap of 4,000 from expectation. The standard deviation of an arm's count is √(992,000 × 0.25) ≈ 498, so the gap is about 8 standard deviations: far beyond the strict alarm (p below 0.001) and certainly not chance. A sample-ratio mismatch.

**Where did 8,000 users go?** The assignment log says each arm got 500,000, so 8,000 variant users were assigned and then not logged. The variant page has a heavy new script and loads more slowly (the team's own note on the change). Users who leave before the analytics event fires are never counted. Those are likely the lowest-intent users, who rarely buy.

**What it does to the result.** Suppose both arms truly convert at 5.00%, so each has 25,000 purchases from 500,000 users. In the readout, the variant's 25,000 purchases are divided by only 492,000 logged users: 25,000 ÷ 492,000 = 5.08%. The entire "+1.6% lift" (5.08 against 5.00) comes from dropping the 8,000 users who would not have bought. Another way to see it: the variant is not better, and it loses 1.6% of its users before they are counted.

**What to do.** Do not read the conversion result. Compare assignment (server-side) with analytics, and use the assignment log as the denominator: purchases per assigned user, 5.00% in both arms. Then ask the more important question the artifact exposed: the variant is slow enough to lose 1.6% of visitors before the page finishes loading, which is itself a harm worth measuring as a guardrail (page speed, bounce). Fix the cause and rerun or analyze on assigned users.

**What a smaller gap means.** A split of 501,000 against 499,000 on 1,000,000 users is 2 standard deviations (p ≈ 0.046), which chance produces about once in 22 tests. It is a reason to look, not to throw the test away; hence the stricter alarm.

**What this shows.** A clean-looking win was produced by differential loss of users. The split check, run before the metrics, caught it.

### Worked example 3 — A novelty effect: the lift that kept shrinking (Illustrative)

*Setting: a streaming service of the kind Netflix operates. No fact about any real product is claimed.*

**The situation.** A redesigned homepage row for choosing what to watch is tested for six weeks (invented). The weekly lift in viewing starts per member, treatment against control:

| Week | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Lift | +6.0% | +3.5% | +1.8% | +1.2% | +1.0% | +1.0% |

The lift decays and settles near +1%. The average over six weeks is about 2.4%; the average of the first two weeks is 4.75%.

**Split by tenure.** Among existing members, the lift was +7.5% in week 1 and +0.6% in week 5. Among new members it was +2.0% in week 1 and +1.9% in week 5.

**Reading it.** The decay is a novelty effect: existing members, who knew the old layout, explored the new one at first and then returned to their habits. New members, who have no old habit, show a stable +2%. The effect to plan around is the stable level, about +1% overall and +2% for new members. A test stopped after two weeks would have reported nearly +5%, almost five times the settled value.

**Decision.** Report the effect at the stable level (weeks 4 to 6), not the average, and say that the early weeks are not representative. Ship, because a stable positive effect with no guardrail harm is a win, and keep a 2% long-term holdout (C14.6) to confirm the effect persists over months. If the layout had been designed mainly for new members, consider showing it first to them.

**Mirror image.** If the lift had started negative and recovered, that would be change aversion, and the same remedy applies: watch the trend by time since first exposure and judge by the settled level.

**What this shows.** A single number for the whole test hid the pattern; the trend by week and the split by tenure showed which part was durable.

### Worked example 4 — A readout with conflicting metrics (Illustrative)

**The situation.** A test of a redesigned checkout ran two weeks (invented). The pre-set rule: ship if the primary interval is at or above +0.2 points and every guardrail is within its margin; the support-contacts guardrail margin is +3%. The split passes the sample-ratio check.

| Metric | Result | 95% interval | Rule |
|---|---|---|---|
| Purchase rate (primary), control 5.00% | +0.30 points | +0.10 to +0.50 | Lower end 0.10 is below the +0.2 threshold |
| Support contacts per 1,000 orders (guardrail), control 20.0 | +4% | +0.5% to +7.5% | Upper end 7.5% exceeds the +3% margin |
| Page speed, 95th percentile (guardrail) | +10 ms | −5 to +25 ms | Within the 50 ms margin |

**Apply the order (FW-C14-07).** *Validity:* passes. *Guardrails:* support contacts breach the margin: the interval's upper end is 7.5%, above 3%. *Primary:* +0.30 points looks good, though the interval's lower end is below the threshold. So under the rule as written, the verdict is not to ship as is.

**Put numbers on it.** Over a week with 1,000,000 visitors, control has 50,000 orders and the variant 53,000 (a +0.30 point lift is 3,000 more orders). At a $12 margin per order, the gain is about $36,000. Support contacts: control 1,000 (20 per 1,000 orders); variant 53,000 × 20.8 ÷ 1,000 ≈ 1,102, about 102 more contacts. At $5 per contact, that is about $510. In dollars the harm is small against the gain.

**So is the guardrail wrong?** Possibly, and the discipline is not to decide that after seeing the result. The margin exists because contacts are a signal of confusion, which can cost more than the handling cost: refunds, chargebacks, lost trust. Look at the mechanism (a secondary metric): what are the extra contacts about? If they are about an unexpected charge or a confusing label, the redesign has a flaw that can be fixed, and the primary gain may be partly built on misleading users.

**Decision.** Hold the full launch. Fix the cause of the extra contacts (clear the label), run a short confirmation test or a staged rollout with the guardrail monitored, and record that for next time the margin should be stated in dollars and in user-experience terms together. Note too that the primary interval's lower end (+0.10) is under the +0.2 threshold: even without the guardrail, the strict rule would say extend. Do not ship on the point estimate alone.

**What this shows.** The order (guardrails before the headline) and a pre-set rule kept a good-looking primary result from overriding a warning sign, and quantifying both sides showed that the answer was to fix the flaw, not to choose between them.

### Worked example 5 — Interference: when control users are affected too (Illustrative)

*Setting: a social product of the kind Meta operates. No fact about any real product is claimed.*

**The situation.** A new suggestion feature is meant to help people find friends to connect with. The outcome is friend requests sent per user per week.

**A user-level test.** Users are randomized individually. Result: treated users send 10% more requests than they did before; control users, who do not have the feature, send 2% more, because treated friends now send them requests and reply, which prompts them to send more. The measured difference is about +8%.

**Why it is misleading.** The control group is not a picture of "no feature." Some of the treatment effect has leaked into it through the network. The +8% understates what would happen if everyone had the feature, since the control's rise is partly the feature's doing.

**A cluster test.** Randomize whole communities (groups of about 100 closely connected people) so that most friends are in the same arm. Result: treated communities send 11% more requests than control communities, which are flat. The cluster estimate, +11%, is closer to the effect of launching to everyone.

**The marketplace mirror.** Take a discount tested on individual buyers who compete for the same limited supply of sellers (invented). Treated buyers book 12% more, and control buyers book 3% fewer, because the treated took the available supply. The measured gap is +15%, but if everyone had the discount, no one could take supply from anyone, and the total effect might be about +6%. Interference here overstates the effect.

**What to say in an interview.** "Wherever units affect each other (a social network, a marketplace, a shared resource) a user-level test can give a biased answer in either direction. I'd randomize clusters, such as communities or markets, or alternate the treatment over time in a market, accept fewer units and wider intervals, and check the size of spillover."

**What this shows.** The direction of the bias depends on whether interaction spreads benefit (understatement) or competes for a fixed pool (overstatement).

### Worked example 6 — No randomization: a price change in one market (Illustrative)

**The situation.** A subscription service raised its price from $10 to $11 in one market, with no test (invented). New sign-ups per 1,000 visits went from 40 to 34 in that market. A comparison market with no price change went from 40 to 38 over the same weeks, because of a seasonal dip.

**The naive reading.** Before and after in the treated market: 34 − 40 = −6 sign-ups per 1,000 visits. Revenue per 1,000 visits fell from 40 × $10 = $400 to 34 × $11 = $374, a loss of $26, which looks like a clear mistake.

**Difference-in-differences (FW-C14-06).** The comparison market shows that without a price change, sign-ups would have fallen by 2 (to 38) because of the season. The price effect on sign-ups is (34 − 40) − (38 − 40) = −6 − (−2) = −4 per 1,000 visits, which is a 10.5% fall (4 of 38) for a 10% price rise. Revenue per 1,000 visits: with the price change, 34 × $11 = $374. Counterfactual without it, 38 × $10 = $380. The effect on first-period revenue is −$6, about −1.6%, much smaller than the −$26 the naive comparison suggests, so the price change is about revenue-neutral on first-period revenue.

**Assumptions and checks.** *Parallel trends:* absent the price change, the treated market would have moved like the comparison market. Check the weeks before the change: if the two markets' sign-ups moved together then (say 40, 40, 41, 40 against 40, 41, 40, 40), the assumption is more credible. *Shocks that hit only one market* (a competitor's launch, a local holiday) are not removed. *One treated and one comparison market* gives no way to estimate market-level noise.

**What is not covered.** First-period revenue is not lifetime value. A higher price may change who joins and how long they stay, and that takes months to see. Also the measured sign-up fall excludes any effect on existing subscribers' churn.

**Decision.** Treat the result as weak evidence that the price rise is roughly neutral on first-period revenue. Before extending it to other markets, use several matched markets (for example, ten treated and ten comparison), include a long-term holdout market, and watch retention. Say plainly that this is a lower rung of evidence than a randomized test (FW-C14-02).

**What this shows.** The naive before and after overstated the harm four-fold, and the comparison market was what made the difference visible.

## 6. Baseline, Strong, Standout

**Prompt:** "How would you test whether a new 'smart reply' suggestion feature improves messaging?"

### Baseline answer

"I'd run an A/B test: half of users get smart replies and half don't. I'd measure whether they send more messages, and ship it if the number goes up."

*What is wrong:* no decision, unit or metric definition. "More messages" is a weak and gameable measure: suggestions could raise message counts with worse conversations. There is no guardrail, duration or rule, and no thought about the person who receives the replies.

### Strong answer

"First the decision: ship the feature, or not, depending on whether it helps people communicate. I'd randomize by user, 50/50, with a stable assignment. The primary metric would be tied to the problem the feature solves: time to reply to a message, among people who received messages, since the feature is meant to make replying faster and easier. Guardrails: conversation quality (replies per conversation, the share of conversations that continue), reports of unwanted or awkward replies, and the share of messages people edit or delete after sending.

"I'd size it with the rule of 16 on the reply-time metric, run at least two full weeks, fix the duration in advance and look once at the end. I'd check the split before looking at any metric, and look at the effect by week for novelty, since a new suggestion bar is attention-grabbing at first.

"Decision rule: ship if reply time falls by a worthwhile amount, with an interval above the threshold, and no guardrail breaches its margin."

### Standout answer

Everything in the Strong answer, plus:

"Messaging is a two-sided product, so there is interference: if I randomize individual users, a treated user's quick reply lands in a control user's inbox and changes how they respond. The user-level result may be biased, so I'd randomize clusters of people who message each other, such as conversation groups, and accept a wider interval. I'd also check for spillover directly by comparing control users who talk to many treated users with those who talk to few.

"The metric needs care ([[goodharts-law]], C05): if I optimized message counts, suggestions could inflate them with shallow replies. So I'd treat reply time as the primary metric and conversation depth as a counter metric. I'd also look at who benefits and who does not: people who write long, personal replies may feel their style is being replaced; a segment cut by message length would show it.

"On the decision, there is a long-term question a two-week test cannot answer: whether people's own writing changes or whether recipients start to find replies generic. I'd keep a long-term holdout of 1% and track how recipients rate conversations.

"What would change my plan: if clusters of conversation groups are too large to give enough units, I'd fall back to user-level with a spillover check and be explicit that the estimate is biased in one direction. And I'd consult privacy and safety teams early, since suggestions are generated from message content."

### What moves an answer up a band

| From Baseline to Strong | From Strong to Standout |
|---|---|
| States the decision, unit, one primary metric and guardrails | Sees interference in a two-sided product and randomizes clusters |
| Sizes the test and fixes the duration and rule | Names a counter metric for gaming and a long-term holdout |
| Checks the split and the effect over time | States what would change the plan and brings in privacy early |

## 7. Company lens

All claims describe what companies say publicly or what candidates commonly report, not insider knowledge. Interview formats change `[as of 2026-10]`.

> **Company lens: Google [as of 2026-10].** Google engineers have published papers on infrastructure for running many overlapping experiments at once `Public` `[V: Tang, Agarwal, O'Brien and Meyer, KDD 2010]`. Candidates commonly report experiment design and interpretation questions at large scale `Inferred`. Practical consequence: state the unit and the primary metric early, and be ready for follow-ups on interference and on how you would read conflicting metrics.

> **Company lens: Amazon [as of 2026-10].** Amazon is reported to be among the companies that run very large numbers of online controlled experiments each year, according to articles by experimentation leaders `Public` `[V: Kohavi and Thomke, HBR 2017: Amazon among companies running more than 10,000 online controlled experiments a year]`. Candidates commonly report questions that probe whether you start from the customer's problem and can say what you would measure `Inferred`. Practical consequence: tie the primary metric to a customer outcome, and name guardrails that protect customer trust.

> **Company lens: Meta [as of 2026-10].** Meta researchers have published on designing online experiments and on bias from interference between connected users `Public` `[V: Eckles, Karrer and Ugander, Journal of Causal Inference, 2017]`. Candidates commonly report experiment questions in which users affect each other `Inferred`. Practical consequence: when the product is social, raise interference unprompted and propose cluster-level randomization.

> **Company lens: Microsoft [as of 2026-10].** Leaders of Microsoft's experimentation platform have written widely, including the Bing headline case in this chapter `Public` `[V: Kohavi and Thomke, HBR 2017, and the Bing headline case]`. Practical consequence: show the instinct to distrust results that look too good, and name the checks (sample ratio, logging, A/A) before celebrating.

> **Company lens: Apple [as of 2026-10].** Apple has described using differential privacy to learn about usage while limiting what it learns about individuals `Public` `[V: Apple Machine Learning Journal, Learning with Privacy at Scale (2017); Apple privacy control page]`. Third-party guides report that experiment prompts at Apple concern products used rarely or once, such as device setup, where outcomes arrive slowly `Inferred`. Practical consequence: when each user does a thing once, say how you would use proxies, cohorts and holdouts, and how measurement limits shape the design.

> **Company lens: Netflix [as of 2026-10].** Netflix publishes technical posts about its experimentation practices, including tests of how titles are presented `Public` `[V: Netflix Tech Blog posts on experimentation and resilience testing]`. Candidates commonly report data-informed prompts on presentation and engagement `Inferred`. Practical consequence: separate short-term clicks from long-term retention, and watch for novelty.

> **Company lens: Stripe [as of 2026-10].** Experiments in payments touch money, fraud and authorization rates, and businesses depend on stable behavior `Inferred` `[unverified: author's reasoning from public product descriptions; no source checked]`; Stripe publishes documentation for developers who integrate its products `Public` `[V: Stripe documentation]`. Practical consequence: use guardrails on fraud, failed payments and disputes, and say how you would limit exposure of a change that can affect money.

## 8. Common mistakes

| # | Mistake | How to detect it | Fix |
|---|---|---|---|
| 1 | "Just run an A/B test" | No decision, unit or metric | Fill in the design card first |
| 2 | Before-and-after called an effect | The comparison is across time with no control | Name what else changed; add a control |
| 3 | Randomizing one unit and analyzing another | Users randomized, sessions analyzed | Analyze at the unit of randomization |
| 4 | Many metrics, no primary | A list of ten, any of which could win | One primary, guardrails, secondary as explanation |
| 5 | No decision rule | The rule appears after the results | Write the rule before the test |
| 6 | Not checking the split | Metrics read before the allocation | Check sample-ratio first, with a strict alarm |
| 7 | Stopping when significant | "It hit significance on day 4" | Fix the horizon; or use a sequential method |
| 8 | Ignoring novelty | One average over the whole test | Plot by week and by tenure; use the settled level |
| 9 | Ignoring interference | A social or two-sided product tested by user | Cluster randomization or switchback |
| 10 | Treating a weak method as proof | A difference-in-differences with one city each | State the rung and the assumption; use many units |

## 9. Mental models applied

Four models, each tied to a decision in this chapter.

**The counterfactual** (`MM-counterfactual`). Every causal claim is a claim about a world you cannot see: what would have happened without the change. Ask "compared with what?" until you can name the comparison and say how it was formed. A randomized control is the best available stand-in; every other comparison deserves a sentence on how it could differ.

**Pre-commitment** (`MM-precommit`). Decide the rule before the evidence arrives, the way a sailor ties himself to the mast before hearing the sirens. A decision rule, a primary metric and a stopping point written down first keep you from reading the data to fit what you hoped.

**Too good to be true** (`MM-twyman`, see C12.7). Large and surprising results are more often bugs than discoveries. Run the split check, look for logging differences and check that the effect makes sense mechanistically, before believing or celebrating. The Bing case shows the right reflex: an alert for implausible results, and a check that the result was real.

**Spillover** (`MM-spillover`). A treatment given to one unit often reaches others, through a network, a shared inventory or a shared price. Whenever units are connected, ask whether the control is really untreated, and which way the bias runs: benefits that spread understate the effect, competition for a fixed pool overstates it.

## Engineering, design and data-science perspectives

- **Engineering.** The experiment depends on assignment and logging. Ask who owns the assignment service, whether assignment is logged on the server before exposure, how exposure is triggered, how the split is monitored, and how a test is switched off. Many invalid tests are logging failures. Share the design card so engineers can say what cannot be measured.
- **Design and research.** A test says whether something worked, not why. Pair it with a usability session on the change before the test (to catch confusing designs) and a few interviews or recordings after (to explain the result). Ask design what metric the new design is meant to move, and check that it is the primary one.
- **Data science.** Bring the data scientist the decision and the smallest worthwhile effect before the design. Ask them to set the sample size, the variance reduction and the monitoring, and to review the readout against the pre-set rule. Ask what the analysis cannot show, and how interference and novelty were checked.
- **Ethics, privacy and safety.** Experiments on people can harm them: confusing prices, manipulative designs, tests on emotional content or on children. Involve privacy, legal and safety teams early for changes that touch sensitive content, money or vulnerable users, and set guardrails on harm as well as on business metrics. If a test would be unacceptable to disclose to the people in it, rethink it.

## Checklist: before you launch or trust an experiment

1. Is there a decision, a hypothesis and a rule for what we do under each result?
2. Is the unit of randomization sensible, and do I analyze at that unit?
3. Is there one primary metric, with guardrails and margins set in advance?
4. Is the test sized for the smallest worthwhile effect, with a duration in whole weeks?
5. Did I check the split before reading metrics?
6. Did I check the effect over time and for interference?
7. Did I fix the stopping point, and avoid stopping when the result first looks significant?
8. If I could not randomize, did I name the method, its assumption and the weaker evidence?

## 10. Case studies

#### CS-C14-01 · The notification default that did nothing · Illustrative · Beginner

*Fictional composite. Every number is invented (invented).*

**Situation.** A fitness app's data show that users who have push notifications turned on retain at 60% after 30 days, against 30% for users who have them off. A product manager proposes to switch notifications on by default for all new users, expecting retention to rise 30 points.

**Constraints.** A two-person team, a default that can be changed back, and a review of the feature in two weeks. App-store reviews have recently mentioned too many notifications.

**Data.** The comparison is observational: users chose their setting. An analyst proposes a randomized test of the default for new users. With 10,000 new users in each arm, the results after 30 days are: retention 40.0% with the default off and 41.0% with it on, a lift of +1.0 point with a 95% interval of about −0.4 to +2.4. In the first week, uninstalls were 6.5% with the default off and 8.0% with it on, a rise of 1.5 points with an interval of about +0.8 to +2.2.

**Problem definition.** The correlation (60% against 30%) invites the belief that notifications cause retention. As an observable question: "If we turn notifications on for people who did not choose them, does retention change?"

**Analysis.** On the ladder of evidence (FW-C14-02), the first comparison is rung 2, a correlation: users who turned notifications on were already more engaged, and that engagement, a confounder, explains both the setting and the retention. The randomized test is rung 6 and shows what the default itself does. The retention effect is small (+1 point) and not distinguishable from zero, while the cost (more uninstalls in the first week) is clearly different from zero. The gap between the correlation (30 points) and the experiment (1 point, uncertain) is the size of the selection effect. The pre-set rule would have been: ship only if retention rises by a worthwhile amount with the uninstall guardrail within a margin of +0.5 points; the uninstall interval's lower end (+0.8) breaches that margin.

**Options.**

| Option | Optimizes | Costs |
|---|---|---|
| A. Ship the default for everyone | The expected 30-point gain | More uninstalls; a user-trust cost; no retention gain |
| B. Do not ship the default; ask for permission at a moment when the user has seen value | Retention among people who choose | A smaller reach of notifications |
| C. Run a second test of a permission prompt after the first workout | Learning what raises opt-in without hurting trust | Two more weeks |

**Tradeoffs.** A would have been a mistake that the correlation recommended. B respects the user and uses the confounder (engaged users opt in) as a signal. C costs time and tests the better idea.

**Decision.** Do not ship the default (B), and run C. Primary metric for C: the share of new users who opt in after the first workout. Guardrails: week-one uninstalls and 30-day retention. Counter metric: notification mute rate after 30 days, which would show whether the notifications that people allowed are wanted.

**Outcome.** In this fictional scenario the permission prompt after the first workout raised opt-in from 35% to 52% (invented) with no change in uninstalls, and retention for the test group rose by 1.2 points with an interval of −0.3 to +2.7 (invented), a small effect in the same direction. The default was not shipped.

**Alternative outcomes.** If the randomized test had shown a +10 point lift, the default would have been worth shipping despite the uninstalls, by the rule's cost-benefit, and the lesson would have been that the correlation understated or matched the effect. If the sample-ratio check had failed, the result would have been set aside and rerun. The lesson is the method: a correlation among people who chose a setting is a poor guide to what happens when you assign it.

#### CS-C14-02 · Bing, 2012: the shelved headline change · Verified · Advanced

*Sources (types): an article by Ron Kohavi, who led Microsoft's analysis and experimentation team, and Stefan Thomke, a Harvard Business School professor, "The Surprising Power of Online Experiments," Harvard Business Review (September–October 2017), read in full in its reprint (a first-hand account by practitioners, primary for the practice and for the numbers they report, which are the company's own and were not independently checked). The analysis is the author's. Re-read in October 2026.*

**Situation.** In 2012 an employee on Microsoft's Bing search engine proposed a change to how ad headlines were displayed. The article says it would take only a few days of an engineer's time but was one of hundreds of ideas proposed, and program managers judged it a low priority. It sat for more than six months. Then an engineer, seeing that the cost of coding it was small, launched a simple online controlled experiment to assess it. Within hours the new headline variation was producing abnormally high revenue, which triggered a "too good to be true" alert. Alerts like that usually signal a bug, and here, per the article, analysis showed a real revenue increase of 12%, which on an annual basis would be more than $100 million in the United States alone, without hurting key user-experience metrics.

**Constraints.** Hundreds of ideas competed for limited engineering time, and people's judgment of their value was unreliable. Revenue from ads can come at the cost of the user's experience, so guardrails on experience were needed. The platform had an automated check for results that look implausibly good. The headline figure is an annualized projection from the test, not a measured annual total.

**Data.** As reported: a revenue increase of about 12% in the experiment; an annualized value of more than $100 million for the United States; no harm to key user-experience metrics; an alert within hours of launch. The article also states that Microsoft and several other leading companies, including Amazon, Booking.com, Facebook and Google, each run more than 10,000 online controlled experiments a year, and that at Google and Bing only about 10% to 20% of experiments generate positive results, while at Microsoft as a whole one-third prove effective, one-third are neutral and one-third are negative `[V: Kohavi and Thomke, 2017]`. The article does not describe the effect's behavior over months, and it does not say whether this particular result was replicated; elsewhere it advises replicating surprising results (it calls this Twyman's law, "any figure that looks interesting or different is usually wrong") and describes rerunning a 2013 color experiment with 32 million users `[V: Kohavi and Thomke, 2017]`.

**Problem definition.** *The author's reading.* The organization's way of deciding which ideas to build (managers' judgment) misjudged the value of one idea by a very large margin. The problem was one of prioritization under uncertainty: the cost of testing the idea was far less than the cost of the debate, and the prior view of its value was wrong.

**Analysis.** *The author's analysis.* Through this chapter's frameworks, the case shows several things. The randomized controlled test is the top rung of the ladder (FW-C14-02): no argument about confounders was needed. The measurement had a primary metric (revenue) and guardrails (user-experience metrics), the structure of FW-C14-05, so a win in revenue was not bought with a hidden loss in experience. The "too good to be true" alert is the practice of the mental model in section 9: a large result is first treated as a possible error (a logging or assignment fault), and the check here came back clean. The alert also shows that an experimentation platform's automated checks, such as the sample-ratio check, are part of trustworthiness (C14.7).

For prioritization (C15), the lesson is that when testing is cheap, testing can beat ranking by opinion, since the value of some ideas is only revealed by the test. It would be a mistake to read the case as "every shelved idea is a hidden win": the same practitioners report that most ideas do not help, and this one is famous because it is rare. A PM should draw the narrower lesson, which is that low-cost tests of cheap ideas are a good bet, and that the expected value of an idea is uncertain enough that confident rankings are fragile.

**Limits.** The $100 million is an extrapolation from a test period to a year, and the sources used here do not show whether the effect persisted without fading (the novelty question, C14.4), whether it was the same in other markets, or how the revenue measure related to long-term user satisfaction. The article reports the result as a success, and a single case, however well documented, is a survivor.

**Options.** *The author's reconstruction of choices a team could have faced; not a record of Microsoft's deliberations.*

| Option | Optimizes | Costs |
|---|---|---|
| A. Leave the idea shelved on managers' judgment | Engineering focus on higher-ranked ideas | The idea's value stays unknown; in this case a large gain was missed for months |
| B. Ship the change without a test | Speed | No evidence of effect on revenue or experience; risk of an unseen harm |
| C. Run a quick controlled experiment with revenue as the primary metric and experience guardrails | Evidence for a small cost | A few days of engineering time and some traffic |

**Tradeoffs.** C costs little and gives the information that A and B lack. A is the cheapest and, in this case, the most expensive in forgone revenue. B is fast and leaves harm and benefit unmeasured.

**Decision.** As documented, an engineer launched the experiment, and the result was analyzed; the article describes the outcome as the best revenue-generating idea in Bing's history, although its value was underappreciated until the test; it does not say in so many words that the change shipped, which the description implies `[V: Kohavi and Thomke, 2017]` `[inference]`.

**Outcome.** Reported: a 12% increase in revenue in the test, more than $100 million a year projected for the United States, no harm to key experience metrics, and the case becoming a standard example in arguments for experimenting widely.

**Alternative outcomes.** *Inference.* Had the alert flagged a real bug (an assignment or logging error), the "12%" would have been an artifact, which is exactly why the check comes first. Had the effect been a novelty that faded within weeks, the annualized figure would have been far too high, and a long-term holdout would have caught it. Had a guardrail on experience shown harm, the decision would have been to hold. The method to carry away: make tests cheap, fix the primary metric and guardrails before launching, treat surprising results as possible errors first, and say which part of a large number is measured and which is projected.

## 11. Interview questions and model answers

Eight questions: two Beginner, three Intermediate, three Hard. Model answers are `Illustrative`; every figure is an assumption, and the arithmetic was computed. Each is written against the six behaviors in section 1 and uses the design card (FW-C14-01). Where a real company's product is the setting, the answer reasons from public information and user behavior and states no internal fact. The answers are fuller than a first pass in a real round; a spoken version keeps the same order with fewer words.

#### IQ-C14-01 · Beginner · analytics · AN

**Prompt.** We launched a redesigned checkout last week and conversion went up. Why not just compare before and after?

**Rubric.**
- **Baseline:** "That is fine, the number went up."
- **Strong:** Names that other things change over time, so the comparison is confounded, and proposes a control.
- **Standout:** Quantifies a seasonal or concurrent effect, offers a method that works without randomization, and says what evidence level the answer reaches.

**Model answer.** A before-and-after comparison answers "what changed?" and not "what did the launch change?" Anything else that moved over the same weeks is mixed into the number: a season, a promotion, a competitor, a traffic mix change, or regression to the mean if we launched because conversion had been low.

An example (invented). Conversion was 5.0% the week before launch and 5.4% the week after: a gain of 0.4 points. But a market where we did not launch the redesign went from 5.0% to 5.3% over the same weeks, perhaps because of a seasonal rise. The best estimate of the redesign's effect is the difference of the two changes: 0.4 − 0.3 = +0.1 points, a quarter of the naive figure. That is a difference-in-differences estimate (C14.6), and it relies on the assumption that the two markets would have moved alike without the launch.

*What I'd do.* If the launch can still be randomized, the best option is to keep a holdout: put a random 5% or 10% of users on the old checkout for a few weeks and compare. If it has already shipped everywhere, use a comparison group (a market, a platform or a delayed rollout), check that the two groups moved together before the launch, and say that the evidence is weaker than an experiment because unmeasured differences between the groups could remain.

*How I'd say it.* "I'd not call the 0.4 points the effect. I'd compare with a control, which suggests about 0.1 points, and I'd tell the team it is a rung-5 estimate, not a randomized one." What would change my mind: if the comparison market's pre-launch trend differed from ours, the estimate would be unreliable and I'd look for a better comparison.

**Follow-ups.**

- **Q.** What method would you use to estimate the effect without randomization? **A.** "A comparison group that did not get the change over the same period. If the redesign was launched in one region first, compare its change in conversion with the change in regions that had not yet launched: if the launch region rose from 5.0% to 5.4% and the others from 5.0% to 5.3% because of a promotion, the estimated effect is about 0.1 point, not 0.4. This difference-in-differences estimate needs a similar trend before launch, which I would check on the prior eight weeks. A staggered rollout or a 5% holdout gives a better design if it is still possible."
- **Q.** What level of evidence does the answer reach? **A.** "Weaker than a randomized test. It rests on the assumption that the launch and comparison groups would have moved together without the change, and I would say so. I would report the estimate with an interval, show the pre-launch trends so that the reader can judge the assumption, and note what could break it, such as a regional event. If the decision is large and irreversible, I would ask for a holdout or an experiment next time; for a reversible change, a careful quasi-experiment may be enough."

#### IQ-C14-02 · Beginner · analytics · AN

**Prompt.** An experiment was planned 50/50. The readout shows 5,100 users in one arm and 4,900 in the other. What do you do?

**Rubric.**
- **Baseline:** "It's close enough," or "the test is broken."
- **Strong:** Computes how unusual the gap is and knows the sample-ratio check.
- **Standout:** Distinguishes a borderline from a clear mismatch, sets a strict alarm threshold, and lists causes and actions.

**Model answer.** Compute how unusual it is. There are 10,000 users, so the expected count per arm is 5,000. The standard deviation of an arm's count is √(10,000 × 0.25) = 50. A count of 5,100 is 100 above, which is 2 standard deviations (p ≈ 0.046). By chance, that happens about once in 22 tests, so on its own it is not alarming. The usual practice is a stricter alarm for this check, for example p below 0.001, which at this sample size would be a gap of about 165 users, or 3.3 standard deviations.

*So what do I do?* Not discard the test. Note it as borderline and look at the pattern: is the gap stable across days, or does it grow? Check the assignment log against the analytics counts, and whether the arms are logged identically. If more data keep the gap at about 2%, the standard deviation shrinks and the mismatch becomes clear, and then I treat the test as invalid.

*Contrast with a clear case.* If 1,000,000 users were assigned and the readout showed 508,000 and 492,000, the gap is 8,000 against a standard deviation of 500: 16 standard deviations. That is not chance. Something differs between arms in who is counted (a bot filter on one arm, a slower variant that loses users before logging, a failed redirect). I would not read any metric from such a test, because the missing users are rarely typical.

*Decision.* For 5,100 against 4,900: continue, check the logs, and decide when the test ends. For the clear mismatch: stop, find the cause, fix and rerun. What would change my view: if the assignment log itself showed 5,100 and 4,900, the randomizer would be at fault, which is rarer and more serious.

**Follow-ups.**

- **Q.** What causes a mismatch like this and what would you check? **A.** "Assignment and logging problems, not luck. Typical causes: a bug in the randomization or in who is eligible, bots or bad traffic filtered after assignment in one arm, a redirect or a slower page in one arm that causes more users to leave before they are counted, and different logging between versions. I would check the split by platform, browser, country and time to see where the imbalance sits, and whether the mismatch appears at assignment or only at the first event. I would not read any effect until the cause is found."
- **Q.** Is a 2 standard-deviation gap alarming, and what if it persists at larger scale? **A.** "At 10,000 users, 5,100 against 4,900 is two standard deviations, about p = 0.046, which happens by chance about once in 22 tests, so it is a watch item, not an alarm. The usual alarm is much stricter, for example p below 0.001. But if the same 51/49 split persists at 1,000,000 users, the arms are 510,000 and 490,000, 20 standard deviations from even, which is certainly a defect. So I would re-check as the sample grows, and treat a persistent small imbalance as a bug."

#### IQ-C14-03 · Intermediate · analytics · AN · Google

**Prompt.** Design an experiment for a new layout of a search results page.

**Rubric.**
- **Baseline:** "A/B test it and look at clicks."
- **Strong:** Chooses the unit, the metrics (with guardrails), the size and the duration, and decides on a rule.
- **Standout:** Sees that clicks can mislead when a layout answers the question directly, picks success and satisfaction measures, handles query-type differences and novelty, and sets guardrails on speed, advertisers and long-term return.

**Model answer.** I know the product only from public information. The decision: ship the new layout if it helps people find what they want. Hypothesis: the layout makes the answer easier to reach.

*Unit.* The user, not the query, because a person sees the layout across many queries and learns it; randomizing queries would show one person different layouts and blur learning effects. Assignment by a stable hash of a user identifier, with a consistent identifier for signed-out users where possible.

*Metrics.* A trap here is to use clicks as the primary: if the new layout answers the question on the page, clicks fall while satisfaction rises (people get the answer and leave). So the primary should measure success: the share of search sessions in which the person gets what they wanted, estimated from behavior (no reformulation, no immediate return to results, time to a satisfied end) and calibrated against surveys or human ratings. Secondary: reformulation rate, clicks, time to answer. Guardrails: page speed at the 95th percentile, errors, advertiser value (so that a change does not quietly hurt the businesses who pay), and return rate over the following weeks.

*Size and duration.* At search-engine traffic the sample is huge, which creates its own risk: any tiny difference will be significant. So set the smallest worthwhile effect from the decision (practical significance, C12.5) and read the interval against it. Run at least two full weeks for weekly cycles and to see novelty (a new layout may attract exploration at first).

*Segments.* Query types behave differently: navigational queries (find a site), informational (get an answer), shopping. Pre-specify the cuts, since an average can hide a gain in one type and a loss in another, and treat other cuts as hypotheses (C12.7).

*Validity.* Check the split before any metric; look at the effect by week and for new versus established users; check for interference (little here, since users do not affect each other's results, though advertisers do respond to changes over time).

*Decision rule.* Ship if the success metric's interval is at or above the threshold and no guardrail breaches its margin. Keep a small long-term holdout to track whether the effect persists. What would change my mind: if satisfaction surveys disagreed with the behavioral success measure, I'd trust the surveys and fix the measure.

*Company note.* Google is the setting only: `Inferred` from candidate reports that experiment prompts at Google concern its own products at large scale `[unverified: candidate-reported]`. No Google data or practice is claimed.

**Follow-ups.**

- **Q.** Why can clicks mislead in a search layout test? **A.** "Because a better layout can reduce clicks. If the new layout answers the question directly on the page, users click less and are happier. So click-through is the wrong primary metric. I would use measures of task success: whether the user reformulates the query, leaves without a click and then returns to search, how long they spend on the result they open, and a short satisfaction prompt on a sample. I would split by query type, because a layout that helps informational queries may hurt navigational ones, and report both."
- **Q.** What guardrails would you set? **A.** "Page latency at the 95th percentile, since a heavier layout can slow results; advertiser value, such as clicks and conversions for sponsored results, because advertisers are part of the system; and long-term return, measured as users coming back within 7 and 28 days. I would also read the effect by week to separate novelty from a lasting change, and keep a small long-run holdout. A layout that raises short-term satisfaction and lowers return is not an improvement."

#### IQ-C14-04 · Intermediate · analytics · AN · Netflix

**Prompt.** You want to test a new way of presenting titles (the artwork shown for each) to members. How do you design the test, and what could mislead you?

**Rubric.**
- **Baseline:** "Show half the members the new artwork and see who watches more."
- **Strong:** Chooses member-level randomization, a primary metric, guardrails and a duration, and checks novelty.
- **Standout:** Separates short-term engagement from retention, handles interactions among titles on the same page, uses new versus existing members and a long-term holdout, and states a decision rule.

**Model answer.** I know the product only from public information. The decision: adopt the new presentation if it helps members find something they enjoy. The hypothesis: better artwork increases how often members start something they finish and are happy with.

*Unit.* The member, so each member sees one presentation consistently on every device.

*Metrics.* A trap: a click or a play is easy to raise with striking art that misleads. So the primary should reflect satisfaction: plays that last beyond a few minutes (or completion), per member. Guardrails: members who start and quickly stop (a sign of misleading art), customer-service contacts, and cancellations. The long-run outcome is retention, which a short test cannot measure directly, so I would use a proxy (satisfying viewing in the first weeks) and say that it is a proxy (C05).

*Interference within the page.* Artwork for one title competes with the others on the same row: a more striking image takes plays from neighbors. So the measure should be total satisfying viewing per member, not plays of the one title, or the gain for one title can hide a loss elsewhere (cannibalization, C08).

*Novelty.* A new look draws attention at first. Plot the effect by week and compare new members (who have no old habit) with existing ones. Suppose the weekly lift is +6.0%, +3.5%, +1.8%, +1.2%, +1.0%, +1.0%. The settled effect is about +1%, and reporting the six-week average, 2.4%, or the first two weeks, 4.75%, would overstate it (Worked example 3).

*Duration and validity.* At least a few weeks, whole weeks, sample-ratio check first, fixed stopping point. A 1–2% long-term holdout to check that the effect lasts and that retention is not harmed.

*Decision rule.* Ship if the settled effect on satisfying viewing is above the threshold and cancellations do not rise beyond the margin. What would change my mind: if the effect is large for new members and absent for existing ones, I'd consider showing the new art first to new members.

*Company note.* Netflix is the setting only: `Inferred` from candidate reports of data-informed prompts on presentation and engagement `[unverified: candidate-reported]`. No Netflix data or practice is claimed.

**Follow-ups.**

- **Q.** How do you handle interactions among titles on the same page? **A.** "By testing at the member level and measuring the whole page. Titles compete for the same attention: stronger artwork for one title may take plays from another, so a per-title lift can be a shift, not a gain. I would randomize members, show each member one presentation across devices, and measure total satisfied plays per member and the diversity of what they watch, not the lift of individual titles. Per-title results are diagnostic: they tell me which artwork works, and the page-level metric tells me whether the member is better off."
- **Q.** What decision rule would you set? **A.** "Adopt if satisfied plays per member rise by at least 1% with an interval above zero, the regret rate (starts abandoned within two minutes) does not rise, and retention in a long-run holdout of about 1% of members, kept for eight weeks, is no worse. I would read new and existing members separately, because new members have no history and respond differently. If the test shows more clicks and more early abandonment, the artwork is misleading and I would reject it despite the click gain."

#### IQ-C14-05 · Hard · analytics · AN · Apple

**Prompt.** Test a redesigned device-setup flow when each user sets up a device once.

**Rubric.**
- **Baseline:** "A/B test it and measure completion."
- **Strong:** Recognizes the one-time, slow-outcome problem, picks proxies, randomizes at the device, and sets guardrails.
- **Standout:** Separates the proxy from the real outcome and validates the link, handles launch-period mix and the limits of changing shipped hardware, uses a holdout and qualitative evidence, and addresses privacy and accessibility.

**Model answer.** I know the situation only in general terms; nothing here describes any real product. The distinguishing facts: each person sets up a device once, so there is no repeated measure per user, and the outcome that matters (still happy with the device months later) is slow.

*The real outcome and the delay (FW-C14-08).* The goal is a person who is set up successfully, uses the device's key features and is satisfied weeks later. That arrives over weeks to months. So I will choose proxies that arrive early and plausibly predict it.

*Proxies and how I'd validate them.* Primary: the share of new devices that complete setup within, say, 20 minutes (baseline 92%, invented). Secondary: time to complete, abandonment by step, errors, and use of one or two key features in the first week. To check that a proxy deserves trust, I'd look at past cohorts: does completing setup in 20 minutes predict still using the device at 30 days, or returning it? If not, the proxy is the wrong target ([[goodharts-law]], C05).

*Unit and randomization.* The device (or the person's activation), assigned when setup starts, by a hash of an identifier, 50/50, server-controlled so it can be changed. Each person is in one arm, and that is fine: the unit is the person's first setup.

*Size.* Smallest worthwhile effect on completion: +1 point. With the rule of 16, 16 × 0.92 × 0.08 ÷ 0.01² = 11,776 per arm. If activations are 50,000 a day (invented), that is a day of traffic. So volume is not the problem; mix is: around a launch, early adopters differ from later buyers, and a short test sees only the first. So I would run across several weeks, and since the arms run concurrently, the mix is the same in both and the comparison is clean.

*Guardrails.* Setup failures and support contacts in the first week, returns, accessibility completion (people using assistive features must not do worse), and privacy: the new flow must not collect more data than the old one or change consent steps without review.

*Holdout and the long outcome.* Keep a 5% holdout on the old flow for the first four weeks, and compare the later outcomes (day-30 use, returns) when they arrive. The decision on the proxy comes first; the holdout checks whether it held.

*Qualitative evidence.* Watch people set up the device (in the lab and in the field) to see where they hesitate. Numbers say whether, observation says why, and this is where the flow's design problems appear.

*Hardware limits.* If the flow is part of software that can be updated from a server, the test is easy. If part of it is fixed in the device, it cannot be changed after shipping, so the test must happen before manufacture: lab studies, prototypes and early units, which are small and less randomized. I'd say which parts are which before promising a test.

*Decision rule.* Ship if the completion interval is at or above +0.5 points with no guardrail breach, with the day-30 comparison reviewed when it arrives. What would change my mind: if the proxy did not predict day-30 use in past cohorts, I'd choose a different proxy or wait for the long outcome.

*Company note.* Apple is the setting only: `Inferred` from third-party reports that experiment prompts at Apple include once-per-user flows, and `Public` that Apple describes privacy-preserving data collection `[V: Apple differential privacy and privacy pages; the prompt descriptions are candidate-reported and unverified]`. No claim is made about any real Apple setup flow.

**Follow-ups.**

- **Q.** How do you validate that setup completion is a proxy for long-term happiness? **A.** "From past cohorts. Take people who set up under the old flow and compare outcomes at 30 and 90 days (active use of key features, support contacts, returns) by setup time and completion. If people who finish setup in under ten minutes are twice as likely to be active at 90 days, the proxy has support, though it is correlational. Then keep a small holdout on the old flow, and survey a sample at 30 days to measure satisfaction directly. If the proxy and the real outcome diverge, I would trust the outcome."
- **Q.** How do you deal with launch-period mix and the limits of changing shipped hardware? **A.** "Launch-week buyers are early adopters and not typical, so I would repeat the test in later cohorts and read results by cohort. The setup software and prompts can change after units ship, so I would put the testable changes there and treat anything that needs hardware as fixed for this generation. I would also check that the flow works with assistive technology, keep the measurement of setup minimal and private, and never require data that the user has not agreed to share."

#### IQ-C14-06 · Hard · analytics · AN · Meta

**Prompt.** How would you test a change to a social product's friend recommendations?

**Rubric.**
- **Baseline:** "A/B test by user and measure friend requests."
- **Strong:** Notes that users affect each other and proposes clustering or another design, and picks a meaningful primary metric.
- **Standout:** Quantifies the cost of clustering, picks a metric that captures lasting connections, adds harm guardrails and a spillover check, and treats safety for vulnerable users.

**Model answer.** I know the product only from public information. The main design problem is interference: if I randomize users, treated people send more requests and the control users receive them, so the control is not untouched (Worked example 5).

*Unit.* Clusters of people who are closely connected (communities of about 100), so most of a person's friends are in the same arm. Randomize clusters 50/50.

*Cost of clustering.* Observations within a cluster are correlated, so the effective sample is smaller. The design effect is about 1 + (m − 1) × ρ, where m is the cluster size and ρ the correlation within clusters. With m = 100 and ρ = 0.02 (invented), that is 1 + 99 × 0.02 = 2.98, about 3. So 1,000,000 users in 10,000 clusters give the information of about 335,000 independent users. That is still large; it matters for smaller products or smaller effects, and the intervals will be wider than a user-level test.

*Metrics.* Requests sent is easy to inflate and does not show value. The primary should be lasting connections: new connections that were accepted and that the two people interacted with in the following two weeks, per user. Guardrails: reports of unwanted or harassing requests, blocks, requests ignored or declined at a high rate (a sign of poor suggestions), and effects on people who are suggested (the people being recommended are users too, and being shown to many strangers can harm them). Secondary: requests, acceptances.

*Spillover check.* Compare people at the edge of treated clusters (who have some friends in the other arm) with people at the center, to see how much the arms contaminate each other.

*Safety.* Suggestions can expose people: an abuser can be recommended to a victim, or a minor to adults. Review with the safety team before any test, apply stricter rules for minors, and set a stop condition on harm reports.

*Duration and validity.* At least two to three weeks for the two-week interaction measure; sample-ratio check at the cluster level; novelty by time since exposure.

*Decision rule.* Ship if lasting connections per user rise by a worthwhile amount with an interval above the threshold and harm guardrails within margins. What would change my mind: if clusters leak (many connections across clusters), I'd measure the leakage and say the estimate is conservative.

*Company note.* Meta is the setting only: `Inferred` from candidate reports that prompts at Meta involve interference among connected users `[unverified: candidate-reported]`. No Meta data or practice is claimed.

**Follow-ups.**

- **Q.** What does clustering cost in sample size? **A.** "Randomizing clusters of connected people reduces the effective sample size by a design effect of about 1 + (m − 1) × ICC, where m is the cluster size and ICC is how similar people within a cluster are. With clusters of 100 and an ICC of 0.02, the design effect is 1 + 99 × 0.02 = about 3, so I need about three times the users I would for individual randomization. With a million users, that is about 10,000 clusters and the effective sample of roughly 330,000. The cost is real, and the benefit is that the control group is not receiving requests from treated users."
- **Q.** What harm guardrails would you add, and how do you treat vulnerable users? **A.** "Guardrails: the share of recommended people who are blocked or reported, unwanted-contact reports, and complaints from accounts that received many requests. For minors and users at risk of harassment, I would apply stricter rules in both arms, such as limiting recommendations from unknown adults and excluding contacts flagged for abuse, and review those rules with the safety team before the test. The primary metric should capture lasting connections, such as accepted requests that lead to interaction 30 days later, not requests sent."

#### IQ-C14-07 · Hard · analytics · AN

**Prompt.** A redesigned pricing page raised sign-ups, but you suspect it hurts retention. How do you read the readout and decide?

**Rubric.**
- **Baseline:** "Sign-ups are up, so ship," or "retention is down, so don't."
- **Strong:** Reads the guardrail and the primary together, in the same units, and considers the mix of who is signing up.
- **Standout:** Combines the two into the quantity that matters (retained customers per visitor), notes that the guardrail was mis-specified as a rate, follows the pre-set rule while proposing a confirmation, and sets a long-term check.

**Model answer.** I'd apply the order: validity first (the split check passes in this case), then guardrails, then the primary, then the mechanism. Suppose 100,000 visitors per arm (invented). Sign-ups: 4.0% in control (4,000) and 4.5% in the variant (4,500), a lift of +0.5 points. Thirty-day retention of the new sign-ups: 70% in control and 66% in the variant, a fall of 4 points with an interval of about −7 to −1.

*Rule as written.* The guardrail margin on retention was −2 points; the interval's lower end (−7) breaches it. Under the pre-set rule, the verdict is not to ship as is.

*Put the two together.* What matters is retained customers per visitor. Control: 4,000 × 0.70 = 2,800. Variant: 4,500 × 0.66 = 2,970. That is +170, or +6%, per 100,000 visitors, in spite of the lower retention rate. Across the interval for retention (63% to 69%): 4,500 × 0.63 = 2,835 and 4,500 × 0.69 = 3,105, which is +35 to +305, positive throughout. The explanation is a mix: the redesign brings in marginal sign-ups who retain less well, but there are more of them, and the net is positive.

*The lesson.* A retention rate as a guardrail was poorly specified: a rate falls whenever the added customers are lower quality, even when the business gains. The quantity that matters is a count, retained customers per visitor, or better, the value of retained customers. But I would not reinterpret the rule after seeing the result. The disciplined course: follow the rule (hold the launch), note that the combined metric suggests a gain, and run a short confirmation test with retained customers per visitor as the primary and a guardrail on customer quality (for example, refunds and support contacts in the first month).

*Horizon.* Thirty days is short: marginal sign-ups may churn later, or lower-quality customers may cost more to serve. So I'd keep a long-term holdout and compare 90-day retention and revenue.

*Decision.* Hold the full launch now; run the confirmation on the better-defined metric; ship in stages if it confirms. What would change my view: if the extra sign-ups cost more to serve than they bring, the net would turn negative and the rule's concern would be right for a reason the retention rate alone did not show.

**Follow-ups.**

- **Q.** How do you combine the sign-up lift and the retention drop into one quantity? **A.** "Retained customers per visitor. Control: 4,000 sign-ups with 70% retained is 2,800, or 2.80 per 100 visitors. Variant: 4,500 at 66% is 2,970, or 2.97 per 100 visitors, a rise of about 6%. So even with the retention fall, the variant brings more retained customers per visitor. The uncertainty on the retention drop (about −7 to −1 points, which treats the 4,500 sign-ups as fixed) shrinks the gain at the low end to about +35 per 100,000 visitors, about 1%, and raises it to +305 at the high end: positive throughout, but thin at the low end. This is the quantity the decision depends on, and a guardrail should have been written as retained customers per visitor, not as a retention rate on sign-ups."
- **Q.** What is your decision, and how do you confirm it? **A.** "I would follow the rule that was set before the test, and say that it was mis-specified. If the rule said not to ship on a retention fall of more than two points, the variant fails it, and I would not override it silently; I would take the combined number to the decision-makers and ask for an explicit exception. My recommendation: staged release with a long-run holdout, checking 90-day retention and revenue per visitor, and a repeat test with the guardrail restated per visitor. I would also look at why retention fell: if the page promises more than the product delivers, fix the page."

#### IQ-C14-08 · Intermediate · analytics · AN

**Prompt.** In an A/B test, time spent per user is up 6% and revenue per user is down 3%. What do you do?

**Rubric.**
- **Baseline:** "Time spent is up, so ship," or "revenue is down, so don't."
- **Strong:** Asks which metric reflects the goal and whether each result is real.
- **Standout:** Checks validity and intervals for both, uses the pre-set metric hierarchy, converts the revenue effect into dollars, investigates the mechanism and segments, adds a long-term holdout, and decides by a rule.

**Model answer.** *Validity first.* Check the split of users, the duration (full weekly cycles) and any novelty effect. Then read both results with intervals. Suppose 200,000 users per arm (invented). Time per user rose from 30.0 to 31.8 minutes (+1.8, a 6% gain); with a standard deviation of about 40 minutes the standard error of the difference is about 0.13, so the interval is roughly +1.55 to +2.05: clearly positive. Revenue per user fell from $2.00 to $1.94 (−$0.06); with a standard deviation of about $9 the standard error is about $0.028, giving an interval from about −$0.116 to −$0.004: a small but real fall, near the edge of detectability.

*Which metric is the goal?* The test should have had a primary metric and guardrails written in advance (FW-C14-05). If the feature exists to raise engagement and revenue is a guardrail, a statistically real fall in the guardrail has to be explained, not waved away; if the product's business depends on revenue per user, revenue is the primary and time spent is a mechanism.

*Convert to dollars.* With 5 million monthly users, −$0.06 per user is −$300,000 a month, or $3.6 million a year. The question is whether the extra 1.8 minutes buys something worth more: higher retention, more ad inventory or more purchases later. That is a hypothesis, not a result.

*Find the mechanism.* Why would time rise and revenue fall? Perhaps the feature displaces purchase flows or ad slots (a mechanical effect), or it brings in light users who spend less (a mix effect), or it delays checkout. Break the result down by segment, by surface and by funnel step. If it is mix, the effect on retained revenue may be positive over time; if it is displacement, the feature may be trading revenue for minutes.

*Check the long term.* Keep a long-term holdout and compare 90-day retention and revenue. Time spent is not value by itself; if retention does not move, the revenue loss is simply a cost.

*Decision.* Follow the pre-set rule. If revenue was a guardrail with a margin tighter than the observed fall, do not ship as is; redesign to protect the purchase flow, or ship to the segments where revenue is not hurt, and run the long-term check. If there was no rule, set one now and say that it was a gap. What would change my view: evidence that retention and later revenue rise enough to repay $3.6 million a year.

*Signals.* Both metrics read with intervals; the metric hierarchy; dollars; mechanism and mix; long-term holdout; a rule.

**Follow-ups.**

- **Q.** How do you tell a mix effect from a displacement effect? **A.** "By decomposing the revenue change. For mix, I'd compare the new light users with similar users in the control group and reweight to a common mix; if revenue per user within each segment is unchanged and the average falls only because the segment shares changed, it is mix. For displacement, I'd look at the surfaces and funnel steps where revenue is made: if conversion on the purchase flow is lower in the variant, or the ad slots are seen less, the feature is taking attention from them. I'd confirm with a session-level breakdown and with a variant that protects those surfaces."
- **Q.** What if the long-term holdout shows retention up 1 point? **A.** "I'd value it. If a retained user is worth, say, $24 a year, one point on 5 million users is 50,000 users and $1.2 million a year, which does not cover a $3.6 million fall. So I would not ship as is. I'd look for a design that keeps the retention gain and removes the revenue cost, and I'd say what retention gain would break even: about three points in this example."

## 12. Exercises

Ten exercises. Each has a model solution and an alternative. Figures are assumptions unless marked, and the arithmetic was computed.

#### EX-C14-01 · Place the evidence on the ladder

**Problem.** Place each claim on the ladder of evidence (FW-C14-02) and say what it cannot rule out: (a) "Our best customers love the feature." (b) "Users who use the feature retain better." (c) "Sign-ups rose after the redesign." (d) "A city where we ran a promotion grew faster than a similar city where we did not." (e) "Half of new users, chosen at random, got the feature; they retained 2 points better."

**Context.** A team is discussing whether a feature works.

**Data.** None beyond the claims.

**Constraints.** Four minutes.

**Expected approach.** Use the ladder.

**Solution.** (a) Rung 1, anecdote: cannot rule out anything; the customers who love it may be unusual. (b) Rung 2, correlation: confounding (engaged users use features) and survival (users must stay long enough to find it). (c) Rung 3, before and after: anything else that changed over time. (d) Rung 4 or 5, a comparison with a control: the cities may differ in ways unrelated to the promotion; strengthen with pre-period trends and more cities. (e) Rung 6, randomized: an invalid setup (check the split), generalization beyond these users and this period.

**Alternative solution.** For (d), if the cities were matched on pre-period trends, call it rung 5 and apply difference-in-differences.

**Tradeoffs.** Higher rungs cost more; a cheap, reversible decision may not need the highest.

#### EX-C14-02 · Choose the unit

**Problem.** Choose the unit of randomization and say why: (a) a new page layout; (b) a new price for a subscription in a country; (c) a ride-matching change in a city; (d) a feature that helps friends find each other; (e) an email subject line.

**Context.** Each is to be tested.

**Data.** None.

**Constraints.** Five minutes.

**Expected approach.** The level at which the change is experienced and at which outcomes are independent (C14.2).

**Solution.** (a) The user, so a person sees one layout consistently. (b) The market or account, since price visibility and arbitrage between users in the same market make user-level pricing unfair or contaminated; use matched markets or randomize new accounts at sign-up. (c) A time period within the city (switchback) or whole cities, because riders and drivers share one pool. (d) A cluster of connected people. (e) The recipient (each email goes to one person), assigned at send time.

**Alternative solution.** For (b), if price is shown only after sign-up and accounts cannot see each other's price, user-level assignment of new accounts can work, with a check for people who create several accounts.

**Tradeoffs.** Larger units reduce interference and reduce power.

#### EX-C14-03 · Size the test, and dilution

**Problem.** A feature is seen by 20% of users. The metric is the weekly purchase rate, 10% for all users. The effect among those who see the feature is +1 point. How many users per arm are needed if you (a) analyze all users, (b) analyze only exposed users? What is the traffic per arm in (b)?

**Context.** Use the rule of 16.

**Data.** As above.

**Constraints.** Five minutes.

**Expected approach.** FW-C14-04, dilution.

**Solution.** (a) The effect across everyone is 0.2 × 1 = 0.2 points. Users per arm = 16 × 0.10 × 0.90 ÷ 0.002² = 1.44 ÷ 0.000004 = 360,000. (b) Exposed users per arm = 16 × 0.09 ÷ 0.01² = 14,400. At 20% exposure, traffic per arm is 14,400 ÷ 0.2 = 72,000. Analyzing the exposed needs one fifth of the traffic (72,000 against 360,000), provided exposure is logged identically in both arms.

**Alternative solution.** If exposure cannot be logged reliably, analyze all users and accept the larger sample or a larger minimum effect.

**Tradeoffs.** A triggered analysis needs correct triggering; a wrong trigger creates a sample-ratio problem.

#### EX-C14-04 · Check the split

**Problem.** Planned 50/50. Observed: (a) 5,060 and 4,940 (10,000 users); (b) 50,600 and 49,400 (100,000); (c) 500,800 and 499,200 (1,000,000). Compute how many standard deviations from the expected count each is, and apply an alarm at 3.3 standard deviations (about p < 0.001).

**Context.** The sample-ratio check.

**Data.** As above.

**Constraints.** Five minutes.

**Expected approach.** Standard deviation of a count = √(n × 0.25).

**Solution.** (a) n = 10,000; standard deviation 50; gap 60; z = 1.2. (b) n = 100,000; standard deviation about 158; gap 600; z ≈ 3.8. (c) n = 1,000,000; standard deviation 500; gap 800; z = 1.6. Only (b) crosses the 3.3 alarm: a 1.2% imbalance at 100,000 users is a mismatch, while 0.16% imbalance at a million is chance. The gap that matters depends on the sample size, which is why a z-score and not a percentage is used.

**Alternative solution.** Use a chi-squared test, which gives the same answer for two arms (z squared).

**Tradeoffs.** A strict alarm misses mild problems and avoids false alarms across many tests.

#### EX-C14-05 · The cost of peeking

**Problem.** A team checks a test's p-value every day for 14 days and stops the first time it is below 0.05. If there is no real effect, roughly how often will they declare a win? What would you tell them?

**Context.** Use the simulation figures in C14.4: 2 looks about 8%, 5 looks 14%, 10 looks 19%, 20 looks 25%.

**Data.** As above.

**Constraints.** Four minutes.

**Expected approach.** C14.4, peeking.

**Solution.** Fourteen looks lies between 10 looks (19%) and 20 looks (25%): roughly 21 to 22%, four times the intended 5% (looks on successive days are correlated, and the simulated figures assume equally spaced looks, so this is an estimate). Tell them: fix the sample size and the duration in advance and read once at the end; or use a sequential method built for repeated looks, set up by a data scientist; and watch guardrails daily for harm, which is a different purpose from stopping for success.

**Alternative solution.** If they must stop early, require a much stricter threshold on early looks, again set in advance.

**Tradeoffs.** Fixed horizons are simple and slower; sequential methods are faster and need more setup.

#### EX-C14-06 · Report the settled effect

**Problem.** Weekly lifts over five weeks: +8%, +4%, +2%, +1.5%, +1.5%. What do you report as the effect, and why? What would a two-week test have said?

**Context.** A new design is being tested.

**Data.** As above.

**Constraints.** Three minutes.

**Expected approach.** The novelty effect (C14.4).

**Solution.** The settled level is about +1.5% (weeks 4 and 5). The five-week average is (8 + 4 + 2 + 1.5 + 1.5) ÷ 5 = 3.4%, and a two-week test would have said (8 + 4) ÷ 2 = 6.0%, four times the settled effect. Report the settled effect, say the early weeks are inflated by novelty, and keep a long-term holdout to check that +1.5% persists.

**Alternative solution.** Compare new users, who have no habit, with existing users: if new users show a steady +1.5% from week 1, the settled number is confirmed.

**Tradeoffs.** Waiting for the effect to settle costs time; deciding on week 1 costs accuracy.

#### EX-C14-07 · Write the decision rule

**Problem.** A test of a new onboarding flow has a primary metric (day-7 activation, baseline 40%) and a guardrail (week-one support contacts). The smallest worthwhile gain is +1 point. Write a rule, then apply it to three results: (a) activation +1.5 [+0.8, +2.2], contacts +1% [−2%, +4%]; (b) +0.5 [−0.2, +1.2], contacts 0% [−3%, +3%]; (c) +1.5 [+0.8, +2.2], contacts +6% [+3%, +9%]. The contacts margin is +3%.

**Context.** The rule is written before the data.

**Data.** As above.

**Constraints.** Six minutes.

**Expected approach.** FW-C14-05.

**Solution.** Rule (FW-C14-05): ship if the lower end of the activation interval is at least +1 point, the smallest worthwhile gain, and the upper end of the contacts interval is at most +3%; extend if the activation interval straddles +1 but guardrails pass; do not ship if the activation interval's upper end is below +1 point, or if the contacts interval breaches +3%. (a) Activation lower end 0.8 is below 1, so the interval straddles the threshold; contacts upper end +4% > 3% breaches the margin, so by the rule do not ship as is (investigate; the upper end only just exceeds the margin). (b) Activation interval [−0.2, +1.2] includes 0 and straddles +1; contacts fine: extend. (c) Activation lower end 0.8 is below 1, and the contacts interval is wholly above the margin: do not ship as is; find why contacts rose. Note (a) is close: the margin is exceeded by one point at the top of the interval, so I'd look at the mechanism before deciding.

**Alternative solution.** For (a), the decision might be to ship in stages while watching contacts, if the margin was set conservatively, and say that this is a judgment against the rule and why.

**Tradeoffs.** A rule makes decisions consistent and can feel rigid at the edges; a documented exception is better than a silent one.

#### EX-C14-08 · Difference-in-differences

**Problem.** A discount is introduced in one region (invented). Conversion in the treated region goes from 12.0% to 13.5%; in a comparison region with no discount it goes from 12.0% to 12.6%. Compute the naive and the difference-in-differences estimates, name the assumption and one check, and say what would make you more confident.

**Context.** The discount cannot be randomized.

**Data.** As above.

**Constraints.** Five minutes.

**Expected approach.** FW-C14-06.

**Solution.** Naive: 13.5 − 12.0 = +1.5 points. Difference-in-differences: (13.5 − 12.0) − (12.6 − 12.0) = 1.5 − 0.6 = +0.9 points. Assumption: parallel trends, meaning the treated region would have moved like the comparison region absent the discount. Check: the weeks before the discount: if the two regions moved together, the assumption is more credible. More confidence: several treated and several matched comparison regions (not one against one), and a placebo test (apply the same method to a time or region where nothing changed and see that it estimates about zero). Caveat: it is rung 5 evidence, weaker than an experiment.

**Alternative solution.** Compare a staggered rollout, where regions got the discount in a random-ish order for operational reasons.

**Tradeoffs.** Quasi-experimental methods are cheaper and rest on assumptions that cannot be fully checked.

#### EX-C14-09 · Which way does interference bias?

**Problem.** A coupon is tested on individual buyers in a marketplace with limited supply. Treated buyers place 10% more orders than before; control buyers place 4% fewer, because the treated buyers took available supply. The user-level difference is 14%. If the coupon were given to everyone, would you expect the total effect to be larger or smaller than 14%? Propose a better design.

**Context.** The team plans to roll the coupon out to all buyers.

**Data.** As above.

**Constraints.** Five minutes.

**Expected approach.** C14.4, interference, and Worked example 5.

**Solution.** Smaller. The 14% gap includes a transfer: treated buyers gained orders partly at the expense of control buyers. If everyone has the coupon, nobody can take supply from anyone else, so the total effect is closer to the increase in demand net of what supply can serve, perhaps +5% to +6%. The user-level test overstates the effect. A better design: randomize whole markets (or alternate coupon-on and coupon-off periods within a market, a switchback) so that buyers who compete are in the same arm, accept wider intervals, and measure total orders served and supply utilization.

**Alternative solution.** Run a user-level test and a market-level test together, and compare the two estimates to measure the size of the spillover.

**Tradeoffs.** Market-level tests have few units and wide intervals; user-level tests are precise and biased here.

#### EX-C14-10 · A timed full design

**Problem.** Give a 20 to 25 minute answer: "Design an experiment to test a new onboarding checklist in a note-taking app."

**Context.** Self-scored; record yourself. State assumptions aloud.

**Data.** None. Label what you assume.

**Constraints.** Use the 30-minute budget in section 4, compressed.

**Expected approach.** The design card (FW-C14-01), scored against the six behaviors in section 1.

**Solution.** An outline of a strong answer. Decision: ship the checklist if it improves early activation. Hypothesis: a checklist shows new users the actions that lead to value. Unit: the new user at sign-up, 50/50, stable hash. Exposure: all new users see onboarding, so analyze all. Primary: activation, defined as creating and returning to notes in the first week (C05's activation finder), say baseline 35% (invented). Guardrails: onboarding completion time, uninstalls in week one, support contacts.

Secondary: the number of checklist items completed, to show the mechanism. Size: smallest worthwhile effect +2 points; 16 × 0.35 × 0.65 ÷ 0.02² = 9,100 per arm; at 3,000 new users a day (1,500 per arm), 6 days, run two full weeks. Validity: check the split first; look by week for novelty (a checklist is novel; new users have no old habit, so the effect should be stable); no interference. Decision rule: ship if the interval's lower end is at least +1 point and guardrails are within margins; extend if it straddles; do not ship otherwise. Long-term: a 5% holdout for week-four retention. Ethics: no dark patterns (a checklist that nags).

**Alternative solution.** Test the checklist against a lighter alternative (a single tip) as a three-arm test, accepting a larger sample and a multiple-comparison adjustment.

**Tradeoffs.** A longer horizon (day-30 retention) is a better outcome and a slower test; week-one activation is the proxy, so validate it against retention in past cohorts.

## 13. Practice protocol

**Timed drills (three a week for four weeks).**

- *Week 1: counterfactual and unit.* Use IQ-C14-01, IQ-C14-02, EX-C14-01 and EX-C14-02. Name the confound and the rung of evidence. Choose a unit and say why.
- *Week 2: size and validity.* Use EX-C14-03, EX-C14-04, EX-C14-05 and EX-C14-06. Do the sample-size, split-check and peeking arithmetic by hand, then check with a calculator.
- *Week 3: design and decide.* Use IQ-C14-03, IQ-C14-04, IQ-C14-07, IQ-C14-08 and EX-C14-07. Fill the design card aloud and write a decision rule before looking at any result.
- *Week 4: hard cases.* Use IQ-C14-05, IQ-C14-06, EX-C14-08, EX-C14-09 and EX-C14-10. Practice interference, rare events and no-randomization answers. Run two timed answers on prompts you have not seen with a partner who changes the facts partway.

**With a partner.** Ask your partner to answer "run an A/B test" to every product idea, and you to respond with the card. Have them reveal a surprising readout (a mismatch, a decaying lift, a conflicting guardrail) midway and practice following the order in FW-C14-07.

**Keep a decision-rule log.** For each drill, write the rule you would have fixed in advance. After eight drills, check whether your rules name a threshold, a margin for each guardrail and what you do when the interval straddles.

**Feedback checklist (yes, partly, no).**

1. Did I state the decision and hypothesis before the design?
2. Did I choose the unit with a reason and analyze at it?
3. Did I name one primary metric, with guardrails and margins?
4. Did I size the test and say the duration in whole weeks, with options if too long?
5. Did I check the split before reading metrics?
6. Did I address novelty, interference and peeking where they matter?
7. Did I write a decision rule before the data?
8. Did I read conflicting metrics in the order validity, guardrails, primary?
9. Did I say what I would do if I could not randomize, and how much weaker it is?
10. Did I finish with the two-sentence close from section 4?

**Answer journal.** For each drill record the date, the prompt, the unit, the primary metric, the rule, your score out of ten and the step you rushed. After eight drills, look for the step you skip most (usually the decision rule or the validity checks) and drill it alone for a week.

## 14. Implementation playbook

Apply the chapter on real work over the next three weeks. Each deliverable doubles as an interview story.

**Days 1 to 3.** Take the last experiment your team ran or the last launch it measured. Fill in the design card for it after the fact: the decision, unit, metrics, size, rule. Mark what was missing, and what it would have changed.

**Week 1.** Write the decision rule for the next test before it starts: the primary metric, the smallest worthwhile effect, each guardrail with a margin, and the action for each outcome. Share it with the engineer and the data scientist and get their agreement in writing.

**Week 1.** Ask engineering how assignment and exposure are logged and whether the split is monitored automatically. If there is no sample-ratio check, ask for one.

**Week 2.** Size one upcoming test with the planner (FW-C14-04): the smallest worthwhile effect, users per arm, duration, and the triggered versus diluted comparison. Compare with the data scientist's estimate.

**Week 2.** Take one past result that was a before-and-after claim and find a comparison group. Estimate the effect with and without the comparison, and write the difference and the assumption.

**Week 3.** Propose a long-term holdout for the next quarter's launches, with a size, a duration and a reason. Present the cost (the benefit forgone by the holdout) and the value (a measure of cumulative effect).

**Deliverables that become stories:** the rule written first (a time you committed to a decision rule and kept to it), the sample-ratio check (a time you caught an invalid test), and the holdout proposal (a time you made a team's measurement more trustworthy). Keep the numbers real, and keep what you did separate from what the team did.

## 15. Key takeaways and further reading

### Key takeaways

1. A causal effect is a comparison with a counterfactual; randomization is the best way to build one, and every other comparison should be placed on the ladder of evidence with its weakness named.
2. Design before you launch: the decision, the unit, one primary metric, guardrails with margins, the smallest worthwhile effect, the duration in whole weeks and a decision rule written first.
3. Check validity before reading results: the sample-ratio check first, then the effect over time (novelty), interference where units interact, and a fixed stopping point.
4. Read conflicting metrics in order: validity, guardrails, primary, secondary, segments, horizon; follow the rule you set, and change it for the next test, not silently for this one.
5. When you cannot randomize, use a holdout, a matched comparison or difference-in-differences, name the assumption and the check, and say how much weaker the evidence is.

### Further reading

- Ron Kohavi, Diane Tang and Ya Xu, *Trustworthy Online Controlled Experiments* (2020). The standard practical reference for everything in this chapter.
- Ron Kohavi and Stefan Thomke, "The Surprising Power of Online Experiments," *Harvard Business Review*, September–October 2017 (reprint R1705E; hbr.org/2017/09/the-surprising-power-of-online-experiments). The source for CS-C14-02.
- Joshua D. Angrist and Jörn-Steffen Pischke, *Mastering 'Metrics* (2014; some catalogs give 2015). A readable introduction to difference-in-differences and other methods for when you cannot randomize `[V: Princeton University Press, ISBN 9780691152844; dated 2014 by sellers and 2015 in library catalog records]`.
- Alan S. Gerber and Donald P. Green, *Field Experiments: Design, Analysis, and Interpretation* (2012). Careful treatment of design and interference `[V: W. W. Norton, 29 May 2012, ISBN 9780393979954]`.
- Dean Eckles, Brian Karrer and Johan Ugander, "Design and Analysis of Experiments in Networks: Reducing Bias from Interference," *Journal of Causal Inference* (2017) `[V: Journal of Causal Inference 5(1), 2017, article 20150021, doi 10.1515/jci-2015-0021]`. On cluster designs in social networks.
- Diane Tang, Ashish Agarwal, Deirdre O'Brien and Mike Meyer, "Overlapping Experiment Infrastructure: More, Better, Faster Experimentation," KDD (2010) `[V: Tang, Agarwal, O'Brien and Meyer, KDD 2010, pp. 17 to 26]`. On running many experiments at once.
- P. Armitage, C. K. McPherson and B. C. Rowe, "Repeated Significance Tests on Accumulating Data," *Journal of the Royal Statistical Society A* (1969) `[V: Journal of the Royal Statistical Society A 132(2), 235 to 244, 1969]`. The classic result on peeking.
