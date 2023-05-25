import React from "react";

const PeriodikData = () => {
  return (
    <>
      <div className=" border border-gray-400 w-full p-6 rounded-lg">
        <div className="flex gap-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-10 h-10"
          >
            <path
              fill-rule="evenodd"
              d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
              clip-rule="evenodd"
            />
          </svg>

          <h2 className="text-xl text-dark">Periodik</h2>
        </div>
        <div className="flex justify-between items-center my-4">
          <h1 className="text-md  text-dark">Lokasi</h1>
          <div className="flex justify-center items-center gap-2">
            <select className="cursor-pointer p-2 bg-transparent border-b border-gray-400 focus:outline-none">
              <option value="1">Februari</option>
              <option value="2">Agustus</option>
            </select>
            <select className="cursor-pointer p-2 bg-transparent border-b-2 border-gray-400 focus:outline-none">
              <option value="1">2023</option>
              <option value="2">2022</option>
              <option value="3">2021</option>
            </select>
          </div>
        </div>
        <div className="grid grid-rows-4 grid-flow-col gap-4 ">
          <div className="bg-primary  p-4 rounded-2xl text-center justify-center flex  items-center gap-4">
            <div>
              <h1 className="text-light font-semibold text-xl">896.234</h1>
              <p className="text-light font-medium text-sm">Jumlah Keluarga</p>
            </div>
          </div>
          <div className="bg-primary  p-4 rounded-2xl flex justify-center text-center items-center gap-4">
            <div>
              <h1 className="text-light font-semibold text-xl">1.234</h1>
              <p className="text-light font-medium text-sm">
                {" "}
                Keluarga beresiko Stunting
              </p>
            </div>
          </div>
          <div className="bg-primary  p-4 rounded-2xl flex justify-center text-center items-center gap-4">
            <div>
              <h1 className="text-light font-semibold text-xl">34.234</h1>
              <p className="text-light font-medium text-sm">
                Jumlah Anak Stunting
              </p>
            </div>
          </div>
          <div className="bg-primary  p-4 rounded-2xl flex justify-center text-center items-center gap-4">
            <div>
              <h1 className="text-light font-semibold text-xl">234.234</h1>
              <p className="text-light font-medium text-sm">Prevelensi</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PeriodikData;
