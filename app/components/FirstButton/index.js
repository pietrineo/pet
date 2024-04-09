import React from "react";

import { Hind } from "next/font/google";

const FontHind = Hind({ subsets: ["latin"], weight: "400" });

const FirstButton = ({ size, children, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={`text-mainColor text-lg border border-mainColor border-solid rounded-[56px] flex justify-center items-center ${
        size == 1 ? "h-[77px] w-[210px]" : "h-[64px] w-[154px]"
      } ${FontHind.className}
        bg-gradient-to-b from-bgGradient1 to-bgGradient2
      `}
    >
      {children}
    </button>
  );
};

export { FirstButton };
