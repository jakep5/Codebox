/**
CH4 - THE BIGGER PICTURE

PILLAR 1: SCOPE AND CLOSURE
    - Organization of variables into units of scope is very fundamental
    - Scopes are like buckets, and variables are like marbles you put into the buckets
    - Scopes nest inside each other
        - For an expression/statement, only variables at that same level of scope, or in greater/outer scopes, are accessible
        - Variables from lower/inner scopes are inaccessible (more specific scopes)
    - Lexical scope - where a function/scope is located in a program determines what the scope structure will be
    
    - JS is lexical scoped, except for two characteristics
        - HOISTING - all variables declared anywhere in scope are treated as if they are in most outer scope
        - VAR declaration - are function-scoped, even if they appear inside a block
        
    - Neither hoisting or var make JS not lexically-scoped
    - Closure = natural result of lexical scope
        - When functions reference variables from a more outer scope, it maintains access to those variables, even when the function
        is passed around/reused
            - The inner variables are closed over, taking a snapshot
    
    - In JS, closure drives the most important programming patterns
    
PILLAR 2 - Prototypes
    - JS allows you to define objects directly, without having to define structure in a class
    - Implementation of class keyword led to the switch of JS to class-style/object-oriented programming
    - Prototype system has its own beauty
        - Allows objects to interconnect/reference each other by sharing a THIS context
        
    - Can allow objects to just interact via the prototype chain, instead of using classes
        - Called BEHAVIOR DELEGATION
        
    - Class inheretance gets most of the attention, while prototype chain delegation is a great alternative
        - Classes aren't the only way to use objects
    - Object delegation is much more "with the grain" of JS than classes are

PILLAR 3 - TYPES AND COERCION
    - This pillar is by far the most overlooked
    - Lots of JS community has switched to "static typing" approaches to JS (TypeScript/Flow)
    - Type-aware tooling can help developers, but should gain the knowledge in the first place
    - No JS program will properly do anything if you don't leverage JS value types
        - Must learn how JS manages value types, even if you use TypeScript or Flow

WITH THE GRAIN
    - Be aware of the grain in JS
    - The GRAIN is how most people approach/use JS
    - You will stand out more if you think carefully about your code/analyze what is best
    - JS facts are not really up for debate - it's either in the specifications or it is not
    - Don't be afraid to go against the grain - nobody can tell you how to make best use of JS
    - BUT, there is a grain you really should follow - grain of HOW JS works, at the language level
        - Should learn and embrace the JS way
        - Going with grain of how JS works is the path to success
    - Have to shift your JS habits little by little over time
        - Don't just do stuff based on how your senior devs have done them
    - Always look for better ways to use JS to create more readable code    

IN ORDER
    - What order should I read these books?
        - Straightforward answer, but also depends
        - Basically just read the books in order
    - Book 5 (sync/async) is very important for understanding JS
        - May be too intimidating, feel free to come back
        */