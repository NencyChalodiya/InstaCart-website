import React from "react";
import Loader from "react-js-loader";
import "../../pages/Loading.css";
const SignupScreenThree = ({
  isEmailSignup,
  userDetails,
  otp,
  inputRefs,
  handleInputChange,
  timer,
  ResendOtp,
  isLoading,
  verifyOtpOfUser,
}) => {
  return (
    <>
      <div className="min-h-[300px] static">
        <div className="w-full h-48 ">
          <div className="w-full h-52">
            <div>
              <div className="relative mt-3 mb-3">
                <h4 className="mb-2 text-gray-400">
                  We sent a 6-digit code to{" "}
                  {isEmailSignup ? userDetails.email : userDetails.phoneno}. It
                  expires soon —{" "}
                  {isEmailSignup
                    ? "check your inbox (and spam)"
                    : "check your text message"}
                </h4>
                <div className="flex justify-center space-x-4">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      maxLength="1"
                      className="border-none outline-none text-center w-12"
                      style={{
                        borderBottom: "2px solid",
                        borderBottomColor: digit ? "#277D0F" : "#D1D5DB",
                        margin: "0 4px",
                        paddingBottom: "6px",
                        fontSize: "1.5rem",
                      }}
                      value={digit}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                  ))}
                </div>
                <span>
                  {timer > 0 ? (
                    `Resend code in ${Math.floor(timer / 60)}:${timer % 60}`
                  ) : (
                    <div
                      className="mt-2  font-bold py-2 px-2 text-[#2C890F] text-lg cursor-pointer "
                      onClick={() => ResendOtp()}
                    >
                      Resend code
                    </div>
                  )}
                </span>
              </div>
              <div className="mt-3 mb-3">
                <button
                  type="submit"
                  className={`box-border relative flex items-center justify-center w-full bg-[#2C890F] border cursor-pointer h-14 rounded-xl ${
                    isLoading ? "opacity-50" : ""
                  }`}
                  onClick={() => verifyOtpOfUser()}
                  disabled={isLoading}
                >
                  <div className="flex items-center justify-center">
                    <span className="block text-xl font-semibold leading-5 text-white">
                      Sign up
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

export default SignupScreenThree;
