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
          <select className="border py-4 pl-4 pr-32 text-md  rounded-lg border-darkHard">
            <option className="text-xs" selected value="1">
              Agustus
            </option>
            <option className="text-xs" value="2">
              Februari
            </option>
          </select>
        </div>
        <div className="p-8 border border-gray-200 rounded-lg">
          <LineChartComponent />
        </div>
      </div>
    </Layout>
  );
};

export default Sebaran;
