import "./globals.css";
import { Aclonica } from "next/font/google";

const FontAclonica = Aclonica({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Petshop",
  description: "Acompanhe a melhor Petshop da Região!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={FontAclonica.className}>{children}</body>
    </html>
  );
}
