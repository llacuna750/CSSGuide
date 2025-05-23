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
console.log(number);
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

function removeBubble () {
  let box = document.getElementById(`box`);
  let bubble = document.getElementById(`bubble`);
  box.removeChild(bubble);
}

function inMouse(x) {
  x.style.backgroundColor = "green";
  console.log(`In`);
}

function outMouse(x) {
  x.style.backgroundColor = `red`;
  console.log(`Out`);
}

function showData(x) {
  x.style.backgroundColor = `blue`;
  console.log(`showData`);
}

let coin = document.getElementById("coin");

coin.onmouseover = function() {
  out() // Call your custom function
  coin.style.backgroundColor = "blue";
} 

function out () {
  console.log(`out of the coin`);
}

let pieChart = document.getElementById("pieChart1");

pieChart.onmouseover = () => { mouseisOver()};
pieChart.onmouseleave = () => { mouseisOut()};

function mouseisOver() {
  console.log(`Mouse is over the pie chart`);
}
function mouseisOut() {
  console.log(`Mouse is out of the pie chart`);
}

// Events 2
const btnaddEvent = document.getElementById("statrtaddEvent");

btnaddEvent.addEventListener("click", () => {
  console.log(`CSS Padding G clicked`);
  btnaddEvent.style.backgroundColor = `green`;
  btnaddEvent.style.color = `white`;
  btnaddEvent.style.boxShadow = 
  `0px 3px 3px rgb(0, 0, 0),
  -4px 0px 3px rgb(37, 167, 33),
  0 -3px 3px rgb(192, 12, 153),
  3px 0px 3px rgb(117, 80, 204)`;
  btnaddEvent.style.borderRadius = `10px`;  
  btnaddEvent.style.width = `200px`;
});

const imgaddEvent = document.getElementById(`imgaddEvent`);
imgaddEvent.addEventListener(`pointerenter`, () => {
  imgaddEvent.style.width = `200px`;
  imgaddEvent.style.height = `200px`;
  imgaddEvent.style.borderRadius = `50%`;
  imgaddEvent.style.boxShadow = 
  `0px 3px 3px rgb(0, 0, 0),
  -4px 0px 3px rgb(37, 167, 33),
  0 -3px 3px rgb(192, 12, 153),
  3px 0px 3px rgb(117, 80, 204)`;
});

imgaddEvent.onpointerleave = () => {
  imgaddEvent.style.width = `100px`;
  imgaddEvent.style.height = `100px`;
  imgaddEvent.style.borderRadius = `0%`;
};

const goodPCaption = document.getElementById("goodProgrammer");

goodPCaption.addEventListener("pointerover", showCaption);

function showCaption() {
  goodPCaption.style.display = `block`;
  goodPCaption.style.color = `blue`;
  console.log(`Show Caption`);
  goodPCaption.removeEventListener("pointerover", showCaption);
  goodPCaption.addEventListener("pointerout", hideCaption);
}

function hideCaption() {
  goodPCaption.style.display = `none`;
  console.log(`Hide Caption`);
  goodPCaption.removeEventListener("pointerout", hideCaption);
  goodPCaption.addEventListener("pointerover", showCaption);
};

// Events 3
let box = document.getElementById("Eventbox");
let wheel = document.getElementById("eventbox2");
box.addEventListener("pointerover", bigBox);
box.addEventListener("pointerout", smallBox);

box.addEventListener("pointerdown", handlePointerDown);

function handlePointerDown() {
  box.style.backgroundColor = `yellow`;
}

function bigBox() {
  Object.assign(box.style, {
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
  });
  box.style.width = `200px`;
  box.style.height = `200px`;
  box.style.backgroundColor = `red`;
  console.log(`Big Box`);
}

function smallBox() {
  Object.assign(box.style, {
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
  });
  box.style.width = `100px`;
  box.style.height = `100px`;
  box.style.backgroundColor = `blue`;
  console.log(`Small Box`);
}

wheel.addEventListener("pointerdown", spin);
wheel.addEventListener("pointerup", stopSpin);

function spin() {
  Object.assign(wheel.style, {
    padding: `10px`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    animation: `spin 5s linear infinite, spin2 5s linear infinite, changeShape 10s linear infinite`,
  });
}

function stopSpin() {
  // Stop animations by clearing them
  wheel.style.animation = "none";

  // Trigger reflow to reset animation (forces browser to notice the change)
  void wheel.offsetWidth;

  // Apply non-infinite version (1 run)
  Object.assign(wheel.style, {
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    animation: `spin 4s linear, spin2 4.5s linear, changeShape 3s linear`,
  });
}

// Events and Objects
let length = 5;
let width = 3;

function calculateArea(length, width) {
  alert(length * width);
}
// calculateArea(length, width);

// Add a Image testing...
let containerNewElement = document.getElementById("containerNewElement");
containerNewElement.addEventListener("click", addImg);
function addImg() {
  let newElement = document.createElement("img");
  newElement.src = "../images/CSS favicon.jpg";
  containerNewElement.appendChild(newElement);
}

// Replace The Button testing...
let containerReplaceButton = document.getElementById("replaceMeContainer");
containerReplaceButton.addEventListener("click", replaceButton);
function replaceButton() {
  let newButton = document.createElement("button");
  let text = document.createTextNode("I am the new Button");
  let oldButton = document.getElementById("OldButton");

  newButton.appendChild(text);
  // newButton.textContent = "I am the new Button!";
  newButton.style.backgroundColor = "green";
  containerReplaceButton.replaceChild(newButton, oldButton);
}
// Timers
// setinterval(rotate, 500);

let seconds = 0;
const timerDisplay = document.getElementById("timer");

let timer = setInterval(() => {
  seconds++;
  timerDisplay.textContent = seconds;

  if (seconds >= 10) {
    // clearInterval uses to stop the timer
    clearInterval(timer);
    timerDisplay.textContent += " (done)";
  }
}, 1000);

let clock = setInterval(addOne, 1000);

function addOne() {
  let count = document.getElementById("count");
  let number = Number(count.textContent);
  if (number >= 5) {
    clearInterval(clock);
    count.textContent = "Finished";
    // count.textContent += "Finished";
    return;
  }else {
    number = number + 1;
    count.textContent = number;
  }
}
// 1 second = 1000 milliseconds  
// 1000 ms ÷ 10 = 100 ms

// setInterval(() => {
//   console.log("Runs 10 times per second");
// }, 100); // 100 ms
