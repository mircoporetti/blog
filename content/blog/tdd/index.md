---
title: TDD Who?
date: "2022-09-18T23:01:12.284Z"
description: "What's Test Driven Development and Why every developer should experience it?"
---

## Test Driven Development

TDD is an approach for driving development by testing with the goal of a clean and simple design. While practicing TDD
the focus is on the requirements. It’s about development and design, not simply testing or coverage.

That's a crucial point that in my opinion makes Test Driven Development   different and more valuable than generic
"Test First": TDD is an iterative process but also a mental different way to think about the problems,
based on needs not on already thought solutions.

Every iteration could be described as follows:

- RED: Write a test that fails
- GREEN: Create the minimum code to make it pass
- REFACTOR: Remove duplication and improve your code without changing its behavior

![Figure 1](tdd.jpg "TDD cycle")

#### How tests should be?
Some popular characters (one for all Kent Beck, author of TDD by Example) expressed some rules about how tests should be:

- Express intent
- Easy to understand
- Focus on business requirements
- Tests not coupled with production code
- One problem for every broken test


## My little journey with TDD

My first meeting with Test Driven Development was in 2017 when I started getting interested in the topic after reading
some articles and following some conferences. Only later did I read the book "TDD by example" by Kent Beck.

I started putting it into practice at work 4 years ago, thanks also to some more experienced colleagues and
to our constant desire to grow together.

I think that practicing TDD is a process that requires continuous practical experience and I feel that every
day I can still learn something about that.

#### Why I like it

Why do I like Test Driven Development?
Here is some reason:

###### Incremental and small iterations
TDD lets the design emerge exploring a problem iteratively and incrementally. That's an important aspect that helps me
in tackling the problems without overthinking the final solution especially when they are complex.
Furthermore, it helps me focus on a single problem at a time.

###### Simplicity and focus on requirements

It takes me on the right track to build a simpler design, write more maintainable code and more essential
and useful tests that match the business requirements without necessarily being interested in how every single component
is built internally.

About this point, just comes to my mind a task that we did on a project.
We noticed an improper use of domain objects. They were used simply as data containers and the critical domain
logic was implemented into many services that used those data, forgetting about object-oriented essence.
For getting rid of such anemic usage of objects we decided to refactor a bit and as a first step, we wrote some tests for the
existing use-cases, inferring the requirements from the existing code and focusing on the input and the output of the problem
without caring about every internal class.
In this way, the first tests became our requirements, and they were our source of feedback for a safe refactoring of the domain logic.
Proceeding with the refactoring we added other tests that were useful also for the new design of the code that, of course, can change based on personal experience and knowledge,
but we were sure that in any case, it couldn't be that bad! :smile:

What does TDD have to do with it?
We did it as we would do it without having an existing code. We did it as we would do it with a Test Driven approach,
and that helped a lot!

###### Different mindset

Dealing with legacy code is common. It happened sometimes that I wanted to write tests for it and while doing that
there was some difficulty due to the existing design of the code. That's usually a hint that something has to be changed.
An example of a recurrent scenario in my experience is when I met a poor separation between the infrastructure (e.g. persistence)
and the domain that was evidenced by an impossibility in writing simple, clear, and "not frustrating" tests.
That lack of separation of responsibility resulted in tests that were long and full of mocks. So what was it telling me?

REFACTOOOOR!

![Figure 2](hammer.jpg "Refactoring")

TDD is a tool that gives us feedback on the quality of the design.
The example above was not directly related to it but having some experience with this approach can change your way of thinking
and it can be exploited for recognizing smells when you need to write tests on an existing codebase because if the design
is poor the tests will be difficult to write (and vice versa). If that happens it will be the right moment to refactor!
That's super cool but pay attention: if you don't do it from that moment you become an accomplice. :wink:

#### Mocks
Mocks are a powerful tool used for controlling the behavior of a component inside your test. They are helpful in some
situations but they can be abused and become a smell. When the test is full of mocks probably the design is poor. If I
think about the reasons I recognize mainly 2 scenarios:

- Even if you practice TDD you can fall into the trap of thinking about the structure of the modules before or while
  writing the test. This is a common mistake and I think that 99% of devs experience it at some point, especially at the
  start of the learning process;
- Mocks are often a way to be able to write tests on an already existing poor design without spending time on refactoring.
  If you focus on requirements and not on classes when writing tests, likely you will tend to mock less.

I often mock boundaries if needed, mainly when I'm specifically testing the domain of the problem which requires
interactions with the infrastructure.

#### Outside in vs Inside out
There is an endless debate on starting from the outside or the inside when you start your TDD cycle.

![Figure 3](gladiators.jpg "Outside in vs Inside out")

Kent Beck wrote something like this: "Choose a test that teaches you something valuable and that you can write".
A good idea could be to start from the most obscure and valuable part of the problem because it's probably the one
that will have more value for solving your problem.
That’s not a fixed rule but a general suggestion and the right approach can be chosen depending on the situation.

"...yes yes but what about you in practice?"

I usually go Outside In, and then I jump into more detailed tests based on the complexity of the problem but
it happens that I start from inside if I recognize that there is a clear aspect of the problem that is more complex.

## Final thoughts

TDD helps you in building a simpler design and more maintainable code. It doesn't mean that being driven by the tests carries
you to a specific design.
In the end, YOU are responsible for a better design but this approach gives you a natural push towards the right path and what will
emerge at the end will be for sure something better, cleaner, SOLID, and so on :smile:

Even if you won't use TDD as your “go-to” approach, having some experience with it will help you in making better
decisions when you have to do that in your daily work. It will help you in recognizing smells and it will change your way
of dealing with a problem during development.

---

#### References:
TDD by Example , XP Explained, [When to Mock](https://blog.cleancoder.com/uncle-bob/2014/05/10/WhenToMock.html),
[TDD Harms Architecture](https://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html#:~:text=Yes!,architecture%20%E2%80%93%20TDD%20or%20no%20TDD)

###### Credits:
<span style="font-size:0.7em;">[Image by macrovector from Freepik](https://de.freepik.com/vektoren-kostenlos/zwei-bewaffnete-gladiatoren-die-cartoon-kompositionsvektorillustration-bekaempfen_23579801.htm#query=rome%20war&position=7&from_view=search)</span>  
<span style="font-size:0.7em;">[Image by pch.vector from Freepik](https://www.freepik.com/free-vector/angry-business-person-breaking-office-computer-with-big-hammer_20827534.htm#query=destroy&position=0&from_view=search)</span>