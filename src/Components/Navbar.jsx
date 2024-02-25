import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector(store=> store.cart.items)
  console.log(cartItems);
  return (
    <>
      <div className="text-left">
        <Link to="/">
          <span className="mx-5">Home</span>
        </Link>
        <Link to="/about">
          <span className="mx-5">About Us</span>
        </Link>
        <Link to="/contact">
          <span className="mx-5">Contact us</span>
        </Link>
        <Link to="/cart">
          <span className="mx-5">Cart ({cartItems.length})</span>
        </Link>
        <span className="mx-5">{loggedInUser}</span>
      </div>
    </>
  );
};

export default Navbar;
