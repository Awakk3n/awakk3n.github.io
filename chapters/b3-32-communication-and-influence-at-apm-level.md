---
id: C32
title: Communication and Influence at APM Level
tier: 1
competencies: [behavioral, execution]
prerequisites: [C16, C31]
defines_terms: [bluf, pyramid-principle, stakeholder, decision-document, escalation, influence-without-authority]
uses_terms: [prd, tradeoff, assumption, hypothesis, opportunity-cost, prioritization, scope-creep, reversible-decision, second-order-effect, problem-statement, story-bank, signal, postmortem, staged-rollout, rollback, metric, guardrail-metric, trust-signal, inversion, pre-mortem, goodharts-law, human-in-the-loop]
frameworks: [FW-C32-01, FW-C32-02, FW-C32-03, FW-C32-04, FW-C32-05, FW-C32-06, FW-C32-07, FW-C32-08]
case_studies: [CS-C32-01 (Illustrative), CS-C32-02 (Verified)]
cross_refs_out: [C02, C03, C07, C08, C10, C15, C16, C17, C31, C33, C34, C37]
cross_refs_pending: []
status: draft
---

# C32 — Communication and Influence at APM Level

## 1. What interviewers test

"Explain this decision to a senior leader in one minute." "How do you get an engineer to build something they would rather not?" "Two executives want opposite things; what do you do?" "A VP asks you to add a feature for a big customer; what do you say?" "Write the update that tells leadership the launch will slip." A product manager has no authority over the people whose work decides the outcome, so communication is the main tool of the job. Interviewers test it directly (how you structure an answer, how you handle pushback in the room) and indirectly (every story you tell shows how you worked with others). This chapter gives the working skills an associate product manager needs from the first week: structured speaking and writing, influence without authority, stakeholder mapping, communicating with senior leaders, disagreement, saying no, deciding under uncertainty, asking good questions, and working across distance.

**Where it shows up.** `Inferred` from the round structures candidates commonly report: communication is scored in every round at Google, Meta, Microsoft, Amazon, Apple, Netflix, Stripe and others, through the structure of answers, handling interruptions and pushback, and dedicated questions about stakeholders and disagreement; some companies add a written exercise or a writing-heavy culture (Amazon publishes its practice of narrative memos, C32.2) `[unverified: candidate-reported]`. On the job it is what separates a PM whose proposals are acted on from one whose proposals are politely ignored.

**What is scored.** Whether your message arrives intact and moves people `Inferred`. Interviewers listen for the answer first (not buried), a structure the listener can follow, calibrated confidence, awareness of the audience's goals and constraints, respect under disagreement, clear asks, and the ability to say no with an alternative.

Six observable behaviors:

1. You lead with the answer and group the support in a few clear points.
2. You write short documents that let a reader act: a one-pager, a decision document, a status update.
3. You influence people by understanding their incentives, bringing evidence and making the ask easy.
4. You map stakeholders and plan how to engage each before you need them.
5. You disagree with facts, criteria and respect, and you commit once a decision is made.
6. You say no with a reason and an alternative, and you state uncertainty plainly.

**The failure this prevents.** Six patterns end communication answers: the answer buried under background, a status update that lists activity instead of what changed, "I just explained it and they agreed," an ambush of a senior stakeholder in a meeting, a no that sounds like a wall, and false certainty or endless hedging.

## 2. The concept from first principles

### C32.1 Structured communication: the pyramid principle and bottom line up front

People understand a message best when they know where it is going. Two related habits give that (FW-C32-01).

**Bottom line up front.** **BLUF** (bottom line up front) is the practice of stating the conclusion or the request first and the supporting detail after it. "I recommend we delay the launch one week, because the checkout bug affects 3% of orders; I need your approval by Thursday." The listener now knows what you want and can follow the reasons as support, instead of waiting through background to find out why they are hearing it `[V: Minto, The Pyramid Principle: lead with the answer, then the supporting reasons]`.

**The pyramid principle.** The **pyramid principle** is a way of organizing a message as a pyramid: the answer at the top, supported by a few (usually two to four) grouped arguments, each supported in turn by evidence; the arguments in each group are of the same kind and in a logical order. It was developed by Barbara Minto, a consulting practitioner `[V: Minto, The Pyramid Principle]`. The test of a good pyramid is that each level answers the question the level above raises ("why?" or "how?").

**In practice.**
1. *Answer first.* State it in one sentence. In an interview, say it within the first fifteen seconds.
2. *Group the support.* Three reasons is the usual upper limit for a spoken answer: people remember a few things. Name them ("three reasons: cost, risk and timing"), then give each.
3. *Order logically.* By importance, by time, or by structure (problem, options, recommendation).
4. *Signpost.* "First... second... third..." and "to sum up."
5. *Close with the answer again* and the ask.

**Spoken against written.** Speech is linear and cannot be re-read, so keep the structure simpler, repeat the key line, and use shorter sentences. Writing can carry more detail in a clear hierarchy (headings, a summary at the top) because the reader can skim and return.

> **Counterexample.** Asked to summarize a project for a director, a candidate starts: "So in January we kicked off, and the team was new, and we had some discussions about scope..." After two minutes the director interrupts: "What happened?" The candidate has told the story in the order it occurred and has made the listener do the work of finding the point. A better answer: "We launched on time and onboarding completion rose from 41% to 47%. Three things drove it: we cut two steps, we rewrote the copy, and we moved a permission request later. The one thing that did not work was the tour, which we removed."

