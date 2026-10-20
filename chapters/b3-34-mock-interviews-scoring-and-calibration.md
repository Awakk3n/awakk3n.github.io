---
id: C34
title: Mock Interviews, Scoring and Calibration
tier: 1
competencies: [interview-craft]
prerequisites: [C33]
defines_terms: [mock-interview, scorecard, calibration, deliberate-practice, error-log]
uses_terms: [goodharts-law, signal, story-bank, interview-loop, company-brief, model-graded-eval, inter-rater-agreement, shadow-mode, regression-test, base-rate, bluf, pyramid-principle, escalation, hallucination, human-in-the-loop, eval, feedback-loop, anchor]
frameworks: [FW-C34-01, FW-C34-02, FW-C34-03, FW-C34-04, FW-C34-05, FW-C34-06, FW-C34-07, FW-C34-08]
case_studies: [CS-C34-01 (Illustrative), CS-C34-02 (Verified)]
cross_refs_out: [C02, C03, C04, C05, C06, C07, C08, C09, C11, C12, C13, C14, C15, C17, C21, C22, C23, C24, C25, C31, C32, C33, C37]
cross_refs_pending: []
status: draft
---

# C34 — Mock Interviews, Scoring and Calibration

## 1. What interviewers test

"Tell me about a time you received critical feedback." "You did well in practice and froze in the real interview; why?" "How do you know when you are ready?" Interviewers rarely ask about your preparation directly, and yet the quality of your preparation shows in every round: in how you structure, how you recover, how well you know your own weaknesses. This chapter is the practice system for the whole book. Every earlier chapter gave you methods, model answers and exercises; this one tells you how to turn them into performance: how to run mock interviews alone, with a partner or recorded; how to score yourself honestly against the bands; how to find your weakest competency; how to practice it deliberately; how to manage nerves; how to use an AI tool without fooling yourself; and how to spend the last week.

**Where it shows up.** `Inferred`: the practice system is not a round, and it determines performance in all of them. On the job, the same habits (record, score, find the one fix, test again) are how PMs improve their writing, presentations and decisions.

**What is scored, and what matters most.** Whether your performance under realistic conditions is at the Strong band or above across round types, consistently, with stories that survive probing `Inferred`. The research on practice supports a simple rule that this chapter applies throughout: *retrieval and feedback beat rereading and hours*. CS-C34-02 reviews the evidence and its limits.

Six observable behaviors:

1. You practice under realistic conditions: timed, aloud, in the real format.
2. You score every mock with a written scorecard and evidence, before anyone tells you the score.
3. You check your self-scores against an outside judge and correct your bias.
4. You keep an error log, pick one fix per session and retest within a few days.
5. You find your weakest important competency from data, not from feeling, and aim practice at it.
6. You manage nerves with preparation and recovery moves, use AI tools with a checking routine, and taper before a loop.

**The failure this prevents.** Six patterns end preparation: rereading chapters and calling it practice, hours logged with no feedback, inflated self-scores, practicing the strongest round type, a bad round that spirals into the next, and an AI tool that says every answer is great.

## 2. The concept from first principles

### C34.1 Mock system: solo, partner, recorded

A **mock interview** is a practice interview run under realistic conditions (the real format, the real time limit, no pausing or hints) and scored afterward against a rubric. It is retrieval practice for interviews: you must produce the answer, not recognize it (FW-C34-01).

**Three formats.**

| Format | How | Strengths | Weaknesses | Best for |
|---|---|---|---|---|
| Solo, timed | Prompt from the bank, timer, speak aloud (record audio), score yourself | Anytime, free, many repetitions | No interruptions, no pressure, easy to be lenient | Drills; structure; timing |
| Partner (live) | A peer or mentor plays the interviewer, asks probes, interrupts, scores independently | Real pressure and probing; outside scoring | Needs scheduling; partner skill varies | Full rounds; probing; calibration |
| Recorded (video or audio) | Record any mock; review with the rubric and transcript | Shows filler, pace, structure, body language | Takes time to review | Delivery; self-scoring evidence |

**Cadence.** A reasonable plan for a twelve-week preparation: weeks one to four, three solo drills a week and one partner mock; weeks five to eight, two partner mocks a week and a recorded review of each; weeks nine to twelve, a full mock loop every two weeks and targeted drills in between; a taper in the final week (C34.10). Adjust to the hours you have (C33.14).

**Setting up a partner mock.** Agree the round type and length; give the partner the rubric and the prompt (not your preferred answer); ask them to take notes as evidence statements (C33.2); ask them to probe three levels deep and to interrupt once; ask for scores before discussion; then debrief for ten minutes, ending with one fix. Swap roles: scoring other people's answers is itself some of the best practice, because you learn what evidence looks like from the interviewer's side.

**Finding partners.** Peers preparing for the same roles, alumni and colleagues in product roles, mentors, and structured communities; offer to be the interviewer for them. Rotate partners so that you are not tuned to one person's style.

> **Counterexample.** A candidate logs 100 hours over two months, mostly rereading chapters and watching sample interviews, with a few unrecorded solo answers that she scores 4 out of 5 herself. In her first partner mock the partner scores her 2.5 on metrics and 3 overall, and she runs out of time before reaching the metrics. The hours were real and mostly unmeasured, and the confidence was unearned. A better start: a timed partner mock in the first week, scored independently, with one fix and a retest.

**Realism rules.** Same time limit; no stopping to think for minutes (a short pause is fine); no notes if the real interview forbids them; the same tool (document or whiteboard) you will use; dress and setting as in the real interview at least once.

### C34.2 Rubrics by round type

A **scorecard** is a one-page form with the dimensions of a round, a score for each anchored to the bands, the evidence for each score and an overall lean (hire, lean hire, lean no hire, no hire) (FW-C34-02). The scorecards below are the author's synthesis from the interview-bank rubrics in this book, from the attributes companies publish and from the evidence-based practice described in C33.2; companies do not publish scoring rubrics at this resolution `Original` `Inferred`.

**Scale.** Five points, anchored: **1** not shown or harmful; **2** Baseline (vocabulary without substance); **3** adequate but generic; **4** Strong (clear hire signal on this dimension); **5** Standout (a reason to hire). Scores of 4 and above across most dimensions, with no 1 or 2 on a dimension central to the round, is what a competitive loop looks like `Inferred`.

**Product sense, design and improvement (C06 to C11).**

| Dimension | Baseline (2) | Strong (4) | Standout (5) |
|---|---|---|---|
| Framing | Restates the prompt; jumps to features | Clarifies goal and context; states the problem for a chosen user | Reframes the problem in a way that changes the options; names assumptions |
| User empathy | Generic "users" | Distinct segments, a chosen one, real needs with evidence | A specific scene from the user's day; the non-obvious need |
| Solutions | A list of features | Several distinct ideas, one chosen with reasons | A bold option plus a safe one; tradeoffs priced |
| Metrics and risks | Names a metric | Primary metric with guardrails; risks | A decision rule; second-order effects |
| Communication | Rambling | Structured, signposted, time-managed | Crisp; adapts to interruptions |

**Analytical, metrics and execution (C05, C12 to C15, C17).**

| Dimension | Baseline (2) | Strong (4) | Standout (5) |
|---|---|---|---|
| Structure | Lists causes | A tree or hypothesis list, prioritized | Falsifiable hypotheses with the first cheap check |
| Metric choice | A vanity metric | Defined with numerator, denominator and window; guardrails | Anticipates gaming; ties to the decision |
| Quantitative reasoning | Hand-waving | Correct arithmetic; sanity checks | Uses uncertainty and ranges; finds the segment insight |
| Experiment and causality | "Run an A/B test" | Unit, duration, power, pitfalls | Handles novelty, interference and long-term effects |
| Recommendation | Describes data | Decides with a rule and a risk | States what would change the decision |

**Estimation (C04).**

| Dimension | Baseline (2) | Strong (4) | Standout (5) |
|---|---|---|---|
| Structure | A single guess | A decomposition with stated assumptions | Two independent approaches that cross-check |
| Arithmetic | Errors | Correct, rounded sensibly | Clean order-of-magnitude handling |
| Sanity check | None | Compares with a known figure | Explains the likely error and its direction |

**Technical and system design (C21, C22).**

| Dimension | Baseline (2) | Strong (4) | Standout (5) |
|---|---|---|---|
| Fluency | Uses terms loosely | Explains how it works in plain words | Chooses the right level for the audience |
| System thinking | Boxes with no flow | Components, data flow, failure modes | Latency, scale and cost numbers; degradation design |
| Tradeoffs | Lists options | Chooses with a reason | States what would change the choice |
| Questions | Few | Clarifies constraints | Questions that reveal a hidden requirement |

**AI and ML (C23 to C25).**

| Dimension | Baseline (2) | Strong (4) | Standout (5) |
|---|---|---|---|
| Fit | "Use AI" | States the decision, error cost and a rule-based alternative | Applies a fit test and tolerable error rate |
| Failure modes | Mentions hallucination | Maps failure modes to mitigations | Layers, red-team, upper bounds, kill switch |
| Evaluation | "Test it" | Test set, rubric, human review | Sample size, agreement, calibrated model grader |
| Cost and risk | Ignored | A cost per request estimate | Margin by segment; regulation by risk tier |

**Behavioral and communication (C31, C32).**

| Dimension | Baseline (2) | Strong (4) | Standout (5) |
|---|---|---|---|
| Ownership and decision | "We" throughout; no decision | States the decision and options; "I" for own actions | Owns a hard call and its cost |
| Evidence | No numbers | Numbers with baselines | Honest limits; credit for others |
| Probing | Story collapses | Three levels of concrete answers | Admits flaws; shows judgment |
| Learning | Generic | A changed behavior | Evidence the new habit works |
| Structure and delivery | Rambling | Answer first; 2 to 3 minutes | Crisp; adapts to the listener |

**Using a scorecard.** Score each dimension from evidence, not impression: write the sentence you said or the thing you did next to the score. Then set the overall lean from the pattern.

### C34.3 Three full mock loops

Section 5 contains three annotated mock loops, all `Illustrative` with invented content: a Google-style loop (product design, analytical and behavioral rounds), an Amazon-style loop (principle-based behavioral rounds with deep probing and a written exercise) and an Apple-style loop (team-specific, craft-focused, with a final panel). Each shows condensed transcripts, the evidence an interviewer would write, scorecards and a debrief. They are not scripts to imitate. Read them with the scorecards in C34.2 open, score each round yourself first and then compare.

### C34.4 Self-scoring and calibration against the bands

**Calibration** is the alignment of your self-assessment with outside judgment: how closely your scores match those of an independent, competent judge (FW-C34-03). Without it you may practice the wrong things with confidence. The research behind this chapter is a warning: in a well-known experiment, students who repeatedly reread material felt much more confident than students who tested themselves, and remembered less a week later (CS-C34-02). Feeling fluent is not evidence of being good.

**Method.**
1. After a mock, and before any feedback, write your score on each dimension with the evidence.
2. Have the partner score independently with the same scorecard.
3. Compare. For each dimension compute the difference (yours minus theirs). Over eight mocks, compute your *bias* (the mean difference: positive means you overrate yourself) and your *error* (the mean absolute difference).
4. Look at where you differ by two or more points and talk it through: who had the better evidence?
5. Adjust: if your bias is +0.75, subtract about three-quarters of a point from your self-scores until it shrinks, and use the partner's scores for decisions.

Worked example 4 computes a bias of +0.75 over eight mocks.

**Anchors help.** Use the written anchors (C34.2) and your own saved examples of 2s, 4s and 5s so that your scale does not drift. Re-read the anchors before scoring, and score recordings you made a month ago to check your consistency. Where two scorers agree beyond chance the scale is working; where they do not, the anchors need examples (the same lesson as C25.1 on rater agreement).

### C34.5 The answer-journal review loop

An **error log** is a running list of the specific mistakes you made in practice, each with its cause and the fix you will apply, which you review regularly (FW-C34-04). The loop:

1. **Do** a mock or drill under realistic conditions.
2. **Record** the prompt, the time taken, what you said (the recording or notes) and your scorecard.
3. **Score** with evidence, before the partner's feedback.
4. **Find one fix.** From the scorecard and the partner's notes, choose the single change that would raise the score most (for example, "state the metric's numerator and denominator").
5. **Log** the error: what happened, the cause, the fix. Entries are specific ("spent 14 minutes on users, left 3 for solutions"), not generic ("manage time better").
6. **Drill** the fix in isolation (C34.6) for ten to fifteen minutes.
7. **Retest within about 72 hours** on a different prompt of the same type; then again after a week. Spacing the retest rather than repeating it at once is a separate, widely used practice (the spacing effect); the testing effect itself, in CS-C34-02, is about retrieving rather than rereading.
8. **Review the log weekly:** which errors recur? Recurring errors become the next week's drills.

