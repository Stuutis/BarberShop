import { LoginForm } from "../components/login-form/login-form";
import { Navigation } from "../components/navigation/navigation";

export function Login() {
  return (
    <div className="bg-bg-custom text-text-custom h-screen flex flex-col justify-between">
      <Navigation />
      <LoginForm />
    </div>
  );
}
