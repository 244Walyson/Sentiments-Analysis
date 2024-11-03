"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar os elementos necessários
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Title
);

const LineChart = ({ data, title }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 18,
        },
      },
    },
    elements: {
      line: {
        tension: 0.4, // Controla a curvatura da linha (0.4 é um bom valor para suavização)
      },
    },
    scales: {
      x: {
        type: "category",
        title: {
          display: true,
          text: "Mês",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Porcentagem",
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
