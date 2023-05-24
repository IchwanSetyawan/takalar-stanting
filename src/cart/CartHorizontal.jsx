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

const CartHorizontal = () => {
  const labels = ["0-5", "6-10", "11-15"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Bulan",
        data: [3, 6, 9],
        backgroundColor: "#605671",
        borderColor: "black",
        borderWidth: 1,
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
        position: "right",
      },
      title: {
        display: true,
        text: "Balita berdasarkan Umur",
      },
    },
  };

  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};

export default CartHorizontal;
