# PART 18: COMMON PM MISTAKES & ANTI-PATTERNS

Most PM failures are not failures of intelligence. Smart people make the same mistakes repeatedly. This chapter is a catalog: what goes wrong, why it goes wrong, and how to recover.

Read this chapter twice — once before mistakes you might make, once after you've made them.

## 18.1 Strategic Anti-Patterns

### Anti-Pattern 1: The Feature Factory

**Symptom:** Team measures success by features shipped per quarter. Roadmap is a list of features with dates. Retros are about velocity, not outcomes.

**Why it happens:** Features are easier to count than outcomes. Stakeholders want predictable shipping. PMs avoid the harder discipline of outcome-based work.

**The cost:** Years of effort that don't move metrics. Demoralized teams who ship and ship without seeing impact. Eventually, layoffs.

**How to recover:**
- Translate roadmap items into outcome hypotheses.
- Tie each initiative to a metric.
- Run retros against metric movement, not feature count.
- Educate stakeholders that features are means, not ends.

### Anti-Pattern 2: Solution-First Thinking

**Symptom:** "We should build X." Discussions are about features, not problems.

**Why it happens:** Solutions feel concrete; problems feel ambiguous. Founders / executives often suggest solutions; teams obey.

**The cost:** Building features that don't solve real problems. High waste.

**How to recover:**
- For every proposed feature, ask: "What problem does this solve? For whom? How do we know?"
- Build the problem-statement habit (Part 3).
- Use the JTBD framing.

### Anti-Pattern 3: Roadmap-as-Commitment

**Symptom:** Stakeholders treat the 12-month roadmap as a contract. Slipping a date becomes a political event.

**Why it happens:** Stakeholders want certainty. PMs want to seem reliable.

**The cost:** Inability to learn and pivot. Teams ship the wrong thing because plans were too rigid.

**How to recover:**
- Educate stakeholders that roadmaps are hypotheses.
- Use Now/Next/Later framing (Part 4).
- Tie commitments to outcomes, not features.
- Communicate uncertainty explicitly.

### Anti-Pattern 4: Strategic Drift

**Symptom:** No clear strategy; everything sounds important. Different stakeholders push different directions.

**Why it happens:** Defining strategy requires saying no, which is uncomfortable. PMs avoid it.

**The cost:** Confused team; effort spread across unrelated bets; nothing wins.

**How to recover:**
- Force the discipline (Part 4).
- Articulate diagnosis + guiding policy + actions.
- Explicitly name what you're NOT doing.
- Re-anchor team on strategy quarterly.

### Anti-Pattern 5: The Innovation Theater

**Symptom:** Lots of activity around "innovation" — hackathons, ideation sessions, "AI initiatives." Few results.

**Why it happens:** Innovation looks impressive. Real innovation is hard, slow, and often ugly.

**The cost:** Resources spent on theater while real opportunities go unaddressed.

**How to recover:**
- Define what success looks like for any "innovation" project (metric, timeline).
- Kill projects that aren't moving fast enough.
- Build a portfolio with explicit risk distribution (some safe bets, a few risky ones).

## 18.2 Discovery Anti-Patterns

### Anti-Pattern 6: Skipping Discovery

**Symptom:** PM jumps from "this seems like a good idea" to "let's build it."

**Why it happens:** Discovery feels slow. Pressure to ship.

**The cost:** Building things users don't want. Wasted engineering time. PM credibility erodes.

**How to recover:**
- Mandate at least 5 user conversations before any major build.
- Set a discovery budget for every project.
- Refuse to write a PRD without grounding research.

### Anti-Pattern 7: Confirmation-Bias Research

**Symptom:** "I know what users want; let me run a few interviews to confirm." Interviews are leading; PM hears what they want to hear.

**Why it happens:** Most PMs underweight evidence that contradicts them.

**The cost:** Discovery becomes theater. Bad ideas get reinforced.

**How to recover:**
- Use Mom Test rules religiously (Part 3).
- Have someone else conduct or observe interviews.
- Pre-commit to falsifiable hypotheses.
- Pay attention especially to evidence against your view.

