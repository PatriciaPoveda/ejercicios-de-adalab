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
