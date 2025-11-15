"use client";

import { ChevronRight, LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ProfileOptionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
  iconBgColor?: string;
}

export const ProfileOption = ({
  icon: Icon,
  title,
  description,
  onClick,
  iconBgColor = "bg-primary/10",
}: ProfileOptionProps) => {
  return (
    <Card
      onClick={onClick}
      className="p-4 flex items-center gap-4 cursor-pointer hover:shadow-lg transition-all border border-border group"
    >
      <div
        className={`w-14 h-14 rounded-xl ${iconBgColor} flex items-center justify-center shrink-0`}
      >
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-primary mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
    </Card>
  );
};