**What to record each time.** Date, round type, prompt, minutes used by phase, score by dimension (self and partner), the one fix, the retest date. Over weeks the log is the data for diagnosing your weakest competency (C34.7).

### C34.6 Drill library by question type

A drill is a short, focused exercise on one skill, ten to fifteen minutes, with a clear success test (FW-C34-05). Use drills for the fixes the log reveals; use full mocks to check that the skill holds together.

| Drill | How to run it | Success test |
|---|---|---|
| Answer-first in 60 seconds | Take any prompt; give the answer and three supports in 60 seconds; record | The answer in the first 15 seconds; three named supports |
| Clarifying questions | For ten prompts, write the three questions that most change the answer | Each question would change the design or the metric |
| Structure on a blank page | Build an issue tree or a user-problem map in 3 minutes | MECE branches; a first check named |
| Metric definition | Define a metric with numerator, denominator, window, guardrail in 2 minutes | No missing element; a gaming risk named |
| Estimation | One estimation in 8 minutes, two approaches | Answers within a factor of 2 of each other; a sanity check |
| Diagnose a metric change | A prompt with a 5% drop: list hypotheses and the order of checks in 5 minutes | Falsifiable hypotheses; cheapest check first |
| Story compression | Tell a story in 3 minutes, then in 90 seconds, then in 30 | Decision and result survive each cut |
| Probe ladder | A partner asks six probes (three levels) on a story | No invented detail; flaws admitted |
| Technical explanation | Explain an API or a cache to a non-technical person in 90 seconds | The listener can repeat it |
| AI failure-mode map | Take an AI feature; fill the failure-mode map in 8 minutes | Each failure has a mitigation and a test |
| The no script | Write and say three no scripts in 5 minutes | Goal acknowledged; alternative and path to yes |
| Recovery moves | Practice the three recovery phrases (C34.8) aloud | Said calmly, within 5 seconds of noticing |

**When not to drill.** If the problem is a gap in knowledge (you do not know what a numerator and denominator are, or how a cache works), learn it first from the relevant chapter, and drill afterward; drilling a skill you have not understood reinforces errors. Do not drill a dimension that already scores 4 consistently; spend the time on a weaker one.

**Rules.** One skill per drill; record or write; check against the success test; log the result; repeat on a new prompt in 72 hours.

### C34.7 Diagnosing the weakest competency and targeted practice

After six to eight scored mocks you have data (FW-C34-06). Do not rely on feeling.

