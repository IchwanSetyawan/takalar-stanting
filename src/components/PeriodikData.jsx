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
        <div className="flex justify-between items-center text-sm mb-8 mt-2">
          <h1 className="text-md  text-dark">Lokasi</h1>
          <div className="flex justify-center items-center gap-2">
            <select className="cursor-pointer p-2 bg-transparent border-b border-gray-400 focus:outline-none">
              <option value="1">Februari</option>
              <option value="2">Agustus</option>
            </select>
            <select className="cursor-pointer p-2 bg-transparent border-b border-gray-400 focus:outline-none">
              <option value="1">2023</option>
              <option value="2">2022</option>
              <option value="3">2021</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col space-y-7">
          <div className="bg-greenSmooth  p-4 rounded-2xl text-center justify-center flex  items-center gap-4">
            <div>
              <h1 className="text-light font-semibold text-lg">896.234</h1>
              <p className="text-light font-medium text-sm">
                Jumlah Balita yang Diukur
              </p>
            </div>
          </div>
          <div className="bg-greenSmooth  p-4 rounded-2xl flex justify-center text-center items-center gap-4">
            <div>
              <h1 className="text-light font-semibold text-lg">1.234</h1>
              <p className="text-light font-medium text-sm">
                Jumlah Balita Stunting
              </p>
            </div>
          </div>
          <div className="bg-greenSmooth p-4 rounded-2xl flex justify-center text-center items-center gap-4">
            <div>
              <h1 className="text-light font-semibold text-lg">240</h1>
              <p className="text-light font-medium text-sm">
                Proporsi Balita Stunting
              </p>
            </div>
          </div>
          <div className="bg-greenSmooth p-4 rounded-2xl flex justify-center text-center items-center gap-4">
            <div>
              <h1 className="text-light font-semibold text-lg">2.412</h1>
              <p className="text-light font-medium text-sm">Total bapak Asuh</p>
            </div>
          </div>
          <div className="bg-greenSmooth p-4 rounded-2xl flex justify-center text-center items-center gap-4">
            <div>
              <h1 className="text-light font-semibold text-lg">10.228</h1>
              <p className="text-light font-medium text-sm">Total Anak Asuh</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PeriodikData;
