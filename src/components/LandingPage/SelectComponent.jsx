import React from "react";

const SelectComponent = ({ title, placeholder }) => {
  return (
    <div>
      <label
        for="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {title}
      </label>
      <select
        id="countries"
        className="bg-gray-50 border py-4 px-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full "
      >
        <option selected>{placeholder}</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>
  );
};

export default SelectComponent;
