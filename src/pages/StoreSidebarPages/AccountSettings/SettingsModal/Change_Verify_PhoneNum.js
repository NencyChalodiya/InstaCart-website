import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import API from "../../../../services/api";
const Change_Verify_PhoneNum = ({
  verifyPhoneNumber,
  onCancel,
  userPhoneNumber,
}) => {
  // const [newPhoneNumber, setNewPhoneNumber] = useState(userPhoneNumber);
  const items = [
    {
      label: (
        <button className="flex cursor-pointer">
          <svg
            width="20"
            height="20"
            viewBox="0 0 40 40"
            fill="#72767E"
            xmlns="http://www.w3.org/2000/svg"
            size="20"
            color="systemGrayscale50"
            aria-hidden="true"
            class="e-p5kvuy"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 10a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"
              fill="#F7FCFF"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 22.667v2h32v-2zM4 26.333v2h32v-2zM4 15.333v2h32v-2zM4 30a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2zM4 19v2h32v-2zM6 8a2 2 0 0 0-2 2h32a2 2 0 0 0-2-2zM4 11.667v2h32v-2z"
              fill="#E31D1C"
            ></path>
            <path d="M4 10a2 2 0 0 1 2-2h18v13H4z" fill="#2E42A5"></path>
            <path
              d="m5.722 10.939-.726.509.245-.906-.645-.574h.843l.282-.739.331.74h.718l-.564.573.218.906zM9.722 10.939l-.726.509.245-.906-.645-.574h.843l.282-.739.331.74h.718l-.564.573.218.906zM12.996 11.448l.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.739-.283.74h-.842l.645.573zM17.722 10.939l-.726.509.245-.906-.645-.574h.843l.282-.739.331.74h.718l-.564.573.218.906zM4.996 15.448l.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.739-.282.74h-.843l.645.573zM9.722 14.939l-.726.509.245-.906-.645-.574h.843l.282-.739.331.74h.718l-.564.573.218.906zM12.996 15.448l.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.739-.283.74h-.842l.645.573zM17.722 14.939l-.726.509.245-.906-.645-.574h.843l.282-.739.331.74h.718l-.564.573.218.906zM4.996 19.448l.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.739-.282.74h-.843l.645.573zM9.722 18.939l-.726.509.245-.906-.645-.574h.843l.282-.739.331.74h.718l-.564.573.218.906zM12.996 19.448l.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.739-.283.74h-.842l.645.573zM17.722 18.939l-.726.509.245-.906-.645-.574h.843l.282-.739.331.74h.718l-.564.573.218.906zM20.996 11.448l.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.739-.282.74h-.843l.645.573zM21.722 14.939l-.726.509.245-.906-.645-.574h.843l.282-.739.331.74h.718l-.564.573.218.906zM20.996 19.448l.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.739-.282.74h-.843l.645.573zM7.722 12.939l-.726.509.245-.906-.645-.574h.843l.282-.739.331.74h.718l-.564.573.218.906zM10.996 13.448l.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.739-.283.74h-.842l.645.573zM15.722 12.939l-.726.509.245-.906-.645-.574h.842l.283-.739.331.74h.718l-.564.573.218.906zM6.996 17.448l.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.739-.282.74h-.843l.645.573zM11.722 16.939l-.726.509.245-.906-.645-.574h.842l.283-.739.331.74h.718l-.564.573.218.906zM14.996 17.448l.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.739-.283.74h-.842l.645.573zM19.722 12.939l-.726.509.245-.906-.645-.574h.843l.282-.739.331.74h.718l-.564.573.218.906zM18.996 17.448l.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.739-.282.74h-.843l.645.573z"
              fill="#F7FCFF"
            ></path>
          </svg>{" "}
          <span>USA+1</span>
        </button>
      ),
      key: "0",
    },
    {
      label: (
        <button className="flex cursor-pointer">
          <svg
            width="20"
            height="20"
            viewBox="0 0 40 40"
            fill="#72767E"
            xmlns="http://www.w3.org/2000/svg"
            size="20"
            color="systemGrayscale50"
            aria-hidden="true"
            class="e-p5kvuy"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 8h16v24H12z"
              fill="#F7FCFF"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.976 14 20 27h-.6l.368-3.217q-4.035.786-3.701.39.333-.398.526-1.125L13 20.452q.567-.008 1.028-.305.46-.297-.461-2.059l1.813.286.687-.808 1.368 1.552h.615l-.615-3.554 1.103.667zm0 0 1.486 2.23 1.103-.666-.615 3.554h.615l1.368-1.552.686.808 1.814-.286q-.922 1.762-.46 2.059.461.297 1.027.305l-3.593 2.596q.193.727.526 1.125.334.396-3.701-.39L20.599 27H20zM28 8h6a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2h-6zM4 10a2 2 0 0 1 2-2h6v24H6a2 2 0 0 1-2-2z"
              fill="#E31D1C"
            ></path>
          </svg>
          <span>Canada+1</span>
        </button>
      ),
      key: "1",
    },
  ];
  // const updateAccountSettingsPhoneNumber = async () => {
  //   const token = localStorage.getItem("token");
  //   try {
  //     let payload = {
  //       phone: newPhoneNumber,
  //       access_token: token,
  //     };

  //     const response = await API.UpdateUserDetails(payload);

  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   setNewPhoneNumber(userPhoneNumber);
  // }, [userPhoneNumber]);
  return (
    <Modal
      centered
      open={verifyPhoneNumber}
      footer={false}
      width={540}
      closable={false}
    >
      <div>
        <div className="flex items-center h-11">
          <div className="pl-1">
            <button
              className="mt-[2px] cursor-pointer h-10 w-10 relative bg-transparent"
              onClick={onCancel}
            >
              <span className="block leading-none">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#343538"
                  xmlns="http://www.w3.org/2000/svg"
                  size="24"
                  aria-hidden="true"
                >
                  <path d="M12 10.415 6.292 4.707 4.708 6.291l5.708 5.708-5.708 5.708 1.584 1.584L12 13.583l5.708 5.708 1.584-1.584-5.708-5.708 5.708-5.708-1.584-1.584z"></path>
                </svg>
              </span>
            </button>
          </div>
          <h1 className="flex-grow text-lg font-medium text-center">
            Phone Number
          </h1>
        </div>

        <div className="flex-grow flex-shrink px-1 pb-8">
          <div className="py-4">
            <form>
              <div>
                <div className="flex flex-row items-center w-full ">
                  <button className="cursor-pointer relative py-2 pr-[6px] pl-3 rounded-l-lg border h-14 flex items-center  outline-black ">
                    <span className="flex items-center h-full text-ellipsis">
                      <Dropdown
                        menu={{
                          items,
                        }}
                        trigger={["click"]}
                      >
                        <a onClick={(e) => e.preventDefault()}>
                          <Space>
                            <span>+1</span>
                            <DownOutlined />
                          </Space>
                        </a>
                      </Dropdown>
                    </span>
                  </button>

                  <div className="flex flex-row flex-nowrap items-center h-14 box-border max-w-[600px] rounded-r-lg border w-full  outline-black">
                    <div className="relative flex-grow w-full h-full">
                      <input
                        className="pt-[5px] px-3 pb-2 w-full h-full  rounded-xl bg-transparent outline-none"
                        placeholder="Phone number"
                        // value={newPhoneNumber}
                        value={userPhoneNumber}
                        // onChange={(e) => setNewPhoneNumber(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <p className="mt-6 mb-4">
              We will send a text with a verification code.Message and data
              rates may apply
            </p>
          </div>
        </div>

        <div className="flex justify-end px-4">
          <div className="flex gap-3">
            <button
              className="cursor-pointer relative h-[54px] pr-6 bg-[#F6F7F8] rounded-[27px]"
              //onClick={() => updateAccountSettingsPhoneNumber()}
            >
              <span className="block px-4 ml-5 text-xl text-ellipsis">
                Change number
              </span>
            </button>
            <button className="cursor-pointer relative h-[54px] rounded-[27px] bg-[#2C890F] text-white pr-6 ">
              <span className="block px-4 ml-5 text-xl text-ellipsis">
                Verify number
              </span>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Change_Verify_PhoneNum;
