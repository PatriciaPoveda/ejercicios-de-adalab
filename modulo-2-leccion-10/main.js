"use strict";
// Usando fetch
function getEmoji() {
  fetch("https://api.rand.fun/games/rockpaperscissorslizardspock")
    .then(response => response.json())
    .then(data => {
      document.querySelector('.js-result').innerHTML = data.result
    });
}
document.querySelector('.js-emoji').addEventListener("click", getEmoji);
 


// EJERCICIO 01

  fetch("https://api.rand.fun/number/integer?length=20")
  .then(response => response.json())
  .then(data=>{
    document.querySelector('.js-integer').innerHTML = data.result
  })

  // EJERCICIO 02

  function getDogImage() {
    fetch("https://dog.ceo/api/breed/chihuahua/images/random")
      .then(response => response.json())
      .then(data => {
        const img = document.querySelector("img");
        img.src = data.message;
        img.alt = "Un perro";
      });
  }
  const btn = document.querySelector(".js-dog");
  btn.addEventListener("click", getDogImage);

 // EJERCICIO 03

 const btn3 = document.querySelector(".js-btn");
 function getInfoUser(){
   const username = document.querySelector(".js-input3").value;
   console.log(username);
  fetch(`https://api.github.com/users/${username}`)
  .then(response => response.json())
  .then(data => {
    const nameEl3 = document.querySelector(".js-name3");

  })
}

 btn3.addEventListener("click", getInfoUser);
