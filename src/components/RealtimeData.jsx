import React from "react";
import BabyIcon from "../assets/icon/baby-icon.svg";
import ManIcon from "../assets/icon/person-icon.svg";
import WomanIcon from "../assets/icon/person-woman-icon.svg";
import CartHorizontal from "../cart/CartHorizontal";

const RealtimeData = () => {
  return (
    <>
      <div className="col-span-2 border border-gray-400 w-full rounded-lg p-6">
        <div className="flex gap-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-10 h-10"
          >
            <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
            <path
              fill-rule="evenodd"
              d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
              clip-rule="evenodd"
            />
          </svg>
          <h2 className="text-xl  text-dark">Realtime (Bulanan)</h2>
        </div>
        <div className="my-4">
          <h2 className="font-semibold text-sm text-darkSmooth">
            Database Balita
          </h2>
        </div>
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="bg-primary col-span-2 p-5 rounded-2xl flex justify-start items-center gap-4">
            <div className="w-10 h-10 bg-white rounded-full p-2 ">
              <img src={BabyIcon} alt="baby-icon" className="w-10 h-6" />
            </div>
            <div>
              <h1 className="text-light font-semibold text-xl">787.234</h1>
              <p className="text-light font-medium text-sm">
                Total Balita Tercatat
              </p>
            </div>
          </div>
          <div className="bg-primary col-span-2 p-5 rounded-2xl flex justify-start items-center gap-4">
            <div className="w-10 h-10 bg-white rounded-full p-2 ">
              <img src={ManIcon} alt="man-icon" className="w-10 h-6" />
            </div>
            <div>
              <h1 className="text-light font-semibold text-xl">237.234</h1>
              <p className="text-light font-medium text-sm">Laki-laki</p>
            </div>
          </div>
          <div className="bg-primary col-span-2 p-5 rounded-2xl flex justify-start items-center gap-4">
            <div className="w-10 h-10 bg-white rounded-full p-2 ">
              <img src={WomanIcon} alt="woman-icon" className="w-10 h-6" />
            </div>
            <div>
              <h1 className="text-light font-semibold text-xl">487.234</h1>
              <p className="text-light font-medium text-sm">Perempuan</p>
            </div>
          </div>
          <div className="bg-primary row-span-3 p-5 rounded-2xl flex justify-start items-center gap-4">
            <CartHorizontal />
          </div>
        </div>
      </div>
    </>
  );
};

export default RealtimeData;
