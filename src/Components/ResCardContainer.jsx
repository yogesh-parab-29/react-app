import React, { useEffect, useState } from "react";
import ResCard from "./ResCard";
import Buttons from "./Buttons";
import Shimmercard from "./Shimmercard";
import { Link } from "react-router-dom";

const ResCardContainer = ({ title }) => {
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0842228&lng=72.87959359999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    const resData =
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    // console.log(restaurantData,"!!");
    setRestaurantData(resData);
  };

  return (
    <>
      {/* <div className="flex justify-evenly">
        <div className="overflow-x-auto py-3 ">
          <div className="flex space-x-4">
            <Buttons btnName="Filter" />
            <Buttons btnName="Sort By" />
            <Buttons btnName="Fast Delivery" />
            <Buttons btnName="New on Swiggy" />
            <Buttons btnName="Ratings 4.0+" />
            <Buttons btnName="Pure Veg" />
            <Buttons btnName="Offers" />
            <Buttons btnName="Rs 300-600" />
            <Buttons btnName="Less than Rs 300" />
          </div>
        </div>
        <div className="w-3/4 flex flex-wrap mx-2 my-5 justify-between gap-y-8">
          {restaurantData.map((res) => (
            <ResCard key={res.info.id} restaurant={res.info} />
          ))}
        </div>
      </div> */}

      <div className="flex flex-col items-center justify-center relative">
        {/* Text at the top */}
        <h1 className="text-3xl font-bold mb-6">{title}</h1>
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 border-t-2 border-gray-100 w-3/4"></div>

        {/* Filter buttons */}
        <div className="overflow-x-auto py-3">
          <div className="flex space-x-4">
            {/* <Buttons btnName="Filter" />
            <Buttons btnName="Sort By" />
            <Buttons btnName="Fast Delivery" />
            <Buttons btnName="New on Swiggy" />
            <Buttons btnName="Ratings 4.0+" />
            <Buttons btnName="Pure Veg" />
            <Buttons btnName="Offers" />
            <Buttons btnName="Rs 300-600" />
            <Buttons btnName="Less than Rs 300" /> */}
            <button
              className="border-2 px-4 py-2 rounded-xl flex-shrink-0"
              onClick={() => {
                const filteredData = restaurantData.filter(
                  (res) => res.info.avgRating > 4.5
                );
                console.log(Array.isArray(restaurantData));
                console.log(Object.values(restaurantData));
                console.log(filteredData);
                setRestaurantData(filteredData);
              }}
            >
              {/* {btnName} */}
              Ratings 4.0+
            </button>
          </div>
        </div>

        {/* Group of cards */}
        {/* {restaurantData.length === 0 ? (
          [...Array(9)].map(() => {
            return <Shimmercard />;
          })
        ) : ( */}
        <div className="w-3/4 flex flex-wrap mx-2 my-5 justify-between gap-y-8">
          {restaurantData.length === 0
            ? [...Array(9)].map((_, index) => {
                console.log(index);
                return <Shimmercard key={index} />;
              })
            : restaurantData.map((res) => (
                // <Link to="">
                  <ResCard key={res.info.id} restaurant={res.info} />
                // </Link>
              ))}
        </div>
        {/* )} */}
      </div>
    </>
  );
};

export default ResCardContainer;
