console.log(
  `\n\n${"*".repeat(20)}-( The Sort Method    -sortByLength()-   )-${"*".repeat(20)}`,
);
/*    The Sort Method

The sort() method sorts array elements in place and returns the sorted array. 
By default, it sorts elements as strings in alphabetical order.

Basic syntax:

array.sort([compareFunction])

Sorting strings:

const fruits = ['banana', 'apple', 'orange', 'mango'];
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'mango', 'orange']


Warning: Numbers don't sort correctly without a compare function:

const numbers = [1, 30, 4, 21, 100000];
numbers.sort();
console.log(numbers); // [1, 100000, 21, 30, 4] (incorrect)
Compare function returns:

Negative value if a should come before b
Positive value if b should come before a
Zero if they are equal

Sorting numbers correctly:

// Ascending order
numbers.sort((a, b) => a - b);

// Descending order
numbers.sort((a, b) => b - a);
Sorting objects:

const people = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
];

// Sort by age
people.sort((a, b) => a.age - b.age);

// Sort by name alphabetically
people.sort((a, b) => a.name.localeCompare(b.name));


Challenge  (Easy):
Create a function named sortByLength that takes an array of strings and returns a new array with the same strings sorted by their length in ascending order. 
If two strings have the same length, they should be sorted alphabetically.
*/

const people = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];

// Sort by age
const sort1 = people.sort((a, b) => a.age - b.age);
console.log(sort1)

// Sort by name alphabetically
const sort2 = people.sort((a, b) => a.name.localeCompare(b.name));
console.log(sort2)


const numbers = [1, 30, 4, 21, 100000];
numbers.sort();
console.log(numbers); // [1, 100000, 21, 30, 4] (incorrect)

console.log([1, 30, 4, 21].sort());

/* ========================================================================================== */
function sortByLength(arr) {
  return arr.sort((a, b) => {
    // Write code here

    return a.length === b.length ? a.localeCompare(b) : a.length - b.length;
  });
}

console.log(sortByLength(["zzz", "aaa", "bbb", "ccc"]));