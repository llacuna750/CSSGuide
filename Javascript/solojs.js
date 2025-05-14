//  Asingn Title
let myTitle = document.title = "Javascript Sololearn Course";
console.log(myTitle);
let myFonts = document.body.style.fontFamily = `"Roboto", sans-serif`; 

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
  // gi-Access niya ang element with form variable then called by name gi kuha ang child properties/value.
  let city = form.elements.city.value;
  let country = form.elements.country.value;
  insertData(city, country);

  console.dir(form);
  console.dir(city);
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
// target the form by id name myForm the add  a event interaction/js then action is processFormData();
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


var n1 = document.getElementById("num1");
var n2 = document.getElementById("num2");

function sumCalc() {
  event.preventDefault(); 

  let form = document.getElementById(`myCalc`);

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

  
  console.log(attempts);
  // Only runs if both inputs are filled
  let sum = Number(n1.value) + Number(n2.value);
  console.log(`Sum of ${n1.value} and ${n2.value} is: ${sum}`);
  form.reset();
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

// Advanced User Input
// let x = confirm(`Proceed to payment?`);
// console.log(x);

// let decision = confirm();
// alert(decision);

function checkTicked () {
  let box = document.getElementById(`c1`);
  
  console.dir(box);

  if (box.checked === true) {
    console.log(`You check the box: ${box.checked}`);
  } else {
    console.log(`You uncheck the box: ${box.checked}`); 
  }
}


function processregFormData () {
  event.preventDefault(); // Prevent form from reloading the page
  let form = document.getElementById(`myregForm`);
  // let email = document.getElementById(`email`).value;
  // let password = document.getElementById(`pass`).value;
  // let isSubscribed = document.getElementById(`subscribe`).checked;

  
  // Access the the value of form through parent form then calling the elements and its value
  let email = form.elements.theEmail.value;
  let password = form.elements.thePass.value;
  let isSubscribed = form.elements.itSubscribe.checked;

  // Insert data into table with predefined function
  inserRegFormtData(email, password, isSubscribed);

  // Clear the form fields   / for next input
  // document.getElementById(`theEmail`).value = ``;
  // document.getElementById(`thePass`).value = ``;
  form.reset(); // clear the form fields
}

function inserRegFormtData(email, password, isSubscribed) {
  let table = document.getElementById("dataregTable");
  let newRow = table.insertRow(-1); // Insert at the end

  // the value of input add in a new row of a th / column
  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);

  cell1.textContent = email;
  cell2.textContent = password;
  // if (isSubscribed === false)
  console.log(`is Subscribe?  ${isSubscribed}`);
  cell3.textContent = isSubscribed ? "Yes" : "No";
}// document.getElementById(`myregForm`).addEventListener(`submit`, processregFormData);

function processPaymentFormData() {
  event.defaultPrevented;
  let form = document.getElementById(`myFormpayment`);

  let cardNumber = form.elements.number.value;
  let holder = form.elements.holder.value;
  let method = form.elements.pay.value;

  // Insert data into table with predefined function
  paymentinsertData(cardNumber, holder, method);

  // Clear the form fields
  form.reset(); // This clears all inputs (text, radio, etc.)
}

function paymentinsertData(cardNumber, holder, method) {
  let table = document.getElementById(`datapmTable`);
  let newRow = table.insertRow(-1); // Insert at the end

  // the value of input add in a new row of a th / column
  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);

  cell1.textContent = cardNumber;
  cell2.textContent = holder;
  cell3.textContent = method;

  // Add border styles
  [cell1, cell2, cell3].forEach((cell) => {
    cell.style.border = "1px solid black";
    // cell.style.padding = "10px";
    cell.style.marginTop = "10px";
    cell.style.textAlign = "center";
  });
  console.log(`Selected payment method: ${method}`);
}

// alert(document.title);
function handleForm(event) {
  event.preventDefault(); // This stops the form from reloading the page

  let form = document.getElementById(`AndOr1`);
  let ttf = form.elements.falseortrue1.value.toLowerCase();
  console.log(ttf);
}
// Logical Operations
let logicalOperation = false || false;
console.log(logicalOperation);
console.log(5 === 5);

function performAndOrOperation(event) {
  event.preventDefault();
  let form = document.getElementById(`AndOr`);

  let input1 = form.elements.input1.checked;
  let input2 = form.elements.input2.checked;
  let pickLO = form.elements.falseortrue.value.toLowerCase(); // PICK OR or AND
  let result;

  if (pickLO === "or") {
    result = input1 || input2;
    console.log(`Picked logical Operation: ${pickLO}`);
    alertConsoleLO_OR(input1, input2, result);
  } else if (pickLO === "and") {
    result = input1 && input2;
    console.log(`Picked logical Operation: ${pickLO}`);
    alertConsoleLO_AND(input1, input2, result);
  } 
  else {
    alert("Invalid logical operation. Please enter 'AND' or 'OR'.");
    return;
  }
  form.reset();
}

