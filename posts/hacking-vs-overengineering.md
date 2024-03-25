---
title: "Hack or Overengineer?"
description: "Laziness being a virtue is a common theme in software development. I think it's misguided."
date: "2024-03-25"
---

During my software engineering career, I have noticed a clear distinction between developers who prefer to hack things together and those who favour overengineering.

I have gone through different phases of this spectrum myself, with the frustrations of one usually making me overcompensate and becoming the other. I now believe that I have settled on a balanced approach to software development.

The main difference between these two types of developers lies in their beliefs and where they choose to focus their energy.

The hacking type prioritizes delivering value and usually doesn't place much importance on the codebase itself, seeing the code as a means to an end, something that you use to accomplish a goal. While this approach is great for delivering value quickly, it can lead to code that is buggy and unmaintainable, causing long-term issues that are very costly to resolve.

On the other hand, the overengineering type prioritizes code quality above all else, sometimes forgetting that code serves a purpose. They enjoy building functional and elegant systems that are easy to maintain. While this approach is great for delivering scalable and maintainable solutions, it can slow down the development process, reducing speed to market and the ability to adapt to feedback from users.

I wouldn't say that one neccessarily right and the other one wrong. But as with everything, there are trade-offs, and it all depends on the timing and context.

I personally think a good engineer is someone who can quickly deliver high quality software by mixing both approaches when they make sense.

So, if doing both is good, how do we choose when to hack things together or overengineer?

Having an understanding of the development life-cycle, the project's end goal, target audience, and intended lifespan provides essential context for making this decision.

Early-stage projects that are looking for funding or want to test hypotheses quickly, really benefit from hacking things together. However, it is important to know when it's the right time to transition into a more engineered approach if the product starts growing in usage.

Established projects on the other hand, generally favour a more engineered approach to manage complexity and scale, but at the same time, it is important to innovate, which often involves fast iterations and hacking. The balance here would be to couple these fast iterations with dedicated time for stabilizing new functionality, via refactoring, which is crucial for long term sustainability.

At the functionality level, different aspects of the project might require different approaches. The core functionalities that are critical to the business, high risk areas like security or data privacy, deserve a more engineered approach.

Business pressures, such as limited budget and time should also greatly influence your to prioritize the short term, as the survival of the business might depend on your ability to deliver fast, and engineering for a future that might never come is wasted effort.

At the team level, different people have different abilities and preferences, recognizing this and using it to everyone's advantage is also important, given the above, you can assign people who enjoy overengineering to work on the core functionality and the hacking types to do rapid prototyping.

Ultimately, developers and engineering leaders should remain fluid by identifying each methodology's strengths and weaknesses and choosing accordingly depending on the context.
