const queryFilms = require("../data/queryFilms");

const films = (req, res) => {
  // get film data
  const filmFound = queryFilms(req.params.filmId);
  // response with rendered template
  if (filmFound) {
    res.render("pages/film", filmFound);
  } else {
    res.render("pages/film-not-found");
  }
};

module.exports = films;
