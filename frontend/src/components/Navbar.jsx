import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, isActive] = useState("");

  return (
    <>
      <nav className="w-full py-1 px-4 mt-3  flex justify-between items-center  ">
        <div className="">
          <span className="font-poppins font-bold text-purple-500 text-2xl">
            {" "}
            Opn
          </span>
          <span className="font-poppins font-bold text-red-500 text-2xl">
            ion
          </span>
        </div>
        <div className="text-gray-900 font-medium">
          <ul className="flex flex-row">
            <li className="mx-2">About Us</li>
            <li className="mx-2">Connect</li>
            <li className="mx-2">Home</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
