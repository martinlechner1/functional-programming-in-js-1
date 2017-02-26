# Functional Programming in Javascript
## Stand up game
* Who of you knows what a pure function is?
* Who of you knows what currying is?
* Who of you knows what functional composition is?
## What is Functional Programming?
* Paradigm like OOP
* Treats comutation like evaluation of mathematical functions
* Avoids mutable data
* By no means is a silver bullet for all problems
* Example 0 - Imperative vs functional
## First class functions
* functions can be passed, returned, called
* example 1
* Higher order functions
  - Functions which take functions as arguments or return functions
  - Example: Array.prototype.map <- pass in function as behavior
## Pure functions
* pure = without any oberservable side-effect and deterministic
* example regarding mutation
### Side effects
* IO (Filesystem, Database, ...)
* DOM API
* rest calls, websockets etc.
* Mutation of inputs
* ...
### Advantages
* Memoization -> memoize.js
* Testing
* Reusable
* Dependencies explicit
* Easy to reason about
* Referential Transparancy (<- Replace function call by its value)
* Parallelisation
## Currying
* Functions are callable with less arguments than expected -> Returns function with the rest of the arguments
* example
* Position data as last arguments to ease composition
## Composition
* Types must match: CoffeeBean => CoffeePowder, CoffeePowder => Coffee can be composed to: CoffeeBean => Coffee
* Insert compose code snippet
### Pointfree style
* Don't mention data in your code until the final call
* example