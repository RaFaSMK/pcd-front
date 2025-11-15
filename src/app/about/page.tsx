export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-8 text-foreground">
          Sobre a EQualy
        </h1>
        <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground">
          <p className="text-lg">
            A EQualy é uma plataforma dedicada a promover a inclusão de pessoas
            com deficiência (PCD) no mercado de trabalho.
          </p>
          <p className="text-lg">
            Nossa missão é conectar talentos PCD qualificados às melhores
            oportunidades, criando um ambiente mais diverso e inclusivo.
          </p>
          <p className="text-lg">
            Desenvolvida com foco em acessibilidade, a plataforma oferece
            recursos que garantem uma experiência completa para todos os
            usuários.
          </p>
        </div>
      </div>
    </div>
  );
}
