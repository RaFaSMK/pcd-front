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

const PostJob = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    area: "",
    level: "",
    description: "",
    requirements: "",
    differentials: "",
    contractType: "",
    workMode: "",
    workSchedule: "",
    salaryRange: "",
    benefits: [] as string[],
    estado: "",
    cidade: "",
    address: "",
    accessibilityResources: [] as string[],
    accessibilityInfo: "",
    numberOfVacancies: "1",
    validity: "",
    featured: false,
  });

  const benefitOptions = [
    "Vale Transporte",
    "Vale Refeição",
    "Plano de Saúde",
    "Plano Odontológico",
    "Seguro de Vida",
    "Auxílio Home Office",
  ];

  const accessibilityOptions = [
    "Ambiente adaptado",
    "Tecnologias assistivas",
    "Horário flexível",
    "Intérprete de Libras",
    "Mobiliário adaptado",
    "Transporte adaptado",
  ];

  const handleBenefitToggle = (benefit: string) => {
    setFormData((prev) => ({
      ...prev,
      benefits: prev.benefits.includes(benefit)
        ? prev.benefits.filter((b) => b !== benefit)
        : [...prev.benefits, benefit],
    }));
  };

  const handleAccessibilityToggle = (resource: string) => {
    setFormData((prev) => ({
      ...prev,
      accessibilityResources: prev.accessibilityResources.includes(resource)
        ? prev.accessibilityResources.filter((r) => r !== resource)
        : [...prev.accessibilityResources, resource],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/company/Jobs");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AccessibilityBar />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary text-center mb-8">
          POSTAR
        </h1>

        <Card className="max-w-3xl mx-auto p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary mb-2">
              Cadastrar Nova Vaga
            </h2>
            <p className="text-muted-foreground">
              Preencha os dados da vaga para atrair os melhores talentos
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <FormSection title="Informações Básicas">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Título da Vaga *</Label>
                  <Input
                    id="title"
                    placeholder="Ex: Desenvolvedor Front-end"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="area">Área *</Label>
                    <Select
                      value={formData.area}
                      onValueChange={(value) =>
                        setFormData({ ...formData, area: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tecnologia">Tecnologia</SelectItem>
                        <SelectItem value="administrativo">
                          Administrativo
                        </SelectItem>
                        <SelectItem value="comercial">Comercial</SelectItem>
                        <SelectItem value="operacional">Operacional</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="level">Nível *</Label>
                    <Select
                      value={formData.level}
                      onValueChange={(value) =>
                        setFormData({ ...formData, level: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="junior">Júnior</SelectItem>
                        <SelectItem value="pleno">Pleno</SelectItem>
                        <SelectItem value="senior">Sênior</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Descrição da Vaga *</Label>
                  <Textarea
                    id="description"
                    placeholder="Descreva as principais responsabilidades e atividades do cargo"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="min-h-32"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="requirements">Requisitos *</Label>
                  <Textarea
                    id="requirements"
                    placeholder="Liste os requisitos necessários para a vaga"
                    value={formData.requirements}
                    onChange={(e) =>
                      setFormData({ ...formData, requirements: e.target.value })
                    }
                    className="min-h-32"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="differentials">Diferenciais</Label>
                  <Textarea
                    id="differentials"
                    placeholder="Liste os diferenciais desejados (opcional)"
                    value={formData.differentials}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        differentials: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </FormSection>

            <FormSection title="Condições de Trabalho">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contractType">Tipo de Contrato *</Label>
                    <Select
                      value={formData.contractType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, contractType: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="clt">CLT</SelectItem>
                        <SelectItem value="pj">PJ</SelectItem>
                        <SelectItem value="estagio">Estágio</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="workMode">Regime de Trabalho *</Label>
                    <Select
                      value={formData.workMode}
                      onValueChange={(value) =>
                        setFormData({ ...formData, workMode: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="presencial">Presencial</SelectItem>
                        <SelectItem value="hibrido">Híbrido</SelectItem>
                        <SelectItem value="remoto">Remoto</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="workSchedule">Jornada de Trabalho *</Label>
                    <Select
                      value={formData.workSchedule}
                      onValueChange={(value) =>
                        setFormData({ ...formData, workSchedule: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="integral">Integral</SelectItem>
                        <SelectItem value="parcial">Parcial</SelectItem>
                        <SelectItem value="flexivel">Flexível</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="salaryRange">Faixa Salarial</Label>
                    <Input
                      id="salaryRange"
                      placeholder="Ex: R$ 3.000,00 até R$ 5.000,00"
                      value={formData.salaryRange}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          salaryRange: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div>
                  <Label>Benefícios</Label>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    {benefitOptions.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2">
                        <Checkbox
                          id={benefit}
                          checked={formData.benefits.includes(benefit)}
                          onCheckedChange={() => handleBenefitToggle(benefit)}
                        />
                        <Label
                          htmlFor={benefit}
                          className="font-normal cursor-pointer"
                        >
                          {benefit}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FormSection>

            <FormSection title="Localização">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
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
                </div>

                <div>
                  <Label htmlFor="address">Endereço (Opcional)</Label>
                  <Input
                    id="address"
                    placeholder="Será exibido apenas após aprovação do candidato"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                  />
                </div>
              </div>
            </FormSection>

            <FormSection title="Recursos de Acessibilidade">
              <div className="space-y-4">
                <div>
                  <Label>Recursos disponíveis para esta vaga *</Label>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    {accessibilityOptions.map((resource) => (
                      <div key={resource} className="flex items-center gap-2">
                        <Checkbox
                          id={resource}
                          checked={formData.accessibilityResources.includes(
                            resource
                          )}
                          onCheckedChange={() =>
                            handleAccessibilityToggle(resource)
                          }
                        />
                        <Label
                          htmlFor={resource}
                          className="font-normal cursor-pointer"
                        >
                          {resource}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="accessibilityInfo">
                    Informações Adicionais sobre Acessibilidade
                  </Label>
                  <Textarea
                    id="accessibilityInfo"
                    placeholder="Descreva outros recursos ou adaptações específicas para esta vaga"
                    value={formData.accessibilityInfo}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        accessibilityInfo: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </FormSection>

            <FormSection title="Configurações da Vaga">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="numberOfVacancies">Número de Vagas *</Label>
                    <Input
                      id="numberOfVacancies"
                      type="number"
                      min="1"
                      value={formData.numberOfVacancies}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          numberOfVacancies: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="validity">Validade da Vaga *</Label>
                    <Select
                      value={formData.validity}
                      onValueChange={(value) =>
                        setFormData({ ...formData, validity: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 dias</SelectItem>
                        <SelectItem value="30">30 dias</SelectItem>
                        <SelectItem value="60">60 dias</SelectItem>
                        <SelectItem value="90">90 dias</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox
                    id="featured"
                    checked={formData.featured}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, featured: checked as boolean })
                    }
                  />
                  <Label
                    htmlFor="featured"
                    className="font-normal cursor-pointer"
                  >
                    Destacar esta vaga (aparecerá no topo dos resultados)
                  </Label>
                </div>
              </div>
            </FormSection>

            <div className="flex gap-4">
              <Button
                type="button"
                onClick={() => router.push("/company/Jobs")}
                className="flex-1"
              >
                Cancelar
              </Button>
              <Button type="submit" className="flex-1">
                Publicar Vaga
              </Button>
            </div>
          </form>
        </Card>
      </main>
    </div>
  );
};

export default PostJob;