function alertConsoleLO_OR (input1, input2, result) {
  alert(
    `Input 1: ${capitalizeBool(
      input1
    )}   \n      OR \nInput 2: ${capitalizeBool(
      input2
    )} \n\nResult: ${capitalizeBool(result)}`
  );
  console.log(
    `Input 1: ${capitalizeBool(input1)}   \n     OR \nInput 2: ${capitalizeBool(
      input2
    )} \n\nResult: ${capitalizeBool(result)}`
  );
}

function alertConsoleLO_AND (input1, input2, result) {
  alert(
    `Input 1: ${capitalizeBool(input1)}   \n      AND \nInput 2: ${capitalizeBool(input2)} \n\nResult: ${capitalizeBool(result)}`
  );
  console.log(
    `Input 1: ${capitalizeBool(
      input1
    )}   \n     AND \nInput 2: ${capitalizeBool(
      input2
    )} \n\nResult: ${capitalizeBool(result)}`
  );
}

function capitalizeBool(bool) {
  return bool ? "True" : "False";
}

function logicalOperationUse(pickLO) {
  if (typeof pickLO === "string" && pickLO.toLowerCase() === "true") {
    return true;
  } else {
    return false;
  }
}

// Data types // Converting Data types
let a1 = "5";
let b1 = "7";
console.log(a1 + b1);
let balance = 234;
// alert(typeof balance);

// The prompt() instruction always turns the user input into a string, no matter what the user enters.
// let age = Number(prompt("Enter your age: "));
// let age = prompt("Enter your age: ");
// let changetype = Number(age);
// alert(`The data-type of ${age} is ${(typeof changetype)}`);

let x = '55'; // x is a string
let y = Number(x); // y is a number
// alert(typeof y);

let num = 29;
let str = String(a);
// alert(`The current datatype is: ${typeof str} and the property value: ${num}`);
// console.log(`The current datatype is: ${typeof str} and the property value: ${num}`);


// Conditional Statements
// let age = Number(prompt("How old are you?"));
// if (age > 18) {
//   alert(`You pay regular price because your above ${age}`);
// }else {
//   alert(`Discount ${age} below`);
// }

function checkram () {
  let ram = Number(prompt("how many GB do you have on your ram?"));
  let element = document.getElementById(`pbutton`);

  if (ram >= 16) {
    element.textContent = "Start the game....";
    Object.assign(element.style, {
      backgroundColor: "rgb(65, 180, 49)",
      color: "rgb(176, 226, 215)",
      width: `130px`,
    });
    alert(`Enjoy Playing!`);
  }else
  {
    element.textContent = "You need to Upgrade your ram.";
    Object.assign(element.style, {
      backgroundColor: "rgb(209, 56, 56)",
      color: "rgb(176, 226, 215)",
      width: `140px`,
      height: `40px`,
    });
    alert(`You can't play this game!`);
  }
}

function calculate() {
  let x = document.getElementById(`price`);
  let bG = document.getElementById(`statusprice`);
  let isOver18 = confirm(`Press OK if under 18`);

  if (isOver18) {
    x.textContent = `Discount: 10$`;
    Object.assign(bG.style, {
      backgroundColor: "rgb(65, 180, 49)",
      // color: "rgb(219, 235, 231)",
      // width: `130px`,
    });
  }
  else {
    x.textContent = `Regular price: 50$`;
    Object.assign(bG.style, {
      backgroundColor: "rgb(209, 56, 56)",
      color: "rgb(176, 226, 215)",
      // width: `140px`,
      // height: `40px`,
    });
  }
  alert(`Proceed to payment`);  
}

function carspeed() {
  let x = document.getElementById(`yourCar`);
  let carstatus = document.getElementById(`yourcarstatus`);
  let carspeed= prompt("What is the speed of car?")

  if (carspeed < 100) {
    alert("No ticket");
    carstatus.style.color = `white`;
    Object.assign(x.style, {
      backgroundColor: "rgb(176, 199, 77)",
      
    });

  }else {
    alert("Traffic ticket");
    carstatus.textContent = `Issue Traffic ticket`;
    x.classList.add("color-animation");
  }
  alert(`Drive with care`);
}

// Advanced Conditions
let cartItems = 0;
let isCartEmpty = cartItems === 0;
// alert(isCartEmpty);
console.log(`isCartEmpty? ${isCartEmpty}`);

let notificationsOn = true;
let userOnline = false;
// alert(notificationsOn || userOnline);

function CheckifStudent (event) {
  event.preventDefault;
  let form = document.getElementById(`spform`);
  let name = form.elements.Sname.value;
  let sors = form.elements.aya.value;

  insertDataStudentorSenior(name, sors);

  form.reset();
}

function insertDataStudentorSenior (name, issors) {
  let table = document.getElementById("spTable");
  let newRow = table.insertRow(-1); // Insert at the end

  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);

  cell1.textContent = name;
  cell2.textContent = issors ? "Student" : "Seniors";
  cell3.textContent = issors ? "Student discount" : "No discount";

  // Add border styles
  [cell1, cell2, cell3].forEach((cell) => {
    cell.style.border = "1px solid black";
    // cell.style.padding = "10px";
    cell.style.marginTop = "10px";
    cell.style.textAlign = "center";
  });
}