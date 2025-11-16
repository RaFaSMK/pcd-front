"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { LoginForm } from "@/components/auth/LoginForm";
import { Button } from "@/components/ui/button";

const LoginEmpresa = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1 flex">
        {/* Left side - Image */}
        <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-primary/90 via-primary to-primary/80 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 flex items-center justify-center w-full p-12">
            <div className="text-primary-foreground">
              <h2 className="text-4xl font-bold mb-4">
                Conecte-se ao talento inclusivo
              </h2>
              <p className="text-lg opacity-90">
                Encontre profissionais qualificados e construa um ambiente de
                trabalho mais diverso
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-md">
            <Link
              href={"/"}
              className="flex items-center gap-2 mb-12 w-fit mx-auto"
            >
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

            <h1 className="text-3xl font-bold text-center mb-8 text-foreground">
              Acessar Conta
            </h1>

            <LoginForm
              userType="company"
              onToggleSignup={() => router.push("/auth/RegisterEmpresa")}
            />

            <div className="mt-8 space-y-3">
              <Button
                asChild
                className="w-full h-12 text-base font-semibold"
                size="lg"
              >
                <Link href={"/auth/LoginPCD"}>Acessar como candidato</Link>
              </Button>
              <Button
                asChild
                className="w-full h-12 text-base font-semibold"
                size="lg"
              >
                <Link href={"/auth/LoginDev"}>Acessar como Dev</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginEmpresa;
