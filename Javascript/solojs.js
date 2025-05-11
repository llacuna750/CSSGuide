//  Asingn Title
document.title = "Javascript Sololearn Course";

const gbutton = document.getElementById("greenbutton");
gbutton.style.backgroundColor = `green`;
gbutton.style.borderRadius = "5px";
gbutton.style.width = "50%";

console.log(gbutton.textContent);

const imgdom = document.getElementById("dom-img");

const divforimg = document.getElementsByClassName("imgcontainer");
divforimg[0].style.border = `1px solid`;
console.log(divforimg);

const div_slur = document.querySelector(".slurimgcontainer");
div_slur.style.border = `1px solid`;
div_slur.style.marginTop = `10px`;
console.log(div_slur);

const slurimg = document.getElementById('slur');
slurimg.style.margin = '5px';


// slurimg.onclick = function () {
//   const newImg = document.createElement("img");
//   newImg.src = "../images/sakamoto.jpg";
//   newImg.alt = "sakamoto";
//   newImg.style.width = "10%";
//   // div_slur.appendChild(newImg);
// };

slurimg.onclick = function () {
    div_slur.style.display = "flex";
    div_slur.style.justifyContent = "center";
    div_slur.style.alignItems = "center";
  slurimg.src = "../images/sakamoto.jpg";
};


imgdom.onclick = function () {
  imgdom.style.width = "20%";
  divforimg[0].style.display = "flex";
  divforimg[0].style.justifyContent = "center";
  divforimg[0].style.alignItems = "center";
};
// remove double quotation
console.log("not error");

var no = 10;

for (no; no>=0; no--) {
  console.log(`Number ${no}`);
}
console.log("Happy New Year!");

const devname = "Gab dev";
console.log(typeof devname);
console.log(`Your name is ${devname}`);

const readp1 = document.getElementById(`p1`).textContent = "Updated: I want to be a programmer!";
console.log(readp1);

let pharagraph2 = document.getElementById(`p2`);
// alert(pharagraph2.textContent);
pharagraph2 = "New Content";
console.log(pharagraph2);

let coder = `Gab junior dev`;
coder = `Gab Senior dev`;

console.log(coder);

function doSomething() {
  let x = "Game Over";
  // alert(x);
  console.log(x);
}

doSomething();

function myFunction() {
  let x = document.getElementById(`ph1`);
  x.textContent = `Updated Text`;
  x.style.border = `dashed`;
  x.style.backgroundColor = `Green`;
}

const div_button = document.querySelector(".divcolor");
div_button.style.border = `1px solid`;
div_button.style.padding = `50px 0`;
div_button.style.textAlign = `Center`;
div_button.style.width = `50%`;
div_button.style.marginTop = `5px`;

let mybutton = document.getElementById(`button_style`);

function changeColor() {
  mybutton.style.color = `green`;
}

// Assign the click handler correctly
// document.getElementById("button_style").onclick = changeColor;

mybutton.onclick = function() {
  let happy = "Happy Coding!"
  alert(happy);
  changeColor();
  console.log(mybutton);
  div_button.style.backgroundColor = "yellow";
};

let num1 = 5;
let num2 = 6;
let addition = num1 + num2;

console.log(`The sum of two numbers is:  ${addition}`);

let $iloveu = "I Love You!";
console.log($iloveu);

// let userName = prompt(`Please enter your name: `);
document.getElementById(`userName`).textContent = userName;

console.log(`Hi! ${userName}`);


function processFormData() {
  event.preventDefault(); // Prevent form from reloading the page

  // Access the form
  let form = document.getElementById("myForm");
  // Access the elements by name and get values
  let city = form.elements.city.value;
  let country = form.elements.country.value;

  insertData(city, country);

  document.getElementById("city").value = "";
  document.getElementById("country").value = "";
}

function insertData(city, country) {
  let table = document.getElementById("dataTable");
  let newRow = table.insertRow(-1); // Insert at the end

  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);

  cell1.textContent = city;
  cell2.textContent = country;
}

document.getElementById("myForm").addEventListener("submit", processFormData);

function changeStyle() {
  let body = document.getElementById(`body`);
  let changeBackground = document.getElementById(`background`).value;
  let changeColor = document.getElementById(`color`).value;

  body.style.backgroundColor = changeBackground;
  body.style.color = changeColor;

  console.log(`backgroundColor change to: ${changeBackground}`);
  console.log(`Color change to: ${changeColor}`);
}

// Number and String Operations
let thePrice = 5;
let amount = 3;
console.log(thePrice * amount);

let score = 7 + 8;
// alert(`Total score: ${score}`);

function sumCalc() {
  let n1 = document.getElementById("num1");
  let n2 = document.getElementById("num2");

  let attempts = 0;
  while ((n1.value === "" || n2.value === "") && attempts < 1) {
    if (n1.value === "" && n2.value === "") {
      console.log("Can't calculate without a number!");
    } else if (n1.value === "") {
      console.log("Don't empty the first number");
    } else if (n2.value === "") {
      console.log("Don't empty the second number");
    }
    attempts++; // prevent infinite loop
    return; // exit function early if any input is empty
  }

  

  // Only runs if both inputs are filled
  let sum = Number(n1.value) + Number(n2.value);
  console.log(attempts);
  console.log(`Sum of n1 and n2 is: ${sum}`);
}

let price = 14;
let discount = price / 2; // 2 = 50% OFF
// alert(discount);
console.log(`Total discounted price: ${discount} Pesos`);
console.log("Iron"+"Man");

let variable = "360";
console.log(`The type of variable = "360" is:`, typeof variable);

function greet () {
  // prompt method : asks the user for an input and store it in a variable
  let name = prompt(`Please enter your name: `);
  alert(`Welcome to Javascript ${name}!`);
  console.log(`Welcome to Javascript ` + name + " Happy Coding!");
}

// Comparison Operations
function checkBolean () {
  let compare2Number = 5 < 7;
  console.log(compare2Number);
  alert(`5 < 7 is ${compare2Number}`);
  console.log(`5 < 7 is :${compare2Number}`);

  let active = true;
  let registered = false;
  alert(active);
  console.log(`active = true is :${active}`);
}
// How does == differ from === in JavaScript?
// === checks both value and data type, while == only checks value 

let a = 5;
let b = true;
let c = a > 8;
let d = a === 5;
console.log(a, b, c, d);


