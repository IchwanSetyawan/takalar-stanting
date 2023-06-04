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
