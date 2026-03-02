/* ================================================================================================== */
console.log(`\n${"=".repeat(17)}  Typed Arrays  ${"=".repeat(17)}`,);


/*     Typed Arrays         
Typed arrays in TypeScript ensure that arrays only contain elements of a specific type using the Type[] syntax:

let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];
let flags: boolean[] = [true, false, true];
TypeScript enforces type safety by preventing you from mixing incompatible types in the same array, catching errors during development.

Challenge  (Easy):

Create a typed array named scores that can only hold numbers and initialize it with the values 85, 92, and 78.

Then create another typed array named studentNames that can only hold strings and initialize it with the values "Alice", "Bob", and "Charlie".

Finally, create a typed array named passedExams that can only hold boolean values and initialize it with true, false, and true.

Print all three arrays to the console on separate lines in the order they were created.       
*/

// TODO: Write your code here
// Create the three typed arrays as described in the challenge
const scores: number[] = [85, 92, 78]
const studentNames: string[] = ['Alice', 'Bob', 'Charlie']
const passedExams: boolean[] = [true, false, true]

// Print all three arrays to the console
console.log(scores)
console.log(studentNames)
console.log(passedExams)




/* ================================================================================================== */
console.log(`\n${"=".repeat(17)}  'readonly' Modifier for Arrays  ${"=".repeat(17)}`,);
/*   'readonly' Modifier for Arrays         
The readonly modifier prevents any changes to an array's contents once created, making it immutable:

let colors: readonly string[] = ["red", "green", "blue"];
let numbers: readonly number[] = [1, 2, 3, 4, 5];
Readonly arrays block all mutating operations like push(), pop(), splice(), and direct index assignment, preventing compile-time errors.

Challenge   (Easy):

Create a readonly array named configValues that can only hold strings and initialize it with the values "production", "database", and "cache".

Then create another readonly array named ports that can only hold numbers and initialize it with the values 3000, 5432, and 6379.

Finally, create a readonly array named features that can only hold boolean values and initialize it with true, false, and true.

Print all three readonly arrays to the console on separate lines in the order they were created.       
*/

// TODO: Write your code here
let configValues: readonly string[] = ["production", "database", "cache"]
let ports: readonly number[] = [3000, 5432, 6379]
let features: readonly boolean[] = [true, false, true]

console.log(configValues)
console.log(ports)
console.log(features)



/* ================================================================================================== */
console.log(`\n${"=".repeat(17)}  What is a Tuple?  ${"=".repeat(17)}`,);
/*   What is a Tuple?           

A tuple is an array with a fixed number of elements where the type of each element at each position is known and defined.

// Regular array - any number of strings
let names: string[] = ["Alice", "Bob", "Charlie"];

// Tuple - exactly 2 elements: string, then number
let person: [string, number] = ["Alice", 25];
Tuples have a fixed structure - each position must contain the specified type and no additional elements are allowed.       
*/

console.log('Read the document about tuple.')


/* ================================================================================================== */
console.log(`\n${"=".repeat(17)}  Declaring and Accessing Tuples  ${"=".repeat(17)}`,);
/*     Declaring and Accessing Tuples       

Tuples in TypeScript are arrays with fixed types and length. Declare them using square brackets with specific types in order:

let productInfo: [string, number] = ["Laptop", 999];
let coordinates: [number, number] = [10, 20];
let userRecord: [number, string, boolean] = [1, "Alice", true];
Access tuple elements using index notation with full type safety:

let product: [string, number] = ["Phone", 599];
console.log(product[0]); // "Phone" (string)
console.log(product[1]); // 599 (number)



Challenge   (Easy):

Create a tuple named productInfo that holds a string (product name) followed by a number (price). Initialize it with the product name "Gaming Mouse" and the price 79.

Then create another tuple named coordinates that holds two numbers representing x and y positions. Initialize it with the values 15 and 25.

Access and print the product name from the productInfo tuple.

Access and print the price from the productInfo tuple.

Access and print the x coordinate from the coordinates tuple.

Access and print the y coordinate from the coordinates tuple.

Print each value on a separate line in the order specified above.       
*/

// TODO: Write your code here
// Create the productInfo tuple with product name and price
// Create the coordinates tuple with x and y positions
// Access and print each value as specified
let productInfo: [string, number] = ['Gaming Mouse', 79]
let coordinates: [number, number] = [15, 25]

for (let pinfo of productInfo) {
    console.log(pinfo)
}

