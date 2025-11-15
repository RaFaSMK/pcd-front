import Link from "next/link";
import { Briefcase, FileText, User } from "lucide-react";
import Image from "next/image";
import Logo from "../../../public/logo.png";

interface HeaderProps {
  variant?: "candidate" | "company";
  companyName?: string;
}

export const Header = ({ variant = "candidate" }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-[#0f1729] text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="rounded-full bg-primary-foreground/10 flex items-center justify-center">
            <Image src={Logo} height={100} width={100} alt="Logo" />
          </div>
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
