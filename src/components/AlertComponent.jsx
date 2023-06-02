import React, { useState } from "react";
import ErrorIcon from "../assets/icon/error-icon.svg";
import CloseIcon from "../assets/icon/close-icon.svg";

const AlertComponent = () => {
  const [isShow, setIsShow] = useState(true);
  const handelClose = () => {
    setIsShow(false);
  };
  return (
    <>
      {isShow && (
        <div className="p-3 mb-3 border border-textError bg-[##FEF3F2] rounded-lg flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div>
              <img src={ErrorIcon} alt="error-icon" />
            </div>
            <span className="text-textError mt-1 font-medium ">
              Wilayah Tingkat Stunting Tinggi
            </span>
          </div>
          <button
            onClick={handelClose}
            className="text-textError cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default AlertComponent;
