import React, { Children } from "react";
import RealtImeIcon from "../assets/icon/realtime-icon.svg";

const RealtimeData = ({ children }) => {
  return (
    <>
      <div className="col-span-2 border border-gray-200 shadow-md w-full rounded-lg p-6 ">
        <div className="flex gap-4 items-center">
          <div>
            <img src={RealtImeIcon} alt="icon realtime" />
          </div>
          <h2 className="text-xl  text-dark font-bold">Realtime (Bulanan)</h2>
        </div>

        <div className="mt-5">{children}</div>
      </div>
    </>
  );
};

export default RealtimeData;
