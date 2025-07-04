import getStockData from "./fakeStockAPI.js";

const spaceMe = "-".repeat(30);
document.title = "JavaScript Advance";

const pogi = $("#gwapoq");
const h3 = $(".thisish3");

pogi.style.color = `gold`;
h3.style.color = `red`;

function $(s) {
  return document.querySelector(s);
}

/* setTimeout() */
console.log("\n", spaceMe, "4. setTimeout", spaceMe, "\n");
const myans = $("#myAnswer");
const seconds = $(`.seconds`);
let myChoice = $(".choice");
let result = $(".result");
const mySagot = "Lima";

console.log(myans);
let count = 10;

setTimeout(displayAnswer, 2000, mySagot);

setTimeout(() => {
  myChoice.style.display = "block";
}, 3500);

function displayAnswer(answer) {
  console.log("running...");
  console.log("Your answer: " + answer);
  myAnswer.innerHTML = answer;

  const stopMe = setInterval(() => {
    if (count < 1) {
      setTimeout(logAnswer, 1000, answer, 10);
      clearInterval(stopMe);
      myChoice.style.display = "none";
    }

    seconds.innerHTML = count;
    console.log(`Are u sure in your answer?: `, count);
    count--;
  }, 1500);

  // buttons
  const buttonYes = $(`#buttonYes`);
  const buttonNO = $(`#buttonNo`);
  const cancel = $(`.canceled`);
  const countStat = $(`.countStat`);
  const countMe = $(`.countMe`);

  buttonYes.onclick = () => {
    setTimeout(logAnswer, 1500, answer, 10);
    clearInterval(stopMe);
    myChoice.style.display = "none";
  };

  var count = 20;
  let cancelList = ["Cancelinging.", "Cancelinging..", "Cancelinging..."];
  let i = 0;

  buttonNO.onclick = () => {
    myAnswer.innerHTML = "";
    clearInterval(stopMe);
    myChoice.style.display = "none";

    const tamaNa = setInterval(() => {
      // countStat.innerHTML = "I: " + i; // Temp
      // countMe.innerHTML = "Count: " + count; // temp

      if (count < 1 && i >= cancelList.length - 1) {
        clearTimeout(tamaNa);
        // countStat.innerHTML = "Final I: "+i; // temp
      }

      if (i <= cancelList[i].length - 1) {
        cancel.innerHTML = cancelList[i];
        cancel.style.fontWeight = "bold";
        i += 1;

        if (count > 0) {
          count -= 1;
        }
      }

      if (i > cancelList.length - 1) {
        // exe on cancel 2
        i = 0;
      }
    }, 500); // run every 1 second
  };
}

function logAnswer(answer, points) {
  if (answer === "Lima") {
    console.log(
      `The answer is ${answer} of course! If you got that right, giver yourself ${points} points`
    );
    result.innerHTML = `The answer is ${answer} of course! If you got that right, giver yourself ${points} points✔`;
  } else {
    console.log("Incorrect answer");
    result.innerHTML = `Incorrect answer`;
  }
}

/* setInterval() */
console.log("\n", spaceMe, "5. setInterval", spaceMe, "\n");

const startShut = document.getElementById("startShutdownMe");

let secondRemaining = 3;

startShut.onclick = function () {
  const deviceName = "Macbook"; // Define deviceName here
  const logoutPrompt = confirm("Do you want to Log out?");

  if (logoutPrompt) {
    const startSC = setInterval(() => {
      if (secondRemaining < 0) {
        clearInterval(startSC);
        console.log(`Your ${deviceName} is Shutdown.`);
      } else {
        console.log(
          `Your ${deviceName} will shut down in ${secondRemaining} seconds`
        );
        secondRemaining -= 1;
      }
    }, 1000);
  }
};

//Import and Export - A deeper dive
console.log(
  "\n",
  spaceMe,
  "6. Import and Export",
  spaceMe,
  "\nGo to importing.js file"
);

// 12. Super Challeng: Stock Ticker
console.log("\n", spaceMe, "12. Super Challeng: Stock Ticker", spaceMe, "\n");

setInterval(() => {
  const stockData = getStockData();
  renderStockTicker(stockData);
}, 1000);

let prevPrice = null;

