"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Circle, Volume2, Sun, Moon } from "lucide-react";

export const AccessibilityBar = () => {
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

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    try {
      if (typeof window === "undefined") return "light";
      const saved = localStorage.getItem("theme");
      return (saved as "light" | "dark") || "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
    localStorage.setItem("fontSize", fontSize.toString());
  }, [fontSize]);

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }
    localStorage.setItem("highContrast", highContrast.toString());
  }, [highContrast]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

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

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="bg-[#1a1f35] dark:bg-[#0f1729] text-white py-3 px-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <span className="text-sm font-semibold">Acessibilidade:</span>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={decreaseFontSize}
            className="text-white hover:bg-white/10 hover:text-white h-9 gap-1.5 px-3"
            aria-label="Diminuir tamanho da fonte"
          >
            <Minus className="w-4 h-4" />
            <span className="text-sm font-bold">A-</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={increaseFontSize}
            className="text-white hover:bg-white/10 hover:text-white h-9 gap-1.5 px-3"
            aria-label="Aumentar tamanho da fonte"
          >
            <Plus className="w-4 h-4" />
            <span className="text-sm font-bold">A+</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={toggleContrast}
            className="text-white hover:bg-white/10 hover:text-white h-9 gap-1.5 px-3"
            aria-label="Alternar alto contraste"
          >
            <Circle
              className={`w-4 h-4 ${highContrast ? "fill-current" : ""}`}
            />
            <span className="text-sm">Contraste</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="text-white hover:bg-white/10 hover:text-white h-9 gap-1.5 px-3"
            aria-label={
              theme === "light" ? "Ativar tema escuro" : "Ativar tema claro"
            }
          >
            {theme === "light" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
            <span className="text-sm">Tema</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/10 hover:text-white h-9 gap-1.5 px-3"
            aria-label="Ativar leitor de tela"
          >
            <Volume2 className="w-4 h-4" />
            <span className="text-sm">Áudio</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
