import React, { useState } from "react";
import { motion } from "framer-motion";
import { loginPerson } from "../api";
import "../style/Login.css";
import { useNavigate, NavLink } from "react-router-dom";

const Login = ({
  setIsLoggedIn,
  username,
  password,
  setUsername,
  setPassword,
}) => {
  const navigate = useNavigate();

  const [hidePassword, setHidePassword] = useState(true);
  const [passwordType, setPasswordType] = useState("password");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const loggedInUser = await loginPerson(username, password);
      if (loggedInUser) {
        // localStorage.setItem("token", token);
        setIsLoggedIn(true);
        alert("You have successfully logged in! Welcome to Top Secret Shirts LA!")
        setUsername("");
        setPassword("");
        // navigate("/userRoutines");
        navigate("/");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  function showPasswordFunc() {
    setHidePassword(false);
    setPasswordType("text");
  }

  function hidePasswordFunc() {
    setHidePassword(true);
    setPasswordType("password");
  }

  return (
    <motion.div
      className="LoginContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h1 className="LoginHeader">Login</h1>
      </div>
      <form onSubmit={handleSubmit} className="LoginForm">
        <label>
          <input
            className="LoginInput"
            name="Username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </label>
        <br></br>
        <br></br>
        <label>
          <input
            className="LoginInput"
            id="LoginPasswordInput"
            name="Password"
            type={passwordType}
            placeholder="Password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </label>
        <br></br>
        <br></br>
        <button className="LoginButton" type="submit">
          Login
        </button>
        <br></br>
        <br></br>
        <NavLink id="LoginButton" className="RegisterInsteadButton" to="/register">
          Not a Member Yet? Register.
        </NavLink>
      </form>
      {hidePassword ? (
        <button
          id="LoginButton"
          className="ShowPasswordButton"
          onClick={showPasswordFunc}
        >
          Show Password
        </button>
      ) : (
        <button
          id="LoginButton"
          className="ShowPasswordButton"
          onClick={hidePasswordFunc}
        >
          Hide Password
        </button>
      )}
    </motion.div>
  );
};

export default Login;
