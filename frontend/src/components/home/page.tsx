"use client";
import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { Plus } from "lucide-react";
import { ChartComponent } from "./Chart";

const HomePage = () => {
  return (
    <div className="flex mt-20 flex-col gap-4">
      <h5 className="text-xl">Social Medias</h5>
      <div className="flex gap-4">
        <Card className="w-72 pt-2 bg-background">
          <CardContent>
            <div className="flex items-center gap-3">
              <InstagramLogoIcon className="w-10 h-10 text-pink-500" />
              <div>
                <span className="text-lg font-semibold">Instagram</span>
                <p className="text-sm text-gray-500">Análise de sentimentos</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <p className="text-blue-500 cursor-pointer hover:underline">
              Ver mais +
            </p>
          </CardFooter>
        </Card>
        <Card className="flex items-center bg-background justify-center w-48">
          <CardContent className="flex pb-0 flex-col items-center justify-center gap-2">
            <Plus className="w-10 h-10 text-gray-500" />
            <p className="text-gray-600">Adicionar nova +</p>
          </CardContent>
        </Card>
      </div>
      <div className="">
        <ChartComponent />
      </div>
    </div>
  );
};

export default HomePage;
