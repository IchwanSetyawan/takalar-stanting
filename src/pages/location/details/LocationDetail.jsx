import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { dataTable } from "../../../model/TableComponentModel";
import Layout from "../../../layouts/Layout";
import RealtimeData from "../../../components/RealtimeData";
import PeriodikData from "../../../components/PeriodikData";
import TableComponent from "../../../components/TableComponent";

const LocationDetail = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  const datasName = dataTable.find((item) => item.id === Number(id));

  const [datas, setDatas] = useState([]);

  const handleNavigateLink = (eId) => {
    navigate(`/location/${id}/cakupan/${eId}`);
  };

  useEffect(() => {
    const dataKel = dataTable.filter((item) => item.id === Number(id));
    setDatas(dataKel);
  }, [id]);

  return (
    <>
      <Layout>
        <div className="">
          <div className="flex items-center justify-start">
            <Link to="/location">
              <div className="w-8 h-8 rounded-lg  flex justify-center items-center mr-3 cursor-pointer hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </Link>
            <h1 className="text-2xl font-semibold my-4 mr-2">
              Kecamatan {datasName?.name}
            </h1>
            <div
              className={
                datasName?.status === "success"
                  ? "bg-greenSmooth-500 rounded-full w-4 h-4"
                  : datasName.status === "warning"
                  ? "bg-yellow-500 rounded-full w-4 h-4"
                  : "bg-red-500 rounded-full w-4 h-4"
              }
            ></div>
          </div>
          <div className=" grid grid-cols-3 gap-4 mt-4">
            <RealtimeData />
            <PeriodikData />
          </div>
          <div className="mt-8">
            <TableComponent
              data={datas[0]?.kelurahan || []}
              name="Kelurahan/Desa"
              handleLink={(eId) => handleNavigateLink(eId)}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default LocationDetail;
