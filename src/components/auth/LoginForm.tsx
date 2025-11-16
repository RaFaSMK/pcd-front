"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Importa o router do Next.js
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight } from "lucide-react";

interface LoginFormProps {
  userType: "candidate" | "company" | "admin";
  onToggleSignup?: () => void;
}

export const LoginForm = ({ userType, onToggleSignup }: LoginFormProps) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userType === "candidate") {
      router.push("/candidate/Jobs");
    } else if (userType === "company") {
      router.push("/company/Jobs");
    } else {
      router.push("/company/Jobs");
    }
  };

  const handleSignup = () => {
    if (userType === "candidate") {
      router.push("/auth/RegisterPCD");
    } else {
      router.push("/auth/RegisterEmpresa");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium">
          E-mail
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="Insira seu e-mail"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="h-12"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-sm font-medium">
          Senha
        </Label>
        <Input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Insira seu e-mail" // Corrigi aqui, estava "Insira seu e-mail"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
          className="h-12"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="showPassword"
          checked={showPassword}
          onCheckedChange={(checked) => setShowPassword(checked as boolean)}
        />
        <label
          htmlFor="showPassword"
          className="text-sm text-muted-foreground cursor-pointer"
        >
          Exibir Senha
        </label>
      </div>

      <div className="text-center">
        <Button
          type="button"
          variant="link"
          className="text-sm h-auto p-0 font-medium"
          onClick={() => console.log("Recuperar senha")}
        >
          Esqueci minha senha
        </Button>
      </div>

      <Button
        type="submit"
        className="w-full h-12 text-base font-semibold"
        size="lg"
      >
        <ArrowRight className="w-5 h-5 mr-2" />
        Entrar
      </Button>

      <Button
        type="button"
        className="w-full h-12 text-base font-semibold"
        size="lg"
        onClick={onToggleSignup || handleSignup}
      >
        Criar uma nova conta
      </Button>
    </form>
  );
};
