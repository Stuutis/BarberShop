interface DayContainerProps {
  weekDay: string;
  day: string;
}

export function DayContainer({ weekDay, day }: DayContainerProps) {
  return (
    <div className="bg-primary-custom mb-5 max-w-[20vw] text-center px-2 py-3 rounded-xl my-5 hover:bg-section-custom  cursor-pointer">
      <p>{day}</p>
      <p>{weekDay}</p>
    </div>
  );
}
