const hyphen = "-".repeat(2);
const space = " ".repeat(5);
const longHypen = "-".repeat(20);

//================================================  Strings In Depth  ================================================
console.log(`\n\n${longHypen}${hyphen}(  Strings In Depth  )${longHypen}`);
/* 
Iterate Over Strings: 
Strings are iterable objects in JavaScript, allowing you to loop through each character.

Using For Loop:
ex:
const text = "Hello";

for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}

Using For…of Loop:
const text = "World";

for (let char of text) {
  console.log(char);
}


Challenge (Easy):
Create a function named countUniqueVowels that takes a string as an argument and returns the number of unique vowels in the string (vowels are a, e, i, o, u). 
The function should not be case-insensitive. (include also the uppercased vowels)
*/

function countUniqueVowels(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let newArr = [];

  // console.log(`splitStr: `, str,`\n `);

  // Write code here
  for (let item of str) {
    for (let item2 of vowels) {
      if (item === item2 && !newArr.includes(item)) {
        newArr.push(item);
      }
    }
  }

  return newArr.length;

  // Coddy Solution:
  let foundVowels = [];
  for (let char of str) {
    if (vowels.includes(char) && !foundVowels.includes(char)) {
      foundVowels.push(char);
    }
  }
  return foundVowels.length;
}
// Do not write anything outside function

const argumentData = "aaa eee iii ooo uuu";
console.log(countUniqueVowels(argumentData));
// Do not write anything outside function

/* 
=================================================================================================================================
Challenge (Medium):
Create a function named reverseVowels that takes a string as its parameter and returns the string with all its vowels(a, e, i, o, u) reversed in position.
Non - vowel characters should stay in their original positions.

For example:

"hello" should return "holle"(because 'e' and 'o' swap positions)
"programming" should return "pregramming"(because 'o', 'a', and 'i' are reversed)
The function should be case -sensitive(treat uppercase and lowercase vowels differently).
*/

function reverseVowels(str) {
  // Write your code here
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let wordSwapVowel = [];
  const reserveVowels = [];

  console.log(`str:`, str, `Length:`, str.length);
  for (let v = str.length - 1; v >= 0; v--) {
    console.log(`Outer Indices: ${v} \nchar:`, str[v]);

    for (let i = 0; i < str.length - 1; i++) {
      if (reserveVowels.includes(str[i])) continue;

      if (
        wordSwapVowel.includes(str[i]) &&
        isDiffIndices(str[i], i, wordSwapVowel)
      )
        continue;

      if (isVowels(str[i], str[v], vowels)) {
        wordSwapVowel.push(str[v]);
        reserveVowels.unshift(str[i]); // reserve Array
      } else {
        wordSwapVowel.push(str[i]);
      }

      console.log(
        `${" ".repeat(17)} char: ${str[i]} ${" ".repeat(10)}Indices: ${i} = `,
        isVowels(str[i], str[v], vowels)
      );
    }
    console.log(`Current wordSwapVowel:`, wordSwapVowel, `\n`);
  }

  for (let item of reserveVowels) {
    console.log(`reserveVowels:`, item);
  }

  console.log(`Result:`, wordSwapVowel.join(""));
  console.log(`wordSwapVowel:`, wordSwapVowel);

  return wordSwapVowel.join("");

  const vbowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let chars = str.split("");
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    while (left < right && !vowels.has(chars[left])) left++;
    while (left < right && !vowels.has(chars[right])) right--;

    // Swap vowels
    [chars[left], chars[right]] = [chars[right], chars[left]];

    left++;
    right--;
  }

  return chars.join("");
}

function isDiffIndices(arrI, index, currentVow) {
  for (let i = 0; i < currentVow.length; i++) {
    if (currentVow[i] === arrI) {
      return index !== i;
    }
  }
}

function isVowels(i, v, vow) {
  if (vow.includes(i) && vow.includes(v)) {
    return true;
  }
  return false;
}

function compare(arr1, arr2, v, i) {
  if (arr1[i] === arr2[v] && v === i) {
    return true;
  }
  return false;
}

