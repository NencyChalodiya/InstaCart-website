import React from "react";
import Navbar from "../../components/LandingPageComponents/Navbar";
import BrandStoreCategoryPage from "../BrandStoreCategoryPages/BrandStoreCategoryPage";

import InnerSideBarData from "./InnerSideBarData";
const YourOrders = () => {
  return (
    <>
      <Navbar />
      <div className="h-full bg-white">
        <InnerSideBarData />
        {/* <div
          className="fixed z-10 w-64 overflow-y-auto bg-white border-r-2 top-20 max-md:hidden"
          style={{ height: `calc(100% - 80px)` }} 
        >
          <ul className="w-full px-3 py-4 list-none">
            <li>
              <Link
                to="/store"
                className="box-border relative flex items-center w-full pl-3 pr-3 text-sm leading-5 rounded-lg cursor-pointer flex-nowrap "
              >
                <span className="flex items-center h-10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#343538"
                    xmlns="http://www.w3.org/2000/svg"
                    size="24"
                    class="e-6su6fj"
                    aria-hidden="true"
                  >
                    <path d="m12.292 6.79-1.584-1.583-6.792 6.792 6.792 6.792 1.584-1.584-4.088-4.088H20v-2.24H8.204z"></path>
                  </svg>
                </span>
                <span className="pt-2 pb-2 ml-2">Back</span>
              </Link>
            </li>
            <br />
            <hr />
            {yourOrderSidebarData.map((item , index)=>(
               <li key={index}
               onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    backgroundColor:
                      hoveredItem === index &&
                      item.title !== "Your orders"
                        ? "#f2f3f7"
                        : item.title === "Your orders"
                        ? "#343538" // Background becomes black for "Stores"
                        : "white",
                  }}
                  className="mb-2 rounded-lg">
               <Link
                 to={`/store/${item.route}`}
                 className="box-border relative flex items-center w-full pl-3 pr-3 text-sm leading-5 rounded-lg cursor-pointer flex-nowrap "
                 style={{
                  color:
                    hoveredItem === index &&
                    item.title !== "Your orders"
                      ? "black"
                      : item.title === "Your orders"
                      ? "white" // Text becomes white for "Stores"
                      : "black",
                }}
               >
                 <span className="flex items-center h-10">
                 {item.title === "Your orders" // Check if title is "Stores"
                        ? item.selectedLogo
                        : item.unselectedLogo}
                 </span>
                 <span className="pt-2 pb-2 ml-2">{item.title}</span>
               </Link>
             </li>
            ))}

           
            <hr />
            <br />
            <li>
              <a
                href="/"
                className="box-border relative flex items-center w-full pl-3 pr-3 text-sm leading-5 rounded-lg cursor-pointer flex-nowrap "
              >
                <span className="flex items-center h-10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#343538"
                    xmlns="http://www.w3.org/2000/svg"
                    size="24"
                    class="e-6su6fj"
                    aria-hidden="true"
                  >
                    <path d="M10.07 7.757 8.656 6.343 2.999 12l5.657 5.657 1.414-1.415L6.828 13H16v-2H6.827zM17 20v-2h2V6h-2V4h4v16z"></path>
                  </svg>
                </span>
                <span className="pt-2 pb-2 ml-2">Log out</span>
              </a>
            </li>
          </ul>
        </div> */}

        <div className="ml-64 max-md:ml-0 ">
          <div className="h-14"></div>

          <div className="w-full py-6 ">
            <div className="w-full px-8 mb-6">
              <div className="flex items-center justify-between mt-6 ">
                <div>
                  <h2 className="flex mr-2">
                    <div className="text-xl font-bold leading-5 ">
                      Order history
                    </div>
                  </h2>
                </div>
              </div>

              <div className="text-center py-12">
                <img
                  src="https://d2guulkeunn7d8.cloudfront.net/assets/EmptyStateGroceries-1b9e4c0a4d8cefff697c0eb7d50f82ad.svg"
                  alt="order-history"
                  className="block mx-auto mb-3 max-w-[235px] max-h-[132px] w-full h-full"
                />
                <h1 className="text-[#72767E]">
                  Empty Fridge? Start your first ordet
                </h1>
                <p className="text-[#7B7F87]">
                  Current and past orders will appear here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourOrders;
