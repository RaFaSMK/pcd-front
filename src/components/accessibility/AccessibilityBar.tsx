"use client"; // Marca este como um Client Component

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Circle, Volume2 } from "lucide-react";

export const AccessibilityBar = () => {
  // Inicializa o estado com valores padrão (ex: 100 e false).
  // Lê o localStorage de forma preguiçosa no inicializador do useState para evitar setState em efeito.
  const [fontSize, setFontSize] = useState<number>(() => {
    try {
      if (typeof window === "undefined") return 100;
      const saved = localStorage.getItem("fontSize");
      return saved ? parseInt(saved) : 100;
    } catch {
      return 100;
    }
  });

  const [highContrast, setHighContrast] = useState<boolean>(() => {
    try {
      if (typeof window === "undefined") return false;
      const saved = localStorage.getItem("highContrast");
      return saved ? saved === "true" : false;
    } catch {
      return false;
    }
  });

  // Este useEffect aplica o tamanho da fonte e salva no localStorage
  // sempre que o estado 'fontSize' mudar.
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
    localStorage.setItem("fontSize", fontSize.toString());
  }, [fontSize]);

  // Este useEffect aplica o alto contraste e salva no localStorage
  // sempre que o estado 'highContrast' mudar.
  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }
    localStorage.setItem("highContrast", highContrast.toString());
  }, [highContrast]);

  const increaseFontSize = () => {
    if (fontSize < 150) {
      setFontSize(fontSize + 10);
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 80) {
      setFontSize(fontSize - 10);
    }
  };

  const toggleContrast = () => {
    setHighContrast(!highContrast);
  };

  return (
    <div className="bg-primary text-primary-foreground py-2 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <span className="text-sm font-medium">Acessibilidade:</span>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={decreaseFontSize}
            className="text-primary-foreground hover:bg-primary-hover h-8 gap-1"
            aria-label="Diminuir tamanho da fonte"
          >
            <Minus className="w-4 h-4" />
            <span className="text-xs font-bold">A-</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={increaseFontSize}
            className="text-primary-foreground hover:bg-primary-hover h-8 gap-1"
            aria-label="Aumentar tamanho da fonte"
          >
            <Plus className="w-4 h-4" />
            <span className="text-sm font-bold">A+</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={toggleContrast}
            className="text-primary-foreground hover:bg-primary-hover h-8 gap-1"
            aria-label="Alternar alto contraste"
          >
            <Circle
              className={`w-4 h-4 ${highContrast ? "fill-current" : ""}`}
            />
            <span className="text-xs">Contraste</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="text-primary-foreground hover:bg-primary-hover h-8 gap-1"
            aria-label="Ativar leitor de tela"
          >
            <Volume2 className="w-4 h-4" />
            <span className="text-xs">Áudio</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