### Anti-Pattern 8: Treating User Requests as Solutions

**Symptom:** User says "I want a button that does X." PM ships button.

**Why it happens:** Easier to obey than to dig.

**The cost:** Bloat; product becomes incoherent.

**How to recover:**
- Always ask "why?" of stated requests.
- Discover the underlying job.
- Explore alternative solutions.

### Anti-Pattern 9: Sample-of-One Research

**Symptom:** "I talked to one customer; they want X."

**Why it happens:** Loud customers; lazy synthesis.

**The cost:** Building for outliers.

**How to recover:**
- Triangulate across 5+ users before committing.
- Look for patterns vs single voices.
- Distinguish vocal users from typical users.

### Anti-Pattern 10: Research as Justification

**Symptom:** Research happens after the decision is already made; only used to justify.

**Why it happens:** Decisions feel made already; research is "checking the box."

**The cost:** No real learning; teams develop cynicism about research.

**How to recover:**
- Run research before commitment.
- Include "kill criteria" in research plans.
- Be willing to actually pivot or kill based on findings.

## 18.3 Execution Anti-Patterns

### Anti-Pattern 11: The Vague PRD

**Symptom:** PRD lacks specifics; engineers ask 50 questions during build; rework is constant.

**Why it happens:** PM didn't think hard enough; or rushed; or doesn't know.

**The cost:** Slow shipping; engineering frustration; missed edge cases.

**How to recover:**
- Use the Part 6 PRD template rigorously.
- Have an engineer review before committing.
- Iterate the PRD as questions arise.

### Anti-Pattern 12: Underspecified Edge Cases

**Symptom:** Engineering asks "what if [X]?" — PM hasn't thought about it.

**Why it happens:** Most PMs underestimate edge cases.

**The cost:** Bugs in production; user trust erosion.

**How to recover:**
- Dedicated edge cases section in PRD.
- Use AI to generate edge cases (Part 6 AI section).
- Walk through user flows before shipping.

### Anti-Pattern 13: Hidden Bad News

**Symptom:** Project is slipping; PM doesn't tell stakeholders until launch is at risk.

**Why it happens:** Discomfort with delivering bad news; hope of recovering.

**The cost:** Stakeholder trust shattered. Worse outcomes.

**How to recover:**
- Build the discipline of weekly transparent updates.
- Surface risks early; flagging is professional, not weak.
- Re-frame: senior leaders prefer hearing risk early so they can help.

### Anti-Pattern 14: Scope Creep Acceptance

**Symptom:** Project scope keeps growing. PM accepts each new ask without negotiating trade-offs.

**Why it happens:** Conflict aversion; eagerness to please.

**The cost:** Slipped timelines; team burnout; quality drops.

**How to recover:**
- Every scope addition triggers a trade-off conversation.
- Use the technique: "Yes, and to fit X we'll defer Y. Is that OK?"
- Track scope changes explicitly so they're visible.

### Anti-Pattern 15: Over-Engineering

**Symptom:** Building for scale before scale exists; over-architecting; "future-proofing."

**Why it happens:** Engineers love elegance; PMs let them.

**The cost:** Slower shipping; complexity that's never needed.

**How to recover:**
- Ship V1 ugly and simple.
- Build for current scale + 5x; refactor when needed.
- Make "over-engineering" a named concept the team is alert to.

### Anti-Pattern 16: The Big-Bang Launch

**Symptom:** Months of work, then a single launch day with no gradual rollout.

**Why it happens:** Marketing wants a big moment; team wants a celebration.

**The cost:** Issues affect 100% of users; can't roll back; reputational risk.

**How to recover:**
- Mandate gradual rollouts (1% → 10% → 50% → 100%).
- Use feature flags (Part 6).
- Marketing gets the moment when 100% rollout completes safely.

## 18.4 Communication Anti-Patterns

### Anti-Pattern 17: Vague Status Updates

