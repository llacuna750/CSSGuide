document.title = "JavaScript Advance";

const pogi = $("#gwapoq");  
const h3 = $(".thisish3");

pogi.style.color = `gold`;
h3.style.color = `red`;

function $(s) {
  return document.querySelector(s);
}

/* setTimeout() */
const myans = $("#myAnswer");
const seconds = $(`.seconds`);
let myChoice = $(".choice");
let result = $(".result");
const mySagot = "Lima";


console.log(myans);
let count = 10;

setTimeout(displayAnswer, 2000, mySagot);

setTimeout(() => {
    myChoice.style.display = 'block';
}, 3500);

function displayAnswer (answer){
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

        if (i <= cancelList[i].length-1) {
            cancel.innerHTML = cancelList[i];
            cancel.style.fontWeight = 'bold';
            i += 1;

            if (count > 0) {
              count -= 1;
            }
        }
        
        if (i > cancelList.length-1) { // exe on cancel 2
            i = 0;
        }
    }, 500); // run every 1 second
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

/* setInterval() */
let secondRemaining = 3;

function startShutdown(device) {
  const logoutPrompt = confirm("Do you want to Log out?");

  if (logoutPrompt) {
    let startSC = setInterval(() => {
      if (secondRemaining < 0) {
        clearInterval(startSC);
        console.log(`You're  ${device} is Shutdown.`);
      } else {
        console.log(
          `Your ${device} will shut down in ${secondRemaining} seconds`
        );
        secondRemaining -= 1;
      }
    }, 1000);
  }
}

