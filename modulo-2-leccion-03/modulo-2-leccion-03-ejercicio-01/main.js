"use strict";
// Ejercicio 01
const nombre = document.querySelector(".user__name");
const imagen = document.querySelector(".user__avatar");
// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.it/300x300";
// avatar que eligió el usuario al registrarse
let userAvatar = "http://www.fillmurray.com/300/300";
// imagen.setAttribute("src", userAvatar);
let userNombre = "";
userNombre= "Bill";
nombre.innerHTML = userNombre;
imagen.src = userAvatar || DEFAULT_AVATAR;
// Ejercicio 02
const name1 = "Celia";
const name2 = "Marina";
let allName = name2;
allName = name1;
allName = "Patricia";
if (allName === name1) {
  const nameX = `Bienvenida, ${name1}`;
  console.log(nameX);
} else if (allName === name2){
  const nameY = `Bienvenida, ${name2}`;
  console.log(nameY)
} else {
  console.log("Lo siento pero el usuario que has introducido no está registrado");
}
// Ejercicio 03
const number = 37;
if (number === 0) {
  console.log('El número es 0');
} else if (number < 0) {
  console.log('El número es negativo');
} else if (number + 2 > 13 && number <= 20) {
  console.log('El número más 2 es mayor que 13 pero menor o igual que 20');
} else if (number > 20 && number < 50) {
  console.log('El número es mayor que 20 pero menor que 50');
} else {
  console.log('el número no es 123123125');
}
// Ejercicio 04
const yearOne = 15;
const yearTwo = 9;
const restYear = 5;
let dogYears = 1;
dogYears = 2;
dogYears = 3;
if (dogYears === 1){
  console.log(`El perro tiene ${yearOne} años humanos`);
}
else if (dogYears === 2){
  console.log(`El perro tiene ${yearOne + yearTwo} años humanos`);
}
else {
  console.log(`El perro tiene ${(yearOne + yearTwo) + (dogYears - 2) * restYear} años humanos`);
}
// Ejercicio 05
const containerElement = document.querySelector(".container");
const title5Element = document.querySelector(".title5");
const messageElement = document.querySelector(".message");
if (containerElement.classList.contains("warning")){
  title5Element.innerHTML = "AVISO";
  messageElement.innerHTML = "Tenga Cuidado";
}
else if (containerElement.classList.contains("error")){
  title5Element.innerHTML = "ERROR";
  messageElement.innerHTML = "Ha surgido un error";
}
else if (containerElement.classList.contains("success")){
  title5Element.innerHTML = "CORRECTO";
  messageElement.innerHTML = "Los datos son correctos";
}
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
// PRACTICA de SWITCH
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
// Ejercicio 08
const year = 2020;
const allBisiestos = year % 4 === 0;
if (allBisiestos){
  console.log("Bisiesto");
}


// OR
const isAdmin = false;
const adminText = isAdmin && 'administradora';
const isModerator = true;
const moderatorText = isModerator && 'moderadora';

// Como la primera expresión es `falsy`, se devuelve la segunda expresión
console.log(`Bienvenida ${adminText || moderatorText}. ¡Es genial verte de nuevo!`);