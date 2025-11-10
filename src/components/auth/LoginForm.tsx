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
  const router = useRouter(); // Usa o hook do Next.js
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Substitui navigate() por router.push()
    if (userType === "candidate") {
      router.push("/vagas");
    } else if (userType === "company") {
      router.push("/empresa/vagas");
    } else {
      router.push("/empresa/vagas");
    }
  };

  const handleSignup = () => {
    // Substitui navigate() por router.push()
    if (userType === "candidate") {
      router.push("/cadastro-pcd");
    } else {
      router.push("/cadastro-empresa");
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
        <a
          href="#"
          className="text-sm text-foreground hover:text-primary underline transition-colors"
        >
          Esqueci minha senha
        </a>
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
        className="w-full h-12 text-base font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        onClick={onToggleSignup || handleSignup}
      >
        Criar uma nova conta
      </Button>
    </form>
  );
};
