import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./index.js";

const Home = () => {
  return (
    <>
      <Navbar />
      <p>Home Page</p>
      <Link to="/register"> Register </Link>
      <Link to="/login"> Login </Link>
    </>
  );
};

export default Home;
