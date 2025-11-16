import { Header } from "@/components/layout/Header";
import "../styles/globals.css";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "EQualy - Plataforma Inclusiva",
  icons: {
    icon: "/favicon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
