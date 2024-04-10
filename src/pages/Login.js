import { Modal } from "antd";
import React  from "react";
import { BsTelephoneForwardFill } from "react-icons/bs";

const Login = ({ login, onCancel, onClickSignup, onResetpasswordHandler }) => {
 
  return (
    <>
      <Modal
        title={<span className="text-3xl font-bold">Log In</span>}
        centered
        visible={login}
        onCancel={onCancel}
        footer={null}
      >
        <div className="min-h-[525px] static">
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
                    className="ml-2 rounded-full h-9 w-25"
                    src="./images/facebook.webp"
                    alt="google-logo"
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
              <form>
                <div className="relative mt-3 mb-3">
                  <div className="box-border flex flex-row items-center border flex-nowrap h-14 rounded-xl">
                    <div className="relative flex-grow h-full">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full h-full p-5 text-base leading-6 bg-transparent border-none rounded-lg"
                      ></input>
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
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-3 mb-3">
                  <p className="">
                    Forgot Passord?{" "}
                    <button
                      className="relative inline-flex text-green-600 cursor-pointer "
                      onClick={() => onResetpasswordHandler()}
                    >
                      <span className="block font-medium">Reset it</span>
                    </button>
                  </p>
                </div>

                <div className="mt-3 mb-3">
                  <button
                    type="submit"
                    className="box-border relative flex items-center justify-center w-full bg-green-600 border cursor-pointer h-14 rounded-xl"
                  >
                    <span className="block text-xl font-semibold leading-5 text-white">
                      Log in
                    </span>
                  </button>
                </div>
                <hr />
              </form>
              <div className="pt-2 pb-2 ml-4 mr-4 text-center ">
                <div className="mt-3 mb-3">
                  <p className="text-lg">Don't have an account?</p>
                </div>
                <div className="mt-3 mb-3">
                  <button
                    className="relative pl-6 pr-6 text-green-600 cursor-pointer"
                    onClick={onClickSignup}
                  >
                    <span className="text-base font-semibold">Sign up</span>
                  </button>
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
