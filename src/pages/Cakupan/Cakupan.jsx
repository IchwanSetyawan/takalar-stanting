import Layout from "../../layouts/Layout";
import TitleComponent from "../../components/TitleComponent";
import Pagination from "../../components/Pagination";
import CakupanComponent from "../../components/CakupanComponent";
import ReactPaginate from "react-paginate";

import axios from "axios";
import React, { useEffect, useState } from "react";
import InfoIcon from "../../assets/icon/info-icon.svg";

import { convertPercent, maxWidthConvert } from "../../utills/convertPercent";
import InfoComponent from "../../components/InfoComponent";
import { datasTarget } from "../../model/CakupanModel";

const Cakupan = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [pageSize, setPageSize] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const token = localStorage.getItem("token");
        const url =
          "https://stunting.ahadnikah.com/api/admin/dashboard/cakupan/prevalensi?page=1";
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCount(response.data.count);
        setPageSize(response.data.page_size);
        setData(response?.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const fetchingData = async (currentPage) => {
    try {
      const token = localStorage.getItem("token");
      const url = `https://stunting.ahadnikah.com/api/admin/dashboard/cakupan/prevalensi?page=${currentPage}`;
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setData(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageClick = (data) => {
    console.log(data.selected);
    const currentPage = data.selected + 1;
    fetchingData(currentPage);
  };

  const [showInfo, setShowInfo] = React.useState(false);
  const [showInfoId, setShowInfoId] = React.useState(null);

  const handleShowInfo = (id) => {
    setShowInfo(true);
    setShowInfoId(id);
  };
  const handleCloseInfo = (id) => {
    setShowInfo(false);
  };

  console.log(
    "rekomendasi data",
    data.map((item) => item.rekomendasi)
  );

  return (
    <>
      <Layout>
        <div className="m-8">
          <div className="my-8 flex justify-between gap-3 items-center ">
            <TitleComponent title="Cakupan Layanan Esensial Percepatan Penurunan Stunting" />
          </div>
          <div>
            <div className="h-auto">
              <div className=" p-10 pb-16  rounded-xl h-auto bg-white border border-gray-200">
                <div className="grid grid-cols-5 bg-primary rounded-t-lg">
                  <div className=" text-white col-span-4 flex justify-center items-center py-5  text-center ">
                    Indikator
                  </div>
                  <div className=" text-white  col-span-1 text-sm text-center flex justify-center items-center ">
                    Target Nasional (Perpres)
                  </div>
                </div>
                {data.map((item, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-5  justify-center flex-wrap "
                  >
                    <div className="col-span-4 ">
                      <div className="mt-10 relative space-y-4 ">
                        <div className=" text flex justify-start  mb-1 gap-5">
                          <div className="mt-1 nomor ">
                            <div className="text-white text-sm rounded-full font-bold h-6 w-6 flex justify-center items-center  bg-primary ">
                              {item.id}
                            </div>
                          </div>
                          <div className="flex items-center justify-between w-full">
                            <div className="w-full">
                              <p className="w-11/12">{item.indikator}</p>
                            </div>
                            {item.nilai <= 55 && (
                              <div className="w-8 h-8">
                                <button onClick={() => handleShowInfo(item.id)}>
                                  <img src={InfoIcon} alt="info icon" />
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="bar ml-10 mt-2 flex justify-between items-center">
                          <div className="w-full bg-gray-200 rounded-full h-5 dark:bg-gray-700">
                            <div
                              className={`${
                                item.id === 12 || item.id === 13
                                  ? item.nilai <= 33
                                    ? "bg-[#3acf49]"
                                    : item.nilai <= 60
                                    ? "bg-[#FCCF4B]"
                                    : "bg-[#F2725D]"
                                  : item.nilai <= 33
                                  ? "bg-[#F2725D]"
                                  : item.nilai <= 60
                                  ? "bg-[#FCCF4B]"
                                  : "bg-[#3acf49]"
                              } h-5 rounded-full `}
                              style={{
                                width: `${maxWidthConvert(
                                  item.nilai ? item.nilai : 0
                                )}%`,
                              }}
                            ></div>
                          </div>
                          <p className="text-sm text-dark font-semibold ml-4">
                            {Number(item?.nilai.toFixed(2))}%
                            {/* {item.nilai.toFixed(2)} */}
                          </p>
                        </div>

                        {showInfo && showInfoId === item.id ? (
                          <div className="">
                            <InfoComponent>
                              <div className="flex justify-end pt-2">
                                <button
                                  onClick={() => handleCloseInfo(item.id)}
                                  className="text-xs h-6 w-6 bg-red-500 rounded-full text-white"
                                >
                                  X
                                </button>
                              </div>
                              <div className="pb-3">
                                <ol className="flex flex-col gap-2">
                                  {item.rekomendasi.length <= 0 && (
                                    <li>Tidak ada data rekomendasi!</li>
                                  )}
                                  {item.rekomendasi.map(
                                    (rekomendasi, index) => (
                                      <li key={index}>
                                        <div className="flex items-start">
                                          <span className="leading-6">
                                            {index + 1}.
                                          </span>
                                          <span className="ml-5 leading-6">
                                            {rekomendasi}
                                          </span>
                                        </div>
                                      </li>
                                    )
                                  )}
                                </ol>
                              </div>
                            </InfoComponent>
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="mt-10 flex  h-full flex-col align-middle items-center gap-2  pl-5 ">
                        <p className="font-bold text-sm text-primary">
                          {Number(item.target.toFixed(2))}%
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Cakupan;
