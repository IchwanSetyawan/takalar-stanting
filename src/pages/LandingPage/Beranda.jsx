import React from "react";
import Layout from "../../layouts/LandingPage/Layout";
import Carrousel from "../../components/LandingPage/Carrousel";
import MomImage from "../../assets/image/momandbalita-image.png";
import HealthyIcon from "../../assets/landingpage/healty-child-icon.svg";
import HandsIcon from "../../assets/landingpage/clean-hands-icon.svg";
import ChildProgram from "../../assets/landingpage/child-program-icon.svg";
import PkkImage from "../../assets/landingpage/pkk-image.png";
import DompetImage from "../../assets/landingpage/dompet-image.png";
import TakalarImage from "../../assets/landingpage/takalar-image.png";
import NewsImage from "../../assets/landingpage/news-image.png";
import StuntingImage from "../../assets/landingpage/dukung-stunting-image.png";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useContext } from "react";
// import { SummaryContext } from "../context/SummaryContext";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { NewsPageModel } from "../../model/NewsPageModel";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Beranda = () => {
  const [datas, setDatas] = useState([]);

  const labels = ["2021", "2022"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "SSGI",
        data: ["34.7", "31.3"],
        indexAxis: "x",
        backgroundColor: "#168EEA",
        borderColor: "#168EEA",
        borderWidth: 1,
        borderRadius: 10,
      },
      {
        label: "E-PPGBM",
        data: ["11.4", "9.9"],
        indexAxis: "x",
        backgroundColor: "#FBAE47",
        borderColor: "#FBAE47",
        borderWidth: 1,
        borderRadius: 10,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        indexAxis: "x",
      },
      title: {
        display: true,
        text: "Angka Prevalensi Stunting (%) ",
      },
    },
    maintainAspectRatio: false,
  };

  useEffect(() => {
    const fetchDataAll = async () => {
      const token = localStorage.getItem("token");

      const url = `https://stunting.ahadnikah.com/api/admin/dashboard/summary`;

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDatas(response.data);
    };

    fetchDataAll();
  }, []);

  const [sebaranData, setSebaranData] = useState([]);
  const labelSebaran = ["2021", "2022"];
  const dataSebaran = {
    labels: labelSebaran,
    datasets: [
      {
        label: "Manggarabombang",
        data: [
          sebaranData.pk_21_mangarabombang,

          sebaranData.pk_21_mangarabombang,
        ],
        indexAxis: "x",
        backgroundColor: "#F2725D",
        borderColor: "#F2725D",
        borderWidth: 1,
        borderRadius: 10,
      },
      {
        label: "Mappakasunggu",
        data: [
          sebaranData.pk_21_mappakasunggu,
          sebaranData.pk_22_mappakasunggu,
        ],
        indexAxis: "x",
        backgroundColor: "#FCCF4B",
        borderColor: "#FCCF4B",
        borderWidth: 1,
        borderRadius: 10,
      },
      {
        label: "Polombangkeng Selatan",
        data: [sebaranData.pk_21_pl_selatan, sebaranData.pk_22_pl_selatan],
        indexAxis: "x",
        backgroundColor: "#AFF7B6",
        borderColor: "#AFF7B6",
        borderWidth: 1,
        borderRadius: 10,
      },
      {
        label: "Polombangkeng Utara",
        data: [sebaranData.pk_21_pl_utara, sebaranData.pk_22_pl_utara],
        indexAxis: "x",
        backgroundColor: "#93ECF8",
        borderColor: "#93ECF8",
        borderWidth: 1,
        borderRadius: 10,
      },
      {
        label: "Galesong Selatan",
        data: [sebaranData.pk_21_gl_selatan, sebaranData.pk_22_gl_selatan],
        indexAxis: "x",
        backgroundColor: "#76BFF6",
        borderColor: "#76BFF6",
        borderWidth: 1,
        borderRadius: 10,
      },
      {
        label: "Galesong Utara",
        data: [sebaranData.pk_21_gl_utara, sebaranData.pk_22_gl_utara],
        indexAxis: "x",
        backgroundColor: "#168EEA",
        borderColor: "#168EEA",
        borderWidth: 1,
        borderRadius: 10,
      },
      {
        label: "Pattalassang",
        data: [sebaranData.pk_21_patalassang, sebaranData.pk_22_patalassang],
        indexAxis: "x",
        backgroundColor: "#DDAAFF",
        borderColor: "#DDAAFF",
        borderWidth: 1,
        borderRadius: 10,
      },
      {
        label: "Sanrobone",
        data: [sebaranData.pk_21_sanrobone, sebaranData.pk_22_sanrobone],
        indexAxis: "x",
        backgroundColor: "#DA7C8D",
        borderColor: "#DA7C8D",
        borderWidth: 1,
        borderRadius: 10,
      },
      {
        label: "Galesong",
        data: [sebaranData.pk_21_galesong, sebaranData.pk_22_galesong],
        indexAxis: "x",
        backgroundColor: "#168EEA",
        borderColor: "#168EEA",
        borderWidth: 1,
        borderRadius: 10,
      },
      {
        label: "Kepulauan Tanakeke",
        data: [sebaranData.pk_21_kp_tanakeke, sebaranData.pk_22_kp_tanakeke],
        indexAxis: "x",
        backgroundColor: "#BB6868",
        borderColor: "#BB6868",
        borderWidth: 1,
        borderRadius: 10,
      },
    ],
  };

  const optionsSebaran = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        indexAxis: "x",
      },
      title: {
        display: true,
        text: "Angka Prevalensi Stunting (%) ",
      },
    },
    maintainAspectRatio: false,
  };

  useEffect(() => {
    const fetchDataSebaran = async () => {
      try {
        const token = localStorage.getItem("token");

        const url =
          "https://stunting.ahadnikah.com/api/admin/dashboard/sebaran";

        const response = await axios.get(url);
        setSebaranData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataSebaran();
  }, []);

  return (
    <>
      <Layout>
        <div className="px-20 my-5">
          <Carrousel />
        </div>
        <div className="bg-white mt-32">
          <div className="grid grid-cols-2  pl-20">
            <div className="flex justify-start items-center">
              <div className="flex flex-col item gap-4 pr-20">
                <h1 className="font-bold  text-4xl">
                  Ayo jadi Bapak Asuh untuk Atasi Stunting di Kabupaten Takalar
                </h1>
                <p className="text-base font-normal ">
                  Mari bersama-sama ambil bagian atasi stunting di Kabupaten
                  Takalar melalui Program Bapak Asuh Anak Stunting.
                </p>

                <div>
                  <Link to="/register-bapakasuh">
                    <button className="bg-primary text-white rounded-lg px-6 py-4 mt-8">
                      Daftar Sekarang
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div class="relative">
              <div className="flex items-end bottom-0">
                <img
                  src={MomImage}
                  alt="Gambar Kota"
                  class="w-[533px] h-[422px] absolute inset-0 z-10 mt-14  "
                />
              </div>
              <div className="flex items-end">
                <div class=" bg-[#A1D3F9]  w-[600px] h-[368px]"></div>
                <div class=" bg-[#5CB2F5]  w-[404px] h-[618px]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary px-20 py-24">
          <div className="flex justify-between items-center ">
            <div className="flex flex-col justify-center items-center px-5 text-center ">
              <img src={HealthyIcon} className="mb-3" />
              <p className="text-xl text-white">Anak Sehat, Indonesia Kuat</p>
            </div>
            <div className="flex flex-col justify-center items-center px-5 text-center">
              <img src={HandsIcon} />
              <p className="text-xl text-white">
                Tingkatkan Kualitas Generasi Muda Indonesia
              </p>
            </div>
            <div className="flex flex-col justify-center items-center px-5 text-center">
              <img src={ChildProgram} />
              <p className="text-xl text-white">Sejahterakan Anak Bangsa</p>
            </div>
          </div>
        </div>

        <div className="h-auto bg-white p-20">
          <p className="text-2xl mb-16 font-bold">
            Waspada Kenaikan Angka Stunting di Kabupaten Takalar
          </p>
          <div className="grid grid-cols-2 items-center gap-10">
            <div className=" px-2 py-4 rounded-lg border border-darkSmooth">
              <Bar data={data} options={options} height={388} />
            </div>
            <div>
              <p className="text-2xl text-start leading-loose">
                Data pengukuran E-PPGBM prevalensi stunting tahun 2021 adalah
                11,41 %, menurun di tahun 2022 menjadi 9,94 %, sedangkan data
                pengukuran berdasarkan SSGI pada tahun 2021 berada pada angka
                34,7 % dan menurun ditahun 2022 menjadi 31,1 %. Namun walaupun
                terjadi penurunan tetapi capaian ini belum sesuai dengan target
                yang harus dicapai pada tahun 2022 yaitu sebesar 29,60%, tahun
                2023, target prevalensi stunting yang harus dicapai oleh Kab.
                Takalar sebesar 24,74% dan target tahun 2024 sebesar 14 %.
              </p>
            </div>
          </div>
        </div>

        <div className="h-[700px] bg-[#EBF5FE] p-20">
          <p className="text-2xl mb-16 font-bold">Wilayah Terdampak Stunting</p>
          <div className="grid grid-cols-1 items-center gap-10">
            <div className=" px-2 py-4 rounded-lg bg-white">
              <Bar data={dataSebaran} options={optionsSebaran} height={388} />
            </div>
          </div>
        </div>

        <div className="bg-white p-24 ">
          <div className=" mb-8 flex justify-between  items-center">
            <p className="text-2xl font-bold">Artikel Berita</p>
            <Link to="/news">
              <button className="text-xl font-bold text-primary">
                Lihat semua
              </button>
            </Link>
          </div>
          <div className="flex justify-center gap-6">
            {NewsPageModel.slice(0, 3).map((item, idx) => (
              <div
                key={item.id}
                className="max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow "
              >
                <a href="#">
                  <img
                    className="rounded-t-lg w-full"
                    src={NewsImage}
                    alt="news image"
                  />
                </a>
                <div>
                  <div className="mt-4 h-72 ">
                    <a href="#">
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.title}
                      </h5>
                    </a>

                    <div className="">
                      <p className="mb-3  text-sm font-normal text-[#858D9D]">
                        {item.description.slice(0, 150) + "..."}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center ">
                    <p className="text-sm text-[#858D9D]">
                      Posted 17 June 2023
                    </p>
                    <Link to={`/news/${item.id}`}>
                      <button className="text-primary text-sm ">Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-[357px] flex flex-col gap-10 bg-primary justify-center items-center">
          <div className="w-[600px]">
            <p className="font-bold text-white text-center text-4xl">
              Bantu Atasi Stunting, Ikuti Program Bapak Asuh Sekarang!
            </p>
          </div>
          <div>
            <Link to="/register-bapakasuh">
              <button className="bg-[#FBAE47] py-4 px-6 rounded-lg font-bold">
                Daftar Program
              </button>
            </Link>
          </div>
        </div>

        <div className="h-[357px] flex flex-col gap-10 bg-white justify-center items-center">
          <div>
            <p className="font-bold text-center text-2xl">Didukung Oleh</p>
          </div>
          <div className="flex justify-between items-center w-[751px]">
            <img src={PkkImage} />
            <img src={DompetImage} />
            <img src={TakalarImage} />
            <img src={StuntingImage} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Beranda;
