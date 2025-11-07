import { UserPen, HelpCircle, LogOut } from "lucide-react";
import { AccessibilityBar } from "@/components/accessibility/AccessibilityBar";
import { Header } from "@/components/layout/Header";
import { ProfileOption } from "@/components/profile/ProfileOption";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Profile = () => {
  const user = {
    name: "Milena Campos",
    joinedYear: 2025,
    photoUrl: "/placeholder.svg",
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AccessibilityBar />
      <Header variant="candidate" />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-primary mb-12">
          PERFIL
        </h1>

        <div className="max-w-2xl mx-auto space-y-8">
          {/* Profile Header */}
          <div className="text-center">
            <Avatar className="w-32 h-32 mx-auto mb-4">
              <AvatarImage src={user.photoUrl} alt={user.name} />
              <AvatarFallback className="bg-primary text-primary-foreground text-3xl font-bold">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold text-foreground mb-1">
              {user.name}
            </h2>
            <p className="text-muted-foreground">Entrou em {user.joinedYear}</p>
          </div>

          {/* Profile Options */}
          <div className="space-y-4">
            <ProfileOption
              icon={UserPen}
              title="Editar Dados"
              description="Altere suas informações pessoais"
              onClick={() => console.log("Edit profile")}
            />

            <ProfileOption
              icon={HelpCircle}
              title="Ajuda"
              description="Entre em contato conosco"
              onClick={() => console.log("Help")}
            />
          </div>

          {/* Logout Button */}
          <Button
            variant="default"
            size="lg"
            className="w-full max-w-md mx-auto block h-14 text-base font-semibold"
            onClick={() => console.log("Logout")}
          >
            <LogOut className="w-5 h-5 mr-2" />
            Sair da conta
          </Button>

          {/* Version */}
          <p className="text-center text-sm text-muted-foreground">V.1.0.0</p>
        </div>
      </main>
    </div>
  );
};

export default Profile;
