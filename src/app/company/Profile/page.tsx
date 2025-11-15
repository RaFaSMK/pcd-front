"use client";

import { useRouter } from "next/navigation";
import { AccessibilityBar } from "@/components/accessibility/AccessibilityBar";
import { ProfileOption } from "@/components/profile/ProfileOption";
import { Button } from "@/components/ui/button";
import { Edit, HelpCircle } from "lucide-react";
import { Header } from "@/components/layout/Header";
import IrrobaLogo from "../../../../public/irroba.png";
import Image from "next/image";

const Profile = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AccessibilityBar />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary text-center mb-8">
          PERFIL
        </h1>

        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-destructive mb-6">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                <Image
                  src={IrrobaLogo}
                  height={45}
                  width={45}
                  alt="Logo irroba"
                />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-1">
              Irroba E-Commerce
            </h2>
            <p className="text-muted-foreground">Entrou em 2025</p>
          </div>

          <div className="space-y-4 mb-12">
            <ProfileOption
              icon={Edit}
              title="Editar Dados"
              description="Altere suas informações pessoais"
              onClick={() => {}}
              iconBgColor="bg-primary/10"
            />

            <ProfileOption
              icon={HelpCircle}
              title="Ajuda"
              description="Entre em contato conosco"
              onClick={() => {}}
              iconBgColor="bg-primary/10"
            />
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="px-12"
              onClick={() => router.push("/")}
            >
              Sair da conta
            </Button>
            <p className="text-sm text-muted-foreground mt-8">V.1.0.0</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
