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
const displayWelcome = (userName: string): void => console.log(`Welcome to our application, ${userName}!`)

// Create the logError function that takes errorMessage (string) and returns void  
const logError = (errorMessage: string): void => console.log(`ERROR: ${errorMessage}`)

// Create the processData function that takes no parameters and returns void
const processData = (): void => console.log("Processing data...\nData processing complete.")

// TODO: Call the functions in the specified order:
// 1. displayWelcome with "Alice"
displayWelcome(`Alice`)

// 2. processData with no arguments
processData()

// 3. logError with "Invalid input detected"
logError('Invalid input detected')

// 4. displayWelcome with "Bob"
displayWelcome('Bob')


/* ================================================================================================== */
console.log(`\n${"=".repeat(17)}  Optional Parameters with '?'  ${"=".repeat(17)}`,)
/*    Optional Parameters with '?'      



To make a parameter optional in TypeScript, add a question mark ? after the parameter name but before the type annotation:

function greet(name: string, greeting?: string): string {
  if (greeting) {
    return greeting + ", " + name;
  }
  return "Hello, " + name;
}
Optional parameters have the type parameterType | undefined, so you should check if they exist before using them. You can call the function with or without the optional parameter:

greet("Alice")                    // "Hello, Alice"
greet("Alice", "Good morning")    // "Good morning, Alice"


Challenge   (Easy):

Create a function named createUserProfile that takes two parameters: username of type string (required) and displayName of type string (optional). The function should return a string with an explicit return type annotation.

When both parameters are provided, the function should return: "Profile: [displayName] (@[username])"

When only the username is provided, the function should return: "Profile: @[username]"

Create another function named calculateDiscount that takes two parameters: price of type number (required) and membershipLevel of type string (optional). The function should return a number with an explicit return type annotation.

When both parameters are provided, the function should return the price reduced by 10% (multiply by 0.9).

When only the price is provided, the function should return the original price unchanged.

Test your functions by calling them with the following values and printing the results:

Call createUserProfile with "john_doe" and "John Doe"
Call createUserProfile with only "jane_smith"
Call calculateDiscount with 100 and "premium"
Call calculateDiscount with only 75
Print each result on a separate line in the order specified above.
*/

// TODO: Write your code here
// Create the createUserProfile function with proper type annotations
function createUserProfile(username: string, displayName?: string): string {
  if (displayName) {
    return `Profile: ${displayName} (@${username})`
  }

  return `Profile: @${username}`
}

// Create the calculateDiscount function with proper type annotations
function calculateDiscount(price: number, membershipLevel?: string): number {
  if (membershipLevel) {
    return price * 0.9
  }

  return price
}

// Test the functions and print the results
console.log(createUserProfile('john_doe', 'John Doe'))
console.log(createUserProfile('jane_smith'))
console.log(calculateDiscount(100, 'premium'))
console.log(calculateDiscount(75))



/* ================================================================================================== */
console.log(`\n${"=".repeat(17)}  Default Parameter Values  ${"=".repeat(17)}`,)
/*  Default Parameter Values      


Default parameters provide fallback values when no argument is passed, making functions more convenient while maintaining type safety.

Create default parameters by assigning a value in the function signature using the equals sign. TypeScript automatically infers the parameter's type from the default value:

function greet(name: string, greeting = "Hello"): string {
  return greeting + ", " + name;
}

function calculateArea(width: number, height = 10): number {
  return width * height;
}
Default parameters are effectively optional - you don't need the ? syntax because the default value ensures the parameter always has a value. This eliminates the need to check for undefined inside your function.


Challenge  (Easy):

Create a function named calculateTax that takes two parameters: price of type number (required) and rate of type number with a default value of 0.05. The function should return the tax amount as a number with an explicit return type annotation.

The function should calculate the tax by multiplying the price by the rate.

Create another function named formatGreeting that takes two parameters: name of type string (required) and timeOfDay of type string with a default value of "Hello". The function should return a formatted greeting string with an explicit return type annotation.

The function should return the greeting in the format: "[timeOfDay], [name]!"

Create a third function named calculateShipping that takes three parameters: weight of type number (required), distance of type number (required), and expedited of type boolean with a default value of false. The function should return the shipping cost as a number with an explicit return type annotation.

The function should calculate shipping cost using this formula: (weight * 0.5) + (distance * 0.1). If expedited is true, multiply the result by 2.

Test your functions by calling them with the following values and printing the results:

Call calculateTax with 100 (using default rate)
Call calculateTax with 200 and 0.08
Call formatGreeting with "Alice" (using default time of day)
Call formatGreeting with "Bob" and "Good morning"
Call calculateShipping with 5 and 100 (using default expedited value)
Call calculateShipping with 3, 50, and true
Print each result on a separate line in the order specified above.
*/

// TODO: Write your code here

// Create the calculateTax function
function calculateTax(price: number, rate: number = 0.05): number {
  return price * rate
}

// Create the formatGreeting function
function formatGreeting(name: string, timeofDay: string = 'Hello'): string {
  return `${timeofDay}, ${name}!`
}


// Create the calculateShipping function
function calculateShipping(weight: number, distance: number, expedited: boolean = false): number {
  let cost = (weight * 0.5) + (distance * 0.1)

  if (expedited) {
    return cost *= 2
  }

  return cost
}


