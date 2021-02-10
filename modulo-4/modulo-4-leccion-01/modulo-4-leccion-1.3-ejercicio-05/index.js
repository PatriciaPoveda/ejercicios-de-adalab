const _ = require("lodash");

const students = [
  {
    name: "Sofía",
    promo: "k",
  },
  {
    name: "María",
    promo: "l",
  },
  {
    name: "Lucía",
    promo: "j",
  },
  {
    name: "Julia",
    promo: "l",
  },
];

const promo = _.sortBy(students, ["promo", "name"]);
console.log(promo);

const names = _.sortBy(students, ["name", "promo"]);
console.log(names);
