import React from "react";
import { RES_IMG_CDN_URL } from "../utils/common";

const ResCard = ({ restaurant }) => {
  const { name, avgRating, sla, cuisines, areaName, cloudinaryImageId } =
    restaurant;
  return (
    <>
      <div className="w-56 h-64 ">
        <div className="w-full h-1/2 overflow-hidden rounded-xl shadow-md ">
          <img
            className="w-full h-full object-cover"
            src={RES_IMG_CDN_URL + cloudinaryImageId}
            // + res.cloudinaryImageId
          ></img>
        </div>
        <h1 className="font-bold w-10/12 mx-auto truncate mt-4">{name}</h1>
        <div className="flex w-10/12 mx-auto my-1 text-sm">
          <span className="">{avgRating}</span>
          <span>{sla.deliveryTime} mins</span>
        </div>
        <div className="truncate w-10/12 mx-auto text-sm">
          {cuisines.join(", ")}
        </div>
        <div className="w-10/12 mx-auto text-sm">{areaName}</div>
      </div>
    </>
  );
};

export default ResCard;
