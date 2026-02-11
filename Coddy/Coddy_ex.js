/*      The Join & Split Methods


The join() method creates a string by concatenating array elements with a separator:

array.join([separator])
The split() method divides a string into an array of substrings:

string.split([separator])
Examples:

const fruits = ['apple', 'banana', 'orange'];
const str = fruits.join(', '); // "apple, banana, orange"

const sentence = "Hello World";
const words = sentence.split(' '); // ['Hello', 'World']

// Different separators
fruits.join(''); // "applebananaorange"
fruits.join('-'); // "apple-banana-orange"
"2023-05-15".split('-'); // ['2023', '05', '15']
*/

const fruits = ['apple', 'banana', 'orange'];
const str = fruits.join(', '); // "apple, banana, orange"

const sentence = "Hello World";
const words = sentence.split(' '); // ['Hello', 'World']

// Different separators
fruits.join(''); // "applebananaorange"
fruits.join('-'); // "apple-banana-orange"
"2023-05-15".split('-'); // ['2023', '05', '15']
console.log(fruits)
console.log(["x", "y"].join());