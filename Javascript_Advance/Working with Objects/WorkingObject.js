const spaceMe = "-".repeat(30);
/************************************************/ console.log("\n", spaceMe, "1. Objects and Inbuilt Methods", spaceMe, ""); /************************************************/

const books = {
    "boo": { title: "To Kill a Mockingbird", price: 18.99, isAvailable: true },
    "boo2": { title: "1984", price: 15.99, isAvailable: false },
    "boo3": { title: "The Great Gatsby", price: 12.49, isAvailable: true },
    "boo4": { title: "Moby Dick", price: 22.50, isAvailable: false },
}

console.log(books.boo1); // Output undefine
console.log(books); 
console.log(books.boo2);

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
console.log(Object.keys(books.boo)); // Return a Object keys

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
console.log(oValues);

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
