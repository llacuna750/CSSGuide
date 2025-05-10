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

imgdom.onclick = function () {
  imgdom.style.width = "30%";
};
