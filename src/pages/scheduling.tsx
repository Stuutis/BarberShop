import { Navigation } from "../components/navigation/navigation";
import { Schedule } from "../components/schedule.tsx/schedule";
import { SelectService } from "../components/select-service/select-service";
import { useSchedule } from "../hooks/useSchedule";

export function Scheduling() {
  const {
    selectedPeriod,
    selectedService,
    selectedProfessional,
    selectedTime,
    handleSubmit,
    handleSelectService,
    handleDeselectService,
    handleSelectProfessional,
    getTimesForSelectedPeriod,
    handlePeriodSelect,
    handleTimeSelect,
  } = useSchedule();
  return (
    <div className="bg-bg-custom text-text-custom">
      <Navigation />
      <SelectService onSelectService={handleSelectService} />
      {selectedService ? (
        <Schedule
          onSelectProfessional={handleSelectProfessional}
          onTimeSelect={handleTimeSelect}
          onPeriodSelect={handlePeriodSelect}
          onClose={handleDeselectService}
          selectedService={selectedService}
          selectedProfessional={selectedProfessional}
          selectedPeriod={selectedPeriod}
          times={getTimesForSelectedPeriod()}
        />
      ) : (
        ""
      )}
    </div>
  );
}
