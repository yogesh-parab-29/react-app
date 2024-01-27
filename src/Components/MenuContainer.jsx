import React, { useState } from 'react';

const MenuContainer = ({ resData, resMenu }) => {
  const [isOpen, setIsOpen] = useState({});
  const [activeState, setActiveState] = useState({});
  const restaurantData = resData;

  const handleToggleSection = (index) => {
    setActiveState((prevIndex) => ({
      ...prevIndex,
      [index]: !prevIndex[index],
    }));
  };
  const handleToggleCategory = (categoryIndex) => {
    setIsOpen((prevIndex) => ({
      ...prevIndex,
      [categoryIndex]: !prevIndex[categoryIndex],
    }));
  };

  return (
    <>
      {resMenu?.map((restaurant, index) => {
        const resTitle = restaurant?.card?.card?.title;
        const resCategories = restaurant?.card?.card?.categories;
        console.log(resTitle);
        return resCategories ? (
          <div key={index} index={index}className="text-2xl font-black border-b-4 my-4">
            <h1>{resTitle}</h1>
            {resCategories.map(({ title, itemCards }, categoryIndex) => {
              console.log(index, 1);
              return (
                <>
                  <div
                    key={categoryIndex}
                    className="flex justify-between items-center border-b py-2 cursor-pointer"
                    onClick={() => {
                      handleToggleCategory(categoryIndex);
                      handleToggleSection(index);
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
                  {isOpen[categoryIndex] &&
                    activeState[index] &&
                    itemCards.map((itemCard) => {
                      const { name, description, price, itemAttribute, imageId } = itemCard?.card?.info;
                      // console.log(itemCard?.card?.info);
                      return (
                        <div className="flex justify-between items-center py-8 border-b gap-x-2">
                          <div className="text-base font-normal flex flex-col">
                            <p className="text-xs">{itemAttribute.vegClassifier}</p>
                            <h1 className="font-bold">{name}</h1>
                            <h4 className="text-sm">₹ {price / 100}</h4>
                            <span className="text-xs text-slate-400">{description}</span>
                          </div>
                          <div className="text-base font-normal flex flex-col text-center relative">
                            <div className="h-24 w-28 overflow-hidden rounded-lg">
                              <img
                                className="w-full h-full object-cover"
                                src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/' + imageId}
                              ></img>
                            </div>
                            <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-7 py-1 mt-3 shadow-md rounded-md bg-white font-bold text-green-500 border-slate-400 border">
                              Add
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </>
              );
            })}
          </div>
        ) : (
          <div
            key={index}
            index={index}
            className="text-2xl font-black pb-3 border-b-4 my-4 cursor-pointer"
            onClick={() => {
              handleToggleSection(index);
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
            {activeState[index] && (
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
