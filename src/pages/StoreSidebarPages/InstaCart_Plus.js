import React from "react";
import Navbar from "../../components/LandingPageComponents/Navbar";
const InstaCart_Plus = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div>
          <div className="flex justify-center items-center pt-6 mb-12 bg-[#750046] max-md:hidden">
            <img
              src="https://www.instacart.com/assets/express/account/instacartplus-logo-3c73d959a972a32a13c7cb1faf3ad0618d6cf08c0059c981bacab8c6f3ea8ea2.png"
              alt="instacart_logo"
              className="mb-2 w-[15%]"
            />
            <img
              src="https://www.instacart.com/assets/express/account/groceries-instacartplus-a80f45d7dfe8cbc20fad70fdf49e28de16f8a6514aee40240ad3b35e99b6c568.png"
              alt="random-img-logo"
              className="w-[45%]"
            />
          </div>
          <div className="flex justify-center mx-5 my-10 max-md:my-20">
            <div className="max-w-[950px]">
              <h1 className="text-5xl font-bold leading-7">
                <span className="text-5xl font-bold leading-7">
                  <span className="text-5xl font-bold leading-7 max-md:text-3xl max-md:leading-5 max-lg:text-4xl max-lg:leading-5">
                    Join Instacart+ for free delivery and more
                  </span>
                </span>
              </h1>
              <div className="my-12">
                <ul className="grid items-center grid-cols-2 max-md:grid-cols-1 gap-10">
                  <li className="flex items-center">
                    <div className="p-1 mr-4 h-14 w-14">
                      <img
                        src="https://www.instacart.com/assets/express/value_props/Delivery-fee-1ad261ba21f7a1c5de52562c7c344d7e918dd5f1e733cb58f4630bb85883efb0.png"
                        alt="cat-img-1"
                        className="h-14 w-14"
                      />
                    </div>
                    <div className="flex-grow">
                      <p className="text-2xl font-semibold leading-4">
                        <span>
                          <span>$0 delivery fee</span>
                        </span>
                      </p>
                      <p className="pt-2 text-sm">
                        <span>
                          <span>On orders over $35</span>
                        </span>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="p-1 mr-4 h-14 w-14">
                      <img
                        src="https://www.instacart.com/assets/express/badges/instacartplus-credit-back-white-bac602898aeeebc277455592648a80d471b076df1c991d6e0efc0869c7a0a7f1.png"
                        alt="cat-img-1"
                        className="h-14 w-14"
                      />
                    </div>
                    <div className="flex-grow">
                      <p className="text-2xl font-semibold leading-4">
                        <span>
                          <span>5% credit back</span>
                        </span>
                      </p>
                      <p className="pt-2 text-sm">
                        <span>
                          <span>On eligible pickup orders</span>
                        </span>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="p-1 mr-4 h-14 w-14">
                      <img
                        src="https://www.instacart.com/assets/express/badges/instacartplus-fees-white-721e7aa582bdb3f1b7b0a5db286cc2d48c2e417d7e2b9a1e10e1382e363086ca.png"
                        alt="cat-img-1"
                        className="h-14 w-14"
                      />
                    </div>
                    <div className="flex-grow">
                      <p className="text-2xl font-semibold leading-4">
                        <span>
                          <span>Lower services fees</span>
                        </span>
                      </p>
                      <p className="pt-2 text-sm">
                        <span>
                          <span>On all orders</span>
                        </span>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="p-1 mr-4 h-14 w-14">
                      <img
                        src="https://www.instacart.com/assets/express/value_props/peacock_value_prop-dfe4635708d01810733783ef9f475f66f8a26f4b9c7695386f99bb4257d5e4fc.png"
                        alt="cat-img-1"
                        className="h-14 w-14"
                      />
                    </div>
                    <div className="flex-grow">
                      <p className="text-2xl font-semibold leading-4">
                        <span>
                          <span>Peacock</span>
                        </span>
                      </p>
                      <p className="pt-2 text-sm">
                        <span>
                          <span>
                            Hit movies,TV,live sports,and more ($59.99/yr value)
                          </span>
                        </span>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="p-1 mr-4 h-14 w-14">
                      <img
                        src="https://www.instacart.com/assets/express/badges/instacart-plus-cc-2bc501089f2ce9cf8a9ee7383f2676bbb2d6fa70de2e784cfae7110b284a60f6.png"
                        alt="cat-img-1"
                        className="h-14 w-14"
                      />
                    </div>
                    <div className="flex-grow">
                      <p className="text-2xl font-semibold leading-4">
                        <span>
                          <span>$99/yr after trial</span>
                        </span>
                      </p>
                      <p className="pt-2 text-sm">
                        <span>
                          <span>Cancel anytime</span>
                        </span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <div className="my-3">
                  <button className="cursor-pointer relative rounded-[27px] h-14 w-[260.24px] px-6 bg-[#750046]">
                    <span className="block mx-2 text-xl font-semibold text-white text-ellipsis ">
                      Start 14-day free trial
                    </span>
                  </button>
                </div>
                <div className="mt-4 ">
                  <span>
                    <span className="whitespace-pre-wrap">
                      By signing up, you agree to the{" "}
                    </span>
                    <span className="whitespace-pre-wrap"></span>
                    <a className="text-green-600" href="/">
                      Instacart+ Terms
                    </a>
                    <span className="whitespace-pre-wrap">
                      {" "}
                      and authorize us to charge any active payment method on
                      file after your free trial. Cancel any time in Your
                      Account. Other fees, taxes, and or tips may apply.
                      Additional Instacart+ benefits are subject to{" "}
                    </span>
                    <a className="text-green-600" href="/">
                      <span>additional terms </span>
                    </a>
                    <span className="whitespace-pre-wrap">
                      Instacart may modify or terminate additional benefits at
                      any time.
                    </span>
                    <span className="whitespace-pre-wrap">
                      Redemption of Peacock benefit may be subject to a daily
                      limit.
                    </span>
                  </span>
                </div>
              </div>
              <div className="mt-8">
                <div>
                  <button className="cursor-pointer relative text-[#4F8F04] ">
                    <span className="block text-ellipsis">
                      <span>
                        <span className="text-base font-semibold whitespace-pre-wrap">
                          Add promo code
                        </span>
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mx-5 my-10">
            <div className="max-w-[950px]">
              <div className="my-4">
                <h2 className="mx-4 mb-4 text-4xl font-bold text-center">
                  <span>
                    <span className="text-center">Member exclusive offers</span>
                  </span>
                </h2>
                <div className="px-10">
                  <div className="rounded-[18px] flex flex-row w-[350px] shadow-xl mb-4 ">
                    <div
                      className="bg-white bg-center bg-no-repeat bg-cover min-h-[170px] w-[400px] rounded-l-lg"
                      style={{
                        backgroundImage:
                          "url('https://www.instacart.com/assets/express/mastercard-offer-card-black-422dbfade9a9798cc717bb31af938d197900900107e7b5d5270f5972cd2acbda.png')",
                      }}
                    ></div>

                    <div className="px-3 py-5 ">
                      <p>
                        <span>
                          <span className="whitespace-pre-wrap">
                            Get 2 free months of Instacart+ with your eligible
                            Mastercard®. Terms apply.
                          </span>
                        </span>
                      </p>
                      <p className="mt-1"></p>
                      <div>
                        <div className="mt-3 text-green-500 cursor-pointer">
                          <span>
                            <span className="text-green-500">Redeem</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[18px] flex flex-row w-[350px] shadow-xl mb-4 ">
                    <div
                      className="bg-white bg-center bg-no-repeat bg-cover min-h-[170px] w-[400px] rounded-l-lg"
                      style={{
                        backgroundImage:
                          "url('https://www.instacart.com/assets/express/mastercard-offer-card-black-422dbfade9a9798cc717bb31af938d197900900107e7b5d5270f5972cd2acbda.png')",
                      }}
                    ></div>

                    <div className="px-3 py-5 ">
                      <p>
                        <span>
                          <span className="whitespace-pre-wrap">
                            Get 2 free months of Instacart+ with your eligible
                            Mastercard®. Terms apply.
                          </span>
                        </span>
                      </p>
                      <p className="mt-1"></p>
                      <div>
                        <div className="mt-3 text-green-500 cursor-pointer">
                          <span>
                            <span className="text-green-500">Redeem</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[18px] flex flex-row w-[350px] shadow-xl mb-4 ">
                    <div
                      className="bg-white bg-center bg-no-repeat bg-cover min-h-[170px] w-[400px] rounded-l-lg"
                      style={{
                        backgroundImage:
                          "url('https://www.instacart.com/assets/express/mastercard-offer-card-black-422dbfade9a9798cc717bb31af938d197900900107e7b5d5270f5972cd2acbda.png')",
                      }}
                    ></div>

                    <div className="px-3 py-5">
                      <p>
                        <span>
                          <span className="whitespace-pre-wrap">
                            Get 2 free months of Instacart+ with your eligible
                            Mastercard®. Terms apply.
                          </span>
                        </span>
                      </p>
                      <p className="mt-1"></p>
                      <div>
                        <div className="mt-3 text-green-500 cursor-pointer">
                          <span>
                            <span className="text-green-500">Redeem</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[18px] flex flex-row w-[350px] shadow-xl mb-4 ">
                    <div
                      className="bg-white bg-center bg-no-repeat bg-cover min-h-[170px] w-[400px] rounded-l-lg"
                      style={{
                        backgroundImage:
                          "url('https://www.instacart.com/assets/express/mastercard-offer-card-black-422dbfade9a9798cc717bb31af938d197900900107e7b5d5270f5972cd2acbda.png')",
                      }}
                    ></div>

                    <div className="px-3 py-5">
                      <p>
                        <span>
                          <span className="whitespace-pre-wrap">
                            Get 2 free months of Instacart+ with your eligible
                            Mastercard®. Terms apply.
                          </span>
                        </span>
                      </p>
                      <p className="mt-1"></p>
                      <div>
                        <div className="mt-3 text-green-500 cursor-pointer">
                          <span>
                            <span className="text-green-500">Redeem</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default InstaCart_Plus;
