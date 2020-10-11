"use strict";
// EJERCICIO 01
function sum(a, b) {
  const result = a + b;
  return result;
}
const sumResult = sum(5584, 756);
console.log(sumResult);
// EJERCICIO 02
function media(c, d, e, f) {
  return (c + d + e + f) / 4;
}
const mediaResult = media(4, 5, 2, 1);
console.log(mediaResult);
// EJERCICIO 03
function price(a) {
  const sinIva = a - (a * 21) / 100;
  const iva = (a * 21) / 100;
  // return sinIva, iva, a;
  console.log(`Precio sin IVA: ${sinIva}, IVA: ${iva} y Total: ${a}.`);
}
price(20);

// EJERCICIO 04
function parImpar(number) {
  if (number % 2 === 0) {
    console.log("true");
  } else {
    console.log("false");
  }
}
parImpar(549);

// // EJERCICIO 05
const name = "document.querySelector";
function getEl(p){
   return name + p ;
  }
  let btnEl = getEl("('.btn')");
  console.log(btnEl);
// EJERCICIO 06
btnEl = getEl("");
if (btnEl === getEl("")){
console.error("No existe ningún elemento con clase, id o tag llamado {btnEl}");
} else{
  console.log(btnEl);
}
// EJERCICIO 07
function getEl(p){
  return name + (p);
 }
 let numberEl = getEl("('.number')");
 console.log(numberEl);
numberEl = document.querySelector(".number");
const content = numberEl.innerHTML;
console.log(content);
const realNumber = parseInt(content);
console.log(realNumber);
 
 function parImpar(number) {
  if (number % 2 === 0) {
    console.log("Este número es PAR");
  } else {
    console.log("Este número es IMPAR");
  }
}
parImpar(realNumber);
// EJERCICIO 08
// modificamos una variable de ámbito global
let secretLetter = "y";
function mySecretLetter() {
  secretLetter = "x";
  return secretLetter;
}
console.log(secretLetter);
console.log(mySecretLetter()); // devuelve "x"
