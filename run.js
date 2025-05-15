

// console.log(`Run this code`);
// let strname = "";
// let notstr = !strname;
// let nameT = "Gabriel";

// console.log(`not blank because your name is: ${nameT.trim()}`);
// console.log(notstr);

const prompt = require('prompt-sync')(); // Import prompt-sync

function CheckifStudent() {
  let ageInput = prompt("Enter your age: ");

  let age = parseInt(ageInput, 10);

  if (isNumber(age) && age < 18) {
    console.log(`Working.. 20% Discount!`)
  } 
  else if (isNumber(age) && age >= 18) {
    console.log(`Working.... na 10% Discount!`);
  }else {
    alert("Invalid age entered.");
  }

}

function isNumber(age) {
  return 
  // if (age >= 0) {
  //   return true;
  // } else {
  //   return false;
  // return !isNaN(value) && value.trim() !== "";
  // }
}
// let num = prompt("isNAN: ");
// isInteger = Number.isInteger(Number(num));

// console.log(`is a num? ${isInteger}`);

let value = prompt("insert anything: ");
const val = Number(value);

// if (val !== val) {
//   console.log(`No it is same number: ${val}`);
// }else {
//   console.log(` ${val}`);
// }
let output = val !== val;
console.log(` ${output}`);

// Function myisNan
function myIsNaN(value) {
  // Try to convert the value to a number
  const num = Number(value);

  // Check if the result is NaN (Not-a-Number)
  return num !== num; // Only NaN is not equal to itself
}


// CheckifStudent();