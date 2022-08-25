import React, { useState } from "react";
import { updateProduct } from "../api";
import "../style/Updateproductform.css";


const UpdateProductForm = ({ element, setUpdatedAllProducts, allProducts }) => {
  const [gender, setGender] = useState("Male");
  const [category, setCategory] = useState("Short_Sleeve");
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("Small");
  const [price, setPrice] = useState(0);
  const [quantityInStock, setQuantityInStock] = useState(0);
  const [availabilityStr, setAvailabilityStr] = useState('True');
  const [availabilityBoolean, setAvailabilityBoolean] = useState(true)

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await updateProduct(
        element.id,
        gender,
        category,
        productName,
        description,
        size,
        price,
        availabilityBoolean,
        quantityInStock
      );
      setUpdatedAllProducts(allProducts)
    } catch (error) {
      throw error;
    }
  }

  return (
    <>
      <div className="UpdateProductHeader">Update Product BELOW</div>
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit} className="UpdateForm">
        <label>
          Gender{" "}
          <select
            className="Updateselect"
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
            className="Updateselect"
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
            className="Updateinput"
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
            className="Updateinput"
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
            className="Updateselect"
            name="size"
            id="select-size"
            value={size}
            onChange={(event) => setSize(event.target.value)}
          >
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>Extra Large</option>
          </select>
        </label>
        <br></br>
        <br></br>
        <label>
          Price {" $ "}
          <input
            type="number"
            className="Updateselect"
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
            className="Updateselect"
            name="gender"
            id="input-quantity"
            value={quantityInStock}
            onChange={(event) => setQuantityInStock(event.target.value)}
          />
        </label>
        <br></br>
        <br></br>
        <label>
          Available? {" "}
          <select
            className="Updateselect"
            name="size"
            id="select-size"
            value={availabilityStr}
            onChange={(event) => {
                setAvailabilityStr(event.target.value)
                if (availabilityStr === "False") {
                    setAvailabilityBoolean(true)
                  }
                if (availabilityStr === "True") {
                    setAvailabilityBoolean(false)
                  }
            }
            }
          >
            <option>True</option>
            <option>False</option>
          </select>
        </label>
        <br></br>
        <br></br>
        <button type="submit" className="UpdateProductButton">
          Update Product
        </button>
      </form>
    </>
  );
};

export default UpdateProductForm;
