import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar } from "swiper/modules";
import { DayContainer } from "../time/day-container";

const getWeekDayName = (date: Date): string => {
  const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  return days[date.getDay()];
};

const getNextSevenDays = (): { day: string; weekDay: string }[] => {
  const daysArray = [];
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const nextDay = new Date();
    nextDay.setDate(today.getDate() + i);

    daysArray.push({
      day: nextDay.getDate().toString(),
      weekDay: getWeekDayName(nextDay),
    });
  }
  return daysArray;
};

export function ScheduleCarousel() {
  const nextSevenDays = getNextSevenDays();

  return (
    <Swiper
      scrollbar={{ enabled: true }}
      modules={[Scrollbar]}
      slidesPerView={3.6}
      spaceBetween={10}
    >
      {nextSevenDays.map((date, index) => (
        <SwiperSlide key={index}>
          <DayContainer day={date.day} weekDay={date.weekDay} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
