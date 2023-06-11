import React from "react";

const CardRealtimeVer = ({ name, total, icon }) => {
  return (
    <>
      <div className="hover:bg-gray-50 rounded-lg border-none shadow-smooth  flex items-center justify-between ">
        <div className="z-10">
          <div className="justify-start flex flex-col p-6 gap-5 ">
            <div className="w-8 h-auto">
              <img src={icon} alt="icon" />
            </div>
            <div>
              <h1 className="text-dark mb-2 font-bold text-xl">{total}</h1>
              <p className="text-darkHard font-normal text-sm">{name}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardRealtimeVer;
