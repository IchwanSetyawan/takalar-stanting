import React, { useContext, useEffect } from "react";
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
import { SummaryContext } from "../context/SummaryContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CartComponentSingle = ({
  datas_0_5_bulan,
  datas_6_11_bulan,
  datas_12_23_bulan,
  datas_24_59_bulan,
}) => {
  // const { datas } = useContext(SummaryContext);

  const labels = [
    "0 - 5 bulan",
    "6 - 11 bulan",
    "12 - 23 bulan",
    "24 - 59 bulan",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Anak",
        data: [
          datas_0_5_bulan,
          datas_6_11_bulan,
          datas_12_23_bulan,
          datas_24_59_bulan,
          // datas.jumlah_anak_umur_0_5_bulan,
          // datas.jumlah_anak_umur_6_11_bulan,
          // datas.jumlah_anak_umur_12_23_bulan,
          // datas.jumlah_anak_umur_24_59_bulan,
        ],
        indexAxis: "x",
        backgroundColor: "#168EEA",
        borderColor: "#168EEA",
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
        text: "Balita Berdasarkan Umur  ",
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <>
      <div>
        <Bar data={data} options={options} height={455} />
      </div>
    </>
  );
};

export default CartComponentSingle;