function renderStockTicker(stockData) {
  const stockDisplayName = $("#name");
  const stockDisplaySymbol = $("#Symbol");
  const stockDisplayPrice = $("#price");
  const stockDisplayTime = $("#Time");
  const stockDisplayPriceIcon = $("#PriceIcon");

  const { name, sym, price, time} = stockData;

  const priceDirectionIcon =
    price > prevPrice
      ? `GreenArrow.svg` // ✅ Green when price increased
      : price < prevPrice
      ? `RedArrow.svg` // ✅ Red when price decreased
      : `GreyArrow.svg`; // ⚪ Grey when price unchanged

  const priceIconElement = document.createElement("img");
  priceIconElement.src = `javascriptAd_Folder/svg/${priceDirectionIcon}`; // Pwede na dili i-apil ang root sa Folder sa file [rootFile: Javascript_Advance]
  priceIconElement.alt = "Price direction icon";
  priceIconElement.style.width = `30px`;

  // Clear previous icon and add new one
  stockDisplayPriceIcon.innerHTML = "";
  stockDisplayPriceIcon.appendChild(priceIconElement);

  stockDisplayName.innerText = name;
  stockDisplaySymbol.innerText = sym;
  stockDisplayPrice.innerText = `${price}`;
  stockDisplayTime.innerText = time;

  prevPrice = price;
}

/* Javascript Use: (in Making View QtechAI web status)
  import /export
  Date()
  Math()
  setInterval()
  The ternary operator
  Object destructuring
*/

console.log("\n", spaceMe, "15 .includes()", spaceMe, "\n");
/* A method for checking if an array holds a given value?  */
const emojis = ['🦒','🦁','🐼'];
console.log(emojis.includes('🐼')); // return boolean value

const shoppingList = []; // Our Container of Shopping List
console.log(`ShoppingList empty?`,shoppingList.length === 0); // Check if the shoppingList is Empty

const addItemButton = $(`#addButton`);
const itemInput = $("#itemName");
const list = $("#list");

let numThat = shoppingList.map((disNum)=> {
  return disNum * 5; // Multiply the Array Element by 5
});

addItemButton.onclick = () => {
  /* Challenge: 
  1. Add an if else to the event listener's function.
  2. Only add an item to the shoppingList array if it 
    is not already in the shoppingList array.
  3. If an item is a duplicate, clear the field and log out "no duplicates". */

  if (!shoppingList.includes(itemInput.value) && !itemInput.value.trim() == "") {
    shoppingList.push(itemInput.value);
    render();
    console.log("NumThat:", shoppingList);
  } else if (itemInput.value.trim() === "") {
    alert(`Can't add Blank items.`);
    console.warn(`Can't add Blank items.`);
    console.log(shoppingList);
  } else {
    alert(`no duplicates `);
    console.warn("no duplikit plis.");
  }
  itemInput.value = ""; // remove last item Add
}

function render(){
  let html = ''; 
  for (let item of shoppingList){
    html += `<li class="w-100 py-0 px-2 m-2 list-unstyled text-black rounded bg-light">${item}</li> `;
    console.log("Item add: ",item);
  }
  list.innerHTML = html;
}
/* Implements on Shopping List:
  1. Array of ShoppingList
  2. onclick (arrow function) Event handler
  3. Render function (that can add Items the ShoppingList)
  4. .include() method to identify if the item is already exists. */


console.log("\n", spaceMe, "16.2 The .map() Method Challenge", spaceMe, "\n");
/* Iterating Over arrays */

/* Copy & Paste this one later */

const containerPlaylist = $(`#playlistSong`);
import {playlistArr} from "./playlist.js"; // We import the playlistArr from playlist.js file
const playlistHTML = []; // PlayList Array

// id: playlistSong
console.log(playlistHTML);

/* Using basic for loop to Iterate over array of My playlist */
// for (let i=0; i<playlistArr.length; i++){ 
//   playlistHTML.push(
//     `<section class="card d-flex flex-row align-items-center border-0 border-dark rounded p-3 w-100 mb-1">
//   <div class="me-3">
//     <img src="./javascriptAd_Folder/svg/${playlistArr[i].albumArt}"
//           class="img-fluid"
//           style="width: 5rem;"
//           alt="Fix You artwork">
//   </div>
//   <div class="flex-grow-1">
//     <h4 class="mb-1">${playlistArr[i].title}</h4> 
//     <p class="mb-0 text-muted">${playlistArr[i].artist}</p>
//   </div>
//   <div>
//     <button class="btn btn-link p-0 text-dark text-decoration-none" aria-label="More">
//       <h2 style="transform: rotate(90deg);">...</h2>
//     </button>
//   </div>
// </section>`
//   );
// }


