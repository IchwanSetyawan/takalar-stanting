import React from "react";
import { intervensiModel } from "../model/IntervensiModel";
import TitleComponent from "./TitleComponent";
import DownloadIcon from "../assets/icon/download-icon.svg";

const CardIntervensi = () => {
  return (
    <>
      <div className="border rounded-lg bg-white  h-auto px-6 pt-8 pb-10">
        <div className=" flex justify-between items-center mb-8">
          <TitleComponent title="Rekomendasi Perbaikan Intervensi" />
          <button className="flex justify-between items-center gap-2 p-4 border border-primary rounded-lg">
            <img src={DownloadIcon} alt="download icon" />
            <p className="text-primary font-bold text-base">
              Unduh Rekomendasi
            </p>
          </button>
        </div>
        <div className=" px-10 py-6 border border-darkSmooth rounded-lg">
          <div className="">
            <div>
              <h2 className="text-base text-primary font-bold">
                Remaja putri yang mengonsumsi Tablet Tambah Darah (TTD)
              </h2>
            </div>
            <div className="flex flex-col gap-2 mt-5 text-dark font-medium text-sm">
              {intervensiModel.map((item, idx) => (
                <div key={item.id} className="flex gap-2 ">
                  <span>{idx + 1}.</span>
                  <span>{item.caption}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 ">
            <div>
              <h2 className="text-base text-primary font-bold">
                Remaja putri yang menerima layanan pemeriksaan status anemia
                (hemoglobin)
              </h2>
            </div>
            <div className="flex flex-col gap-2 mt-5  text-dark font-medium text-sm">
              {intervensiModel.map((item, idx) => (
                <div key={item.id} className="flex gap-2 ">
                  <span>{idx + 1}.</span>
                  <span>{item.caption}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardIntervensi;
