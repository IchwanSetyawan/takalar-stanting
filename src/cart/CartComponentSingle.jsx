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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CartComponentSingle = () => {
  const labels = [
    "0 - 5 bulan",
    "6 - 11 bulan",
    "12 - 23 bulan",
    "12 - 23 bulan",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Anak",
        data: [10, 80, 120, 280],
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
