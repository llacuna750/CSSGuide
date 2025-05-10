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
