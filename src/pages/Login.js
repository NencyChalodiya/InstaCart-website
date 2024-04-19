import { Modal, message } from "antd";
import React, { useState } from "react";
import { BsTelephoneForwardFill } from "react-icons/bs";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const Login = ({ login, onCancel, onClickSignup, onResetpasswordHandler }) => {
  const navigate = useNavigate();
  const [loginUserDetails, setLoginUserDetails] = useState({
    email: "",
    password: "",
  });

  const loginUser = async () => {
    let payload = {
      email: loginUserDetails.email,
      password: loginUserDetails.password,
    };
    try {
      const response = await API.LoginUser(payload);
      console.log(response);
      if (response.status) {
        message.success("Logged in successfully");
        navigate("/store");
        localStorage.setItem("userData", JSON.stringify(response.user));
        localStorage.setItem("token", response.access_token);
        localStorage.setItem("refreshToken", response.refresh_token);
      }
    } catch (error) {
      console.log("login failed", error);
    }
  };

  return (
    <>
      <Modal
        title={
          <div>
            <div>
              <button className="cursor-pointer" onClick={onCancel}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#343538"
                  xmlns="http://www.w3.org/2000/svg"
                  size="20"
                  class="e-1p1m6ki"
                  aria-hidden="true"
                >
                  <path d="M12 10.415 6.292 4.707 4.708 6.291l5.708 5.708-5.708 5.708 1.584 1.584L12 13.583l5.708 5.708 1.584-1.584-5.708-5.708 5.708-5.708-1.584-1.584z"></path>
                </svg>
              </button>
            </div>
            <div>
              <h2 className="text-3xl font-bold">Log In</h2>
            </div>
          </div>
        }
        centered
        visible={login}
        closable={false}
        footer={null}
        width={416}
      >
        <div className="h-[525px]">
          <div className="min-h-[525px] static ">
            <div className="w-full h-48 ">
              <div className="w-full h-52">
                <div className="flex items-center w-full mt-3 mb-4 border rounded-full cursor-pointer h-11 gap-11">
                  <div>
                    <img
                      className="h-6 ml-2 rounded-full w-25"
                      src="./images/google.png"
                      alt="google-logo"
                    />
                  </div>
                  <div className="text-base">Continue with Google</div>
                </div>
                <div className="flex items-center w-full mt-3 mb-4 border rounded-full cursor-pointer h-11 gap-11">
                  <div>
                    <img
                      className="h-6 ml-2 rounded-full w-25"
                      src="./images/facebook.webp"
                      alt="facebook-logo"
                    />
                  </div>
                  <div className="text-base">Continue with Facebook</div>
                </div>
                <div className="flex items-center w-full mt-3 mb-4 border rounded-full cursor-pointer h-11 gap-11">
                  <div>
                    <BsTelephoneForwardFill className="h-20 ml-3 rounded-full w-25" />
                  </div>
                  <div className="text-base">Continue with Phone</div>
                </div>
                <h2 className="w-full leading-[0.1em]  text-center border-b-[1px] mt-[10px] mb-[20px]">
                  <span className="pl-[10px] pr-[10px] bg-white">or</span>
                </h2>
                <div>
                  <div className="relative mt-3 mb-3">
                    <div className="box-border flex flex-row items-center border flex-nowrap h-14 rounded-xl">
                      <div className="relative flex-grow h-full">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          className="w-full h-full p-5 text-base leading-6 bg-transparent border-none rounded-lg"
                          onChange={(e) =>
                            setLoginUserDetails({
                              ...loginUserDetails,
                              email: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative mt-3 mb-3">
                    <div className="box-border flex flex-row items-center border flex-nowrap h-14 rounded-xl">
                      <div className="relative flex-grow h-full">
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          className="w-full h-full p-5 text-base leading-6 bg-transparent border-none rounded-lg"
                          onChange={(e) =>
                            setLoginUserDetails({
                              ...loginUserDetails,
                              password: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 mb-3">
                    <p className="">
                      Forgot Passord?{" "}
                      <button
                        className="relative inline-flex text-[#2C890F] cursor-pointer "
                        onClick={() => onResetpasswordHandler()}
                      >
                        <span className="block font-medium">Reset it</span>
                      </button>
                    </p>
                  </div>

                  <div className="mt-3 mb-3">
                    <button
                      type="submit"
                      className="box-border relative flex items-center justify-center w-full bg-[#2C890F] border cursor-pointer h-14 rounded-xl"
                      onClick={() => loginUser()}
                    >
                      <span className="block text-xl font-semibold leading-5 text-white">
                        Log in
                      </span>
                    </button>
                  </div>
                  <hr />
                </div>
                <div className="pt-2 pb-2 ml-4 mr-4 text-center ">
                  <div className="mt-3 mb-3">
                    <p className="text-lg">Don't have an account?</p>
                  </div>
                  <div className="mt-3 mb-3">
                    <button
                      className="relative pl-6 pr-6 text-[#2C890F] cursor-pointer"
                      onClick={onClickSignup}
                    >
                      <span className="text-base font-semibold">Sign up</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Login;
