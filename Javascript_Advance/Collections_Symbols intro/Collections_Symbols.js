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

finishers.forEach((value, key) => console.log(`\nKey index: ${key.age},  Object Value: ${value}` ))


finishers.set(athlete3, `String Value`); // this map object set to string value
console.log(finishers.get(athlete3)); // print the add Map object
console.log(finishers.size); // print size


// log the Entries 
const entriesIterator = finishers.entries(); 

for (let entry of entriesIterator) {
    console.log(entry[1]);
}

finishers.delete(athlete1);
finishers.has(athlete1); // return false
finishers.has(athlete3); // return true

/* 
Properties & methods
- size (property) 
- set
- get
- delete
*/

// 3rd Benefits Insertion Order

const person = {
    name: 'Micky',
    dob: '200174',
    location: 'Dunwich'
}

person.language = 'English'
person['100'] = 'one hundred'
person['2'] = 'two'


console.log(`\n3rd Benefits Insertion Order:\n`);
for (let key in person) {
    console.log(person[key]);
}