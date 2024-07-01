import bigode from "../../assets/pictures/bigode.png";
import razor from "../../assets/pictures/razor.png";
import barber from "../../assets/pictures/barbershop.png";
import { Service } from "./service";

interface SelectServiceProps {
  onSelectService: (service: string) => void;
}

export function SelectService({ onSelectService }: SelectServiceProps) {
  return (
    <div className="max-w-[90vw] m-auto">
      <h1 className="text-center mt-10 text-2xl">
        Selecione o Serviço para Agendar
      </h1>

      <div className="grid gap-4 grid-cols-2 max-w-[90vw] mx-auto mt-10 pb-32">
        <Service
          className="bg-primary-custom hover:bg-secondary-custom rounded-3xl py-6"
          imageSrc={barber}
          altText={""}
          serviceText="Corte de cabelo e barba"
          onClick={() => onSelectService("Corte de cabelo e barba")}
        />
        <Service
          className="bg-primary-custom hover:bg-secondary-custom rounded-3xl py-6"
          imageSrc={razor}
          altText={""}
          serviceText="Corte de cabelo"
          onClick={() => onSelectService("Corte de cabelo")}
        />
        <Service
          className="bg-primary-custom hover:bg-secondary-custom rounded-3xl py-6 px-2"
          imageSrc={bigode}
          altText={""}
          serviceText="Corte de barba"
          onClick={() => onSelectService("Corte de barba")}
        />
      </div>
    </div>
  );
}
