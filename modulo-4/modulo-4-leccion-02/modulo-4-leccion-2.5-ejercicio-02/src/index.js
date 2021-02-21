const express = require("express");
const cors = require("cors");
const data = require("./services/api.json");

// create app server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// // api endpoints

app.get("/users/:userId", (req, res) => {
  const characters = data.results;
  const result = characters.filter(
    (character) => character.id === parseInt(req.params.userId)
  );

  res.json(result);
});

app.get("/users/:userId/episodes", (req, res) => {
  const characters = data.results;
  const result = characters.filter(
    (character) => character.id === parseInt(req.params.userId)
  );

  res.json(result[0].episode);
});
