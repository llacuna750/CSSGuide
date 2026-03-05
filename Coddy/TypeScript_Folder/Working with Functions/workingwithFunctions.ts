/* ================================================================================================== */
console.log(`\n${"=".repeat(17)}  Typing Params & Return Values  ${"=".repeat(17)}`,)
/*    Typing Params & Return Values         


Functions in TypeScript use type annotations to specify parameter types and return types, creating a clear contract for what data goes in and comes out.

Syntax for typed functions:

function functionName(parameterName: type): returnType {
  // function body
}
Examples:

function greet(name: string): string {
  return "Hello, " + name;
}

function multiply(a: number, b: number): number {
  return a * b;
}
The pattern is parameterName: type for each parameter, and : returnType after the closing parenthesis.


Challenge  (Easy):
Create a function named add that takes two parameters of type number and returns their sum. The function must have an explicit return type annotation of number.

Create another function named getFullName that takes two parameters: firstName of type string and lastName of type string. The function should return the full name as a single string with a space between the first and last names. Add an explicit return type annotation of string.

Create a third function named isEligible that takes two parameters: age of type number and hasLicense of type boolean. The function should return true if the person is 18 or older AND has a license, otherwise return false. Add an explicit return type annotation of boolean.

Test your functions by calling them with the following values and printing the results:

Call add with 15 and 27
Call getFullName with "John" and "Smith"
Call isEligible with 20 and true
Call isEligible with 16 and true
Print each result on a separate line in the order specified above.
*/

// TODO: Write your code here
// Create the add function with explicit return type annotation
function add(n1: number, n2: number): number {
    return n1 + n2
}

// Create the getFullName function with explicit return type annotation
function getFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`
}

// Create the isEligible function with explicit return type annotation
function isEligible(age: number, hasLicencse: boolean): boolean {
    return (age >= 18 && hasLicencse) ? true : false
}

// Test the functions and print the results
// Call add with 15 and 27
console.log(add(15, 27))

// Call getFullName with "John" and "Smith"
console.log(getFullName('John', 'Smith'))

// Call isEligible with 20 and true
console.log(isEligible(20, true))

// Call isEligible with 16 and true
console.log(isEligible(16, true))



/* ================================================================================================== */
console.log(`\n${"=".repeat(17)}  Typing Arrow Functions  ${"=".repeat(17)}`,)
/*   Typing Arrow Functions         

Arrow functions use type annotations for parameters within parentheses, with the return type annotation before the arrow (=>):

const multiply = (a: number, b: number): number => {
  return a * b;
};

const greet = (name: string): string => `Hello, ${name}!`;
The return type annotation appears before the arrow rather than after the function name, maintaining TypeScript's type safety with arrow function syntax.


Challenge  (Easy):

Convert the following regular function declaration to an arrow function while maintaining all type annotations:

function subtract(a: number, b: number): number {
  return a - b;
}
Create an arrow function named subtract that performs the same operation with the same parameter types and return type.

Then create two additional arrow functions:

An arrow function named createMessage that takes a parameter text of type string and returns a string with the format "Message: [text]". Include explicit type annotations for both the parameter and return type.
An arrow function named isPositive that takes a parameter num of type number and returns true if the number is greater than 0, otherwise false. Include explicit type annotations for both the parameter and return type.
Test your arrow functions by calling them with the following values and printing the results:

Call subtract with 10 and 3
Call createMessage with "Hello World"
Call isPositive with -5
Call isPositive with 8
Print each result on a separate line in the order specified above.
*/

// TODO: Convert the regular function to arrow function and create the additional arrow functions

// TODO: Create the subtract arrow function with type annotations
const subtract = (a: number, b: number): number => a - b

// TODO: Create the createMessage arrow function with type annotations
const createMessage = (text: string): string => `Message: ${text}`

// TODO: Create the isPositive arrow function with type annotations
const isPositive = (num: number): boolean => (num > 0) ? true : false

// TODO: Test your arrow functions and print the results
console.log(subtract(10, 3))
console.log(createMessage('Hello World'))
console.log(isPositive(-5))
console.log(isPositive(8))



/* ================================================================================================== */
console.log(`\n${"=".repeat(17)}  The 'void' Return Type  ${"=".repeat(17)}`,)
/*   The 'void' Return Type         

Use the void return type to explicitly indicate that a function doesn't return anything meaningful:

function logMessage(message: string): void {
  console.log(message);
}

function updateCounter(): void {
  counter++;
}
The void type represents the absence of a return value and is commonly used for functions that log messages, update variables, or perform side effects. While TypeScript can infer void, explicitly adding the annotation improves code readability.


Challenge  (Easy):

Create a function named displayWelcome that takes a parameter userName of type string and has an explicit return type of void. The function should print a welcome message to the console in the format: "Welcome to our application, [userName]!"

Create another function named logError that takes a parameter errorMessage of type string and has an explicit return type of void. The function should print an error message to the console in the format: "ERROR: [errorMessage]"

Create a third function named processData that takes no parameters and has an explicit return type of void. The function should print the message "Processing data..." to the console, then print "Data processing complete." on a new line.

Test your functions by calling them in the following order:

Call displayWelcome with "Alice"
Call processData with no arguments
Call logError with "Invalid input detected"
Call displayWelcome with "Bob"
Each function call should produce output on separate lines in the order specified above.
*/

// TODO: Write your code here
// Create the displayWelcome function that takes userName (string) and returns void
// Create the logError function that takes errorMessage (string) and returns void
// Create the processData function that takes no parameters and returns void

// TODO: Call the functions in the specified order:
// 1. displayWelcome with "Alice"
// 2. processData with no arguments
// 3. logError with "Invalid input detected"
// 4. displayWelcome with "Bob"