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
              d="M11.622 1.602a.75.75 0 01.756 0l2.25 1.313a.75.75 0 01-.756 1.295L12 3.118 10.128 4.21a.75.75 0 11-.756-1.295l2.25-1.313zM5.898 5.81a.75.75 0 01-.27 1.025l-1.14.665 1.14.665a.75.75 0 11-.756 1.295L3.75 8.806v.944a.75.75 0 01-1.5 0V7.5a.75.75 0 01.372-.648l2.25-1.312a.75.75 0 011.026.27zm12.204 0a.75.75 0 011.026-.27l2.25 1.312a.75.75 0 01.372.648v2.25a.75.75 0 01-1.5 0v-.944l-1.122.654a.75.75 0 11-.756-1.295l1.14-.665-1.14-.665a.75.75 0 01-.27-1.025zm-9 5.25a.75.75 0 011.026-.27L12 11.882l1.872-1.092a.75.75 0 11.756 1.295l-1.878 1.096V15a.75.75 0 01-1.5 0v-1.82l-1.878-1.095a.75.75 0 01-.27-1.025zM3 13.5a.75.75 0 01.75.75v1.82l1.878 1.095a.75.75 0 11-.756 1.295l-2.25-1.312a.75.75 0 01-.372-.648v-2.25A.75.75 0 013 13.5zm18 0a.75.75 0 01.75.75v2.25a.75.75 0 01-.372.648l-2.25 1.312a.75.75 0 11-.756-1.295l1.878-1.096V14.25a.75.75 0 01.75-.75zm-9 5.25a.75.75 0 01.75.75v.944l1.122-.654a.75.75 0 11.756 1.295l-2.25 1.313a.75.75 0 01-.756 0l-2.25-1.313a.75.75 0 11.756-1.295l1.122.654V19.5a.75.75 0 01.75-.75z"
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
        <div className="grid grid-rows-3 grid-flow-col gap-4 ">
          <div className="bg-primary  p-4 rounded-2xl text-center justify-center flex  items-center gap-4">
            <div>
              <h1 className="text-light font-semibold text-xl">896.234</h1>
              <p className="text-light font-medium text-sm">
                Total Balita Tercatat
              </p>
            </div>
          </div>
          <div className="bg-primary  p-4 rounded-2xl flex justify-center text-center items-center gap-4">
            <div>
              <h1 className="text-light font-semibold text-xl">456.234</h1>
              <p className="text-light font-medium text-sm">Laki-laki</p>
            </div>
          </div>
          <div className="bg-primary  p-4 rounded-2xl flex justify-center text-center items-center gap-4">
            <div>
              <h1 className="text-light font-semibold text-xl">1231.234</h1>
              <p className="text-light font-medium text-sm">Perempuan</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PeriodikData;
