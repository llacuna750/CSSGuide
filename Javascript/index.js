// DOM = DOCUMENT OBJECT MODEL
//       Object{} that represents the page you see in the web browser
//       and provides you with an API to interact with it.
//       Web browser constructs the DOM when it loads an HTML document,
//       and structures all the elements in a tree-like representation.
//       Javascript can access the DOM to dynamically
//       change the content, structure, and style of a web page.

// element selectors = methods used to target and manipulate HTML elements
//                     They allow you to select one or multiple HTML elements
//                     from the DOM (Document Object MOdel)

// 1. document.getElementById()       // ELEMENT OR NULL
// 2. document.getElementsByClassName // HTML COLLECTION
// 3. document.getElementsByTagName   // HTML COLLECTION
// 4. document.quarySelector()        // FIRST ELEMENT OR NULL
// 5. document.querySelectorAll()     // NODELIST

document.title = "My website";
document.body.style.backgroundColor = "cyan";
document.getElementById("my_h1");

const username = "Dab Code";    
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.style.backgroundColor = "red";
welcomeMsg.style.textAlign = `center`;
welcomeMsg.style.margin = `3px `;

// Nag ternary2 pako
welcomeMsg.textContent += username ===  '' ? 'Guest' : username;

console.log(welcomeMsg);
// console.dir(welcomeMsg);

// document.getElementById()
const myHeading = document.getElementById(`my-heading`);

myHeading.style.backgroundColor = `red`;
myHeading.style.border = `2px solid rgb(42, 10, 189)`;
myHeading.style.textAlign = `center`;
myHeading.style.width = `50%`;
myHeading.style.color = `white`;

console.log(myHeading);

//document.getElementsByClassName
const fruits = document.getElementsByClassName(`fruits`);

fruits[0].style.backgroundColor = `blue`;

//enhance for loop
// for (let fruit of fruits) {
//     fruit.style.backgroundColor = `yellow`;
// }

// use arrow function
// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = `red`;
//     fruit.style.color = `cyan`;
//     fruit.style.textAlign = `center`;
//     fruit.style.width = `50%`;
// });

console.log(fruits);

const h4Elements = document.getElementsByTagName(`h4`);

// h4Elements[0].style.backgroundColor = 'red';

console.log(h4Elements);

const printh4 = h4Elements[1].textContent;

console.log(h4Elements[0].textContent);
console.log(printh4);

//enhance for loop
for (let the_h4 of h4Elements) {
    the_h4.style.width = `50%`;
    the_h4.style.border = `1px solid`;
    the_h4.style.textAlign = `center`;
    the_h4.style.backgroundColor = `green`;
    the_h4.style.margin = `5px`;
}
// 4. document.quarySelector()        // FIRST ELEMENT OR NULL
const pagkaon = document.querySelector(`li`);
const tryfruits = document.querySelector(`.fruits`);
tryfruits.style.backgroundColor = `yellow`;

pagkaon.style.backgroundColor = "Green";
pagkaon.style.margin = "3px 3px";
console.log(pagkaon);

const foods = document.querySelectorAll(`li`);

foods.forEach(food => {
    // food.style.background = `yellow`;
    food.style.margin =   `0 15px 5px 0`;
});

console.log(foods);

console.log('Gabriel Coder');

// alert('you have alert!');

// constant can't be change the value
const name = 'Gabriel';
// name = 'Dabskie';

// let variable can change the value
let age = 21;
age = 18;



console.log(name);
console.log(age);
// console.error('This is an error!');
console.warn('This is a warning!');
