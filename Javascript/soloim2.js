document.title = `JS Intermediate`;

function myButton(message) {
  alert(message);
}

let imgDom1 = document.getElementById("picture1");
imgDom1.style.width = "300px";
let link = imgDom1.src;
imgDom1.src = "../images/CSS favicon.jpg";

console.log(imgDom1.src); 
console.log(imgDom1.style.width); // Should log "100px"
console.log(`src => ${link}`); 

function changeImage () {
  let imgDom2 = document.getElementById("picture2");
  imgDom2.src = "../images/sakamoto.jpg";

  console.log(imgDom2.src);
  console.log(imgDom2.style.width); // Should log "100px"
  console.log(`src => ${link}`); 
}

let wayl = 10;
let end = 10;

while (wayl >= -1) {
  if (wayl >= 0) {
    console.log(wayl);
    wayl = wayl - 1;
  }else if (wayl == -1) {
    console.log(`end!`);
    wayl = -2;
  }
}

function displayName () {
  let greet = document.getElementById(`greeting`);
  let name = document.getElementById(`input1`);

  name.style.fontWeight = `100`;
  let inputValue = name.value;
  greet.textContent = `Hello! ${inputValue} Happy Coding`;
}

function grantedorNot() {
  const pass = document.getElementById("pass1").value;
  const display = document.getElementById("displaypass");
  let correctPass = "dabdabgwapo!";

  if (pass === `dabdabgwapo!`) {
    display.textContent = `Access Granted`;
    Object.assign(display.style, {
      border: `1px solid 5px`,
      backgroundColor: `rgb(42, 205, 42)`,
      color: `rgb(31, 33, 33)`,
      marginTop: `15px`,
    });
  }else {
    display.textContent = `Not Permitted`;
    Object.assign(display.style, {
      border: `0.5px solid`,
      backgroundColor: `rgb(173, 27, 64)`,
      color: `rgb(198, 240, 240)`,
      marginTop: `15px`,
    });
  }
}

let correctPass = document.getElementById("pass1").value;
console.log(correctPass);
let display = document.getElementById("result"); // reference the display container

//Array traversal
const number = [5, 2, 4, 7, 1, 15, 9];
console.log(number);

let max = number[0];
let min = number[0];
/*
          input: 5, 2, 4, 7, 1, 9, 15
expected output: 1, 2, 4, 5, 7, 9, 15
  n[i=1] 5 > 2 T
  n[i=2] 5 > 4 T
  n[i=3] 5 > 7 F
  n[i=4] 5 > 1 T
  n[i=5] 5 > 9 F
  n[i=6] 5 > 15 F
*/ 
for (let i=0; i<number.length; i+=1) {
  if (max >  number[i]) {
    max = number[i];
    // min = number[i-1];
    // console.log(min);
    // if (max > number[i+1]) {
    // }
  }
  else {
    number[i+1];
    // number[i] = number[i + 1];
    // max = number[i];
    // console.log(number[i]);
  }
  
}


// console.log(`example ${max}`);
console.log(`Smallest value of an array is => ${max}`);
// console.log(`The max value of an array is => ${max}`);