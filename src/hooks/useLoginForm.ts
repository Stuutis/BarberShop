import axios from "axios";
import { useState } from "react";

export const useLoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3333/login", {
        email,
        password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      setError(null);
      alert("Login realizado com sucesso!");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setError(error.response.data.error || "Erro ao fazer login");
        alert(email);
      } else {
        setError("Erro ao fazer login");
      }
    }
  };

  return {
    email,
    password,
    error,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  };
};
