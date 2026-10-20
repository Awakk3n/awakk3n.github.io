# PART 4: PRODUCT STRATEGY & VISION

## 4.0 Why most "strategy" you'll encounter is bullshit

I'm going to start this chapter with a hard truth. Most strategy documents at most companies are not strategy. They are aspirations dressed up as strategy. They list goals, name initiatives, and call themselves strategic. They are not.

Real strategy has three properties that almost no corporate document satisfies:

1. **It diagnoses a specific situation.** Not "the market is big and we have a great team." A specific, falsifiable diagnosis: "Our retention curve is flat at 40% in month 3, well below industry benchmarks of 60%, because users hit the integration step and 70% drop without completing it."

2. **It commits to a specific approach.** Not "we will be customer-obsessed and ship fast." A specific approach: "We will eliminate the integration step entirely by pre-populating data from a single API call, accepting that we'll lose customization for power users in exchange."

3. **It explicitly says what we're NOT doing.** Real strategy is sacrifice. "We are not pursuing the enterprise segment for the next 18 months. We are not localizing beyond English. We are not adding mobile until web converts."

Most "strategy" you encounter satisfies zero of these. It is:
- Vague diagnosis ("the market is competitive").
- Generic approach ("we'll be the best").
- No sacrifice ("we'll do everything").

This is what Richard Rumelt, in *Good Strategy / Bad Strategy*, calls "fluff" and "failure to face the challenge." It is also what most PM interview answers look like before training.

This chapter teaches you to recognize the difference, build the real thing, and avoid the fake thing — including the fake version you'll be tempted to produce yourself when nobody's watching.

## 4.1 What strategy actually is — Rumelt's definition, properly applied

Rumelt's definition: **Strategy is a coherent set of analyses, concepts, policies, arguments, and actions that respond to a high-stakes challenge.**

He breaks it down into three components — the **kernel** of strategy:

1. **A diagnosis** that defines or explains the nature of the challenge.
2. **A guiding policy** for dealing with the challenge.
3. **A coherent set of actions** designed to carry out the guiding policy.

If your strategy document does not have all three, it is not a strategy.

### Diagnosis: the part that scares people

Most strategy fails at diagnosis. A real diagnosis names a problem in concrete, specific, often uncomfortable terms.

**Bad diagnosis:** "The market is competitive and we need to differentiate."

**Good diagnosis:** "Our growth has stalled because our product, designed for the technical buyer, is being purchased increasingly by non-technical buyers who find our setup wizard intimidating. The 30-day activation rate for non-technical buyers is 18% vs 62% for technical buyers, and non-technical buyers now make up 60% of new signups."

The good diagnosis identifies a *specific structural mismatch*. It commits. It can be wrong. The bad diagnosis cannot be wrong because it doesn't say anything.

PMs avoid specific diagnoses because being specific is risky. If you commit to "non-technical buyers are dropping at the setup wizard," and someone disproves you, you look bad. So most PMs hedge: "the market is competitive" (true of every market always). The hedge feels safe but produces strategy that is also empty of content.

The discipline: pick a diagnosis. Be willing to be wrong. Update if evidence demands.

### Guiding policy: the part where you commit

Once you've diagnosed, you commit to an approach. The guiding policy is general enough to cover many decisions but specific enough to rule things out.

**Bad guiding policy:** "We will execute well."

**Good guiding policy:** "We will redesign the activation experience around the non-technical buyer, with the technical buyer's needs handled by an opt-in 'advanced mode.'"

The good policy says what you'll do — and implicitly what you won't. You won't keep optimizing for the technical buyer first. You won't try to serve both equally. You've made a sacrifice.

### Coherent actions: the part where you actually do something

The actions follow from the policy. They are *coherent* — they reinforce each other rather than pulling in different directions.

For the example above:
- Action 1: Rebuild the onboarding flow assuming zero technical setup.
- Action 2: Move all advanced configuration into a separate "advanced settings" path.
- Action 3: Rewrite documentation in non-technical language as default; technical docs as a separate tab.
- Action 4: Hire a designer specifically experienced with non-technical SaaS users.
- Action 5: Add a sales-assist motion for technical buyers who want help with advanced config.

These actions cohere. They all reinforce the same strategic direction. They are not just a list of features.

A common failure: actions are listed but they don't cohere — they're a wishlist of unrelated things the team wants to do. The policy is "redesign for non-technical buyers" but the action list includes "build a Slack integration" and "expand to Europe" and "add SOC 2 compliance." None of those serve the policy. The action list reveals that the team didn't actually buy into the policy — they listed everything they wanted to do regardless.

### The Stripe example — applied

Stripe's strategy in its early years (paraphrased from public talks):

