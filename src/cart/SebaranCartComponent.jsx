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
import { SebaranContext } from "../context/SebaranContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SebaranChartComponent = () => {
  const { sebaranData } = useContext(SebaranContext);
  console.log(
    "🚀 ~ file: SebaranCartComponent.jsx:27 ~ CartComponent ~ sebaranData:",
    sebaranData
  );

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const labels = ["2021", "2022"];
  const data = {
    labels: labels,
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

export default SebaranChartComponent;
