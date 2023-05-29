import React from "react";
import { intervensiModel } from "../model/IntervensiModel";

const CardIntervensi = () => {
  return (
    <>
      <div className="border rounded-lg border-darkSmooth h-auto px-6 pt-8 pb-10">
        <div className=" flex justify-between items-center">
          <h1 className=" text-xl text-dark font-bold">
            Rekomendasi Perbaikan Intervensi
          </h1>
        </div>
        <div className="mt-8 ">
          <div>
            <h2 className="text-base text-primary font-bold">
              Kesehatan Ibu dan Anak
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
              Konseling Gizi, Kebersihan dan pengasuhan orangtua
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
    </>
  );
};

export default CardIntervensi;
