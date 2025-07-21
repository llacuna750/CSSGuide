const spaceMe = "-".repeat(30);
/************************************************/ console.log("\n", spaceMe, "1. Objects and Inbuilt Methods", spaceMe, ""); /************************************************/

const books = {
    "b001": { title: "To Kill a Mockingbird", price: 18.99, isAvailable: true },
    "b002": { title: "1984", price: 15.99, isAvailable: false },
    "b003": { title: "The Great Gatsby", price: 12.49, isAvailable: true },
    "b004": { title: "Moby Dick", price: 22.50, isAvailable: false },
}

console.log(books.b001); // Output undefine
console.log(books); 
console.log(books.b002);

try {
    books.forEach(item => {
        console.log(item);
        // console.log(item.boo3.title);
    })
} catch (error) {
    console.log(error.message);
}

const product = new Object();
product.name = 'Coffee Machine';
console.log(product);

console.log(Object.keys(books)); // Return a Object keys
console.log(Object.keys(books.b001)); // Return a Object keys

/************************************************/ console.log("\n", spaceMe, "2. Objects Methods Challenge", spaceMe, ""); /************************************************/
/* 
Challenge:
1. Use Object.keys to get an array of keys
   You can store it in a const 'bookKeys'.
2. Iterate over bookKeys twice.
   A) First log each individual key in the array.
   B) Then log only the book titles.


Output: b001
        b002
        b003
        b004
Output: To Kill a Mockingbird
        1984
        The Great Gatsby
        Moby Dick

Challenge:
1. Create an array of values using Object.values
2. Iterate over it and log out each book price
*/

const bookKeys = Object.keys(books);
console.log(bookKeys);

bookKeys.forEach(keys => {
    // console.log(keys)
    console.log(books[keys].title); // log out title
});

const oValues = Object.values(books);
// console.log(oValues);

oValues.forEach(item => {
    console.log(item.price); // log out all price
    // console.log(Object.keys(item.title));
})

// [books].forEach((item, index) => {
//     // console.log(item)

//     for (const tTitle in item) {
//         // console.log(item[tTitle]);
//         // console.log(Object.keys(item[tTitle]));
//         [item[tTitle]].forEach(item => {
//             // console.log(item.title); // Very long code to access target Output
//         })
//     }
// });

/************************************************/ console.log("\n", spaceMe, "3. Objects Methods Challenge 2", spaceMe, ""); /************************************************/
/* Object.entries returns an array of arrays, where each inner
   array contains two elements: the key and value of each 
   property on the Object.
*/

const bookEntries = Object.entries(books);
// console.log(bookEntries);

bookEntries.filter(([id, book]) => book.price > 16).forEach(([id, book]) => console.log(`ID: ${id} Book: ${book.title} £${book.price}`)) // Shortcut

const filterCost16 = bookEntries?.filter(less16 => {
    // console.log(``,less16[0]);
    return less16[1].price > 16;

    // console.log(`\n=>:`,less16[0]);

    // const les16Val = Object.values(less16);
    // console.log(`les16Val:`,les16Val);

    // // array method .forEach()
    // less16.forEach(lessT16 => {
    //     // console.log(lessT16);
    //     // console.log(`lessT16:`,lessT16.title);

    //     // console.log(Object.values(lessT16));
        
    //     // const les16Val = Object.values(lessT16);
    //     // console.log(les16Val);
    // });

    // // array method .filter()
    // const lesGret15 = less16.filter (les => {
    //     // console.log(`les:`,les);
    //     // console.log(les.price);
        
    //     return les.price > 16;
    // });

    // // console.log(lesGret15);

    // const destructMe = lesGret15.forEach(les15 => {
    //     // console.log(les15)
    //     const { title, price, isAvailable } = les15;

    //     // console.log('Book:', title,'£'+price); // Copy me!
    // });

    // return less16.filter(target => {
    //     // console.log('target:',target)
    //     return target.price > 16;
    // });
});

// console.log(`filterCost16:`,filterCost16);
filterCost16.forEach(item => {
    const { title, price, isAvailable } = item[1]; // Object destructuring
    // console.log(`ID:`,item[0],'Book:', title, '£' + price); // Long hand proccess
});


/* Challenge:
  1. Use Object.entries to create an array of 'books'.
  2. Use an array method to filter out the books 
   which cost less than 16.
  3. Iterate over the remaining books and log a string 

    for each book in this format: 
    ID: b001 
    Book: To Kill a Mockingbird  £18.99

  Bonus:
  1. Make your code DRYer by destructuring the array 
    where it is passed into a method.
  2. Chain the array methods together.

   Expected Output:
   ID: boo1 Book: To Kill a Mockingbird £18.99
   ID: boo2 Book: Moby Dick £22.5
   
*/

/************************************************/ console.log("\n", spaceMe, "4. Object.hasOwn & .hasOwnProperty()", spaceMe, ""); /************************************************/
const user1 = {
    username: "rpchan",
    subscription: "bronze",
    accessPremiumFeature: false
}

const user2 = {
    username: "bcstevens",
    subscription: "silver",
    accessPremiumFeature: true
}

// console.log(user2.hasOwnProperty('accessPremiumFeature')); // return true
// console.log(Object.hasOwn(user1,'accessPremiumFeature')); // return false   

// kani nga function ga check ug naa bay In adto na Object property.
function canAccessPremiumFeature(userObj, prop) {

    return Object.hasOwn(userObj, prop) && userObj[prop];
    
    // return userObj.hasOwnProperty(prop);
    /* 
        Challenge: 
        1. Write logic to check if the object has the property. 
        Do this challnge twice, once with hasOwn and once 
        with hasOwnProperty. All the function need do is return 
        a boolean.

        Bonus: use short-circuiting to only return true if 
        'accessPremiumFeature' both exists AND is true.
    */
}

console.log(canAccessPremiumFeature(user1, 'accessPremiumFeature'));
console.log(canAccessPremiumFeature(user2, 'accessPremiumFeature'));
