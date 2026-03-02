/* ================================================================================================== */
console.log(`\n${"=".repeat(17)}  Basic Types: str, num, boolean  ${"=".repeat(17)}`);
/*  Basic Types: str, num, boolean      

TypeScript has three fundamental primitive types: string, number, and boolean.

The string type is used for text data:

let productName: string = "Laptop";
The number type handles all numeric values (integers and decimals):

let price: number = 999.99;
The boolean type represents true/false values:

let inStock: boolean = true;    



Challenge  (Easy):

Create three separate variables with explicit type annotations and appropriate values:

Declare a variable named productName with type string and assign it the value "Gaming Mouse".

Declare a variable named price with type number and assign it the value 49.99.

Declare a variable named inStock with type boolean and assign it the value true.

Print all three variables to the console on separate lines in the order they were declared.       
*/

// TODO: Write your code here
// Declare the three variables with explicit type annotations and values
// Then print them to the console

let productName: string = "Gaming Mouse";
let price: number = 49.99;
let inStock: boolean = true;

console.log(productName);
console.log(price);
console.log(inStock);


/* ================================================================================================== */
console.log(`\n${"=".repeat(17)}  The 'any' Type: Escape Hatch  ${"=".repeat(17)}`);
/*      The 'any' Type: Escape Hatch      

The any type is TypeScript's escape hatch from type checking, allowing a variable to hold any value:

let data: any = 42;
data = "Hello";     // No error
data = true;        // No error
data.foo.bar.baz;   // No error (even though this might crash at runtime)
Use any when you don't know the exact type in advance or when migrating JavaScript code to TypeScript gradually.    

Challenge  (Easy):

Declare a variable named dynamicData with the type any and assign it the number 42.

Then reassign dynamicData to the string "Hello World" to demonstrate the flexibility of the any type.

Finally, print the variable to the console to show its current value.           |
*/
let dynamicData: any = 42;
dynamicData = "Hello World";
console.log(dynamicData);



/* ================================================================================================== */
console.log(`\n${"=".repeat(17)}  The 'unknown' Type  ${"=".repeat(17)}`);
/*   The 'unknown' Type         

The unknown type can hold any value but requires type checking before performing operations:

let userInput: unknown = "Hello";
userInput = 42;        // No error
userInput = true;      // No error
Unlike any, TypeScript prevents operations on unknown values without type verification:

let data: unknown = "TypeScript";
// data.toUpperCase(); // Error! TypeScript doesn't know it's a string

// You must check the type first
if (typeof data === "string") {
    console.log(data.toUpperCase()); // Now it's safe!
}
This makes unknown safer than any by forcing type verification before using type-specific methods.
      
Challenge  (Easy):

Create a variable named userInput with the type unknown and assign it the string "TypeScript".

Then write a type guard using typeof to check if userInput is a string. If it is a string, print the uppercase version of the string to the console. If it's not a string, print "Not a string" to the console.

This demonstrates how unknown requires type checking before you can safely use type-specific methods like toUpperCase().    
*/

// Create the userInput variable with unknown type
let userInput: unknown = "TypeScript";

// TODO: Write your code here
// Use typeof to check if userInput is a string
// If it's a string, print the uppercase version
// If it's not a string, print "Not a string"
if (typeof userInput === "string") {
    console.log(userInput.toUpperCase());
} else {
    console.log("Not a string");
}

/* ================================================================================================== */
console.log(`\n${"=".repeat(17)}  Working with 'null' & 'undef'  ${"=".repeat(17)}`);
/*      Working with 'null' & 'undef'       

The undefined type represents a variable that has been declared but not assigned a value, or a function that doesn't explicitly return anything. The null type represents an intentional absence of value.

let userName: string | null = null;        // Intentionally no value
let userAge: number | undefined;           // Declared but not assigned
TypeScript's strict null checking helps prevent runtime errors by forcing you to handle these cases explicitly. When you have a variable that might be null or undefined, you must check for these values before accessing properties or methods.

function getLength(text: string | null): number {
    if (text === null) {
        return 0;  // Handle the null case
    }
    return text.length;  // Safe to use string methods
}

Challenge  (Easy):

Create a function named getStringLength that accepts a parameter of type string | null and returns a number.

The function should handle both cases:

If the parameter is a string, return its length
If the parameter is null, return 0
Test your function by calling it with the following values and printing the results:

Call getStringLength("Hello TypeScript")
Call getStringLength(null)
Call getStringLength("TS")
Print each result on a separate line in the order listed above.

*/

