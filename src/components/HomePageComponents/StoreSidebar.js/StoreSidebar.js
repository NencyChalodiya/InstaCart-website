import { Drawer } from "antd";
import React, { useState } from "react";
import { storeSidbarData } from "../../../data/StoreSidebardata";
import { Link, Navigate } from "react-router-dom";
import { creditsAndPromos } from "../../../data/StoreSidebardata";
import { support } from "../../../data/StoreSidebardata";
import { ourApps } from "../../../data/StoreSidebardata";
import { useNavigate } from "react-router-dom";
const StoreSidebar = ({ open, onCancel }) => {
  const navigate = useNavigate();
  const [hoveredFirstItem, setHoveredFirstItem] = useState(null);
  const [hoveredSecondItem, setHoveredSecondItem] = useState(null);
  const [hoveredThirdItem, setHoveredThirdItem] = useState(null);
  const [hoveredFourthItem, setHoveredFourthItem] = useState(null);
  const [hoveredFifthItem, setHoveredFifthItem] = useState(null);
  const handleMouseFirstEnter = (index) => {
    setHoveredFirstItem(index);
  };

  const handleMouseFirstLeave = () => {
    setHoveredFirstItem(null);
  };
  const handleMouseSecondEnter = (index) => {
    setHoveredSecondItem(index);
  };

  const handleMouseSecondLeave = () => {
    setHoveredSecondItem(null);
  };
  const handleMouseThirdEnter = (index) => {
    setHoveredThirdItem(index);
  };

  const handleMouseThirdLeave = () => {
    setHoveredThirdItem(null);
  };

  const handleMouseFourthEnter = (index) => {
    setHoveredFourthItem(index);
  };

  const handleMouseFourthLeave = () => {
    setHoveredFourthItem(null);
  };

  const onClickLogOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <Drawer
        placement="left"
        visible={open}
        onClose={onCancel}
        closable={false}
      >
        <nav>
          <ul className="list-none ">
            <div className="relative mb-3">
              <div className="pl-3 pr-3 ">
                <div className="flex flex-row justify-between">
                  <h1 className="text-2xl font-semibold leading-7">Nency C.</h1>

                  <img
                    src="https://www.instacart.com/assets/express/profile_menu/peach-395cdd46a3b267de59e3c744d42cea40e4aba9f33d58482e61e9db30e33bc06e.png"
                    alt="apple-logo"
                    className="h-12 w-12 rounded-[50%] border-2 max-w-full "
                  />
                </div>
                <p className="inline-block mb-4 text-xs leading-5">
                  Instacart customer since February 2024
                </p>
                <div className="mb-4">
                  <div>
                    <div className="mb-2 text-xl left-5 text-[#750246] font-semibold">
                      Try Instacart+
                    </div>
                    <ul className="flex items-start justify-between py-2">
                      <li className="flex flex-col items-center flex-grow flex-shrink mx-1 text-center">
                        <div className="h-7 w-7">
                          <img
                            src="https://www.instacart.com/image-server/32x/www.instacart.com/assets/express/badges/instacartplus-delivery-white-e4fea40f0b0b6c1af1b041ca776e0fea2fbc296e048de9c3e41cb07980cfa207.png"
                            alt="truck-img"
                          />
                        </div>
                        <div className="mt-2">
                          {" "}
                          <span className="whitespace-pre-wrap text-wrap">
                            <span className="text-xs leading-3">
                              $0 delivery fee on orders $35+
                            </span>
                          </span>
                        </div>
                      </li>
                      <li className="flex flex-col items-center flex-grow flex-shrink mx-1 text-center">
                        <div className="h-7 w-7">
                          <img
                            src="https://www.instacart.com/image-server/32x/www.instacart.com/assets/express/badges/instacartplus-credit-back-white-bac602898aeeebc277455592648a80d471b076df1c991d6e0efc0869c7a0a7f1.png"
                            alt="truck-img"
                          />
                        </div>
                        <div className="mt-2">
                          {" "}
                          <span className="whitespace-pre-wrap text-wrap">
                            <span className="text-xs leading-3">
                              5% credit back on pickup
                            </span>
                          </span>
                        </div>
                      </li>
                      <li className="flex flex-col items-center flex-grow flex-shrink mx-1 text-center">
                        <div className="h-7 w-7">
                          <img
                            src="https://www.instacart.com/image-server/32x/www.instacart.com/assets/express/badges/instacartplus-fees-white-721e7aa582bdb3f1b7b0a5db286cc2d48c2e417d7e2b9a1e10e1382e363086ca.png"
                            alt="truck-img"
                          />
                        </div>
                        <div className="mt-2">
                          {" "}
                          <span className="whitespace-pre-wrap text-wrap">
                            <span className="text-xs leading-3">
                              Lower service fees
                            </span>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <ul className="list-none">
                  <li className="mb-3">
                    <a
                      href="/"
                      className="block p-4 rounded-xl relative bg-[#750246] "
                    >
                      <p className="text-xl font-bold text-white">
                        Start your free trial today!
                      </p>
                      <p className="mt-1 text-xs leading-4 text-white">
                        You can cancel at any time
                      </p>
                      <div className="items-center justify-between block mt-3 ">
                        <span className="text-sm leading-4 py-1 px-2 rounded-xl mr-1 mt-3 bg-white text-[#750246] ">
                          Try Instacart+ for free
                        </span>
                        <img
                          src="https://www.instacart.com/image-server/88x15/www.instacart.com/assets/express/account/instacartplus-logo-3c73d959a972a32a13c7cb1faf3ad0618d6cf08c0059c981bacab8c6f3ea8ea2.png"
                          alt="instacart+-logo"
                          className="mt-3"
                        />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pb-3 pl-3 pr-3">
              <hr />
              {storeSidbarData.map((sidebarItems, index) => (
                <li
                  key={index}
                  onMouseEnter={() => handleMouseFirstEnter(index)}
                  onMouseLeave={handleMouseFirstLeave}
                  style={{
                    backgroundColor:
                      hoveredFirstItem === index &&
                      sidebarItems.title !== "Stores"
                        ? "#f2f3f7"
                        : sidebarItems.title === "Stores"
                        ? "#343538" // Background becomes black for "Stores"
                        : "white",
                  }}
                  className="mb-2 rounded-lg"
                >
                  <Link
                    to={`/store/${sidebarItems.route}`}
                    className="box-border relative flex items-center w-full pl-3 pr-3 cursor-pointer flex-nowrap"
                    style={{
                      color:
                        hoveredFirstItem === index &&
                        sidebarItems.title !== "Stores"
                          ? "black"
                          : sidebarItems.title === "Stores"
                          ? "white" // Text becomes white for "Stores"
                          : "black",
                    }}
                  >
                    <span className="flex items-center h-10">
                      {sidebarItems.title === "Stores" // Check if title is "Stores"
                        ? sidebarItems.selectedLogo
                        : sidebarItems.unselectedLogo}
                    </span>
                    <span className="pt-2 pb-2 ml-8">{sidebarItems.title}</span>
                  </Link>
                </li>
              ))}

              <hr />
              <h2 className="flex items-center h-10 pl-3 pr-3 text-gray-400">
                Credits and promos
              </h2>
              <ul className="flex flex-col list-none">
                {creditsAndPromos.map((items, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => handleMouseSecondEnter(index)}
                    onMouseLeave={handleMouseSecondLeave}
                    style={{
                      backgroundColor:
                        hoveredSecondItem === index ? "#f2f3f7" : "white",
                    }}
                    className="mb-2 rounded-lg"
                  >
                    <Link
                      to={`/store/${items.route}`}
                      className="box-border flex items-center w-full pl-3 pr-3 rounded-lg cursor-pointer flex-nowrap"
                    >
                      <span className="flex items-center h-10 ">
                        {items.unselectedLogo}
                      </span>
                      <span
                        className="pt-2 pb-2 ml-8"
                        style={{
                          color:
                            items.title === "Invite friends,earn money"
                              ? "#D43683"
                              : "black",
                        }}
                      >
                        {items.title}
                      </span>
                    </Link>
                  </li>
                ))}
                {/* <li>
                  <a
                    href="/"
                    className="w-full flex flex-nowrap items-center box-border pr-3 pl-3 rounded-lg text-[#D43683] cursor-pointer"
                  >
                    <span className="flex items-center h-10 ">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#D43684"
                        xmlns="http://www.w3.org/2000/svg"
                        size="24"
                        color="brandPromotionalRegular"
                        class="e-6su6fj"
                        aria-hidden="true"
                      >
                        <path d="M11.069 4.417V2.5h2.193v1.936l.177.024c1.435.198 2.472.725 3.19 1.465.667.689 1.07 1.575 1.248 2.586h-3.02c-.108-.595-.35-1.098-.792-1.458-.482-.392-1.17-.59-2.091-.59-.837 0-1.495.182-1.949.53-.46.356-.687.867-.687 1.467 0 .528.167.968.56 1.302.38.323.952.528 1.723.648l2.195.384c1.663.284 2.726.794 3.376 1.504.647.706.912 1.64.912 2.837 0 1.138-.368 2.14-1.122 2.904-.757.766-1.919 1.312-3.539 1.5l-.18.021v1.94h-2.194v-1.92l-.183-.02c-1.589-.167-2.78-.682-3.604-1.452-.772-.722-1.236-1.683-1.392-2.832h3.174c.105.674.391 1.234.89 1.632.538.43 1.298.65 2.276.65.975 0 1.694-.213 2.173-.6.485-.392.697-.94.697-1.545 0-.55-.145-1.022-.53-1.388-.376-.358-.957-.592-1.772-.733l-2.348-.385h-.002c-1.404-.22-2.423-.672-3.09-1.344-.664-.668-1.003-1.577-1.003-2.762 0-1.157.388-2.148 1.138-2.898.751-.751 1.883-1.276 3.397-1.464z"></path>
                      </svg>
                    </span>
                    <span className="pt-2 pb-2 ml-8">
                      Invite friends, earn money
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="box-border relative flex items-center w-full pl-3 pr-3 rounded-lg cursor-pointer flex-nowrap"
                  >
                    <span className="flex items-center h-10 ">
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
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.988 3.311q.14-.176.303-.341c.65-.65 1.5-.97 2.35-.97h.01c.85 0 1.7.32 2.35.97A3.304 3.304 0 0 1 17.514 7H21v4h-8V7h-2v4H3V7h3.462a3.304 3.304 0 0 1 .513-4.03c.65-.65 1.5-.97 2.35-.97h.01c.85 0 1.7.32 2.35.97q.164.165.303.341M3 13v9h8v-9zm10 9h8v-9h-8zM8.384 4.39a1.307 1.307 0 0 0 .002 1.853c.497.489 1.28.707 2.229.707q.18 0 .352-.01.01-.162.01-.336c0-.947-.219-1.733-.706-2.22A1.3 1.3 0 0 0 9.335 4h-.01c-.347 0-.68.128-.936.384zm7.208 0c.508.503.517 1.33-.002 1.853-.497.489-1.28.707-2.229.707q-.18 0-.352-.01A6 6 0 0 1 13 6.604c-.001-.947.218-1.733.706-2.22.255-.256.588-.384.935-.384h.01c.348 0 .68.128.936.384z"
                        ></path>
                      </svg>
                    </span>
                    <span className="pt-2 pb-2 ml-8">Buy gift cards</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="box-border relative flex items-center w-full pl-3 pr-3 rounded-lg cursor-pointer flex-nowrap"
                  >
                    <span className="flex items-center h-10 ">
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
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="m11 21-8-8L13 3h5l3 3v5zm4.5-11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
                        ></path>
                      </svg>
                    </span>
                    <span className="pt-2 pb-2 ml-8">
                      Credits,promos and gift card
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="box-border relative flex items-center w-full pl-3 pr-3 rounded-lg cursor-pointer flex-nowrap"
                  >
                    <span className="flex items-center h-10 ">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#343538"
                        xmlns="http://www.w3.org/2000/svg"
                        size="24"
                        class="e-ozd7xs"
                        aria-hidden="true"
                      >
                        <path d="M2 6a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2H2z"></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2 10h20v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm9 4H5v2h6z"
                        ></path>
                      </svg>
                    </span>
                    <span className="pt-2 pb-2 ml-8">
                      Apply:Instacart Mastercard
                    </span>
                  </a>
                </li> */}
              </ul>
              <hr />
              <h2 className="flex items-center h-10 pl-3 pr-3 text-gray-400">
                Support
              </h2>
              <ul className="flex flex-col list-none">
                {support.map((item, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => handleMouseThirdEnter(index)}
                    onMouseLeave={handleMouseThirdLeave}
                    style={{
                      backgroundColor:
                        hoveredThirdItem === index ? "#f2f3f7" : "white",
                    }}
                    className="mb-2 rounded-lg"
                  >
                    <Link
                      to={`/${item.route}`}
                      className="box-border flex items-center w-full pl-3 pr-3 rounded-lg cursor-pointer flex-nowrap"
                      style={{
                        color: hoveredFirstItem === index ? "black" : "black",
                      }}
                    >
                      <span className="flex items-center h-10 ">
                        {item.unselectedLogo}
                      </span>
                      <span className="pt-2 pb-2 ml-8">{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <hr />
              <h2 className="flex items-center h-10 pl-3 pr-3 text-gray-400">
                our apps
              </h2>
              <ul className="flex flex-col list-none">
                {ourApps.map((item, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => handleMouseFourthEnter(index)}
                    onMouseLeave={handleMouseFourthLeave}
                    style={{
                      backgroundColor:
                        hoveredFourthItem === index ? "#f2f3f7" : "white",
                    }}
                    className="mb-2 rounded-lg"
                  >
                    <a
                      href="/"
                      className="box-border flex items-center w-full pl-3 pr-3 rounded-lg cursor-pointer flex-nowrap"
                      style={{
                        color: hoveredFourthItem === index ? "black" : "black",
                      }}
                    >
                      <span className="flex items-center h-10 ">
                        {item.unselectedLogo}
                      </span>
                      <span className="pt-2 pb-2 ml-8">{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <hr />

              <ul className="flex flex-col list-none">
                <li>
                  <button
                    className="box-border flex items-center w-full pl-3 pr-3 rounded-lg cursor-pointer flex-nowrap"
                    onClick={() => onClickLogOut()}
                  >
                    <span className="flex items-center h-10 ">
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
                    <span className="pt-2 pb-2 ml-8">Log out</span>
                  </button>
                </li>
                <div></div>
                <hr />
                <div className="flex flex-wrap items-center ml-2 mt-7">
                  <li className="leading-5">
                    <a href="/" className="text-gray-400">
                      Press
                    </a>
                  </li>
                  <span className="text-sm leading-5">&nbsp; .&nbsp;</span>
                  <li className="leading-5">
                    <a href="/" className="text-gray-400">
                      Jobs
                    </a>
                  </li>
                  <span className="text-sm leading-5">&nbsp; .&nbsp;</span>
                  <li className="leading-5">
                    <a href="/" className="text-gray-400">
                      Terms
                    </a>
                  </li>
                  <span className="text-sm leading-5">&nbsp; .&nbsp;</span>
                  <li className="leading-5">
                    <a href="/" className="text-gray-400">
                      Privacy
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </ul>
        </nav>
      </Drawer>
    </>
  );
};

export default StoreSidebar;
