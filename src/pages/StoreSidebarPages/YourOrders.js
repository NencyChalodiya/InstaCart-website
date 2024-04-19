import React from "react";
import Navbar from "../../components/LandingPageComponents/Navbar";
import BrandStoreCategoryPage from "../BrandStoreCategoryPages/BrandStoreCategoryPage";
import { Link } from "react-router-dom";
const YourOrders = () => {
  return (
    <>
      <Navbar />
      <div className="h-full bg-white">
        <div
          className="fixed z-10 w-64 overflow-y-auto bg-white border-r-2 top-20"
          style={{ height: `calc(100% - 80px)` }}
        >
          <ul className="w-full px-3 py-4 list-none">
            <li>
              <Link
                to="/store"
                className="box-border relative flex items-center w-full pl-3 pr-3 text-sm leading-5 rounded-lg cursor-pointer flex-nowrap "
              >
                <span className="flex items-center h-10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#343538"
                    xmlns="http://www.w3.org/2000/svg"
                    size="24"
                    class="e-6su6fj"
                    aria-hidden="true"
                  >
                    <path d="m12.292 6.79-1.584-1.583-6.792 6.792 6.792 6.792 1.584-1.584-4.088-4.088H20v-2.24H8.204z"></path>
                  </svg>
                </span>
                <span className="pt-2 pb-2 ml-2">Back</span>
              </Link>
            </li>
            <br />
            <hr />

            <li>
              <Link
                to="/store/account/orders"
                className="box-border relative flex items-center w-full pl-3 pr-3 text-sm leading-5 rounded-lg cursor-pointer flex-nowrap "
              >
                <span className="flex items-center h-10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#343538"
                    xmlns="http://www.w3.org/2000/svg"
                    size="24"
                    class="e-1bvo66g"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5 3h14v18h-1l-2-2-2 2-2-2-2 2-2-2-2 2H5zm3 8h8v2H8zm8-5H8v2h8z"
                    ></path>
                  </svg>
                </span>
                <span className="pt-2 pb-2 ml-2">Your orders</span>
              </Link>
            </li>

            <li>
              <Link
                to="/store/account"
                className="box-border relative flex items-center w-full pl-3 pr-3 text-sm leading-5 rounded-lg cursor-pointer flex-nowrap "
              >
                <span className="flex items-center h-10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#343538"
                    xmlns="http://www.w3.org/2000/svg"
                    size="24"
                    class="e-6su6fj"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="m21.1 6.95-2.165.418a8.4 8.4 0 0 0-2.304-2.3L17.05 2.9q-1.035-.57-2.19-.9l-1.235 1.826a8.4 8.4 0 0 0-3.248.004L9.14 2c-.77.21-1.5.52-2.19.9l.421 2.18a8.4 8.4 0 0 0-2.288 2.292L2.9 6.95Q2.33 7.985 2 9.14l1.837 1.242a8.4 8.4 0 0 0 0 3.236L2 14.86c.21.77.52 1.5.9 2.19l2.183-.422a8.4 8.4 0 0 0 2.288 2.292L6.95 21.1q1.035.57 2.19.9l1.237-1.83a8.4 8.4 0 0 0 3.248.003L14.86 22c.77-.21 1.5-.52 2.19-.9l-.419-2.168a8.4 8.4 0 0 0 2.304-2.3l2.165.418q.57-1.035.9-2.19l-1.82-1.23a8.4 8.4 0 0 0 0-3.26L22 9.14c-.21-.77-.52-1.5-.9-2.19M15.34 12a3.33 3.33 0 1 1-6.66 0 3.33 3.33 0 0 1 6.66 0"
                    ></path>
                  </svg>
                </span>
                <span className="pt-2 pb-2 ml-2">Account Settings</span>
              </Link>
            </li>

            <li>
              <a
                href="/"
                className="box-border relative flex items-center w-full pl-3 pr-3 text-sm leading-5 rounded-lg cursor-pointer flex-nowrap "
              >
                <span className="flex items-center h-10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="#343538"
                    xmlns="http://www.w3.org/2000/svg"
                    size="24"
                    class="e-6su6fj"
                    aria-hidden="true"
                  >
                    <path
                      d="M14.553 9.873c.592-.85 1.233-1.243 2.134-1.243 1.358 0 2.262 1.002 2.267 2.236.004 1.057-.496 1.745-1.547 2.422l-6.597 4.244-6.597-4.244c-1.05-.677-1.55-1.365-1.546-2.422.004-1.234.909-2.236 2.267-2.236.9 0 1.542.392 2.134 1.243l1.706 2.448V5.333h4.072v6.988zM17.936 25.665c.008-4.194-3.206-7.116-7.127-7.116s-7.133 2.924-7.125 7.116z"
                      fill="#750046"
                    ></path>
                    <path
                      d="M29.333 15.879H25.03v-4.297h-3.462v4.297h-4.302v3.425h4.302v4.297h3.462v-4.297h4.302z"
                      fill="#EC269A"
                    ></path>
                  </svg>
                </span>
                <span className="pt-2 pb-2 ml-2">Instacart+</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="box-border relative flex items-center w-full pl-3 pr-3 text-sm leading-5 rounded-lg cursor-pointer flex-nowrap "
              >
                <span className="flex items-center h-10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#343538"
                    xmlns="http://www.w3.org/2000/svg"
                    size="24"
                    class="e-6su6fj"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.714 12.561a7.1 7.1 0 0 1-.86-3.659 7.152 7.152 0 1 1 13.242 3.994L12.84 22h-1.679l-5.265-9.121a7 7 0 0 1-.183-.318m9.266-3.305a2.98 2.98 0 1 1-5.956-.208 2.98 2.98 0 0 1 5.956.208"
                    ></path>
                  </svg>
                </span>
                <span className="pt-2 pb-2 ml-2">Addresses</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="box-border relative flex items-center w-full pl-3 pr-3 text-sm leading-5 rounded-lg cursor-pointer flex-nowrap "
              >
                <span className="flex items-center h-10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#343538"
                    xmlns="http://www.w3.org/2000/svg"
                    size="24"
                    class="e-6su6fj"
                    aria-hidden="true"
                  >
                    <path d="M2 6a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2H2z"></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2 10h20v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm9 4H5v2h6z"
                    ></path>
                  </svg>
                </span>
                <span className="pt-2 pb-2 ml-2">Payement methods</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="box-border relative flex items-center w-full pl-3 pr-3 text-sm leading-5 rounded-lg cursor-pointer flex-nowrap "
              >
                <span className="flex items-center h-10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#343538"
                    xmlns="http://www.w3.org/2000/svg"
                    size="24"
                    class="e-6su6fj"
                    aria-hidden="true"
                  >
                    <path d="M11 2h2v2.083c2.838.476 5 2.944 5 5.917v4c0 1 1 2 2 2v2H4v-2c1 0 2-1 2-2v-4a6 6 0 0 1 5-5.917zM12 22a3 3 0 0 1-2.83-2h5.66A3 3 0 0 1 12 22"></path>
                  </svg>
                </span>
                <span className="pt-2 pb-2 ml-2">Notification settings</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="box-border relative flex items-center w-full pl-3 pr-3 text-sm leading-5 rounded-lg cursor-pointer flex-nowrap "
              >
                <span className="flex items-center h-10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#343538"
                    xmlns="http://www.w3.org/2000/svg"
                    size="24"
                    class="e-6su6fj"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2 6a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm15 10v-2H7v2zm-4.182-7.362L12 7l-.82 1.638-1.809.273 1.304 1.286-.3 1.803L12 11.159l1.625.841-.3-1.803 1.304-1.286z"
                    ></path>
                  </svg>
                </span>
                <span className="pt-2 pb-2 ml-2">Loyalty cards</span>
              </a>
            </li>

            <hr />
            <br />
            <li>
              <a
                href="/"
                className="box-border relative flex items-center w-full pl-3 pr-3 text-sm leading-5 rounded-lg cursor-pointer flex-nowrap "
              >
                <span className="flex items-center h-10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#343538"
                    xmlns="http://www.w3.org/2000/svg"
                    size="24"
                    class="e-6su6fj"
                    aria-hidden="true"
                  >
                    <path d="M10.07 7.757 8.656 6.343 2.999 12l5.657 5.657 1.414-1.415L6.828 13H16v-2H6.827zM17 20v-2h2V6h-2V4h4v16z"></path>
                  </svg>
                </span>
                <span className="pt-2 pb-2 ml-2">Log out</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="ml-64 ">
          <div className="h-14"></div>

          <div className="w-full py-6 ">
            <div className="w-full px-8 mb-6">
              <div className="flex items-center justify-between mt-6 ">
                <div>
                  <h2 className="flex mr-2">
                    <div className="text-xl font-bold leading-5 ">
                      Order history
                    </div>
                  </h2>
                </div>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourOrders;
