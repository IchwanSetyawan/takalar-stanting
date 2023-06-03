import React from "react";
import CakupanComponent from "../../components/CakupanComponent";
import Layout from "../../layouts/Layout";
import TitleComponent from "../../components/TitleComponent";

const Cakupan = () => {
  return (
    <>
      <Layout>
        <div className="my-8 flex justify-between gap-3 items-center items-center">
          <TitleComponent title="Cakupan Intervensi Percepatan Penurunan Stunting" />
          <div className="flex gap-3">
            <select className="border py-2 pl-4 pr-8 text-md  rounded-lg border-darkHard">
              <option className="text-xs" selected value="3">
                kecamatan
              </option>
              <option className="text-xs" value="1">
                Manggarabombang
              </option>
              <option className="text-xs" value="2">
                Mappakasunggu
              </option>
            </select>
            <select className="border py-2 pl-4 pr-8 text-md  rounded-lg border-darkHard">
              <option className="text-xs" selected value="3">
                kelurahan
              </option>
              <option className="text-xs" value="1">
                Bandar Petalangan
              </option>
              <option className="text-xs" value="2">
                Galesong Utara
              </option>
            </select>
          </div>
        </div>
        <div className="">
          <CakupanComponent title="Kesehatan Ibu dan Anak" />
        </div>
        {/* <div className="flex justify-center items-center gap-4 flex-col">
          <div className="grid grid-cols-2 gap-4">
            <CakupanComponent title="Kesehatan Ibu dan Anak" />
            <CakupanComponent title="Konseling Gizi, Keersihan, Pengasuhan orang tua" />
          </div>
          <div className="w-1/2">
            <CakupanComponent title="Air minum dan sanitasi" />
          </div>
        </div> */}
      </Layout>
    </>
  );
};

export default Cakupan;
