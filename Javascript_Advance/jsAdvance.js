document.title = "JavaScript Advance";

const pogi = $("#gwapoq");  
const h3 = $(".thisish3");

pogi.style.color = `gold`;
h3.style.color = `red`;

function $(s) {
  return document.querySelector(s);
}

/* setTimeout */
const myans = $("#myAnswer");
const seconds = $(`.seconds`);
let myChoice = $(".choice");
let result = $(".result");
const mySagot = "Limaa";
// buttons
const buttonYes = $(`#buttonYes`);
const buttonNO = $(`#buttonNo`);
const cancel = $(`.canceled`);

console.log(myans);
let count = 10;

setTimeout(displayAnswer, 2000, mySagot);

setTimeout(() => {
    myChoice.style.display = 'block';
}, 3500);

function displayAnswer (answer){      
    console.log("running...");
    console.log('Your answer: '+ answer);
    myAnswer.innerHTML = answer;
    
    const stopMe = setInterval(() => {
        if (count < 1) {
          setTimeout(logAnswer, 1000, answer, 10);
          clearInterval(stopMe);
          myChoice.style.display = "none";
        }

        seconds.innerHTML = count;
        console.log(`gwapo ko`, count);
        count--;
    }, 1500);

    buttonYes.onclick = () => {
        setTimeout(logAnswer, 1500, answer, 10);
        clearInterval(stopMe);
        myChoice.style.display = "none";
    };
    buttonNO.onclick = () => {
        cancel.innerHTML =  "Canceling...";
        myAnswer.innerHTML = "";
        clearInterval(stopMe);
        myChoice.style.display = "none";
    };
}

function logAnswer(answer, points) {
    if (answer === "Lima") {
        console.log(`The answer is ${answer} of course! If you got that right, giver yourself ${points} points`);
        result.innerHTML = `The answer is ${answer} of course! If you got that right, giver yourself ${points} points✔`;
    }
    else {
        console.log("Incorrect answer");
        result.innerHTML = `Incorrect answer`;
    }
}

/* setInterval */
function startCountdown(){
    console.log(`Your device will shut down in ${secondRemaining} seconds`);
}