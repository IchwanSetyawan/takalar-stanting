import React from "react";
import PeriodikIcon from "../assets/icon/periodik-icon.svg";
import CardPeriodik from "./CardPeriodik";
import Persons from "../assets/icon/persons.svg";
import DifableIcon from "../assets/icon/difable-icon.svg";
import SortIcon from "../assets/icon/sort-icon.svg";
import Fathericon from "../assets/icon/father-icon.svg";
import Childicon from "../assets/icon/child-icon.svg";

const PeriodikData = () => {
  const data = [
    {
      id: 1,
      name: "Jumlah Balita yang Diukur",
      total: "896.234",
      icon: Persons,
    },
    {
      id: 2,
      name: "Jumlah Balita Stunting",
      total: "1.234",
      icon: DifableIcon,
    },
    {
      id: 3,
      name: "Prevalensi Balita Stunting",
      total: "240 %",
      icon: SortIcon,
    },
    { id: 4, name: "Total Bapak Asuh", total: "2.412", icon: Fathericon },
    { id: 5, name: "Total Anak Asuh", total: "10.228", icon: Childicon },
  ];
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
        <div className="flex flex-col space-y-4">
          {data.map((item) => (
            <CardPeriodik
              key={item.id}
              name={item.name}
              icon={item?.icon}
              total={item.total}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PeriodikData;
