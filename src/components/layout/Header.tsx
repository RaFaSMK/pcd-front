import Link from "next/link";
import { Briefcase, FileText, User } from "lucide-react";

interface HeaderProps {
  variant?: "candidate" | "company";
  companyName?: string;
}

export const Header = ({ variant = "candidate" }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-[#0f1729] text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
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
          <span className="text-xl font-bold text-primary-foreground">
            EQualy
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          {variant === "candidate" && (
            <>
              <Link
                href="/candidate/Applications"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <FileText className="w-5 h-5" />
                <span className="font-medium">Aplicações</span>
              </Link>
              <Link
                href="/candidate/Jobs"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Briefcase className="w-5 h-5" />
                <span className="font-medium">Vagas</span>
              </Link>
            </>
          )}
          {variant === "company" && (
            <>
              <Link
                href="/company/PostJob"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <FileText className="w-5 h-5" />
                <span className="font-medium">Postar</span>
              </Link>
              <Link
                href="/company/Jobs"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Briefcase className="w-5 h-5" />
                <span className="font-medium">Vagas</span>
              </Link>
            </>
          )}
          <Link
            href="/company/Profile"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <User className="w-5 h-5" />
            <span className="font-medium">Perfil</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};
