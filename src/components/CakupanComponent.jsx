import React, { useContext, useEffect, useState } from "react";
import { CakupanModel } from "../model/CakupanModel";
import { convertPercent, maxWidthConvert } from "../utills/convertPercent";
import InfoIcon from "../assets/icon/info-icon.svg";
import AlertComponent from "./AlertComponent";
import InfoComponent from "./InfoComponent";
import { CakupanContext } from "../context/CakupanContext";

import Pagination from "./Pagination";
import axios from "axios";

const CakupanComponent = () => {
  const { datas } = useContext(CakupanContext);
  const [newData, setNewData] = useState({
    count: 0,
    link: {},
    page_size: 0,
    results: [],
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    if (datas) {
      setNewData(datas);
    }
  }, [datas]);

  // const firstHalf = newData.results.slice(0, 5);
  // const secondHalf = newData.results.slice(5);

  const [isLoading, setIsLoading] = React.useState(false);

  const [showInfo, setShowInfo] = React.useState(false);
  const [showInfoId, setShowInfoId] = React.useState(null);

  const handleShowInfo = (id) => {
    setShowInfo(true);
    setShowInfoId(id);
  };
  const handleCloseInfo = (id) => {
    setShowInfo(false);
  };

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const [data2, setData2] = useState([]);
  const firstHalf = newData.results.slice(indexOfFirstPost);
  const secondHalf = newData.results.slice(indexOfLastPost);
  const currentList = newData.count;
  console.log(
    "🚀 ~ file: CakupanComponent.jsx:51 ~ CakupanComponent ~ currentList:",
    currentList
  );

  // const getNextPage = async (currentPage) => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const url = `http://stunting.ahadnikah.com/api/admin/dashboard/cakupan/prevalensi?page=${currentPage}`;

  //     const response = await axios.get(url, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     if (response.data === null) {
  //       return;
  //     }
  //     setData2(res.data.results);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getNextPage(currentPage);
  // }, [getNextPage]);

  // Change page
  const paginateFront = () => {
    setCurrentPage(currentPage + 1);
  };
  console.log(
    "🚀 ~ file: CakupanComponent.jsx:61 ~ paginateFront ~ currentPage:",
    currentPage
  );
  const paginateBack = () => setCurrentPage(currentPage - 1);

  return (
    <>
      <div className=" p-6  rounded-xl bg-white border border-gray-200">
        <div className="grid grid-cols-2 gap-4">
          {isLoading && <div>Loading ...</div>}

          {firstHalf.map((item, id) => (
            <div className="mt-4 relative z-10" key={id}>
              <div className="flex justify-between items-center mb-1 gap-5">
                <p className="w-11/12">{item.indikator}</p>
                {item.nilai <= 55 && (
                  <button onClick={() => handleShowInfo(item.id)}>
                    <img src={InfoIcon} alt="info icon" />
                  </button>
                )}
              </div>
              <div className="flex justify-between items-center">
                <div className="w-full bg-gray-200 rounded-full h-5 dark:bg-gray-700">
                  <div
                    className={`${
                      item.nilai <= 33
                        ? "bg-[#F2725D]"
                        : item.nilai <= 50
                        ? "bg-[#FCCF4B]"
                        : "bg-[#3acf49]"
                    } h-5 rounded-full `}
                    style={{
                      width: `${maxWidthConvert(item.nilai.toFixed(0))}%`,
                    }}
                  ></div>
                </div>
                <p className="text-sm text-dark font-semibold ml-4">
                  {convertPercent(item.nilai.toFixed(0))}%
                </p>
              </div>
              {showInfo && showInfoId === item.id ? (
                <div className="block">
                  <InfoComponent
                    id={item.id}
                    handleClose={() => handleCloseInfo(item.id)}
                  />
                </div>
              ) : null}
            </div>
          ))}

          {secondHalf.map((item, id) => (
            <div className="mt-4 relative z-10" key={id}>
              <div className="flex justify-between items-center mb-1 gap-5">
                <p className="w-11/12">{item.indikator}</p>
                {item.nilai <= 55 && (
                  <button onClick={() => handleShowInfo(item.id)}>
                    <img src={InfoIcon} alt="info icon" />
                  </button>
                )}
              </div>
              <div className="flex justify-between items-center">
                <div className="w-full bg-gray-200 rounded-full h-5 dark:bg-gray-700">
                  <div
                    className={`${
                      item.nilai <= 33
                        ? "bg-[#F2725D]"
                        : item.nilai <= 50
                        ? "bg-[#FCCF4B]"
                        : "bg-[#3acf49]"
                    } h-5 rounded-full `}
                    style={{
                      width: `${maxWidthConvert(item.nilai.toFixed(0))}%`,
                    }}
                  ></div>
                </div>
                <p className="text-sm text-dark font-semibold ml-4">
                  {convertPercent(item.nilai.toFixed(0))}%
                </p>
              </div>
              {showInfo && showInfoId === item.id ? (
                <div className="block">
                  <InfoComponent
                    id={item.id}
                    handleClose={() => handleCloseInfo(item.id)}
                  />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={currentList}
        paginateBack={paginateBack}
        paginateFront={paginateFront}
        currentPage={currentPage}
      />
    </>
  );
};

export default CakupanComponent;
