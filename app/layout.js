
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./_components/Header/Header";
import SideNav from "./_components/SideNav/SideNav";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OpenSpace",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="h-[100%] flex justify-between ">
          <div className="w-[5%]">
            <SideNav />
          </div>
          <div className="w-[95%]">{children}</div>
        </div>
      </body>
    </html>
  );
}
