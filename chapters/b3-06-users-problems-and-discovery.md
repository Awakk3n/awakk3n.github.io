---
id: C06
title: Users, Problems and Discovery
tier: 1
competencies: [discovery, product-sense]
prerequisites: [C02]
defines_terms: [problem-statement, jobs-to-be-done, user-segment, say-do-gap, persona]
uses_terms: [guardrail-metric, product-thinking, first-principles-reasoning, tradeoff, reversible-decision, inversion, second-order-effect, sunk-cost, mece, hypothesis, root-cause, symptom, five-whys, framework-theater, metric, funnel, activation, retention, cohort, goodharts-law, estimation, sensitivity-analysis, confidence-interval, base-rate, experiment, mvp, assumption]
frameworks: [FW-C06-01, FW-C06-02, FW-C06-03, FW-C06-04, FW-C06-05, FW-C06-06, FW-C06-07, FW-C06-08]
case_studies: [CS-C06-01 (Illustrative), CS-C06-02 (Verified)]
cross_refs_out: [C01, C02, C03, C05, C07, C08, C09, C10, C12, C14, C15, C16, C25, C26, C31, C33]
cross_refs_pending: []
status: draft
---

# C06 — Users, Problems and Discovery

## 1. What interviewers test

The skill is understanding people well enough to decide what is worth building: who they are, what they are trying to do, where it goes wrong, and how sure you are. C02 trained you to decide with the cost visible, C03 to structure a question, and C05 to measure. This chapter supplies the inputs that make the rest worth anything, because a well-structured, well-measured decision about the wrong problem is still wrong.

**Where it shows up.** `Inferred` from the round structures candidates commonly report: the user and pain-point steps of every product design and improvement answer (C07, C08), the "how would you research this?" prompt, behavioral questions about how you learned what users needed, and follow-ups such as "how do you know users want that?" On the job it appears in every conversation that begins with "customers keep asking for...", in interviews and survey design, and in every spec that has to say why.

**What is scored.** Google has long published a stated philosophy that begins with focusing on the user `Public` `[V: Google, Ten things we know to be true]`, and it publicly lists role-related knowledge among its hiring attributes `Public` `[V: summaries citing Google's how-we-hire page; Google re:Work structured-interviewing guide]`. Amazon publishes Customer Obsession as a leadership principle `Public` `[V: Amazon's Leadership Principles page, amazon.jobs]`. Microsoft has publicly described being customer-obsessed as part of its culture `Public` `[V: Microsoft careers culture page]`. In practice, interviewers listen for whether your user is specific, whether your evidence is behavior rather than opinion, and whether you can say what research can and cannot tell you `Inferred`. Five observable behaviors:

1. You separate the problem from the solution and from the feature.
2. You segment users by need and behavior and choose a segment by a stated criterion.
3. You choose a research method to fit the question, and name its biases.
4. You write the problem so that a team could act on it, without naming the solution.
5. You design the cheapest test of your riskiest assumption and say what would change your mind.

**The failure this prevents.** Five patterns cost candidates and new PMs: demographic users ("college students"), taking requests at face value, trusting what people say they would do, a research plan that is only "run a survey," and discovery that never ends in a decision.

## 2. The concept from first principles

### C06.1 What a user problem is: problem versus solution versus feature

A **user problem** is an unmet need, friction or goal of a specific person in a specific situation. It has three layers that people constantly confuse (FW-C06-01):

| Layer | What it is | Example |
|---|---|---|
| Problem | The need or friction | "I can't find a file I saved last week" |
| Solution | A way to meet it | Search |
| Feature | A specific implementation | A search bar with filters and recent items |

Requests almost always arrive as features ("add a filter," "give us a dashboard," "we need an app"). The PM's first move is to step up the ladder: what is this person trying to do, what is in the way, and what are they doing about it today? [[product-thinking]] from C02 applies directly: solutions are cheap to generate and expensive to build, and the problem is what lets you choose among them.

**Stepping up the ladder.** Ask: "What are you trying to get done?" "What happens when you try?" "What do you do instead today?" "What would change if it were solved?" The [[five-whys]] (C03) is a useful discipline, with a caution: asked as an interrogation it feels like one, so phrase it as curiosity about the last time it happened.

**Why it works.** The problem constrains the solution space and survives changes in technology, while a feature request reflects the requester's current imagination and tools. Two different requests ("add a filter," "let me save searches") may turn out to be the same problem, and two identical requests may be different problems.

**When not to use it.** When the request is a plain defect, or the solution is obvious, cheap and reversible, spending a week to find the "real problem" is waste ([[reversible-decision]], C02). Power users who ask for a keyboard shortcut usually know exactly what they want.

> **Counterexample.** A team treats every request as a symptom of a deeper need and builds elaborate discovery for each. A customer asks for a column in an export. The need is that the column is missing; there is no deeper job. Stepping up the ladder is a tool for requests that could be met in several ways. When one way is clearly the answer, take it and move on.

**Hidden risk.** Reframing can become a way to avoid saying no politely, or to impose your favorite solution. Check the reframed problem with the requester: "Is that what you are trying to do?"

### C06.2 Segmenting users by need, behavior and context

A **user segment** is a group of users defined by shared needs or behavior that matter to the decision at hand. [[user-segment]] is the unit of every product answer, because "users" is rarely one group. A product for "everyone" is usually good for no one in particular.

**Cut by need, behavior and context, not by demographics.** "Women aged 25 to 34" says nothing about what they want. "Weekly commuters who change routes often" does. Demographics are useful only when they correlate with a need (language, accessibility, regulatory status, household size for a family product).

| Basis | Example segments |
|---|---|
| Need or job | People planning a trip; people dealing with a delay |
| Behavior | Daily users; occasional users; lapsed users |
| Context | On a phone with a poor connection; at a desk; in a car |
| Experience | First-time; expert |
| Stakes | Casual; professional or high-stakes |

**Choosing a segment.** FW-C06-02 gives a scorecard. Four criteria cover most decisions: the size of the segment, the intensity of its pain, whether you can reach it, and whether you have a reason to win with it (strategic fit and capability). Say the criterion out loud, and say what you give up.

**Extreme users.** People at the edges (a heavy user, a person with a disability, someone with a poor connection) often reveal needs that average users share more mildly. Studying them is a design practice associated with IDEO `[V: IDEO.org, The Field Guide to Human-Centered Design, 2015: method Extremes and Mainstreams; IDEO Design Kit]`, and it is a cheap way to see a problem sharply.

**Why it works.** A narrow, well-understood segment gives a team something to design for and to measure. It also gives you a hypothesis to test: do this segment's behaviors differ in the way I think?

**When not to use it.** When the need really is universal and the segments differ only in degree (a payment confirmation message), segmentation adds ceremony.

> **Counterexample.** Demographic segmentation does the right job when need follows demographics. A banking app for people who do not read the local language is a demographic-defined problem (language). Accessibility for blind users is defined by a condition. Segment by need and behavior as the default, and by demographic when the need requires it.

**Hidden risk.** Segments that are too narrow to matter or too broad to act on. Test: could you name five real people in it, and could a team design differently for them?

### C06.3 Jobs to be done

**Jobs to be done** is a lens that describes the progress a user is trying to make in a situation, which the product is hired to help with. [[jobs-to-be-done]] shifts attention from who the user is to what they are trying to accomplish, and from the product to the alternatives they would use instead. It is associated with Clayton Christensen's work and with Anthony Ulwick's outcome-driven approach `[V: Christensen, Hall, Dillon and Duncan, Harvard Business Review, September 2016; Ulwick's firm, Strategyn, on outcome-driven innovation]`.

**The job statement.** A common format: "When [situation], I want to [motivation], so I can [expected outcome]." For example: "When I'm on a long train ride with no signal, I want something to listen to that I picked earlier, so I can pass the time without stress."

**Three dimensions.** A job has a functional side (get from A to B), an emotional side (feel in control) and a social side (look prepared in front of a manager). Products often win or lose on the emotional and social sides.

**Competing solutions.** The alternatives to a product are whatever else gets the job done, including doing nothing and workarounds. A spreadsheet is a competitor to project-management software, and a long walk may be a competitor to a taxi.

**An often-cited illustration.** Christensen and colleagues have described a fast-food chain's milkshake that was "hired" for a long, boring morning commute, a job different from the one a dessert milkshake does (published accounts include Christensen, Cook and Hall, "Marketing Malpractice," *Harvard Business Review*, December 2005, and the book *Competing Against Luck*, 2016 `[V: HBS Working Knowledge, "Clay Christensen's Milkshake Marketing"; Competing Against Luck excerpt; HBS case note citing the 2005 HBR article]`). The story is a reminder that the same product can be hired for different jobs, which changes what a better product looks like.

**Why it works.** Jobs are stable over time while solutions change, and they surface competition and context that segment descriptions miss.

**When not to use it.** When the job is trivially obvious or too abstract to guide a decision. "Help people be happy" is a job statement that tells a team nothing.

> **Counterexample.** A team writes the job for a note-taking app as "help people be productive." Every feature fits and no decision follows. A sharper statement ("when I leave a meeting, I want to capture the three decisions and who owns them, so I can follow up without rereading everything") rules features in and out. If a job statement would justify any feature, it is too abstract.

**Hidden risk.** Jobs written from the desk are guesses. A job statement is a hypothesis until interviews or observation support it.

### C06.4 Personas and journey maps: use and misuse

A **persona** is a composite profile of a user type used to align a team. [[persona]]s help when a team disagrees about who the user is, and when each persona is built from research and ties to behaviors and decisions. They fail when they are invented in a workshop, decorated with a stock photo and a hobby, and then ignored, or when they encode stereotypes. A "proto-persona" written from assumptions is acceptable only if labeled as a hypothesis to test.

A **journey map** lays out a user's path to an outcome in stages, with what they do, think and feel, and where the friction is, so a team can see moments of pain and opportunity. Build it from observation or interviews. Mark what is known and what is guessed.

| Stage | Awareness | Consideration | First use | Ongoing use | Problem |
|---|---|---|---|---|---|
| Actions | | | | | |
| Thoughts | | | | | |
| Emotion (high, low) | | | | | |
| Pain points | | | | | |
| Opportunities | | | | | |

**Why they work.** They make a shared picture of a person or path visible, so a team argues about the same thing.

**When not to use them.** When the team already shares a clear picture, or when producing the artifact substitutes for talking to users. A pretty map with no research behind it is decoration.

> **Counterexample.** A team spends three weeks creating polished personas for a feature used by 40 customers it knows by name. The personas add nothing the team does not already know. Personas earn their cost when many people must act on a shared understanding of users they cannot all meet.

**Hidden risk.** An artifact can freeze an early guess. Update personas and maps when research changes them, and date them.

### C06.5 Qualitative research: interviews and observation

Qualitative research answers "what is going on and why?" in depth, with a small number of people. It generates hypotheses; it does not measure how common something is.

**Interviews.** FW-C06-04 gives a guide. The rules that matter most:

1. **Ask about the past, not the future.** "Tell me about the last time you planned a trip" produces evidence. "Would you use an app that planned trips?" produces a polite guess. This is the core idea of Rob Fitzpatrick's *The Mom Test* (2013) `[V: CreateSpace Independent Publishing Platform, 10 September 2013, ISBN 9781492180746]`.
2. **Ask open questions, and do not lead.** "What did you do next?" not "Was that frustrating?"
3. **Follow the specifics.** "Show me." "What happened then?" "Why was that a problem?"
4. **Look for workarounds.** What people build for themselves (a spreadsheet, a sticky note, a group chat) is evidence of a real problem that they care about enough to fix.
5. **Listen more than you talk,** and tolerate silence.
6. **Do not sell.** If you pitch your idea, you will hear polite agreement.

