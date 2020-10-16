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
for (let i = 1; i < 11; i++) {
    console.log('Voy por la vuelta ' + i);
  }