// Using map() function to Iterate over array of My playlist
const playListMap = playlistArr.map((playListNako)=> { 
  return ` <section class="card d-flex flex-row align-items-center border-0 border-dark rounded p-3 w-100 mb-1">
    <div class="me-3">
      <img src="./javascriptAd_Folder/svg/${playListNako.albumArt}"
            class="img-fluid"
            style="width: 5rem;"
            alt="Fix You artwork">
    </div>
    <div class="flex-grow-1">
      <h4 class="mb-1">${playListNako.title}</h4> 
      <p class="mb-0 text-muted">${playListNako.artist}</p>
    </div>
    <div>
      <button class="btn btn-link p-0 text-dark text-decoration-none" aria-label="More">
        <h2 style="transform: rotate(90deg);">...</h2>
      </button>
    </div>
  </section>`;
}).join(''); // <- .join() method implemented to remove commas String


/* Use forEach() method */
const bagOplayList = []; // We create new Array for forEach() method implementation.
const playListMapforEach = playlistArr.forEach((playListNako)=> { // How about we use forEach() function?
  bagOplayList.push(
    ` <section class="card d-flex flex-row align-items-center border-0 border-dark rounded p-3 w-100 mb-1">
      <div class="me-3">
        <img src="./javascriptAd_Folder/svg/${playListNako.albumArt}"
              class="img-fluid"
              style="width: 5rem;"
              alt="Fix You artwork">
      </div>
      <div class="flex-grow-1">
        <h4 class="mb-1">${playListNako.title}</h4> 
        <p class="mb-0 text-muted">${playListNako.artist}</p>
      </div>
      <div>
        <button class="btn btn-link p-0 text-dark text-decoration-none" aria-label="More">
          <h2 style="transform: rotate(90deg);">...</h2>
        </button>
      </div>
    </section>`
  );
}); // <- Were not using .join() method here because we use forEach() method





/* we use .join() function because if we add the playlistHtml Array in the innerHTML, 
it could be print like this ['', '', '' ] in our html page

What we implemented on making my Playlist web ?
1. Export / import the the object playlistArr in playlist.js file
2. Create array called: playlistHTML = []
3. In making rendering the playlistHTML to our HTML we use:
- for loop to Iterate over Array of Objects
- you can also use .map() function to Iterate over Arrays of Objects
*/
  

console.log('Array elements now: ',playlistHTML);
console.log("Array elements now ( .forEach() ): ", bagOplayList);

// containerPlaylist.innerHTML = playlistHTML;       // using basic for loop
// containerPlaylist.innerHTML = playListMap;        // using map() method
containerPlaylist.innerHTML = bagOplayList.join(''); // using forEach() method

/* In Summery: 
Use .map() method if you need to make use of the new array it returns
Use .forEach() method if you don't need to create a new array. */ 
console.log("\n", spaceMe, "17. The .join() Method Challenge", spaceMe, "\n");
/* Strings from arrays 
- Concatenates elements of array into a string*
- You choose how elements   are separated 
- Returns the new String 

Challenge:
1. Use the .join() method to remove
those annoying commas You will need to chain two methods
together to complete the challenge.

document.getElementById(`container).classList.toggle(`hidden`) */

console.log("\n", spaceMe, "18. The .filter() Method", spaceMe, "\nGo to Importing.js file");
/* Getting only the elements we want from an array */

/************************************************/console.log("\n", spaceMe, "25. Super Challenge: Contact Search", spaceMe, "\nGo to jsAdvance.js file");/************************************************/
import contactsArr from './fileExported_May_you_canUse.js';

console.log(contactsArr);
/* Challenge: 
1. Wire up this search pattern app so that inputting a full or partial name brings up the matching
  contact or contacts 
*/

const myInput = document.getElementById(`pattern-search-input`);
const mysearchButton = document.getElementById(`pattern-search-submit`);
const contactDisplay = document.getElementById(`contact-display`);
const notFoundParent = $(`.divfornoFound`); // our divfornoFound Pinaka Parent
const notFound = $(`.notFound`); // Not Found Container for our p Element

mysearchButton.addEventListener('click', function (){
  console.log(`True or False:`,isMatchFound(contactsArr, myInput.value));
  findMatchingContact(contactsArr, myInput.value);

  console.log(`User Input:`, myInput.value);
  myInput.value = ``; // remove last Input
});

// function isMatchFound(dataArray, input) {
// .some() method
//   const pattern = input.trim();
//   if (pattern === "") return false;

//   const regex = new RegExp(pattern, "i"); // case-insensitive

//   return dataArray.some(
//     (contact) =>
//       regex.test(contact.name) ||
//       regex.test(contact.email) ||
//       regex.test(contact.phone)
//   );
// }

