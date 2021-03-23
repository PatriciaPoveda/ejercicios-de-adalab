const Database = require("better-sqlite3");
const db = new Database("./src/db/database.db", {
  verbose: console.log,
});

const queryFilms = (filmId) => {
  const query = db.prepare(`SELECT * FROM filmsData WHERE id = ?`);
  const film = query.get(filmId);
  return film;
};

module.exports = queryFilms;
