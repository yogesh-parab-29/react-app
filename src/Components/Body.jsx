import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ResCardContainer from "./ResCardContainer";
import SortingButtonContainer from "./SortingButtonContainer";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <div className="mt-14 p-4">
        {/* <SearchBar /> */}
        <div className="flex items-center justify-center py-5">
          <div className="w-1/2 flex items-center align-middle text-center">
            <input
              type="text"
              className="border text-gray-800 w-5/6 px-5 py-3 rounded-l-full focus:outline-none focus:bg-slate-50 transition duration-500"
              placeholder="Type your text"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                console.log(e.target.value);
              }}
            />
            <button className="bg-gray-200 border-none w-1/6 p-3 rounded-r-full hover:bg-gray-300 focus:bg-gray-300 transition duration-500">
              <svg className="h-7 w-5 text-gray-500" viewBox="0 0 24 24">
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </svg>
            </button>
          </div>
        </div>
        <ResCardContainer title="Restaurants with online food delivery" />
      </div>
    </>
  );
};

export default Body;
