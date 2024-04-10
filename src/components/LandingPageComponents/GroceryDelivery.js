import React from "react";
import { groceryDelivery } from "../../data/groceryDelivery";

const GroceryDelivery = () => {
  return (
    <>
      <div className="max-w-6xl m-auto">
        <div className="max-w-6xl pl-4 pr-4 m-auto mt-24 mb-24">
          <div className="pb-8">
            <h2 className="text-3xl font-bold leading-8 text-center">
              Grocery Delivery you can count on
            </h2>
          </div>
          <div className="flex overflow-x-auto ">
            {groceryDelivery.map((item) => (
              <div className="relative flex flex-col mb-4 mr-6 bg-gray-100 border w-96 rounded-xl min-w-24">
                <div className="flex justify-center w-full min-w-80">
                  <img src={item.image} alt="img-1" />
                </div>
                <div className="pt-8 pb-8 pl-6 pr-6 ">
                  <h3 className="mt-0 mb-3 text-2xl font-semibold leading-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400">{item.descr}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GroceryDelivery;
