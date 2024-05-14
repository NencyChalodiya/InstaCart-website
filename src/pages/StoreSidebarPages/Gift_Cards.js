import React from "react";

const Gift_Cards = () => {
  return (
    <main>
      <div>
        <div className="flex items-center justify-center p-4 py-16 mx-72 max-2xl:mx-0 max-md:flex-col">
          <div className="flex-grow flex-shrink mt-6 max-md:order-2   ">
            
            <div className="flex flex-col justify-center ">
              <div>
                <h1 className="text-6xl leading-[65px] font-extrabold whitespace-pre-line  text-[#333538] max-xl:text-xl  ">
                  There's something for everyone with Instacart gift cards
                </h1>
                <div className="mt-6 text-[#343538] text-lg leading-5 whitespace-pre-line ">
                  Instantly send an Instacart gift card to someone special, so
                  they can get groceries, household items, and more delivered
                  from their favorite local stores.
                </div>
                <div className="flex ">
                  <button className="cursor-pointer relative text-white h-[54px] w-[166.32px] block py-2 px-3 mt-6 mb-6 rounded-[44px] bg-[#277D0F] max-md:w-[100%] max-md:font-bold">
                    <span className="block mx-2 text-ellipsis whitespace-nowrap">
                      Send gift card
                    </span>
                  </button>
                </div>
                <span className="text-[#72767E] mt-6">
                  Already have a gift card?
                </span>
                <button className="cursor-pointer text-[#108910]">
                  Log in and Redeem
                </button>
              </div>
            </div>
          </div>
          <div className="flex-grow flex-shrink">
            <div className="flex flex-col justify-center">
              <div className="">
                <img
                  src="https://d2guulkeunn7d8.cloudfront.net/assets/gift_cards/gift_card_box-e905b758115a70f32677075830e2b3da8663df4e81d22dbf58da5de4cc392a1d.png"
                  alt="gift-logo pge"
                  className="w-[1600px] h-[550px] rounded-3xl max-md:w-[343px] max-md:h-[322px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl px-4 my-[15px] mx-72 max-2xl:mx-0">
        <div className="pb-8 ">
          <h2 className="text-[#343538] text-3xl leading-8 font-bold ">
            Perfect for any occasion
          </h2>
        </div>
        <div className="flex overflow-x-auto">
          <div className="flex flex-col mr-6 mb-4 w-[343px] min-w-[343px] rounded-xl relative">
            <div className="flex justify-center w-[343px] min-w-[343px]">
              <img
                src="https://www.instacart.com/assets/gift_cards/card-1-0b1b3484746b7043f23c5209a5119504f5b44a0ce30f46c2802c4d615d74b367.png"
                alt="img-1"
                className="block w-full max-h-[316px] rounded-xl"
              />
            </div>
            <div className="flex flex-col justify-start flex-grow flex-shrink pt-6">
              <h3 className="text-[#343538] mb-3 text-xl  leading-6 font-bold">
                Support loved ones
              </h3>
            </div>
          </div>
          <div className="flex flex-col mr-6 mb-4 w-[343px] min-w-[343px] rounded-xl relative">
            <div className="flex justify-center w-[343px] min-w-[343px]">
              <img
                src="https://www.instacart.com/assets/gift_cards/card-2-b6e89928c3ab795e8a24e2bfe3173be7a96131ff49b8a01fbffef3ad69fc706a.png"
                alt="img-2"
                className="block w-full max-h-[316px] rounded-xl"
              />
            </div>
            <div className="flex flex-col justify-start flex-grow flex-shrink pt-6">
              <h3 className="text-[#343538] mb-3 text-xl  leading-6 font-bold">
                Host a virtual happy hour
              </h3>
            </div>
          </div>
          <div className="flex flex-col mr-6 mb-4 w-[343px] min-w-[343px] rounded-xl relative">
            <div className="flex justify-center w-[343px] min-w-[343px]">
              <img
                src="https://www.instacart.com/assets/gift_cards/card-3-bb097cfbce0466edeb3d7f6f9dbc43f1d9943776a0d5770a6a3895f06e6b379e.png"
                alt="img-3"
                className="block w-full max-h-[316px] rounded-xl"
              />
            </div>
            <div className="flex flex-col justify-start flex-grow flex-shrink pt-6">
              <h3 className="text-[#343538] mb-3 text-xl  leading-6 font-bold">
                Congratulate new parent
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl px-4 my-[125px] mx-72 max-2xl:mx-0 max-xl:max-w-5xl max-md:max-w-2xl">
        <h2 className="mb-8 text-3xl font-bold leading-8 text-black ">
          Give the gift of convenience
        </h2>
        <ul className="grid justify-center grid-cols-3 gap-5 pt-2 mt-8 list-none  max-md:grid-cols-1 max-md:gap-8  ">
          <li className="flex items-center">
            <img
              src="https://www.instacart.com/assets/gift_cards/value-prop-store-1ae40dc450ea91627361e04da706d2d7ba670a2a9d73dbc274d5e5ca8fc781c0.svg"
              alt="shop-local-stores"
              className="w-16 h-16 mr-6 rounded-xl"
            />
            <div className="flex-grow text-[#343538]">
              <h3 className="text-lg font-bold leading-6">Shop local stores</h3>
              <span className="text-sm leading-5">
                From groceries to electronics and household items, Instacart
                connects you to hundreds of local stores.
              </span>
            </div>
          </li>
          <li className="flex items-center ">
            <img
              src="https://www.instacart.com/assets/gift_cards/value-prop-clock-1bfe8d416f811e6f4ecba6b3d1cfe6c077dbcb9a5495766b80400583d330cc77.svg"
              alt="save-time"
              className="w-16 h-16 mr-6 rounded-xl"
            />
            <div className="flex-grow text-[#343538]">
              <h3 className="text-lg font-bold leading-6">Save time</h3>
              <span className="text-sm leading-5">
                Instacart spares you time spent in a store and gives you access
                to things you need easily and safely with same-day delivery and
                pick up.
              </span>
            </div>
          </li>
          <li className="flex items-center">
            <img
              src="https://www.instacart.com/assets/gift_cards/value-prop-mail-64579cefc1324b93b03164d4df25e06c3069ce67dd40dbeca684d5ddf6adaf00.svg"
              alt="send-instantly"
              className="w-16 h-16 mr-6 rounded-xl"
            />
            <div className="flex-grow text-[#343538]">
              <h3 className="text-lg font-bold leading-6">Send instantly</h3>
              <span className="text-sm leading-5">
                Once you purchase a gift card, the recipient will receive it in
                their email in seconds. The best part is, gift cards never
                expire, so they can take their time browsing their favorite
                stores.
              </span>
            </div>
          </li>
        </ul>
      </div>

      <div>
        <div className="flex justify-center items-center rounded-xl max-w-6xl my-[125px] mx-72 max-2xl:mx-0 max-md:flex-col">
          <div className="flex-grow flex-shrink w-full">
            <img
              src="https://d2d8wwwkmhfcva.cloudfront.net/576x576/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/gift_cards/spread-the-love-c1386ae601ce6f6d25c586a418550b100602300b37229fe7d091f8ee8a164942.jpg"
              alt="adv-img"
              className="rounded-xl w-[576px] h-[576px] max-xl:w-[480px] max-xl:h-[480px] max-md:w-[716px] max-md:h-[247px] max-md:px-2 max-lg:w-[600px] max-lg:h-[247px]"
            />
          </div>
          <div className="w-[576px] max-h-[576px] px-20 ">
            <div className="w-[416px] h-[114px]">
              <h2 className="mt-1 mb-4 text-[#343538] text-3xl font-bold leading-8 max-md:text-2xl ">
                Spread the love
              </h2>
              <span className="whitespace-pre-wrap text-lg leading-5 text-[#343538] max-md:text-sm">
                Purchase gift cards in bulk or in the form of Instacart+
                Memberships for your employees, community, or most loyal
                customers.
              </span>
            </div>
            <button className="cursor-pointer text-white px-4 mt-6 rounded-[44px] bg-[#108910] h-14 w-[218px] max-md:w-full">
              <span className="mx-2 text-lg font-bold leading-5 text-ellipsis">
                Purchase in bulk
              </span>
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </main>
  );
};

export default Gift_Cards;
