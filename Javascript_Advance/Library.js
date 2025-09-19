document.title = 'Library Book Management System';
console.log('Library Book Management System');

import { Book, Book as Libro } from './Book.js';
new Libro();



/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=   Library Class   =%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
class Library {
    static #books = [];

    // old addBook method
    // addBook(event) {
    //     event.preventDefault();
    //     // console.log(b1.name);

    //     console.log(`You clicked submit!`);

    //     // Show success message
    //     document.getElementById(`isSuccessfullAdd`).innerHTML = ' You successfully added! ✔';
    //     // document.getElementById("registerBtn").addEventListener("click", Registration.register);

    //     let stop = setTimeout(() => {
    //         // Remove success message after 3s
    //         document.getElementById(`isSuccessfullAdd`).innerHTML = '';
    //     }, 2000);

    //     // Get input values
    //     let title = document.getElementById('title').value;
    //     let author = document.getElementById('author').value;
    //     let isbn = document.getElementById('isbn').value;
    //     let status = document.getElementById('status');

    //     book.push(new Libro(title, author, isbn));
    //     console.log('You push one object in a book array!');

    //     document.getElementById('table').innerHTML += `
    //     <tbody>
    //         <tr>
    //             <td>${title} </td>
    //             <td>${author} </td>
    //             <td>${isbn} </td>
    //             <td>${status.checked} </td>
    //         </tr>
    //     </tbody>
    //     `;

    //     // Debugging: log values
    //     console.log({ title, author, isbn, status: status.checked });

    //     let cellElement = document.getElementById('myCell');
    //     let colSpanValue = cellElement.colSpan = book[0].countProperties();






    //     let timeStop = 3;
    //     let stopInterval = setInterval(() => {
    //         console.log(timeStop);

    //         timeStop--;
    //     }, 1000);


    //     // log after 5s
    //     setTimeout(() => {
    //         clearInterval(stopInterval);

    //         for (let bk of book) {
    //             console.log(bk);
    //         }
    //     }, 4000);


    //     // Update whenever checkbox changes
    //     // status.addEventListener("change", () => {
    //     //     document.getElementById('currentStatus').innerHTML = status.checked;
    //     // });
    // }



    static add_Book(book) {
        this.#books.push(book);

        document.getElementById("isSuccessfullAdd").innerHTML = " You successfully added! ✔";

        setTimeout(() => {
            document.getElementById("isSuccessfullAdd").innerHTML = "";
        }, 2000);

        let cellElement = document.getElementById("myCell");
        cellElement.colSpan = this.#books[0].countProperties();

        // Get the last added book
        const bookAdded = this.#books.at(-1);

        const newBook = 
        `
        <tr>
            <td>${bookAdded.title}</td>
            <td>${bookAdded.author}</td>
            <td>${bookAdded.isbn}</td>
            <td>${bookAdded.isAvailable}</td>
        </tr>
        `;

        document.getElementById("bookList").innerHTML += newBook;
    }


    removeBook() {

    }

    findBook() {

    }

    listBooks() {

    }

    borrowBook(isbn) {

    }

    returnBook(isbn) {

    }
}


/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=   User Class   =%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
class User extends Library {
    #name;
    #borrowedBooks = [];

    constructor(name) {
        super(); // Call the super constructor
        this.#name = name;
    }

    get name() {
        return this.#name;
    }
}


/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=   ValidatorInput Class   =%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
class ValidatorInput {
    static isAllInputValid() {
        const form = document.getElementById('formAction');
        // const name = form.elements.name.value;

        const title = form.elements.title.value;
        const author = form.elements.author.value;
        const isbn = form.elements.isbn.value;


        if (!(title && author && isbn)) return;

        Library.add_Book(new Book(title, author, isbn));
        form.reset();
    }
}


/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=   OUTSIDE   =%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/

// document.querySelectorAll("input").forEach(input => {
//     input.addEventListener("input", (e) => {
//         const id = e.target.id;
//         const value = e.target.value.trim();

//         console.log(id);

//         // Clear error messages first
//         document.getElementById("titleError").textContent = "";
//         document.getElementById("authorError").textContent = "";

//         // Title validation
//         if (id === "title") {
//             if (value === "titol") {
//                 document.getElementById("isAllowedtoSubmit").disabled = false;
//                 document.getElementById("titleError").textContent = 
//                     ValidatorInput.isAllInputValid() + " gwapo ko promise!";
//             } else if (value !== "dab") {
//                 document.getElementById("isAllowedtoSubmit").disabled = true;
//             }
//         }

//         // Author validation
//         if (id === "author") {
//             if (value === "otot") {
//                 document.getElementById("isAllowedtoSubmit").disabled = false;
//                 document.getElementById("authorError").textContent =
//                     ValidatorInput.isAllInputValid() + " gwapo ko promise!";
//             }
//         }
//     });
// });

document.getElementById('title').addEventListener('input', async (e) => {
    const title = e.target.value.trim();
    document.getElementById('titleError').textContent = '';

    if (!title) {
        document.getElementById("isAllowedtoSubmit").disabled = true;
    }

    // if (title.trim() === '') {
    //     console.log(`Your title is blank!`);
    // }

    if (title == 'title') {
        document.getElementById('titleError').textContent = 'Valid title!';
        console.log(`You type ${title}`);
    }
});


function updateButtonState() {
    const inputs = document.querySelectorAll('input');
    const isAllFilled = [...inputs].every(i => i.value.trim() !== '');
    const areAllBlank = [...inputs].every(i => i.value.trim() === '');
    const btn = document.getElementById("isAllowedtoSubmit");

    if (isAllFilled) {
        console.log("✅ All inputs are filled");
        btn.disabled = false; // enable
    } else if (areAllBlank) {
        console.log("❌ All inputs are blank");
        btn.disabled = true; // disable
    } else {
        console.log("⚠ Some inputs are blank");
        btn.disabled = true; // disable until all filled
    }
}



document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", updateButtonState);
});

document.getElementById('isAllowedtoSubmit').addEventListener('click', ValidatorInput.isAllInputValid);



// console.log(window.localStorage);

// let cellElement = document.getElementById('colspanth');
// cellElement.ariaColSpan = '2';

// var a = [], b = {};
// a.push(b);
// console.log(a[0] === b);

// const jsonString = '{"name": "Alice", "age": 30, "city": "New York"}';

// console.log(jsonString.name);

// const javascriptObject = JSON.parse(jsonString);

// console.log(jsonString);

// console.log(javascriptObject.name); // Output: Alice
// console.log(javascriptObject.age);  // Output: 30






// const onSearch = () => {
//     const input = document.querySelector("#search");
//     const filter = input.value.toUpperCase();
//     const list = document.querySelectorAll("#list li");

//     list.forEach(el => {
//         const text = el.textContent.toUpperCase();
//         el.style.display = text.includes(filter) ? "" : "none";
//     });
// };

// expose globally for inline HTML events
// window.onSearch = onSearch;

// Make it globally available
// window.addBook = addBook;


// let trimThis = '             Gwapo si dabdab';
// let notTrim = trimThis;
// let finishTrim = trimThis.trim();
// let finishReplace = trimThis.replaceAll(' ', '');
// console.log(finishTrim);
