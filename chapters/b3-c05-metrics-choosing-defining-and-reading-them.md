---
id: C05
title: Metrics: Choosing, Defining and Reading Them
tier: 1
competencies: [analytics, product-sense]
prerequisites: [C02, C03]
defines_terms: [metric, north-star-metric, input-metric, guardrail-metric, counter-metric, funnel, activation, retention, cohort, leading-indicator, lagging-indicator, proxy-metric, metric-tree, goodharts-law, churn, conversion-rate, instrumentation, daily-and-monthly-active-users]
uses_terms: [tradeoff, second-order-effect, inversion, mece, hypothesis, root-cause, symptom, pareto-principle, sanity-check, estimation, framework-theater, order-of-magnitude, say-do-gap, experiment, mix-shift, simpsons-paradox, confidence-interval, statistical-power, practical-significance, problem-statement, jobs-to-be-done, user-segment, staged-rollout, mvp, reversible-decision, issue-tree]
frameworks: [FW-C05-01, FW-C05-02, FW-C05-03, FW-C05-04, FW-C05-05, FW-C05-06, FW-C05-07, FW-C05-08]
case_studies: [CS-C05-01 (Illustrative), CS-C05-02 (Verified)]
cross_refs_out: [C02, C03, C04, C06, C07, C08, C10, C12, C13, C14, C15, C16, C17, C18, C20, C21, C23, C24, C25, C26, C27, C31, C33, C34]
cross_refs_pending: []
status: draft
---

# C05 — Metrics: Choosing, Defining and Reading Them

## 1. What interviewers test

Every product answer ends in a number: how will you know it worked? This chapter makes that answer precise. The skill is choosing a small set of metrics that track the value users get, defining each one exactly enough that two people would compute the same figure, and reading what the numbers do and do not say.

**Where it shows up.** `Inferred` from the round structures candidates commonly report: the "define success metrics" step at the end of a product design or improvement answer (C07, C08), dedicated metrics questions ("how would you measure the success of X?", "choose a north star for Y", "DAU is up, is that good?"), the analytical or execution round, and follow-ups inside nearly every other round ("what could that metric hide?"). On the job it appears in every spec you write (C16), every launch review (C17), and every weekly business review, where someone will ask what the number means.

**What is scored.** Google publicly lists general cognitive ability and role-related knowledge among its hiring attributes `Public` `[V: summaries citing Google's how-we-hire page; Google re:Work structured-interviewing guide]`, and a metrics question is where candidates show both. Amazon publishes principles that include Dive Deep and Customer Obsession `Public` `[V: Amazon's Leadership Principles page, amazon.jobs]`, and candidates commonly report follow-ups that test whether you understand how a number is constructed and whether it reflects the customer `Inferred`. Meta candidates commonly report metrics-heavy loops with probing on tradeoffs between engagement and quality `Inferred` `[unverified: candidate-reported]`. The scorer is listening for five behaviors:

1. You start from the goal and the user behavior that signals it, not from a list of metrics.
2. You choose one primary metric and define it exactly.
3. You add inputs that explain it, and guardrails and counter metrics that protect against damage.
4. You say how the metric could be gamed or could mislead, and what you would do about it.
5. You state a time frame, a way to measure, and a decision the metric will change.

**The failure this prevents.** Five patterns cost candidates and new PMs: a metric list with no priority ("DAU, retention, revenue, NPS"), vague metrics ("engagement"), vanity metrics that rise without any decision changing, a primary metric with no guardrail, and a metric chosen because it is easy to measure rather than because it reflects value.

## 2. The concept from first principles

### C05.1 Anatomy of a metric: numerator, denominator, window, population

A **metric** is a defined quantity, measured over a stated population and time window, that tracks one aspect of product performance. [[metric]] differs from a measurement in that it has a definition someone could audit. "Engagement" is not a metric. "Share of weekly active users who complete at least one lesson in the week" is.

A complete definition has eight parts. FW-C05-01 turns them into a card.

| Part | Question | Why it matters |
|---|---|---|
| Event or state | What exactly counts (a session, a completed order, an active day)? | "Active" means different things in different products |
| Numerator | The count of what you are measuring | |
| Denominator | The base you divide by | The same numerator over a different base is a different metric |
| Population | Who is included and excluded (new users, paying users, bots excluded)? | Changing the population changes the number without changing behavior |
| Window | The period over which you count, and any attribution window | A 7-day and a 30-day version answer different questions |
| Aggregation | Sum, mean, median or a percentile; ratio of sums or average of ratios | Long-tailed data makes means misleading |
| Unit of analysis | User, session, order, account, device | Mixing units is a common source of disagreement |
| Source and owner | Where the data comes from and who is accountable for its definition | A metric without an owner drifts |

A **conversion rate** is the share of a defined population that completes a defined action within a window. [[conversion-rate]] shows why definitions matter. "Conversion" might mean orders divided by visits, buyers divided by visitors, or first purchases divided by new visitors in seven days. All three are reasonable and they will differ, so a team that says "conversion is 3%" without the definition has said nothing.

An **active user** is a user who has done a defined qualifying action in a period. **Daily active users** (DAU) and **monthly active users** (MAU) are the counts of distinct active users on one day and in a 30-day window; DAU divided by MAU, the share of monthly users who show up on a given day, is a common measure of habit. [[daily-and-monthly-active-users]] move with the definition of "active": opening the app and completing a core action give different counts.

