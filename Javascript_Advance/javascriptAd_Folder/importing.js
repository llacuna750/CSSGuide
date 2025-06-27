const spaceMe = "-".repeat(30);
//Import and Export - A deeper dive
/*import  spaceMe  from "./advancejs.js";*/
import { interplanetaryDestinationsArr as destination, shortSpaceTripsArr as spaceTrip } from "./data.js";
import { interplanetaryDestinationsArr, shortSpaceTripsArr} from "./data.js";
import getMatchingTripsArr from "./getMatchingTripsArr.js";

console.log("\n", spaceMe, "7. Import and Export - ", spaceMe, "\n");
// console.log(interplanetaryDestinationsArr);
// console.log('Destination: ',destination,'\nTrip: ', spaceTrip);
console.log(getMatchingTripsArr(interplanetaryDestinationsArr, "exotic"));

/* for of 
const num = [10, 2, 50, 3, 5]; 
for (const a of num){
    console.log(a);
} */

console.log("\n", spaceMe, "8.1 Constructors", spaceMe, "\n");
/* Intro to Constructors
Two types of Constructor
    ------Inbuilt-----                                ----Custom-----
*Provide objects in various             *Constructors we design ourselves to produce
predetermined formats, like              objects for our own specific purposes.
Data objects and Error objections,
and Objects for each data type.
*/

// Date Constructors
const dateSnapshot = new Date();
// console.log(typeof dateSnapshot);
console.log(dateSnapshot);  
console.log(dateSnapshot.toString());
console.log(`Copyright ${dateSnapshot.getFullYear().toString()} all rights reserved.`);
/* Challenge: 
1. Search online to find out how we can get just the year using the Date() constructor. Then update the code in the console. */

/* The Error() Constructor */
console.log("\n", spaceMe, "8.2 Constructors", spaceMe, "\n");
function checkUsername(userName) {
  try {
    if (userName) {
      console.log(userName);
    } else {
      console.log("I execute");
      throw new Error('No username provided');
      console.log("I do not execute");
    }
  } catch (error) {
    console.log("Error an occur:",error.message);
  }
}
checkUsername(); // Blank parameters

String();
Number();
Array();
Object();
Boolean();

// const person =  new Object();
const person = {}
person.name = 'Tom';

console.log(person);

/* Pre-increment */
console.log("\n", spaceMe, "9. Pre-increment", spaceMe, "\n");
let currentTicketNumber = 0;

function getNextTicketNumber() {
  /* Challenge: 1. Move the increment operator to the front of the expression. */
//   return currentTicketNumber++ +1;45555`r
  return ++currentTicketNumber; // same Output
}

// Simulating guests arriving and recieving ticket numbers
console.log(`Guest 1, your ticket number is: ${getNextTicketNumber()}`);
console.log(`Guest 1, your ticket number is: ${getNextTicketNumber()}`);
console.log(`Guest 1, your ticket number is: ${getNextTicketNumber()}`);

/* Numeric Separators & BigInt */
/* Challenge: 1. Use numeric separators (_) to separate out the digits into chunks of 3 so they are easier to read. */
console.log("\n", spaceMe, "10. Numeric Separators & BigInt", spaceMe, "\n");

// const tomsBankBalanceGBP = 9_007_199_254_740_991 * 2; // multiply by 2
const tomsBankBalanceGBP = BigInt(9_007_199_254_740_991_345); // bigInt

console.log(typeof tomsBankBalanceGBP);
console.log(tomsBankBalanceGBP);

try {
  console.log(Math.sqrt(tomsBankBalanceGBP));
} catch (err) {
  console.log("Error an occur:", err.message);
} finally {
  // Optional: Code that always executes
  console.log("This block always runs.");
}

/* Hoisting */
console.log("\n",spaceMe, "11. Hoisting", spaceMe, "\n");

function getWeather(){
  return "Today's weather is warm and sunny";
}
console.log(getWeather()); // What will this log?
console.log(getNews()); // What will this log?

function getNews() {
  return "A new swimming pool has opened in the town centre...";
}
try {
  console.log(trafficInfo); // What will this log?
} catch (err) {
  console.log(`Error message:`,err.message);
}
const trafficInfo = 'All roads are busy right now'; 

// Super Challeng: Stock Ticker
console.log("\n",spaceMe,"12. Super Challeng: Stock Ticker",spaceMe,"\nGo to fakeStockAPI.js file");

// For of - A nicer way of iterating
console.log("\n",spaceMe,"13. For of",spaceMe,"\n");
// characters have multiple (4) Objects
const charaters = [
  {
    title: "Ninja",
    emoji: "🐱‍👤",
    powers: ["agility", "stealth", "aggression"],
  },
  {
    title: "Sorcerer",
    emoji: "🧙‍♂️",
    powers: ["magic", "invisibility", "necromacy"],
  },
  {
    title: "Ogre",
    emoji: "👹",
    powers: ["power", "stamina", "shapeshifting"],
  },
  {
    title: "Unicorn",
    emoji: "🦄",
    powers: ["flight", "power", "purity"],
  }
];

console.log(`Type:`,typeof charaters);
console.log( charaters); // print the array

/* Challenge: 
  1. Nest a for of inside this for of to iterate over 
  the powers array for each character. Log out each power. 
*/

for (let character of charaters) {
  // console.log(character.powers); // print only objects of Power
  // console.log(character); // Print all objects inside the array
  for (let power of character.powers ) {
    console.log(power); // Accessing the array each character power
  }
}

console.log("\n", spaceMe, "14. for in", spaceMe, "\n");

// We have single Object
const character1 = {
  title: "Ninja",
  emoji: '🐱‍👤',
  powers: ["agility", "stealth", "aggression"],
}

const ninJa = 'Ninja';
try {
  for (const property in character1){
    // console.log(property); // Print the key index
    console.log(character1[property]); // print the Object value
  }

  for (const letter of ninJa){
    console.log(letter);
  }
} catch (err) {
  console.log('Error an occur:',err.message);
}

/*  [for of]     VS     [for in]
  - They both iterate over object data structures
  - Arrays are objects too!

  [ for..in ]                                    [ for..of ]
  - iterates over all enumerable           - iterates over the values of an iterable object.
  property keys of an object               ( examples of iterable objects include arrays, strings) 
*/

console.log("\n", spaceMe, "15.1 .forEach()", spaceMe, "\n");

/* A method for iterating over arrays 
  Challenge:
  1. Nest a forEach to Log out each individual power in each 
  characters powers array.f
*/

charaters.forEach((myChar)=> {
  console.log(myChar.title,'=',myChar.powers); // same output as For of (only single for of.)
  // console.log(myChar.powers); // same output as For of (only single for of.)

  // myChar.powers.forEach((pawer)=> {
  //   console.log(pawer);
  // });
});

console.log("\n", spaceMe, "15.2 another feature of .forEach()", spaceMe, "\n");
charaters.forEach((myChar,index)=> {
  // another feature of .forEach()
  console.log(index,myChar);
});

console.log("\n", spaceMe, "15 .includes()", spaceMe, "\n");

const emojis = ['🦒','🦁','🐼'];
console.log(emojis.includes('🐼')); // return boolean value


