import React, { useEffect, useState } from "react";
// getAPIHealth is defined in our axios-services directory index.js
// you can think of that directory as a collection of api adapters
// where each adapter fetches specific info from our express server's /api route
// import { getAPIHealth } from "../axios-services";
import "../style/App.css";
import SunnyDays from "./video/SunnyDays.mp4";
import { Header, Footer, AnimatedRoutes } from "./";

const App = () => {
  // const [APIHealth, setAPIHealth] = useState("");

  // useEffect(() => {
  //   // follow this pattern inside your useEffect calls:
  //   // first, create an async function that will wrap your axios service adapter
  //   // invoke the adapter, await the response, and set the data
  //   const getAPIStatus = async () => {
  //     const { healthy } = await getAPIHealth();
  //     setAPIHealth(healthy ? 'api is up! :D' : 'api is down :/');
  //   };

  //   // second, after you've defined your getter above
  //   // invoke it immediately after its declaration, inside the useEffect callback
  //   getAPIStatus();
  // }, []);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [allCartProducts, setAllCartProducts] = useState([]);
  const [cartSize, setCartSize] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <div className="Showcase">
      <video muted loop autoPlay>
        <source src={SunnyDays} type="video/mp4" />
      </video>
      <div className="ShowcaseOverlay"></div>
      <div className="ShowcaseHeader">
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} allCartProducts={allCartProducts} setAllCartProducts={setAllCartProducts} cartSize={cartSize} setCartSize={setCartSize} />
      </div>
      <div className="ShowcaseFooter">
        <Footer />
      </div>
      <AnimatedRoutes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} allCartProducts={allCartProducts} setAllCartProducts={setAllCartProducts} cartSize={cartSize} setCartSize={setCartSize}/>
    </div>
  );
};

export default App;

{
  /* <div className="app-container">
      <h1>Hello, World!</h1>
      <p>API Status: {APIHealth}</p>
    </div> */
}
