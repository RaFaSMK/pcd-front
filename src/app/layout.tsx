import { Header } from "@/components/layout/Header";
import "../styles/globals.css";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";

export const metadata = { title: "Vibrant Vision" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <html lang="pt-BR">
        <body>{children}</body>
      </html>
      <Footer />
    </>
  );
}
