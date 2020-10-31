"use strict";
// EJERCICIO 01
const adalaber1 = {
  name: "Susana",
  age: "34",
  job: "periodista",
};
console.log(
  `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}. `
);
const adalaber2 = {
  name: "Rocío",
  age: "25",
  job: "actriz",
};
console.log(
  `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}. `
);
// EJERCICIO 02
const adalaber3 = {};
adalaber3.name = "Susana";
adalaber3.age = "34";
adalaber3.job = "periodista";
adalaber3.run = (runPhrase) => runPhrase;
adalaber3.runMarathon = (distance) => `un maratón de ${distance} kilometros`;

console.log(adalaber3.run("Estoy corriendo"));
console.log(adalaber3.run("Estoy corriendo ") + adalaber3.runMarathon("50"));

const adalaber = {};
adalaber.name = "María";
adalaber.speak = (phrase) => `Yo digo: ${phrase}`;

// Muestra en la consola 'Yo digo: Hola'
console.log(adalaber.speak("Hola"));

// EJERCICIO 03

const adalaber4 = {};
adalaber4.name = "Susana";
adalaber4.age = "34";
adalaber4.job = "periodista";
adalaber4.run = (runPhrase) => runPhrase;
adalaber4.runMarathon = (distance) => `un maratón de ${distance} kilometros`;
adalaber4.showbio = function (){
  return "Mi nombre es " + this.name + " tengo " + this.age + " y soy " + this.job;
};
console.log(adalaber4.showbio());

const adalaber5 = {
  name: "Rocío",
  age: "25",
  job: "actriz",
  showbio: function (){
    return "Mi nombre es " + this.name + " tengo " + this.age + " y soy " + this.job;
  }
};
console.log(adalaber5.showbio());

// EJERCICIO 04
const btnEl = document.querySelector(".js-btn");
const clickButton = (event) => console.log(event);

btnEl.addEventListener("click", clickButton);

// EJERCICIO 05

// Cuando imprimimos un elemento en la consola con console.log vemos la etiqueta de HTML y podemos desplegarla para ver su contenido. Si queremos ver el objeto con sus propiedades y métodos tendremos que usar console.dir.

const inputEl = document.querySelector(".js-input");
console.dir(inputEl);

// EJERCICIO 06

const peras = {
max: 20,
min: 5,
now: 15,
initial: 10,
add1: function () {
  return this.now + 1;
},
remove1: function(){
  return this.now - 1;
},
restore: function(){
  return this.initial;
},
};
console.log(peras.add1());
console.log(peras.remove1());
console.log(peras.restore());
console.log(peras.add1() - peras.remove1());

// EJERCICIO 07

const job = "developer";

const data = {};
data.firstName = "Patuka";
data.lastName = "Poveda";
data.age = 37;
data.job = job;
console.log(data);
data.firstName = "Patricia";
data.age = 37 + 1;
console.log(data);