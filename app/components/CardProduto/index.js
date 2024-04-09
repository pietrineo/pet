import Image from "next/image";
import React from "react";

import { Hind_Madurai, Homenaje, Hind } from "next/font/google";
import { FirstButton } from "../FirstButton";

const FontHomenaje = Homenaje({ subsets: ["latin"], weight: "400" });
const FontHind_Madurai = Hind_Madurai({ subsets: ["latin"], weight: "400" });
const FontHind = Hind({ subsets: ["latin"], weight: "400" });

const CardProduto = ({ title, src, desciption, price }) => {
  return (
    <div className="w-[350px] flex flex-col items-center">
      <div className="flex flex-col">
        <div className="flex justify-center mb-4">
          {title && (
            <span
              className={`${FontHomenaje.className} text-2xl text-mainColor`}
            >
              {title}
            </span>
          )}
        </div>
        <div className="flex shadow-[0px_0px_15px_10px_#00000024] rounded-lg p-4">
          <Image
            alt="ração"
            src={`/images/racao${src}.png`}
            width={182}
            height={199}
          />
          <span
            className={`${FontHind_Madurai.className} text-mainColor text-2xl w-[200px] leading-[33px]`}
          >
            {desciption}
          </span>
        </div>
        <div className="bg-bgGray w-[175px] self-center h-[47px] flex justify-center items-center rounded-lg relative bottom-5">
          <span className={`${FontHind.className} text-mainColor font-bold`}>
            R${price}
          </span>
        </div>
      </div>
      <FirstButton size={2}>COMPRAR</FirstButton>
    </div>
  );
};

export { CardProduto };
