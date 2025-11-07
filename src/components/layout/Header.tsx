import Link from "next/link"; // Importa o Link do Next.js
import { Briefcase, FileText, User } from "lucide-react";

interface HeaderProps {
  variant?: "candidate" | "company";
  companyName?: string;
}

// Este permanece um Server Component (sem "use client")
// o que é ótimo para performance!
export const Header = ({ variant = "candidate" }: HeaderProps) => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Muda de 'to' para 'href' */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-primary-foreground"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <span className="text-xl font-bold text-foreground">EQualy</span>
        </Link>

        <nav className="flex items-center gap-6">
          {variant === "candidate" && (
            <>
              {/* Muda de 'to' para 'href' */}
              <Link
                href="/aplicacoes"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <FileText className="w-5 h-5" />
                <span className="font-medium">Aplicações</span>
              </Link>
              {/* Muda de 'to' para 'href' */}
              <Link
                href="/vagas"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <Briefcase className="w-5 h-5" />
                <span className="font-medium">Vagas</span>
              </Link>
            </>
          )}

          {variant === "company" && (
            <>
              {/* Muda de 'to' para 'href' */}
              <Link
                href="/empresa/postar"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <FileText className="w-5 h-5" />
                <span className="font-medium">Postar</span>
              </Link>
              {/* Muda de 'to' para 'href' */}
              <Link
                href="/empresa/vagas"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <Briefcase className="w-5 h-5" />
                <span className="font-medium">Vagas</span>
              </Link>
            </>
          )}

          {/* Muda de 'to' para 'href' */}
          <Link
            href="/perfil"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <User className="w-5 h-5" />
            <span className="font-medium">Perfil</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};
