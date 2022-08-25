const express = require("express");
const {
  getAllCartProducts,
  assignProductToCartProducts,
  getAllCartProductsByCartId,
  updateCartProductQuantity,
  getCartProductById,
  deleteProductFromCart,
  attachCartProductsToCart,
} = require("../db");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cart_products = await getAllCartProducts();

    res.send({
      cart_products,
    });
  } catch (error) {
    throw error;
  }
});

router.get("/:cartId", async (req, res) => {
  try {
    const { cartId } = req.params;
    const cart_productsbyid = await getAllCartProductsByCartId(cartId);
    res.send({
      cart_productsbyid,
    });
  } catch (error) {
    throw error;
  }
});

router.post("/", async (req, res, next) => {
  const { user_id, cart_id, product_id, quantity, price } = req.body;
  try {
    const newCartProduct = await assignProductToCartProducts({
      user_id,
      cart_id,
      product_id,
      quantity,
      price,
    });
    res.send({
      message: "New Cart_Product Created!",
      newCartProduct: newCartProduct,
    });
  } catch (error) {
    next({ message: "CART_PRODUCT ERROR" });
  }
});

router.post("/:cartId", async (req, res, next) => {
  const { cartId } = req.params
    try {
      const newCart = await attachCartProductsToCart(cartId)
      res.send({
        message: "New Cart For Checkout Created!",
        newCart:  newCart
      })
    } catch(error) {
      next(error)
    }
})

router.patch("/update", async (req, res, next) => {
  const { quantity, cartProductId } = req.body;
  const cartProductToUpdate = await getCartProductById(cartProductId);

  try {
    if (cartProductToUpdate) {
      const updatedCartProduct = await updateCartProductQuantity( cartProductId, { quantity: quantity });
      res.send({
        message: "Cart Product Has Been Updated!",
        updatedCartProduct: updatedCartProduct,
      });
    } else {
      res.status(401);
      next({
        error: "CARTPRODUCT ID DOESN'T EXIST",
        message: `Cart Product ID of ${cartProductId} doesn't exist.`,
        name: "NoCartProductWithThatID",
      });
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/delete/:cartProductId", async (req, res, next) => {
  const { cartProductId } = req.params;
  const cartProductToDelete = await getCartProductById(cartProductId);

  try {
    if (cartProductToDelete) {
      const deletedCartProduct = await deleteProductFromCart(cartProductId);
      res.send({
        message: "Cart Product Has Been Deleted!",
        updatedCartProduct: deletedCartProduct,
      });
    } else {
      res.status(401);
      next({
        error: "CART_PRODUCT ID DOESN'T EXIST",
        message: `Cart Product ID of ${cartProductId} doesn't exist.`,
        name: "NoCartProductWithThatID",
      });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
