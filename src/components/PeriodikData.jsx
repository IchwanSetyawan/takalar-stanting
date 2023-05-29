import React from "react";
import PeriodikIcon from "../assets/icon/periodik-icon.svg";

const PeriodikData = () => {
  return (
    <>
      <div className=" border border-gray-400 w-full p-6 rounded-lg">
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
        <div className="flex flex-col space-y-4">
          <div className="border border-darkSmooth  p-6 rounded-lg text-center justify-center flex  items-center gap-4">
            <div classname="flex justify-center item-center flex-col gap-2">
              <h1 className="text-primary font-semibold text-2xl">896.234</h1>
              <p className="text-darkHard font-medium text-sm">
                Jumlah Balita yang Diukur
              </p>
            </div>
          </div>
          <div className="border border-darkSmooth  p-6 rounded-lg flex justify-center text-center items-center gap-4">
            <div classname="flex justify-center item-center flex-col gap-2">
              <h1 className="text-primary font-semibold text-2xl">1.234</h1>
              <p className="text-darkHard font-medium text-sm">
                Jumlah Balita Stunting
              </p>
            </div>
          </div>
          <div className="border border-darkSmooth p-6 rounded-lg flex justify-center text-center items-center gap-4">
            <div classname="flex justify-center item-center flex-col gap-2">
              <h1 className="text-primary font-semibold text-2xl">240</h1>
              <p className="text-darkHard font-medium text-sm">
                Proporsi Balita Stunting
              </p>
            </div>
          </div>
          <div className="border border-darkSmooth p-6 rounded-lg flex justify-center text-center items-center gap-4">
            <div classname="flex justify-center item-center flex-col gap-2">
              <h1 className="text-primary font-semibold text-2xl">2.412</h1>
              <p className="text-darkHard font-medium text-sm">
                Total bapak Asuh
              </p>
            </div>
          </div>
          <div className="border border-darkSmooth p-6 rounded-lg flex justify-center text-center items-center gap-4">
            <div classname="flex justify-center item-center flex-col gap-2">
              <h1 className="text-primary font-semibold text-2xl">10.228</h1>
              <p className="text-darkHard font-medium text-sm">
                Total Anak Asuh
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PeriodikData;
