import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";
import Nav from "@/components/Nav/Nav.component";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crypto Pioneer Community",
  description: "Crypto Pioneer Community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className={inter.className}>
        <NextUIProvider>
          <main className="purple-dark text-foreground bg-background p-[16px]">
            <div className="min-h-screen">{children}</div>
            <Nav />
            <footer className="text-center">
              <p>
                Copyright © 2024 CPC® <br /> All rights reserved.
              </p>
            </footer>
          </main>
        </NextUIProvider>
      </body>
    </html>
  );
}
