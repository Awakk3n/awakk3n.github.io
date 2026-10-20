---
id: C28
title: Teardown Library
tier: 2
competencies: [product-sense, design-ux, strategy-gtm]
prerequisites: [C11, C18]
defines_terms: []
uses_terms: [inversion, survivorship-bias, teardown, precision-recall, threshold, base-rate, feedback-loop, popularity-bias, exploration, cold-start-problem, growth-loop, retention, activation, north-star-metric, positioning, moat, switching-cost, network-effect, willingness-to-pay, packaging, funnel, dark-pattern, guardrail-metric, trust-and-safety, abuse-case, prevalence, on-device-processing, tradeoff, jobs-to-be-done, localization, ad-auction, net-revenue-retention]
frameworks: [FW-C28-01, FW-C28-02, FW-C28-03, FW-C28-04]
case_studies: [CS-C28-01 (Illustrative), CS-C28-02 (Verified)]
cross_refs_out: [C02, C05, C06, C07, C09, C10, C11, C12, C13, C14, C17, C18, C19, C20, C21, C22, C23, C24, C25, C27, C33]
cross_refs_pending: []
status: draft
---

# C28 — Teardown Library

## 1. What interviewers test

"What is a product you admire, and what would you change?" "Walk me through how this feature works and why you think it was built that way." "Critique this product for me." Teardown-style prompts test taste, structure and honesty: whether you can look at a real product, say what it is for, see what it does well and badly with evidence, separate what you know from what you infer, and propose a change with its cost and a way to measure it. C11 gave the method. This chapter is a library of worked teardowns, built from public sources, to practice against and to borrow patterns from.

**Where it shows up.** `Inferred`: product-sense and critique questions at Google, Meta, Microsoft, Amazon, Apple, Netflix, Stripe and others, often naming the interviewer's own company's product `[unverified: candidate-reported]`. The library covers products across global markets that interviewers commonly use as examples.

**What is scored.** Whether you reason from evidence and label it `Inferred`. Interviewers listen for a purpose stated first; observations separated from inferences and opinions; strengths named with reasons; issues ranked, not listed; a recommendation with a metric and a cost; and calibrated claims about what the company intended.

Six observable behaviors:

1. You state what the product is for before you judge it.
2. You separate what you can verify from what you infer, and say which is which.
3. You explain why a design works, not only that it does.
4. You rank issues by impact and fixability.
5. You propose one change with a metric and a cost.
6. You extract a pattern you can use on the next product.

**The failure this prevents.** Six patterns end teardown answers: a feature list in place of an analysis, claims about internal intent stated as fact, praise without reasons, a flat list of issues, a recommendation with no cost, and numbers recalled from memory with no source.

## 2. The concept from first principles

### C28.1 Selection principles and label rules

**How the products were chosen.** (1) They are widely used across several regions, so an interviewer is likely to know them. (2) Enough public material exists to verify the central facts from primary sources (company filings, shareholder letters, newsroom posts, peer-reviewed papers). (3) Each teaches a distinct lesson (a threshold under uncertainty, a habit loop, a pricing tier, localization, privacy as a default, a setup experience, a bold redesign). (4) The set spans consumer software, hardware, marketplaces and health, with products from Google, Meta, Netflix and Apple among them, and a mix of regions.

**Label rules (C11.7, FW-C11-06).** Every company fact carries one of three labels, and every critique claim one of three layers.

| Layer | Label | Meaning |
|---|---|---|
| Company fact | **Verified** `[V: source type, date]` | Stated in a primary or reliable public source that I read; the type of source is named |
| Company fact | **Reconstructed** `[R]` | My inference from public information about how or why something works; the inference is stated |
| Company fact | **Illustrative** | Invented to teach; marked (invented) |
| Critique | **Observation** `[Obs]` | What I saw or what the source reports |
| Critique | **Inference** `[Inf]` | What I think it implies |
| Critique | **Opinion** `[Op]` | What I would prefer |

**Rules.** No claim about internal knowledge, intent or numbers that no public source supports. Every figure carries a source type and a date. Facts about products change; every teardown is dated `[as of 2026-10]`, and a reader should check the current product before using one in an interview. Sources were read through search results and, where noted, are secondary; the central claims of each teardown are marked Verified only where a primary or clearly reliable source was read.

**Source ladder (FW-C28-02).** Prefer, in order: company filings and shareholder letters; the company's own newsroom and documentation; peer-reviewed papers and regulator documents; reputable press quoting named people; commentary and analysts (as inference only). A claim that rests only on commentary is Reconstructed.

> **Counterexample.** Asked to critique a streaming app, a candidate says: "They obviously added the ad tier to hit their subscriber target, and it has doubled revenue." The interviewer asks how the candidate knows. The candidate has stated an internal motive and a number as facts, with no source and no label. A better answer: "Verified: the company launched an ad-supported plan in November 2022 and said in a shareholder letter that ads-plan membership grew almost 70% in a quarter. Inference: the plan serves price-sensitive customers and creates an advertising business. I can't verify its motive or its revenue effect from public information."

**When not to use a teardown.** In a time-limited answer you do not need the full structure; use the critique spine (C11) in the time you have. Do not recite a teardown from this library as your own analysis of a product you have not used; use the library for patterns and practice, and form your own view from your own use.

### C28.2 Eight teardowns, and a pointer to a ninth

Each teardown follows the card in FW-C28-01: goal, verified facts, reconstructed inferences, strengths, ranked issues, one change with a metric and cost, and the pattern. Teardown 9 (Airbnb) is the decision case CS-C28-02 in section 10.

#### TD-C28-01 · Duolingo: a freemium learning habit

**Goal.** Duolingo exists to help adults learn a language through short daily lessons; for the company it serves reach, then subscriptions. I judge it by whether learners return daily and some convert (statement of assumption).

**Verified facts.**
- It is free to use, with revenue from a premium subscription, advertising and in-app purchases; it describes this as a freemium model `[V: annual report (10-K for FY2024), 2025]`.
- In its 2021 registration statement, subscriptions were about 73% of 2020 revenue, advertising about 17% and the English test and other revenue about 10% (the English test alone about 9%); it had approximately 1.6 million paying subscribers at 31 December 2020, up from about 0.9 million a year earlier, and about 37 million monthly active users at the end of 2020 (36.7 million as reported); revenue was $161.7 million in 2020 and $70.8 million in 2019; about 1.8 million paying subscribers at 31 March 2021 `[V: registration statement (S-1), 2021, read on the SEC site and as quoted in press reports of it]`.
- At 31 December 2024, about 32 million daily active users had a streak of seven days or more and about 10 million had a streak of 365 days or more `[V: annual report (10-K for FY2024)]`; the company reported paid subscriber penetration of 8.8% in the fourth quarter of 2024 (8.3% a year earlier) and a ratio of daily to monthly active users of 34.7% `[V: Q4 2024 shareholder letter]`.
- For the quarter ended 31 December 2025 the company reported about 52.7 million daily active users and 133.1 million monthly active users (averages over the quarter) and about 12.2 million paid subscribers at period end; about 43 million daily active users had a streak of seven days or more and about 15 million a streak of 365 days or more; its annual report says about 9% of monthly active users were paid subscribers (12.2 divided by 133.1 is 9.2%) `[V: annual report (10-K for FY2025) and Q4 2025 shareholder letter]`.
- Gamification elements (points, streaks, friendly competition) are described by the company as designed to encourage a return to learning `[V: annual report, 2025]`.

**Reconstructed.** `[R]` The streak turns a goal ("learn Spanish") that is easy to postpone into a small daily commitment with a visible cost to breaking it; the free tier supplies the audience that the paid tier and advertising monetize; and the large share of daily users on long streaks suggests that the habit mechanic, not the lessons alone, drives return.

**Strengths.** `[Obs]` Lessons are short and the first session starts with a lesson, not a form. `[Inf]` Daily active to monthly active users (about 35% at the end of 2024, from the reported 40.5 and 116.7 million) is high for an education app, consistent with a habit product.

**Ranked issues.** (1) `[Op]` A streak can reward showing up over learning: a user can keep a streak with a trivial lesson. Severity high for the stated goal (learning), low for the company's engagement goal. (2) `[Obs]` Free users see advertising (the company's filings say it earns advertising revenue from free users) `[V: S-1]`; where ads and subscription prompts sit in the flow was not checked here; `[Inf]` friction of this kind can push some users to subscribe and others to leave. (3) `[Op]` Progress toward real conversation is hard to see.

**One change.** Add a periodic, low-pressure speaking or writing check that measures proficiency, and show progress against it. *Metric:* the share of users who complete the check and 90-day retention among them, with the streak-break rate as a guardrail. *Cost:* engineering and content effort; some users may feel judged. 

**Pattern.** A visible daily commitment can make habit stronger than the product's core value; make sure the habit measure and the value measure move together.

#### TD-C28-02 · Spotify Discover Weekly: a recommendation turned into a weekly ritual

**Goal.** Discover Weekly exists to help listeners find music they will like without searching; for the company it serves engagement and differentiation. I judge it by return and by songs saved.

**Verified facts.**
- It launched in July 2015 as a personalized playlist of 30 songs refreshed every Monday `[V: reputable press (TechCrunch, 2016) quoting company statements]`.
- By May 2016, Spotify said more than 40 million listeners had used it and that nearly 5 billion tracks had been streamed; it gave "more than half" for each of three separate measures (listeners who came back the following week, who streamed at least 10 tracks from it each week, and who saved at least one song), and did not say how far these groups overlap `[V: Spotify press release as reproduced by press, May 2016; TechCrunch, May 2016]`.
- Its lead engineer, Edward Newett, said it began in 2014 as a prototype hacked together by two engineers, was tested on company employees in early 2015, and was not "a big company initiative"; the system looks at what a listener already plays and finds connections through user activity logs, other users' playlists, web text and audio spectrograms, and the list arrives on Monday mornings `[V: IEEE Spectrum, 2016, quoting the engineer]`. A 2015 Quartz article described other people's playlists as the main ingredient, and Newett later said streaming data and playlist data are the two major components `[V: Quartz, 2015; press reporting an interview, 2016]`; the detailed method (for example, collaborative filtering, where people who like X also like Y) is `Reconstructed`.
- Spotify reported that more than 8,000 artists had more than half of their listeners in the prior month come from Discover Weekly `[V: press quoting the company, 2016]`.

**Reconstructed.** `[R]` The fixed weekly cadence creates anticipation and a reason to return every Monday; a finite list (30 songs) reduces choice paralysis; saving a song is a strong signal that feeds the next list (a feedback loop, C23.8); and cold start (new users and new songs) is handled by blending content analysis with behavior.

**Strengths.** `[Obs]` A finite, personal list at a predictable time; the feature solves "what do I listen to." `[Inf]` Saves and returns are measurable outcomes of the feature's goal, not just plays.

**Ranked issues.** (1) `[Inf]` Popularity bias and narrowing: the system learns from what users like, which can reinforce existing taste (C23.8). (2) `[Obs]` A weekly list disappears when it refreshes, so a missed week loses songs (the company has discussed ways to recover old lists `[V: press, 2016]`). (3) `[Op]` Users have little control to steer the list.

