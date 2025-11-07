import { LoginForm } from "@/components/auth/LoginForm";

const LoginDev = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <LoginForm userType="admin" />
      </div>
    </div>
  );
};

export default LoginDev;
