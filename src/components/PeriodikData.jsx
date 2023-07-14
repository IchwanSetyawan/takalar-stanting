import React from "react";
import PeriodikIcon from "../assets/icon/periodik-icon.svg";
import CardPeriodik from "./CardPeriodik";

const PeriodikData = ({ children }) => {
  return (
    <>
      <div className=" shadow-sm shadow-[#ececec] bg-white w-full p-6 rounded-lg">
        <div className="flex gap-4 items-center">
          <div>
            <img src={PeriodikIcon} alt="periodik icon" />
          </div>
          <h2 className="text-xl text-dark">Periodik</h2>
        </div>
        {children}
      </div>
    </>
  );
};

export default PeriodikData;
