"use strict";

// post new user

document
  .querySelector(".js-btn-post-new-user")
  .addEventListener("click", () => {
    const inputName = document.querySelector(".js-input-name");
    const inputEmail = document.querySelector(".js-input-email");

    // create query params
    const queryParams = `?userName=${inputName.value}&userEmail=${inputEmail.value}`;

    fetch("http://localhost:3000/user" + queryParams, { method: "POST" })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Server response:", responseData);
        printJson(".js-post-new-user-result", responseData);
      });
  });
// get filter

document.querySelector(".js-btn-post-filter").addEventListener("click", () => {
  const inputFilter = document.querySelector(".js-input-filter");

  // create query params
  const filterByName = `?userFilter=${inputFilter.value}`;

  fetch("http://localhost:3000/users" + filterByName, { method: "GET" })
    .then((response) => response.json())
    .then((responseData) => {
      console.log("Server response:", responseData);
      printJson(".js-post-filter-result", responseData);
    });
});

// get filter email
document
  .querySelector(".js-btn-post-filter-email")
  .addEventListener("click", () => {
    const inputFilterEmail = document.querySelector(".js-input-filter-email");

    const filterByEmail = `?userFilterEmail=${inputFilterEmail.value}`;

    fetch("http://localhost:3000/usersEmail" + filterByEmail)
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Server response:", responseData);
        printJson(".js-post-filter-email-result", responseData);
      });
  });
// helper

const printJson = (selector, jsonData) => {
  const jsonHtml = JSON.stringify(jsonData, null, 2);
  document.querySelector(selector).innerHTML = jsonHtml;
};
