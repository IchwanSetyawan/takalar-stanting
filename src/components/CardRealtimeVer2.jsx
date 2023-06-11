import React from "react";

const CardRealtimeVer2 = ({ name, total, icon }) => {
  return (
    <>
      <div className="hover:bg-gray-50 rounded-lg border-none shadow-smooth w-full  flex items-center justify-between ">
        <div className="z-10 w-full">
          <div className="flex  justify-center  flex-col p-8 gap-5 ">
            <div className="h-auto flex justify-center">
              <img
                src={icon}
                alt="icon"
                className="flex justify-center items-center"
              />
            </div>
            <div className="text-center">
              <h1 className="text-primary mb-2 font-bold text-2xl">{total}</h1>
              <p className="text-darkHard font-normal text-sm">{name}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardRealtimeVer2;
