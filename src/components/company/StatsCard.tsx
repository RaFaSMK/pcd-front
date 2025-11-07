import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatsCardProps {
  icon: LucideIcon;
  value: number;
  label: string;
  iconColor?: string;
  iconBgColor?: string;
}

export const StatsCard = ({
  icon: Icon,
  value,
  label,
  iconColor = "text-primary",
  iconBgColor = "bg-primary/10",
}: StatsCardProps) => {
  return (
    <Card className="p-6 bg-card border border-border">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-lg ${iconBgColor} flex items-center justify-center flex-shrink-0`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <div>
          <p className="text-3xl font-bold text-foreground">{value}</p>
          <p className="text-sm text-muted-foreground">{label}</p>
        </div>
      </div>
    </Card>
  );
};
