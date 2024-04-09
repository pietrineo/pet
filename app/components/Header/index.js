"use client";
import React from "react";
import { Logo } from "../Logo";
import { FirstButton } from "../FirstButton";

const Header = () => {
  return (
    <div
      id="header"
      className="h-[100px] w-full flex items-end justify-between"
    >
      <Logo />
      <div className="flex gap-5">
        <FirstButton handleClick={() => window.open("/", "_self")}>
          Home
        </FirstButton>
        <FirstButton handleClick={() => window.open("/produtos", "_self")}>
          Produtos
        </FirstButton>
        <FirstButton handleClick={() => window.open("/servicos", "_self")}>
          Serviços
        </FirstButton>
        <FirstButton handleClick={() => window.open("/cadastrar", "_self")}>
          Cadastre-se
        </FirstButton>
      </div>
    </div>
  );
};

export { Header };
