"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "NewEra",
//   description: "NewEra is a blog application",
// };

export default function RootLayout({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap.min.js");
    }
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
