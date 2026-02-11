let arr = [1, 2, 3, 4, 5, 6, 7, 8, 2, 5];
/* 
    Challenge: 
    find the Duplicate
    bring the Expected Output: 2, 5 
*/

for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
  console.log();

  for (let x = 0; x < arr.length; x++) {
    if (i !== x && x > i - 1 && arr[i] === arr[x]) {
      console.log(
        `i = ${i} Value: ${arr[i]},           j = ${x} Value: ${arr[x]}`,
      );
    }
  }
}

/*
    Challenge:
    reverse the variable value h
*/
const h = `Hello World!`;

// With Built-in method
const splitH = h.split("");
const reverse = splitH.reverse();
console.log(`With Built-in method:`, reverse.join(""));

// WithOut Built-in method
let reverseHere = [];

const n = h.length - 1;
for (let i = n; i >= 0; i--) {
  reverseHere.push(h[i]);
}
console.log(`With-Out using .split`, reverse);
console.log(`WithOut Built-in method:`, reverseHere.join(""));

const arrNum = [5, 6, 7, 5, 8, 4, 2, 6];

// find the DuplicateinaArray
function findDuplicate(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    // console.log(); // add new line every compete iteration of i
    for (let j = i + 1; j < arr.length; j++) {
      // console.log(`i = ${i} Value: ${arr[i]},           j = ${j} Value: ${arr[j]}`);

      if (arr[i] == arr[j]) {
        // console.log(arr[i]);
        result.push(arr[i]);
      }
    }
  }
  return result;
}

console.log(findDuplicate(arrNum)); //[5, 6]
// console.log(findDuplicate(arrNum).join(' ')); // 5 6

const arrs = ["a", "b", 18, "d", 100, 10];
// console.log(arrs); // OP: [ 'a', 'b', 18, 'd', 100, 10 ]

// function that separate an elements of char of one array & numbers elements of different array

function separateString_Number(array) {
  const arrNum = array.filter((item) => typeof item !== "string");
  const arrChar = array.filter((item) => typeof item === "string");

  console.log("Array Number:", arrNum);
  console.log("Array Char:", arrChar);

  // const arrNum = [];
  // const arrchar = [];

  // array.filter(arr => {
  //     if (typeof arr !== 'string') {
  //         arrNum.push(arr);
  //     } else {
  //         arrchar.push(arr);
  //     }
  // });
  // console.log('Array Number:', arrNum);
  // console.log('Array char:', arrchar);
}

// console.log(arrs.filter(arr => {
//     return typeof arr !== 'string';
// }));

// const arrJoin = arrs.join();
// const arrSplit = arrJoin.split(","); // [ 'a', 'b', '18', 'd', '100', '10' ]
// console.log(arrSplit);

separateString_Number(arrs);

const column = 7;
const row = 5;
let z = 1;

const space = " ";
const symbol = "*";

console.log(space.repeat(5), symbol);
console.log(space.repeat(3), symbol.repeat(3).split("").join(" "));
console.log(space.repeat(2), symbol.repeat(4).split("").join(" "));
console.log(space.repeat(1), symbol.repeat(5).split("").join(" "));
console.log(space.repeat(0), symbol.repeat(6).split("").join(" "));
console.log(symbol.repeat(7).split("").join(" "));

for (let i = 0; i < row; i++) {
  // you can use j < i+1
  for (let j = 0; j < z; j++) {
    // console.log(`i = ${i}    z = ${z}      j = ${j}`);
    if (z < column) {
      process.stdout.write("* ");
    }
  }
  z = z + 1;
  console.log();
}

// create star in Terminal using for nested for-loop
const thisColumn = 9;
const thisRow = 7;
const dividedColumn = thisColumn / 2;
console.log(dividedColumn);

for (let i = 0; i < thisRow; i++) {
  console.log();

  for (let j = 0; j < thisColumn; j++) {
    if (j > dividedColumn) {
      // console.log(`i = ${i}       j = ${j}`);
    } else {
      // process.stdout.write('* ');
    }
    // process.stdout.write('* ');
  }
}

function printTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    console.log(" ".repeat(rows - i) + "*".repeat(i));
  }
}

printTriangle(5);

const name = "Gabriel llacuna";
console.log(name.length);

const USER_MAP = {
  1: { name: "Kyle" },
  2: { name: "Sally" },
};

console.log(USER_MAP[1]);

const userMap = new Map([
  [1, { name: "Kyle" }],
  [2, { name: "Sally" }],
]);

console.log(userMap);

userMap.set({ userId: 1 }, { name: "John" });

console.log(userMap);

const pangalan = "Gabriel";

const splittedName = pangalan.split("");
console.log(splittedName);
console.log(splittedName.reverse());

const result = splittedName.join("");
console.log(result);

const ngalan = "reverseName";
const reverseNgalan = ngalan.split("");
console.log(reverseNgalan);

const addReverse = [];

for (let i = reverseNgalan.length; i >= 0; i--) {
  // console.log(reverseNgalan[i]);
  addReverse.push(reverseNgalan[i]);
}

const resultRev = addReverse.join("");
console.log(resultRev);

const findDupli = [5, 6, 7, 9, 8, 10, 1, 6, 1];

const findindDuplicate = (arr) => {
  const allduplicated = [];
  for (let i = 0; i < arr.length; i++) {
    console.log("-".repeat(10));

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        allduplicated.push(arr[i]);
        console.log(`i = ${i}      j = ${j}`);
      }
    }
  }
  // console.log(allduplicated.sort());
  return allduplicated;
};

