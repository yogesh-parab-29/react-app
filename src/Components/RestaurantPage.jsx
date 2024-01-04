import { useEffect, useState } from "react";

const RestaurantPage = () => {
  const [resMenu, setResMenu] = useState(null);
  useEffect(() => {
    const fetchMenu = async () => {
      const fetchData = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0842228&lng=72.87959359999999&restaurantId=723632&catalog_qa=undefined&submitAction=ENTER"
      );
      const json = await fetchData.json();
      console.log(json.data.cards);
    };
    fetchMenu();
  });

  return (
    <>
      <div className="mt-14 h-auto flex justify-center">
        <div className="w-3/5 py-8 m-3">
          <div className="flex flex-col mb-10 ">
            <div className="w-full flex justify-between mb-4">
              <div className="basis-4/5">
                <div className=" text-2xl font-extrabold mb-1">Title</div>
                <div className=" text-sm ">Cuisines</div>
                <div className=" text-sm ">Location</div>
              </div>
              <div className="basis-1/5">
                <div className=" mx-8 py-2 flex flex-col border justify-center text-center">
                  <span className="px-2 ">4.3</span>
                  <span className="text-xs px-2">10K+ ratings</span>
                </div>
              </div>
            </div>
            <div className="w-full items-center pb-4 mb-2 border-b border-dashed">
              <span>0.8 kms</span> <span className=""> | </span> 38 delivery fee
              will apply
            </div>
            <div className="mb-4">22 mins | 350 for 2</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantPage;
