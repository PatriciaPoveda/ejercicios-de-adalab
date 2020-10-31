"use strict";
// EJERCICIO 01
function workWithMovies(){
  const films = ["Casablanca", "Titanic", "Dumbo"];
  films.push("Los Pajaros")
  // films.pop();
  console.log(films);
  films[1] = "Psicosis";
  console.log(films);
  films[2] = "Platoon";
  console.log(films);
}
workWithMovies()
// EJERCICIO 02
// for (let i = 1; i <= 10; i++) {
//     console.log('Voy por la vuelta ' + i);
//   }
// EJERCICIO 03
let acc = 0;
for(let i = 1; i <= 10; i++){
  acc = acc + 2;
}
console.log("El resultado es " + acc);

// EJERCICIO 04
// let hunterMoon = 2017;
// for( let i = 1; i <= 15; i++){
//   hunterMoon = hunterMoon + 3;
//   console.log(i + " 5 de octubre de " + hunterMoon);
// }

// Iterando sobre los elementos de un array
const scores = [4, 2, 7, 8, 6, 7, 9, 1, 2, 6, 7];

// Creamos una variable fuera del bucle para que no se sobrescriba en cada iteración
// En esta variable iremos sumando cada una de las puntuaciones
let acc1 = 0;

// La i empieza en 0 porque el índice de los arrays empieza en 0 también
for (let i = 0; i < scores.length; i++) {
  acc1 += scores[i];
  // Sumamos a `acc` el valor actual del array en cada iteración del bucle
  // acc += arr[i] es igual a acc = acc + arr[i]
}

console.log('La puntuación final es ' + acc1);

// EJERCICIO 05

const numbergs5 = [10, 5, 5, 5, 10];
numbergs5[5] = 1;
let sum5 = 0;
let result5 = 0;
for(let i = 0; i < numbergs5.length; i++){
sum5 += numbergs5[i];
result5 = sum5 / numbergs5.length;
}
console.log(result5);

const magicNumbers = [3, 6, 9, 12, 15, 18];
const average = function(arr) {
  let sumx = 0;
  for(let i = 0; i < arr.length; i++){
    sumx += arr[i];
  }  
  return sumx / arr.length;
}
console.log(average (numbergs5));
console.log(average (magicNumbers));

// EJERCICIO 06
const btnEl = document.querySelector(".btn");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const film = document.querySelector(".film");
let data = [];

function showText(event){
  data.push(input1.value);
  data.push(input2.value);
  console.log(data);
  for(let el of data){
    const text = "A mi tambien me encanto " + el;
    film.innerHTML = text;
  }
  console.log(data);
};

  btnEl.addEventListener("click", showText); 

  // EJERCICIO 07
  // Lista de contactos (array con objetos dentro)
const contacts = [
  {
    name: 'María',
    age: 31,
    job: 'diseñadora'
  },
  {
    name: 'lucía',
    age: 31,
    job: 'ingeniera quimica'
  },
  {
    name: 'susana',
    age: 34,
    job: 'periodista'
  },
  {
    name: 'Rocío',
    age: 25,
    job: 'actriz'
  }
];

function countAdalabers(arr){
  return arr.length;
  
}
console.log(countAdalabers(contacts));
let media = 0;
function averageAge(arr){
  for(let i = 0; i < arr.length; i++){
  media += arr[i].age;
  console.log(media);
}
return media / arr.length;
}
console.log(averageAge(contacts));

function theYoungest(arr){
  let minAge = arr[0].age;
  let youngest = "";
  for (let i = 0; i < arr.length; i++) {
    if (minAge > arr[i].age) {
      minAge = arr[i].age;
      youngest = arr[i].name;
    }
  }
  return youngest;
}
console.log(theYoungest(contacts));

function countDesigners(arr){
  let diseñadora = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].job === "diseñadora"){
      diseñadora += 1;
    }
  }
  return diseñadora;
}
console.log(countDesigners(contacts));