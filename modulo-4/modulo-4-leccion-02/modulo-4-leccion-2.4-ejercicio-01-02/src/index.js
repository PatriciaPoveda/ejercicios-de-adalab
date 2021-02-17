const express = require("express");
const cors = require("cors");

// create server
const server = express();

// set express middleware
server.use(express.json());
server.use(cors());

// init express aplication
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// static server
const staticServerPath = "./public";
server.use(express.static(staticServerPath));

// users

const users = []; // fake users data base

// api endpoints

server.post("/user", (req, res) => {
  // console.log("Body params:", req.body);
  // console.log("Body param userName:", req.body.userName);
  // console.log("Body param userEmail:", req.body.userEmail);

  // add new user to daba base
  users.push({
    name: req.body.userName,
    email: req.body.userEmail,
  });

  res.json({
    result: "User created",
  });
});

server.post("/userFilterName", (req, res) => {
  const filterUserName = req.body.filterName;

  const filterPerson = users.filter((user) =>
    user.name.toUpperCase().includes(filterUserName.toUpperCase())
  );
  res.json({
    result: filterPerson,
  });
});

server.post("/userFilterEmail", (req, res) => {
  const filterUserEmail = req.body.filterEmail;

  const filterPersonEmail = users.filter((user) =>
    user.email.toUpperCase().includes(filterUserEmail.toUpperCase())
  );
  res.json({
    result: filterPersonEmail,
  });
});

// server.get('/users', (req, res) => {
//   res.json({
//     result: users
//   });
// });
