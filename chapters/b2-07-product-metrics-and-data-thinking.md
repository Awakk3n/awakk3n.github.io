# PART 7: PRODUCT METRICS & DATA THINKING

A PM who can't reason about numbers is half a PM. A PM who *only* reasons about numbers is also half a PM. The skill is fluent metric thinking — using data to sharpen judgment, not replace it. This chapter goes deep: the metric frameworks, the analytical methods, the statistical foundations, and the SQL/Python you actually need to operate independently.

## 7.1 The PM's Relationship with Data

Most PM-data dysfunction comes from one of three patterns:

1. **Dashboard worship.** PMs treat dashboards as truth and stop asking questions. Dashboards lie or mislead more often than people realize.
2. **Data anxiety.** PMs avoid the numbers because they don't feel confident, then make decisions on vibes.
3. **Analyst dependency.** PMs can't do basic analysis themselves, so every question takes 2 weeks waiting for a data scientist.

The right relationship: **PMs do their own basic analysis, ask sharper questions of data scientists, and treat metrics as inputs to judgment — not substitutes for it.**

> *"All models are wrong, but some are useful." — George Box*

The same applies to metrics. Every metric is a flawed proxy. Your job is to know each metric's flaws, use it anyway, and not be fooled.

## 7.2 The Metrics Hierarchy

Metrics come in layers. Understanding the layers prevents the most common error: focusing on the wrong level.

### Level 1: Vanity Metrics

Numbers that go up and to the right but don't tell you whether you're building real value. Examples:
- Total signups (without activation/retention context)
- Total downloads
- Page views
- Total users (lifetime)

These can be useful for marketing, but they should never drive product decisions alone. They're trivially gameable: spend more on ads, signups go up.

### Level 2: Activity Metrics

Measure usage. Examples:
- Daily Active Users (DAU)
- Monthly Active Users (MAU)
- Sessions per user
- Time in app
- Feature adoption rates

Better than vanity metrics, but still don't tell you if users are getting value. A user can be "active" without being satisfied. Many media companies optimized for time-on-site and accidentally built outrage machines.

### Level 3: Outcome Metrics

Measure whether users actually achieve their goals or whether the business achieves its goals. Examples:
- Task-completion rate
- Conversion rate at key funnel steps
- Retention rate at week 1, 4, 12
- Revenue per user
- Net Promoter Score (NPS)

These are what you optimize. They reflect actual value.

### Level 4: Mission Metrics

Reflect long-term impact aligned with the company's mission. Examples:
- For Khan Academy: students who reach proficiency in subjects.
- For a health app: clinical outcomes (weight loss, HbA1c improvement).
- For a productivity tool: hours saved per user.

These are the hardest to measure but the most important strategically. Skipping them is how companies become hollow.

## 7.3 North Star Metric — Operationalized

We covered the concept in Part 4. Now let's get practical about *using* one.

### The North Star Framework

Amplitude's framework, widely adopted, structures the NSM into a tree:

```
NORTH STAR METRIC
        |
        ├── Input metric 1 (e.g., breadth: # active users)
        |       └── Driver metrics (signups, retention rates, etc.)
        ├── Input metric 2 (e.g., depth: action per user)
        |       └── Driver metrics (engagement features, etc.)
        ├── Input metric 3 (e.g., frequency: sessions per user)
        |       └── Driver metrics (notifications, return triggers)
        └── Input metric 4 (e.g., quality: cancellation/error rate)
                └── Driver metrics (error rate, complaint rate)
```

Each level cascades. A team owning input metrics drives the NSM through their specific levers.

### Worked Example: Spotify NSM Tree

**NSM:** Time spent listening (per user, per week).

**Inputs:**
- *Active users (breadth)*
  - New signups
  - Reactivations
  - Churn rate
- *Sessions per user (frequency)*
  - Push notification engagement
  - Daily routine triggers (morning playlist, etc.)
  - Recommendation quality
- *Time per session (depth)*
  - Playlist length / variety
  - Auto-play and queue
  - Discovery feature usage
- *Quality (guardrail)*
  - Skip rate
  - Audio buffer issues
  - Subscription downgrade rate

A PM owning "Discovery" might focus on time-per-session (depth) by improving recommendations. A PM on "Acquisition" focuses on new signups. The NSM connects everyone.

### Practice: Build an NSM Tree

For each company below, build a 3-level NSM tree:

1. Cred (Indian credit-card rewards / payments app)
2. Notion
3. A hypothetical AI legal-research tool for Indian lawyers
4. Zomato

Compare your trees with publicly available info on each company's metrics (when available). Note where you'd disagree with their stated NSM.

## 7.4 The AARRR (Pirate) Funnel

Created by Dave McClure (500 Startups). One of the most useful, MECE frameworks for thinking about product growth.

### The Five Stages

**A — Acquisition.** How users first encounter your product.
- Channels: organic search, paid ads, social, referrals, content marketing, sales-led.
- Metrics: visits, signups, click-through rates, customer acquisition cost (CAC), channel mix.

**A — Activation.** Whether new users have their first meaningful experience.
- The "AHA moment" — when the user first feels the value.
- Metric: activation rate (% of new users who complete the activation event within X days).
- Time-to-activation: how fast does it happen?

