import React, { useState } from "react";
import Layout from "../../layouts/Layout";
import DeleteIcon from "../../assets/icon/delete-icon.svg";
import EditIcon from "../../assets/icon/edit-icon.svg";
import { useEffect } from "react";
import axios from "axios";
import formatDate from "../../utills/formattedDate";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const DashboardNews = () => {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    const url = `https://stunting.ahadnikah.com/api/admin/dashboard/artikel`;
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        setDatas(response?.data);
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

  const handleDelete = (id) => {
    axios
      .delete(
        `https://stunting.ahadnikah.com/api/admin/dashboard/artikel/${id}`
      )
      .then((res) => {
        console.log(res);
        toast.success("Berhasil menghapus artikel");
        setTimeout(() => {
          fetchData();
        }, 1000);
      })
      .catch((err) => {
        toast.error("Gagal menghapus artikel");
        console.log(err);
      });
  };

  return (
    <Layout>
      <div className="m-8">
        <div>
          <div className="-mt-6">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold  text-darkHard">
                Daftar Artikel
              </h1>
              <div className=" flex justify-center items-center text-dark  gap-4">
                <>
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
                        // onChange={handleInputChange}
                        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 "
                        placeholder="Cari artikel..."
                      />
                    </div>
                  </form>
                </>
                <div>
                  <button className="py-4 text-sm px-4 bg-gray-50 rounded-2xl border border-gray-300">
                    <span>Urutkan</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-sm uppercase bg-primary text-white ">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    No
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Judul Artikel
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Tanggal Unggah
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Pembaca
                  </th>
                  <th scope="col" className="px-6 py-4 text-center">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <div className="flex justify-center items-center">
                    <p className="text-center">Loading ...</p>
                  </div>
                ) : (
                  <>
                    {datas?.results?.map((item, idx) => {
                      return (
                        <tr
                          key={item.id}
                          className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {idx + 1}
                          </th>
                          <td className="px-6 py-4 text-blue-600">
                            <Link to={`/news/${item.id}`}>{item.title}</Link>
                          </td>
                          <td className="px-6 py-4">
                            {formatDate(item.created_at)}
                          </td>
                          <td className="px-6 py-4">123</td>
                          <td className="px-6 py-4 w-28">
                            <div classNameName="flex items-center ">
                              <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                <Link to={`/dashboard-news/edit/${item.id}`}>
                                  <img src={EditIcon} />
                                </Link>
                              </button>
                              <button
                                onClick={() => handleDelete(item.id)}
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              >
                                <img src={DeleteIcon} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardNews;
