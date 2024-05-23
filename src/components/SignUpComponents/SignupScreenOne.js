import React from "react";
import GoogleSvg from "../../assets/images/google.svg";
import FacebookSvg from "../../assets/images/facebook.svg";
import EmailSvg from "../../assets/images/emailIcon.svg";
import PhoneSvg from "../../assets/images/phoneIcon.svg";
const SignupScreenOne = ({
  setIsEmailSignup,
  isEmailSignup,
  emailError,
  userDetails,
  setUserDetails,
  setEmailError,
  setPhoneError,
  phoneError,
  handleContinue,
  onClickLogin,
}) => {
  return (
    <>
      <div className="h-[535px]">
        <div className="min-h-[515px] static">
          <div className="w-full h-48 ">
            <div className="w-full h-52">
              <div className="flex items-center w-full mt-3 mb-4 border rounded-full cursor-pointer h-11 gap-11">
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
                  onClick={() => setIsEmailSignup(!isEmailSignup)}
                >
                  {!isEmailSignup ? (
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
                    {!isEmailSignup
                      ? "Continue with Email"
                      : "Continue with Phone"}
                  </span>
                </button>
              </div>
              <h2 className="w-full leading-[0.1em]  text-center border-b-[1px] mt-[10px] mb-[20px]">
                <span className="pl-[10px] pr-[10px] bg-white">or</span>
              </h2>
              <div>
                {isEmailSignup ? (
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
                          className={`w-full h-full p-5 text-base leading-6 bg-transparent  rounded-lg outline-none   ${
                            emailError
                              ? "border-2 border-rose-600 focus:outline-none"
                              : "border-none focus:outline-black"
                          }`}
                          value={userDetails.email}
                          onChange={(e) => {
                            setUserDetails({
                              ...userDetails,
                              email: e.target.value,
                            });
                            setEmailError(""); // Clear email error message
                          }}
                        />
                      </div>
                    </div>
                    {emailError && (
                      <span className="text-red-500 text-sm">{emailError}</span>
                    )}

                    <p className=" mt-1 text-xs font-medium ">
                      By continuing,you agree to our
                      <span className="block text-xs font-medium text-[#2C890F] cursor-pointer ">
                        Terms of service,Privacy Policy & Health Data Notice
                      </span>
                    </p>
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
                                  value={userDetails.countryCode}
                                  onChange={(e) =>
                                    setUserDetails({
                                      ...userDetails,
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
                                  className={`w-full h-full p-5 text-base leading-6 bg-transparent  rounded-lg outline-none  `}
                                  placeholder="Phone number"
                                  value={userDetails.phoneno}
                                  onChange={(e) => {
                                    setUserDetails({
                                      ...userDetails,
                                      phoneno: e.target.value,
                                    });
                                    setPhoneError(""); // Clear phone number error message
                                  }}
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
                        We will send a text with a verification code.Message and
                        data rates may apply.By continuing,you agree to our
                        <span className="block text-xs font-medium text-[#2C890F] cursor-pointer ">
                          Terms of service,Privacy Policy & Health Data Notice
                        </span>
                      </span>
                    </div>
                  </div>
                )}

                <div className=" mb-3">
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
    </>
  );
};

export default SignupScreenOne;
