import React, { useEffect, useState } from 'react';
import { RES_DATA_CDN_URL } from './common';

const useRestaurantData = (restaurantId) => {
  const [resData, setResData] = useState({});
  const [resMenuData, setResMenuData] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      const fetchData = await fetch(RES_DATA_CDN_URL + restaurantId.resId);
      const json = await fetchData.json();
      const restaurantData = json?.data?.cards[0]?.card?.card?.info;
      const menuData = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      setResData(restaurantData);
      setResMenuData(menuData);
    };
    fetchMenu();
  }, [restaurantId]);
  return { resData, resMenuData };
};

export default useRestaurantData;
