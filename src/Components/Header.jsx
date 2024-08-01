import React, { useContext } from "react";
import Navbar from "./Navbar";
import UserContext from "../utils/userContext";
const Header = () => {
  const { loggedInUser, setUserName } = useContext(UserContext);
  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white z-50">
        <div className="flex justify-between px-10 py-5 shadow-md">
          <div>
            Logo
            <input
              type="text"
              className="border rounded-lg w-12 px-3 mx-3"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default Header;
