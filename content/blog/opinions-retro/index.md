---
title: "Lessons Learned and Questionable Opinions: A Retrospective on 10 Years of Software Engineering"
date: "2025-01-01T19:09:12.284Z"
description: "As I'm approaching a new decade of my career in Software Engineering, I've been reflecting on the lessons 
learned and the (debatable) opinions I've formed over the years."
---

A new decade of my journey in Software Engineering is around the corner, and I've been reflecting on the opinions I've formed over the years.
I recognize that I’ve changed my ideas on some topics, thanks to the experiences I’ve had, the people I’ve had the pleasure 
of working with, and the mistakes we’ve made, while others have remained the same.

As I haven't tracked them over time, I decided to start now so I can look back in the future and see how my thoughts and convictions have evolved. As usual,
it could be a nice way to collect feedback, which will also be useful for my growth.

Here’s a collection of technical and non-technical opinions and lessons learned. 

The main topics are:

- [Trending solutions are not always the best](#trending-solutions-are-not-always-the-best)

- [Principles and conventions: Nothing is Absolute!](#principles-and-conventions-nothing-is-absolute)

- [Organization and collaboration](#organization-and-collaboration)

- [Tests, my precious!](#tests-my-precious)


## Trending solutions are not always the best

When we are fresh and enthusiastic about new things, especially when we are new to the field and hungry for knowledge, we tend to think
that the latest and coolest released tool, approach or whatever, is the best solution for every problem we need to solve.
It's definitely a mistake I made in the past, especially at the start of my career. It can happen also in later stages 
if we get carried away by enthusiasm and trends.

The best solution is not determined by its popularity or age, but by the specific context in which it has to be applied. 
The focus should always be on the problem to solve, not on the solution which makes your eyes shine.

Let's give some examples of this.

#### Microservices

Microservices are the perfect example. They are a great architectural approach for many situations, and it's often adopted as a standard,
but they're not the best solution for all of them. As with most choices, it has its pros and cons. To mention few of them without going too deep into the topic:

**It's great for:**
- scalability (even though it’s not the only way to scale)
- splitting the responsibilities of the system based on the contexts...
- ...and between different teams (a social problem)
- using different technologies for different domains

**and it's "meh" for:**
- overhead
- complexity
- costs
- other distributed system challenges...

Do you really need it? Or even better, do you really need it now? In this case, as in many situations, going iteratively could be a good approach.
For example, initially, you could achieve many of the benefits of a Microservices architecture by building a Monolith (moo-noo-lith… mooo-nooo-lith…!!! :fearful:),
just applying good principles to make it very easy to extract a Microservice if really needed later.

#### Mapping libraries

Everyone who has ever worked with REST APIs had to map the response of an HTTP call to some defined model. 
In the past years, I saw teams adopting libraries that automatically map responses to models as a standard, using external tools,
like XML mappers, JSON Schemas mappers, and so on. They are very useful for simple mappings, but personally,
I’ve found that in some cases, they caused myself and my colleagues to waste more time than we would have spent by implementing the mapping logic ourselves through the code.

It's fair to mention that the time wasted for writing new schemas and mappers was reduced as we became more familiar with the library 
(because of the learning curve).However, it was still more difficult to debug and maintain the code, and sometimes it led to some frustration :dizzy_face:.

#### ORMs

Similarly, I believe ORMs deserve a mention. Don't get me wrong, ORMs are great tools, and they can save a lot of time, especially in the early stages of a project,
but not only then. They add an abstraction layer between the database and the application, making the code easier to read,
generally faster to write for small projects or small parts of the projects, and less tightly coupled to the database being used.
Unfortunately, ORMs also have some drawbacks, such as performance issues, a lack of control in more complex scenarios, 
and a learning curve that can be challenging when managing specific situations.

As with the previous 2 examples, the moral is: consider the context and the problem you have to solve,
and design your solution in a way that allows for easy changes later without too much pain if needed.

## Principles and conventions: Nothing is Absolute!

Most of us know how we feel after reading a popular book, article, watching a video, or consuming advice from any other source, perhaps published by a renowned professional.
These sources often contain many enlightening pieces of advice that make us feel like we’ve found the Holy Grail, inspiring us to apply everything we’ve learned immediately.
This topic could be considered the twin of the previous one, but it focuses less on tools and more on overarching principles.

Here are some examples:

#### Follow things By The Book?

Think about a book you’ve read that focuses on a specific topic, perhaps something related to architecture (but not necessarily).
You found it amazing, everything made a lot of sense,
and you couldn’t wait to start applying it all the next day. But soon, you realize the context where you’re trying to apply it
"by the book" makes you feel like you’re using a sledgehammer to crack a nut.

For example, as a fan of Clean/Hexagonal Architecture, I initially tended to adhere strictly to certain aspects as they were written.
A simple case, to illustrate, was the mapping between layers, which sometimes felt overkill for specific situations and even led 
to performance issues. Over time, I realized the importance of finding compromises without breaking the core principles 
of the architecture. For instance, returning a domain object as an API response, if it was exactly the same as the response model,
is entirely legitimate from a dependencies perspective.

So, here comes the question: is it always a good idea to apply things exactly as they are described? The very short answer is: no.
The most important thing is to understand the principles behind the concepts. Sticking rigidly to the exact, perfect, or ideal solution can lead to unnecessary problems.
Instead, it’s better to stay open to variations that better suit your context.

#### Design patterns

Design patterns, oh, dear design patterns! You are so useful when solving known problems, but how many times have 
you been implemented directly without first considering a simpler solution, only to make the code unnecessarily harder to read and maintain?

The best way to decide whether they’re worth introducing is often the same: take an iterative approach. [TDD](https://tidyfirst.substack.com/p/canon-tdd)
can be incredibly helpful in this process.

#### Everything generic since the beginning

Over the years, I’ve frequently noticed this tendency: discussions among colleagues, even before starting to work on the first version of 
a solution or during the initial code reviews, about how to make it more generic because "MAYBE, who knows, in the future…".

But what about addressing the future when the future comes? To be clear, sometimes it’s a good idea to anticipate certain 
aspects, not only technically but also, and more importantly, from a business perspective, especially when there are strong 
indications that the future need will arise. 
However, in many cases, trying to be too generic early on leads to more pain than benefits.
When the future change finally arrives, the team often discovers that the scenarios differ, sometimes significantly.
And what happens to the carefully crafted generic solution?

To the bin!

One of the buzzwords we often hear is system scalability, but making things generic from the beginning isn’t always the best choice, nor does 
it necessarily mean the system will be scalable. A solution or system becomes scalable when it’s designed to accommodate future changes with minimal frustration and cost.

## Organization and collaboration

#### "Agile" ≠ Scrum

In the modern IT industry, the term "Agile" is often claimed simply by using one of the popular frameworks, such as [Scrum](https://www.scrum.org/).
Scrum is just one of the frameworks that can facilitate the application of Agile principles, but it’s neither the only one nor sufficient on its own.

In fact, adopting Scrum doesn’t guarantee that the values of the [Manifesto for Agile Software Development](https://agilemanifesto.org/) are embraced.
For example, if a team uses the board as the framework prescribes, organizes work in Sprints with related ceremonies, but fails to communicate directly,
overuses scheduled meetings, doesn’t interact with customers, prioritizes "tools over individuals," resists changes to predefined plans,
or, most importantly, doesn’t deliver working software frequently (continuous delivery of valuable software),
then the framework becomes just another tool disconnected from Agile’s original intent.

I mention Agile’s "original idea" deliberately, because the manifesto was created many years ago, and I recognize that the industry has evolved significantly since then, along with its organizational challenges.
While the manifesto’s original focus was more on software development (as its title suggests and as we should always keep in mind), it has gradually been extended to encompass entire company cultures.
I believe this can be seen as a positive thing, demonstrating how powerful the manifesto’s principles are in shaping organizational thinking.
However, it can also become a facade used to appear more appealing or to showcase specific frameworks without truly embracing the manifesto’s core ideas.

On the contrary, it’s entirely possible to apply Agile principles without using Scrum (or Kanban, or any other framework).

As a final thought, Scrum is a great framework, but even for it, the idea of [Follow things By The Book?](#follow-things-by-the-book) remains valid.

#### Meeting All the Time Doesn’t Generate Effective Communication

As mentioned in the previous paragraph, meetings are often overused. Sometimes this happens because the framework requires them
(and they aren’t questioned or adapted after the team has worked together for a while).
Other times, it’s due to a desire to build a culture focused on frequent communication rather than communication when needed,
or because of other specific team dynamics.

Even though this is usually done with good intentions, it can sometimes have the opposite effect: people join meetings even
if they’re not directly involved or interested, simply because the event is scheduled.
As a result, time that could have been spent more productively is lost. Additionally, meetings can become monologues
or discussions about topics that don’t justify the time spent on them (people's precious time).
Often, these issues could be resolved with just a few messages on Slack or similar tools.

Effective communication doesn’t mean frequent, scheduled, in-person meetings. Instead, it means being clear and focused on the goal of the conversation,
whether written or spoken.
In many cases, asynchronous communication is worth considering, by preparing documentation or creating a written space for discussions,
and then organizing a meeting only when it’s truly needed.
In some instances, teams have also found it useful to schedule recurring meetings in a way that minimizes interruptions to the flow of work,
for example, by holding them at the start or end of the working day.

**Bonus Content:** As a small provocation, and as proof that adapting frameworks and embracing asynchronous communication is both feasible and effective,
even when challenging well-established practices,
I recommend reading about Marco Polita’s real-world experience as a team lead. He describes switching from the classic Daily Stand-up meeting to an asynchronous Daily Journal:

- [Why remote Daily Sucks - Try remote Journal](https://www.marcopolita.me/blog/2022/09/02/Daily-Journal.html)
- [Remote Journal - A year after](https://www.marcopolita.me/blog/2023/02/13/remote-journal_follow-up.html).

#### Working on Things You Don't Own: Respect the Owner's Choices

"Hey friend, I opened a PR on your repo, and I saw your review comment saying to align with your team standard, but honestly,
I think that’s not the way to go…"

Sound familiar?

Everyone has their own values, principles, and standards. As humans, we often think our way is the best because it’s backed by our experience,
effort, research, and thoughtful debates.

It’s completely fair and valuable to discuss the choices made by others. This applies in life in general,
within your own team, and especially when you’re working on something you don’t own. However, these situations can sometimes
lead to friction or wasted time. Code Reviews are a great forum for these discussions. They provide an excellent opportunity to learn from others and bring new ideas to light.

Some things to keep in mind:

- **Other people’s choices are often made the same way yours were:** after many discussions and experimentation -> Be open to understanding their reasoning, and consider changing your idea if it makes sense.
- **Even if your perspective is objectively better, it might not always be worth pursuing** -> Standards can be difficult to redefine and reapply across an existing codebase, and the trade-off between effort, cost, and benefit might not justify the change.
- **Not everyone is open to discussions at all times** -> Communicate your intentions, postpone the discussion to a better time, or step back and let it go if the change isn’t so significant.

Finding the right balance is key. Bring your ideas to the table, gradually advocate for them when they’re meaningful,
and know when to let go if the return isn’t worth the investment.

## Tests, my precious!

Tests are a vital part of the software development process. They are often sacrificed in favor of short-term delivery timelines,
but what’s sometimes overlooked is the time, frustration, and costs they save in the long run often far outweighing the time spent implementing them.

I couldn’t resist writing at least two points about it :innocent:

#### You Don’t Need to Test Every Single Function

There’s a common misconception about testing: when we talk about it, we often think of unit tests and end up testing every single function.
This happens when developers lose focus on the real goal of tests: ensuring that business requirements are met and that the code behaves as expected.
When attention shifts away from this purpose and testing becomes a mechanical process of covering every function, it can make the codebase harder to change without delivering much value.
This is because tests and production code become overly coupled.

Additionally, this approach can be counterproductive to robustness. Tests written this way often become meaningless, filled with excessive mocks, and less focused on verifying actual requirements.

Test-Driven Development (TDD) can help shift this mindset.
I’ve written more about it in my previous article: [TDD Who?](/tdd/).

Next up: an honorable mention of Code Coverage.

#### Code Coverage Is Not a Measure of Quality and Shouldn’t Be the Goal

Code coverage is a useful metric. It’s particularly helpful when a team is transitioning to testing in a codebase where tests are absent, or when members are new to testing.
It also provides a rough indication of whether any tests were forgotten during pipeline runs, helping to anticipate issues before delivering features.
Finally, it can offer a high-level overview of the codebase’s state.

However, it’s critical to understand that code coverage is a quantity metric, not a quality metric, and it must be treated as such.
Writing tests solely to increase coverage isn’t meaningful and can lead to the pitfalls mentioned earlier.
For example, I’ve sometimes seen codebases with high coverage percentages, but upon closer inspection, 
the tests didn’t verify anything particularly useful or relevant to the actual requirements.

In my experience, after writing integration tests for a use case, tools often fail to understand the testing approach and suggest covering unnecessary parts with unit tests.
And guess what? Red pipeline :red_circle:. So, how do you fix it? You either write useless tests or hack your way around it with annotations or configurations.
This happens because the tools can’t determine whether the tests are meaningful or understand the context and reasoning behind them.
(Who knows what AI might do for us in the future? :robot:)

So, what’s the takeaway?
I believe code coverage can be useful but shouldn’t be the goal. It should instead be the natural consequence of writing tests
with a requirement-first mindset.
While the percentage output can provide insights, it must be interpreted cautiously to avoid slowing down progress without
real benefits or pushing teams in the wrong direction.

#### Duplication in tests

It is a common best practice to remove duplication in the codebase. However, this approach may not always provide significant
value in certain cases. In my experience, this is particularly true for tests. While reducing duplication is generally beneficial,
being overly focused on it can sometimes do more harm than good.

For example, it may be better to retain some variable duplication if it makes the assertions more meaningful.
Similarly, avoiding the widespread use of parameterized tests can be advantageous if they make the tests harder to understand and maintain.

Tests should be easy to read and modify as the system evolves. They should also serve as clear documentation of the provided features.
If the tests do not quickly and effectively communicate the functionalities, they can be improved or simplified. Tests should clearly express their intent and reflect the requirements they are verifying.

Finding a balance between reducing duplication and maintaining readability is crucial in this context.

## Conclusion
The main idea was to take a snapshot of some of my thoughts. I'm quite sure that some of them will change or at least 
will evolve a bit.
I'm curious to look back at this article in the future and see how my opinions have developed.

Feel free to contact me if you like to leave your opinion or discuss any of the topics.

Cheers!