// TODO: Write your code here
// Create the getStringLength function that accepts string | null and returns number

// Test the function with the required values and print results
function getStringLength(param: string | null): number {
    if (param === null) {
        return 0
    }
    return param.length
}

console.log(getStringLength("Hello TypeScript"))
console.log(getStringLength(null))
console.log(getStringLength("TS"))



/* ================================================================================================== */
console.log(`\n${"=".repeat(17)}  Type Inference in Action  ${"=".repeat(17)}`);
/*     Type Inference in Action         

TypeScript automatically infers variable types based on their initial values:

let message = "Hello, World!";  // TypeScript infers: string
let count = 42;                 // TypeScript infers: number
let isActive = true;            // TypeScript infers: boolean
Type inference provides the same type safety as explicit annotations while keeping code cleaner and more readable.



Challenge  (Easy):

Create three variables using TypeScript's type inference without explicit type annotations:

Declare a variable named companyName and initialize it with the string "TechCorp".

Declare a variable named employeeCount and initialize it with the number 150.

Declare a variable named isPublic and initialize it with the boolean value false.

Print all three variables to the console on separate lines in the order they were declared.

TypeScript will automatically infer the correct types based on the initial values you assign to each variable.      
*/

// TODO: Write your code here
// Declare the three variables with their initial values
// Remember to use TypeScript's type inference (no explicit type annotations needed)
let companyName = "TechCorp";
let employeeCount = 150;
let isPublic = false;

// Print all three variables to the console
console.log(companyName);
console.log(employeeCount);
console.log(isPublic);



/* ================================================================================================== */
console.log(`\n${"=".repeat(17)}  Explicit Type Annotations  ${"=".repeat(17)}`);
/*   Explicit Type Annotations          

When declaring variables without immediately assigning values, explicit type annotations are required to maintain type safety:

let score: number;  // Must specify type explicitly
score = 85;         // Assign value later
Without explicit annotation, TypeScript infers the type as any, losing type safety benefits.


Challenge  (Easy):

Declare a variable named totalScore with the explicit type number without assigning it an initial value.

On the next line, assign the value 95 to the totalScore variable.

Then declare another variable named playerName with the explicit type string without assigning it an initial value.

On the next line, assign the value "Alex" to the playerName variable.

Finally, print both variables to the console on separate lines, first totalScore then playerName.          

*/

// TODO: Write your code here
let totalScore: number
totalScore = 95

let playerName: string
playerName = 'Alex'

console.log(totalScore)
console.log(playerName)



/* ================================================================================================== */
console.log(`\n${"=".repeat(17)}  Recap: Core Types Practice  ${"=".repeat(17)}`);
/*   Recap: Core Types Practice       

Challenge  (Easy):

Create a function named getTypeInfo that takes a parameter of type any and returns a string.

The function should use the typeof operator to determine the type of the input parameter and return that type as a string.

Test your function by calling it with the following values and printing each result:

Call getTypeInfo("Hello")
Call getTypeInfo(42)
Call getTypeInfo(true)
Call getTypeInfo(null)
Print each result on a separate line in the order listed above. 
*/

// TODO: Write your code here
// Create the getTypeInfo function that takes a parameter of type any and returns a string
function getTypeInfo(param: any): string {
    return typeof param
}

// Test the function with the required values and print each result
console.log(getTypeInfo("Hello"));
console.log(getTypeInfo(42));
console.log(getTypeInfo(true));
console.log(getTypeInfo(null));