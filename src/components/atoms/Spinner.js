import React from "react";

import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Spinner = ({ fontsize, loaderColor }) => {
  return (
    <Spin
      indicator={
        <LoadingOutlined
          style={{
            fontSize: fontsize ? fontsize : "40",
            color: loaderColor ? loaderColor : "#343538",
          }}
          spin
        />
      }
    />
  );
};

export default Spinner;
