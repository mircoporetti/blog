---
title: "Lessons Learned and Questionable Opinions: A Retrospective on 10 Years of Software Engineering"
date: "2024-12-01T19:09:12.284Z"
description: "As I'm approaching a new decade of my career in Software Engineering, I've been reflecting on the lessons 
learned and the (debatable) opinions I've formed over the years."
---

A new decade of my journey in Software Engineering is around the corner, and I've been reflecting on the opinions I've formed over the years.
I recognize I changed my ideas on some topics, thanks to the experiences I lived and the people I had the pleasure to work with, while others have remained the same.

As I didn't track them over time, I decided to start now, so I can look back in the future and see how my thoughts and convictions evolved. As usual,
it could be a nice way to collect feedback, also useful for my growth.

Here’s a collection of technical and non-technical opinions and/or lessons learned presented as brief pills, to give an overview of the idea rather than an exhaustive analysis.

## Trending solutions are not always the best

When we are fresh and enthusiastic about new things, especially when we are new in the field and hungry for knowledge, we tend to think that the latest and coolest released tool,
approach, or whatever is the best solution for every problem we need to solve. It's a common mistake I made in the past, especially at the start of my career.

The best solution is not given by the stream or by its age, but by the specific context in which it has to be applied. The focus should always be on the problem to solve,
not on the solution which makes your eyes shine.

Let's give some examples of this.

### Microservices

Microservices are the perfect example. They are a great architectural approach for many situations, and it's often adopted as a standard,
but it's not the best solution for all of them. As with most choices, it has its pros and cons. For mentioning some of them without going too deep into the topic:

