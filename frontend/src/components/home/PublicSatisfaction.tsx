// Exemplo de uso em outro componente

import React from "react";
import LineChart from "@/components/charts/LineChart";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "X",
      data: [10, 20, 15, 25, 30, 45, 40],
      borderColor: "rgba(75,192,192,1)",
      backgroundColor: "rgba(75,192,192,0.2)",
      borderWidth: 2,
    },
    {
      label: "Instagram",
      data: [15, 20, 10, 28, 33, 50, 60],
      borderColor: "rgba(255,0,132, 1)",
      backgroundColor: "rgba(255,0,132,0.4)",
      borderWidth: 2,
    },
  ],
};

const PublicSatisfaction = () => {
  return (
    <div>
      <LineChart
        data={data}
        title="Sentimento do publico em relação as ultimas postagens"
      />
    </div>
  );
};

export default PublicSatisfaction;
