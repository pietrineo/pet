"use client";

import Image from "next/image";

import { Hind_Madurai, Hind } from "next/font/google";
import { FirstButton, Header, Logo, SecondButton } from "./components";

const FontHind = Hind({ subsets: ["latin"], weight: "400" });
const FontHind_Madurai = Hind_Madurai({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-16">
      <Header />
      <div id="body" className="mt-20 flex justify-between">
        <div>
          <div className="w-[600px] flex flex-col gap-4">
            <h1 className="text-5xl text-mainColor leading-[4rem]">
              Produtos exclusivos para seu Pet !
            </h1>
            <span
              className={`text-lg text-mainColor ${FontHind_Madurai.className} w-[400px]`}
            >
              Aqui você encontra os melhores produtos do mercado e serviços de
              altíssima qualidade!
            </span>
          </div>

          <div className="mt-8">
            <SecondButton
              handleClick={() => window.open("/cadastrar", "_self")}
            >
              CADASTRAR
              <Image
                alt="arrow icon"
                width={90}
                height={20}
                src="/images/arrow.png"
              />
            </SecondButton>
          </div>
        </div>
        <div>
          <Image
            alt="cachorro image"
            src="/images/bg2dog.png"
            width={500}
            height={500}
          />
        </div>
      </div>
    </main>
  );
}
