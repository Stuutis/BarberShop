import { MySchedulesCard } from "../components/my-shedules-card/my-shedules-card";
import { Navigation } from "../components/navigation/navigation";

export function Schedules() {
  return (
    <div className="bg-bg-custom h-screen">
      <Navigation />
      <div className="max-w-[80vw] mx-auto my-4">
        <div className="text-text-custom">
          <h1>Meus agendamentos:</h1>
          <MySchedulesCard
            name={"Christian teste"}
            professionalName={"O brabo"}
            service={"Barba"}
            time={"29:30"}
          />
          <MySchedulesCard
            name={"Christian teste"}
            professionalName={"O brabo"}
            service={"Barba"}
            time={"29:30"}
          />
        </div>
      </div>
    </div>
  );
}
