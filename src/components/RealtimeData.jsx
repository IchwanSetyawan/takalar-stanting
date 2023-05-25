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
          <h2 className="text-xl  text-dark">Realtime Desa (Bulanan)</h2>
        </div>
        <div className="my-4">
          <h2 className="font-semibold text-sm text-darkSmooth">
            Database Balita
          </h2>
        </div>
        <div className="grid grid-rows-4 grid-flow-col gap-4">
          <div className="bg-primary col-span-2 p-5 rounded-2xl flex justify-start items-center gap-4">
            <div className="w-10 h-10 bg-white rounded-full p-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                  clip-rule="evenodd"
                />
                <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
              </svg>
            </div>
            <div>
              <h1 className="text-light font-semibold text-xl">787.234</h1>
              <p className="text-light font-medium text-sm">Jumlah Keluarga</p>
            </div>
          </div>
          <div className="bg-primary col-span-2 p-5 rounded-2xl flex justify-start items-center gap-4">
            <div className="w-10 h-10 bg-white rounded-full p-2 ">
              <img src={ManIcon} alt="man-icon" className="w-10 h-6" />
            </div>
            <div>
              <h1 className="text-light font-semibold text-xl">237.234</h1>
              <p className="text-light font-medium text-sm">
                Keluarga beresiko Stunting
              </p>
            </div>
          </div>
          <div className="bg-primary col-span-2 p-5 rounded-2xl flex justify-start items-center gap-4">
            <div className="w-10 h-10 bg-white rounded-full p-2 ">
              <img src={BabyIcon} alt="baby-icon" className="w-10 h-6" />
            </div>
            <div>
              <h1 className="text-light font-semibold text-xl">487.234</h1>
              <p className="text-light font-medium text-sm">
                Jumlah Anak Stunting
              </p>
            </div>
          </div>
          <div className="bg-primary col-span-2 p-5 rounded-2xl flex justify-start items-center gap-4">
            <div className="w-10 h-10 bg-white rounded-full p-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.622 1.602a.75.75 0 01.756 0l2.25 1.313a.75.75 0 01-.756 1.295L12 3.118 10.128 4.21a.75.75 0 11-.756-1.295l2.25-1.313zM5.898 5.81a.75.75 0 01-.27 1.025l-1.14.665 1.14.665a.75.75 0 11-.756 1.295L3.75 8.806v.944a.75.75 0 01-1.5 0V7.5a.75.75 0 01.372-.648l2.25-1.312a.75.75 0 011.026.27zm12.204 0a.75.75 0 011.026-.27l2.25 1.312a.75.75 0 01.372.648v2.25a.75.75 0 01-1.5 0v-.944l-1.122.654a.75.75 0 11-.756-1.295l1.14-.665-1.14-.665a.75.75 0 01-.27-1.025zm-9 5.25a.75.75 0 011.026-.27L12 11.882l1.872-1.092a.75.75 0 11.756 1.295l-1.878 1.096V15a.75.75 0 01-1.5 0v-1.82l-1.878-1.095a.75.75 0 01-.27-1.025zM3 13.5a.75.75 0 01.75.75v1.82l1.878 1.095a.75.75 0 11-.756 1.295l-2.25-1.312a.75.75 0 01-.372-.648v-2.25A.75.75 0 013 13.5zm18 0a.75.75 0 01.75.75v2.25a.75.75 0 01-.372.648l-2.25 1.312a.75.75 0 11-.756-1.295l1.878-1.096V14.25a.75.75 0 01.75-.75zm-9 5.25a.75.75 0 01.75.75v.944l1.122-.654a.75.75 0 11.756 1.295l-2.25 1.313a.75.75 0 01-.756 0l-2.25-1.313a.75.75 0 11.756-1.295l1.122.654V19.5a.75.75 0 01.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-light font-semibold text-xl">383.452</h1>
              <p className="text-light font-medium text-sm">Prevelensi</p>
            </div>
          </div>
          <div className="bg-primary  row-span-4 p-1 rounded-2xl flex justify-start items-center gap-4">
            <CartHorizontal />
          </div>
        </div>
      </div>
    </>
  );
};

export default RealtimeData;