// const finalRes = findindDuplicate(findDupli);
// console.log(`Final res: ${finalRes.sort()}`);

console.log("Bubble Sort");
const list = [10, 20, 2, 3, 4, 6, 7, 8, 5];

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false; // reset at each pass+
    for (let i = 0; i < arr.length - 1; i++) {
      console.log(
        `Compare arr[${i}] = ${arr[i]} with arr[${i + 1}] = ${arr[i + 1]}`,
      );
      if (arr[i] > arr[i + 1]) {
        // swap
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    console.log("One full pass completed:", arr);
  } while (swapped);
  return arr;
}

// Example:
// console.log(bubbleSort([5, 3, 8, 4, 2]));

const bSort = bubbleSort(list);
console.log(bSort);

function sum(a, b = 5) {
  return a * b;
}

const sumPot = (a, b) => {
  if (!b) {
    b = 2;
  }

  return a + b;
};

console.log("Total:", sum(2, 3)); // 20
console.log("Total:", sumPot(8)); // 10

const findWord = [
  {
    name: `Dabvs`,
    age: 21,
    description: "Can play basketball and programming God, remotasker",
  },
  {
    name: `MrBagvs`,
    age: 12,
    description: "Gwapo since birth",
  },
];

function getTargetWord(arrOb, target) {
  const targex = new RegExp(target, "i");

  return arrOb.filter((objs) => {
    // What we use: new Regex() Constructor
    return targex.test(objs.description);
  });
}
console.log(getTargetWord(findWord, `Remotasker`));

// console.log(shortSpaceTripsArr);

const disArr = [10, 20, 30];
const iter = disArr[Symbol.iterator]();

console.log(iter.next().done); // { value: 10, done: false }
console.log(iter.next()); // { value: 20, done: false }
console.log(iter.next()); // { value: 30, done: false }
console.log(iter.next()); // { value: undefined, done: true }

const myRow = 4;
const thisCol = 5;
const mySymbol = "^";

for (let row = 0; row < myRow; row++) {
  let line = "";

  for (let col = 0; col < thisCol; col++) {
    line += mySymbol;
  }

  console.log(line); // print entire row
}

// import longHypen from '../Coddy/Coddy.js'
import { hyphen, space as sp, longHypen } from "../Coddy/Coddy.js";

/* Leet Code TWO SUM in JS */
console.log(`\n\n${longHypen}${hyphen}( Leet Code TWO SUM in JS )${longHypen}`);

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i])

    for (let y = i + 1; y < nums.length; y++) {
      // console.log(`${sp} ${nums[i]} + ${nums[y]} = ${nums[i] + nums[y] }`)

      if (nums[i] + nums[y] == target) {
        // console.log('Cond. true')
        return [i, y];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));

console.log(`\n\n${longHypen}${hyphen}( 2. Add Two Numbers )${longHypen}`);

/*
    Input: l1 = [2,4,3], l2 = [5,6,4]
    Output: [7,0,8]
    Explanation: 342 + 465 = 807.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let myL1 = [];
  let myL2 = [];

  for (let prm1 of l1.reverse()) {
    myL1.push(prm1);
  }
  for (let prm2 of l2.reverse()) {
    myL2.push(prm2);
  }

  const l1Join = Number(myL1.join(""));
  const l2Join = Number(myL2.join(""));
  const result = l1Join + l2Join;

  // console.log(result)

  const num = result;
  const arr = Array.from(String(num), Number).reverse();

  // console.log(arr.reverse()); // Output: [1, 2, 3, 4, 5]
  return arr;
};

/* ChatGPT code:

var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        let sum = carry;

        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    }

    return dummy.next;
};
*/
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));

let checkArr = [1, 4, 5];

console.log(checkArr);

// Factory Function = Return an object
function Student(newName) {
  return {
    name: newName,
  };
}

const student1 = new Student();
student1.name = "Gabriel";
console.log(student1);

// Constructor Function
function Pupil(newName) {
  this.name = newName;
}

const gab = new Pupil("Gab");
console.log(gab);

// Constructor Function to Classes
class Human {
  #name;
  #age;

  constructor(realName, realAge) {
    this.#name = realName;
    this.#age = realAge;
  }

  set setNameto(newName) {
    this.#name = newName;
  }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age;
  }

  addAge() {
    console.log("Happy Birthday");
    this.#age++;
  }
}

const dabVs = new Human("Gabriel2", 21);
// dabVs.name = 'Gab'
dabVs.setNameto = "Gabriel Gwapo";

console.log(dabVs.name);
console.log(dabVs.age);
console.log(dabVs);
dabVs.addAge();
console.log(dabVs.age);

const arr1 = [1, 2, 3, 4, 5];
const set1 = new Set(arr1);

/* We can use array methods to calcutlate or get or filter the expection output */
console.log([...set1]);

let words = ["hello", "world"];
let resultX = words.join("-");
// result is "hello-world"

console.log(resultX);

console.log("ha".repeat(2));

class Node {
  constructor() {
    this.val = 0;
  }

  getValue() {
    // Write code here
    return this.val;
  }

  setValue(newVal) {
    this.val = newVal;
  }
}

const node1 = new Node();
console.log(node1.getValue());
node1.setValue(50);
console.log(node1);