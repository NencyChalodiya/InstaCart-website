import React, { useState } from "react";
import { yourOrderSidebarData } from "../../data/yourOrdersSidebarData";
import { Link } from "react-router-dom";
const InnerSideBarData = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleCategoryClick = (index, route) => {
    setSelectedSubCategory(index);
    // You can navigate to the corresponding page using React Router's Link
    // You need to have defined routes in your React Router setup
    // Here, I'm assuming you have a route defined for '/store/:category'
  };
  return (
    <>
      <div
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
          {yourOrderSidebarData.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleCategoryClick(index, item.route)}
              style={{
                backgroundColor:
                  hoveredItem === index && item.title !== selectedSubCategory
                    ? "#f2f3f7"
                    : item.title === selectedSubCategory
                    ? "#343538" // Background becomes black for "Stores"
                    : "white",
              }}
              className="mb-2 rounded-lg"
            >
              <Link
                to={`/store/${item.route}`}
                className="box-border relative flex items-center w-full pl-3 pr-3 text-sm leading-5 rounded-lg cursor-pointer flex-nowrap "
                style={{
                  color:
                    hoveredItem === index && item.title !== selectedSubCategory
                      ? "black"
                      : item.title === selectedSubCategory
                      ? "white" // Text becomes white for "Stores"
                      : "black",
                }}
              >
                <span className="flex items-center h-10">
                  {item.unselectedLogo}
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
      </div>
    </>
  );
};

export default InnerSideBarData;
