import React from "react";
import Layout from "../../layouts/Layout";
import LineChartComponent from "../../cart/LineChartComponent";
import TitleComponent from "../../components/TitleComponent";

const Sebaran = () => {
  return (
    <Layout>
      <div className="m-8">
        <div className="my-8 flex justify-between items-center">
          <TitleComponent title="Perkembangan Kasus Balita Stunting per Kecamatan" />
          <div className="flex gap-3">
            <select className="border py-2 pl-4 pr-32 text-md  rounded-lg border-darkHard">
              <option className="text-xs" selected value="3">
                Tahun
              </option>
              <option className="text-xs" value="1">
                2021
              </option>
              <option className="text-xs" value="2">
                2022
              </option>
            </select>
            <select className="border py-2 pl-4 pr-32 text-md  rounded-lg border-darkHard">
              <option className="text-xs" selected value="3">
                Bulan
              </option>
              <option className="text-xs" value="1">
                Agustus
              </option>
              <option className="text-xs" value="2">
                Februari
              </option>
            </select>
          </div>
        </div>
        <div className="p-8 border border-gray-200 rounded-lg">
          <LineChartComponent />
        </div>
      </div>
    </Layout>
  );
};

export default Sebaran;
