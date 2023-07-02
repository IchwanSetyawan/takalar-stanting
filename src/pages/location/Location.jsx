import React, { useContext, useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import formattedNumber from "../../utills/formattedNumber ";

const Location = () => {
  const navigate = useNavigate();

  const [dataKec, setDataKec] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const url =
          "https://stunting.ahadnikah.com/api/admin/dashboard/wilayah";

        const payload = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        axios
          .get(url, payload)
          .then((response) => {
            setIsLoading(true);
            setDataKec(response.data);
          })
          .catch((error) => {
            setIsLoading(false);
            console.log(error);
          });
      } catch (error) {
        setIsLoading(false);
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
                      Total Balita Yang Diukur
                    </th>
                    <th scope="col" className="px-6 text-center py-3">
                      Prevelensi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataKec.map((item, idx) => (
                    <tr
                      key={idx}
                      onClick={() => handleNavigateLink(item.kecamatan)}
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
                        {item.nama_kecamatan}
                      </th>

                      <td className="px-6 py-4 text-dark flex justify-center ">
                        <div className="flex gap-2 items-center">
                          <p className="font-bold text-center">
                            {item.jumlah_krs !== null
                              ? formattedNumber(item.jumlah_krs)
                              : 0}
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-dark  ">
                        <div className=" gap-2 items-center flex justify-center">
                          <p className="font-bold text-center">
                            {item.anak_stunting !== null
                              ? formattedNumber(item.anak_stunting)
                              : 0}
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-dark  ">
                        <div className=" gap-2 items-center flex justify-center">
                          <p className="font-bold text-center">
                            {item.total_balita !== null
                              ? formattedNumber(item.total_balita)
                              : 0}
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-dark  ">
                        <div className=" items-center gap-2 flex justify-center">
                          <p
                            className={
                              item.persentase_stunting >= 66
                                ? "text-red-500 font-bold"
                                : item.persentase_stunting >= 33
                                ? "text-yellow-500 font-bold"
                                : "text-green-500 font-bold"
                            }
                          >
                            {item.persentase_stunting} %
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
      </Layout>
    </>
  );
};

export default Location;
