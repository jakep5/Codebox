/**
 * ITERATION
 * - Programs are essentially built to process data
 * - Pattern to step through data have big impact on readability
 * - Iterator pattern - suggests a standardized approach for consuming
 * data from a source one chunk at a time
 *      - More helpful to iterate the data source
 *      - Handle first set, then next, and so on
 *      - Better than handling all at once
 * - Imagine a SELECT query data structure
 *      - If 100 - 1000 rows, you need iterative process, typically a loop
 * - Iterator pattern - data structure called an 'iterator'
 *      - Has reference to underlying data source (rows in this case)
 *      - Calling next() returns the next piece of data (next row from DB query)
 * - ES6 - has a specific protocol for the iterator pattern in the language
 *      - next() method - return is an object called iterator restult
 *          - VALUE and DONE properties
 *              - DONE will be boolean that is false until iteration is complete
 * 
 * CONSUMING ITERATORS
 * - Since above explained ES6 iteration protocol exists, you are able to 
 * consume a data source one value at a time
 *      - You check after each next() call for done to be TRUE, which stops the iteration
 * - ES6 introduced syntax/APIs for consumption of iterators
 *      - One mechanism: for...of loop:
 */

 var it = 'some value';

 //loop over its results one at a time
 for (let val of it) {
     console.log(`Iterator value: ${val}`);
 }
 //Will return:
 // Iterator value: ..
 // Iterator value: ..
 // Iterator value: ..
 // etc.

 /**
  * - Another method for consuming iterators is the '... operator'
  *     - Two symmetrical forms of '... operator': 
  *         - Spread (iterator consumer)
  *         - Rest, or gather
  * - Spreading an iterator:
  *     - Must have something to spread INTO:
  *         - Two possibilities: array or a function call
  */

//Array spread:
    // Spread an iterator into an array, each iterated value will occupy an array 
    // element position
var vals = [ ...it];

//Function call spread:
    //Spread the iterator so that each iterated value occupies
    // An argument position
doSomethingUseful(...it);

/**
 * Both above cases: '...' syntax allows all available value from the iterator object
 * to be placed into their respective receivers (array, argument list)
 * 
 * ITERABLES
 *  - Iterator-consumption protocol is defined for consuming ITERABLES, or a value
 * that can be iterated over
 *      - Protocol will automatically create an iterator instance from an iterable
 *      - Single iterable can be consumed more than once, creating multiple instances of
 *      the same iterator instance
 * - Where do we find iterables?
 *      - ES6 defined them as strings, arrays, maps, sets, etc.
 * - Consider the following:
 */

//arrays are iterable:
var arr = [ 10, 20, 30];

for (let val of arr) {
    console.log(`Array value: ${ val }`)
}

//return:
//Array value: 10
//Array value: 20
//Array value: 30

/**
 * Can shallow-copy an array using iterator consumption:
 */

 var arrCopy = [...arr];
 console.log(arrCopy)
 // [10, 20, 30]

 /**
  * Can also iterate over characters in a string:
  *     - Characters will be iterated over one string at a time
  */

  var greeting = "Hello world!";
  var chars = [ ...greeting ];

  console.log(chars); 
  // [ "H", "e", "l", "l", "o", " ",
    //   "w", "o", "r", "l", "d", "!" ]

/**
 * Map data structure: uses objects as keys
 *  - Associates values with that object
 *  - Iterating over maps:
 *      - Not just iterating over the values, but iterating over the ENTRIES
 *      - Entry: 2-element array including both a key and a value
 *  - Consider:
 */

 //Given two DOM elements: 'btn1' and 'btn2'
 var buttonNames = new Map();
 buttonNames.set(btn1,"Button 1");
 buttonNames.set(btn2,"Button 2");

 for (let [btn, btnName] of buttonNames) {
     btn.addEventListener("click", function onClick() {
         console.log(`Clicked ${btnName}`);
     })
 }

 /**
  * For...of loop of the map iteration, we use the [btn, btnName] syntax
  *     - Breaks each 2-element array into key/value pairs:
  *         - btn1/"Button 1", and btn2/"Button 2"
  * 
  * Can choose more specific iteration if necessary:
  *     - EX: we only want to consume values of buttonNames map:
  */

  for (let btnName of buttonNames.values()) {
      console.log(btnName);
  }
  // Button 1
  // Button 2

  /**
   * Or, if we want the index/value in array iterations, we can use entries() method:
   */

   var arr = [10, 20, 30];

   for(let [idx,val] of arr.entries()) {
       console.log(`[${idx}]: ${val}`);
   }
   // [0]: 10
   // [1]: 20
   // [2]: 30

