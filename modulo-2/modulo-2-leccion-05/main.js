"use strict";
// EJERCICIO 01
const btnEl = document.querySelector(".button");
const textEl = document.querySelector(".text");
function changeText(){
textEl.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";
}

btnEl.addEventListener("click", changeText);
// EJERCICIO 02
const btn2El = document.querySelector(".button2");
const tex2tEl = document.querySelector(".text2");
function changeText2(){
    console.log(`Hola, ${tex2tEl.value}`);
}

btn2El.addEventListener("click", changeText2);
// EJERCICIO 03
const text3El = document.querySelector(".text3");
const container3El = document.querySelector(".container3");
function createText(){
   const newText3 = document.createElement("p");
newText3.innerHTML = "lorem ipsum";
container3El.appendChild(newText3);
}
text3El.addEventListener("mouseover", createText);

