import React from "react";
import { useState } from "react";

const MenuContainer = ({ resData, resMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [activeIndex, setActiveIndex] = useState(false)
  const restaurantData = resData;
  const restaurantMenu = resMenu;
  // console.log(restaurantData, 101);
  // console.log(restaurantMenu, 102);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {restaurantMenu?.map((restaurant, index) => {
        const resTitle = restaurant?.card?.card?.title;
        const resCategories = restaurant?.card?.card?.categories;
        console.log(resTitle);
        return resCategories ? (
          <>
            <div className="text-2xl font-black pb-3 border-b-4 my-4">
              <h1>{resTitle}</h1>
              {resCategories.map(({ title, itemCards }) => {
                // const {info} = itemCards.card
                // console.log(info);
                console.log(title, itemCards);

                return (
                  <>
                    {/* <div className="text-2xl font-black pb-3 border-b-4 my-4">
                      <h1>Recommended</h1> */}
                    <div
                      className="flex justify-between items-center border-b py-2"
                      onClick={handleToggle}
                    >
                      <div className="text-base font-normal">{title}</div>
                      <div
                        className={`h-4 w-4 ml-2 transition-transform duration-200 transform`}
                      >
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>

                    {isOpen && (
                      <div className="flex justify-between items-center py-2">
                        <div className="text-base font-normal flex flex-col">
                          <p className="text-xs">Veg</p>
                          <h1>Dish title</h1>
                          <h3>price</h3>
                          <span className="text-xs text-slate-400">
                            description
                          </span>
                        </div>
                        <div className="text-base font-normal flex flex-col text-center relative">
                          <div className="h-24 w-28 overflow-hidden rounded-lg">
                            <img
                              className="w-full h-full object-cover"
                              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/l3htbd7pidp14iqg5p6q"
                            ></img>
                          </div>
                          <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-7 py-1 mt-3 shadow-md rounded-md bg-white font-bold text-green-500 border-slate-400 border">
                            Add
                          </div>
                        </div>
                      </div>
                    )}
                    {/* </div> */}
                  </>
                );
              })}
            </div>
          </>
        ) : (
          <div
            className="text-2xl font-black pb-3 border-b-4 my-4"
            onClick={handleToggle}
          >
            <div className="flex justify-between pb-2 items-center">
              <h1>{resTitle}</h1>
              <div
                className={`h-4 w-4 ml-2 transition-transform duration-200 transform`}
              >
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            {isOpen && (
              <div className="flex justify-between items-center py-2">
                <div className="text-base font-normal flex flex-col">
                  <p className="text-xs">Veg</p>
                  <h1>Dish title</h1>
                  <h3>price</h3>
                  <span className="text-xs text-slate-400">description</span>
                </div>
                <div className="text-base font-normal flex flex-col text-center relative">
                  <div className="h-24 w-28 overflow-hidden rounded-lg">
                    <img
                      className="w-full h-full object-cover"
                      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/l3htbd7pidp14iqg5p6q"
                    ></img>
                  </div>
                  <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-7 py-1 mt-3 shadow-md rounded-md bg-white font-bold text-green-500 border-slate-400 border">
                    Add
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default MenuContainer;
