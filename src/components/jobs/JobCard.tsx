import { MapPin, Briefcase, DollarSign, Heart, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  workMode: string;
  contractType?: string;
  description: string;
  accessibilityFeatures: string[];
  logoUrl?: string;
  onApply: () => void;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
  salaryRange?: { min: number; max: number };
}

export const JobCard = ({
  title,
  company,
  location,
  workMode,
  contractType,
  description,
  accessibilityFeatures,
  logoUrl,
  onApply,
  isFavorite = false,
  onToggleFavorite,
  salaryRange,
}: JobCardProps) => {
  return (
    <Card className="p-6 bg-card border border-border hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
              <p className="text-muted-foreground font-medium">{company}</p>
            </div>
            {onToggleFavorite && (
              <button
                onClick={onToggleFavorite}
                className="text-muted-foreground hover:text-destructive transition-colors"
                aria-label={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
              >
                <Heart className={`w-6 h-6 ${isFavorite ? "fill-destructive text-destructive" : ""}`} />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
            {contractType && (
              <div className="flex items-center gap-1">
                <Briefcase className="w-4 h-4" />
                <span>{contractType}</span>
              </div>
            )}
            {salaryRange && (
              <div className="flex items-center gap-1">
                <DollarSign className="w-4 h-4" />
                <span>
                  R$ {salaryRange.min.toLocaleString()} - R$ {salaryRange.max.toLocaleString()}
                </span>
              </div>
            )}
          </div>

          <p className="text-sm text-foreground mb-4 line-clamp-2">{description}</p>

          {accessibilityFeatures.length > 0 && (
            <div className="mb-4">
              <p className="text-sm font-semibold text-primary mb-2">
                Recursos de Acessibilidade:
              </p>
              <div className="flex flex-wrap gap-2">
                {accessibilityFeatures.map((feature, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-success/10 text-success hover:bg-success/20 border-0"
                  >
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-3">
            <Button onClick={onApply} className="flex-1 font-semibold">
              Candidatar-se
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
              aria-label="Ouvir descrição da vaga"
            >
              <Volume2 className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {logoUrl && (
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
              <img src={logoUrl} alt={`Logo ${company}`} className="w-full h-full object-cover" />
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
