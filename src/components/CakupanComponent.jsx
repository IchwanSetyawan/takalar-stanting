import React from "react";
import { CakupanModel } from "../model/CakupanModel";
import { convertPercent, maxWidthConvert } from "../utills/convertPercent";

const CakupanComponent = ({ data }) => {
  const halfLength = Math.ceil(data.length / 2);
  const firstHalf = data.slice(0, halfLength);
  const secondHalf = data.slice(halfLength);

  return (
    <>
      <div className=" p-6  rounded-xl bg-white border border-gray-200">
        <div className="grid grid-cols-2 gap-4">
          {firstHalf.map((item, id) => (
            <div className="mt-4" key={id}>
              <div className="flex justify-between items-center mb-1">
                <p>{item.title}</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="w-full bg-gray-200 rounded-full h-8 dark:bg-gray-700">
                  <div
                    className={`${
                      item.total <= 33
                        ? "bg-[#F2725D]"
                        : item.total <= 50
                        ? "bg-[#FCCF4B]"
                        : "bg-[#3acf49]"
                    } h-8 rounded-full `}
                    style={{ width: `${maxWidthConvert(item.total)}%` }}
                  ></div>
                </div>
                <p className="text-sm text-dark font-semibold ml-4">
                  {convertPercent(item.total)}%
                </p>
              </div>
            </div>
          ))}

          {secondHalf.map((item, id) => (
            <div className="mt-4" key={id}>
              <div className="flex justify-between items-center mb-1">
                <p>{item.title}</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="w-full bg-gray-200 rounded-full h-8 dark:bg-gray-700">
                  <div
                    className={`${
                      item.total <= 33
                        ? "bg-[#F2725D]"
                        : item.total <= 50
                        ? "bg-[#FCCF4B]"
                        : "bg-[#3acf49]"
                    } h-8 rounded-full `}
                    style={{ width: `${maxWidthConvert(item.total)}%` }}
                  ></div>
                </div>
                <p className="text-sm text-dark font-semibold ml-4">
                  {convertPercent(item.total)}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CakupanComponent;