**Counts, rates and ratios.** A count (orders) rises with scale. A rate (orders per active user) controls for scale. A ratio of sums (total orders divided by total users) differs from an average of ratios (the mean of each user's orders), and for skewed data the second can be much higher or lower than the first. State which you mean.

**Percent change versus percentage points.** If conversion rises from 2% to 3%, that is one percentage point and a 50% relative increase. Both statements are true, and mixing them up is a classic way to mislead or be misled.

**Means, medians and percentiles.** Session length, order value and revenue per user are usually long-tailed, with a few very large values. The mean is pulled toward them. Report the median or a percentile (the 90th) alongside the mean, and say which. For latency, the high percentiles (95th, 99th) matter more than the mean because they describe the worst experiences.

**Why a precise definition works.** Two analysts given the same words will compute different numbers unless the definition removes the choices. Precision makes a metric comparable over time and across teams, and it makes the metric testable: you can check it against the underlying events.

**When not to insist on precision.** In very early discovery, when you have ten users and no instrumentation, a rough count is enough and an elaborate definition is premature. Precision has a cost, and it earns its keep once more than one person reads the number.

> **Counterexample.** A team spends two weeks agreeing on an exact definition of "weekly active user" for a prototype used by 40 people in a pilot. The pilot lasts a month and every user is known by name. Qualitative notes and a simple count tell the team more, faster. Define metrics precisely when the numbers will be compared across time, teams or experiments; at the smallest scale, talk to the users.

**Hidden risk.** A definition can be precise and still wrong for the goal. "Weekly active user" defined as "opened the app" counts a user who opened it by accident. A precise metric of the wrong thing is more dangerous than a vague one, because it looks trustworthy.

### C05.2 The metric hierarchy: north star, input, guardrail, counter metrics

Four kinds of metric work together. FW-C05-02 shows how to build the tree.

A **north star metric** is the single metric that best captures the value users get from a product and that predicts long-term success. [[north-star-metric]] gives a team a shared direction. A good one meets five conditions:

1. It reflects value delivered to users, not only value captured by the company.
2. It is linked to long-run business results (retention, revenue), usually as a leading indicator of them.
3. It is measurable and understandable by the whole team.
4. The team's work can move it.
5. It is hard to raise without delivering real value.

Revenue alone usually fails the first and the fifth tests: it can rise through price increases or aggressive tactics while users are worse off, and it is a [[lagging-indicator]] (see C05.5). Pageviews fail the first. Examples of strong candidates, stated generically: for a team chat product, weekly active teams that exchange messages; for a marketplace, completed transactions per week that meet a quality bar; for a learning app, weekly learners who complete at least one lesson. Lists of "the north star of company X" circulate widely online; most are the authors' inferences rather than company statements `Inferred`, so build your own from the five conditions.

An **input metric** is a metric a team can move directly that drives the north star. [[input-metric]] breaks the north star into parts that teams can own: the share of new teams that invite a colleague in week one, the average response time of the matching system. Inputs give each team a lever it controls, which the north star alone does not.

A **guardrail metric** is a metric that must not get worse while a team pursues its primary goal. [[guardrail-metric]] protects the things that matter but are not the goal: crash rate during a speed-up, support contacts per order during a checkout change, a safety measure during a growth push. Guardrails come with a threshold: "no more than a 2% rise."

A **counter metric** is a metric paired with a target specifically to expose the damage that optimizing the target could cause. [[counter-metric]] differs from a guardrail in intent: a guardrail protects against a known regression; a counter metric is the other side of a deliberate tradeoff. If you are asked to raise the number of messages sent, the counter metric might be the rate at which users mute or leave. If you reward speed, the counter metric is quality.

A **metric tree** is a diagram that decomposes a metric into components that multiply or add up to it. [[metric-tree]] makes the structure of a number visible. For example, weekly orders = active customers × orders per active customer; active customers = retained customers + new customers + reactivated customers. Each branch is a lever, and each lever can be checked against the MECE tests from C03.

**When not to use a north star.** A business with several unrelated lines (a platform with a consumer app, an advertiser product and a developer tool) does not have one value to track. Give each line its own primary metric, and use a small set of company-level measures for the whole. A single north star imposed across them tends to favor the largest line. Also, a very early product may not have enough users for any metric to be stable; use qualitative signals until it does.

> **Counterexample.** A company names "time spent in app" as the north star of a news product. Time rises when the app makes articles longer, harder to finish, or loaded with autoplay video. The metric rose while the number of readers who said they learned something fell. A north star must pass the first and fifth conditions: reflect user value and resist being raised without it. "Articles read to completion by weekly active readers" is harder to inflate.

### C05.3 Funnels and activation

A **funnel** is the ordered steps a user passes through to reach an outcome, with drop-off measured at each step. [[funnel]] analysis shows where users stop. The data for each step is the number of users who reached it, and from it you compute step conversion (reached this step divided by reached the previous one) and overall conversion.

**Activation** is the point at which a new user first experiences the product's core value, defined by an observable action. [[activation]] is not account creation. It is the action that signals the user got what they came for: sending a first message to a teammate, completing a first lesson, placing a first order that arrives. Time to activation (how long users take) matters as much as the rate.

**Designing a funnel.**

1. Define the outcome (activation, purchase, subscription).
2. List the steps in order, each an observable event.
3. Decide the window (users who start in this period and complete within seven days).
4. Compute step conversion and the loss in users at each step, and find the largest absolute loss. Check that the product of step conversions matches overall conversion.
5. Segment: by source, platform, new versus returning. A funnel that looks fine overall may fail for one segment.

**Finding the activation event.** FW-C05-04 sets out the method. Look for early behaviors that distinguish users who stay from users who leave, then validate. The hazard is that the relationship is a correlation: users who do many things early are the users who would have stayed anyway (a self-selection effect). Before you build a product around "users who do X retain better," test whether causing more users to do X raises retention, with an [[experiment]] (C14).

**Funnel pitfalls.**

- *Steps that users can skip or reorder.* A strict sequence misrepresents them; use a funnel with the steps you truly require.
- *Re-entry.* Users who return and complete the step later are counted as drop-offs or double-counted unless you set a window.
- *Definition drift.* The meaning of a step changes when the product changes; version your definitions.
- *Cross-device identity.* The same person on a phone and a laptop looks like two users unless identities are linked.
- *Optimizing one step by pushing the problem downstream.* Removing a required field raises signups and lowers the quality of those signups; watch the next step.

**When not to use a funnel.** For products with no fixed path (a feed, a search tool), a funnel forces a sequence that does not exist. Use engagement and retention measures by behavior instead.

### C05.4 Retention and cohorts

**Retention** is the share of users or customers who keep using or paying over time, measured by cohort. [[retention]] answers whether the product keeps people. A **cohort** is a group of users who share a starting event or period, tracked together over time. [[cohort]] analysis compares groups that started at the same time, so that you can tell whether newer users behave better than older ones. **Churn** is the share of users or customers lost in a period, the complement of retention. [[churn]] is the number to watch when the question is how fast the base is leaking.

**Three definitions of "retained at day 7."** They give different numbers.

| Definition | Rule | Use when |
|---|---|---|
| Day-N (exact) | Active on day 7 exactly | The product is designed for a daily habit |
| Bounded | Active at any time in days 1 to 7 | The natural frequency is a few times a week |
| Unbounded | Active on day 7 or any later day | You want the share who had not left by day 7 |

EX-C05-02 works all three on one small data set. Pick the definition that matches the product's natural frequency: a tax product with annual use needs annual retention, and a messaging app needs day-N.

**The cohort table.** Rows are cohorts (people who started in a week or month). Columns are periods since start (week 0, week 1, week 2...). Each cell is the share of that cohort still active. The first column is 100% by construction.

**Reading it.** Read across a row to see the shape of one cohort's curve. Read down a column to compare cohorts at the same age, which shows whether newer cohorts are better. FW-C05-05 gives the reading rules. Curve shapes mean different things:

- *Decays toward zero.* Nobody stays; there is no retained core. The product has not found its value for this audience.
- *Flattens at a level.* A core of users stays. The level of the plateau is the number that matters, and improving onboarding or fit raises it.
- *Dips and rises.* Users return after a gap (seasonal or reactivated). Check whether it is a real habit or a campaign.

**Pitfalls.**

- *Partial periods.* The most recent column for recent cohorts is incomplete; do not read it as a drop.
- *Mix changes.* If the acquisition source changes, the cohort average can fall or rise without any change in how any group behaves (a [[mix-shift]], C13; also see [[simpsons-paradox]], C12).
- *Survivors only.* Averages of long-lived users look good because those who left are gone (survivorship, C12).
- *Small cohorts.* Noise swamps signal; do not read a two-point difference on a few hundred users (C12).
- *Calendar effects.* Holidays and launches distort specific cohorts.

**Stickiness and frequency.** The ratio of daily to monthly active users (DAU divided by MAU) is a common measure of how often active users return. It is useful and crude: a 20% ratio can mean everyone uses the product six days a month or a few use it daily. Pair it with the distribution of active days per user.

**Retention in subscriptions and enterprise.** Logo retention counts customers; revenue retention counts money, and net revenue retention includes upgrades and downgrades, so it can exceed 100% when expansion beats losses.

**When not to use retention.** For one-time-use products (a tool used once for a one-off task), retention is the wrong goal; use outcomes such as task success and referral.

### C05.5 Leading versus lagging indicators; proxy metrics and their limits

A **leading indicator** is a measure that moves before the outcome it predicts. [[leading-indicator]] gives you time to act: first-week activity predicts three-month retention. A **lagging indicator** is a measure that reflects results after they have happened. [[lagging-indicator]] is reliable and slow: quarterly revenue, annual churn. A product team needs both: lagging indicators say whether you succeeded, and leading indicators say whether you are on track in time to change course.

A **proxy metric** is a measurable stand-in for an outcome that is hard to measure directly. [[proxy-metric]] covers the many cases in which the thing you care about (satisfaction, trust, learning, "found what they needed") cannot be observed. A search product cannot see satisfaction, so it uses proxies such as a click on a result with no immediate return to the results page.

**Using proxies honestly.**

1. State the outcome the proxy stands for.
2. Check the link: does the proxy actually move with the outcome? You can test this by correlation over time and, better, by an experiment that moves the proxy and observes the outcome.
3. State how the proxy can mislead: a click can be a mistake; time on a page can mean confusion.
4. Pair it with a second proxy or a direct measure (a survey, a human review) that can disagree.
5. Re-check it over time, because proxies drift as the product and the users change.

| Outcome | Leading indicator | Proxy for the outcome | How it misleads |
|---|---|---|---|
| Long-term retention | First-week active days | none (it can be measured directly, later) | Heavy early users may be the ones who would stay anyway |
| Search satisfaction | none | Clicks with no quick return to results | Clickbait results raise clicks and lower satisfaction |
| Learning | Lessons started | Lessons completed | Completion can be rushed without learning |
| Trust in an assistant | none | Share of answers accepted without edit | Users may accept without reading |

**When not to use a proxy.** When you can measure the outcome directly at acceptable cost, do so. A survey sent to a sample is often better than a clever proxy.

### C05.6 Metrics by product type

The tree is the same; the branches differ. The table gives a starting point for the common product types. Treat each as a hypothesis to test against the five metric tests (FW-C05-03).

| Product type | Value delivered | North star candidates | Key inputs | Typical guardrails and counters | Common trap |
|---|---|---|---|---|---|
| Social and feeds | Connection, relevant content | Weekly users with meaningful interactions | New, returning, resurrected users; interactions per user | Time spent without interaction; notification opt-out; reports of harm; well-being measures | Maximizing time spent or sessions |
| Marketplace | Successful matches | Completed transactions per week meeting a quality bar | Supply (active sellers), demand (active buyers), match rate | Rating, cancellation rate, supply-side earnings | Growing one side and starving the other (liquidity) |
| Subscription and media | Ongoing value | Weekly active subscribers | Trial-to-paid, activation, resurrection | Cancellation rate, content variety, support contacts | Acquiring subscribers who churn in a month |
| Enterprise (B2B) | Work completed for a customer | Weekly active seats doing the core task, per account | Seat adoption, time to value, expansion | Net revenue retention, support load, admin time | Counting purchased seats rather than used seats |
| Advertising | Return for advertisers without harm to users | Advertiser return on spend at a constant user experience | Impressions, clicks, conversions, advertiser retention | User retention, ad load, complaint rate | More ads raising revenue today and lowering user retention tomorrow |
| E-commerce | Purchases that satisfy | Delivered orders per active customer | Conversion, order value, repeat rate | Return rate, delivery time, rating | Raising conversion with discounts that destroy margin |
| AI assistant | Tasks completed well | Weekly users completing a task with an accepted result | Acceptance rate, edit rate, regeneration, latency | Harmful output rate, cost per task, over-acceptance audits | Counting usage when the answers are wrong |
| Hardware and wearables | Value from a device in daily life | Active devices used on most days | Activation, wear or use time, setup completion | Battery life, returns, support contacts, data-consent rate | Counting units shipped rather than devices in use |

The AI row is developed in C24 and C25, and the ranking and recommendation case in C23.

### C05.7 Goodhart's law, metric gaming, and behavior change versus dashboards

**Goodhart's law** is the observation that when a measure becomes a target it stops being a good measure, because effort shifts to the measure rather than the goal. [[goodharts-law]] is named for the economist Charles Goodhart, whose 1975 remark about monetary policy is the usual source, and the common phrasing appears in a 1997 paper by the anthropologist Marilyn Strathern `[V: Goodhart, 1975 conference remark on monetary policy; Strathern, 1997, who restated it in this form (one reference work says she was citing Keith Hoskin's wording)]`. It is the reason a metric chosen well in a planning meeting can mislead six months later.

**How gaming works.**

- *Shifting the definition.* Counting a session as "active" after an automated notification opens the app.
- *Selecting easy cases.* Closing easy tickets first so the count rises.
- *Borrowing from the future.* A discount that lifts this quarter's orders and lowers next quarter's.
- *Splitting and relabeling.* Counting one action as several events.
- *Pushing the problem elsewhere.* Raising signups by removing a check, and moving the cost to support.

Gaming is often not dishonest. People respond to what they are measured on, and the metric defines what counts as success.

**Defenses.** Pair every target with a counter metric that would reveal the damage. Audit definitions, so that a change in the number can be traced to a change in behavior. Measure outcomes as well as outputs (customers helped as well as tickets closed). Use ranges and thresholds rather than a single number to push toward. Review a sample of the underlying cases by hand. Rotate or retire metrics that have been optimized. Ask the [[inversion]] question: "If I wanted to hit this number without delivering any value, how would I do it?"

**Behavior change, not dashboards.** A dashboard is a display. A metric earns its place if it changes a decision. For every metric, ask what you would do differently if it moved by a meaningful amount, who would do it, and when it last changed an action. A metric that has never changed an action is decoration, and these are often vanity metrics: cumulative signups, total pageviews, and lifetime downloads rise by construction and rarely guide a decision. Metrics that matter tend to be rates, per-user or per-cohort, and they can fall.

**The metrics audit.** Once a quarter, for each metric a team reviews: what decision it informs; its definition and owner; how it could be gamed; what counter metric accompanies it; when it last led to a change; and whether it still reflects user value.

**Honest products and growth tactics.** A product can raise its numbers by serving users better, or by exploiting attention, friction and habit. The second tends to show up as rising metrics and falling trust. A good metric set includes a measure of user outcomes that the growth tactics cannot raise by themselves. Dark-pattern tradeoffs are discussed in C10.

> **Counterexample.** A support team is told to reduce "average handle time." Agents begin ending calls early, and repeat contacts rise. The target defined the behavior. But an organization without any target on handle time drifts toward long calls and high cost. The answer is not to avoid targets. It is to pair each target with a counter metric (repeat contact rate, customer satisfaction), so that the cheap way of hitting the number is visible.

### C05.8 Instrumentation and data quality basics

**Instrumentation** is the code that records user actions and system events as data. [[instrumentation]] is how a metric becomes a number. A metric you cannot compute because the event was never logged is a metric you cannot have, and many weak analyses trace to events that were missing, duplicated or mislabeled.

**An event** is one logged occurrence: a user did something at a time. A good event record includes the event name, the time, the user or device identifier, the platform and version, and properties that describe it (the item viewed, the price, the source).

**The tracking plan.** Before you build, write down the events that the metrics need. A fragment for an invite feature:

| Event | Fires when | Key properties | Used for |
|---|---|---|---|
| invite_started | The user opens the invite screen | source screen, platform | Funnel step 1 |
| invite_sent | The user sends an invitation | number of recipients, channel | Funnel step 2, input metric |
| invite_accepted | A recipient joins | time since sent, recipient is new | Activation, north star input |

**Client and server events.** Events logged on the user's device can be lost (no connection, app closed) and can be blocked or inflated. Events logged on the server are more reliable for things that matter to the business (orders, payments) and cannot see what happens on screen. Use each where it is strongest and know which one a metric uses.

**Data quality checks.** Run these before trusting a number: volume (events per day within the usual range), null and missing rates for key properties, duplicates, schema changes after a release, time zones and day boundaries, bot and test traffic, and identity (the same person counted twice). When a metric changes suddenly, check the data before you look for a behavior change (C13 treats this as step zero).

**What a PM owns.** Write the tracking plan before the build, and review it with engineering and analytics. Ask for the events to be tested before launch, and look at the first day of data. Keep one place where definitions live, so that the same metric means the same thing in every report.

**Cost.** Every event costs engineering time, storage and complexity, and too many events make the important ones hard to find. Log what a decision needs. Reading and reasoning about a query is a skill covered in C21 (C21.4); writing the queries a diagnosis needs, and checking them, is covered in C13 (C13.6a).

### C05.9 Measurement under privacy constraints `[as of 2026-10]`

Privacy rules and platform policies have limited what can be measured about individuals: Apple's App Tracking Transparency, released with iOS 14.5 in April 2021, requires an app to ask permission before tracking people across other companies' apps and websites, and Meta's annual report says Apple's changes reduced its ability to target and measure advertising `Public` `[V: Apple App Tracking Transparency, April 2021; Meta Form 10-K, fiscal 2025]`. The specifics vary by region and platform and change often, so treat the following as the general shape rather than the current rules.

- **Consent.** In many regions, collecting some data requires the user's consent, and users who decline are missing from the data. The measured population is then a self-selected subset.
- **Limits on tracking across apps and sites.** Platforms and regulators have restricted the identifiers that let a company link a person's activity across services. This weakens attribution, which asks which campaign caused a signup.
- **Aggregation and modeling.** More measurement relies on aggregated counts, modeled estimates and first-party data (what happens inside your own product), and less on person-level tracking.
- **On-device processing.** Some measurement can be done on the device and reported in summary, which protects privacy and limits what you can analyze afterward.

**What changes for the PM.**

1. Prefer metrics that can be computed from first-party, consented or aggregated data.
2. Expect gaps and state them: "this covers users who opted in, who may differ from those who did not."
3. Use experiments and surveys more, since they do not depend on tracking individuals across services.
4. Treat consent and opt-in rates as metrics in their own right, and as guardrails: a growth tactic that lowers consent or trust has a cost.
5. Minimize what you collect. Fewer, better-defined events are easier to protect and to explain.

**Interview use.** A strong answer to "how would you measure this?" for a privacy-sensitive feature names what you would measure on the device or in aggregate, which data you would not collect, and how you would handle the bias from opt-out.

## 3. Frameworks

Eight frameworks, set out below. FW-C05-01 to FW-C05-06 are original working tools; FW-C05-07 and FW-C05-08 are established frameworks that interviewers know by name.

#### FW-C05-01 · The metric definition card · Original

**Core framework.** Learn this one first.

- **Inputs:** a metric name used loosely in a document or a meeting.
- **Outputs:** a one-row card with the eight parts of the definition, a worked calculation on sample data, and a list of known caveats.
- **Assumptions:** the underlying events exist and can be counted; someone owns the definition.
- **Tradeoffs:** precision takes time to agree and prevents later disputes.
- **Failure modes:** a definition that is precise and measures the wrong thing; a card that nobody updates when the product changes; an ambiguous population.
- **Worked example:** "weekly active user" becomes: users who performed at least one core action (not merely opening the app) in a calendar week, excluding test and automated accounts, counted by user ID, source: server events, owner: analytics.

| Part | Fill in |
|---|---|
| Name | |
| Event or state | |
| Numerator | |
| Denominator | |
| Population and exclusions | |
| Window and attribution | |
| Aggregation | |
| Unit of analysis | |
| Source and owner | |
| Known caveats and ways it can be gamed | |

#### FW-C05-02 · The metric tree · Original

- **Inputs:** a north star candidate and the levers that drive it.
- **Outputs:** a tree two or three levels deep, with each branch labeled as an input or a driver, and with guardrails and counter metrics attached to the branches they protect.
- **Assumptions:** the north star can be decomposed into components that multiply or add up to it.
- **Tradeoffs:** a complete tree is hard to maintain; a shallow one hides levers.
- **Failure modes:** branches that overlap (violating MECE); branches no team can move; a tree with no guardrails; inputs that are outputs of the north star rather than drivers.
- **Worked example:** weekly completed orders = active customers × orders per customer, with active customers split into retained, new and reactivated, and with delivery time and rating as guardrails (Worked example 2).

Build steps: (1) state the north star; (2) split it into multiplicative or additive parts (C03.2 MECE tests); (3) mark the inputs each team can move; (4) attach guardrails; (5) attach a counter metric to each target; (6) check the arithmetic on real numbers.

#### FW-C05-03 · The five metric tests · Original

- **Inputs:** a candidate metric and the goal it is meant to serve.
- **Outputs:** a pass, fail or caveat on each of five tests, and a decision to adopt, adapt or reject.
- **Assumptions:** the goal is stated; you can reason about how the metric behaves.
- **Tradeoffs:** a metric that passes every test is rare; the tests make the compromise explicit.
- **Failure modes:** running the tests after choosing the metric; scoring the tests without evidence; ignoring a fail on the gaming test.
- **Worked example:** "time spent" fails the value and gaming tests for a news product, while "articles read to completion per weekly reader" passes all five (C05.2).

| Test | Question |
|---|---|
| Value | Does it move when users get more value, and only then? |
| Control | Can the team's work move it? |
| Speed | Does it move fast enough to guide decisions, or is it too lagging? |
| Gaming | How would I raise it without delivering value, and would I notice? |
| Clarity | Can two people compute the same number from the definition? |

#### FW-C05-04 · The activation finder · Original

- **Inputs:** event data for new users over a period, with a measure of whether each stayed (for example, active at day 30).
- **Outputs:** a candidate activation event (an early action and a window), the evidence for it, and an experiment to test whether it causes retention.
- **Assumptions:** early behavior is logged; there is enough data for stable comparisons.
- **Tradeoffs:** a clear activation event focuses the team; if it is wrong, it focuses the team on the wrong thing.
- **Failure modes:** treating a correlation as a cause; choosing the event that separates groups best rather than the one that reflects value; ignoring that heavy users do everything early.
- **Worked example:** for a scheduling tool, "two invitees accept within seven days" separates retained teams (62% retained versus 18%), and an experiment nudging invitations tests whether it causes the gap (CS-C05-01).

Steps: (1) list early actions and windows; (2) compare retention for users who did and did not take each; (3) shortlist the actions that differ most and that reflect real value; (4) check that enough users take the action to matter; (5) validate with an [[experiment]] (C14) that increases the action and measures retention; (6) define activation and track the share and time to reach it.

#### FW-C05-05 · The cohort reading guide · Original

- **Inputs:** a cohort retention table.
- **Outputs:** a statement of the curve shape, the plateau level, the comparison between cohorts, and the caveats (mix, partial periods, noise).
- **Assumptions:** cohorts are defined consistently and the periods are complete.
- **Tradeoffs:** reading many cohorts reveals trends and invites over-reading noise.
- **Failure modes:** reading an incomplete column as a drop; comparing cohorts with different acquisition mixes; calling a two-point difference a trend.
- **Worked example:** five weekly cohorts show a plateau near 24% before an onboarding change and about 33% after, with both the week-one and week-four values higher (Worked example 4).

Reading steps: (1) check the table is complete and cohorts are comparable; (2) read across a row for the curve shape; (3) find the plateau; (4) read down a column to compare cohorts at the same age; (5) check for mix shift by splitting by source; (6) ask whether a change in behavior or a change in who arrived explains it; (7) say what test would settle it.

#### FW-C05-06 · The success-metric answer template · Original

**Core framework.** Learn this one first.

- **Inputs:** a feature, product or goal named in an interview or a spec.
- **Outputs:** a spoken or written answer: the goal, the user behavior, one primary metric with a definition, two or three inputs, guardrails and counter metrics, a target and time frame, and how to measure.
- **Assumptions:** the interviewer will let you clarify the goal and the product's stage.
- **Tradeoffs:** a full template takes three to five minutes; shorten for a quick prompt.
- **Failure modes:** listing metrics without a primary; no definition; no guardrail; no statement of how it could mislead.
- **Worked example:** the sleep-stories feature in Worked example 1, and the saved-places answer in section 6.

Steps (see section 4 for timing): **Goal, Behavior, Primary metric, Inputs, Guardrails and counters, Target and time, Measurement and risks.**

#### FW-C05-07 · The AARRR funnel · Established

- **Origin:** Dave McClure's "Pirate Metrics" framing for startup measurement, presented in slide decks that circulated from about 2007 (a version dated March 2009 is public; the 2007 origin is commonly cited and was not confirmed) `[V: McClure, Startup Metrics for Pirates, slide deck of March 2009]`.
- **Inputs:** a product with a path from first contact to revenue and referral.
- **Outputs:** five stages (acquisition, activation, retention, revenue, referral), a metric at each, and the stage with the biggest leak.
- **Assumptions:** users move through the stages in roughly this order; a single product-level funnel is meaningful.
- **Tradeoffs:** a simple scaffold that is quick to apply and flattens products with no linear path.
- **Failure modes:** treating the order as strict; optimizing acquisition when retention is the leak; using it as a checklist rather than a diagnosis.
- **Worked example:** a language app has strong acquisition and activation and weak week-4 retention, so the team works on retention, not on more installs.

| Stage | Question | Example metric |
|---|---|---|
| Acquisition | How do users arrive? | New users by source |
| Activation | Do they get first value? | Share completing a first lesson |
| Retention | Do they come back? | Week-4 retention by cohort |
| Revenue | Do they pay? | Trial-to-paid conversion |
| Referral | Do they bring others? | Invites per active user |

#### FW-C05-08 · The HEART framework with Goals–Signals–Metrics · Established

- **Origin:** Kerry Rodden, Hilary Hutchinson and Xin Fu, Google, "Measuring the User Experience on a Large Scale: User-Centered Metrics for Web Applications" (CHI 2010) `[V: Rodden, Hutchinson and Fu, CHI 2010 (doi 10.1145/1753326.1753687)]`.
- **Inputs:** a product or feature and its user-experience goals.
- **Outputs:** goals, signals and metrics across five categories: Happiness, Engagement, Adoption, Retention and Task success.
- **Assumptions:** user experience can be translated into observable signals; not every category applies to every product.
- **Tradeoffs:** it prompts breadth and invites a long list; the Goals–Signals–Metrics steps force selection.
- **Failure modes:** filling every cell with a metric; skipping the goals and signals steps; using survey-based happiness without a behavioral check.
- **Worked example:** for a maps "saved places" feature, task success is "share of saves later revisited" and happiness is a short survey on whether saved places help planning (section 6).

| Category | Meaning | Example signal and metric |
|---|---|---|
| Happiness | Attitudes: satisfaction, ease | Survey score after use |
| Engagement | Depth and frequency of use | Weekly sessions with the core action |
| Adoption | New users or features taken up | Share of users who try the feature in 30 days |
| Retention | Continued use | Share still using at week 8 |
| Task success | Efficiency, effectiveness, errors | Task completion rate and time to complete |

The process behind it: state the **goal** for the experience, identify the **signal** that would show the goal is met, then choose the **metric** that quantifies the signal. Use the categories as prompts, not as a checklist to fill.

## 4. Answer architecture

Four question types use this chapter. A fifth, "the metric dropped," is C13, and metrics for experiments are C14.

### C05.10 Stating success metrics in an interview answer

### Type A: "How would you measure the success of X?"

*Example prompts:* "How would you measure the success of a saved-places feature in a maps app?" "How would you define success for a new onboarding flow?"

**Structure (FW-C05-06)**

1. **Clarify the goal and context:** what is the feature for, who is it for, what stage is it in, and what is the business model?
2. **Name the user behavior** that shows the goal is met.
3. **Choose one primary metric,** with a definition (numerator, denominator, population, window).
4. **Add two or three input metrics** that explain it (funnel steps, drivers).
5. **Add guardrails and a counter metric,** with thresholds.
6. **State a target and a time frame,** and which are leading and which lagging.
7. **Say how you would measure** (events, survey, experiment) and **how the metric could mislead.**
8. **Close** with the decision the metric will drive.

**Time budget for a ten-minute segment**

| Step | Minutes | What to produce |
|---|---|---|
| Clarify goal and context | 1.5 | Goal, user, stage, business model |
| Behavior and primary metric | 2.5 | One metric with a precise definition |
| Inputs | 1.5 | Two or three drivers or funnel steps |
| Guardrails and counter metric | 1.5 | Named metrics with thresholds |
| Target, time and measurement | 1.5 | Leading and lagging, how you would measure |
| Risks and close | 1.5 | How it could mislead; the decision it drives |

### Type B: "Choose a north star for product Y"

Apply the five conditions in C05.2. Give two or three candidates, test each against the five metric tests (FW-C05-03), choose one, and name the inputs, guardrails and counters. Say what you would revisit as the product matures. Avoid revenue and pageviews as north stars unless the product's value is exactly that.

### Type C: "Metric Z is up. Is that good?"

*Example prompts:* "DAU is up 5%. Is that good?" "Time spent per user is up 8% after a ranking change."

1. **Ask what changed and why it was measured:** definition, window, population, any recent changes in logging.
2. **Decompose** the metric (new, returning, resurrected; sessions per user; time per session).
3. **Check quality:** retention of the new users, counter metrics, and the experience of the core group.
4. **Check the cause:** a campaign, a notification change, a ranking change, a seasonal effect.
5. **Conclude** with a view and a next step: good if the growth is in retained users and the counter metrics are stable; a warning if it comes from low-quality sources.

### Type D: "Your team is optimizing metric M. What could go wrong, and what would you do?"

Apply C05.7: how it could be gamed, the second-order effects, the counter metric, and a plan to audit. Offer a better primary metric if M does not reflect value, and say how you would persuade the team.

**Where to signpost.** "My goal is X, the behavior is Y, so my primary metric is Z, defined as..." "Guardrails are A and B; my counter metric is C." "This could mislead if..."

**How to close.** One sentence: "I'd call it a success if the primary metric reaches ___ within ___ while the guardrails hold, and I would change my mind if the counter metric moves by ___."

**Pacing rules.** Lead with the goal; do not open with a list of metrics. Define the primary metric in full before you add others. Say the threshold for a guardrail, not only its name. If the interviewer asks for more metrics, add inputs, not a second primary. When data is given, update aloud: say what the numbers change and what you would check next.

## 5. Worked examples

All four examples are `Illustrative`: the products are fictional and every figure is an invented assumption.

### Worked example 1 — Subscription: success metrics for a "sleep stories" feature (Illustrative)

**Clarify.** A meditation subscription app launches a library of sleep stories. The goal is to give subscribers a reason to return in the evening and to reduce cancellations. The app has 260,000 weekly active subscribers (invented). The stage is a launch, so I need metrics for the first eight weeks.

**Behavior.** A subscriber who values the feature will start and finish stories, and will come back to do it again. One story could be curiosity. Two completed stories in a week is a habit forming.

**Primary metric (defined).** Share of weekly active subscribers who complete at least two sleep stories in the week. Numerator: weekly active subscribers with two or more completions (a completion is at least 80% of a story's length). Denominator: weekly active subscribers (active means at least one session of any content, excluding test accounts). Window: a calendar week. Unit: subscriber. Source: server-side playback events. Target: 20% within eight weeks, which is 52,000 subscribers (invented).

**Inputs (the funnel inside the metric).**

| Step | Share of weekly active subscribers (invented target) | Subscribers |
|---|---|---|
| See the sleep stories entry point | 60% | 156,000 |
| Start at least one story | 40% | 104,000 |
| Complete at least one story | 30% | 78,000 |
| Complete at least two (primary metric) | 20% | 52,000 |

The largest absolute drop is between seeing and starting (52,000 subscribers), so discovery-to-start is the first lever to test.

**Guardrails.** Weekly cancellation rate must stay at or below 1.2% (it is 1.1% today, invented). Sessions on other content per subscriber must not fall by more than 3%, so the feature adds listening and does not just move it. Latency of the first playback under two seconds at the 95th percentile.

**Counter metric.** Share of started stories abandoned in the first 20% of their length. A rise would show that people try the stories and leave, which the completion count alone would hide.

**Leading and lagging.** Leading: completions per subscriber in week one. Lagging: cancellation rate among subscribers who completed two or more stories, compared with similar subscribers who did not (read with care, since people who use the feature may be the ones who would stay anyway, and an experiment (C14) would settle it).

**Measure and risks.** Playback events on the server; a 10% holdout that does not see the entry point for the first four weeks; a short survey on whether the stories helped users wind down. The metric could mislead if autoplay inflates completions, so completions require an explicit start by the user.

**What this shows.** One defined primary metric, a funnel of inputs with a first lever, guardrails with thresholds, a counter metric, and a stated way to learn whether the feature causes the retention.

### Worked example 2 — Marketplace: choosing a north star for a food-delivery marketplace (Illustrative)

**Clarify.** A food-delivery marketplace in one country (invented) wants one metric for the whole team. The business earns a commission on orders, couriers and restaurants are both customers, and quality matters to repeat use.

**Three candidates, tested (FW-C05-03).**

| Candidate | Value | Control | Speed | Gaming | Clarity | Verdict |
|---|---|---|---|---|---|---|
| Gross merchandise value | Weak: rises with price and fees | Yes | Fast | Easy: raise prices or fees | Clear | Reject |
| Completed orders per week | Medium: ignores quality | Yes | Fast | Discounts inflate it | Clear | Adapt |
| On-time completed orders per week | Strong: combines a delivered order with a quality bar | Yes, through supply and matching | Fast | Harder to raise without service improving | Clear with a definition | Adopt |

**The north star (defined).** On-time completed orders per week: orders that were delivered and arrived within the promised window, counted in the calendar week they were delivered, excluding cancelled and refunded orders.

**The metric tree (invented numbers).**

- On-time completed orders = weekly orders × on-time share. Weekly orders: 1,100,000. On-time share: 88%. On-time completed orders: 968,000.
- Weekly orders = active customers × orders per active customer = 500,000 × 2.2 = 1,100,000.
- Active customers (500,000) = retained 410,000 + new 60,000 + reactivated 30,000. The sum is 500,000, so the tree adds up.
- Supply side: active restaurants 12,000, so about 92 orders per restaurant per week (1,100,000 ÷ 12,000).
- On-time share is an outcome of matching and courier supply, so its inputs are courier availability in the peak hour and order preparation time.

**Guardrails.** Customer rating (4.6 today, floor 4.5, invented). Courier earnings per active hour not down more than 3%. Restaurant cancellation rate at or below 2%.

**Counter metrics.** Refund rate (to expose orders pushed through with discounts or sloppy fulfillment). Share of orders that depend on a promotion (to expose growth bought with subsidies).

**What I would revisit.** If the business expands into groceries with longer windows, the on-time definition changes, and if supply becomes the binding constraint, a measure of courier utilization joins the tree.

**What this shows.** The tests turned a debate into a comparison, the tree added up on real numbers, and the guardrails protected the other side of the marketplace.

### Worked example 3 — Social feed: "Daily active users are up 5%. Is that good?" (Illustrative)

**Clarify.** A social app reports daily active users up from 10.0 million to 10.5 million over a quarter (invented). Ask: how is "active" defined (opened the app, or took an action)? What changed in the quarter (notifications, ranking, marketing)? Over what window?

**Decompose.** Daily active users = habitual users (active in the prior week) + new users + resurrected users (lapsed, now back).

| Component | Last quarter (millions, invented) | This quarter | Change |
|---|---|---|---|
| Habitual | 9.2 | 9.2 | 0.0 |
| New | 0.5 | 0.6 | +0.1 |
| Resurrected | 0.3 | 0.7 | +0.4 |
| Total | 10.0 | 10.5 | +0.5 |

The check: 9.2 + 0.6 + 0.7 = 10.5, and 9.2 + 0.5 + 0.3 = 10.0. All of the growth is new and resurrected users, 80% of it resurrected, and the habitual core is flat.

**Check quality.** The interviewer provides data (invented): notification sends rose 40% this quarter; weekly notification opt-outs rose from 1.0% to 1.8%; sessions per daily user fell from 3.2 to 3.0; 30-day retention of resurrected users is 8% against 35% for the habitual core. The extra 0.4 million resurrected daily users would leave a lasting effect of about 0.4 million × 8% = 32,000 users after 30 days.

**Conclude.** "The 5% is mostly notification-driven resurrection. It will not last: only about 8% of resurrected users are still active after 30 days. The opt-out rate and the fall in sessions per user suggest we are spending trust to buy visits. So I would not call it good. I'd report DAU alongside retention by source and notification opt-out rate, and I'd test a lower notification frequency to see what happens to the habitual core. I'd change my mind if the resurrected users' 30-day retention were close to the core's."

**What this shows.** A headline metric decomposed into components, one component explaining the movement, a counter metric exposing the cost, and a recommendation that changes what the team looks at (a [[second-order-effect]] of the notification target).

### Worked example 4 — Reading a cohort table (Illustrative)

**Setting.** A learning app shipped a new onboarding flow that reached users who signed up from week four onward. Share of each weekly cohort still active, by weeks since signup (invented):

| Cohort | Week 0 | Week 1 | Week 2 | Week 3 | Week 4 |
|---|---|---|---|---|---|
| Signup week 1 | 100% | 40% | 30% | 26% | 24% |
| Signup week 2 | 100% | 41% | 30% | 26% | 24% |
| Signup week 3 | 100% | 39% | 29% | 25% | 23% |
| Signup week 4 (new onboarding) | 100% | 48% | 38% | 34% | 32% |
| Signup week 5 (new onboarding) | 100% | 49% | 39% | 35% | 33% |

**Read across a row (shape).** Every cohort drops fast in the first two weeks and then flattens: the old cohorts lose 2 points between weeks 3 and 4 (26% to 24%, 26% to 24%, 25% to 23%), and the new cohorts also lose 2 points (34% to 32%, 35% to 33%). All five curves flatten, so a retained core exists in every cohort. The question is its size.

**Read down a column (comparison).** At week 1 the first three cohorts average 40% ((40 + 41 + 39) ÷ 3), and the last two average 48.5% ((48 + 49) ÷ 2), a gain of about 8.5 points. At week 4 the first three average 23.7% ((24 + 24 + 23) ÷ 3), and the last two average 32.5% ((32 + 33) ÷ 2), a gain of about 8.8 points, or about 37% in relative terms. The gain is as large at week 4 as at week 1, so it persisted and was not a novelty effect that faded.

**Check for mix.** If week four also brought a change in acquisition source (more organic users, who often retain better), the gain could be mix. Splitting each cohort by source would show whether the gain appears within each source.

**What the table cannot say.** The cohorts are consecutive weeks, not randomized groups, so something else that changed in week four (a campaign, a seasonal effect, a competitor's outage) could explain part of the gain. To settle causation, an [[experiment]] (C14) that holds out a share of new users from the new flow would do it.

**Conclude.** "The new onboarding appears to raise the plateau from about 24% to about 33% at week four, and the gain persists. I'd confirm with a source split and, to claim causation, a holdout."

**What this shows.** Reading both directions, using the plateau as the number that matters, and naming what the table can and cannot prove (the caveats are developed in C12 and C14).

## 6. Baseline, Strong, Standout

**Prompt:** "How would you measure the success of a new 'saved places' feature in a maps app?" (All figures are assumptions.)

### Baseline answer

"I'd track how many people use saved places, the number of saves per user, and daily active users. We could also run a survey to see if people like it, like an NPS score."

*What is wrong:* a list with no goal, no primary metric, no definition, no guardrails, and metrics (saves, DAU) that can rise without the feature helping anyone.

### Strong answer

"The goal is that people save places they want to go to later, and then actually go. So the behavior that shows value is reuse, not just saving.

"My primary metric is the saved-place reuse rate: of users who saved a place in a month, the share who navigate to or open a saved place at least once within 30 days of saving it.

"Inputs: adoption, the share of weekly active users who save at least one place in 30 days; saves per saver; and the share of reuse that comes through the saved list versus search. Guardrails: time to start navigation must not rise, search success must not fall, and the rate of users deleting their saved data should stay flat, as a trust signal. My counter metric is the share of saves never revisited, since a growing pile of unused saves would mean clutter, not value.

"A reasonable target is a reuse rate of 50% within eight weeks. I'd measure it with events for save, open and navigate, and I'd check a short in-product survey for whether saved places help with planning."

### Standout answer

Everything in the Strong answer, plus:

"I'd write the definition so two people compute the same number: the denominator is users with at least one save in the month, counted by user ID, excluding saves made automatically by an import; reuse requires an explicit open or navigation. That matters, because a prompt that nudges saves would raise saves per user without raising reuse. That is why reuse, not saves, is the primary metric.

"I'd segment it, because commuters and travelers save for different reasons, and a travel feature with a low overall reuse rate can hide a strong commuter use. In HEART terms, task success is reuse, adoption is the first save, retention is returning to saved places in later months, and happiness is the survey.

"To claim the feature causes more use, not just that people who use it use more, I'd run a holdout: a share of users who do not see the entry point for four weeks. The leading indicator is the share of new savers who reuse within a week; the lagging one is the difference in 90-day retention between holdout and exposed users.

"On privacy, saved places are sensitive location data, so I'd measure aggregate reuse and on-device events where I can, track the delete rate and the opt-in rate as guardrails, and be explicit that users who opt out of analytics are missing from the numbers. What would change my plan: if reuse is high but adoption is low, the work is discovery, and if adoption is high but reuse is low, the saves are not useful."

### What moves an answer up a band

| From Baseline to Strong | From Strong to Standout |
|---|---|
| States the goal and the user behavior | Defines the primary metric so two people compute the same number |
| Chooses one primary metric, with inputs | Explains why a tempting alternative (saves) would be gamed |
| Adds guardrails and a counter metric | Segments, and maps to a framework without filling every cell |
| States a target and a measurement method | Distinguishes leading and lagging, adds a holdout for causation, and covers privacy and measurement bias |

## 7. Company lens

All claims describe what companies say publicly or what candidates commonly report, not insider knowledge. Interview formats change `[as of 2026-10]`.

> **Company lens: Google [as of 2026-10].** Google researchers published the HEART framework for user-centered metrics (Happiness, Engagement, Adoption, Retention, Task success) and the Goals–Signals–Metrics process `Public` `[V: Rodden, Hutchinson and Fu, CHI 2010]`. Candidates commonly report metrics questions inside product rounds, with follow-ups on how a number could mislead `Inferred`. Practical consequence: use HEART as a prompt for coverage, not a table to fill, and always state a goal, a signal and one chosen metric.

> **Company lens: Meta [as of 2026-10].** Facebook's own January 2018 statements about reducing time spent in favor of more meaningful interactions are public (CS-C05-02) `Public`. Candidates commonly report metrics-heavy loops with questions on tradeoffs such as engagement versus quality or well-being `Inferred` `[unverified: candidate-reported]`. Practical consequence: be ready to argue against a headline metric when it comes from low-quality sources, and to name a counter metric.

> **Company lens: Amazon [as of 2026-10].** Amazon publishes principles that include Customer Obsession and Dive Deep `Public` `[V: Amazon's Leadership Principles page, amazon.jobs]`. Accounts by former employees describe a focus on controllable input metrics that teams can move, rather than only on outputs `Inferred` `[V: Bryar and Carr, Working Backwards (2021), chapter on managing inputs rather than outputs]`. Practical consequence: split any outcome into inputs a team controls, and say which one you would own.

> **Company lens: Microsoft [as of 2026-10].** Microsoft publicly emphasizes a growth-mindset culture `Public` `[V: Microsoft careers culture page]`. Reports suggest enterprise products are evaluated by active use of purchased seats and by adoption inside accounts `Inferred` `[unverified: candidate-reported]`. Practical consequence: separate purchased seats from active seats, and measure account-level adoption.

> **Company lens: Apple [as of 2026-10].** Apple publishes public statements and design guidelines on privacy `Public` `[V: Apple Human Interface Guidelines (developer.apple.com) and privacy pages]`. Third-party prep guides report product questions grounded in Apple's devices and services, with privacy valued in design answers `Inferred` `[unverified: candidate-reported]`. Practical consequence: for a health or personal-data feature, name the metrics you can compute on the device or in aggregate, state what you would not collect, and treat consent as a metric (IQ-C05-03).

> **Company lens: Netflix [as of 2026-10].** Netflix's published culture material emphasizes context over control and judgment `Public` `[V: Netflix culture memo, June 2024]`. Candidates commonly report personalization and recommendation questions for streaming products `Inferred` `[unverified: candidate-reported]`. Practical consequence: define success in terms of satisfying viewing and retention, not only plays or hours (IQ-C05-04).

> **Company lens: Stripe [as of 2026-10].** its products depend on reliability and payment success, and Stripe is widely reported to publish a status page, which was not opened here `Inferred`. Candidates report metric prompts for payments and developer products `Inferred`. Practical consequence: for a payments API, offer a primary metric such as payment success rate or time to first successful integration, with guardrails on errors, fraud and latency.

## 8. Common mistakes

| # | Mistake | How to detect it | Fix |
|---|---|---|---|
| 1 | A list of metrics with no primary | "DAU, retention, revenue, NPS" | Choose one primary and say why |
| 2 | A vague metric | "Engagement" without a definition | Write numerator, denominator, population and window |
| 3 | A vanity metric | It only rises (cumulative signups) | Use a rate or per-cohort measure that can fall |
| 4 | No guardrail | You can raise the primary by harming something | Name the guardrails and thresholds |
| 5 | No counter metric for a target | You cannot say how the target could be gamed | Pair the target with the metric that would reveal damage |
| 6 | Easy over valuable | The metric is chosen because it is logged | Apply the value and gaming tests |
| 7 | Treating a correlation as activation | "Users who do X retain" with no test | Validate with an experiment before building on it |
| 8 | Ignoring segments and mix | The average moves, and you never look inside | Split by source, platform, cohort |
| 9 | Confusing percent with percentage points | "Up 50%" when it is up one point | State both |
| 10 | No decision attached | You cannot say what you would change if it moved | Name the decision the metric drives |

## 9. Mental models applied

Four models, each tied to a decision in this chapter. [[goodharts-law]] is defined in C05.7; the others come from C02 and one outside source.

**Goodhart's law** (`MM-goodhart`) says a measure that becomes a target stops being a good measure. Application: whenever a metric becomes a goal in a planning document, ask how it would be gamed and attach a counter metric, as in the notification target in Worked example 3. The law is a reason to design the set of metrics, not a reason to avoid targets.

**The map is not the territory** (`MM-map-territory`) is the reminder that a representation is not the thing it represents. The phrase is associated with Alfred Korzybski `[V: Korzybski, "A Non-Aristotelian System and Its Necessity for Rigour in Mathematics and Physics," a paper given in New Orleans in December 1931 and reprinted in Science and Sanity (1933); sources disagree on which society's meeting it was given to]`. Application: a metric is a map of user value, and it leaves out whatever you did not measure. A flat retention number can hide a segment that loves the product and another that hates it. Before you act on a metric, ask what it leaves out and how you would find out.

**Inversion** (`MM-inversion`, see [[inversion]], C02). Application: ask "how would I raise this metric without delivering value?" before you adopt it. The answers (autoplay for completions, notifications for daily actives, discounts for orders) become the counter metrics.

**Second-order effects** (`MM-second-order`, see [[second-order-effect]], C02). Application: a target changes behavior, and the changed behavior has its own consequences. A daily-active-user target raises notifications; notifications raise opt-outs; opt-outs lower the reach of every future message. Trace the chain for each stakeholder before the target is set.

## Engineering, design and data-science perspectives

- **Engineering.** Instrumentation decides what you can know. Ask engineers what the events actually record (when they fire, on which platform, what happens offline), and treat a sudden metric change as a possible logging change until shown otherwise. Server-side events are more reliable for money; client-side events are the only view of what the user saw.
- **Design.** A metric tells you what happened, not why. Pair behavioral metrics with usability observations. Design also changes the metric without changing the behavior: moving a button changes clicks and may change nothing that matters.
- **Data science.** Analysts will care about definition, variance and bias: who is in the denominator, how noisy the metric is, and whether a change is distinguishable from chance ([[confidence-interval]], [[statistical-power]], C12). Ask what size of change the metric can detect, and write the definition with them.

## Checklist: before you commit to a metric

1. Is the goal stated, and the user behavior that signals it?
2. Is there one primary metric with a complete definition (event, numerator, denominator, population, window, aggregation, unit, source)?
3. Does it pass the five tests (value, control, speed, gaming, clarity)?
4. Are there two or three inputs that explain it?
5. Are there guardrails with thresholds and a counter metric for the target?
6. Have I split it by the segments that could behave differently?
7. Do I know which events produce it, and that they are logged correctly?
8. Can I say what decision it will change?

## 10. Case studies

#### CS-C05-01 · Finding the activation event for a scheduling tool · Illustrative · Beginner

*Fictional composite. Every number is invented.*

**Situation.** A team scheduling tool wants to improve 30-day retention of new teams. The product lead says, "We should focus on whatever makes teams stay."

**Constraints.** One analyst for a week; the engineering team can ship one onboarding nudge this quarter.

**Data.** Of 100 new teams (invented): 70 create a first event, 45 invite at least one colleague, and 24 get at least two colleagues to accept within seven days. Thirty-day retention is 62% for the 24 teams with two or more acceptances and 18% for the other 76 teams. Overall: 0.24 × 62% + 0.76 × 18% = 14.9% + 13.7% = 28.6%, about 29%.

**Problem definition.** Which early behavior signals that a team has found value, and does causing more teams to do it raise retention?

**Analysis.** The funnel loses teams at every step: 30 before a first event (100 to 70), 25 before an invite (70 to 45) and 21 before two acceptances (45 to 24). The steepest relative loss, 47%, is between inviting and getting two colleagues to accept. The candidate activation event is "two colleagues accept within seven days." The retention gap (62% versus 18%) is large, so the event deserves attention. But the gap is a correlation. Teams that invite and get acceptances are probably teams that had a real shared need, and they would have stayed anyway (self-selection). If the gap were fully causal and a nudge raised the share reaching the event from 24% to 29%, overall retention would rise to 0.29 × 62% + 0.71 × 18% = 18.0% + 12.8% = 30.8%, about 31%, a gain of about 2.2 points. An experiment (C14) can measure how much of that gain is real.

**Options.**

| Option | Optimizes | Costs |
|---|---|---|
| A. Declare "two acceptances" the activation metric and build around it | Focus | If the gap is mostly self-selection, effort is misdirected |
| B. Run an experiment: a nudge that prompts invitations, with the activation share and 30-day retention as metrics | Evidence on cause | Four weeks |
| C. Make no change until a larger study is done | No wasted effort | Delays learning |

**Tradeoffs.** B costs a month and tells the team how much of the correlation is real. A is faster and risks building on a mirage.

**Decision.** Run B. Define activation as two accepted invitations within seven days, track its share and time to reach it, and add a counter metric: complaints about invitation emails, to catch a nudge that spams.

**Outcome.** In this fictional scenario the nudge raised the share reaching activation from 24% to 29% and raised overall 30-day retention from 29% to 30% (invented), about one point instead of the 2.2 points the correlation implied. About 45% of the apparent effect was real (1.0 ÷ 2.2), and the rest was self-selection. Complaints about invitations did not rise.

**Alternative outcomes.** If retention had risen by the full 2.2 points, the correlation would have been largely causal, and the team would have invested in invitations. If retention had not moved, the team would have looked for another lever (shared calendars, integrations). In every case the lesson is the method: find the candidate from the data, then test whether it is a cause.

#### CS-C05-02 · Facebook, 2018: choosing to lower time spent · Verified · Advanced

*Sources (types): Facebook's News Feed announcement of 11 January 2018 ("News Feed FYI: Bringing People Closer Together," by Adam Mosseri, on the company's newsroom); its fourth-quarter 2017 results press release (filed with the US Securities and Exchange Commission) and the transcript of the earnings call of 31 January 2018 (primary); and CNBC, Fortune and TechCrunch reports of the results. The analysis is the author's. Re-read in October 2026.*

