import React from "react";
import { CakupanModel } from "../model/CakupanModel";
import { convertPercent, maxWidthConvert } from "../utills/convertPercent";

const CakupanComponent = ({ title }) => {
  return (
    <>
      <div className="bg-primary p-6 text-light rounded-xl">
        <div className="flex items-center gap-2">
          <div className="text-light">
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
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
          </div>
          <h1 className="text-xl font-semibold text-light">{title}</h1>
        </div>
        {CakupanModel.map((item, id) => (
          <div className="mt-6">
            <div className="flex justify-between items-center mb-1">
              <p>{item.title}</p>
              <div>
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
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  />
                </svg>
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-8 dark:bg-gray-700">
              <div
                className={`${
                  item.total <= 33
                    ? "bg-red-600"
                    : item.total <= 50
                    ? "bg-yellow-500"
                    : "bg-green-600"
                } h-8 rounded-full relative`}
                style={{ width: `${maxWidthConvert(item.total)}%` }}
              >
                <p className="text-sm text-dark font-semibold ml-4 absolute left-0 top-1/2 transform -translate-y-1/2">
                  {convertPercent(item.total)}%
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CakupanComponent;
