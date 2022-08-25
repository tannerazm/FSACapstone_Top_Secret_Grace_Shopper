import React from "react";
import { motion } from "framer-motion";
import ProfileIconAccPage from "./Photo/ProfileIconAccPage.png";
import ShortSleeve from "./Photo/ShortSleeveImage.jpg";
import LongSleeve from "./Photo/LongSleeveImage.jpg";
import HoodieImage from "./Photo/HoodieImage.jpg";
import SweaterImage from "./Photo/SweaterImage.jpg";
import "../style/Myorders.css";

const Myorders = () => {
  return (
    <motion.div
      className="MyOrdersContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <div className="MyOrdersHeader">My Orders</div>
      <div className="MyOrdersContainerLeft">
        <div>First & Last Name</div>
        <img className="MyOrdersPic" src={ProfileIconAccPage} />
      </div>
      <div className="MyOrdersContainerRight">
          <div className="OrderDetails">
            <div className="OrderDetailsHeader">Order Details</div>
            <div className="OrderDetailsInfo">Price: $$$</div>
            <div className="OrderDetailsInfo">Order Quantity: N/A</div>
            <div className="OrderDetailsInfo">Expected Delivery: N/A</div>
          </div>
          <div className="SingleOrderContainer">
          <div className="ProductContainer">
            <div>
              <img className="ProductImages" src={HoodieImage} />
            </div>
            <div className="ProductInfo">
              <div className="ProductText">Price: $$$</div>
              <div className="ProductText">Size: N/A</div>
              <div className="ProductText">Color: N/A</div>
            </div>
          </div>
          <div className="ProductContainer">
            <div>
              <img className="ProductImages" src={ShortSleeve} />
            </div>
            <div className="ProductInfo">
              <div className="ProductText">Price: $$$</div>
              <div className="ProductText">Size: N/A</div>
              <div className="ProductText">Color: N/A</div>
            </div>
          </div>
          <div className="ProductContainer">
            <div>
              <img className="ProductImages" src={LongSleeve} />
            </div>
            <div className="ProductInfo">
              <div className="ProductText">Price: $$$</div>
              <div className="ProductText">Size: N/A</div>
              <div className="ProductText">Color: N/A</div>
            </div>
          </div>
          </div>
          <div className="OrderDetails">
            <div className="OrderDetailsHeader">Order Details</div>
            <div className="OrderDetailsInfo">Price: $$$</div>
            <div className="OrderDetailsInfo">Order Quantity: N/A</div>
            <div className="OrderDetailsInfo">Expected Delivery: N/A</div>
          </div>
          <div className="SingleOrderContainer">
          <div className="ProductContainer">
            <div>
              <img className="ProductImages" src={ShortSleeve} />
            </div>
            <div className="ProductInfo">
              <div className="ProductText">Price: $$$</div>
              <div className="ProductText">Size: N/A</div>
              <div className="ProductText">Color: N/A</div>
            </div>
          </div>
          <div className="ProductContainer">
            <div>
              <img className="ProductImages" src={SweaterImage} />
            </div>
            <div className="ProductInfo">
              <div className="ProductText">Price: $$$</div>
              <div className="ProductText">Size: N/A</div>
              <div className="ProductText">Color: N/A</div>
            </div>
          </div>
        </div>
          <div className="OrderDetails">
            <div className="OrderDetailsHeader">Order Details</div>
            <div className="OrderDetailsInfo">Price: $$$</div>
            <div className="OrderDetailsInfo">Order Quantity: N/A</div>
            <div className="OrderDetailsInfo">Expected Delivery: N/A</div>
          </div>
          <div className="SingleOrderContainer">
          <div className="ProductContainer">
            <div>
              <img className="ProductImages" src={HoodieImage} />
            </div>
            <div className="ProductInfo">
              <div className="ProductText">Price: $$$</div>
              <div className="ProductText">Size: N/A</div>
              <div className="ProductText">Color: N/A</div>
            </div>
          </div>
          </div>
          <div className="OrderDetails">
            <div className="OrderDetailsHeader">Order Details</div>
            <div className="OrderDetailsInfo">Price: $$$</div>
            <div className="OrderDetailsInfo">Order Quantity: N/A</div>
            <div className="OrderDetailsInfo">Expected Delivery: N/A</div>
          </div>
          <div className="SingleOrderContainer">
          <div className="ProductContainer">
            <div>
              <img className="ProductImages" src={LongSleeve} />
            </div>
            <div className="ProductInfo">
              <div className="ProductText">Price: $$$</div>
              <div className="ProductText">Size: N/A</div>
              <div className="ProductText">Color: N/A</div>
            </div>
          </div>
          </div>
      </div>
    </motion.div>
  );
};

export default Myorders;
