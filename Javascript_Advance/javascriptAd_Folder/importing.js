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

/* const num = [10, 2, 50, 3, 5];
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
  if (userName) {
    console.log(userName);
  } else {
    console.log("I execute");
    // throw new Error('No username provided');
    console.log("No username provided"); // as if throw Error
    // console.log("I do not execute");
  }
}
checkUsername();

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

/* Numeric Separators & Bight */
/* Challenge: 1. Use numeric separators (_) to separate out the digits into chunks of 3 so they are easier to read. */