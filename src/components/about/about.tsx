import { AgendarButton } from "../agendar-button";
import logo from "../../assets/pictures/logo.jpeg";

export function About() {
  return (
    <section
      className="max-w-[80vw] m-auto py-10 xl:max-w-[70vw] 2xl:max-w-[50vw]"
      id="about"
    >
      <div className="flex flex-col gap-5 justify-center items-center sm:flex-row sm:items-start">
        <img
          className="rounded-2xl size-40 sm:size-48 lg:size-60"
          src={logo}
          alt=""
        />
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-center md:text-lg">
            Bem-vindo à Barbearia Cortes & Estilos, onde tradição e modernidade
            se encontram para criar um visual impecável. Nossos mestres
            barbeiros oferecem cortes de cabelo, barbas bem cuidadas e
            tratamentos de barbearia de luxo, tudo em um ambiente descontraído e
            acolhedor. Agende sua consulta hoje mesmo e descubra por que somos a
            escolha preferida dos homens que valorizam qualidade, estilo e
            tradição.
          </p>
          <AgendarButton />
        </div>
      </div>
    </section>
  );
}