const dataR = `hello`;
console.log(`Reversed Vowels:`, reverseVowels(dataR));
console.log(`Wrong algorithm`);

/*
=================================================================================================================================
Template Literals:
Template literals use backticks `` to create strings and allow you to   insert expressions using ${}:

const userName = "Sam";
const message = `Welcome, ${userName}!`;
// Inserts userName inside the string


Template literals support multi-line strings without needing \n escape characters:
// Using \n
const message1 = `Line 1\nLine 2`;

// Using actual line breaks
const message2 = `Line 1
Line 2`;
// Both produce the same result



Challenge (Easy):
Create a function named greetAll that takes an array of names and returns one string. 
Each name in the array should produce a line with the format Hello, <Name>! joined together into a single string, 
separated by newlines. Use template literals for the greeting lines.
*/
const argumentGreetAll = ["Alice", "Bob", "Charlie"];
greetAll(argumentGreetAll);

function greetAll(names) {
  // Write your code here
  console.log(names);
  return names.forEach((name) => console.log(`Hello, ${name}!`));
}

/* =================================================================================================================================
String Methods:
Common string methods in JavaScript:

toUpperCase() and toLowerCase() convert strings to all uppercase or lowercase:
let str = "Hello";
console.log(str.toUpperCase()); // "HELLO"
console.log(str.toLowerCase()); // "hello"

replace() replaces the first occurrence of a value, while replaceAll() replaces all occurrences:
let str = "Hello World World";
console.log(str.replace("World", "JavaScript")); // "Hello JavaScript World"
console.log(str.replaceAll("World", "JavaScript")); // "Hello JavaScript JavaScript"


trim() removes whitespace from both ends of a string:
let str = "  Hello World  ";
console.log(str.trim()); // "Hello World"

charAt() returns the character at a specified index, or use bracket notation:
let str = "Hello";
console.log(str.charAt(1)); // "e"
console.log(str[1]); // "e"


Challenge (Easy):
Create a function named alternateCase that takes a string as input and returns a new string where the cases are alternated. 
The first character should be uppercase, the second lowercase, the third uppercase, and so on.
*/
const arguAlternaterCase = `Hello World`;
console.log(`AlternateCase:`, alternateCase(arguAlternaterCase));

function alternateCase(str) {
  // Write your code here
  str = str.split("");
  // str.forEach((string, index) => {
  //   if (index % 2 === 0) {
  //     console.table(`Index: ${index + 1}: ${string} ${' '.repeat(8)} ODD`);
  //   } else {
  //     console.table(`Index: ${index + 1}: ${string} ${' '.repeat(8)} EVEN`);
  //   }
  // })

  return str
    .map((ltr, index) => {
      return index % 2 === 0 ? ltr.toUpperCase() : ltr.toLowerCase();
    })
    .join("");
}
// Do not write anything outside function

/* =======================================================================================================================================
Challenge (Easy):
Create a function called formatBlogTitle that:

1. Takes a blog title string as input
2. Trims any whitespace from both ends
3. Makes the first character of each word uppercase
4. Replaces all occurrences of "Javascript" (case insensitive) with "JavaScript"
5. Returns the formatted title

Example Input:

"  how to learn javascript for beginners  "

Expected Output:

"How To Learn JavaScript For Beginners"
*/
let formatBT = ` advanced Javascript Techniques `;

formatBT = formatBT.trim();

console.log(formatBT);
console.log(`Outside:`, formatBT.split(" "));

for (let i = 0; i < formatBT.length; i++) {
  // console.log(formatBT[i]);

  if (!(formatBT[i].trim() === "")) {
  }
}
console.log(`formatBT:`, formatBlogTitle(formatBT));

