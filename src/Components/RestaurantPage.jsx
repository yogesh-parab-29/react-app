import { useEffect, useState } from 'react';
import MenuContainer from './MenuContainer';
import Shimmercard from './Shimmercard';
import { useParams } from 'react-router-dom';
import useRestaurantData from '../utils/useRestaurantData';

const RestaurantPage = () => {
  const restaurantId = useParams();
  const { resData, resMenuData } = useRestaurantData(restaurantId);
  const { name, cuisines, city, avgRating, totalRatings } = resData;
  // useEffect(() => {
  //   const fetchMenu = async () => {
  //     const fetchData = await fetch(RES_DATA_CDN_URL + restaurantId.resId);
  //     const json = await fetchData.json();
  //     const restaurantData = json?.data?.cards[0]?.card?.card?.info;
  //     const menuData = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  //     setResData(restaurantData);
  //     setResMenuData(menuData);
  //   };
  //   fetchMenu();
  // }, []);
  return (
    <>
      {Object.keys(resData).length === 0 ? (
        [...Array(9)].map((_, index) => {
          return <Shimmercard key={index} />;
        })
      ) : (
        <div className="mt-14 h-auto flex justify-center">
          <div className="w-3/5 py-8 m-3">
            <div className="flex flex-col mb-10 ">
              <div className="w-full flex justify-between mb-4">
                <div className="basis-4/5">
                  <div className=" text-2xl font-extrabold mb-1">{name}</div>
                  <div className=" text-sm ">{cuisines?.join(', ')}</div>
                  <div className=" text-sm ">{city}</div>
                </div>
                <div className="basis-1/5">
                  <div className=" mx-8 py-2 flex flex-col border justify-center text-center">
                    <span className="px-2 ">{avgRating}</span>
                    <span className="text-xs px-2">{totalRatings / 1000}K+ ratings</span>
                  </div>
                </div>
              </div>
              <div className="w-full items-center pb-4 mb-2 border-b border-dashed">
                <span>0.8 kms</span> <span className=""> | </span> 38 delivery fee will apply
              </div>
              <div className="mb-4">22 mins | 350 for 2</div>
              <MenuContainer resData={resData} resMenu={resMenuData} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantPage;
