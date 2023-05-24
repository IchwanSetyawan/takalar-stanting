import React from "react";
import { useParams } from "react-router-dom";
import { dataTable } from "../../../model/TableComponentModel";
import Layout from "../../../layouts/Layout";
import RealtimeData from "../../../components/RealtimeData";
import PeriodikData from "../../../components/PeriodikData";

const LocationDetail = () => {
  let { id } = useParams();

  const data = dataTable.find((item) => item.id == id);

  return (
    <>
      <Layout>
        <div>
          <h1 className="text-2xl font-semibold my-4">Kecamatan {data.name}</h1>
        </div>
        <div className=" grid grid-cols-3 gap-4">
          <RealtimeData />
          <PeriodikData />
        </div>
      </Layout>
    </>
  );
};

export default LocationDetail;