**Situation.** On 11 January 2018, Facebook announced a change to News Feed: its head of News Feed said the goal given to product teams was changing from helping people find relevant content to helping them have more meaningful social interactions, so that people would see less public content, such as posts from businesses, brands and media (including videos), and more posts that spark conversation between people `[V: Facebook newsroom, 11 January 2018]`. In its fourth-quarter 2017 results on January 31, 2018, the company said that changes it had already made, such as showing fewer viral videos, reduced time spent on Facebook by roughly 5%, about 50 million hours a day `[V: Q4 2017 press release and call]`.

**Constraints.** A company whose revenue came almost entirely from advertising, where time spent had been a core engagement measure. The announcement came as the company faced public scrutiny of its effect on society, and as daily active users in the US and Canada fell slightly in the quarter, from about 185 million to 184 million, the first quarterly decline the company had reported in any market, and the chief financial officer said the changes contributed to a decline of 700,000 compared with the previous quarter `[V: earnings call; CNBC and TechCrunch reports]`. Global daily active users still grew to 1.40 billion, up 14% on a year earlier, but quarter-over-quarter growth of about 2% was the slowest the company had reported, according to TechCrunch.

**Data.** The company's statements: it estimated the changes cut time spent by about 5% (about 50 million hours a day); the CEO said on the call that helping people connect is more important than maximizing the time they spend on Facebook, and that he expected time spent and some measures of engagement to go down `[V: earnings call, 31 January 2018]`.

