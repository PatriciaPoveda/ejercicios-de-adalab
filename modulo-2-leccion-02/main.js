 // Ejercicio 02
const superWave = document.querySelector(".super-wave");
superWave.classList.add("size");
console.log("superWave");
// Ejercicio 03
const uno = "kiwis";
const dos = "peras";
const tres = "uvas";
console.log(uno + dos + tres);
const price = 4;
const kilos = 0.5;
console.log(price * kilos);
// Ejercicio 04
const persons = 9;
const bill = 128;
const result = (128 - 2) / 9;
const resultAna = result + 2;
console.log(`Todos pagamos ${result}€ menos Ana que paga ${resultAna}€.`);
// Ejercicio 05
const day = "24";
const year = "365";
const age = "37";
const totalTime = day * year * age;
console.log(totalTime);
// Ejercicio 06-07
const nameElement = "Lola";
console.log(`Hola ${nameElement}, encantada de conocerte`);
// Ejercicio 08
const listElement = document.querySelector(".list");
const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';
const content =`<li><img src='${firstDogImage}'>${firstDogName}</li>`;
listElement.innerHTML = content;
console.log(listElement)
// Ejercicio 09
const name = "Patricia Poveda Boto";
const h2Element = document.querySelector("h2");
h2Element.innerHTML = "El nombre de mi compañera es "  + name + " y está compuesto por "+ name.length ;
console.log(h2Element)
// Ejercicio 10
const ageElement = document.querySelector(".age");
const day1 = "24";
const year1 = "365";
const ageElementValue = parseInt(ageElement.innerHTML);
const totalTime1 = day1 * year1 * ageElementValue;
console.log(totalTime1);
// EJERCICIO 11
console.log(2 + 3 + '5');
console.log('2' + 3 + 5);
console.log(123);
console.log('123');
// typeof
let text = "¿De qué tipo soy?";
console.log(text + " es del tipo " + typeof text);
text = 123;
console.log("ahora " + text + " es del tipo " + typeof text);
text = undefined;
console.log("y ahora " + text + " es del tipo " + typeof text);
// NaN
let userAge = 40;
userAge = parseInt(userAge.value);
console.log('La usuaria no ha introducido una edad válida:', isNaN(userAge));