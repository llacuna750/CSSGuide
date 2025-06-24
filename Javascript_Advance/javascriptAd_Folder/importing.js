//Import and Export - A deeper dive
import { interplanetaryDestinationsArr as destination, shortSpaceTripsArr as spaceTrip } from "./data.js";
import { interplanetaryDestinationsArr, shortSpaceTripsArr} from "./data.js";
import getMatchingTripsArr from "./getMatchingTripsArr.js";

// console.log(interplanetaryDestinationsArr);
// console.log('Destination: ',destination,'\nTrip: ', spaceTrip);
console.log(getMatchingTripsArr(interplanetaryDestinationsArr, "exotic"));

/* const num = [10, 2, 50, 3, 5];
for (const a of num){
    console.log(a);
} */

/* Intro to Constructors
Two types of Constructor
    ------Inbuilt-----                                ----Custom-----
*Provide objects in various             *Constructors we design ourselves to produce
predetermined formats, like              objects for our own specific purposes.
Data objects and Error objections,
and Objects for each data type.
*/

const dateSnapshot = new Date();
// console.log(typeof dateSnapshot);
console.log(dateSnapshot);
console.log(dateSnapshot.toString());

/* */