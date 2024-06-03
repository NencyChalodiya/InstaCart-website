import React from "react";
import GoogleSvg from "../../assets/images/google.svg";
import FacebookSvg from "../../assets/images/facebook.svg";
import EmailSvg from "../../assets/images/emailIcon.svg";
import PhoneSvg from "../../assets/images/phoneIcon.svg";
import Loader from "react-js-loader";
import "../../pages/Loading.css";
import API from "../../services/api";
const ScreenOne = ({
  setIsEmailLogin,
  isEmailLogin,
  setEmailError,
  setPasswordError,
  setPhoneError,
  emailError,
  setLoginUserDetails,
  loginUserDetails,
  passwordError,
  handleContinue,
  onClickSignup,
  isLoading,
  onResetpasswordHandler,
  phoneError,
  loginUser,
}) => {
  const getGoothAuth = async () => {
    try {
      let response = await API.googleAuth();
      console.log(response);
    } catch (error) {}
  };
  const handleGoogleAuth = () => {
    getGoothAuth();
  };

  return (
    <>
      <div className="h-[525px]">
        <div className="min-h-[525px] static ">
          <div className="w-full h-48 ">
            <div className="w-full h-52">
              <div
                className="flex items-center w-full mt-3 mb-4 border rounded-full cursor-pointer h-11 gap-11"
                onClick={handleGoogleAuth}
              >
                <div>
                  <img
                    className="h-6 ml-2 rounded-full w-25"
                    src={GoogleSvg}
                    alt="google-logo"
                  />
                </div>
                <div className="text-base">Continue with Google</div>
              </div>
              <div className="flex items-center w-full mt-3 mb-4 border rounded-full cursor-pointer h-11 gap-11">
                <div>
                  <img
                    className="h-6 ml-2 rounded-full w-25"
                    src={FacebookSvg}
                    alt="facebook-logo"
                  />
                </div>
                <div className="text-base">Continue with Facebook</div>
              </div>
              <div>
                <button
                  className="flex items-center w-full mt-3 mb-4 border rounded-full cursor-pointer h-11 gap-11"
                  onClick={() => {
                    setIsEmailLogin(!isEmailLogin);
                    setEmailError("");
                    setPasswordError("");
                    setPhoneError("");
                  }}
                >
                  {!isEmailLogin ? (
                    <span className="ml-2 rounded-full">
                      {" "}
                      <img src={EmailSvg} alt="email-logo" />
                    </span>
                  ) : (
                    <span className="ml-2 rounded-full">
                      <img src={PhoneSvg} alt="phone-logo" />
                    </span>
                  )}
                  <span className="text-base ">
                    {!isEmailLogin
                      ? "Continue with Email"
                      : "Continue with Phone"}
                  </span>
                </button>
              </div>

              <h2 className="w-full leading-[0.1em]  text-center border-b-[1px] mt-[10px] mb-[20px]">
                <span className="pl-[10px] pr-[10px] bg-white">or</span>
              </h2>
              <div>
                {isEmailLogin ? (
                  <div>
                    <div className="relative mt-3 mb-3">
                      <div className="box-border flex flex-row items-center border flex-nowrap h-14 rounded-xl">
                        <div className="relative flex-grow h-full">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className={`w-full h-full p-5 text-base leading-6 bg-transparent  rounded-lg outline-none   ${
                              emailError
                                ? "border-2 border-rose-600 focus:outline-none"
                                : "border-none focus:outline-black"
                            }`}
                            onChange={(e) =>
                              setLoginUserDetails({
                                ...loginUserDetails,
                                email: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      {emailError && (
                        <span className="text-red-500 text-sm">
                          {emailError}
                        </span>
                      )}
                    </div>
                    <div className="relative mt-3 mb-3">
                      <div className="box-border flex flex-row items-center border flex-nowrap h-14 rounded-xl">
                        <div className="relative flex-grow h-full">
                          <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className={`w-full h-full p-5 text-base leading-6 bg-transparent  rounded-lg outline-none   ${
                              passwordError
                                ? "border-2 border-rose-600 focus:outline-none"
                                : "border-none focus:outline-black"
                            }`}
                            onChange={(e) =>
                              setLoginUserDetails({
                                ...loginUserDetails,
                                password: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      {passwordError && (
                        <span className="text-red-500 text-sm">
                          {passwordError}
                        </span>
                      )}
                    </div>
                    <div>
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
                  </div>
                ) : (
                  <div className="flex-grow flex-shrink px-1 pb-8">
                    <div className="py-4">
                      <form>
                        <div>
                          <div className="flex flex-row items-center w-full ">
                            <div className="cursor-pointer relative py-2 pr-[6px] pl-3 rounded-l-lg border h-14 flex items-center  outline-black ">
                              <span className="flex items-center h-full text-ellipsis">
                                <select
                                  name="countryCode"
                                  value={loginUserDetails.countryCode}
                                  onChange={(e) =>
                                    setLoginUserDetails({
                                      ...loginUserDetails,
                                      countryCode: e.target.value,
                                    })
                                  }
                                >
                                  <option value="+91">+91 (India)</option>
                                  <option value="+1">+1 (USA)</option>
                                  <option value="+1">+1 (Canada)</option>
                                </select>
                              </span>
                            </div>

                            <div className="flex flex-row flex-nowrap items-center h-14 box-border max-w-[600px] rounded-r-lg border w-full  outline-black">
                              <div className="relative flex-grow w-full h-full">
                                <input
                                  className="pt-[5px] px-3 pb-2 w-full h-full  rounded-xl bg-transparent outline-none"
                                  name="phonenumber"
                                  placeholder="Phone number"
                                  value={loginUserDetails.phoneno}
                                  onChange={(e) =>
                                    setLoginUserDetails({
                                      ...loginUserDetails,
                                      phoneno: e.target.value,
                                    })
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        {phoneError && (
                          <span className="text-red-500 text-sm">
                            {phoneError}
                          </span>
                        )}
                      </form>
                      <span className="text-xs font-medium ">
                        We will send a text with a verification code. Message
                        and data rates may apply.
                      </span>
                    </div>
                  </div>
                )}

                {isEmailLogin ? (
                  <div className="mb-3">
                    <button
                      type="submit"
                      className={`box-border relative flex items-center justify-center w-full bg-[#2C890F] border cursor-pointer h-14 rounded-xl ${
                        isLoading ? "opacity-50" : ""
                      }`}
                      onClick={() => loginUser()}
                      disabled={isLoading}
                    >
                      <div className="flex items-center justify-center">
                        <span className="block text-xl font-semibold leading-5 text-white">
                          Log in
                        </span>
                        {isLoading && (
                          <div className="ml-2 h-5 w-5 mt-[-20px]">
                            <Loader size={20} />
                          </div>
                        )}
                      </div>
                    </button>
                  </div>
                ) : (
                  <div className="mb-3">
                    <button
                      type="submit"
                      className="box-border relative flex items-center justify-center w-full bg-[#2C890F] border cursor-pointer h-14 rounded-xl"
                      onClick={handleContinue}
                    >
                      <span className="block text-xl font-semibold leading-5 text-white">
                        Continue
                      </span>
                    </button>
                  </div>
                )}

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
    </>
  );
};

export default ScreenOne;