function isMatchFound(dataArray, input) {
  // .filter() method
  const pattern = input.trim();
  if (pattern === "") return false;

  const regex = new RegExp(pattern, "i"); // case-insensitive

  const matches = dataArray.filter(
    (contact) =>
      regex.test(contact.name) ||
      regex.test(contact.email) ||
      regex.test(contact.phone)
  );
  return matches.length > 0;
}


function findMatchingContact (contactsArr, pattern){
  try {
    if (pattern.trim() !== "") {
      if (isMatchFound(contactsArr, pattern)) {
        contactDisplay.innerHTML = "";
        contactsArr
          .filter((contact) => new RegExp(pattern, "i").test(contact.name))
          .forEach((contact) => renderContact(contact));
      } else {
        alert(`Walay match sa ${pattern}`);
      }
    } else {
      // Clear any existing message first
      notFoundParent.innerHTML = "";
      const div = document.createElement("div");
      div.className = "notFound";

      const p = document.createElement("p");

      p.className = "colormyP";
      p.textContent = "No contact Found";

      div.appendChild(p);
      notFoundParent.appendChild(div);

      setTimeout(() => {
        div.remove();
      }, 1500); // cleaner Version of rendering the Not found contacts

      // let html = ``; // for reseting the html Form Input
      // const newPElement = document.createElement(`p`);
      // const newPElement = `<div class="notFound"><p class="colormyP">No contact Found</p></div>`;

      // const text = document.createTextNode(`No contact Found.`);
      // newPElement.appendChild(text); // gi write atong pharagraph Element ug text = No contact Found!.
      // newPElement.classList.add(`colormyP`);
      // newPElement.style.color = `red`;// let's make the color of text red

      // html += ` <div class="notFound">
      //   ${newPElement}
      // </div> `; // new Pharagraph add to html

      // notFoundParent.innerHTML = html; // Container dire ibutang ang ang new Elem.
      // alert("Don't leave empty, when you search.");

      // setTimeout(() => {
      //   // // box.removeChild(bubble);
      //   notFoundParent.innerHTML = ``;
      // }, 2000); // remove the element after 3 seconds.
    }
  } catch (err) {
    console.log(`Error an occur:`, err.message);
  }
}

function renderContact (conTact){
  console.log(`Contact:`,conTact);
  const { name, email, phone } = conTact; // use Object destructuring is like conTact.name = john;

  const contactCard = document.createElement(`aside`);
  contactCard.classList.add("contact-card"); // new Container

  const nameElem = document.createElement(`p`); // for nameElement
  const emailElem = document.createElement(`p`); // for emailElement
  const phoneElem = document.createElement(`p`); // for phoneElement

  // gi write lang niya conTact Object value sa atong HTML.
  nameElem.innerText = name;
  emailElem.innerText = email;
  phoneElem.innerText = phone;

  // gibutang sa aside Element atong mga nameElem, emailElem andphoneElem.
  contactCard.appendChild(nameElem);
  contactCard.appendChild(emailElem);
  contactCard.appendChild(phoneElem);

  // final is ibutang ang container sa section Nato which is ang contactDisplay
  contactDisplay.appendChild(contactCard);
}

// function renderContact(conTact) {
//   const { name, email, phone } = conTact;
//   const contactDisplay = document.getElementById("contact-display");

  

//   const html = `
//     <div class="p-5 my-3 rounded-4" style="width: 59%; background-color: rgb(116, 138, 138);">
//       <h3 class="myh3">${name}</h3>
//       <h3 class="myh3">${email}</h3>
//       <h3 class="myh3">${phone}</h3>
//     </div>
//   `;
//   contactDisplay.innerHTML += html; // append instead of overwrite
// }

/* Javascript to Use
- import / export 
- regex
- filter() 
- forEach()
- Object destructuring 
*/

/************************************************/ console.log("\n",spaceMe,"8. The Rest Parameter Challenge",spaceMe,"\n"); /************************************************/
/* The Rest Parameter Challenge 
1. Add parameters.
2. Update the HTML template where you see **NAME** 
3. Return  HTML template for each label 
*/
const text = `Thank you for all your hard work throughout the year! 🎉🙏🏽`;
const sender = `Gab`;
function getLabelsHtml(textMessage, gaSend, ...staffNames){
  return staffNames.map( staffName => `
    <div class="col-md-6">
      <div class="p-4 bg-primary text-white rounded-3 fs-3">
        <p><strong>Dear ${staffName.name},</strong></p>
        <p>${textMessage}</p>
        <p>Best wishes,<br>${gaSend}</p>
      </div>
    </div>
    `
  ).join(``);
}

