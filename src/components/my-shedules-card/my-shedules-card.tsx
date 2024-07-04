interface MyScheduleCardProps {
  name: string;
  professionalName: string;
  service: string;
  time: string;
}

export function MySchedulesCard({
  name,
  professionalName,
  service,
  time,
}: MyScheduleCardProps) {
  return (
    <div>
      <div className="bg-secondary-custom my-2 p-4 rounded-xl">
        <p>{name}</p>
        <p>{professionalName}</p>
        <p>{service}</p>
        <p>{time}</p>
      </div>
      <div className="flex gap-2 pl-2">
        <button className="cursor-pointer text-yellow-400 hover:text-yellow-200">
          Editar
        </button>
        <button className="cursor-pointer text-red-500 hover:text-red-400">
          Cancelar Agendamento
        </button>
      </div>
    </div>
  );
}
