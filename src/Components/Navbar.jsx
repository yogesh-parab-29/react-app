import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="text-left">
        {/* <span className="mx-5">Search</span> */}
        <Link to="/"><span className="mx-5">Home</span></Link>
        {/* <span className="mx-5">Sign In </span> */}
        <Link to="/about"><span className="mx-5">About Us</span></Link>
        <Link to="/contact"><span className="mx-5">Contact us</span></Link>
        <span className="mx-5">Cart</span>
      </div>
    </>
  );
};

export default Navbar;
