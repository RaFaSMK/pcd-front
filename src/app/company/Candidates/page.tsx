"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AccessibilityBar } from "@/components/accessibility/AccessibilityBar";
import { StatsCard } from "@/components/company/StatsCard";
import { CandidateCard } from "@/components/company/CandidateCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Star, MapPin, Briefcase, ChevronLeft } from "lucide-react";

const Candidates = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"todos" | "recentes">("todos");

  const candidates = [
    {
      id: 1,
      name: "Maria Oliveira Costa",
      position: "Desenvolvedora Front-end Júnior",
      location: "Guarulhos, SP",
      experience: "2 anos",
      education: "Superior Cursando",
      disabilityType: "Visual",
      compatibilityScore: 76,
      workplaceNeeds: ["Tecnologias assistivas", "Leitores de tela"],
      resume:
        "Desenvolvedora com experiência em HTML, CSS e JavaScript. Focada em desenvolvimento web acessível e responsivo...",
      appliedDaysAgo: 1,
      photoUrl: "",
      isFavorite: false,
    },
    {
      id: 2,
      name: "Bernardo Silva Costa",
      position: "Desenvolvedor Back-end Sênior",
      location: "Petrópolis, SP",
      experience: "6 anos",
      education: "Superior Completo",
      disabilityType: "Auditiva",
      compatibilityScore: 47,
      workplaceNeeds: ["Tecnologias assistivas", "Leitores de tela"],
      resume:
        "Desenvolvedor com experiência em HTML, CSS e JavaScript. Focada em desenvolvimento eficiente e responsivo...",
      appliedDaysAgo: 4,
      photoUrl: "",
      isFavorite: true,
    },
    {
      id: 3,
      name: "Márcia Rodrigues Souza",
      position: "Desenvolvedora Front-end Júnior",
      location: "Guarulhos, SP",
      experience: "1 ano",
      education: "Médio Completo",
      disabilityType: "Física",
      compatibilityScore: 88,
      workplaceNeeds: ["Elevadores", "Rampas"],
      resume:
        "Desenvolvedora com experiência em HTML, CSS e JavaScript. Focada em desenvolvimento web acessível e responsivo...",
      appliedDaysAgo: 6,
      photoUrl: "",
      isFavorite: false,
    },
  ];

  const filteredCandidates =
    activeTab === "recentes"
      ? candidates.filter((c) => c.appliedDaysAgo <= 3)
      : candidates;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AccessibilityBar />

      <main className="flex-1 container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => router.push("/company/Jobs")}
          className="mb-4"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Voltar para Minhas Vagas
        </Button>

        <h1 className="text-4xl font-bold text-primary text-center mb-8">
          VAGAS
        </h1>

        <Card className="p-6 mb-8">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-2">
                Desenvolvedor Front-end
              </h2>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  São Paulo, SP - Híbrido
                </span>
                <span className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4" />
                  CLT
                </span>
                <span>Publicada há 5 dias</span>
              </div>
            </div>
          </div>
        </Card>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Estatísticas desta Vaga
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <StatsCard
              icon={Users}
              value={87}
              label="Total de Candidatos"
              iconColor="text-primary"
              iconBgColor="bg-primary/10"
            />
            <StatsCard
              icon={Star}
              value={8}
              label="Favoritos"
              iconColor="text-warning"
              iconBgColor="bg-warning/10"
            />
          </div>
        </section>

        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2">
            <Button
              variant={activeTab === "todos" ? "default" : "outline"}
              onClick={() => setActiveTab("todos")}
            >
              Todos os Candidatos
            </Button>
            <Button
              variant={activeTab === "recentes" ? "default" : "outline"}
              onClick={() => setActiveTab("recentes")}
            >
              Mais Recentes
            </Button>
          </div>
          <Button>Exportar Lista</Button>
        </div>

        <div className="space-y-6">
          {filteredCandidates.map((candidate) => (
            <CandidateCard
              key={candidate.id}
              {...candidate}
              onToggleFavorite={() => {}}
              onViewProfile={() => {}}
              onSendMessage={() => {}}
              onReject={() => {}}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Candidates;
