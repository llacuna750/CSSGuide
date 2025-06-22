document.title = `JS Intermediate`;

function myButton(message) {
  alert(message);
}
function action() {
  console.log(`Action function called`);
}
let imgDom1 = document.getElementById("picture1");
imgDom1.style.width = "300px";
let link = imgDom1.src;
imgDom1.src = "../images/CSS favicon.jpg";

console.log(imgDom1.src);
console.log(imgDom1.style.width); // Should log "100px"
console.log(`src => ${link}`);

function changeImage() {
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
  } else if (wayl == -1) {
    console.log(`end!`);
    wayl = -2;
  }
}

function displayName() {
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

  if (pass === correctPass) {
    display.textContent = `Access Granted`;
    Object.assign(display.style, {
      border: `1px solid 5px`,
      backgroundColor: `rgb(42, 205, 42)`,
      color: `rgb(31, 33, 33)`,
      marginTop: `15px`,
    });
  } else {
    display.textContent = `Not Permitted`;
    Object.assign(display.style, {
      border: `0.5px solid`,
      backgroundColor: `rgb(173, 27, 64)`,
      color: `rgb(67, 158, 158)`,
      marginTop: `15px`,
    });
  }
}


// More on the DOM
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

// Bubble sort na wa nahuman
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

// Creating Elements
function addSpan() {
  let container = document.getElementById(`container`);
  let newSpan = document.createElement(`span`);
  let text = document.createTextNode("The Story of Javascript");
  newSpan.appendChild(text);
  container.appendChild(newSpan);
}

// Removing and Replacing Elements
function removeBubble() {
  let box = document.getElementById(`box`);
  let bubble = document.getElementById(`bubble`);
  box.removeChild(bubble);
}

// Events 1
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

coin.onmouseover = function () {
  out(); // Call your custom function
  coin.style.backgroundColor = "blue";
};

function out() {
  console.log(`out of the coin`);
}

// Events 4
let pieChart = document.getElementById("pieChart1");

pieChart.onmouseover = () => {
  mouseisOver();
};
pieChart.onmouseleave = () => {
  mouseisOut();
};

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
  btnaddEvent.style.boxShadow = `0px 3px 3px rgb(0, 0, 0),
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
  imgaddEvent.style.boxShadow = `0px 3px 3px rgb(0, 0, 0),
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
}

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

/* Timers
  to calculate the Ms to second 
  1000ms = 1second
  if you want 20times per second just do this formula
  1000ms / 20 = 50ms 
  result = 50 millisecond 
  the millisecond of 20times per second is 50 ms

 setinterval(rotate, 500);
  setInterval Formula: 
  1 Second === 1000 Millisecond

  execute per Second or you can decrease the second to get faster:
  the formula is: 1000milli * (1 - 0.50 = 0.50) = 500
  so, the 0.50 second is 500 Millisecond
 */
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
  } else {
    number = number + 1;
    count.textContent = number;
  }
}
// 1 second = 1000 milliseconds
// 1000 ms ÷ 10 = 100 ms

// setInterval(() => {
//   console.log("Runs 10 times per second");
// }, 100); // 100 ms

let msConvertimg = document.getElementById("msConvertion");
msConvertimg.addEventListener("pointerenter", padakOn);
msConvertimg.addEventListener("pointerleave", padakOff);