**Observation.** Watching people do the task, in their own environment, shows what they do not say: steps they skip, tools they use, workarounds they have stopped noticing. Contextual inquiry, shadowing, diary studies and reading support tickets are all forms of it.

**A well-known illustration.** Airbnb's founders are widely reported to have gone through New York listings with Paul Graham in 2009, seen that the photos were poor, flown to New York and replaced the photos themselves, after which bookings rose (accounts differ on the size of the rise) `[V: First Round Review account of Airbnb's early growth, as quoted; Paul Graham's essay on doing things that don't scale was not opened]`. The lesson commonly drawn is that looking closely at real listings, and then fixing the problem by hand before building anything scalable, revealed a problem that aggregate metrics had not.

**How many people.** For finding usability problems with a design, a small number of testers finds most of the repeated problems (a rule of thumb from Jakob Nielsen's work `[V: Nielsen and Landauer, 1993; Nielsen, Why You Only Need to Test with 5 Users (2000): about 85% of problems]`). For understanding needs across several segments, plan more: enough in each segment that new interviews stop producing new themes (saturation). Six to eight interviews per segment is a common starting point, not a rule `Inferred`.

**Analysis.** Write each observation on its own note, group similar notes (affinity mapping), name each group, and count how many participants support each. Distinguish what people did from what they said.

**Biases.**

- *Confirmation:* hearing what you hoped. Defense: write the hypotheses you would reject before you start.
- *Social desirability:* people say what sounds good. Defense: ask about specific past events.
- *Interviewer effects:* your tone and questions shape answers. Defense: script open questions, review recordings.
- *Sampling:* the people who agree to talk differ from those who do not. Defense: recruit for the segment, including lapsed users.

**When not to use it.** To size anything. Five interviews cannot tell you how many users share a problem.

> **Counterexample.** A team interviews eight enthusiastic customers and concludes "users want custom reports." The eight were recruited through the account manager who sells reports. They are not a sample of the segment. Qualitative research finds what to look at; it needs a representative recruit and, to size the finding, quantitative evidence.

> **Regional Lens: India.** India's Constitution lists 22 scheduled languages, and participants may be far more at ease in one of them than in English. Run interviews, screeners and surveys in the participant's own language, with a moderator or interpreter who speaks it, and test a translated script aloud, because a translated question can change its meaning `Inferred`. Consent is a language question too: India's data protection law requires that a notice, and a request for consent, can be accessed in English or any of those 22 languages (sections 5(3) and 6(3) of the Digital Personal Data Protection Act, 2023) `[V: the Act's text as reproduced by dpdpa.com and law-firm summaries]`, with its main obligations due from 13 May 2027 (see the Dates box in C01), so offer a research consent form the same way. Read the current rules yourself at the time you read this book `[as of 2026-10]`.

### C06.6 Quantitative research: surveys, analytics, sampling and bias

Quantitative research answers "how many, how much, how often?" It measures prevalence; it does not explain why.

**Analytics** show what people did, at scale: where they stop in a funnel, how often they return, which features they use ([[funnel]], [[retention]], C05). They are strong on behavior and silent on reasons. Pair them with interviews that explain the numbers.

**Surveys** ask many people the same questions. FW-C06-05 is a checklist. Principles:

- Start from the decision: what will you do differently depending on the answers?
- One idea per question; neutral wording; balanced answer options (avoid "How great was..."); include "don't know."
- Ask about behavior ("how many times did you order last month?") more than intention ("will you order more?").
- Put sensitive and demographic questions last. Keep it short; length lowers completion.
- Pilot it with five people before sending.

**Sampling and non-response.** Who answers is not who exists. A survey sent to current users misses people who left (survivorship, [[base-rate]] and related ideas in C12). People who respond are often those with strong opinions. State who is missing and which way it biases the result.

**Margin of error.** For a proportion from a random sample, the 95% margin of error in the worst case is about 1 divided by the square root of the sample size. With 400 responses it is about ±5 percentage points, with 1,000 about ±3, and with 100 about ±10. A 52% versus 48% split on 400 people is not a difference you can act on. The reasoning is developed in C12 ([[confidence-interval]]).

**Combining methods.** Use qualitative work to find what to ask, quantitative work to size it, and behavioral data to check what people said. When they disagree, the behavior usually wins (C06.7).

**When not to use surveys.** When you do not yet know the right questions (use interviews), when the audience is tiny, or when behavior is observable (look at the data instead).

> **Counterexample.** A team sends a 30-question survey to 200 customers to "see what they want." The response rate is 12%, the answers are a mix of wishes and complaints, and nobody can say what decision they inform. A survey without a decision and a question set grounded in prior interviews produces numbers and no direction.

### C06.7 The say-do gap, and signal versus noise in feedback

The **say-do gap** is the difference between what people say they do or want and what they actually do. [[say-do-gap]] is the reason intentions are poor evidence. People say they would pay, exercise, read the terms, and use the new feature, and then do not.

**Causes.** People want to be agreeable; they cannot predict their own future behavior; they remember badly; they do not know what drives their choices; and hypothetical costs feel lighter than real ones.

**Narrowing the gap.**

- Prefer **behavior to statements**: what they did, not what they plan to do (revealed preference).
- Ask about **specific past events**, not general habits or future intentions.
- Use **commitment tests**: something that costs the user a little (an email address, a deposit, a pre-order, ten minutes) is a stronger signal than a stated intention.
- **Triangulate:** compare interviews, a survey and the data. Where they disagree, ask why.
- **Discount stated intentions** with an explicit factor when you must use them, and test the factor.

The say-do gap is large for future behavior and hypotheticals and small for simple facts (device, role, team size) `Inferred`. Do not discard everything people say; discount the right things.

**Signal versus noise in feedback.** Not all feedback is equally informative. Each source has a bias.

| Source | What it tells you | Bias |
|---|---|---|
| Support tickets | Problems that blocked someone | Misses silent frustration; over-represents bugs |
| App-store or public reviews | Strong reactions | Extremes; small share of users |
| Sales and lost-deal notes | Objections in buying | Second-hand; rationalized reasons |
| Social media and forums | Vocal communities | Not representative; loud is not many |
| Power-user requests | Needs of the heaviest users | Not typical of new or casual users |
| Interviews | Depth and reasons | Small samples |
| Behavior data | What happened at scale | Does not explain why |

**Weighting.** Weigh feedback by how many people in the target segment, how severe, and how consistent across sources (FW-C06-06). One loud customer is a data point; the same issue in tickets, interviews and behavior is a pattern.

**The test.** Ask: "What would make me change my mind?" If nothing would, you are collecting evidence for a conclusion you already hold.

> **Counterexample.** A team discounts all survey responses because of the say-do gap and ignores a clear complaint pattern in support tickets. The complaint is about something that already happened to users, so it is behavior, not intention. The gap applies to predictions about the future; reports of past problems are good evidence.

### C06.8 Writing a problem statement a team can act on

A **problem statement** is a short description of who has what problem in what context and why it matters, written without a solution. [[problem-statement]] is the written output of discovery. It aligns a team on what to solve before it argues about how.

The template from C02 (FW-C02-01) has five rows: who, what happens today, why it matters, evidence, and what is not the problem. A statement built from it reads: "New users who sign up from a mobile ad abandon setup at the permissions screen because they cannot see why the app needs access, so only 41% reach a first lesson." (All figures in this chapter's examples are invented.)

**Tests for a good statement.**

1. **It names a specific segment and situation.**
2. **It describes behavior or an observable outcome,** not a feeling alone.
3. **It states the impact,** ideally as a [[metric]].
4. **It cites the evidence and how strong it is.**
5. **It contains no solution words.** If it uses "needs a wizard" or "should have a button," it is a solution in disguise.
6. **It is solvable at the team's level:** not so broad ("improve onboarding") that nothing follows, and not so narrow that it is one option.

| Weak | Why | Strong |
|---|---|---|
| "Users need a better dashboard" | A solution; no user or evidence | "Account managers preparing a monthly review spend about two hours copying figures into slides, and 6 of 8 interviewed do it by hand" |
| "Onboarding is confusing" | A judgment; no segment | "First-time admins at companies under 50 people stop at the integration step; 38% finish setup within a week, against 70% for larger accounts" |
| "We should make it social" | A solution | "Learners who study alone lapse after three weeks; those who study with a friend are more likely to continue (a correlation to test)" |

**When not to use it.** For a cheap, reversible, obvious change; the statement would be longer than the fix.

**Hidden risk.** A statement can be polished and wrong. Write the evidence line honestly, including "low confidence: two interviews."

### C06.9 The cheapest test that could falsify the riskiest assumption

Every idea rests on assumptions. A **hypothesis** from C03 states one in testable form. The discipline is to find the assumption that is both important and uncertain, and to test it as cheaply as possible, in a way that could prove you wrong. FW-C06-07 is the routine. (The wider practice of assumption mapping and the minimum viable product is in C15.)

**Four kinds of assumption** (a widely used grouping in design and product practice): desirability (do people want this?), usability (can they use it?), feasibility (can we build it?) and viability (does it work for the business?). Many failed products had a desirability assumption that was never tested `Inferred`.

**Cheap tests, from least to most costly.**

| Test | What it measures | Example |
|---|---|---|
| Conversation | Whether the problem is real and how people cope today | Eight interviews about the last time they did the task |
| Fake door or smoke test | Whether people take a step toward it | A button for the feature that leads to a "coming soon" page with a sign-up |
| Landing page | Interest from a defined audience | A page describing the offer and counting sign-ups |
| Concierge test | Whether the outcome is valued, delivered by hand | Coordinating ten group orders manually |
| Prototype test | Whether people can use the design | Five people complete tasks on a clickable prototype |
| Pre-order or deposit | Willingness to pay | A deposit or a refundable pre-order |

**Rules.** Choose the assumption whose failure would sink the idea. Write the success criterion before the test ("at least 6 of 10 complete a group order with three or more people"), because criteria set afterwards bend toward the result. Decide what you will do in each outcome. Prefer tests that measure behavior over opinion.

**When not to test.** When building is cheaper than testing and the change is reversible ([[reversible-decision]], C02), or when a decision does not depend on the result.

> **Counterexample.** A team runs a three-week fake-door test for a button that takes half a day to build and can be removed with a flag. The test cost more than the experiment would have. Reserve tests for assumptions that are expensive to be wrong about.

### C06.10 Working with researchers

User researchers are specialists in studying people. Treat them as partners in framing the question, not as a service that produces slides after you have decided.

**What researchers contribute.** Framing the question; choosing the method; recruiting the right participants; moderating without leading; analyzing; and telling you what the evidence cannot support.

**Types of research they run:** generative (what problems exist), evaluative (does this design work), survey-based (how common), and behavioral analysis. Experiments (C14) are different, and are usually run with data science.

**Where PMs go wrong.**

- Asking for research to confirm a decision already made.
- Joining after the questions are fixed.
- Generalizing from five interviews.
- Treating a quotation as a finding.
- Hoarding the results instead of sharing the decision they changed.

**A good partnership.**

1. Involve the researcher before the question is set. Write the research questions together, and the decision each informs.
2. Attend sessions. Watching a person struggle is worth more than reading a summary of it.
3. Agree up front what would change the plan.
4. Share what you decided and why, so the researcher sees the effect.
5. Respect the limits they name.

Where a company has no researcher, run the same discipline yourself: write the decision and the questions first, use neutral prompts, and record sessions.

## 3. Frameworks

Eight frameworks, set out below. The problem-definition template in C02 (FW-C02-01) and the hypothesis card from C03 (FW-C03-04) are reused rather than repeated.

#### FW-C06-01 · The three-layer ladder · Original

- **Inputs:** a request, complaint or idea stated as a feature or solution.
- **Outputs:** the problem (need, situation, workaround), the solution class, and the feature, with the problem stated separately.
- **Assumptions:** you can reach the person or evidence about their situation; the request has a need behind it.
- **Tradeoffs:** understanding versus time; stepping up can feel like deflection.
- **Failure modes:** inventing a deeper problem; reframing to your preferred solution; not confirming the reframing with the requester.
- **Worked example:** "add bedtime mode" in a children's video app steps up to "parents struggle to end screen time without a fight," with several solution classes (Worked example 1).

Steps: (1) write the request verbatim; (2) ask what they are trying to do; (3) ask what happens and what they do today; (4) write the problem in one sentence with no solution words; (5) list two or three solution classes; (6) confirm the problem with the requester.

#### FW-C06-02 · The segment selection scorecard · Original

**Core framework.** Learn this one first.

- **Inputs:** two to four candidate segments and what you know about each.
- **Outputs:** a scored comparison on size, pain intensity, reach and fit, a choice, and what is given up.
- **Assumptions:** you have rough evidence on each criterion; scores can be rough (low, medium, high).
- **Tradeoffs:** a quick scorecard is coarse; weighting hides tradeoffs.
- **Failure modes:** choosing the largest segment by default; scoring to justify a favorite; ignoring reach.
- **Worked example:** for a language-learning app, three segments (students, professionals, retirees) are scored and the app picks professionals preparing for a move abroad (Worked example 2 notes the method; IQ-C06-02 works the full example).

| Segment | Size | Pain intensity | Reach | Fit and right to win | Verdict |
|---|---|---|---|---|---|
| A | | | | | |
| B | | | | | |

State the deciding criterion: "I choose B because its pain is most intense and we can reach it directly, and I give up A's larger size."

#### FW-C06-03 · The job statement and job map · Established

- **Origin:** jobs to be done as developed by Clayton Christensen and colleagues, and Anthony Ulwick's outcome-driven innovation `[V: Christensen and colleagues (HBR 2016); Ulwick's outcome-driven innovation]`; the "When... I want... so I can..." statement format is common in practice.
- **Inputs:** interviews or observations of people doing a task.
- **Outputs:** a job statement (situation, motivation, outcome), the functional, emotional and social dimensions, the steps of the job, the current alternatives, and the struggles.
- **Assumptions:** you can observe the situation and the alternatives people use; the job is stable across solutions.
- **Tradeoffs:** a lens that reveals competition and context, and one that becomes abstract.
- **Failure modes:** an abstract job that justifies any feature; a job written from the desk; ignoring the emotional and social dimensions.
- **Worked example:** "when I prepare the monthly business review, I want to show my VP four numbers and a trend, so I look prepared" for a B2B analytics product (Worked example 2).

Job map steps: define what they are trying to do; locate the information; prepare; confirm; execute; monitor; modify; conclude. Not every job has all eight steps. Use them as prompts.

#### FW-C06-04 · The interview guide · Original

- **Inputs:** a decision to inform, a segment, and recruited participants.
- **Outputs:** a guide, a set of notes, and a theme summary with support counts.
- **Assumptions:** participants can recall specific past events; you can record or take notes.
- **Tradeoffs:** depth versus sample size; flexibility versus comparability.
- **Failure modes:** hypothetical questions; leading questions; pitching; recruiting only friendly users.
- **Worked example:** eight interviews with account managers about the last monthly review produced a pattern of manual slide-building (Worked example 2).

Structure for a 45-minute interview: **Open** (5 minutes: purpose, consent, recording, no right answers) · **Context** (5: role, setting) · **The last time** (15: "Tell me about the last time you did X," then the steps, tools, people, obstacles) · **Struggles and workarounds** (10: what was hard, what they do about it, what they tried) · **Priorities** (5: what would matter most) · **Close** (5: who else to talk to, thanks). Questions to avoid: "Would you use...?", "Don't you think...?", "How much would you pay?"

#### FW-C06-05 · The survey design checklist · Original

- **Inputs:** a decision and a population.
- **Outputs:** a short survey, a sampling plan, an expected margin of error, and a list of known biases.
- **Assumptions:** the right questions are known from prior qualitative work; a reasonable response rate is achievable.
- **Tradeoffs:** length versus completion; precision versus cost.
- **Failure modes:** leading wording; no decision attached; intention questions treated as behavior; ignoring who did not answer.
- **Worked example:** a 400-person survey on willingness to pay gives a headline of 30% with a margin of about ±4.5 points, and a fake-door test shows a much lower real rate (Worked example 3).

Checklist: (1) decision and what changes by answer; (2) population and how you sample; (3) question types, one idea each, neutral, balanced; (4) behavior over intention; (5) order: easy first, sensitive last; (6) length under about 10 minutes; (7) pilot with five; (8) expected response rate and margin of error (about 1 over the square root of the number of responses, in the worst case); (9) who is missing and which way it biases; (10) how you will check against behavior.

#### FW-C06-06 · The feedback weighting table · Original

- **Inputs:** a set of feedback items from several sources.
- **Outputs:** a ranked list of themes with source mix, segment, frequency and severity, and a view of confidence.
- **Assumptions:** you can map each item to a segment and a source.
- **Tradeoffs:** weighting reduces the pull of loud voices and requires judgment.
- **Failure modes:** counting mentions without weighting by segment; treating the loudest source as representative; ignoring consistency across sources.
- **Worked example:** a feature complaint appears in tickets and in interviews and in behavior data and ranks above a louder request that appears only on social media (Exercise EX-C06-07).

| Theme | Sources (tickets, interviews, behavior, social, sales) | Segment | Frequency | Severity | Consistency across sources | Confidence |
|---|---|---|---|---|---|---|

Rule: a theme seen in three or more independent sources and in the target segment outranks a theme seen in one loud source.

#### FW-C06-07 · The riskiest-assumption test · Original

**Core framework.** Learn this one first.

- **Inputs:** an idea and a list of what must be true for it to work.
- **Outputs:** the riskiest assumption, a cheap test, a success criterion written in advance, and a decision for each outcome.
- **Assumptions:** the assumptions can be listed honestly; a cheap test exists.
- **Tradeoffs:** speed versus rigor; a cheap test can mislead if unrepresentative.
- **Failure modes:** testing the safest assumption; criteria set after the result; a test that measures opinion.
- **Worked example:** the two-week group-ordering plan in Worked example 4.

Steps: (1) list assumptions in four groups (desirability, usability, feasibility, viability); (2) rate each for importance (what if false?) and uncertainty (how little do we know?); (3) pick the high-importance, high-uncertainty one; (4) choose the cheapest behavioral test; (5) write the criterion and the decision rule; (6) run, and record what you learned. (C15 extends this into assumption mapping.)

#### FW-C06-08 · The disappointment survey and segmentation engine · Established

- **Origin:** the survey question and the 40% benchmark come from Sean Ellis; the four-step engine (segment, analyze feedback, build the roadmap, repeat) is Rahul Vohra's, described in a First Round Review article (12 November 2018) `[V: First Round Review, 2018]`.
- **Inputs:** users who have had a real chance to use the product (for example, recent active users), and a short survey.
- **Outputs:** the share who would be "very disappointed" to lose the product, the segment who love it, the reasons, and a roadmap that serves them.
- **Assumptions:** the survey reaches users who have experienced the core value; the benchmark is a guide, not a law.
- **Tradeoffs:** a clear number that can be moved and the risk of optimizing a survey score; the benchmark was set on other products.
- **Failure modes:** surveying the wrong users; treating 40% as a threshold that proves anything; ignoring non-respondents.
- **Worked example:** Superhuman's reported move from 22% to a much higher score (CS-C06-02).

Steps as reported: (1) ask "How would you feel if you could no longer use the product?" with "very disappointed," "somewhat disappointed," "not disappointed"; (2) segment the "very disappointed" group to find who the product is for; (3) read what that group loves and what holds back the "somewhat disappointed" users who value the main benefit; (4) build a roadmap that serves both; (5) repeat and track the score.

## 4. Answer architecture

Four question types use this chapter. The user steps inside design answers are covered in C07 and C08.

### Type A: "How would you research X?" or "Plan the discovery"

*Example prompts:* "How would you research why students struggle to find housing near campus?" "How would you understand why people don't use our scheduling feature?"

**Structure**

1. **Clarify the decision** the research will inform and the segment.
2. **State hypotheses** and the riskiest assumption.
3. **Choose methods to fit the question:** qualitative to find, quantitative to size, behavioral data to check (C06.5 to C06.7).
4. **Plan the details:** who to recruit, how many, the questions, and the biases you will watch.
5. **State what you will do with the result:** the decision rule and the criterion.
6. **Close** with the timeline and what would change your mind.

**Time budget for a ten-minute segment**

| Step | Minutes | What to produce |
|---|---|---|
| Clarify the decision and segment | 1.5 | Decision, segment, constraints |
| Hypotheses and riskiest assumption | 1.5 | Two or three hypotheses; the one to test first |
| Methods | 2.5 | Qualitative, quantitative and behavioral, in order |
| Plan and biases | 2.5 | Sample, questions, biases, timeline |
| Decision rule and close | 2 | Criteria written in advance; what changes the plan |

### Type B: "Users want feature X. What do you do?"

Step up the ladder (FW-C06-01): ask what they are trying to do, what happens today, and how often. Segment: who is asking, and are they the target? Weigh the evidence (FW-C06-06): is the need visible in several sources? Offer solution classes, including a smaller one, and choose with a criterion. Close with a cheap test and what would change the decision.

### Type C: "Customers say they'd pay for Y. Do you believe them?"

Name the say-do gap, say how you would narrow it (behavioral evidence, a commitment test), estimate a discount, and size the decision on the discounted figure. Worked in Worked example 3 and IQ-C06-04.

### Type D: "Pick a user segment to build for"

Segment by need and behavior (C06.2), score with FW-C06-02, state the criterion and the segment you give up, and name the evidence you would collect to confirm. A full worked answer is IQ-C06-02.

**Where to signpost.** "The decision this informs is..." "My riskiest assumption is..." "I'd start with interviews to find what to ask, then size it with a short survey, and check against behavior."

**How to close.** One sentence: "I'd run eight interviews and a fake-door test in two weeks, and I'd build only if at least X happens; I would change my plan if Y."

**Pacing rules.** State the decision before methods. Give an order for the methods and a reason. Name at least two biases specific to your plan, and one thing the research cannot tell you. If asked "how many interviews?", answer with a reason (saturation per segment), not a number alone.

## 5. Worked examples

All four examples are `Illustrative`: the products are fictional and every figure is an invented assumption.

### Worked example 1 — Consumer: "add a bedtime mode" in a children's video app (Illustrative)

**The request.** In one quarter, 47 of 3,100 store reviews (invented) ask for a "bedtime mode." The team's first idea is a screen that dims and locks the app after a set time.

**Step up the ladder (FW-C06-01).**

| Layer | Content |
|---|---|
| Feature | A bedtime mode that dims and locks the app |
| Solution class | Limiting viewing at night |
| Problem (to be confirmed) | Parents struggle to end screen time without a fight, especially at bedtime |

**Interviews.** The team interviews eight parents of children aged three to six (invented), asking each about the last time they ended a viewing session at bedtime. Seven describe a recent argument. Their workarounds (they could name several): turning off the home network (five), hiding the tablet (three), setting a phone timer (four). The timer is the telling one. Asked why it did not work, three said the timer ends the video but not the protest: the child needs a warning and a sense of an ending.

**Segment and job.** The segment is parents of children aged three to six who use the app at bedtime. The job statement: "When it is time for bed and my child is mid-video, I want to end the session without a fight, so I can keep the routine calm."

**Reframed problem statement.** "Parents of three- to six-year-olds who use the app at bedtime end sessions by cutting the network or taking the device, because a hard stop causes distress; seven of eight interviewed described a recent argument."

**Solution classes.** A hard lock (the original idea, which matches the workarounds that parents already say cause fights); a gentle wind-down (a visible "last video" countdown and a calm ending animation); a parent schedule with a warning. The wind-down class fits the job better than the lock.

**Cheapest test.** A clickable prototype of the wind-down with five parents, with the criterion written in advance: at least four of five say they would use it tonight and describe how it changes the routine. Metric if built: the share of bedtime sessions that end without the parent intervening, with a [[guardrail-metric]] on session starts.

**What this shows.** The request named a feature; the interviews found a problem and an alternative that the feature would have missed. The reviews were the signal that something existed. They were not a sample, so the interviews did the work.

### Worked example 2 — B2B: "give us custom dashboards" (Illustrative)

**The request.** Twelve of 30 enterprise accounts (invented) ask for custom dashboards in a sales-analytics product. A builder would take a team of six about four months.

**Interviews and observation.** The PM interviews eight account managers who made requests (invented) and watches two of them prepare their monthly review. The pattern: they export four charts to a spreadsheet, tidy them, and paste them into slides for a VP. Six of the eight say it takes about two hours each month. None had tried building a custom view.

**Job statement.** "When I prepare my monthly review, I want to show my VP four numbers and a trend, so I look prepared and don't spend a Sunday on slides." The functional job is a summary; the social job is looking prepared.

**Segment check.** The same requests came from two roles. Managers (who present) want the summary. Analysts (who explore) do want flexible dashboards. They are different segments with different jobs. The requests had been pooled.

**Options.**

| Option | Optimizes | Costs |
|---|---|---|
| A. Dashboard builder | Flexibility for analysts | Four months; managers may never use it |
| B. One-click monthly slide export of the four most common charts | The managers' job | Two weeks; no help for analysts |
| C. Templated monthly summary email | Speed to ship | Less control for managers |

**Decision and test.** Build B first for managers, and test with ten accounts, with the criterion set in advance: at least six use it in their next monthly review. Revisit the builder for analysts with a separate round of interviews.

**What this shows.** Step up the ladder, find that one request hid two jobs, and match the solution to the job. Careful here: eight interviews cannot tell you how many accounts share the job; the ten-account test starts to answer that.

### Worked example 3 — Survey: "Would you pay $10 a month for the premium tier?" (Illustrative)

**Setting.** A productivity app considers a premium tier at $10 a month. It has 100,000 monthly active users (invented). A survey of 400 randomly sampled active users (invented) asks, "Would you pay $10 a month for [description]?" and 30% say yes.

**Margin of error.** For a proportion of 30% from 400 responses, the 95% margin is about 1.96 × the square root of (0.30 × 0.70 ÷ 400) = 1.96 × 0.0229 = about 4.5 points. So the survey says 30%, plausibly 25% to 35%. (The reasoning is C12's.)

**The naive forecast.** 30% of 100,000 is 30,000 payers; at $10 a month that is $3.6 million a year.

**The say-do gap.** Stated willingness to pay is a prediction of future behavior, which is exactly where the gap is largest. A commitment test narrows it.

**A fake-door test.** The app shows the premium offer to 5,000 users (invented) with a real checkout. Of those, 4% click "upgrade" (200 users) and 1.2% complete payment (60 users). The behavior-based rate is 1.2%.

**The corrected forecast.** 1.2% of 100,000 is 1,200 payers; at $120 a year that is $144,000 a year. The survey figure was 25 times too high (30% ÷ 1.2%). The ratio is itself a useful number: for this audience and this offer, stated intention overstated behavior by about 25 times (invented), so future surveys should be discounted by a factor close to that, and tested again.

**Narrowing the uncertainty.** The 1.2% comes from 5,000 exposed users, so it is itself an estimate, with a margin of about ±0.3 points (1.96 × the square root of (0.012 × 0.988 ÷ 5,000) = 0.3%). The range is 0.9% to 1.5%, or $108,000 to $180,000 a year, still nowhere near $3.6 million.

**Decision.** At $144,000 a year the tier will not fund a team. Options: a lower price or an annual plan to test elasticity, a more compelling bundle, or stop. The cheap next test is a price test with the same checkout.

**What this shows.** A survey gave a precise-looking number, and behavior gave a very different one. The commitment test cost two days and avoided planning around a figure 25 times too high.

### Worked example 4 — Research plan: two weeks and no budget for a group-ordering feature (Illustrative)

**Setting.** A food-delivery app is asked whether to build group ordering (a shared cart that several people add to). The team has two weeks and no research budget.

**Assumptions listed (FW-C06-07).**

| Type | Assumption | Importance | Uncertainty |
|---|---|---|---|
| Desirability | Groups regularly coordinate orders and find it hard | High | High |
| Desirability | A shared cart, not a chat, is the right fix | Medium | Medium |
| Viability | Groups order often enough to matter | High | Medium |
| Feasibility | A shared cart is buildable in a quarter | Medium | Low |

The riskiest is the first one: if groups do not struggle, nothing else matters.

**The plan (14 days).**

- *Days 1 to 3: use what exists.* Count orders with three or more items sent to one address at one time. This is 4% of orders (invented), a rough proxy for group orders. Read 100 support tickets (invented) for coordination complaints.
- *Days 3 to 8: eight interviews* with customers who placed large orders in the past month, asking about the last time they ordered for a group.
- *Days 6 to 12: a fake door.* Show a "Start a group order" button to 3% of users who have ordered three or more items, leading to a "coming soon, tell us what you need" page with a short form.
- *Days 10 to 14: a concierge test.* Coordinate ten group orders by hand through messages.

**Criteria, written before the test.** At least five of eight interviewees describe a recent coordination struggle. The fake door gets at least 4% of exposed users clicking. At least seven of ten concierge orders complete with three or more participants.

**Decision rule.** All three met: build a thin version. Two met: iterate on the concept and re-test. One or none: stop.

**What the plan cannot tell us.** How group ordering performs at scale, and whether a built version would match the hand-coordinated experience. It cheaply tests desirability, which is the assumption most likely to be wrong.

**What this shows.** Discovery with a deadline: the riskiest assumption first, several cheap behavioral tests, and a decision rule fixed in advance.

## 6. Baseline, Strong, Standout

**Prompt:** "Your team believes college students struggle to find affordable housing near campus. How would you research it before building anything?"

### Baseline answer

"I'd run a survey of students asking what they want in a housing app, and look at what features competitors have. Then I'd build the features that come up the most."

*What is wrong:* no decision, no segments, one method, intentions treated as evidence, and the result is a feature list.

### Strong answer

"First I'd clarify what decision this informs: whether to build a housing product at all, and for whom. 'Students' are several segments with different needs: first-year students who need on-campus or nearby housing quickly, international students who cannot visit before arriving, and graduate students who want quieter, longer-term places. I'd start with one or two.

"My hypothesis is that the problem differs by segment, and that the biggest pain is trust and speed for those who cannot visit. I'd start with qualitative work: eight interviews per segment about the last time they searched, what they used, where it went wrong and what they did about it. Then I'd size it with a short survey, built from what the interviews showed, to find how common each problem is. And I'd check against behavior, such as how many listings students contact and how long the search takes.

"Before I start I'd write the decision rule: for example, build only if at least a third of the segment reports a serious problem and there is a workaround they already pay for or invest time in."

### Standout answer

Everything in the Strong answer, plus:

"I'd name my riskiest assumption: that students can't find places, rather than that places they can afford don't exist. If the problem is price, a search product will not fix it. The cheapest first check is a conversation: ask people to walk me through their last search, and watch one do it live, because what people skip or tolerate in a search shows more than what they tell me.

"I'm aware of the say-do gap. If students tell me they'd pay for verified listings, I'd test with a commitment: a landing page with real listings and an alert sign-up, and a refundable deposit to hold a viewing slot with a few landlords.

"For bias, if I recruit through the university, I'll over-sample engaged students and miss those who gave up searching, so I'd also recruit through the places they ask for help. Interviews can't tell me how many students have the problem, so the survey does that, and the survey can't tell me why, so the interviews do that.

"Timeline: three weeks to a decision. What would change my plan: if the main pain turns out to be price or landlord behavior rather than search, I would stop and look at a different kind of solution, such as a verified-landlord program."

### What moves an answer up a band

| From Baseline to Strong | From Strong to Standout |
|---|---|
| Names the decision and segments | Names the riskiest assumption and tests it first |
| Uses qualitative, then quantitative, then behavioral evidence | Observes behavior, and uses commitment tests for willingness to pay |
| Writes a decision rule in advance | Names biases specific to the plan and what the research cannot tell |
| Gives a timeline | Says what finding would make you stop |

## 7. Company lens

All claims describe what companies say publicly or what candidates commonly report, not insider knowledge. Interview formats change `[as of 2026-10]`.

> **Company lens: Google [as of 2026-10].** Google has long published a stated philosophy that starts with focusing on the user `Public` `[V: Google, Ten things we know to be true]`. Candidates commonly report that product rounds start with who the user is and what their pain is `Inferred`. Practical consequence: spend your first minutes on a specific user and a ranked problem, not on features.

> **Company lens: Amazon [as of 2026-10].** Amazon publishes Customer Obsession as a leadership principle `Public`, and accounts by former leaders describe the practice of writing a press release and FAQ before building, called working backwards `Public` `[V: Amazon working-backwards material (AWS re:Invent 2022 deck; Fast Company)]`. Practical consequence: state the customer problem in the customer's words and describe the experience you would want them to have.

> **Company lens: Meta [as of 2026-10].** Candidates commonly report product-sense rounds that expect a specific user and a quantified problem, with follow-ups on how you would know `Inferred` `[unverified: candidate-reported]`. Practical consequence: pair each user claim with a way to size it, and be ready for "how do you know that is a problem for many people?"

> **Company lens: Microsoft [as of 2026-10].** Microsoft has publicly described being customer-obsessed as part of its culture `Public` `[V: Microsoft careers culture page]`, and enterprise products involve buyers who are not the daily users `Inferred`. Practical consequence: distinguish the buyer, the administrator and the daily user, and say whose problem you are solving.

> **Company lens: Apple [as of 2026-10].** Apple publishes design principles and platform guidelines `Public` `[V: Apple Human Interface Guidelines (developer.apple.com)]`. Commentary often states that Apple relies on taste and integrated design more than on stated customer wishes, and some commonly cited remarks attributed to its late co-founder express skepticism of asking customers what they want `Inferred` `[unverified: candidate-reported]`. Practical consequence: show that you observe behavior and trace problems to experience, and avoid presenting a survey as the main evidence.

> **Company lens: Netflix [as of 2026-10].** Netflix's published culture material emphasizes judgment and context `Public` `[V: Netflix culture memo, June 2024]`. Candidates commonly report data-informed product questions `Inferred`. Practical consequence: combine qualitative insight with behavioral evidence, and be explicit about what each cannot show.

> **Company lens: Stripe [as of 2026-10].** Stripe's users are developers and the businesses that employ them `Public` `[V: Stripe documentation and newsroom]`. Candidates report discovery prompts about developer tools `Inferred`. Practical consequence: observe developers integrating for the first time instead of asking what they want, and separate the person who integrates from the person who buys.

## 8. Common mistakes

| # | Mistake | How to detect it | Fix |
|---|---|---|---|
| 1 | Taking a feature request at face value | Your plan is to build what was asked | Step up the ladder: what are they trying to do? |
| 2 | A demographic user | "College students" or "millennials" | Segment by need and behavior |
| 3 | Hypothetical questions in interviews | "Would you use...?" | Ask about the last time it happened |
| 4 | Leading or pitching | You describe your idea before listening | Ask open questions and hold the pitch |
| 5 | Trusting stated intentions | You forecast from "I would pay" | Use behavior or a commitment test and discount |
| 6 | A research plan of only one method | "Run a survey" | Qualitative to find, quantitative to size, behavior to check |
| 7 | Sampling friendly users | Everyone you interviewed loves the product | Recruit across the segment, including lapsed users |
| 8 | A problem statement with a solution in it | It contains "needs a button" | Remove the solution words and re-test |
| 9 | Testing the safe assumption | The test could not have told you no | Test the high-importance, high-uncertainty one |
| 10 | Discovery with no decision rule | You cannot say what would make you stop | Write criteria before the test |

## 9. Mental models applied

Four models, each tied to a decision in this chapter. [[inversion]] and [[second-order-effect]] come from C02, and the streetlight effect and the map-territory idea from C03 and C05.

**Inversion** (`MM-inversion`, see [[inversion]], C02). Ask how you would guarantee that you build the wrong thing: interview only fans, ask hypothetical questions, pitch while you listen, write the criterion after the result. The answers are the checklist for good discovery.

**The streetlight effect** (`MM-streetlight`, from C03) is searching where it is easy to look. In research it is interviewing the customers who are easiest to reach (current, friendly, nearby) and surveying the channel you already have. The people who left, or never came, are where the answer often is. Recruit for them on purpose.

**Extreme users** (`MM-extreme-users`) is the practice of studying people at the edges of a segment, who show needs that typical users have more mildly. A person who navigates the app with a screen reader exposes unclear labels that everyone stumbles on a little. A heavy user shows what breaks at scale. It is a cheap way to see a problem sharply, as a source of hypotheses rather than a replacement for a typical sample.

**The map is not the territory** (`MM-map-territory`, see C05). A persona or a journey map is a map of users, and what it leaves out is invisible. A persona of "Busy Priya, 34, loves yoga" tells a team nothing about when she abandons a checkout. Use a persona as a prompt to look, and date it.

## Engineering, design and data-science perspectives

- **Engineering.** Engineers are users of your product's constraints. Bring one to interviews: they spot feasibility facts early ("that field isn't stored") and they hear the problem directly, which reduces the translation loss between a spec and what gets built.
- **Design and research.** Designers and researchers own methods you should not improvise away. Co-write research questions, ask them what would change the plan, and watch sessions rather than reading summaries. A designer's prototype is often the cheapest test (C06.9).
- **Data science.** Analytics tells you what happened and a survey tells you how many say so; both need a view of who is missing. Ask data science for the baseline behavior before you interview, so that you can ask people about the numbers that surprise you.

## Checklist: before you commit to a problem

1. Is the problem written without a solution, with a specific segment and situation?
2. Is there evidence from behavior, not only opinion?
3. Did I hear it from people in the target segment, including some who left?
4. Do I know how many people have it, even roughly?
5. Have I seen what they do about it today?
6. Is my riskiest assumption identified and tested cheaply?
7. Is the success criterion written down before the test?
8. Do I know what would change my mind?

## 10. Case studies

#### CS-C06-01 · The fitness app that wanted more variety · Illustrative · Beginner

*Fictional composite. Every number is invented (invented).*

**Situation.** A fitness app loses about half of its new users within a month. The product team's belief is that users leave because there is not enough workout variety, and the plan is to commission 200 new workouts over three months.

**Constraints.** A fixed content budget for the quarter and a design team of three. The leadership team wants a decision in two weeks.

**Data.** An exit survey with options written by the team shows 41% of 600 respondents choosing "not enough variety" (invented). A review of behavior data shows that 62% of lapses begin after a user misses a week of workouts (invented). The team interviews ten lapsed users (invented).

**Problem definition.** The exit survey options came from the team's own idea, so the survey could only confirm it. The interviews and behavior data point to a different problem: users who miss a week do not return.

**Analysis.** Seven of the ten interviewees stopped after missing a week through illness, travel or a busy period. They describe feeling guilty about the broken streak and avoiding opening the app, and some restarted months later with a different app at the start of a new year. A workaround they mention is deleting the app and reinstalling it so the streak resets. None says they ran out of workouts. The survey and the behavior data seem to disagree until you see the survey options: "variety" was the closest option for people who felt the app no longer fit them. The problem for this segment is re-entry after a gap, not variety. The riskiest assumption for the new idea is that people would return if re-entry felt easier, which a cheap test can check.

**Options.**

| Option | Optimizes | Costs |
|---|---|---|
| A. 200 new workouts | The team's original belief | A quarter of content budget; may not touch the cause |
| B. A gentle restart flow: a welcome-back message, a ten-minute workout, and a streak freeze for illness or travel | Return after a gap | Two weeks of design and engineering |
| C. Both | Coverage | Slower; confounds the learning |

**Tradeoffs.** B costs far less and is directly aimed at the observed cause. It gives up the possibility that variety also matters for a different segment, which the team can test later.

**Decision.** Build B, and run it for users who have missed seven days, with a holdout. The metric is the share of lapsed users who return within 14 days. A guardrail is the completion rate of the first workout back, and a counter metric is the rate of users who freeze a streak and never return.

**Outcome.** In this fictional scenario the return rate within 14 days after a missed week rose from 18% to 27% (invented), and the content budget was kept for a smaller variety test with the segment of users who had exhausted the beginner plan.

**Alternative outcomes.** If the return rate had not moved, the team would have returned to interviews to ask what stopped lapsed users from using the welcome-back message. If the variety explanation had been right for another segment, a separate test would have shown it. The lesson is the method: when your survey options came from your own hypothesis, interviews and behavior data are what can contradict it.

#### CS-C06-02 · Superhuman, 2017: measuring and raising product-market fit · Verified · Advanced

*Sources (types): a first-person account by the company's founder and CEO, Rahul Vohra, "How Superhuman Built an Engine to Find Product/Market Fit," First Round Review (12 November 2018), read in full (primary); Hiten Shah's 2015 Slack survey is known only through that article. The analysis is the author's. Re-read in October 2026.*

**Situation.** Superhuman was building an email product and had been building it since 2015 and, by the summer of 2017 with a team of 14, had still not launched widely `[V: Vohra, 2018]`. In 2017 its founder wanted an objective way to tell whether the product had product-market fit, rather than debating it on feeling.

**Constraints.** A small team, a product still unlaunched after two years that the founder chose not to push into growth early, and no established metric for fit that worked before launch `[V: Vohra, 2018]`. He had reviewed available advice and settled on a survey approach.

**Data.** He used a survey question associated with Sean Ellis: "How would you feel if you could no longer use this product?" with answers "very disappointed," "somewhat disappointed" and "not disappointed." Ellis's observation, as reported, is that companies with strong traction almost always had more than 40% of users answer "very disappointed." Vohra reports that in the summer of 2017 only 22% of Superhuman's surveyed users answered "very disappointed." He cites a figure of 51% for Slack, from Hiten Shah's 2015 open survey of 731 Slack users, taken when Slack had around half a million paying users, as an example of how hard the 40% benchmark is to beat. Ellis found the 40% figure after benchmarking nearly a hundred startups. The survey was sent to users who had used the product at least twice in the last two weeks, following Ellis's advice; at the time Superhuman had between 100 and 200 such users to poll `[V: Vohra, 2018]`.

**Problem definition.** The score was below the benchmark. The question was how to raise it systematically, not by guessing.

**Analysis.** As described, the approach has four parts. First, segment the responses to find who loves the product (the "very disappointed" group) and who it is for; this is a way to find the high-expectation customer. Second, read what that group says they love, which tells you what to protect. Third, read what the "somewhat disappointed" group says is holding them back, focusing on those who value the main benefit (so the product is still what they came for, but something blocks them), and treat the objections of those who do not value the benefit as noise to set aside. Fourth, turn both into the roadmap, in roughly even shares as he describes, and measure again, repeating the cycle. In his account half of the roadmap went to deepening what the loving users valued (speed, shortcuts, automation, design details) and half to what held back the speed-loving but "somewhat disappointed" users (a mobile app, integrations, attachment handling, calendaring, a unified inbox, better search, read receipts), and the score became the product team's single key result `[V: Vohra, 2018]`. His own numbering of the steps is: segment, analyze feedback, build the roadmap, repeat. In the terms of this chapter, it is a loop that uses a behavioral-attitude measure, segmentation, qualitative reading of open-text answers, and a cheap repeatable test, with the decision rule fixed in advance (build to raise the score).

**Options.** *The author's reconstruction.*

| Option | Optimizes | Costs |
|---|---|---|
| A. Keep debating whether the product fits | Nothing measurable | Time; decisions by feeling |
| B. Measure with the survey and run the segmentation loop | Evidence and a number that can move | Survey fatigue; the benchmark may not transfer; a survey score can be gamed |
| C. Listen to every complaint equally | Broad feedback | A scattered roadmap |

**Tradeoffs.** B narrows the product toward the users who love it, which can reduce reach. It also gives up the loudest requests from people the product is not for. It replaces an unmeasurable argument with a measurable, if imperfect, number.

**Decision.** As documented, Vohra adopted the survey as a metric and the segmentation loop as a process.

**Outcome.** Reported by Vohra: the score was 22% when the work began in the summer of 2017; it was 33% after segmenting the same responses to the users who loved the product most (a change in who was counted, not in the product); and within three quarters of product work it nearly doubled to 58%. He also reports that the team grew to 22 people and that the company's Net Promoter Score rose alongside the fit score `[V: Vohra, 2018]`. He cautions that the score can fall as a product reaches more demanding users. Whether the score itself caused the growth that followed is a separate question that this case does not settle.

**Alternative outcomes.** *Inference.* Had the survey reached users who had not yet experienced the core value, the score would have understated fit. Had the team broadened the product to please the "not disappointed" group, the segment that loved it might have been diluted. A risk is optimizing the survey score rather than the experience; a counter metric such as retention of the surveyed users checks it.

**Lesson for an interview answer.** Turn a feeling ("do we have fit?") into a measurable question, find the segment that loves the product, and use the people who almost love it as the source of the roadmap. Say what the number cannot tell you: here, the benchmark came from other products, and a rising score is not proof of causation.

## 11. Interview questions and model answers

Seven questions: two Beginner, two Intermediate, three Hard. Model answers are `Illustrative`; every figure is an assumption. Each is written against the five behaviors in section 1.

#### IQ-C06-01 · Beginner · product design · DI

**Prompt.** Customers keep asking us to add a "bulk edit" feature to our project-management tool. What do you do?

**Rubric.**
- **Baseline:** "Build it, since customers are asking," or "ask customers what they want."
- **Strong:** Steps up from the request to the job, checks who is asking, weighs the evidence, and offers more than one solution.
- **Standout:** Separates segments among the requesters, uses behavior as well as requests, proposes the cheapest test, and says what would make the answer no.

**Model answer.** I'd treat "bulk edit" as a solution and look for the problem under it. I'd ask the people who requested it to walk me through the last time they needed to change many items at once: what were they doing, how many items, how often, what did they do instead? Common workarounds are exporting to a spreadsheet and re-importing, or editing items one by one.

Then I'd check who is asking. If the requests come mostly from team leads managing hundreds of tasks, it is a different segment from a casual user with a dozen tasks. I'd look at behavior: how many users perform repeated single edits in a row (a signal that bulk edit would help), and what share of tickets or sales notes mention it.

Suppose the interviews show the real job is "after a planning meeting, I want to move twenty tasks to a new sprint and reassign owners, so I can leave with everything in order." Bulk edit is one solution. Others are a "move a group" action, a planning view that allows drag and drop, or a template for sprint planning. They differ in cost, and the narrower ones may serve the job.

My recommendation is to ship the narrowest version that serves the job for the team-lead segment, and test it with five customers who asked, with the criterion that at least four use it in their next planning meeting. The cost is that other bulk operations wait. I'd change my mind if the behavior data show that few users perform repeated edits, in which case the requests are loud but not widespread.

**Follow-ups.**

- **Q.** The requesters are your largest customers and sales says the feature is blocking two renewals. What do you do? **A.** "I would take the commercial fact seriously and still test the need. I would ask sales for the accounts and the value at risk, say two renewals worth $240,000, and have a call with each customer about the last time they needed to change many items. Then I would look for a smaller step that solves the stated job: multi-select with three actions might cover most of what they do. I would compare the cost of that step with the revenue at risk and commit to a date, but I would not promise the full feature before I know what the job requires, because a promise made to close a deal is hard to reverse."
- **Q.** How would you test the cheapest version before building anything? **A.** "With a fake door and a concierge step. Add an Edit selected button that appears when a user has made five or more single edits in a row, and when clicked shows a short message offering a spreadsheet-import workaround and a request to join a pilot. Measure the click rate among eligible users: proceed if at least 10% click and at least three of five follow-up interviews describe a repeated need; stop if under 3%. For the pilot users I would do the bulk change by hand, which shows exactly which actions are needed and how often."

#### IQ-C06-02 · Beginner · product design · PS

**Prompt.** A language-learning app serves students, working professionals and retirees. Which segment would you build for first?

**Rubric.**
- **Baseline:** "Students, since there are the most of them," with no criterion.
- **Strong:** Segments by need, scores on stated criteria, chooses one, and names what it gives up.
- **Standout:** Notes the segments may be defined by a job (not an age), tests the choice with evidence, and says what would change it.

**Model answer.** I'll first note that age is a weak guide to need. What matters is why each person is learning, so I'd restate the segments by job: students learning for exams, professionals learning for a move or a role abroad, and retirees learning for travel and enjoyment. I'll score them on size, pain intensity, reach and our right to win (FW-C06-02), with rough assumed values.

| Segment (by job) | Size | Pain intensity | Reach | Fit and right to win |
|---|---|---|---|---|
| Exam learners | High | Medium (deadline, but school provides structure) | Medium (crowded channels) | Medium |
| Professionals relocating | Medium | High (a date, real stakes, willingness to pay) | High (can reach through employers and expat forums) | High (needs practical speaking, which the product can deliver) |
| Retirees learning for travel | Medium | Low to medium (no deadline) | Low (different channels) | Medium |

I choose professionals who are relocating. The deciding criterion is pain intensity combined with reach: they have a deadline and they pay, and we can reach them directly. I give up the size of the exam-learner segment and the long-term loyalty of retirees.

Evidence I'd collect to confirm: interviews with eight people who relocated in the past year about how they prepared, which tools they used and what failed; the share who paid for tutoring; and a landing-page test for a "speak at work in 30 days" offer. I'd change my choice if interviews showed that relocating professionals mostly rely on employer-provided classes, which would shrink our opening.

**Follow-ups.**

- **Q.** How would you validate that relocating professionals are the right first segment? **A.** "By testing the two things the table assumed: willingness to pay and reach. I would run ten interviews with people who recently moved for work, asking what they spent on language learning and why, and run a small paid-ad test with a price shown on the sign-up page, measuring the cost per sign-up and the share who start a trial. I would also look at our own data: among users who signed up citing relocation, is retention better than for others? If this group is willing to pay more and acquires at a cost our price can cover, the choice holds; if not, I would look at the next segment."
- **Q.** What would make you choose a different segment? **A.** "Payback. If acquiring professionals costs $60 per paying user and they pay $12 a month with 8% monthly churn, payback is five months and lifetime value is about $150. If exam learners cost $15 to acquire through school and referral channels, pay $6, and churn at 10%, payback is under three months, even though lifetime value is lower. I would choose the segment that reaches payback fastest at a volume we can serve, and keep the first segment's bigger prize as the second step."

#### IQ-C06-03 · Intermediate · product design · DI

**Prompt.** People don't use our calendar app's scheduling assistant. How would you find out why?

**Rubric.**
- **Baseline:** "Survey users to ask why they don't use it."
- **Strong:** Segments non-users, lists hypotheses, combines behavioral data, interviews and a survey, and defines the decision.
- **Standout:** Separates "never saw it," "tried and left" and "doesn't need it," sets a decision rule, and addresses sampling bias against people who have already left.

**Model answer.** First the decision: do we invest in the assistant, change how it is discovered, or retire it? I'd also define "don't use": say 4% of weekly users have used it in the last month (assumed), against an expectation of 15%.

The non-users are three different groups, and the research should separate them: people who never saw the assistant (discovery), people who tried it and stopped (a usability or value problem), and people who looked and decided they don't need it (a need problem). Each leads to a different action.

Behavioral data comes first and is cheap: what share of weekly users saw the entry point, what share of those started it, what share of starters completed a scheduled meeting, and what share used it again. Say exposure is 20%, start rate 30% of those, completion 50% of starters. Then a user who sees it has a 15% chance of finishing once (0.30 × 0.50), and only 20% see it, so overall 3% finish (0.20 × 0.15), close to the observed 4%. The biggest loss is exposure.

Interviews come second: eight people from each group, asking them to describe the last time they scheduled a meeting with several people, how they did it, and what they tried. For the "tried and left" group, I'd ask them to show me what happened. A short survey third, built from the interviews, would size how common each reason is.

Sampling is the danger: people who left the app are not in my active-user list, so I'd recruit some lapsed users separately. My decision rule: if the main loss is exposure and those who try it complete meetings, fix discovery; if many who try it abandon, fix the experience; if most say they don't schedule multi-person meetings, retire it. I'd change the plan if the need turns out to be concentrated in a segment such as team admins, and I'd focus on them.

**Follow-ups.**

- **Q.** How do you include people who have already left your product in the research? **A.** "I would recruit them from the event logs: users who started the assistant once and did not use it again in 60 days, and users who saw the entry point and never clicked. I would offer a small incentive and ask for a 15-minute call, and compare what they say with active users'. People who left do not answer surveys inside the product, so a survey alone would be biased toward people who stayed. For the group that never saw the entry point I would also review a few anonymized session recordings, since they cannot tell me what they did not see."
- **Q.** What is your decision rule after the research? **A.** "Written before the interviews. If more than 60% of non-users never saw the entry point, the problem is discovery and I would test a different placement. If more than 40% of those who tried it left because suggestions were poor, the problem is quality and I would fix suggestions before promoting it. If most say they do not schedule meetings often enough to need it, the problem is need and I would retire or narrow the feature. With interview samples of 10 to 15 these are rough thresholds, so I would confirm the leading cause with the behavioral funnel."

#### IQ-C06-04 · Intermediate · product design · DI

**Prompt.** In a survey, 35% of customers say they would pay $15 a month for a new feature. Do you believe it?

**Rubric.**
- **Baseline:** "Yes, 35% is a strong signal," or "No, surveys are unreliable."
- **Strong:** Names the say-do gap, computes the margin of error, asks about sampling, and proposes a behavioral test.
- **Standout:** Estimates a discount factor, tests with a commitment, converts the result into a revenue range, and says what would change the plan.

**Model answer.** I'd treat the 35% as the upper bound of interest, not a forecast, for three reasons.

First, it is a stated intention about future behavior, which is where the say-do gap is largest. People say yes to hypothetical purchases because saying yes costs nothing.

Second, sampling: how many responded and who? Suppose 300 responded out of 2,000 invited (assumed), a 15% response rate, so the respondents are more interested than the typical customer. The margin of error on 35% from 300 responses is about 1.96 × the square root of (0.35 × 0.65 ÷ 300) = about 5.4 points, so the survey says 30% to 40% of respondents, before any non-response bias.

Third, price and framing: how was the feature described, and was the price shown at the moment of choice?

To get a behavioral number, I'd run a commitment test: show the offer with a real checkout to a sample, or take refundable pre-orders. Suppose 5,000 users see the offer (assumed) and 1.5% pay. Then the working conversion is about 1.5%, and the stated-to-actual ratio is about 23 (35% ÷ 1.5%). I'd use that ratio, labeled as specific to this audience and offer, to discount future surveys.

For 50,000 active customers (assumed), 1.5% is 750 payers, at $15 a month that is $135,000 a year. The survey implied 17,500 payers, or $3.15 million a year, so the forecast error would have been more than twenty-fold.

I'd decide on the behavioral number, and I'd say what would change the plan: a price test or a different packaging that raises conversion above about 4%, which is the level at which the feature covers a small team (assumed).

**Follow-ups.**

- **Q.** What discount would you apply to the 35%, and why? **A.** "I would not guess; I would calibrate. If the team has a past launch where a survey said 30% would pay and actual conversion was 6%, the discount factor is 0.2, and I would apply it to this survey. Combined with the 15% response rate, the revenue range for 100,000 customers is 100,000 × 35% × 0.2 = 7,000 payers, or $1.26 million a year at $15 a month; at a harsher factor of 0.1 it is about $0.63 million. I would present a range of roughly $0.6 to $1.3 million and say the first thing to learn is the real conversion from a commitment test."
- **Q.** How would you test willingness to pay with a commitment? **A.** "By asking for something costly. A fake door in the product that shows the feature at $15 a month with a Start trial button, shown to a random 10,000 users for two weeks, measures real clicks; a pre-order or a trial that requires a payment method is stronger. I would set the threshold in advance: if at least 3% of exposed users start the trial, proceed to a prototype; if under 1%, stop. Fake doors need care: the next screen should be honest that the feature is coming, and I would limit exposure."

#### IQ-C06-05 · Hard · product design · DI

**Prompt.** You have two weeks and no research budget. How would you decide whether to build a group-ordering feature in a food-delivery app?

**Rubric.**
- **Baseline:** "Survey customers and see if they want it."
- **Strong:** Lists assumptions, picks the riskiest, designs two or three cheap tests, and writes criteria.
- **Standout:** Combines existing data, interviews and a commitment test, writes a decision rule in advance, and names what the plan cannot tell.

**Model answer.** I'd list what must be true: that groups regularly coordinate orders and find it hard (desirability); that a shared cart is a better fix than what they do today; that groups order often enough to matter (viability); and that it is buildable (feasibility). The riskiest is the first, because if groups do not struggle, the rest does not matter.

Days 1 to 3: use existing data. Orders with three or more items to one address at one time give a rough proxy for group orders: say 4% of orders (assumed). Read about 100 support tickets for coordination complaints.

Days 3 to 8: eight interviews with customers who placed large orders recently, asking about the last time they ordered for a group, how they coordinated, what went wrong, and what they did about it.

Days 6 to 12: a fake door. Show a "Start a group order" button to 3% of customers who recently ordered three or more items, leading to a "coming soon, tell us what you need" page with a short form.

Days 10 to 14: a concierge test. Coordinate ten group orders by hand through messages.

Before running anything, I'd write the criteria. At least five of eight interviewees describe a recent coordination struggle. At least 4% of the exposed click the fake door. At least seven of ten concierge orders complete with three or more participants. Rule: all three, build a thin version; two, iterate and retest; one or none, stop.

The plan cannot tell us how group ordering performs at scale, or whether a built version would match a hand-run one. It tests the assumption most likely to be wrong, cheaply. I'd change the plan if the proxy shows group orders are well under 1% of orders: the opportunity would be too small to justify the time.

**Follow-ups.**

- **Q.** What can this two-week plan not tell you? **A.** "It cannot show whether a shared cart would increase how often groups order, which needs a live test. It cannot show willingness to pay or the effect on restaurants, who might face larger, more complex orders. And eight interviews and a proxy from order data describe past behavior of people who already order, not people who avoid ordering for groups because it is hard. I would state those limits in the recommendation and propose the next step if the evidence is positive: a small pilot in one city with a shared-cart prototype and a measured change in group order frequency."
- **Q.** What would your decision rule be? **A.** "Written on day one, and the same as in the plan. Build the smallest version if all three hold: at least five of eight interviewees describe coordination pain in the last month, at least 4% of the exposed click the fake door, and at least seven of ten concierge orders complete with three or more participants. If two hold, iterate and retest, spending one more week on the test that missed or was borderline; if one or none holds, stop. The order-data proxy is a sanity check, not a criterion: if it shows group orders well under 1% of orders, I stop early. This keeps the decision to a rule I set before I saw the evidence, so that I cannot reinterpret it to fit what I hoped."

#### IQ-C06-06 · Hard · product design · DI

**Prompt.** Your interviews say users want a simpler interface, your survey says they want more features, and your analytics show most users use only three. How do you reconcile them?

**Rubric.**
- **Baseline:** "Pick the one I trust most" or "average them."
- **Strong:** Asks who each source covers, what each can and cannot show, and identifies the segments.
- **Standout:** Sees that the sources may describe different segments, generates a testable hypothesis, and proposes a decision that serves each segment.

**Model answer.** I wouldn't pick one source. I'd ask what each can and cannot show, and who it covers.

The interviews show reasons, from a few people. Who did I recruit? If I interviewed beginners, "simpler" is natural. The survey shows what many say they want, which is stated, not behavior, and people often ask for more features while using few. The analytics show behavior across everyone: most use three features. That is consistent with a simpler interface being enough for most.

The apparent conflict may be a segment difference. Perhaps most users are casual and need the three features to be easy, while a minority of heavy users want many features. I'd test it by splitting each source by usage level: do heavy users account for the "more features" answers in the survey, and are the interviewees casual users?

Suppose the split shows that 80% of users use three features and most of the "more features" answers come from the heavy 10% (assumed). Then both sources are right about different groups. The hypothesis is that a simple default with an advanced mode serves both.

My decision would be to simplify the default experience for the majority, since the behavior says that is where the volume is, and to offer progressive access to more features for heavy users, tested with a small group of each. The cost is added complexity of two modes. I would change my view if heavy users turn out to drive a large share of revenue or retention, in which case their needs weigh more than their numbers suggest.

**Follow-ups.**

- **Q.** How would you test whether the segments explain the conflict? **A.** "I would split users by usage from the analytics, say the top 10% by features used versus the rest, and join survey respondents to their usage by user ID. If the requests for more features come mostly from the heavy group and the interviewees who asked for simplicity are mostly in the casual group, the sources are describing different segments. Then I would interview five people from each group about their last week of work. The prediction is that casual users need the three features to be easier and heavy users need depth; if the heavy group also wants simplicity, the segment explanation is wrong and I would look elsewhere."
- **Q.** What decision would serve both groups? **A.** "A simple default with progressive disclosure: the three common features are prominent and easy, and advanced features sit behind an Advanced section that heavy users can open or pin. I would measure task completion and time to first task for casual users, adoption of the advanced section by heavy users, and support contacts, with a guardrail that casual users' task time does not rise. If heavy users find the advanced section too hidden, I would let them promote features to the main view."

#### IQ-C06-07 · Hard · behavioral · BE

**Prompt.** Tell me about a time user research changed your mind.

**Rubric.**
- **Baseline:** A story where the research confirmed what the candidate already thought.
- **Strong:** States the original belief, the method, what the evidence showed, and the decision that changed.
- **Standout:** Shows how the candidate designed the research to be able to disprove the belief, how quickly they updated, the cost of the change, and what they now do differently.

**Model answer.** *Illustrative: a composite story; numbers invented.* "I was the PM for a recipe app, and I believed that users would want a meal-planning calendar. It was my idea, and several colleagues liked it. Before building, I wrote down what would change my mind: if fewer than half of the people I interviewed planned meals at all, I would drop it.

"I interviewed ten regular users, asking about the last week of dinners. Only three planned meals in advance. The other seven decided that afternoon, usually while commuting, and the common frustration was not planning but 'what can I make with what's in my kitchen.' I also checked behavior: 61% of recipe views happened between 4pm and 6pm (invented).

"I dropped the calendar. I told the team the same day, with the numbers, and proposed a 'cook tonight' view that starts from the ingredients people have. It took us a week to prototype. In a test with 200 users, 38% of those who saw it cooked a recipe from it that evening against 22% for the standard home screen (invented).

"The cost was a month of discussion I had spent socializing the calendar idea, and the disappointment of a colleague who had designed screens for it. What I do differently now is write the disconfirming criterion before the first interview, and I show the team the research plan before the results, so that a change of direction does not feel like a loss for anyone."

**Follow-ups.**

- **Q.** What did changing your mind cost, and how did you handle the people who liked the idea? **A.** "It cost about two weeks of design work and some disappointment, because three colleagues had championed the calendar. I handled it by showing my criterion from before the interviews (drop it if fewer than half plan meals) and the evidence: only three of ten planned, and 61% of recipe views came from the afternoon. I did not present it as the idea being wrong; I presented it as the research telling us where the need is. We then built a smaller feature around what is in my kitchen, and its first-month usage was higher than the calendar's projected usage."
- **Q.** What do you do differently now? **A.** "Three things. I write down what would change my mind before the research starts, so that I cannot move the goalposts. I recruit at least some participants who have no reason to flatter the idea, such as lapsed users. And I share raw quotes and behavior data with the team, not just my summary, so that others can see the evidence that changed my view and challenge my reading. The habit is to treat my own idea as a hypothesis with a stop condition."

## 12. Exercises

Ten exercises. Each has a model solution and an alternative. Figures are assumptions unless marked.

#### EX-C06-01 · Problem, solution or feature?

**Problem.** Classify each statement as a problem, a solution class or a feature, and restate each request as a need: (a) "Add a dark mode." (b) "I can't read the screen at night without a headache." (c) "We need push notifications." (d) "Customers forget to complete their profile." (e) "Build an AI assistant." (f) "Let me filter by date."

**Context.** A backlog contains these items from sales, users and executives.

**Data.** None beyond the list.

**Constraints.** One line each.

**Expected approach.** Apply the three-layer ladder (FW-C06-01).

**Solution.** (a) Feature (a specific implementation of reducing glare); need: reading comfortably in low light. (b) Problem. (c) Solution class (a way to reach people); need: reaching users who are not in the app, for something they care about. (d) Problem. (e) Solution class (very broad); need: unknown, ask what task people cannot do. (f) Feature; need: finding items from a time period (a search or navigation need).

**Alternative solution.** Add a column with the first question you would ask each requester.

**Tradeoffs.** Reframing every item costs time; prioritize requests that recur or that are expensive to build.

#### EX-C06-02 · Score three segments

**Problem.** A budgeting app considers three segments: (A) recent graduates with student loans, (B) freelancers with irregular income, (C) couples sharing expenses. Score them and choose one.

**Context.** The company has a small team and an app with basic budgeting.

**Data.** *Invented.* Size: A 8 million, B 12 million, C 20 million. Pain intensity from interviews: A medium, B high (income swings), C medium. Reach: A high through campuses and social, B medium, C low (hard to target). Fit: B high because the app's forecasting could be adapted, A medium, C low.

**Constraints.** State the criterion and what you give up.

**Expected approach.** FW-C06-02.

**Solution.** B has the highest pain and a strong fit, with medium reach; C is largest but hard to reach and a poor fit; A is easiest to reach but with medium pain. Choose B (freelancers). Criterion: pain intensity combined with fit. Give up C's size and A's reach. Next evidence: eight interviews with freelancers about the last month when income was late, and a landing page offering an irregular-income forecast.

**Alternative solution.** Weight criteria (pain 40%, fit 30%, reach 20%, size 10%) and score numerically; use it to break ties, not to decide.

**Tradeoffs.** A narrower segment means a smaller early market, which a later expansion plan must address.

#### EX-C06-03 · Write job statements

**Problem.** Write a job statement ("When..., I want to..., so I can...") for each vignette: (a) a nurse switching shifts who wants to swap with a colleague; (b) a student with three deadlines in one week; (c) a small-shop owner who gets paid by many customers in different ways.

**Context.** You are preparing for interviews.

**Data.** None.

**Constraints.** Include a functional, emotional or social element in each.

**Expected approach.** FW-C06-03.

**Solution.** (a) "When I need a different shift, I want to find a colleague who can swap and have it approved quickly, so I can plan my week without chasing people (and without looking unreliable to my manager)." (b) "When several deadlines collide, I want to see what to do first and how long each will take, so I can avoid an all-night scramble and feel in control." (c) "When payments arrive in cash, by card and by transfer, I want one clear view of what I was paid today, so I can close the day with confidence that the numbers are right."

**Alternative solution.** Write the job for the person who competes with your product (a group chat, a spreadsheet).

**Tradeoffs.** Specific statements guide features and may exclude users; use several jobs for several segments.

#### EX-C06-04 · Fix the interview questions

**Problem.** Rewrite each question to remove the flaw: (a) "Would you use an app that reminds you to drink water?" (b) "Don't you find it annoying when ads interrupt videos?" (c) "How often do you exercise?" (d) "What features would you like us to add?" (e) "How much would you pay for a better calendar?"

**Context.** You are preparing an interview guide.

**Data.** None.

**Constraints.** Ask about the past and about specifics.

**Expected approach.** The rules in C06.5 and FW-C06-04.

**Solution.** (a) "Tell me about the last time you realized you hadn't had enough water. What happened?" (b) "Tell me about the last time an ad interrupted a video. What did you do?" (c) "Walk me through your last week: when did you exercise, if at all, and what got in the way on the other days?" (d) "Tell me about the last time the product didn't do something you needed. What did you do instead?" (e) "What do you use to manage your schedule today? Tell me about the last time it went wrong. What did that cost you?" The price question comes later, as a behavioral test, not as an opinion.

**Alternative solution.** Add a follow-up to each ("show me," "what happened next?").

**Tradeoffs.** Past-behavior questions take longer to answer and yield stronger evidence.

#### EX-C06-05 · Margin of error and sample size

**Problem.** (a) A survey of 100 users finds 40% want a feature. What is the approximate 95% margin of error? (b) How many responses do you need for ±5 points, ±3 points and ±2 points in the worst case? (c) 400 respondents split 52% to 48%. Can you act on it?

**Context.** Planning a survey.

**Data.** Use the rule: margin ≈ 1 ÷ the square root of n (worst case, about 0.98 ÷ the square root of n).

**Constraints.** Show the arithmetic.

**Expected approach.** Apply the rule and its inverse.

**Solution.** (a) For 40% with n = 100: 1.96 × the square root of (0.4 × 0.6 ÷ 100) = 1.96 × 0.049 = about 9.6 points, so 30% to 50%. (b) n = (0.98 ÷ margin)²: ±5 points gives about 384 responses; ±3 gives about 1,067; ±2 gives about 2,401. (c) With n = 400 the margin is about ±5 points, so 52% versus 48% is within noise (a 4-point gap with a ±5 margin on each); you cannot say which is larger.

**Alternative solution.** Reduce the required sample by accepting a wider margin, or by focusing on a segment where larger effects are expected.

**Tradeoffs.** Larger samples cost time and money; the margin shrinks slowly (quadrupling the sample halves it).

#### EX-C06-06 · Stated versus actual

**Problem.** A survey of 800 users (assumed) says 40% would use a new "smart reminders" feature. A fake-door test shows it to 6,000 users and 5% click "turn on," then only 40% of clickers keep it on after a week. Compute the likely adoption and the stated-to-actual ratio.

**Context.** Forecasting for a planning meeting. The app has 200,000 monthly active users.

**Data.** As above.

**Constraints.** Give a forecast with a rough range.

**Expected approach.** Convert funnel steps to a behavior-based rate.

**Solution.** Click: 5% of 6,000 = 300. Keep on after a week: 40% of 300 = 120, which is 2% of the exposed (120 ÷ 6,000). Stated: 40%. Ratio: 40% ÷ 2% = 20. Forecast for 200,000 users: 2% = about 4,000 users keeping the feature on, against 80,000 implied by the survey. Margin on the 2%: 1.96 × the square root of (0.02 × 0.98 ÷ 6,000) = about 0.35 points, so 1.65% to 2.35%, or about 3,300 to 4,700 users.

**Alternative solution.** Use the click rate alone (5%, 10,000 users) as an upper bound and the retained rate as the working number.

**Tradeoffs.** A one-week retention check delays the answer and prevents over-counting curiosity clicks.

#### EX-C06-07 · Weigh the feedback

**Problem.** Four pieces of feedback: (1) a social-media thread with 300 likes demanding a "dark theme"; (2) 40 support tickets in a month about sync failures; (3) three enterprise sales losses citing missing single sign-on; (4) interviews in which 6 of 8 users describe copying data by hand between two screens. Rank them using FW-C06-06.

**Context.** Planning a quarter for a project-management tool.

**Data.** *Invented:* the thread comes from non-customers as far as you can tell; 40 tickets come from 31 distinct accounts; the three losses were all large accounts; interviews were with target-segment users.

**Constraints.** State confidence and the next check.

**Expected approach.** Weigh by segment, source consistency, frequency and severity.

**Solution.** (2) Sync failures: many accounts, high severity (data loss risk), behavior-based; confidence high; check data on sync errors. (4) Manual copying: target segment, consistent in interviews; confidence medium; check how many users do it with behavior data. (3) Single sign-on: few losses, but large accounts and a possible requirement; confidence medium; check the pipeline's share requiring it. (1) Dark theme: loud, non-customer source, one channel; confidence low; check with a small survey of customers. The rule: a theme in several independent sources and in the target segment outranks a loud single source.

**Alternative solution.** Add a cost column and rank by value over effort.

**Tradeoffs.** Weighting by revenue can overlook small customers who would grow; keep one slot for experiments.

#### EX-C06-08 · Rewrite weak problem statements

**Problem.** Rewrite each into a strong problem statement: (a) "We need to make onboarding better." (b) "Users want more notifications." (c) "The search is bad."

**Context.** The team backlog has these as titles.

**Data.** *Invented:* (a) 38% of small-team admins finish setup in a week, against 70% for large teams; (b) 20 users in a forum asked for more alerts, while 12% of users turned off notifications last month; (c) 14% of searches end with no click and a reformulated query within 10 seconds.

**Constraints.** No solution words; include segment, behavior, impact and evidence.

**Expected approach.** The five-row template (FW-C02-01) and the tests in C06.8.

**Solution.** (a) "Admins at companies with fewer than 50 people stop at the integration step during setup; 38% finish within a week against 70% at larger companies; evidence: funnel data and four interviews." (b) "Some users want timely alerts about specific events, while 12% of users turned notifications off last month; unclear which alerts the 20 forum users want and whether they are typical; evidence: low, a forum thread and settings data." (c) "In 14% of searches, users reformulate within ten seconds without clicking a result, which suggests the first results did not match what they wanted; evidence: search logs; segment unknown."

**Alternative solution.** Add a "not the problem" line to each (for example, "not 'add a wizard'").

**Tradeoffs.** Good statements take more words and prevent building the wrong thing.

#### EX-C06-09 · Riskiest assumption and cheapest test

**Problem.** Idea: a marketplace that connects pet owners with neighbors who will pet-sit. List assumptions, pick the riskiest, and design a test with a criterion.

**Context.** A team of two, three weeks, no budget.

**Data.** None.

**Constraints.** The test must measure behavior, not opinion.

**Expected approach.** FW-C06-07.

**Solution.** Assumptions: owners want to leave pets with neighbors, not kennels (desirability, high importance, high uncertainty); neighbors are willing and trustworthy (desirability, high, high); price works (viability, medium); matching is feasible (low risk). The riskiest is the two-sided desirability: owners trust a neighbor with their pet. Test: a landing page for one neighborhood with a "request a sitter" form and a recruiting post for sitters; concierge-match ten requests by hand. Criteria: at least 20 owner requests and at least 10 sitter sign-ups in two weeks; at least 6 of 10 concierge matches completed and rated positively. Decision: all met, build a simple matching tool; fewer, drop or change the audience.

**Alternative solution.** Interview ten pet owners about the last time they traveled, and who looked after the pet.

**Tradeoffs.** A one-neighborhood test is quick and may not generalize to other places.

#### EX-C06-10 · Eight-minute research plan drill

**Problem.** In eight minutes, plan the research for: "Why do new users of our expense-tracking app stop after the first week?"

**Context.** A timed spoken drill using the Type A structure.

**Data.** None given.

**Constraints.** Decision, segments, hypotheses, methods in order, biases, decision rule.

**Expected approach.** Section 4, Type A.

**Solution.** Decision: whether to change onboarding, add reminders, or neither. Segments: by acquisition source and by whether they logged a second expense. Hypotheses: they never log a second expense because the first was hard (usability); they do not see a reason to return (value); the app does not fit how they spend (need). Methods: behavioral data first (funnel from install to the second expense, by source), then eight interviews with people who stopped, asking them to walk through the last week, then a short survey to size the reasons, and a check of behavior by reason. Biases: lapsed users are hard to recruit, so I'd offer a small incentive and recruit through email; interviewees who answer may be the more helpful ones. Decision rule: if most drop before the second expense, work on first-use; if many logged several and left, work on value and reminders. Cannot tell: whether a fix raises retention without a test.

**Alternative solution.** Start with five session recordings of first-week behavior to generate hypotheses.

**Tradeoffs.** Eight minutes allows a plan, not details; say what you would add with more time.

## 13. Practice protocol

**Timed drills (three a week for three weeks).**

- *Week 1: reframe and segment.* Take a feature request (the exercises and IQ-C06-01 and IQ-C06-02), step up the ladder, write the problem statement and name the segment, in five minutes.
- *Week 2: the research plan.* Use the ten-minute budget in section 4 on a Type A prompt (IQ-C06-03, IQ-C06-05, EX-C06-10), speaking aloud or recording.
- *Week 3: the evidence.* Ask a partner to give conflicting data ("interviews say X, analytics say Y") and to challenge one claim with "how do you know?" Update aloud.

**Interview practice (twice).** Run two real 20-minute interviews with people in a segment you care about, following FW-C06-04. Record them with permission. Review: how many of your questions asked about the past, how many were leading, and how long you talked.

**Feedback checklist (yes, partly, no).**

1. Did I separate the problem, the solution and the feature?
2. Did I segment by need and behavior and name a criterion?
3. Did I state the decision the research informs?
4. Did I name my riskiest assumption?
5. Did I choose methods in an order, with a reason?
6. Did I name biases specific to my plan?
7. Did I prefer behavior to stated intention and use a commitment test where relevant?
8. Did I write a problem statement without solution words?
9. Did I write a decision rule before the test?
10. Did I say what the research cannot tell me?

**With a partner.** Ask your partner to answer as a user who says "yes, I'd definitely use that." Practice asking about the last time, and notice how the answer changes.

**Answer journal.** For each drill record the date, the prompt, the segment, the riskiest assumption, your score out of ten, and the question you wish you had asked. After six drills, count how often you reached for a survey first; if it is most of the time, drill the interview-first order.

## 14. Implementation playbook

Apply the chapter on real work over the next two weeks. Each deliverable doubles as an interview story.

**Days 1 to 3.** Take the three most recent feature requests you received. For each, step up the ladder (FW-C06-01): write the request, the need, the workaround and the problem, and confirm it with the requester.

**Week 1.** Run three user interviews with the guide in FW-C06-04, each about the last time a person did a task related to your product. Write up the themes with counts, and note one thing that surprised you.

**Week 1.** Write one problem statement using the template and the six tests in C06.8, and share it with your manager and an engineer. Ask whether it names the problem without the solution.

**Week 2.** Choose one assumption behind a current project, rate its importance and uncertainty, and design the cheapest behavioral test with a criterion written in advance (FW-C06-07). Run it if you can.

**Week 2.** Build a feedback weighting table (FW-C06-06) for the last month's feedback, and compare it with the loudest request.

**Deliverables that become stories:** the interview themes (a time you learned something that changed a decision), the problem statement (aligning a team on the problem), and the test with a pre-set criterion (a decision made on evidence). Keep the numbers real.

## 15. Key takeaways and further reading

### Key takeaways

1. Separate the problem from the solution and the feature, and step up from a request to what the person is trying to do.
2. Segment by need and behavior, choose by a stated criterion, and say what you give up.
3. Use qualitative research to find, quantitative research to size, and behavior to check; prefer what people did to what they say they will do.
4. Write the problem so a team can act on it without naming the solution, with the evidence and its strength.
5. Test the riskiest assumption cheaply, with the criterion written first and a decision for each outcome.

### Further reading

- Clayton M. Christensen, Taddy Hall, Karen Dillon and David S. Duncan, *Competing Against Luck* (2016). The jobs-to-be-done perspective; and their article "Know Your Customers' 'Jobs to Be Done'" (*Harvard Business Review*, September 2016) `[V: Competing Against Luck: HarperBusiness, 4 October 2016, ISBN 9780062435613; the companion article is Harvard Business Review, September 2016]`.
- Rob Fitzpatrick, *The Mom Test* (2013). Asking about the past instead of the future, and avoiding polite lies.
- Teresa Torres, *Continuous Discovery Habits* (2021). Regular customer contact, opportunity mapping and assumption testing.
- Steve Portigal, *Interviewing Users* (2nd edition, 2023). A practical guide to the craft of user interviews.
- Erika Hall, *Just Enough Research* (2nd edition, 2019). A short guide to choosing research methods.
- Rahul Vohra, "How Superhuman Built an Engine to Find Product/Market Fit," First Round Review, 12 November 2018 (review.firstround.com/how-superhuman-built-an-engine-to-find-product-market-fit/). The source for CS-C06-02 and FW-C06-08.
- Marty Cagan, *Inspired* (2nd edition, 2017). Product discovery as an ongoing discipline.
