import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, isActive] = useState("");
  
  return (
    <>
      <nav className="sm:px-16 px-6 w-full hidden lg-flex items-center mx-auto z-100 h-14 static">
        <div className="w-full md:flex justify-between items-center mx-auto text-dark_neutral400 dark:text-light_neutral200">
          
        </div>
       
      </nav>
    </>
  );
};

export default Navbar;
