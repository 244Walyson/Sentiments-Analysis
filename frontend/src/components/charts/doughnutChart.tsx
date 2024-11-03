// components/DoughnutChart.js

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { color } from "chart.js/helpers";
import { before } from "node:test";

// Register the elements
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const DoughnutChart = ({ data, title, total }) => {
  const options = {
    responsive: true,
    cutout: "85%",
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

  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart, args, pluginsOptions) {
      const { ctx } = chart;
      ctx.save();
      ctx.font = "bolder 30px sans-serif";
      ctx.fillStyle = "white";
      ctx.fillText(
        total,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
      ctx.textAlign = "center";
    },
  };

  return <Doughnut data={data} options={options} plugins={[textCenter]} />;
};

export default DoughnutChart;
