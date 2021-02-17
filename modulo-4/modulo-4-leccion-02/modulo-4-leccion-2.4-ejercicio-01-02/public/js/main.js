"use strict";

// post new user

document
  .querySelector(".js-btn-post-new-user")
  .addEventListener("click", () => {
    const inputName = document.querySelector(".js-input-name");
    const inputEmail = document.querySelector(".js-input-email");

    // create body params
    const bodyParams = {
      userName: inputName.value,
      userEmail: inputEmail.value,
    };

    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyParams),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Server response:", responseData);
        printJson(".js-post-new-user-result", responseData);
      });
  });

// Post filter users by name

document.querySelector(".js-btn-post-filter").addEventListener("click", () => {
  const inputfilterName = document.querySelector(".js-input-filter");

  // create body params
  const filterByName = {
    filterName: inputfilterName.value,
  };

  fetch("http://localhost:3000/userFilterName", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(filterByName),
  })
    .then((response) => response.json())
    .then((responseData) => {
      console.log("Server response:", responseData);
      printJson(".js-post-filter-result", responseData);
    });
});

// Post filter users by email

document
  .querySelector(".js-btn-post-filter-email")
  .addEventListener("click", () => {
    const inputfilterEmail = document.querySelector(".js-input-filter-email");

    // create body params
    const filterByEmail = {
      filterEmail: inputfilterEmail.value,
    };

    fetch("http://localhost:3000/userFilterEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filterByEmail),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Server response:", responseData);
        printJson(".js-post-filter-email-result", responseData);
      });
  });

// get users data

// document.querySelector('.js-btn-get-users').addEventListener('click', () => {
//   fetch('http://localhost:3000/users')
//     .then(response => response.json())
//     .then(responseData => {
//       console.log('Server response:', responseData);
//       printJson('.js-get-users-result', responseData);
//     });
// });

// helper

const printJson = (selector, jsonData) => {
  const jsonHtml = JSON.stringify(jsonData, null, 2);
  document.querySelector(selector).innerHTML = jsonHtml;
};
