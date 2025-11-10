import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Briefcase, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-linear-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 py-20">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-12 h-12"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            EQualy
          </h1>

          <p className="text-xl md:text-2xl text-center mb-12 opacity-95 max-w-3xl mx-auto">
            Plataforma acessível e inclusiva conectando talentos PCD às melhores
            oportunidades
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant={null}
              className="bg-primary-foreground text-primary-foreground hover:bg-white hover:text-primary h-14 px-8 text-lg font-semibold"
            >
              <Link href={"/auth/LoginPCD"}>
                Sou Candidato
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant={null}
              size="lg"
              className="bg-primary-foreground text-primary-foreground hover:bg-white hover:text-primary h-14 px-8 text-lg font-semibold"
            >
              <Link href={"/auth/LoginEmpresa"}>
                Sou Empresa
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
          Por que escolher a EQualy?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-xl p-8 shadow-md border border-border">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">
              Inclusão Real
            </h3>
            <p className="text-muted-foreground">
              Conectamos empresas comprometidas com a diversidade a
              profissionais PCD qualificados
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-md border border-border">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Briefcase className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">
              Oportunidades Reais
            </h3>
            <p className="text-muted-foreground">
              Vagas exclusivas pensadas para valorizar o potencial de cada
              profissional
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-md border border-border">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">
              Acessibilidade Total
            </h3>
            <p className="text-muted-foreground">
              Plataforma desenvolvida com recursos de acessibilidade para todos
              os usuários
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
