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
  return sinIva, iva, a;
}
const priceResult = price(15);
// console.log(Precio sin IVA: sinIva, IVA: iva y Total: a);

// EJERCICIO 08
// modificamos una variable de ámbito global
let secretLetter = "y";
function mySecretLetter() {
  secretLetter = "x";
  return secretLetter;
}
console.log(secretLetter);
console.log(mySecretLetter()); // devuelve "x"
