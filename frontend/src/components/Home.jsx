import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Card , Footer } from "./index.js";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-start items-center  pt-[5%]">
        <h1 className="text-5xl leading-[1.3] font-extrabold text-center text-textdark font-poppins w-1/2 tracking-wider">
          Fuel your{" "}
          <span className=" bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            social
          </span>{" "}
          journey with Opnion's boundless{" "}
          <span className="  bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            connectivity.
          </span>
        </h1>
        <p className="text-slate-500 mt-10 block font-poppins text-[18px] h-14 mx-40 text-center w-[60%]">
          Embark on an exhilarating journey of connection and discovery with
          Opnion - the ultimate platform for sharing your story and shaping the
          conversation!
        </p>

        <button className="md:mb-0 transition-colors ring-offset-white text-slate-50 font-medium text-sm px-8 py-3 bg-slate-900 rounded-md whitespace-nowrap justify-center items-center h-11 inline-flex hover:bg-gray-800 mt-10">
          Let's Connect
        </button>
      </div>
      <div className="container py-20 lg:py-24 2xl:py-32  px-16">
        <p className="text-slate-500 font-poppins text-start text-[14px] mb-4">
          Unlock a{" "}
          <span className="font-bold text-textdark text-[16px]">
            world of innovation
          </span>{" "}
          and explore the diverse{" "}
          <span className="font-bold text-textdark text-[16px]">
            range of exciting features
          </span>{" "}
          awaiting you.
        </p>
        <Card />
      </div>
      <Footer />
    </>
  );
};

export default Home;