/**
* Basically, there are 3 iterator forms available for each iteratble:
*   - Keys-only (.keys())
*   - Values-only (.values())
*   - Entires (.entries())
* 
* KEY - An iterator of an iterable is just an iterable of itself
*   - Iterator-consumption protocol expects an iterable, then creats an iterator to be consumed
* 
* CLOSURE
* - Every JS developer has used closure
* - Need to recognize where closure is used in programs
* - Lack of closure can cause bugs/performance issues
* 
* - Closure defintion - when a function remembers and continues to access variables from
* outside its scope, even when function is executed in a different scope
*   - Closure is part of the nature of a function
*   - Objects don't get closures, but functions do
*   - Observing closure requires you to execute a function in a scope differently than where it was defined
*   - Example: 
*/

function greeting(msg) {
    return function who(name) {
        console.log(`${ msg }, ${ name }!`);
    };
}

var hello = greeting("Hello");
var howdy = greeting("Howdy");

hello("Kyle");
// Hello, Kyle!
howdy("Grant");
// Howdy, Grant!

/**
 * Above explained:
 * - greeing(...) is executed (outer function)
 *      - This creates an instance of who(...), which closes over the variable msg
 *      - msg is a paramater from outer scope of greeing(...)
 *      - inner function is returned, reference is assigned to hello variable in outer scope
 *      - greeting(...) is called a second time, which creates a new instance of the inner function
 *          -New closure is created over a new msg variable
 *          - That reference is assigned to howdy
 * 
 * - When greeting(...) finishes running, we would expect all of its variables to be removed from memory
 *      -Would expect each msg variable to be wiped, but they don't - they remain in memory
 *          - When something is closed over, that means it is saved into memory
 *      - Since inner function instances are assigned to hello and howdy variables, the instances of the msg variable
 * is still preserved
 * 
 * - Above closures are not a snapshot of msg, they are a direct link to the variable itself 
 */

 function counter(step = 1) {
     var count = 0;
     return function increaseCount() {
         count = count + step;
         return count;
     };
 }

 var incBy1 = counter(1);
 var incBy3 = counter(3);

 incBy1(); // 1
 incBy1(); // 2

 incBy3(); //3
 incBy3(); //6
 incBy3(); //9

/**
 * - Each instance of inner increaseCount() function closes over both the count and step variables
 *      -This is due to its outer function, counter(...) scope
 * - Step remains the same, but count is changed over time upon each call of inner function
 * - Closure is over the actual variables, so their updates are preserved
 * 
 * - Closure most important with asynchronous code/callbacks:
 */

 function getSomeData(url) {
     ajax(url, function onResponse(resp) {
         console.log(
             `Response (from ${url}): ${resp}`
         );
     });
 }

 getSomeData("https://some.url/wherever");
    // Response (from https://some.url/wherever);

/**
 * onResponse(...), or inner function, is closed over url variable
 *      - So, the instance of url is remembered until ajax call finishes and executes onResponse(...)
 *      - getSomeData(url) will finish right away, but url parameter is kept alive by the inner function
 * - Outer scope doesn't have to be a function
 *      - Just that there is a ****variable in an outer scope accessed by an inner function******
 */

 for (let [idx,btn] of buttonNames.entries()) {
     btn.addEventListener("click", function onClick(){
         console.log(`Clicked on button (${idx})!`);
     });
 }

