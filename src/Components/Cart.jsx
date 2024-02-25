import React from "react";

const Cart = () => {
  return (
    <>
      <div className="mt-14 h-auto flex justify-center bg-gray-100">
        <div className="w-4/5 py-8 m-3 flex gap-x-10">
          <div className="w-3/5 bg-white px-6 py-4  ">
            <div className=" font-bold text-2xl ">Account</div>
            <div className="py-2">
              To place your order now, log in to your existing account or sign
              up.
            </div>
            <div>
              <button className="border w-40 text-sm px-4 py-1 border-green-500 text-green-500">
                Have an account?
                <span className="font-bold text-green-500">LOGIN</span>
              </button>
              <button className="border w-40 text-sm px-4 py-1 ml-4 border-green-500 bg-green-500 text-white">
                New to Swiggy? SIGN UP
              </button>
            </div>
          </div>
          <div className="w-2/5 bg-white px-6 py-4 ">
            <div className="flex">
              <img src="" alt="" />
              <div>
                <div>Title</div>
                <div className="text-xs">location</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
