import React from "react";

import GiftSvg from "../../assets/images/gift.svg";

const ApplyForGift = ({
  toggleGiftAccordion,
  isGiftExpanded,
  giftImages,
  giftOption,
  giftUserDetails,
  setGiftUserDetails,
}) => {
  return (
    <div>
      <div className="px-6 py-5 mt-1 border-b ">
        <div>
          <div
            className="relative flex items-center cursor-pointer"
            onClick={toggleGiftAccordion}
          >
            <img src={GiftSvg} alt="gift-svg" />
            <div className="mx-3 flex-grow">
              <h2 className="text-lg">Make it a gift</h2>
            </div>
            {giftOption && (
              <div className="flex items-center">
                {isGiftExpanded ? (
                  <span>&#9650;</span> // Up arrow
                ) : (
                  <span>&#9660;</span> // Down arrow
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {giftOption && (
        <>
          {isGiftExpanded && (
            <div className="p-6 border-b">
              <form>
                <div>
                  <fieldset className="my-3">
                    <legend className="my-2">To</legend>
                    <div className="flex items-center rounded-[12px] h-[55px] box-border border">
                      <div className="h-full relative flex-grow">
                        <input
                          className="pt-2 px-3 pb-2 w-full h-full rounded-[12px] bg-transparent outline-none"
                          placeholder="Recipient name"
                          name="recipitentName"
                          onChange={(e) => {
                            setGiftUserDetails({
                              ...giftUserDetails,
                              recipitentName: e.target.value,
                            });
                            // Clear phone number error message
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex flex-row items-center w-full ">
                        <div className="cursor-pointer relative py-2 pr-[6px] pl-3 rounded-l-lg border h-14 flex items-center  mt-4 ">
                          <span className="flex items-center h-full text-ellipsis">
                            <select
                              name="recipitentCountryCode"
                              value={giftUserDetails.recipitentCountryCode}
                              onChange={(e) =>
                                setGiftUserDetails({
                                  ...giftUserDetails,
                                  recipitentCountryCode: e.target.value,
                                })
                              }
                            >
                              <option value="+91">+91 (India)</option>
                              <option value="+1">+1 (USA)</option>
                              <option value="+1">+1 (Canada)</option>
                            </select>
                          </span>
                        </div>

                        <div className="flex flex-row flex-nowrap items-center h-14 box-border max-w-[600px] rounded-r-lg border w-full mt-4">
                          <div className="relative flex-grow w-full h-full">
                            <input
                              className={`w-full h-full p-5 text-base leading-6 bg-transparent  rounded-lg outline-none  `}
                              placeholder="Recipient Mobile Number"
                              value={giftUserDetails.recipitentMobileNo}
                              onChange={(e) => {
                                setGiftUserDetails({
                                  ...giftUserDetails,
                                  recipitentMobileNo: e.target.value,
                                });
                                // Clear phone number error message
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* {phoneError && (
                            <span className="text-red-500 text-sm">
                              {phoneError}
                            </span>
                          )} */}

                    <div className="mt-4 mb-2">
                      Your recipient can schedule delivery
                    </div>
                    <div>
                      We'll send your recipient a message with delivery details.
                      They can schedule their delivery for a convenient time.
                    </div>
                  </fieldset>
                </div>
                <div className="my-3">
                  <div>
                    <div className="my-2">From</div>
                    <div className="flex items-center rounded-[12px] h-[55px] box-border border">
                      <div className="h-full relative flex-grow">
                        <input
                          className="pt-2 px-3 pb-2 w-full h-full rounded-[12px] bg-transparent outline-none"
                          placeholder="Your name"
                          name="senderName"
                          onChange={(e) => {
                            setGiftUserDetails({
                              ...giftUserDetails,
                              senderName: e.target.value,
                            });
                            // Clear phone number error message
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inline-grid my-3">
                  <div className="flex items-center">
                    <span className="my-2 flex-grow">
                      Choose a digital card
                    </span>
                    <span className="text-right flex-grow">optional</span>
                  </div>
                  <div className="pt-2 pb-4 overflow-x-scroll">
                    <ul className="flex space-x-4">
                      {giftImages ? (
                        <>
                          {giftImages.giftCardImages.map((giftImg) => (
                            <li className="inline-block" key={giftImg.id}>
                              <div className="inline-block h-full w-[140px] rounded-[4px]">
                                <img
                                  src={giftImg.image}
                                  className="h-full w-full"
                                />
                              </div>
                            </li>
                          ))}
                        </>
                      ) : (
                        <></>
                      )}
                    </ul>
                  </div>
                </div>

                <div className="my-3">
                  <div className="flex items-center">
                    <span className="my-2 flex-grow">Personal message</span>
                    <span className="text-right flex-grow">optional</span>
                  </div>
                  <div className="relative border rounded-[12px]">
                    <textarea
                      className="rounded-[12px] box-border  pt-5 px-3 pb-3 relative w-full outline-none"
                      rows={5}
                      placeholder="Add a personal message"
                      name="giftMessage"
                      onChange={(e) => {
                        setGiftUserDetails({
                          ...giftUserDetails,
                          giftMessage: e.target.value,
                        });
                        // Clear phone number error message
                      }}
                    ></textarea>
                  </div>
                  <div className="text-right flex-grow">
                    250 characters remaining
                  </div>
                </div>
                <div className="my-2 text-center">
                  <button className="px-4 h-[54px] w-full rounded-[27px] relative cursor-pointer bg-gray-100">
                    <span className="block mx-2">Save</span>
                  </button>
                </div>
                <div className="my-2 text-center">
                  <button className="px-4 h-[54px] w-full rounded-[27px] relative cursor-pointer">
                    <span className="block mx-2 text-green-700">close</span>
                  </button>
                </div>
              </form>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ApplyForGift;
