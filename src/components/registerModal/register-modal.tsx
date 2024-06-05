import { useState } from "react";
import { EyeOff, EyeOn } from "../../assets/svg/svgs";
import backArrow from "../../assets/pictures/icons8-back-arrow-64.png";

interface RegisterModalProps {
  show: boolean;
  handleClose: () => void;
}

export function RegisterModal({ show, handleClose }: RegisterModalProps) {
  if (!show) {
    return null;
  }

  const [isPasswordShow, setIsPasswordShow] = useState<boolean>(false);

  const handleShowPassword = () => {
    setIsPasswordShow(true);
  };
  const handleHidePassword = () => {
    setIsPasswordShow(false);
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
        action=""
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
          />
          <span>Ultimo Nome</span>
          <input
            className="p-2 rounded-ss-xl text-black mb-5"
            type="text"
            required
            placeholder="Doe"
            id="lastName"
          />
          <span>Email</span>
          <input
            className="p-2 rounded-ss-xl text-black mb-5"
            type="email"
            name="emailRegister"
            id="emailRegister"
            placeholder="johndoe@email.com"
            required
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
