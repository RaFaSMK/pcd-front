"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AccessibilityBar } from "@/components/accessibility/AccessibilityBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { FormSection } from "@/components/forms/FormSection";
import { Card } from "@/components/ui/card";
import { User } from "lucide-react";

const RegisterPCD = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cpf: "",
    birthDate: "",
    gender: "",
    disabilityType: "",
    cid: "",
    estado: "",
    cidade: "",
    experience: "",
    education: "",
    skills: "",
    about: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/vagas");
  };

  return (
    <div className="min-h-screen bg-background">
      <AccessibilityBar />
      
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-3xl mx-auto p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-4">
              <User className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-primary mb-2">Cadastro de Candidato</h1>
            <p className="text-muted-foreground">Preencha seus dados para criar sua conta</p>
          </div>

          <form onSubmit={handleSubmit}>
            <FormSection title="Dados Pessoais">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cpf">CPF *</Label>
                    <Input
                      id="cpf"
                      placeholder="000.000.000-00"
                      value={formData.cpf}
                      onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="birthDate">Data de Nascimento *</Label>
                    <Input
                      id="birthDate"
                      type="date"
                      value={formData.birthDate}
                      onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Telefone *</Label>
                  <Input
                    id="phone"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>
            </FormSection>

            <FormSection title="Informações de Deficiência">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="disabilityType">Tipo de Deficiência *</Label>
                  <Select
                    value={formData.disabilityType}
                    onValueChange={(value) => setFormData({ ...formData, disabilityType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="visual">Visual</SelectItem>
                      <SelectItem value="auditiva">Auditiva</SelectItem>
                      <SelectItem value="fisica">Física</SelectItem>
                      <SelectItem value="intelectual">Intelectual</SelectItem>
                      <SelectItem value="multipla">Múltipla</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="cid">CID (Opcional)</Label>
                  <Input
                    id="cid"
                    value={formData.cid}
                    onChange={(e) => setFormData({ ...formData, cid: e.target.value })}
                  />
                </div>
              </div>
            </FormSection>

            <FormSection title="Localização">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="estado">Estado *</Label>
                  <Select
                    value={formData.estado}
                    onValueChange={(value) => setFormData({ ...formData, estado: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sp">São Paulo</SelectItem>
                      <SelectItem value="rj">Rio de Janeiro</SelectItem>
                      <SelectItem value="mg">Minas Gerais</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="cidade">Cidade *</Label>
                  <Input
                    id="cidade"
                    value={formData.cidade}
                    onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                    required
                  />
                </div>
              </div>
            </FormSection>

            <FormSection title="Informações Profissionais">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="education">Escolaridade *</Label>
                  <Select
                    value={formData.education}
                    onValueChange={(value) => setFormData({ ...formData, education: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fundamental">Ensino Fundamental</SelectItem>
                      <SelectItem value="medio">Ensino Médio</SelectItem>
                      <SelectItem value="superior">Superior Cursando</SelectItem>
                      <SelectItem value="completo">Superior Completo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="skills">Habilidades *</Label>
                  <Textarea
                    id="skills"
                    placeholder="Liste suas principais habilidades"
                    value={formData.skills}
                    onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="about">Sobre você *</Label>
                  <Textarea
                    id="about"
                    placeholder="Conte um pouco sobre sua experiência profissional"
                    value={formData.about}
                    onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                    required
                  />
                </div>
              </div>
            </FormSection>

            <FormSection title="Criar Senha">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="password">Senha *</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-1">Mínimo 6 caracteres</p>
                </div>

                <div>
                  <Label htmlFor="confirmPassword">Confirmar Senha *</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    required
                  />
                </div>
              </div>
            </FormSection>

            <div className="flex items-center gap-2 mb-6">
              <Checkbox
                id="terms"
                checked={formData.acceptTerms}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, acceptTerms: checked as boolean })
                }
              />
              <Label htmlFor="terms" className="text-sm">
                Li e aceito os <span className="text-primary underline cursor-pointer">Termos de Uso</span> e a{" "}
                <span className="text-primary underline cursor-pointer">Política de Privacidade</span>
              </Label>
            </div>

            <div className="flex gap-4">
              <Button type="button" variant="outline" onClick={() => router.push("auth/LoginPCD")} className="flex-1">
                Cancelar
              </Button>
              <Button type="submit" className="flex-1">
                Cadastrar Candidato
              </Button>
            </div>

            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground">
                Já tem uma conta?{" "}
                <button
                  type="button"
                  onClick={() => router.push("auth/RegisterPCD")}
                  className="text-primary font-semibold hover:underline"
                >
                  Fazer login
                </button>
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                É uma empresa?{" "}
                <button
                  type="button"
                  onClick={() => router.push("auth/RegisterEmpresa")}
                  className="text-primary font-semibold hover:underline"
                >
                  Cadastre-se aqui
                </button>
              </p>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPCD;
