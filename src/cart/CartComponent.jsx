import React from "react";
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
import { SummaryContext } from "../context/SummaryContext";
import { useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CartComponent = () => {
  const { datas, fetchData } = useContext(SummaryContext);

  useEffect(() => {
    fetchData();
  }, []);

  const labels = ["2021", "2022"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "SSGI",
        data: [
          datas.prevalensi_stunting_ssgi_2021,
          datas.prevalensi_stunting_ssgi_2021,
          datas.prevalensi_stunting_ssgi_2023,
        ],
        indexAxis: "x",
        backgroundColor: "#168EEA",
        borderColor: "#168EEA",
        borderWidth: 1,
        borderRadius: 10,
      },
      {
        label: "E-PPGBM",
        data: [
          datas.prevalensi_stunting_eppgbm_2021,
          datas.prevalensi_stunting_eppgbm_2022,
          datas.prevalensi_stunting_eppgbm_2023,
        ],
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

  return (
    <>
      <Bar data={data} options={options} height={388} />
    </>
  );
};

export default CartComponent;
