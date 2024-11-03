import React from "react";
import Grettings from "./Grettings";
import ComparisionSocialMediaChart from "./ComparisionSocialMediaChart";
import StatsCard from "./StatsCard";
import PublicSatisfaction from "./PublicSatisfaction";

const HomePage = () => {
  return (
    <div className="flex ">
      <div className="w-3/5">
        <Grettings />
        <div className="mt-10" />
        <PublicSatisfaction />
      </div>
      <div className="flex flex-col justify-center items-center w-2/5">
        <div className="w-1/2">
          <StatsCard
            title="Publico medio por rede"
            network1="Instagram"
            network2="X"
            value1={100}
            value2={300}
            gradient="from-pink-500 to-blue-400"
          />
        </div>
        <div className="w-1/2 my-10">
          <StatsCard
            title="Sentimento do publico do X"
            network1="Positivo"
            network2="Negativo"
            value1={100}
            value2={300}
            gradient="from-blue-500 to-blue-400"
          />
        </div>
        <div className="w-1/2">
          <StatsCard
            title="Sentimento do publico do instagram"
            network1="Positivo"
            network2="Negativo"
            value1={100}
            value2={300}
            gradient="from-pink-500 to-orange-500"
          />
        </div>
        <div className="w-1/2">
          <ComparisionSocialMediaChart />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
