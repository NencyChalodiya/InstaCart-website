import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import Sidebar from "./Sidebar";
import { RxCross2 } from "react-icons/rx";
import { useLocation } from "react-router-dom";
import StoreSidebar from "../HomePageComponents/StoreSidebar.js/StoreSidebar";
const Navbar = ({ onLoginButton, onSignupHandler }) => {
  const location = useLocation();

  const [open, isOpen] = useState(false);
  //const [sideOpen, setsideOpen] = useState(false);
  // const [login, isLogin] = useState(false);
  // const [signup, isSignup] = useState(false);
  // const [resetPassword, isResetpassword] = useState(false);
  // const onClickLogin = () => {
  //   isSignup(!signup);
  //   // isLogin(!login);
  // };

  const onToggleButton = () => {
    isOpen(!open);
  };

  // const onLoginButton = () => {
  //   isLogin(!login);
  // };

  // const onSignupHandler = () => {
  //   isSignup(!signup);
  // };
  // const onResetpasswordHandler = () => {
  //   isLogin(false);
  //   // isResetpassword(true);
  // };
  // const onCancelHandler = () => {
  //   // isLogin(false);
  //   isSignup(false);
  // };

  return (
    <div className="fixed top-0 z-20 w-full bg-white max-md:border-b max-md:border-gray-200">
      <header className="flex items-center justify-between h-20 px-4 py-6  mx-8 max-md:mx-2 border-gray-300 max-md:h-[60px] max-md:px-0">
        <div className="flex flex-row items-center w-full ">
          <div className="flex mr-2 cursor-pointer">
            {open ? (
              <RxCross2
                onClick={onToggleButton}
                className="w-[24px] h-[24px] cursor-pointer "
              />
            ) : (
              <span onClick={onToggleButton} className="cursor-pointer ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#343538"
                  xmlns="http://www.w3.org/2000/svg"
                  size="24"
                  color="systemGrayscale70"
                  aria-hidden="true"
                >
                  <path d="M20 6H4v2h16zM4 11h16v2H4zM4 16h16v2H4z"></path>
                </svg>
              </span>
            )}
          </div>
          <div className="flex items-center pr-6 ">
            <a href="/">
              <img
                src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg"
                alt="instaCart-logo"
                className="h-auto max-w-[245px] max-md:hidden"
              />
              <img
                src="https://www.instacart.com/assets/beetstrap/brand/2022/carrotlogo-1286c257354036d178c09e815906198eb7f012b8cdc4f6f8ec86d3e64d799a5b.png"
                alt="instaCart-logo"
                className="h-auto max-w-[24px] md:hidden"
              />
            </a>
          </div>
          <div className="relative flex-grow mx-8 max-md:hidden ">
            <div className="relative z-10 bg-transparent">
              <form className="relative h-14 bg-[#F6F7F8] rounded-[5px] ">
                <button className="absolute translate-y-[-50%] bg-transparent top-1/2 left-3 z-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#343538"
                    xmlns="http://www.w3.org/2000/svg"
                    size="24"
                    color="systemGrayscale70"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.496 17.618a8 8 0 1 1 2.121-2.121l3.944 3.942-2.122 2.122zM17 11a6 6 0 1 1-12 0 6 6 0 0 1 12 0"
                    ></path>
                  </svg>
                </button>
                <div className="relative h-full">
                  <input
                    type="text"
                    className="box-border relative flex items-center w-full h-full pr-12 text-base text-black placeholder-black bg-transparent rounded-lg shadow-inner indent-10 outline-black "
                    placeholder="Search products and stores"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        {location.pathname.includes("/") &&
        !location.pathname.includes("/store") ? (
          <div className="flex flex-row">
            <button className="relative px-[6px] py-[1px] mx-[22px] max-md:mx-[5px] font-medium text-[#343538] bg-transparent  cursor-pointer text-lg leading-5 ">
              <span
                className="block text-lg leading-5 cursor-pointer whitespace-nowrap overflow-ellipsis max-md:text-sm"
                onClick={onLoginButton}
              >
                Log in
              </span>
            </button>
            <button className="px-4 py-2 m-6 text-white bg-[#2C890F] border-none rounded-[20px] relative cursor-pointer font-semibold text-lg leading-5 max-md:mx-[12px] max-md:text-sm">
              <span
                className="block overflow-hidden whitespace-nowrap overflow-ellipsis"
                onClick={onSignupHandler}
              >
                Sign Up
              </span>
            </button>
          </div>
        ) : (
          <div className="relative flex">
            <button className="relative bg-transparent text-[#343538] rounded-[8px] h-14 min-w-[120px] max-w-full mx-4">
              <span className="text-ellipsis flex  items-center justify-start w-full">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  size="24"
                  class="e-ozd7xs"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.714 12.561a7.1 7.1 0 0 1-.86-3.659 7.152 7.152 0 1 1 13.242 3.994L12.84 22h-1.679l-5.265-9.121a7 7 0 0 1-.183-.318m9.266-3.305a2.98 2.98 0 1 1-5.956-.208 2.98 2.98 0 0 1 5.956.208"
                  ></path>
                </svg>
                <span className="pl-2 max-w-full text-ellipsis">94105</span>
              </span>
            </button>
            <button className="relative flex items-center bg-transparent rounded-full h-14">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#343538"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-6 h-6 mr-1"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="m6.84 2.68-1.27-.19-.17-.03L2.29 2 2 3.93l3.16.47 2.2 12.84h14.18v-1.95H9l-.34-2 11.92-1.58L22 4.99 6.84 2.69zm1.14 19.27a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24m11.94 0a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24"
                ></path>
              </svg>
              <span>0</span>
            </button>
          </div>
        )}
      </header>
      {location.pathname.includes("/") &&
      !location.pathname.includes("/store") ? (
        <Sidebar open={open} onToggleButton={onToggleButton} />
      ) : (
        open && <StoreSidebar open={open} onCancel={onToggleButton} />
      )}

      {/* {login && (
        <Login
          login={login}
          onCancel={onCancelHandler}
          onClickSignup={onClickLogin}
          onResetpasswordHandler={onResetpasswordHandler}
        />
      )} */}
      {/* <Signup
        signup={signup}
        onCancel={onCancelHandler}
        onClickLogin={onClickLogin}
      /> */}
      {/* {resetPassword && <ResetPassword resetPassword={resetPassword} />} */}
    </div>
  );
};

export default Navbar;