**When not to use answer-first.** When the listener needs context before the news makes sense or the news is sensitive (a personal loss, a colleague's mistake), open with a sentence of context or care and then give the point. In teaching or exploration, where the aim is shared discovery, lead with the question. Do not force a pyramid onto casual conversation.

**Hidden risk.** Answer first can become overconfident. If you are not sure, put the confidence in the first sentence: "My current view, at about 70% confidence, is that we should delay."

### C32.2 Writing: the one-pager, the decision document, the status update

Written communication scales: one document reaches many people and lasts. It also forces clearer thinking. Amazon's practice is a public example: its 2017 shareholder letter describes replacing slide presentations with narratively structured six-page memos read silently at the start of meetings, and notes that a good memo may take a week or more to write `Public` `[V: Amazon 2017 shareholder letter, as quoted by CNBC and Fortune]`. The principle applies at any scale: writing exposes gaps in thinking that speaking hides.

**The one-pager.** A one-page proposal: the problem and who has it (with a number), why now, the proposal, how success will be measured, risks and open questions, and the ask. Keep it to one page. The first lines should let a reader who stops there know what you want.

**The decision document.** A **decision document** is a short written proposal that frames a decision for the people who must make it: the context, the options considered, the recommendation with reasons, the risks, and what is needed and by when (FW-C32-02). Its aim is to let a busy reader decide, or say what is missing. Sections: *Decision needed and deadline;* *Context* (three to five sentences); *Options* (usually two to four, each with cost, benefit and risk); *Recommendation* and why; *What would change my mind;* *Risks and mitigations;* *Next steps and owners.* Worked example 3 shows a filled one.

**The status update.** A status update (FW-C32-03) tells the reader what changed, what it means and what you need, in a form that can be read in under a minute. Use four lines: *what changed since last time;* *where we are against the plan* (on track, at risk or blocked, and why); *what is next;* *what I need from you* (decisions, help, none). Lead with the headline, not with a list of activities. A reader who sees "on track, nothing needed" can stop; a reader who sees "at risk, decision needed by Friday" knows to act. Worked example 2 rewrites a diary-style update.

**Writing rules that work.** Put the conclusion first. Cut a third (read it aloud; delete what you skip). Use numbers with a baseline ("conversion fell 3%, from 6.1% to 5.9%"). Use plain words and define terms. Prefer active voice and specific names (roles). Remove hedges that carry no information ("I think maybe"). Say what you do not know. Ask someone unfamiliar with the topic to read it and say what the point is; if they cannot, rewrite.

**Working backwards.** Some teams write the announcement or the customer-facing description of a product before building it, to test whether the idea is clear and worth building `Public` `[V: Amazon working-backwards material]`. It is a way of making the problem and the user benefit concrete early (C16, C07).

### C32.3 Influence without authority

**Influence without authority** is getting people to act on a proposal when you are not their manager and cannot require it. A PM does this daily with engineers, designers, data scientists, legal, sales and executives. It is not manipulation: it is making a good case well, understanding what others need, and making yes easy (FW-C32-04).

**The influence ladder.**
1. *Understand incentives.* What is this person measured on? What are they afraid of? What would make their work easier or harder? An engineer asked to add a feature hears "more risk and more maintenance"; a salesperson hears "my deal."
2. *Find the shared goal.* State a goal both of you want ("fewer failed payments"), so that the proposal is a means to it.
3. *Bring evidence.* Data, user quotes and examples, with their limits. Evidence persuades more when you also state what would change your mind.
4. *Pre-wire.* Talk to the key people one-to-one before the meeting, hear their objections, and adjust, so the meeting confirms rather than surprises. A decision that is a surprise in the room is usually postponed.
5. *Make the ask clear and small.* "Can you review this by Thursday?" beats "thoughts?" Offer a first step that is easy to say yes to.
6. *Give credit and follow up.* Say publicly whose input shaped the plan; follow up on commitments in writing.

**Sources of influence.** Evidence and reasoning; relationships and trust built by being reliable and giving help first; reciprocity; shared stakes; and being clear and easy to work with. Position matters less than people expect. **Avoid:** manipulation (false urgency, hiding costs), going around people without telling them, and winning arguments at the cost of the relationship. Influence is repeated: how you behave this time decides whether they listen next time.

### C32.4 Stakeholder mapping

A **stakeholder** is a person or group who affects or is affected by a decision or product and whose support, input or approval it needs. Mapping them early prevents the late surprise of a blocker (FW-C32-05).

**Steps.**
1. *List everyone* who decides, builds, funds, uses, supports, approves, or could be harmed: engineering, design, data, legal, privacy, security, support, sales, finance, operations, partners, executives, and the users.
2. *Place each on power and interest.* High power, high interest: manage closely (involve, co-decide). High power, low interest: keep satisfied (brief updates, early flags). Low power, high interest: keep informed. Low power, low interest: monitor.
3. *Note what each cares about, what they fear and their likely position* (champion, neutral, skeptic, blocker).
4. *Decide how to engage each:* what to ask, when, in what form, and who is best placed to speak to them.
5. *Review as things change,* since stakes shift.

**Roles in a decision.** Say who decides, who must be consulted, and who must be informed; ambiguity about who decides is a common source of delay and conflict. Legal, privacy, security and support are often low-interest until late and high-power at the end, so include them early.

**Pitfalls.** Mapping only the loud stakeholders; treating the map as fixed; talking to each person only once; confusing seniority with relevance.

### C32.5 Communicating with senior leaders: the one-page update and asking for a decision

Senior leaders have little time, much context you lack and many competing items. APM-level skill is to make their decision easy (FW-C32-06).

**The structure.**
1. *The answer or the ask first,* in a sentence: "I recommend we ship Monday with the export feature off; I need your decision by 5 p.m. today."
2. *Why,* in two or three points, with the one number that matters.
3. *Options considered and rejected,* briefly, so they see the alternatives and your reasoning.
4. *Risks and what you are doing about them.*
5. *What happens if no decision is made* and the deadline.

**Before the meeting.** Pre-wire the people who will react. Know the three questions you will most likely be asked and have the answers. Decide in advance what you can concede. Bring the one-page version even if you present verbally. Expect interruption: be ready to give the answer in one minute, then in five.

**In the meeting.** Lead with the answer. If interrupted, answer the question, then return to your point ("Let me answer that first, and then I want to get back to the decision"). Watch for signals (checking the clock, rereading, a frown) and adapt: shorten, or ask "What would you need to see to decide today?" Do not argue with a challenge; acknowledge it, answer it and note it. End by restating the decision and the owner.

**Bad news.** Give it early, in person or by call if serious, then in writing. State the fact, the impact, what you know and do not know, what you are doing, and when you will update. Do not wait for a fix before telling; leaders dislike surprises more than problems. CS-C32-02 shows how a message that was heard but did not stop a decision can end.

**After.** Send the decision and next steps in writing within a day.

### C32.6 Disagreement and conflict

Disagreement is normal and useful when handled well; it is damaging when it becomes personal or silent (FW-C32-07).

**A protocol.**
1. *Understand first.* Restate the other person's view in its strongest form ("steelman," C31, mental models, section 9) and ask what they are optimizing for. Many disagreements are about different goals or different information, not about who is right.
2. *Separate facts from values.* Which parts can data settle, and which are choices about priorities? Argue facts with evidence and values with criteria.
3. *Agree the criteria and the evidence in advance.* "If the test shows X, we will do Y." This turns a fight into an experiment.
4. *Run the cheapest test,* if there is one.
5. *Decide who decides,* and by when.
6. *Disagree and commit.* Once the decision is made, support it fully, and keep your reversal condition (what would change your mind) in writing.
7. *Escalate properly.* If the disagreement affects safety, law or a large risk, raise it with the decision-maker or the next level, openly and with the other person informed.

**Scripts.** "I want to check I understand your concern: is it that...?" "What would you need to see to be comfortable?" "We agree on the goal; we differ on the route. Can we agree what evidence would settle it?" "I still disagree, and I'll commit; let's write down what would make us revisit."

**With specific partners.** *Engineering:* ask about the constraint behind the "no," and trade scope for time openly (C16.4). *Design:* separate the user problem from the solution and test with users. *Data science:* agree the question and the metric first, and ask what would change the interpretation. *Sales and executives:* acknowledge the business goal and show the cost and alternative.

**Repair.** After a hard disagreement, follow up one-to-one; thank them for the challenge; fix what you got wrong in public. **Escalation** is the act of taking a problem or disagreement to someone with more authority to resolve it; used well, it is a way to get a decision, not a way to win.

### C32.7 Saying no: scripts

PMs say no constantly: to features, scope, timelines and requests. A good no keeps the relationship and the goal (FW-C32-07 includes the structure).

**The structure.** (1) *Acknowledge the goal behind the request.* (2) *Say no clearly,* with the main reason and a number if you have it. (3) *Offer an alternative* that meets part of the goal. (4) *Offer a path to yes* (what evidence or change would alter the answer). (5) *Confirm the next step.*

**Scripts.**
- *To a stakeholder asking for a feature:* "I see the goal: reduce churn among your largest accounts. I can't fit this in the quarter because it would take about six engineer-weeks, which is 10% of our capacity and would delay the onboarding work expected to raise retention for everyone. What I can do is a configuration that covers about 70% of what they asked for in a week. If three more of your accounts hit the same issue, I'll bring it back to planning."
- *To your manager asking for more scope:* "We can add that, and to hold the date something else leaves. Here are the two options: drop the report export, or move the launch two weeks. Which do you prefer?"
- *To a customer-facing team on a date:* "I can't commit to that date, and I can commit to the first usable version by the 20th, with the rest in the following sprint."
- *To a request that is unsafe or unlawful:* "I can't do that: it would break our consent policy. Here is an alternative that serves the same goal."
- *To an idea you want to park:* "It's a good idea. It isn't in this quarter's plan; I've added it to the list with the reasoning and will review it at the next planning."
- *To a "quick favor" that is not quick:* "Happy to help. It's about two days of work; can we agree what drops, or is the date flexible?"

**Principles.** Say no early. Give the real reason. Offer something. Do not say "maybe" when the answer is no. Do not apologize excessively. Keep a record of requests and decisions so that people see they were heard.

### C32.8 Ambiguity and decisions with incomplete data

Most product decisions are made with partial information. The skill is to decide, to say how sure you are, and to say what would change your mind (FW-C32-08).

**The uncertainty statement.** In one short paragraph: *what we know* (facts and sources); *what we assume* and how it could be wrong; *how confident I am* (a probability or range, not "fairly sure"); *the decision* and whether it is reversible (C02.4); *what would change my mind* and when we will check. "Based on a two-week test of 8,000 users, conversion rose 2.1% (interval 0.6% to 3.6%). The interval is above zero, but it leaves out novelty and the traffic we have not seen, so I'm about 80% confident the effect is positive and smaller than 4%. The change is reversible within a day, so I recommend shipping to 25% of users and reviewing the numbers on Friday; if conversion falls by more than 1%, we roll back."

**Principles.** Time-box the search for more information: the cost of waiting is part of the decision. Prefer reversible decisions with early checks; take more care with irreversible ones. Use ranges, not false precision. Separate what you know from what you infer. Share your reasoning so others can challenge it. Do not hide behind uncertainty: after stating it, recommend.

**Hedging.** Qualifiers should carry information. "It might perhaps possibly help" says nothing; "I'd put the chance it helps at 70%" says how sure you are.

### C32.9 Asking good questions, reading the room, following up

**Questions.** *Clarifying questions* (what do you mean by...?) remove ambiguity; *probing* questions (what happens if...? why...?) test understanding; *challenging* questions (what would make this wrong?) test the plan. In interviews, ask two or three clarifying questions at the start of a case (C03.1), and say why. Ask one question at a time and wait for the answer. Ask open questions to learn and closed questions to confirm.

**Reading the room.** Watch for signals: attention drifting, repeated questions on one point (an unspoken concern), silence from someone who usually speaks, and body language on video. Check understanding: "Does that match how you see it?" Adapt: shorten, go deeper on the point they care about, or pause and ask what is on their mind. In an interview, the interviewer's interruptions are signals of what they want to explore; follow them.

**Following up.** After a meeting, send a short note with decisions made, owners and dates, and open questions. After an interview, a brief thank-you with one specific point from the conversation, sent within a day. Follow up on commitments you made and chase those made to you politely and with a date. Keep a log of requests and decisions.

### C32.10 Working across time zones and remote channels

Distributed work rewards written, asynchronous habits (FW-C32-01 and FW-C32-03 apply with more force).

- **Write so that it can be read without you.** Context, decision, ask and deadline in the first paragraph; link the details.
- **Choose the channel by the task.** Chat for quick coordination, documents for decisions and reference, meetings for discussion, disagreement and relationship. Move a long chat thread to a call or a document.
- **Use overlap hours for what needs live time** (disagreements, complex discussions) and asynchronous channels for the rest. Rotate inconvenient meeting times fairly.
- **Hand off clearly.** At the end of your day, write what is done, what is blocked, what is next and what you need from the other side by when, so that they can act while you sleep.
- **Meeting hygiene.** An agenda and goal in advance, a short pre-read, notes and decisions after, and cameras on if it helps.
- **Be explicit about decisions and ownership,** since silence is easy to misread at a distance.

> **Regional Lens: India.** Working from India with teams in other regions means planning around limited overlap. India Standard Time is UTC+5:30 and does not change. London is 5.5 hours behind India in winter and 4.5 in summer, so a nine-to-six day in India overlaps the London day by about 3.5 hours in winter and 4.5 in summer. The US Pacific coast is 13.5 hours behind in winter and 12.5 in summer, so ordinary working hours barely overlap with it: an Indian evening around 8 p.m. is early morning in California. The practical consequences are to write for asynchronous reading, protect the few overlap hours for discussion and decisions, hand off with a written note, and share the burden of awkward meeting times instead of always asking the same side to stretch `[as of 2026-10]`.

## 3. Frameworks

Eight frameworks, set out below. The decision memo (FW-C02-06), the problem-definition template (C02.7), the scope-negotiation script (FW-C15-07), the PRD template (C16) and the story anatomy (FW-C31-03) are reused, not repeated.

#### FW-C32-01 · The answer-first structure · Original

- **Inputs:** a message to speak or write and its audience.
- **Outputs:** the answer or ask in one sentence, two to four grouped supports (named up front), a logical order, signposts, and a closing restatement with the ask; a confidence statement when unsure.
- **Assumptions:** the listener's time and attention are limited.
- **Tradeoffs:** a short structure omits nuance; keep the detail ready for questions.
- **Failure modes:** chronological storytelling; five or more unordered points; no ask.
- **Worked example:** Worked example 1.

Steps: **Answer first → Name the supports → Give each → Close with the answer and the ask.**

#### FW-C32-02 · The decision document · Original

- **Inputs:** a decision that needs others' approval.
- **Outputs:** one to two pages: the decision needed and the deadline; context in three to five sentences; two to four options, each with cost, benefit and risk; the recommendation and reasons; what would change the recommendation; risks and mitigations; next steps and owners.
- **Assumptions:** the reader has limited time and can decide, or say what is missing.
- **Tradeoffs:** a short document omits depth; link appendices.
- **Failure modes:** burying the ask; one option only; no deadline; a recommendation with no reasons.
- **Worked example:** Worked example 3.

| Section | Content |
|---|---|
| Decision and deadline | What is needed, from whom, by when |
| Context | Three to five sentences, one number |
| Options | Two to four, with cost, benefit, risk |
| Recommendation | The choice and why |
| What would change my mind | Evidence or conditions |
| Risks and next steps | Mitigations; owners and dates |

#### FW-C32-03 · The status update · Original

- **Inputs:** a project and a reader with a minute.
- **Outputs:** four lines: what changed, where we are against the plan (on track, at risk, blocked, with the reason), what is next, and what I need (a decision, help, or nothing), with the headline first.
- **Assumptions:** a reader who sees "on track, nothing needed" can stop.
- **Tradeoffs:** brevity omits the day-to-day; keep detail in a linked document.
- **Failure modes:** a diary of activities; burying a blocker; no ask.
- **Worked example:** Worked example 2 and CS-C32-01.

#### FW-C32-04 · The influence ladder · Original

- **Inputs:** a proposal that needs people who do not report to you.
- **Outputs:** per person: their incentives and fears; the shared goal; the evidence; the pre-wire conversation and what it changed; a clear small ask; credit and follow-up.
- **Assumptions:** you will work with these people again.
- **Tradeoffs:** pre-wiring takes time and prevents surprises.
- **Failure modes:** a surprise in the meeting; evidence with no incentive understanding; going around someone.
- **Worked example:** Worked example 4.

Steps: **Incentives → Shared goal → Evidence → Pre-wire → Clear ask → Credit and follow-up.**

#### FW-C32-05 · The stakeholder map · Original

- **Inputs:** a project or decision.
- **Outputs:** a list of stakeholders placed on power and interest, each with what they care about, their likely position, who decides, who is consulted and who is informed, and an engagement plan with timing.
- **Assumptions:** the map is reviewed as things change.
- **Tradeoffs:** a detailed map takes time and prevents late blockers.
- **Failure modes:** listing only loud stakeholders; ignoring legal, privacy, security and support; a static map.
- **Worked example:** Worked example 4.

| Stakeholder | Power | Interest | Cares about | Likely position | Plan |
|---|---|---|---|---|---|

#### FW-C32-06 · The senior-leader update and ask · Original

- **Inputs:** a decision or news for a senior leader.
- **Outputs:** the answer or ask in a sentence; two or three reasons with the key number; options considered; risks; what happens with no decision and the deadline; a one-minute and a five-minute version; written follow-up within a day.
- **Assumptions:** the leader has little time and much context you lack.
- **Tradeoffs:** a short update leaves out detail; have it ready.
- **Failure modes:** background first; no ask; arguing with a challenge; surprising the leader.
- **Worked example:** Worked example 5 and IQ-C32-11.

#### FW-C32-07 · The disagreement protocol and the no script · Original

**Core framework.** Learn this one first.

- **Inputs:** a disagreement or a request you must decline.
- **Outputs:** for disagreement: restate the other view; separate facts from values; agree criteria and evidence in advance; run the cheapest test; decide who decides; commit and keep the reversal condition; escalate openly if needed. For a no: acknowledge the goal, say no with a reason and number, offer an alternative, offer a path to yes, confirm the next step.
- **Assumptions:** you want to keep the relationship and the goal.
- **Tradeoffs:** a careful no takes longer than a quick yes and avoids a late failure.
- **Failure modes:** a wall; a maybe that means no; winning the argument and losing the person.
- **Worked example:** Worked example 5 and IQ-C32-06.

#### FW-C32-08 · The uncertainty statement · Original

- **Inputs:** a decision with incomplete information.
- **Outputs:** a short paragraph: what we know (and sources), what we assume, confidence as a probability or range, the decision and its reversibility, what would change my mind, and when we will check.
- **Assumptions:** the audience prefers a clear recommendation with stated uncertainty to false certainty or none.
- **Tradeoffs:** stating confidence invites challenge, which is the point.
- **Failure modes:** hedging with no number; false precision; no check date.
- **Worked example:** IQ-C32-07 and EX-C32-07.

## 4. Answer architecture

### The communication and influence answer, for a 30-minute round

A communication-focused round mixes behavioral questions (a time you disagreed, influenced, said no) with scenarios (how would you handle...), and often tests your own structure as you answer.

| Step | Minutes | What to produce |
|---|---|---|
| Answer first | 1 per question | The headline in one sentence, within fifteen seconds |
| Context and stakes | 3 | Who, what is at stake, one number |
| The approach | 8 | The ladder, the protocol or the script, applied to the case, with the options and why you chose |
| The hard part | 6 | The objection, the pushback or the cost, and how you handled it |
| Result and learning | 4 | What happened, with evidence, and what you do differently |
| Follow-up probes | 8 | Concrete, honest answers |

**Pacing rules.** Keep each initial answer to about two minutes. If interrupted, answer the interruption, then return to the thread. If you run long, keep the answer, the decision and the learning.

**How to say it.** Lead with the answer: "I'd recommend X, for three reasons." Name your structure out loud ("first, second, third"). When you do not know, say how sure you are and what would change your mind.

**How to close.** Restate the answer and the ask in one sentence: "So I'd ship Monday with export off and need the decision by five."

### Type: structure an answer or summarize a project

Answer first, named supports, logical order, close with the ask.

### Type: write or review a document (update, one-pager, decision memo)

The status update, the one-pager and the decision document templates; cut a third; test with an outsider.

### Type: influence without authority or stakeholder conflict

The influence ladder, the stakeholder map, pre-wiring; the disagreement protocol.

### Type: saying no, bad news or senior leaders

The no script; the senior-leader update; bad news early with impact and plan.

### Type: ambiguity and incomplete data

The uncertainty statement; reversible decisions; a check date.

### Common interviewer interventions, and what to do

| Interviewer says | What it means | What to do |
|---|---|---|
| "Get to the point." | Answer buried | Give the answer in one sentence, then the support |
| "What do you need from me?" | No clear ask | State the decision, deadline and owner |
| "How sure are you?" | Calibration | Give a probability or range and what would change it |
| "Why would they listen to you?" | Influence | Incentives, shared goal, evidence, pre-wiring |
| "What if they still say no?" | Disagreement | Disagree and commit with a reversal condition; escalate openly if needed |
| "Say that again for a non-technical person." | Audience | Replace jargon with the user impact and one number |
| "That sounds like a wall." | A no with no alternative | Acknowledge the goal; offer a partial route and a path to yes |

## 5. Worked examples

All five examples are `Illustrative`: the people, companies and numbers are invented (invented), and the arithmetic was computed. Each is built as a before-and-after so that you can see what changes. Use them as models of structure, not as stories to retell.

### Worked example 1 — Restructuring a spoken answer (Illustrative)

**The prompt.** "Summarize your last project in a minute." (A director is listening, with five minutes to spare; the project and numbers are invented) (invented).

**The rambling version (summarized).** "So in January we kicked off, and the team was fairly new, and we had some discussions about scope, and then in February there was a re-plan because engineering was out for a week, and design had some ideas about the first-run flow, and in March we got the first version out, and then we looked at the numbers, and I think the onboarding completion went up a bit, from about forty-one to, I think, forty-seven percent." The point, the result, arrives after about 85 seconds of narration, and is hedged.

**Rebuild (FW-C32-01).** Answer first, name the supports, give each, close with the ask or the result.

**The answer-first version (69 seconds at an unhurried pace).** "We launched on time, and onboarding completion rose from 41% to 47%. Three things drove it. First, we cut two steps that collected data almost nobody used. Second, we rewrote the copy on the permission screen, which cut drop-off there by a third. Third, we moved the notification request to after the first note, so people saw value before being asked. One thing did not work: the product tour, which we removed after it showed no effect. The result held across the four weeks since launch, and next I'd like to test the same pattern on invitations."

**What changed.** The result moved from second 85 to second 4. The three supports were named up front ("three things"), so the director can follow and remember them. The failure was included, which builds credibility. The close points forward. The numbers have baselines.

**The one-minute and five-minute versions.** Keep the answer-first version as the one-minute form; for five minutes, expand each of the three supports with one example and the evidence, and keep the same order. If interrupted at any point, you have already given the answer.

**What this shows.** The content did not change; the order did, and the order is what the listener experiences.

### Worked example 2 — Rewriting a status update (Illustrative)

**The diary version (106 words) (invented).** "This week I met with design on Monday and Tuesday to go over the new flow, and also had a sync with the data team about the dashboard, which is still being built. On Wednesday there was a bug that engineering looked into and I helped triage it, and it turned out to be related to the sign-up form. I also started writing the spec for the next phase and got some feedback from legal, who had a few questions that I am following up on. Next week I will continue on the spec and have more meetings. Let me know if you have any questions."

**What the reader cannot tell.** Is the project on track? Did the bug matter? Is anything needed from me? The update lists activity (meetings, a sync) and hides the two facts that matter: a bug affecting users and a legal question that could affect the launch.

**The rewrite (FW-C32-03; 69 words).**

> **On track for the 12 November launch; one decision needed.**
> **Changed:** The sign-up bug, which affected 2% of new users, was fixed on Wednesday. Legal flagged a consent wording issue; the fix is a one-line copy change.
> **Next:** Phase 2 spec goes out for review Tuesday; the dashboard is ready Thursday.
> **Need from you:** Approve the copy change by Monday so it ships with the launch.

**What changed.** The headline carries status and the ask. "Changed" holds what is new and what it means (the bug's size, the legal issue and its fix). "Need from you" is explicit, with a deadline and a reason. A reader who stops after the headline knows what to do. The meetings are gone because they are activity, not news.

**Check.** Is every statement true, and does the reader know what to do? If a project is at risk, the headline says so: "At risk of slipping two days because the legal review is outstanding; need a decision by Thursday on whether to ship without the second language."

**What this shows.** A status update is an interface for decisions: lead with status and the ask, report what changed, and delete the diary.

### Worked example 3 — A decision document, filled in (Illustrative)

**The decision.** Whether to extend the free trial from 7 to 14 days for new sign-ups of a subscription app (invented).

**The document (FW-C32-02).**

> **Decision needed:** Choose the trial length for new sign-ups from 1 November. Needed from: the head of product. By: Friday.
>
> **Context.** About 60,000 people start a trial each month; 9.0% (5,400) become paying customers on the 7-day trial. A four-week test of a 14-day trial on 12,000 new users converted at 10.4% (95% interval 9.9% to 11.0%). A paying customer pays $12 a month and stays an average of nine months, worth about $108.
>
> **Options.**
> A. *Keep 7 days.* No change, no risk, no gain.
> B. *Move to 14 days.* At 10.4%, about 840 more paying customers a month (a range of about 510 to 1,170 at the ends of the interval), worth about $90,700 a month in lifetime value at the midpoint, against about $4,800 a month in extra infrastructure ($0.08 per trial user). Risk: some people use the longer trial and forget to pay; payment comes a week later, which delays cash.
> C. *10 days with a reminder on day 7.* Untested; might capture much of the gain with less delay.
>
> **Recommendation.** Option B, for the measured, positive effect and the low cost, with a review after 30 days.
>
> **What would change my mind.** If conversion on the full population is below 9.9% (the bottom of the interval), or paid retention at day 60 is lower for the 14-day group than for the 7-day group by more than 3 points.
>
> **Risks and mitigations.** Delayed cash: reminders at day 10 and 13. Novelty in the test: the 30-day review compares weekly cohorts. Next steps: engineering to switch the setting (one day), finance to update the forecast, analyst to run the review. Owner: me.

**Why it works.** The ask and the deadline are first. Context is five sentences with the numbers that matter. Options include the status quo and one untested alternative. The recommendation has reasons, and the document says what would change it, which invites a better decision from the reader. It is short enough to read in two minutes.

**What this shows.** A decision document makes the decision easy: the ask, the options with costs, a recommendation and the evidence that would reverse it.

### Worked example 4 — Stakeholders and an influence plan (Illustrative)

**The situation.** You propose adding a consent step to sign-up so that users agree explicitly to data use. It may lower sign-up conversion by 0.5 to 2 points (invented) on a base of 8.0% for 100,000 monthly visitors (8,000 sign-ups): between 6,000 and 7,500 sign-ups, a loss of 500 to 2,000. You need engineering time, design, and approval from a VP.

**The map (FW-C32-05).**

| Stakeholder | Power | Interest | Cares about | Likely position | Plan |
|---|---|---|---|---|---|
| Privacy counsel | High | Low until late | Compliance and risk | Champion | See first; get the requirement in writing |
| Growth lead | High | High | Sign-up conversion | Skeptic | One-to-one; offer a test with a guardrail |
| Engineering lead | High | Medium | Effort and risk | Neutral | Show scope (three days); ask what they need |
| Design lead | Medium | High | Clear, humane consent screen | Champion | Co-design the screen |
| Support lead | Low | High | Complaints about unwanted data use | Supportive | Ask for complaint data |
| head of product | High | Medium | Decision quality and risk | Decider | Pre-wire; decision document |

**The plan (FW-C32-04), in order.** *Counsel first:* confirm in writing that a consent step is needed in these markets `[V: GDPR Article 4(11) (clear affirmative action) and the ePrivacy Directive (opt-in for marketing email), as summarized in guidance]`, which turns the proposal from a preference into a requirement. *Analyst:* produce the range of conversion impact (0.5 to 2 points), with the assumptions. *Growth lead, one-to-one:* start from the shared goal (sustainable growth without a legal or trust problem), show the range, acknowledge the loss (500 to 2,000 sign-ups a month), and propose a test of two designs with a guardrail so that the lower-impact version can be chosen on evidence; ask what result would persuade them. *Engineering lead:* three days of work, rollback by flag; ask what would make it safer. *Design:* co-design two versions. *Support:* collect complaints about data use as evidence of the cost of not asking. *VP:* a one-page decision document with the options (do nothing, a full consent step, a lighter consent version), a recommendation, and the evidence that would change it.

**The expected objection and the response.** The growth lead says: "We can't afford a 2-point drop." Response: "I agree the loss matters, which is why I'd test two designs; if the lighter version loses under 0.5 points, we ship it. And counsel has confirmed that doing nothing isn't an option." This moves the conversation from whether to how.

**The decision meeting.** Twenty minutes, with no surprises: everyone has seen the document and been heard. The head of product decides; you send the decision and next steps within a day.

**What this shows.** Stakeholder mapping and pre-wiring turned a contested change into a design problem with a test, and made the decision meeting confirm what people already understood.

### Worked example 5 — A senior-leader ask, and a no that becomes a path (Illustrative)

**The situation.** The head of sales asks you to build a custom feature for a customer who would sign a $1.2 million annual contract if it had the feature. Engineering says it needs six engineer-weeks. Your team has five engineers, so about 60 engineer-weeks in the quarter (invented); six weeks is 10%.

**The analysis (honest, not reflexive).** A no is not automatic. Suppose the sales team puts the chance that the feature closes the deal at 60%: expected value 0.6 × $1.2 million = $0.72 million. The work it would displace is an onboarding improvement expected to add $0.9 million a year at a 50% chance of working: $0.45 million. On expected value alone the custom feature wins. But the cost is not only the six weeks: custom work adds ongoing maintenance (say two engineer-weeks a quarter), sets a precedent for other customers, and the 60% is the salesperson's estimate. The right answer is a better option, not a refusal.

**The script (FW-C32-07).** "I want to help close this; $1.2 million matters. Here is what I see. The custom build is six engineer-weeks, 10% of our quarter, plus about two weeks a quarter to maintain. Two alternatives: first, a configuration that covers about 70% of their request in a week; if the customer accepts it, we close with almost no cost. Second, we build it as a general capability that three other accounts have asked about, which makes the six weeks serve four customers. I'd like to try the configuration with the customer this week. If they need the full build, I'll bring a decision to [the head of product] with the tradeoff on Friday. What would help me is a call with the customer's technical contact tomorrow."

**The one-page ask to the head of product (FW-C32-06).**

> **Ask:** Decide by Friday whether to commit six engineer-weeks to a feature for a $1.2 million customer, displacing the onboarding work.
> **Recommendation:** Try a one-week configuration first; if rejected, build it as a general capability.
> **Why:** Expected value favors acting on the deal; the cost is 10% of capacity plus maintenance; a general version serves several accounts.
> **Risks:** The 60% close estimate is unverified; precedent for custom work.
> **If no decision:** The customer's deadline passes on the 30th.

**What this shows.** A no is stronger as a path: the numbers were computed honestly, the alternative served the goal, and the ask to the senior leader was clear and dated.

## 6. Baseline, Strong, Standout

**Prompt:** "You need to tell your director that the launch will slip by three weeks. What do you say?"

### Baseline answer

"I'd explain that we've had some unexpected problems and that the team is working hard, and that unfortunately we've fallen a bit behind. I'd apologize and say we'll try to get it done as quickly as possible."

*What is wrong:* the fact (three weeks) is not stated, no cause, no impact, no plan, no ask; the director cannot act.

### Strong answer

"I'd tell her early and directly, in a short call, then in writing: 'The launch will slip from 12 November to 3 December, three weeks. The cause is a payment-provider integration that failed testing and needs rework. The impact is that we miss the holiday campaign start. We've re-planned: the fix is estimated at two weeks, plus one week of testing. What I need from you is a decision by Thursday on whether marketing moves the campaign.' I'd send the summary and the plan in writing right after, and update her every Tuesday."

### Standout answer

Everything in the Strong answer, plus:

"I'd come with options and a recommendation, not only the slip. Option A: ship on 3 December with everything. Option B: ship the core on 12 November without the new payment method, which covers 80% of purchases, and add the rest on 3 December; the risk is a split campaign message and that the 20% who prefer the new method wait. I'd recommend B because it keeps the campaign date for most customers, and I'd say what would change my mind: if marketing says a partial launch undercuts the campaign.

"I'd be clear about what I know and don't: the two-week estimate comes from the engineer's range of ten days to three weeks, so I'd say I am about 70% confident of 3 December and give 10 December as the date I would stand behind. I'd name what I've learned: we tested the integration late, so the next integration gets tested in the first week. And I'd tell her before anyone else hears it, since she would rather hear a problem from me today than from a customer next week, and I'd send the written summary within the hour so she can forward it."

### What moves an answer up a band

| From Baseline to Strong | From Strong to Standout |
|---|---|
| States the fact, cause, impact, plan and the ask | Gives options and a recommendation, with what would change it |
| Tells early, in person then in writing | Calibrates the date with a range and a confidence |
| Commits to a cadence | Names the learning and the sequence of who hears first |

## 7. Company lens

All claims describe what companies say publicly or what candidates commonly report, not insider knowledge. Interview formats and published practices change `[as of 2026-10]`.

> **Company lens: Amazon [as of 2026-10].** Amazon's 2017 shareholder letter describes six-page narrative memos read silently at the start of meetings, in place of slides, and says that great memos are written and re-written over several days `Public` `[V: Amazon 2017 shareholder letter (published April 2018), as quoted by CNBC and Fortune]`. Candidates commonly report writing exercises or writing-heavy loops, and detailed probing of how you decided `Inferred`. Practical consequence: write in complete sentences with the answer first and the reasoning shown, practice the decision document, and be ready to defend each claim with a number.

> **Company lens: Google [as of 2026-10].** Google is widely described as a documents-and-comments collaboration culture `Inferred` `[unverified: candidate-reported]`. Candidates commonly report that structure and clarity of thinking are scored in every round and that cross-functional influence questions are common `Inferred`. Practical consequence: think aloud with a visible structure, state assumptions, and show how you bring engineers and designers along without authority.

> **Company lens: Meta [as of 2026-10].** Meta's published values include being direct and respecting colleagues `Public` `[V: Meta's careers culture page, six core values]`. Candidates commonly report questions about disagreement, feedback and speed `Inferred`. Practical consequence: show candor with respect, short updates with numbers, and a bias to decide and test; avoid both softening a message until it disappears and sharpening it until it offends.

> **Company lens: Microsoft [as of 2026-10].** Microsoft's culture materials emphasize collaboration and a growth mindset `Public` `[V: Microsoft careers culture page]`, and its scale means many stakeholders `Inferred`. Candidates commonly report questions about working across teams and influencing without authority `Inferred`. Practical consequence: show a stakeholder map, pre-wiring across teams, and curiosity about others' constraints.

> **Company lens: Apple [as of 2026-10].** Apple is widely described as valuing discretion and small, senior cross-functional reviews `Inferred` `[unverified: candidate-reported]`. Practical consequence: communicate concisely, protect confidential details in every story, prepare for pointed questions from senior reviewers, and show that you can present a clear point of view and revise it.

> **Company lens: Netflix [as of 2026-10].** Netflix's published culture document emphasizes candor and giving people context and not control `Public` `[V: Netflix culture memo, June 2024]`. Candidates commonly report questions about giving direct feedback and making judgment calls without waiting for approval `Inferred`. Practical consequence: write candid, reasoned memos, ask for dissent explicitly, and show that you decide with context and own the outcome.

> **Company lens: Stripe [as of 2026-10].** Stripe is widely described as having a strong writing culture `Inferred` `[V: The Pragmatic Engineer, Inside Stripe's Engineering Culture Part 2 (strong culture of writing); Slab interview with Stripe's former Documentation Manager]`, and its users are developers who value precision `Inferred`. Candidates report written exercises and questions on clear reasoning `Inferred`. Practical consequence: practice precise, structured documents, define terms, and show that your writing lets a reader act.

## 8. Common mistakes

| # | Mistake | How to detect it | Fix |
|---|---|---|---|
| 1 | Burying the answer | Background for two minutes before the point | Answer first, then support |
| 2 | Unlimited points | Seven unranked reasons | Two to four named supports |
| 3 | A diary status update | A list of meetings | Headline, what changed, what next, what I need |
| 4 | No ask | The reader does not know what to do | State the decision, owner and deadline |
| 5 | Surprising a stakeholder in the meeting | The first objection comes in the room | Pre-wire the key people one-to-one |
| 6 | "I just explained it and they agreed" | No incentives or evidence considered | Climb the ladder: incentives, shared goal, evidence, pre-wire |
| 7 | A no with no alternative | "We can't" | Acknowledge the goal; offer a route and a path to yes |
| 8 | Hedging with no number | "Probably maybe" | Give a probability or range and what would change it |
| 9 | Winning the argument, losing the person | A correct point delivered with contempt | Restate their view; agree the criteria; commit after |
| 10 | Late bad news | Waiting until you have a fix | Tell early, with impact, plan and next update |

## 9. Mental models applied

Four models, each tied to a decision in this chapter. [[pre-mortem]] is from C02, and steelmanning is introduced in C31.

**The curse of knowledge** (`MM-curse-of-knowledge`). Once you know something, it is hard to imagine not knowing it, so you skip the steps a newcomer needs `[V: Camerer, Loewenstein and Weber, Journal of Political Economy 97(5), 1989, pp. 1232 to 1254 (they credit Robin Hogarth with the term); popularized by Newton's 1990 tapping study and Heath and Heath, Made to Stick]`. It explains why updates are cryptic and documents are dense. Test it by asking someone unfamiliar to read your message and say the point.

**Reciprocity** (`MM-reciprocity`). People tend to return favors and to respond to those who have helped them `[V: Cialdini, Influence (1984)]`. In influence without authority it argues for helping first (unblocking an engineer, sharing an analysis) before asking, and for crediting others publicly.

**Steelmanning** (`MM-steelman`, see C31). Restate the other side's position in its strongest form. In disagreement it shows respect, reveals the real crux and makes your response credible.

**The pre-mortem** (`MM-pre-mortem`, see [[pre-mortem]], C02). Before a meeting or a launch, imagine it failed and ask why: the surprise objection, the stakeholder you did not call. The answers are your pre-wiring list.

## Engineering, design and data-science perspectives

How your message lands depends on who hears it. Test it against each listener.

- **Engineering.** An engineer hears requests as work and risk. Lead with the user problem and the goal, offer scope tradeoffs openly, ask about the constraint behind a "no," and be explicit about priorities. They will trust updates that give real dates and flag real risks early.
- **Design and research.** A designer hears solutions before problems as a loss of their craft. Bring the user problem and the evidence, ask for their approach and give credit for it. Keep feedback specific (what did not work for whom) and not about taste.
- **Data science.** A data scientist hears confident claims without limits as a warning. State the question, the metric and the uncertainty; ask what would change the interpretation; agree the analysis plan before the result.
- **Leaders, legal and support.** Leaders want the decision and the risk; legal wants the exposure and the facts; support wants to know what changes for customers and when. Give each their version, from the same facts.

## Checklist: before you send, present or walk in

1. Is the answer or the ask in the first sentence, with the deadline and the owner?
2. Are the supports two to four, named up front, in a logical order?
3. Do I have one number with a baseline, and what I do not know?
4. Have I pre-wired the people who will react, and do I know their incentives?
5. Do I have the three likely questions and my answers?
6. If I am saying no, have I acknowledged the goal, offered an alternative and a path to yes?
7. If I am unsure, have I stated my confidence, the reversibility and what would change my mind?
8. Can someone unfamiliar read it and tell me the point, and have I planned the written follow-up?

## 10. Case studies

#### CS-C32-01 · The weekly update nobody acted on · Illustrative · Beginner

*Fictional composite. Every number is invented (invented).*

**Situation.** An associate product manager sends a Friday update of about 600 words to 25 people. It lists meetings, tasks and the week's events in order. Responses are rare. In a one-to-one, the manager says: "I read it twice and I still don't know whether the project is on track or what you need from me."

**Constraints.** A new role; a wish to show effort; a team spread across three time zones, so the update is the main channel.

**Data.** Over four weeks, 3 of 25 recipients replied to any update (12%); two blockers raised in the body of updates took 4.5 days on average to be resolved; a peer later said she skimmed to the last line.

**Problem definition.** As an observable problem: "The update reports activity, hides the blockers and the ask, and so does not prompt action."

**Analysis.** The update tells the story in the order it happened (the opposite of answer first, C32.1) and treats effort as the content. A reader needs three things: status, what changed that matters, and what is needed. Applying the status-update format (FW-C32-03): a headline with status and the ask; what changed (two or three items, each with its impact); what is next; what is needed, with a deadline and an owner. The curse of knowledge also applies: terms and project names that the author knew well were unclear to readers outside the team.

**Options.**

| Option | Optimizes | Costs |
|---|---|---|
| A. Keep the long update | Comfort; shows effort | Little action; blockers linger |
| B. A four-line update with headline, changes, next and ask, plus a link to details | Action and clarity | Takes thought; omits the day-to-day |
| C. Stop writing updates and use meetings | Immediacy | Time zones; no record |

**Tradeoffs.** B costs thinking time (the update takes longer to write) and saves every reader's time; C fails across time zones.

**Decision.** Choose B. Write a headline that gives status and the ask, report what changed and why it matters, name the next two items, and state what is needed from whom by when. Keep a linked running log for the detail. Ask two readers to say what the point is before sending the first one.

**Outcome.** In this fictional scenario the new updates ran 70 to 90 words; replies rose from 12% to 60% of recipients; blockers flagged in the "need from you" line were resolved in 1.5 days on average instead of 4.5; and the manager stopped asking for status in the one-to-one (invented).

**Alternative outcomes.** If replies had not risen, the author would have tested whether the right people were on the list, and moved asks to direct messages for the two or three people who could act. If a reader needed the detail, the linked log would serve. The lesson: an update is an interface for decisions; lead with status and the ask.

#### CS-C32-02 · The Challenger teleconference, 1986: a warning that did not stop a launch · Verified · Advanced

*Sources (types): the Report of the Presidential Commission on the Space Shuttle Challenger Accident (the Rogers Commission, June 1986), as published by NASA: Chapter V, "The Contributing Cause of the Accident," read in full for the pre-launch teleconference, the testimony and the findings, and Chapter III, "The Accident," read through its excerpts for the launch facts (primary); and a published scholarly exchange on how the engineers' charts should be judged (the Online Ethics Center's analysis of Tufte's critique), which is cited here and not re-read. The Commission's recommendations chapter was not read for this case. Sources agree on the main sequence; the quality of the charts is disputed. The analysis is the author's. The case is used to study how a risk message is structured, heard and acted on, not to assign blame to individuals. Re-read in October 2026.*

**Situation.** On the evening of 27 January 1986, the night before the launch of the space shuttle Challenger, engineers at Morton Thiokol, the contractor that built the solid rocket boosters, joined a teleconference with NASA managers. Forecasts predicted unusually cold weather for the launch. The engineers were concerned that the O-ring seals in the booster joints would lose resiliency in the cold and might not seal properly. Their data base covered launches no colder than 53 degrees Fahrenheit, which Thiokol had calculated as the O-ring temperature on the January 1985 flight (51-C), the flight that showed the worst blow-by; it is an O-ring temperature, not the air temperature `[V: Rogers Commission, Chapter V]`. Thiokol's engineering vice president and the engineers presented charts and recommended not launching below 53 degrees, and Thiokol sent this recommendation to NASA.

NASA managers questioned the recommendation strongly: Marshall's George Hardy said he was "appalled" by it, though he also said he would not recommend launching over Thiokol's objection, and Marshall's Lawrence Mulloy argued that the engineers' data did not change the basic rationale for flying with a secondary seal. Thiokol's program manager, Joe Kilminster, asked for a five-minute caucus, which lasted about 30 minutes; in a final management review Jerry Mason asked Robert Lund to "take off his engineering hat" and put on his management hat, Thiokol's management concluded that the data were inconclusive, and Kilminster then read a rationale recommending launch and signed the fax sent to NASA `[V: Rogers Commission, Chapter V]`. The Commission concluded that Thiokol's management reversed its position at the urging of NASA's Marshall Space Flight Center and contrary to the views of its engineers, to accommodate a major customer. It also found that the senior officials who made the final launch decision had not been told of the engineers' initial recommendation or of their continuing opposition; Jesse Moore, Arnold Aldrich, Gene Thomas and Kennedy's director each testified that they did not know of Thiokol's objections, and Marshall's Stanley Reinartz said he was the person who decided not to escalate the matter to Level II `[V: Rogers Commission, Chapter V]`. Challenger launched the next morning with an ambient air temperature of 36 degrees Fahrenheit at the pad, 15 degrees colder than any previous launch, and broke apart 73 seconds after liftoff (the last telemetry arrived at 73.6 seconds), killing all seven crew members `[V: Rogers Commission, Chapter III]`.

**Constraints.** A decision made by teleconference that began about half an hour late, with charts still arriving by fax; a launch already scrubbed that day for crosswinds; a customer who pressed for launch; a burden of proof that the engineers described as being placed on them to prove it was unsafe, instead of on the launch proponents to prove it was safe `[V: testimony of Roger Boisjoly and Robert Lund, Chapter V]`; and a chain of reporting in which the engineers' dissent did not reach the final decision-makers.

**Data.** As reported: the date and sequence; the recommendation at 53 degrees; NASA's questioning; the caucus and reversal; the Commission's findings; the launch temperature and the loss of the vehicle.

**Problem definition.** *The author's reading.* A safety concern was raised by the people with the most knowledge, in time to matter, and the decision went the other way without the engineers' dissent reaching those who made the final call. As an observable problem: "The warning was heard and did not change the decision."

**Analysis.** *The author's analysis, through this chapter's tools.*

*Answer first, with the evidence.* The engineers' bottom line was clear (do not launch with the O-rings below 53 degrees). A scholarly critique argues that thirteen of the charts used that night (Hardy testified that some 14 were presented) did not display the relationship between temperature and O-ring damage in a way that made the case obvious, so the support for the recommendation was not as persuasive as it could have been. Others have disputed that critique, arguing that the engineers did link temperature and risk, and that the charts were not the cause of the reversal. The sources do not settle the debate; the practical lesson stands either way: a risk message should state the conclusion first and show, in one picture, the evidence that supports it.

*The burden of proof (C32.8).* The framing of the decision, as the engineers recounted it, asked them to prove that launching was unsafe. In a case of uncertainty about an irreversible, high-cost outcome, a better frame asks the proponents to show that launching is safe. How a question is posed changes what evidence counts as enough. A PM can apply this: state the decision rule in advance ("if we cannot show X, we do not ship").

*Influence and incentives (FW-C32-04).* The pressure came from a customer, a schedule and a past of earlier delays. Thiokol's management had an interest in satisfying NASA. The Commission's finding that management reversed at the urging of NASA shows how the incentives of the people who decide can outweigh the evidence of those who know. A PM facing such pressure should make the incentive visible and name it aloud.

*Escalation (C32.6).* The final decision-makers did not know about the engineers' dissent. Escalation exists to put the disagreement in front of the person who owns the decision. The structural fix is a rule that dissent on safety must be recorded and must reach the decision-maker; the personal one is to put the concern in writing and to the decision-maker when you believe the process has not surfaced it.

*Writing the dissent.* A recommendation signed by the engineers, with the data base and the reason, existed (it was faxed), and a reversal was signed by management. Written, dated, signed positions are what make accountability possible later.

*What the evidence does not show.* The exact content of the caucus conversation, what each individual intended, and whether a different chart would have changed the outcome. The case supports analysis of structure, framing and escalation, not a verdict on individuals.

**Options.** *The author's reconstruction of choices participants could have faced; not a record of their deliberations.*

| Option | Optimizes | Costs |
|---|---|---|
| A. Accept the management reversal and launch | Schedule and the customer relationship | The risk the engineers described |
| B. Hold the recommendation not to launch with the O-rings below 53 degrees, with the evidence in one clear picture, and require the decision-makers to decide with full information | Safety | Delay; friction with the customer |
| C. Escalate: ensure that the senior officials hear the engineers' position and the reversal directly before the decision | Informed decision | Time; organizational tension |

**Tradeoffs.** B and C cost time and relationships and protect against an irreversible loss. A saves the schedule at the risk of a catastrophic tail.

**Decision.** As documented, the launch was recommended by Thiokol management and approved, and the launch took place on 28 January.

**Outcome.** Reported: the loss of the vehicle and crew; the Commission's conclusion on the technical cause (the failure of the pressure seal in the aft field joint of the right Solid Rocket Motor) and its findings on the decision-making process, including that Thiokol's management reversed its position at the urging of Marshall and contrary to the views of its engineers `[V: Rogers Commission, Volume 1]`; the Commission's recommendations to NASA were not read for this case.

**Alternative outcomes.** *Inference.* Had the engineers' dissent reached the final decision-makers, the Commission concluded that, had the decision-makers known all of the facts, it was highly unlikely they would have decided to launch `[V: Rogers Commission, Chapter V]`. A reader should be careful with hindsight: the participants did not know the outcome, and the case is complicated by technical uncertainty. The method to carry away for your own work: put the conclusion first and the evidence in one clear picture; frame decisions so that the burden falls on showing safety when the outcome is irreversible; make incentives visible; and make sure that dissent reaches the person who decides, in writing.

## 11. Interview questions and model answers

Eleven questions. Model answers are `Illustrative` (composite candidates), and every person, company and figure is invented (invented) to show structure. Each ends with follow-ups and answers. Where a real company's practice is the setting, the answer reasons from public information and states no internal fact. The answers are fuller than a first pass in a real round.

#### IQ-C32-01 · Beginner · behavioral · BE

**Prompt.** Summarize a complex product decision for a non-technical executive in sixty seconds.

**Rubric.**
- **Baseline:** Starts with the history and technical background; the decision comes late.
- **Strong:** States the decision and the main reason first, with a number.
- **Standout:** Answer first, two or three named supports in plain language, the risk and the ask, and a closing restatement, within the time.

**Model answer.** "We decided to add a second payment provider, and I need your approval to start next week. Three reasons. First, reliability: our single provider failed for four hours last quarter and we lost about $180,000 in sales. Second, cost: a second provider lets us negotiate, and we estimate a 10 to 15% fall in processing fees, about $300,000 a year. Third, speed: the work is six engineer-weeks, which fits this quarter. The main risk is a more complex checkout, which we'd mitigate with a staged rollout to 10% of customers first. So: add the second provider, start next week, rollout in stages. Can I have your approval today?" (about 100 words; about 45 seconds).

*Signals.* Answer and ask first; three named reasons in plain terms, each with a number; the risk with a mitigation; the ask repeated.

**Follow-ups.**

- **Q.** What if she asks, "Why not wait a quarter?" **A.** "Because the next outage costs about $45,000 an hour at peak, and each quarter without a second provider is a risk of that. I can wait if you prefer, and I'd want us to agree the date and the reversal condition: if another outage happens, we start immediately."
- **Q.** Which number would you lead with if you only had ten seconds? **A.** "The $180,000 we lost in one outage: it makes the problem concrete, and the rest follows from it."

#### IQ-C32-02 · Beginner · behavioral · BE

**Prompt.** How do you structure a weekly update to your manager?

**Rubric.**
- **Baseline:** "I list what I did this week."
- **Strong:** Status, what changed, what's next and what's needed.
- **Standout:** Headline with status and the ask, news with impact (not activity), an explicit "need from you" with a deadline, brevity, and a link for the detail.

**Model answer.** "Four lines, headline first. The headline gives status and whether I need anything: 'On track for the 12th; one decision needed.' Then *what changed* since last week, with the impact: not 'met with legal' but 'legal flagged a consent wording issue; fix is a one-line copy change.' Then *what's next*, two items. Then *what I need from you*, with a deadline: 'Approve the copy change by Monday.' If I need nothing, I say so, since 'nothing needed' is useful news. I keep it under 80 words and link a running log for detail, so my manager can stop reading after the headline if all is well."

*Signals.* Reader's time respected; news not activity; an explicit ask; honesty about status.

**Follow-ups.**

- **Q.** What if there is nothing new? **A.** "I say so in one line: 'On track, no changes, nothing needed.' A short update is a good sign, and I keep the habit of writing so that they can trust the silence."
- **Q.** What if the news is bad? **A.** "The headline says it: 'At risk of slipping two days.' I do not save it for the end. I tell my manager by message or in person the day I know, and the weekly update repeats it with the plan."

#### IQ-C32-03 · Intermediate · behavioral · BE

**Prompt.** How do you get an engineer to build something they don't want to build?

**Rubric.**
- **Baseline:** "I explain why it's important until they agree."
- **Strong:** Understands the engineer's concern and finds a shared goal.
- **Standout:** Uses the ladder (incentives, shared goal, evidence, pre-wire, clear small ask, credit), trades scope openly, accepts a no that is right, and keeps the relationship.

**Model answer.** "I start by finding out why they don't want to. It is usually a real reason: risk to the system, maintenance burden, a better use of their time, or distrust that the priority is real. So I ask, 'What worries you about this?' and listen. Then I look for the goal we share: if the feature is to cut failed payments, I show the numbers (3% of payments fail, costing about $40,000 a month) and ask how they'd solve it, since their way may be better than my feature. I offer to trade scope: 'If we cut the report export, does the rest fit in two weeks?' I make the ask small and concrete: 'Can you spend half a day to estimate it and tell me what would make it risky?' If their answer is that it's a bad idea, I take it seriously and ask what evidence would change their mind; sometimes I am wrong. If we still disagree, I say who decides, which is me for what, and they flag the risk in writing. And I give credit: when it ships, I say whose idea made it safer."

*Signals.* Listening; shared goal; evidence with limits; trade of scope; respect; credit.

**Follow-ups.**

- **Q.** What if they are simply overloaded? **A.** "Then the question is priority, not persuasion. I show what we would drop to make room, ask the engineering lead to agree the tradeoff with me, and if the work doesn't make the cut, I accept it. Forcing it through burns trust."
- **Q.** What do you do if you can't persuade them? **A.** "I check whether I understand their objection; if I do and still believe the feature matters, I take the tradeoff to our shared manager with both views stated fairly and ask for a decision. I tell the engineer I'm doing it and why."

#### IQ-C32-04 · Intermediate · behavioral · BE · Amazon

**Prompt.** You need senior leaders to approve a major change. How would you prepare the written proposal, and what goes first?

**Rubric.**
- **Baseline:** "A slide deck with the main points."
- **Strong:** A short document with the ask and recommendation first.
- **Standout:** A narrative decision document with the ask, context, options, a recommendation with reasons, what would change the recommendation, risks and next steps; drafted early, reviewed by outsiders, cut, with numbers and a pre-wired reader list.

**Model answer.** The setting is general; I describe a practice Amazon has publicly described, narrative memos in place of slides, and make no claim about any internal process `Public` `[V: Amazon 2017 shareholder letter]`. "I'd write a decision document, one to two pages, not slides. The first lines are the decision I need, from whom, by when, and my recommendation, so a reader who stops there knows what to do. Then the context in a handful of sentences with the one number that matters. Then the options, usually three, including doing nothing, each with cost, benefit and risk. Then why I recommend one, and what evidence would change my mind. Then risks and next steps with owners.

"I'd allow real time: a good memo takes days, not hours, because writing in full sentences exposes the gaps in my thinking. I'd draft early, ask two people outside the project to read it and tell me the point, cut a third, and check every number against its source. Before the meeting I'd pre-wire the two or three people most likely to object and fold their points into the options. I'd bring the memo to the meeting to be read, not presented, and expect the discussion to start from it."

*Signals.* The ask first; options with costs; humility about what would change the view; real writing effort; pre-wiring.

**Follow-ups.**

- **Q.** How long would it take you? **A.** "About a week for something this significant: two days to gather evidence and decide, two to draft, a day of review, a day to cut and check numbers. If I'm told the decision is tomorrow, I write the one-page version and say which parts are less certain."
- **Q.** How do you know it's good? **A.** "A reader outside the team can say the decision and the main reason after one read; the numbers have sources; each option has a real cost; and a skeptic in review couldn't find an option I'd left out. If they can, I rewrite."

#### IQ-C32-05 · Intermediate · behavioral · BE

**Prompt.** A senior stakeholder insists on a feature you think will hurt users. You've said no twice. What do you do?

**Rubric.**
- **Baseline:** "I'd keep saying no," or "I'd just build it."
- **Strong:** Seeks to understand the goal, proposes evidence and a test, and escalates if needed.
- **Standout:** Restates their goal, separates facts from values, agrees criteria in advance, runs the cheapest test, disagrees and commits if overruled, and escalates openly if the harm is serious.

**Model answer.** "Twice saying no means the conversation isn't working, so I'd change it. First, restate their goal: 'I think you want to raise sign-ups before the quarter ends. Is that right?' and ask what's behind the feature. Often there is a goal I can serve another way. Second, separate what data can settle (does it lower retention?) from what's a judgment (how much do we value short-term sign-ups?). Third, propose a cheap test with criteria agreed in advance: 'Let's try it for 10% of users for two weeks; if retention at day 14 falls by more than a point, we stop.' That turns a fight into an experiment and is hard to refuse.

"If they still want it without a test, I would ask who decides. If it is them, I'd say plainly what I think will happen, put my concern and the reversal condition in writing, and commit to doing it well, with monitoring. If I believed it would harm users seriously or break a policy or law, I would raise it with the next level or the relevant owner, openly and telling the stakeholder I am doing so, and I wouldn't build the part I thought was unlawful."

*Signals.* Understanding their goal; a test; commitment; escalation for real harm only.

**Follow-ups.**

- **Q.** What if the test is positive and you were wrong? **A.** "Then I was wrong and I say so, thank them for pushing, and ship it. The reason to test was to find out which of us was right, and I'd rather learn it in two weeks."
- **Q.** When is escalating the wrong move? **A.** "When it is a disagreement about priorities or taste and the decision is theirs. Escalation is for decisions that carry safety, legal or large user harm, not for disagreements I lost."

#### IQ-C32-06 · Hard · behavioral · BE

**Prompt.** Two senior stakeholders want opposite things from your product, and you can't satisfy both. What do you do?

**Rubric.**
- **Baseline:** "I'd go with the more senior one," or "I'd find a compromise."
- **Strong:** Understands each goal, looks for a shared goal and brings data.
- **Standout:** Maps both, finds each one's real objective, offers options that serve both goals partly, agrees decision criteria, brings the choice to the common decision-maker with a recommendation, and keeps both informed.

**Model answer.** "I'd begin by understanding each goal separately and in depth. Suppose the head of sales wants a longer free trial to raise conversion, and the head of finance wants a shorter one to protect cash. I would ask each what they're optimizing, what number they would watch, and what would change their mind. Usually the disagreement is over different time horizons or measures, not over facts.

"Then I'd look for a shared goal: 'We both want profitable growth.' I'd turn the question into options with numbers: 7 days, 14 days, or 14 days with a day-7 reminder; and agree with both the criteria beforehand, for example, 'payback within 6 months and conversion up at least a point.' If a cheap test can settle it, I'd run it. If not, I'd write a one-page decision document with the options, my recommendation and the evidence that would change it, and take it to the person who owns the decision above both of them, having shown each stakeholder the document first so neither is surprised. I'd tell them both what was decided and why, and credit what each contributed. I'd avoid picking the more senior person by default, and I'd avoid a compromise that serves neither goal."

*Signals.* Deep understanding of both sides; criteria before the choice; options; no surprises; fairness.

**Follow-ups.**

- **Q.** What if the common manager won't decide? **A.** "I'd ask what is making it hard (missing information, a political cost) and address that; and if there is no decision, I'd propose a time-boxed trial with the criteria agreed, so that the decision is made by the data after two weeks."
- **Q.** What if one stakeholder goes around you to the executive? **A.** "I'd speak to them directly and without accusation: 'I heard you took it to [the executive]; I want to make sure you have the full picture; here is the document I'm preparing.' And I'd make sure the executive has the same one-page view."

#### IQ-C32-07 · Hard · behavioral · BE

**Prompt.** You must decide with about 60% of the data you'd like. How do you communicate your recommendation?

**Rubric.**
- **Baseline:** "I'd say I'm not sure and ask for more time."
- **Strong:** States the recommendation with a confidence level.
- **Standout:** Uses the uncertainty statement: what we know, assume, confidence as a number, reversibility, what would change the decision and when it will be checked; time-boxes further data; recommends anyway.

**Model answer.** "I'd give a clear recommendation, say how sure I am, and say how we'll find out if I'm wrong. For example: 'Based on a two-week test of 8,000 users, conversion rose 2.1% (interval 0.6% to 3.6%). That is the 60% of the data I'd like: we haven't seen a full month or the mobile app. The interval is above zero, but it leaves out novelty and the mobile app, so I'm about 80% confident the effect holds, and I'd expect it to be between 1% and 3%. The change is reversible within a day. So I recommend shipping to 25% of users now and checking again Friday, with a rule: if conversion falls by more than 1%, we roll back. Waiting for the full month costs us about $20,000 in forgone conversions and would reduce my uncertainty only a little, because the interval is already narrowing.'

"I'd say what I assume (that the second half of the month looks like the first) and what would change my mind (a drop on mobile). I'd put a date on the next look. And I would not hide behind the uncertainty: after stating it, I recommend."

*Signals.* A recommendation with calibrated confidence; reversibility; a trigger and a check date; the cost of waiting.

**Follow-ups.**

- **Q.** How did you get to "80% confident"? **A.** "From the interval: most of it lies above zero, so with a simple model there's a high chance the true effect is positive; I round down because of what we haven't seen. I'd say 'about 80%' to signal it's a judgment, and I'd be happy to hear if someone sees it differently."
- **Q.** What if the stakes were irreversible? **A.** "Then I'd want more data, and I'd say what the cost of waiting is, and I'd set a deadline for the decision so that waiting doesn't become a decision by default. I'd also look for a reversible way to learn more first, such as a limited pilot."

#### IQ-C32-08 · Intermediate · behavioral · BE

**Prompt.** You work with a team about twelve hours away in time. How do you run a project?

**Rubric.**
- **Baseline:** "I'd schedule meetings at a time that works for both."
- **Strong:** Uses asynchronous writing, handoffs and limited overlap hours.
- **Standout:** Writes for asynchronous reading, protects overlap for discussion and decisions, hands off with a written note, shares the inconvenience of timing, makes decisions and ownership explicit, and checks understanding.

**Model answer.** "I'd assume we can't rely on live time, and design for that. Everything that needs a decision or has context goes in a document with the answer, the ask and the deadline in the first paragraph, so that the other side can act while I'm asleep. For overlap, say two hours a day, I'd keep it for what needs live discussion: disagreements, complex tradeoffs and relationship. Everything else goes into writing.

"At the end of my day I'd write a handoff: what's done, what's blocked, what's next and what I need by when. They'd do the same for me. For meetings I'd rotate the awkward time so that one side isn't always stretching, with an agenda and notes with decisions and owners afterward. I'd make ownership explicit, since silence at a distance is easy to misread, and I'd check understanding by asking the other side to restate the decision. And I'd invest in the relationship early, with a call to get to know each other, since trust makes asynchronous work easier."

*Signals.* Async-first writing; protected overlap; handoffs; fairness; explicit ownership.

**Follow-ups.**

- **Q.** A decision is blocking and the other side is asleep. What do you do? **A.** "If it is reversible and within my authority, decide and document why, and tell them first thing; if not, I'd ask the owner for a delegate who can decide in my hours, or I'd prepare the decision document so that they can approve within minutes when they wake."
- **Q.** How do you keep from misreading tone in chat? **A.** "I'm explicit and a little warmer in writing than feels natural, I say what I want, and I move anything with an edge to a call."

#### IQ-C32-09 · Intermediate · behavioral · BE

**Prompt.** How do you make sure a message is understood by engineers, designers and legal?

**Rubric.**
- **Baseline:** "I send the same message to everyone."
- **Strong:** Tailors the message to each audience's concerns.
- **Standout:** Starts from shared facts, gives each audience the version that answers their question, avoids jargon, checks understanding by asking for a restatement, and keeps one source of truth.

**Model answer.** "I keep one source of truth, a short document with the facts, the decision and the ask, and give each group the framing that answers their question. Engineers want the scope, the constraint and the date: what exactly are we building, what is out, what are the risks? Designers want the user problem, the evidence and the freedom to solve it: what are we trying to change for whom? Legal wants the exposure, the data involved and the markets, and wants it early. I avoid jargon that one group knows and another doesn't, and I define terms once.

"I check that the message landed by asking for a restatement ('Can you tell me in your words what we're doing and what you need from me?') or by asking someone outside the team to read the document and say the point. If two groups hear different things, I bring them together with the same one-pager. And I send decisions in writing after a meeting so that memory is not the record."

*Signals.* One truth, several framings; audience's concerns; checking understanding.

**Follow-ups.**

- **Q.** What if legal's concerns arrive after the design is done? **A.** "I'd treat it as a lesson about process: bring legal in at the problem stage in the future, not the end. For now I'd ask what is the smallest change that meets the requirement, and present options to design with the real constraint."
- **Q.** How do you explain a technical constraint to a designer without condescension? **A.** "I ask the engineer to explain it in terms of what the user would experience, not how the system works, and I bring examples. I frame it as a design constraint to work within, not as a no."

#### IQ-C32-10 · Hard · behavioral · BE

**Prompt.** You disagree with a data scientist's interpretation of an experiment. How do you resolve it?

**Rubric.**
- **Baseline:** "I'd trust the data scientist," or "I'd argue my view."
- **Strong:** Asks about the method and looks at the data together.
- **Standout:** Restates their interpretation, agrees the question and the metric, examines assumptions (sample, duration, novelty, segments), proposes a check that could settle it, and decides who decides and how to proceed in the meantime.

**Model answer.** "I'd start by making sure I understand their reading and what it rests on: 'Walk me through how you got to this. What does the interval say, and what would make you change your mind?' I often learn something. Then I'd say my concern concretely: 'I'm wondering whether the lift is novelty, since the first week was +4% and the last was +1%.' We'd agree what question the test answers and which metric is primary, because many disagreements are about different questions.

"Then I'd look for what would settle it: reading the effect by week, checking segments, extending the test or running a holdout. We'd agree in advance what each result would mean for the decision. If we still disagree, we'd write both readings with the uncertainty and take the decision to the owner, with a recommendation about the next step that is reversible. I'd credit the data scientist's contribution, and if the data shows I was wrong, I'd say so. My aim is the right decision and a working relationship, since I'll need their judgment again."

*Signals.* Understanding the method; a specific concern; agreed criteria; humility; a path to a decision.

**Follow-ups.**

- **Q.** What if the data scientist is much more senior? **A.** "Seniority doesn't change the data. I'd bring the specific concern with evidence and ask for their view on it; senior people usually welcome a precise challenge. If they hold their view, I'd ask what check would convince them, and we'd run it."
- **Q.** What if you realize you misunderstood the analysis? **A.** "I say so promptly and thank them. It's cheaper to be wrong in a conversation than in a launch, and it makes the next disagreement easier."

#### IQ-C32-11 · Hard · behavioral · BE · Stripe

**Prompt.** Write the message to executives that a key launch will slip by three weeks because another team's dependency is late.

**Rubric.**
- **Baseline:** A long message that apologizes, blames the other team and leaves the ask unclear.
- **Strong:** States the new date, the cause, the impact and the plan.
- **Standout:** Facts without blame, a calibrated date with a range, options and a recommendation, what is being done, what is needed and by when, and an offer to discuss; written so that a reader can forward it.

**Model answer.** The setting is general; I describe a writing style and make no claim about any real company's practice.

> **Subject: Launch of the new payouts flow moves from 12 November to 3 December; decision needed by Thursday**
>
> **Summary.** The launch will slip three weeks, to 3 December. I'm about 70% confident of that date and would plan on 10 December as the date we can stand behind.
>
> **Cause.** The identity-verification service we depend on will be ready on 24 November, not 3 November. The date was set by the team that owns it; we found out on 28 October when their testing found a defect.
>
> **Impact.** We miss the start of the holiday campaign; about 15% of planned volume (about $400,000) moves into December.
>
> **Options.** (A) Ship everything on 3 December. (B) Ship on 12 November without identity verification for returning users (about 80% of volume), adding new users on 3 December. Risk: a split campaign message and a lower verification rate in the interim, which we would cap with limits.
>
> **Recommendation.** B, if marketing confirms it can run a partial campaign.
>
> **What I need.** Your decision on A or B by Thursday, so marketing and engineering can plan.
>
> **What we're doing.** Daily check-ins with the owning team; we've agreed milestones on 12 and 19 November; I'll update you every Tuesday and immediately if the date moves.

*Why it works.* The subject line has the news and the ask. It states facts about the cause without blame ("the date was set by the team that owns it"), gives a range, and offers options with a recommendation and a deadline. It can be forwarded without edits.

**Follow-ups.**

- **Q.** Do you name the other team? **A.** "Yes, factually, since leaders need to know whom to talk to, and without judgment. I'd have already told that team's lead what I'm sending, so it is not a surprise, and I'd ask them to check the facts."
- **Q.** What if the other team contests your account? **A.** "I'd ask what's different and correct anything that is wrong right away. If we disagree about a judgment, I'd write both views in a neutral line and offer a call with the three of us. My aim is for leaders to have the same picture we have."

## 12. Exercises

Ten exercises. Each has a model solution and an alternative. Every figure is invented, and all scenarios are Illustrative; use only what is true in your own work.

#### EX-C32-01 · Rebuild an answer, answer first

**Problem.** Rewrite this into an answer-first version of 60 to 90 words: "So we started by looking at the data and we noticed a few things, and then we had a couple of meetings with the team, and after a lot of back and forth we decided to cut the number of fields in the sign-up form, and then we tested it, and I think it did better, something like six points."

**Context.** Practice with a partner.

**Data.** Invent two supporting facts and mark them (invented).

**Constraints.** Five minutes.

**Expected approach.** FW-C32-01 and Worked example 1.

**Solution.** "Cutting the sign-up form from 12 fields to 7 raised completion by 6 points, from 52% to 58% (invented). Two things drove it. First, the funnel showed 38% of people stopped at the address step, so we removed the fields that could wait until after sign-up. Second, we added inline validation so that errors appeared as people typed. The test ran for three weeks on a 50% split and the lift held each week. Next I'd like to test the same idea on the payment step."

**Alternative solution.** Lead with the next step if the interviewer asks about plans.

**Tradeoffs.** Answer-first can sound abrupt; a warm, clear first sentence solves that.

#### EX-C32-02 · Rewrite a status update

**Problem.** Rewrite as a four-line update (FW-C32-03): "This week was busy! I had lots of meetings with the team and talked to a few customers. We're still working on the dashboard and I think it'll be done soon. There were some issues with the data that I'm looking into. I also reviewed the designs. Next week I'll keep working on all of this. Let me know if you need anything."

**Context.** A weekly update.

**Data.** Invent facts and mark them (invented).

**Constraints.** Six minutes.

**Expected approach.** Worked example 2.

**Solution.** "**At risk: dashboard launch may slip two days because of a data issue; one decision needed.** **Changed:** Customer calls (5) showed that the weekly view is the one people want, so we will ship that first; a data issue (duplicate events for 3% of users) is being fixed by engineering. **Next:** fix verified Tuesday; designs approved Wednesday. **Need from you:** Decide by Tuesday whether to launch the weekly view without the monthly view."

**Alternative solution.** If the data issue is minor, change the headline to "On track" and move the issue to "Changed."

**Tradeoffs.** A candid headline invites questions; it also lets people help.

#### EX-C32-03 · Write a decision document

**Problem.** Write a one-page decision document (FW-C32-02) for: "Ship the new onboarding on Monday with a known minor bug (affects 1% of users, cosmetic), or delay a week." Invent supporting numbers and mark them (invented).

**Context.** A real decision memo.

**Data.** As above.

**Constraints.** Ten minutes.

**Expected approach.** FW-C32-02 and Worked example 3.

**Solution.** "**Decision needed:** Ship Monday with a cosmetic bug or delay a week; needed by Friday, from the head of product. **Context:** The new onboarding raised completion from 41% to 47% in a test; a cosmetic misalignment affects 1% of users (about 600 a month); a one-week delay would cost about 1,200 additional completions at the 6-point lift (invented). **Options:** A: ship Monday and fix in the next release (cost: 600 users a month see a misaligned button; risk: low). B: delay a week (cost: about 1,200 fewer completions; risk: none from the bug). C: ship Monday to 50% and fix within three days. **Recommendation:** C, which captures about half the gain immediately and exposes about 300 users a month to a cosmetic issue for three days. **What would change my mind:** if support reports confusion, or if the bug affects more than 3% of users. **Risks and next steps:** engineering fixes by Wednesday; support has a note; I review daily."

**Alternative solution.** Recommend A with a support note if the bug is truly cosmetic.

**Tradeoffs.** A staged release reduces exposure and adds coordination.

#### EX-C32-04 · Map the stakeholders

**Problem.** You propose raising the price of a plan by 10%. Fill in a stakeholder map (FW-C32-05) for six stakeholders: finance, sales, support, engineering, marketing and the head of product (decider), with power, interest, concern, likely position and your plan.

**Context.** A contested change.

**Data.** None.

**Constraints.** Eight minutes.

**Expected approach.** FW-C32-05 and Worked example 4.

**Solution.** *Finance:* high power, high interest; wants revenue and forecast accuracy; champion; give the model and the range. *Sales:* medium power, high interest; fears harder deals and discount requests; skeptic; ask what discount data shows and agree guardrails. *Support:* low power, high interest; fears angry customers; neutral; prepare a script and a volume estimate. *Engineering:* medium power, low interest; wants the change to be a configuration, not code; neutral; confirm it is simple. *Marketing:* medium power, medium interest; messaging and timing; neutral; co-write the message. *head of product:* high power, medium interest; wants a defensible decision; pre-wire with the decision document and the test plan (price test on new customers first).

**Alternative solution.** Add customers as a stakeholder group and plan a communication.

**Tradeoffs.** A thorough map costs an afternoon and avoids a late blocker.

#### EX-C32-05 · Sequence the pre-wiring

**Problem.** You need engineering, legal and a skeptical growth lead to support a new consent step. In what order do you talk to them, what do you ask each, and what do you say to the skeptic?

**Context.** Influence without authority.

**Data.** None.

**Constraints.** Six minutes.

**Expected approach.** FW-C32-04.

**Solution.** *Legal first:* confirm the requirement in writing, so that the proposal is not just a preference. *Analyst:* get a range of the impact. *Growth lead second:* the skeptic should not hear it from someone else; acknowledge the loss, show the range, propose a test with a guardrail, and ask what result would persuade them. *Engineering third:* scope, risk and a rollback flag. Then design, then the decider. To the skeptic: "I agree the loss matters; that's why I want to test two designs. If the lighter one costs under half a point we ship it; if not, we change the design. Counsel has confirmed doing nothing isn't an option here."

**Alternative solution.** Talk to the engineer first if the effort estimate is the likeliest blocker.

**Tradeoffs.** The order is a judgment: start with whoever's input changes the proposal most.

#### EX-C32-06 · Write three no scripts

**Problem.** Write short no scripts (FW-C32-07) for: (a) a sales director asking for a custom report in two days; (b) your manager asking for a feature in addition to a full plan; (c) a stakeholder asking you to hide a known bug from a customer.

**Context.** Saying no.

**Data.** None.

**Constraints.** Eight minutes.

**Expected approach.** FW-C32-07.

**Solution.** (a) "I see the goal: the customer needs numbers for their review. I can't build the report in two days; it's about a week. I can send you a spreadsheet extract today that covers most of it, and I'll build the report if two more customers ask. Does the extract work for their review?" (b) "We can add it, and to hold the date something leaves. Options: drop the export, or move the launch by two weeks. Which do you prefer?" (c) "I can't do that: hiding a known bug from a customer risks their trust and our obligations. What I can do is tell them about it with the workaround and the fix date; I'll draft the message now, and we can send it together."

**Alternative solution.** For (a), offer a time-boxed manual version with a clear end date.

**Tradeoffs.** A firm no on (c) may cost goodwill; the cost of hiding it is higher.

#### EX-C32-07 · State the uncertainty

**Problem.** A test on 6,000 users shows a 1.8% lift in conversion with a 95% interval of −0.2% to +3.8%. The change can be rolled back in a day. Write the uncertainty statement (FW-C32-08) and a recommendation.

**Context.** Incomplete data.

**Data.** As above.

**Constraints.** Six minutes.

**Expected approach.** FW-C32-08 and IQ-C32-07.

**Solution.** The interval is about ±2 points wide, so the standard error is about 1.0 point, and the estimate is about 1.8 standard errors above zero; under a simple normal approximation the chance the true lift is positive is about 96%. "Based on a test of 6,000 users, conversion rose 1.8% (interval −0.2% to +3.8%). I'm about 90% confident the effect is positive; I round down because we have only two weeks of data and haven't seen the mobile app separately. I expect a true effect between 0% and 3%. The change is reversible within a day, so I recommend shipping to 25% of users and checking on Friday; if conversion falls by more than 1%, we roll back. What would change my mind: a negative reading on mobile."

**Alternative solution.** Extend the test a week if the cost of waiting is small and the change is not easily reversible.

**Tradeoffs.** A confident statement invites challenge; that is the point.

#### EX-C32-08 · Meeting notes and follow-up

**Problem.** From these raw notes, write a follow-up message (decisions, owners, dates, open questions): "Talked about launch. Priya says the bug is minor. Sam thinks we should wait. Leo said legal needs a day. We'll probably go Monday unless something comes up. Someone should tell marketing. Open: whether to turn off export."

**Context.** After a meeting.

**Data.** As above.

**Constraints.** Five minutes.

**Expected approach.** C32.9.

**Solution.** "Thanks all. **Decisions:** Launch Monday, subject to legal sign-off by Friday noon (Leo). **Owners:** Leo, legal review, Friday noon. Priya, confirm the bug is cosmetic by Thursday and share the repro steps. I will tell marketing today. **Open question:** whether to turn off export for launch; Sam and Priya to bring a recommendation by Thursday; I decide Friday. **Risk raised:** Sam's concern that a bug could affect first impressions; mitigation: staged rollout to 25%. Please reply with corrections by tomorrow."

**Alternative solution.** Add a one-line summary at the top if the thread is long.

**Tradeoffs.** Precision on owners and dates takes a minute and prevents the "I thought you were doing it" problem.

#### EX-C32-09 · Time-zone arithmetic and handoff

**Problem.** You work from India (IST, UTC+5:30) with a nine-to-six day. Compute the overlap with a London team (nine to six, GMT in winter, UTC+1 in summer) and with a California team (nine to six Pacific, UTC−8 in winter). Propose a plan for the California team.

**Context.** Remote work.

**Data.** As above.

**Constraints.** Six minutes.

**Expected approach.** C32.10.

**Solution.** Your day is 03:30 to 12:30 UTC. London winter (GMT): 09:00 to 18:00 UTC, overlap 09:00 to 12:30: 3.5 hours; London summer (BST, UTC+1): 08:00 to 17:00 UTC, overlap 08:00 to 12:30: 4.5 hours. California winter (UTC−8): 17:00 to 02:00 UTC, no overlap with your day; California 06:30 is 14:30 UTC, which is 20:00 in India. So a live meeting needs the Californian to start at 06:30 to 08:30 and you to work 20:00 to 22:00. Plan: write for asynchronous reading with the ask and deadline first; one live call a week, alternating inconvenience (one week your evening, the next their early morning); a daily written handoff at the end of each day; a decision log; delegates who can decide in each region.

**Alternative solution.** Shift your own day one or two days a week (for example to 12:00 to 21:00) so that the overlap is shorter and less lopsided.

**Tradeoffs.** Fairness in awkward hours matters for morale and for the quality of meetings.

#### EX-C32-10 · A timed executive update with interruptions

**Problem.** With a partner as a senior leader, give a five-minute update on a launch that is at risk, with at least two interruptions (one hostile, one off-topic). Use FW-C32-06 and record yourself.

**Context.** Self-scored.

**Data.** Use a real or invented project.

**Constraints.** Five minutes plus two minutes of questions.

**Expected approach.** C32.5 and FW-C32-06.

**Solution.** A good performance: the answer and ask in the first sentence; two or three reasons with the key number; options and a recommendation; the risk and the deadline; on interruption, a direct answer to the question, then "to come back to the decision"; on a hostile challenge, acknowledgment ("that's fair"), a factual answer and no defensiveness; an off-topic question parked politely ("I'll follow up on that after this"); a restatement of the decision and owner at the end; a written follow-up within a day. Typical problems found: background first, no deadline, defending instead of answering, and not restating the ask.

**Alternative solution.** Run the update at one minute and again at five to test whether the structure holds at both lengths.

**Tradeoffs.** A one-minute version forces clarity; a five-minute version rewards depth.

## 13. Practice protocol

**Timed drills (three a week for three weeks).**

- *Week 1: answer first and writing.* Use IQ-C32-01, IQ-C32-02, EX-C32-01, EX-C32-02 and EX-C32-03. Record yourself summarizing three projects in 60 seconds with the answer in the first sentence, and rewrite three real updates.
- *Week 2: influence, stakeholders and conflict.* Use IQ-C32-03, IQ-C32-05, IQ-C32-06, IQ-C32-10, EX-C32-04, EX-C32-05 and EX-C32-06. Map the stakeholders of a real decision at work and write three no scripts for requests you actually get.
- *Week 3: seniors, uncertainty, remote and live.* Use IQ-C32-04, IQ-C32-07, IQ-C32-08, IQ-C32-09, IQ-C32-11, EX-C32-07, EX-C32-08, EX-C32-09 and EX-C32-10. Run a five-minute executive update with a partner who interrupts.

**With a partner.** Ask your partner to say "Get to the point," "What do you need from me?" and "How sure are you?" at random, and to cut you off at 90 seconds. Practice giving the answer, the ask and the confidence in one breath.

**Test your writing.** Give a document to someone outside the project and ask them to say the point and the ask after one read. If they cannot, rewrite.

**Feedback checklist (yes, partly, no).**

1. Did I lead with the answer or the ask within fifteen seconds?
2. Were my supports two to four, named up front and ordered?
3. Did I include a number with a baseline and say what I don't know?
4. Did my writing let a reader act, with the ask, owner and deadline clear?
5. Did I show I understood the other person's incentives and goal?
6. Did I disagree with facts and criteria, and commit after the decision?
7. Did I say no with an alternative and a path to yes?
8. Did I state my confidence and what would change my mind?
9. Did I handle interruptions by answering, then returning to my point?
10. Did I send a written follow-up with decisions, owners and dates?

**Answer journal.** For each drill record the date, the prompt, the second at which you gave the answer, the number and ask you included, the interruption you handled worst, your score out of ten and the one fix for next time.

## 14. Implementation playbook

Apply the chapter on real work over the next three weeks. Each deliverable doubles as evidence for your stories.

**Days 1 to 3.** Rewrite your next three status updates in the four-line format (FW-C32-03). Ask a reader whether they know the status and what you need after reading the headline.

**Week 1.** Write one decision document (FW-C32-02) for a real decision, however small, with options, a recommendation and what would change it. Ask two people outside the project to say the point after one read; cut a third.

**Week 1.** Map the stakeholders of one live project (FW-C32-05): power, interest, concerns, likely position, plan. Identify the one you have not spoken to who could block you.

**Week 2.** Pre-wire one proposal: speak one-to-one to the two most likely objectors before the meeting, record their points, and change the proposal where they are right. Note the difference in the meeting.

**Week 2.** Keep a log of requests you decline and use the no structure (FW-C32-07) on each; note which led to a path to yes.

**Week 3.** Use the uncertainty statement (FW-C32-08) in one real recommendation, with a confidence number, a reversal condition and a check date; follow up on the date.

**Week 3.** After every meeting send decisions, owners and dates within a day. If you work across time zones, write a daily handoff for two weeks.

**Deliverables that become stories:** the rewritten updates (a time you made a message actionable), the decision document and its review (a time you drove a decision with a written proposal), and the pre-wiring log (a time you influenced without authority). Keep what you did separate from what the team did, and keep every number real.

## 15. Key takeaways and further reading

### Key takeaways

1. Lead with the answer or the ask, name two to four supports, order them logically and close with the ask: the structure the listener experiences matters as much as the content, and it works for speaking and for writing.
2. Write so that a reader can act: a status update with a headline, what changed, what is next and what you need; a decision document with the ask, options with costs, a recommendation and what would change it; and cut a third.
3. Influence without authority comes from understanding incentives, finding a shared goal, bringing evidence with its limits, pre-wiring the people who will react, making a clear small ask, and giving credit; map stakeholders early, including legal, security and support.
4. Handle disagreement by restating the other view, separating facts from values, agreeing the evidence and criteria in advance, committing after the decision and escalating openly for real harm; say no with the goal acknowledged, a reason, an alternative and a path to yes.
5. State uncertainty plainly with a number, the reversibility, what would change your mind and a check date; deliver bad news early with impact and a plan; and make sure dissent reaches the person who decides, in writing.

### Further reading

- Barbara Minto, *The Pyramid Principle* (the original statement of the approach) `[V: Financial Times/Prentice Hall, third edition 2009 (earlier editions from Minto International, 1987), ISBN 9780273710516]`.
- Amazon's 2017 letter to shareholders, on narratively structured six-page memos, from Amazon's own site. The source for the writing practice in C32.2 `[V: Amazon 2017 shareholder letter]`.
- Report of the Presidential Commission on the Space Shuttle Challenger Accident (1986), Chapter III, "The Accident," and Chapter V, "The Contributing Cause of the Accident," with the testimony on the pre-launch teleconference (nasa.gov/history/rogersrep/). The primary source for CS-C32-02.
- The analysis by Wade Robison, Roger Boisjoly, David Hoeker and Stefan Young, "Representation and Misrepresentation: Tufte and the Morton Thiokol Engineers on the Challenger" (*Science and Engineering Ethics*, 2002; also posted by the Online Ethics Center), for the scholarly dispute about the charts `[V: Robison, Boisjoly, Hoeker and Young, Science and Engineering Ethics 8(1), 59 to 81 (2002); posted by the Online Ethics Center]`.
- Edward Tufte, *Visual Explanations* (1997), for his critique of the Challenger charts and principles of presenting evidence `[V: Graphics Press, 1997, ISBN 9780961392123, 156 pages]`.
- Roger Fisher and William Ury, *Getting to Yes* (1981), on separating interests from positions in disagreement `[V: Houghton Mifflin, 1981, ISBN 9780395317570; later editions add Bruce Patton as co-author]`.
- Robert Cialdini, *Influence* (1984, later editions), on reciprocity and other levers, read with care about manipulation `[V: Cialdini, Influence, 1984]`.
- Chip Heath and Dan Heath, *Made to Stick* (2007), on the curse of knowledge and making messages clear `[V: Random House, 2 January 2007, ISBN 9781400064281]`.
