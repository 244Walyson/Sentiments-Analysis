import React from "react";
import LineChart from "../charts/LineChart";
import { ChartConfig } from "../ui/chart";
import { ChartBar } from "../charts/barChart";
import SentimentsByPost from "./sentimentsByPost";
import ChartBarjs from "../charts/chartBarjs";

const dataPolar = {
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

const dataLine = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Positivo",
      data: [10, 20, 15, 25, 30, 45, 40],
      borderColor: "rgba(0, 255, 0)",
      backgroundColor: "rgba(0, 255, 0, 0.2)",
      borderWidth: 2,
    },
    {
      label: "Negativo",
      data: [15, 20, 10, 28, 33, 50, 60],
      borderColor: "rgba(255, 0, 0)",
      backgroundColor: "rgba(255, 0, 0, 0.3)",
      borderWidth: 2,
    },
    {
      label: "Neutro",
      data: [13, 26, 13, 20, 30, 20, 10],
      borderColor: "rgba(100, 100, 100)",
      backgroundColor: "rgba(100, 100, 100, 0.3)",
      borderWidth: 2,
    },
  ],
};

const dataLineIX = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Instagram",
      data: [10, 20, 15, 25, 30, 45, 40],
      borderColor: "rgba(245, 40, 145)",
      backgroundColor: "rgba(245, 40, 145, 0.2)",
      borderWidth: 2,
    },
    {
      label: "X",
      data: [15, 20, 10, 28, 33, 50, 60],
      borderColor: "rgba(0, 226, 255)",
      backgroundColor: "rgba(0, 226, 255, 0.3)",
      borderWidth: 2,
    },
  ],
};

const chartData = [
  { month: "January", instagram: 186, x: 80 },
  { month: "February", instagram: 305, x: 200 },
  { month: "March", instagram: 237, x: 120 },
  { month: "April", instagram: 73, x: 190 },
  { month: "May", instagram: 209, x: 130 },
  { month: "June", instagram: 214, x: 140 },
];

const chartConfig = {
  instagram: {
    label: "instagram",
    color: "#2563eb",
  },
  x: {
    label: "x",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

const GeneralSentiments = () => {
  return (
    <div>
      <h1 className="text-4xl">
        Sentimento Geral do Seu público nas redes sociais
      </h1>
      <div className="flex w-full max-h-full mt-20">
        <div className="w-8/12">
          <div>
            <LineChart
              data={dataLine}
              title={"Engajamento nos Ultimos meses"}
            />
          </div>
          <div>
            <SentimentsByPost />
          </div>
        </div>
        <div className="w-4/12 flex justify-center">
          <div className="flex items-center flex-col">
            <div className="flex items-center justify-center w-full">
              <div className="w-full">
                <ChartBar data={chartData} chartConfig={chartConfig} />
              </div>
            </div>
            <div className="w-full flex justify-center mt-14">
              <div className="w-full ">
                <ChartBarjs
                  data={dataLine}
                  title={"Sentimento Geral do Publico"}
                />
              </div>
            </div>
            <div className="w-full flex justify-center mt-20">
              <div className="w-full ">
                <ChartBarjs
                  data={dataLineIX}
                  title={"Comparação de Interações por Rede"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralSentiments;
