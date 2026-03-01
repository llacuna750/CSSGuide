export let message: string = "Coddy";

console.log(message);

let colors: readonly string[] = ["red", "green", "blue"];
let numbers: readonly number[] = [1, 2, 3, 4, 5];

// colors.push("yellow"); // Error: Property 'push' does not exist on type 'readonly string[]'.