- **Diagnosis:** Online payments for developers are a mess. Existing solutions (Authorize.net, Braintree pre-acquisition) require weeks to integrate, expose developers to compliance complexity, and have terrible APIs. Developers building new products are blocked or deterred from launching by payments. The unmet need is a payments stack a developer can integrate in an afternoon.

- **Guiding policy:** Build the payments product with developer experience as the primary design constraint, not as an afterthought. Optimize every decision (API design, documentation, error messages, onboarding) for the developer's first hour with the product.

- **Actions:**
  - Hire developers as PMs, not finance people.
  - Treat documentation as a first-class product (Stripe Docs are famous for a reason).
  - Build a dashboard developers can grok in 5 minutes.
  - Default to developer-friendly pricing (no setup fees, no monthly minimums for small accounts).
  - Use plain English in error messages, not bank-style codes.
  - Publish open-source libraries in 10+ languages.
  - Refuse to build features that compromise developer experience even when sales would love them.

Notice the coherence. Every action serves the policy. The policy responds to the diagnosis. There is sacrifice — Stripe deliberately did not chase the enterprise segment for years, did not localize aggressively, did not build a no-code tool for non-developers. Those were strategic sacrifices.

The result: Stripe ate the developer payments market in a decade, while incumbents with 10x their resources didn't see them coming.

## 4.2 Strategy vs Strategy Theater

This is the section the brief specifically asked for, and the section I shortchanged in v1.

**Strategy** moves resources, defines sacrifice, is uncomfortable, and produces a clear before/after.

**Strategy theater** rearranges words, declares ambition, avoids commitment, and looks impressive in slides.

Most corporate strategy is theater. The PM who can spot the difference — and who can refuse to participate in theater — has a fundamental advantage.

### How to spot strategy theater

**Sign 1: The strategy doesn't say no to anything.**
Real strategy explicitly excludes paths. Theater says yes to everything. If the document doesn't have a "what we're NOT doing" section, it's theater.

**Sign 2: The strategy uses words that can't be wrong.**
"We will be customer-obsessed." "We will move fast." "We will deliver excellence." These are unfalsifiable. They cannot be wrong because they don't claim anything specific. Theater.

**Sign 3: The strategy was unchanged across the strategy review.**
Real strategies have edit history. Drafts get rejected. Hypotheses get challenged. Theater documents are produced once and shipped. If a strategy review didn't substantially change the strategy, the review was theater.

**Sign 4: The strategy has lots of bullet points and few decisions.**
Bullet points are a way to look comprehensive without committing. Real strategies often have prose that says "we will do X and not Y because Z." Bullet-heavy documents are usually theater.

**Sign 5: The strategy doesn't allocate resources.**
A strategy that doesn't say "we are moving 20 engineers from the X team to the Y team" or "we are reducing the marketing budget by 30%" is rearranging words, not directing resources. Real strategies are visible in budget changes and headcount changes.

**Sign 6: Everyone agrees with the strategy.**
If everyone in the room nods, the strategy is meaningless. Real strategy has tradeoffs that some people will not like. If nobody objects, nothing was decided.

**Sign 7: The strategy mentions all the buzzwords.**
"AI-powered, customer-centric, data-driven, scalable platform with end-to-end automation" — every word is meaningless inside that phrase. The buzzword density is a leading indicator of theater.

### Why strategy theater happens

Three reasons, in increasing severity:

1. **Genuine confusion.** Some teams don't know what real strategy looks like. Theater is what they imagine strategy is. Fixable with examples and coaching.

2. **Risk aversion.** A specific strategy can be wrong. Theater can never be wrong. Theater is safer for the author's career, even if it's worse for the company.

3. **Avoidance of conflict.** Real strategy requires saying no to people. Theater lets you avoid that conversation. The strategy author keeps everyone happy by promising everything.

The third is the most dangerous. PMs who optimize for not having uncomfortable conversations end up producing theater systematically. Their teams get confused; their products lose direction. Eventually they get pushed out by leaders who can have the hard conversations.

### How to avoid producing theater yourself

The discipline:

- Before writing a strategy doc, force yourself to write a "what we are NOT doing" section first.
- Make at least one statement in the document that could be falsified by data within 6 months.
- Make at least one resource allocation explicit: "we are moving X people from A to B."
- Show the strategy to a smart adversary and ask: "where can you punch holes?" If they can't find any, the strategy is too vague.
- Re-read the strategy 6 months later. If everything stayed the same, it was a strategy. If everything quietly drifted, it was theater.

### The interview implication

When asked strategic questions in interviews, most candidates produce theater because they're nervous about committing. They list five things to consider. They never decide.

Senior interviewers spot this immediately. The signal they want is: **can this person commit, with reasoning?** Not "are they comprehensive?"

If you take one thing from this section: in a strategy interview question, force yourself to commit to a specific recommendation. Even if you're not sure. The recommendation can be partially wrong and you'll still score higher than someone who hedged everything.

