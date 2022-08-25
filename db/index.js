const users = require('./users')
const products = require('./products')
const cart_products = require('./cart_products')
const carts = require('./carts')

module.exports = {
  ...users,
  ...products,
  ...cart_products,
  ...carts
};
