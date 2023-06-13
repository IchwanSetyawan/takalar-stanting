import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { dataTable } from "../../../model/TableComponentModel";
import Layout from "../../../layouts/Layout";
import RealtimeData from "../../../components/RealtimeData";
import PeriodikData from "../../../components/PeriodikData";
import TableComponent from "../../../components/TableComponent";
import { KelurahanContext } from "../../../context/KelurahanContext";
import axios from "axios";
import formattedNumber from "../../../utills/formattedNumber ";
import { KecamatanContext } from "../../../context/KecamatanContext";
import AlertComponent from "../../../components/AlertComponent";

const LocationDetail = () => {
  let { id } = useParams();

  const navigate = useNavigate();

  const { kecamatanData } = useContext(KecamatanContext);

  const datasName = dataTable.find((item) => item.id === Number(id));

  const [datas, setDatas] = useState([]);

  const handleNavigateLink = () => {
    return;
    // navigate(`/location/${id}/cakupan/${eId}`);
  };
  const [kelurahanList, setKelurahanList] = useState([]);
  const [kelurahanData, setKelurahanData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const url = `https://stunting.ahadnikah.com/api/wilayah/desa/`;

        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setKelurahanList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const dataKel = kelurahanList.filter(
    (item) => item.id_kecamatan === Number(id)
  );

  const nameKecamatan = kecamatanData.find((item) => item.id === Number(id));

  const kelurahanId = dataKel.map((item) => item.id);

  useEffect(() => {
    const fetchSummaryKelurahan = async () => {
      const token = localStorage.getItem("token");
      const request = kelurahanId.map((eId) =>
        axios.get(
          `https://stunting.ahadnikah.com/api/admin/dashboard/summary/${id}/${eId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
      );
      try {
        const response = await axios.all(request);
        const responseData = response.map((response) => response.data);
        console.log(
          "🚀 ~ file: LocationDetail.jsx:69 ~ fetchSummaryKelurahan ~ responseData:",
          responseData
        );

        setKelurahanData(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSummaryKelurahan();
  }, []);

  // useEffect(() => {
  //   const dataKel = dataTable.filter((item) => item.id === Number(id));
  //   setDatas(dataKel);
  //   kelurahanData;
  // }, [id]);

  return (
    <>
      <Layout>
        <div className="">
          {datasName.status === "warning" && <AlertComponent />}
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
          </div>

          <div className="mt-8">
            <div>
              <h1 className="text-2xl font-semibold mb-4">Kelurahan/Desa</h1>

              <div className="relative  shadow-md sm:rounded-lg h-auto">
                <table className="w-full text-sm text-left text-blue-100 ">
                  <thead className="text-xs text-white uppercase bg-primary border-b border-gray-200 dark:text-white">
                    <tr>
                      <th scope="col" className="px-6 text-center py-3">
                        No.
                      </th>
                      <th scope="col" className="px-6 text-center py-3">
                        Nama Kecamatan
                      </th>
                      <th scope="col" className="px-6 text-center py-3">
                        Jumah Keluarga Berisiko Stunting
                      </th>
                      <th scope="col" className="px-6 text-center py-3">
                        Jumah Balita Stunting (Pendek & Sangat Pendek)
                      </th>
                      <th scope="col" className="px-6 text-center py-3">
                        Prevelensi Stunting
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataKel.map((item, idx) => (
                      <tr
                        onClick={() => handleNavigateLink(item.id)}
                        key={item.id}
                        className="bg-white border-b border-gray-200 hover:bg-gray-100 hover:text-white hover:cursor-pointer"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-dark whitespace-nowrap "
                        >
                          {idx + 1}
                        </th>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-dark whitespace-nowrap  "
                        >
                          {item?.desa}
                        </th>

                        <td className="px-6 py-4 text-dark flex justify-center ">
                          <div className="flex gap-2 items-center">
                            <p className="font-bold text-center">
                              {formattedNumber(
                                kelurahanData[idx]?.jumlah_keluarga_beresiko
                              )}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-dark  ">
                          <div className=" gap-2 items-center flex justify-center">
                            <p className="font-bold text-center">
                              {formattedNumber(
                                kelurahanData[idx]
                                  ?.jumlah_anak_pendek_sangat_pendek
                              )}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-dark  ">
                          <div className=" items-center gap-2 flex justify-center">
                            <p
                              className={
                                item.status === "success"
                                  ? "text-green-500 font-bold"
                                  : item.status === "warning"
                                  ? "text-yellow-500 font-bold"
                                  : "text-red-500 font-bold"
                              }
                            >
                              {kelurahanData[idx]?.prevalensi_balita_stunting} %
                            </p>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default LocationDetail;