**One change.** Add a lightweight control ("more like this, less like this, new genres") and a small exploration share of the list. *Metric:* saves per listener and the share of listeners who play an artist new to them, with return rate as a guardrail. *Cost:* some tracks the user skips more; model and interface work.

**Pattern.** A recommendation delivered on a rhythm, with a measurable "keep" action, becomes a habit.

#### TD-C28-03 · Netflix: tiers, an ad plan and paid sharing

**Goal.** Netflix exists to deliver entertainment people subscribe to and keep; the 2022 to 2023 changes aimed to widen the price ladder and convert account sharing into revenue. I judge them by net subscriber growth, revenue and retention (assumption).

**Verified facts.**
- The ad-supported plan, Basic with Ads, launched in the United States on 3 November 2022 at $6.99 a month (a few other markets launched on slightly different dates); at launch the ad-free plans were Basic $9.99, Standard $15.49 and Premium $19.99 `[V: press reports of the company's announcement, October and November 2022]`. The Q3 2023 letter still lists the US ads plan at $6.99 and Standard at $15.49 `[V: shareholder letter, October 2023]`.
- The company's Q4 2022 shareholder letter said it expected a "cancel reaction" in each market when it rolled out paid sharing, based on experience in Latin America, and expected a different pattern of net additions through 2023 `[V: shareholder letter filed with the regulator, January 2023]`.
- In May 2023 it launched paid sharing in more than 100 countries, representing more than 80% of its revenue base; its Q2 2023 letter said revenue in each region was higher than before launch and sign-ups exceeded cancellations; paid net additions were 5.9 million in the quarter `[V: shareholder letter, July 2023]`.
- Its Q3 2023 letter said ads-plan membership was up almost 70% quarter over quarter and that 30% of sign-ups in ads countries were to the ads plan `[V: shareholder letter, October 2023]`.
- In October 2023 the company said that in the United States the ad-free Basic plan would become $11.99 and Premium $22.99, with the ads plan and Standard unchanged `[V: shareholder letter, October 2023]`.

**Reconstructed.** `[R]` The ad plan creates a lower entry price for price-sensitive households and a new revenue stream; raising the price of the ad-free Basic plan widens the gap and nudges customers toward the ad plan; paid sharing turns users of shared accounts into either paying members or extra-member add-ons.

**Strengths.** `[Obs]` A staged rollout with the company stating its expectation (a cancel reaction) before it happened, and reporting results afterward. `[Inf]` A price ladder lets different customers find a fit (C20.4).

**Ranked issues.** (1) `[Inf]` Cannibalization risk: some premium customers move to the ad plan. (2) `[Op]` Account-sharing enforcement can feel like a penalty to loyal customers. (3) `[Inf]` Ad load and measurement affect the experience and advertiser trust.

**One change.** Publish clearer guidance on what each tier includes and on extra-member pricing, and measure complaints. *Metric:* tier mix, churn by tier and complaint rate per 1,000 members, with net adds as the outcome. *Cost:* simpler packaging reduces some flexibility.

**Pattern.** Tiers and price enforcement are product decisions; say the expected downside before launching and report what happened.

#### TD-C28-04 · Google Maps two-wheeler mode: designing for how a market actually travels

**Goal.** Google Maps exists to help people get where they are going; two-wheeler mode serves riders whose needs differ from drivers'. I judge it by the accuracy of routes and arrival times for that segment.

**Verified facts.**
- Google launched an India-first "two-wheeler mode" on 5 December 2017 at its Google for India event `[V: press covering the announcement, December 2017]`.
- Google's stated rationale, from its Next Billion Users lead, was that India is the largest two-wheeler market and that riders have different navigation needs than drivers of cars `[V: press quoting the Google executive, December 2017]`.
- The mode shows routes that use shortcuts not accessible to cars and trucks, provides customized traffic and arrival-time estimates, and shows major landmarks along the route because many people rely on landmarks for navigation `[V: Google statement as reported, December 2017]`.
- It required a recent version of the Android app at launch `[V: press, December 2017]`, and Google said it would come to more countries; by June 2018 a Google executive said it had reached Malaysia, the third country after India and Indonesia, and that it took a year to develop `[V: press, June 2018]`.

**Reconstructed.** `[R]` The product needed different routing rules (roads allowed to motorcycles), different speed and traffic models (two-wheelers move differently in traffic) and a different interface cue (landmarks); this is a segment-specific model, not a cosmetic change.

**Strengths.** `[Obs]` It starts from the rider's job and the local way of navigating, not from the global default. `[Inf]` Landmark-based guidance matches how people describe directions.

**Ranked issues.** (1) `[Inf]` Accuracy depends on local data (road restrictions, shortcuts) that varies by city and changes; errors cost trust and safety. (2) `[Op]` A separate mode can be missed by riders who use the default car mode. (3) `[Inf]` Safety: navigating while riding raises distraction risk; voice guidance helps (the launch included voice navigation `[V: press]`).

**One change.** Detect likely two-wheeler use and suggest the mode, with an easy opt-out. *Metric:* mode adoption among likely riders and the gap between predicted and actual arrival time, with safety incident reports as a guardrail. *Cost:* detection errors, privacy considerations on inferring vehicle type.

**Pattern.** Localization means a different model of the user's world, not translated text (C09 on new markets).

#### TD-C28-05 · WhatsApp end-to-end encryption by default: privacy as a product decision

**Goal.** WhatsApp exists to let people message and call reliably and privately at huge scale; making encryption the default served the privacy promise. I judge it by trust, adoption and the cost of safety work.

**Verified facts.**
- On 5 April 2016 the Signal developers announced that users running the most recent versions of WhatsApp on any platform now get end-to-end encryption for every message and call between them, using the Signal Protocol, for a user base of more than a billion monthly users; the Signal developers described it as the completion of an integration begun a year earlier `[V: Signal developers' blog, April 2016; TechCrunch, April 2016]`.
- WhatsApp clients show users a notice in the conversation when a chat becomes end-to-end encrypted, and the encryption status of a chat is visible in its settings `[V: Signal developers' blog, April 2016]`.
- Security-change notifications were optional and off by default `[V: Electronic Frontier Foundation review, 2016]`.
- A WhatsApp engineer, Matt Jones, said at the USENIX Enigma conference in January 2017 that WhatsApp had reduced spam by about 75% from around the time it launched end-to-end encryption, and that with well-instrumented behavioral features it is possible to detect spam without access to message content `[V: USENIX talk page; press reports of the talk, 2017]`.
- End-to-end encrypted chat backups, an option introduced in 2021, can be turned on in the app's settings; on 30 October 2025 WhatsApp announced passkey-encrypted backups (using a fingerprint, face or screen lock instead of a password or a 64-digit key), rolling out gradually over the following weeks and months `[V: Meta announcement, October 2025]`. Metadata such as who communicates with whom is generally described as outside end-to-end encryption; WhatsApp's own privacy policy was not read for this case `[V: secondary summaries]`.

**Reconstructed.** `[R]` Making encryption the default removes the burden of choice, so protection reaches the many users who would never turn it on; the cost is losing content-based abuse detection, which the team replaced with behavioral signals; the default also changes the product's position on privacy and its relations with governments.

**Strengths.** `[Obs]` A default that protects everyone, with a visible notice and an optional verification step. `[Inf]` Spam handled with behavior, not content, shows that privacy and safety can coexist for some harms.

**Ranked issues.** (1) `[Inf]` Metadata and backups that the user has not set to be end-to-end encrypted are gaps worth checking in the product's current settings. (2) `[Inf]` Harms that need content (for example, certain kinds of abuse) are harder to detect; user reports and metadata then matter more (C27.4). (3) `[Op]` Security notifications were off by default when reviewed in 2016; I did not confirm today's default for ordinary accounts, and WhatsApp's optional Strict Account Settings (January 2026) turn them on. If they are still off by default, that weakens protection against account-takeover scenarios.

**One change.** If security notifications are still off by default for new accounts, turn them on and explain them in one sentence. *Metric:* the share of users who see and understand a key-change notice and the rate of confirmed account takeovers, with support contacts and confusion as guardrails. *Cost:* extra notices that most users will not understand.

**Pattern.** The default is the product for most users; when you remove an input (message content), plan the replacement signal.

#### TD-C28-06 · AirPods: the setup experience as the product

**Goal.** AirPods exist to give people wireless audio that works without fuss with their Apple devices; for the company they serve hardware sales and ecosystem depth. I judge them by how fast and reliably the first connection and every later switch work.

**Verified facts.**
- Announced on 7 September 2016 at $159, with the claim that opening the charging case near an iPhone and tapping sets them up, with all devices signed in to the same iCloud account `[V: company newsroom, 2016]`.
- A custom wireless chip (the W1) is described as using about one-third of the power of traditional wireless chips, with up to five hours of listening per charge and the case holding additional charges for more than 24 hours in total `[V: company newsroom, 2016]`.
- Sensors (optical sensors and accelerometers working with the chip) detect when they are in the ear and can automatically play and pause `[V: company newsroom, September 2016]`.
- They required Apple devices running iOS 10, watchOS 3 or macOS Sierra; availability slipped from "late October" to online orders on 13 December 2016, with delivery and store arrival the following week, in more than 100 countries and territories including India, at $159 in the US `[V: company newsroom, September and December 2016]`; press reported that Apple gave no reason for the delay and that the earbuds can also connect to other devices over Bluetooth `[V: MacRumors and Fortune, December 2016; secondary]`.

**Reconstructed.** `[R]` Pairing is the biggest friction in wireless earbuds; moving it into the device chip and the account removes a task that most people did not like and made setup the main reason to prefer the product; the ecosystem effect (automatic availability on every device) raises the cost of switching.

**Strengths.** `[Obs]` One tap replaces a multi-step pairing; in-ear detection removes a control. `[Inf]` The first-run experience carries the product's differentiation.

**Ranked issues.** (1) `[Inf]` Full value depends on owning Apple devices (the release lists Apple software requirements); other devices can use Bluetooth, and what is lost there was not confirmed in the sources read. (2) `[Inf]` Small, easily lost, with a battery that eventually wears out; repair and replacement matter. (3) `[Obs]` Availability came about six weeks after the stated "late October" window `[V: newsroom, 2016]`; the sources read give no reason, so what caused it is unknown, but it shows a hardware risk: a launch date can move `[Inf]`.

**One change.** Add a clear "find and replace one earbud" path with transparent pricing. *Metric:* repeat purchase and replacement rate, support contacts per 1,000 units and satisfaction at 12 months. *Cost:* inventory and service operations.

**Pattern.** For hardware, remove the first-use task with the highest friction, and tie the experience to an account so it works everywhere (C27.6).

#### TD-C28-07 · Apple Watch irregular rhythm notification: a threshold under uncertainty

**Goal.** The feature exists to alert wearers to a possible irregular heart rhythm that they would not otherwise notice; for the company it serves the watch's value as a health device. I judge it by whether notified people have the condition (precision) without alarming many who do not.

