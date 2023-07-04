import React from "react";
import Layout from "../../layouts/LandingPage/Layout";
import CardNews from "../../components/LandingPage/CardNews";
import SearchIcon from "../../assets/landingpage/search-icon.svg";
import { useState } from "react";
import { NewsPageModel } from "../../model/NewsPageModel";
import { useEffect } from "react";
import axios from "axios";
import formatDate from "../../utills/formattedDate";
import { Link } from "react-router-dom";

const NewsPage = () => {
  let data = NewsPageModel;

  const [searchTerm, setSearchTerm] = useState("");

  const [datas, setDatas] = useState([]);
  const [datasRekom, setDatasRekom] = useState([]);
  const [loading, setIsLoading] = useState(false);

  const fetchData = () => {
    const url = `https://stunting.ahadnikah.com/api/admin/dashboard/artikel`;
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        setDatas(response?.data);
        setDatasRekom(response?.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const newDatas = datas;

  const filteredData = newDatas?.results?.filter((data) =>
    data?.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="flex flex-col gap-5 px-20 py-5  min-h-screen">
        <div className="flex  justify-between items-center mb-10 w-full">
          <div>
            <p className="font-bold text-2xl">Daftar Artikel </p>
          </div>
          <div className="w-[400px]  ">
            <form>
              <label
                for="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  // value={searchTerm}
                  // onChange={handleSearch}
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 "
                  placeholder="Cari artikel..."
                />
              </div>
            </form>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center ">
            <p>Loading...</p>
          </div>
        ) : (
          <div className="flex gap-10">
            <div className="w-full">
              {filteredData?.length === 0 && (
                <div className="h-screen flex justify-center mt-24">
                  <p>Tidak ada berita ditemukan!</p>
                </div>
              )}
              {filteredData?.map((item) => (
                <CardNews
                  title={item.title}
                  body={item.body}
                  created_at={item.created_at}
                  id={item.id}
                  gambar={item.gambar}
                />
              ))}
            </div>
            <div className="w-[700px] ">
              <div className="mb-10">
                <p className="text-xl font-bold">
                  Artikel yang Mungkin Anda Sukai :
                </p>
              </div>
              <div className="flex flex-col gap-5">
                {datasRekom?.results
                  ?.reverse()
                  .slice(0, 3)
                  .map((item) => (
                    <div className="border h-36 border-slate-50 rounded-lg shadow-md  transition duration-500 p-4 hover:bg-slate-50">
                      <Link to={`/news/${item.id}`}>
                        <div className="flex flex-col gap-5 justify-between h-full">
                          <h1 className="text-base">{item?.title}</h1>
                          <p className="font-normal text-sm text-[#858D9D]">
                            Di upload pada {formatDate(item?.created_at)}
                          </p>
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default NewsPage;
