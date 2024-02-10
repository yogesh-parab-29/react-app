import React, { useState } from 'react';
import MenuDish from './MenuDish';

const MenuSection = ({ restaurant }) => {
  const [activeIndex, setActiveindex] = useState(false);
  const [categoryIndex, setCategoryIndex] = useState([]);
  const resTitle = restaurant?.card?.card?.title;
  const resItemCards = restaurant?.card?.card?.itemCards;
  const resCategories = restaurant?.card?.card?.categories;
  const handleToggle = (index) => {
    setActiveindex(!activeIndex);
    const isActive = categoryIndex.includes(index);
    const updateCategory = isActive ? categoryIndex.filter((item) => item !== index) : [...categoryIndex, index];
    setCategoryIndex(updateCategory);
  };
  return resCategories ? (
    <div className="text-2xl font-black border-b-4 my-4">
      <h1>{resTitle}</h1>
      {resCategories.map(({ title, itemCards }, index) => {
        return (
          <>
            <div
              className="flex justify-between items-center border-b py-2 cursor-pointer"
              onClick={() => {
                handleToggle(index);
              }}
            >
              <div className="text-base font-normal">
                {title} ({itemCards.length})
              </div>
              <div className={`h-4 w-4 ml-2 transition-transform duration-200 transform`}>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            {categoryIndex?.includes(index) &&
              itemCards.map((itemCard) => {
                return (
                  <div className="flex justify-between items-center py-8 border-b gap-x-2">
                    <MenuDish menuData={itemCard} />
                  </div>
                );
              })}
          </>
        );
      })}
    </div>
  ) : resTitle ? (
    <div
      className="text-2xl font-black pb-3 border-b-4 my-4 cursor-pointer"
      onClick={() => {
        handleToggle();
      }}
    >
      <div className="flex justify-between pb-2 items-center">
        <h1>{resTitle}</h1>
        <div className={`h-4 w-4 ml-2 transition-transform duration-200 transform`}>
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {activeIndex &&
        resItemCards.map((itemCard) => {
          return (
            <>
              <div className="flex justify-between items-center py-2">
                <MenuDish menuData={itemCard} />
                {/* <div className="text-base font-normal flex flex-col">
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
        </div> */}
              </div>
            </>
          );
        })}
    </div>
  ) : (
    <div></div>
  );
};

export default MenuSection;
