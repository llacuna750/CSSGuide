// Reverse String using Built-in reverse method

let word4Today = "Start Code";
let splitWord = word4Today.split("").reverse();

console.log(word4Today);
console.log(splitWord.join(""));

// Reverse String without using Built-in reverse method

let word2025 = "Still relax";
let split_Word = word2025.split("");

console.log(word2025);
console.log(split_Word);
// console.log(split_Word.length);
let newArr = [];

for (let i = split_Word.length - 1; i >= 0; i--) {
  // console.log(split_Word[i]);
  newArr.push(split_Word[i]);
}

console.log(`Reversed Output: `, newArr.join(""));

// Challenge: Count the duplicate letter in the word

let word2Day = "DabdabGwapoPromise";
let complete;
console.log(
  `Word of the Day: ${word2Day} \nand Count all the duplicated letter ignore casing`
);
let letDuplicate = 0;

const hyphen = "-".repeat(2);
const space = " ".repeat(5);

complete = false;
let countdupliLetter = 0;

let dupliHere = [];
for (let i = 0; i < word2Day.length; i++) {
  console.log(word2Day[i]);

  for (let j = i + 1; j < word2Day.length; j++) {
    countdupliLetter = isEqualLetter(
      word2Day[i],
      word2Day[j],
      countdupliLetter,
      dupliHere
    );
  }
}

console.log(`Count duplicated number:`, countdupliLetter);
console.log("Duplicate letters found:", dupliHere);

function isEqualLetter(x, y, z, dupArr) {
  const xRegex = new RegExp(x, "i");

  try {
    if (xRegex.test(y)) {
      console.log(
        `${hyphen}${x}${hyphen}${" ".repeat(5)}==${" ".repeat(
          5
        )}${hyphen}${y}${hyphen} ${space}=${space}${xRegex.test(y)} Besh`
      );

      dupArr.push(y);

      z += 1;
    } else {
      console.log(
        `${hyphen}${x}${hyphen}${" ".repeat(5)}==${" ".repeat(
          5
        )}${hyphen}${y}${hyphen} ${space}=${space}${xRegex.test(y)}`
      );
    }
  } catch (error) {
    console.log("Error an occur");
  } finally {
    return z;
  }
}

// let A = 'a';
// let a = 'a';
// console.log(`${A} == ${a} = ${A == a}`);

// const regex = /example/i; // Matches "example", "Example", "EXAMPLE", etc.
// const text = "This is an Example string.";
// const match = text.match(regex); // match will contain the matched string if found
// console.log(match);

const jsonString = `{"name":"Bob","age":25,"city":"London"}`;

const myObject = JSON.parse(jsonString);
// const myObjectTarget = JSON.parse(myObject);

console.log(`Converted Object:`, myObject);
console.log(myObject.age);
console.log(myObject.name);
console.log(`JSON:`, jsonString);

/*
Accessing 2D Array Elements

Accessing elements in a 2D array is similar to accessing elements in a 1D array, but instead of using a single index, 
you use two indices: one for the row and one for the column. For instance:

const seats = [
  ['A1', 'A2', 'A3'],
  ['B1', 'B2', 'B3']
];
// seats[0][2] -> 'A3'
// seats[1][1] -> 'B2'


Remember that indices in JavaScript start a 0, so the first row is at index 0, 
the second row is at index 1, and so on.


Challenge:

Easy
Create a function named getColumn that takes three arguments: a 2D array matrix, an integer numberOfRows, 
and an integer colIndex. The function should return an array containing all elements in the specified column colIndex. 


Test 1:
[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
number of rows: 3
target index number: 1

Expected Output: 
[ 2, 5, 8 ]
*/

const seats = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const test1 = {
  f1rst_Argument: seats,
  scnd_Argument: 3,
  t3rd_Argument: 1,
};

const expectOutput = [2, 5, 8];

console.log(test1);
console.log(`Expected Output:`, expectOutput);
console.log(`Seats length:`, seats.length);

function getColumn(matrix, numberOfRows, colIndex) {
  let newItems = [];
  // TODO: Return an array containing elements from the specified column index
  let complete = false;

  do {
    if (newItems.length === numberOfRows) {
      complete = true;
      return newItems;
    }

    matrix.forEach((item, index) => {
      console.log(`Index ${index}:`, item[colIndex]);
      newItems.push(item[colIndex]);
    });
  } while (!complete);
}
// Do not write anything outside function

const res_Test1 = getColumn(seats, 3, 1);
console.log(`Result: `, res_Test1);

/*
Challenge: (Easy)

Create a function named getElementsInRow that takes two arguments:

A 2D array called grid
An integer rowIndex
The function should return an array containing all elements in the specified row. If the rowIndex is out of bounds (negative or greater than or equal to the number of rows), return an empty array.

Example Input:
const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const rowIndex = 1;

Expected Output: [4, 5, 6]
*/

// Challenge 2
const argument = {
  f_A: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  s_A: 2,
};

function getElementsInRow(grid, rowIndex) {
  // TODO: Return an array with all elements in the specified row
  // If rowIndex is out of bounds, return an empty array

  // Check if rowIndex is valid
  if (rowIndex < 0 || rowIndex >= grid.length) {
    return [];
  }

  // Return the row at the specified index
  return grid[rowIndex];
}
// Do not write anything outside the function

console.log(`getElementsRow:`, getElementsInRow(argument.f_A, argument.s_A));

/*
Nested Loops with 2D Arrays
[["a", "b", "a"], ["c", "a", "d"], ["a", "e", "f"]]
a
expected Output: 4

Use nested loops to iterate over 2D arrays - the outer loop for rows and inner loop for columns:

const seats = [
  [true, true, false],
  [true, false, true]
];

for (let r = 0; r < seats.length; r++) {
  // Outer loop iterates over rows
  for (let c = 0; c < seats[r].length; c++) {
    // Inner loop iterates over columns
    // Access element with seats[r][c]
  }
}


Challenge (Easy):
Create a function named countOccurrences that takes a 2D array of strings matrix and a string target. 
It should return how many times target appears across all rows and columns.
*/

const argu3 = {
  a1: [
    ["a", "b", "a"],
    ["c", "a", "d"],
    ["a", "e", "f"],
  ],
  a2: "a",
};

function countOccurrences(matrix, target) {
  // TODO: Implement logic to count how many times 'target' appears in matrix
  let count = 0;

  for (let r = 0; r < matrix.length; r++) {
    console.log(`Row: ${r}`);

    for (let c = 0; c < matrix[r].length; c++) {
      console.log(
        `${" ".repeat(7)}    c = ${c} ${" ".repeat(2)} ${matrix[r][c]}`
      );
      if (matrix[r][c] === target) {
        count++;
      }
    }
  }

  // matrix.forEach(access => {
  //   access.forEach((item, index) => {
  //     console.log(`Index: ${index}: ${item}`);

  //     if (item === target) {
  //       count++;
  //     }
  //   });
  // });

  return count;
}
// Do not write anything outside function

console.log(
  `How many letter is this targeted in a 2D array? ${argu3.a2}:  `,
  countOccurrences(argu3.a1, argu3.a2)
);


/* 
Challenge (Easy):

Create a function named findMaxInRows that takes a 2D array of numbers (matrix). The function should:

Find the maximum value in each row
Return an array containing these maximum values

For example:
const matrix = [
  [3, 7, 2],
  [9, 1, 5],
  [6, 0, 4]
];

Should return [7, 9, 6] since 7 is the max in row 0, 9 is the max in row 1, 
and 6 is the max in row 2.
 */

function findMaxInRows(matrix) {
  // Your code here
}

// Do not modify below this line