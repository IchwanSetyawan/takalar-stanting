import React from "react";

const CardRealtimeHor = ({ name, total, icon }) => {
  return (
    <>
      <div className="rounded-lg border shadow-smooth flex items-center justify-between hover:bg-gray-50 ">
        <div className="z-10">
          <div className="justify-start flex p-10 lg:p-6 items-center gap-4 ">
            <div className="w-8 h-auto">
              <img src={icon} alt="icon" />
            </div>
            <div>
              <h1 className="text-dark font-bold text-xl">{total}</h1>
              <p className="text-darkHard font-normal text-sm">{name}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardRealtimeHor;
