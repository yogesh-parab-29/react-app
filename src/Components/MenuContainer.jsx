import React, { useState } from 'react';
import MenuSection from './MenuSection';

const MenuContainer = ({ resData, resMenu }) => {
  return (
    <>
      {resMenu.map((menu, index) => (
        <MenuSection key={index} restaurant={menu} />
      ))}
    </>
  );
};

export default MenuContainer;