## 4.3 Vision — what it is, why it matters

Vision is the long-term picture of what the product becomes if everything goes right.

Strategy is the multi-year plan for *how* you get there.

Roadmap is the concrete plan for the next quarter or two.

Vision sits above strategy. Strategy sits above roadmap. PMs who confuse these levels end up producing roadmap-y "strategies" or strategy-y "visions."

### Properties of a good vision

A good product vision is:

- **Inspiring without being grandiose.** "Be the best in the world at X" is grandiose. "Make X effortless for everyone in [segment]" is more grounded.
- **Specific to a user and a job.** Whose vision? For what?
- **Time-horizoned.** A 5-year or 10-year picture, not a 30-year fantasy.
- **Believable from where you stand today.** A vision so far from current state that it feels impossible deflates rather than inspires.

### Examples of good and bad visions

**Bad:** "Be the leading AI platform for the enterprise."

**Good:** "By 2030, every customer service representative at a Fortune 500 company has an AI copilot that handles 80% of their routine queries, freeing them for the complex 20%."

The good vision specifies who, what job, what outcome, and timeframe. It's testable. It commits.

**Bad:** "Make the world's information accessible."

**Good:** "Anyone, anywhere, can find any piece of information they need in under 10 seconds, in their own language."

(Google's vision when it was founded was closer to the second. Today it's diluted into the first by years of corporate strategy theater.)

### Cagan's Vision Pivot — when to update vision

Marty Cagan suggests revisiting vision approximately every 5 years. Major shifts trigger faster updates:

- A new technology fundamentally changes what's possible (mobile, then cloud, then AI).
- The market shifts (a new dominant competitor, a new regulatory environment).
- The original vision is achieved and a new one is needed.

