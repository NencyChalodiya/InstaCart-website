import React from "react";
import Loader from "react-js-loader";
import "../../pages/Loading.css";
const SignupScreenTwo = ({
  passwordError,
  userDetails,
  setUserDetails,
  setPasswordError,
  isLoading,
  handleContinue,
}) => {
  return (
    <>
      <div className="min-h-[300px] static">
        <div className="w-full h-48 ">
          <div className="w-full h-52">
            <div>
              <div className="relative mt-3 mb-3">
                <h4 className="mb-2 text-gray-400">
                  Enter atleast 8 characters
                </h4>
                <div className="box-border flex flex-row items-center border flex-nowrap h-14 rounded-xl">
                  <div className="relative flex-grow h-full">
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter a password"
                      className={`w-full h-full p-5 text-base leading-6 bg-transparent  rounded-lg outline-none   ${
                        passwordError
                          ? "border-2 border-rose-600 focus:outline-none"
                          : "border-none focus:outline-black"
                      }`}
                      value={userDetails.password}
                      onChange={(e) => {
                        setUserDetails({
                          ...userDetails,
                          password: e.target.value,
                        });
                        setPasswordError(""); // Clear password error message
                      }}
                    />
                  </div>
                </div>
                {passwordError && (
                  <span className="text-red-500 text-sm">{passwordError}</span>
                )}
              </div>

              <div className="mt-3 mb-3">
                <button
                  type="submit"
                  className={`box-border relative flex items-center justify-center w-full bg-[#2C890F] border cursor-pointer h-14 rounded-xl ${
                    isLoading ? "opacity-50" : ""
                  }`}
                  onClick={handleContinue}
                  disabled={isLoading}
                >
                  <div className="flex items-center justify-center">
                    <span className="block text-xl font-semibold leading-5 text-white">
                      Continue
                    </span>
                    {isLoading && (
                      <div className="ml-2 h-5 w-5 mt-[-20px]">
                        <Loader size={20} />
                      </div>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupScreenTwo;
