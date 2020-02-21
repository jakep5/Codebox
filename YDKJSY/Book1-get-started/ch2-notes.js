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
- The === comparison does have some nuance to it- designed to LIE in two cases:
*/
NaN === NaN //false
0 === -0 //true

/**
For NaN comparisons, use Number.isNaN(...)
- For -0 comparison, use Object.is(...) utility
    - Object.is(....) is really really strict comparison (quadruple equals)

- Comparison of object values gets even more complicated:   */

[1, 2, 3] === [1, 2, 3]; //false
{ a: 42 } === { a: 42 } //false
(x => x*2) === (x => x*2) //false

/**
-JS does not use structural equality for object values, but instead uses identity equality for objects
    - In JS, all object values are held by reference, and are COMPARED by their reference
    - So, [1, 2, 3] and [1, 2, 3] do NOT have the same reference, they are different instances 
    
- Remember, comparing objects switches to using an object's IDENTITY*/
/*

/**
COERCIVE COMPARISONS
- Coercion - one type is being converted to its respective 
representation in another type
    - But, coercion brings up confusion when dealing with comparisons
- Many JS writings condemn the use of '=='
    - Referred to as the 'loose equality' operator
- Misconcepton - performs comparisons without considering the types of compared values
- KEY - both === and == consider the types of values involved
    - Between the same value types, == and === do exactly the same thing
- Difference arises when comparing values of different value types
    - == allows coercion before comparison, while === does not
    - == allows coercsion before comparison, then does the same thing as ===
- KEY: == should be described as 'coercive equality'
*/

42 == "42"; //true
1 == true; //true

/**
- <, >, <=, and >= also allow coercion before comparison
    -Behave as === if primitive types already match
*/

var arr = ["1", "10", "100", "1000"];
for (let i = 0; i< arr.length && arr[i] < 500; i++) {
    // this will run 3 times
}

/**
- i < arr.length comparison is "safe" because i and arr.length are always numbers
    - BUT, arr[i] < 500 invokes coercion, as arr[i] values are strings
        -Comparisons will become 1 < 500, 10 < 500, 100 < 500
- KEY: comparisons between strings, will use alphabetical comparison
 */
var x = "10";
var y = "9";

x < y; //true

/**
-KEY: learn ins and outs of coercive comparisons, instead of avoiding them

HOW WE ORGANIZE JS
- Two major patterns for organizing JS: classes and modules

Classes:
- Class in a program - definition of a 'type' of custom data structure
    - Includes both data and behaviors that will operate on that data
    - Classes don't actually define concrete values
        - Concrete values must be instantiated (with NEW keyword)
*/

class Page {
    constructor(text) {
        this.text = text;
    }

    print() {
        console.log(this.text);
    }
}

class Notebook {
    constructor() {
        this.pages = [];
    }

    addPage(text) {
        var page = new Page(text);
        this.pages.push(page);
    }

    print() {
        for (let page of this.pages) {
            page.print();
        }
    }
}

var mathNotes = new Notebook();
mathNotes.addPage("Arithmatic: + -...");
mathNotes.addPage("Trigonometry: sin cos tan...");

mathNotes.print();

/**
- In Page class, data is stored as a string of text in this.text property
- In Notebook class, data is an array of instances of the Page class
- Class methods can only be called on instances of classes, not classes themselves
- Classes make things more organized/easier to read

CLASS INHERITANCE
- Inherent to traditional class-orinted design
*/

class Publication {
    constructor(title, author, pubDate) {
        this.title = title;
        this.author = author;
        this.pubdate = pubdate;
    }

    print() {
        console.log(`
        Title: ${this.title}
        By: ${this.author}
        ${this.pubdate}`)
    };
}

class Book extends Publication {
    constructor(bookDetails) {
        super(
            bookDetails.title,
            bookDetails.author,
            bookDetails.publishedOn
        );
        this.publisher = bookDetails.publisher;
        this.ISBN = bookDetails.ISBN;
    }

    print() {
        super.print();
        console.log(`
        Publisher: ${this.publisher}
        ISBN: ${this.ISBN}`)
    }
}

