import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resChangeAccept,resChangeDecline } from "../storeSlice/cartSlice";

const ModalPopUp = ({
  title,
  description,
  primaryBtnTxt,
  secondaryBtnTxt,
  restaurantData,
  resMenuData,
}) => {
  const checkResID = useSelector((store) => store.cart.resCheck);
  const dispatch = useDispatch();
  const addItemToCart = (resData) => {
    console.log(resData);
    dispatch(resChangeAccept({ ...resData }));
  };
  const resCheck = (resID) => {
    dispatch(restaurantCheck(resID));
  };
  const rejectEmptyCartRequest = () => {
    dispatch(resChangeDecline());
  };

  // Enable or disable buttons based on input value

  return (
    <>
      {checkResID == 1 && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">{title}</h2>
            </div>
            <div className="mt-4">
              <h2 className="text-sm font-normal">{description}</h2>
              <div className="w-full flex justify-evenly pt-4 pb-2">
                <span
                  onClick={() => {
                    rejectEmptyCartRequest();
                  }}
                  className={` hover:shadow-sm bg-white text-green-500 w-1/3 border border-black-500 font-normal text-base py-2 px-4 text-center`}
                >
                  {secondaryBtnTxt}
                </span>
                <span
                  onClick={() => {
                    addItemToCart(resMenuData?.card);
                  }}
                  className={`bg-green-500 hover:shadow-sm w-1/3 text-white border border-green-500 font-normal text-base py-2 px-4 text-center`}
                >
                  {primaryBtnTxt}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalPopUp;
