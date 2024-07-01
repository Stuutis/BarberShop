import { CircleArrowLeft } from "lucide-react";
import { ScheduleCarousel } from "../carousel/schedule-carousel";
import { Info } from "lucide-react";
import { PeriodContainer } from "../time/period-container";
import { TimeContainer } from "../time/time-container";
import { useSchedule } from "../../hooks/useSchedule";

interface ScheduleProps {
  selectedService: string | null;
  selectedProfessional: string | null;
  selectedPeriod: string;
  onPeriodSelect: (period: string) => void;
  onSelectProfessional: (professional: string) => void;
  onTimeSelect: (time: string) => void;
  times: string[];
  onClose: () => void;
}

export function Schedule({
  selectedService,
  selectedProfessional,
  selectedPeriod,
  onClose,
  onPeriodSelect,
  onSelectProfessional,
  onTimeSelect,
  times,
}: ScheduleProps) {
  const { handleSubmit } = useSchedule();

  // const times = getTimesForSelectedPeriod();

  return (
    <div className=" absolute top-0 h-screen w-screen bg-bg-custom z-20">
      <form className="max-w-[90vw] m-auto" onSubmit={handleSubmit}>
        <div className="flex gap-11 mb-10 mt-5 items-center">
          <CircleArrowLeft onClickCapture={onClose} className="size-10" />
          <h2 className="text-2xl">Agendar serviço</h2>
        </div>
        <p className="text-left text-md">
          Serviço Selecionado:{" "}
          <span className="text-yellow-500 font-bold">{selectedService}</span>
        </p>
        <div className="mt-4 flex flex-col gap-2">
          <p>Selecione o profissional:</p>
          <select
            onChange={(e) => onSelectProfessional(e.target.value)}
            name=""
            id=""
            className="w-full text-black p-2 rounded-xl"
            required
          >
            <option value="Profissional1">Profissional 1</option>
            <option value="Profissional2">Profissional 2</option>
            <option value="Profissional3">Profissional 3</option>
          </select>
        </div>
        <div className="my-5">
          <p>Escolha o melhor dia</p>
          <ScheduleCarousel />
        </div>
        <div>
          <p>Escolha o melhor horário</p>
          <div className="bg-section-custom p-2 rounded-lg flex gap-2 my-3 items-center">
            <Info className="size-16" />
            <p className=" text-sm">
              Os agendamentos devem ser realizados com pelo menos 30 minutos de
              antecedência.
            </p>
          </div>
        </div>
        <div className="flex gap-3 justify-evenly mt-5 mb-7">
          <PeriodContainer
            period="Manhã"
            onClick={() => onPeriodSelect("Manhã")}
          />
          <PeriodContainer
            period="Tarde"
            onClick={() => onPeriodSelect("Tarde")}
          />
          <PeriodContainer
            period="Noite"
            onClick={() => onPeriodSelect("Noite")}
          />
        </div>
        <div className="grid grid-cols-3 gap-3 justify-evenly mb-3">
          {times.map((time, index) => (
            <TimeContainer
              key={index}
              time={time}
              onClick={() => onTimeSelect(time)}
            />
          ))}
        </div>
        <div className="flex items-center justify-center mt-5">
          <input
            type="submit"
            value="Confirmar Agendamento"
            className="bg-primary-custom px-4 py-2 rounded-3xl hover:bg-secondary-custom cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
}
