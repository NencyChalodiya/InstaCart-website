import { Modal, message } from "antd";
import React, { useState } from "react";
import { BsTelephoneForwardFill } from "react-icons/bs";
import API from "../services/api";

const Signup = ({ signup, onCancel, onClickLogin }) => {
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });

  const validateEmail = (email) => {
    // Regular expression for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    // Password should be at least 8 characters
    return password.length >= 8;
  };

  const registerUser = async () => {
    if (!validateEmail(userDetails.email)) {
      message.error("Invalid email address");
      return;
    }
    if (!validatePassword(userDetails.password)) {
      message.error("Password should be at least 8 characters long");
      return;
    }
    let payload = {
      email: userDetails.email,
      password: userDetails.password,
    };
    try {
      const data = await API.RegisterUser(payload);
      console.log(data);
      message.success("User created successfully");
      setUserDetails({ email: "", password: "" });
      onCancel();
    } catch (error) {
      console.log(error);
      message.error("Failed to create user");
    }
  };

  //console.log(userDetails);
  return (
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
            <h2 className="text-3xl font-bold">Sign Up</h2>
          </div>
        </div>
      }
      centered
      visible={signup}
      closable={false}
      footer={null}
      width={416}
    >
      <div className="h-[555px]">
        <div className="min-h-[515px] static">
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
                  <h4 className="mb-2 text-gray-400">
                    Enter your Email to get started
                  </h4>
                  <div className="box-border flex flex-row items-center border flex-nowrap h-14 rounded-xl">
                    <div className="relative flex-grow h-full">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full h-full p-5 text-base leading-6 bg-transparent border-none rounded-lg"
                        onChange={(e) =>
                          setUserDetails({
                            ...userDetails,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="box-border flex flex-row items-center mt-4 border flex-nowrap h-14 rounded-xl">
                    <div className="relative flex-grow h-full">
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full h-full p-5 text-base leading-6 bg-transparent border-none rounded-lg"
                        onChange={(e) =>
                          setUserDetails({
                            ...userDetails,
                            password: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-3 mb-3">
                  <p className="text-xs font-medium ">
                    By continuing,you agree to our
                    <span className="block text-xs font-medium text-[#2C890F] cursor-pointer ">
                      Terms of service,Privacy Policy & Health Data Notice
                    </span>
                  </p>
                </div>

                <div className="mt-3 mb-3">
                  <button
                    type="submit"
                    className="box-border relative flex items-center justify-center w-full bg-[#2C890F] border cursor-pointer h-14 rounded-xl"
                    onClick={() => registerUser()}
                  >
                    <span className="block text-xl font-semibold leading-5 text-white">
                      Sign up
                    </span>
                  </button>
                </div>
              </div>
              <hr />

              <div className="pt-1 pb-1 ml-4 mr-4 text-center ">
                <div className="mt-3 mb-3">
                  <p className="text-lg">Already have an account?</p>
                </div>
                <div className="mt-3 mb-3">
                  <button
                    className="relative pl-6 pr-6 text-[#2C890F] cursor-pointer"
                    onClick={onClickLogin}
                  >
                    <span className="text-base font-semibold">Log in</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Signup;