document.getElementById(`contenerSurprise`).innerHTML = getLabelsHtml(
  text, 
  sender, 
  {name: `Sally`}, 
  {name: `Mike`}, 
  {name: `Rob`}, 
  {name: `Harriet`}
); 
/* Javascript to Use - The Rest Param eter Challenge
  - String message
  - Sender name
  - .map() method [create new Array]
  - rendering
  - .join() method
  - dom-access #container (parent) + getLabelsHtml() -> Child
*/

/************************************************/ console.log("\n",spaceMe,"10. Super Challenge: Real State",spaceMe,"\n"); /************************************************/
/*
SUPER CHALLENGE 💪

Render out a card for each of the properties in the propertyForSaleArr array (in the 'properties' folder). 
Each card should have an image, a property location, a price, a comment and the TOTAL property size in square metres 
(each object has an array with the size in square metres of the individual rooms).

If no array of properties is passed to getPropertyHtml, the placeholder property stored in placeholderPropertyObj (in the 'properties' folder) should be rendered instead.

This is the JS I want you to use to complete this challenge 👇
- import/export / 
- .map() / 
- .join() /
- Object destructuring /
- .reduce() / 
- Default parameters /

The HTML and CSS have been done for you.
This is the HTML template 👇. Replace everything in UPPERCASE with property data.
*/


import propertyForSaleArr  from '../Function Expressions & Parameters/properties/propertyforSaleArr.js';
import placeholderPropertyObj from "../Function Expressions & Parameters/properties/placeholdePropertyObject.js";

console.log(`placeholderPropertyObj: `, placeholderPropertyObj);
// Object.assign(.style, {
//   // backgroundSize: `contain`,
// });


function getPropertyHtml(propertyArr = [placeholderPropertyObj]) { // the placeholderPropertyObj is set to Default Paramter and push inside an Array of Object.
// function getPropertyHtml(placeholderPropertyObj, propertyForSaleArr) {
  let myPropertyLoc, myPriceGBP, myRoomsM2, myComment, myImage;
  
  if (!propertyForSaleArr) {
    const { propertyLocation, priceGBP, roomsM2, comment, image } =placeholderPropertyObj; // Object Destructuring

    console.log(`myPropertyLoc:`, propertyLocation); // Expected Output in Line 606

    // alert(`This is ${propertyForSaleArr} \nDefault Parameter (used)`);
    console.log(`propertyLocation:`, roomsM2);

    const placeHObj = roomsM2.reduce((total, currentElement) => {
      console.log(
        `Total: ${total}  ++++++++++  CurrentElemen: ${currentElement}`
      );
      return total + currentElement;
    });
    console.log(`placeHObj: `, placeHObj); // placeholderPropertyObj Expected Ouput in Total roomsM2: 50

    myPropertyLoc = propertyLocation;
    myPriceGBP = priceGBP;
    myRoomsM2 = placeHObj;
    myComment = comment;
    myImage = image;
  } else {
    return propertyArr.map((theProperty) => { // using Default Parameter -> propertyArr = [placeholderPropertyObj]
    // return propertyForSaleArr.map((theProperty) => {

        const totProp = theProperty.roomsM2.reduce(function (
          total ,
          currentElement
        ) {
          console.log(`Total: ${total} CurrentElement: ${currentElement}`);
          return total + currentElement;
        });

        return `<section class="p-0 realStateCont">
        <img class="realStateImage img-fluid" src="/Javascript_Advance/Function Expressions & Parameters/Images/${theProperty.image}" alt="imagRender">
        <div class="card-right">
            <h1><b>${theProperty.propertyLocation}</b></h1>
            <h3><b>£${theProperty.priceGBP}</b></h3>
            <p>${theProperty.comment}</p>
            <h2><b>${totProp} m²</b></h2>
        </div>
      </section> 
      `;
    }).join("");
  }

    return `<section class="p-0 realStateCont">
    <img class="realStateImage img-fluid" src="/Javascript_Advance/Function Expressions & Parameters/Images/${myImage}" alt="imagRender">
    <div class="card-right">
        <h1><b>${myPropertyLoc}</b></h1>
        <h3><b>£${myPriceGBP}</b></h3>
        <p>${myComment}</p>
        <h2><b>${myRoomsM2} m²</b></h2>
    </div>
  </section> 
  `;
}

document.getElementById("containerRealStaet").innerHTML = getPropertyHtml(
  // placeholderPropertyObj
  // ,
  // propertyForSaleArr // Try to Empty parameter
);