**Verified facts.**
- The Apple Heart Study enrolled 419,297 participants over eight months; the app was available for download from 29 November 2017 until 1 August 2018, and 0.52% (2,161) received an irregular pulse notification over a median of 117 days of monitoring `[V: peer-reviewed paper (New England Journal of Medicine, 2019)]`.
- In the study, a notification was sent when five of six tachograms within a 48-hour period were irregular `[V: American College of Cardiology press release, March 2019, and summaries of the paper; the paper's full text was not opened]`.
- The watch classified one-minute pulse readings (tachograms) as regular or irregular, and the study reported a positive predictive value of 0.84 for the notification (95% interval 0.76 to 0.92) and 0.71 (97.5% interval 0.69 to 0.74) for an individual irregular reading, each measured against a simultaneous heart-monitor patch; the authors wrote that algorithms relying on confirmation of multiple irregular readings before notifying improve accuracy `[V: peer-reviewed paper, 2019]`.
- Of notified participants who wore a monitor patch afterwards (about 13 days later on average), 34% showed atrial fibrillation; the authors noted that absence of atrial fibrillation on a later patch does not imply the notification was false, because the condition can come and go `[V: peer-reviewed paper and its summary, 2019]`.
- The positive predictive values were measured among people who had already received a notification, so they only estimate the value of an initial notification in the whole group; a journal-club summary reports that 945 of the 2,161 notified participants (about 44%) were evaluated at the first telehealth visit `[V: secondary summary of the paper's participant flow]`; the paper reports no serious app-related adverse events and that 76% of notified participants who returned a 90-day survey had contacted a health care provider `[V: paper]`.
- Notification rates rose with age: 0.16% of participants aged 22 to 40 received a notification, against 3.1% of those aged 65 or older; the atrial fibrillation yield on patches was 18% in those under 40 and 35% in those 65 or older `[V: peer-reviewed paper, 2019]`.

**Reconstructed.** `[R]` Requiring several repeated irregular readings before notifying trades some missed episodes for far fewer false alarms (the paper says the algorithm was designed to minimize false positives and was not designed to detect short episodes); because the condition is rare in the young and more common in older people, a single threshold produces very different alert rates and precision by age.

**Strengths.** `[Obs]` A conservative trigger that waits for repeated irregular readings produces few alerts (0.52% of participants) and a high reported precision. `[Inf]` The study design measured what happens downstream (visits, patches), not just the algorithm.

**Ranked issues.** (1) `[Obs]` Many notified people were lost to follow-up (only 450 of 2,161 returned an analyzable patch `[V: paper]`), limiting what is known. (2) `[Inf]` Sensitivity (the share of true cases caught) is not established by this design, so silence is not reassurance. (3) `[Op]` Alerting a person about a possible medical condition needs clear next-step guidance and care about anxiety.

**One change.** After a notification, offer a guided path (an on-demand recording where available, a clinic visit, or a monitor) with plain language about what it means and does not mean. *Metric:* the share who take a confirming step within two weeks and the share who report distress, with false-alert reports as a guardrail. *Cost:* clinical review and wording care; regulatory considerations (C27.9).

**Pattern.** When errors have different costs, a repeated-confirmation trigger buys precision at the cost of missed cases; say which error you chose and why (C23.3).

#### TD-C28-08 · Google Search AI Mode: an answer in place of a list of links

**Goal.** Google Search exists to help people find what they are looking for; AI Mode and AI Overviews serve people who would rather get a synthesized answer than a list of links. I judge it by whether the answers are right, whether people still reach good sources, and whether the business holds.

**Verified facts.**
- Google brought AI Overviews and AI Mode together into one Search experience, and its CEO said on the Q2 2026 earnings call that AI Mode had passed 1 billion monthly active users since expanding globally in October 2025 `[V: Google, CEO remarks on the Q2 2026 earnings call]`.
- Google says the AI features add queries and send "billions of clicks to websites every week" `[V: Google, CEO remarks on the Q2 2026 earnings call]`; publishers and independent studies are reported to dispute how many clicks AI answers displace, which was not tested here `Inferred`.
- Search and other revenue was $63.3 billion in the quarter ended 30 June 2026, up 17% `[V: Alphabet Form 10-Q, 2026]`.
- In September 2025 a US court declined to order a sale of Chrome, required limited sharing of search data with rivals, and its judge wrote that generative AI had changed the course of the case `[V: court remedies order as reported by Moneylife and Folio3]`.

**Reconstructed.** `[R]` Replacing a ranked list with an answer moves the product from "which pages might help" to "what is true". It needs retrieval, ranking, grounding and citation together, so the failure modes in C24.3 become the product's own.

**Strengths.** `[Inf]` Long, multi-part questions are answered in one step. `[Inf]` Merging the two surfaces removes a choice the user had to make.

**Ranked issues.** (1) `[Inf]` The answer can replace the click that funds the sources it draws on; Google and publishers disagree on the size of the effect. (2) `[Op]` An ungrounded or wrong answer carries Google's voice, and the user cannot see how it was assembled. (3) `[Inf]` Query growth and clicks do not show that users were satisfied; acceptance can reflect trust more than correctness (C25.3).

**One change.** Show each claim with its source link beside it, and a clear path to the ordinary results for questions where an error is costly (health, money). *Metric:* the share of answers where users open a source or rephrase, with a reported-error rate as a guardrail. *Cost:* slower answers, fewer ad impressions on answered queries, and the engineering for claim-level citation.

**Pattern.** When a product replaces a list of choices with a decision, the cost of an error moves from the user to the product (C24, C25).

### C28.3 Cross-teardown patterns (`Original`)

Reading the nine together (eight above and Airbnb in section 10) shows patterns that recur and can be used on a product you have not seen (FW-C28-03).

| Pattern | Evidence in the teardowns | When it fails | Use in an interview |
|---|---|---|---|
| The first moment of use is engineered | AirPods one-tap setup; Duolingo starting with a lesson; WhatsApp's in-chat notice | When the engineered moment hides a cost (a paywall, a data request) | Ask: what is the first thing a new user does, and how long does it take? |
| Defaults carry the product | WhatsApp encryption by default; Spotify's weekly list; Netflix's plan ladder | When a default is wrong for a segment or hard to change | Ask: what happens for the user who never touches a setting? |
| A rhythm builds a habit | Discover Weekly on Monday; Duolingo streaks | When the rhythm rewards activity over value | Ask: does the habit measure track the value measure? |
| Local context needs a different model | Maps two-wheeler mode | When local data is thin or stale | Ask: what is different about this user's world, not only their language? |
| The cost of each error sets the threshold | Apple Heart Study 5-of-6 trigger; WhatsApp spam detection by behavior | When the cost is not measured | Name the two errors and their costs (C23.3) |
| Price and packaging are design | Netflix tiers and sharing; Duolingo tiers | When tiers confuse or cannibalize | Ask: who moves between tiers and why (C20.4) |
| Bold changes need reversibility and honesty | Netflix stated the expected cancel reaction; Airbnb removed a feature after years (CS-C28-02) | When a change is irreversible or unmeasured | Ask: how would we know it failed, and how do we undo it (C17)? |
| An ecosystem raises switching cost | AirPods across devices; Google Maps data; Spotify personalization | When it feels like lock-in | Ask: what does the user lose by leaving? |

**How to use the patterns.** In a critique, name the pattern you see, say what in the product shows it, and say where it could fail. Patterns are hypotheses for the next product, not rules: test each against evidence.

## 3. Frameworks

Four frameworks, set out below. The critique spine (FW-C11-01), the goal-first statement (FW-C11-02), the issue ranking grid (FW-C11-03), the strategic lens (FW-C11-04), the critique-to-improvement bridge (FW-C11-05) and the claim labels (FW-C11-06) are reused, not repeated.

#### FW-C28-01 · The teardown card · Original

- **Inputs:** a product, its public sources and the time you have.
- **Outputs:** a card with the goal-first statement; Verified facts (each with a source type and date); Reconstructed inferences (each stated as an inference); strengths with the reason they work; ranked issues, each tagged observation, inference or opinion; one change with a metric, a guardrail and a cost; and the pattern the product shows.
- **Assumptions:** primary sources exist for the central facts.
- **Tradeoffs:** a labeled card is slower to write and can be defended under questioning.
- **Failure modes:** unlabeled facts; internal motives stated as fact; a flat issue list; a change with no cost.
- **Worked example:** the eight teardowns in C28.2 and Worked example 5.

| Item | Content |
|---|---|
| Goal-first statement | |
| Verified facts (source type, date) | |
| Reconstructed inferences | |
| Strengths and why | |
| Ranked issues (Obs, Inf, Op) | |
| One change, metric, guardrail, cost | |
| Pattern | |

#### FW-C28-02 · The source ladder and dating rule · Original

