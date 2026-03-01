let message: string = "Coddy";

console.log(message);

let colors: readonly string[] = ["red", "green", "blue"];
let numbers: readonly number[] = [1, 2, 3, 4, 5];

// colors.push("yellow"); // Error: Property 'push' does not exist on type 'readonly string[]'.


// Regular array - any number of strings
let names: string[] = ["Alice", "Bob", "Charlie"];


// Tuple - exactly 2 elements: string, then number
let person: [string, number] = ["Alice", 25];


// Accessing tuple elements
console.log(person[0]); // Output: "Alice"
console.log(person[1]); // Output: 25

let item: [string, number] = ["Widget", 29.99];

item[1].toFixed(2); // Output: "29.99"

// let numero: number = 'Hello'; // Error: Type 'string' is not assignable to type 'number'.

