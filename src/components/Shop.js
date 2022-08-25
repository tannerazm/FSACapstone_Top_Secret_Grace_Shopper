import React from "react";
import { NavLink } from "react-router-dom";
import ShortSleeve from "./Photo/ShortSleeveImage.jpg"
import LongSleeve from "./Photo/LongSleeveImage.jpg"
import Hoodie from "./Photo/HoodieImage.jpg"
import Sweater from "./Photo/SweaterImage.jpg"
import { motion } from "framer-motion";
import "../style/Shop.css";


const Shop = () => {
    return (
        <motion.div className="ShopGrid"
        initial={{opacity: 0}}
        animate={{opacity: 0.9}}
        transition={{duration: 0.5}}
        >
                <NavLink to="/shortsleeve">
                    <div className="ShopContainer">
                    <img className="Image" src={ShortSleeve} />
                    <div className="HeaderCenter">Short Sleeve</div>
                    </div>
                </NavLink>
                <NavLink to="/longsleeve">
                    <div className="ShopContainer">
                    <img className="Image" src={LongSleeve} />
                    <div className="HeaderCenter">Long Sleeve</div>
                    </div>
                </NavLink>
                <NavLink to="/hoodie">
                    <div className="ShopContainer">
                    <img className="Image" src={Hoodie} />
                    <div className="HeaderCenter">Hoodie</div>
                    </div>
                </NavLink>
                <NavLink to="/sweater">
                    <div className="ShopContainer">
                    <img className="Image" src={Sweater} />
                    <div className="HeaderCenter">Sweater</div>
                    </div>
                </NavLink>
        </motion.div>
    )
}

export default Shop
