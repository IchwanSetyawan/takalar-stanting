import React from "react";
import { intervensiModel } from "../model/IntervensiModel";

const CardIntervensi = () => {
  return (
    <>
      <div className="bg-primary h-auto px-6 pt-8 pb-20 rounded-xl">
        <div className=" flex justify-between items-center">
          <h1 className="text-light text-xl font-semibold">
            Rekomendasi Perbaikan Intervensi
          </h1>
          <button className="bg-white border text-darkSmooth text-sm border-gray-500  flex gap-2 items-center p-2">
            <p>Download Rekomendasi</p>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-4 h-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className="mt-8 ">
          <div className="flex items-center gap-2 bg-greenSmooth w-1/2 p-2   text-light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
            </svg>
            <h2 className="text-lg font-semibold"> Kesehatan Ibu dan Anak</h2>
          </div>
          <div className="flex flex-col gap-2 mt-6 ml-4 text-light font-medium">
            {intervensiModel.map((item, idx) => (
              <div key={item.id} className="flex gap-2 ">
                <span>{idx + 1}.</span>
                <span>{item.caption}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 ">
          <div className="flex items-center gap-2 bg-greenSmooth w-1/2 p-2   text-light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
            </svg>
            <h2 className="text-lg font-semibold">
              {" "}
              Konseling Gizi, Kebersihan dan pengasuhan orangtua
            </h2>
          </div>
          <div className="flex flex-col gap-2 mt-6 ml-4 text-light font-medium">
            {intervensiModel.map((item, idx) => (
              <div key={item.id} className="flex gap-2 ">
                <span>{idx + 1}.</span>
                <span>{item.caption}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardIntervensi;