**Symptom:** Updates say "things are progressing" without specifics.

**Why it happens:** Effort to write specifics; or hiding lack of progress.

**The cost:** Stakeholders disengage; trust erodes.

**How to recover:**
- Force structure: shipped, in-progress, blocked, decisions, next.
- Quantify whenever possible.
- Bad news section explicitly.

### Anti-Pattern 18: Overpromising

**Symptom:** PM commits to dates / features / outcomes they shouldn't.

**Why it happens:** Wanting to please; under-confidence in saying no.

**The cost:** Missed commitments compound; trust eroded.

**How to recover:**
- Use confidence levels publicly. "I'm 60% confident."
- Get into habit of committing only to ranges.
- Flag risks proactively.

### Anti-Pattern 19: The Surprise Pivot

**Symptom:** Strategy or scope changes without communication; team learns at standup.

**Why it happens:** PM doesn't take time to communicate; thinks team will figure it out.

**The cost:** Confusion; lost trust; rework.

**How to recover:**
- For any non-trivial change: written communication first.
- Pre-wire major changes 1-on-1.
- Explicit announcements: "Here's what changed and why."

### Anti-Pattern 20: Public Disagreement with Leadership

**Symptom:** PM expresses disagreement with leadership decisions in front of the team.

**Why it happens:** Frustration; ego.

**The cost:** Team confused; hierarchy destabilized; PM's career.

**How to recover:**
- Disagree privately with leadership; align in public.
- "Disagree and commit" — once decided, execute fully.
- If you can't commit, that's a personal-decision conversation.

### Anti-Pattern 21: Email / Slack Avalanche

**Symptom:** PM sends so many messages that important ones get lost; team avoids them.

**Why it happens:** Anxiety; over-communication as ineffective substitute for clarity.

**The cost:** Important things missed; team disengages.

**How to recover:**
- Batch communications.
- Distinguish: urgent / important / FYI.
- Respect Slack norms.
- Most things don't need immediate response.

## 18.5 Relationship Anti-Patterns

### Anti-Pattern 22: Treating Engineers as Ticket-Takers

**Symptom:** PM hands eng a list of features; expects them to build without input.

**Why it happens:** Underestimating eng's strategic value; wanting control.

**The cost:** Eng disengaged; technical depth not leveraged; turnover.

**How to recover:**
- Bring eng into discovery and strategy.
- Listen to their solution proposals.
- Defer to them on technical implementation.
- Co-create.

### Anti-Pattern 23: Designer as Hands

**Symptom:** PM specifies the design in PRD; designer just executes.

**Why it happens:** PM thinks they know UX better than they do.

**The cost:** Bad designs; designer disengagement; product looks generic.

**How to recover:**
- State problems and constraints; let designers explore.
- Critique against user outcomes, not aesthetic preferences.
- Get design involved early.

### Anti-Pattern 24: Not Building Trust Before Needing It

**Symptom:** PM only reaches out when needing favors. Becomes "transactional."

**Why it happens:** Time pressure; perceived efficiency.

**The cost:** Influence collapses when you most need it.

**How to recover:**
- Invest in relationships proactively.
- Help others' projects without being asked.
- Public credit for others.

### Anti-Pattern 25: Politicking Over Substance

**Symptom:** PM optimizes for appearing successful vs being successful.

**Why it happens:** Career anxiety; toxic culture.

**The cost:** Eventually visible; trust crumbles; talented colleagues leave.

**How to recover:**
- Audit your own behavior. Are you doing things for show?
- Reset focus on outcomes.
- Sometimes leaving the company is the answer.

### Anti-Pattern 26: Conflict Avoidance

**Symptom:** PM doesn't push back on stakeholders; says yes to everything.

**Why it happens:** Discomfort; fear.

**The cost:** Bad decisions stay; bad customers persist; PM seen as weak.

**How to recover:**
- Practice the disagreement skills (Part 10).
- Remember: avoiding conflict often hurts the team.
- Build the muscle gradually.

