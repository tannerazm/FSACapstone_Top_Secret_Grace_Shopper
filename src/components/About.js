import React from "react";
import { motion } from "framer-motion";
import "../style/About.css";

const About = () => {
  return (
    <motion.div className="AboutContainer"
    initial={{opacity: 0}}
        animate={{opacity: 0.9}}
        transition={{duration: 0.5}}
    >
      <h1>About Us</h1>
      <br></br>
      <h2>Top Secret Shirts LA</h2>
      <br></br>
      <br></br>
      <h3>Lucas Maul:</h3>
      <p>Lorem Ipsum</p>
      <br></br>
      <br></br>
      <h3>Alia Taha:</h3>
      <p>Lorem Ipsum</p>
      <br></br>
      <br></br>
      <h3>Tanner Monaco:</h3>
      <p>Lorem Ipsum</p>
      <br></br>
      <br></br>
    </motion.div>
  );
};

export default About;
