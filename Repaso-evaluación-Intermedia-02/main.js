"use strict";
const face = document.querySelector(".js-face");
const btn = document.querySelector(".js-button");
const select = document.querySelector(".js-select");

const container = document.querySelector(".js-container");
function updateclick(){
const selectValue = select.value;
face.innerHTML = selectValue;
const number = parseInt(Math.random()*100);
console.log(number);
const par = number % 2 === 0;
if (!par){
    // container.classList.remove("yellow-color");
    container.classList.add("fire-color");
}
else {
    // container.classList.add("yellow-color");
    container.classList.remove("fire-color");
}
}

btn.addEventListener("click", updateclick);