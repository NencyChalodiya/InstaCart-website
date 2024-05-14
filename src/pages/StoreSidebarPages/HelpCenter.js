import React from "react";
import { Link } from "react-router-dom";
const HelpCenter = () => {
  return (
    <div className="max-w-[944px] mx-auto px-4 w-full flex-grow basis-auto">
      <main className="pb-16 pt-20 relative min-h-[600px]">
        <div>
          <section className="pb-12">
            <h1 className="text-3xl font-bold leading-6">
              Hi! How can we help?
            </h1>
            <section className="pt-2">
              <form>
                <div className="max-w-[592px] relative flex rounded-[8px]   ">
                  <div className="flex w-full border rounded-[8px] z-10 mt-4 pl-2 items-center bg-white shadow">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="#72767E"
                      xmlns="http://www.w3.org/2000/svg"
                      size="28"
                      color="systemGrayscale50"
                      class="e-6kodf"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.496 17.618a8 8 0 1 1 2.121-2.121l3.944 3.942-2.122 2.122zM17 11a6 6 0 1 1-12 0 6 6 0 0 1 12 0"
                      ></path>
                    </svg>

                    <input
                      type="text"
                      className="pl-4 w-full bg-white h-[56px] rounded-[8px] outline-none"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </form>
            </section>
          </section>
          <section className="pb-6">
            <h2 className="text-2xl font-bold leading-4">Your order</h2>
            <p className="mt-4 text-sm leading-5 text-gray-500">
              View, rate, and report any issues with your orders
            </p>
            <Link
              to="/store/account/orders"
              className="block mt-4 text-sm leading-5 text-[#108910] font-semibold hover:text-gray-800"
            >
              View all orders
            </Link>
          </section>
          <section className="pb-6 mt-5">
            <h2 className="text-2xl font-bold leading-4">Popular Articles</h2>
            <section className="pt-6">
              <div className="grid grid-cols-3 gap-10 ">
                <div>
                  <h3 className="mb-1">
                    <a className="inline-block text-[#108910] cursor-pointer hover:underline font-bold text-xl">
                      Are you a senior?
                    </a>
                  </h3>
                  <div class="w-max-xs  ">
                    <p class="truncate overflow-hidden">
                      Instacart offers a special Senior Support Line for
                      customers over age 60. We have a dedicated team of
                      specialists who specialize in setting up accounts and
                      placing orders for customers who may need
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="mb-1">
                    <a
                      className="inline-block text-[#108910] cursor-pointer hover:underline font-bold text-xl"
                      href="#"
                    >
                      How Instacart works
                    </a>
                  </h3>
                  <div class="w-max-xs">
                    <p class="truncate overflow-hidden">
                      You’re busy, so every minute counts. Let us connect you
                      with shoppers in your area to shop and deliver items from
                      your favorite stores in as fast as an hour. It’s just that
                      easy.Check out this
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="mb-1">
                    <a className="inline-block text-[#108910] cursor-pointer hover:underline font-bold text-xl">
                      Sign up for Instacart+
                    </a>
                  </h3>
                  <div class="w-max-xs ">
                    <p class="truncate overflow-hidden">
                      You don’t need a membership to shop with Instacart.
                      However, Instacart+, previously known as Instacart
                      Express, is a membership option for customers who want to
                      save more and get other exclusive
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="mb-1">
                    <a className="inline-block text-[#108910] cursor-pointer hover:underline font-bold text-xl">
                      Tracking your order and delivery
                    </a>
                  </h3>
                  <div class="w-max-xs ">
                    <p class="truncate overflow-hidden">
                      It’s easy to track your order, from the moment your
                      personal shopper starts finding your items until the
                      moment it arrives at your door. For best results, download
                      the latest version of the Instacart
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="mb-1">
                    <a className="inline-block text-[#108910] cursor-pointer hover:underline font-bold text-xl">
                      Coupons and promotions
                    </a>
                  </h3>
                  <div class="w-max-xs ">
                    <p class="truncate overflow-hidden">
                      Coupons Coupons and in-store discounts are sometimes
                      available on Instacart. The coupons you see on Instacart
                      are manufacturer’s coupons. Click or tap on the coupon box
                      below an item to apply it to
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="mb-1">
                    <a className="inline-block text-[#108910] cursor-pointer hover:underline font-bold text-xl">
                      Problem with your order
                    </a>
                  </h3>
                  <div class="w-max-xs ">
                    <p class="truncate overflow-hidden">
                      Did you receive a delivery you’re not completely satisfied
                      with? Usually, we can make things right quickly when you
                      report a problem through the Instacart app or website. You
                      have up to 4 days after
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </section>
          <section className="pb-6 mt-5">
            <h2 className="text-2xl font-bold leading-4">All Topics</h2>
            <section className="pt-8 pr-28">
              <div className="flex flex-wrap justify-between">
                <article className="flex-shrink mb-8 basis-auto">
                  <div className="relative flex items-center">
                    <div className="flex-shrink mr-4 basis-auto">
                      <img
                        src="https://d2guulkeunn7d8.cloudfront.net/assets/how_instacart_works-302a8824cbee0bd4113c23d42418116a.png"
                        alt="img-1"
                        className="block w-16 h-16"
                      />
                    </div>
                    <div>
                      <h3 className="mb-1">
                        <a
                          href="#"
                          className="text-[#108910] cursor-pointer hover:underline font-bold text-xl "
                        >
                          How instacart works
                        </a>
                      </h3>
                      <p className="w-60 text-balance">
                        What we do, areas and stores we serve, communicating
                        with us
                      </p>
                    </div>
                  </div>
                </article>
                <article className="flex-shrink mb-8 basis-auto">
                  <div className="relative flex items-center">
                    <div className="flex-shrink mr-4 basis-auto">
                      <img
                        src="https://d2guulkeunn7d8.cloudfront.net/assets/how_instacart_works-302a8824cbee0bd4113c23d42418116a.png"
                        alt="img-1"
                        className="block w-16 h-16"
                      />
                    </div>
                    <div>
                      <h3 className="mb-1">
                        <a
                          href="#"
                          className="text-[#108910] cursor-pointer hover:underline font-bold text-xl "
                        >
                          How instacart works
                        </a>
                      </h3>
                      <p className="w-60 text-balance">
                        What we do, areas and stores we serve, communicating
                        with us
                      </p>
                    </div>
                  </div>
                </article>
                <article className="flex-shrink mb-8 basis-auto">
                  <div className="relative flex items-center">
                    <div className="flex-shrink mr-4 basis-auto">
                      <img
                        src="https://d2guulkeunn7d8.cloudfront.net/assets/how_instacart_works-302a8824cbee0bd4113c23d42418116a.png"
                        alt="img-1"
                        className="block w-16 h-16"
                      />
                    </div>
                    <div>
                      <h3 className="mb-1">
                        <a
                          href="#"
                          className="text-[#108910] cursor-pointer hover:underline font-bold text-xl "
                        >
                          How instacart works
                        </a>
                      </h3>
                      <p className="w-60 text-balance">
                        What we do, areas and stores we serve, communicating
                        with us
                      </p>
                    </div>
                  </div>
                </article>
                <article className="flex-shrink mb-8 basis-auto">
                  <div className="relative flex items-center">
                    <div className="flex-shrink mr-4 basis-auto">
                      <img
                        src="https://d2guulkeunn7d8.cloudfront.net/assets/how_instacart_works-302a8824cbee0bd4113c23d42418116a.png"
                        alt="img-1"
                        className="block w-16 h-16"
                      />
                    </div>
                    <div>
                      <h3 className="mb-1">
                        <a
                          href="#"
                          className="text-[#108910] cursor-pointer hover:underline font-bold text-xl "
                        >
                          How instacart works
                        </a>
                      </h3>
                      <p className="w-60 text-balance">
                        What we do, areas and stores we serve, communicating
                        with us
                      </p>
                    </div>
                  </div>
                </article>
                <article className="flex-shrink mb-8 basis-auto">
                  <div className="relative flex items-center">
                    <div className="flex-shrink mr-4 basis-auto">
                      <img
                        src="https://d2guulkeunn7d8.cloudfront.net/assets/how_instacart_works-302a8824cbee0bd4113c23d42418116a.png"
                        alt="img-1"
                        className="block w-16 h-16"
                      />
                    </div>
                    <div>
                      <h3 className="mb-1">
                        <a
                          href="#"
                          className="text-[#108910] cursor-pointer hover:underline font-bold text-xl "
                        >
                          How instacart works
                        </a>
                      </h3>
                      <p className="w-60 text-balance">
                        What we do, areas and stores we serve, communicating
                        with us
                      </p>
                    </div>
                  </div>
                </article>
                <article className="flex-shrink mb-8 basis-auto">
                  <div className="relative flex items-center">
                    <div className="flex-shrink mr-4 basis-auto">
                      <img
                        src="https://d2guulkeunn7d8.cloudfront.net/assets/how_instacart_works-302a8824cbee0bd4113c23d42418116a.png"
                        alt="img-1"
                        className="block w-16 h-16"
                      />
                    </div>
                    <div>
                      <h3 className="mb-1">
                        <a
                          href="#"
                          className="text-[#108910] cursor-pointer hover:underline font-bold text-xl "
                        >
                          How instacart works
                        </a>
                      </h3>
                      <p className="w-60 text-balance">
                        What we do, areas and stores we serve, communicating
                        with us
                      </p>
                    </div>
                  </div>
                </article>
                <article className="flex-shrink mb-8 basis-auto">
                  <div className="relative flex items-center">
                    <div className="flex-shrink mr-4 basis-auto">
                      <img
                        src="https://d2guulkeunn7d8.cloudfront.net/assets/how_instacart_works-302a8824cbee0bd4113c23d42418116a.png"
                        alt="img-1"
                        className="block w-16 h-16"
                      />
                    </div>
                    <div>
                      <h3 className="mb-1">
                        <a
                          href="#"
                          className="text-[#108910] cursor-pointer hover:underline font-bold text-xl "
                        >
                          How instacart works
                        </a>
                      </h3>
                      <p className="w-60 text-balance">
                        What we do, areas and stores we serve, communicating
                        with us
                      </p>
                    </div>
                  </div>
                </article>
                <article className="flex-shrink mb-8 basis-auto">
                  <div className="relative flex items-center">
                    <div className="flex-shrink mr-4 basis-auto">
                      <img
                        src="https://d2guulkeunn7d8.cloudfront.net/assets/how_instacart_works-302a8824cbee0bd4113c23d42418116a.png"
                        alt="img-1"
                        className="block w-16 h-16"
                      />
                    </div>
                    <div>
                      <h3 className="mb-1">
                        <a
                          href="#"
                          className="text-[#108910] cursor-pointer hover:underline font-bold text-xl "
                        >
                          How instacart works
                        </a>
                      </h3>
                      <p className="w-60 text-balance">
                        What we do, areas and stores we serve, communicating
                        with us
                      </p>
                    </div>
                  </div>
                </article>
                <article className="flex-shrink mb-8 basis-auto">
                  <div className="relative flex items-center">
                    <div className="flex-shrink mr-4 basis-auto">
                      <img
                        src="https://d2guulkeunn7d8.cloudfront.net/assets/how_instacart_works-302a8824cbee0bd4113c23d42418116a.png"
                        alt="img-1"
                        className="block w-16 h-16"
                      />
                    </div>
                    <div>
                      <h3 className="mb-1">
                        <a
                          href="#"
                          className="text-[#108910] cursor-pointer hover:underline font-bold text-xl "
                        >
                          How instacart works
                        </a>
                      </h3>
                      <p className="w-60 text-balance">
                        What we do, areas and stores we serve, communicating
                        with us
                      </p>
                    </div>
                  </div>
                </article>
                <article className="flex-shrink mb-8 basis-auto">
                  <div className="relative flex items-center">
                    <div className="flex-shrink mr-4 basis-auto">
                      <img
                        src="https://d2guulkeunn7d8.cloudfront.net/assets/how_instacart_works-302a8824cbee0bd4113c23d42418116a.png"
                        alt="img-1"
                        className="block w-16 h-16"
                      />
                    </div>
                    <div>
                      <h3 className="mb-1">
                        <a
                          href="#"
                          className="text-[#108910] cursor-pointer hover:underline font-bold text-xl "
                        >
                          How instacart works
                        </a>
                      </h3>
                      <p className="w-60 text-balance">
                        What we do, areas and stores we serve, communicating
                        with us
                      </p>
                    </div>
                  </div>
                </article>
                <article className="flex-shrink mb-8 basis-auto">
                  <div className="relative flex items-center">
                    <div className="flex-shrink mr-4 basis-auto">
                      <img
                        src="https://d2guulkeunn7d8.cloudfront.net/assets/how_instacart_works-302a8824cbee0bd4113c23d42418116a.png"
                        alt="img-1"
                        className="block w-16 h-16"
                      />
                    </div>
                    <div>
                      <h3 className="mb-1">
                        <a
                          href="#"
                          className="text-[#108910] cursor-pointer hover:underline font-bold text-xl "
                        >
                          How instacart works
                        </a>
                      </h3>
                      <p className="w-60 text-balance">
                        What we do, areas and stores we serve, communicating
                        with us
                      </p>
                    </div>
                  </div>
                </article>
                <article className="flex-shrink mb-8 basis-auto">
                  <div className="relative flex items-center">
                    <div className="flex-shrink mr-4 basis-auto">
                      <img
                        src="https://d2guulkeunn7d8.cloudfront.net/assets/how_instacart_works-302a8824cbee0bd4113c23d42418116a.png"
                        alt="img-1"
                        className="block w-16 h-16"
                      />
                    </div>
                    <div>
                      <h3 className="mb-1">
                        <a
                          href="#"
                          className="text-[#108910] cursor-pointer hover:underline font-bold text-xl "
                        >
                          How instacart works
                        </a>
                      </h3>
                      <p className="w-60 text-balance">
                        What we do, areas and stores we serve, communicating
                        with us
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </section>
          </section>

          <section>
            <div className="flex max-md:flex-col">
              <div className="flex-grow flex-shrink mb-8">
                <h2 className="mb-4 text-2xl font-bold leading-4">
                  Need to get in touch?
                </h2>
                <p className="mb-4 text-lg leading-5 text-gray-500">
                  Our Instcart Customer Experience team is here to help
                </p>
                <button
                  className="cursor-pointer relative bg-[#108910]
                 text-white rounded-[27px] py-2 px-4 font-bold h-[40px] w-[125px]"
                >
                  <span className="block mx-2">Get help</span>
                </button>
              </div>
              <div className="flex-grow flex-shrink ml-24 max-md:ml-0">
                <h2 className="mb-4 text-2xl font-bold leading-4">
                  Are you a Senior?
                </h2>
                <p className="mb-4 text-lg leading-5 text-gray-500">
                  {" "}
                  Contact our dedicated Senior Support Service if you need help
                  getting started or with an existing order.
                </p>
                <div className="flex items-center mt-2 mb-2">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="#72767E"
                    xmlns="http://www.w3.org/2000/svg"
                    size="28"
                    color="systemGrayscale50"
                    aria-hidden="true"
                  >
                    <path d="M7 4H2c0 11 7 18 18 18v-5l-4-2-2 2c-3-1-6-4-7-7l2-2z"></path>
                    <path d="M14 6h2.586l-4.293 4.293 1.414 1.414L18 7.414V10h2V4h-6z"></path>
                  </svg>
                  <a href="#" className="ml-2 text-xl font-semibold">
                    1.844.981.3433
                  </a>
                </div>
                <p className="mb-4 text-lg leading-5 text-gray-500">
                  Daily: 8am - 11pm ET
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default HelpCenter;
