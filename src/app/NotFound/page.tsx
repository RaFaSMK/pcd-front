"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname
    );
  }, [pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <p className="text-xl text-muted-foreground">
          Oops! Página não encontrada
        </p>
        <Button asChild size="lg" className="mt-6">
          <Link href="/">
            <Home className="w-5 h-5" />
            Voltar para Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