1. **Tabulate** scores by dimension across mocks (use the partner's or the calibrated scores).
2. **Find the lowest average** and the highest variance. A low, stable score is a skill gap (train it). A high variance is a consistency gap (add a checklist or a drill that makes it routine).
3. **Weight by stakes.** A weak dimension that appears in many rounds or that carries a veto matters more (importance × gap, C33.14).
4. **Pick one or two targets** and set a number: "metrics dimension from 2.3 to 3.5 in three weeks."
5. **Practice deliberately.** **Deliberate practice** is a form of practice, described in the research on expertise, in which you work on a specific aspect of performance, with immediate informative feedback and repeated attempts at the same or similar tasks `[V: Ericsson, Krampe and Tesch-Römer, Psychological Review (1993)]`. In this book: a drill, a scored retest and a fix.
6. **Re-score** after two weeks and move to the next weakest dimension. Stop adding hours to a dimension that has reached 4 and a consistent pattern.

Worked example 5 diagnoses a candidate whose metrics dimension averages 2.3 and allocates 20 hours.

### C34.8 Managing nerves and recovering from a bad round

Some nervousness is normal and can sharpen attention; the aim is to keep it from damaging structure and judgment. What helps, in order of reliability `Inferred`:

- **Preparation under realistic conditions.** The more your mocks resemble the real round, the less new the real round feels. This is the main reason to run timed partner mocks.
- **A routine.** The same opening each time: a breath, the plan stated aloud ("I'll clarify, structure, answer, then check risks"), the first clarifying question. A routine gives your mind a track to run on.
- **Pacing.** Nerves speed speech. Slow the first sentence deliberately; pause before answering; sentences are shorter and clearer.
- **Body basics.** Sleep, food, water, a short walk before; slow breathing with a longer exhale for a minute before a round (a short adaptation of practices studied at five minutes a day) `[V: Balban et al., Cell Reports Medicine 4(1), 2023: daily 5-minute exhale-focused breathing improved mood and lowered respiratory rate more than mindfulness; one minute before a round is an adaptation; sleep, food, water and a walk are general advice, not sourced]`.
- **Reframing.** Treat the interview as a conversation to collect evidence of how you think, not a verdict on you. A question you cannot answer is a chance to show how you think when you cannot.
- **If anxiety is severe or persistent,** talk to a doctor or a counselor; this is outside what a book can address.

**Recovery moves in the round (FW-C34-07).** Practice three phrases until they are automatic. *When you blank:* "Let me take a moment to structure this." Then structure. *When you notice a mistake:* "I want to correct something I said: it should be X." Then continue. *When you are lost in the middle:* "Let me summarize where I am and what I still need to cover." Then state the plan. Interviewers record how you recover; a clean recovery is a positive data point.

**Between rounds.** Stand, drink water, write one line about what to improve, and leave the last round behind. Do not replay it. A bad round has a limited effect on a loop that has other rounds, and there is no way to know how it was scored.

**After a bad loop.** Write down the questions and your answers within an hour; note what you would change; give yourself a day; then go back to the log and fix the one or two errors that mattered. A rejection is information about one loop at one time (the base rate of rejection at selective companies is high `Inferred`); it is not a verdict on your ability.

### C34.9 Using AI as a practice partner: strengths, blind spots and a checking routine `[as of 2026-10]`

AI tools can speed practice and can mislead it. Used well they are a cheap interviewer available at any hour (FW-C34-08).

**Strengths.** Generating prompts for a round type; playing an interviewer who asks probes; summarizing a transcript of your answer and listing where the structure broke; comparing your answer to a rubric you supply; suggesting follow-up questions; producing a company reading list.

**Blind spots.** *Flattery and lenient scoring* (models tend to agree with the user and rate answers highly); *inconsistency* (the same answer can get different scores); *invented facts* about companies, products and processes (hallucination, C24.3); *no real pressure or real interruption*; *a preference for fluent, long answers* that real interviewers penalize; and a reluctance to say a hard thing plainly.

**A checking routine.**
1. **Give the rubric** (the scorecard from C34.2) and ask for scores with the sentences from your answer as evidence for each. If it cannot quote you, discard the score.
2. **Ask for the strongest criticism** first, and for what a skeptical interviewer would write.
3. **Run it twice** on the same answer and compare; large differences mean the score is noise.
4. **Calibrate it** against a human: score five of your answers with a partner and with the tool; compute the tool's bias and error as in C34.4. If it overrates by a point, subtract a point, or use it only for ideas, not scores (the same discipline as C25.1 on model graders).
5. **Verify every fact** about a company or a process against primary sources (C33.10); treat the tool's claims as hypotheses.
6. **Keep real practice real:** use the tool for prompts and critiques, but do live mocks with a person at least weekly.
7. **Do not paste confidential material** from a past or current employer.
8. **Do not use an AI tool during a real interview** unless the company explicitly permits it for that round (C33.13).

### C34.10 The final-week protocol

The last week is for consolidation and rest, not for new material (FW-C34-02 and the checklist below). A typical schedule for a loop on day 0:

| Day | What to do |
|---|---|
| −7 | Last full mock loop; score it; choose the one or two fixes that matter most |
| −6 | Drill the fixes; update the error log; confirm logistics in writing (times, time zone, tools, policy) |
| −5 | Review the company brief and your "why us"; rehearse your tailored stories aloud |
| −4 | Two short timed drills on the weakest dimension; no new frameworks |
| −3 | A final partner mock of one round type (not a full loop) |
| −2 | Light review: story headlines, brief, questions to ask; tech check on the real device and network; stop new material |
| −1 | Rest. A short walk, a light review of one page, early sleep; prepare clothes, water, notes; do not cram |
| 0 | Routine: wake early, food, light movement, 15-minute review of headlines, tech check, a breath before each round |
| After | Notes within an hour; thank-you within a day; log the questions; rest |

**Rules.** No new methods in the last three days; sleep protected; logistics settled two days before; one last look at the policy on assistance; arrive with a plan for each round and a routine between them. If you are interviewing across time zones, apply the sleep and logistics advice from C33.13.

## 3. Frameworks

Eight frameworks, set out below. The scorer's view (FW-C33-02), the round-time budget (FW-C33-03), the company-specific preparation plan (FW-C33-08), the probe ladder (FW-C31-05) and the failure-story test (FW-C31-06) are reused, not repeated.

#### FW-C34-01 · The mock plan · Original

- **Inputs:** a target date, weekly hours and your weakest round types.
- **Outputs:** a schedule of solo drills, partner mocks and recorded reviews; realism rules; partner roles and a debrief format; a cadence that rises toward full mock loops and tapers in the last week.
- **Assumptions:** you can find at least two partners and record yourself.
- **Tradeoffs:** more mocks give more feedback and cost more partner time; solo drills are cheap and lenient.
- **Failure modes:** only solo practice; one partner; no recording; mocks without scores.
- **Worked example:** Worked example 4 and EX-C34-01.

#### FW-C34-02 · The scorecard · Original

- **Inputs:** a round type and its dimensions (C34.2).
- **Outputs:** a one-page form: dimensions, a 1 to 5 score anchored to the bands, the evidence sentence for each score, and an overall lean (hire, lean hire, lean no hire, no hire).
- **Assumptions:** scoring is done from evidence, before discussion, by you and an independent scorer.
- **Tradeoffs:** a detailed form is slower to fill and more reliable.
- **Failure modes:** scores with no evidence; inflating to feel good; changing the scale between mocks.
- **Worked example:** Worked examples 1 to 3.

| Dimension | Score (1 to 5) | Evidence (what was said or done) |
|---|---|---|

#### FW-C34-03 · The calibration check · Original

- **Inputs:** self-scores and an independent scorer's scores for at least six mocks.
- **Outputs:** bias (mean of self minus other), error (mean absolute difference), the share of scores within one point, the dimensions where you differ by two or more, and a correction to apply to self-scores.
- **Assumptions:** the outside scorer is competent and uses the same anchors.
- **Tradeoffs:** costs a scorer's time and removes the main source of false confidence.
- **Failure modes:** scoring after hearing the other's score; a lenient friend as the only scorer.
- **Worked example:** Worked example 4 and EX-C34-03.

Formulas: **bias = mean(self − other); error = mean(|self − other|).**

#### FW-C34-04 · The answer-journal review loop · Original

- **Inputs:** a mock or drill and its recording or notes.
- **Outputs:** an error log entry (what happened, cause, one fix), a drill for the fix, a retest on a new prompt within about 72 hours and again after a week, and a weekly review of recurring errors.
- **Assumptions:** you log specifics, not generalities.
- **Tradeoffs:** logging takes ten minutes a session and turns practice into improvement.
- **Failure modes:** vague entries; many fixes at once; no retest.
- **Worked example:** CS-C34-01.

| Date | Round | Error (specific) | Cause | One fix | Drill | Retest date and score |
|---|---|---|---|---|---|---|

#### FW-C34-05 · The drill library entry · Original

- **Inputs:** a skill a fix targets.
- **Outputs:** a ten to fifteen minute drill with a run instruction and a success test, recorded in the library (C34.6), with the date last run and the result.
- **Assumptions:** one skill per drill.
- **Tradeoffs:** drills build skills in isolation; mocks check that they combine.
- **Failure modes:** drilling several skills at once; no success test.
- **Worked example:** EX-C34-05.

#### FW-C34-06 · The weakest-competency diagnosis · Original

**Core framework.** Learn this one first.

- **Inputs:** six to eight calibrated scorecards.
- **Outputs:** the average and variance by dimension, importance by round weight, importance × gap, one or two targets with numeric goals, hours allocated (importance × gap scaled to the weekly hours), and a re-score date.
- **Assumptions:** scores are calibrated.
- **Tradeoffs:** a data-driven plan can neglect a strength that needs maintenance.
- **Failure modes:** practicing the favorite dimension; changing targets weekly; no numeric goal.
- **Worked example:** Worked example 5 and EX-C34-06.

#### FW-C34-07 · The recovery moves and nerves plan · Original

- **Inputs:** your three most likely in-round failures (blanking, an error, losing the thread).
- **Outputs:** a rehearsed phrase and a next action for each, an opening routine, a pacing rule, between-round reset steps and an after-a-bad-round protocol.
- **Assumptions:** you rehearse the phrases aloud.
- **Tradeoffs:** a routine can feel mechanical; it frees attention for the question.
- **Failure modes:** improvising a recovery under pressure; replaying the last round.
- **Worked example:** EX-C34-07 and IQ-C34-04.

| Moment | Phrase | Next action |
|---|---|---|
| Blank | "Let me take a moment to structure this." | Write two or three headings; continue |
| Mistake | "I want to correct something: it should be X." | Fix and continue |
| Lost thread | "Let me summarize where I am and what's left." | State the plan and the remaining steps |

#### FW-C34-08 · The AI practice-partner checking routine · Original

- **Inputs:** an AI tool, the scorecard and your answers.
- **Outputs:** scores with quoted evidence; the strongest criticism first; two runs compared; a calibration against a human (bias and error); verification of any fact against a primary source; and a rule for what the tool is used for (prompts and critique) and not (final scores, facts, live interviews unless permitted).
- **Assumptions:** the tool tends to flatter and to be inconsistent.
- **Tradeoffs:** cheap, fast feedback against reliability.
- **Failure modes:** accepting a high score; uncorrected bias; unchecked facts; pasting confidential material.
- **Worked example:** EX-C34-08 and IQ-C34-06.

## 4. Answer architecture

### The "How do you prepare, and how do you handle feedback?" answer, for 90 seconds

| Step | Seconds | What to produce |
|---|---|---|
| The system | 20 | What you do: timed mocks, scorecards, an error log, a partner |
| A specific fix | 30 | One error you found, the drill, the retest and the number |
| Calibration | 20 | How you checked your own judgment |
| What it shows | 20 | The habit, and how you use it at work |

**Pacing rules.** Keep to ninety seconds; one specific example beats a list of habits.

**How to say it.** "I record and score every mock before my partner does, then compare; I found I overrated myself by about three-quarters of a point, so I use the partner's scores to decide what to practice."

**How to close.** "That loop is how I improve at anything: record, score, one fix, retest."

### The 60-minute partner-mock architecture

| Block | Minutes | What to do |
|---|---|---|
| Setup | 3 | Agree the round type, length, rubric; start the recording |
| The round | 35 to 45 | Timed, aloud; the partner probes three levels and interrupts once |
| Silent scoring | 5 | Both score independently with evidence |
| Debrief | 10 | Compare scores; discuss differences of two or more points; choose one fix |
| Log | 2 | Enter the error and the retest date |

### Type: how do you prepare or practice

The system, one specific fix with a number, calibration.

### Type: critical feedback you received

A specific piece of feedback; what you changed; evidence it worked; how you asked for more.

### Type: nerves, freezing or a bad round

Preparation under realistic conditions, a routine, recovery phrases, between-round reset.

### Type: readiness

Scores at Strong or above across round types, consistent timing, stories that survive probing, a taper.

### Type: using AI tools to prepare

Prompts and critique, checking routine, calibration, verification, no use in live interviews unless permitted.

### Common interviewer interventions, and what to do

| Interviewer says | What it means | What to do |
|---|---|---|
| "How do you know you've improved?" | Evidence | Give scores before and after, and the retest |
| "Tell me about feedback that was hard to hear." | Openness | A specific item, a change, a result |
| "How do you handle pressure?" | Method | A routine and a recovery phrase, with an example |
| "What would you do differently?" | Learning | A concrete fix from your log |
| "Why should we believe your self-assessment?" | Calibration | Your bias figure and how you corrected it |

## 5. Worked examples

All five examples are `Illustrative`: the candidates, teams, transcripts and scores are invented (invented), built to show structure, and the arithmetic was computed. The first three are the full mock loops. Read each round, score it yourself with the scorecards in C34.2 before reading the evidence and scores, then compare.

### Worked example 1 — A Google-style mock loop (Illustrative)

*Three rounds for a candidate, Asha (a composite, invented) (invented), with two years of experience, in the style candidates commonly report for a Google-type APM loop `Inferred` `[unverified: candidate-reported]`. Transcripts are condensed.*

**Round 1: product design (45 minutes).** Prompt: "Design a feature to help families plan a shared trip."

*Excerpt.* **Asha:** "Before I design, may I ask two things? Is the goal more planned trips or better trips? And are we focused on a particular kind of family?" **Interviewer:** "Better trips, and let's say families with school-age children." **Asha:** "Then I'd start with the problem: the person who plans is usually one parent, and the pain is collecting everyone's preferences without a long group chat. I'll focus on that planner. Three options: a shared voting board for activities, a daily schedule that fits kids' energy and nap times, and a budget tracker. I'd choose the voting board first, because it addresses the coordination pain at the lowest cost, and I'd measure the share of trips where at least three members vote, with the planner's time-to-itinerary as a guardrail." **Interviewer:** "What if the other parent doesn't use the app?" **Asha:** "Good point, that breaks the voting idea. I'd allow voting through a link with no account, which also helps grandparents. I'd check the link-vote rate."

*Annotations.* [Clarifying questions changed the scope; named a user; priced the choice; recovered from the challenge by changing the design.] [Missed: no second-order risk (what if voting causes conflict); metric lacked a decision rule.]

*Scorecard.* Framing 4 ("clarified the goal and the family type"); user 4 ("identified the planner and the pain"); solutions 3 ("three options, one chosen; none bold"); metrics 3 ("primary and guardrail; no decision rule"); communication 4 ("structured; adapted to the challenge"). *Lean hire.*

**Round 2: analytical (45 minutes).** Prompt: "Time spent on the recipe feature in a search app fell 8% week over week. Diagnose."

*Excerpt.* **Asha:** "First I'd confirm it's real: check logging, definition changes and seasonality. Then segment: platform, country, new versus returning users. Hypotheses: a ranking change, a release bug on one platform, or a seasonal dip. The cheapest check is the release log against the date of the drop." **Interviewer:** "Suppose it's concentrated on Android and began with last Tuesday's release." **Asha:** "Then I'd look at crash and load times on that version. If time per session fell 8% and sessions are 40% of Android traffic, the effect on Android is 20%." **Interviewer:** "Check that." **Asha:** "Sorry: 8% overall, with Android 40% of the traffic, is 8 ÷ 0.4 = 20%, yes, if all of the drop is on Android." **Interviewer:** "And what do you do?" **Asha:** "Roll back or fix forward depending on severity; I'd decide with the crash data."

*Annotations.* [Good structure and first check. The arithmetic slip was caught by the interviewer and the candidate recovered; but "sessions are 40% of traffic" was assumed without saying so.] [No mention of an experiment or of novelty.]

*Scorecard.* Structure 4; metric choice 3; quantitative 2 ("assumed the share without stating it; needed a prompt to check"); experiment and causality 3; recommendation 3. *Lean no hire on this round alone; lean hire if the other rounds are strong.*

**Round 3: behavioral, ambiguity (45 minutes).** Prompt: "Tell me about a time you worked on an unclear problem." Asha tells the activation story from C31 (a working definition, three cheap tests, what she set aside), with numbers, and answers three levels of probes.

*Scorecard.* Ownership and decision 4; evidence 4; probing 4; learning 4; delivery 4. *Hire.*

**What the committee reads (condensed evidence).** "Product design: clarified and framed well, recovered from a challenge; ideas safe. Analytics: strong structure; arithmetic needed prompting; assumed a figure without stating it. Behavioral: clear decision and evidence, withstood probing. Overall: lean hire; recommend a further analytical interview or note the analytics risk."

**What this shows.** Scoring each dimension from the sentence said made the weak spot visible (the unstated assumption in the arithmetic), and the loop's lean came from the pattern, not one round.

### Worked example 2 — An Amazon-style mock loop (Illustrative)

*A loop in the style candidates commonly report for an Amazon-type process `Inferred` `[unverified: candidate-reported]`: behavioral rounds anchored to leadership principles, deep probing, and a written exercise. The candidate, Ravi, is a composite (invented).*

**Round 1: ownership and disagreement.** Prompt: "Tell me about a time you disagreed with a decision and committed anyway." Ravi tells the pricing-page story (C31 IQ-C31-04) in 2 minutes 40 seconds. The interviewer probes.

*Probe ladder.* 1. "What exactly did you write in your note?" **Ravi:** "A one-page note with two earlier results, a proposal for a 10% holdback and its cost: about 2% of quarterly volume." 2. "Why did you propose 10%?" **Ravi:** "It was the smallest group that would detect a 3% change in two weeks; I computed it from the page's traffic." 3. "What did the data show about the earlier two redesigns?" **Ravi:** "Conversion fell 2% and 4%; I had the dashboards." 4. "What would you do differently?" **Ravi:** "Bring the date's value in numbers to the first conversation." 5. "What was the effect on customers?" **Ravi:** "Conversion fell 3%, which meant... I don't have the customer-level numbers; I know checkout completion fell and support contacts rose a little."

*Annotation.* [Levels 1 to 4 concrete. Level 5 is thin: the answer drifted to business metrics and could not give the customer effect.]

*Scorecard.* Ownership and decision 4; evidence 3 ("no customer-level number"); probing 3 ("held to level four; thin at five"); learning 4; delivery 4. *Lean hire.*

**Round 2: dive deep into data.** Ravi tells the double-counted-events story (C31 Worked example 3). Probe: "How did you know the corrected number was right?" **Ravi:** "Two independent counts agreed after the fix, and the engineer confirmed the event schema." Probe: "Was it only one test affected?" **Ravi:** "I checked the last three; none were." Scorecard: ownership 4; evidence 4; probing 4; learning 4. *Hire.*

**Round 3: customer obsession, a repeated story.** The interviewer asks about a time he went deep on a customer problem; Ravi retells the pricing-page story, this time on the user impact. *Annotation:* [Reusing a story in a second round is a risk: the interviewers compare notes in the debrief, and a repeated story looks like a thin bank.] Scorecard: ownership 3; evidence 3; probing 3; learning 3. *Lean no hire on this round.*

**Written exercise (excerpt of the first paragraph).** "**Recommendation:** extend the free trial from 7 to 14 days from 1 November. **Why:** a four-week test on 12,000 users converted 10.4% against 9.0% (interval 9.9% to 11.0%), worth about 840 more paying customers a month. **Cost and risk:** about $4,800 a month in extra infrastructure; delayed cash. **Decision needed by Friday.**" *Annotation:* [Answer first; the number with an interval; the ask and deadline.] *Scorecard:* structure 5; evidence 4; clarity 4.

**What the debrief reads (condensed).** "Strong ownership and disagreement story with a protective mechanism; thin on customer-level evidence; the same story appeared in two rounds; the written answer was clear and well structured. Lean hire; concern about the depth of the story bank."

**What this shows.** Five-level probing exposes the gap between business metrics and customer impact; a repeated story costs a round; and the written exercise can recover a loop.

### Worked example 3 — An Apple-style mock loop (Illustrative)

*A loop in the style candidates commonly report for a team-specific, craft-focused process `Inferred` `[unverified: candidate-reported]`, with a final panel. The team, a group working on family photo libraries, and the candidate, Mei, are invented (invented); nothing here describes any real Apple team or process. Transcripts are condensed.*

**Round 1: hiring manager (30 minutes).** *The manager asks about a product Mei shipped and why this team.*

*Excerpt.* **Manager:** "Tell me about a product detail you cared about and what it cost." **Mei:** "In a note-taking app, the first screen was a blank page, and 46% of new users left without writing. I watched ten users start; six stared at it. We spent five engineering days on first-run wording and an example note, which delayed a sharing improvement by two weeks. First-session note creation rose from 54% to 63%. I also spent a day on an animation that tests showed nobody noticed, and cut it." **Manager:** "Why this team?" **Mei:** "I've used shared photo libraries with my family for a year; after a trip, a thousand photos arrive and no one knows which are for them. I'm drawn to the problem of selecting, not just sharing." **Manager:** "What would you change?" **Mei:** "I don't know the constraints, so this is a hypothesis: a highlights view of three to four representative photos per event, with the full set one tap away, measured by how many members view photos shared by someone else."

*Annotation.* [A craft story with a priced cost and an honest waste; team-specific; a critique framed as a hypothesis.] *Scorecard (behavioral and fit):* decision 4; evidence 4; probing not yet tested 3; learning 4; fit 4. *Lean hire.*

**Round 2: design partner (45 minutes).** *A designer asks Mei to critique an existing flow.* Prompt: "Here is the screen where a family picks the best photos from a trip. Critique it."

*Excerpt.* **Mei:** "The job here is choosing a few photos fast. What I notice: the grid shows 300 photos at equal size, so nothing signals which are good; there is no sense of who is in each photo; and the select button is at the top, far from the thumb. What I'd keep: selecting by tapping the photo is quick. What I'd test: group by moment, show faces as a small cue, and move the primary action to the bottom. The cost: grouping needs on-device processing and must handle photos of children carefully." **Designer:** "What if people want control over the order?" **Mei:** "Then the default should be a good guess and the order should be draggable; I'd measure how often people change it, which tells us whether the guess is good." **Designer:** "What would you leave out?" **Mei:** "Filters and captions in this step. The job is choosing; decoration can come after."

*Annotation.* [Observation, inference, opinion (C11); specific; a cost named; discipline about leaving things out.] [Weak spot: no mention of accessibility for the selection step.] *Scorecard (product sense):* framing 4; user 4; solutions 4; metrics 3; communication 4. *Lean hire.*

**Round 3: engineering partner (45 minutes).** *An engineer asks about a technical judgment.* Prompt: "Should grouping people in photos run on the device or in the cloud?"

*Excerpt.* **Mei:** "I'd lean to the device, because faces are sensitive, the processing can run when the phone is idle and charging, and it works offline. The cost: a smaller model, some accuracy loss, battery and storage use, and updates tied to releases. Suppose a 3-billion-parameter model compressed to 4 bits needs about 1.5 GB (parameters times half a byte), which fits on a phone with 3 GB free. For accuracy gaps, I'd test on children's faces and on older photos; where the device model is uncertain, show 'Not sure' instead of a wrong name." **Engineer:** "What if it's wrong in a way that hurts someone?" **Mei:** "Then the product should make correction easy, avoid labeling by default for children, and let a person remove a label across the library. I'd also want a way to turn the feature off." **Engineer:** "How would you know it works?" **Mei:** "A labeled test set with consent, accuracy by group and age, and a guardrail on wrong-name reports."

*Annotation.* [Reasoned numerically; privacy as a design constraint; fallback ("Not sure"); evaluation named.] *Scorecard (technical and system):* fluency 4; system thinking 4; tradeoffs 4; questions 3 ("asked no clarifying questions about the library size or devices"). *Lean hire.*

**Round 4: final panel (senior PM, design lead, engineering lead; 45 minutes).**

*Excerpt.* **Senior PM:** "Tell me about a time you said no." **Mei:** "A partner asked me to share 40,000 users' emails for a promotion. I checked the consent records, found no consent for partner marketing, proposed an in-product opt-in instead and wrote it up for the privacy owner. It cost us three weeks and about 80% of the short-term revenue; 6,200 users opted in and produced about $11,000 in the first month with no complaints." **Design lead:** "What would you leave out of a first version of the highlights feature?" **Mei:** "Auto-generated captions and sharing suggestions. First make the selection trustworthy." **Engineering lead:** "How do you work with engineers when you disagree?" **Mei:** "I ask what drives the cost, look for a cheaper test, and commit once we decide." **Senior PM:** "What is the thing about this team's product you'd most want to understand before you started?" **Mei:** "How you decide what counts as a good highlight; if the team measures it by views, it might favor popular photos over meaningful ones."

*Annotation.* [Values story with a priced cost; consistent with the earlier craft theme; a sharp final question. The same privacy story appears in this round and is new to this panel, so no repetition.] *Scorecard (behavioral and fit):* decision 5 ("priced the cost, offered an alternative"); evidence 4; probing 4; learning 4; fit 4. *Hire.*

**The debrief (the hiring manager decides with the panel's evidence).** "Craft stories with real costs; consistent privacy judgment; strong design critique; technical reasoning with numbers and a fallback; two small gaps: no accessibility mention in the design round and no clarifying questions in the engineering round. Decision: hire; ask the team to probe accessibility in a follow-up."

**What this shows.** A team-specific loop has several interviewers testing the same themes (craft, privacy, leaving things out) from different angles; consistency across rounds, with honest costs, builds the evidence; and small gaps (accessibility, clarifying questions) are exactly what a scorecard exposes.

### Worked example 4 — Calibrating your self-scores (Illustrative)

**The data (invented).** Over eight mocks, a candidate scores herself and a partner scores independently with the same scorecard (overall score out of five).

| Mock | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| Self | 4 | 4 | 3 | 5 | 4 | 3 | 4 | 5 |
| Partner | 3 | 3 | 3 | 4 | 3 | 3 | 3 | 4 |
| Difference | +1 | +1 | 0 | +1 | +1 | 0 | +1 | +1 |

**Compute (FW-C34-03).** Bias = mean of (self − partner) = (1 + 1 + 0 + 1 + 1 + 0 + 1 + 1) ÷ 8 = +0.75. Error = mean absolute difference = 0.75 (every difference is zero or positive). All eight scores are within one point; only two (25%) match exactly.

**Read it.** The candidate is consistently generous by about three-quarters of a point: where she thinks she is at a 4, the partner sees a 3. Because the bias is steady, it is correctable: subtract 0.75 from self-scores, so that her corrected scores are 3.25, 3.25, 2.25, 4.25, 3.25, 2.25, 3.25 and 4.25. Treat her "4" as roughly a 3.25 until the bias shrinks.

**Find the cause.** She compares the dimensions where the partner differs by one point and finds a pattern: she credits herself for "structure" when she states a framework, while the partner scores structure on whether the framework fits the problem; she credits metrics when she names one, while the partner wants a numerator, denominator and guardrail. The fix is to re-read the anchors before scoring and to quote the evidence sentence for each score.

**Re-check.** After three more mocks with the anchors and quotes, the differences are +0.5, 0, +0.5: bias +0.33.

**What this shows.** A simple bias figure turned a feeling of "I'm doing fine" into a measured, correctable overrating, and pointed to the anchors as the lever.

### Worked example 5 — Diagnosing the weakest competency (Illustrative)

**The data (invented).** Six scored product-design mocks, calibrated, on five dimensions.

| Mock | Framing | User | Solutions | Metrics | Communication |
|---|---|---|---|---|---|
| 1 | 4 | 4 | 3 | 2 | 3 |
| 2 | 4 | 3 | 4 | 2 | 3 |
| 3 | 3 | 4 | 3 | 3 | 4 |
| 4 | 4 | 4 | 4 | 2 | 3 |
| 5 | 3 | 3 | 3 | 3 | 3 |
| 6 | 4 | 4 | 4 | 2 | 4 |
| **Mean** | 3.67 | 3.67 | 3.50 | **2.33** | 3.33 |
| **Spread** | 0.47 | 0.47 | 0.50 | 0.47 | 0.47 |

**Read it (FW-C34-06).** Metrics is clearly the weakest: a mean of 2.33, and it is stable (spread 0.47), so it is a skill gap, not an inconsistency. The others sit between 3.3 and 3.7.

**Weight by stakes.** Suppose importance is 3 for framing, user and metrics and 2 for solutions and communication (metrics appears in every round, and product rounds weigh it heavily). Importance × gap, with gap = 5 − mean: framing 3 × 1.33 = 4.0; user 3 × 1.33 = 4.0; solutions 2 × 1.5 = 3.0; metrics 3 × 2.67 = 8.0; communication 2 × 1.67 = 3.3. The total is 22.3. With 20 hours, the shares are about metrics 7.2, framing 3.6, user 3.6, solutions 2.7 and communication 3.0: roughly 7, 4, 3, 3 and 3 hours.

**The plan.** Target: metrics from 2.3 to 3.5 in three weeks. Drills: the metric-definition drill (C34.6), ten of them with numerator, denominator, window and guardrail; the diagnose-a-metric-change drill; two partner mocks focused on the metrics part with the partner told what to probe. Retest within 72 hours on new prompts. Re-score after two weeks. What goes wrong if she ignores the data: she keeps practicing user empathy, her strength and favorite, and the metrics score stays at 2 and appears in every loop.

**What this shows.** Averages and weights, not feelings, set the targets and the hours, and a numeric goal with a retest date made the practice accountable.

## 6. Baseline, Strong, Standout

**Prompt:** "Tell me about a time you received critical feedback."

### Baseline answer

"My manager once said I should communicate more. I took it on board and tried to communicate better, and it went well."

*What is wrong:* no specifics: what was said, what changed, what evidence; "communicate more" is a platitude; no number.

### Strong answer

"My manager told me that my weekly updates were long and that she couldn't tell what I needed from her. I was hurt at first, since I thought the length showed effort. I asked her for an example of an update she liked, and I rewrote mine in four lines: status, what changed, what's next, and what I need. Within a month, replies went up and blockers I raised were resolved faster."

### Standout answer

Everything in the Strong answer, plus:

"I asked for specifics, and I tested whether the change worked. I measured it: replies to my updates went from 3 of 25 recipients to 15, and blockers were resolved in 1.5 days instead of 4.5. I also checked my own judgment: I asked two colleagues to read an update and say the point after one read; the first couldn't, and I rewrote it again. Since then I ask for feedback after every major deliverable with a specific question ('what would have made this easier to act on?'). The feedback I found hardest was that I had assumed length equals effort; what I took from it is that the reader's time is the measure, which I now apply to documents, presentations and these interviews: I record my mock answers and score them against a rubric before my partner does. Last quarter I found I overrate myself by about three-quarters of a point, so I use my partner's scores to choose what to practice."

### What moves an answer up a band

| From Baseline to Strong | From Strong to Standout |
|---|---|
| Names the specific feedback and the change | Measures whether the change worked |
| Shows a before and after | Tests the fix with an outside reader |
| Learns something concrete | Builds a lasting habit and checks one's own bias |

## 7. Company lens

All claims describe what companies say publicly or what candidates commonly report, not insider knowledge. Practice should be shaped by the company's format, which you confirm with the recruiter `[as of 2026-10]`.

> **Company lens: Google [as of 2026-10].** Google describes structured, rubric-scored interviews and committee review of written feedback `Public` `[V: summaries citing Google's how-we-hire page; Google re:Work structured-interviewing guide]`; candidates report a loop of three to five interviews `Inferred`. Practical consequence: practice answering for a reader who never met you; score yourself with a rubric; drill structure and clarity; use partner mocks that end with written evidence statements.

> **Company lens: Meta [as of 2026-10].** Meta's published values emphasize speed and directness `Public` `[V: Meta's careers culture page, six core values]`; candidates report back-to-back 45-minute rounds and, for some AI-track roles, an AI product sense round with live prototyping `Inferred`. Practical consequence: practice time discipline in 45-minute rounds, results-first stories and, if the AI round applies, thinking aloud while building.

> **Company lens: Microsoft [as of 2026-10].** Microsoft's culture materials emphasize a growth mindset `Public` `[V: Microsoft careers culture page]`; candidates report loops of design, analytics, high-level technical and behavioral interviews with a final senior conversation `Inferred`. Practical consequence: practice feedback and changing-your-mind stories; use mocks with a stakeholder-mapping prompt; rehearse the final conversation on fit.

> **Company lens: Amazon [as of 2026-10].** Amazon publishes sixteen Leadership Principles `Public` `[V: Amazon's Leadership Principles, as cited by several summaries]`; candidates report repeated, detailed probing, assigned principles per interviewer and a ban on AI tools during interviews `Inferred`. Practical consequence: run five-level probe drills on each story; keep a bank large enough that no story repeats across rounds; practice the written exercise answer-first; do not use AI help in the real loop.

> **Company lens: Apple [as of 2026-10].** Apple publishes no rubric `Inferred`; candidates report team-specific loops with several interviewers from the team and a panel, with confidentiality emphasized `Inferred` `[unverified: candidate-reported]`. Practical consequence: practice critique and craft questions, leaving-things-out drills and privacy scenarios; research the team; run an Apple-style mock like Worked example 3 with a designer and an engineer as partners.

> **Company lens: Netflix [as of 2026-10].** Netflix publishes a culture document with candor and the keeper test `Public` `[V: Netflix culture memo, June 2024]`; candidates report the memo being used as a rubric `Inferred`. Practical consequence: practice giving and receiving direct feedback aloud; prepare a reasoned view of the memo; ask a partner to challenge your independent-judgment stories.

> **Company lens: Stripe [as of 2026-10].** Stripe is widely described as valuing clear writing `Inferred` `[V: The Pragmatic Engineer, Inside Stripe's Engineering Culture Part 2 (strong culture of writing); Slab interview with Stripe's former Documentation Manager]`; I could not confirm its loop format. Practical consequence: practice timed written answers and decision documents (C32.2) and ask the recruiter for the format.

## 8. Common mistakes

| # | Mistake | How to detect it | Fix |
|---|---|---|---|
| 1 | Rereading as practice | Hours logged, no scored mocks | Retrieval: timed, aloud, scored |
| 2 | Hours as the target | "I did 100 hours" | Track scores by dimension, not hours |
| 3 | Leniency in self-scores | Self always above partner | Calibrate; use anchors and quoted evidence |
| 4 | One partner or only friends | Same style, soft feedback | Rotate partners; include a skeptic |
| 5 | Practicing the favorite round | Hours on what you already do well | Diagnose; importance × gap |
| 6 | Many fixes at once | A long list after each mock | One fix per session; retest in 72 hours |
| 7 | No retest | The fix is never checked | Retest on a new prompt, then after a week |
| 8 | Trusting an AI score | "The tool gave me a 9 out of 10" | Quote evidence; calibrate; run twice; verify facts |
| 9 | Spiraling after a bad round | The next round collapses | Reset routine; recovery phrases; do not replay |
| 10 | Cramming new material in the last days | New frameworks the night before | Taper; light review; sleep |

## 9. Mental models applied

Four models, each tied to a decision in this chapter. [[goodharts-law]] is from C02.

**The testing effect** (`MM-testing-effect`). Retrieving information from memory strengthens long-term retention more than rereading it, even when rereading feels easier and builds more confidence (Roediger and Karpicke, 2006; CS-C34-02). It is the reason mocks, drills and retests beat rereading chapters.

**The illusion of competence** (`MM-illusion-of-competence`). Studying again can raise your confidence more than it raises your later recall: in Roediger and Karpicke's experiments repeated studying increased students' confidence, while testing produced better retention after two days and a week `[V: Roediger and Karpicke (2006), abstract opened October 2026]`. Calibrate with outside scores and quoted evidence.

**The spacing effect** (`MM-spacing-effect`). Practice spread over time is retained longer than the same practice massed together `[V: Cepeda et al., Psychological Bulletin, 2006]`. It is the reason to retest after 72 hours and a week, not at once.

**Goodhart's law** (`MM-goodhart`, see [[goodharts-law]], C02). When a measure becomes a target it stops being a good measure. Hours logged, mocks completed and AI scores can each be gamed; the target is the calibrated score by dimension on realistic mocks.

## Engineering, design and data-science perspectives

The best mock partners include people from the disciplines you will face; each gives different feedback.

- **Engineers as partners** will probe whether your technical explanations are accurate and plain, whether you asked about constraints and whether your tradeoffs cost what you say. Ask them to interrupt when a term is used loosely.
- **Designers as partners** will test your critique and craft: whether you start from the user's job, observe before opining and say what you would leave out. Ask them for the screen they would show you.
- **Data scientists as partners** will test your metrics, uncertainty and causal reasoning. Ask them to challenge your numerator, denominator and experiment design.
- **Recruiters and hiring managers**, where you can reach them, will tell you what the real format and expectations are; ask for ten minutes.

## Checklist: before a mock, and before a loop

1. Is the mock timed, aloud, in the real format, with the real tool?
2. Do I have the scorecard, the anchors and a partner who will score independently?
3. Will I score myself, with evidence, before hearing the partner's score?
4. Will I choose one fix, log it, drill it and retest within 72 hours?
5. Have I computed my bias against a partner, and corrected my self-scores?
6. Do I know my weakest important dimension from data, with a numeric goal?
7. Do I have a routine and three recovery phrases for the real round?
8. Is the final week planned: no new material, logistics settled, sleep protected?

## 10. Case studies

#### CS-C34-01 · Forty hours with no feedback · Illustrative · Beginner

*Fictional composite. Every number is invented (invented).*

**Situation.** A candidate with two years of experience spends five weeks preparing: she reads the chapters of a preparation guide, watches sample interviews and does solo practice with no recording, 40 hours in all. In her first partner mock, a product design round, the partner scores her 2.5 on metrics and 3 overall, and says she rambled on users and ran out of time before reaching the metrics.

**Constraints.** Limited time; a solo habit; no scorecard; no outside feedback until now.

**Data.** Her own estimate of that mock was 4. Her time use: 20 minutes on users, 12 on solutions, 3 on metrics, 0 on risks. Her hours: 28 reading and watching, 12 solo practice (unrecorded, unscored).

**Problem definition.** As an observable problem: "Forty hours were spent mostly on reading and unscored practice; the first realistic test showed a time and metrics gap that no one had measured."

**Analysis.** The hours were mostly rereading and watching, which feel productive and do not test retrieval (the testing effect, CS-C34-02). Her self-score (4) against the partner's (3) is a calibration gap of one point (FW-C34-03). The time use shows the cause of the metrics score: 3 of 35 minutes. Applying the loop (FW-C34-04): record every mock and score before the partner does; one fix per session; retest in 72 hours. The first fix: use the round-time budget (C33.3) and state a clock aloud; the second: a metric-definition drill (numerator, denominator, window, guardrail).

**Options.**

| Option | Optimizes | Costs |
|---|---|---|
| A. Keep reading and add more hours | Feeling of progress | The same gaps; no measurement |
| B. Switch to scored, timed mocks with an error log, one fix per session and retests | Measured improvement | Partner time; discomfort of low scores |
| C. Stop practicing alone and rely only on partner mocks | Realistic feedback | Fewer repetitions; scheduling limits |

**Tradeoffs.** B takes ten minutes of logging per session and gives data; A feels better and teaches less; C is limited by partner availability, so combine partners with solo drills.

**Decision.** Choose B. Over three weeks: three solo drills and one partner mock each week, with recording and scoring before feedback; fixes in order (the clock, then metric definition, then risks); retests after 72 hours.

**Outcome.** In this fictional scenario, the next partner mock had 8 minutes on users, 10 on solutions, 10 on metrics and 5 on risks, and metrics rose from 2.5 to 3.5; her self-score fell to match the partner's within 0.5; after three weeks her average calibrated score was 3.6 against 3.0 at the start (invented).

**Alternative outcomes.** If metrics had stayed at 2.5, she would have changed the drill (use real metric definitions from products she knows) and asked a data scientist to partner. If the partner had been too lenient, she would have added a second, tougher partner. The lesson: measure under realistic conditions, fix one thing, retest, and do not trust the feeling of preparation.

#### CS-C34-02 · What the research says about practice: testing, hours and their limits · Verified · Advanced

*Sources (types): the 2006 experiments of Henry Roediger and Jeffrey Karpicke, "Test-Enhanced Learning: Taking Memory Tests Improves Long-Term Retention," *Psychological Science* 17(3), 249 to 255 (doi 10.1111/j.1467-9280.2006.01693.x), read through full-text copies; the 2014 meta-analysis by Brooke Macnamara, David Hambrick and Frederick Oswald, "Deliberate Practice and Performance in Music, Games, Sports, Education, and Professions," *Psychological Science* 25(8), 1608 to 1618 (doi 10.1177/0956797614535810), read through the abstract, the paper's text and a press summary; and a 2019 article in *Frontiers in Psychology* (doi 10.3389/fpsyg.2019.02396) that reanalyses the question with a stricter definition of deliberate practice. The original 1993 study by Ericsson and colleagues was not read for this case. The studies are about memory for text, musicians, games and sports, not interviews; the transfer to interview preparation is an inference. The analysis is the author's. Re-read in October 2026.*

**Situation.** *The testing study.* In Experiment 1, 120 Washington University undergraduates (ages 18 to 24) studied prose passages and then restudied or recalled them; students who had been tested on a passage recalled about 56% of it after one week, against about 42% for students who had restudied it. In Experiment 2 students learned a passage under one of three conditions: studying four times (SSSS), studying three times and taking one recall test (SSST), or studying once and taking three recall tests (STTT), with written recall and no feedback, followed by a final recall test five minutes or one week later. At five minutes, repeated studying produced the best recall. At one week the pattern reversed: the STTT group recalled about 61% of the idea units, the SSST group about 56% and the SSSS group about 40%. Students in the repeated-study condition were also more confident that they would remember the passage in a week than students in the other conditions: repeated study made them more confident and less accurate `[V: Roediger and Karpicke, 2006]`. *The practice-hours study.* The deliberate-practice view, associated with Ericsson and colleagues' 1993 work on musicians, holds that expert performance largely reflects the accumulated amount of deliberate practice. Macnamara and colleagues' meta-analysis reported that accumulated deliberate practice explained about 26% of the variance in performance in games, 21% in music, 18% in sports, 4% in education and under 1% in professions, about 12% overall (as published in 2014; Ericsson and Harwell later cite 14% overall for the same analysis, which fits a reported 2018 correction that this case did not read), and concluded that deliberate practice is important but not as important as has been argued. Ericsson and others replied that the meta-analysis used a broad definition of practice that included activities which did not meet the original definition (structured, effortful, aimed at a specific improvement, with feedback), and a 2019 article in Frontiers in Psychology, using a stricter definition, reported a higher figure (about 29% of variance, and more after correcting for measurement unreliability) `[V: Frontiers in Psychology, 2019]`.

**Constraints.** The studies measure different things in different populations; the text-recall study used short-term laboratory material, the meta-analysis used observed correlations across domains with varied definitions; neither studied job interviews.

**Data.** As reported: the design and results of the testing study (the five-minute reversal, the one-week figures, the confidence finding); the meta-analysis percentages by domain; the dispute about the definition of deliberate practice and the reanalysis figure.

**Problem definition.** *The author's reading.* A candidate must decide how to spend limited preparation time: rereading and watching, or timed, scored retrieval with feedback; and how much weight to give hours. As an observable decision: "What does the evidence say about how to practice, and how far does it apply?"

**Analysis.** *The author's analysis, through this chapter's tools.*

*Retrieval beats rereading for lasting learning.* The testing study shows that practice that requires producing the material produces better retention a week later than rereading, even though rereading produces better performance at five minutes and more confidence. The implication for preparation (C34.1): do mocks, not rereads; judge progress by delayed, realistic tests, not by how fluent the chapter felt. *Caution:* the material was prose passages, not complex skills like structuring a product answer, and the tests had no feedback; interview skills involve more than recall.

*Confidence is not evidence.* The finding that repeated study raised confidence while lowering retention is a reason for calibration (C34.4): your feeling of readiness is a poor guide, and outside scores are better.

*Hours matter, but not alone.* The meta-analysis shows that accumulated practice hours explain only part of the differences in performance, and much less in professional and educational settings; the disagreement is about what counts as deliberate practice. Both sides agree that practice matters and that its quality matters. For preparation: do not use hours as the target (Goodhart); use structured practice aimed at a specific weakness, with feedback and repetition (C34.7), and track results.

*Spacing.* The testing study's delayed tests, and the broader literature, measured retention a week after learning, but this study did not vary spacing itself; the case relies on the wider literature on spaced retesting, which was not read here, for that part, and the 72-hour retest in the loop is a design choice by the author.

*What the evidence does not show.* It does not show how many mocks produce an offer, whether retrieval practice transfers from text recall to spoken interviews at the same size, or whether the effect sizes carry to your situation. The numbers are from different domains and must not be applied as a forecast. The best use of the evidence is as support for a design principle, tested by your own scores.

**Options.** *The author's reconstruction of choices a candidate could face.*

| Option | Optimizes | Costs |
|---|---|---|
| A. Reread chapters and watch samples; log hours | Comfort and confidence | Weaker retention and skill; false confidence |
| B. Timed mocks and drills with scorecards, calibration and spaced retests | Delayed performance; measured gaps | Effort, partner time, uncomfortable scores |
| C. Maximize hours of any practice | Volume | Quality varies; hours alone explain little |

**Tradeoffs.** B is effortful and aligned with how retention and skill appear to develop; A feels better; C ignores quality.

**Decision.** Use B as the default, with reading limited to learning methods before practicing them, and judge progress by calibrated scores on realistic, delayed tests, not by hours or confidence.

**Outcome.** The design of this chapter's practice system (mocks, scorecards, calibration, error log, spaced retest) follows from these findings. Whether it works for a given reader is tested by that reader's own score trends, which is why section 13 asks for them.

**Alternative outcomes.** *Inference.* If a reader found that rereading raised their mock scores more than drills, they should follow their data. A reader should also be cautious about quoting the study figures as if they applied to interviews. The method to carry away: practice by producing, with feedback, spaced over time; distrust fluency and hours as measures; and let outside scores decide.

## 11. Interview questions and model answers

Ten questions. Model answers are `Illustrative` (composite candidates), and every figure is invented (invented). Each ends with follow-ups and answers. The answers are fuller than a first pass in a real round. Several are questions interviewers ask directly (feedback, pressure, readiness) and several are product, analytical and AI questions about practice itself, which test the same skills in a different setting.

#### IQ-C34-01 · Beginner · interview-craft · IC

**Prompt.** How would you structure your practice for the month before a loop?

**Rubric.**
- **Baseline:** "I'd practice as many questions as I can."
- **Strong:** A schedule of mocks, review and a taper.
- **Standout:** Timed partner mocks with scorecards, calibration, an error log with one fix per session and retests, a data-driven target from the weakest dimension, and a protected final week.

**Model answer.** "I'd assume about eight hours a week and spend it on retrieval, not rereading. Week one: build the loop map with the recruiter (C33.1), read only to learn methods, and run three solo timed drills and one partner mock, scoring myself first with the scorecard and then comparing with the partner. Week two: two partner mocks, recorded, with an error log and one fix per session, retested within 72 hours; compute my bias against the partner. Week three: diagnose my weakest important dimension from the scores and put about half of my hours there with a numeric goal; one full mock loop at the end. Week four: taper. A last partner mock of one round type on day minus three, light review of story headlines and the company brief, logistics settled two days before, and rest the day before. I'd judge progress by calibrated scores by dimension on realistic mocks, not by hours logged."

*Signals.* Retrieval-based; scorecards; calibration; a data-driven target; a taper.

**Follow-ups.**

- **Q.** What if you can't find a partner? **A.** "I'd use recorded solo mocks and score them against the scorecard, and I'd calibrate by scoring a recording of mine from a month ago, to check my consistency. I'd also swap with another candidate or ask a colleague in a product role for two sessions, since even a few outside scores correct a lot of bias."
- **Q.** What if you only have three weeks? **A.** "I'd compress: skip the reading, do the first partner mock on day two to find the gaps, give most hours to the weakest dimension, and keep the taper. The order of importance is realistic mocks, scoring with evidence, one fix, a retest, rest."

#### IQ-C34-02 · Beginner · interview-craft · IC

**Prompt.** How do you give useful feedback to a peer after a mock interview?

**Rubric.**
- **Baseline:** "I tell them what I liked and what to improve."
- **Strong:** Scores against a rubric with evidence and gives one priority fix.
- **Standout:** Scores independently before discussing, quotes the evidence, separates strengths from fixes, keeps to one or two fixes, asks the peer to self-score first, and agrees a retest.

**Model answer.** "Before the mock I ask the peer what rubric we are using and what they want me to probe. During it I take notes as evidence statements, quoting what they said. At the end we each score independently before talking. Then I ask them to share their score first and the evidence for it, which makes them self-assess, and I compare: where we differ by two points or more, we look at the quote and discuss who had the better evidence.

"I give two strengths with evidence ('you named the user and the number in the first minute') and one or two fixes, not ten: 'You gave a metric without a denominator; try stating numerator and denominator.' I avoid dumping solutions: I say what I observed and the effect, and let them choose how to fix it. We agree one fix and a retest on a different prompt within three days. I also thank them, since honest feedback is uncomfortable to receive and easy to soften."

*Signals.* Independent scoring; evidence; priorities; a retest.

**Follow-ups.**

- **Q.** What if your peer gets defensive? **A.** "I'd go back to the evidence: 'Here is the sentence you said; here is what I wrote.' I'd ask what they were trying to do, which often reveals a gap in what came across. If it still goes badly, I'd stop and offer to send written notes, so they can read them without an audience."
- **Q.** How do you handle being much better, or much weaker, than your partner? **A.** "A weaker partner needs fewer fixes and more confidence on strengths; a stronger one gives me more than I give, and I should ask for their scorecard habits. Either way I'd use the same rubric so that the feedback is about the answer and not about me."

#### IQ-C34-03 · Intermediate · interview-craft · IC

**Prompt.** Tell me about a time you received critical feedback.

**Rubric.**
- **Baseline:** "I was told to improve my communication and I did."
- **Strong:** Names the feedback, the change and a result.
- **Standout:** Shows openness (asked for specifics), a tested change with numbers, an outside check of the fix, a lasting habit, and honesty about the initial reaction.

**Model answer.** *(A composite story, shown as notes then told.)* *Notes.* Context: my first readout to senior stakeholders was a deck of 22 slides with charts and no recommendation; my manager said afterward, "I didn't know what you wanted us to decide" (invented). Decision: defend the work (it was thorough), or change the format. Action: I asked her for an example of a readout she liked; she sent a one-page memo with the recommendation first; I rewrote mine as a one-page decision document with the ask, options, recommendation and what would change my mind; I asked two colleagues outside the project to read it and say the point after one read; the first could not, so I cut a third and rewrote the opening. Result: the next readout took 20 minutes instead of 60, and the decision was made in the meeting; stakeholders approved the proposal in one session instead of two. Learning: the reader's time is the measure, and I now ask for feedback after each deliverable with a specific question: "What would have made this easier to act on?"

*Told (about 1 minute 10 seconds).* "After my first readout to senior stakeholders, my manager told me she didn't know what I wanted them to decide. My deck had 22 slides and no recommendation, and my first reaction was that the thoroughness showed effort. I could defend it or change it. I asked her for an example she liked, which was a one-page memo with the recommendation first, and I rewrote mine in that form: the ask, the options, my recommendation and what would change my mind. I asked two colleagues to read it and tell me the point after one read; the first couldn't, so I cut a third and rewrote the opening. The next readout took 20 minutes instead of 60 and we got the decision in the room. What I took from it is that the reader's time is the measure, and I now ask for feedback on every major piece with one question: what would have made this easier to act on?"

*Signals.* Honesty about the first reaction; a tested change; an outside check; a lasting habit.

**Follow-ups.**

- **Q.** Was it hard to hear? **A.** "Yes: I had worked for weeks on it, and the feedback felt like a judgment on the effort. What helped was asking for an example, which turned a verdict into a model I could follow."
- **Q.** Have you received feedback you disagreed with? **A.** "Once, that I should be more decisive in meetings. I didn't agree entirely, since I wanted more input first; I tried a version of it: I state my recommendation first and ask for objections, which keeps the input and shows a view. I checked with her after a month and she said it landed better."

#### IQ-C34-04 · Intermediate · interview-craft · IC

**Prompt.** You did well in mock interviews but froze in the real one. What happened, and what would you change?

**Rubric.**
- **Baseline:** "I was nervous; I'd stay calmer."
- **Strong:** Identifies differences between mocks and the real round and plans practice.
- **Standout:** Diagnoses transfer gaps (stakes, an unfamiliar interviewer, no pause, an unfamiliar format), plans pressure mocks and a routine with recovery phrases, uses the log, and treats the bad round as data without spiraling.

**Model answer.** "I'd first write down what happened within an hour: which question, what I felt, what I did, and how long it lasted. Then I'd look for what differed from my mocks. Typically: stakes (a real outcome); an unfamiliar interviewer with a neutral face; a format or tool I had not used; no ability to restart; and fatigue in a later round. I'd check each against my log.

"Then I'd change the practice. First, make mocks resemble the real thing more: a partner I don't know, the real tool, a stranger's neutral expression, no restarts, and a full loop with breaks to practice stamina. Second, build a routine and recovery moves: a slow first sentence, the plan stated aloud, and three phrases: 'Let me take a moment to structure this,' 'I want to correct something,' and 'Let me summarize where I am.' I'd rehearse them aloud until they are automatic. Third, practice the specific moment: have the partner stop me mid-answer with a hard question and practice recovering, since the freeze often comes from an unexpected interruption.

"And I'd treat the bad round as one data point. I'd reset between rounds (stand, water, one line on what to improve) and not replay it. After the loop I'd write what I'd change and fix one or two things. A freeze is common; what matters is whether the next attempt shows a better recovery."

*Signals.* Diagnosis; realistic practice; rehearsed recovery; resilience.

**Follow-ups.**

- **Q.** What if the nerves are severe and recurring? **A.** "Then practice alone may not be enough. I'd talk to a doctor or a counselor, since persistent anxiety is something to treat, not just to practice around. In the meantime I'd use the routine and shorter rounds to build confidence."
- **Q.** Would you tell the interviewer you were nervous? **A.** "A brief, calm acknowledgment is fine if it helps me reset ('give me a second to organize my thoughts'). I wouldn't dwell on it or use it as an excuse; the recovery is what they see."

#### IQ-C34-05 · Intermediate · interview-craft · IC

**Prompt.** How do you know when you are ready for a loop?

**Rubric.**
- **Baseline:** "When I feel confident."
- **Strong:** Uses mock scores and consistency.
- **Standout:** Sets measurable criteria (calibrated scores by dimension, timing, probe survival, full loops), uses outside scorers, recognizes that feeling is unreliable, and plans the taper.

**Model answer.** "Not by feeling, since fluency with the material isn't the same as performing under conditions (CS-C34-02). I'd set measurable criteria and check them. First, calibrated scores: an average of at least 3.5 across round types over the last six realistic mocks, with no dimension central to a round below 3. Second, consistency: the spread across mocks small, so that I'm not strong one day and weak the next. Third, timing: finishing each round type within about ten percent of its budget with the recommendation and risks included. Fourth, stories: each of my bank survives three levels of probing without invented detail, and no story repeats across rounds. Fifth, at least two full mock loops with breaks, scored by outside partners, with the last one at a similar level to the first and no sharp fade in later rounds. Sixth, logistics: the format, the policy, the tools and the time zone confirmed.

"If those hold, I'm as ready as practice can make me, and the remaining step is rest. If a criterion fails, that tells me what to work on and whether to move the date, which is sometimes possible and worth asking the recruiter about early. Readiness is also not perfection: no one is at a 5 on everything, and waiting for it means never interviewing."

*Signals.* Measurable criteria; outside scoring; consistency; honesty about feeling.

**Follow-ups.**

- **Q.** What if you're at 3.2, not 3.5, and the loop is next week? **A.** "I'd go, with a plan: put the final days on the weakest dimension, rehearse the recovery moves and protect sleep. A loop is also practice: the data from the real questions are valuable. I wouldn't cancel unless a critical dimension is below 2."
- **Q.** How do you account for partners who score generously? **A.** "I'd calibrate, as in Worked example 4: compare partners with each other and with my own scoring of the same recordings, and use the stricter, better-evidenced scores. If everyone is generous, I'd ask one experienced person to score two mocks."

#### IQ-C34-06 · Hard · interview-craft · IC

**Prompt.** How would you use an AI tool to prepare for interviews without fooling yourself?

**Rubric.**
- **Baseline:** "I'd ask it to give me questions and feedback."
- **Strong:** Names the risk of flattery and inaccuracy.
- **Standout:** Uses a rubric, quoted evidence, two runs, calibration against a human with a bias figure, verification of facts, a division of use (prompts and critique, not final scores), live human mocks, and a rule against use in real interviews unless permitted.

**Model answer.** "I'd use it for what it does well and check it for what it does badly. It is good for generating prompts by round type, role-playing an interviewer with probes, summarizing my answer to show where the structure broke, and suggesting follow-ups. It is poor at scoring honestly: models tend to flatter, to be inconsistent, to prefer long fluent answers and to invent facts about companies.

"So I'd have a routine (FW-C34-08). I'd give it the scorecard and ask for a score with a quote from my answer for each dimension; if it can't quote me, I discard the score. I'd ask for the strongest criticism first. I'd run it twice and compare: big differences mean noise. I'd calibrate it against a human: I'd have a partner and the tool score the same five answers. Suppose the tool gives 9, 8 and 9 where the partner gives 6, 5 and 6: the tool's bias is +3.

Then I'd treat its scores as meaningless and use it only for prompts and critique, or subtract the bias if it is steady. I'd verify every fact about a company or a process against primary sources. I'd keep live mocks with people at least weekly, since the tool applies no real pressure. I wouldn't paste confidential material from an employer. And I'd follow each company's policy: some say you may not use AI tools in the interview, and I'd comply."

*Signals.* Division of labor; evidence quotes; a bias calculation; verification; compliance.

**Follow-ups.**

- **Q.** What if the tool's feedback is more detailed than a friend's? **A.** "Detail isn't accuracy. I'd check a sample of its critiques against the transcript and the scorecard; if its observations are right, I'd use it more for critique, while still using people for scoring and pressure."
- **Q.** Could using an AI tool in preparation hurt you? **A.** "It could, by making me comfortable with fluent, polished answers that sound rehearsed, or by teaching me wrong facts. I'd guard against both by practicing aloud without it, keeping my stories true and in my own words, and checking facts."

#### IQ-C34-07 · Intermediate · interview-craft · IC

**Prompt.** Your self-scores are consistently higher than your partner's. What do you do?

**Rubric.**
- **Baseline:** "I'd try to be more critical of myself."
- **Strong:** Computes the gap and checks the evidence.
- **Standout:** Computes bias and error, finds the dimension-level pattern, uses anchors and quoted evidence, corrects the scores, rechecks after a few mocks and uses the partner's scores for decisions meanwhile.

**Model answer.** "I'd measure it. Over eight mocks, suppose my scores are 4, 4, 3, 5, 4, 3, 4, 5 and my partner's are 3, 3, 3, 4, 3, 3, 3, 4. The differences are +1, +1, 0, +1, +1, 0, +1, +1: a bias of +0.75 and an error of 0.75. That's consistent, so it can be corrected: I'd treat my 4 as about a 3.25. Then I'd find why: where we differ, I'd compare the evidence. Maybe I credit myself for naming a framework while the partner scores whether it fit the problem; maybe I credit a metric for being named while they want a numerator, denominator and guardrail. That tells me what my scale lacks. I'd fix it with the written anchors (reread before scoring) and by quoting the sentence that supports each score.

"Meanwhile I'd use the partner's scores to choose what to practice, since mine are inflated. After three more mocks with anchors and quotes, I'd recompute: if the bias falls to about +0.3, the correction is working. If it does not, I'd get a second scorer, in case my partner is the unusual one."

*Signals.* Measurement; a pattern; a mechanism; a recheck.

**Follow-ups.**

- **Q.** What if your partner is the one who is too harsh? **A.** "I'd check with a second scorer and with the anchors. If two scorers agree and the anchors support them, the harsh partner is right; if the second agrees with me, I'd tell my partner what evidence I see for the higher score and adjust the anchors together."
- **Q.** Is overrating always bad? **A.** "Mild overrating can help confidence, and it hurts decisions: you practice the wrong things. I want my scores to be accurate and my confidence to come from the data."

#### IQ-C34-08 · Hard · interview-craft · IC

**Prompt.** Design a mock-interview program for a cohort of 30 aspiring product managers.

**Rubric.**
- **Baseline:** "Pair them up and have them do mock interviews."
- **Strong:** Defines users, problems and a structure with scoring.
- **Standout:** Identifies the binding constraint (interviewer supply and feedback quality), designs pairing and swapping, scorecards and calibration sessions, uses AI for solo practice with checks, sizes the load, and measures outcomes with guardrails.

**Model answer.** "Users: the 30 candidates (and volunteer experienced PMs as optional coaches). The problem I'd focus on: not enough good practice with reliable feedback; the binding constraint is interviewer supply and feedback quality, not motivation. Evidence I'd gather first: how many mocks each person has done, how their self-scores compare with outside scores, and which round types they lack practice in.

"Design. *Structure:* each candidate does two partner mocks a week, swapping roles so that everyone interviews as well as is interviewed, which solves supply: 30 candidates × 2 mocks = 60 mocks a week, each about an hour, so 60 candidate hours and 60 interviewer hours, which the swap covers. *Quality:* a shared scorecard with anchors for each round type; a short training session where everyone scores the same recorded mock and we compare, to calibrate the group; a coach (an experienced PM) joins one mock a month per pair. *Solo practice:* an AI tool for prompts and critique, with the checking routine, and a rule that live mocks come first. *Rotation:* partners rotate every two weeks, so no one is tuned to one style. *Data:* each person's calibrated scores by dimension and an error log, reviewed every two weeks; the weakest dimension for each gets targeted drills.

"Metrics: mean calibrated score by dimension at the start and the end; the bias of self-scores; timing adherence; the share of participants completing at least 10 scored mocks; and, over a longer period, interview progression. Guardrails: participant stress and drop-out, and the burden on volunteer coaches. I'd launch with a pilot of eight people for three weeks, check whether calibration sessions reduce bias, and expand."

*Signals.* The constraint; a self-sustaining design; calibration; AI with checks; measurement.

**Follow-ups.**

- **Q.** What if the group's average skill is low and feedback is blunt or wrong? **A.** "Calibration sessions and anchors are the answer: everyone scores the same example, we discuss differences, and coaches model evidence-based feedback. I'd also use a rule: feedback must quote evidence and give one fix, which prevents vague or harsh comments."
- **Q.** How would you tell whether the program works? **A.** "Compare calibrated scores before and after for participants and for a similar group that did not join, if there is one; track bias and consistency; ask for self-reported readiness but weigh it below scores; and wait for outcomes over months with the caveat that interview results depend on many things."

#### IQ-C34-09 · Intermediate · interview-craft · IC

**Prompt.** Walk me through the final week before a loop.

**Rubric.**
- **Baseline:** "I'd review everything again and practice a lot."
- **Strong:** A taper with light review and logistics.
- **Standout:** A day-by-day plan with a final full mock at day minus seven, targeted drills, no new material in the last three days, logistics settled two days before, and rest, with a day-of routine and an after protocol.

**Model answer.** "Day minus seven: a last full mock loop, scored, and choose the one or two fixes that matter most. Minus six: drill those fixes; update the error log; confirm in writing the times, the time zone, the tools and the policy on assistance. Minus five: review the company brief and my 'why us'; say my tailored stories aloud. Minus four: two short drills on the weakest dimension; no new frameworks. Minus three: one partner mock of a single round type.

Minus two: light review of story headlines, the brief and my questions; a tech check on the real device and network; stop new material. Minus one: rest: a short walk, one page of review, early sleep; prepare clothes, water, notes. Day zero: wake early, eat, light movement, a fifteen-minute review of headlines, a final tech check and a breath before each round; between rounds, reset. After: notes within an hour, a thank-you within a day, and rest.

"What I avoid: cramming new material, which raises anxiety and doesn't stick; a full mock the day before, which tires me; and unconfirmed logistics. If the loop is at an awkward hour in my time zone, I adjust sleep earlier in the week."

*Signals.* A taper; logistics; routines; discipline about what not to do.

**Follow-ups.**

- **Q.** What if you find a big gap on day minus three? **A.** "I'd make one targeted fix, not a rebuild: a drill and a retest on a different prompt, and an explicit plan for how I'll handle the gap in the round (for example, a clarifying question or a stated assumption). I'd accept some risk rather than disrupt my sleep."
- **Q.** How do you handle the last night's anxiety? **A.** "A short walk, a fixed stopping time for review, writing tomorrow's plan on one page, and the routine I rehearsed. If I can't sleep, I rest anyway; a bad night before a round is less damaging than worrying about it."

#### IQ-C34-10 · Hard · interview-craft · IC

**Prompt.** How would you evaluate an AI tool that scores mock interviews before recommending it to others?

**Rubric.**
- **Baseline:** "I'd try it and see if the feedback seems good."
- **Strong:** Compares its scores with human scores.
- **Standout:** Builds an eval: a sample of real answers scored by several experts, agreement among the experts, the tool's bias, error and consistency against their consensus, evidence quality, fairness across accents and styles, a pass bar, and a rollout with monitoring.

**Model answer.** "I'd treat it as an AI feature and build an eval (C25). First, a set of answers: about 250, from real mocks across round types and levels, with consent. Sizing: to estimate the tool's agreement with the human consensus within ±5 points at about 80% agreement needs 1.96² × 0.8 × 0.2 ÷ 0.05² ≈ 246 cases. Second, human scores: three experienced interviewers score each answer independently with the same scorecard; I'd compute their agreement beyond chance (kappa) and fix the anchors until it is acceptable, since a tool can't be better than its reference. Third, the tool's performance: bias (mean tool minus consensus), error (mean absolute difference), the share within one point, and consistency (two runs of the same answer). Fourth, evidence: does it quote the answer for each score? I'd sample fifty and check that the quotes exist and support the score. Fifth, fairness: compare bias by accent, speaking style, language of origin and answer length, since tools can penalize or reward style.

"Pass bar, for example: bias within ±0.3 points, error under 0.6, 85% within one point, consistency within one point on 90% of repeated runs, evidence quotes valid in at least 95% of samples, no group with bias differing by more than 0.3. If it passes, recommend it for critique and practice scoring with the caveat to confirm with a human each week, monitor on new answers monthly, and publish its measured limits."

*Signals.* A sized eval; reference reliability; bias, error and consistency; evidence validity; fairness; a pass bar.

**Follow-ups.**

- **Q.** What if the tool's average is right but it is wrong on individual answers? **A.** "Then it is fine for tracking trends over many answers and not for judging a single one. I'd say so in the recommendation, and show the error distribution, not just the mean."
- **Q.** What if the experts disagree with each other? **A.** "Then the ground truth is uncertain, and I'd treat tool-human disagreement within the experts' own disagreement as acceptable. I'd improve the anchors and re-score, and report the tool's agreement relative to expert-to-expert agreement."

## 12. Exercises

Ten exercises. Each has a model solution and an alternative. Every figure is invented.

#### EX-C34-01 · Build a four-week schedule

**Problem.** You have eight hours a week for four weeks before a loop of four rounds (product design, analytics, technical, behavioral), with analytics your weakest. Build a schedule (FW-C34-01).

**Context.** Preparation planning.

**Data.** None.

**Constraints.** Eight minutes.

**Expected approach.** FW-C34-01 and FW-C33-08.

**Solution.** Week one (8 hours): loop map and recruiter questions (1); three solo drills (3: metric definition, diagnose a change, structure); one partner mock on analytics (1.5); scoring and log (1); story bank notes (1.5). Week two: two partner mocks (3: analytics, behavioral), recorded review (1.5), drills on the log's top fix (2), technical reading with one drill (1.5). Week three: weakest-dimension diagnosis (1); targeted drills (3); one full mock loop of four rounds with breaks (3); company brief (1). Week four (tapering to about 4 hours): day minus seven last mock (2); drills on two fixes (1.5); logistics (0.5); taper from day minus four.

**Alternative solution.** If partners are scarce, replace one partner mock a week with a recorded solo mock and score it against the scorecard with quoted evidence.

**Tradeoffs.** More partner time gives better feedback; the schedule fits the hours available.

#### EX-C34-02 · Score a transcript

**Problem.** Score this answer (analytical round) on the scorecard in C34.2 (structure, metric choice, quantitative reasoning, experiment, recommendation), with evidence: "Signups dropped 10%. I'd look at lots of things, like the website and ads and maybe a bug. I'd check the data and see what changed. It might be seasonal. Then I'd run an A/B test to fix it. We should improve the signup page."

**Context.** Scoring practice.

**Data.** The transcript.

**Constraints.** Six minutes.

**Expected approach.** FW-C34-02.

**Solution.** Structure 2 ("lists unprioritized causes; no tree"); metric choice 1 ("signups not defined; no denominator or window"); quantitative 1 ("no numbers or segments"); experiment 2 ("'run an A/B test' with no unit, duration or what it tests"); recommendation 2 ("'improve the page' is not tied to a finding"). Overall: no hire. To reach Strong: confirm the data, define signups (new accounts per unique visitor, daily), segment by platform and channel, list falsifiable hypotheses with the cheapest check first, and recommend based on the finding.

**Alternative solution.** Score it, then rewrite it to a 4 and rescore.

**Tradeoffs.** Rewriting teaches what the anchors mean.

#### EX-C34-03 · Calibrate

**Problem.** Six mocks: self-scores 3, 4, 4, 3, 5, 4; partner scores 3, 3, 4, 2, 4, 3. Compute bias, error, the share within one point and the share exact; interpret.

**Context.** Calibration.

**Data.** As above.

**Constraints.** Five minutes.

**Expected approach.** FW-C34-03 and Worked example 4.

**Solution.** Differences: 0, +1, 0, +1, +1, +1. Bias = 4 ÷ 6 = +0.67. Error = 0.67 (all non-negative). Within one point: 6 of 6 (100%). Exact: 2 of 6 (33%). Interpretation: consistent overrating of about two-thirds of a point; correct self-scores by subtracting about 0.67 until the bias shrinks, and find out by dimension which credit is unearned.

**Alternative solution.** Add dimension-level scores to see whether the gap is concentrated in one dimension.

**Tradeoffs.** More mocks make the estimate of bias more reliable; six is the minimum.

#### EX-C34-04 · Write evidence statements

**Problem.** From this answer, write four evidence statements an interviewer could record: "I'd focus on busy parents planning a trip, because they coordinate everyone. The problem is collecting preferences without a long group chat. I'd test a voting board, measuring the share of trips where at least three members vote, with time-to-itinerary as a guardrail. If voting lowers planning speed I'd drop it."

**Context.** The scorer's view.

**Data.** The transcript.

**Constraints.** Five minutes.

**Expected approach.** FW-C33-02.

**Solution.** (1) *Chose a specific user with a reason* (busy parents who coordinate). (2) *Named a concrete problem* (collecting preferences without a long chat). (3) *Defined a primary metric and a guardrail* (voting share and time-to-itinerary). (4) *Stated a decision rule* (drop it if voting lowers planning speed). Gaps to note: no alternatives considered; no sizing of the problem.

**Alternative solution.** Add a fifth: *what would be missing for Standout* (alternatives, a number).

**Tradeoffs.** Writing evidence statements teaches you to say quotable things.

#### EX-C34-05 · Design a drill

**Problem.** Your log shows that you ramble: answers run five minutes with the point at minute three. Design a drill (FW-C34-05) with a run instruction and a success test.

**Context.** Targeted practice.

**Data.** None.

**Constraints.** Five minutes.

**Expected approach.** FW-C34-05 and C32.1.

**Solution.** *Drill: answer first in 60 seconds.* Run: take any prompt; set a 60-second timer; give the answer and three named supports; record; replay. Repeat on five prompts, then extend each to two minutes, adding evidence while keeping the answer first. *Success test:* the answer appears within the first 15 seconds in at least four of five recordings; three supports are named up front; the answer fits in the time. *Retest:* on a different prompt after 72 hours, in a partner mock, counting the second at which the answer arrives.

**Alternative solution.** Add a partner who raises a hand at 30 seconds if the answer has not appeared.

**Tradeoffs.** A strict clock feels artificial and builds the habit.

#### EX-C34-06 · Diagnose and allocate

**Problem.** Four calibrated mocks, averages: structure 3.25, metrics 2.25, user 4.25, communication 2.75. Importance: structure 3, metrics 3, user 2, communication 2. You have 16 hours. Compute importance × gap and the hours.

**Context.** Targeted practice.

**Data.** Gap = 5 − average.

**Constraints.** Six minutes.

**Expected approach.** FW-C34-06 and Worked example 5.

**Solution.** Importance × gap: structure 3 × 1.75 = 5.25; metrics 3 × 2.75 = 8.25; user 2 × 0.75 = 1.5; communication 2 × 2.25 = 4.5; total 19.5. Hours: 16 × 5.25 ÷ 19.5 = 4.3; metrics 6.8; user 1.2; communication 3.7. About 4, 7, 1 and 4 hours. Metrics gets the most; user empathy, already a strength, gets maintenance only. Set a goal of metrics 2.25 to 3.5, retest in two weeks.

**Alternative solution.** Add a minimum of 2 hours to every dimension and scale the rest.

**Tradeoffs.** A formula guides allocation and judgment adjusts for veto risks.

#### EX-C34-07 · Recovery scripts

**Problem.** Write, in your own words, a recovery phrase and a next action for three moments: you blank on a question; you realize you gave a wrong number a minute ago; you are lost in the middle of an answer.

**Context.** Nerves and recovery.

**Data.** None.

**Constraints.** Five minutes.

**Expected approach.** FW-C34-07.

**Solution.** *Blank:* "Let me take a moment to structure this." Then write two or three headings (user, problem, options) and begin with the first. *Wrong number:* "I want to correct something I said: the figure is 20%, not 2%, so the conclusion changes to X." Then continue. *Lost:* "Let me summarize where I am: I've framed the problem and chosen the user; I still need to give the solution and the metric." Then do those. Rehearse each aloud three times, until each takes five seconds to say and sounds calm.

**Alternative solution.** Add a fourth: for an interruption you can't answer, "I don't know that; here is how I would find out."

**Tradeoffs.** Rehearsed phrases free attention for the problem.

#### EX-C34-08 · Check an AI score

**Problem.** An AI tool gives your three answers scores of 9, 8 and 9 out of 10, with no quotes. A partner gives 6, 5 and 6. Compute the tool's bias and say what you do.

**Context.** Using AI to practice.

**Data.** As above.

**Constraints.** Five minutes.

**Expected approach.** FW-C34-08.

**Solution.** Differences: +3, +3, +3: bias +3 and error 3. The tool overrates by three points and gives no evidence. Actions: ask it for scores with a quoted sentence for each dimension and discard any that it can't quote; ask for the strongest criticism first; run it twice and compare; use it only for prompts and critique, and rely on the partner's scores; check with a larger sample (five answers) before trusting any correction; verify any fact it states against primary sources.

**Alternative solution.** Subtract three points if the bias is steady over ten answers; do not do this with three.

**Tradeoffs.** A tool with a steady, known bias can still help track trends.

#### EX-C34-09 · Final-week plan with a time-zone twist

**Problem.** Your loop is at 9 a.m. Pacific time (UTC−8) on a day in winter, and you live in India (UTC+5:30). Convert the time and write a final-week plan.

**Context.** Final week.

**Data.** As above.

**Constraints.** Six minutes.

**Expected approach.** C34.10 and C33.13.

**Solution.** 9:00 at UTC−8 is 17:00 UTC, which is 22:30 in India. Plan: shift your sleep earlier by an hour each night from day minus four; do the last full mock on day minus seven at the same local hour as the loop (22:30) to practice being sharp then; confirm in writing the date, time and zone; day minus two, tech check at the same hour on the real device and network with a backup connection; day minus one rest and a nap in the afternoon; day zero, light activity, an early dinner, a fifteen-minute headline review at 21:30, a breath before each round; between rounds reset; after, write notes at once.

**Alternative solution.** Ask the recruiter whether an earlier-in-your-day slot is possible, politely and early.

**Tradeoffs.** Shifting sleep costs a few uncomfortable days and prevents a fade in the later rounds.

#### EX-C34-10 · Run the Apple-style mock loop

**Problem.** With three partners (a hiring manager, a designer and an engineer, and a panel of three for the last round), run the four-round loop in Worked example 3 as timed practice. Use your own true stories for the manager and panel rounds, and score each round with the scorecards in C34.2, independently of the partners.

**Context.** Practice; record if possible.

**Data.** Your stories and a company brief for a team of your choice.

**Constraints.** About four hours, including breaks and a debrief.

**Expected approach.** Worked example 3, FW-C34-01 to FW-C34-03.

**Solution.** A good performance mirrors the worked example: a craft story with a priced cost and an honest waste; a critique that separates observation, inference and opinion and says what to leave out; a technical judgment with numbers, a fallback and an evaluation; and a values story with a real cost. Common findings from partners: no clarifying questions in the technical round; accessibility not mentioned; the same story used in two rounds; fading in round four. After the debrief, log one fix per round, drill them, and retest the weakest round within 72 hours.

**Alternative solution.** Run only rounds two and three if partners are limited.

**Tradeoffs.** A full loop is the closest rehearsal of stamina and consistency.

## 13. Practice protocol

**Timed drills (three a week for four weeks).**

- *Week 1: set up the system.* Build the scorecard set, anchors and error log; use IQ-C34-01, IQ-C34-02, EX-C34-01, EX-C34-02 and EX-C34-04. Run one partner mock and score yourself first.
- *Week 2: calibrate and log.* Use IQ-C34-03, IQ-C34-05, IQ-C34-07, EX-C34-03 and EX-C34-05. Compute your bias after four mocks and run the review loop with a 72-hour retest.
- *Week 3: diagnose and drill.* Use IQ-C34-04, IQ-C34-09, EX-C34-06, EX-C34-07 and EX-C34-09. Diagnose your weakest dimension and practice it with deliberate drills; rehearse the recovery phrases aloud.
- *Week 4: full loops and AI.* Use IQ-C34-06, IQ-C34-08, IQ-C34-10, EX-C34-08 and EX-C34-10. Run a full mock loop with breaks and calibrate any AI tool you use against a human.

**Track these numbers weekly.** Calibrated mean score by dimension, your bias, timing adherence, the second at which your answer arrives, and the number of recurring errors in the log.

**With a partner.** Ask your partner to score before discussion, to quote evidence, to interrupt once and to probe three levels. Swap roles each session.

**Feedback checklist (yes, partly, no).**

1. Was the mock timed, aloud and in the real format and tool?
2. Did I score myself with quoted evidence before hearing the partner?
3. Did I compare with an independent scorer and compute my bias?
4. Did I choose one fix, log it and schedule a retest within 72 hours?
5. Did I retest on a different prompt, and did the score improve?
6. Did I aim practice at my weakest important dimension, with a numeric goal?
7. Did I use my routine and recovery phrases when something went wrong?
8. If I used an AI tool, did I check its scores and facts?
9. Did I keep the last three days free of new material and protect sleep?
10. Did I judge readiness by calibrated scores and consistency, not by feeling?

**Answer journal.** For each mock record the date, the round type, the time used by phase, the scores (self and partner), the one fix, the drill and the retest result.

## 14. Implementation playbook

Apply the system over the next four weeks and keep the numbers.

**Days 1 to 3.** Copy the scorecards in C34.2 into a document, add your own anchors with examples of a 2, a 4 and a 5 from this book's worked examples, and create the error log (FW-C34-04). Find two partners and agree a weekly slot.

**Week 1.** Run one partner mock and three solo timed drills. Score yourself first with quotes. Record each. Log one fix per session.

**Week 2.** Run two partner mocks, one with a stranger or a stricter partner. Compute your bias against the partner after four mocks. Retest every fix within 72 hours on a new prompt.

**Week 3.** Tabulate scores by dimension, diagnose the weakest important one (FW-C34-06), set a numeric goal, and practice it with drills. Rehearse the recovery phrases aloud.

**Week 4.** Run a full mock loop with breaks and independent scoring, then the taper. If you use an AI tool, calibrate it against a human with five answers.

**Deliverables that become assets:** the scorecard set with anchors, the error log with retest results, the calibration figures (your bias before and after), the dimension table with the diagnosis, the recorded mocks, and the final-week plan. Keep the numbers honest: they are the evidence of progress, and they are what you can tell an interviewer when asked how you improve.

## 15. Key takeaways and further reading

### Key takeaways

1. Practice by retrieval under realistic conditions (timed, aloud, in the real format) beats rereading and logging hours; the research on testing and on deliberate practice supports quality, feedback and spacing, with caveats about how far it transfers.
2. Score every mock with a written scorecard and quoted evidence before hearing anyone else's score, and calibrate against an independent scorer: compute your bias and error and correct for them, because feeling prepared is a poor guide.
3. Run a loop of record, score, one fix, log, drill and retest within about 72 hours on a new prompt; review the log weekly for recurring errors.
4. Find your weakest important dimension from calibrated data (importance times gap), set a numeric goal, allocate hours accordingly and re-score; do not practice only what you already do well.
5. Prepare for nerves with realistic mocks, a routine and three rehearsed recovery phrases; use AI tools for prompts and critique with a checking routine (quoted evidence, two runs, calibration against a human, fact checks); taper in the last week and rest.

### Further reading

- Henry Roediger and Jeffrey Karpicke, "Test-Enhanced Learning: Taking Memory Tests Improves Long-Term Retention," *Psychological Science* 17(3), 249 to 255, 2006 (doi 10.1111/j.1467-9280.2006.01693.x). A primary source for CS-C34-02.
- Brooke Macnamara, David Hambrick and Frederick Oswald, "Deliberate Practice and Performance in Music, Games, Sports, Education, and Professions: A Meta-Analysis," *Psychological Science* 25(8), 1608 to 1618, 2014 (doi 10.1177/0956797614535810), and a 2019 reanalysis with a stricter definition in *Frontiers in Psychology* (doi 10.3389/fpsyg.2019.02396). Sources for CS-C34-02.
- K. Anders Ericsson, Ralf Krampe and Clemens Tesch-Römer, "The Role of Deliberate Practice in the Acquisition of Expert Performance," *Psychological Review*, 1993 `[V: Ericsson, Krampe and Tesch-Romer, Psychological Review 100(3), 363 to 406, 1993]`.
- Peter Brown, Henry Roediger and Mark McDaniel, *Make It Stick* (2014), a readable account of retrieval practice, spacing and the illusion of competence `[V: Belknap Press of Harvard University Press, 2014, ISBN 9780674729018]`.
- Your own recordings and error log: the most relevant data you will ever have.