function padakOn() {
  msConvertimg.style.width = `400px`;
}
function padakOff() {
  msConvertimg.style.width = `800px`;
}
// Arrays
window.onload = function () {
  const ArrayImg = document.getElementById("Arrayimg");
  const closeX = document.getElementById("closeX");
  const TheFixBackground = document.getElementById("pussySticky");
  ArrayImg.onclick = () => {
    // let ArrayDiv = document.getElementById("ArrayDiv");
    // let createCloseicon = document.createElement("img");
    // createCloseicon.src = "../images/close-X icon.png";
    // ArrayDiv.appendChild(createCloseicon);

    // Add styles to the background and enlarged image (Optional)
    TheFixBackground.classList.add("popup-style");
    TheFixBackground.classList.remove("hidden");
    ArrayImg.classList.add("img-popup");
    closeX.style.display = "block";

    closeX.style.position = "absolute";
    closeX.style.top = "20px";
    closeX.style.right = "20px";
    ArrayImg.style.width = "38%";
    ArrayImg.style.height = "auto";

    // In JavaScript, when modifying styles via .style or Object.assign,
    // Make sure you must use camelCase property names
    Object.assign(TheFixBackground.style, {
      // display: `inline-block`,
      // position: `fixed`,
      // top: `0`,
      // left: `0`,
      // width: `100%`,
      // height: `100%`,
      // backgroundColor: `rgba(0, 0, 0, 0.9)`,
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`,
      // zindex: `9999`,
    });
    // Object.assign(ArrayImg.style, {
    //   width: `500px`,
    //   maxWidth: `90%`,
    //   maxHeight: `90%`,
    //   boxShadow: `0 0 20px white`,
    //   // borderRadius: `10px`,
    // });
  };
  closeX.onclick = () => {
    // ArrayImg.style.display = "none";
    closeX.style.display = "none";
    ArrayImg.style.width = "350px";

    // If you want to remove the background and enlarged image styles(Optional)
    TheFixBackground.classList.remove("popup-style");
    ArrayImg.classList.remove("img-popup");

    // Object.assign(TheFixBackground.style, {
    //   display: "none", // Hide the background
    // });
    // Object.assign(ArrayImg.style, {
    //   maxWidth: "",
    //   maxHeight: "",
    //   boxShadow: "",
    //   borderRadius: "",
    // });

    // ArrayImg.style.width = "100px"; // or reset as needed
  };
};

// Indexing and Traversing
let colors = ["red", "green", "blue"];

console.log(colors); // ['red', 'green', 'blue']
console.log(colors[0]); // 'red'

// Convert all to uppercase and store back
colors = colors.map((color) => color.toLowerCase());

console.log(colors); // ['RED', 'GREEN', 'BLUE']

let kulay = colors.map(
  (kulay) => kulay.charAt(0).toUpperCase() + kulay.slice(1)
);

console.log(kulay); // ['Red', 'Green', 'Blue']

const shoppingCart = ["Eggs", "Milk", "Bread"];
const animals = ["cat", "dog"];
const person = ["Sina", 32, true];
let sc = document.getElementById("mainText");
sc.textContent = shoppingCart.join(", ");

const weekdays = ["Mon", "Tues", "Wed", "Thurs", "Fri"];
let wk = document.getElementById("weekdaysText");
wk.textContent = weekdays.join(", ");

for (let i = 0; i < weekdays.length; i++) {
  console.log(`Day ${i + 1}: ${weekdays[i]}`);
}
// console.log(weekdays.length);

for (let theDay of weekdays) {
  console.log(`Day: ${theDay}`);
}
const mgaColors = ["red", "green", "blue", "yellow", "purple"];
let iamPharagraph = document.getElementById("colorMe");
iamPharagraph.style.color = mgaColors[1];

const SortMenumbers = [5, 3, 8, 1, 2];
console.log(SortMenumbers.sort((a, b) => a - b));

let slider = document.getElementById("slider"); // The range input
let numberSlider = document.getElementById("number"); // The display area
let colorSelected = document.getElementById("colorSelected");
let selection = slider.value;
let MyColors = ["red", "green", "blue", "indigo", "violet", "orange", "yellow"];

slider.onpointerup = function () {
  selection = slider.value; // Get current value from the slider

  numberSlider.textContent = selection; // Show the number
  colorSelected.textContent = MyColors[selection]; // Show the color name

  document.body.style.backgroundColor = MyColors[selection]; // Set background color
};

function resetButton() {
  slider.value = null;
  numberSlider.textContent = `Unselected:`;
  colorSelected.textContent = `Please Slide`;
  console.log(`Reset Button Clicked`);
  document.body.style.backgroundColor = "#F2F2F2"; // Reset background color
}

// You can use for loop, forEach, or map to achieve this.
let names = ["John", "Jane", "Doe", "Alice", "Bob"];
console.log(names);
//  change all names in the list to "sololearn"
// Array.from(names).forEach((name, index) => {
//   names[index] = "sololearn";
//   console.log(`Name at index ${index} changed to: ${names[index]}`);
// });

let namesList = document.getElementById("Classlist");
for (let i = 0; i < names.length; i++) {
  // namesList.textContent = names.join(", ");
  let createNewLi = document.createElement("li");
  let theNames = document.createTextNode(names[i]);
  createNewLi.appendChild(theNames);
  namesList.appendChild(createNewLi);
}

// Arrays and the DOM
const AccessChileofThisParent = document.getElementById("AccessME");
let childElements = AccessChileofThisParent.getElementsByTagName("div");

for (let i = 0; i < childElements.length; i++) {
  if (childElements[i].textContent === "Accessing the Div 1 only") {
    console.log(`${i + 1}. The first element: ${childElements[i].textContent}`);
    childElements[i].style.backgroundColor = "yellow";
  } else {
    console.log(childElements[i]);
    childElements[i].style.color = "Blue";
  }
}
let lastPharagraph = childElements[childElements.length - 1]; // Access the last child element
// console.log(childElements[2]);
console.log(`the last Pharagraph: ${lastPharagraph.textContent}`);
lastPharagraph.style.fontWeight = "bold";

// Count over all DIV elements
const countDivs = document.getElementsByTagName("div");
console.log(`Total DIV elements: ${countDivs.length} divs`);

function colorChange() {
  let changeEandO = document.getElementById("ClickThistoChange");
  let accesspH1 = changeEandO.getElementsByTagName("h1");
  console.log(`Total H1 elements: ${accesspH1.length} h1s`);
  for (let i = 0; i < accesspH1.length; i = i + 1) {
    if (i % 2 === 0) {
      accesspH1[i].style.color = "red"; // Change color of even indexed paragraphs
    } else {
      accesspH1[i].style.color = "green"; // Change color of odd indexed paragraphs
    }
  }
}
let moveButton = document.getElementById("Move");
let returnBack = document.getElementById("getBack");

let fromHere = document.getElementById("fromHere1"); // parent
let items = fromHere.getElementsByClassName("items"); // child

let toHere = document.getElementById("moveHere");

let toThisClass = toHere.getElementsByClassName(`toitems`); // child

console.log(items); // Log the items to see what we have
console.log(items[0].innerText); // Log the items to see what we have

moveButton.addEventListener("click", () => {
  // console.log(items[0].innerText);

  for (let i = 0; i < items.length; i++) {
    console.log(`Item ${i + 1}: ${items[i].textContent}`);
    // Move each item to the new location
    // toHere.appendChild(items[i]);
    toThisClass[0].appendChild(items[i]);
  }
  console.log(toThisClass[0]);
});

returnBack.addEventListener("click", function () {
  let movedItems = toThisClass[0].getElementsByClassName("items"); // Get items inside toitems

  // Convert HTMLCollection to array to avoid live collection issues
  let itemsArray = Array.from(movedItems);

  itemsArray.forEach((item) => {
    fromHere.appendChild(item);
  });
});

console.log(`Items moved back to the original location.`);

// Animating Elements
let myball = document.getElementById("myball");
let cover = document.getElementById("theCover");
let slamDunk = document.getElementById("SlamdunkSong");
let buttonPlay = document.getElementById("buttonPlay");
let buttonUp = document.getElementById(`buttonup`);
let buttonLeft = document.getElementById(`buttonleft`);
let buttonDown = document.getElementById(`buttondown`);
let buttonRight = document.getElementById(`buttonright`);

myball.style.position = `relative`;
// myball.style.left = pussytionUpandDown + "px";
// myball.style.backgroundColor = "rgb(255, 115, 0)";

// console.dir(slamDunk);

buttonPlay.addEventListener("click", playSlamDunk);

// function play() {
//   slamDunk.attributes.autoplay = true; // Set autoplay attribute
//   return;
// }

function playSlamDunk() {
  console.log(`You play Slamdunk!`);

  cover.style.display = "none"; // Hide the cover

  myball.style.display = "block"; // Show the ball

  slamDunk.play(); // the position of the ball

  let pussytionUpandDown = 0; // Starting or Initial position

  // Button UP
  buttonUp.onmousedown = () => {
    let intervalId = setInterval(() => {
      if (pussytionUpandDown === 50) {
        add10 = pussytionUpandDown += 1; // Move
        myball.style.bottom = add10 + "px"; // Move up
        // console.log(`Moving Up by:  ${pussytionUpandDown}px`);
      } 
      else if (pussytionUpandDown <= 52 && pussytionUpandDown > 50) {
        add10 = pussytionUpandDown += 0.5; // Move
        myball.style.bottom = add10 + "px"; // Move up
        // console.log(`Moving Up: ${pussytionUpandDown}px`);
        // console.log(`Can't move up anymore!`);
      } 
      else if (pussytionUpandDown >= 52.5) {
        add10 = pussytionUpandDown += 0;
        // console.log(`Try other buttons!`);
      } 
      else {
        let add10 = (pussytionUpandDown += 10); // Move
        myball.style.bottom = add10 + "px"; // Move up
        // console.log(`Moving Up: ${pussytionUpandDown}px`);

        if (pussytionUpandDown <= 50 && pussytionUpandDown > 40) {
          // console.log(`Reached the top limit!`);
        }
      }
    }, 100); // Adjust speed as needed

    buttonUp.onmouseup = () => {
      clearInterval(intervalId); // Stop the interval when mouse is released
      // console.log(`Mouse released, stopped moving up.`);
    };
  };

  // Button Down
  let pussytionDownOnly = 0; // Starting or Initial position
  buttonDown.onmousedown = () => {
    let moveDown10 = pussytionUpandDown; // Move
    let intervalId = setInterval(() => {
      if (pussytionUpandDown <= 52.5 && pussytionUpandDown > -50) {
        moveDown10 = pussytionUpandDown -= 10; // Move

        myball.style.bottom = moveDown10 + "px"; // Move down
        // console.log(`Moving Down: ${moveDown10}px`);
      } else if (pussytionUpandDown <= 50 && pussytionUpandDown >= -56) {
        if (pussytionUpandDown === -56) {
          // console.log(`Reached the top limit!`);
          moveDown10 = pussytionUpandDown = pussytionUpandDown - 0; // Move
        } else {
          moveDown10 = pussytionUpandDown = pussytionUpandDown - 1; // Move
          myball.style.bottom = moveDown10 + "px"; // Move down
          // console.log(`Move Down by: ${moveDown10}px`);
        }
      }
    }, 100);

    buttonDown.onmouseup = () => {
      clearInterval(intervalId); // Stop the interval when mouse is released
    };
    // let moveDown10 = pussytionDownOnly -= 10; // Move
    // pussytionUpandDown = (pussytionUpandDown - 10); // Move
  };

  let pussytionLeftandRight = 0; // Starting or Initial position
  // Button LEFT
  buttonLeft.onmousedown = () => {
    let intervalId = setInterval(() => {
      if (pussytionLeftandRight === 130) {
        moveLeft10 = pussytionLeftandRight += 0; // Move
        // console.log(`Can't move left anymore!`);
      } else {
        moveLeft10 = pussytionLeftandRight += 10; // Move
        myball.style.right = moveLeft10 + "px"; // Move left
        // console.log(`Moving Left: ${pussytionLeftandRight}px`);
      }
    }, 100); // Adjust speed as needed

    buttonLeft.onmouseup = function () {
      clearInterval(intervalId); // Stop the interval when mouse is released
    };
  };
  // Right Button
  buttonRight.onmousedown = () => {
    let intervalId = setInterval(() => {
      if (pussytionLeftandRight === -130) {
        moveLeft10 = pussytionLeftandRight += 0; // Move
        // console.log(`Can't move left anymore!`);
      } else {
        moveLeft10 = pussytionLeftandRight -= 10; // Move
        myball.style.right = moveLeft10 + "px"; // Move left
        // console.log(`Moving Left: ${pussytionLeftandRight}px`);
      }
    }, 100);

    buttonRight.onmouseup = () => {
      clearInterval(intervalId);
    };
  };
}

