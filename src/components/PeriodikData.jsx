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
              defaultValue="default"
              className="border-none shadow-smooth p-4 w-full text-md  rounded-lg "
            >
              <option className="text-base" selected value="default" disabled>
                Bulan
              </option>
              <option className="text-base" value="1">
                Februari
              </option>
              <option className="text-base" value="2">
                Agustus
              </option>
            </select>

            <select
              defaultValue="default"
              className="border-none p-4 w-full rounded-lg shadow-smooth"
            >
              <option selected disabled className="text-base" lue="default">
                Tahun
              </option>
              <option className="text-base" value="2">
                2021
              </option>
              <option className="text-base" value="3">
                2022
              </option>
              <option className="text-base" value="3">
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
