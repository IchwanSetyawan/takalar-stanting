import React, { useContext, useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import TableComponent from "../../components/TableComponent";
import { dataTable } from "../../model/TableComponentModel";
import { useNavigate, useParams } from "react-router-dom";
import { KecamatanContext } from "../../context/KecamatanContext";
import { SummaryContext } from "../../context/SummaryContext";
import axios from "axios";
import formattedNumber from "../../utills/formattedNumber ";

const Location = () => {
  const navigate = useNavigate();

  const { kecamatanData, fetchData } = useContext(KecamatanContext);
  const { datas } = useContext(SummaryContext);
  const [dataKec, setDataKec] = useState([]);

  const kecamatanId = kecamatanData.map((item) => item.id);
  let params;

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchData = async () => {
      const request = kecamatanId.map((id) =>
        axios.get(
          `https://stunting.ahadnikah.com/api/admin/dashboard/summary/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
      );

      try {
        const responses = await axios.all(request);
        const responseData = responses.map((response) => response.data);
        setDataKec(responseData);
      } catch (error) {
        console.log("error fetching data", error);
      }
    };
    fetchData();
  }, []);

  const handleNavigateLink = (id) => {
    navigate(`/location/${id}`);
  };

  return (
    <>
      <Layout>
        <div className="m-8">
          <div>
            <h1 className="text-2xl font-semibold mb-4">Kecamatan</h1>

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
                  {kecamatanData.map((item, idx) => (
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
                        {item?.kecamatan}
                      </th>

                      <td className="px-6 py-4 text-dark flex justify-center ">
                        <div className="flex gap-2 items-center">
                          <p className="font-bold text-center">
                            {formattedNumber(
                              dataKec[idx]?.jumlah_keluarga_beresiko
                            )}
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-dark  ">
                        <div className=" gap-2 items-center flex justify-center">
                          <p className="font-bold text-center">
                            {formattedNumber(
                              dataKec[idx]?.jumlah_anak_pendek_sangat_pendek
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
                            {dataKec[idx]?.prevalensi_balita_stunting} %
                          </p>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* <TableComponent
            data={dataTable}
            handleLink={(id) => handleNavigateLink(id)}
            name="Kecamatan"
          /> */}
        </div>
      </Layout>
    </>
  );
};

export default Location;
