import React from "react";
import Buttons from "./Buttons";

const SortingButtonContainer = () => {
  return (
    <>
      <div className="overflow-x-auto py-3">
        <div className="flex space-x-4">
          <Buttons btnName="Filter" />
          <Buttons btnName="Sort By" />
          <Buttons btnName="Fast Delivery" />
          <Buttons btnName="New on Swiggy" />
          <Buttons btnName="Ratings 4.0+" />
          <Buttons btnName="Pure Veg" />
          <Buttons btnName="Offers" />
          <Buttons btnName="Rs 300-600" />
          <Buttons btnName="Less than Rs 300" />
          {/* <Buttons btnName="Filter"/>
          <Buttons btnName="Filter"/>
          <Buttons btnName="Filter"/> */}
        </div>
      </div>
    </>
  );
};

export default SortingButtonContainer;
{/* <div class="w-3/4 justify-center mx-auto mb-4">
  <h1 class="text-3xl font-bold mb-6">
    Restaurants with online food deliverya
  </h1>
  <div class="overflow-x-auto py-3">
    <div class="flex space-x-4">
      <span class="border-2 px-4 py-2 rounded-xl mx-2">Filter</span>
      <span class="border-2 px-4 py-2 rounded-xl mx-2">Sort By</span>
      <span class="border-2 px-4 py-2 rounded-xl mx-2">Fast Delivery</span>
      <span class="border-2 px-4 py-2 rounded-xl mx-2">New on Swiggy</span>
      <span class="border-2 px-4 py-2 rounded-xl mx-2">Ratings 4.0+</span>
      <span class="border-2 px-4 py-2 rounded-xl mx-2">Pure Veg</span>
      <span class="border-2 px-4 py-2 rounded-xl mx-2">Offers</span>
      <span class="border-2 px-4 py-2 rounded-xl mx-2">Rs 300-600</span>
      <span class="border-2 px-4 py-2 rounded-xl mx-2">Less than Rs 300</span>
    </div>
  </div>
</div>; */}
