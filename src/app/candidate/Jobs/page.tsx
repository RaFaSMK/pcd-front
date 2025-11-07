import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { AccessibilityBar } from "@/components/accessibility/AccessibilityBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { JobCard } from "@/components/jobs/JobCard";
import { FilterModal, JobFilters } from "@/components/jobs/FilterModal";

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<JobFilters>({
    workModes: [],
    locations: [],
    salaryRange: [700, 1950],
  });

  // Mock data
  const jobs = [
    {
      id: "1",
      title: "Desenvolvedor Front-end",
      company: "Tech Inclusiva",
      location: "São Paulo, SP",
      workMode: "Híbrido",
      contractType: "CLT",
      description: "Buscamos desenvolvedor(a) para criar interfaces acessíveis",
      accessibilityFeatures: ["Ambiente adaptado", "Tecnologias assistivas", "Horário flexível"],
      salaryRange: { min: 5000, max: 7000 },
      logoUrl: "/placeholder.svg",
    },
    {
      id: "2",
      title: "Analista de Suporte",
      company: "Soluções Digitais",
      location: "Remoto",
      workMode: "Remoto",
      contractType: "PJ",
      description: "Atendimento e suporte técnico a clientes",
      accessibilityFeatures: ["100% remoto", "Equipamentos adaptados", "Horário flexível"],
      salaryRange: { min: 3000, max: 4500 },
      logoUrl: "/placeholder.svg",
    },
    {
      id: "3",
      title: "Designer UX/UI",
      company: "Criativa Acessível",
      location: "Rio de Janeiro, RJ",
      workMode: "Híbrido",
      contractType: "CLT",
      description: "Criação de experiências digitais inclusivas",
      accessibilityFeatures: ["Transporte adaptado", "Intérprete de Libras", "Ambiente acessível"],
      salaryRange: { min: 4000, max: 6000 },
      logoUrl: "/placeholder.svg",
    },
  ];

  const handleApplyFilters = (newFilters: JobFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AccessibilityBar />
      <Header variant="candidate" />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">VAGAS</h1>

        {/* Search Bar */}
        <div className="bg-card rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-foreground mb-4">Encontre sua oportunidade</h2>
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Cargo, palavra-chave..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <Button size="lg" className="px-8 font-semibold">
              Buscar
            </Button>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-primary">
            Vagas Disponíveis ({jobs.length})
          </h2>
          <Button
            variant="outline"
            onClick={() => setShowFilters(true)}
            className="gap-2 font-semibold"
          >
            <SlidersHorizontal className="w-5 h-5" />
            Filtros
          </Button>
        </div>

        {/* Job Cards */}
        <div className="space-y-6">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              title={job.title}
              company={job.company}
              location={job.location}
              workMode={job.workMode}
              contractType={job.contractType}
              description={job.description}
              accessibilityFeatures={job.accessibilityFeatures}
              salaryRange={job.salaryRange}
              logoUrl={job.logoUrl}
              onApply={() => console.log("Apply to", job.id)}
              onToggleFavorite={() => console.log("Toggle favorite", job.id)}
            />
          ))}
        </div>
      </main>

      <Footer />

      <FilterModal
        open={showFilters}
        onClose={() => setShowFilters(false)}
        onApplyFilters={handleApplyFilters}
      />
    </div>
  );
};

export default Jobs;