// Test the functions and print results
console.log(calculateTax(100))
console.log(calculateTax(200, 0.08))
console.log(formatGreeting('Alice'))
console.log(formatGreeting('Bob', 'Good morning'))
console.log(calculateShipping(5, 100))
console.log(calculateShipping(3, 50, true))


/* ================================================================================================== */
console.log(`\n${"=".repeat(17)}  Typing Rest Parameters  ${"=".repeat(17)}`,)
/*    Typing Rest Parameters      

Rest parameters use the spread operator (...) to collect remaining arguments into a typed array:

function sum(...numbers: number[]): number {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

// Can be called with any number of arguments
sum(1, 2);           // 3
sum(1, 2, 3, 4, 5);  // 15
The rest parameter must always be the last parameter in the function signature. You can combine regular parameters with rest parameters:

function concatenate(separator: string, ...strings: string[]): string {
  return strings.join(separator);
}


Challenge  (Easy):

Create a function named sumAll that uses rest parameters to accept any number of numeric arguments and returns their sum as a number. The function should have an explicit return type annotation.

Create another function named findMaximum that uses rest parameters to accept any number of numeric arguments and returns the largest value among them as a number. The function should have an explicit return type annotation.

Create a third function named concatenateStrings that takes a required separator parameter of type string, followed by rest parameters that accept any number of string arguments. The function should return all the string arguments joined together with the separator between them. The function should have an explicit return type annotation of string.

Test your functions by calling them with the following values and printing the results:

Call sumAll with 5, 10, and 15
Call sumAll with 1, 2, 3, 4, and 5
Call findMaximum with 8, 3, 12, and 7
Call findMaximum with 25 and 18
Call concatenateStrings with "-" as separator and "apple", "banana", "cherry"
Call concatenateStrings with " | " as separator and "red", "green", "blue", "yellow"
Print each result on a separate line in the order specified above.
*/

// TODO: Write your code here

// Create the sumAll function with rest parameters
function sumAll(...param: number[]): number {
  return param.reduce((acc, currElem) => acc + currElem)
}


// Create the findMaximum function with rest parameters
function findMaximum(...param: number[]): number {
  return Math.max(...param)
}

// Create the concatenateStrings function with separator and rest parameters
function concatenateStrings(separator: string, ...string: string[]): string {
  return string.join(separator)
}

// Test the functions and print results
console.log(sumAll(5, 10, 15));
console.log(sumAll(1, 2, 3, 4, 5));
console.log(findMaximum(8, 3, 12, 7));
console.log(findMaximum(25, 18));
console.log(concatenateStrings("-", "apple", "banana", "cherry"));
console.log(concatenateStrings(" | ", "red", "green", "blue", "yellow"));



/* ================================================================================================== */
console.log(`\n${"=".repeat(17)}  Typing Rest Parameters  ${"=".repeat(17)}`,)
/*  Defining Function Types    


TypeScript allows you to create a type alias for a function's signature using the type keyword. The syntax shows parameter types in parentheses followed by an arrow and the return type:

type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => {
  return a + b;
};

const multiply: MathOperation = (a, b) => {
  return a * b;
};
Function type aliases act like blueprints that functions must match, ensuring consistency across your codebase.


Challenge  (Easy):

Create a type alias named StringProcessor for a function that takes a single string parameter and returns a string.

Create a type alias named NumberCalculator for a function that takes two number parameters and returns a number.

Create a type alias named BooleanChecker for a function that takes a string parameter and returns a boolean.

Now implement the following functions that conform to these type aliases:

Create a function named toUpperCase of type StringProcessor that converts the input string to uppercase
Create a function named addPrefix of type StringProcessor that adds the prefix "Processed: " to the input string
Create a function named divide of type NumberCalculator that divides the first number by the second number
Create a function named power of type NumberCalculator that raises the first number to the power of the second number (use Math.pow)
Create a function named isEmpty of type BooleanChecker that returns true if the string has length 0, otherwise false
Create a function named startsWithA of type BooleanChecker that returns true if the string starts with the letter "A" (case-sensitive), otherwise false
Test your functions by calling them with the following values and printing the results:

Call toUpperCase with "hello world"
Call addPrefix with "data"
Call divide with 20 and 4
Call power with 3 and 4
Call isEmpty with ""
Call startsWithA with "Apple"
Print each result on a separate line in the order specified above.

*/

// TODO: Create type aliases here
// StringProcessor, NumberCalculator, BooleanChecker
type StringProcessor = (str: string) => string
type NumberCalculator = (num1: number, num2: number) => number
type BooleanChecker = (str: string) => boolean

// TODO: Implement the functions here
// toUpperCase, addPrefix, divide, power, isEmpty, startsWithA
const toUpperCase: StringProcessor = (str) => {
  return str.toUpperCase();
}

const addPrefix: StringProcessor = (str) => {
  return `Processed: ${str}`
}

const divide: NumberCalculator = (n1, n2) => {
  return n1 / n2
}

const power: NumberCalculator = (n1, n2) => {
  return Math.pow(n1, n2)
}

const isEmpty: BooleanChecker = (str) => {
  return str.length === 0
}

const startsWithA: BooleanChecker = (str) => {
  return str.charAt(0).toLowerCase() === 'a'
}


// TODO: Test your functions and print the results
// Call each function with the specified values and print the results
console.log(toUpperCase("hello world"))
console.log(addPrefix("data"))
console.log(divide(20, 4))
console.log(power(3, 4))
console.log(isEmpty(''))
console.log(startsWithA('Apple'))

