import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "../style/Youraccount.css";

const Youraccount = () => {
  const admin = localStorage.getItem('admin')
  
    return (
        <motion.div
        className="YourAccContainer"
        initial={{opacity: 0}}
        animate={{opacity: 0.9}}
        transition={{duration: 0.5}}
      >
        <div>
          <NavLink to="/myorders">My Orders</NavLink>
        </div>
        <div>
          <NavLink to="/accountsettings">Account Settings</NavLink>
        </div>
        <div>
          <NavLink to="/logout">Logout</NavLink>
        </div>
        {
        admin === 'true' ?
        <div>
          <NavLink to="/admin">Admin</NavLink>
        </div>
        :
        null
        }
      </motion.div>
    )
}

export default Youraccount