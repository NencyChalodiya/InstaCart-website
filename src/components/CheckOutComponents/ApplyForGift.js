import React from "react";

import GiftSvg from "../../assets/images/gift.svg";

const ApplyForGift = ({ toggleGiftAccordion, isGiftExpanded, giftImages }) => {
  return (
    <div>
      <div className="p-6 border-b ">
        <div>
          <div
            className="relative flex items-center cursor-pointer"
            onClick={toggleGiftAccordion}
          >
            <img src={GiftSvg} alt="gift-svg" />
            <div className="mx-3 flex-grow">
              <h2 className="text-lg">Make it a gift</h2>
            </div>
            <div className="flex items-center">
              {isGiftExpanded ? (
                <span>&#9650;</span> // Up arrow
              ) : (
                <span>&#9660;</span> // Down arrow
              )}
            </div>
          </div>
        </div>
      </div>
      {isGiftExpanded && (
        <div className="p-6 border-b">
          <form>
            <div>
              <fieldset className="my-3">
                <legend className="my-2">To</legend>
                <div className="flex items-center rounded-[12px] h-[55px] box-border ">
                  <div className="h-full relative flex-grow">
                    <input
                      className="pt-2 px-3 pb-2 w-full h-full rounded-[12px] bg-transparent"
                      placeholder="Recipient name"
                    />
                  </div>
                </div>
                {/* <div className="my-3">
                <div>
                  <div className="flex items-center w-full"></div>
                </div>
              </div> */}
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
                <div className="flex items-center rounded-[12px] h-[55px] box-border">
                  <div className="h-full relative flex-grow">
                    <input
                      className="pt-2 px-3 pb-2 w-full h-full rounded-[12px] bg-transparent"
                      placeholder="Your name"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-grid my-3">
              <div className="flex items-center">
                <span className="my-2 flex-grow">Choose a digital card</span>
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
              <div className="relative">
                <textarea
                  className="rounded-[12px] box-border  pt-5 px-3 pb-3 relative w-full "
                  rows={5}
                  placeholder="Add a personal message"
                ></textarea>
              </div>
              <div className="text-right flex-grow">
                250 characters remaining
              </div>
            </div>
            <div className="my-2 text-center">
              <button className="px-4 h-[54px] w-full rounded-[27px] relative cursor-pointer">
                <span className="block mx-2">Save</span>
              </button>
            </div>
            <div className="my-2 text-center">
              <button className="px-4 h-[54px] w-full rounded-[27px] relative cursor-pointer">
                <span className="block mx-2">close</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ApplyForGift;
