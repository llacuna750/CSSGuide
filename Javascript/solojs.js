//  Asingn Title
document.title = "Javascript Sololearn";

const gbutton = document.getElementById("greenbutton");
gbutton.style.backgroundColor = `green`;
gbutton.style.borderRadius = "5px";
gbutton.style.width = "50%";

console.log(gbutton.textContent);

const imgdom = document.getElementById("dom-img");

const divforimg = document.getElementsByClassName("imgcontainer");
divforimg[0].style.border = `1px solid`;
console.log(divforimg);

const div_slur = document.querySelector(".slurimgcontainer");
div_slur.style.border = `1px solid`;
div_slur.style.marginTop = `10px`;
console.log(div_slur);

const slurimg = document.getElementById('slur');
slurimg.style.margin = '5px';


// slurimg.onclick = function () {
//   const newImg = document.createElement("img");
//   newImg.src = "../images/sakamoto.jpg";
//   newImg.alt = "sakamoto";
//   newImg.style.width = "10%";
//   // div_slur.appendChild(newImg);
// };

slurimg.onclick = function () {
    div_slur.style.display = "flex";
    div_slur.style.justifyContent = "center";
    div_slur.style.alignItems = "center";
  slurimg.src = "../images/sakamoto.jpg";
};


imgdom.onclick = function () {
  imgdom.style.width = "20%";
  divforimg[0].style.display = "flex";
  divforimg[0].style.justifyContent = "center";
  divforimg[0].style.alignItems = "center";
};
// remove double quotation
console.log("not error");

var no = 10;

for (no; no>=0; no--) {
  console.log(`Number ${no}`);
}
console.log("Happy New Year!");

const devname = "Gab dev";
console.log(typeof devname);
console.log(`Your name is ${devname}`);

const readp1 = document.getElementById(`p1`).textContent = "Updated: I want to be a programmer!";
console.log(readp1);

let pharagraph2 = document.getElementById(`p2`);
// alert(pharagraph2.textContent);
pharagraph2 = "New Content";
console.log(pharagraph2);

let coder = `Gab junior dev`;
coder = `Gab Senior dev`;

console.log(coder);

function doSomething() {
  let x = "Game Over";
  // alert(x);
  console.log(x);
}

doSomething();

function myFunction() {
  let x = document.getElementById(`ph1`);
  x.textContent = `Updated Text`;
  x.style.border = `dashed`;
  x.style.backgroundColor = `Green`;
}

const div_button = document.querySelector(".divcolor");
div_button.style.border = `1px solid`;
div_button.style.padding = `50px 0`;
div_button.style.textAlign = `Center`;
div_button.style.width = `50%`;
div_button.style.marginTop = `5px`;

let mybutton = document.getElementById(`button_style`);

function changeColor() {
  mybutton.style.color = `green`;
}

// Assign the click handler correctly
// document.getElementById("button_style").onclick = changeColor;

mybutton.onclick = function() {
  changeColor();
  console.log(mybutton);
  div_button.style.backgroundColor = "yellow";
};




