"use client";

import React from "react";
import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  RadialLinearScale,
} from "chart.js";

// Register the elements and scales
ChartJS.register(ArcElement, Tooltip, Legend, Title, RadialLinearScale);

const PolarChart = ({ data, title }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 18,
        },
      },
    },
  };

  return <PolarArea data={data} options={options} />;
};

export default PolarChart;
