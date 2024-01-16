import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <p>Home Page</p>
      <Link to="/register"> Register </Link>
      <Link to="/login"> Login </Link>
    </>
  );
};

export default Home;
