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

const CartComponent = () => {
  const labels = ["2021", "2022", "2023"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "SSGI",
        data: [10, 20, 30],
        indexAxis: "x",
        backgroundColor: "#168EEA",
        borderColor: "#168EEA",
        borderWidth: 1,
        borderRadius: 10,
      },
      {
        label: "E-PPGBM",
        data: [20, 30, 100],
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
        text: "Angka Prevalensi Stunting (%)  ",
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
