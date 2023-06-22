import React from "react";
import { intervensiModel } from "../model/IntervensiModel";
import TitleComponent from "./TitleComponent";
import DownloadIcon from "../assets/icon/download-icon.svg";
import { useContext } from "react";
import { RekomendasiContext } from "../context/RekomendasiContext";

const CardIntervensi = () => {
  const { rekomendasiData } = useContext(RekomendasiContext);
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
          {rekomendasiData.map((item, idx) => (
            <div className="mb-8 " key={idx}>
              <div className="flex flex-row gap-2  mt-5 text-dark font-medium text-base">
                <div className="  rounded-full w-10 ">
                  <div className="text-white w-8 h-8 bg-primary flex items-center rounded-full justify-center">
                    <span>{idx + 1}</span>
                  </div>
                </div>
                <div className="w-full text-justify leading-8">
                  <span>{item.rekomendasi}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardIntervensi;
