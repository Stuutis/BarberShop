import { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; // Corrija a importação

export const useSchedule = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedProfessional, setSelectedProfessional] = useState<
    string | null
  >("Profissional1");
  const [selectedPeriod, setSelectedPeriod] = useState<string>("Manhã");
  const [selectedTime, setSelectedTime] = useState<string>("");

  const handleSelectService = (service: string) => {
    setSelectedService(service);
  };

  const handleSelectProfessional = (professional: string) => {
    setSelectedProfessional(professional);
  };

  const handleDeselectService = () => {
    setSelectedService(null);
    setSelectedProfessional(null);
    setSelectedPeriod("Manhã");
    setSelectedTime("");
  };

  const handlePeriodSelect = (period: string) => {
    setSelectedPeriod(period);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const times: { [key: string]: string[] } = {
    Manhã: ["9:00", "9:30", "10:00", "10:30", "11:00"],
    Tarde: ["12:00", "12:30", "13:00", "13:30", "14:00"],
    Noite: ["15:00", "15:30", "16:00", "16:30", "17:00"],
  };

  const getTimesForSelectedPeriod = () => {
    return times[selectedPeriod] || [];
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Usuário não autenticado");
      return;
    }

    const decodedToken: { userId: string } = jwtDecode(token);
    const userId = decodedToken.userId;

    const bookingData = {
      service: selectedService,
      professional: selectedProfessional,
      period: selectedPeriod,
      time: selectedTime,
    };
    console.log("Dados de agendamento:", bookingData);
    try {
      const response = await axios.post(
        "http://localhost:3333/bookings",
        bookingData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-user-id": userId,
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Resposta do servidor:", response.data);
      // alert("Agendamento confirmado");
      // handleDeselectService();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Erro ao criar agendamento:",
          error.response ? error.response.data : error.message
        );
      } else {
        console.error("Erro desconhecido ao criar agendamento:", error);
      }
    }
  };

  return {
    selectedService,
    selectedProfessional,
    selectedPeriod,
    selectedTime,
    handleSelectService,
    handleDeselectService,
    handleSelectProfessional,
    handlePeriodSelect,
    handleTimeSelect,
    getTimesForSelectedPeriod,
    handleSubmit,
  };
};
