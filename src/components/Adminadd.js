import React, { useState } from "react";
import { createProduct } from "../api";
import AddImageIcon from "./Photo/AddImageIcon.png";
import "../style/Adminadd.css";

const Adminadd = () => {
  const [gender, setGender] = useState("Male");
  const [category, setCategory] = useState("Short_Sleeve");
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("Small");
  const [price, setPrice] = useState(0);
  const [quantityInStock, setQuantityInStock] = useState(0);

  async function handleSubmit(event) {
    event.preventDefault();
    await createProduct(
      gender,
      category,
      productName,
      description,
      size,
      price,
      quantityInStock
    );
    setGender("Male")
    setCategory("Short_Sleeve")
    setProductName("")
    setDescription("")
    setSize("Small")
    setPrice(0)
    setQuantityInStock(0)
  }

  return (
    <div className="AdminAddContainer">
      <span className="AddImageHeader">ADD IMAGE<img className="AddProductImage" src={AddImageIcon} /> </span>
      <br></br>
      <br></br>
      <div>
        <div className="AddProductHeader">
        Add Product BELOW
        </div>
        <br></br>
        <br></br>
        <form onSubmit={handleSubmit}>
          <label>
            Gender{" "}
            <select
              className="select"
              name="gender"
              id="select-gender"
              value={gender}
              onChange={(event) => {
                setGender(event.target.value);
              }}
            >
              <option>Mens</option>
              <option>Womens</option>
            </select>
          </label>
          <br></br>
          <br></br>
          <label>
            Category{" "}
            <select
              className="select"
              name="category"
              id="select-category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option>Short_Sleeve</option>
              <option>Long_Sleeve</option>
              <option>Sweater</option>
              <option>Hoodie</option>
            </select>
          </label>
          <br></br>
          <br></br>
          <label>
            Product_Name{" "}
            <input
              type="text"
              className="input"
              name="name"
              id="input-name"
              value={productName}
              onChange={(event) => setProductName(event.target.value)}
            />
          </label>
          <br></br>
          <br></br>
          <label>
            Description{" "}
            <input
              type="text"
              className="input"
              name="description"
              id="input-description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
          <br></br>
          <br></br>
          <label>
            Size{" "}
            <select
              className="select"
              name="size"
              id="select-size"
              value={size}
              onChange={(event) => setSize(event.target.value)}
            >
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>Extra_Large</option>
            </select>
          </label>
          <br></br>
          <br></br>
          <label>
            Price {" $"}
            <input
              type="number"
              className="select"
              name="gender"
              id="input-price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </label>
          <br></br>
          <br></br>
          <label>
            Quantity_InStock{" "}
            <input
              type="number"
              className="select"
              name="gender"
              id="input-quantity"
              value={quantityInStock}
              onChange={(event) => setQuantityInStock(event.target.value)}
            />
          </label>
          <br></br>
          <br></br>
          <button type="submit" className="AddProductButton">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default Adminadd;
