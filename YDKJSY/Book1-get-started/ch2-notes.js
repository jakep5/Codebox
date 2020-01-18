/** CHAPTER 2 - SURVEYING JS

- Best way to learn JS - start writing JS
    -Make sure to practice each piece
- Will survey some of the major topic areas of the language
- Take your time with this chapter

EACH FILE IS A PROGRAM
- Almost every website is comprised of many different JS files
- In JS - each standalone file is its own program
- Only way multiple standalone .js files act as a single program is by sharing state (via global scope)
- Since ES6 - JS supports the module format
    - Modules are also file-based
    - 'Import' statement or '<script type=module> tag causes the file to be treated as a single module
- Module - a collection of state and publicly-exposed methods to operate on that state
    - Importing one module into another allows runtime interoperation between the two modules
- Think of each JS file as its own mini program, which cooperate with the other mini programs to create 
your overall application

VALUES
-Most fundamental unit of information in a program is VALUES (values are data)
- Values are how the program maintains state
- Two forms of values - primitive and object
- Values can be embedded in our programs using literals EX:*/
console.log("My name is Jake");
/**"My name is Jake" is a primitive string LITERAL
        -Important to pick either single or double quotes and use throughout program

-Interpolation - using backticks (`) and inserting a variable into a string EX:*/
let firstName = "My name is Jake";
console.log(`My name is ${firstName}.`);

/**
-Numbers are used most often in programs for counting steps
    - And accessing values in numeric positions (arrays)

-Two other primitive values - null and undefined
    -Some differances, but both symbolize the absence/emptiness of a value
-KEY - safest and best to only use undefined as the single value to set something as empty

ARRAYS AND OBJECTS
- Besides primitives, other value in JS is an object value
- Arrays - are a special type of object that has a numerically-indexed list of data
    - JS arrays - can hold any value type (even functions)
    
- Objects - are more general: unordered, keyed collection of various values
- KEY - in objects, values are accessed by key(string) input, whereas arrays are accessed by numerical position
EX:*/

name = {
    first: "Kyle",
    last: "Simpson",
    age: 39,
    specialties: [ "JS", "Table Tennis" ]
}

console.log(name["first"]) //outputs "Kyle"
console.log(name.first) // also outputs "Kyle"

/**
VALUE TYPE DETERMINATION
- For distinguishing values, typeof operator tells you its primitive type, or "object" otherwise
EX: */

typeof 42; //"number"
typeof "abc" //"string"
typeof undefined //"undefined"
typeof true //"boolean"
typeof [1,2,3] //"object"
typeof function hello(){} //"function"
typeof null //BUG - will output "object"

/**
Coercion - converting one data type to another

DECLARING AND USING VARIABLES
- In JS - values can either appear as literal values, or variables (containers for values)
- Variables have to be declared to be used
    -Different ways of declaring:
        -VAR - declares a variable to be used in that part of a program, optionally allows initial assignment
        of a value
        -LET - more limited scope than VAR, known as block scoping EX:*/
var adult = true;
if (adult) {
    var name = "Kyle";
    let age = 39;
}

console.log(name); //Kyle;
console.log(age); //Error!

/**
Above code - Age cannot be accessed outside of the if statement, because age was BLOCK-SCOPED to the if statement
    - name, declared using var, was not block-scoped
-Blockscoping helps prevent accidental overlap of variable names
- VAR - useful in the sense that it communicates a variable will be seen by a wider scope

- CONST - like LET, but restricts further reassigning to a different value
    - Must be defined when it is declared 
    - KEY - NOT unchangeable, just cannot be reassigned to a different value
- Best semantic use of CONST - when you have a certain primitive value you want to give a name to

- Another syntax that declares variables - .catch statement of (try..catch)
EX:*/
try {
    someError();
}
catch (err) {
    console.log(err);
}
/**
-Here, err is block-scoped to the .catch block, as if it had been declared with LET

FUNCTIONS
-In JS, should take "function" to mean "procedure"
    -Procedure - collection of statements that can be invoked any number of times, receive any inputs,
    and may return one or more values
- Functions can be declared and assigned in a few ways: */

function awesomeFunction(coolThings) { //Way of assigning in older days of JS
    return amazingStuff; 
}

var awesomeFunction = function(coolThings) { //function gets assigned to variable 'awesomeFunction'
    return amazingStuff;
}

/** 
VERY IMPORTANT - In JS, functions are values that can be assigned and passed around
    - Functions are a special type of object value type */

//JS functions can receive parameter input:
function greeting(name) { //Name is a parameter, or a local variable inside the function
    console.log(`Hello, ${name}!`)
};

greeting("Kyle"); //Hello, Kyle!

/** Functions can return values when using the return keyword
- You can only return a single value, but if there are more values to return, you can wrap them into
a single object/array and return that

-Functions are values, so they can be assigned as properties on objects:*/

var whatToSay = {
    greeting() {
        console.log("Hello!");
    },
    question() {
        console.log("What's your name?");
    },
    answer() {
        console.log("My name is Jake.");
    }
};

whatToSay.greeting(); //Outputs "Hello!"

/**
-In above snippet, each function can be accessed by accessing the property to retrieve the function 

COMPARISONS
- Many decisions in programming are done by seeing if values are equal
- Equal...ish:
    - Basically asking the question: "Is this X value the same as that Y Value?
    - There are equality comparisons, and equivalence comparisons

-Examples of STRICT comparison (===)    */

3 === 3.0; //true
"yes" === "yes"; //true
null === null; //true
false === false; //true

42 === "42"; //false
"hello" === "Hello"; //false
true === 1; //false
0 === null; //false
null === undefined //false

/**
- Another way to describe '===' comparisons is "checking both the value and the type"
    -Specifically, === disallows any COERCION, or type conversion
    - Other JS comparisons do allow coercion
- */



