"use client";

import Link from "next/link";
import { Briefcase, FileText, User } from "lucide-react";
import { usePathname } from "next/navigation";

interface HeaderProps {
  variant?: "candidate" | "company" | "none";
  companyName?: string;
}

export const Header = ({ variant, companyName }: HeaderProps) => {
  const pathname = usePathname();

  // Determinar variante baseado na URL se não foi especificada
  const detectedVariant =
    variant ||
    (pathname?.startsWith("/candidate")
      ? "candidate"
      : pathname?.startsWith("/company")
      ? "company"
      : "none");

  // Não mostrar header nas páginas de auth
  if (pathname?.startsWith("/auth") || pathname === "/") {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 bg-[#1a1f35] dark:bg-[#0f1729] text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8"
          >
            <path d="M21.801 10A10 10 0 1 1 17 3.335" />
            <path d="m9 11 3 3L22 4" />
          </svg>
          <span className="text-xl font-bold">EQualy</span>
        </Link>
        <nav className="flex items-center gap-6">
          {detectedVariant === "candidate" && (
            <>
              <Link
                href="/candidate/Applications"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <FileText className="w-5 h-5" />
                <span className="font-medium">Aplicações</span>
              </Link>
              <Link
                href="/candidate/Jobs"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Briefcase className="w-5 h-5" />
                <span className="font-medium">Vagas</span>
              </Link>
              <Link
                href="/candidate/Profile"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <User className="w-5 h-5" />
                <span className="font-medium">Perfil</span>
              </Link>
            </>
          )}
          {detectedVariant === "company" && (
            <>
              <Link
                href="/company/PostJob"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <FileText className="w-5 h-5" />
                <span className="font-medium">Postar</span>
              </Link>
              <Link
                href="/company/Jobs"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Briefcase className="w-5 h-5" />
                <span className="font-medium">Vagas</span>
              </Link>
              <Link
                href="/company/Profile"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <User className="w-5 h-5" />
                <span className="font-medium">Perfil</span>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