/**
 * - Loop is using let declarations, so each iteration gets new idx/btn variables
 *      - new instance of inner onClick(...) function is created each time
 *      - Inner function closes over idx for as long as onClick handler exists
 *          - Handler can then print associated index value each time respective button is clicked
 * - KEY: closure is not over the value, but over the variable idx itself
 * 
 * THIS KEYWORD
 * - This is one of JavaScript's most powerful mechanisms
 *      - Does not refer to function itself (popular misconception)
 * - When a function is defined, it is attached to its enclosing scope via closure
 * - Execution context - influences what a function can access
 *      - Execution context is exposed to a function via its this keyword
 *      - Execution context is dynamic
 * - KEY: execution context is entirely dependent on HOW IT IS CALLED
 * - "This" keyword is determined each time a function is called
 * 
 */

 function classroom(teacher) {
     return function study() {
         console.log(
             `${teacher} says to study ${this.topic}`
         );
     };
 }
 var assignment = classroom("Kyle");

 /**
  * - ABOVE: inner function is a "this-aware" function, as it uses the "this" keyword
  *     - Will be dependent on its execution context
  * 
  * - Calling study() will return "Kyle says to study undefined"
  *     - Is called without any execution context
  * - WITHOUT EXECUTION CONTEXT - function's "this" keyword will reference the window object/global object
  *     - Will reference global variables (no topic global variable, so returns as undefined)
  * - Consider this:
  */

  var homework = {
      topic: "JS",
      assignment: assignment
  };

  homework.assignment(); //returns: Kyle says to study JS
/**
 * - ABOVE: this keyword for this function call refers to the homework object
 *      - "this.topic" resolves to "JS"
 */

 var otherHomework = {
     topic: "Math"
 };

 assignment.call(otherHomework); //returns: Kyle says to study Math

/**
 * - call(...) method is the third way of calling a function
 *      - Takes an object as an argument for setting the "this" keyword
 *          -So, this.topic resolves to "Math"
 * 
 * - Benefit of "this-aware" functions - ability to reuse a single function with different objects
 * 
 * PROTOTYPES
 * - "this" keyword - characteristic of function execution
 * - Prototype - a characteristic of an object
 *      - Think of as a link between two objects
 *      - "Prototype chain" - series of objects linked together via prototypes
 * - Two objects, A and B:
 *      - Purpose of prototype chain - accessing property/method that A does not have will delegate
 * to A to handle
 *          - Allows multiple objects to cooperate for a task
 * - Consider this:
 */

 var homework = {
     topic: "JS"
 };
/**
 * Above function's default prototype linkage connects to Object.prototype object
 *      - Has methods like toString() and valueOf() 
 */

 homework.toString(); //[object Object]
 /**
  * - Basically, homework.toString() delegates to Object.prototype.toString(), since the homework object
  * does not have a toString() method
  * 
  * - Object Linkage:
  */

  var homework = {
      topic: "JS"
  };

  var otherHomework = Object.create(homework);

  otherHomework.topic; // "JS"
/**
 * - Object.create(...)'s first argument is an object to link the NEW object to
 *      - Returns new/linked object
 * 
 * - Prototype chain delegation only applies for ACCESSING values
 *      - Will not occur for ASSIGNING values - will just happen on original object
 * 
 * - Object.create(null) -> creates object that is not linked to anything, just standalone
 */

 homework.topic;
 // "JS"
 otherHomework.topic;
 // "JS"

 otherHomework.topic = "Math";
 otherHomework.topic; //"Math"

 homework.topic; //"JS" KEY - assignment of value only happens on respective object
 
/**
- Assigning to topic creates a property of that name on otherHomework object
    - No effect on homework object
- "topic" value on otherHomework - shadows property of same name on homework object in chain

THIS REVISITED
- Powers prototype-delegated function calls
- Function calls on objects that delegate onto prototype chain will still have
the expected use of "this"
- Consider:
*/

var homework = {
    study() {
        console.log(`Please study ${this.topic}`);
    }
};

var jsHomework = Object.create(homework);
jsHomework.topic = "JS";
jsHomework.study(); //Returns "please study JS"

var mathHomework = Object.create(homework);
mathHomework.topic = "Math";
mathHomework.study(); //Please study Math

/**
- Both jsHomework and mathHomework objects prototype link to the homework object
    - Homework object has the study() function
- study() method references this.topic, which correctly references the topic value of the new objects
    - this.topic for jsHomework will be "JS"
    - this.topic for mathHomework will be "Math"
    - "this" keyword does NOT maintain reference to homework object
    
- ABOVE shows that "this" keyword is dynamic in JavaScript - allows it to work in classes and prototype delegation

ASKING WHY?
- Take away from this chapter - much more under hood of JS than glancing at the surface
- Important skill - asking "why" when encountering something in the language
    - Always try to ask the right questions
 */
