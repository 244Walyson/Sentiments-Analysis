"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Mail, Lock, ArrowRight, Eye, EyeClosed, User } from "lucide-react";
import { useGoogleLogin } from "@react-oauth/google";

const REDIRECT_URI =
  process.env.NEXT_PUBLIC_REDIRECT_URI || "http://localhost:3000/login";
const GITHUB_CLIENT_ID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;

enum OperationEnum {
  LOGIN = "Entrar",
  RECOVER_PASSWORD = "Recuperar Senha",
  REGISTER = "Registrar-se",
}

const FormLogin = () => {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [operation, setOperation] = React.useState<OperationEnum>(
    OperationEnum.LOGIN
  );

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    onError: (error) => console.error(error),
  });

  const handleGithubLogin = () => {
    const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}&scope=user`;
    window.location.href = githubAuthURL;
  };

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
            {operation === OperationEnum.REGISTER && (
              <>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    className="pl-10 h-12"
                    type="text"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    className="pl-10 h-12"
                    type="text"
                    placeholder="Seu nome de usuario"
                  />
                </div>
              </>
            )}

            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                className="pl-10 h-12"
                type="email"
                placeholder="Seu email"
              />
            </div>

            <div
              className={`relative ${
                operation === OperationEnum.RECOVER_PASSWORD ? "hidden" : ""
              }`}
            >
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                className="pl-10 h-12"
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Sua senha"
              />
              {isPasswordVisible ? (
                <Eye
                  className="absolute right-3 top-4 h-5 w-5 text-gray-400"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                />
              ) : (
                <EyeClosed
                  className="absolute right-3 top-4 h-5 w-5 text-gray-400"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                />
              )}
            </div>

            <div className="flex justify-end">
              <button
                className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 cursor-pointer"
                onClick={() =>
                  setOperation(
                    operation !== OperationEnum.LOGIN
                      ? OperationEnum.LOGIN
                      : OperationEnum.RECOVER_PASSWORD
                  )
                }
              >
                {operation === OperationEnum.RECOVER_PASSWORD ||
                operation === OperationEnum.REGISTER
                  ? "Voltar"
                  : "Esqueceu sua senha?"}
              </button>
            </div>

            <Button className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center gap-2">
              {operation}
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
                onClick={() => handleGoogleLogin()}
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
              <Button
                variant="outline"
                className="h-12"
                onClick={() => handleGithubLogin()}
              >
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
              <button
                onClick={() => setOperation(OperationEnum.REGISTER)}
                className="text-blue-500 hover:text-blue-600 dark:text-blue-400"
              >
                Registre-se
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FormLogin;
