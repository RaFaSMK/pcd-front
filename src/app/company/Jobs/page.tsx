import { useState } from "react";
import { useRouter } from "next/router";
import { AccessibilityBar } from "@/components/accessibility/AccessibilityBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StatsCard } from "@/components/company/StatsCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BarChart3, CheckCircle, MapPin, Briefcase, Edit, Pause } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Jobs = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"todas" | "ativas">("todas");

  const jobs = [
    {
      id: 1,
      title: "Desenvolvedor Front-end",
      location: "São Paulo, SP - Híbrido",
      contractType: "CLT",
      published: "Publicada há 5 dias",
      status: "active",
      candidates: 87,
      new: 12,
      inAnalysis: 5,
      daysRemaining: 25,
    },
    {
      id: 2,
      title: "Analista de Suporte",
      location: "Remoto - PJ",
      contractType: "PJ",
      published: "Publicada há 12 dias",
      status: "active",
      candidates: 63,
      new: 8,
      inAnalysis: 3,
      daysRemaining: 18,
    },
    {
      id: 3,
      title: "Designer UX/UI",
      location: "Rio de Janeiro, RJ - CLT",
      contractType: "CLT",
      published: "Pausada há 3 dias",
      status: "paused",
      candidates: 45,
      new: 0,
      inAnalysis: 2,
      daysRemaining: 0,
    },
  ];

  const filteredJobs = activeTab === "ativas" ? jobs.filter((j) => j.status === "active") : jobs;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AccessibilityBar />
      <Header variant="company" companyName="Irroba E-Commerce" />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary text-center mb-8">VAGAS</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Visão Geral</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <StatsCard
              icon={BarChart3}
              value={8}
              label="Vagas Ativas"
              iconColor="text-primary"
              iconBgColor="bg-primary/10"
            />
            <StatsCard
              icon={CheckCircle}
              value={245}
              label="Candidaturas Recebidas"
              iconColor="text-success"
              iconBgColor="bg-success/10"
            />
          </div>
        </section>

        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2">
            <Button
              variant={activeTab === "todas" ? "default" : "outline"}
              onClick={() => setActiveTab("todas")}
            >
              Todas as Vagas
            </Button>
            <Button
              variant={activeTab === "ativas" ? "default" : "outline"}
              onClick={() => setActiveTab("ativas")}
            >
              Mais Recentes
            </Button>
          </div>
          <Button onClick={() => router.push("/empresa/postar-vaga")}>+ Nova Vaga</Button>
        </div>

        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-primary">{job.title}</h3>
                    <Badge
                      variant={job.status === "active" ? "default" : "secondary"}
                      className={
                        job.status === "active"
                          ? "bg-success/10 text-success hover:bg-success/20"
                          : "bg-warning/10 text-warning hover:bg-warning/20"
                      }
                    >
                      {job.status === "active" ? "Ativa" : "Pausada"}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {job.contractType}
                    </span>
                    <span>{job.published}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Pause className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-foreground">{job.candidates}</p>
                  <p className="text-sm text-muted-foreground">Candidatos</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-foreground">{job.new}</p>
                  <p className="text-sm text-muted-foreground">Novos</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-foreground">{job.inAnalysis}</p>
                  <p className="text-sm text-muted-foreground">Em análise</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-foreground">{job.status === "active" ? job.daysRemaining : "-"}</p>
                  <p className="text-sm text-muted-foreground">{job.status === "active" ? "Dias restantes" : "Pausada"}</p>
                </div>
              </div>

              <Button
                className="w-full"
                onClick={() => router.push(`/empresa/vaga/${job.id}/candidatos`)}
              >
                Ver Candidatos
              </Button>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Jobs;
