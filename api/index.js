const router = require('express').Router()
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;
const { getUserById } = require('../db');

// GET /api/health
router.get('/health', async (req, res) => {
  const data = {
    message: 'I am healthy',
  };
  res.status(200).send(data);
});

router.get('/unknown', async (req, res) => {
  res.status(404).send({
    message: 'Not Found',
  });
});
// '/unknown' or '*' ? ^^

router.use(async (req, res, next) => {
  const prefix = 'Bearer ';
  const auth = req.header('Authorization');

  if (!auth) {
    next();
  } else if (auth.startsWith(prefix)) {
    const token = auth.slice(prefix.length);

    try {
      const { id } = jwt.verify(token, JWT_SECRET);
      if (id) {
        req.user = await getUserById(id);
        next();
      }
      else {
        next({name: "You don't have proper JWT", message: "You need to contact someone about that"})
      }
    } catch ({ name, message }) {
      next({ name, message });
    }
  } else {
    next({
      name: 'AuthorizationHeaderError',
      message: `Authorization token must start with ${prefix}`,
    });
  }
});

router.use((req, res, next) => {
  if (req.user) {
    console.log('User is set:', req.user);
  }

  next();
});


// ROUTER: /api/users
const usersRouter = require('./users');
router.use('/users', usersRouter);

// ROUTER: /api/products
const productsRouter = require('./products');
router.use('/products', productsRouter);

// ROUTER: /api/carts
const cartsRouter = require('./carts');
router.use('/carts', cartsRouter);

// ROUTER: /api/cart_products
const cart_productsRouter = require('./cart_products');
router.use('/cart_products', cart_productsRouter);

// ROUTER: /api/orders
//const orders = require('./orders');
//router.use('/orders', ordersRouter);

module.exports = router;

// clear
