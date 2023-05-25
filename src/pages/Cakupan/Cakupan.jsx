import React from "react";
import CakupanComponent from "../../components/CakupanComponent";
import Layout from "../../layouts/Layout";

const Cakupan = () => {
  return (
    <>
      <Layout>
        <div className="flex justify-center items-center gap-4 flex-col">
          <div className="grid grid-cols-2 gap-4">
            <CakupanComponent title="Kesehatan Ibu dan Anak" />
            <CakupanComponent title="Konseling Gizi, Keersihan, Pengasuhan orang tua" />
          </div>
          <div className="w-1/2">
            <CakupanComponent title="Air minum dan sanitasi" />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Cakupan;
