import React, { useEffect, useState } from "react";
import SweaterImage from "./Photo/SweaterImage.jpg";
import { motion } from "framer-motion";
import "../style/Sweater.css";
import {
  createCart,
  createCartProducts,
  getAllProductsByCategory,
} from "../api";

const Sweater = ({ allProducts, setAllProducts, setCartSize, cartSize, productIdArray }) => {
  // function searchSweaterProducts(searchValue) {
  //     if (searchValue.length) {
  //       const data = allProducts.filter((item) => {
  //         return item.gender.toLowerCase().includes(searchValue.toLowerCase()) ||
  //           item.category.toLowerCase().includes(searchValue.toLowerCase()) ||
  //           item.description.toLowerCase().includes(searchValue.toLowerCase()) ||
  //           item.product_name.toLowerCase().includes(searchValue.toLowerCase()) ||
  //           item.size.toLowerCase().includes(searchValue.toLowerCase())
  //           ? true
  //           : false;
  //       });

  //       data.length > 0
  //         ? setProductFilteredData(data)
  //         : setProductFilteredData([]);
  //     }
  //   }

  //   useEffect(() => {
  //     searchSweaterProducts(searchProducts);
  //   }, [searchProducts]);

  useEffect(() => {
    async function getSweaterProducts() {
      try {
        const result = await getAllProductsByCategory("Sweater");
        const products = result.products;
        setAllProducts(products);
      } catch (error) {
        throw error;
      }
    }
    getSweaterProducts();
  }, []);

  return (
    <motion.div
      className="SweaterGrid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      {allProducts.map((element, idx) => {
        return (
          <div className="SweaterContainer" key={`Sweater ${idx}`}>
            <div>
              <b>{element.product_name}</b>
            </div>
            <img className="SweaterImage" src={SweaterImage} />
            <div className="SweaterInfoContainer">
              <div>
                <div>
                  <b>Gender: </b>
                  {element.gender}
                </div>
                <div>
                  <b>Category: </b>
                  {element.category}
                </div>
                <div>
                  <b>Size: </b>
                  {element.size}
                </div>
                <div>
                  <b>Price: </b>
                  {element.price}
                </div>
                <div>
                  <b>In Stock? </b>
                  {element.quantity_instock}
                </div>
                <p className="SweaterAbout">
                  <b>Description: </b>
                  {element.description}
                </p>
                <form
                  onSubmit={async (event) => {
                    event.preventDefault();
                    try {
                      const cart_id = localStorage.getItem("cartId");
                      const userId = localStorage.getItem("id");
                      const quantity = 1;
                      const newpurchased = false;
                      if (!cart_id) {
                        const createdCart = await createCart(
                          userId,
                          newpurchased
                        );
                        localStorage.setItem("cartId", createdCart.newCart.id);
                        localStorage.setItem(
                          "purchased",
                          createdCart.newCart.purchased
                        );
                        const cartId = localStorage.getItem("cartId");
                        await createCartProducts(
                          userId,
                          cartId,
                          element.id,
                          quantity,
                          element.price
                        );
                        if (localStorage.getItem('productIdArray')){
                          productIdArray = JSON.parse(localStorage.getItem('productIdArray'))
                          productIdArray.push(element.id);
                        } else {
                          productIdArray.push(element.id)
                        }
                        const jsonProductIdArray = JSON.stringify(productIdArray)
                        localStorage.setItem('productIdArray', jsonProductIdArray)
                      } else {
                        if (localStorage.getItem("productIdArray") && (JSON.parse(localStorage.getItem("productIdArray"))).includes(element.id)) {
                          alert(`You are attempting to add a product which is already in your cart. If you would like to update the quantity of ${element.product_name}, please do so in your cart.`);
                        } else {
                          await createCartProducts(
                            userId,
                            cart_id,
                            element.id,
                            quantity,
                            element.price
                            );
                            if (localStorage.getItem('productIdArray')){
                              productIdArray = JSON.parse(localStorage.getItem('productIdArray'))
                              productIdArray.push(element.id);
                            } else {
                              productIdArray.push(element.id)
                            }
                            const jsonProductIdArray = JSON.stringify(productIdArray)
                            localStorage.setItem('productIdArray', JSON.stringify(productIdArray))
                        }
                      }
                      setCartSize(cartSize + 1)
                    } catch (error) {
                      throw error;
                    }
                  }}
                >
                  <button className="SweaterButton">Add to Cart</button>
                </form>
              </div>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Sweater;
