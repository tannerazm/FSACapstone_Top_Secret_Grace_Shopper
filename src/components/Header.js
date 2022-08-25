import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { getAllCartProductsByCartId } from "../api";
import WhiteSearchIcon from "./Photo/WhiteSearchIcon.png";
import GreySearchIcon from "./Photo/GreySearchIcon.png";
import MenuIcon from "./Photo/HeaderMenuIcon.png";
import CancelMenuIcon from "./Photo/CancelMenuIcon.png";
import CartMenuIcon from "./Photo/CartMenuIcon.png";
import "../style/Header.css";

const Header = ({ isLoggedIn, setIsLoggedIn, allCartProducts, setAllCartProducts, cartSize, setCartSize }) => {
  const ref = useRef(null);
  const reftwo = useRef(null);
  const [hideMenu, setHideMenu] = useState(true);
  const [hideAccountMenu, setHideAccountMenu] = useState(true);
  const [hideSearch, setHideSearch] = useState(false);

  //   window.onload = function () {
  //     const hamburgerDisplay = document.querySelector(".hamburger");
  //     const ContainerMenuDisplay = document.querySelector(".ContainerMenu");
  //     hamburgerDisplay.addEventListener("click", function () {
  //       hamburgerDisplay.classList.toggle("is-active");
  //       ContainerMenuDisplay.classList.toggle("is-active");
  //     });
  //   };

  function menuShowFunc() {
    setHideMenu(false);
  }

  function menuHideFunc() {
    setHideMenu(true);
  }

  function hideMagGlass() {
    setHideSearch(false);
  }

  function showMagGlass() {
    setHideSearch(true);
  }

  function accMenuShowFunc() {
    setHideAccountMenu(false);
  }

  function accMenuHideFunc() {
    setHideAccountMenu(true);
  }
  
  useEffect(() => {
    try {
      const token = localStorage.getItem("token")
      if (token) {
        async function getCartProductsByCartId() {
          const cartId = localStorage.getItem("cartId");
          const cartProducts = await getAllCartProductsByCartId(cartId);
          setAllCartProducts(cartProducts.cart_productsbyid);
        }
        getCartProductsByCartId();
      }
    } catch (error) {
      throw error;
    }
  }, [cartSize]);

  return (
    <div className="Header">
      <NavLink to='/' className="HeaderTitle">TOP SECRET SHIRTS LA</NavLink>
      {!hideSearch ? (
        <img
          src={WhiteSearchIcon}
          id="WhiteMagnifyingGlass"
          onClick={showMagGlass}
        />
      ) : (
        <>
          <div className="searchDiv">
            <input
              type="search"
              id="searchBar"
              placeholder="Search inventory..."
            />
            <label for="search">
              <img src={GreySearchIcon} id="GreyMagnifyingGlass" />
              <img
                src="https://cdn-icons.flaticon.com/png/512/2997/premium/2997911.png?token=exp=1660229420~hmac=c55efdbb55bb38520c1e0bcd5d56dfff"
                id="xIconSearch"
                onClick={hideMagGlass}
              />
            </label>
          </div>
        </>
      )}
      <NavLink to="/cartpage" className="MenuIcon">
        <img src={CartMenuIcon} />
        <p className="CartCounter">{allCartProducts.length}</p>
      </NavLink>
      <div className="Container">
        {hideMenu ? (
          <button className="MenuIcon" onClick={menuShowFunc}>
            <img src={MenuIcon} />
          </button>
        ) : (
          <>
            <button className="MenuIcon" onClick={menuHideFunc}>
              <img src={CancelMenuIcon} />
            </button>
            <motion.div
              className="ContainerMenu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {!isLoggedIn ? (
                <>
                  <div>
                    <NavLink to="/login">Login</NavLink>
                  </div>
                  <div>
                    <NavLink to="/register">Register</NavLink>
                  </div>
                  <div>
                    <NavLink to="/">Home</NavLink>
                  </div>
                  <div>
                    <NavLink to="/shop">Shop</NavLink>
                  </div>
                  <div>
                    <NavLink to="/about">About</NavLink>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <NavLink to="/">Home</NavLink>
                  </div>
                  <div>
                    <NavLink to="/shop">Shop</NavLink>
                  </div>
                  <div>
                    <NavLink to="/about">About</NavLink>
                  </div>
                  <div>
                    <NavLink to="/youraccount">Your Account</NavLink>
                  </div>
                </>
              )}
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