- **Inputs:** a claim you want to make about a company or product.
- **Outputs:** the best available source type on the ladder (filings and shareholder letters; the company's newsroom and documentation; peer-reviewed papers and regulator documents; reputable press quoting named people; commentary), the label it supports (Verified for the first four rungs when read; Reconstructed for commentary), and the date.
- **Assumptions:** you read the source, not a summary of a summary.
- **Tradeoffs:** primary sources are slower to find and settle arguments.
- **Failure modes:** recalled figures with no source; a number older than the product.
- **Worked example:** Worked example 3.

#### FW-C28-03 · Pattern extraction · Original

- **Inputs:** two or more teardowns.
- **Outputs:** a named pattern, the evidence in each product, the conditions under which it fails, and a question that applies it to a new product.
- **Assumptions:** patterns are hypotheses, not rules.
- **Tradeoffs:** a pattern speeds analysis and can make you see what is not there.
- **Failure modes:** one example as a pattern; a pattern with no failure condition.
- **Worked example:** C28.3 and Worked example 2.

Steps: **Observe in one product → Name it → Find it in a second → State when it fails → Turn it into a question.**

#### FW-C28-04 · The 20-minute labeled teardown answer · Original

- **Inputs:** a product named by the interviewer.
- **Outputs:** an answer in the critique spine (C11) with evidence labels spoken naturally: purpose; users; flow; strengths; ranked issues; one change with metric and cost; with "what I can verify" and "what I'm inferring" said aloud at least twice.
- **Assumptions:** you have used the product or studied its public material.
- **Tradeoffs:** labels slow delivery slightly and raise credibility.
- **Failure modes:** reciting a teardown as your own; claiming internal knowledge.
- **Worked example:** Worked example 5.

| Minutes | Step |
|---|---|
| 2 | Goal-first statement; the assumption stated |
| 3 | Users and the job |
| 3 | The flow, with observations |
| 3 | Strengths and why |
| 5 | Ranked issues with labels |
| 3 | One change, metric, guardrail, cost |
| 1 | The pattern and what you could not verify |

## 4. Answer architecture

### Critique a product, in 20 minutes

Use FW-C28-04: purpose first, then users, flow, strengths, ranked issues, one change with its cost, and a closing line on the pattern and what you could not verify.

**Pacing rules.** If you know the product well, spend more on the ranked issues and the change; if you know it little, say so in one sentence, state your assumptions, and ask one question about the user. If interrupted, answer, and return to your list.

**How to say it.** "Here's what I can verify from public sources, and here's what I'm inferring." Say it before the claim, not after.

**How to close.** "So the change I'd make is X, measured by Y with Z as a guardrail; the pattern here is that a default carries the product, and the thing I couldn't verify is how often users change it."

### Type: "a product you admire and what you'd change"

Goal-first statement, two reasons it works, one honest issue, one change with cost.

### Type: "critique this product"

The full spine with ranked issues and labels.

### Type: "why did they build this feature this way?"

State the likely goal as an assumption, the evidence, the alternative they could have chosen and why they might not have.

### Type: "what would you measure?"

The metric tree for the feature, the guardrail and the evidence you would need that you do not have.

### Common interviewer interventions, and what to do

| Interviewer says | What it means | What to do |
|---|---|---|
| "How do you know that?" | Source and label | Name the source type, or say it is an inference |
| "Why do you think they did that?" | Reasoning about intent | State the likely goal as an assumption with evidence |
| "What would you change first?" | Prioritization | The top-ranked issue with its metric and cost |
| "What's the downside of your change?" | Honesty about cost | Name a user who is worse off |
| "Is that a fact or your opinion?" | Label discipline | Say which layer it is |

## 5. Worked examples

Examples 1 and 4 are `Illustrative`: they use parameters that are not public, which are invented (invented). Examples 2, 3 and 5 are `Reconstructed`: they use only public figures from the teardowns, with their labels, and reasoning about them. The arithmetic was computed.

### Worked example 1 — Setting a health-alert threshold (Illustrative)

*Applies TD-C28-07.* **The question.** "A wearable can notify people of a possible heart-rhythm problem. How would you choose how sensitive the alert should be?"

**Start from what is verified.** In the published study, 0.52% of participants were notified and the positive predictive value of a notification was 0.84 among those notified `[V: peer-reviewed paper, 2019]`. Per million wearers (assuming the same rate and precision in the wider population, which the paper warns is only an estimate): 5,200 notifications, of which 4,368 would be confirmed and about 832 not.

**Compare a more sensitive trigger.** Suppose (invented) that triggering on fewer repeated checks doubles the notification rate to 1.0% (10,000 per million) and lowers precision to 0.70. Then 7,000 are true and 3,000 are false alarms. The extra 2,632 true detections come with 2,168 extra false alarms: about 0.82 extra false alarms for each extra true detection.

**The decision.** Whether 0.82 extra false alarms per extra true case is acceptable depends on the cost of each. A false alarm costs worry, a clinic visit and some distrust of the feature; a missed case in the notified group costs a missed chance to treat a condition that raises stroke risk. The right setting is not found by accuracy; it needs clinical input on the benefit of earlier detection, measured by what happens after alerts (confirming tests, treatment started). Also note that who is alerted matters: with much lower prevalence in younger people, the same trigger produces mostly false alarms there (C12 base rates), so a single threshold may suit one group and not another.

**What I'd recommend.** Keep the conservative trigger for general use (it keeps alerts rare and trust high), offer a more sensitive option for people at higher risk who opt in, and measure downstream actions and distress as well as detections. I'd say plainly that sensitivity (the share of true cases caught) is not established by the design that reported precision.

**What this shows.** The teardown's verified numbers became a threshold analysis with the cost of each error, and the base rate explained why one threshold does not fit everyone.

### Worked example 2 — Reading a habit product's numbers, and extracting a pattern (Reconstructed)

*Applies TD-C28-01 and TD-C28-02.* **The question.** "Duolingo reports that most daily users have a streak of seven days or more. What does that tell you, and what doesn't it?"

**Compute from the filings (Verified inputs).** For the fourth quarter of 2024 (daily and monthly users are quarterly averages, while the streak counts are as of 31 December, so the shares below are approximate): 40.5 million daily active users and 116.7 million monthly active users, so daily-to-monthly was 34.7%; 32 million daily users had a streak of seven days or more, 79% of daily users; about 10 million had a streak of 365 days or more, 24.7% of daily users `[V: annual report, 2025]`. For the fourth quarter of 2025: 52.7 million daily and 133.1 million monthly, so 39.6%, and 12.2 million paid subscribers, 9.2% of monthly users `[V: company investor site]`. For 2020, subscription revenue of about $118 million (73% of $161.7 million) divided by an average of 1.25 million paying subscribers (0.9 million and 1.6 million at the year ends) is about $94 a subscriber a year, roughly $7.9 a month `[V: registration statement, 2021; computed]`.

**What the streak share tells us.** Most daily users are people who have already built a habit (79% on seven-day streaks or more): the daily-user base is made of returning users, not one-day visitors. That is consistent with the habit mechanic working, and with a base that survives because users do not want to break their streak.

**What it doesn't tell us.** It is a share of *daily active users*, so it excludes everyone who left: survivorship (C12). It does not show that streak holders learn faster, or that the streak caused the habit rather than attracting people already inclined to a daily routine. It does not show what share of new users ever reach a seven-day streak; that conversion is the number that tests the mechanic.

**The pattern.** *A rhythm builds a habit* (C28.3). The failure condition: the rhythm rewards activity over value. The test question for a new product: does the habit metric track the value metric? For Duolingo, the next evidence would be a measure of learning, tied to streak length.

**What this shows.** Computed ratios from filings gave an honest reading, with the survivorship caveat, and the pattern became a question that applies elsewhere.

### Worked example 3 — What you can and cannot say from shareholder letters (Reconstructed)

*Applies TD-C28-03 and FW-C28-02.* **The question.** "Netflix's ad plan is clearly a success. Is it?"

**Sort the claims by the ladder.** From the shareholder letter for Q3 2023 (a primary source): ads-plan membership was up almost 70% over the previous quarter, and 30% of sign-ups in ads countries were to the ads plan `[V: shareholder letter, October 2023]`. From press reports of the company's announcement: the plan launched in the United States on 3 November 2022 at $6.99 a month `[V: press, 2022]`. The price gaps (computed from the figures in TD-C28-03): the ad plan was 30% below the ad-free Basic plan ($9.99) and 55% below Standard ($15.49).

**What the numbers support.** Growth was rapid and the plan took a substantial share of new sign-ups. That is Verified.

**What they do not support.** A relative growth rate says nothing about the size of the base: +70% is 8.5 million from a base of 5 million, 17 million from 10 million and 34 million from 20 million (invented bases to show the range). "30% of sign-ups" is a share of new sign-ups, not of members, and it does not say whether those sign-ups would have taken a higher-priced plan (cannibalization) or would not have subscribed at all (new demand). Revenue per member on the ad plan, which determines whether the tier is profitable, is not in the letter I read. So "a clear success" is an opinion, and the evidence supports "rapid adoption."

**What I'd say in an interview.** "Verified: the plan launched at $6.99 and, per the company, membership grew almost 70% in a quarter, with 30% of sign-ups in ad markets choosing it. What I can't tell from the letters is the base, the mix of new versus downgraded customers, or the ad revenue per member. I'd want those three numbers before calling it a success."

**What this shows.** Ranking sources and separating relative from absolute figures turned a confident claim into a precise one, with a short list of what is missing.

### Worked example 4 — Measuring a change to a recommendation feed (Illustrative)

*Applies TD-C28-02.* **The question.** "How would you test a control that lets listeners steer their weekly playlist?"

**Use the verified figures to ground the metric.** More than half of Discover Weekly listeners streamed at least 10 tracks a week, and more than half saved at least one song `[V: company press release as reported, 2016]`. With a list of 30 songs, ten streamed tracks is a third of the list. Nearly 5 billion tracks streamed across 40 million listeners in under a year is about 125 tracks per listener `[V: company press release as reported, 2016; computed]`; how that relates to the tracks delivered cannot be computed without the number of weeks each listener received the list.

**The test.** Primary metric: the share of listeners who save at least one song in a week (Spotify reported more than half of listeners saving at least one song, without stating the period, so measure the weekly baseline first). Suppose a baseline of 50% and a target of a two-point improvement (invented). Sample per arm: 2 × (1.96 + 0.84)² × 0.5 × 0.5 ÷ 0.02² = about 9,800 listeners. Guardrails: next-week return rate, skip rate, and the share of listeners who play an artist new to them (discovery). Novelty: read effects by week (C14.4); the control may be used heavily in the first week and then fade.

**The risk.** A steering control can reduce discovery: listeners may use "less like this" to narrow their lists (popularity bias and narrowing, C23.8). So the discovery measure is a guardrail, not an afterthought, and the control should include a "new genres" option and a small exploration share.

**The decision rule.** Ship if saves rise by at least one point, discovery does not fall by more than a stated margin, and return does not fall. Otherwise redesign.

**What this shows.** Public figures anchored a baseline, the sample size followed from a stated target, and the guardrail addressed the feedback loop the feature could create.

### Worked example 5 — A labeled 90-second teardown (Reconstructed)

*Applies TD-C28-05 and FW-C28-04.* **The question.** "Critique WhatsApp."

**An unlabeled version (weak).** "WhatsApp is the most secure messenger, because it's encrypted, and it obviously doesn't use your data. The product is perfect for family groups. They should add more features."

**What is wrong.** "The most secure" is an opinion stated as fact; "obviously doesn't use your data" is an unsupported claim about internal behavior; "perfect" and "more features" give no reasons, ranking or metric.

**A labeled version (strong), as spoken.** "Assumption: WhatsApp exists to let people message and call reliably and privately at huge scale, and I'll judge it on trust and ease. What I can verify from public sources: since April 2016 content is end-to-end encrypted by default, with an in-chat notice and optional verification codes; I can also verify that metadata is not encrypted and that, as of late 2025, backup encryption was an option and not the default. My inference is that making encryption the default is what protects most users, since defaults have a large effect on what people end up with (`MM-defaults`, C07), and that it pushed the team to detect spam from behavior instead of content; a company engineer said spam fell 75% after the change, which is a reported figure I can't independently check. My observation as a user is that the setup is instant and that group messaging works. The issue I'd rank first is that backups and metadata are gaps in the privacy promise; second, that harms needing content to detect are harder to catch. One change: turn on security-change notifications by default for new accounts with a one-sentence explanation, measured by how many users understand the notice and by confirmed account takeovers, with support contacts as a guardrail; the cost is extra notices most people won't understand. The pattern I'd note is that the default is the product for most users."

**What this shows.** Labeling turned guesses into either checked facts or flagged inferences, and the answer kept its ranking, its metric and its cost.

## 6. Baseline, Strong, Standout

**Prompt:** "Critique a product you use every day."

### Baseline answer

"I use a music app every day. It's great, with lots of songs and good recommendations. I'd add more features, like better podcasts and a nicer design."

*What is wrong:* no purpose, no evidence, no ranking, no reasons, no metric.

### Strong answer

"The app exists to help listeners find and play music they like; for the company it serves engagement and subscriptions. I'd judge it by how quickly someone gets to music they want. It does well on a weekly personalized list: it's finite, personal and arrives at a predictable time, so it's easy to act on. The issues I'd rank: first, that recommendations can narrow my taste over time; second, that I can't easily steer them. My change would be a simple control to say 'more like this' or 'something new', measured by songs saved and artists new to the listener, with return rate as a guardrail."

### Standout answer

Everything in the Strong answer, plus:

"I'll say what I can verify and what I'm inferring. Verified from public statements: the weekly list launched in 2015 with 30 songs, and the company reported that more than half of listeners returned the next week and saved a song. Inference: the weekly rhythm creates a habit and the save is the signal that feeds the next list, which also makes narrowing a risk. Opinion: I'd like more control. For the change, I'd test with about 10,000 listeners per arm to detect a two-point rise in saves, read the effect by week to see novelty fade, and treat discovery as a guardrail. The downside is that listeners who use 'less like this' heavily may see fewer surprises, so I'd include a small exploration share. The pattern I'd note, which also shows in a language-learning app's streaks, is that a rhythm builds a habit, and the question is whether the habit measure tracks the value measure."

### What moves an answer up a band

| From Baseline to Strong | From Strong to Standout |
|---|---|
| States purpose, users and reasons | Labels verified, inferred and opinion; cites source types |
| Ranks issues; one change with a metric | Sizes the test; names a guardrail and the downside |
| Gives a strength with a reason | Names the pattern and where it fails |

## 7. Company lens

All claims describe what companies say publicly or what candidates commonly report, not insider knowledge. Products change; check before use `[as of 2026-10]`.

> **Company lens: Google [as of 2026-10].** Google's products span search, maps, video and productivity, and interviewers often name them `Inferred`. Candidates commonly report critique questions on Google products and on features for specific markets `Inferred`. Practical consequence: state the purpose, use the product first, and cite public material (as TD-C28-04 does) for claims about intent.

> **Company lens: Meta [as of 2026-10].** Meta's products include messaging and social apps used at very large scale `Public` `[V: Meta Form 10-K for 2025 (scale)]`, and Meta is described as explaining its privacy and safety approaches in public posts (not rechecked here) `Inferred`. Candidates commonly report questions that critique Meta products and weigh engagement against wellbeing `Inferred`. Practical consequence: separate what the public record shows from inference, and name tradeoffs between safety, privacy and growth (TD-C28-05).

> **Company lens: Microsoft [as of 2026-10].** Microsoft's products are broad (productivity, developer tools, cloud, gaming). Candidates commonly report critique questions on a Microsoft product with an enterprise angle `Inferred`. Practical consequence: identify the buyer, the user and the administrator, and ground claims in public documentation.

> **Company lens: Amazon [as of 2026-10].** Amazon's products include a retail marketplace, devices and cloud services `Public` `[V: Amazon Form 10-K for fiscal 2025: North America, International and AWS segments; stores with third-party sellers; Kindle, Fire, Echo, Ring devices]`. Candidates commonly report questions that critique a customer experience with metrics `Inferred`. Practical consequence: start from the customer, state the metric and the input behind it, and keep claims to what you can source.

> **Company lens: Apple [as of 2026-10].** Apple's hardware and services are described in public announcements and filings, while its internal process is not `Public` `[V: Apple Form 10-K for fiscal 2025]`. Candidates commonly report craft and ecosystem critique questions `Inferred`. Practical consequence: critique from use and public documents (TD-C28-06, TD-C28-07), say what you cannot know, and propose a change with its cost.

> **Company lens: Netflix [as of 2026-10].** Netflix publishes quarterly shareholder letters with its strategy and metrics `Public` `[V: Netflix shareholder letters]`. Candidates commonly report critique and measurement questions about the product and its plans `Inferred`. Practical consequence: read the letters as evidence (Worked example 3), separate relative from absolute figures, and name what you would need to judge success.

> **Company lens: Stripe [as of 2026-10].** Stripe publishes documentation and product pages for developers `Public` `[V: Stripe documentation and product pages]`. Candidates report critique questions on developer experience `Inferred`. Practical consequence: critique from using the documentation and the integration path, and measure time to first successful call (C19.3).

## 8. Common mistakes

| # | Mistake | How to detect it | Fix |
|---|---|---|---|
| 1 | A feature list as critique | "It has X, Y and Z" | Purpose first, then ranked issues |
| 2 | Internal intent stated as fact | "They obviously did it because..." | State it as an assumption with evidence |
| 3 | Numbers from memory | A figure with no source or date | Name the source type and date, or drop it |
| 4 | Praise without reasons | "It's great" | Say why it works and what it shows |
| 5 | A flat issue list | Ten problems, no order | Rank by impact and fixability |
| 6 | A change with no cost | "Just add X" | Name who is worse off and the effort |
| 7 | Confusing relative and absolute | "+70%" with no base | Ask for the base; say what you cannot tell |
| 8 | Survivorship in a metric | A share of active users only | Ask who left |
| 9 | Reciting a library teardown | Words that aren't yours | Use the patterns; form your own view from your own use |
| 10 | A pattern from one example | "This always works" | State when it fails |

## 9. Mental models applied

Four models, each tied to a decision in this chapter. [[survivorship-bias]] is from C12 and [[inversion]] from C02.

**Map and territory** (`MM-map-territory`, see C05). A source about a product is a map, not the product. Use the product and primary sources to correct the map.

**Survivorship bias** (`MM-survivorship-bias`, see [[survivorship-bias]], C12). A metric computed among active users hides those who left; ask what happened to them before reading a streak or retention share as success.

**Inversion** (`MM-inversion`, see [[inversion]], C02). To judge a design, ask how it would fail: when would the default be wrong, the streak mislead, the tier cannibalize? The failure condition is half the critique.

**Chesterton's fence** (`MM-chestertons-fence`). Before removing a feature or a design choice, find out why it exists `[V: Chesterton, The Thing, 1929]`. In a teardown, ask what problem a puzzling choice might have been solving before calling it a mistake.

## Engineering, design and data-science perspectives

- **Engineering.** An engineer reading your critique asks whether your change is feasible and what it costs to run; name the effort and the dependency. They will also notice claims about how a system works that you cannot know; label them.
- **Design and research.** A designer asks what you observed and with whom; say what you saw in your own use and avoid claiming research you did not do. They will weigh your opinion lightly unless you tie it to a user need.
- **Data science.** A data scientist asks how you would measure the effect and what could mislead you (novelty, selection, survivorship); give the metric, the guardrail and the sample.
- **Product marketing and leadership.** They ask who the product is for and how it is positioned (C20.2); state the segment and the claim the product makes.

## Checklist: before you give a teardown

1. Have I stated the product's purpose as an assumption and the criterion I am judging by?
2. Is every company fact labeled Verified, with a source type and a date, or Reconstructed?
3. Have I separated observation, inference and opinion?
4. Have I explained why each strength works?
5. Have I ranked the issues, with evidence?
6. Is there one change with a metric, a guardrail and a cost?
7. Have I named the pattern and where it could fail?
8. Have I said what I could not verify?

## 10. Case studies

#### CS-C28-01 · The teardown that stated guesses as facts · Illustrative · Beginner

*Fictional composite. Every number is invented (invented).*

**Situation.** A candidate practices "critique a food-delivery app" with a friend who works in product. The candidate speaks for ten minutes and is fluent. The friend stops them four times with "how do you know that?"

**Constraints.** A product the candidate uses daily; no preparation of sources; a habit of speaking confidently.

**Data.** The friend counts 14 factual claims about the company in the answer. Of these, 9 (64%) are unsupported guesses stated as facts ("they make most of their money from delivery fees," "the rating system was added because of complaints," "drivers get paid per kilometer"), 3 are true and checkable (the app has a subscription; there is a live map; refunds are offered in the app), and 2 are numbers from memory with no source ("about 50 million users"). The critique itself (issues and a change) has no ranking and no metric.

**Problem definition.** As an observable problem: "Nine of fourteen company claims were guesses stated as facts, and the critique had no ranking, metric or cost, so the interviewer could not tell what the candidate knew."

**Analysis.** The method in C11 and this chapter would have separated the layers (FW-C11-06): what the candidate could verify (the three checkable claims, and anything from the company's documentation or filings), what was inference (why the rating system was added), and what was opinion (the issues). The candidate also did not state the app's purpose before judging it, and presented a flat list of ten issues without evidence. The fix is mostly discipline: label, source, rank and cost.

**Options.**

| Option | Optimizes | Costs |
|---|---|---|
| A. Keep the confident style and add more claims | Fluency | Credibility lost at the first probe |
| B. Rewrite with the card (FW-C28-01): a goal-first statement, three verified facts with source types, two labeled inferences, three ranked issues, one change with metric and cost | Credibility and structure | Preparation time; less sweeping language |
| C. Say less and avoid claims | Safety | A thin answer with no point of view |

**Tradeoffs.** B costs an evening of preparation per product and survives probing; A is faster and fails the first "how do you know"; C avoids risk and gives no signal.

**Decision.** Choose B. For each practice product, read the company's newsroom or filings for the three facts you will use, write the inferences as inferences, rank issues by impact and fixability, and end with one change, its metric, a guardrail and its cost.

**Outcome.** In this fictional scenario the rewritten answer contained 6 company claims, 4 of them Verified with source types, 2 labeled as inferences, and no unsupported statements; the friend interrupted once, with a question about the metric, which the candidate could answer (invented).

**Alternative outcomes.** If the candidate cannot find a source for a fact, the claim is dropped or stated as a question ("I believe, but I can't verify..."). If the interviewer supplies a fact, the candidate takes it as given and labels it as the interviewer's. The lesson: a teardown is judged by how well you separate what you know from what you think.

#### CS-C28-02 · Airbnb Categories, 2022 to 2025: a bold search redesign and its withdrawal · Verified · Advanced

*Sources (types): Airbnb's newsroom post and press release for its 2022 Summer Release of 11 May 2022, and its media guide for the release (primary); Airbnb's 2023 Summer Release post introducing Airbnb Rooms (primary); an Airbnb Community reply from the company about the 2025 homepage change (a company statement); a Skift article of September 2025 on the end of category search (trade press); and a 2023 blog post by a customer-feedback analytics company, Enterpret, critiquing the design from app-store and social-media feedback (commentary). The company's internal test results and its reasons for the later change are not public beyond what is quoted, so interpretations are labeled. The analysis is the author's. Re-read in October 2026.*

**Situation.** On 11 May 2022 Airbnb announced its 2022 Summer Release, which it called the biggest change to Airbnb in a decade. The release combined a new way to search built around "Airbnb Categories," a feature to split a stay between two homes (Split Stays) and guest protections (AirCover for guests) `[V: Airbnb newsroom, May 2022]`. The stated problem, in the press release, was that travel search had been the same for 25 years (enter a location and dates in a box), that most people can think of only a few dozen cities to type while there are Airbnbs in 100,000 towns and cities, and that millions of people are more flexible about where they live and work; so the company organized homes into categories and results by the categories relevant to a destination `[V: Airbnb press release, May 2022]`. The redesigned app and website launched with more than 50 categories of unique homes (Airbnb's own pages give 55 or 56) `[V: Airbnb press release and media guide, May 2022]`. In 2023, Enterpret, a customer-feedback analytics company, argued from app-store and social-media feedback that users disliked being forced into a category (there was no "All" option) and that the map zoomed out and panned when categories changed `[V: Enterpret blog, 2023; commentary]`. In May 2023, with Airbnb Rooms, Airbnb redesigned its "type of place" filter to switch between Rooms, entire homes or all types of places `[V: Airbnb 2023 Summer Release]`; the sources read do not say whether this responded to that critique. In September 2025 Skift reported that Airbnb had ended category search when it relaunched Experiences and introduced Services in May 2025, so that users now see Homes, Experiences and Services tabs and a traditional search box `[V: Skift, September 2025]`. An Airbnb Community reply said the homepage change makes Experiences and Services available up front and more personalized, and that guests can still filter for amenities `[V: Airbnb Community, September 2025]`.

**Constraints.** A search used by travelers with two different intents (inspiration, and a fixed place and date); a large catalog of homes of many types; a company expanding beyond homes; a need for search to remain fast and predictable for people who already know where they are going; and an organization that had said the change was its biggest in a decade.

**Data.** As reported: the announcement and its rationale; the number of categories at launch; the 2023 critique and the 2023 filter redesign; and the 2025 end of category search. The company's measurements of the redesign's effect on bookings are not public in the sources read.

**Problem definition.** *The author's reading.* Airbnb wanted to help travelers who did not know where to go, and to spread demand beyond well-known destinations. As an observable problem: "How to inspire travel without making search worse for people who know what they want?"

**Analysis.** *The author's analysis, through this chapter's tools.*

*The job (C06).* Two jobs share one search box: *inspiration* ("show me places I would never think of") and *fixed intent* ("a place for two near this address on these dates"). The redesign served the first and, according to critics, made the second harder.

*Why the idea was reasonable `[Inf]`.* The stated observation (people cannot name more than a few dozen places, the platform has listings in tens of thousands of towns) is a real limit of a text box; categories turn a location problem into a browsing problem, and they redistribute demand.

*Why it could fail.* `[Inf]` Forcing the category frame on fixed-intent users adds steps and hides listings behind category switches; as the company added products beyond homes, a home-type category frame lost value in a homepage that now had to carry other offerings (the trade press's reading `[V: trade press, 2025]`).

*Reversibility and measurement (C17).* The category frame was launched in one large release in 2022 and ended around three years later, in 2025. The evidence for what the company measured is not public; a design that adds a new path alongside the default search, tested against a holdout of fixed-intent users, would have shown the cost to them early. What the public record supports is that the redesign was made in one large release and later removed when the homepage had to carry other products, which suggests a bet whose value changed as the product changed `[Inf]`.

*Pattern (C28.3).* Bold changes need reversibility and honesty: the company's own framing ("biggest change") raised the stakes, and a staged rollout by intent segment would have limited them.

*What the evidence does not show.* The effect of categories on bookings, the share of guests who used them, and the reason for the 2025 removal beyond the trade press's account. The case supports an analysis of a design bet and its lifecycle, not a verdict on the decision.

**Options.** *The author's reconstruction of choices the company could have faced; not a record of its deliberations.*

| Option | Optimizes | Costs |
|---|---|---|
| A. Replace search with categories for everyone | Inspiration and distribution of demand | Harm to fixed-intent users; hard to undo |
| B. Add categories as an inspiration surface beside a classic search, test by intent segment, and expand if both segments benefit | Both jobs; reversibility | Slower; two paths to maintain |
| C. Keep the search box and improve flexible search only | Low risk | Less change in discovery |

**Tradeoffs.** B costs time and keeps the default intact for people who know what they want; A was bolder, and critics reported that it made fixed-intent search harder `[V: commentary, 2023]`; C may leave the discovery problem unsolved.

**Decision.** As reported, the company launched the redesign as described in May 2022, redesigned the type-of-place filter in 2023, and ended category search in 2025.

**Outcome.** Reported: a launch in 2022 with 56 categories `[V: Airbnb release]`, a critique in 2023 `[V: commentary]`, a redesigned type-of-place filter in 2023 `[V: Airbnb release]`, and the end of category search, which Skift dates to May 2025 and reported in September 2025 `[V: trade press]`. Effects on business results are not public in the sources read.

**Alternative outcomes.** *Inference.* A staged rollout by intent segment might have preserved the inspiration benefit and avoided the cost to fixed-intent users. A reader should avoid hindsight: a feature removed after three years was a serious attempt that taught something, and a company that ships and then prunes is behaving normally. The method to carry away: separate the jobs sharing one surface, keep the default path for the common intent, expect a bold change to be adjusted, and ask what you would measure to know early.

## 11. Interview questions and model answers

Nine questions. Model answers are `Illustrative` (composite candidates). Company facts in the answers come from the teardowns in this chapter and carry their labels; any number not in the teardowns is invented (invented). Each ends with follow-ups and answers. Where a real company's product is the setting, the answer reasons from public information and states no internal fact.

#### IQ-C28-01 · Beginner · product-sense · PS

**Prompt.** Pick a product you use every day and critique it in ten minutes.

**Rubric.**
- **Baseline:** "It's great; I'd add more features."
- **Strong:** States the purpose, ranks issues and proposes a change with a metric.
- **Standout:** Labels what is verified, inferred and opinion; explains why strengths work; names the cost of the change and what could not be verified.

**Model answer.** *(A note-taking app, used as an example; no claim about any real product's internals.)* "The app exists to help people capture thoughts quickly and find them later; for the company it serves retention and subscriptions. I'll judge it by how fast I can capture a thought and how reliably I can find it. What works: it opens to a new note, so capture takes one tap (observation), which suits the job because capture is urgent and sorting is not (inference). Ranked issues: first, search misses notes when I misspell (observation, severe for the 'find' job); second, sharing a note requires the other person to sign up (observation); third, I'd like folders to be optional (opinion). My change: forgiving search that handles typos. Metric: the share of searches that end with an opened note within 30 seconds; guardrail: search latency. Cost: indexing and ranking effort. What I can't verify is how many users search at all; I'd check that first."

*Signals.* Purpose; ranked issues with labels; a metric, guardrail and cost.

**Follow-ups.**

- **Q.** How do you know search is the biggest problem? **A.** "From my own use and a guess about reach, so I'd check data: how many searches end with no opened note, and what share of users search weekly. If few users search, the ranking changes and sharing may come first."
- **Q.** What would make you drop your recommendation? **A.** "If the failed-search rate is low, or if the typo fix raises latency enough to hurt the common case. I'd run it behind a flag and compare."

#### IQ-C28-02 · Beginner · product-sense · PS

**Prompt.** In a critique, what is the difference between an observation, an inference and an opinion? Give an example.

**Rubric.**
- **Baseline:** "Facts versus feelings."
- **Strong:** Defines the three and gives an example.
- **Standout:** Applies the layers to a real, sourced example and shows how each is challenged.

**Model answer.** "An observation is what I saw or what a source reports. An inference is what I think it implies. An opinion is what I prefer. Example from Spotify's weekly playlist: observation (from the company's reported figures): more than half of listeners returned the next week and saved at least one song; inference: the weekly rhythm builds a habit and saves feed the next list, which also risks narrowing taste; opinion: I'd like a control to steer it. Each is challenged differently. An observation is challenged by asking for the source; an inference by asking for the evidence and the alternative explanation (maybe people return because the list is good, not because of the rhythm); an opinion by asking who else would prefer the opposite."

*Signals.* Clear definitions; a sourced example; how each is tested.

**Follow-ups.**

- **Q.** Can an opinion be wrong? **A.** "It can be unsupported or contradicted by evidence about users, even if it is a preference. I'd test it with users: what I'd like is not always what most users need."
- **Q.** Why label them aloud? **A.** "It tells the interviewer which parts to trust and which to probe, and it prevents me from presenting a guess as a fact."

#### IQ-C28-03 · Intermediate · product-sense · PS · Apple

**Prompt.** Critique the setup experience of wireless earbuds sold with a phone, and say what you would change.

**Rubric.**
- **Baseline:** "Pairing should be easier."
- **Strong:** Names the friction removed and the ecosystem effect.
- **Standout:** Labels verified claims, ranks issues including ecosystem dependence and repair, proposes a change with metric and cost, and states the hardware constraint.

**Model answer.** The setting is general and uses public Apple announcements; no internal claim. "Goal: wireless audio that works without fuss with the user's devices; for the company, hardware sales and ecosystem depth; I judge by the speed and reliability of first connection and later switching. Verified from the company's 2016 announcement: opening the case near an iPhone and tapping sets up the earbuds, and they work with all devices signed into the same iCloud account; in-ear sensors pause and play automatically; the launch slipped from late October to orders on 13 December. Inference: pairing was the biggest friction in earbuds and moving it into the chip and the account made setup the differentiator; the account link raises switching cost. Issues, ranked: first (opinion, high), full value depends on owning the company's devices; second (inference), small and easy to lose, with a battery that wears out; third (observation), a hardware component can move a launch. My change: a clear 'replace one earbud' path with transparent pricing. Metrics: replacement rate, support contacts per 1,000 units and satisfaction at twelve months. Cost: inventory and service operations."

*Signals.* Labels; the removed friction; ranked issues; a cost.

**Follow-ups.**

- **Q.** Isn't ecosystem lock-in a feature, not a bug? **A.** "For the company it is a strength, and for users it is a benefit while they stay and a cost if they leave. I'd keep it as a user-value measure: do people feel they gain, or feel trapped? A survey on switching intent and the share who use earbuds across devices would tell."
- **Q.** What would you test before changing the replacement path? **A.** "Whether users lose earbuds often enough to matter (loss rate by months of use) and what they do when they do, and a price test on replacement with satisfaction and repeat-purchase as outcomes."

#### IQ-C28-04 · Intermediate · product-sense · PS · Google

**Prompt.** How would you decide whether to build a travel mode for a specific segment in a new market, such as motorcyclists in a country with many?

**Rubric.**
- **Baseline:** "If there are many riders, build it."
- **Strong:** Sizes the segment and identifies what differs.
- **Standout:** Identifies the different routing, speed and cue requirements, estimates reach and accuracy risk, uses a staged launch with metrics and safety guardrails, and cites public evidence carefully.

**Model answer.** The setting is general; I use public statements about a similar launch and claim no internal knowledge. "Start with the job: what is different for this segment's trips? Public statements about an India-first mode say that riders use shortcuts closed to cars, move differently in traffic and navigate by landmarks `[V: press, 2017]`. So three things differ: routing rules, travel-time models and guidance cues. Size: the segment's share of trips in the market, from public vehicle statistics and our own data. Risk: accuracy depends on local data (restrictions, shortcuts) and errors cost trust and safety. A staged plan: launch in a few cities where the data is strongest; measure mode adoption among likely riders, the gap between predicted and actual arrival time, and navigation abandonment; guardrails: safety incident reports and distraction (voice guidance). Reach: if the segment is a large share of trips and the baseline error is high, build; if it's small or the data is thin, use a lighter step (a route preference) first."

*Signals.* The job; what differs; sizing; a staged plan with safety.

**Follow-ups.**

- **Q.** How do you get the local data? **A.** "From our existing usage, from partners and from users reporting corrections; start where coverage is best, and let riders flag errors easily. I'd treat data quality as a launch gate by city."
- **Q.** What if riders don't switch to the new mode? **A.** "Then discovery is the problem: suggest the mode when the pattern of travel suggests two wheels, with an opt-out, and measure acceptance. I'd be careful with inference on vehicle type for privacy and accuracy."

#### IQ-C28-05 · Intermediate · product-sense · PS · Netflix

**Prompt.** You are rolling out paid sharing for a subscription service. How do you plan it, and what do you tell leadership to expect?

**Rubric.**
- **Baseline:** "Roll it out and see what happens."
- **Strong:** Stages the rollout and sets measures.
- **Standout:** Predicts a cancellation reaction, defines success on net additions and revenue, plans by market, communicates clearly to members, and sets guardrails; uses public precedent carefully.

**Model answer.** The setting is general; I use public shareholder letters as precedent and claim no internal knowledge. "Set expectations first: a public letter from a streaming company said it expected a 'cancel reaction' in each market when it rolled out paid sharing, based on an earlier experience in Latin America `[V: shareholder letter, January 2023]`, and later reported that revenue in each region was higher than before launch and sign-ups exceeded cancellations `[V: shareholder letter, July 2023]`. I'd tell leadership to expect a short-term dip in net additions, a recovery as extra members and new accounts come in, and to judge success on revenue and net additions over several quarters, not on the first month.

"Plan: stage by market, starting where sharing is common and the product is strong; communicate clearly (what changes, what it costs, how to add an extra member); offer an easy way to move a profile to its own account; measure cancellations, sign-ups, extra-member adds, complaint rate and retention of the converted accounts; guardrails: member satisfaction and support contacts. Decision rule: pause and adjust a market if cancellations exceed a threshold set in advance or complaints spike."

*Signals.* Expectations; staging; success on revenue and net additions; communication; guardrails.

**Follow-ups.**

- **Q.** How do you decide the extra-member price? **A.** "From willingness to pay among sharers (a survey and a price test), the price of a full plan (so extra members do not make full plans pointless) and cost to serve. I'd test two prices on a holdout and watch conversion and cancellations."
- **Q.** What if complaints rise sharply in one market? **A.** "Pause, read the reasons (price, unclear rules, a technical issue), fix the cause and resume with a clearer message. A rollout with a defined pause rule is safer than one that continues regardless."

#### IQ-C28-06 · Intermediate · product-sense · PS · Meta

**Prompt.** A messaging app encrypts every message so the company cannot read it. How do you fight spam and abuse?

**Rubric.**
- **Baseline:** "Scan messages for bad content."
- **Strong:** Uses behavior and reports, not content.
- **Standout:** Designs signals from behavior and metadata, user reporting, friction, limits and account-level actions, measures prevalence and errors, and states what cannot be detected.

**Model answer.** The setting is general; I use a public account of one platform's experience and claim no internal knowledge. "If I cannot read content, I use behavior. A public account from an engineer at an encrypted messenger reported that spam fell by 75% after encryption was introduced because behavioral signals detect spam without content `[V: press reporting a 2017 conference talk]`. Signals: message volume and speed, the share of recipients who do not know the sender, how many people block or report the sender, the age and pattern of the account and device, and group-joining patterns. Controls: limits on forwarding and bulk messaging, friction for new accounts, easy blocking and reporting (a reported message can be shared with the company by the recipient), account-level penalties and detection of automation. Measures: prevalence of spam by sampling reports, time to action, appeal rate, and false-positive rate on legitimate users, with a guardrail on friction.

"What cannot be done: detecting a harm that exists only in content, such as a specific kind of abusive image, without a user report or a content signal the user chooses to share. For those, reporting and metadata carry more weight, and some harms will be detected later or not at all; I'd say so, and make sure policy and law enforcement processes handle what is reported."

*Signals.* Behavior signals; controls; measures; honesty about limits.

**Follow-ups.**

- **Q.** Does metadata analysis weaken the privacy promise? **A.** "It is a different promise: content stays private and some information about behavior is used. I'd say that plainly, minimize what is kept, and make sure the claims made to users match what is done."
- **Q.** How would you tell if legitimate users are being hit? **A.** "Appeal and overturn rates, complaints from known-good segments such as businesses and large groups, and a sampled review of actions. I'd also check by region and language."

#### IQ-C28-07 · Hard · product-sense · PS

**Prompt.** A recommendation feed has high return rates, but you suspect it is narrowing what people see. How do you check, and what do you do?

**Rubric.**
- **Baseline:** "Add more variety."
- **Strong:** Defines a diversity metric and tests an intervention.
- **Standout:** Measures narrowing over time per user, separates choice from the system's effect, tests exploration with guardrails, reads effects by week, and states the tradeoff with engagement.

**Model answer.** "I'd define narrowing as a falling variety of what a user is shown and plays over time, compared with their own earlier behavior and a control group. Measures: the number of distinct artists or topics per user per month, the share of plays from the user's top three, and the share of plays of items new to the user. To separate the system's effect from the user's taste, I'd compare users who got personalized lists with a holdout who got a less personalized mix, and look at the change in variety over weeks (popularity bias and feedback loops, C23.8).

"If narrowing shows, the intervention is an exploration share (say 10% of the list from outside the user's pattern) with a steer control; test it with the saves-per-listener metric as primary, discovery as a second primary, and return rate as a guardrail. Sample: about 9,800 per arm to detect a two-point rise in saves from a 50% baseline. Read by week for novelty. The tradeoff: exploratory items are skipped more, so short-term engagement may dip; I'd accept a small dip if discovery and long-term return improve, and set the threshold in advance."

*Signals.* Narrowing defined; a holdout; exploration with guardrails; the tradeoff.

**Follow-ups.**

- **Q.** What if return rates fall when you add exploration? **A.** "Then I'd reduce the share or make the exploration better matched (adjacent items), and check whether the fall is a novelty effect that fades. If it persists, the engagement cost is real and I'd decide with leadership using the long-term evidence."
- **Q.** Is narrowing always bad? **A.** "No: for many users a focused taste is satisfying. It is a problem when it shrinks what a user would want to see if shown, and for creators who lose exposure. So I'd look at both user satisfaction and the catalog's reach."

#### IQ-C28-08 · Hard · product-sense · PS · Apple

**Prompt.** A watch notifies a wearer of a possible irregular heart rhythm. Design what happens after the alert.

**Rubric.**
- **Baseline:** "Tell them to see a doctor."
- **Strong:** Gives clear next steps and handles anxiety.
- **Standout:** Designs a guided path using verified study facts, offers confirming options, uses plain language about what the alert means, measures follow-through and distress, and works within regulation and clinical input.

**Model answer.** The setting is general and uses a published study; no internal claim. "Facts from the published study: 0.52% of participants were notified; the notification had a positive predictive value of 0.84 against a simultaneous monitor patch, but only 34% of notified participants who wore a patch about two weeks later showed the condition, and the authors noted that the condition can come and go, so a later patch can miss it `[V: peer-reviewed paper, 2019]`. So a person who gets an alert has most likely had a real irregular rhythm, may not show it again soon, and needs to understand both.

"Design: plain language ('your watch noticed an irregular rhythm; this is not a diagnosis; it can be worth talking to a clinician'); an immediate choice of a confirming step: record a reading now if the device supports it, book a clinic or telehealth visit, or schedule a monitor; a summary the person can share with a clinician; no alarmist wording and clear urgent-symptom guidance (chest pain, fainting means seek emergency care). Measures: the share who take a confirming step within two weeks, the share who report distress, and the share of alerts followed by a diagnosis (reported with consent); guardrails: false-alert reports and unnecessary visits. Process: clinical review of wording, and regulatory consideration of claims (C27.9)."

*Signals.* Facts used correctly; a guided path; plain language; measures; clinical and regulatory care.

**Follow-ups.**

- **Q.** How do you avoid over-testing people who are fine? **A.** "By being clear about precision (most alerts are real, but some are not), offering the lowest-burden confirming step first (a recorded reading) and suggesting clinical care when it persists. I'd measure unnecessary visits as a guardrail."
- **Q.** What about people who never get an alert? **A.** "The design must not imply reassurance from silence: the study reported precision, not the share of true cases caught, so I'd say the feature does not detect all cases and does not replace regular care."

#### IQ-C28-09 · Intermediate · product-sense · PS

**Prompt.** A bold redesign of search, launched as the company's biggest change in a decade, appears to be hurting users who know exactly what they want. What do you do?

**Rubric.**
- **Baseline:** "Roll it back."
- **Strong:** Segments by intent and measures the harm.
- **Standout:** Separates the inspiration and fixed-intent jobs, measures the cost to each with a holdout, keeps the default path for the common intent, adds the redesigned path alongside, sets a decision rule, and communicates openly.

**Model answer.** "First separate the jobs: guests who want inspiration and guests who know where and when they want to stay. Measure each: search-to-booking conversion, time to a booking, the number of steps, and complaints, by intent segment, with a holdout on the old search where possible. Public commentary on a similar redesign said it forced searching by category and confused location-bound searchers `[V: commentary, 2023; opinion]`, and the company redesigned its type-of-place filter in 2023 and, according to trade press, ended category search in 2025 `[V: Airbnb release; trade press]`. I'd treat those as hypotheses to check in our own data.

"If the harm to fixed-intent users is real, restore the classic path as the default and keep the new browsing path as an optional surface for people who want inspiration; test that combination against both groups. Decision rule: keep any element that raises inspiration-segment bookings without lowering fixed-intent conversion beyond a stated margin. Communicate openly to hosts and guests what is changing and why. A bold change that gets adjusted after learning is normal; the mistake is leaving a harmed segment unmeasured."

*Signals.* Intent segments; measured harm; a default path; a decision rule; openness.

**Follow-ups.**

- **Q.** Leadership called it the biggest change in a decade. How do you propose rolling back part of it? **A.** "With the data and a framing of progress: we learned which segment benefits and which needs the classic path, and we are keeping the best of both. A change that is adjusted after evidence shows judgment; the data should lead the conversation."
- **Q.** How would you have tested it before launch? **A.** "By intent segment, with the new path offered as an option alongside the old one in a subset of markets, measuring the two groups separately, and with a rollback trigger on fixed-intent conversion."

## 12. Exercises

Eight exercises. Each has a model solution and an alternative. Figures are invented unless stated as verified in the teardowns.

#### EX-C28-01 · Goal-first statements

**Problem.** Write a goal-first statement (FW-C11-02) for three products you use: a messaging app, a payments app and a fitness tracker. Include the criterion you would judge each by.

**Context.** The first minute of any teardown.

**Data.** None.

**Constraints.** Six minutes.

**Expected approach.** FW-C11-02.

**Solution.** *Messaging app:* "Exists to help people stay in touch reliably; for the company it earns retention and reach; I'll judge it on how quickly and reliably a message reaches the right person." *Payments app:* "Exists to help people and small merchants move money safely and fast; for the company it earns fees and trust; I'll judge it on completion of a payment without error and the clarity of what went wrong when it fails." *Fitness tracker:* "Exists to help people understand and change their activity; for the company it earns device sales and subscriptions; I'll judge it on whether users keep wearing it and change a behavior." Each states an assumption the interviewer can correct.

**Alternative solution.** Write the statement as a goal for the user only, then add the company goal.

**Tradeoffs.** A committed goal focuses the critique and can be wrong; say it is an assumption.

#### EX-C28-02 · Label the claims

**Problem.** Label each claim in this paragraph as Verified (and name the source type you would need), Reconstructed, Observation, Inference or Opinion, and rewrite any you cannot support: "The ride app obviously adds a surge price to make drivers happy. Fares rose 20% last year. The map is slow on my phone. It's the best app in the market."

**Context.** Label discipline.

**Data.** As above.

**Constraints.** Six minutes.

**Expected approach.** FW-C11-06.

**Solution.** "Obviously adds a surge price to make drivers happy": an unsupported claim about intent; rewrite as an inference: "I infer surge pricing serves to attract drivers when demand is high; I can't verify the company's intent." "Fares rose 20% last year": needs a source (a company report or a regulator or press with a named source) to be Verified; without one, drop it or say "I've heard." "The map is slow on my phone": an observation, valid as such, with the device named. "It's the best app in the market": an opinion; rewrite with a criterion: "It's the one I prefer on speed of pickup." 

**Alternative solution.** Find a real source for the fare claim and mark it Verified with the date.

**Tradeoffs.** Labels slow you slightly and make the answer defensible.

#### EX-C28-03 · Habit metrics from reported figures

**Problem.** A learning app reports 30 million daily active users, 90 million monthly active users, 6.3 million paid subscribers and that 70% of daily users have a streak of seven days or more. Compute the daily-to-monthly ratio, paid share of monthly users and number of daily users with a seven-day streak. What would you ask next?

**Context.** Reading company metrics.

**Data.** As above.

**Constraints.** Five minutes.

**Expected approach.** Worked example 2.

**Solution.** Daily-to-monthly: 30 ÷ 90 = 33%. Paid share: 6.3 ÷ 90 = 7%. Seven-day streaks: 0.70 × 30 = 21 million. Next: what share of *new* users ever reach a seven-day streak (survivorship: the 70% is among those who stayed); whether streak holders learn more (outcome measure); churn by streak length; paid conversion by streak length. The daily-to-monthly ratio suggests a habit product; it does not show learning.

**Alternative solution.** Compute the implied monthly-only users: 90 − 30 = 60 million at most, an upper bound on those who do not visit daily.

**Tradeoffs.** Ratios are quick and need cohort data to mean much.

#### EX-C28-04 · Thresholds and base rates

**Problem.** A wearable alert has two settings per million wearers: Setting 1 notifies 0.8% with a positive predictive value of 0.75; Setting 2 notifies 1.5% with 0.60. Compute true and false alerts for each, and the extra false alerts per extra true alert when moving from Setting 1 to Setting 2.

**Context.** Threshold choice.

**Data.** As above (invented).

**Constraints.** Six minutes.

**Expected approach.** Worked example 1.

**Solution.** Setting 1: 8,000 alerts; 6,000 true; 2,000 false. Setting 2: 15,000 alerts; 9,000 true; 6,000 false. Extra true alerts: 3,000; extra false: 4,000; ratio 1.33 extra false alerts per extra true alert. Whether to move depends on the cost of a false alert against the benefit of an earlier true detection; and on who is alerted (lower prevalence in a younger group makes precision lower there). A defensible default is the conservative setting with an opt-in sensitive mode.

**Alternative solution.** Add a third setting at 1.1% and 0.68 and plot the tradeoff.

**Tradeoffs.** More sensitivity catches more and costs more false alarms; the weight depends on clinical value.

#### EX-C28-05 · Extract a pattern

**Problem.** From these two summaries, name a pattern, say where it fails and write a question that applies it to a new product: (a) a messaging app turned encryption on by default; (b) a streaming service set its plan ladder and moved some customers toward the ad plan by raising the price of the ad-free Basic plan.

**Context.** Pattern extraction.

**Data.** As above.

**Constraints.** Six minutes.

**Expected approach.** FW-C28-03.

**Solution.** *Pattern:* defaults and defaults-by-price steer many users; they act through what a person has to do (nothing) or pay. *Evidence:* (a) defaults have a large effect on what people end up with (`MM-defaults`, C07), so a default decides the outcome for many users; (b) a price gap nudges choice. *Where it fails:* a default wrong for a segment or hard to change; a price nudge that feels like a penalty. *Question for a new product:* "What happens for the user who never changes anything, and is that what we want for them?"

**Alternative solution.** Name the pattern "the cost of choice": removing a choice improves outcomes for most and removes agency for some.

**Tradeoffs.** A pattern speeds you up and can mislead if you stop checking the evidence.

#### EX-C28-06 · Teardown of your own product, with the source ladder

**Problem.** Using FW-C28-01 and FW-C28-02, build a teardown card for a product you use. Find three Verified facts from the top two rungs of the source ladder, and write five claims you must label Reconstructed.

**Context.** Practice, then a timed 20-minute version (FW-C28-04).

**Data.** Public sources.

**Constraints.** Ninety minutes for the card; twenty minutes for the spoken version.

**Expected approach.** FW-C28-01, FW-C28-02, FW-C28-04.

**Solution.** A good card has: a goal-first statement stated as an assumption; three facts from a filing, a shareholder or investor letter, the company's newsroom or documentation, each with source type and date; strengths with reasons; ranked issues with labels; one change with metric, guardrail and cost; and a pattern with its failure condition. In the spoken version, say "what I can verify" and "what I'm inferring" at least twice, and end with what you could not verify. Check by asking a partner to interrupt with "how do you know that?" at random.

**Alternative solution.** Do the teardown of a competitor and compare the two cards for a shared pattern.

**Tradeoffs.** Sourcing takes time and turns a recital into evidence.

#### EX-C28-07 · Spot the unsupported claims

**Problem.** Find and rewrite the unsupported claims: "The company obviously designed the free tier to make people pay later. Half its users upgrade within a week. The onboarding is confusing. Competitors are far behind."

**Context.** Label discipline.

**Data.** As above.

**Constraints.** Five minutes.

**Expected approach.** FW-C11-06.

**Solution.** "Obviously designed... to make people pay later": a claim about intent: "I infer the free tier is meant to build a base that some convert; I can't verify the intent." "Half its users upgrade within a week": a number with no source: drop it, or say "I'd want the conversion rate; I haven't seen a source," and note that half is implausibly high for most freemium products without evidence. "The onboarding is confusing": an observation if you tried it (say what confused you) and an opinion otherwise. "Competitors are far behind": an opinion with no criterion: rewrite with a criterion and a comparison you can name.

**Alternative solution.** Replace the number with a real, sourced figure if you can find one.

**Tradeoffs.** Rewriting unsupported claims shortens an answer and makes it trustworthy.

#### EX-C28-08 · Attrition behind a headline number

**Problem.** In the published heart-rhythm study, 2,161 participants were notified; 945 attended the first telehealth visit, 658 had a monitoring patch shipped, and 450 returned an analyzable patch (Verified figures from the teardown). Compute each step as a share of the notified, and say what it means for how much weight to put on the 34% found to have the condition on the patch.

**Context.** Reading a study's funnel.

**Data.** As above.

**Constraints.** Six minutes.

**Expected approach.** TD-C28-07 and C12.

**Solution.** First visit: 945 ÷ 2,161 = 43.7%. Patch shipped: 658 ÷ 2,161 = 30.4%. Analyzable patch: 450 ÷ 2,161 = 20.8%. The 34% (and the 0.84 positive predictive value, which was measured in those with simultaneous recordings) describes about a fifth of the notified people, so the rest are unobserved. The direction of any bias is not known: people who felt unwell might be more likely to follow up (raising the observed share), or people with transient episodes might show nothing on a later patch (lowering it). Say what you can and cannot conclude: the figures are informative and measured in a self-selected, partly followed-up group; ask for the follow-up reasons and, if possible, a comparison of those who did and did not return a patch.

**Alternative solution.** Compute the range of the 34% under extreme assumptions about the unobserved 80%: from about 7% of the notified (0.34 × 0.208, if none of the unobserved had the condition) to about 86% (7% plus the unobserved 79%, if all of them did).

**Tradeoffs.** Following up everyone is costly and gives a cleaner estimate; a smaller, fully followed-up sample can be more informative than a large, partly followed-up one.

## 13. Practice protocol

**Timed drills (three a week for two weeks).**

- *Week 1: method and labels.* Use IQ-C28-01, IQ-C28-02, EX-C28-01, EX-C28-02 and EX-C28-07. Teardown three products you use with the card, labeling every claim.
- *Week 2: depth and patterns.* Use IQ-C28-03 to IQ-C28-09, EX-C28-03 to EX-C28-06. Choose two teardowns from C28.2, answer the matching question aloud in 20 minutes with labels, then extract a pattern that also fits a product of your own.

**With a partner.** Ask your partner to interrupt with "How do you know that?" and "Is that a fact or your opinion?" at random and to ask what you could not verify.

**Feedback checklist (yes, partly, no).**

1. Did I state the purpose as an assumption and the criterion I judged by?
2. Did I label company facts Verified (with a source type and date) or Reconstructed?
3. Did I separate observation, inference and opinion?
4. Did I explain why strengths work?
5. Did I rank issues with evidence?
6. Did I propose one change with a metric, guardrail and cost?
7. Did I name the pattern and where it could fail?
8. Did I say what I could not verify?

**Answer journal.** Record the date, the product, the claims I had to retract or re-label, the metric and cost I gave, my score and the one fix.

## 14. Implementation playbook

Apply the chapter to products you use and to your own work.

**Days 1 to 3.** Pick three products from different domains. For each, write a goal-first statement and find three facts from the top two rungs of the source ladder, with dates.

**Week 1.** Build a full teardown card (FW-C28-01) for one product, then give it aloud in twenty minutes (FW-C28-04) to a partner who interrupts with "how do you know that?"

**Week 2.** Extract one pattern (FW-C28-03) from two of your teardowns and test it on a third product. Teardown a feature of your own product the same way, with your own data labeled as such.

**Deliverables that become stories:** three labeled teardown cards (evidence of structured product thinking), one pattern with its failure condition (evidence of transferable judgment), and a teardown of your own product's feature with a metric and a cost (a time you critiqued with evidence). Keep every company claim sourced and dated.

## 15. Key takeaways and further reading

### Key takeaways

1. A teardown is judged by how you separate what you know from what you think: label company facts Verified (with a source type and date) or Reconstructed, and your critique as observation, inference or opinion.
2. State the product's purpose as an assumption first, explain why each strength works, rank issues by impact and fixability, and propose one change with a metric, a guardrail and a cost.
3. Prefer primary sources (filings, shareholder letters, newsrooms, peer-reviewed papers) over commentary, and distinguish relative from absolute figures; "+70%" says nothing without a base.
4. Patterns recur across products (an engineered first moment, defaults that carry the product, a rhythm that builds a habit, local context that needs a different model, error costs that set thresholds, tiers as design, bold changes needing reversibility); use them as questions to ask a new product, with their failure conditions.
5. Use the library to practice, not to recite: form your own view from your own use, and say plainly what you could not verify.

### Further reading

- Peer-reviewed paper: Marco Perez and colleagues, "Large-Scale Assessment of a Smartwatch to Identify Atrial Fibrillation," *New England Journal of Medicine* (2019). The source for TD-C28-07 `[V: Perez et al.]`.
- Netflix quarterly shareholder letters for 2022 and 2023, filed with the US Securities and Exchange Commission. Sources for TD-C28-03 `[V: Netflix shareholder letters]`.
- Duolingo's registration statement (2021) and annual report for fiscal 2024 filed with the US Securities and Exchange Commission, and its investor site. Sources for TD-C28-01 `[V: Duolingo S-1 and annual report]`.
- Apple's newsroom announcements of September and December 2016 on AirPods. Sources for TD-C28-06 `[V: Apple newsroom, AirPods]`.
- The Signal Foundation's April 2016 post on WhatsApp's encryption rollout, and press reports on its spam results. Sources for TD-C28-05 `[V: Signal Foundation, April 2016]`.
- Airbnb's 2022 and 2023 Summer Release posts and media guide, Skift's September 2025 article on the end of category search, an Airbnb Community reply, and Enterpret's 2023 blog post. Sources for CS-C28-02 (confirmed in October 2026).
- Chapter C11 of this book on the critique and teardown method, and the product teardowns you write yourself.
