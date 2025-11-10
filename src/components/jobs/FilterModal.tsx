"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface FilterModalProps {
  open: boolean;
  onClose: () => void;
  onApplyFilters: (filters: JobFilters) => void;
}

export interface JobFilters {
  workModes: string[];
  locations: string[];
  salaryRange: [number, number];
}

export const FilterModal = ({
  open,
  onClose,
  onApplyFilters,
}: FilterModalProps) => {
  const [filters, setFilters] = useState<JobFilters>({
    workModes: [],
    locations: [],
    salaryRange: [700, 1950],
  });

  const [locationInput, setLocationInput] = useState("");

  const workModeOptions = [
    { id: "remote", label: "Remoto" },
    { id: "hybrid", label: "Híbrido" },
    { id: "presential", label: "Presencial" },
  ];

  const handleWorkModeToggle = (modeId: string) => {
    setFilters((prev) => ({
      ...prev,
      workModes: prev.workModes.includes(modeId)
        ? prev.workModes.filter((m) => m !== modeId)
        : [...prev.workModes, modeId],
    }));
  };

  const handleAddLocation = () => {
    if (
      locationInput.trim() &&
      !filters.locations.includes(locationInput.trim())
    ) {
      setFilters((prev) => ({
        ...prev,
        locations: [...prev.locations, locationInput.trim()],
      }));
      setLocationInput("");
    }
  };

  const handleRemoveLocation = (location: string) => {
    setFilters((prev) => ({
      ...prev,
      locations: prev.locations.filter((l) => l !== location),
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      workModes: [],
      locations: [],
      salaryRange: [700, 1950],
    });
  };

  const handleApply = () => {
    onApplyFilters(filters);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-primary">
            FILTROS
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Jornada */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-3">Jornada</h3>
            <div className="space-y-2">
              {workModeOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={option.id}
                    checked={filters.workModes.includes(option.id)}
                    onCheckedChange={() => handleWorkModeToggle(option.id)}
                  />
                  <Label
                    htmlFor={option.id}
                    className="text-base cursor-pointer"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Localização */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-3">Localização</h3>
            <div className="space-y-3">
              <Input
                placeholder="Pesquisar Cidade"
                value={locationInput}
                onChange={(e) => setLocationInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleAddLocation()}
              />
              {filters.locations.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {filters.locations.map((location) => (
                    <Button
                      key={location}
                      variant="secondary"
                      size="sm"
                      onClick={() => handleRemoveLocation(location)}
                      className="gap-2"
                    >
                      <X className="w-3 h-3" />
                      {location}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Salário */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-lg font-bold text-primary">Salário</h3>
              <Checkbox id="salary-toggle" />
            </div>
            <div className="space-y-4">
              <Slider
                value={filters.salaryRange}
                onValueChange={(value) =>
                  setFilters((prev) => ({
                    ...prev,
                    salaryRange: value as [number, number],
                  }))
                }
                min={700}
                max={10000}
                step={50}
                className="w-full"
              />
              <div className="flex justify-between text-sm font-medium">
                <span>R${filters.salaryRange[0].toFixed(2)}</span>
                <span>R${filters.salaryRange[1].toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <Button
            onClick={handleClearFilters}
            className="flex-1 border-2 font-semibold"
          >
            Limpar Filtros
          </Button>
          <Button onClick={handleApply} className="flex-1 font-semibold">
            Mostrar Resultados
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
