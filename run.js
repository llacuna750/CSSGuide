

// console.log(`Run this code`);
// let strname = "";
// let notstr = !strname;
// let nameT = "Gabriel";

// console.log(`not blank because your name is: ${nameT.trim()}`);
// console.log(notstr);

const prompt = require('prompt-sync')(); // Import prompt-sync

// CheckifStudent();  // called the function
function CheckifStudent() {
  let ageInput = prompt("Enter your age: ");

  let age = parseInt(ageInput, 10);

  if (isNumber(age) && age < 18) {
    console.log(`Working.. 20% Discount!`)
  } 
  else if (isNumber(age) && age >= 18) {
    console.log(`Working.... na 10% Discount!`);
  }else {
    console.log(`Invalid age entered.`);
  }
}

function isNumber(age) {
  if (age >= 0) {
    return true;
  } else {
    //    not a number   &&   is blank
    return !isNaN(age) && value.trim() !== ""; 
  }
}

// Function isNan be like
function myIsNaN(value) {
  // Try to convert the value to a number
  const num = Number(value);

  // Check if the result is NaN (Not-a-Number)
  return num !== num; // Only NaN is not equal to itself
}

// let num = prompt("isNAN: ");
// isInteger = Number.isInteger(Number(num));
// console.log(`is a num? ${isInteger}`);

// let value = prompt("Is this a number?  ");
// const val = Number(value);

// if (val !== val) {
//   console.log(`That is not a number: ${val}`);
// }else {
//   console.log(`Yes that's valid: ${val}`);
// }
// let output = val === val;
// console.log(` ${output}`);

// let value = prompt(`Enter a number: `);
// const num = Number(value);

// Check if the result is NaN (Not-a-Number)
// console.log(num !== num); // Only NaN is not equal to itself


