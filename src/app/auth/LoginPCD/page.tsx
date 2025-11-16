"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-10 h-10"
            >
              <path d="M21.801 10A10 10 0 1 1 17 3.335" />
              <path d="m9 11 3 3L22 4" />
            </svg>
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

          <div className="mt-8 space-y-3">
            <Button
              type="submit"
              className="w-full h-12 text-base font-semibold"
              size="lg"
            >
              <Link href={"/auth/LoginEmpresa"}>Acessar como empresa</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPCD;
