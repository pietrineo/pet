import React from "react";
import { FirstButton, Header, SecondButton } from "../components";
import { Homenaje } from "next/font/google";

const FontHomenaje = Homenaje({ subsets: ["latin"], weight: "400" });

function Cadastrar() {
  return (
    <main className="flex min-h-screen flex-col px-16">
      <Header />
      <div className="p-4 flex flex-col gap-5 mt-4 text-center items-center">
        <h1 className="text-mainColor text-5xl w-[530px]">Cadastre-se</h1>
        <h1 className="text-mainColor w-[410px]">
          Preencha o formulário para criar sua conta!
        </h1>
      </div>
      <div className="flex flex-col justify-center mb-8 ">
        <div className="flex gap-16 justify-center">
          <div className="flex flex-col gap-3">
            <input
              className={`${FontHomenaje.className} w-[300px] border border-black h-[60px] text-3xl rounded-3xl px-4 text-mainColor placeholder-mainColor`}
              placeholder="Nome do Cliente:"
            />

            <input
              className={`${FontHomenaje.className} w-[300px] border border-black h-[60px] text-3xl rounded-3xl px-4 text-mainColor placeholder-mainColor`}
              placeholder="Telefone:"
            />

            <input
              type="password"
              className={`${FontHomenaje.className} w-[300px] border border-black h-[60px] text-3xl rounded-3xl px-4 text-mainColor placeholder-mainColor`}
              placeholder="Senha:"
            />
          </div>
          <div className="flex flex-col gap-3">
            <input
              className={`${FontHomenaje.className} w-[300px] border border-black h-[60px] text-3xl rounded-3xl px-4 text-mainColor placeholder-mainColor`}
              placeholder="Endereço:"
            />
            <input
              className={`${FontHomenaje.className} w-[300px] border border-black h-[60px] text-3xl rounded-3xl px-4 text-mainColor placeholder-mainColor`}
              placeholder="E-mail:"
            />
            <input
              type="password"
              className={`${FontHomenaje.className} w-[300px] border border-black h-[60px] text-3xl rounded-3xl px-4 text-mainColor placeholder-mainColor`}
              placeholder="Confirmar senha:"
            />
          </div>
        </div>

        <div className="flex justify-center mt-11">
          <SecondButton>CONFIRMAR CADASTRO</SecondButton>
        </div>
      </div>
    </main>
  );
}

export default Cadastrar;
