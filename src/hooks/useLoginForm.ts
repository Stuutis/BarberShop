import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/userContext";

export const useLoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isPasswordShow, setIsPasswordShow] = useState<boolean>(false);
  const navigate = useNavigate();
  const { setUserName, setIsLoggedIn } = useUser();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleShowPassword = () => {
    setIsPasswordShow(true);
  };
  const handleHidePassword = () => {
    setIsPasswordShow(false);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3333/login", {
        email,
        password,
      });
      const { token } = response.data;
      localStorage.setItem("token", token);

      const userInfoResponse = await axios.get(
        "http://localhost:3333/user-info",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { userName } = userInfoResponse.data;
      localStorage.setItem("userName", userName);
      setUserName(userName);
      setIsLoggedIn(true);

      setError(null);
      navigate("/Agendamento");
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
    isPasswordShow,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    handleShowPassword,
    handleHidePassword,
  };
};
