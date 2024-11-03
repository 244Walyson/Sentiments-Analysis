"use client";

import React from "react";
import SelectFilter from "../selectFilter";
import PostItem from "./postItem";

const SentimentsByPost = () => {
  const data = [
    { value: "1", label: "Janeiro" },
    { value: "2", label: "Fevereiro" },
    { value: "3", label: "Março" },
    { value: "4", label: "Abril" },
    { value: "5", label: "Maio" },
    { value: "6", label: "Junho" },
    { value: "7", label: "Julho" },
    { value: "8", label: "Agosto" },
    { value: "9", label: "Setembro" },
    { value: "10", label: "Outubro" },
    { value: "11", label: "Novembro" },
    { value: "12", label: "Dezembro" },
  ];

  return (
    <div>
      <div className="flex w-full">
        <div className="w-full">
          <h1 className="text-xl">Sentimentos em cada postagem</h1>
          <p className="text-foreground">Performance das postagems</p>
        </div>
        <div className="w-full flex justify-end">
          <SelectFilter
            data={data}
            onChange={(value) => console.log(value)}
            placeholder={"escolha um mês"}
          />
        </div>
      </div>
      <div className="flex justify-between mt-10 mb-4">
        <div className="w-full flex px-6">Post</div>
        <div className="w-full flex justify-around">
          <div>Avaliação</div>
          <div>Interações</div>
          <div>Grafico</div>
        </div>
      </div>
      <div className="">
        <PostItem mood={"good"} />
        <PostItem mood={"good"} />
        <PostItem mood={"neutral"} />
        <PostItem mood={"bad"} />
      </div>
    </div>
  );
};

export default SentimentsByPost;
