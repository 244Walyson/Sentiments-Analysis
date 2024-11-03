import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const Grettings = () => {
  return (
    <div className="flex bg-card w-full rounded-3xl">
      <div className="p-10">
        <h1 className="text-3xl">Bem Vindo de volta Fulano!</h1>
        <h2 className="text-2xl">Verifique os Dashboards</h2>
        <p className="text-base mt-5">
          Voĉe teve uma melhora de 15% nas reações do seu publico do instagram
          desde o ultimo mês
        </p>

        <div className="flex mt-6 items-center">
          <h2 className="text-xl">+1000 Reações</h2>
          <div className="border rounded-lg px-2 py-1 ml-3">Julho 2022</div>
        </div>

        <Button className="mt-6">Verificar</Button>
      </div>
      <div className="h-full mt-auto mb-0">
        <div className="w-80">
          <Image
            src="/socialMedia.png"
            alt="Social Media"
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Grettings;