function formatBlogTitle(title) {
  // Write your code here
  title = title.trim();
  const splitTitle = title.split(" ");

  // My Code
  return splitTitle
    .map((tit, index) => {
      const firstChar = tit.charAt(0);

      // if (tit === `javascript` || tit === `Javascript`) {
      //   tit = `Javascript`;
      // }

      if (
        firstChar === firstChar.toLowerCase() &&
        firstChar !== firstChar.toUpperCase()
      ) {
        // console.log('Gamay ang letter');
        console.log(
          `${index}: ${
            tit.charAt(0).toUpperCase() + tit.slice(1).toLowerCase()
          }`
        );

        return `${
          tit === `javascript` || tit === `Javascript`
            ? (tit = `JavaScript`)
            : tit.charAt(0).toUpperCase() + tit.slice(1).toLowerCase()
        }`;
      }
      return `${
        tit === `javascript` || tit === `Javascript`
          ? (tit = `JavaScript`)
          : tit.charAt(0).toUpperCase() + tit.slice(1).toLowerCase()
      }`;
    })
    .join(" ");

  // ChatGpt Code
  if (
    firstChar === firstChar.toLowerCase() &&
    firstChar !== firstChar.toUpperCase()
  ) {
    // capitalize first letter
    let formatted = tit.charAt(0).toUpperCase() + tit.slice(1).toLowerCase();

    // special case for "javascript"
    if (formatted.toLowerCase() === "javascript") {
      formatted = "Javascript";
    }

    return formatted;
  }

  // Cody Code:
  // Trim whitespace from both ends
  let trimmedTitle = title.trim();

  // Split the title into words
  let words = trimmedTitle.split(" ");

  // Capitalize the first letter of each word
  for (let i = 0; i < words.length; i++) {
    if (words[i]) {
      words[i] =
        words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
    }
  }

  // Join the words back together
  let formattedTitle = words.join(" ");

  // Replace all occurrences of "javascript" with "JavaScript"
  formattedTitle = formattedTitle.replaceAll("Javascript", "JavaScript");

  return formattedTitle;
}
// Do not write anything outside function

/* =======================================================================================================================================
Recap - String Weaver

Challenge (Easy):
Create a function named stringWeaver that takes two strings and returns a new string where:

1. Ignore numbers as if they don't exists. Remove all of the numbers from both strings first.
2. Characters from both strings alternate (first char from first string, first char from second string, second char from first string, etc.)
3. If one string is longer than the other, add the remaining characters at the end
4. Convert all vowels to uppercase

Return the final string
*/
let s1 = `sp3ace ship`;
let s2 = `al1ien invasion`;

// let splits1 = s1.toString();
// console.log(`Type of s1:`,typeof splits1  );
console.log(`Result Combined two String:`, stringWeaver(s1, s2));

