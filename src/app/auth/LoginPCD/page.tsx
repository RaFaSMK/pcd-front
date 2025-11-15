"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AccessibilityBar } from "@/components/accessibility/AccessibilityBar";
import { LoginForm } from "@/components/auth/LoginForm";

const LoginPCD = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AccessibilityBar />

      <header className="py-6 px-4">
        <div className="container mx-auto">
          <Link href={"/"} className="flex items-center gap-2 w-fit">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-7 h-7 text-primary-foreground"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-foreground">EQualy</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-card rounded-2xl shadow-lg p-8 border border-input">
          <h1 className="text-3xl font-bold text-center mb-8 text-foreground">
            Acessar Conta
          </h1>

          <LoginForm
            userType="candidate"
            onToggleSignup={() => router.push("/auth/RegisterPCD")}
          />

          <div className="mt-8 text-center space-y-2">
            <Link
              href={"/auth/LoginEmpresa"}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Acessar como empresa
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPCD;
