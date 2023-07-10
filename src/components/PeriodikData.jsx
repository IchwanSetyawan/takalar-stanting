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
        <div className="flex  justify-between items-center text-sm mb-8 mt-2">
          <div className=" flex mt-4 w-full justify-between items-center text-dark  gap-4">
            <select
              disabled
              defaultValue="default"
              className="border-none shadow-smooth p-4 w-full text-md  rounded-lg "
            >
              <option className="text-base" selected value="default">
                Juli
              </option>
            </select>

            <select
              disabled={true}
              defaultValue="default"
              className="border-none p-4 w-full rounded-lg shadow-smooth"
            >
              <option selected className="text-base" value="">
                2023
              </option>
            </select>
          </div>
        </div>
        <div className="flex flex-col space-y-4">{children}</div>
      </div>
    </>
  );
};

export default PeriodikData;
