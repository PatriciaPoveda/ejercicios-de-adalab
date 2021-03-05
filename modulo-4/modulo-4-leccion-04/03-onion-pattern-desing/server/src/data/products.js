const data = require("./index");

const getProducts = () => {
  const query = data.db.prepare(`SELECT * FROM products`);
  const products = query.all();
  return products;
};

module.exports = {
  getProducts: getProducts,
};
