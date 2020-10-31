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
  fetch(`https://api.github.com/users/${username}`)
  .then(response => response.json())
  .then(data => {
    console.log(data.login);
    document.querySelector(".js-name3").innerHTML += data.login;
    document.querySelector(".js-repositorios3").innerHTML += data.public_repos;
    document.querySelector(".js-avatar3").src += data.avatar_url;

  });
}

 btn3.addEventListener("click", getInfoUser);

// const btnSearch = document.querySelector('.js-btn');
// let names = [];
// let images = [];
// function getSerie(){
//   const query = document.querySelector('.js-input3').value;
//   fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
//   .then(response => response.json())
//   .then(data => {
//     for (let i = 0; i < data.length; i++) {
//       names = data[i].show.name;
//       console.log(names);
//       images = data[i].show.image.medium;
//       const info = `${names} ${images}`;
//       console.log(info);
      
//     }
//     })
// };
// btnSearch.addEventListener('click', getSerie);