**Problem definition.** Which measure should a social product try to raise: total time spent, which is easy to measure and was growing, or a measure of how much of that time is connected to people and valued by them, which is harder to define?

**Analysis.** This is a documented case of choosing to move a headline metric down. Three points apply to metrics. First, time spent is a proxy ([[proxy-metric]]) for value, and it can rise through content that does not benefit users; the company's own statement acknowledged that passive consumption differs from interaction. Second, the company paired the decision with a different measure (meaningful interactions), which is harder to define and measure, and which raises the risk of the new measure being gamed. Third, the company said openly that the decision would reduce the old measure, which prepared investors and employees for the change. Whether the change improved well-being, and whether the long-term business effect was positive, are separate questions that this case does not answer; accounts differ, and the data needed is not public.

**Options.** *The author's reconstruction.*

| Option | Optimizes | Costs |
|---|---|---|
| A. Keep optimizing time spent | A well-understood metric and short-term revenue | Risk that value per hour falls and trust erodes |
| B. Shift ranking toward meaningful interactions and accept lower time spent | Value per user and long-term trust, as the company argued | A lower headline metric, investor reaction, a harder metric to define |
| C. Shift gradually and report both | Smoother transition | Slower, mixed signals |

**Tradeoffs.** A near-term headline metric against a long-term, less measurable goal. The company chose B and accepted that the metric would fall.

