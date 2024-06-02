import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";

export function ServicesCarousel() {
  return (
    <div className="max-w-[80vw] m-auto pb-10" id="services">
      <Swiper
        loop
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
      >
        <SwiperSlide className="bg-secondary-custom h-96 rounded-lg flex flex-col justify-center items-center text-center ">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="bg-secondary-custom h-96 rounded-lg flex flex-col justify-center items-center text-center">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="bg-secondary-custom h-96 rounded-lg flex flex-col justify-center items-center text-center">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="bg-secondary-custom h-96 rounded-lg flex flex-col justify-center items-center text-center">
          Slide 4
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
