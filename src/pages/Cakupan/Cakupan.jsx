import React, { useContext, useEffect } from "react";

import Layout from "../../layouts/Layout";
import TitleComponent from "../../components/TitleComponent";
import Pagination from "../../components/Pagination";
import CakupanComponent from "../../components/CakupanComponent";

const Cakupan = () => {
  return (
    <>
      <Layout>
        <div className="m-8">
          <div className="my-8 flex justify-between gap-3 items-center ">
            <TitleComponent title="Cakupan Layanan Esensial Percepatan Penurunan S tunting" />
          </div>
          <div>
            <CakupanComponent />
          </div>
          {/* <div className="flex justify-center items-center">
          <Pagination data={data} itemsPerPage={itemsPerPage} />
        </div> */}
        </div>
      </Layout>
    </>
  );
};

export default Cakupan;