let akongball = document.getElementById(`akongbola`);
let letsMove = document.getElementById(`Moveakongball`);

let x = 3;
let o = 0.5;
let xSpeed = 1;
let oSpeed = 0.01;

letsMove.addEventListener(`click`, () => {
  // Call a move function every 10 millisecond
  setInterval(move, 10);
  akongball.classList.add("akongballRandom");
  
  function move() {
    // Only 1 condition need to be true to executed
    if (x > 250 || x < 0) {
      xSpeed = xSpeed * -1;
    }

    // Only 1 condition need to be true to executed
    if (o > 1 || o < 0) {
      oSpeed = oSpeed * -1;
    }

    x = x + xSpeed;
    o = o + oSpeed;
    // akongball.style.position = `absolute`;
    akongball.style.left = x + "px";
    akongball.style.backgroundColor = `green`;
    akongball.style.opacity = o;
    // console.log(x);
    // console.log(o);
  }
});

// function move() {
//   if (x < 250) {
//     xSpeed = xSpeed * -1; 
//   }
//   if (o < 100) {
//     ySpeed = oSpeed * -1;
//   }
//   x = x + xSpeed;
//   o = o + oSpeed;
//   ball.style.left = x + "px";
//   ball.style.opacity = o;
// }

//  Animations with Events
let card = document.getElementById(`card`);
card.addEventListener(`click`, moveMe);

function moveMe (event) {
  console.log(`You click moveME!`);
  let position = Number(event.target.style.left);
  let target = position + 200;
  let timer = setInterval(animate, 10);

  function animate () {
    if (position < target) {
      position = position +1;
      event.target.style.left = position;
    }else {
      clearInterval(timer);
    }
    event.target.removeEventListener(`click`, moveMe);
  }
}

function moveThis(event) {
  let position = Number(event.target.style.left);
  position = position + 1;
  event.target.style.left = position;
  console.log("Current left position:", position);
}


const shapes =["circle", "square", "triangle"];
const animalsNako = ["Lion", "Elephant", "Giraffe", "Zebra"]; 