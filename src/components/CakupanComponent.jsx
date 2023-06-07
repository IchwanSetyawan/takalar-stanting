import React from "react";
import { CakupanModel } from "../model/CakupanModel";
import { convertPercent, maxWidthConvert } from "../utills/convertPercent";
import InfoIcon from "../assets/icon/info-icon.svg";
import AlertComponent from "./AlertComponent";
import InfoComponent from "./InfoComponent";

const CakupanComponent = ({ data }) => {
  const halfLength = Math.ceil(data.length / 2);
  const firstHalf = data.slice(0, halfLength);
  const secondHalf = data.slice(halfLength);

  const [showInfo, setShowInfo] = React.useState(false);
  const [showInfoId, setShowInfoId] = React.useState(null);

  const handleShowInfo = (id) => {
    setShowInfo(true);
    setShowInfoId(id);
  };
  const handleCloseInfo = (id) => {
    setShowInfo(false);
  };

  return (
    <>
      <div className=" p-6  rounded-xl bg-white border border-gray-200">
        <div className="grid grid-cols-2 gap-4">
          {firstHalf.map((item, id) => (
            <div className="mt-4 relative z-10" key={id}>
              <div className="flex justify-between items-center mb-1">
                <p>{item.title}</p>
                {item.total <= 55 && (
                  <button onClick={() => handleShowInfo(item.id)}>
                    <img src={InfoIcon} alt="info icon" />
                  </button>
                )}
              </div>
              <div className="flex justify-between items-center">
                <div className="w-full bg-gray-200 rounded-full h-5 dark:bg-gray-700">
                  <div
                    className={`${
                      item.total <= 33
                        ? "bg-[#F2725D]"
                        : item.total <= 50
                        ? "bg-[#FCCF4B]"
                        : "bg-[#3acf49]"
                    } h-5 rounded-full `}
                    style={{ width: `${maxWidthConvert(item.total)}%` }}
                  ></div>
                </div>
                <p className="text-sm text-dark font-semibold ml-4">
                  {convertPercent(item.total)}%
                </p>
              </div>
              {showInfo && showInfoId === item.id ? (
                <div className="block">
                  <InfoComponent
                    id={item.id}
                    handleClose={() => handleCloseInfo(item.id)}
                  />
                </div>
              ) : null}
            </div>
          ))}

          {secondHalf.map((item, id) => (
            <div className="mt-4 relative" key={id}>
              <div className="flex justify-between items-center mb-1">
                <p>{item.title}</p>
                {item.total <= 55 && (
                  <button onClick={() => handleShowInfo(item.id)}>
                    <img src={InfoIcon} alt="info icon" />
                  </button>
                )}
              </div>
              <div className="flex justify-between items-center">
                <div className="w-full bg-gray-200 rounded-full h-5 dark:bg-gray-700">
                  <div
                    className={`${
                      item.total <= 33
                        ? "bg-[#F2725D]"
                        : item.total <= 50
                        ? "bg-[#FCCF4B]"
                        : "bg-[#3acf49]"
                    } h-5 rounded-full `}
                    style={{ width: `${maxWidthConvert(item.total)}%` }}
                  ></div>
                </div>
                <p className="text-sm text-dark font-semibold ml-4">
                  {convertPercent(item.total)}%
                </p>
              </div>
              {showInfo && showInfoId === item.id ? (
                <div className="block">
                  <InfoComponent
                    id={item.id}
                    handleClose={() => handleCloseInfo(item.id)}
                  />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CakupanComponent;
