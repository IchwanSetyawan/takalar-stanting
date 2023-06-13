import React from "react";
import Layout from "../../layouts/Layout";
import LineChartComponent from "../../cart/LineChartComponent";
import TitleComponent from "../../components/TitleComponent";
import SebaranChartComponent from "../../cart/SebaranCartComponent";

const Sebaran = () => {
  return (
    <Layout>
      <div className="m-8">
        <div className="my-8 flex justify-between items-center">
          <TitleComponent title="Perkembangan Kasus Balita Stunting per Kecamatan" />
        </div>
        <div className="p-8 border bg-white border-gray-200 rounded-lg">
          <SebaranChartComponent />
        </div>
      </div>
    </Layout>
  );
};

export default Sebaran;
