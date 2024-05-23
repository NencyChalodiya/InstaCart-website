import React from "react";
import Loader from "react-js-loader";
import "../../pages/Loading.css";
const ScreenTwo = ({
  setLoginUserDetails,
  loginUserDetails,
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
                      className={`w-full h-full p-5 text-base leading-6 bg-transparent  rounded-lg outline-none `}
                      value={setLoginUserDetails.password}
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

export default ScreenTwo;
