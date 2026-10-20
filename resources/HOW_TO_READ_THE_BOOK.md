# How to read The APM Interview Book

*A guide so simple that a six-year-old could follow it. Written 2026-10-15 for version 1.0 (October 2026). Every fact below was checked against the real files. Next to each step you will see **Where this comes from**, which names the file to open if you want to check it yourself.*

---

## 1. The big idea: the book is a house

- The **house** is one file: `book.md`.
- The house has **11 floors**. A floor is called a **Part** (Part I to Part XI).
- Each floor has **rooms**. A room is a **chapter**. There are **35 chapters**, named C01 to C34 and C37.
- Three room numbers are **locked on purpose**: C35, C36 and C38. They are kept for a later edition, so the numbers jump from C34 to C37. That is not a mistake.
- Every room is built the **same way**: **15 shelves**, always in the same order.
- Behind the last floor is a **storeroom**: the **glossary** (a word list) and **Appendices A to H** (extra material).

**Where this comes from:** `book.md`, the pages "About this book" and "Contents".

---

## 2. Which files do you need, and which can you ignore?

### Start with these two
| File | What it is |
|---|---|
| `book.md` (inside `apm_book_book_2026-10-15.zip`) | The whole book. If you only open one file, open this one. |
| `RELEASE_NOTES_v1.0.md` | One page: what you have, what you do not have, and the honest limits. |

### Open these when you need them
| File | Open it when you want to... |
|---|---|
| `INDEX_COMPREHENSIVE.md` | find anything: it lists every chapter, section, question and exercise |
| `BOOK_CONTENTS_MAP.md` | see what is in the book and what is not |
| `04_glossary.md` | look up a word (the same list is inside `book.md`) |
| `06_frameworks_registry.md` | see all 249 frameworks in one table (Appendix D in the book) |
| `07_interview_bank.md` | practise with all 298 interview questions in one place (Appendix E) |
| `01_competency_matrix.md` | see the skills an interviewer looks for (Appendix C) |
| `VOLUME2_BACKLOG_LIST.md` | see what is **not** in this book yet |
| `17_gate_g_report.md` | see the proof that the build was checked (10 checks, all passed) |
| `09b_verification_ledger.md` | see where a fact came from: sources, dates, what was checked |

### Use these only to change or repair the book
| File or folder | What it is for |
|---|---|
| `apm_book_chapters_2026-10-15.zip`, then `chapters/` | The real source: each chapter is cut into three pieces (a, b, c). To change the book you change these. |
| `README_BUILD.md` | The steps to rebuild the book after a change |
| `tools/` | The little programs that build and check everything |
| `README_RECOVERY.md`, `MANIFEST.sha256`, `recovery_kit_2026-10-15_v1.0.zip` | To put the whole working folder back together, and to check that no file has changed |

### Ignore these (unless you are checking the builder's homework)
- `merged/`: the three pieces of each chapter glued together. It is a **copy** with the same words as the book, used by the build and the checks. Reading it gives you nothing new.
- `followups/`, `evidence/`, `evidence_pack/`, `evidence_pack_2/`, `evidence_pack_3/`: working notes and proof folders.
- `archive/`, `superseded/`: old versions kept for safety.
- `counter.md`, `counter_2.md`: old reviews of old plans.
- `00_*`, `00a` to `00h`, `02_*`, `03_style_guide.md`, `05_tracker.md`, `08`, `09a`, `09c`, `09e` to `09g`, `10_*`, `11_audit_log.md`, `12_work_journal.md`, `13_drift_register.md`, `14_aim_charter.md`, `15`, `16_todo.md`, `17_gate_f_report.md`, `19`, `20`, `RESUME_PROMPT.md`, `README_GLOBAL.md`: the builder's diary, plans and reports.

**Where this comes from:** the first line of each file; the zip contents are listed in `evidence/gate_g_package.md`.

---

## 3. How to read the book: seven steps

| Step | Do this | Where this comes from |
|---|---|---|
| 1 | Open `book.md`. Read the first page: the title, "Volume 1", "Version 1.0, October 2026". | `book.md` top |
| 2 | Read **"About this book"**. It tells you who the book is for (someone preparing for an **associate product manager (APM)** interview, at APM level only) and how it is built. | `book.md`, "About this book" |
| 3 | Open the **Contents**. Every Part and chapter is a link. Click or search for its name, for example `c13`. | `book.md`, "Contents" |
| 4 | Choose a **track**. **Core path, 21 chapters** (everyone): C01, C02, C03, C05, C06, C07, C08, C12, C13, C14, C15, C16, C17, C18, C21, C24, C25, C31, C32, C33, C34. **Deep dives, 8 chapters** (pick by your gaps and target company): C04, C09, C10, C11, C19, C20, C22, C23. **Reference library, 5 chapters** (look things up and practise): C26, C27, C28, C29, C30. | `book.md`, "Reading tracks" |
| 5 | Start with **C01**, the room that explains the book. Then follow your track. | Contents |
| 6 | Use **C37** to turn the tracks into a **twelve-month plan**. | `book.md`, chapter C37 |
| 7 | When you meet a word you do not know, click it (a link to the **glossary**) or search the glossary. | `book.md`, "Glossary" |

