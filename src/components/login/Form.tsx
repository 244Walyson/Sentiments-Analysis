import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import Image from "next/image";

const FormLogin = () => {
  return (
    <div className="flex flex-col w-[400px] py-12">
      <div className="pt-6">
        <span className="text-base">Email</span>
        <Input className="h-10" type="email" placeholder="example@email.com" />
      </div>
      <div className="pt-6">
        <span className="text-base">Password</span>
        <Input
          className="h-10"
          type="password"
          placeholder="minimo 6 caracteres"
        />
      </div>
      <div className="py-6 w-full text-end">
        <p className="w-full text-base">Esqueceu a Senha?</p>
      </div>
      <Button>Entrar</Button>
      <div className="w-full pt-12 flex justify-center items-center">
        <div className="w-full h-[1px] bg-primary"></div>
        <p className="px-2">ou</p>
        <div className="w-full h-[1px] bg-primary"></div>
      </div>
      <div className="w-full flex justify-center items-center mt-6 border rounded-lg h-10 border-input">
        <Image src="/Google.svg" alt="Google icon" width={30} height={30} />
        <p className="px-2">Entrar com Google</p>
      </div>
      <div className="w-full flex justify-center items-center mt-6 border rounded-lg h-10 border-input">
        <Image src="/Facebook.svg" alt="Github icon" width={30} height={30} />
        <p className="px-2">Entrar com Github</p>
      </div>
    </div>
  );
};

export default FormLogin;
