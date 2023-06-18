import React from "react";

const Form = ({ title, placeholder }) => {
  return (
    <>
      <div className="mb-6 ">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {title}
        </label>
        <input
          type="text"
          id="text"
          className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg py-4 px-6 "
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default Form;
