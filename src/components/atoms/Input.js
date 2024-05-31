import React from "react";

const Input = ({ type, placeholder }) => {
  return (
    <div>
      <input
        type={type}
        className="pl-10 pr-12 h-[50px] border-2 border-black rounded-full  text-lg bg-white text-gray-950 w-[80rem] shadow-lg  "
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
