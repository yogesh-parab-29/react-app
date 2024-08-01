import { useDispatch } from "react-redux";
import {
  addItems,
  removeItems,
  restaurantCheck,
} from "../storeSlice/cartSlice";
import { MENU_IMG_CDN_URL } from "../utils/common";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import ModalPopUp from "./ModalPopUp";

const MenuDish = ({ menuData, resData }) => {
  const { name, description, price, itemAttribute, imageId, defaultPrice, id } =
    menuData?.card?.info;
  const dispatch = useDispatch();

  const addToCart = (menuItem) => {
    dispatch(addItems(menuItem));
  };
  const dropFromCart = (menuItem) => {
    dispatch(removeItems(menuItem));
  };

  const resCheck = (resID) => {
    dispatch(restaurantCheck(resID));
  };
  const cartItems = useSelector((store) => store.cart.items);
  const foundItem = useMemo(
    () => cartItems.find((item) => item.info.id === id),
    [cartItems, id]
  );

  return (
    <>
      <div className="text-base font-normal flex flex-col">
        <p className="text-xs">{itemAttribute.vegClassifier}</p>
        <h1 className="font-bold">{name}</h1>
        <h4 className="text-sm">
          ₹ {price ? price / 100 : defaultPrice / 100}
        </h4>
        <span className="text-xs text-slate-400">{description}</span>
      </div>
      <div className="text-base font-normal flex flex-col text-center relative">
        <div className="h-24 w-28 overflow-hidden rounded-lg">
          <img
            className="w-full h-full object-cover"
            src={MENU_IMG_CDN_URL + imageId}
          ></img>
        </div>
        {!foundItem ? (
          <button
            className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-7 py-1 mt-3 shadow-md rounded-md bg-white font-bold text-green-500 border-slate-400 border"
            onClick={() => {
              resCheck(resData);
              addToCart({ ...menuData?.card, itemCount: 0 });
            }}
          >
            Add
          </button>
        ) : (
          <span className="absolute flex top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-1 mt-3 shadow-md rounded-md bg-white font-bold text-green-500 border-slate-400 border">
            <button
              className="pl-2 mr-1"
              onClick={() => {
                dropFromCart({ ...menuData?.card, ...resData });
              }}
            >
              -
            </button>
            <span className="px-6">{foundItem.itemCount}</span>
            <button
              className="pr-2 ml-1"
              onClick={() => {
                resCheck(resData);
                addToCart({ ...menuData?.card });
              }}
            >
              +
            </button>
          </span>
        )}
      </div>
      <ModalPopUp
        title={"Items already in cart"}
        description={
          "Your cart contains items from other restaurant. Would you like to reset your cart for adding items from this restaurant?"
        }
        primaryBtnTxt={"START AFRESH"}
        secondaryBtnTxt={"NO"}
        restaurantData={resData}
        resMenuData={menuData}
      />
    </>
  );
};

export default MenuDish;
