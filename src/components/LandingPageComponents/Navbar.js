import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import Sidebar from "./Sidebar";
import { RxCross2 } from "react-icons/rx";

const Navbar = ({ onLoginButton, onSignupHandler }) => {
  const [open, isOpen] = useState(false);
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
    <div className="fixed top-0 z-10 w-full bg-white">
      <header className="flex items-center justify-between px-4 py-6 mx-8 border-gray-300 max-h-20">
        <div className="flex flex-row items-center w-full ">
          <div className="flex mr-2 cursor-pointer">
            {open ? (
              <RxCross2
                onClick={onToggleButton}
                className="w-[24px] h-[24px] cursor-pointer "
              />
            ) : (
              <span onClick={onToggleButton} className="gap-3 cursor-pointer">
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
                className="h-auto max-w-[245px]"
              />
            </a>
          </div>
          <div className="relative w-full mx-8 ">
            <div className="relative z-10 bg-transparent">
              <form className="relative h-14 bg-[#F6F7F8] rounded-[5px]">
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
        <div className="flex flex-row">
          <button className="relative px-[6px] py-[1px] mx-[22px]  font-medium text-[#343538] bg-transparent  cursor-pointer text-lg leading-5">
            <span
              className="block text-lg leading-5 cursor-pointer whitespace-nowrap overflow-ellipsis"
              onClick={onLoginButton}
            >
              Log in
            </span>
          </button>
          <button className="px-4 py-2 m-6 text-white bg-[#2C890F] border-none rounded-[20px] relative cursor-pointer font-semibold text-lg leading-5">
            <span
              className="block overflow-hidden whitespace-nowrap overflow-ellipsis"
              onClick={onSignupHandler}
            >
              Sign Up
            </span>
          </button>
        </div>
      </header>
      <Sidebar open={open} onToggleButton={onToggleButton} />
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