---

## 4. How to read one chapter: the 15 shelves

Every chapter has the same 15 shelves, in this order. (The smaller chapters, called Tier 2, have the same 15 shelves and are a little shorter: counted in the files, they have on average 7.8 exercises per chapter against 10.1 in the bigger Tier 1 chapters, and the same number of case studies, about two.)

| # | Shelf | In plain words | What you do |
|---|---|---|---|
| 1 | What interviewers test | What the interviewer is really looking for | Read first, so you know the goal |
| 2 | The concept from first principles | The idea explained from the very beginning | Read slowly; this is the lesson |
| 3 | Frameworks | Thinking tools, each on a small **card** (what goes in, what comes out, what it assumes, where it breaks) | Pick the card that fits your question |
| 4 | Answer architecture | How to build an answer step by step, with a clock for about 45 minutes | Copy the steps when you practise |
| 5 | Worked examples | Whole problems solved out loud, step by step | Cover the answer, try it, then compare |
| 6 | Baseline, Strong, Standout | The **same** question answered three ways: okay, good, great | See what makes an answer better |
| 7 | Company lens | What seven companies say or are reported to do | Read the one for your target company |
| 8 | Common mistakes | Each mistake, how to spot it, how to fix it | Check your own answers against it |
| 9 | Mental models applied | Two to four thinking tricks used on this topic | Learn the trick, see it used |
| 10 | Case studies | Stories (real or made up) with a lesson for your interview | Read for the lesson, not the trivia |
| 11 | Interview questions and model answers | Practice questions with a model answer and follow-up questions | Answer yourself first, then read |
| 12 | Exercises | Practice problems with solutions | Do them on paper |
| 13 | Practice protocol | A timed drill and a feedback checklist | Do the drill, write down what you learned |
| 14 | Implementation playbook | What to try at your current job in the next two weeks | Do it; it becomes an interview story |
| 15 | Key takeaways and further reading | At most five things to remember, and books to read next | Read last |

**Where this comes from:** `03_style_guide.md`, section 6 ("Component specifications"); the order is checked for all 35 chapters in `evidence/gate_g_merge.md`.

### The top of a chapter file (only in the chapter pieces and in `merged/`)
Each chapter file starts with a small block between two `---` lines called the **front matter**. It is a name tag for the chapter: its id (`id: C01`), its title, its **tier** (1 or 2), the words it defines, the frameworks and case studies it holds, and its **status**. You never see this block in `book.md`.

---

## 5. How to refer to things: every thing has a name tag

| Name tag looks like | It means | Example |
|---|---|---|
| `C13` | chapter 13 | "see C13" |
| `C13.6` or `C13.6a` | section 6 (or 6a) of chapter 13 | "see C13.6a" |
| `Worked example 3` | the third worked example **of the chapter you are in** | "Worked example 3 in C07" |
| `FW-C13-01` | **F**rame**w**ork 1 of chapter 13 | "use FW-C13-01" |
| `IQ-C13-04` | **I**nterview **Q**uestion 4 of chapter 13 | "try IQ-C13-04" |
| `EX-C05-03` | **Ex**ercise 3 of chapter 5 | "do EX-C05-03" |
| `CS-C21-02` | **C**ase **S**tudy 2 of chapter 21 | "read CS-C21-02" |
| `TD-C28-01` | **T**ear**d**own 1 of chapter 28 | "see TD-C28-01" |
| `V-065` | record 65 in the **verification log** (Appendix G) | "check V-065" |

**How to find a name tag:** search for it in `book.md` (it is printed in the heading), or use a link: chapters have anchors such as `#c13`; an item has `#iq-c13-04`; the **copy** of the same question in Appendix E has `#app-e-iq-c13-04`, so the two never get mixed up.

**How to write it down (a simple way to quote the book):** *The APM Interview Book, Volume 1, version 1.0 (October 2026), C13.6.* Add the tag if you mean one item: *..., IQ-C13-04.*

**Where this comes from:** the headings in `book.md`; `INDEX_COMPREHENSIVE.md` lists every tag; the anchor names are built by `tools/assemble.py` (checked in `evidence/gate_g_xref.md`: every reference in the book points to something that exists).

---

## 6. How to infer (how to tell a fact from a guess)

The book puts **stickers** on its sentences. The stickers tell you how much to trust them.

| Sticker | What it means | How much to trust it |
|---|---|---|
| `Public` | The company said this itself, in public | High; look for the source note next to it |
| `Inferred` | The author reasoned it out from public facts or from what candidates report. It is **not** inside information | Medium; treat it as a good guess |
| `Illustrative` | **Made up** to teach (also written "(invented)" next to numbers) | None as a fact about a real company; useful as practice |
| `Established` | A thinking tool with a known author or common name | High that the tool exists |
| `Original` | A thinking tool made for this book | It is the author's own |
| Case study: **Verified** | Told from public documents you can name | High |
| Case study: **Reconstructed** | Rebuilt from public information; the guesses are stated | Medium |
| Case study: **Illustrative** | Invented | Practice only |

