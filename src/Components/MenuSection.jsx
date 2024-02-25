import React, { useState } from "react";
import MenuDish from "./MenuDish";

const MenuSection = ({ restaurant }) => {
  const [activeIndex, setActiveindex] = useState(false);
  const [categoryIndex, setCategoryIndex] = useState([]);
  const resTitle = restaurant?.card?.card?.title;
  const resItemCards = restaurant?.card?.card?.itemCards;
  const resCategories = restaurant?.card?.card?.categories;
  const handleToggle = (index) => {
    setActiveindex(!activeIndex);
    const isActive = categoryIndex.includes(index);
    const updateCategory = isActive
      ? categoryIndex.filter((item) => item !== index)
      : [...categoryIndex, index];
    setCategoryIndex(updateCategory);
  };
  return resCategories ? (
    <div className="text-2xl font-black border-b-4 my-4" key={resTitle}>
      <h1>{resTitle}</h1>
      {resCategories.map(({ title, itemCards }, index) => {
        return (
          <>
            <div key={index}>
              <div
                className="flex justify-between items-center border-b py-2 cursor-pointer"
                onClick={() => {
                  handleToggle(index);
                }}
              >
                <div className="text-base font-normal">
                  {title} ({itemCards.length})
                </div>
                <div
                  className={`h-4 w-4 ml-2 transition-transform duration-200 transform ${
                    categoryIndex.includes(index) && "rotate-180"
                  }`}
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
              {categoryIndex?.includes(index) &&
                itemCards.map((itemCard) => {
                  return (
                    <div className="flex justify-between items-center py-6 border-b gap-x-2">
                      <MenuDish menuData={itemCard} key={index} />
                    </div>
                  );
                })}
            </div>
          </>
        );
      })}
    </div>
  ) : (
    <div className="text-2xl font-black border-b-4" key={resTitle}>
      <div
        className="flex justify-between items-center cursor-pointer py-6"
        onClick={() => {
          handleToggle();
        }}
      >
        <h1>{resTitle}</h1>
        <div
          className={`h-4 w-4 ml-2 transition-transform duration-200 transform ${
            activeIndex && "rotate-180"
          }`}
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
      {activeIndex &&
        resItemCards.map((itemCard, index) => {
          return (
            <>
              <div
                className={`flex justify-between items-center ${
                  index === 0 ? "pb-6" : "py-6"
                } border-b`}
                key={index}
              >
                <MenuDish menuData={itemCard} key={index} />
              </div>
            </>
          );
        })}
    </div>
  );
};

export default MenuSection;