**R — Retention.** Whether users come back.
- D1, D7, D30 retention rates.
- Cohort retention curves.
- Long-term retention: do they still use it 6 months later?

**R — Revenue.** Whether users monetize.
- Conversion rate (free to paid).
- Average Revenue Per User (ARPU).
- Lifetime Value (LTV).
- Expansion / upgrade revenue.

**R — Referral.** Whether users invite others.
- Viral coefficient (how many new users does each user bring?).
- Referral conversion rate.
- NPS as proxy for likelihood-to-refer.

### Why the Funnel Matters

The funnel is MECE: every user is somewhere in this lifecycle, and the stages don't overlap. The PM's job is to:
1. Measure each stage.
2. Identify the *biggest leak* — usually one stage dominates.
3. Focus there before attacking other stages.

A common mistake: spending heavily on Acquisition while Activation is broken. You bring users in; they never have an AHA moment; they leave; you've wasted money. **Fix the leakiest stage first.**

### Worked Example: Funnel Diagnosis

You're a PM at a B2B SaaS startup. Your funnel:

| Stage | Metric | Current | Industry benchmark |
|---|---|---|---|
| Acquisition | Monthly visitors | 80,000 | — |
| Acquisition | Signup rate | 2.4% | 2–4% (OK) |
| Activation | Reach AHA moment in 14 days | 22% | 35–40% (gap!) |
| Retention | D30 retention | 35% | 30–40% (OK) |
| Revenue | Free → paid (60 days) | 4% | 2–5% (OK) |
| Referral | Avg invites per active user | 0.2 | 0.3–0.5 (gap) |

Where to focus? Activation. Bringing 22% to 35% (a 60% improvement) cascades through retention and revenue, lifting ARR by an order of magnitude more than tweaking acquisition.

### The "Activation" Definition Game

What's the AHA moment? This is the most strategic question for early-stage products.