Most companies revise vision either too often (yearly cosmetic updates) or never (founders' original vision persists long after relevance). The right cadence is "when something fundamental changes," which for most companies in 2026 is happening because of AI.

## 4.4 Product principles

Below vision, between vision and strategy, sit product principles. These are durable rules the team uses to make decisions.

Examples from real companies:

**Amazon's customer obsession principles:**
- Start with the customer and work backwards.
- Focus on the long term.
- Frugality.

**Apple's design principles (paraphrased):**
- Simplicity over featureitis.
- The product is the marketing.
- Vertical integration over modularity.

**Notion's product principles (publicly stated, paraphrased):**
- Tools should adapt to people, not the other way around.
- Less is more.
- Thoughtful defaults.

Good principles are tested when they're inconvenient. Amazon's "long term" principle has been tested every quarter when Wall Street demanded short-term margins; Bezos held the line for decades.

If your principles don't sometimes cause you to make uncomfortable decisions, they're not principles. They're decoration.

### Drafting your own product principles

For your product, draft 3-5 principles. They should:

- Be testable in real decisions ("does this decision honor or violate this principle?").
- Sometimes conflict with revenue, sometimes with engineering preferences, sometimes with customer requests.
- Be specific to *your* product, not generic ("be customer-obsessed" is generic).

Bad: "Be data-driven."
Good: "We optimize for long-term retention over short-term engagement, even when engagement metrics tempt us toward dopamine loops."

The good one specifies a real trade-off. The bad one is theater.

## 4.5 North-Star Metrics — properly understood

Every strategy chapter has an NSM section. Most are wrong. Let me try.

### What an NSM is

The North-Star Metric is the single number that best captures the value your product delivers to users. If your NSM grows, your product is creating more value. If it stagnates, value creation has stalled.

The NSM is *not*:
- Revenue (which can grow even when user value decays).
- DAU (which can grow through dark patterns).
- Engagement (which can grow through addiction).

The NSM should be a measure of *value delivered*, not a measure of company success or user time captured.

### Properties of a good NSM

1. **Captures value.** Moves with user benefit.
2. **Predicts long-term success.** A growing NSM precedes growing revenue/retention.
3. **Reflects user intent and outcome.** Not just activity.
4. **Is measurable now.** Not aspirational.
5. **Difficult to game cheaply.** Hard to inflate without delivering value.

### Famous NSM examples

| Company | NSM | Why it captures value |
|---|---|---|
| Spotify | Hours of music listened (or perhaps "minutes of engaged listening") | Captures actual usage, not just opens. |
| Airbnb | Nights booked | A booking is a real value transfer. |
| Slack | Companies with 2,000+ messages sent | The threshold filters out trial usage; 2,000+ messages indicates real adoption. |
| Facebook (early) | Daily active users | At early stage, DAU was a value proxy. As FB matured, DAU became gameable. |
| Airbnb | Nights booked | Captures real economic value. |
| Stripe | $ processed | Captures customer success directly. |

For products at different stages, the right NSM differs. Pre-PMF: usage frequency. Post-PMF: a value-creation metric.

### NSM trees — turning the metric into actionable inputs

The NSM alone is a result, not a lever. To act on it, decompose into input metrics.

For Spotify, "hours listened":

```
Hours listened
   = (Active users) × (Sessions per user) × (Avg session length)

Active users
   = New users + Returning users
   = (New signups × Activation rate) + (Existing × Retention rate)

Sessions per user
   = (Daily sessions × Days active per month) / users

Session length
   = Function of: content quality, recommendation quality,
     interruptions (ads), audio quality, offline reliability
```

Once you have the tree, every team owns one or more nodes. The recommendation team owns recommendation quality. The growth team owns activation. The infrastructure team owns audio quality and offline reliability.

The NSM at the top is the company's success metric. The leaves of the tree are individual teams' OKRs.

### Common NSM mistakes

- **Choosing a metric that's actually revenue or usage.** "Active subscribers" is revenue. "DAU" is usage. Neither is an NSM unless reframed.
- **Choosing a metric that doesn't decompose.** If you can't break it into a tree, teams can't act on it.
- **Choosing too many metrics.** "We have 5 NSMs." That's not an NSM. That's a dashboard.
- **Choosing a vanity metric.** Total signups ever. Cumulative anything. These don't reflect current health.
- **Not updating the NSM as the company evolves.** Early-stage NSMs (signups) become irrelevant later (need usage NSM).

## 4.6 Market sizing — TAM/SAM/SOM, with reality checks

Brief recap of definitions, since v1 covered this thoroughly:

- **TAM (Total Addressable Market):** Maximum revenue if you captured 100% of demand.
- **SAM (Serviceable Addressable Market):** Maximum revenue if you captured 100% of customers you can realistically reach.
- **SOM (Serviceable Obtainable Market):** Realistic share you'll capture in a defined timeframe.

### What v1 didn't say

Most TAM calculations are bullshit. They're produced by people whose interest is in making the number look big — founders pitching investors, PMs pitching internal projects, consultants pitching deals. The TAM is bullshit because:

- The "total" assumes 100% market share, which never happens.
- The "addressable" is interpreted maximally.
- Adjacent categories get included when convenient.
- The methodology is opaque.

When you're producing or consuming a TAM, be honest. State assumptions. State methodology. Report a range, not a point estimate. And when reading someone else's TAM, divide by 3-10x as a default skepticism factor.

### Top-down vs Bottom-up — when to use each

**Top-down:** "The Indian payments market is $XB. We can capture 1% in 5 years."

**Bottom-up:** "There are 2M Indian SMBs in our serviceable category. At 5% adoption × $200/year ARPU, our SOM is $20M."

Top-down is faster but lazier. Bottom-up is harder but more credible. For internal strategy, always do bottom-up. For pitch decks, top-down is acceptable because everyone knows it's bullshit.

### A note for Indian PMs

When sizing markets in India, the standard top-down trap is to multiply "1.4 billion population × X% smartphone × Y% urban × Z% relevant" and arrive at a huge number. This is misleading because:

- Smartphone penetration ≠ relevant smartphone penetration. Many smartphones are budget devices used for WhatsApp only.
- Population × demographic filter doesn't capture purchasing power. The "addressable" middle class is much smaller than population × demographic suggests.
- India's market structure is bimodal — a small, intense premium tier and a vast, lower-ARPU mass tier — so blended ARPU averages mislead.

When sizing India, segment carefully. Don't blend Tier-1 metro power users with Tier-3 mass users into a single ARPU.

## 4.7 Competitive analysis — beyond Porter

Porter's Five Forces (covered in v1) is foundational. Helmer's 7 Powers (also v1) is more modern. I'll add what Big Tech actually uses.

### What real competitive analysis looks like at Big Tech

When Google, Meta, or Stripe analyzes a competitor, they don't just produce a Porter chart. They build:

**1. Capability map.** What can the competitor do that we can't? What can we do that they can't? At what cost? With what speed?

**2. Resource map.** How much engineering, design, sales, capital does the competitor have? How are they allocating it?

**3. Strategic intent map.** What is the competitor optimizing for? Are they pursuing the same market, an adjacent market, or a different market with overlap? What evidence?

**4. Distribution map.** Who reaches the customer? Whose distribution is stronger? Where are we vulnerable to disintermediation?

**5. Pricing power map.** Who can charge more? Whose customers are stickier? Whose churn is higher?

**6. Talent map.** Who is hiring whom? Where are the senior people coming from / going to?

This depth is what gets produced for a major strategic review at a Big Tech company. Most PMs at most companies do nothing close. The gap is opportunity.

### The four moat types you'll actually encounter

Beyond the academic typologies, four moats matter most in practice:

**1. Distribution moat.**
You reach customers your competitors can't. Microsoft Office has this with Windows. Google has this with Chrome and Android. Meta has it with the social graph. Whoever owns the customer relationship has the moat.

**2. Data moat.**
Your data is unique and improves your product in ways competitors can't match. Google's search data improves search. Tesla's driving data improves autopilot. This moat is contingent — if your data lead doesn't compound or competitors find substitutes, the moat dissolves.

**3. Switching cost moat.**
Customers paid setup, training, integration costs to use you and would have to repay them to leave. Salesforce has this. Microsoft Excel has it (years of macros and personal habits). The moat is real but eventually erodes if a competitor offers 10x value.

**4. Brand and trust moat.**
Customers trust you for high-stakes work and don't trust unknowns. McKinsey has this. Goldman has it. Apple has it. The moat is durable but takes decades to build.

For your product, ask: which moats do we have today? Which can we build? How are we investing in moat-building, or are we just acquiring users without compounding advantages?

This is the strategic question Big Tech PMs are evaluated on at L5+. If you can produce a credible answer for your product, you're operating at that level.

### What strategy interviews actually test

Going to commit to specifics here, because the brief asked.

When a Big Tech interviewer asks a strategy question — "Should Spotify enter podcasts?" or "How would you think about Gmail's strategy in the AI era?" — they are *not* primarily testing whether you reach the right answer. They are testing:

1. **Can you decompose the question into the right sub-questions?**
2. **Can you propose a structured approach to each?**
3. **Can you identify the 2-3 most important variables and reason about them?**
4. **Can you commit to a recommendation under uncertainty?**
5. **Can you articulate what would change your recommendation?**
6. **Are you adversarial with your own logic?**

The exceptional candidate names a strategic frame the interviewer hadn't considered. The strong candidate uses standard frames well. The weak candidate either rambles or applies the wrong frame mechanically.

The frames worth knowing for strategy interviews:
- Where to play / how to win (Lafley & Martin).
- Diagnosis / policy / actions (Rumelt).
- 7 Powers (Helmer).
- Five Forces (Porter).
- Innovator's Dilemma framing (Christensen).

Don't memorize them shallowly. Pick 2-3, study deeply, use them as primary frames. Be ready to switch when the question demands.

We'll do worked answers in Part 24.

## 4.8 Second-order strategic thinking

This was a brief item. Here it is in full.

Most strategy thinks one move ahead. "If we do X, Y will happen." Second-order thinking asks: "And then what?"

### The structure

For any strategic move, ask:

- **First-order effect:** What happens immediately?
- **Second-order effect:** What does the first-order effect cause?
- **Third-order effect:** What does the second-order effect cause?
- **What competitors do:** How does the competitor respond, and what does that response cause?

Most PMs stop at first-order. The strongest stop at third or further.

### Worked example: a price increase

You're considering raising your B2B SaaS pricing by 30%.

**First-order:** Revenue per customer goes up 30%. Some customers churn. Net revenue effect depends on churn rate.

**Second-order:**
- The customers who churn are the price-sensitive ones, who are also the ones who complained most. Customer support load decreases.
- Sales cycles lengthen because the price now requires more justification.
- Sales reps push back internally; some leave for competitors.
- New-user acquisition slows because the price is now a bigger barrier.
- Marketing copy must be rewritten to justify the new price.

**Third-order:**
- Slower acquisition + lower churn rate may produce a more profitable but smaller customer base.
- Competitors seize the price-sensitive segment you abandoned.
- Over 18 months, your company becomes "the premium option," repositioning the brand.
- This positioning either compounds (you become the trusted enterprise choice) or backfires (you become irrelevant outside top accounts).

**Competitor response:**
- A direct competitor lowers prices to capture your displaced customers, accelerating their growth.
- Or: they follow you up, validating the new price floor and improving the category economics for everyone.

The first-order thinker says "+30% pricing = +X% revenue." The second-order thinker realizes the move sets in motion 5-7 dynamics that compound over years and may flip the sign of the long-term outcome.

### Worked example: launching a free tier

You're considering launching a free tier of your B2B SaaS.

**First-order:** Many more signups. Acquisition CAC drops because free is shareable.

**Second-order:**
- Free users consume support resources without paying.
- Some free users stay free forever; conversion rate is well below 100%.
- Some paying customers downgrade to free if free is generous enough.
- The brand now associates with "free," which may damage premium positioning.
- Customer success team must triage between paid and free attention.

**Third-order:**
- Free tier creates a viral loop only if free users invite others.
- If conversion is healthy, you've built a self-funding acquisition machine.
- If conversion is poor, you've added permanent costs without permanent revenue.
- Competitors must respond — either match free, or differentiate as "premium-only."

**The strategic question becomes:** Is our free tier carefully designed for high free→paid conversion (e.g., gated at usage points where value is clearly demonstrated)? Or is it a generic "free for individuals" tier that hemorrhages value? The difference is everything.

### How to develop the second-order muscle

Three habits:

**Habit 1: When a decision is proposed, write out the consequence chain.**
Don't just evaluate the proposal. Write 5 lines of "what happens next." Then 5 lines of "what happens after that." Most teams skip this and pay for it later.

**Habit 2: Watch a decision someone else made play out.**
Pick a public strategic decision (a Stripe pricing change, a Google product shift). Track it over 12-24 months. Did the second-order effects you predicted occur? What surprised you?

**Habit 3: Read history.**
Strategic decisions in industries you don't work in are great training. The decisions are far enough away that you can be objective. Books like *The Innovator's Dilemma*, *Only the Paranoid Survive*, and *Stratechery* archives offer dozens of case studies in second-order dynamics.

## 4.9 Long-term vs short-term bets — the 70/20/10 portfolio

A strategic frame Google formalized internally and made public via Eric Schmidt and Jonathan Rosenberg.

**70% of resources to core business.** What pays the bills today.
**20% to adjacent bets.** Things that extend the core into nearby markets.
**10% to wild bets.** Things that might transform the company or fail spectacularly.

This is a portfolio frame, not a strategy. But it forces a discipline: you have to allocate. You have to name what's in each bucket. Most companies can't.

### What goes wrong with this frame in practice

- Most companies are 95/5/0 — almost everything is core, a tiny bit adjacent, nothing wild. They mistake this for "focus" but it's actually risk aversion that produces stagnation.
- Some companies are 30/40/30 — too much wild, not enough core. Looks like innovation; produces incoherence.
- Few companies maintain the discipline of 70/20/10 over years. The temptation to dilute is constant.

For your team or product, ask: where does our resource allocation fall on this spectrum today? Is that what we want?

### A PM-specific application

For your roadmap quarter, plot your initiatives:

- **Core:** Improvements to existing flows that drive existing metrics.
- **Adjacent:** Extensions into new use cases or segments.
- **Wild:** Experimental bets that might transform the product or fail.

If 100% of your roadmap is core, you're optimizing toward a local maximum and will eventually be disrupted by someone bolder. If 50%+ is wild, your existing customers will not get the basic improvements they need and will churn.

The discipline of allocating roadmap quarters across this 70/20/10 frame produces better strategic balance than most PMs achieve by intuition.

## 4.10 Roadmaps — strategy translated to plans

A roadmap is the time-sequenced plan of what your team will work on, derived from strategy.

A good roadmap:
- Is grounded in strategy (each item maps to a strategic priority).
- Is outcome-oriented (each item has an intended impact).
- Acknowledges uncertainty (commitments tighten as items approach).
- Communicates with the right precision to each audience.

A bad roadmap:
- Is a list of features without strategic context.
- Promises specific dates 12+ months out (usually broken).
- Treats every item as equal.
- Reads identically to executives, customers, and engineers.

### The Now / Next / Later structure

Modern roadmap formats avoid date-promising for far-future items. The Now / Next / Later frame:

- **Now:** Currently in development. Specific commitments.
- **Next:** Up next, in scoping. Directional but flexible.
- **Later:** Identified priorities for the future. Subject to change.

Each band has decreasing certainty. Stakeholders who want exact dates can have them for the Now items. They cannot have them for Later items, and that's correct.

### The roadmap-strategy tension

Roadmaps that don't trace back to strategy become feature-factory output. Strategies that don't trace forward to roadmaps become aspirational documents that nobody acts on.

The link is explicit. Every roadmap item should map to a strategic priority. Every strategic priority should appear in the roadmap.

This sounds obvious. It is rarely done well. The discipline is to maintain both documents in sync — when strategy changes, roadmaps change; when roadmaps slip, you ask whether strategy has moved.

## 4.11 OKRs — used right, not just used

OKRs (Objectives and Key Results) are the most over-deployed strategic tool in tech. Many teams use them; few use them well.

### What OKRs do well

OKRs are a tool for aligning teams to outcomes (not outputs). The Objective is a qualitative direction. The Key Results are 2-4 quantitative measures that, if hit, mean the Objective was achieved.

Done right, OKRs:
- Force outcome thinking ("did the metric move?" rather than "did we ship?").
- Surface tradeoffs (you can't optimize 4 KRs if they conflict).
- Cascade direction ("here's what matters to the team next quarter").

### What OKRs do poorly

In practice, most OKRs fail because:

- **They become feature commitments dressed up as KRs.** "Ship feature X" is not a KR; it's a deliverable. The KR should be the outcome the feature is supposed to drive.
- **Teams set sandbagged KRs they're 99% sure to hit.** Real OKRs are stretchy — you should expect to hit ~70% of them.
- **OKRs are set top-down without team input,** producing buy-in problems.
- **OKRs are set and forgotten.** No mid-cycle review. No retrospective.
- **Every quarter has the same OKRs.** The team isn't learning.

### A better operating cadence

Quarterly OKR setting + monthly review + quarter-end retrospective. The retrospective should ask:

- Did we hit our KRs?
- If yes, were they too easy?
- If no, was the KR wrong, the strategy wrong, or the execution wrong?
- What changes in next quarter's OKRs?

This is the discipline of using OKRs as a learning system, not a performance metric.

## 4.12 Strategy evaluation — the rubric

When evaluating any strategy (your own or someone else's), score on 8 dimensions:

1. **Diagnosis quality.** Specific, falsifiable, evidence-grounded?
2. **Policy clarity.** Does the policy say no to things?
3. **Action coherence.** Do the actions reinforce each other?
4. **Resource allocation.** Are resources actually moving?
5. **Falsifiability.** Could this strategy be wrong, observably?
6. **Sacrifice acknowledgment.** What are we giving up?
7. **Time horizon.** Is the horizon realistic for the actions proposed?
8. **Risk acknowledgment.** Are the top 3 risks identified, with mitigations?

Score each 1-5. Total of 32 possible. Above 28 is excellent strategy. Below 18 is theater.

Apply this rubric to your company's current strategy. Be honest. The score is data about your environment.

## 4.13 Mini case studies — strategic moves analyzed

Five mini-cases, each illustrating a strategic principle.

### Case 1: Netflix's pivot from DVDs to streaming (2007-2011)

Netflix's DVD-by-mail business was profitable. Streaming was risky. Reed Hastings made the strategic call to invest aggressively in streaming, accepting near-term margin compression for a long-term shift.

**Diagnosis:** Physical media is going to die. The company that becomes the streaming leader will own the next decade.

**Policy:** Cannibalize our profitable DVD business by promoting streaming, even at the cost of short-term margins.

**Actions:** Invest in streaming infrastructure. Negotiate streaming rights. Eventually split DVD into Qwikster (failed). Then commit fully to streaming.

**Sacrifice:** Stock price (briefly tanked). Some customer relationships (those who preferred DVDs).

**Outcome:** Netflix dominates streaming for a decade. The DVD business gradually winds down. The bet pays off enormously.

**Lesson:** Sometimes the right strategy is to cannibalize a profitable business before someone else does. The company that disrupts itself wins the next era. Most companies can't do this because internal politics protect the cash cow.

### Case 2: Slack's choice to focus on team workflows (2013-2017)

Slack started as a chat tool inside a failing game company. When the company pivoted, the choice was: be a generic chat app, or focus narrowly on team workflows in tech.

**Diagnosis:** Team chat in tech is broken. Existing tools (HipChat, IRC, email) have specific failures. Tech teams will pay to solve them.

**Policy:** Build for the dev/design/PM team workflow specifically. Optimize every decision for that user.

**Actions:** Integrations with developer tools. Channel-based architecture (versus group DMs). Deep search. Bot ecosystem. Threaded conversations.

**Sacrifice:** Did not chase enterprise IT (initially). Did not build for non-tech teams. Did not localize aggressively.

**Outcome:** Dominated tech team chat. Eventually expanded to non-tech via the same pattern. Sold to Salesforce for $27.7B.

**Lesson:** Picking a narrow segment and serving it ferociously beats trying to serve everyone. The narrow segment becomes the wedge.

### Case 3: Flipkart's COD bet (early 2010s)

Indian e-commerce in 2010 was held back by trust deficit. Customers were afraid to pay online. Flipkart introduced Cash on Delivery (COD) — radical, expensive operationally.

**Diagnosis:** Trust is the binding constraint on Indian e-commerce growth. Until customers trust online sellers, growth will be limited regardless of selection or price.

**Policy:** Solve trust by transferring risk back to the seller — pay only when product arrives and is acceptable.

**Actions:** Build COD logistics. Train delivery teams to handle cash. Accept the cost of returns and unfulfilled orders.

**Sacrifice:** Operational complexity. Working capital requirements. Lower margins per order.

**Outcome:** Unlocked the Indian e-commerce market. Within 5 years, COD was a default. Flipkart established category leadership.

**Lesson:** Sometimes the right strategy is to solve a market-wide constraint, even at high cost, because solving it grows the entire pie and you capture disproportionate share.

### Case 4: Substack's bet on writer ownership (2017+)

Existing publishing platforms (Medium, Forbes, Patreon) gave writers various deals. Most extracted significant value from writer relationships. Substack bet on writer ownership of audience, with platform taking 10% of subscription revenue.

**Diagnosis:** Writers don't trust platforms because platforms historically capture writer audience. A platform that gives writers genuine ownership of their list will attract the best writers.

**Policy:** Make writer ownership of email list non-negotiable. Treat writers as customers, not labor.

**Actions:** Email-first delivery (not just on-platform). Writers can take their list elsewhere. Lower platform take (10% vs Medium's confused model).

**Sacrifice:** Platform-side network effects. Direct platform monetization beyond take rate.

**Outcome:** Top-tier writers (Andrew Sullivan, Glenn Greenwald, Matt Yglesias, etc.) joined Substack. Network effects emerged at the writer-acquisition layer rather than the platform layer.

**Lesson:** Counter-positioning — making a strategic choice the incumbent can't copy without harming itself — is one of the strongest moats. Medium can't make writers as ownership-empowered as Substack does without breaking Medium's model.

### Case 5: Zerodha's no-discount-broker model (2010-2020)

Indian retail brokerage in 2010 was dominated by full-service brokers charging 0.3-0.5% per trade. Zerodha entered with a flat ₹20 per trade, regardless of volume.

**Diagnosis:** Retail traders are overcharged. The full-service broker's cost structure assumes large advisory teams, but most retail customers don't use advisory services. There's a 10x cheaper way to serve them.

**Policy:** Discount brokerage with flat pricing. Build the entire business around low operating costs. Customer self-serves through technology.

**Actions:** Online-only brokerage (no branches). Lean engineering team. Technology-first product (Kite app). No advisory services. Educational content (Varsity) to compensate for absence of advisors.

**Sacrifice:** Market segments needing high-touch advisory (HNIs) — Zerodha didn't serve them initially.

**Outcome:** Became India's largest broker by volume. Disrupted the entire industry. Forced incumbents to launch their own discount arms (none caught up).

**Lesson:** Pricing-as-strategy. When you find a 10x cost-structure advantage, pricing aggressively forces the market to reorganize around your structure.

## 4.14 Practice exercises for Part 4

### Exercise 4.1 — Apply the strategy theater detector

Find a real strategy document — your company's, a public company's annual letter, anything. Score it on the 8-dimension rubric in 4.12. Where does it score below 3? What's missing?

### Exercise 4.2 — Write a Rumelt-style strategy

For your current product or area, write a strategy with: diagnosis (200-300 words), guiding policy (50-100 words), 5 coherent actions, and a "what we are NOT doing" section (50-100 words). The full document should be 600-1000 words.

### Exercise 4.3 — NSM tree

For your product, build the NSM tree. Identify what NSM you'd choose, decompose into 5-10 input metrics, and trace each metric to a team or function that owns it. Identify which leaves of the tree are weak (poorly measured or poorly owned).

### Exercise 4.4 — Second-order analysis

Pick a strategic decision your company made in the last year. Trace first, second, and third-order effects. What surprised the team? What didn't? Where did your team's analysis stop, and what did it miss?

### Exercise 4.5 — Competitive moat analysis

For your product, analyze: which moats (distribution, data, switching cost, brand) do you have? At what strength? Which are you actively building? Which are you neglecting? What would a competitor with $100M say about your moats?

### Exercise 4.6 — 70/20/10 audit

Plot your team's last quarter's roadmap on the 70/20/10 spectrum. Was your allocation deliberate? If not, what would intentional 70/20/10 look like next quarter?

### Exercise 4.7 — Strategy interview practice

Pick a public company. In 30 minutes, answer: "What should this company's strategy be for the next 3 years?" Use the Rumelt structure. After 30 minutes, evaluate yourself against the 8-dimension rubric.

### Exercise 4.8 — Find the strategic sacrifice in five products

For five products you use, identify the strategic sacrifice each company made. What did they give up to focus where they did? If you can't identify the sacrifice, the strategy is either not visible to you or is theater.

## 4.15 If you remember only one thing from Part 4

> **Strategy is sacrifice. Anything that doesn't include explicit sacrifice — what we will not do, who we will not serve, what we are giving up — is not strategy. It is wishful thinking with bullets. The PMs who can produce real strategy are rare. Become one.**

## 4.16 Google Lens — what strategy interviews really test

The strategic question in a Google PM interview is rarely about the right answer. It is about:

1. Can you decompose? Can you identify the 2-3 variables that matter most?
2. Can you commit to a recommendation under uncertainty?
3. Can you articulate the sacrifice your strategy implies?
4. Can you anticipate the second-order effects?
5. Can you defend your strategy against a smart pushback?

Strong candidates produce a recommendation in 5-10 minutes, then spend 20-30 minutes defending and refining it under interviewer pressure. Weak candidates spend 30 minutes "exploring" without committing, and the interviewer has to pull a recommendation out of them.

If you do nothing else for strategy interview prep: practice committing to a recommendation early, then defending it. The discomfort of committing is the signal you're growing.

---

*End of Part 4, v2.*


\newpage