### Anti-Pattern 27: Conflict Seeking

**Symptom:** PM picks fights; relishes pushback; "telling people the hard truths."

**Why it happens:** Confidence misplaced as integrity.

**The cost:** Burned relationships; reputation as difficult.

**How to recover:**
- Disagreement should be functional, not personal.
- Choose battles.
- Lead with curiosity, not certainty.

## 18.6 Personal Anti-Patterns

### Anti-Pattern 28: Burnout Acceleration

**Symptom:** PM works longer hours, less sleep, less exercise. Performance degrades but they push harder.

**Why it happens:** Conscientiousness misapplied. Belief that more hours = more output.

**The cost:** Burnout; health; eventual collapse.

**How to recover:**
- Boundaries are professional, not weak.
- Work intensity > work duration.
- Track signs (irritability, lower judgment, no joy).
- Take real time off.

### Anti-Pattern 29: Imposter Syndrome Paralysis

**Symptom:** PM feels they don't deserve their role; under-asserts views; defers excessively.

**Why it happens:** Especially common in early-career PMs at top companies.

**The cost:** Underperformance vs potential; team loses guidance.

**How to recover:**
- Talk to peers; you'll find they feel it too.
- Track wins explicitly.
- Specific feedback from trusted sources.
- Time and reps build calibrated confidence.

### Anti-Pattern 30: Optimizing for Visibility

**Symptom:** PM works on visible projects vs important ones. Shows off in meetings. Self-promotes.

**Why it happens:** Career-driven anxiety; misunderstanding of what's actually rewarded.

**The cost:** Long-term, leadership sees through it. Other PMs are quietly delivering value while you posture.

**How to recover:**
- Re-anchor on impact.
- Trust that good work, communicated honestly, gets noticed.
- Self-promotion is fine; misrepresentation is fatal.

### Anti-Pattern 31: All Tactics, No Strategy

**Symptom:** PM is excellent at execution but never zooms out. Ships features but doesn't shape direction.

**Why it happens:** Tactics are easier; strategy is uncomfortable.

**The cost:** Plateau at senior PM; never reaching staff/principal.

**How to recover:**
- Block weekly time for strategy thinking.
- Read strategy materials (Part 4).
- Write strategy memos for your domain.
- Engage in strategic conversations.

### Anti-Pattern 32: All Strategy, No Execution

**Symptom:** PM has many opinions but doesn't ship.

**Why it happens:** Loves the thinking; avoids the doing.

**The cost:** Eng team loses respect; outcomes don't improve.

**How to recover:**
- Track shipping.
- Get hands dirty.
- Earn the right to opine through demonstrated execution.

## 18.7 Why Smart PMs Fail

Across all these anti-patterns, recurring root causes:

### Root Cause 1: Ego

The need to be right; to be seen as smart; to win. Drives many anti-patterns: overconfidence, conflict, self-promotion.

**Fix:** Cultivate genuine humility. Ask yourself: "what if I'm wrong?" Take pleasure in being corrected.

### Root Cause 2: Fear

Fear of failure, of conflict, of being wrong, of losing favor. Drives: hidden bad news, scope creep, conflict avoidance.

**Fix:** Recognize fear when it shows up. Often, doing the scary thing is correct.

### Root Cause 3: Comfort with Comfort

Sticking with what's easy: comfortable team relationships, familiar problems, known patterns. Drives: feature factory, staying tactical.

**Fix:** Push yourself into discomfort regularly. Comfort is the enemy of growth.

### Root Cause 4: Theater Over Reality

Performing the role vs doing the role. Drives: visibility-optimization, vague status, generic answers.

**Fix:** Care about outcomes more than appearances. Trust that doing the work well is, eventually, what gets rewarded.

### Root Cause 5: Distraction

Trying to do everything; chasing every signal; reactive vs proactive. Drives: scope creep, lack of strategy.

**Fix:** Focus is a discipline. Say no often.

## 18.8 Course-Correcting Early

The good news: most PM mistakes are recoverable if caught early.