class BlogPost extends Publication {
    constructor(title, author, pubDate, URL) {
        super(title, author, pubDate);
        this.URL = URL;
    }

    print() {
        super.print();
        console.log(this.URL);
    }
}

/**
-Book/BlogPost use extends clause to extend the 
Publication definition to include additional behavior
- super(...) call in each constructor will delegate to its
parent class's (Publication) constructor 

MODULES
- Module pattern - same goal as the class pattern
- Modules group data and behavior together into logical units
- Can include/access behaviors of other modules

Classic Modules
- ES6 added module syntax to native JS
- Classic modules, however, have an outer function that
returns an instance of the module with one or more functions
that can operate on the module's hidden data
- Here is the classic module form of earlier Publication, Book, and BlogPost classes:
*/

function Publication(title, author, pubDate) {
    var publicAPI = {
        print() {
            console.log(`
            Title: ${title}
            By: ${author}
            ${pubDate}
            `);
        }
    };

    return publicAPI;
}

function Book(bookDetails) {
    var pub = Publication(
        bookDetails.title,
        bookDetails.author,
        bookDetails.publishedOn
    );

    var publicAPI = {
        print() {
            pub.print();
            console.log(`
            Publisher: ${bookDetails.publisher }
            ISBN: ${ bookDetails.ISBN}
            `)
        }
    }

    return publicAPI;
}

function BlogPost(title, author, pubDate, URL) {
    var pub = Publication(title, author, pubDate);

    var publicAPI = {
        print() {
            pub.print();
            console.log(URL);
        }
    };

    return publicAPI;
};

/**
-Comparing above forms to Classes:
    - Class form stores methods and data, which are accessed with .this prefix
    - For modules, methods are accessed as identifier variables, without this. prefix
    
    - Classes - 'API' of an instance is implicit in class definition
        - All data/methods are public
    - Module factory function - explicitly create and return an object
        - Data/other methods remain private in the factory function

- Other variations to factory functions:
    - AMD (Asynchronous Module Definition)
    - UMD (Universal Module Definition)
    - CommonJS(node.js style modules)
    
- Usage/instantiation of module factory functions*/

var YDKJS = Book({
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    publishedOn: "June 2014",
    publisher: "O'Reilly",
    ISBN: "123456-789"
});

YDKJS.print();

var forAgainstLet = BlogPost(
    "For and against let",
    "Kyle Simpson",
    "October 27, 2014",
    "https://davidwalsh.name/for-and-against-let"
);

forAgainstLet.print();

/**
ES MODULES
- Serves in similar spirit as classic modules

- Implementation does differ significantly
- No wrapping function to define a module, wrapping context is a file
- ESMs are always file-based; one file for one module
- You use export to add a variable/method to public API
- Don't instantiate ES module, just import it to a single instance
- ESM's are singletons - only one instance ever created
    - Instance created is at the first import
    - All other imports are references to first import
    
- In orer to have multiple instantiations, you must provide a classic module-style factory function in ESM definition

- Here is an example with multiple instantiaion:*/

//In file publication.js:

function printDetails(title, author, pubDate) {
    console.log(`
    TitleL ${ title }
    By: ${ author }
    ${ pubDate }
    `)
}

export function create(title, author, pubDate) {
    var publicAPI = {
        print() {
            printDetails(title, author, pubDate);
        }
    };

    return publicAPI;
}

//In blogpost.js (importing and using module)

import {create as createPub} from "publication.js";

function printDetails(pub, URL) {
    pub.print();
    console.log(URL);
}

export function create(title, author, pubDate, URL) {
    var pub = createPub(title, author, pubDate);

    var publicAPI = {
        print() {
            printDetails(pub, URL);
        }
    };

    return publicAPI;
}

//In main.js

import { create as newBlogPost } from "blogpost.js";

var forAgainstLet = newBlogpost(
    "For and against let",
    "Kyle Simpson",
    "October 27, 2014",
    "https://davidwalsh.name/for-and-against-let"
)

forAgainstLet.print();

/**
- ES modules can use classic modules internally if they need to
suppoert multiple-instantiation
-    */