"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { useGoogleLogin } from "@react-oauth/google";

const FormLogin = () => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    onError: (error) => console.error(error),
  });

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardContent className="p-6">
          <div className="flex flex-col items-center mb-6">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-center mb-2">
              Bem vindo de volta!
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center max-w-sm">
              Faça login para começar a análise de sentimentos em suas redes
              sociais
            </p>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                className="pl-10 h-12"
                type="email"
                placeholder="Seu email"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                className="pl-10 h-12"
                type="password"
                placeholder="Sua senha"
              />
            </div>

            <div className="flex justify-end">
              <a
                href="#"
                className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400"
              >
                Esqueceu a senha?
              </a>
            </div>

            <Button className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center gap-2">
              Entrar
              <ArrowRight className="w-4 h-4" />
            </Button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 text-sm text-gray-500 bg-card">
                  ou continue com
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="h-12"
                onClick={() => login()}
              >
                <Image
                  src="/Google.svg"
                  alt="Google"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Google
              </Button>
              <Button variant="outline" className="h-12">
                <Image
                  src="/Github.svg"
                  alt="Github"
                  width={20}
                  height={20}
                  className="mr-2 hidden dark:block"
                />
                <Image
                  src="/Github-w.svg"
                  alt="Github"
                  width={20}
                  height={20}
                  className="mr-2 dark:hidden"
                />
                Github
              </Button>
            </div>

            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
              Não tem uma conta?{" "}
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 dark:text-blue-400"
              >
                Registre-se
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FormLogin;
