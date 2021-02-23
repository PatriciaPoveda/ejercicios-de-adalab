"use strict";

// post new user

document
  .querySelector(".js-btn-header-params")
  .addEventListener("click", () => {
    fetch("http://localhost:3000/user", {
      method: "POST", // o GET, PUT, PATCH...
      headers: {
        2525: "número de la suerte",
        true: false,
        datos: {
          unParametroEnLaCabecera: "Hola mundo",
          otroParametroMas: "Soy un dato",
        },
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  });
