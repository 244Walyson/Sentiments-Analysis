import React from "react";
import FormLogin from "./Form";

const LoginContainer = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col text-start justify-center h-full">
        <h1 className="text-3xl flex pb-7">Bem vindo de volta!</h1>

        <p className="text-sm max-w-[400px]">
          Today is a new day. It's your day. You shape it. Sign in to start
          managing your projects.
        </p>

        <FormLogin />
      </div>
    </div>
  );
};

export default LoginContainer;
