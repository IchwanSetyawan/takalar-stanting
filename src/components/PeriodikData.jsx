import React from "react";
import PeriodikIcon from "../assets/icon/periodik-icon.svg";
import CardPeriodik from "./CardPeriodik";

const PeriodikData = ({ children }) => {
  return (
    <>
      <div className=" border border-gray-200 shadow-md w-full p-6 rounded-lg">
        <div className="flex gap-4 items-center">
          <div>
            <img src={PeriodikIcon} alt="periodik icon" />
          </div>
          <h2 className="text-xl text-dark">Periodik</h2>
        </div>
        <div className="flex  justify-between items-center text-sm mb-8 mt-2">
          <div className=" flex mt-4 w-full justify-between items-center text-dark  gap-4">
            <select className="border p-4 w-full text-md  rounded-lg border-darkHard">
              <option className="text-xs" selected disabled>
                Bulan
              </option>
              <option className="text-xs" value="1">
                Februari
              </option>
              <option className="text-xs" value="2">
                Agustus
              </option>
            </select>

            <select className="border p-4 w-full rounded-lg border-darkHard">
              <option selected disabled className="text-xs" value="1">
                Tahun
              </option>
              <option className="text-xs" value="2">
                2021
              </option>
              <option className="text-xs" value="3">
                2022
              </option>
              <option className="text-xs" value="3">
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
