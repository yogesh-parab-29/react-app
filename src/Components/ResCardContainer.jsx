import React, { useEffect, useState } from 'react';
import ResCard from './ResCard';
import Buttons from './Buttons';
import Shimmercard from './Shimmercard';
import { Link } from 'react-router-dom';

const ResCardContainer = ({ title }) => {
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0842228&lng=72.87959359999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING',
    );
    const data = await response.json();
    const resData = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurantData(resData);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center relative">
        <h1 className="text-3xl font-bold mb-6">{title}</h1>
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 border-t-2 border-gray-100 w-3/4"></div>

        <div className="overflow-x-auto py-3">
          <div className="flex space-x-4">
            <button
              className="border-2 px-4 py-2 rounded-xl flex-shrink-0"
              onClick={() => {
                const filteredData = restaurantData.filter((res) => res.info.avgRating > 4.3);
                setRestaurantData(filteredData);
              }}
            >
              Ratings 4.0+
            </button>
          </div>
        </div>

        <div className="w-3/4 flex flex-wrap mx-2 my-5 justify-start gap-y-8">
          {restaurantData.length === 0
            ? [...Array(9)].map((_, index) => {
                return <Shimmercard key={index} />;
              })
            : restaurantData.map((res, index) => (
                <Link key={res.info.id} to={'/restaurant/' + res.info.id} className={(index + 1) % 4 !== 0 ? 'mr-8' : ''}>
                  <ResCard restaurant={res.info} />
                </Link>
              ))}
        </div>
      </div>
    </>
  );
};

export default ResCardContainer;
