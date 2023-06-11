import React from "react";

const CardPeriodik = ({ name, total, icon }) => {
  return (
    <>
      <div className="hover:bg-gray-50 rounded-lg shadow-smooth flex items-center justify-between ">
        <div className="z-10">
          <div className="justify-start flex p-6 items-center gap-4 ">
            <div className="w-8 h-auto">
              <img src={icon} alt="icon" />
            </div>
            <div>
              <h1 className=" font-bold text-2xl text-primary">{total}</h1>
              <p className="text-darkHard font-normal text-sm">{name}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPeriodik;
