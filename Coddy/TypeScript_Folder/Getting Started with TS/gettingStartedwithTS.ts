import { error } from "node:console";

/* ================================================================================================== */
console.log(`\n${"=".repeat(17)}  What is TypeScript?  ${"=".repeat(17)}`);
/*      What is TypeScript?         

TypeScript is a superset of JavaScript that adds static types. Any valid JavaScript code is also valid TypeScript code.

TypeScript adds type annotations to specify what kind of data variables should hold:

// JavaScript (also valid TypeScript)
let message = "Hello World";

// TypeScript with type annotation
let message: string = "Hello World";
TypeScript files use the .ts extension instead of .js.

*/

// JavaScript (also valid TypeScript)
let message1 = "Hello World";

// TypeScript with type annotation
let message2: string = "Hello World";

/* ================================================================================================== */
console.log(`\n${"=".repeat(17)}  Why Use TypeScript?  ${"=".repeat(17)}`);
/*      Why Use TypeScript?             

TypeScript provides three major benefits:

Catch Errors Early: Static type checking catches errors during development before code runs:

// TypeScript catches type errors immediately
function calculateTotal(price: number, tax: number): number {
    return price + tax;
}

calculateTotal("50", 0.1); // Error: string not assignable to number
Better Code Readability: Type annotations serve as documentation, making it clear what data functions expect and return.

Enhanced Development Tools: Enables superior autocompletion, refactoring, and navigation in code editors.

*/

// TypeScript catches type errors immediately
function calculateTotal(price: number, tax: number): number {
  return price + tax;
}

// try to uncomment this below code
// calculateTotal("50", 0.1); // Error: string not assignable to number

/* ================================================================================================== */
console.log(
  `\n${"=".repeat(17)}  Your First TypeScript Code  ${"=".repeat(17)}`,
);

let greeting: string = "Hello, TypeScript!";
console.log(greeting);

/* ================================================================================================== */
console.log(
  `\n${"=".repeat(17)}  Compilation Process & Errors  ${"=".repeat(17)}`,
);

/*  Compilation Process & Errors        

TypeScript files (.ts) are converted to JavaScript files (.js) through a compilation process.

During compilation, TypeScript's type checker analyzes code and identifies potential problems before runtime:

// Type error example
let age: number = "25"; // Error: Type 'string' is not assignable to type 'number'
TypeScript will still generate JavaScript code even with type errors (unless configured otherwise), but fixing these errors ensures type safety and correct program behavior.

*/

/* ================================================================================================== */
console.log(
  `\n${"=".repeat(17)}  Recap: Introduction to TS  ${"=".repeat(17)}`,
);
/*  Recap: Introduction to TS       

Challenge (Easy):

Create a constant named userId with an explicit type annotation of number and assign it the value 12345.

Create a variable named username with an explicit type annotation of string and assign it the value "john_doe".

You are provided with the following line of code that contains a type error:

username = userId;
Fix this type error by creating a new variable called userIdString that converts the userId to a string using the String() function, then assign userIdString to username instead.

Finally, print both userId and username to the console on separate lines.    */

// TODO: Write your code here
// Create the constant userId with type annotation
const userId: number = 12345;

// Create the variable username with type annotation
let username: string = "john_doe";

// Fix the type error by converting userId to string
const userIdString: string = String(userId);
username = userIdString;


// Print the results
console.log(userId);
console.log(username);