**Decision.** As documented, the company changed News Feed ranking and reported the decline in time spent.

**Outcome.** Documented: a stated reduction of about 5% in time spent, and statements from executives that they did not expect the changes to drag down ad revenue `[V: Fortune, 31 January 2018]`. What happened afterward to well-being and to the business is outside this case.

**Alternative outcomes.** *Inference.* If the company had kept time spent as the target, short-term numbers might have continued to rise, with the risks of lower trust and regulatory attention that the company described. If it had defined meaningful interactions poorly, the new target could itself have been gamed. A counter metric for the new target (for example, the share of interactions that users later report as unwanted) would have exposed that.

**Lesson for an interview answer.** A metric is a choice about what to value. When a headline number is rising for reasons that do not serve users, say so, name a better measure, name its own gaming risk, and say how you would prepare stakeholders for the number falling.

## 11. Interview questions and model answers

Eight questions: two Beginner, three Intermediate, three Hard. Model answers are `Illustrative`; every figure is an assumption. Each is written against the five behaviors in section 1.

#### IQ-C05-01 · Beginner · metrics · AN

**Prompt.** What would you use as the success metric for a "save for later" feature in a news app?

**Rubric.**
- **Baseline:** "Number of articles saved," with no link to value.
- **Strong:** Starts from the goal, chooses a reading-based primary metric with a definition, and adds a guardrail.
- **Standout:** Explains why saves alone are gameable, defines the denominator, adds a counter metric for unread clutter, and says how to learn whether the feature causes more reading.

