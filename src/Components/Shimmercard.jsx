import React from "react";

const Shimmercard = () => {
  return (
    <>
      <div className="w-56 h-64 animate-pulse">
        <div className="w-full h-1/2 overflow-hidden rounded-xl shadow-md bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300">
          <img
            className="w-full h-full object-cover"
            // + res.cloudinaryImageId
          ></img>
        </div>
        <h1 className="font-bold w-10/12 h-4 rounded-xl mx-auto truncate mt-4 mb-2 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300"></h1>
        <div className="flex w-10/12 mx-auto my-1 text-sm">
          <span className=" w-24 h-2 rounded-xl bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 mr-4"></span>
          <span className="w-20 h-2 rounded-xl bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300"></span>
        </div>
        <div className="truncate rounded-xl w-10/12 mx-auto text-sm h-2 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 mb-2"></div>
        <div className="w-10/12 mx-auto rounded-xl h-2 text-sm bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300"></div>
      </div>
    </>
  );
};

export default Shimmercard;
