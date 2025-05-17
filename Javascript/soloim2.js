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

/*        i=0 > i=1
         T input: 5, 2, 4, 7, 1, 9, 15      if true updated    i=0 = i=1

         F input: 2, 5, 4, 7, 1, 9, 15        
           if true: 2, 5, 4, 7, 1, 9, 15    
                    2, 4, 5, 7, 1, 9, 15        if true: i=1  >  i=2
         
         F input:   2, 4, 5, 7, 1, 9, 15 
          if false: 2, 4, 5, 7, 1, 9, 15        if false: i=1  >  i=2
                    2, 4, 7, 5, 1, 9, 15        i=3  =  i=2     5 swap 7
                    2, 4, 7, 1, 5, 9, 15        i=4  =  i=3     new order

        F input:   2, 4, 7, 1, 5, 9, 15 
          if false: 2, 4, 7, 1, 5, 9, 15        if false: i=1  >  i=2
                    2, 4, 1, 7, 5, 9, 15        i=3  =  i=2     7 swap 1
                    2, 4, 1, 5, 7, 9, 15        i=4  =  i=3     new order

        F input:   2, 4, 1, 5, 7, 9, 15         
          if  true: 2, 1, 4, 5, 7, 9, 15        if true: i=1  >  i=2   &&  update to: i=2  = i=1 
                    2, 1, 4, 5, 7, 9, 15         new Order
      
        T input: 2, 1, 4, 5, 7, 9, 15           if true updated    i=0 = i=1
                 1, 2, 4, 5, 7, 9, 15            new Order

        F input: 1, 2, 4, 5, 7, 9, 15           
        if false: 1, 2, 5, 7, 4, 9, 15        if false: i=1  >  i=2
                    
        
expected output: 1, 2, 4, 5, 7, 9, 15 
*/ 
let max = number[0];
let min = number[0];
let temp;

// let number = [5, 3, 4, 1, 2]; // example array
// If yes, here’s a cleaner bubble sort example with explanation:
for (let i = 0; i < number.length - 1; i++) {
  for (let j = 0; j < number.length - 1 - i; j++) {
    if (number[j] > number[j + 1]) {
      // Swap number[j] and number[j + 1]
      let temp = number[j];
      number[j] = number[j + 1];
      number[j + 1] = temp;
      console.log(number);
    }
  }
}

console.log("Sorted array:", number);

let n = number.length;
let swapped = true;

while (swapped) {
  swapped = false;
  let i = 0;

  while (i < n - 1) {
    if (number[i] > number[i + 1]) {
      // Swap number[i] and number[i + 1]
      let temp = number[i];
      number[i] = number[i + 1];
      number[i + 1] = temp;

      swapped = true;
      console.log(number);
    }
    i++;
  }

  // After each pass, the largest element is at the end,
  // so we can reduce the length to check by 1.
  n--;
}

console.log("Sorted array:", number);

// console.log(number[6] != 15);

// console.log(number);
// while (number[6] != 15 ) {
  // if (min > number[1]) {
  //   temp = number[0];
  //   number[0] = number[1];
  //   number[1] = temp;
  //   console.log(number);
  //   // break;
  // } 
  // else if (number[1] > number[2]) {
  //   temp = number[1];
  //     number[1] = number[2];
  //     number[2] = temp;

  //     console.log(number);
  //     temp = null;
  // }
  // else {
  //   temp = number[2];
  //     number[2] = number[3];
  //     number[3] = temp;

  //     temp = number[3];
  //     number[3] = number[4]; // Both become number[2]
  //     number[4] = temp;
  //     console.log(number);

  //     // 🔁 Add a break to prevent infinite loop
  //   break;
  // }
// }

let btn = document.createElement("button");
console.log(btn);

function addSpan() {
  let container = document.getElementById(`container`);
  let newSpan = document.createElement(`span`);
  let text = document.createTextNode("The Story of Javascript");
  newSpan.appendChild(text);
  container.appendChild(newSpan);
}