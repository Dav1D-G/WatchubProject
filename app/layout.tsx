import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/scss/style.scss";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Watchub",
  description: "Feel that action on your skin!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
