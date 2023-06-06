import React from "react";
import CakupanComponent from "../../components/CakupanComponent";
import Layout from "../../layouts/Layout";
import TitleComponent from "../../components/TitleComponent";
import { CakupanModel } from "../../model/CakupanModel";
import Pagination from "../../components/Pagination";

const Cakupan = () => {
  const data = CakupanModel;
  const itemsPerPage = 10;

  return (
    <>
      <Layout>
        <div className="my-8 flex justify-between gap-3 items-center ">
          <TitleComponent title="Cakupan Intervensi Percepatan Penurunan Stunting" />
          <div className="flex gap-3">
            <select className="border-none py-2 pl-4 pr-8 text-md  rounded-lg shadow-smooth ">
              <option className="text-md" selected value="3">
                kecamatan
              </option>
              <option className="text-md" value="1">
                Manggarabombang
              </option>
              <option className="text-md" value="2">
                Mappakasunggu
              </option>
            </select>
            <select className="border-none py-2 pl-4 pr-8 text-md  rounded-lg shadow-smooth ">
              <option className="text-md" selected value="3">
                kelurahan
              </option>
              <option className="text-md" value="1">
                Bandar Petalangan
              </option>
              <option className="text-md" value="2">
                Galesong Utara
              </option>
            </select>
          </div>
        </div>
        <div>
          <CakupanComponent data={data} />
        </div>
        {/* <div className="flex justify-center items-center">
          <Pagination data={data} itemsPerPage={itemsPerPage} />
        </div> */}
      </Layout>
    </>
  );
};

export default Cakupan;