**Model answer.** The goal of save-for-later is that people read things they cared about but had no time for. The behavior that shows value is reading saved articles, not saving them, because saving costs a tap and does not mean anything was gained.

So my primary metric is the saved-article read rate: of articles saved in a week, the share opened and read to at least 50% within seven days of saving. The numerator is saved articles read to 50% within seven days. The denominator is articles saved that week, excluding saves made by import or by a bulk tool. The unit is the saved article, and I'd report it by user as well, since a few heavy savers can dominate.

Inputs: the share of weekly active readers who save at least one article, saves per saver, and the share of saved articles that get a reminder or reappear in a list. Guardrails: total reading time must not fall, which would suggest saving replaces reading now with reading never; and article load time must stay flat. My counter metric is the share of saved articles never opened after 30 days. If it climbs, the feature is a graveyard.

Target: a read rate of 35% within eight weeks (assumed). To learn whether the feature causes more reading, I'd compare readers who see the save button with a holdout who do not, looking at articles read per week. I'd change my mind if saves rise and reads do not: the metric would show the feature is a habit of hoarding, and the fix would be reminders or surfacing saves at a better time.

**Follow-ups.**

- **Q.** The saved-article read rate is 18%. Is that bad? **A.** "I cannot say without a comparison, so I would build two. First, the same rate over time by weekly cohort: is it rising or falling? Second, the read-to-50% rate for articles people open directly, which might be about 55%. If saved articles are read at 18% against 55% for direct opens, four in five saves are never read, which suggests saving has become a way of feeling organized. I would also split by user: a few heavy savers can pull the average down. The fix to test is a reminder or a short reading list, with the size of the unread backlog as the counter metric."
- **Q.** How would you learn whether the feature causes more reading, not just more saving? **A.** "With a holdout. Hide the feature from a random 5% of weekly active readers for four weeks and compare articles read to 50% per reader, including both saved and unsaved articles. If readers with the feature read more in total, it adds reading; if they only shift reading from unsaved to saved articles, it adds nothing. I would read the effect by week, since a novelty bump can fade, and watch the share of saved articles that are never opened as a guardrail."

#### IQ-C05-02 · Beginner · metrics · AN

**Prompt.** What is the difference between a leading and a lagging indicator? Give a product example and a way it can go wrong.

**Rubric.**
- **Baseline:** Defines both loosely without a product example.
- **Strong:** Gives clear definitions, an example pair, and why a team needs both.
- **Standout:** Explains the need to validate the leading indicator's link to the outcome, gives a failure mode (a leading indicator that stops predicting, or is gamed), and says how to check.

**Model answer.** A lagging indicator reports a result after it has happened: quarterly churn, annual revenue, 90-day retention. It is reliable and slow, so by the time it moves it is hard to change. A leading indicator moves earlier and predicts the result: how many days a new user was active in the first week.

A product pair: 90-day retention is the lagging indicator for a learning app, and the share of new users who complete three lessons in their first week is the leading indicator. The team can see the leading indicator in seven days and act on it, while the lagging one takes three months. A team needs both: the lagging indicator says whether we succeeded and the leading one says whether we are on track in time to change course.

How it goes wrong. First, the link may not be real. If users who complete three lessons are simply the ones who would have stayed anyway, pushing more users to do it may not raise retention. I'd check by correlation over past cohorts and then by an experiment that increases first-week lessons and watches 90-day retention. Second, the leading indicator becomes a target and is gamed: making the first three lessons very short raises the share completing them and teaches nothing. A counter metric such as a short quiz on what was taught would show it. Third, the relationship drifts as the product or audience changes, so I'd recheck it each quarter.

**Follow-ups.**

- **Q.** How do you check that a leading indicator really predicts the lagging one? **A.** "First look at history: among past cohorts, compare 90-day retention for users who completed three lessons in week one with those who did not, say 62% against 21%. That shows association. Then test whether it is a lever: run an experiment that raises week-one completion with a nudge, and see whether 90-day retention moves for the nudged group. If completion rises and retention does not, the indicator is a marker of motivated users, not something the team can pull. I would repeat the check each quarter because the link can weaken."
- **Q.** How can the team make the leading indicator stop working once it is a target? **A.** "By optimizing the number instead of the behavior. If the target is three lessons in week one, the team can make the first lessons shorter or easier, completion rises, and retention stays flat because the early lessons no longer signal commitment. The defense is a guardrail on the quality of the behavior, such as quiz scores or lesson difficulty, and a standing review of the relationship between the indicator and the outcome. If the correlation falls, retire the indicator."

#### IQ-C05-03 · Intermediate · metrics · AN · Apple

**Prompt.** Define success metrics for a smartwatch sleep-tracking feature, including a privacy guardrail.

**Rubric.**
- **Baseline:** "Number of people who use it and their sleep scores," with no guardrails.
- **Strong:** Sets a goal, a primary usage metric, inputs, product guardrails (battery, accuracy) and a privacy guardrail.
- **Standout:** Treats consent and on-device processing as part of the metric design, accounts for the bias from users who opt out of measurement, adds a counter metric for harm (anxiety about sleep scores), and avoids health claims it cannot support.

**Model answer.** *Setting only: no company data is used or implied.* The goal is that people understand their sleep and can choose to act on it, which requires that they wear the watch to bed regularly and look at the results. The feature is not a medical product in this answer, so I'd measure usage and perceived usefulness, not health outcomes I cannot validate.

Primary metric: sustained overnight use, defined as the share of eligible watch owners who wear the watch to sleep on at least four nights a week for four consecutive weeks. Numerator: owners meeting that rule in a four-week window. Denominator: owners with the feature available and the sleep setting turned on at the start of the window. Inputs: setup completion, nights worn per week, and morning review (the share of worn nights followed by opening the summary).

Product guardrails: battery life through a full day after a night of tracking must not fall below the current standard, since people who cannot charge in the morning will drop the feature, and the rate of nights with no data due to wear or charging problems should not rise. Counter metrics: the share of users who turn tracking off within 30 days (to see if it annoys), and the rate of reports or survey responses from people who say that sleep scores make them anxious about sleep, because a score can create the problem it measures.

Privacy guardrail: sleep data is sensitive personal data. Where possible I'd compute usage metrics on the device or in aggregate, report only counts and rates, and collect nothing at the individual level without consent. The guardrail metrics are the opt-in rate for sharing analytics and a count of data-access incidents, which must be zero. The cost is measurement bias: the data only covers people who opted in, who may be more engaged than those who did not. I'd say that in the result, and I'd supplement with an in-product survey that does not depend on tracking, to see whether opt-in users differ.

I'd change my plan if the nights-worn distribution shows a bimodal pattern: some people wear it nightly and many never, which would point to setup or comfort and not to the feature itself.

**Follow-ups.**

- **Q.** How do you handle the bias from owners who opt out of sleep measurement? **A.** "I treat the opt-in rate as a metric of its own and I do not extrapolate. People who turn sleep tracking on differ from those who do not, perhaps in age, health interest or comfort with data, so any result describes the opted-in group. I would report the share of eligible owners who opt in, compare the two groups on observable traits such as device age and general activity, and use a randomized prompt or a holdout of who is offered the feature when I need a causal estimate. In the write-up I would say plainly that the findings apply to opted-in owners."
- **Q.** What counter metric would you add for harm, such as anxiety about sleep scores? **A.** "Two. A behavioral one: the share of users who turn the feature off within a week of seeing a low score, which suggests the score upset them. And a survey item on a small sample, asking whether checking the score makes them feel better or worse about their sleep. I would set a threshold in advance, for example that disable-after-low-score must not exceed 5%, and review support contacts. I would also keep the wording of scores neutral and avoid health claims the product cannot support."

#### IQ-C05-04 · Intermediate · metrics · AN · Netflix

**Prompt.** How would you measure the success of a personalized recommendations row on a streaming service?

**Rubric.**
- **Baseline:** "Click-through rate and hours watched."
- **Strong:** Defines satisfying viewing as the goal, uses a funnel from impression to sustained viewing, and adds guardrails.
- **Standout:** Warns that click and hours are gameable, adds a regret counter metric, considers diversity and long-term retention, and proposes a long-run holdout.

**Model answer.** *Setting only: no company data or internal metrics are claimed.* The goal of the row is to help a member find something they want to watch quickly and enjoy it, so that they keep subscribing. A click is not the goal: a misleading thumbnail raises clicks and lowers satisfaction.

The funnel: impression of the row, play started from the row, and sustained viewing (watching at least 10 minutes, or finishing the title). Primary metric: satisfied plays per active member per week, defined as plays started from the row that reach 10 minutes, divided by active members in the week, excluding autoplay previews. The 10-minute threshold filters accidental starts, and it can be tuned by title length.

Inputs: the row's play rate (plays per impression), the sustained-view rate (plays reaching 10 minutes), and time from opening the service to a satisfied play. Guardrails: total viewing per member should not fall (which would mean the row replaces better choices), and the diversity of titles played (share of plays outside the most popular ten percent of titles) should not collapse, so the row does not narrow taste. Counter metric: regret, defined as plays abandoned within two minutes, which a clickbait-style row would raise.

The long-run measure is retention. Satisfied plays may lead retention by weeks or months, so I'd run a long-term holdout of members who see a simpler row, and compare their cancellation rate. Short tests would see plays, and only a holdout would see whether the row helps keep members. I'd change my view if satisfied plays rose and retention did not, which would mean the row shifts viewing within the service but does not add value.

**Follow-ups.**

- **Q.** How would you detect that satisfied plays are being inflated by misleading thumbnails or autoplay? **A.** "I would look at what happens after the click. A misleading thumbnail produces plays that end quickly, so I would compare the share of plays abandoned before 10 minutes across thumbnail variants and across rows, and I would exclude autoplay previews from the metric as the definition says. A regret metric helps: the share of plays from the row that are abandoned within two minutes and followed by another search. If a variant raises plays but also raises early abandonment, it is gaming the click, and I would judge it on sustained viewing and long-run retention."
- **Q.** Why a long-run holdout, and for how long? **A.** "Short-term plays can rise while long-term satisfaction falls, for example if the row narrows what people see. A small holdout of about 1% of members who see the old row, kept for around three months, lets me compare retention, variety of titles watched and cancellations, which short tests cannot show. The cost is that 1% of members get a possibly worse experience, which I would accept for a bounded time and stop early if the holdout showed clear harm."

#### IQ-C05-05 · Intermediate · metrics · AN

**Prompt.** What metrics would you use to evaluate an AI writing assistant that suggests text as people type?

**Rubric.**
- **Baseline:** "Number of users and number of suggestions."
- **Strong:** Uses acceptance and edit behavior as the primary signal, adds quality, latency and cost guardrails.
- **Standout:** Notes that acceptance can mean trust or inattention, adds an audit of accepted suggestions, links cost to acceptance, and separates offline quality evaluation from online metrics.

**Model answer.** The goal is that people finish writing faster or better with suggestions they trust. The primary signal is suggestions accepted and kept: of suggestions shown, the share accepted and not substantially edited or deleted within a minute (the numerator is accepted suggestions that survive; the denominator is suggestions shown; the unit is the suggestion, reported also per user).

Inputs: how often suggestions are shown relative to typing, acceptance rate, edit distance after acceptance, and the share of documents completed with the assistant on. Guardrails: latency of suggestions (the 95th percentile must be short enough to arrive before the user types past it), harmful or inappropriate suggestion rate, and cost per suggestion. A counter metric for over-acceptance: acceptance can rise when users stop reading carefully, so I'd audit a sample of accepted suggestions for errors and track the rate of later corrections.

Cost links to the metric: if each suggestion costs about $0.004 and the acceptance rate is 25%, the cost per accepted suggestion is $0.004 ÷ 0.25 = $0.016. Raising the acceptance rate to 40% lowers it to $0.01, so quality improvements also lower the cost per accepted suggestion.

Online metrics sit on top of an offline evaluation: before launch I'd score suggestions against a held-out set with human review, so I know quality before users see it (evals are covered in C24 and C25). I'd change my plan if acceptance is high but the audit finds frequent errors: the assistant would be trusted more than it deserves.

**Follow-ups.**

- **Q.** How do you tell whether acceptance reflects trust or inattention? **A.** "I would audit rather than assume. Sample accepted suggestions and have reviewers grade them for correctness, and measure the share that users later edit or delete. I would also look at timing: acceptances within a fraction of a second suggest the user did not read the suggestion. A sharper test is to seed a small share of deliberately flawed suggestions in an offline evaluation and measure how often they are accepted. If flawed ones are accepted at a high rate, acceptance is not a sign of trust, and I would not use it as the headline."
- **Q.** How would you link cost to acceptance? **A.** "Through cost per accepted suggestion. If each suggestion shown costs $0.002 to generate and 20% are accepted and kept, the cost per accepted suggestion is $0.01. If acceptance falls to 10%, it doubles to $0.02. That tells me to show suggestions only when the predicted chance of acceptance is high enough, which saves cost and reduces noise for the user. I would set a cost budget per active user and watch it beside acceptance, so that a quality change that raises both cost and acceptance can be judged on the ratio."

