const spaceMe = "-".repeat(30);

/*      What will be studying:
    1. Symbols 
    2. Map Object
    3. Set Object
*/

/************************************************/ console.log("\n\n\n\n", spaceMe, "Collections & Symbols", spaceMe, ""); /************************************************/   
/************************************************/ console.log("\n\n\n\n", spaceMe, "1. Symbols", spaceMe, ""); /************************************************/   

/*
Symbols
- A primitive data type
- An immutable identifier used as a property key in objects
- Each symbols in unique
- (A bit like UUIDs / GUIDs)
*/


const userName = Symbol(`userName`);
const userName1 = Symbol(`userName`);

console.log(userName.toString());
console.log(userName === userName1);

const user = {
    name: 'Benny',
    // [userName]: 'Benny67' // internal assign
    // ,[Symbol('user id')]: 'Benny67'
}

user[userName] = 'Benny67'; // External assign

console.log(user);

// the userName propert is hidden
for (let prop in user) {
    console.log(prop);
}

console.log(Object.keys(user)); // same Output Symbol is hidden
console.log(JSON.stringify(user)); // same result
console.log(user[userName]); // we successfully added to object the userName Symbol, but usefully it was hidden

/*
So, we use Symbols when we need to add  properties to objects without the risk of property name conflicts.

Remember:
- Symbols are not 100% private   (There are methods which can access them)
- Misuse or overuse of symbols can lead to confusion or complexity in code maintenance
*/


/************************************************/ console.log("\n\n\n\n", spaceMe, "2. Symbols Challenge", spaceMe, ""); /************************************************/   

 /* Challenge:
1. Add a hidden property to the book object holding a librarian's note say the book has gone missing.

2. Log out the new property.
*/


const book = {
    title: "The Catcher in the Rye",
    author: "J.D Salinger",
    year: 1951
    // ,[Symbol('Missing book')]: 'This book has gone missing'
}

const noteMissing = Symbol('Optional');
book[noteMissing] = 'This title has gone missing';

console.log(book);
console.log(book[noteMissing]);


/************************************************/ console.log("\n\n\n\n", spaceMe, "3. The Map Object", spaceMe, ""); /************************************************/   

/*
The Map Object holds key / value pairs just like a regular object.

Map Object Benefits:
- Use another data types as keys
- Iterate with a forEach
- Insertion Order
*/

const athlete1 = { name: "Alice", age: "50" };
const athlete2 = { name: "Dave", age: "51" };
const athlete3 = { name: "Nicky", age: "49" };

// Map Object
const finishers = new Map(); 

finishers.set(athlete1, 10000);
finishers.set(athlete2, 7000);

console.log(finishers);

// 2nd Benefits Iterate with .forEach()

finishers.forEach(key => console.log(key))

finishers.forEach((value, key) => console.log(`\nKey index: ${key.name},${" ".repeat(10)}  Object Value: ${value}` ))


finishers.set(athlete3, `String Value`); // this map object set to string value
console.log(finishers.get(athlete3)); // print the add Map object 
console.log(finishers.size); // print size


// log the Entries 
const entriesIterator = finishers.entries(); 

for (let entry of entriesIterator) {
    console.log(entry[1]);
}

finishers.delete(athlete1);
console.log(finishers.has(athlete1)); // return false
console.log(finishers.has(athlete3)); // return true

/* 
Properties & methods
- size (property) 
- set
- get
- delete
*/

// 3rd Benefits Insertion Order
console.log(`\n3rd Benefits Insertion Order:\n`);

const person = {
    name: 'Micky',
    dob: '200174',
    location: 'Dunwich'
}

person.language = 'English'
person['100'] = 'one hundred'
person['2'] = 'two'
person['1'] = '5000'


for (let key in person) {
    console.log(person[key]);
}


/************************************************/ console.log("\n\n\n\n", spaceMe, "4. Map Object Challenge", spaceMe, ""); /************************************************/   

/* My though in Map Object in Javascript 
Unlike sa java dili siya ka maka insertion order, 
sa javascript maka insertion order ka ug ang object,
Pwede sad nimo himoon ang normal object as key index sa imong Map Object.
*/

const atlet1 = { name: 'Alice', averageTime10KmMins: 58.3 };
const atlet2 = { name: 'Dave', averageTime10KmMins: 53.2 };
const atlet3 = { name: 'Micky', averageTime10KmMins: 64.5 };
const atlet4 = { name: 'Judy', averageTime10KmMins: 66.0 };

/* Challenge */
/* 1. Create a map object "athletes" to store the athletes. */
const athletes = new Map();

function addAthlete(athlete, newTime) {
    /* 2. This function should add athletes to the "athletes" map. */
    athletes.set(athlete, newTime)
}

function getSummary( allAthletes ) {
  /* This function should make the following appear in the console */

  allAthletes.forEach((objVal, keyIndex) => console.log(`${keyIndex.name}'s average time is ${keyIndex.averageTime10KmMins} but today Alice achieved ${objVal}`));
  // Alice's average time is 58.3 but today Alice achieved 57.3
  // Dave's average time is 53.2 but today Dave achieved 61.1
  // Micky's average time is 64.5 but today Micky achieved 59.9
  // Judy's average time is 66.0 but today Judy achieved 61.6
}

addAthlete(atlet1, 57.3)
addAthlete(atlet2, 61.1);
addAthlete(atlet3, 59.9);
addAthlete(atlet4, 61.6); 

getSummary(athletes);


/************************************************/ console.log("\n\n\n\n", spaceMe, "5. The Set Object", spaceMe, ""); /************************************************/

/*
A set object stores unique values as individual items, not key/value pairs.
It's a bit like an array but with each item unique - no duplicates

ug sa java pa HashSet<>()
*/


const wishListArr = ['shoes', 'after shave', 'tesla', 'after shave', 'shoes'];

// const wishListSet = new Set(wishListArr);
const wishListSet = new Set(wishListArr);
wishListSet.add("diary");

try {
    wishListSet.map(listItem => console.log(listItem))
} catch (error) {
    console.log(error.message);
}

/*
What's happening is: the array list of wishListArr was set of new Set()
constructor to remove some duplicate, 
and the new set is created a new Array using a Array.from() method
*/

console.log('\nconvert the set to Array using Array.from() method para magamit natong map(), and we add diary in Set:');
// wishListSet = Array.from(new Set(wishListArr)); // here we use Array.from() to convert Set() into an array

console.log('\nUse forEach():');
wishListSet.delete(`shoes`)
console.log(`Is there a shoes in Set?`, wishListSet.has('shoes'));

wishListSet.clear();
wishListSet.forEach((listItem) => console.log(listItem));



/************************************************/ console.log("\n\n\n\n", spaceMe, "6. Set Challenge", spaceMe, ""); /************************************************/
/*
Challenge: 
1. Refactor this code to use a Set instead 
    of an array so no tags can be duplicated!
*/

// const postTags = [] // instead array we use Set() Constructor to remove the duplicates
const postTags = new Set();


function addTag(newTag) {
    // postTags.push(newTag); // only work in normal array
    postTags.add(newTag);
}

addTag('history');
addTag('romans');
addTag('sociology');
addTag('history');
addTag('history');

postTags.forEach(tag => console.log(tag));

// console.log(postTags)

/*
What we Studied:
1. Sysmbol 
2. Map Object
3. Set Object
*/