### The Quarterly Self-Audit

Once a quarter, ask:

1. **What outcomes have I driven this quarter?** Not features. Outcomes.
2. **Has my team's trust in me grown or shrunk?**
3. **What have I learned that changed my mind?**
4. **What am I avoiding that I shouldn't be?**
5. **Where do I disagree with my manager? Have I expressed it?**
6. **What's one anti-pattern I've fallen into?**
7. **What would my best friend tell me to fix?**

Honest answers, written, become a tool for growth.

### The 90-Day Reset

If you've fallen into multiple anti-patterns:

**Days 1-30: Diagnose.**
- 360 feedback from team, manager, peers.
- Identify the top 3 patterns.

**Days 31-60: Rebuild.**
- Specific behavioral changes.
- New rhythms (weekly updates, transparent risk surfacing).
- Re-engage relationships.

**Days 61-90: Sustain.**
- New patterns becoming natural.
- Re-check feedback.

This works. People can change. Anti-patterns are habits, not destiny.

### The 1-Year Reset

For longer-term recovery (changing roles, companies, or career direction):

- **Identify the root cause.** Often a mismatch (wrong company, wrong manager, wrong domain).
- **Test alternatives.** Side projects, advisory work, networking.
- **Plan the move.** Don't burn bridges.
- **Execute.** Sometimes the answer is changing companies.

## 18.9 Practice Exercises

### Exercise 18.1 — Self-Diagnosis
Read all 32 anti-patterns. Honestly mark which 3-5 you fall into most. Write a 1-page plan for addressing each.

### Exercise 18.2 — Peer Diagnosis
With a peer or mentor: each picks the anti-patterns they observe in the other. Compare. Discuss.

### Exercise 18.3 — Recovery Plan
For one specific anti-pattern: write a 30-day plan to break it. Specific behaviors, daily/weekly checkpoints, accountability mechanism.

### Exercise 18.4 — Quarterly Audit
Apply the 7-question quarterly audit honestly. Save the answers. Re-do in 90 days. Note what changed.

### Exercise 18.5 — Story of a Mistake
Write a 1-page story of your biggest PM mistake. What did you do? What was the cost? What did you learn? What patterns does it reveal?

## 18.10 References for Part 18

**Books:**
- *Escaping the Build Trap* — Melissa Perri. The definitive book on the feature factory anti-pattern. ([Amazon](https://www.amazon.com/Escaping-Build-Trap-Effective-Management/dp/149197379X))
- *The Five Dysfunctions of a Team* — Patrick Lencioni. Why teams fail. ([Amazon](https://www.amazon.com/Five-Dysfunctions-Team-Leadership-Fable/dp/0787960756))
- *Mistakes Were Made (But Not by Me)* — Tavris & Aronson. Self-justification and how to combat it. ([Amazon](https://www.amazon.com/Mistakes-Were-Made-but-Not/dp/0544574788))
- *Black Box Thinking* — Matthew Syed. Why some industries learn from failure and others don't. ([Amazon](https://www.amazon.com/Black-Box-Thinking-Surprising-Success/dp/1591848229))
- *Crucial Accountability* — Patterson et al. Holding others (and yourself) accountable. ([Amazon](https://www.amazon.com/Crucial-Accountability-Resolving-Expectations-Commitments/dp/0071829318))

**Essays:**
- Marty Cagan's writing on feature factories. ([svpg.com](https://www.svpg.com))
- Shreyas Doshi on PM anti-patterns (Twitter threads). ([@shreyas](https://twitter.com/shreyas))
- John Cutler's TBM newsletter. Many essays on dysfunction. ([cutlefish.substack.com](https://cutlefish.substack.com))
- "The Career-Limiting Habits of Smart People" — search this; great essay.

**Practice:**
- Keep a journal of mistakes. Re-read quarterly.
- Find a peer for honest mutual feedback.
- Read someone else's PRD weekly; spot anti-patterns.

---

*End of Part 18. The next part is the comprehensive learning resource library.*


\newpage


