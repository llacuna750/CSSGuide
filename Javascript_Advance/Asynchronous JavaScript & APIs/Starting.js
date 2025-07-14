const spaceMe = "-".repeat(30);
/************************************************/ console.log("\n",spaceMe,"1. What is an API",spaceMe,"\nRead the comment"); /************************************************/
/* 
1) What is an API?    
Application Programming Interface

2) How would you describe an API in your own words?
A tool that allows your code to talk with (use the goodness from) 
someone else's code. (Web APIs, 3rd-party package, etc.)

3) Can you think of an example of an API you've used? 
* BoredAPI - https://bored-api.appbrewery.com/ (getting data from a server)
* Local Storage (localStorage)
*/

/************************************************/ console.log("\n",spaceMe,"2. Clients & Servers", spaceMe,"\nRead the comment"
); /************************************************/
/* 
---------------------------------------------------------------- What is a Client? ----------------------------------------------------------------
○ Any device that connects to the internet to get data from somewhere (makes a "request").

- Any device that connects to the internet to get data from somewhere (makes a "request")
○ Laptop, phone, tablet, any "smart" device (watch, doorbell, robot vacuum, even a server!)

------------------------------------- What is a Server? ----------------------------------------------------------------
○ Basically just a computer. Accepts requests from clients asking for something, then responds to the client with that thing 
(e.g., an HTML page, an image or file, or just plain data).

------------------------------------------------------------------------------------------------------------------------
1) What are some examples of "clients" you've used today?
Laptop

Smart Phone

Robot vacuum

Smart plugs

2) How would you explain what a "server" is to a 5-year-old?
A computer that sends my own computer things when I ask it to.

3) In what way do clients and servers interact with each other? 
Client sends a request to a server, and the server sends back a response.
*/ 
/************************************************/ console.log("\n",spaceMe,"3. Requests & Responses", spaceMe, "\nRead the comment"); /************************************************/
/* What is Requests - Responses Cycle
What is a Request?
-> When a device asks for a "resource" (data, image, HTML page, authentication token, etc.).
-> Requires a connection to the internet.

What is a Response?
-> The reply to the request
-> Could contain the resource (HTML, JSON data, etc.) asked for by the client.
-> Could contain a response saying the client isn't authorized to recieve the resource


1) What are 3 things your computer (client) might request from a server?
JSON array of suggested videos

Video stream

HTML page

2) What is the main job of a server?
Receive a request from a client and return a response.

3) Self study: What would the 3-digit server response code be if the server experiences an internal server error?
500 Internal Server Error
*/

/************************************************/ console.log("\n",spaceMe,"4. JSON Review", spaceMe, "\nRead the comment"); /************************************************/
/* 
- Open JSON lint Validator
- Go to Developer Options  
- then Check Fetch/XHR:
  1. Headers tab
  2. Preview tab 
*/

/************************************************/ console.log("\n",spaceMe,"5. URLS and Endpoints", spaceMe, ""); /************************************************/
console.log(`The makeup of a URL\n📁 The Base URL\n📁 The endpoint \n\nif Scrimba had an API
    📁  The base URL: 
        📁 https://scrimba.com/api
    📁 The endpoints:
        📁 /courses
        📁 /users
        📁 /templates
        📁 /resources/challenges
        📁 /resources/tests?test=typescript


/* Base URL */  
https://apis.scrimba.com/dog.ceo/api  

/* Endpoints */  
/breeds/list/all  
/breeds/image/random  

Challenge:  
1. Take the base url and the endpoint that gets you a list of all dogs and paste the full URL into your regular browser (not the Scrimba mini-browser) and see what you get.  
`); 

/************************************************/ console.log("\n",spaceMe,"6. fetch().then()", spaceMe, "\nGo to jsAdvance.js file"); /************************************************/
/************************************************/ console.log("\n",spaceMe,"7. fetch().then() Challenge", spaceMe, "\n"); /************************************************/  
/*  
Challenge:  
1. Make a fetch request to the "Bored" API:  
   Base URL: https://apis.scrimba.com/bored/api  
   Endpoint: /activity  

2. Log an object containing an activity suggestion to the console:  
   @ hint.md for help!  
*/
fetch(`https://apis.scrimba.com/bored/api/activity`)
.then(response => response.json())
.then(data => console.log(data.activity));
/************************************************/ console.log("\n",spaceMe,"8. Fetching with async/await", spaceMe, "\nGo to jsAdvance.js file"); /************************************************/  
// const response = await fetch(`https://apis.scrimba.com/bored/api/activity`);
// const data = await response.json();
// console.log(`\nData:`,data.activity);

const response = await fetch(`https://api.thecatapi.com/v1/images/search`);
const data = await response.json();

async function getDogImage() {
  data.forEach((dataCat) => {
    console.log(`\nData Image:`, dataCat);

    const catElementimg = document.createElement(`img`);
    catElementimg.src = dataCat.url;
    catElementimg.alt = `Cat element img api`;
    document.getElementById(`catImageContainer2`).appendChild(catElementimg);
  });
}

getDogImage();