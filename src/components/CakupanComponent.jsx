import axios from "axios";
import React, { useEffect, useState } from "react";
import { convertPercent, maxWidthConvert } from "../utills/convertPercent";
import InfoIcon from "../assets/icon/info-icon.svg";
import ReactPaginate from "react-paginate";
import InfoComponent from "./InfoComponent";
import { datasTarget } from "../model/CakupanModel";

const CakupanComponent = () => {
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
        setData(response.data.results);
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

  return (
    <div className="h-auto">
      <div className=" p-10 pb-16  rounded-xl h-auto bg-white border border-gray-200">
        <div className="flex flex-row flex-wrap gap-4">
          <div className="w-11/12">
            {data.map((item, id) => (
              <div className="mt-10 relative z-10 " key={id}>
                <div className=" text flex justify-start  mb-1 gap-5">
                  <div className="mt-1 nomor ">
                    <div className="text-white text-sm rounded-full font-bold h-6 w-6 flex justify-center items-center  bg-primary ">
                      {item.id}
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <div className="w-full">
                      <p className="w-11/12">{item.indikator}</p>
                      {/* buatkan saya looping data perpres dari datas target jika id datas target sama dengan id data cakupan maka tampilkan targetnya */}
                      {datasTarget
                        .filter((data) => data.id === item.id)
                        .map((data, idx) => (
                          <p className="mt-2 text-sm font-normal text-[#252525]">
                            Target Nasional (Perpres) : {data.target}
                          </p>
                        ))}
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
                          item.nilai ? item.nilai.toFixed(0) : 0
                        )}%`,
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
      </div>
      <div className="mt-5 flex justify-start ">
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={Math.ceil(Number(count / pageSize))}
          marginPagesDisplayed={2}
          pageRangeDisplayed={6}
          onPageChange={handlePageClick}
          containerClassName={"container flex justify-start"}
          pageClassName="p-1"
          pageLinkClassName=" bg-white text-primary py-1 px-3 "
          activeClassName={"bg-primary text-white"}
          previousClassName="p-1"
          previousLinkClassName="bg-white text-primary py-1 px-3 "
          nextClassName="p-1"
          nextLinkClassName="bg-white text-primary py-1 px-3 "
          breakClassName="p-1"
          breakLinkClassName=" text-primary  "
        />
      </div>
    </div>
  );
};

export default CakupanComponent;
