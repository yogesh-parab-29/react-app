import React, { useState } from "react";
import MenuSection from "./MenuSection";

const MenuContainer = ({ resData, resMenu }) => {
  return (
    <>
      {resMenu
        ?.filter(
          (menu) =>
            menu?.card?.card?.["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
            menu?.card?.card?.["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        )
        .map((menu, index) => (
          <MenuSection key={index} restaurant={menu} />
        ))}
    </>
  );
};

export default MenuContainer;