function stringWeaver(str1, str2) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // Write your code here

  let bothString = [];
  let reserveString1 = [];
  let reserveString2 = [];

  // Convert numbers to string
  if (!isNaN(Number(str1))) str1 = str1.toString();
  if (!isNaN(Number(str2))) str2 = str2.toString();

  let spltStr1 = str1.split("");
  let spltStr2 = str2.split("");

  console.log(`Split str1:`, spltStr1, `= ${spltStr1.length}`);
  console.log(`Split str2:`, spltStr2, `= ${spltStr2.length}`);

  let x = 0;
  let y = 0;

  console.log(`\nIs not a number?\n`);
  while (x < spltStr1.length || y < spltStr2.length) {
    // console.log(`What boolean value?`, spltStr1[6]  === ' ');

    console.log(`String 1:`, spltStr1[x], isNaN(Number(spltStr1[x])));
    console.log(`String 2:`, spltStr2[y], isNaN(Number(spltStr2[y])), `\n`);
    if (!numbers.includes(spltStr1[x])) {
      reserveString1.push(spltStr1[x]);
    }

    if (!numbers.includes(spltStr2[y])) {
      reserveString2.push(spltStr2[y]);
    }

    x++;
    y++;
  }

  // bothString.push(reserveString1);
  // bothString.push(reserveString2);

  // console.table(bothString);
  // console.table(bothString.length);

  let c = 0;

  while (c < reserveString1.length || c < reserveString2.length) {
    // null coalishing can print the Falsy Values
    const rStr1 = reserveString1[c] ?? null;
    const rStr2 = reserveString2[c] ?? null;

    // const example = undefined ?? `Gwapo ko`;
    // console.log(`Undefined === null?`,undefined === null);
    // console.log(`' ' === null?`,' ' === 1);
    // console.log(`Example:`, example);

    console.log(rStr1);
    console.log(rStr2);
    console.log();

    if (rStr1 !== null) {
      bothString.push(vowels.includes(rStr1) ? rStr1.toUpperCase() : rStr1);
    }

    if (rStr2 !== null) {
      bothString.push(vowels.includes(rStr2) ? rStr2.toUpperCase() : rStr2);
    }

    c++;
  }

  console.table(bothString);
  console.log(`Current Str1:`, reserveString1);
  console.log(`Current Str2:`, reserveString2);

  return bothString.join("");

  const vowelss = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const numberss = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  // Remove numbers from both strings
  let cleanStr1 = "";
  let cleanStr2 = "";

  for (let i = 0; i < str1.length; i++) {
    if (!numbers.includes(str1[i])) {
      cleanStr1 += str1[i];
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (!numbers.includes(str2[i])) {
      cleanStr2 += str2[i];
    }
  }

  let result = "";
  let i = 0;

  // Alternate characters while both strings have characters
  while (i < cleanStr1.length && i < cleanStr2.length) {
    // Add character from first string
    let char1 = cleanStr1[i];
    if (vowels.includes(char1)) {
      char1 = char1.toUpperCase();
    }
    result += char1;

    // Add character from second string
    let char2 = cleanStr2[i];
    if (vowels.includes(char2)) {
      char2 = char2.toUpperCase();
    }
    result += char2;

    i++;
  }

  // Add remaining characters from longer string
  let remaining =
    cleanStr1.length > cleanStr2.length
      ? cleanStr1.slice(i)
      : cleanStr2.slice(i);
  for (let j = 0; j < remaining.length; j++) {
    let char = remaining[j];
    if (vowels.includes(char)) {
      char = char.toUpperCase();
    }
    result += char;
  }

  return result;
}
// Do not write anything outside function

//================================================  Multi - dimensional Arrays  ================================================
console.log(
  `\n\n${longHypen}${hyphen}(  Multi-dimensional Arrays  )${longHypen}`
);

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

