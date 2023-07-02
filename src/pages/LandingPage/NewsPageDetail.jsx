import React from "react";
import Layout from "../../layouts/LandingPage/Layout";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const NewsPageDetail = () => {
  const { id } = useParams();

  const [datas, setDatas] = useState([]);

  const fetchData = () => {
    const url = `https://stunting.ahadnikah.com/api/admin/dashboard/artikel`;

    axios
      .get(url)
      .then((response) => {
        setDatas(response?.data?.results);
        console.log(response?.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const data = datas.find((val) => toString(val.id) == toString(id));

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <div className="flex justify-center mt-10 ">
        <div className="w-[900px]">
          <Link to="/news">
            <div className="mb-10">
              <button className="font-bold text-xl text-primary text-start ">
                Kembali
              </button>
            </div>
          </Link>
          <div>
            <h1 className="font-bold text-3xl text-start mb-10">
              {data?.title}
            </h1>
          </div>
          <div className="w-full">
            <img
              src={data?.gambar}
              alt="photo news"
              className="rounded-lg w-full"
            />
            <p className="text-[#858D9D] text-sm mt-4 mb-10">
              Sumber :
              https://abatanews.com/takalar-berhasil-turunkan-angka-stunting-di-tahun-2022/
            </p>
          </div>

          <div className="mb-20">
            <p className="indent-10 text-justify">{data?.body}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsPageDetail;
