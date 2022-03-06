## What is functional Programming?
- Where it all started?
	* Lambda Calculus
		* 3 things in lambda calculus
		* Variables(x,y,z)
		* Building a function(λ notation)
		* Applying functions (λx.x+1) 5 5+1 = 6
	* Function in mathematics
		* A function is an expression that assigns each element of a set, call the domain, to exactly one element of a second set, call the codomain.
		* For Given input 1, at any given point, output is 1 for the function f(x)=x^2
	* functional programming is all about building functions for immutable variables. it is about writing declaratively with inputs and outputs without side effects.


-  *Immutability*
	* An immutable data is the data that can’t be changed after creating
	* Avoids Race Condition
	* Avoid Side-effects.
	* when functions act on values, a new value is created and returned, rather than modifying the existing value.


- *Pure and impure functions*
* *A pure function is a function which:*
	* Given the same input, will always return the same output.
	* No side-effects.
	* Maintains no internal state.
	* No dependency on any external factor other than the input provided.
	* Referentially Transparent.
* *Impure Function*
	* No consistent output for a given input.
	* Has side effects
	* Uses value from out of scope of function.
	* An impure function inside a function makes the function impure.
* *What is a Side Effect?*
		* A side effect is any application state change that is observable outside the called function other than its return value.
			* Modifying any external variable(e.g., a global variable, or a variable in the parent function scope chain)
			* Logging to the console.
			* Writing to the screen.
			* Writing to a file.
			* Writing to a network.
			* Triggering any external process.
			* Eg. datetime, now, randomness.
	* *Advantages of Pure Functions*
		* Easy to reason out the code - Readability
		* Referentially Transparent.
			* the ability to replace an expression with it’s calculated value is called referential transparency.
			* eg let’s say f(x) - x*x, f(2)=4. f(2) could be used in places where we use 4 and vice versa.
			* Memoization and Caching
			* Parallel Processing
			* Easy to debug and Easy to test
			* Reusability

- *Declarative and Imperative*
* Imperative Programming
	* A style of programming which describes how the operations are performed by a computer.
	* Step by Step Fashion
	* define a numbers list and an empty odd_numbers list.
	* Loop over each number.
	* Check if number divisible by 2
	* if yes, append to the odd_numbers list.
	* if no, skip the number.
* Declarative Programming:
	* Explains what to be done.
	* Doesn’t explicitly state how the work will be done.
	* E.g. Filter the odd numbers from the list.


- *Higher Order Functions / First Class Functions*
* In FP, functions are first class citizens.
* Functions can be treated as values.
* They can be
	* Assigned as values,
	* Passed into functions, and
	* Returned from functions.
* *A higher order function is a function that takes a function as an argument, or returns a function.*
* Map, Filter and Reduce(Higher order functions)

- *Advantages and Disadvantages of FP*
*Advantages:*
	* Functional programming enables and encourages a more abstract way of solving a problem. A more “mathematical” programming way
	* Code is easier to reason - Predictable code.
	* Greater Productivity - Less Boilerplate code.
	* Greater modularity and reuse.
	* Easier Testing.
	* Easier Debugging.
	* Future Ready
		* Parallel Programming
		* Asynchronous Programming
*Limitations:*
	* Real world problems need Side Effects e.g) I/O Operations.
	* Immutability and Recursion could potentially lead to performance problems - Increased RAM usage.
	* Working with Immutable types - Recursion, Map, reduce, filter will be harder for people from imperative background
	* Lack of Tools

- *Jargons to explore on your own*
	* Promises
	* Asynchronous Functions
	* Concurrent Programming
	* Business Examples.
	* Currying
	* Lazy Evaluation.
