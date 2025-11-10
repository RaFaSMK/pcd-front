"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AccessibilityBar } from "@/components/accessibility/AccessibilityBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { FormSection } from "@/components/forms/FormSection";
import { Card } from "@/components/ui/card";
import { Building2 } from "lucide-react";

const RegisterEmpresa = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    razaoSocial: "",
    nomeFantasia: "",
    cnpj: "",
    inscricaoEstadual: "",
    porte: "",
    setor: "",
    sobre: "",
    site: "",
    cep: "",
    estado: "",
    cidade: "",
    endereco: "",
    numero: "",
    bairro: "",
    complemento: "",
    nomeResponsavel: "",
    cargo: "",
    cpfResponsavel: "",
    telefone: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/empresa/vagas"); // TODO
  };

  return (
    <div className="min-h-screen bg-background">
      <AccessibilityBar />

      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-3xl mx-auto p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-4">
              <Building2 className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-primary mb-2">
              Cadastro de Empresa
            </h1>
            <p className="text-muted-foreground">
              Junte-se à nós na construção de um mercado mais inclusivo
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <FormSection title="Dados da Empresa">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="razaoSocial">Razão Social *</Label>
                  <Input
                    id="razaoSocial"
                    value={formData.razaoSocial}
                    onChange={(e) =>
                      setFormData({ ...formData, razaoSocial: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="nomeFantasia">Nome Fantasia *</Label>
                  <Input
                    id="nomeFantasia"
                    value={formData.nomeFantasia}
                    onChange={(e) =>
                      setFormData({ ...formData, nomeFantasia: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cnpj">CNPJ *</Label>
                    <Input
                      id="cnpj"
                      placeholder="00.000.000/0000-00"
                      value={formData.cnpj}
                      onChange={(e) =>
                        setFormData({ ...formData, cnpj: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="inscricaoEstadual">
                      Inscrição Estadual
                    </Label>
                    <Input
                      id="inscricaoEstadual"
                      value={formData.inscricaoEstadual}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          inscricaoEstadual: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="porte">Porte da Empresa *</Label>
                    <Select
                      value={formData.porte}
                      onValueChange={(value) =>
                        setFormData({ ...formData, porte: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mei">MEI</SelectItem>
                        <SelectItem value="pequena">Pequena</SelectItem>
                        <SelectItem value="media">Média</SelectItem>
                        <SelectItem value="grande">Grande</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="setor">Setor de Atuação *</Label>
                    <Select
                      value={formData.setor}
                      onValueChange={(value) =>
                        setFormData({ ...formData, setor: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tecnologia">Tecnologia</SelectItem>
                        <SelectItem value="comercio">Comércio</SelectItem>
                        <SelectItem value="servicos">Serviços</SelectItem>
                        <SelectItem value="industria">Indústria</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="sobre">Sobre a Empresa *</Label>
                  <Textarea
                    id="sobre"
                    placeholder="Descreva sua empresa e cultura organizacional"
                    value={formData.sobre}
                    onChange={(e) =>
                      setFormData({ ...formData, sobre: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="site">Site</Label>
                  <Input
                    id="site"
                    placeholder="https://www.suaempresa.com.br"
                    value={formData.site}
                    onChange={(e) =>
                      setFormData({ ...formData, site: e.target.value })
                    }
                  />
                </div>
              </div>
            </FormSection>

            <FormSection title="Endereço da Empresa">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cep">CEP *</Label>
                    <Input
                      id="cep"
                      placeholder="00000-000"
                      value={formData.cep}
                      onChange={(e) =>
                        setFormData({ ...formData, cep: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="estado">Estado *</Label>
                    <Select
                      value={formData.estado}
                      onValueChange={(value) =>
                        setFormData({ ...formData, estado: value })
                      }
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
                </div>

                <div>
                  <Label htmlFor="cidade">Cidade *</Label>
                  <Input
                    id="cidade"
                    value={formData.cidade}
                    onChange={(e) =>
                      setFormData({ ...formData, cidade: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="endereco">Endereço *</Label>
                  <Input
                    id="endereco"
                    placeholder="Insira seu endereço aqui..."
                    value={formData.endereco}
                    onChange={(e) =>
                      setFormData({ ...formData, endereco: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="numero">Número *</Label>
                    <Input
                      id="numero"
                      value={formData.numero}
                      onChange={(e) =>
                        setFormData({ ...formData, numero: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="bairro">Bairro *</Label>
                    <Input
                      id="bairro"
                      value={formData.bairro}
                      onChange={(e) =>
                        setFormData({ ...formData, bairro: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="complemento">Complemento</Label>
                    <Input
                      id="complemento"
                      value={formData.complemento}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          complemento: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </FormSection>

            <FormSection title="Responsável pelo Cadastro">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="nomeResponsavel">Nome Completo *</Label>
                  <Input
                    id="nomeResponsavel"
                    value={formData.nomeResponsavel}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        nomeResponsavel: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cargo">Cargo *</Label>
                    <Input
                      id="cargo"
                      placeholder="Ex: Gerente de RH"
                      value={formData.cargo}
                      onChange={(e) =>
                        setFormData({ ...formData, cargo: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="cpfResponsavel">CPF *</Label>
                    <Input
                      id="cpfResponsavel"
                      placeholder="000.000.000-00"
                      value={formData.cpfResponsavel}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          cpfResponsavel: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="telefone">Telefone *</Label>
                    <Input
                      id="telefone"
                      placeholder="(00) 0000-0000"
                      value={formData.telefone}
                      onChange={(e) =>
                        setFormData({ ...formData, telefone: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
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
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Mínimo 6 caracteres
                  </p>
                </div>

                <div>
                  <Label htmlFor="confirmPassword">Confirmar Senha *</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
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
                Li e aceito os{" "}
                <span className="text-primary underline cursor-pointer">
                  Termos de Uso
                </span>{" "}
                e a{" "}
                <span className="text-primary underline cursor-pointer">
                  Política de Privacidade
                </span>
              </Label>
            </div>

            <div className="flex gap-4">
              <Button
                type="button"
                onClick={() => router.push("/login-empresa")}
                className="flex-1"
              >
                Cancelar
              </Button>
              <Button type="submit" className="flex-1">
                Cadastrar Empresa
              </Button>
            </div>

            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground">
                Já tem uma conta?{" "}
                <button
                  type="button"
                  onClick={() => router.push("/auth/LoginEmpresa")}
                  className="text-primary font-semibold hover:underline"
                >
                  Fazer login
                </button>
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                É um candidato?{" "}
                <button
                  type="button"
                  onClick={() => router.push("/auth/RegisterPCD")}
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

export default RegisterEmpresa;