#### IQ-C05-06 · Hard · metrics · AN · Meta

**Prompt.** Time spent per user on your social app is up 8% after a ranking change. Is that good?

**Rubric.**
- **Baseline:** "Yes, more time spent is more engagement."
- **Strong:** Asks what changed, decomposes the increase, checks quality and counter metrics, and gives a conditional answer.
- **Standout:** Challenges time spent as a proxy for value, separates active from passive time, checks retention and well-being signals, considers the second-order effects, and says what would make it good.

**Model answer.** *Setting only: no company data is used.* I'd say "it depends on where the time comes from," and then find out.

First, clarify the metric: is it total minutes per daily user, and how is time measured (foreground time, or including time with the app idle)? What exactly changed in ranking, and when?

Second, decompose. Time per user = sessions per user × minutes per session. And split the time by kind: interacting with people (commenting, messaging) versus passive consumption (scrolling, watching). If the 8% is almost all passive video, it is a different story from an 8% rise in conversations.

Third, check quality. Look at next-day and 30-day retention of the exposed group compared with a holdout; at reports and "not interested" actions; at notification opt-outs; and at survey measures of whether people feel their time was well spent. If retention is flat or lower and negative feedback is up, the time is a short-term effect.

Fourth, the second-order effects. Rankings that raise time spent often favor sensational content, and over time users who feel worse leave or reduce use. Advertisers may buy fewer impressions of poor quality.

So: good if the extra time is in meaningful interaction, retention and satisfaction hold, and negative feedback does not rise; a warning if it comes from passive, high-arousal content. As a documented example of a company choosing to move this metric down on purpose, CS-C05-02 describes Facebook's 2018 decision. I'd propose making "time spent in interactions that users later say they valued" the primary measure for this change, with time spent as an input, and I'd run the test with a long-term holdout. I'd change my view if the holdout shows higher 90-day retention for the exposed group.

**Follow-ups.**

- **Q.** The 8% is mostly passive video. What do you do? **A.** "I would treat it as engagement without proven value and check what it costs. I would compare next-day and 30-day retention and a short well-being survey for the exposed group against a holdout, and look at active interactions such as messages and comments. If retention is flat or lower and active interactions are down, the extra time is passive consumption, and I would ask the ranking team to rebalance toward interactions. My decision rule would be to ship only if 30-day retention is at least equal to the holdout and active interactions are not lower, whatever happens to total time."
- **Q.** How would you test the long-term effect of the ranking change? **A.** "With a holdout kept long enough to see slow effects: about 2% of users on the old ranking for at least eight weeks. I would read the effect by week, since a novelty bump in the first week can mislead, and compare retention, sessions per user, active interactions and survey satisfaction. I would also check for effects on creators, such as reach for smaller accounts, because a change can raise time for viewers and hurt the supply side that keeps the content coming."

#### IQ-C05-07 · Hard · metrics · AN

**Prompt.** Choose a north star metric for a two-sided marketplace that connects freelancers with clients, and defend it.

**Rubric.**
- **Baseline:** "Gross revenue" or "number of users."
- **Strong:** Names candidates, tests them against criteria, chooses one with a definition, and adds inputs and guardrails for both sides.
- **Standout:** Addresses quality and liquidity, shows why the obvious candidates fail, defines the metric precisely, handles the two sides separately, and says what would change the choice as the marketplace matures.

**Model answer.** The value of this marketplace is a good match: a client gets work done well and a freelancer gets paid for it. Candidates:

1. Gross merchandise value (total paid): fails the value test because it rises with higher prices or longer projects, and fails the gaming test.
2. Number of registered users: a vanity metric that rises by construction.
3. Contracts started per week: better, but a contract that ends badly counts as a success.
4. Successful contracts per week: contracts that were completed and rated satisfactory by both sides, counted in the week they completed.

I choose the fourth. Definition: a contract is successful if the work was delivered, the client released payment without a dispute, and the client rated it at least four of five (an assumed threshold). The numerator is successful contracts completed in the week, and the unit is the contract. It passes the tests: it reflects value for both sides, the team can move it through matching and trust features, it moves in weeks, and it is hard to inflate without genuine completion.

Inputs, by side: demand (clients posting jobs, jobs receiving qualified proposals, time to first proposal), supply (freelancers active, proposals per job), and match quality (share of jobs filled, hire rate). Guardrails: dispute rate, freelancer earnings per hour, client repeat rate, and the share of payments made through the platform (to detect leakage). Counter metric: the rate of jobs filled by a freelancer with very few ratings, which a push for fill rate might raise at the expense of quality.

I'd revisit as the marketplace matures: when most jobs are filled, the constraint shifts from liquidity to quality, and a measure of repeat contracts between the same pair would carry more weight. I'd also watch for a gap between sides: a metric that rises because clients are well served while freelancers earn less would be a warning.

**Follow-ups.**

- **Q.** Would one north star work for both sides, and what do you do about each side? **A.** "One joint metric is right because the value is the match, but each side needs its own health metrics so that I can diagnose a problem. For clients I would track the share who hire again within 60 days and the time to a first accepted proposal; for freelancers, earnings per active freelancer and the share of active freelancers who win at least one contract a month. I would watch the balance by category: if one side is short, the north star will stall, and the side metrics will show which side to fix."
- **Q.** What would make you change the north star as the marketplace matures? **A.** "When most successful contracts come from repeat clients, a first-success metric stops telling me much, and I would shift toward client retention and the net revenue retained from existing clients. Early on, I would use the first successful contract, because the cold start is the constraint. I would also check that the metric cannot be gamed, for example by splitting one project into several small contracts to raise the count, and add a guardrail on contract size and a quality review if it appears."

#### IQ-C05-08 · Hard · metrics · AN

**Prompt.** A support team's quarterly goal is "tickets closed." You suspect the number is being gamed. What do you do?

**Rubric.**
- **Baseline:** "Tell the team to stop gaming and be honest."
- **Strong:** Looks for evidence of gaming, proposes counter metrics, and redefines the goal.
- **Standout:** Treats gaming as a system response not a character flaw, proposes a metric set that makes the cheap path visible, handles the change with the team, and states what outcome the team should actually be measured on.

**Model answer.** I'd start from the assumption that people are responding sensibly to what they are measured on, so the question is what the metric rewards.

First, test the suspicion with data, not accusation. Look for signs: closure times that cluster just before a deadline; tickets closed and reopened; a rise in the share of tickets closed as "resolved" with no reply; a growing number of repeat contacts about the same issue; closure counts rising while customer satisfaction is flat or falling. If I see repeat contact up and satisfaction down, gaming is likely.

Second, find what "tickets closed" rewards. It rewards closing easy tickets first and closing hard ones quickly, whether or not they were resolved. A [[second-order-effect]] is that hard tickets age and customers contact again.

Third, redesign the metric set. The goal should be customers whose problem is solved. A primary metric could be the resolution rate: tickets resolved without a repeat contact within seven days, divided by tickets closed. Counters: customer satisfaction on resolved tickets, and the age of the oldest open tickets (to stop easy-first cherry-picking). Keep closed tickets as an input (volume), not the target.

Fourth, handle it with the team. I'd show them the data about repeat contacts, explain that the old target made the bad behavior rational, and agree the new set with their input. I'd also audit a sample of closures by hand for the first two months, and I'd avoid punishing the old behavior, since the old target created it.

I'd change my approach if the review shows no gaming: then the question is whether closed tickets is the right measure anyway, and the answer is probably still to add a quality counter.

**Follow-ups.**

- **Q.** How do you confirm gaming without accusing the team? **A.** "By looking at aggregate patterns and sharing them as a question about the system. I would check closure spikes before deadlines, the reopen rate (for example up from 4% to 12%), repeat contacts about the same issue and customer satisfaction. I would show the team the chart and ask what the metric makes easy and what it makes hard, because people usually describe the incentive accurately. The finding is about what the metric rewards, not about anyone's character, and that framing keeps the team willing to help fix it."
- **Q.** What metric set would replace tickets closed? **A.** "Outcomes with counter-metrics. First-contact resolution, meaning tickets resolved without being reopened or followed by another contact within seven days; customer satisfaction on resolved tickets; and time to resolution, reported by ticket complexity so that hard tickets are not penalized. A small quality audit of closed tickets is the guardrail. I would set team goals on resolution and satisfaction and use the count of tickets closed only as a workload diagnostic, so that no one is rewarded for closing without solving."

## 12. Exercises

Ten exercises. Each has a model solution and an alternative. Figures are assumptions unless marked.

#### EX-C05-01 · Write metric definition cards

**Problem.** Write a definition card (FW-C05-01) for each vague metric: (a) "engagement" for a music app, (b) "retention" for a meal-delivery app, (c) "conversion" for an online store.

**Context.** Three teams use these words in dashboards with different meanings.

**Data.** None beyond the names.

**Constraints.** Each card needs event, numerator, denominator, population, window, aggregation, unit and one caveat.

**Expected approach.** Choose a defensible definition and write it so that two analysts compute the same number.

**Solution.** (a) Weekly listening days: the share of weekly active listeners who listened for at least 10 minutes on at least four days in a calendar week; event: playback of 10 minutes or more; population: registered listeners with at least one play that week, excluding test accounts; unit: user; caveat: background play on a paused device can inflate days. (b) Four-week order retention: among customers who placed their first order in week 0, the share who placed another order in weeks 1 to 4 (bounded); unit: customer; caveat: cancelled orders excluded. (c) Purchase conversion: orders placed by unique visitors in a seven-day window divided by unique visitors in the window; population: sessions after bot filtering; caveat: visitors who return after seven days are counted twice.

**Alternative solution.** Provide a second definition for each and say when the second would be better (for example, day-N retention for a daily-habit product).

**Tradeoffs.** A narrower definition is easier to audit and may exclude users you care about.

#### EX-C05-02 · Three retention numbers from one table

**Problem.** Ten users have these active days after signup: A: 1, 2, 7; B: 1, 3; C: 2, 7, 8; D: 1; E: 7; F: 1, 2, 3, 4, 5, 6, 7; G: 3, 6, 9; H: 5; I: 7, 10; J: none. Compute day-7 (exact), bounded (any activity in days 1 to 7) and unbounded (active on day 7 or later) retention.

**Context.** A team says "7-day retention is 60%" and another says it is 50%.

**Data.** As listed.

**Constraints.** Show the counts.

**Expected approach.** Apply each definition to each user.

**Solution.** Day-7 exact: active on day 7: A, C, E, F, I, so 5 of 10 = 50%. Bounded: active on some day from 1 to 7: A, B, C, D, E, F, G, H, I, so 9 of 10 = 90%. Unbounded: active on day 7 or later: A, C, E, F, G (day 9), I, so 6 of 10 = 60%. Both teams are right; they used different definitions (exact and unbounded).

**Alternative solution.** Add a rolling definition (active in any of days 7 to 13) and note the answer depends on the data window.

**Tradeoffs.** Bounded retention looks best and says least; match the definition to the product's natural frequency.

#### EX-C05-03 · Funnel arithmetic

**Problem.** Of 10,000 visitors, 6,500 start sign-up, 4,800 verify their email, 3,000 take a first action and 1,200 pay. Compute step conversions, absolute losses, the overall rate, and the step to examine first.

**Context.** A subscription product wants to improve paid conversion.

**Data.** As given.

**Constraints.** Check that the product of the step rates equals the overall rate.

**Expected approach.** Compute and compare both absolute and relative losses.

**Solution.** Step conversions: 6,500 ÷ 10,000 = 65%; 4,800 ÷ 6,500 = 73.8%; 3,000 ÷ 4,800 = 62.5%; 1,200 ÷ 3,000 = 40%. Losses: 3,500; 1,700; 1,800; 1,800. Overall: 1,200 ÷ 10,000 = 12%, and 0.65 × 0.738 × 0.625 × 0.40 = 0.12, so it checks. The largest absolute loss is visit to sign-up start (3,500), and the lowest step rate is first action to paid (40%). The first look depends on cost: the last step is closest to revenue, and recovering a third of the 1,800 lost at the last step (600 users) would raise conversion from 12% to 18%.

**Alternative solution.** Segment each step by source to see if one source drives the loss.

**Tradeoffs.** The biggest absolute loss is not always the cheapest to fix.

#### EX-C05-04 · A metric tree for a subscription app

