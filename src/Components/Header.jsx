import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Header = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white z-50">
        <div className="flex justify-between px-10 py-5 shadow-md">
          <div>Logo</div>
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default Header;