##### It's great for:
- scalability (even if it's not the only way to scale)
- splitting the responsibilities of the system based on the contexts...
- ...and between different teams (social problem)
- using different technologies for different domains

##### and it's "meh" for:
- overhead
- complexity
- costs
- other distributed systems challenges...

Do you really need it? Or even better, do you really need it now? In this case, as in many situations, going iteratively could be a good approach.
For example, initially, you could achieve many of the benefits of a Microservices architecture by building a Monolith (moonoooliiith.. mooonoliiith...!!!),
just applying good principles which will make it very easy to extract a Microservice if really needed later.

### Mapping libraries

Everyone who ever worked with Rest APIs had to map the response of the HTTP call to some defined model. In the past years,
I saw teams adopting libraries that automatically map the response to the models by using external libraries as standard, like XML mappers, JSON Schemas mappers, and so on.
They are very useful for simple mappings, but personally, I found in other occasions they made myself and my colleagues waste more time than we would have spent by implementing the mapping logic ourselves through the code.
It's fair to mention that the time wasted for writing new schemas and mappers was reduced after time of using the library (because of the learning curve) but in the end,
it was still more difficult to debug and maintain the code, and sometimes it led to some frustration.

### ORMs

Quite similarly, I believe ORMs deserve a mention. Don't get me wrong here, ORMs are great tools, and they can save a lot of time, especially in the early stages of a project, but not only.
They add an abstraction layer between the database and the application, making the code easier to read, generally faster to write for small projects or small parts of the projects, and not too coupled with the database used.
Unfortunately, they also have some cons, like performance, lack of control in more complex scenarios, and a learning curve that could be problematic when you need to manage specific situations.

As with the previous 2 examples, the moral is: consider the context and the problem you have to solve, and design your solution in a way that allows you to change it easily without too much pain later if needed.

## Principles and conventions: nothing is absolute!

Most of us know how we feel after reading a popular book, article, watching a video, or any other source, maybe published by an illustrious professional,
containing many enlightening pieces of advice. We feel like we found the Holy Grail, and we want to apply everything we learned. We could consider this macro area as the twin of the previous one, but less focused on tools.

Here are some examples:

### Follow things ByTheBook?

Think about a book you read, which focuses on a specific topic, let's say on something related to architecture (but not necessarily). You read it, you found it amazing, everything makes a lot of sense,
and you look forward to applying everything starting the next day. Soon you realize that the context where you are trying to apply it by the book makes you feel like you are trying to use a sledgehammer to crack a nut.

So here comes the question: is it always a good idea to apply things exactly how they are described? The very short answer is: no. The most important thing is to understand the principles behind the concepts described.
Sticking to the exact/perfect/ideal solution could lead to a lot of problems. Instead, it's better to stay open to variants which fit better your context.

### Design patterns

Design Patterns, oh dear Design patterns! You are so useful when we have to solve known problems, but how many times have you been implemented straight without going with a simpler implementation first,
and then the code became unnecessarily more difficult to read and maintain? The best way to understand if it's worth introducing them is often the same: iterative approach. TDD can help a lot with it.

### Everything generic since the beginning

In these years I've frequently seen this tendency: discussions between colleagues even before starting to work on the first version of a solution, or during the first code reviews,
about how to make it more generic because "MAYBE, who knows in the future...".

What about thinking the future when the future comes? To be clear, sometimes it's a good idea to anticipate some aspects, not only technically but first of all from a business perspective,
and being prepared for the future especially when you have many hints that it will come. However, on multiple occasions, it happens that being too generic leads to more pain than advantages,
because at the time of introducing the future change, the team discovers that the cases have some differences, sometimes even important. And what about the awesome generic solution?

To the bin!

One of the recurrent buzzwords is system scalability, but being generic since the beginning is not always the best choice, and it doesn't mean to be scalable.
The solution and the system will be scalable if they are designed to be open for new changes without frustration and too much cost.

## Organization and collaboration

### "Agile" != Scrum

In the modern IT industry, the right to use the term "Agile" is often claimed simply by using one of the popular frameworks like [Scrum](https://www.scrum.org/).
Scrum is just one of the frameworks that can be used to facilitate the application of Agile principles, but it's not the only one, and it's not enough.

In fact, the adoption of Scrum doesn't guarantee the values of the [Manifesto for Agile Software Development](https://agilemanifesto.org/) are embraced.
For example, if the team uses the board as the framework prescribes, organizes in Sprints with related ceremonies, but people don't communicate directly and overuse scheduled meetings,
don't interact with the customers, give priority to "tools over individuals", they are not open to changes on already defined plans, 
and most importantly they don't deliver working software frequently (Continuous delivery of valuable software), the framework becomes only another tool which has not so much to do with the Agile original idea.

I mention the "Agile original idea" not casually, because the manifesto was created many years ago and I recognize that the industry evolved a lot since then along with the organizational challenges.
While the seed concept was more focused on Software Development as the name of the manifesto also suggests, and we should always keep it in mind, it was slowly labeled to the whole company culture.
I believe it can be seen as a good thing, meaning that what the signatories wrote was so powerful to change also the way of thinking of the whole organization, 
but at the same time it could be a facade to be more appealing and to showcase the use of specific frameworks, without truly embracing the manifesto core idea.

Vice versa, it's possible to apply Agile principles without using Scrum (or Kanban or whatever).

As a last thought, Scrum is very nice but even for it, [Follow things ByTheBook?](#follow-things-bythebook) is valid.

### Meet all the time don't generate effective communication

As already mentioned in the previous paragraph, meetings are often overused. Sometimes because the framework used requires it (and it is not questioned and adapted after working together for a while),
sometimes because people try to build a culture focused on the frequency of the scheduled communication, sometimes due to other specific team dynamics.
Even though it is usually done with good intentions, in some situations it could lead to the opposite effect: people join even if they are not directly interested
in the topic just because the event is scheduled, thereby losing time that could be spent more productively, or the meeting itself becomes a monologue
or a place to talk about something that doesn't require such a time slot (ergo people's precious time).

Effective communication doesn't mean frequent in-person scheduled appointments, but it means being clear and focused on the goal of the conversation,
whether written or spoken. Many times it could be worth considering async communication, preparing documentation or a written space for discussions,
and then organizing a meeting only if the need arises.

Additionally, in some occasions, the team found it very useful to schedule recurrent meetings in a way that does not interrupt the flow of work.

### Working on things you don't own: respect the owners choices

## Tests, my precious!

### Code coverage is not a measure of quality and shouldn't be a goal

### You don't need to test every single function

## Tools are not so important (title ????) 
