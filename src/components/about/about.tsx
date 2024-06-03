import { AgendarButton } from "../agendar-button";

export function About() {
  return (
    <section className="max-w-[80vw] m-auto py-10 " id="about">
      <div className="flex flex-col gap-5">
        <p className="text-center">
          Bem-vindo à Barbearia Cortes & Estilos, onde tradição e modernidade se
          encontram para criar um visual impecável. Nossos mestres barbeiros
          oferecem cortes de cabelo, barbas bem cuidadas e tratamentos de
          barbearia de luxo, tudo em um ambiente descontraído e acolhedor.
          Agende sua consulta hoje mesmo e descubra por que somos a escolha
          preferida dos homens que valorizam qualidade, estilo e tradição.
        </p>
        <AgendarButton />
      </div>
    </section>
  );
}
