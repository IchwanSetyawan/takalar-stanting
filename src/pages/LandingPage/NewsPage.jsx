import React from "react";
import Layout from "../../layouts/LandingPage/Layout";
import CardNews from "../../components/LandingPage/CardNews";
import SearchIcon from "../../assets/landingpage/search-icon.svg";
import { useState } from "react";
import { NewsPageModel } from "../../model/NewsPageModel";
import { useEffect } from "react";
import axios from "axios";

const NewsPage = () => {
  let data = NewsPageModel;

  const [searchTerm, setSearchTerm] = useState("");

  const [datas, setDatas] = useState([]);
  const [searchResults, setSearchResults] = useState(datas);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    filterResults(event.target.value);
  };

  const filterResults = (term) => {
    const filteredResults = data.filter((item) =>
      item.title.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const fetchData = () => {
    const url = `https://stunting.ahadnikah.com/api/admin/dashboard/artikel`;

    axios
      .get(url)
      .then((response) => {
        setDatas(response?.data);
        console.log(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <div className="flex  gap-5 px-20 py-5  min-h-screen">
        <div className="w-[300px] ">
          <div className="flex ">
            <ul className="w-full">
              <li className="py-4  border-b px-2 border-darkSmooth cursor-pointer hover:bg-slate-100">
                Semua Artikel
              </li>
              <li className="py-4  border-b px-2 border-darkSmooth cursor-pointer hover:bg-slate-100">
                Artikel Berita
              </li>
              <li className="py-4  border-b px-2 border-darkSmooth cursor-pointer hover:bg-slate-100">
                Artikel Kesehatan
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-10 w-full">
            <div>
              <p className="font-bold text-2xl">Artikel Terbaru</p>
            </div>
            <div className="w-[300px]  ">
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
                    value={searchTerm}
                    onChange={handleInputChange}
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 "
                    placeholder="Cari artikel..."
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="flex justify-between items-center mb-10 w-full "></div>
          {/* {searchResults.length === 0 ? (
            <div className="flex justify-center items-center">
              <p className="text-center text-3xl font-bold">
                tidak ada artikel yang dicari!
              </p>
            </div>
          ) : (
            )} */}

          {datas?.results?.map((item) => (
            <CardNews
              title={item.title}
              body={item.body}
              created_at={item.created_at}
              id={item.id}
              gambar={item.gambar}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default NewsPage;
