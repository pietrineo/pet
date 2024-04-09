import React from "react";
import { FirstButton, Header, SecondButton } from "../components";
import { Homenaje } from "next/font/google";

const FontHomenaje = Homenaje({ subsets: ["latin"], weight: "400" });

function Servicos() {
  return (
    <main className="flex min-h-screen flex-col px-16">
      <Header />
      <div className="p-4 flex flex-col gap-5 mt-4">
        <h1 className="text-mainColor text-5xl w-[530px]">
          Serviços de Banho & Tosa para seu Pet
        </h1>
        <h1 className="text-mainColor w-[410px]">
          Preencha o formulário abaixo para agendar o banho & tosa do seu pet!
        </h1>
      </div>
      <div className="flex gap-16 justify-center mb-8 ">
        <div className="flex flex-col gap-3">
          <input
            className={`${FontHomenaje.className} w-[300px] border border-black h-[60px] text-3xl rounded-3xl px-4 text-mainColor placeholder-mainColor`}
            placeholder="Nome do pet:"
          />
          <input
            className={`${FontHomenaje.className} w-[300px] border border-black h-[60px] text-3xl rounded-3xl px-4 text-mainColor placeholder-mainColor`}
            placeholder="Tipo de pet:"
          />
          <input
            className={`${FontHomenaje.className} w-[300px] border border-black h-[60px] text-3xl rounded-3xl px-4 text-mainColor placeholder-mainColor`}
            placeholder="Raça:"
          />
          <input
            className={`${FontHomenaje.className} w-[300px] border border-black h-[60px] text-3xl rounded-3xl px-4 text-mainColor placeholder-mainColor`}
            placeholder="Temperamento:"
          />
          <input
            className={`${FontHomenaje.className} w-[300px] border border-black h-[60px] text-3xl rounded-3xl px-4 text-mainColor placeholder-mainColor`}
            placeholder="Tele-Busca:"
          />
        </div>
        <div className="flex flex-col gap-3">
          <input
            className={`${FontHomenaje.className} w-[300px] border border-black h-[60px] text-3xl rounded-3xl px-4 text-mainColor placeholder-mainColor`}
            placeholder="Serviço:"
          />
          <input
            className={`${FontHomenaje.className} w-[300px] border border-black h-[60px] text-3xl rounded-3xl px-4 text-mainColor placeholder-mainColor`}
            placeholder="Data:"
          />
          <input
            className={`${FontHomenaje.className} w-[300px] border border-black h-[60px] text-3xl rounded-3xl px-4 text-mainColor placeholder-mainColor`}
            placeholder="Porte do pet:"
          />
          <input
            className={`${FontHomenaje.className} w-[300px] border border-black h-[60px] text-3xl rounded-3xl px-4 text-mainColor placeholder-mainColor`}
            placeholder="Valor:"
          />
          <SecondButton>AGENDAR SERVIÇO</SecondButton>
        </div>
      </div>
    </main>
  );
}

export default Servicos;
