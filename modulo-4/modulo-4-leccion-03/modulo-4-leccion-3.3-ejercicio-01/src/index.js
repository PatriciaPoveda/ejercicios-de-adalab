const express = require("express");
const cors = require("cors");
const films = require("./films-data.json");
const directors = require("./directors-data.json");

// create app server
const app = express();

// set express middlewares
app.use(express.json());
app.use(cors());

// set template engine middlewares
app.set("view engine", "ejs");

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// endpoints

app.get("/es/film:filmId.html", (req, res) => {
  const filmFind = films.find((film) => film.id === req.params.filmId);

  if (filmFind) {
    filmFind.title = filmFind.title || "";
    filmFind.year = filmFind.year || "";
    filmFind.director = filmFind.director || "";
    filmFind.country = filmFind.country || "";
    res.render("pages/film", filmFind);
  } else {
    res.status(404);
    res.render("pages/film-not-found");
  }
});

app.get("/es/directora/:directorId.html", (req, res) => {
  const directorData = directors.find(
    (director) => director.id === req.params.directorId
  );

  if (directorData) {
    directorData.name = directorData.name || "";
    directorData.birth_year = directorData.birth_year || "";
    directorData.awards = directorData.awards || "";
    directorData.country = directorData.country || "";
    res.render("pages/director", directorData);
  } else {
    res.status(404);
    res.render("pages/director-not-found");
  }
});
