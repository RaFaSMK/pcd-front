import { MapPin, Briefcase, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Image, { StaticImageData } from "next/image";

interface ApplicationCardProps {
  jobTitle: string;
  company: string;
  location: string;
  workMode: string;
  contractType?: string;
  salaryRange?: { min: number; max: number };
  appliedDate: string;
  compatibilityScore: number;
  logoUrl?: StaticImageData;
  onViewDetails: () => void;
  onCancel?: () => void;
}

export const ApplicationCard = ({
  jobTitle,
  company,
  location,
  workMode,
  contractType,
  salaryRange,
  appliedDate,
  compatibilityScore,
  logoUrl,
  onViewDetails,
  onCancel,
}: ApplicationCardProps) => {
  return (
    <Card className="p-6 bg-card border border-border">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-primary mb-2">{jobTitle}</h3>
          <p className="text-base text-muted-foreground font-medium mb-3">
            {company}
          </p>

          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-foreground">
                {compatibilityScore}% de compatibilidade
              </span>
            </div>
            <Progress value={compatibilityScore} className="h-3 bg-border">
              <div
                className="h-full bg-success transition-all"
                style={{ width: `${compatibilityScore}%` }}
              />
            </Progress>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>
                {location} - {workMode}
              </span>
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
                  R$ {salaryRange.min.toLocaleString()} - R${" "}
                  {salaryRange.max.toLocaleString()}
                </span>
              </div>
            )}
          </div>
        </div>

        {logoUrl && (
          <div className="shrink-0">
            <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
              <Image
                src={logoUrl}
                alt={`Logo ${company}`}
                height={24}
                width={24}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </div>

      <div className="text-sm text-muted-foreground mb-4">
        <span className="font-medium">Candidatura enviada:</span> {appliedDate}
      </div>

      <div className="flex gap-3">
        <Button
          onClick={onViewDetails}
          className="flex-1 text-base font-semibold h-14 px-8"
        >
          Ver Detalhes da Vaga
        </Button>
        {onCancel && (
          <Button
            onClick={onCancel}
            className="text-base font-semibold h-14 px-8"
          >
            Cancelar Candidatura
          </Button>
        )}
      </div>
    </Card>
  );
};
