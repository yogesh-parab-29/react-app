import { useDispatch } from "react-redux";
import { addItems } from "../storeSlice/cartSlice";
import { MENU_IMG_CDN_URL } from "../utils/common";

const MenuDish = ({ menuData }) => {
  const { name, description, price, itemAttribute, imageId, defaultPrice } =
    menuData?.card?.info;
  const dispatch = useDispatch();
  const addToCart = (menuItem) => {
    dispatch(addItems(menuItem));
    // console.log(menuItem);
  };

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
        <button
          className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-7 py-1 mt-3 shadow-md rounded-md bg-white font-bold text-green-500 border-slate-400 border"
          onClick={() => {
            // addToCart(menuData?.card?.info);
            addToCart(menuData);
          }}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default MenuDish;
