import { useState } from "react";
import axios from "axios";
import { EyeOff, EyeOn } from "../../assets/svg/svgs";
import backArrow from "../../assets/pictures/icons8-back-arrow-64.png";

interface RegisterModalProps {
  show: boolean;
  handleClose: () => void;
}

export function RegisterModal({ show, handleClose }: RegisterModalProps) {
  const [isPasswordShow, setIsPasswordShow] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  if (!show) {
    return null;
  }

  const handleShowPassword = () => {
    setIsPasswordShow(true);
  };
  const handleHidePassword = () => {
    setIsPasswordShow(false);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("As senhas não coincidem");
      return;
    }

    try {
      await axios.post("http://localhost:3333/users", {
        firstName,
        lastName,
        email,
        password,
      });
      alert("Usuário criado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      alert("Erro ao criar usuário. Tente novamente.");
      console.log("Dados:", firstName, lastName, email, password);
    }
  };

  return (
    <div className="h-screen w-screen bg-bg-custom absolute top-0 z-20 pt-10 flex flex-col justify-between">
      <div className="flex items-center justify-center relative mt-2.5">
        <button onClick={handleClose}>
          <img
            className="size-10 ml-4 absolute left-0 top-0"
            src={backArrow}
            alt="Botão para voltar para fechar o modal de registro"
          />
        </button>
        <h1 className="text-3xl">Cadastre-se</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col gap-2 mt-20 bg-section-custom pb-20 pt-12 rounded-ss-[70px]"
      >
        <div className="flex flex-col w-[80vw] m-auto">
          <span>Primeiro Nome</span>
          <input
            className="p-2 rounded-ss-xl text-black mb-5"
            type="text"
            required
            placeholder="John"
            id="firstName"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <span>Ultimo Nome</span>
          <input
            className="p-2 rounded-ss-xl text-black mb-5"
            type="text"
            required
            placeholder="Doe"
            id="lastName"
            onChange={(e) => setLastName(e.target.value)}
          />
          <span>Email</span>
          <input
            className="p-2 rounded-ss-xl text-black mb-5"
            type="email"
            name="emailRegister"
            id="emailRegister"
            placeholder="johndoe@email.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>Senha</span>
          <div className="relative">
            <input
              className="p-2 rounded-ss-xl text-black mb-5 w-full"
              type="password"
              name="passwordRegister"
              id="passwordRegister"
              placeholder="******"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              onClick={handleShowPassword}
              className={isPasswordShow ? "hidden" : "absolute right-2 top-2.5"}
            >
              <EyeOn />
            </div>
            <div
              onClick={handleHidePassword}
              className={isPasswordShow ? "absolute right-2 top-2" : "hidden"}
            >
              <EyeOff />
            </div>
          </div>
          <span>Confirme sua senha</span>
          <input
            className="p-2 rounded-ss-xl text-black mb-10"
            type="password"
            name="passwordRegisterConfirm"
            id="passwordRegisterConfirm"
            placeholder="******"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <input
            className="px-10 py-2 rounded-xl text-white bg-primary-custom"
            type="submit"
            value="Cadastrar"
            id="registerButton"
          />
        </div>
      </form>
    </div>
  );
}