let word2Day = "gabgabllacuna";
let complete;
console.log(
  `Word of the Day: ${word2Day} \nand Count all the duplicated letter ignore casing`
);
let letDuplicate = 0;

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
        )} ${hyphen}${y}${hyphen} ${space}=${space}${xRegex.test(y)} Besh`
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

/*
===================================== 2D Arrays Basics =====================================

A 2D array is an array containing sub-arrays, where each sub-array represents a row in a grid:
const cinema = [
  [true,  true],  // Row 0
  [false, true]   // Row 1
];
// 2x2 grid


const matrix = [
    [1,  2,  3,  4],
    [5,  6,  7,  8],
    [9, 10, 11, 12]
];
// 3x4 grid (3 rows, 4 columns)

Questions:
1. If you wanted to represent a chessboard using a 2D array, what would be the dimensions of the array?
d. 8x8

2. What does this represent:
const grid = [[1,2], [3,4], [5,6]]
c. 3x2 grid

3. In a 2D array, which statement is correct?
b. The first index represents the row, the second represents the column
*/

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

/* ===================================== Accessing 2D Array Elements =====================================

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

  // Coddy Solution:
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

const cha5 = {
  a1: [
    [1, 4, 3],
    [7, 5, 9],
    [2, 8, 6],
  ],
};

function findMaxInRows(matrix) {
  // Your code here
  let max = []; // Get max value each row
  let current = 0;
  let nextNum = 0;
  let semiDako = 0;
  let pinaDako = 0;

  for (let r = 0; r < matrix.length; r++) {
    // console.log(`Row / Index: ${r}`);
    // console.log(matrix[r]);

    for (let c = 0; c < matrix[r].length - 1; c++) {
      current = matrix[r][c];
      nextNum = matrix[r][c + 1];

      if (current <= nextNum) {
        semiDako = nextNum;
      } else {
        semiDako = current;
      }

      if (semiDako >= pinaDako) {
        pinaDako = semiDako;
      }

      // console.log(
      //   `${space} ${current}  <=  ${nextNum}  =  ${current <= nextNum}`
      // );
    }
    // console.log(`${" ".repeat(25)}Pinaka dako: ${pinaDako}`);
    max.push(pinaDako);
    current, nextNum, semiDako, (pinaDako = 0);
  }

  return max;

  // Coddy Solution:
  for (let r = 0; r < matrix.length; r++) {
    let rowMax = matrix[r][0]; // Start with first value in row

    for (let c = 1; c < matrix[r].length; c++) {
      if (matrix[r][c] > rowMax) {
        rowMax = matrix[r][c];
      }
    }

    maxValues.push(rowMax);
  }
}
// Do not modify below this line

console.log(`Result max in rows:`, findMaxInRows(cha5.a1));

const data = {
  count: 10,
  active: true,
};
console.log(data["count"] + data.active);

let greeting = "Hello";
greeting = greeting.toLowerCase();
console.log(greeting);

const reserveVowels = [`u`, `o`, `i`];

reserveVowels.push(`e`);
reserveVowels.push(`a`);

for (let item of reserveVowels) {
  console.log(`reserveVowels:`, item);
}

console.log(`Result:`, reserveVowels.join(""));

/* =====================================  Recap - 2D Arrays  =====================================

Challenge (Easy):
Create a function mirrorRows that takes a 2D array matrix as an argument and returns a new 2D array in which each row is reversed.
*/

const arguMirrorRows = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(`MirrorRows Output:`, mirrorRows(arguMirrorRows));

function mirrorRows(matrix) {
  // TODO: Return a new 2D array where each row is reversed.

  // console.log(`\nMatrix Length:`,matrix.length,'\n--------------------------------------------');
  console.table(matrix);

  let matLgth = matrix.length; // 3

  let row = 0;
  while (row < matrix.length) {
    let col = 0;
    let startVal = matrix[row][col];
    let endVal = matrix[row].length - 1;

    while (col < matrix[row].length) {
      // console.log(matrix[row].length-1);
      // console.log(`Col: ${col} ${space}  end Col: ${matrix[row].length-1}`);

      if (col < endVal) {
        // console.log(`mtxlngth:`, matrix[row].length);

        // Swap
        [matrix[row][col], matrix[row][endVal]] = [
          matrix[row][endVal],
          matrix[row][col],
        ];
      }

      // console.log(`Output endVal: ${endVal}`);
      console.log(
        `matrix[r][c] =`,
        matrix[row][col],
        `${space} Row = ${row} ${"".repeat(
          4
        )} Col = ${col}  ${space}  end Col: ${endVal}`
      );
      endVal--;

      // console.log(`matrix[r][c] =`, startVal);
      // console.log(`matrix[row].length =`, endVal);
      console.log();
      col++;
    }

    console.log();
    row++;
  }

  return matrix;

  const mirrored = [];
  for (let r = 0; r < matrix.length; r++) {
    // Reverse each row
    const reversedRow = [...matrix[r]].reverse();
    mirrored.push(reversedRow);
  }
  return mirrored;
}
// Do not write anything outside function

/* =====================================  Matrix Addition & Substraction  =====================================
Matrix addition and subtraction require matrices with the same dimensions. Operations are performed element-wise on corresponding elements.

Example of matrix addition:
Matrix A:
1 2
3 4

Matrix B:
5 6
7 8

A + B:
(1+5) (2+6)
(3+7) (4+8)

Result:
6  8
10 12


Create a function named combineMatrices that takes three arguments: matrixA, matrixB, 
and a string op which can be either "+" or "-". For each cell, if op is "+", the result should be matrixA[r][c] + matrixB[r][c]. 
Otherwise, if op is "-", the result should be matrixA[r][c] - matrixB[r][c].
*/

const mtxA = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const mtxB = [
  [16, 15, 14, 13],
  [12, 11, 10, 9],
  [8, 7, 6, 5],
  [4, 3, 2, 1],
];

/*Expected Output

[
  [ -15, -13, -11, -9 ],
  [ -7, -5, -3, -1 ],
  [ 1, 3, 5, 7 ],
  [ 9, 11, 13, 15 ]
] 

*/

const op = "-";

console.table(mtxA);
console.table(mtxB);

console.log(`mtxA[0][0] + mtxB[0][0]:`, mtxA[0][0] + mtxB[0][0]);
console.log(`Length:`, mtxA.length);
console.log();

const resComMtx = combineMatrices(mtxA, mtxB, op);
console.log(`resComMtx:`, resComMtx);

function combineMatrices(matrixA, matrixB, ope) {
  // TODO: For each cell, if op is '+', add the corresponding cells.
  // Otherwise, subtract them. Return the resulting 2D array.

  return matrixA.map((otrVal, otrIdx) => {
    console.log(`\n${"=".repeat(20)} ${otrIdx} ${"=".repeat(20)}`);

    return otrVal.map((innVal, innIdx) => {
      console.log(`innVal & index: ${innIdx} ${space}`, innVal);
      switch (ope) {
        case "+":
          return innVal + matrixB[otrIdx][innIdx];

        case "-":
          return innVal - matrixB[otrIdx][innIdx];

        default:
          return `Sorry, but ${ope} is not recognize operation!`;
      }
    });
  });

  // Coddy Solution Code
  const rows = matrixA.length;
  const cols = matrixA[0].length;
  const result = [];

  for (let r = 0; r < rows; r++) {
    const rowArr = [];
    for (let c = 0; c < cols; c++) {
      if (op === "+") {
        rowArr.push(matrixA[r][c] + matrixB[r][c]);
      } else {
        rowArr.push(matrixA[r][c] - matrixB[r][c]);
      }
    }
    result.push(rowArr);
  }

  return result;
}
// Do not write anything outside function

/*  ==========================================================================================
Challenge  (Medium):
Create a function named multiplyMatrices that takes two matrices (matrixA and matrixB) and returns their product.

For matrix multiplication:

Each element in the result matrix is the dot product of a row from the first matrix and a column from the second matrix
Matrix A with dimensions (m × n) can only be multiplied with matrix B with dimensions (n × p)
The resulting matrix will have dimensions (m × p)

Example Input:
matrixA = [[1, 2], [3, 4]]
matrixB = [[5, 6], [7, 8]]

Expected Output:
[[19, 22], [43, 50]]
*/

function multiplyMatrices(matrixA, matrixB) {
  // Write your code here
  // Check if matrices can be multiplied
  // Create the result matrix with appropriate dimensions
  // Calculate each element in the result matrix
}
// Do not write anything outside function




/* =====================================  Jagged Arrays  =====================================
A jagged array is a 2D array where each row can have a different length:

const classroom = [
  ["Alice", "Bob"],
  ["Charlie", "Diana", "Eve"],
  ["Frank"]
];


The first row has 2 elements, the second row has 3, and the third row has 1.

 Challenge (Easy):
Create a function named sumJagged that receives a jagged array of numbers and returns 
the total sum of all elements across every row, regardless of row length. 

example:
Input: [[1, -2, 3], [4, -5], [6], [-7, 8, -9, 10]]
Expected Output: 9
*/

let sumJuggArgs = [[1, -2, 3], [4, -5], [6], [-7, 8, -9, 10]];

console.log(`Result Sugjagged:`,sumJagged(sumJuggArgs));

function sumJagged(jaggedArray) {
  // TODO: Implement logic to sum all elements of the jagged array.

  return jaggedArray.reduce((total, currentElement, index) => {
    // console.log(`Index: ${index} ${space} Total: ${total} ${space} currentElement: ${currentElement}`);

    // return total + currentElement.reduce((a, b) => a + b, 0);

    console.log(total);
    return total + currentElement.reduce((a, b) => {
      console.log(`total ${a} ${space} b: ${b}`);  
      
      return a + b

    }, 0)
  }, 0);

  // let total = 0;

  // for (let o=0; o<jaggedArray.length; o++) {
  //   for (let i=0; i<jaggedArray[o].length; i++) {
  //     console.log(jaggedArray[o][i]);

  //     total += jaggedArray[o][i];
  //   }
  // }
  // return total;
}
// Do not write anything outside function