**Problem.** A subscription app has 200,000 subscribers, 12,000 new subscribers a month and a monthly churn of 4%. Average revenue per subscriber is $9 a month. Build the tree, compute next month's subscribers and revenue, and compare two levers: cutting churn to 3% or raising new subscribers by 2,000.

**Context.** Planning for the next quarter.

**Data.** As given.

**Constraints.** One month ahead, no seasonality.

**Expected approach.** Subscribers next month = subscribers + new − churned. Revenue = subscribers × average revenue.

**Solution.** Churned: 200,000 × 4% = 8,000. Next month: 200,000 + 12,000 − 8,000 = 204,000. Revenue at the start: 200,000 × $9 = $1,800,000; at the end: 204,000 × $9 = $1,836,000. Lever 1: churn at 3% loses 6,000, giving 206,000. Lever 2: 14,000 new at 4% churn gives 200,000 + 14,000 − 8,000 = 206,000. Both add 2,000 subscribers in the first month. But the churn lever compounds: each month the base is larger, and each subscriber stays longer, while the new-subscriber lever does not change how long they stay. Cutting churn by one point is worth about as much as a 17% increase in new subscribers (2,000 ÷ 12,000).

**Alternative solution.** Add price as a third lever and compare revenue.

**Tradeoffs.** Reducing churn takes longer to show up and costs engineering time; acquisition can be bought with spend.

#### EX-C05-05 · Choose a north star with the five tests

**Problem.** Test three candidates for a language-learning app and choose one: (a) minutes in app per user, (b) lessons completed per active user per week, (c) weekly active learners who complete at least one lesson.

**Context.** The company monetizes through subscriptions.

**Data.** None beyond the descriptions.

**Constraints.** Apply value, control, speed, gaming and clarity.

**Expected approach.** Use FW-C05-03.

**Solution.** (a) Value weak (minutes can rise with confusion or idle app), gaming easy (leave it open). Reject. (b) Value medium; it rises when active users do more, but a few heavy users can lift it, and easier lessons raise it. Adapt. (c) Value strong: it counts people who did something that is learning; it reflects reach and completion; control yes; speed weekly; gaming moderate (very short lessons) but a lesson-length floor and a counter metric (assessment pass rate on completed lessons) reduce it; clarity high with a definition of a completed lesson. Adopt (c), with inputs of new learners, retained learners and reactivated learners, and a counter metric on assessment results.

**Alternative solution.** Combine (b) and (c) into a pair: reach and depth, as two primary measures for different teams.

**Tradeoffs.** (c) ignores depth of use; the pair gives depth at the cost of two numbers to explain.

#### EX-C05-06 · Guardrails and counter metrics

**Problem.** For each change, name a primary metric, two guardrails with thresholds, and a counter metric: (a) a faster checkout flow; (b) sending more reminder notifications.

**Context.** Both changes are going to experiments.

**Data.** *Invented baselines:* checkout conversion 3.0%, refund rate 2.0%, support contacts per 1,000 orders 40; notification opt-out 1.0% per week, 30-day retention 30%.

**Constraints.** Thresholds must be specific.

**Expected approach.** Ask what the change could damage and what a cheap way to hit the target would look like.

**Solution.** (a) Primary: checkout conversion. Guardrails: refund rate must not exceed 2.2%; support contacts per 1,000 orders must not exceed 44; payment error rate must not rise. Counter metric: the share of orders edited or cancelled within an hour of purchase, which a flow that hides review steps would raise. (b) Primary: orders from reminder recipients. Guardrails: weekly notification opt-out must not exceed 1.3%; 30-day retention must not fall below 29.5%. Counter metric: app uninstalls in the week after a reminder, and the share of reminders that lead to an order within a day (low means they are noise).

**Alternative solution.** Write the thresholds as the smallest change you would care about, tied to a power calculation (C12).

**Tradeoffs.** Tight thresholds block good launches on noise; loose ones miss damage.

#### EX-C05-07 · How would each metric be gamed?

**Problem.** Name a way to game each metric and a counter metric: (a) tickets closed, (b) new signups, (c) app opens, (d) a satisfaction survey score, (e) lines of code written.

**Context.** A review of team goals.

**Data.** None.

**Constraints.** One sentence for each part.

**Expected approach.** Apply inversion: how would I hit this without delivering value?

**Solution.** (a) Close easy tickets, or close without solving. Counter: repeat-contact rate. (b) Remove verification or pay for low-intent signups. Counter: activation or 30-day retention of new signups. (c) Notifications that open the app, or automatic refresh. Counter: sessions with a meaningful action and notification opt-out. (d) Survey only happy customers or ask leading questions. Counter: response rate and a sample survey of all customers. (e) Write verbose or duplicated code. Counter: defects per change and review feedback; better, drop the metric.

**Alternative solution.** Propose a replacement measure for each, and say whether the metric should be dropped.

**Tradeoffs.** Every counter metric costs attention; add one that targets the most likely gaming.

#### EX-C05-08 · A mix shift hidden in an average

**Problem.** Paid-acquired users retain at 20% at week 4 and organic users at 40%, in every cohort. Before a campaign, 30% of a cohort is paid-acquired; after, 60%. Compute the overall week-4 retention before and after, and explain what happened.

**Context.** A dashboard shows overall retention falling and the team suspects the product got worse.

**Data.** As given.

**Constraints.** Show the weighted calculation.

**Expected approach.** Weight retention by the mix.

**Solution.** Before: 0.3 × 20% + 0.7 × 40% = 6% + 28% = 34%. After: 0.6 × 20% + 0.4 × 40% = 12% + 16% = 28%. Overall retention fell six points even though retention within each source did not change at all; the mix moved toward the lower-retaining source (a [[mix-shift]], C13). The team should look at retention by source, not at the average, and decide whether the paid users are worth their cost.

**Alternative solution.** Compute retention adjusted to a fixed mix (the before mix) to compare periods fairly.

**Tradeoffs.** Splitting by source helps and multiplies the number of figures; split by the dimension most likely to shift.

#### EX-C05-09 · Write a tracking plan

**Problem.** Write the tracking plan for a "share a list" feature in a shopping app: events, when they fire, key properties, and the metrics each supports.

**Context.** The feature lets a user send a shopping list to a friend, who can open it and add items.

**Data.** None.

**Constraints.** At least five events; include one server-side event and one data quality check.

**Expected approach.** Walk the funnel and decide what each metric needs.

**Solution.** Events: list_share_started (client; user opens the share sheet; source screen, list size); list_shared (server; the invitation is created; channel, number of recipients); list_opened (server; a recipient opens it; recipient is existing user or new); list_item_added_by_recipient (server; item added; time since open); list_purchase_completed (server; an order includes items from a shared list). Metrics: share rate (shared ÷ started), open rate (opened ÷ shared), collaboration rate (opened lists with an item added), and new users from shares. Data quality check: opens should never exceed shares plus link forwards; track the ratio daily, and check that events arrive within a minute on both platforms.

**Alternative solution.** Add a consent-aware version: for users who decline analytics, count only server-side aggregates.

**Tradeoffs.** Fewer events are easier to maintain; each event should support a metric someone will use.

#### EX-C05-10 · Eight-minute drill: success metrics

**Problem.** In eight minutes, define success for a "reading list" feature in a blogging app.

**Context.** A timed spoken drill using the answer template.

**Data.** None given.

**Constraints.** Goal, behavior, primary metric with a definition, inputs, guardrail, counter metric, target and measurement.

**Expected approach.** Template FW-C05-06.

**Solution.** Goal: readers return to posts they intended to read. Behavior: they read what they saved. Primary metric: the saved-post read rate: saved posts read to 50% within seven days divided by posts saved that week (unit: post; excludes bulk imports). Inputs: share of weekly readers who save, saves per saver, reminder click rate. Guardrails: total reading per reader must not fall; load time flat.

Counter metric: saved posts never opened in 30 days. Target: 35% read rate in eight weeks. Measurement: events for save, open, and read depth, and a holdout without the save button. Risk: saving is cheap and may substitute for reading now; the read rate and the unread-clutter counter would show it. Decision it drives: invest in reminders if the read rate is low and adoption high.

**Alternative solution.** Answer with the HEART categories first, then choose one metric per category that matters.

**Tradeoffs.** In eight minutes you can define one primary metric well; add inputs briefly and say what you would add with more time.

## 13. Practice protocol

**Timed drills (three a week for three weeks).**

- *Week 1: define one metric.* Pick a prompt (the exercises and IQ-C05-01 to IQ-C05-08). In five minutes, write the metric definition card (FW-C05-01) for the primary metric and test it against the five tests.
- *Week 2: the full answer.* Use the ten-minute budget in section 4 and the template (FW-C05-06). Speak aloud or record.
- *Week 3: add data.* Ask a partner to give a number partway ("DAU is up 5%") and to challenge one definition. Update aloud.

**Weekly habit.** Pick one product you use. Write its north star, three inputs, one guardrail and one counter metric on a single page. Compare your choices with what the product seems to optimize, using only what you can observe.

**Feedback checklist (yes, partly, no).**

1. Did I start with the goal and the user behavior?
2. Did I choose one primary metric?
3. Is the definition complete: event, numerator, denominator, population, window?
4. Did I add two or three inputs?
5. Did I name guardrails with thresholds?
6. Did I name a counter metric for the target?
7. Did I say how the metric could be gamed or could mislead?
8. Did I state a target and time frame, and distinguish leading from lagging?
9. Did I say how I would measure it, and the privacy or measurement bias?
10. Did I name the decision the metric drives?

**With a partner.** Ask your partner to say "how could I hit that number without helping anyone?" and "what does that metric leave out?" once each. Practice answering with a counter metric, not a defense.

**Answer journal.** For each drill record the date, the prompt, the primary metric and its definition, your score out of ten, the item to fix, and the gaming path you missed. After six drills, look for the item you most often skip (usually the counter metric or the definition) and drill that one.

## 14. Implementation playbook

Apply the chapter on real work over the next two weeks. Each deliverable doubles as an interview story.

**Days 1 to 3.** Pick the three metrics your team reviews most often. Write a definition card (FW-C05-01) for each. Check the definition against what the dashboard computes; note every difference, and ask the owner which is intended.

**Week 1.** Run the five tests (FW-C05-03) on your team's north star or primary metric. Write down how it could be gamed and what counter metric you would pair with it. Share the page with your manager and ask whether it matches how the team thinks.

**Week 1.** Do a metrics audit (C05.7) for one dashboard: for each metric, what decision it informs, who owns it, and when it last changed an action. Propose dropping or replacing one metric that fails.

**Week 2.** Write the tracking plan for your next feature before it is built, and review it with engineering and analytics. After launch, check the first day of data against the plan.

**Week 2.** Build one cohort retention table for a recent period and read it with FW-C05-05. Note the plateau, the cohort comparison, and one caveat.

**Deliverables that become stories:** the definition cards (a time you made a number precise), the audit (retiring a vanity metric), and the tracking plan (preventing a data gap). Keep the numbers real.

## 15. Key takeaways and further reading

### Key takeaways

1. Start from the goal and the user behavior that shows it, choose one primary metric, and define it completely: event, numerator, denominator, population, window.
2. Surround the primary metric with inputs that explain it, guardrails with thresholds that protect other things, and a counter metric for the target.
3. Ask how any metric could be raised without delivering value, because a measure that becomes a target gets gamed.
4. Read retention by cohort, find the plateau, check for mix shift, and treat a correlation with retention as a hypothesis to test.
5. Every metric should change a decision; if it never has, retire it.

### Further reading

- Kerry Rodden, Hilary Hutchinson and Xin Fu, "Measuring the User Experience on a Large Scale: User-Centered Metrics for Web Applications" (CHI 2010). The HEART framework and the Goals–Signals–Metrics process `[V: Rodden, Hutchinson and Fu, CHI 2010, doi 10.1145/1753326.1753687]`.
- Alistair Croll and Benjamin Yoskovitz, *Lean Analytics* (2013). Choosing a metric for each stage of a startup.
- Eric Ries, *The Lean Startup* (2011). Actionable metrics versus vanity metrics.
- Ron Kohavi, Diane Tang and Ya Xu, *Trustworthy Online Controlled Experiments* (2020). Metrics for experiments, including guardrails; developed further in C14.
- Marilyn Strathern, "Improving Ratings: Audit in the British University System" (1997). Source of the common phrasing of Goodhart's law `[V: Strathern 1997]`.
- Colin Bryar and Bill Carr, *Working Backwards* (2021). Accounts from former Amazon executives, including input metrics `[V: St. Martin's Press, 9 February 2021, ISBN 9781250267597; includes a chapter on managing inputs, not outputs]`.
