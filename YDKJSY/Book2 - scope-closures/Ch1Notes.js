/**
 * HOW IS SCOPE DETERMINED?
 *  - How closely have you considered the mechanism with which variables are organized/managed?
 *  - How does JS know which variables are accessible by a given statement
 *      - What if two variables of the same name are created?
 *  - Must study how JS engine processes/compiles code before it's executed
 * 
 * ABOUT THIS BOOK:
 *  - Focus here: first of three pillars of JS
 *      - Scope system and its function closures
 *  - KEY: JS is in fact parsed/compiled before execution of code begins
 *      - Author's decisions on where to put variables/functions/etc are analyzed during this initial phase
 *      - Resulting scope is NOT affected/changed by run-time conditions
 * 
 *  - JS functions are values, so they can be assigned/passed around like numbers/strings
 *      - Functions maintain their original scope no matter where they are EVENTUALLY executed
 *          - Original scope is retained 
                - Does not matter where in the program the functions are executed
                    - Called CLOSURE
    - Modules - a set of public methods that have privileged access to hidden variables/functions

    COMPILED VS. INTERPRETED:
        - Code compilation - set of steps that transform your code into a set of constructions for your computer
        - Typically, entire source code is transferred at once

        - Code interpretation - similar task to compilation
            - Transforms code into a set of instructions, but process is different than compilation
            - DIFFERENCE - source code is interpreted/transformed line-by-line
                - Each line/statement immediately executed before processing to next line
                - Compilation - entire code is transformed into steps at once
                
        - Modern JS engines - employ numerous variations in compilation and interpretation

    COMPILING CODE:
        - Why does JS code actually need to be compiled?
            - SCOPE is determined during compilation
        
        - Classic compilation theory: 3 basic steps done by compiler:
            1) Tokenization/lexing - Breaking up strings of characters into meaningful
            chunks, which are called tokens
                - Ex: consider var a = 2 as a program
                    - Tokenization would break it up into var, a, =, 2, and ;
            
            2) Parsing - Taking an array of tokens and turning it into a tree of nested elements
                - Known as an AST, or Abstract Syntax Tree
                - Ex: from var a = 2;
                    - Top node might be VariableDeclaration
                        - Child node might be Identifier (value would be a)
                            - Then AssignmentExpression
                                -Then NumericLiteral (would be 2)
 */