//Import and Export - A deeper dive
// import { interplanetaryDestinationsArr as destination, shortSpaceTripsArr as spaceTrip } from "./data.js";
import { interplanetaryDestinationsArr, shortSpaceTripsArr} from "./data.js";
import getMatchingTripsArr from './searchFunction.js';

// console.log(interplanetaryDestinationsArr);
// console.log('Destination: ',destination,'\nTrip: ', spaceTrip);
console.log(getMatchingTripsArr(interplanetaryDestinationsArr, "potential"));

/* const num = [10, 2, 50, 3, 5];

for (const a of num){
    console.log(a);
} */