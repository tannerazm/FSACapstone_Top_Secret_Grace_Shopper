import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../style/Logout.css";

const Logout = ({
  setIsLoggedIn,
}) => {
  const navigate = useNavigate();
  async function handleYes(event) {
    event.preventDefault();
    setIsLoggedIn(false);
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("first_name");
    localStorage.removeItem("last_name");
    localStorage.removeItem("admin");
    navigate("/");
    alert("You have successfully logged out. Come back soon!")
  }

  async function handleNo(event) {
    event.preventDefault();
    navigate("/youraccount");
  }

  return (
    <motion.div
      className="LogoutContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <div className="LogoutHeader">Are You Sure You Want To Logout?</div>
      <div className="LogoutButtonContainer">
        <form onSubmit={handleYes}>
          <button className="LogoutButtons" type="submit">
            Yes
          </button>
        </form>
        <form onSubmit={handleNo}>
          <button className="LogoutButtons" type="submit">
            No
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Logout;
