"use strict";

// Ejercicio 02
const superWave = document.querySelector(".super-wave");
superWave.classList.add("size");
console.log(superWave);

// Ejercicio 03
const priceKiwis = 5;
const pricePeras = 2;
const priceUvas = 4;

const kilosKiwis = 2;
const kilosPeras = 3;
const kilosUvas = 0.5;

const result1 = priceKiwis * kilosKiwis;
const result2 = pricePeras * kilosPeras;
const result3 = priceUvas * kilosUvas;

console.log(`El precio total es: ${result1 + result2 + result3}€`);

// Ejercicio 04
const diners = 9;
const bill = 128;
const result = (bill - 2) / diners;
const resultAna = result + 2;
console.log(`Todos pagamos ${result}€ menos Ana que paga ${resultAna}€.`);

// Ejercicio 05
const day = "24";
const year = "365";
const age = "37";
const totalTime = day * year * age;
console.log(`He vivido ${totalTime} horas`);

// Ejercicio 06-07
const nameElement = "Lola";
console.log("Hola " + nameElement + ", encantada de conocerte");
console.log(`Hola ${nameElement}, encantada de conocerte`);

// Ejercicio 08
const listElement = document.querySelector(".list");
let content = "";
const firstDogImage =
  "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const firstDogName = "Dina";
content += `<li>`;
content += `<img src='${firstDogImage}'>`;
content += `${firstDogName}`;
content += `</li>`;
listElement.innerHTML = content;

// Ejercicio 09
const nameA = "Patricia Poveda Boto";
let procesado = nameA.replace(/\s+/g, "");
const h2Element = document.querySelector("h2");
h2Element.innerHTML =
  "El nombre de mi compañera es " +
  nameA +
  " y está compuesto por " +
  procesado.length +
  " letras";

// Ejercicio 10
const ageElement = document.querySelector(".age");
const day1 = "24";
const year1 = "365";
const ageElementValue = parseInt(ageElement.innerHTML);
const totalTime1 = day1 * year1 * ageElementValue;
console.log(`He vivido ${totalTime1} horas`);

// EJERCICIO 11
console.log(2 + 3 + "5");
console.log("2" + 3 + 5);
console.log(123);
console.log("123");

// typeof
let text = "¿De qué tipo soy?";
console.log(text + " es del tipo " + typeof text);
text = 123;
console.log("Ahora " + text + " es del tipo " + typeof text);
text = undefined;
console.log("Y ahora " + text + " es del tipo " + typeof text);

// NaN
let userAge = 40;
userAge = parseInt(userAge.value);
console.log("La usuaria no ha introducido una edad válida:", isNaN(userAge));
