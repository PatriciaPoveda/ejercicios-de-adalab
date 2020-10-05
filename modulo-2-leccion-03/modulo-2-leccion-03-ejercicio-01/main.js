"use strict";
// Ejercicio 01
const imagen = document.querySelector(".user__avatar");
// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.it/300x300";
// avatar que eligió el usuario al registrarse
let userAvatar = "http://www.fillmurray.com/300/300";
// imagen.setAttribute("src", userAvatar);
imagen.src = userAvatar || DEFAULT_AVATAR;

// Ejercicio 06
let avocados;
const avocadoPrice = 1.5;
const money = 33;

if (money >= avocadoPrice) {
  avocados = money / avocadoPrice;
} else {
  avocados = 0;
}
money >= avocadoPrice ? (avocados = money / avocadoPrice) : (avocados = 0);
// PRÁCTICA
const todayDate = "Lunes";

switch (todayDate) {
  case "Lunes":
    console.log("Hoy me tomo un café con Maricarmen");
    break;
  case "Martes":
    console.log("Bajar al perro");
    break;
  case "Miércoles":
    console.log("Vamos al cine a ver una peli");
    break;
  case "Jueves":
    console.log("Juernesss");
    break;
  case "Viernes":
    console.log("Cumpleaños de Paco");
    break;
  case "Sábado":
    console.log("Comida con los suegros");
    break;
  default:
    console.log("Dormir hasta las 12");
}

// Ejercicio 07
let ingredient = "Pollo";

switch (ingredient) {
  case "Pollo":
    console.log("Filete con patatas");
    break;
  case "Merluza":
    console.log("Merluzita en salsa verde");
    break;
  case "Espinacas":
    console.log("Espinacas rehogadas");
    break;
}
