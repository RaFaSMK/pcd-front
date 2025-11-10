import { MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CandidateCardProps {
  name: string;
  position: string;
  location: string;
  experience: string;
  education: string;
  disabilityType: string;
  compatibilityScore: number;
  workplaceNeeds: string[];
  resume: string;
  appliedDaysAgo: number;
  photoUrl?: string;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
  onViewProfile: () => void;
  onSendMessage: () => void;
  onReject: () => void;
}

export const CandidateCard = ({
  name,
  position,
  location,
  experience,
  education,
  disabilityType,
  compatibilityScore,
  workplaceNeeds,
  resume,
  appliedDaysAgo,
  photoUrl,
  isFavorite = false,
  onToggleFavorite,
  onViewProfile,
  onSendMessage,
  onReject,
}: CandidateCardProps) => {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Card className="p-6 bg-card border border-border hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4 mb-4">
        <Avatar className="w-16 h-16">
          <AvatarImage src={photoUrl} alt={name} />
          <AvatarFallback className="bg-primary text-primary-foreground text-lg font-bold">
            {getInitials(name)}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-lg font-bold text-primary">{name}</h3>
              <p className="text-sm text-muted-foreground font-medium">
                {position}
              </p>
            </div>
            {onToggleFavorite && (
              <button
                onClick={onToggleFavorite}
                className="text-muted-foreground hover:text-warning transition-colors"
                aria-label={
                  isFavorite
                    ? "Remover dos favoritos"
                    : "Adicionar aos favoritos"
                }
              >
                <Star
                  className={`w-6 h-6 ${
                    isFavorite ? "fill-warning text-warning" : ""
                  }`}
                />
              </button>
            )}
          </div>

          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
        <div>
          <p className="text-muted-foreground mb-1">Experiência</p>
          <p className="font-semibold text-foreground">{experience}</p>
        </div>
        <div>
          <p className="text-muted-foreground mb-1">Escolaridade</p>
          <p className="font-semibold text-foreground">{education}</p>
        </div>
        <div>
          <p className="text-muted-foreground mb-1">Tipo de Deficiência</p>
          <p className="font-semibold text-foreground">{disabilityType}</p>
        </div>
        <div className="col-span-3">
          <p className="text-muted-foreground mb-1">Candidatura</p>
          <p className="font-semibold text-foreground">
            Há {appliedDaysAgo} dia{appliedDaysAgo > 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-foreground">
            {compatibilityScore}% de compatibilidade
          </span>
        </div>
        <Progress value={compatibilityScore} className="h-2 bg-border">
          <div
            className="h-full bg-success transition-all"
            style={{ width: `${compatibilityScore}%` }}
          />
        </Progress>
      </div>

      {workplaceNeeds.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {workplaceNeeds.map((need, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-warning/10 text-warning hover:bg-warning/20 border-0"
              >
                {need}
              </Badge>
            ))}
          </div>
        </div>
      )}

      <div className="mb-4">
        <p className="text-sm text-muted-foreground mb-1 font-semibold">
          Resumo:
        </p>
        <p className="text-sm text-foreground line-clamp-3">{resume}</p>
      </div>

      <div className="flex gap-2">
        <Button size="sm" onClick={onViewProfile} className="flex-1">
          Ver Currículo
        </Button>
        <Button size="sm" onClick={onSendMessage} className="flex-1">
          Enviar Mensagem
        </Button>
        <Button variant="destructive" size="sm" onClick={onReject}>
          Excluir
        </Button>
      </div>
    </Card>
  );
};
