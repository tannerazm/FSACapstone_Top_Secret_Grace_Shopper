import React, { useState, useEffect } from "react";
import { deleteProduct, getAllProducts } from "../api";
import UpdateProductForm from "./UpdateProductForm";

import "../style/Adminupdateproduct.css";

const Adminupdateproduct = ({ allProducts, setAllProducts }) => {
  const [productFilteredData, setProductFilteredData] = useState([]);
  const [searchProducts, setSearchProducts] = useState("");
  const [showUpdateAllProductsForm, setShowUpdateAllProductsForm] =
    useState(null);
  const [showUpdateFilteredProductsForm, setShowUpdateFilteredProductsForm] =
    useState(null);
    const [updatedAllProducts, setUpdatedAllProducts] = useState([])

  function searchYourProducts(searchValue) {
    if (searchValue.length) {
      const data = allProducts.filter((item) => {
        return item.gender.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.category.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.description.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.product_name.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.size.toLowerCase().includes(searchValue.toLowerCase())
          ? true
          : false;
      });

      data.length > 0
        ? setProductFilteredData(data)
        : setProductFilteredData([]);
    }
  }

  useEffect(() => {
    searchYourProducts(searchProducts);
  }, [searchProducts]);

  useEffect(() => {
    async function getTheProducts() {
      try {
        const result = await getAllProducts();
        const products = result.products;
        setAllProducts(products);
      } catch (error) {
        throw error;
      }
    }
    getTheProducts();
  }, [updatedAllProducts]);

  return (
    <div className="AdminUpdateContainer">
      <div className="SearchContainer">
      <input
        id="searchYourProductsInput"
        name="search-products"
        type="text"
        value={searchProducts}
        placeholder="Search Your Products..."
        onChange={(event) => {
          setSearchProducts(event.target.value);
        }}
      />
      </div>
      <div className="UpdateGrid">
        {productFilteredData.length > 0
          ? productFilteredData.map((element, idx) => {
              return (
                <div className="UpdateMapContainer" key={`Filtered ${idx}`}>
                  <div>
                    <div className="TextPadding">
                      <b>Gender: </b>
                      {element.gender}
                    </div>
                    <div className="TextPadding">
                      <b>Category: </b>
                      {element.category}
                    </div>
                    <div className="TextPadding">
                      <b>Product_Name: </b> {element.product_name}
                    </div>
                    <div className="TextPadding">
                      <b>Description: </b> {element.description}
                    </div>
                    <div className="TextPadding">
                      <b>Size: </b> {element.size}
                    </div>
                    <div className="TextPadding">
                      <b>Price: </b> {element.price}
                    </div>
                    {element.availability ? (
                      <div className="TextPadding">
                        <b>Availability:</b> True{" "}
                      </div>
                    ) : (
                      <div className="TextPadding">
                        <b>Availability:</b> False{" "}
                      </div>
                    )}
                    <div className="TextPadding">
                      <b>Quantity_InStock: </b>
                      {element.quantity_instock}
                    </div>
                  </div>
                  <br></br>
                  <br></br>
                  <div>
                    {showUpdateFilteredProductsForm != element.id ? (
                      <>
                        <button
                          onClick={() => {
                            setShowUpdateFilteredProductsForm(element.id);
                          }}
                        >
                          Update
                        </button>
                      </>
                    ) : (
                      <>
                        <UpdateProductForm element={element} setUpdatedAllProducts={setUpdatedAllProducts} allProducts={allProducts} />
                        <button
                          onClick={() => {
                            setShowUpdateFilteredProductsForm(null);
                          }}
                        >
                          Cancel
                        </button>
                      </>
                    )}
                  </div>
                  <br></br>
                  <br></br>
                  <form
                    onSubmit={async (event) => {
                      event.preventDefault();
                      await deleteProduct(element.id);
                      setUpdatedAllProducts(allProducts)
                    }}
                  >
                    <button type="submit">Delete Product</button>
                  </form>
                  <br></br>
                  <br></br>
                </div>
              );
            })
          : allProducts.map((element, idx) => {
              return (
                <div className="UpdateMapContainer" key={`Products ${idx}`}>
                  <div>
                    <div className="TextPadding">
                      <b>Gender: </b>
                      {element.gender}
                    </div>
                    <div className="TextPadding">
                      <b>Category: </b>
                      {element.category}
                    </div>
                    <div className="TextPadding">
                      <b>Product_Name: </b> {element.product_name}
                    </div>
                    <div className="TextPadding">
                      <b>Description: </b> {element.description}
                    </div>
                    <div className="TextPadding">
                      <b>Size: </b> {element.size}
                    </div>
                    <div className="TextPadding">
                      <b>Price: </b> {element.price}
                    </div>

                    {element.availability ? (
                      <div className="TextPadding">
                        <b>Availability:</b> True{" "}
                      </div>
                    ) : (
                      <div className="TextPadding">
                        <b>Availability:</b> False{" "}
                      </div>
                    )}

                    <div className="TextPadding">
                      <b>Quantity_InStock: </b>
                      {element.quantity_instock}
                    </div>
                  </div>
                  <div>
                    {showUpdateAllProductsForm != element.id ? (
                      <>
                        <button
                          onClick={() => {
                            setShowUpdateAllProductsForm(element.id);
                          }}
                        >
                          Update
                        </button>
                      </>
                    ) : (
                      <>
                        <UpdateProductForm element={element} setUpdatedAllProducts={setUpdatedAllProducts} allProducts={allProducts} />
                        <button
                          onClick={() => {
                            setShowUpdateAllProductsForm(null);
                          }}
                        >
                          Cancel
                        </button>
                      </>
                    )}
                  </div>
                  <br></br>
                  <br></br>
                  <form
                    onSubmit={async (event) => {
                      event.preventDefault();
                      await deleteProduct(element.id);
                      setUpdatedAllProducts(allProducts)
                    }}
                  >
                    <button type="submit">Delete Product</button>
                  </form>
                  <br></br>
                  <br></br>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Adminupdateproduct;
