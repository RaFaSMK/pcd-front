"use client";

import { FileText } from "lucide-react";
import { AccessibilityBar } from "@/components/accessibility/AccessibilityBar";
import { Button } from "@/components/ui/button";
import { ApplicationCard } from "@/components/applications/ApplicationCard";
import { StatsCard } from "@/components/company/StatsCard";

import IrrobaLogo from "@/../public/irroba.png";

const Applications = () => {
  // Mock data
  const applications = [
    {
      id: "1",
      jobTitle: "Desenvolvedor Front-end",
      company: "Irroba E-commerce",
      location: "São Paulo, SP",
      workMode: "Híbrido",
      contractType: "CLT",
      salaryRange: { min: 5000, max: 7000 },
      appliedDate: "10/01/2025",
      compatibilityScore: 78,
      logoUrl: IrrobaLogo, // Depois tem que ver isso
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AccessibilityBar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">
          APLICAÇÕES
        </h1>

        {/* Stats */}
        <div className="bg-card rounded-xl shadow-md mb-8">
          <h2 className="text-xl font-bold text-foreground mb-4">
            Resumo das Candidaturas
          </h2>
          <StatsCard
            icon={FileText}
            value={applications.length}
            label="Total de Candidaturas"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-3 mb-6">
          <Button className="bg-[#715ae2] text-primary-foreground hover:bg-white hover:text-primary h-14 px-8 text-lg font-semibold">
            Todas as Candidaturas
          </Button>
          <Button className="bg-[#715ae2] text-primary-foreground hover:bg-white hover:text-primary h-14 px-8 text-lg font-semibold">
            Buscar Novas Vagas
          </Button>
        </div>

        {/* Application Cards */}
        <div className="space-y-6">
          {applications.map((application) => (
            <ApplicationCard
              key={application.id}
              jobTitle={application.jobTitle}
              company={application.company}
              location={application.location}
              workMode={application.workMode}
              contractType={application.contractType}
              salaryRange={application.salaryRange}
              appliedDate={application.appliedDate}
              compatibilityScore={application.compatibilityScore}
              logoUrl={application.logoUrl}
              onViewDetails={() => console.log("View details", application.id)}
              onCancel={() => console.log("Cancel application", application.id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Applications;
