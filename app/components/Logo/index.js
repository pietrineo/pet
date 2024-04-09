import Image from "next/image";
import React from "react";

import { ABeeZee } from "next/font/google";

const Abzee = ABeeZee({ subsets: ["latin"], weight: "400", style: "italic" });

const Logo = () => {
  return (
    <div className="flex items-center gap-2 mt-4">
      <Image alt="logo" src="/images/logo.png" height={60} width={60} />
      <span className={`${Abzee.className} text-mainColor text-lg`}>
        PETSHOP
      </span>
    </div>
  );
};

export { Logo };
