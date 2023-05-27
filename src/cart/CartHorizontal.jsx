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
  const labels = ["0-5 bulan ", "6-10 bulan ", "11-15 bulan"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Anak",
        data: [3, 6, 9],
        backgroundColor: "#4DA4B1",
        borderColor: "#756ED9",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "x",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Balita berdasarkan Umur",
      },
    },
  };

  return (
    <>
      <Bar data={data} options={options} width={"300%"} />
    </>
  );
};

export default CartHorizontal;
