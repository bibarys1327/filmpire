import type { Metadata } from "next";

import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex h-full antialiased`}>
        <div className="h-[70px]" />
        <div className="flex-1 p-8">{children}</div>
      </body>
    </html>
  );
}
