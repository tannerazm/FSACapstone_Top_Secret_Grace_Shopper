import React from "react";
import { motion } from "framer-motion";
import WhiteTeeShirtSpecial from "./Photo/WhiteTeeShirtSpecial.png";

const Home = () => {
  const token = localStorage.getItem("token");
  return (
    <motion.div
      className="ShowcaseHome"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        {!token ? (
          <>
            <a href="/register" className="loginSpecialImage">
              <img
                className="loginSpecialImage"
                src={WhiteTeeShirtSpecial}
                href="/register"
              />
            </a>
            <p className="loginSpecialText">
              You found the Top Secret Shirt! Click the shirt to receive 2% off
              your order. All you have to do is sign up.
            </p>
          </>
        ) : null}
      </div>
      <h2>THE ONLY RAD SUMMER CLOTHING BRAND</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </motion.div>
  );
};

export default Home;
