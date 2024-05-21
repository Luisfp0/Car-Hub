import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Descover the besst cars in the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <h4 className="sc-5492faee-2 ipHrwP finalPrice flex items-center justify-center h-screen text-[150px]">R$200,00</h4>
        {/* <Navbar />
        {children}
        <Footer /> */}
      </body>
    </html>
  );
}