Famous examples:
- **Facebook:** 7 friends in 10 days. (Facebook's growth team famously identified this in 2006.)
- **Twitter:** Following 30 people.
- **Slack:** A team sending 2,000 messages.
- **Dropbox:** Putting 1 file in a Dropbox folder.
- **Zoom:** First successful meeting completed.
- **Notion:** First page with structured content created.

To find your AHA moment:
1. Identify retained vs churned users.
2. Find behaviors that distinguish them (statistically).
3. Look for the earliest such behavior — that's the AHA target.

This is statistical work. You'll want a data scientist or to do it yourself with the SQL/Python skills below.

## 7.5 Leading vs Lagging Indicators

A critical concept that's often blurred.

**Lagging indicator:** A measure of *what already happened*. Tells you the result. Examples: revenue, churn rate, customer satisfaction.

**Leading indicator:** A measure of *what is happening now* that predicts a future outcome. Examples: support ticket volume, feature adoption, active days in week 1.

The PM's daily work is largely about leading indicators. By the time lagging indicators move, it's too late to course-correct. But leading indicators give you weeks or months of warning.

### Examples

| Lagging | Leading (predicts the lag) |
|---|---|
| Annual revenue | Pipeline coverage, pipeline velocity |
| Customer churn | Engagement decline, support tickets, NPS drop |
| Hiring success | Application volume, interview pass rate |
| Product success | Activation rate of new users |
| Long-term retention | Week-1 engagement intensity |

A great PM has 2–3 leading indicators they watch daily, and a small set of lagging indicators they review weekly or monthly.

### Building a Leading-Indicator Dashboard

Practical steps:
1. List your top 3 lagging metrics (e.g., 6-month retention).
2. For each, hypothesize what early behaviors predict it. (E.g., users who log in 5+ times in week 1 retain at 70%; less than 5 logins, 25%.)
3. Validate the predictive relationship with historical data.
4. Track the leading indicator daily; lagging weekly/monthly.
5. When the leading indicator dips, intervene before the lag manifests.

This is the operational difference between reactive and proactive product work.

## 7.6 Cohort Analysis — The Foundational Method

Cohort analysis groups users by a shared characteristic (typically signup week/month) and tracks them over time. It is the single most important analytical method for PMs to master.

### Why Cohorts Matter

Aggregate metrics lie. If your DAU is rising but new users are churning faster, aggregate hides the truth. Cohort analysis exposes it:

- Cohort: users who signed up in week 1.
  - Week 1: 100% active
  - Week 2: 60%
  - Week 4: 35%
  - Week 8: 28%

- Cohort: users who signed up in week 8 (after some product change).
  - Week 1 (which is calendar week 8): 100% active
  - Week 2 (calendar week 9): 75% (improved!)
  - Week 4 (calendar week 11): 50% (improved!)

Cohort analysis tells you whether a recent change improved retention for *new* users — which aggregate DAU couldn't show, because it mixes new and old cohorts.

### Reading a Retention Curve

A retention curve plots % of cohort still active vs time since signup.

**The shape matters:**
- A curve that flattens (e.g., stays at 30% from week 8 onward) → you have product/market fit; users who got value are sticking.
- A curve that decays toward zero → you're failing to retain anyone long-term.
- A "smile curve" that re-rises → resurrection of dormant users (re-engagement working).

Industry benchmarks (rough; varies enormously by category):
- B2C consumer apps: 5–15% D30 retention is typical; 25%+ is excellent.
- B2B SaaS: 60–80% Q1 retention typical; 90%+ is excellent.
- Marketplaces: 20–35% M1 retention typical for both sides.

### The Power of Cohort Segmentation

Slice cohorts by attribute:
- Acquisition channel (organic vs paid vs referral)
- User type (free vs trial vs paid)
- Geography
- Onboarding path completed
- First feature used

Often, one segment retains brilliantly while another doesn't. The product strategy implication: focus on the retaining segment, fix or stop investing in the leaky one.

### Practice

For a hypothetical product (or one you have access to), define:
1. The cohort grouping (typically signup week).
2. The retention event (which user action counts as "active"?).
3. The retention windows (D1, D7, D14, D30, D60, D90).
4. Two segmentations you'd investigate (e.g., by channel, by first feature used).

## 7.7 Experimentation and A/B Testing

A/B testing is how you move from "I think this will help" to "I know this helped (or didn't)."

### The Core Idea

Randomly split users into two (or more) groups. Show different variants. Measure the outcome. The randomization isolates the effect of the change from other variables.

If done right, an A/B test gives you a **causal** answer. Not "users who saw this also did X" (correlation) but "showing this *caused* X."

### Anatomy of a Good A/B Test

**1. Hypothesis.** Stated explicitly, falsifiable.

> "Adding social proof badges (e.g., '4.7 stars from 12K reviews') to the product detail page will increase add-to-cart rate by 5–8% (vs 32% baseline)."

**2. Primary metric.** The single number that defines success.

**3. Guardrail metrics.** What must *not* get worse. (Page load time, support tickets, etc.)

**4. Sample size calculation.** Done *before* the test. Tells you how many users you need to detect the effect size you care about.

**5. Test duration.** Should run for a full business cycle (often 1+ weeks) to capture day-of-week effects.

**6. No peeking.** You don't look at results until the test ends or hits the planned sample size. Peeking + early stopping is one of the most common ways teams fool themselves.

**7. Pre-committed analysis plan.** Decide before the test how you'll segment, what counts as significant, what you'll do with the result.

### Statistical Foundations (At PM Level)

You don't need to be a statistician. You need to understand these concepts well enough to ask the right questions.

**Statistical significance.** The probability that the observed difference is due to random chance, not a real effect. Conventionally, p-value < 0.05 ("less than 5% chance this is random") = "significant."

But: significance alone isn't enough. With huge samples, you can find "significant" effects that are tiny and meaningless.

**Effect size.** How big is the difference? "Conversion rate went from 4.0% to 4.05%" might be statistically significant in a giant sample but business-trivially small.

**Confidence interval.** A range of plausible values for the true effect. "We estimate the lift is +5% with a 95% CI of +2% to +8%." If the CI doesn't cross zero, you have a significant positive effect.

**Power.** The probability your test will detect a real effect of a given size. Underpowered tests miss real effects (false negatives).

**Sample size formula (rough rule of thumb):** To detect a 5% relative lift in a 4% conversion rate at 80% power and p<0.05, you need roughly 25,000 users per variant. For a 10% relative lift, ~6,250 per variant. There are free calculators online ([Optimizely's calculator](https://www.optimizely.com/sample-size-calculator/), [Evan Miller's calculator](https://www.evanmiller.org/ab-testing/sample-size.html)).

### Common A/B Testing Mistakes

1. **Stopping early when you see green.** "It's significant after 2 days, let's ship it!" — except the effect often shrinks or disappears with more data. Always run for the planned duration.

2. **Testing too many things at once.** "Let's test 5 variants of the page" → with multiple comparisons, you'll find a "winner" by chance. Either Bonferroni-correct, or test fewer variants.

3. **Ignoring novelty effects.** Users react to *change* itself. A test that wins in week 1 may regress to baseline in week 4 once novelty wears off. Run long enough.

4. **Forgetting segments.** Aggregate result is "no effect" — but it might be +20% for new users and -15% for power users (canceling out). Segment before concluding.

5. **Sample ratio mismatch (SRM).** Your A/B split is supposed to be 50/50, but ends up 47/53. This is a red flag — something is wrong with the assignment. Always check and investigate before trusting the result.

6. **A/A test failure.** Run an A/A test (both groups see the same thing). If you find a "significant" difference, your testing infrastructure is broken or your randomization is biased. Healthy teams run A/A tests periodically as a sanity check.

7. **Not calculating sample size in advance.** Running a test on 800 users won't detect a 3% lift, no matter how long you wait. Calculate first.

8. **Cherry-picking metrics.** Running a test, finding the primary metric flat, and then claiming success based on a secondary metric — this is p-hacking. Pre-commit to your primary metric.

9. **Confounded launches.** Running an A/B test simultaneously with a major launch, marketing campaign, or seasonal event. The signal is muddled.

### When NOT to A/B Test

Despite the gospel of "A/B test everything," sometimes you shouldn't:

- **Low traffic.** If you can't get statistical power, a test will be inconclusive. Use qualitative methods.
- **Strategic / brand decisions.** A logo redesign isn't an A/B-testable question; it's a strategic one. Use research and judgment.
- **Reversibility.** For one-way doors (e.g., killing a feature with paying customers), testing is risky.
- **Speed-critical.** Sometimes a 4-week test isn't justified for a clearly-better change.
- **Ethical concerns.** Showing some users a worse experience to test it has ethical limits, especially in healthcare, finance, or vulnerable populations.

A great PM knows when to test and when to ship on judgment.

## 7.8 Product Instrumentation Basics

Before you can analyze, you must instrument. PMs must know the basics here, even if engineers do the actual work.

### Event Taxonomy

Define a consistent, structured way of capturing user actions. The standard pattern: **Object-Action.**

Good event names:
- `button_clicked` (with properties: button_name, screen_name)
- `search_performed` (with properties: query, results_count, source)
- `payment_completed` (with properties: amount, currency, method)
- `subscription_upgraded` (with properties: from_plan, to_plan, source)

Bad event names:
- `clicked_button_homepage_blue` (too granular; explodes the schema)
- `homepage` (no verb; ambiguous)
- `did_thing` (meaningless)

Properties on events let you slice without redefining events. Example: `button_clicked` with property `button_name` lets you slice by button later.

### What to Instrument

For any feature:
- The entry point (impression / click).
- Each step of the flow.
- Successful completion (the primary success event).
- Each known failure mode.
- Drop-off points (where users abandon).

A good rule: instrument *before* shipping, not after. If you can't decide what to instrument, you don't yet understand your success criteria.

### Tools

- **Product analytics:** Amplitude, Mixpanel, Heap, PostHog (open-source).
- **Web analytics:** Google Analytics (GA4), Adobe Analytics.
- **Session replay:** FullStory, Hotjar, LogRocket.
- **Funnels & cohorts:** Most product analytics tools support these natively.
- **Data warehouse:** Snowflake, BigQuery, Redshift — for full SQL-based analysis.
- **Notebook environments:** Hex, Mode Analytics, Jupyter, Google Colab.

### Instrumentation Anti-Patterns

- **Instrumenting after the launch.** You miss the early data. Always instrument before.
- **Inconsistent naming.** `button_click`, `clicked_button`, `btn_clicked` all in the same app. Adopt a convention; enforce it.
- **Property soup.** Hundreds of events with no documentation. Maintain a tracking plan.
- **Untracked errors.** If a payment fails, you'd better know. Log errors as events.

## 7.9 SQL for PMs — A Working Crash Course

PMs who can write SQL operate at 5× the speed of those who can't. You don't need to be a DBA. You need fluency at intermediate-level analytical SQL.

### Why PMs Should Learn SQL

- Quick ad-hoc questions ("how many users from Mumbai signed up last month?") become 5-minute self-service instead of 5-day analyst tickets.
- Better intuition for what analytics can and can't do.
- Self-sufficiency in interview prep (analytical questions in PM interviews often test this).
- Earned credibility with data teams.

### What to Learn (Roadmap)

1. **Core SELECT** — SELECT, FROM, WHERE, ORDER BY, LIMIT.
2. **Aggregation** — GROUP BY, COUNT, SUM, AVG, MIN, MAX, HAVING.
3. **Joins** — INNER JOIN, LEFT JOIN, the difference and when each matters.
4. **Subqueries and CTEs** — Common Table Expressions (`WITH ... AS`).
5. **Window functions** — ROW_NUMBER, RANK, LAG, LEAD, partition-based aggregations.
6. **Date functions** — DATE_TRUNC, INTERVAL math.
7. **Funnel and cohort patterns** — specific patterns for product analytics.

You can become productive in ~20 hours of focused practice. Modes Analytics' SQL tutorial ([mode.com/sql-tutorial](https://mode.com/sql-tutorial/)), the SQLBolt tutorial ([sqlbolt.com](https://sqlbolt.com)), and DataLemur ([datalemur.com](https://datalemur.com)) — built for analytics interviews — are great starting points.

### Worked Examples

Assume two tables:

```
users (user_id, signup_date, country, plan)
events (event_id, user_id, event_name, event_time, properties)
```

**Question 1: "How many users signed up last week, by country?"**

```sql
SELECT 
  country,
  COUNT(*) AS signups
FROM users
WHERE signup_date >= CURRENT_DATE - INTERVAL '7 days'
  AND signup_date < CURRENT_DATE
GROUP BY country
ORDER BY signups DESC;
```

**Question 2: "What is the activation rate (defined as making it to onboarding-complete event within 7 days of signup) for users who signed up last month?"**

```sql
WITH new_users AS (
  SELECT user_id, signup_date
  FROM users
  WHERE signup_date >= DATE_TRUNC('month', CURRENT_DATE - INTERVAL '1 month')
    AND signup_date < DATE_TRUNC('month', CURRENT_DATE)
),
activated AS (
  SELECT DISTINCT u.user_id
  FROM new_users u
  JOIN events e ON e.user_id = u.user_id
  WHERE e.event_name = 'onboarding_complete'
    AND e.event_time <= u.signup_date + INTERVAL '7 days'
)
SELECT
  (SELECT COUNT(*) FROM activated)::float
  / (SELECT COUNT(*) FROM new_users) AS activation_rate;
```

**Question 3: "Build a 30-day retention cohort table for users who signed up in the last 12 weeks."**

```sql
WITH cohort AS (
  SELECT
    user_id,
    DATE_TRUNC('week', signup_date) AS cohort_week
  FROM users
  WHERE signup_date >= CURRENT_DATE - INTERVAL '12 weeks'
),
activity AS (
  SELECT DISTINCT
    e.user_id,
    DATE_TRUNC('day', e.event_time)::date AS active_date
  FROM events e
  WHERE e.event_time >= CURRENT_DATE - INTERVAL '12 weeks'
)
SELECT
  c.cohort_week,
  COUNT(DISTINCT c.user_id) AS cohort_size,
  COUNT(DISTINCT CASE WHEN a.active_date = c.cohort_week + INTERVAL '1 day' THEN c.user_id END) AS d1,
  COUNT(DISTINCT CASE WHEN a.active_date BETWEEN c.cohort_week + INTERVAL '6 days' AND c.cohort_week + INTERVAL '7 days' THEN c.user_id END) AS d7,
  COUNT(DISTINCT CASE WHEN a.active_date BETWEEN c.cohort_week + INTERVAL '29 days' AND c.cohort_week + INTERVAL '30 days' THEN c.user_id END) AS d30
FROM cohort c
LEFT JOIN activity a ON a.user_id = c.user_id
GROUP BY c.cohort_week
ORDER BY c.cohort_week;
```

This is intermediate SQL. If this looks intimidating, you'll find each component in tutorials. Practice on real schemas (StrataScratch, DataLemur have PM-relevant datasets and questions).

**Question 4: "Find the top 10 users by transaction volume in the last 30 days."**

```sql
SELECT
  u.user_id,
  u.country,
  COUNT(e.event_id) AS num_transactions,
  SUM((e.properties->>'amount')::numeric) AS total_amount
FROM users u
JOIN events e ON e.user_id = u.user_id
WHERE e.event_name = 'payment_completed'
  AND e.event_time >= CURRENT_DATE - INTERVAL '30 days'
GROUP BY u.user_id, u.country
ORDER BY total_amount DESC
LIMIT 10;
```

(The `properties->>'amount'::numeric` is JSON-extraction syntax in PostgreSQL — varies by warehouse.)

**Question 5: "Funnel from `signup` → `email_verified` → `first_action` → `payment_completed` for last week's signups."**

```sql
WITH cohort AS (
  SELECT user_id
  FROM users
  WHERE signup_date >= CURRENT_DATE - INTERVAL '7 days'
),
e AS (
  SELECT user_id, event_name, MIN(event_time) AS first_event_time
  FROM events
  WHERE event_name IN ('email_verified','first_action','payment_completed')
  GROUP BY user_id, event_name
)
SELECT
  COUNT(DISTINCT c.user_id) AS signed_up,
  COUNT(DISTINCT CASE WHEN ev.event_name = 'email_verified' THEN c.user_id END) AS verified,
  COUNT(DISTINCT CASE WHEN ev.event_name = 'first_action' THEN c.user_id END) AS first_action,
  COUNT(DISTINCT CASE WHEN ev.event_name = 'payment_completed' THEN c.user_id END) AS paid
FROM cohort c
LEFT JOIN e ev ON ev.user_id = c.user_id;
```

These five examples cover ~80% of what you'd write as a PM. Memorize the patterns.

## 7.10 Python and Pandas for PMs

If SQL gives you data, Python lets you analyze it more flexibly. Pandas is the dominant library.

### Why Pandas

- Easier than SQL for some operations (cohort analysis, statistics, plotting).
- Standard for data scientists, so you can read their work.
- Free, with countless tutorials.
- AI tools generate excellent Pandas code from natural-language requests.

### What to Learn

1. Loading data (`pd.read_csv`, `pd.read_sql`).
2. Filtering, selecting (`df[df['col'] > x]`, `df.loc[]`).
3. Aggregation (`df.groupby('x')['y'].mean()`).
4. Joins / merges (`pd.merge`).
5. Time-series basics (`df['date'] = pd.to_datetime(...)`).
6. Plotting (`df.plot()` or matplotlib).
7. Cohort analysis with pivot.
8. Statistics: mean, median, percentile, t-tests via scipy.

### Worked Examples

**Example 1: Loading and filtering.**

```python
import pandas as pd

# Load data
events = pd.read_csv('events.csv')
events['event_time'] = pd.to_datetime(events['event_time'])

# Filter to last 30 days, payment events
recent_payments = events[
    (events['event_time'] >= pd.Timestamp.now() - pd.Timedelta(days=30))
    & (events['event_name'] == 'payment_completed')
]

# How many payments per user
per_user = recent_payments.groupby('user_id').size().sort_values(ascending=False)
print(per_user.head(10))
```

**Example 2: Cohort retention table.**

```python
import pandas as pd

users = pd.read_csv('users.csv')
events = pd.read_csv('events.csv')

users['signup_date'] = pd.to_datetime(users['signup_date'])
events['event_time'] = pd.to_datetime(events['event_time'])

users['cohort_week'] = users['signup_date'].dt.to_period('W')
events['event_week'] = events['event_time'].dt.to_period('W')

# Join
df = events.merge(users[['user_id', 'cohort_week']], on='user_id')

# Compute weeks since signup
df['weeks_since_signup'] = (df['event_week'] - df['cohort_week']).apply(lambda x: x.n)

# Cohort retention table
retention = (
    df.groupby(['cohort_week', 'weeks_since_signup'])['user_id']
      .nunique()
      .unstack(fill_value=0)
)

# Convert to retention rate (% of cohort still active)
retention_pct = retention.div(retention.iloc[:, 0], axis=0) * 100
print(retention_pct.head())
```

**Example 3: Statistical test (A/B test analysis).**

```python
import pandas as pd
from scipy import stats

ab_data = pd.read_csv('ab_test_results.csv')
# columns: user_id, variant, converted (0/1)

control = ab_data[ab_data['variant'] == 'control']['converted']
treatment = ab_data[ab_data['variant'] == 'treatment']['converted']

# Conversion rates
print(f"Control: {control.mean():.4f}")
print(f"Treatment: {treatment.mean():.4f}")
print(f"Lift: {(treatment.mean() - control.mean()) / control.mean():.2%}")

# Two-proportion z-test (good for binary outcomes)
from statsmodels.stats.proportion import proportions_ztest
counts = [treatment.sum(), control.sum()]
nobs = [len(treatment), len(control)]
z, p = proportions_ztest(counts, nobs)
print(f"z-stat: {z:.3f}, p-value: {p:.4f}")
print(f"Significant at p<0.05? {p < 0.05}")
```

**Example 4: Funnel analysis.**

```python
import pandas as pd

events = pd.read_csv('events.csv')

# Define funnel stages
stages = ['signup', 'email_verified', 'first_action', 'payment_completed']

# Get earliest occurrence of each stage per user
funnel = (
    events[events['event_name'].isin(stages)]
    .groupby(['user_id', 'event_name'])['event_time'].min()
    .unstack()
)

# Count users reaching each stage
stage_counts = (funnel.notna()).sum()
stage_counts = stage_counts[stages]  # ensure order

# Compute conversion rates between stages
print("Stage counts:")
print(stage_counts)
print("\nConversion rates:")
for i in range(1, len(stages)):
    conv_rate = stage_counts[stages[i]] / stage_counts[stages[i-1]]
    print(f"{stages[i-1]} → {stages[i]}: {conv_rate:.2%}")
```

You don't need to memorize syntax. You need to know what's *possible* and reach for it when needed. AI tools generate this code reliably from natural-language prompts.

## 7.11 How PMs Think Differently from Data Analysts

Both PMs and data analysts work with numbers. But their roles are different.

| | Data Analyst | Product Manager |
|---|---|---|
| **Goal** | Accurate description and explanation of data | Decision-making for product outcomes |
| **Question** | "What is true?" | "What should we do?" |
| **Skill emphasis** | Statistical rigor, data manipulation, modeling | Synthesis, prioritization, judgment |
| **Output** | Reports, dashboards, models | Decisions, products, outcomes |
| **Standard for action** | Statistical confidence | Decision quality given uncertainty |

Three implications for PMs:

### 1. Data informs decisions; data doesn't make them.

A data analyst tells you "the test was inconclusive." A PM has to decide anyway. Sometimes "inconclusive" means "kill the feature"; sometimes it means "ship anyway because the strategic value outweighs the statistical noise." The PM owns the decision.

### 2. Speed often matters more than perfection.

A data scientist might want 6 weeks to do a rigorous analysis. A PM may need a "good enough" answer in 2 days to make a decision. Knowing when "good enough" is enough is a PM judgment skill.

### 3. PMs interpret in business context.

The number is rarely the answer. "Conversion dropped 8%" is a number. "Conversion dropped 8% because we removed credit-card-fields-prefill, which we'll restore by Friday" is the answer. The PM brings the *why* and the *what next*.

### Key Practices

- **Always ask "why" before "how much."** A drop of 8% in conversion is meaningless until you know the cause.
- **Look at distributions, not just averages.** A 7-second average page load could be 3 seconds for 90% of users and 30 seconds for 10%. Different problem.
- **Segment before concluding.** Aggregate metrics hide enormous variation across user types, geographies, channels.
- **Check the confounders.** Did anything else change? Marketing campaign? Seasonality? Outage?
- **Sanity-check the data.** If your DAU jumped 400% overnight, the most likely cause is an instrumentation bug, not a viral moment.

## 7.12 Worked Case: Diagnosing a Drop

Your DAU was 850K last month. This month it's 770K. CEO asks: *what happened?*

A junior PM says: "Let me ask the data team for analysis."

A senior PM says (within 30 minutes):

```
Step 1: Confirm the data is real.
- Check the dashboard methodology — definition of DAU hasn't changed?
- Cross-reference with another metric (e.g., events table count of unique users) — same shape?
- Yes / No?
  → If no, fix instrumentation. Done.
  → If yes, real drop.

Step 2: Decompose by acquisition cohorts (MECE).
- New user DAU: this month 200K (was 250K) → -20%
- Returning user DAU: this month 570K (was 600K) → -5%

So most of the drop is in new users. Where's that coming from?

Step 3: Decompose new users by channel.
- Organic: 100K → 95K (-5%) — small drop
- Paid: 80K → 50K (-37%) — big drop!
- Referral: 70K → 55K (-21%) — moderate drop

Most of the new-user drop is paid. Investigate paid:

Step 4: Decompose paid by sub-channel.
- Google: 40K → 30K — moderate drop
- Facebook: 30K → 10K — collapse!
- Other: 10K → 10K — flat

Facebook paid acquisition collapsed.

Step 5: Why?
- Talk to marketing. Did campaigns change? CPMs spike?
- Check ad spend: did we cut budget? (Often the cause.)
- Check Facebook ad accounts: any policy violations / suspensions?

Likely root cause: Facebook ad budget cut + campaign disabled.

Step 6: What action?
- If budget cut was deliberate → expected, no action.
- If unintentional → fix.
- Either way: also investigate why returning user DAU dipped 5%
  (smaller issue but still worth understanding).

Result: 30 minutes from "DAU dropped" to "Here's the cause and the path forward."
```

This is what data thinking in PM looks like. Decompose. Segment. Drill. Form hypothesis. Verify. Decide.

## 7.13 Comprehensive Practice Exercises

### Exercise 7.1 — NSM Selection
For three companies of your choice (one consumer, one B2B, one marketplace), propose:
- Their NSM
- 4 input metrics
- 2 driver metrics per input
- One guardrail metric
Argue why your NSM is better than alternatives.

### Exercise 7.2 — Funnel Diagnosis
A B2C app has these numbers. Identify the biggest leak, recommend top 3 actions:
- 100K monthly visitors
- 5K signups (5%)
- 1K activated (D7, 20%)
- 600 D30 retained (60%)
- 80 paid (8% of D30 retained)
- 20 referred 1+ user

### Exercise 7.3 — A/B Test Design
Design an A/B test for: "Adding a 'price match guarantee' badge on product pages will increase conversion." Specify:
- Hypothesis with quantified expected lift
- Primary metric, guardrails
- Sample size estimate (assumptions allowed)
- Test duration
- 3 ways the test could give a misleading result
- What you'd do if results are flat

### Exercise 7.4 — SQL Practice
Write SQL queries for:
- "Top 10 features used by users who later upgraded to paid (but not by users who churned)."
- "Week-over-week growth in active users."
- "% of users who completed signup → first transaction within 24 hours, by acquisition channel."

### Exercise 7.5 — Cohort Analysis
For an imagined product (or a public dataset), draw out a cohort retention table. Identify whether retention curves flatten (PMF) or decay (no PMF). Suggest 2 interventions if curves don't flatten.

### Exercise 7.6 — Drop Diagnosis
Your weekly active users dropped 12% over the last month. Walk through your investigation in writing: hypotheses (at least 5), what data you'd pull, in what order, and what action each finding would prompt.

### Exercise 7.7 — Building a Leading-Indicator Dashboard
You manage onboarding for a fintech app. Your lagging metric is "% of users who fund their account within 60 days of signup." Define 4 leading indicators that would predict it within the first 7 days.

### Exercise 7.8 — Statistical Reasoning
You've run an A/B test. Variant A: 4.5% conversion (n=10,000). Variant B: 4.7% conversion (n=10,000). p-value = 0.43.

Should you ship variant B? Why or why not? What would change your answer?

---

### Solutions

**Solution 7.2 — Funnel diagnosis:**

Conversion rates: 5% → 20% → 60% → 8% → 25% (referral).

Industry-feel benchmarks:
- Visit→signup 5% — OK.
- Signup→activation 20% — bad. (35–40% typical for healthy products.)
- Activation→D30 60% — strong.
- Paid conversion 8% — varies; not enough info.

The biggest leak is **activation**. Going from 20% to 35% would 1.75× monthly paid users, beating any acquisition or revenue-tier optimization. Top 3 actions:
1. User research on what blocks new users between signup and AHA — interview 10 churned-at-signup users.
2. Audit onboarding flow; identify drop-off step. Likely too many steps before value.
3. Test reduced-friction onboarding (e.g., let users use core feature before email confirmation; load sample data on signup).

**Solution 7.8 — A/B statistical reasoning:**

You should *not* ship variant B based on this test alone. Reasons:
- p-value 0.43 → no statistical significance. The 0.2pp difference is well within noise range for 10K users.
- The observed difference could just as easily be -0.2pp in a re-run.

What would change your answer:
- A larger sample with sustained lift and significant p-value.
- Strong qualitative signal (users prefer B in interviews) might justify shipping despite weak data, but be honest about that.
- A cheaper-to-run extended test would clarify.
- Strategic reasons (B is more brand-aligned) might justify shipping anyway, but call it a strategic choice, not a data win.

The PM's job: don't fool yourself. "p=0.43" means "we don't know." Don't pretend otherwise.

## 7.14 AI Leverage in Metrics & Data Work

**Use case 1: SQL generation.**

Prompt: *"I have these tables: [paste schema]. Write a SQL query to compute [metric]. Use Postgres syntax. Include comments explaining each step."*

Use AI as a SQL-writing partner. You'll learn faster by reading and tweaking AI's output than by writing from scratch.

**Use case 2: Pandas analysis.**

Prompt: *"I have a CSV with columns [list]. Write Python/pandas code to compute [analysis]. Include the cohort retention table style of analysis with a heatmap."*

**Use case 3: Statistical interpretation.**

Prompt: *"My A/B test: control n=15,000, conversion 8.4%. Treatment n=15,000, conversion 9.1%. Interpret: is this significant at p<0.05? What's the confidence interval on the lift? What sample size would I have needed to confidently detect a 5% relative lift? Should I ship?"*

**Use case 4: Metric framework brainstorming.**

Prompt: *"Help me design an NSM and metrics tree for [product]. Generate 3 distinct alternative NSM choices, with their pros/cons. For my preferred choice, build a 3-level metrics tree with input and driver metrics."*

**Use case 5: Drop investigation.**

Prompt: *"Our DAU dropped 12% over the last month. Generate 8 hypotheses for the cause, ordered by likelihood given a [type of company]. For each, what data would I pull to test it? What would 'yes' and 'no' look like?"*

**Use case 6: Dashboard critique.**

Prompt: *"Here's my dashboard layout [paste or describe]. Critique: which metrics are vanity vs outcome? Which are leading vs lagging? Which segments am I missing? What would I add for a senior PM to make better decisions?"*

**Use case 7: Generating event taxonomy.**

Prompt: *"I'm shipping [feature]. Help me design an event taxonomy: list each event we should fire, with its properties, and why each event matters for analytics. Use object-action naming. Include events for entry, success, drop-off, and error states."*

## 7.15 References for Part 7

**Books:**
- *Lean Analytics* — Croll & Yoskovitz. The most practical book on metrics for product. ([Amazon](https://www.amazon.com/Lean-Analytics-Better-Startup-OReilly/dp/1449335675))
- *Trustworthy Online Controlled Experiments* — Kohavi, Tang, Xu. The serious A/B testing reference. ([Amazon](https://www.amazon.com/Trustworthy-Online-Controlled-Experiments-Practical/dp/1108724264))
- *How to Measure Anything* — Douglas Hubbard. Estimation and measurement methodology. ([Amazon](https://www.amazon.com/How-Measure-Anything-Intangibles-Business/dp/1118539273))
- *Practical Statistics for Data Scientists* — Bruce, Bruce, Gedeck. PM-friendly stats book. ([Amazon](https://www.amazon.com/Practical-Statistics-Data-Scientists-Essential/dp/149207294X))
- *Naked Statistics* — Charles Wheelan. Accessible introduction. ([Amazon](https://www.amazon.com/Naked-Statistics-Stripping-Dread-Data/dp/039334777X))

**Online courses:**
- **SQL:** Mode Analytics SQL Tutorial ([free, mode.com/sql-tutorial](https://mode.com/sql-tutorial/)); SQLBolt ([sqlbolt.com](https://sqlbolt.com)); DataLemur ([datalemur.com](https://datalemur.com)).
- **Python/Pandas:** Kaggle Pandas course (free); DataCamp Pandas track; the official Pandas docs.
- **Statistics for PMs:** Khan Academy Statistics + Probability (free).
- **A/B testing:** Udacity "A/B Testing" course by Google (free).
- **Product analytics:** Reforge's Product Analytics course (paid, top-tier).
- **Amplitude Academy** — free, structured product analytics curriculum. ([academy.amplitude.com](https://academy.amplitude.com))

**Tools to learn:**
- **Analytics:** Amplitude, Mixpanel, PostHog (open-source).
- **SQL/notebook:** Mode, Hex, Metabase, Looker, Google Colab.
- **Spreadsheets:** Google Sheets / Excel (still essential for ad-hoc work).
- **Visualization:** Tableau, Looker Studio, Datawrapper.
- **A/B testing platforms:** Optimizely, GrowthBook, Statsig, LaunchDarkly.

**Essays / Resources:**
- "How to Find Your Aha Moment" — Amplitude. ([amplitude.com](https://amplitude.com))
- "Choosing a North Star Metric" — Sean Ellis, GrowthHackers. ([growthhackers.com](https://growthhackers.com))
- Sequoia Capital's posts on metrics frameworks. ([sequoiacap.com](https://www.sequoiacap.com))
- "Statistics Done Wrong" — Alex Reinhart. ([statisticsdonewrong.com](https://www.statisticsdonewrong.com)) — free book on common stats mistakes.
- Evan Miller's A/B test tools and essays. ([evanmiller.org](https://www.evanmiller.org))

**Practice:**
- DataLemur — PM-focused SQL practice. (Some free, full access paid.)
- StrataScratch — SQL + Python interview prep.
- Kaggle — data analysis practice on real datasets.
- Set up a personal Mixpanel/Amplitude account on a free tier and instrument a side project.
- Take any product you use, ask "what's their NSM?" and reverse-engineer their metrics tree.

---

*End of Part 7. Up next: structured problem-solving and guesstimation — the interview craft, but more importantly, the daily craft.*


\newpage


