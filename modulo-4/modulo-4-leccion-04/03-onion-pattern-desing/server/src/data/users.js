const data = require("./index");
// const isValidUserId = (userId) => {
//   const query = data.db.prepare(`SELECT * FROM users WHERE id = ?`);
//   const userById = query.get(userId);
//   return userById;
// };

const getUserById = (userId) => {
  const query = data.db.prepare(`SELECT * FROM users WHERE id = ?`);
  const userById = query.get(userId);
  return userById;
};

const getUserByEmailAndPassword = (email, password) => {
  const query = data.db.prepare(
    `SELECT * FROM users WHERE email = ? AND password = ?`
  );
  const user = query.get(email, password);
  return user;
};

const getSignUp = (email, password) => {
  const query = data.db.prepare(
    `INSERT or IGNORE INTO users (email, password) VALUES (?, ?)`
  );
  const signUpUser = query.run(email, password);
  console.log(signUpUser);
  return signUpUser;
};
module.exports = {
  // isValidUserId: isValidUserId,
  getUserById: getUserById,
  getUserByEmailAndPassword: getUserByEmailAndPassword,
  getSignUp: getSignUp,
};
