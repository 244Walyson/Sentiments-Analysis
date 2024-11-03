"use client";

import React from "react";
import DoughnutChart from "../charts/doughnutChart";

const ComparisionSocialMediaChart = () => {
  const data = {
    labels: ["Negativo", "Positivo", "Neutro"],
    datasets: [
      {
        label: "# comments",
        data: [12, 19, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <DoughnutChart data={data} title={"Sentimento Do Publico"} total={1000} />
    </div>
  );
};

export default ComparisionSocialMediaChart;