**The little boxes in square brackets:**
- `[V: ...]` ("V" is for checked): it **names what the sentence was checked against**. Example: `[V: Amazon's Leadership Principles page, amazon.jobs]`.
- `[unverified: candidate-reported]`: people **said** it; the company never confirmed it. Treat it as a rumour with some weight, never as proof. (126 of the 144 "unverified" labels are of this kind.)
- `[as of 2026-10]`: this was true **in October 2026**. **Check it again** before you rely on it (dates, programs, prices, rules change).

### Six steps to check any sentence
| Step | Do this | Where this comes from |
|---|---|---|
| 1 | Find the sticker (`Public`, `Inferred`, ...). | The sentence itself |
| 2 | If there is a `[V: ...]` box, read what it says was checked. | The sentence itself |
| 3 | To see the full record, find it in **Appendix G** (the verification log): it gives what was checked, the result, what was changed in the text, and the source. | `book.md`, Appendix G; the full file is `09b_verification_ledger.md` |
| 4 | If the box says `unverified` or `candidate-reported`, remember: reported, not proved. | The box itself |
| 5 | If it says `[as of 2026-10]`, look it up again today. | The marker itself; the list of dated facts is in C37 |
| 6 | If it is a number marked "(invented)", do not use it as a real number. | The sentence itself |

**What was and was not checked (honest limits):** the sources and dates were **not** checked again for this release; the book tells the reader to check them. The checking that was done was done by the same person who built the book, not by an outside reviewer. No test with real readers has been run. All of this is written in `RELEASE_NOTES_v1.0.md`.

---

## 7. Why do the merged chapters say `status: draft`?

**Short answer:** because every chapter says `draft`, and nobody ever changed that word.

**The longer answer, step by step:**
1. Open any chapter piece, for example `chapters/C01a_apm_role_how_book_works.md`. At the top it says `status: draft`. **All 35** chapters say this.
2. A **merged** file (`merged/C01_...md`) is made by gluing the three pieces together. The build keeps the front matter **once, from piece a**, and changes **no words**. So the merged file simply **repeats** what piece a says.
3. The word `draft` was **written first**, as the starting value. The style guide's template shows `status: draft`, and the master prompt says a chapter can be `draft`, `reviewed` or `final`.
4. The tracker (`05_tracker.md`) also says `draft` for all 35 chapters.
5. I found **no rule** in the project that says when `draft` becomes `reviewed` or `final`, and no step that changed it.
6. The word is **not shown in `book.md`**, so a reader of the book never sees it.

**What `draft` does *not* mean:** it does not mean the book is unfinished or unchecked. Version 1.0 was built and passed all 10 checks of Gate G (`17_gate_g_report.md`), and the builder read 342 items of it in a review (`evidence/review_report.md`). The label is just old.

**What it also does not mean:** it does not mean "reviewed" or "final". The review read a sample, not every item (for example, 156 of 298 questions and 191 of 333 exercises were read in full).

**What to do about it:** nothing is needed to read the book. If you want the label to be true, decide a rule first (for example, "reviewed once the chapter's items have been read in full"). Then the word would have to be changed in the 35 chapter pieces and the tracker, and the book rebuilt. That has **not** been done; it is your decision.

**Where this comes from:** `chapters/C??a_*.md` (front matter), `merged/*.md`, `03_style_guide.md` line 105, `00a_master_prompt.md` line 134, `05_tracker.md` line 48.

---

## 8. Two slips to know about in version 1.0

While writing this guide I found two sentences on the "About this book" page that are out of date. The Contents and the chapters are right; trust them over this page.

1. The page says the book has **"two appendices"**. It has **eight**: Appendices A to H, as the Contents shows.
2. The page says senior-level and career material is "left to a **second volume**". The records say the three chapters C35, C36 and C38 are reserved for the **Second Edition**, and the topics beyond APM level are in the Volume 2 list. The chapters themselves already say "Second Edition".

Neither slip changes any chapter. They are recorded in the drift register and are not fixed yet, because fixing them means rebuilding the book and the packages.

---

## 9. One-page cheat sheet

| I want to... | Open |
|---|---|
| read the book | `book.md` |
| know what I have and its limits | `RELEASE_NOTES_v1.0.md` |
| find a topic fast | `INDEX_COMPREHENSIVE.md`, or search `book.md` |
| practise questions | `07_interview_bank.md` or Appendix E |
| look up a word | `04_glossary.md` or the Glossary in `book.md` |
| check a fact | the `[V: ...]` box, then Appendix G, then `09b_verification_ledger.md` |
| see what is not in the book | `VOLUME2_BACKLOG_LIST.md` |
| change the book | `chapters/` and `README_BUILD.md` |
| put everything back together | `README_RECOVERY.md` |
