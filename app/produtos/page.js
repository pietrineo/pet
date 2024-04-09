import React from "react";
import { CardProduto, FirstButton, Header } from "../components";

export default function Produtos() {
  return (
    <main className="flex min-h-screen flex-col px-16">
      <Header />
      <div className="flex flex-wrap gap-28 justify-center mt-5">
        <CardProduto
          src={1}
          desciption="Ração Pedigree Nutrição Essencial Carne para Cães Adultos"
          price="49,99"
          title="RAÇÃO SECA"
        />
        <CardProduto
          src={2}
          desciption="Ração Úmida Pedigree Sachê Carne ao Molho para Cães Adultos "
          price="29,99"
          title="RAÇÃO ÚMIDA"
        />
        <CardProduto
          src={3}
          desciption="Ração Golden Special para Cães Adultos Sabor Frango e Carne"
          price="49,99"
        />
        <CardProduto
          src={4}
          desciption="Ração Úmida Premier Pet Golden Gourmet Frango para Cães Adultos"
          price="49,99"
        />
      </div>
    </main>
  );
}
