import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="w-full px-8 py-3 flex justify-between items-center  shadow-md">
        <div className="">
          <span className=" font-bold text-[25px] font-crimson text-textdark">
            {/* <img src="public/logo.svg" alt="logo" /> */}
            Opnion
          </span>
        </div>
        <div className="text-gray-900 font-medium font-sans">
          <Link
            to="/register"
            className="transition-colors ring-offset-white font-medium text-sm px-3 bg-white border-slate-200 border rounded-md whitespace-nowrap justify-center items-center min-w-[80px] h-9 inline-flex ml-2 hover:bg-gray-100"
          >
            {" "}
            Register{" "}
          </Link>
          <Link
            to="/login"
            className="transition-colors ring-offset-white font-medium text-sm px-3 bg-white border-slate-200 border rounded-md whitespace-nowrap justify-center items-center min-w-[80px] h-9 inline-flex ml-2 hover:bg-gray-100"
          >
            {" "}
            Login{" "}
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
