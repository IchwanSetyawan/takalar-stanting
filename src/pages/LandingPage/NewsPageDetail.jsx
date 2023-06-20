import React from "react";
import Layout from "../../layouts/LandingPage/Layout";
import NewsImage1 from "../../assets/landingpage/newsImage1.png";
import { Link, useParams } from "react-router-dom";
import { NewsPageModel } from "../../model/NewsPageModel";
import { useState } from "react";

const NewsPageDetail = () => {
  const { id } = useParams();

  const data = NewsPageModel.find((val) => val.id == id);

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
              {data.title}
            </h1>
          </div>
          <div className="w-full">
            <img
              src={NewsImage1}
              alt="photo news"
              className="rounded-lg w-full"
            />
            <p className="text-[#858D9D] text-sm mt-4 mb-10">
              Sumber :
              https://abatanews.com/takalar-berhasil-turunkan-angka-stunting-di-tahun-2022/
            </p>
          </div>

          <div className="mb-20">
            <p className="indent-10 text-justify">{data.description}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsPageDetail;
