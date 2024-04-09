import React from "react";

import { Homenaje } from "next/font/google";

const FontHomenaje = Homenaje({ subsets: ["latin"], weight: "400" });

const SecondButton = ({ children, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={`text-mainColor border border-solid border-bgGradient1 text-lg rounded-[43px] shadow-xl flex justify-center items-center ${FontHomenaje.className} p-4`}
    >
      {children}
    </button>
  );
};

export { SecondButton };
