import { Drawer } from "antd";
import React from "react";
import { RxCross2 } from "react-icons/rx";
const Sidebar = ({ open, onToggleButton }) => {
  return (
    <>
      <Drawer
        title={
          <div className="flex items-center justify-start gap-5 m-1">
            <RxCross2
              onClick={onToggleButton}
              className="w-6 h-6 cursor-pointer"
            />
            <img
              src="https://www.instacart.com/image-server/x24/www.instacart.com/assets/beetstrap/brand/2023/logo@2x-8f1d0b7139d724b69d6563dde696887478257f5f741cfc4da7e2c42b49635bd7.png"
              alt="instaCart-logo"
            />
          </div>
        }
        placement={"left"}
        closable={false}
        onClose={onToggleButton}
        visible={open}
      >
        <p>Departments</p>
        <p>More ways to shop</p>
        <p>Help</p>
      </Drawer>
    </>
  );
};

export default Sidebar;
