import { useState } from "react";
import logo from "../../assets/pictures/logo.jpeg";
import { RegisterModal } from "../registerModal/register-modal";

export function LoginForm() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center pt-10">
      <img
        className="rounded-2xl size-32 mb-20 sm:size-48 lg:size-10 lg:mb-0 lg:mx-6"
        src={logo}
        alt=""
      />
      <div className="bg-section-custom w-screen h-[500px] rounded-ss-[70px] pt-5 pb-10 flex flex-col items-center ">
        <form action="" className=" flex flex-col items-center ">
          <h1 className="text-2xl my-5">Login</h1>
          <div className="flex flex-col gap-2 max-w-[80vw] w-full m-auto">
            <span>Email</span>
            <input
              className="p-2 rounded-ss-xl text-black"
              type="email"
              placeholder="johndoe@gmail.com"
              required
            />
            <span>Senha</span>
            <input
              className="p-2 rounded-ss-xl text-black"
              type="password"
              placeholder="Digite sua senha"
              required
            />
            <div className=" m-auto py-4">
              <input
                className="px-10 py-2 rounded-xl text-white bg-primary-custom"
                type="submit"
                value="Login"
              />
            </div>
          </div>
        </form>
        <button className="mt-20 hover:text-black" onClick={handleOpenModal}>
          Ainda não possui conta? Cadastre-se
        </button>
        <RegisterModal show={showModal} handleClose={handleCloseModal} />
      </div>
    </div>
  );
}
