import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./index.js";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-5xl font-bold mb-8 text-gray-900 dark:text-white">
          Welcome to <span className="text-red-500">Opnion</span>.
        </h1>
        <div className="flex flex-row gap-6">
          <Link to="/register"> Register </Link>
          <Link to="/login"> Login </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
