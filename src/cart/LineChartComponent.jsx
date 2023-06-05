import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChartComponent = () => {
  const labels = [
    "Ags 2020",
    "Feb 2021",
    "Ags 2021",
    "Feb 2022",
    "Ags 2022",
    "Feb 2023",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Manggarabombang",
        data: [23, 10, 5, 2, 20, 30, 45],
        borderColor: "#F2725D",
        backgroundColor: "#F2725D",
      },
      {
        label: "Mappakasunggu",
        data: [0, 5, 10, 20, 30, 45, 23],
        borderColor: "#FCCF4B",
        backgroundColor: "#FCCF4B",
      },
      {
        label: "Polombangkeng Selatan",
        data: [12, 10, 15, 20, 25, 30, 35],
        borderColor: "#AFF7B6",
        backgroundColor: "#AFF7B6",
      },
      {
        label: "Polombangkeng Utara",
        data: [34, 10, 15, 20, 25, 30, 35],
        borderColor: "#93ECF8",
        backgroundColor: "#93ECF8",
      },
      {
        label: "Galesong Selatan",
        data: [10, 15, 20, 12, 6, 21, 12],
        borderColor: "#76BFF6",
        backgroundColor: "#76BFF6",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };

  return (
    <>
      <Line options={options} data={data} />
    </>
  );
};

export default LineChartComponent;
