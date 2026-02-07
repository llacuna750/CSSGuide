const hyphen = "-".repeat(2);
const space = " ".repeat(5);
const longHypen = "-".repeat(20);
export { hyphen, space, longHypen };

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
        isVowels(str[i], str[v], vowels),
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
          }`,
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
  `\n\n${longHypen}${hyphen}(  Multi-dimensional Arrays  )${longHypen}`,
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
  `Word of the Day: ${word2Day} \nand Count all the duplicated letter ignore casing`,
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
      dupliHere,
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
          5,
        )} ${hyphen}${y}${hyphen} ${space}=${space}${xRegex.test(y)} Besh`,
      );

      dupArr.push(y);

      z += 1;
    } else {
      console.log(
        `${hyphen}${x}${hyphen}${" ".repeat(5)}==${" ".repeat(
          5,
        )}${hyphen}${y}${hyphen} ${space}=${space}${xRegex.test(y)}`,
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
        `${" ".repeat(7)}    c = ${c} ${" ".repeat(2)} ${matrix[r][c]}`,
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
  countOccurrences(argu3.a1, argu3.a2),
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
    (current, nextNum, semiDako, (pinaDako = 0));
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
          4,
        )} Col = ${col}  ${space}  end Col: ${endVal}`,
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

console.log(`Result Sugjagged:`, sumJagged(sumJuggArgs));

function sumJagged(jaggedArray) {
  // TODO: Implement logic to sum all elements of the jagged array.

  return jaggedArray.reduce((total, currentElement, index) => {
    // console.log(`Index: ${index} ${space} Total: ${total} ${space} currentElement: ${currentElement}`);

    // return total + currentElement.reduce((a, b) => a + b, 0);

    console.log(total);
    return (
      total +
      currentElement.reduce((a, b) => {
        console.log(`total ${a} ${space} b: ${b}`);

        return a + b;
      }, 0)
    );
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

/* Coddy Solution:
function sumJagged(jaggedArray) {
  let total = 0;
  for (let r = 0; r < jaggedArray.length; r++) {
    for (let c = 0; c < jaggedArray[r].length; c++) {
      total += jaggedArray[r][c];
    }
  }
  return total;
}
*/

console.log(`\n\n${longHypen}${hyphen}(  flattenJagged )${longHypen}`);

/*
Challenge (Easy):
Create a function named flattenJagged that takes a jagged array as input 
and returns a new one-dimensional array containing all the elements from the jagged array.

Example Input:
  const jaggedArray = [
    [1, 2],
    [3, 4, 5],
    [6]
  ];

Expected Output:
  [1, 2, 3, 4, 5, 6]
*/

function flattenJagged(jaggedArray) {
  // Your code here]
  let flattArr = [];
  // console.log(jaggedArray[0])

  for (let row = 0; row < jaggedArray.length; row++) {
    // console.log(`${space}Row: ${row}`)

    for (let col = 0; col < jaggedArray[row].length; col++) {
      flattArr.push(jaggedArray[row][col]);
    }
  }

  return flattArr;
}
// Do not write anything outside function

/*
Coddy Solution:
function flattenJagged(jaggedArray) {
  let result = [];
  
  for (let i = 0; i < jaggedArray.length; i++) {
    for (let j = 0; j < jaggedArray[i].length; j++) {
      result.push(jaggedArray[i][j]);
    }
  }
  
  return result;
}
*/
console.log(
  flattenJagged([
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9],
  ]),
);

console.log(`\n\n${longHypen}${hyphen}(  multiplyMatrices )${longHypen}`);
/*  
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

// ChatGPT solution
function multiplyMatrices(matrixA, matrixB) {
  // Step 1: check if multiplication is possible
  if (matrixA[0].length !== matrixB.length) {
    return "Matrix multiplication not possible";
  }

  const result = [];

  // Step 2: loop through rows of matrixA
  for (let i = 0; i < matrixA.length; i++) {
    result[i] = [];

    // Step 3: loop through columns of matrixB
    for (let j = 0; j < matrixB[0].length; j++) {
      let sum = 0;

      // Step 4: dot product
      for (let k = 0; k < matrixB.length; k++) {
        sum += matrixA[i][k] * matrixB[k][j];
      }

      // Step 5: store result
      result[i][j] = sum;
    }
  }

  return result;
}
// Do not write anything outside function

/* Coddy Solution:
function multiplyMatrices(matrixA, matrixB) {
  const rowsA = matrixA.length;
  const colsA = matrixA[0].length;
  const rowsB = matrixB.length;
  const colsB = matrixB[0].length;
  
  const result = [];
  
  for (let i = 0; i < rowsA; i++) {
    result[i] = [];
    for (let j = 0; j < colsB; j++) {
      result[i][j] = 0;
      for (let k = 0; k < colsA; k++) {
        result[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }
  
  return result;
}
*/

/* From ChatGPT
2️⃣ Understand the shapes (this part is VERY important)
Matrix A
[ 
  [1, 2],
  [3, 4] 
]
2 rows
2 columns
→ 2 × 2


Matrix B
[ 
  [5, 6],
  [7, 8] 
]

2 rows
2 columns
→ 2 × 2

Rule to check:

Matrix A: m × n
Matrix B: n × p

Here:
n = 2 (columns of A)
n = 2 (rows of B)

✅ They match → multiplication is allowed
3️⃣ Size of the result matrix

The result matrix will be:

(m × p)

From our example:

-> m = rows of A = 2
-> p = columns of B = 2

So the result is also 2 × 2
That means 4 numbers total must be computed.
*/
console.log(
  multiplyMatrices(
    [
      [1, 2],
      [3, 4],
    ],
    [
      [5, 6],
      [7, 8],
    ],
  ),
);

/*
1 x 5 = 5
2 x 7 = 14 
m  x n = 5 + 14 = 19

1 x 6 = 6
2 x 8 = 16
m  x  n = 6 + 16 = 22

3 x 5 = 15
4 x 7 = 28
m  x  n = 15 + 28 = 43


3 x 6 = 18
4 x 8 = 32
m  x n = 18 + 32 = 50
Output: [[19, 22], [43, 50]]
*/

console.log(`\n\n${longHypen}${hyphen}(  JSON Part 1 )${longHypen}`);

/*
Check If Key Exists
To check for a specific key in a JSON object, use the in operator or hasOwnProperty(): 
*/

const product = { name: "Laptop", price: 900 };

// Using 'in' operator
if ("price" in product) {
  console.log("Key exists!");
}

// Using hasOwnProperty()
if (product.hasOwnProperty("price")) {
  console.log("Key exists!");
}

/*
hasOwnProperty() returns true if the property exists (even if 
its value is undefined), and false if the property doesn't exist:
*/

const obj1 = {};
console.log(obj1.hasOwnProperty("key")); // false

const obj2 = { key: undefined };
console.log(obj2.hasOwnProperty("key")); // true

/*
Challenge (Easy):
Create a function called toggleBookStatus that takes a book object as a parameter. The function should:

1.If the book has a property isRead that is true, change it to false
2.If the book has a property isRead that is false, change it to true
3.If the book doesn't have an isRead property, add it and set it to true
4.Return the modified book object
*/

function toggleBookStatus(book) {
  // Write your code here

  if (!book.isRead) {
    book.isRead = true;
    return book;
  }

  if (book.isRead == true) {
    book.isRead = false;
    return book;
  }

  if (book.isRead == false) {
    book.isRead = true;
    return book;
  }
}
// Do not write anything outside function

console.log(
  `toggleBookStatus:`,
  toggleBookStatus({
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isRead: true,
    pages: 180,
    genre: "Classic",
  }),
);

/* Coddy Solution: ✅
  function toggleBookStatus(book) {
      if (book.isRead === true) {
          book.isRead = false;
      } else if (book.isRead === false) {
          book.isRead = true;
      } else {
          book.isRead = true;
      }
      return book;
  }
*/

console.log(`\n\n${longHypen}${hyphen}( findMissingKeys() )${longHypen}`);

/*


Challenge (Easy):
Create a function named findMissingKeys that takes:

- A JSON object (data)
- An array of required keys (requiredKeys)

The function should return an array containing all 
keys from requiredKeys that do not exist in the data object. 
If all required keys exist, return an empty array.
Example Input:

data = {"name": "Phone", "price": 599}
requiredKeys = ["name", "price", "color"]

Expected Output:
["color"]
*/

function findMissingKeys(data, requiredKeys) {
  // Write your code here
  let newArr = [];

  for (const key of requiredKeys) {
    if (!data.hasOwnProperty(key)) {
      // or obj.hasOwnProperty(key)
      newArr.push(key);
    }
  }
  return newArr;
}
// Do not modify below this line

const data_1 = { make: "Tesla", model: "Model S", year: 2020 };
const requiredKeys = ["make", "model", "year", "color"];

console.log(`findMissingKeys: `, findMissingKeys(data_1, requiredKeys));

/* Coddy Solution:
function findMissingKeys(data, requiredKeys) {
  const missingKeys = [];
  
  for (let i = 0; i < requiredKeys.length; i++) {
    const key = requiredKeys[i];
    if (!data.hasOwnProperty(key)) {
      missingKeys.push(key);
    }
  }
  
  return missingKeys;
}
*/

console.log(
  `\n\n${longHypen}${hyphen}(  Object Methods:  function analyzeShoppingCart(cart)   )${longHypen}`,
);

/*
The Object class provides static methods to work with objects:

<strong>Object.keys(obj)</strong> - Returns an array of keys

<strong>Object.values(obj)</strong> - Returns an array of values

<strong>Object.entries(obj)</strong> - Returns an array of [key, value] pairs
*/

const person = {
  name: "John",
  age: 30,
  city: "New York",
};

const keys = Object.keys(person);
// ["name", "age", "city"]

const values = Object.values(person);
// ["John", 30, "New York"]

const entries = Object.entries(person);
// [["name", "John"], ["age", 30], ["city", "New York"]]

/* 
Get the number of keys in an object: 
Object.keys(person).length



Challenge (Easy):
Write a function named analyzeShoppingCart that takes a shopping cart object. 
The shopping cart object contains items as keys and their quantities as values. 
The function should return an object with the following information:

totalItems: The total number of unique items (number of keys)
totalQuantity: The sum of all quantities
*/

function analyzeShoppingCart(cart) {
  // Write code here

  // for (let key in cart) {
  //   console.log(key)
  // }

  return {
    totalItems: Object.keys(cart).length,
    totalQuantity: Object.values(cart).reduce((total, currentElement) => {
      return total + currentElement;
    }, 0),
  };
}
// Do not write anything outside function

try {
  console.log(
    analyzeShoppingCart({ banana: 5, apple: 3, orange: 2, mango: 1, pear: 4 }),
  );
} catch (error) {
  console.log(error.message);
}

/* Coddy Solution:

function analyzeShoppingCart(cart) {
  // Get arrays using Object static methods
  const keys = Object.keys(cart);
  const values = Object.values(cart);

  // 1. totalItems is simply the length of keys
  const totalItems = keys.length;

  // 2. Calculate totalQuantity using a for loop
  let totalQuantity = 0;
  for (let i = 0; i < values.length; i++) {
      totalQuantity += values[i];
  }

  return {
      totalItems: totalItems,
      totalQuantity: totalQuantity,
  };
}
*/

console.log(`\n\n${longHypen}${hyphen}(  findMostFrequentItem  )${longHypen}`);
/*
Challenge (Easy):
Create a function named findMostFrequentItem that takes an object where keys are item names and values are quantities. 
The function should:

1. Find and return the name of the item with the highest quantity
2. If there's a tie, return the first item that appears in the object

Example Input:

const inventory = {
  "apple": 15,
  "banana": 8,
  "orange": 12,
  "pear": 15
}

Expected Output: "apple"
*/

function findMostFrequentItem(inventory) {
  // Write your code here
  let highestQuantity = 0;
  let firstHighest_Quantity = null;

  for (const [key, value] of Object.entries(inventory)) {
    // console.log(`${key}: ${value}`);

    if (value > highestQuantity) {
      highestQuantity = value;
      firstHighest_Quantity = key;
    }
  }

  return firstHighest_Quantity;
}
// Do not write anything outside function

/* 
  Coddy Solut{ion:
  function findMostFrequentItem(inventory) {
    // Get the entries array to access both keys and values
    const entries = Object.entries(inventory);
    
    // Initialize variables to track the most frequent item
    let mostFrequentItem = "";
    let highestQuantity = 0;
    
    // Loop through entries to find the item with highest quantity
    for (let i = 0; i < entries.length; i++) {
      const [item, quantity] = entries[i];
      
      if (quantity > highestQuantity) {
        highestQuantity = quantity;
        mostFrequentItem = item;
      }
    }
    
    return mostFrequentItem;
  }}
*/

try {
  console.log(
    findMostFrequentItem({ notebook: 30, pencil: 25, eraser: 30, ruler: 10 }),
  );
} catch (error) {
  console.log(error.message);
}

console.log(
  `\n\n${longHypen}${hyphen}(  The Spread Operator Part 1  )${longHypen}`,
);
console.log(
  "The spread operator (...) creates a copy of an object instead of a reference: \n\nReference (both variables point to same object)The spread operator (...) creates a copy of an object instead of a reference: \nReference (both variables point to same object)",
);

/*                The Spread Operator Part 1
The spread operator (...) creates a copy of an object instead of a reference:

// Reference (both variables point to same object)

const obj1 = {key1: "123"}
const obj2 = obj1
obj1.key1 = "456"
console.log(obj2.key1) // Output: "456"

// Copy using spread operator
const obj1 = {key1: "123"}
const obj2 = {...obj1}
obj1.key1 = "456"
console.log(obj2.key1) // Output: "123"

The spread operator copies all enumerable properties from the source object into a new object.
*/

console.log(
  `\n\n${longHypen}${hyphen}(  The Spread Operator Part 2  )${longHypen}`,
);
/* The Spread Operator Part 2

The spread operator can merge objects:

const personalInfo = {name: "John", age: 30};
const jobInfo = {company: "Tech Corp", position: "Developer"};
const completeProfile = {...personalInfo, ...jobInfo};


It can also add new properties and override existing properties while copying:

const user = {name: "Alice", age: 25, mood: "sad"};
const userWithEmail = {
  ...user,
  email: "alice@example.com",
  mood: "happy"
  };
  
  Challenge (Easy):
  Create a function named mergeCars that takes two car objects as parameters. 
  The function should merge the second car's properties into the first car's properties and 
  return a new car object without modifying any of the original objects.
  
*/
const car1 = { brand: "Toyota", model: "Camry", year: 2020, color: "Silver" };
const car2 = { color: "Black", mileage: 50000, transmission: "Automatic" };

function mergeCars(car1, car2) {
  // Write code here
  let mergeCar = Object.create(null);

  return (mergeCar = { ...car1, ...car2 });
}
// Do not write anything outside function

/* Coddy Solution:
  function mergeCars(car1, car2) {
    return { ...car1, ...car2 };
    }
    */

const personalInfo = { name: "John", age: 30 };
const jobInfo = { company: "Tech Corp", position: "Developer" };
const completeProfile = { ...personalInfo, ...jobInfo };
// console.log(completeProfile)

console.log(mergeCars(car1, car2));

console.log(`\n\n${longHypen}${hyphen}(  mergeSettings()  )${longHypen}`);

/* 
Challenge (Easy):
Create a function called mergeSettings that takes three parameters:

1.An object defaultSettings containing default application settings
2.An object userSettings containing user's custom settings
3.An object temporarySettings containing temporary settings

The function should:

1. Merge all three settings objects using the spread operator
2. Make sure temporarySettings take highest priority, followed by userSettings, and finally defaultSettings
3. Return the merged settings object

Example Input:

defaultSettings = { theme: "light", fontSize: 12, notifications: true };
userSettings = { theme: "dark", fontSize: 14 };
temporarySettings = { notifications: false };

Expected Output:

{ theme: "dark", fontSize: 14, notifications: false }
*/

function mergeSettings(defaultSettings, userSettings, temporarySettings) {
  // Write your code here

  return {
    ...defaultSettings,
    ...userSettings,
    ...temporarySettings,
  };
}

console.log(
  mergeSettings(
    { theme: "light", notifications: true },
    { fontSize: 15, language: "es" },
    { language: "en", fontSize: 10 },
  ),
);

console.log(`\n\n${longHypen}${hyphen}(  Remove Keys  )${longHypen}`);

/*  Remove Keys


There are multiple ways to delete keys from a JSON object:

Using the delete keyword:

delete obj["name"]

Using the spread operator with destructuring:

const {name, ...filteredObj} = obj;
// filteredObj contains all keys except 'name'

Challenge (Easy):
Create a function named removeKeys that takes two parameters:

1. An object
2. An array of strings (keys to be removed)

The function should return a new object with the specified keys removed.
*/

function removeKeys(obj, keysToRemove) {
  // Write code here
  // console.log(obj, keysToRemove)
  // console.log(Object.keys(obj));

  keysToRemove.forEach((k2Remove) => {
    console.log("\n", k2Remove, "\n");

    for (let key in obj) {
      console.log(key);
      if (k2Remove === key) {
        delete obj[key];
      }
    }
  });

  return obj;
}
// Do not write anything outside function

console.log(
  removeKeys(
    {
      species: "cat",
      color: "orange",
      weight: 4.5,
      isVaccinated: true,
      hasChip: true,
      owner: "Alice",
      age: 3,
    },
    ["isVaccinated", "hasChip", "owner"],
  ),
);

console.log(`\n\n${longHypen}${hyphen}(  filterObject )${longHypen}`);
/* 
Challenge (Easy):
Create a function named filterObject that:

Takes an object and an array of keys to keep
Returns a new object containing only the specified keys from the original object
Important: Do not modify the original object

For example:
// Original object
const person = {
  name: "John",
  age: 30,
  city: "New York",
  job: "Developer"
  };
  
  // Call your function
  const filtered = filterObject(person, ["name", "job"]);
  
  // Result should be:
  // { name: "John", job: "Developer" }
  
  // The original object should remain unchanged
  console.log(person); // Still has all original properties
  
  If a key in the "keep list" doesn't exist in the original object, just ignore it.
  
  Hint 1
  Create a new empty object to store the filtered results
  
  Hint 2
  Loop through the keysToKeep array and check if each key exists in the original object
  
  Hint 3
  Use obj.hasOwnProperty(key) or 'key in obj' to check if a key exists
  
  
  Hint 4
  Do not modify the original object - always return a new one
  */

function filterObject(obj, keysToKeep) {
  // Write your code here

  for (let key in obj) {
    if (!keysToKeep.includes(key)) {
      delete obj[key];
    }
  }

  return obj;
}
// Do not modify code outside the function

console.log(
  filterObject(
    {
      name: "Alice",
      age: 25,
      city: "Los Angeles",
      hobby: "Hiking",
      occupation: "Teacher",
    },
    ["name", "hobby", "occupation"],
  ),
);

/*   Coddy Solution:
function filterObject(obj, keysToKeep) {
  // Create a new empty object
  const result = {};
  
  // Loop through each key to keep
  for (let i = 0; i < keysToKeep.length; i++) {
      const key = keysToKeep[i];
      
      // Only add the key-value pair if the key exists in the original object
      if (obj.hasOwnProperty(key)) {
          result[key] = obj[key];
      }
  }
  
  return result;
}
*/

console.log(
  `\n\n${longHypen}${hyphen}(  Recap - JSON Manipulate Keys )${longHypen}`,
);

/*
Challenge (Easy):
Create a function named petShelterManager that helps manage a pet shelter system. 
The function receives two parameters:

1. shelterData (an array of objects containing information about pets)
2. newData (an object containing new data)


The shelterData array contains objects with the following structure:

{
  id: "unique-id",
  name: "pet-name",
  type: "animal-type",
  age: number,
  isVaccinated: boolean,
  adoptionStatus: "available" | "adopted"
  }
  Your function should do the following:
  
  Add the newData object to the shelterData array
  Before adding, verify that all required fields (id, name, type, age, isVaccinated, adoptionStatus) exist in newData
  If a field is missing, do not add the newData
  Return the updated shelterData array
  */

function petShelterManager(shelterData, newData) {
  // Write code here
  let allSameProperty;

  // for (let objs of shelterData) {
  //   console.log(objs);

  //   for (const [key, values] of Object.entries(newData)) {
  //     console.log(objs.hasOwnProperty(key));
  //   }
  // }

  // My code not completed / working
  // for (let objs of shelterData) {
  //   for (let key in objs) {
  //     // console.log(newData.hasOwnProperty(key));

  //     allSameProperty = [newData].every((datainNewData) => {
  //       console.log(datainNewData);
  //       return datainNewData.hasOwnProperty(key);
  //     });
  //   }
  // }

  // Chatgpt code
  allSameProperty = shelterData.every((obj) =>
    Object.keys(obj).every((key) => Object.hasOwn(newData, key)),
  );

  if (allSameProperty) {
    shelterData.push(newData);
  }

  return shelterData;
}
// Do not write anything outside function

/* Coddy Solution:
        function petShelterManager(shelterData, newData) {
          // Create a copy of shelterData to avoid modifying the original
          let updatedShelter = [];
          for (let i = 0; i < shelterData.length; i++) {
            updatedShelter.push(shelterData[i]);
            }
            
            if (newData.id === undefined || 
            newData.name === undefined || 
            newData.type === undefined || 
            newData.age === undefined || 
            newData.isVaccinated === undefined || 
            newData.adoptionStatus === undefined) {
              return updatedShelter;
              }
              
              updatedShelter.push(newData);
              return updatedShelter;
              }
              */

console.log(
  petShelterManager(
    [
      {
        id: "P1",
        name: "Slither",
        type: "Snake",
        age: 2,
        isVaccinated: false,
        adoptionStatus: "available",
      },
    ],
    { id: "P2", name: "Polly", type: "Parrot", age: 15, isVaccinated: true },
  ),
);

console.log(
  `\n\n${longHypen}${hyphen}( Iterate Over JSON : JSON Part 2 )${longHypen}`,
);

/*          Iterate Over JSON
              
To iterate over JSON object keys, use Object.keys():

const keys = Object.keys(userSettings)
for (let i = 0; i < keys.length; i++) {
console.log(keys[i], userSettings[keys[i]])
}

Or use a for...in loop:

for (const key in userSettings) {
console.log(key, userSettings[key]);
}
Or use Object.entries() to get key-value pairs:

for (const [k, v] of Object.entries(userSettings)) {
// k is the key, v is the value
}


Challenge (Easy):

Create a function named analyzeCarData that takes a JSON object as input. 
The object contains data about a car dealership's inventory where:

- keys are the car models
- values are the prices

The function should return an object containing:

1. mostExpensive: the name of the most expensive car
2. cheapest: the name of the cheapest car
3. averagePrice: the average price of all cars


*/

function analyzeCarData(carData) {
  let mostExpensive = "";
  let cheapest = "";

  let highestPrice = -Infinity;
  let lowestPrice = Infinity;

  let average = 0;

  for (const key in carData) {
    const price = carData[key];
    average += price;

    if (price > highestPrice) {
      highestPrice = price;
      mostExpensive = key;
    }

    if (price < lowestPrice) {
      lowestPrice = price;
      cheapest = key;
    }
  }

  average /= Object.keys(carData).length;

  return {
    mostExpensive,
    cheapest,
    averagePrice: average,
  };
}
// Do not write anything outside function

console.log(
  analyzeCarData({
    "1967 Chevrolet Corvette": 185000,
    "1965 Ford Mustang": 45000,
    "1970 Plymouth Barracuda": 125000,
    "1969 Dodge Charger": 89000,
    "1957 Chevrolet Bel Air": 75000,
  }),
);

console.log(`\n\n${longHypen}${hyphen}( Nested JSON )${longHypen}`);
/*
Nested JSON

JSON objects can be nested infinitely deep:

const userData = {
  "user": {
    "name": "Kim",
    "address": {
      "city": "Springfield",
      "zip": 12345,
      "location": {
        "coordinates": {
          "latitude": 42.1234,
          "longitude": -71.5678
        }
      }
    }
  }
}
Access nested properties using dot notation:

userData.user.name
userData.user.address.location
// And so on

Challenge (Easy):
Create a function named calculateRestaurantBill that takes a JSON object representing a restaurant order as input. 
Each key in the object is a dish name, and each value is another object containing:

* price (number)
* quantity (number)
* isSpecialOffer (boolean) 

if true, there's a 20% discount on that dish The function should:
1. Calculate the total bill
2. Apply any special offer discounts
3. Return an object containing:
  1. totalBeforeDiscount
  2. totalDiscount
  3. finalTotal
*/

function calculateRestaurantBill(order) {
  // Write code here
  let totalBeforeDiscount = 0;
  let totalDiscountedDish = 0;
  const percentOff = 20 / 100;

  for (const [key, val] of Object.entries(order)) {
    if (val.isSpecialOffer) {
      //   console.log(`Your ${key} is discounted by 20%.`);
      totalDiscountedDish += val.price * val.quantity * percentOff;
    }

    // console.log(val.price)
    // console.log(`${key}: ${val.price}`)
    totalBeforeDiscount += val.price * val.quantity;
  }

  return {
    totalBeforeDiscount: totalBeforeDiscount,
    totalDiscount: totalDiscountedDish,
    finalTotal: totalBeforeDiscount - totalDiscountedDish,
  };
}
// Do not write anything outside function

/* Coddy Solution:
  function calculateRestaurantBill(order) {
    let totalBeforeDiscount = 0;
    let totalDiscount = 0;
    
    // Loop through each dish in the order
    for (let dish in order) {
        let itemInfo = order[dish];
        
        // Calculate total for this dish before discount
        let dishTotal = itemInfo.price * itemInfo.quantity;
        totalBeforeDiscount += dishTotal;
        
        // If it's a special offer, calculate the discount
        if (itemInfo.isSpecialOffer) {
            let dishDiscount = dishTotal * 0.2; // 20% discount
            totalDiscount += dishDiscount;
        }
    }
    
    // Calculate final total after all discounts
    let finalTotal = totalBeforeDiscount - totalDiscount;
    
    return {
        totalBeforeDiscount: totalBeforeDiscount,
        totalDiscount: totalDiscount,
        finalTotal: finalTotal
    };
  }
*/

console.log(
  calculateRestaurantBill({
    Lobster: { price: 89.99, quantity: 2, isSpecialOffer: true },
    Caviar: { price: 150.0, quantity: 1, isSpecialOffer: false },
    Champagne: { price: 200.0, quantity: 1, isSpecialOffer: true },
    Oysters: { price: 24.99, quantity: 4, isSpecialOffer: true },
    Truffles: { price: 75.0, quantity: 1, isSpecialOffer: false },
  }),
);

console.log(`\n\n${longHypen}${hyphen}( Shallow And Deep Copy )${longHypen}`);
/* Shallow And Deep Copy

When copying objects, we have two types of copies:

Shallow Copy - copies only the first level
Deep Copy - copies all nested levels
Shallow Copy Methods:

Using spread operator:
const original = { a: 1, b: { x: 2 } };
const spreadCopy = { ...original };
Using Object.assign():

const assignCopy = Object.assign({}, original);
Problem with Shallow Copy:

original.b.x = 3;
console.log(spreadCopy.b.x); // 3 (nested objects share reference)


JSON Methods:
JSON.stringify() converts JavaScript object to JSON string:

const obj = { name: "John", age: 30 };
const jsonString = JSON.stringify(obj);
console.log(jsonString); // "{"name":"John","age":30}"


JSON.parse() converts JSON string back to JavaScript object:

const backToObject = JSON.parse(jsonString);
console.log(backToObject); // { name: "John", age: 30 }


Deep Copy using JSON:

const original = { a: 1, b: { x: 2 } };
const deepCopy = JSON.parse(JSON.stringify(original));

original.b.x = 3;
console.log(deepCopy.b.x); // 2 (completely independent)


Challenge (Easy):
Create a function named processCart that takes a JSON string representing a shopping cart. 
The cart contains an array of products with names and prices. Your task is to:

1. Parse the JSON string into a JavaScript object
2. Create TWO separate carts from it
3. In the second cart:
1. Add a discounted property to each item set to false
2. Apply a 10% discount to all items that have price greater than 50
3. Set 'discounted' to true for items that received the discount
4. Return an array containing both carts
*/

function processCart(jsonString) {
  // Write code here

  // detect if input is a string or already an array
  const originalCart =
    typeof jsonString === "string"
      ? JSON.parse(jsonString)
      : JSON.parse(JSON.stringify(jsonString));

  const cart_2 = originalCart.map((item) => ({ ...item }));

  for (let item of cart_2) {
    item.discounted = false;

    if (item.price > 50) {
      item.price *= 0.9;
      item.discounted = true;
    }
  }

  return [originalCart, cart_2];
}
// Don't write anything outside the function

/* Coddy Solution:
function processCart(jsonString) {
  // Parse JSON string into object
  let originalCart = JSON.parse(jsonString);
  
  // Create second cart
  let secondCart = JSON.parse(jsonString);
  
  for (let i = 0; i < secondCart.length; i++) {
    secondCart[i].discounted = false;
  
    if (secondCart[i].price > 50) {
      secondCart[i].price = secondCart[i].price * 0.9;
      secondCart[i].discounted = true;
    }
  }
  
  return [originalCart, secondCart];
}
*/

console.log(
  processCart([
    { name: "Book", price: 15 },
    { name: "Coffee Maker", price: 75 },
    { name: "Headphones", price: 45 },
    { name: "Smart Watch", price: 199 },
  ]),
);

// ======================================================================== Examples:========================================================================
const original = { a: 1, b: { x: 2 } };
// const spreadCopy = { ...original };
const assignCopy = Object.assign({}, original);

// console.log(spreadCopy)

// original.b.x = 3; // becase of Spread Operator we shallow copy the original Object
// console.log(spreadCopy.b.x); // 3 (nested objects share reference)
assignCopy.b.x = 5;
console.log(original);

console.log(
  `\n\n${longHypen}${hyphen}( Recap - Bicycle Shop - JSON Part 2 )${longHypen}`,
);

/*  Recap - Bicycle Shop 

Challenge (Easy):
Create a function named updateBikeInventory that takes one argument, a JSON string inventoryStr.

Parse it into an object, where inventoryStr has a bikes array. Each bike has brand, price, and quantity.

If a bike's quantity is less than 3, add or update a key note with the value "Restock needed" for that bike.

Return the updated object as a JSON string.
*/

function updateBikeInventory(inventoryStr) {
  // Write code here

  // Handle both JSON string and JavaScript object
  const convertObj =
    typeof inventoryStr === "string"
      ? JSON.parse(inventoryStr)
      : JSON.parse(JSON.stringify(inventoryStr));

  for (let bike of convertObj.bikes) {
    if (bike.quantity < 3) {
      bike.note = "Restock needed";
    }
  }

  // Convert the object to a JSON string
  const myJSON = JSON.stringify(convertObj);

  return myJSON;
}
// Don't write anything outside the function

/* Coddy Solution:

function updateBikeInventory(inventoryStr) {
  let inventory = JSON.parse(inventoryStr);
  
  for (let i = 0; i < inventory.bikes.length; i++) {
    if (inventory.bikes[i].quantity < 3) {
      inventory.bikes[i].note = "Restock needed";
      }
      }
      
      return JSON.stringify(inventory);
      }
      */

console.log(
  updateBikeInventory({
    bikes: [
      { brand: "Trek", price: 999.99, quantity: 2 },
      { brand: "Giant", price: 799.99, quantity: 5 },
    ],
  }),
);

console.log(`\n\n${longHypen}${hyphen}( Recap - Solar System )${longHypen}`);

/*  Recap - Solar System
 
Challenge (Easy):
Create a function named analyzeSolarSystem that takes one argument, a JSON string solarSystemData. 
The JSON string contains information about planets in our solar system. Each planet has the following properties:

* name (string)
* type (string: "rocky" or "gas")
* numberOfMoons (number)
* discoveredIn (number, year)
* surfaceTemperature (object with min and max in Celsius)
* hasRings (boolean)


Your task:

1. Parse the JSON string into an object.
2. For each planet:
1. Add a property classification based on these rules:
  1. If it's a rocky planet and surfaceTemperature.max < 50°C: Potentially Habitable
  2. If it's a rocky planet and surfaceTemperature.max >= 50°C: Extreme Environment
  3. If it's a gas planet and numberOfMoons > 10: Complex System
  4. If it's a gas planet and numberOfMoons <= 10: Simple Gas Giant
2. Add a property ageOfDiscovery that calculates how many years ago the planet was discovered (from the year 2010)
3. If the planet has rings and more than 5 moons, add a property specialFeature with value Ring System with Rich Moon Population
3. Return the modified object as a JSON string.

Example input: 
{
"planets": [
  {
    "name": "Mars",
    "type": "rocky",
    "numberOfMoons": 2,
    "discoveredIn": -3000,
    "surfaceTemperature": {
      "min": -140,
      "max": 20
    },
    "hasRings": false
  },
  {
    "name": "Saturn",
    "type": "gas",
    "numberOfMoons": 82,
    "discoveredIn": -3000,
    "surfaceTemperature": {
      "min": -178,
      "max": -138
    },
    "hasRings": true
  }
]
}
*/

function analyzeSolarSystem(solarSystemData) {
  // Write code here
  const parseSolarData =
    typeof solarSystemData === "string"
      ? JSON.parse(solarSystemData)
      : JSON.parse(JSON.stringify(solarSystemData));

  // console.log(parseSolarData)
  // console.log(typeof parseSolarData)

  const year = 2010;

  for (const [key, val] of Object.entries(parseSolarData)) {
    // console.log(val)

    for (const innKey of val) {
      // console.log(innKey.name)

      if (innKey.type === "rocky" && innKey.surfaceTemperature.max < 50) {
        innKey.classification = "Potentially Habitable";
      }

      if (innKey.type === "rocky" && innKey.surfaceTemperature.max >= 50) {
        innKey.classification = "Extreme Environment";
      }

      if (innKey.type === "gas" && innKey.numberOfMoons > 10) {
        innKey.classification = "Complex System";
      }

      if (innKey.type === "gas" && innKey.numberOfMoons <= 10) {
        innKey.classification = "Simple Gas Giant";
      }

      innKey.ageOfDiscovery = year - innKey.discoveredIn;

      if (innKey.hasRings && innKey.numberOfMoons > 5) {
        innKey.specialFeature = "Ring System with Rich Moon Population";
      }
    }
  }

  // Convert the object to a JSON string
  return JSON.stringify(parseSolarData);
}
// Don't write anything outside the function

/* Coddy Solution:
function analyzeSolarSystem(solarSystemData) {
    let data = JSON.parse(solarSystemData);
    
    for (let i = 0; i < data.planets.length; i++) {
        let planet = data.planets[i];
        
        if (planet.type === "rocky") {
            if (planet.surfaceTemperature.max < 50) {
                planet.classification = "Potentially Habitable";
            } else {
                planet.classification = "Extreme Environment";
            }
        } else if (planet.type === "gas") {
            if (planet.numberOfMoons > 10) {
                planet.classification = "Complex System";
            } else {
                planet.classification = "Simple Gas Giant";
            }
        }
        
        planet.ageOfDiscovery = 2010 - planet.discoveredIn;
        
        if (planet.hasRings && planet.numberOfMoons > 5) {
            planet.specialFeature = "Ring System with Rich Moon Population";
        }
    }
    
    return JSON.stringify(data);
}
*/

console.log(
  analyzeSolarSystem({
    planets: [
      {
        name: "Neptune",
        type: "gas",
        numberOfMoons: 14,
        discoveredIn: 1846,
        surfaceTemperature: { min: -214, max: -200 },
        hasRings: true,
      },
      {
        name: "Venus",
        type: "rocky",
        numberOfMoons: 0,
        discoveredIn: -3000,
        surfaceTemperature: { min: 462, max: 462 },
        hasRings: false,
      },
    ],
  }),
);

console.log(
  `\n\n${longHypen}${hyphen}(  countAllStrings -  3D ARRAY  )${longHypen}`,
);

/*   3D Arrays And Beyond
A 3D array is an array of 2D arrays. Access elements using three indices: [building][floor][room].

const buildings = [
  [
    ["R1", "R2"],
    ["R3", "R4"]
  ],
  [
    ["R5", "R6"],
    ["R7", "R8"]
  ]
];

// Access elements
buildings[0][1][1] // "R4"
buildings[1][0][0] // "R5"

Challenge (Easy):
Create a function named countAllStrings that receives a 3D array of strings and returns the total number of elements across all dimensions.
*/

function countAllStrings(arr3D) {
  // TODO: Calculate the total number of string elements in the 3D array
  // return arr3D[0][1][1];
  let count = 0;

  for (let oRow = 0; oRow < arr3D.length; oRow++) {
    for (let innRow = 0; innRow < arr3D[oRow].length; innRow++) {
      for (let innCol = 0; innCol < arr3D[oRow][innRow].length; innCol++) {
        // console.log(`${space} arr3D[${oRow}][${innRow}][${innCol}]:  ${arr3D[oRow][innRow][innCol]}`)
        count++;
      }
    }
  }

  // return arr3D[0][0][1]
  // return arr3D.length
  return count;
}
// Do not write anything outside function

/*  Coddy Solution:
function countAllStrings(arr3D) {
  let totalCount = 0;
  for (let x = 0; x < arr3D.length; x++) {
    for (let r = 0; r < arr3D[x].length; r++) {
      totalCount += arr3D[x][r].length;
    }
  }
  return totalCount;
}
*/

console.log(
  countAllStrings([
    [["hello", "world"], ["test"], ["coding"]],
    [["array"], ["javascript"], ["fun", "times"]],
    [
      ["three", "dimensional"],
      ["data", "structure"],
    ],
  ]),
);

console.log(
  `\n\n${longHypen}${hyphen}(  find3DElement -  3D ARRAY  )${longHypen}`,
);
/*  Challenge (Easy):
Create a function named find3DElement that takes:

A 3D array of any values (array3D)
Three indices (x, y, z) representing the position to find
The function should return the element at the specified position if it exists
If any index is out of bounds, return the string "Invalid coordinates"
Example Input:

const data = [
  [["a", "b"], ["c", "d"]],
  [["e", "f"], ["g", "h"]]
];
find3DElement(data, 0, 1, 0); // Should access data[0][1][0]
Expected Output:

"c"
*/

function find3DElement(array3D, x, y, z) {
  // Write your code here

  try {
    let target3DArr = array3D[x][y][z];

    if (target3DArr === undefined) {
      return "Invalid coordinates";
    }

    return target3DArr;
  } catch (error) {
    return "Invalid coordinates";
  }
}

/* Coddy Solution:
function find3DElement(array3D, x, y, z) {
  // Check if x is within bounds
  if (x < 0 || x >= array3D.length) {
    return "Invalid coordinates";
  }
  
  // Check if y is within bounds
  if (y < 0 || y >= array3D[x].length) {
    return "Invalid coordinates";
  }
  
  // Check if z is within bounds
  if (z < 0 || z >= array3D[x][y].length) {
    return "Invalid coordinates";
  }
  
  // Return the element at the specified position
  return array3D[x][y][z];
}
*/

console.log(
  find3DElement(
    [
      [
        ["red", "blue"],
        ["green", "yellow"],
      ],
      [
        ["black", "white"],
        ["orange", "purple"],
      ],
    ],
    2,
    0,
    0,
  ),
);

console.log(
  `\n\n${longHypen}${hyphen}(  Common 2D Array Patterns  )${longHypen}`,
);
/*
Common 2D Array Patterns
Common 2D array traversal patterns:

Diagonal Traversal

Main diagonal: matrix[i][i] (row index equals column index)

Anti-diagonal: matrix[i][size - 1 - i] (sum of row and column indices equals size - 1)

1  2  3
4  5  6
7  8  9
Main diagonal: 1, 5, 9
Anti-diagonal: 3, 5, 7

Border Traversal

Keep one index constant (0 or size - 1) while iterating over the other:

-> Top border: row index = 0, iterate columns
-> Bottom border: row index = size - 1, iterate columns
-> Left border: column index = 0, iterate rows
-> Right border: column index = size - 1, iterate rows

Challenge (Easy):
Create a function named printPatterns that takes a square 2D array of integers (matrix) as input and prints the following patterns:

1. Main Diagonal: Print all elements where the row index equals the column index.
2. Anti-Diagonal: Print all elements where the sum of the row and column indices equals the size of the matrix minus 1.
3. Borders: Print the elements of the top, bottom, left, and right borders of the matrix.

The output should look like this:

Main Diagonal: 1 6 11 16 
Anti-Diagonal: 4 7 10 13 
Top Border: 1 2 3 4 
Bottom Border: 13 14 15 16 
Left Border: 1 5 9 13 
Right Border: 4 8 12 16
*/

function printPatterns(matrix) {
  let mainDiagonal = [];
  for (let row = 0; row < matrix.length; row++) {
    mainDiagonal.push(matrix[row][row]);

    for (let col = 0; col < matrix[row].length; col++) {}
  }
  // TODO: Implement
  console.log("Main Diagonal:", mainDiagonal.join(" "));

  let antiDiagonal = [];
  // TODO: Implement
  for (let i = 0; i < matrix.length; i++) {
    antiDiagonal.push(matrix[i][matrix.length - 1 - i]);
  }
  console.log("Anti-Diagonal:", antiDiagonal.join(" "));

  let topBorder = [];
  // TODO: Implement
  for (let i = 0; i < matrix.length; i++) {
    topBorder.push(matrix[0][i]);
  }
  console.log("Top Border:", topBorder.join(" "));

  let bottomBorder = [];
  // TODO: Implement
  for (let i = 0; i < matrix.length; i++) {
    bottomBorder.push(matrix[matrix.length - 1][i]);
  }
  console.log("Bottom Border:", bottomBorder.join(" "));

  let leftBorder = [];
  // TODO: Implement
  for (let i = 0; i < matrix.length; i++) {
    leftBorder.push(matrix[i][0]);
  }
  console.log("Left Border:", leftBorder.join(" "));

  let rightBorder = [];
  // TODO: Implement
  for (let i = 0; i < matrix.length; i++) {
    rightBorder.push(matrix[i][matrix.length - 1]);
  }
  console.log("Right Border:", rightBorder.join(" "));
}
// Do not write anything outside function

/* Coddy Solution:
function printPatterns(matrix) {
    const n = matrix.length;
    
    // Main Diagonal
    let mainDiagonal = [];
    for(let i = 0; i < n; i++) {
        mainDiagonal.push(matrix[i][i]);
    }
    console.log("Main Diagonal:", mainDiagonal.join(" "));
    
    // Anti-Diagonal
    let antiDiagonal = [];
    for(let i = 0; i < n; i++) {
        antiDiagonal.push(matrix[i][n-1-i]);
    }
    console.log("Anti-Diagonal:", antiDiagonal.join(" "));
    
    // Top Border
    let topBorder = matrix[0];
    console.log("Top Border:", topBorder.join(" "));
    
    // Bottom Border
    let bottomBorder = matrix[n-1];
    console.log("Bottom Border:", bottomBorder.join(" "));
    
    // Left Border
    let leftBorder = [];
    for(let i = 0; i < n; i++) {
        leftBorder.push(matrix[i][0]);
    }
    console.log("Left Border:", leftBorder.join(" "));
    
    // Right Border
    let rightBorder = [];
    for(let i = 0; i < n; i++) {
        rightBorder.push(matrix[i][n-1]);
    }
    console.log("Right Border:", rightBorder.join(" "));
}
*/

printPatterns([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]);

console.log(`\n\n${longHypen}${hyphen}(  findSumPatterns  )${longHypen}`);

/*
Challenge (Easy):
Create a function named findSumPatterns that takes a square matrix (2D array) and:

1. Calculates and prints the sum of main diagonal elements
2. Calculates and prints the sum of anti-diagonal elements
3. Calculates and prints the sum of all border elements (count corner elements only once)

Example Input:
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

Expected Output:
Main diagonal sum: 15
Anti-diagonal sum: 15
Border sum: 40
*/

function findSumPatterns(matrix) {
  // Write your code here
  let resultMD = 0;
  let resultAD = 0;
  let borderSum = 0;

  for (let i = 0; i < matrix.length; i++) {
    // Calculate main diagonal sum
    resultMD += matrix[i][i];

    // Calculate anti-diagonal sum
    resultAD += matrix[i][matrix.length - 1 - i];

    // Calculate border sum
    for (let col = 0; col < matrix[i].length; col++) {
      // console.log(matrix[i][col])

      if (
        i == 0 ||
        col == 0 ||
        i == matrix.length - 1 ||
        col == matrix[i].length - 1
      ) {
        borderSum += matrix[i][col];
      }
    }
  }

  console.log(`Main diagonal sum: ${resultMD}`);
  console.log(`Anti-diagonal sum: ${resultAD}`);
  console.log(`Border sum: ${borderSum}`);
  // Format and print the results
}
/* Coddy Solution:
function findSumPatterns(matrix) {
  const n = matrix.length;
  
  // Calculate main diagonal sum
  let mainDiagonalSum = 0;
  for (let i = 0; i < n; i++) {
    mainDiagonalSum += matrix[i][i];
  }
  
  // Calculate anti-diagonal sum
  let antiDiagonalSum = 0;
  for (let i = 0; i < n; i++) {
    antiDiagonalSum += matrix[i][n-1-i];
  }
  
  // Calculate border sum
  let borderSum = 0;
  
  // Top and bottom rows (entire rows)
  for (let j = 0; j < n; j++) {
    borderSum += matrix[0][j];         // Top row
    if (n > 1) {                       // Only add bottom row if matrix has more than 1 row
      borderSum += matrix[n-1][j];     // Bottom row
    }
  }
  
  // Left and right columns (excluding corners already counted)
  for (let i = 1; i < n-1; i++) {
    borderSum += matrix[i][0];         // Left column (excluding corners)
    if (n > 1) {                       // Only add right column if matrix has more than 1 column
      borderSum += matrix[i][n-1];     // Right column (excluding corners)
    }
  }
  
  // Format and print the results
  console.log(`Main diagonal sum: ${mainDiagonalSum}`);
  console.log(`Anti-diagonal sum: ${antiDiagonalSum}`);
  console.log(`Border sum: ${borderSum}`);
}
*/

findSumPatterns([
  [5, 1, 9, 3],
  [8, 6, 4, 2],
  [7, 3, 1, 5],
  [2, 6, 8, 4],
]);

console.log(`\n\n${longHypen}${hyphen}(  What Is A Set?  )${longHypen}`);

/*
What Is A Set?

A Set is a built-in JavaScript object that stores unique values of any type. Each value in a Set must be unique.

Create a Set:

const mySet = new Set();
Initialize a Set with an array:

const mySet = new Set([1, 2, 3, 4, 5]);
Convert a Set back to an array:

const myArr = Array.from(mySet);

Challenge  (Easy):
Create a function called uniqueElements that takes an array as an argument. 
The function should return a new array containing only the unique elements from the input array.
*/
function uniqueElements(arr) {
  // Write your code here
  const mySet = new Set(arr);
  return Array.from(mySet);
}

console.log(uniqueElements([1, 2, 2, 3, 4, 4, 5]));

/*
Adding An Element



To add an element to a Set, use the add() method:

const mySet = new Set();
mySet.add(1);
mySet.add(2);
console.log(mySet); // Set(2) { 1, 2 }
You can chain multiple add() calls:

mySet.add(3).add(4).add(5);
console.log(mySet); // Set(5) { 1, 2, 3, 4, 5 }
Sets automatically ignore duplicate values:

mySet.add(1); // Already exists, Set remains unchanged
console.log(mySet); // Set(5) { 1, 2, 3, 4, 5 }
*/

console.log(`\n\n${longHypen}${hyphen}(  Adding An Element  )${longHypen}`);
/*
Adding An Element

Challenge (Easy):

Create a function called addUniqueElements that takes two parameters: 
an array and another array. The function should convert the first array to a Set, 
and add all elements from the second array to the Set, 
but only if they don't already exist in the Set. 
Finally convert the set to an array and return it.
*/

function addUniqueElements(array1, array2) {
  // Write your code here
  const arr1 = new Set(array1);

  for (const item of array2) {
    arr1.add(item);
  }

  return Array.from(arr1);
}

console.log(addUniqueElements([1, 2, 3], [4, 5, 2, 1, 6]));

console.log(
  `\n\n${longHypen}${hyphen}(  Removing An Element  :) Please ReadMe )${longHypen}`,
);

/*   Removing An Element

To remove an element from a Set, use the delete() method:

const mySet = new Set([1, 2, 3, 4, 5]);

mySet.delete(3);
console.log(mySet); // Set(4) { 1, 2, 4, 5 }
The delete() method returns a boolean indicating whether the element was successfully removed:

console.log(mySet.delete(2)); // true (element existed and was removed)
console.log(mySet.delete(10)); // false (element didn't exist)
If the element doesn't exist in the Set, it remains unchanged and delete() returns false.
*/

const mySet = new Set([1, 2, 3, 4, 5]);
console.log(mySet);

console.log("Delete value: 3");
mySet.delete(3);
console.log(mySet); // Set(4) { 1, 2, 4, 5 }
console.log("What happen if i delete the value without in the set?");
mySet.delete(6);

console.log(`\n\n${longHypen}${hyphen}(  removeMultiples )${longHypen}`);

/*    Removing An Element

Challenge (Easy):
Create a function called removeMultiples that takes two parameters: an array of numbers and a number n. 
The function should convert the array to a set, and remove all multiples of n from the Set (including n itself if it's in the Set). 
Finally convert the set to an array and return it.

Multiples are the numbers you get when you multiply a given number (n) by all whole numbers (1, 2, 3, etc.).

For example, if n = 3:

The multiples of 3 are: 3, 6, 9, 12, 15, 18, 21, 24, and so on...
*/

function removeMultiples(arr, n) {
  // Write your code here
  let removeN = n;

  let uniqueElements = new Set(arr);

  for (const val of uniqueElements) {
    uniqueElements.delete(removeN);

    if (val < 1) {
      uniqueElements.delete(val);
    }

    removeN += n;
  }

  return Array.from(uniqueElements);
}
/*  Coddy Solution:
function removeMultiples(arr, n) {
    let numSet = new Set(arr);
    let tempArray = Array.from(numSet);
    
    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i] % n === 0) {
            numSet.delete(tempArray[i]);
        }
    }
    
    return Array.from(numSet);
} 
*/

console.log(removeMultiples([-12, -9, -6, -3, 0, 3, 6, 9, 12], 3));

/*      Checking If An Element Exists

To check if an element exists in a Set, use the has() method. This method returns true if the element is in the Set, and false otherwise.

const mySet = new Set([1, 2, 3, 4, 5]);

console.log(mySet.has(3)); // true
console.log(mySet.has(6)); // false
The has() method is useful for conditional operations:

if (mySet.has(3)) {
  console.log("3 is in the set");
} else {
  console.log("3 is not in the set");
}
Sets use strict equality (===) for comparisons:

const mixedSet = new Set([1, '2', 3]);

console.log(mixedSet.has('1')); // false
console.log(mixedSet.has(2));  // false
console.log(mixedSet.has('2')); // true

*/

console.log(`\n\n${longHypen}${hyphen}(  symmetricDifference )${longHypen}`);
/*    Checking If An Element Exists 

Challenge  (Easy):

Create a function called symmetricDifference that takes two arrays as parameters. 
The function should convert the arrays to sets, and return a new Set containing elements that are in either of the two Sets, but not in both. 
Use the has() method to check for element existence. 
Finally convert the set to an array and return it.
*/

function symmetricDifference(arr1, arr2) {
  // Write your code here
  const uniSet1 = new Set(arr1);
  const uniSet2 = new Set(arr2);

  uniSet1.forEach((item) => {
    if (uniSet2.has(item)) {
      uniSet1.delete(item);
      uniSet2.delete(item);
    }
  });

  const tempUniSet1 = Array.from(uniSet1);
  const tempUniSet2 = Array.from(uniSet2);

  return tempUniSet1.concat(tempUniSet2);
}

/* Coddy Solution:

function symmetricDifference(arr1, arr2) {
  const set1 = new Set(arr1)
  const set2 = new Set(arr2)
  const result = new Set();
  
  for (let elem of set1) {
    if (!set2.has(elem)) {
      result.add(elem);
    }
  }
  
  for (let elem of set2) {
    if (!set1.has(elem)) {
      result.add(elem);
    }
  }
  
  return Array.from(result);
}
*/

console.log(symmetricDifference([100, 200, 300, 400], [300, 400, 500, 600]));

console.log(`\n\n${longHypen}${hyphen}(  Size And Is Empty )${longHypen}`);
/*   Size And Is Empty

Sets have useful properties for checking size and emptiness:

size property: Returns the number of elements in the Set

const mySet = new Set([1, 2, 3, 4, 5]);
console.log(mySet.size); // 5
isEmpty() method: Custom function to check if a Set is empty

function isEmpty(set) {
  return set.size === 0;
  }
  
  const emptySet = new Set();
  console.log(isEmpty(emptySet)); // true
*/

console.log(`\n\n${longHypen}${hyphen}(  partyPlanner )${longHypen}`);

/*  Size And Is Empty
Challenge  (Easy):

Create a function named partyPlanner that takes an array of RSVPs (strings of names). Some people may have RSVP'd multiple times out of excitement. The function should return an object with:

uniqueGuests: The number of unique guests attending
hasDuplicates: A boolean indicating if anyone RSVP'd more than once
isEmpty: A boolean indicating if no one RSVP'd
*/

function partyPlanner(rsvps) {
  let guestSet = new Set(rsvps);
  // Write your code here

  let unique_Guest = 0;
  let hasDupli = false;
  let isEmpty = false;

  const uniqueElements = new Set();
  const duplicates = [];

  rsvps.forEach((item) =>
    uniqueElements.has(item) ? duplicates.push(item) : uniqueElements.add(item),
  );
  guestSet.forEach((item) => unique_Guest++);
  if (guestSet.size === 0) isEmpty = true;
  if (duplicates.length >= 1) hasDupli = true;

  // console.log(duplicates)

  return {
    uniqueGuests: unique_Guest,
    hasDuplicate: hasDupli,
    isEmpty: isEmpty,
  };
}

/*  Coddy Solution:
function partyPlanner(rsvps) {
    let guestSet = new Set(rsvps);

    return {
        uniqueGuests: guestSet.size,
        hasDuplicates: guestSet.size < rsvps.length,
        isEmpty: rsvps.length === 0
    };
}
*/

console.log(partyPlanner(["Beyoncé", "Beyoncé", "Beyoncé", "Jay-Z", "Jay-Z"]));

console.log(`\n\n${longHypen}${hyphen}(  Copy And Clear )${longHypen}`);

/*    Copy And Clear

To create a copy of a Set, use the Set constructor with the existing Set:

const originalSet = new Set([1, 2, 3, 4, 5]);
const copiedSet = new Set(originalSet);
To remove all elements from a Set, use the clear() method:

const mySet = new Set([1, 2, 3, 4, 5]);
mySet.clear(); // Set is now empty
*/

/*      Copy And Clear

Challenge  (Easy):
Create a function called setOperations that takes an array as a parameter. 
The function should convert the array to a set and:

Create a copy of the input Set
Add the number 10 to the copied Set
Clear the original Set
Return an object with two properties: copiedSet (the modified copy) and originalSet (the cleared original Set)

*/

function setOperations(inputArr) {
  const inputSet = new Set(inputArr);
  const copiedSet = new Set(inputSet);
  // Write your code here
  copiedSet.add(10);
  inputSet.clear();
  return {
    copiedSet: copiedSet,
    originalSet: inputSet,
  };
}

console.log(setOperations([1, 2, 3, 4, 5]));

console.log(`\n\n${longHypen}${hyphen}(  Recap - Basic Of Sets )${longHypen}`);
/*
Recap - Basic Of Sets

Challenge (Easy):
Create a function called processStudentGroups that takes an array of student names as an argument. The function should:

1. Create a Set from the input array to get unique student names
2. Remove any student whose name starts with 'Z' (case insensitive)
3. Add 'John Doe' to the Set if not already present
4. Return an object with the following properties:
 - uniqueCount: The number of unique students
 - hasJohnDoe: A boolean indicating whether 'John Doe' is in the Set
 - studentsArray: An array of the final set of student names
*/

function processStudentGroups(students) {
  const ogSet = new Set(students);
  const studentArr = [];
  // Write your code here

  if (!ogSet.has("John Doe")) {
    ogSet.add("John Doe");
  }
  ogSet.forEach((item) => {
    // console.log(item)
    // console.log(item.split('')[0])

    !["Z", "z"].includes(item.split("")[0])
      ? studentArr.push(item)
      : ogSet.delete(item);
  });

  // console.log(ogSet);

  return {
    uniqueCount: studentArr.length,
    hasJohnDoe: ogSet.has("John Doe"),
    studentsArray: studentArr,
  };
}
/* Coddy Solution:
function processStudentGroups(students) {
  let studentSet = new Set(students);

  for (let student of studentSet) {
    if (student.toLowerCase().startsWith('z')) {
      studentSet.delete(student);
    }
  }

  studentSet.add('John Doe');

  return {
    uniqueCount: studentSet.size,
    hasJohnDoe: studentSet.has('John Doe'),
    studentsArray: Array.from(studentSet)
  };
}
*/

console.log(
  processStudentGroups([
    "John Doe",
    "ZARA",
    "Emma",
    "zeus",
    "John Doe",
    "Emma",
  ]),
);

console.log(
  `\n\n${longHypen}${hyphen}(  Math - Union Of Sets  (Sets Part 2) )${longHypen}`,
);
/*    Math - Union Of Sets

The union of two sets creates a new set containing all elements from both sets, 
without duplicates.

Create a union using the spread operator:

function union(setA, setB) {
  return new Set([...setA, ...setB]);
}

const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
const unionSet = union(setA, setB);

console.log(unionSet); // Set(5) { 1, 2, 3, 4, 5 }

The spread operator (...) converts each Set into an array, 
which are then combined into a new array to create a new Set, 
automatically removing duplicates.
*/

/*      Math - Union Of Sets

Challenge  (Easy):
Create a function called setUnion that takes two arrays as parameters. 
The function should convert that arrays to sets and create a new Set that is the union of the two input Sets. 
Finally convert the set to an array and return it.
  
Do not use the spread operator in your solution.

*/

function setUnion(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  // Write your code here
  const concat = Array.from(set1).concat(Array.from(set2));
  // console.log(concat)
  return Array.from(new Set(concat));
}

/* Coddy Solution:
function setUnion(arr1, arr2) {
  const set1 = new Set(arr1)
  const set2 = new Set(arr2)
  const unionSet = new Set(set1);
  for (let item of set2) {
    unionSet.add(item);
  }
  return Array.from(unionSet);
}
 */

console.log(setUnion([1, 1, 2, 2], [2, 2, 3, 3]));

console.log(
  `\n\n${longHypen}${hyphen}(  Math - Intersection Of Sets )${longHypen}`,
);
/*   Math - Intersection Of Sets

The intersection of two sets contains only elements present in both sets.

const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);
const intersection = new Set();

for (let element of set1) {
  if (set2.has(element)) {
    intersection.add(element);
  }
}

Create a function called setIntersection that takes arrays as parameters.
The function should convert that arrays to Sets. 
Create a Set that is the intersection of the two input Sets, convert to an array and return the array. 
Do not use the spread operator in your solution.
*/

function setIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const intersectionSet = new Set();

  // Write your code here
  for (const item of set1) {
    if (set2.has(item)) {
      intersectionSet.add(item);
    }
  }

  // return new Set([...set1, ...set2]);
  return Array.from(intersectionSet);
}

console.log(
  setIntersection(["apple", "banana", "orange"], ["banana", "kiwi", "orange"]),
);

console.log(
  `\n\n${longHypen}${hyphen}(  Math - Intersection Of Sets => setDifference() )${longHypen}`,
);
/*   Math - Difference Of Sets

The difference of two sets A and B (A - B) creates a new set containing elements that are in A but not in B. 
This operation is not commutative (A - B ≠ B - A).

To find the difference between sets, convert arrays to sets and use set operations to find elements in the first set but not in the second. 

For example:

const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([3, 4, 5, 6, 7]);

// A - B: elements in A but not in B
const differenceAB = new Set([...setA].filter(x => !setB.has(x)));
console.log('A - B:', differenceAB); // Set { 1, 2 }

// B - A: elements in B but not in A
const differenceBA = new Set([...setB].filter(x => !setA.has(x)));
console.log('B - A:', differenceBA); // Set { 6, 7 }

Challenge (Easy):

Create a function called setDifference that takes two arrays as parameters: arr1 and arr2. 
The function should convert the arrays to sets. 
Create a new Set that contains elements that are in set1 but not in set2, 
convert it an array and return it
*/

function setDifference(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const differenceSet = new Set();
  // Write your code here

  // target: A - B    A elements without in B
  set1.forEach((item) => (!set2.has(item) ? differenceSet.add(item) : item));

  return Array.from(differenceSet);
}
/* Coddy Solution:
function setDifference(arr1, arr2) {
  const set1 = new Set(arr1)
  const set2 = new Set(arr2)
  const differenceSet = new Set();
  for (let item of set1) {
    if (!set2.has(item)) {
      differenceSet.add(item);
    }
  }
  return Array.from(differenceSet);
}
*/

console.log(setDifference([1, 2, 3, 4], [3, 4, 5, 6]));

console.log(
  `\n\n${longHypen}${hyphen}(  Math - Symmetric Difference )${longHypen}`,
);
/* 
Math - Symmetric Difference

Challenge (Easy):
Create a function called efficientSymmetricDifference that takes two arrays as parameters: arr1 and arr2. 
The function should convert the arrays to sets. 
Create a new Set that is the symmetric difference of the two input Sets, 
convert it to array and return the array
*/

function efficientSymmetricDifference(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const symDiff = new Set();
  // Write your code here

  new Set([...set1, ...set2]).forEach(item => {
    if (!set1.has(item) || !set2.has(item)) {
      symDiff.add(item)
    }
  })

  return Array.from(symDiff);
}

console.log(efficientSymmetricDifference([1, 2, 3], [3, 4, 5]));