for (let cn of coordinates) {
    console.log(cn)
}


/* ================================================================================================== */
console.log(`\n${"=".repeat(17)}  Destructuring Tuples  ${"=".repeat(17)}`,)
/*     Destructuring Tuples     

Destructuring allows you to extract values from tuples into separate variables in a single line using square brackets:

let userInfo: [number, string] = [42, "Alice"];
let [id, name] = userInfo;

console.log(id);   // 42 (TypeScript knows this is a number)
console.log(name); // "Alice" (TypeScript knows this is a string)
TypeScript maintains type information for each destructured variable based on the tuple's type definition.



Challenge  (Easy):

Create a tuple named employee that holds a number (employee ID) followed by a string (employee name). Initialize it with the ID 1001 and the name "Sarah Johnson".

Use destructuring to extract the values from the employee tuple into two separate variables named empId and empName.

Create another tuple named coordinates that holds two numbers representing latitude and longitude coordinates. Initialize it with the values 40.7128 and -74.0060.

Use destructuring to extract the values from the location tuple into two separate variables named latitude and longitude.

Print the destructured variables in the following order, each on a separate line:

Print the employee ID
Print the employee name
Print the latitude
Print the longitude
*/

// TODO: Write your code here
// Create the employee tuple with ID 1001 and name "Sarah Johnson"
// Use destructuring to extract empId and empName
let employee: [number, string] = [1001, 'Sarah Johnson']
let [empId, empName] = employee

// Create the coordinates tuple with values 40.7128 and -74.0060 (avoid using 'location' as variable name)
// Use destructuring to extract latitude and longitude
let coordinates2: [number, number] = [40.7128, -74.0060]
let [latitude, longitude] = coordinates2

// Print all four variables in the specified order

// Print the results (uncomment and modify as needed)
console.log(empId);
console.log(empName);
console.log(latitude);
console.log(longitude);


/* ================================================================================================== */
console.log(`\n${"=".repeat(17)}  Readonly Tuples  ${"=".repeat(17)}`,)
/*    Readonly Tuples       
Create readonly tuples using the readonly modifier before the tuple type to prevent modifications after initialization:

let point: readonly [number, number] = [10, 20];
let coordinates: readonly [string, number, number] = ["A", 5, 15];

Readonly tuples are useful for structured data like coordinates, RGB values, or database records that shouldn't change once created.


Challenge  (Easy):

Create a readonly tuple named startPointthat represents a 2D point with two numbers (x and y coordinates). Initialize it with the values 0 and 0.

Create another readonly tuple named colorRGB that represents an RGB color value with three numbers (red, green, blue). Initialize it with the values 255, 128, and 64.

Create a third readonly tuple named userRecord that holds a number (user ID), a string (username), and a boolean (active status). Initialize it with the values 42, "admin", and true.

Print all three readonly tuples to the console on separate lines in the order they were created.       
*/

// TODO: Write your code here
// Create the readonly tuples as described in the challenge
let startPointthat: readonly [number, number] = [0, 0]
let colorRGB: readonly [number, number, number] = [255, 128, 64]
let useRecord: readonly [number, string, boolean] = [42, 'admin', true]


// Print all three tuples
console.log(startPointthat)
console.log(colorRGB)
console.log(useRecord)


/* ================================================================================================== */
console.log(`\n${"=".repeat(17)}  Multi-dimensional Typed Arrays  ${"=".repeat(17)}`,)
/*    Multi-dimensional Typed Arrays            

Multi-dimensional arrays in TypeScript are arrays of arrays, providing type safety for grid-like data structures.

To declare a 2D array, use the Type[][] syntax:

let grid: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let gameBoard: string[][] = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "O", "X"]
];
Access elements using multiple square brackets - first index for row, second for column:

let matrix: number[][] = [[1, 2], [3, 4]];
console.log(matrix[0][1]); // 2 (first row, second column)
console.log(matrix[1][0]); // 3 (second row, first column)


Challenge  (Easy):
Create a 2D array named gameGrid that can hold numbers and initialize it as a 3x3 matrix with the following values:

First row: 1, 2, 3
Second row: 4, 5, 6
Third row: 7, 8, 9
Create another 2D array named chessBoard that can hold strings and initialize it as a 2x2 matrix with the following values:

First row: "white", "black"
Second row: "black", "white"
Access and print the element at the second row, first column of the gameGrid array.

Access and print the element at the first row, second column of the chessBoard array.

Print each value on a separate line in the order specified above.           
*/