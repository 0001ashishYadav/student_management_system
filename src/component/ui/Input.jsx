import React from "react";

const MyInput = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="p-3 border border-gray-300 rounded bg-white"
    />
  );
};

export default MyInput;
