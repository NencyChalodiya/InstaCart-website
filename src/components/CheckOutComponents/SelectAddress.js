import React from "react";
import DeliverySvg from "../../assets/images/delivery.svg";
import DownArrowSvg from "../../assets/images/downArrow.svg";
import GreenRadioSvg from "../../assets/images/greenRadioSvg.svg";

const SelectAddress = ({
  toggleAccordion,
  isExpanded,
  confirmedAddress,
  handleAddressSelection,
  chooseAddress,
  handleEditAddress,
  handleConfirmAddress,
  setRegisterAddressModal,
  address,
  addressType,
}) => {
  return (
    <div className="border-b">
      <div className="px-6 py-3 cursor-pointer" onClick={toggleAccordion}>
        <div>
          <div className="relative flex items-center justify-between">
            <div className="flex items-center">
              <img src={DeliverySvg} alt="delivery-svg" />
              <div className=" flex-grow min-h-11 flex flex-col justify-center">
                {isExpanded ? (
                  <h2 className="text-xl">
                    {addressType === "delivery"
                      ? "Delivery Address"
                      : "Pickup Address"}
                  </h2>
                ) : (
                  <>
                    {addressType === "delivery" ? (
                      <>
                        {confirmedAddress ? (
                          <>
                            <h2 className="text-xl">
                              {confirmedAddress.street},{" "}
                              {confirmedAddress.floor}
                            </h2>
                            <div className="text-base text-gray-500">
                              {confirmedAddress.business_name},{" "}
                              {confirmedAddress.zip_code}
                            </div>
                          </>
                        ) : (
                          <>
                            <h2 className="text-xl ml-3">Delivery Address</h2>
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        {confirmedAddress ? (
                          <>
                            <h2 className="text-base">
                              {confirmedAddress.address},{" "}
                              {confirmedAddress.city}
                            </h2>
                            <div className="text-sm text-gray-500">
                              {confirmedAddress.state},{" "}
                              {confirmedAddress.country},
                              {confirmedAddress.zip_code}
                            </div>
                          </>
                        ) : (
                          <>
                            <h2 className="text-xl">Pickup Address</h2>
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </div>
            </div>

            <div className="flex items-center  ">
              {isExpanded ? <span>&#9650;</span> : <span>&#9660;</span>}
            </div>
          </div>
        </div>
      </div>
      {isExpanded && (
        <div className="px-4  ">
          {address && address.addressDetails ? (
            <>
              {addressType === "delivery"
                ? address.addressDetails.map((addr) => (
                    <React.Fragment key={addr?.address_id}>
                      <div
                        className="flex justify-between relative py-3 cursor-pointer"
                        onClick={() => handleAddressSelection(addr.address_id)}
                      >
                        <div className="flex pr-1">
                          <div className="inline-block relative my-[2px] mr-2 h-6 w-6">
                            {chooseAddress === addr.address_id ? (
                              <img src={GreenRadioSvg} alt="green-radio-svg" />
                            ) : (
                              <input
                                type="radio"
                                checked={chooseAddress === addr.address_id}
                                onChange={() =>
                                  handleAddressSelection(addr.address_id)
                                }
                                className="cursor-pointer"
                              />
                            )}
                          </div>
                          <div className="self-center">
                            <span className="flex flex-col">
                              <span className="text-base font-semibold">
                                {addr?.street}, {addr?.floor}
                              </span>
                              <span className="text-sm text-gray-500">
                                {addr?.business_name}, {addr?.zip_code}
                              </span>
                            </span>
                          </div>
                        </div>
                        <button
                          className="text-[#2C890F]"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEditAddress(addr);
                          }}
                        >
                          <span className="text-base">Edit</span>
                        </button>
                      </div>
                      {chooseAddress === addr.address_id && (
                        <div className="my-4">
                          <button
                            className="px-4 cursor-pointer h-14 w-full bg-[#2C890F] rounded-full"
                            onClick={() => handleConfirmAddress()}
                          >
                            <span className="block mx-2 text-white">
                              Confirm address
                            </span>
                          </button>
                        </div>
                      )}
                    </React.Fragment>
                  ))
                : address.addressDetails.map((addr) => (
                    <React.Fragment key={addr.id}>
                      <div
                        className="flex justify-between relative py-3 cursor-pointer"
                        onClick={() => handleAddressSelection(addr.id)}
                      >
                        <div className="flex pr-1">
                          <div className="inline-block relative my-[2px] mr-2 h-6 w-6">
                            {chooseAddress === addr.id ? (
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="#108910"
                                xmlns="http://www.w3.org/2000/svg"
                                size="24"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-10 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
                                ></path>
                              </svg>
                            ) : (
                              <input
                                type="radio"
                                checked={chooseAddress === addr.id}
                                onChange={() => handleAddressSelection(addr.id)}
                                className="cursor-pointer"
                              />
                            )}
                          </div>
                          <div className="self-center">
                            <span className="flex flex-col">
                              <span className="text-base font-semibold">
                                {addr.address}, {addr.city}
                              </span>
                              <span className="text-sm text-gray-500">
                                {addr.state},{addr.city}, {addr.zip_code}
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>

                      {chooseAddress === addr.id && (
                        <div className="my-4">
                          <button
                            className="px-4 cursor-pointer h-14 w-full bg-[#2C890F] rounded-full"
                            onClick={() => handleConfirmAddress()}
                          >
                            <span className="block mx-2 text-white">
                              Confirm Pickup Address
                            </span>
                          </button>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
            </>
          ) : (
            <>No Address Found</>
          )}

          {addressType === "delivery" ? (
            <>
              {" "}
              <div className="mt-5">
                <button
                  className="text-[#2C890F]"
                  onClick={() => setRegisterAddressModal(true)}
                >
                  Add Address
                </button>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
};

export default SelectAddress;
